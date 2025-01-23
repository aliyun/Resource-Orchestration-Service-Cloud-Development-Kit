import * as cxapi from "@alicloud/ros-cdk-cxapi";
import * as fs from "fs";
import * as path from "path";
import { Construct, IConstruct, ISynthesisSession } from "./construct-compat";
import { ROS_TOKEN_RESOLVER, RosTemplateLang } from "./private/template-lang";
import { LogicalIDs } from "./private/logical-id";
import { resolve } from "./private/resolve";
import { makeUniqueId } from "./private/uniqueid";
import { RosInfo } from "./ros-info";

const minimatch = require('minimatch');

const STACK_SYMBOL = Symbol.for("ros-cdk-core.Stack");
const MY_STACK_CACHE = Symbol.for("ros-cdk-core.Stack.myStack");

const VALID_STACK_NAME_REGEX = /^[A-Za-z][A-Za-z0-9-]*$/;

export interface RamRoles {
  /**
   * The RAM role ARN that grants FC function the required permissions.
   */
  readonly fcRole: IResolvable | string;
}

export interface StackProps {
  readonly version?: String;
  /**
   * A description of the stack.
   *
   * @default - No description.
   */
  readonly description?: string;

  /**
   * The ALIYUN environment (account/region) where this stack will be deployed.
   *
   * Set the `region`/`account` fields of `env` to either a concrete value to
   * select the indicated environment (recommended for production stacks), or to
   * the values of environment variables
   * `CDK_DEFAULT_REGION`/`CDK_DEFAULT_ACCOUNT` to let the target environment
   * depend on the ALIYUN credentials/configuration that the CDK CLI is executed
   * under (recommended for development stacks).
   *
   * If the `Stack` is instantiated inside a `Stage`, any undefined
   * `region`/`account` fields from `env` will default to the same field on the
   * encompassing `Stage`, if configured there.
   *
   * If either `region` or `account` are not set nor inherited from `Stage`, the
   * Stack will be considered "*environment-agnostic*"". Environment-agnostic
   * stacks can be deployed to any environment but may not be able to take
   * advantage of all features of the CDK.
   *
   * @example
   *
   * // Use a concrete account and region to deploy this stack to:
   * // `.account` and `.region` will simply return these values.
   * new Stack(app, 'Stack1', {
   *   env: {
   *     account: '123456789012',
   *     region: 'cn-hangzhou'
   *   },
   * });
   *
   * // Use the CLI's current credentials to determine the target environment:
   * // `.account` and `.region` will reflect the account+region the CLI
   * // is configured to use (based on the user CLI credentials)
   * new Stack(app, 'Stack2', {
   *   env: {
   *     account: process.env.CDK_DEFAULT_ACCOUNT,
   *     region: process.env.CDK_DEFAULT_REGION
   *   },
   * });
   *
   * // Define multiple stacks stage associated with an environment
   * const myStage = new Stage(app, 'MyStage', {
   *   env: {
   *     account: '123456789012',
   *     region: 'cn-hangzhou'
   *   }
   * });
   *
   * // both of these stacks will use the stage's account/region:
   * // `.account` and `.region` will resolve to the concrete values as above
   * new MyStack(myStage, 'Stack1');
   * new YourStack(myStage, 'Stack2');
   *
   * // Define an environment-agnostic stack:
   * // `.account` and `.region` will resolve to `{ "Ref": "ALIYUN::AccountId" }` and `{ "Ref": "ALIYUN::Region" }` respectively.
   * // which will only resolve to actual values by ROS during deployment.
   * new MyStack(app, 'Stack1');
   *
   * @default - The environment of the containing `Stage` if available,
   * otherwise create the stack will be environment-agnostic.
   *
   * @experimental
   */
  readonly env?: Environment;

  /**
   * Name to deploy the stack with
   *
   * @default - Derived from construct path.
   */
  readonly stackName?: string;

  /**
   * Stack tags that will be applied to all the taggable resources and the stack itself.
   *
   * @default {}
   */
  readonly tags?: { [key: string]: string };

  /**
   * Synthesis method to use while deploying this stack
   *
   * @default - `DefaultStackSynthesizer`
   */
  readonly synthesizer?: IStackSynthesizer;

  readonly metadata?: {[key: string]: any};

  readonly enableResourcePropertyConstraint?: boolean;
}

/**
 * A root construct which represents a single ROS stack.
 */
export class Stack extends Construct implements ITaggable {
  /**
   * Return whether the given object is a Stack.
   *
   * We do attribute detection since we can't reliably use 'instanceof'.
   */
  public static isStack(x: any): x is Stack {
    return x !== null && typeof x === "object" && STACK_SYMBOL in x;
  }

  /**
   * Looks up the first stack scope in which `construct` is defined. Fails if there is no stack up the tree.
   * @param construct The construct to start the search from.
   */
  public static of(construct: IConstruct): Stack {
    // we want this to be as cheap as possible.
    const cache = (construct as any)[MY_STACK_CACHE] as Stack | undefined;
    if (cache) {
      return cache;
    } else {
      const value = _lookup(construct);
      Object.defineProperty(construct, MY_STACK_CACHE, {
        enumerable: false,
        writable: false,
        configurable: false,
        value,
      });
      return value;
    }

    function _lookup(c: IConstruct): Stack {
      if (Stack.isStack(c)) {
        return c;
      }

      if (!c.node.scope) {
        throw new Error(
          `No stack could be identified for the construct at path ${construct.node.path}`
        );
      }

      return _lookup(c.node.scope);
    }
  }

  /**
   * Tags to be applied to the stack.
   */
  public readonly tags: TagManager;

  /**
   * The ALIYUN region into which this stack will be deployed (e.g. `cn-beijing`).
   *
   * This value is resolved according to the following rules:
   *
   * 1. The value provided to `env.region` when the stack is defined. This can
   *    either be a concrete region or the `ALIYUN.REGION` token.
   * 2. `ALIYUN.REGION`, which is represents the ROS intrinsic reference
   *    `{ "Ref": "ALIYUN::Region" }` encoded as a string token.
   *
   * Preferably, you should use the return value as an opaque string and not
   * attempt to parse it to implement your logic. If you do, you must first
   * check that it is a concrete value an not an unresolved token. If this
   * value is an unresolved token (`Token.isUnresolved(stack.region)` returns
   * `true`), this implies that the user wishes that this stack will synthesize
   * into a **region-agnostic template**. In this case, your code should either
   * fail (throw an error, emit a synth error using `Annotations.of(construct).addError()`) or
   * implement some other region-agnostic behavior.
   */
  public readonly region: string;

  /**
   * The ALIYUN account into which this stack will be deployed.
   *
   * This value is resolved according to the following rules:
   *
   * 1. The value provided to `env.account` when the stack is defined. This can
   *    either be a concrete account or the `ALIYUN.ACCOUNT_ID` token.
   * 2. `ALIYUN.ACCOUNT_ID`, which represents the ROS intrinsic reference
   *    `{ "Ref": "ALIYUN::AccountId" }` encoded as a string token.
   *
   * Preferably, you should use the return value as an opaque string and not
   * attempt to parse it to implement your logic. If you do, you must first
   * check that it is a concrete value an not an unresolved token. If this
   * value is an unresolved token (`Token.isUnresolved(stack.account)` returns
   * `true`), this implies that the user wishes that this stack will synthesize
   * into a **account-agnostic template**. In this case, your code should either
   * fail (throw an error, emit a synth error using `Annotations.of(construct).addError()`) or
   * implement some other region-agnostic behavior.
   */
  public readonly account: string;

  public roles?: RamRoles;

  /**
   * Options for ROS template (like version, description).
   */
  public readonly templateOptions: ITemplateOptions = {};

  /**
   * If this is a nested stack, this represents its `ALIYUN::ROS::Stack`
   * resource. `undefined` for top-level (non-nested) stacks.
   *
   * @experimental
   */
  public readonly nestedStackResource?: RosResource;

  /**
   * The name of the ROS template file emitted to the output
   * directory during synthesis.
   *
   * @example MyStack.template.json
   */
  public readonly templateFile: string;

  /**
   * The ID of the cloud assembly artifact for this stack.
   */
  public readonly artifactId: string;

  /**
   * Synthesis method for this stack
   *
   * @experimental
   */
  public readonly synthesizer: IStackSynthesizer;

  /**
   * Logical ID generation strategy
   */
  private readonly _logicalIds: LogicalIDs;

  /**
   * Other stacks this stack depends on
   */
  private readonly _stackDependencies: {
    [uniqueId: string]: StackDependency;
  } = {};

  private readonly _stackName: string;

  public readonly enableResourcePropertyConstraint: boolean;

  private readonly maxResources: number = 300;

  /**
   * Creates a new stack.
   *
   * @param scope Parent of this stack, usually a Program instance.
   * @param id The construct ID of this stack. If `stackName` is not explicitly
   * defined, this id (and any parent IDs) will be used to determine the
   * physical ID of the stack.
   * @param props Stack properties.
   */
  public constructor(scope?: Construct, id?: string, props: StackProps = {}) {
    // For unit test convenience parents are optional, so bypass the type check when calling the parent.
    super(scope!, id!);

    Object.defineProperty(this, STACK_SYMBOL, { value: true });

    this._logicalIds = new LogicalIDs();

    this.enableResourcePropertyConstraint =
      props.enableResourcePropertyConstraint === undefined ? true : false;

    if (props.description !== undefined) {
      // Max length 1024 bytes
      // Typically 2 bytes per character, may be more for more exotic characters
      if (props.description.length > 512) {
        throw new Error(
          `Stack description must be <= 1024 bytes. Received description: '${props.description}'`
        );
      }
      this.templateOptions.description = props.description;
    }

    if (props.metadata == undefined) {
      this.templateOptions.metadata = {'ALIYUN::ROS::Interface':{'TemplateTags':["Create by ROS CDK"]}};
    }

    this._stackName =
      props.stackName !== undefined
        ? props.stackName
        : this.generateStackName();
    this.tags = new TagManager(
      TagType.KEY_VALUE,
      "aliyun:ros:stack",
      props.tags
    );

    const { account, region } = this.parseEnvironment(props.env);

    this.account = account;
    this.region = region;

    if (!VALID_STACK_NAME_REGEX.test(this.stackName)) {
      throw new Error(
        `Stack name must match the regular expression: ${VALID_STACK_NAME_REGEX.toString()}, got '${
          this.stackName
        }'`
      );
    }

    // the preferred behavior is to generate a unique id for this stack and use
    // it as the artifact ID in the assembly. this allows multiple stacks to use
    // the same name. however, this behavior is breaking for 1.x so it's only
    // applied under a feature flag which is applied automatically for new
    // projects created using `cdk init`.
    //
    // Also use the new behavior if we are using the new CI/CD-ready synthesizer; that way
    // people only have to flip one flag.
    // tslint:disable-next-line: max-line-length
    this.artifactId =
      this.node.tryGetContext(cxapi.ENABLE_STACK_NAME_DUPLICATES_CONTEXT) ||
      this.node.tryGetContext(cxapi.NEW_STYLE_STACK_SYNTHESIS_CONTEXT)
        ? this.generateStackArtifactId()
        : this.stackName;

    this.templateFile = `${this.artifactId}.template.json`;

    const synthesizer = props.synthesizer ?? new DefaultStackSynthesizer();
    if (isReusableStackSynthesizer(synthesizer)) {
      // Produce a fresh instance for each stack (should have been the default behavior)
      this.synthesizer = synthesizer.reusableBind(this);
    } else {
      // Bind the single instance in-place to the current stack (backwards compat)
      this.synthesizer = synthesizer;
      this.synthesizer.bind(this);
    }
    new RosInfo(
      this,
      RosInfo.formatVersion,
      props.version ? props.version : RosInfo.v20150901
    );
  }

  /**
   * Resolve a tokenized value in the context of the current stack.
   */
  public resolve(obj: any): any {
    return resolve(obj, {
      scope: this,
      prefix: [],
      resolver: ROS_TOKEN_RESOLVER,
      preparing: false,
    });
  }

  /**
   * Determine the various stack environment attributes.
   *
   */
  private parseEnvironment(env: Environment = {}) {
    // if an environment property is explicitly specified when the stack is
    // created, it will be used. if not, use tokens for account and region.
    const containingAssembly = Stage.of(this);

    const account = env.account ?? containingAssembly?.account ?? RosPseudo.accountId;
    const region = env.region ?? containingAssembly?.region ?? RosPseudo.region;

    return {
      account,
      region
    };
  }

  /**
   * Convert an object, potentially containing tokens, to a JSON string
   */
  public toJsonString(obj: any, space?: number): string {
    return RosTemplateLang.toJSON(obj, space).toString();
  }

  /**
   * Rename a generated logical identities
   *
   * To modify the naming scheme strategy, extend the `Stack` class and
   * override the `allocateLogicalId` method.
   */
  public renameLogicalId(oldId: string, newId: string) {
    this._logicalIds.addRename(oldId, newId);
  }

  /**
   * Allocates a stack-unique logical identity for a
   * specific resource.
   *
   * This method is called when a `RosElement` is created and used to render the
   * initial logical identity of resources. Logical ID renames are applied at
   * this stage.
   *
   * This method uses the protected method `allocateLogicalId` to render the
   * logical ID for an element. To modify the naming scheme, extend the `Stack`
   * class and override this method.
   *
   * @param element The ROS element for which a logical identity is
   * needed.
   */
  public getLogicalId(element: RosElement): string {
    const logicalId = this.allocateLogicalId(element);
    return this._logicalIds.applyRename(logicalId);
  }

  /**
   * Add a dependency between this stack and another stack.
   *
   * This can be used to define dependencies between any two stacks within an
   * app, and also supports nested stacks.
   */
  public addDependency(target: Stack, reason?: string) {
    addDependency(this, target, reason);
  }

  /**
   * Return the stacks this stack depends on
   */
  public get dependencies(): Stack[] {
    return Object.values(this._stackDependencies).map((x) => x.stack);
  }

  /**
   * The concrete ROS physical stack name.
   *
   * This is either the name defined explicitly in the `stackName` prop or
   * allocated based on the stack's location in the construct tree. Stacks that
   * are directly defined under the app use their construct `id` as their stack
   * name. Stacks that are defined deeper within the tree will use a hashed naming
   * scheme based on the construct path to ensure uniqueness.
   *
   */
  public get stackName(): string {
    return this._stackName;
  }

  /**
   * The ID of the stack
   *
   */
  public get stackId(): string {
    return RosPseudo.stackId;
  }

  /**
   * Indicates if this is a nested stack, in which case `parentStack` will include a reference to it's parent.
   */
  public get nested(): boolean {
    return this.nestedStackResource !== undefined;
  }

  /**
   * If this is a nested stack, returns it's parent stack.
   */
  public get nestedStackParent() {
    return this.nestedStackResource && Stack.of(this.nestedStackResource);
  }

  /**
   * Returns the parent of a nested stack.
   *
   * @deprecated use `nestedStackParent`
   */
  public get parentStack() {
    return this.nestedStackParent;
  }

  /**
   * Called implicitly by the `addDependency` helper function in order to
   * realize a dependency between two top-level stacks at the assembly level.
   *
   * Use `stack.addDependency` to define the dependency between any two stacks,
   * and take into account nested stack relationships.
   *
   * @internal
   */
  public _addAssemblyDependency(target: Stack, reason?: string) {
    // defensive: we should never get here for nested stacks
    if (this.nested || target.nested) {
      throw new Error(
        "Cannot add assembly-level dependencies for nested stacks"
      );
    }

    reason = reason || "dependency added using stack.addDependency()";
    const cycle = target.stackDependencyReasons(this);
    if (cycle !== undefined) {
      // tslint:disable-next-line:max-line-length
      throw new Error(
        `'${target.node.path}' depends on '${this.node.path}' (${cycle.join(
          ", "
        )}). Adding this dependency (${reason}) would create a cyclic reference.`
      );
    }

    let dep = this._stackDependencies[target.node.uniqueId];
    if (!dep) {
      dep = this._stackDependencies[target.node.uniqueId] = {
        stack: target,
        reasons: [],
      };
    }

    dep.reasons.push(reason);

    if (process.env.CDK_DEBUG_DEPS) {
      // tslint:disable-next-line:no-console
      console.error(
        `[CDK_DEBUG_DEPS] stack "${this.node.path}" depends on "${target.node.path}" because: ${reason}`
      );
    }
  }

  /**
   * Returns the naming scheme used to allocate logical IDs. By default, uses
   * the `HashedAddressingScheme` but this method can be overridden to customize
   * this behavior.
   *
   * In order to make sure logical IDs are unique and stable, we hash the resource
   * construct tree path (i.e. toplevel/secondlevel/.../myresource) and add it as
   * a suffix to the path components joined without a separator (ROS
   * IDs only allow alphanumeric characters).
   *
   * The result will be:
   *
   *   <path.join('')><md5(path.join('/')>
   *     "human"      "hash"
   *
   * If the "human" part of the ID exceeds 240 characters, we simply trim it so
   * the total ID doesn't exceed 255 character limit.
   *
   * We only take 8 characters from the md5 hash (0.000005 chance of collision).
   *
   * Special cases:
   *
   * - If the path only contains a single component (i.e. it's a top-level
   *   resource), we won't add the hash to it. The hash is not needed for
   *   disamiguation and also, it allows for a more straightforward migration an
   *   existing ROS template to a CDK stack without logical ID changes
   *   (or renames).
   * - For aesthetic reasons, if the last components of the path are the same
   *   (i.e. `L1/L2/Pipeline/Pipeline`), they will be de-duplicated to make the
   *   resulting human portion of the ID more pleasing: `L1L2Pipeline<HASH>`
   *   instead of `L1L2PipelinePipeline<HASH>`
   * - If a component is named "Default" it will be omitted from the path. This
   *   allows refactoring higher level abstractions around constructs without affecting
   *   the IDs of already deployed resources.
   * - If a component is named "Resource" it will be omitted from the user-visible
   *   path, but included in the hash. This reduces visual noise in the human readable
   *   part of the identifier.
   *
   * @param rosElement The element for which the logical ID is allocated.
   */
  protected allocateLogicalId(rosElement: RosElement): string {
    const scopes = rosElement.node.scopes;
    const stackIndex = scopes.indexOf(rosElement.stack);
    const pathComponents = scopes.slice(stackIndex + 1).map((x) => x.node.id);
    return makeUniqueId(pathComponents);
  }

  /**
   * Validate stack name
   *
   * ROS stack names can include dashes in addition to the regular identifier
   * character classes, and we don't allow one of the magic markers.
   *
   * @internal
   */
  protected _validateId(name: string) {
    if (name && !VALID_STACK_NAME_REGEX.test(name)) {
      throw new Error(
        `Stack name must match the regular expression: ${VALID_STACK_NAME_REGEX.toString()}, got '${name}'`
      );
    }
  }

  public synthesize(session: ISynthesisSession): void {
    // In principle, stack synthesis is delegated to the
    // StackSynthesis object.
    //
    // However, some parts of synthesis currently use some private
    // methods on Stack, and I don't really see the value in refactoring
    // this right now, so some parts still happen here.
    const builder = session.assembly;
    const template = this._toRosTemplate();

    // write the ROS template as a JSON file
    const outPath = path.join(builder.outdir, this.templateFile);
    const resources = template.Resources || {};
    const numberOfResources = Object.keys(resources).length;

    if (numberOfResources > this.maxResources) {
      const counts = Object.entries(count(Object.values(resources).map((r: any) => `${r?.Type}`))).map(([type, c]) => `${type} (${c})`).join(', ');
      throw new Error(`Number of resources in stack '${this.node.path}': ${numberOfResources} is greater than allowed maximum of ${this.maxResources}: ${counts}`);
    }

    const text = JSON.stringify(template, undefined, 2);
    fs.writeFileSync(outPath, text);

    // Delegate adding artifacts to the Synthesizer
    // this.synthesizer.synthesize(session);
  }

  /**
   * Returns the RosTemplate template for this stack by traversing
   * the tree and invoking _toRosTemplate() on all Entity objects.
   *
   * @internal
   */
  protected _toRosTemplate() {
    const template: any = {
      Description: this.templateOptions.description,
      Metadata: this.templateOptions.metadata,
    };

    const elements = rosElements(this);
    const fragments = elements.map((e) => this.resolve(e._toRosTemplate()));

    // merge in all ROS fragments collected from the tree
    for (const fragment of fragments) {
      merge(template, fragment);
    }

    // resolve all tokens and remove all empties
    const ret = this.resolve(template) || {};

    this._logicalIds.assertAllRenamesApplied();

    return ret;
  }

  /**
   * Deprecated.
   *
   * @returns reference itself without any change
   * @deprecated cross reference handling has been moved to `App.prepare()`.
   */
  protected prepareCrossReference(
    _sourceStack: Stack,
    reference: Reference
  ): IResolvable {
    return reference;
  }

  /**
   * Check whether this stack has a (transitive) dependency on another stack
   *
   * Returns the list of reasons on the dependency path, or undefined
   * if there is no dependency.
   */
  private stackDependencyReasons(other: Stack): string[] | undefined {
    if (this === other) {
      return [];
    }
    for (const dep of Object.values(this._stackDependencies)) {
      const ret = dep.stack.stackDependencyReasons(other);
      if (ret !== undefined) {
        return [...dep.reasons, ...ret];
      }
    }
    return undefined;
  }

  /**
   * Calculate the stack name based on the construct path
   *
   * The stack name is the name under which we'll deploy the stack,
   * and incorporates containing Stage names by default.
   *
   * Generally this looks a lot like how logical IDs are calculated.
   * The stack name is calculated based on the construct root path,
   * as follows:
   *
   * - Path is calculated with respect to containing App or Stage (if any)
   * - If the path is one component long just use that component, otherwise
   *   combine them with a hash.
   *
   * Since the hash is quite ugly and we'd like to avoid it if possible -- but
   * we can't anymore in the general case since it has been written into legacy
   * stacks. The introduction of Stages makes it possible to make this nicer however.
   * When a Stack is nested inside a Stage, we use the path components below the
   * Stage, and prefix the path components of the Stage before it.
   */
  private generateStackName() {
    const assembly = Stage.of(this);
    const prefix =
      assembly && assembly.stageName ? `${assembly.stageName}-` : "";
    return `${prefix}${this.generateStackId(assembly)}`;
  }

  /**
   * The artifact ID for this stack
   *
   * Stack artifact ID is unique within the App's Cloud Assembly.
   */
  private generateStackArtifactId() {
    return this.generateStackId(this.node.root);
  }

  /**
   * Generate an ID with respect to the given container construct.
   */
  private generateStackId(container: IConstruct | undefined) {
    const rootPath = rootPathTo(this, container);
    const ids = rootPath.map((c) => c.node.id);

    // In unit tests our Stack (which is the only component) may not have an
    // id, so in that case just pretend it's "Stack".
    if (ids.length === 1 && !ids[0]) {
      ids[0] = "Stack";
    }

    return makeStackName(ids);
  }

  /**
   * Indicates whether the stack requires bundling or not
   */
  public get bundlingRequired() {
    const bundlingStacks: string[] = this.node.tryGetContext(cxapi.BUNDLING_STACKS) ?? ['**'];

    return bundlingStacks.some(pattern => minimatch(
        this.node.path, // use the same value for pattern matching as the ALIYUN-cdk CLI (displayName / hierarchicalId)
        pattern,
    ));
  }

  /**
   * Splits the provided ARN into its components.
   * Works both if 'arn' is a string like 'acs:ram::123456789012****:role/RoleName',
   * and a Token representing a dynamic ROS expression
   * (in which case the returned components will also be dynamic ROS expressions,
   * encoded as Tokens).
   *
   * @param arn the ARN to split into its components
   * @param arnFormat the expected format of 'arn' - depends on what format the service 'arn' represents uses
   */
  public splitArn(arn: string | IResolvable, arnFormat: ArnFormat): ArnComponents {
    return Arn.split(arn, arnFormat);
  }
}

function merge(template: any, fragment: any): void {
  for (const section of Object.keys(fragment)) {
    const src = fragment[section];

    // create top-level section if it doesn't exist
    const dest = template[section];
    if (!dest) {
      template[section] = src;
    } else {
      template[section] = mergeSection(section, dest, src);
    }
  }
}

function mergeSection(section: string, val1: any, val2: any): any {
  switch (section) {
    case "Description":
      return `${val1}\n${val2}`;
    case "Resources":
    case "Conditions":
    case "Parameters":
    case "Outputs":
    case "Mappings":
    case "Rules":
      return mergeObjectsWithoutDuplicates(section, val1, val2);
    case "Metadata":
      return mergeMetadataObjectsWithoutDuplicates(val1, val2);
    default:
      throw new Error(
        `CDK doesn't know how to merge two instances of the ROS template section '${section}' - ` +
          "please remove one of them from your code"
      );
  }
}

function mergeMetadataObjectsWithoutDuplicates(
    dest: any,
    src: any
): any {
  if (typeof dest !== "object" && typeof src !== "object") {
    throw new Error(`Expecting Metadata Value to be an object`);
  }
  if (src.hasOwnProperty('ALIYUN::ROS::Interface')) {
    if (typeof src["ALIYUN::ROS::Interface"] == "object") {
      if (src["ALIYUN::ROS::Interface"].hasOwnProperty('TemplateTags')) {
        if (src["ALIYUN::ROS::Interface"] ["TemplateTags"] instanceof Array) {
          src["ALIYUN::ROS::Interface"] ["TemplateTags"].push("Create by ROS CDK")
          dest["ALIYUN::ROS::Interface"] = src["ALIYUN::ROS::Interface"]
        }
        else {
          throw new Error(`Expecting Metadata ALIYUN::ROS::Interface TemplateTags Value to be an Array`);
        }
      }
      else {
        dest["ALIYUN::ROS::Interface"] = src["ALIYUN::ROS::Interface"]
        dest["ALIYUN::ROS::Interface"].TemplateTags = ["Create by ROS CDK"]
      }
    }
    else {
      throw new Error(`Expecting Metadata ALIYUN::ROS::Interface Value to be an object`);
    }
  }
  else {
    dest["ALIYUN::ROS::Interface"] = { TemplateTags : ["Create by ROS CDK"]}
  }
  for (const id of Object.keys(src)) {
    if (id !== 'ALIYUN::ROS::Interface') {
      dest[id] = src[id];
    }
  }

  return dest;
}

function mergeObjectsWithoutDuplicates(
  section: string,
  dest: any,
  src: any
): any {
  if (typeof dest !== "object") {
    throw new Error(`Expecting '${JSON.stringify(dest)}' to be an object`);
  }
  if (typeof src !== "object") {
    throw new Error(`Expecting '${JSON.stringify(src)}' to be an object`);
  }

  // add all entities from source section to destination section
  for (const id of Object.keys(src)) {
    if (id in dest) {
      throw new Error(`section '${section}' already contains '${id}'`);
    }
    dest[id] = src[id];
  }

  return dest;
}

/**
 * ROS template options for a stack.
 */
export interface ITemplateOptions {
  /**
   * Gets or sets the description of this stack.
   * If provided, it will be included in the ROS template's "Description" attribute.
   */
  description?: string;

  /**
   * Metadata associated with the ROS template.
   */
  metadata?: { [key: string]: any };
}

/**
 * Collect all rosElements from a Stack.
 *
 * @param node Root node to collect all rosElements from
 * @param into Array to append rosElements to
 * @returns The same array as is being collected into
 */
function rosElements(node: IConstruct, into: RosElement[] = []): RosElement[] {
  if (RosElement.isRosElement(node)) {
    into.push(node);
  }

  for (const child of node.node.children) {
    // Don't recurse into a substack
    if (Stack.isStack(child)) {
      continue;
    }

    rosElements(child, into);
  }

  return into;
}

/**
 * Return the construct root path of the given construct relative to the given ancestor
 *
 * If no ancestor is given or the ancestor is not found, return the entire root path.
 */
export function rootPathTo(
  construct: IConstruct,
  ancestor?: IConstruct
): IConstruct[] {
  const scopes = construct.node.scopes;
  for (let i = scopes.length - 2; i >= 0; i--) {
    if (scopes[i] === ancestor) {
      return scopes.slice(i + 1);
    }
  }
  return scopes;
}

/**
 * makeUniqueId, specialized for Stack names
 *
 * Stack names may contain '-', so we allow that character if the stack name
 * has only one component. Otherwise we fall back to the regular "makeUniqueId"
 * behavior.
 */
function makeStackName(components: string[]) {
  if (components.length === 1) {
    return components[0];
  }
  return makeUniqueId(components);
}

// These imports have to be at the end to prevent circular imports
import { RosElement } from "./ros-element";
import { RosPseudo } from "./ros-pseudo";
import { RosResource } from "./ros-resource";
import { TagType } from "./tag-manager";
import { addDependency } from "./deps";
import { Reference } from "./reference";
import { IResolvable } from "./resolvable";
import {
  DefaultStackSynthesizer, isReusableStackSynthesizer,
  IStackSynthesizer,
} from "./stack-synthesizers";
import { Stage } from "./stage";
import { ITaggable, TagManager } from "./tag-manager";
import {Environment} from "./environment";
import {Arn, ArnFormat, ArnComponents} from "./arn";

interface StackDependency {
  stack: Stack;
  reasons: string[];
}

function count(xs: string[]): Record<string, number> {
  const ret: Record<string, number> = {};
  for (const x of xs) {
    if (x in ret) {
      ret[x] += 1;
    } else {
      ret[x] = 1;
    }
  }
  return ret;
}
