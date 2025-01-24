"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rootPathTo = exports.Stack = void 0;
const cxapi = require("@alicloud/ros-cdk-cxapi");
const fs = require("fs");
const path = require("path");
const construct_compat_1 = require("./construct-compat");
const template_lang_1 = require("./private/template-lang");
const logical_id_1 = require("./private/logical-id");
const resolve_1 = require("./private/resolve");
const uniqueid_1 = require("./private/uniqueid");
const ros_info_1 = require("./ros-info");
const minimatch = require('minimatch');
const STACK_SYMBOL = Symbol.for("ros-cdk-core.Stack");
const MY_STACK_CACHE = Symbol.for("ros-cdk-core.Stack.myStack");
const VALID_STACK_NAME_REGEX = /^[A-Za-z][A-Za-z0-9-]*$/;
/**
 * A root construct which represents a single ROS stack.
 */
class Stack extends construct_compat_1.Construct {
    /**
     * Creates a new stack.
     *
     * @param scope Parent of this stack, usually a Program instance.
     * @param id The construct ID of this stack. If `stackName` is not explicitly
     * defined, this id (and any parent IDs) will be used to determine the
     * physical ID of the stack.
     * @param props Stack properties.
     */
    constructor(scope, id, props = {}) {
        // For unit test convenience parents are optional, so bypass the type check when calling the parent.
        super(scope, id);
        /**
         * Options for ROS template (like version, description).
         */
        this.templateOptions = {};
        /**
         * Other stacks this stack depends on
         */
        this._stackDependencies = {};
        this.maxResources = 300;
        Object.defineProperty(this, STACK_SYMBOL, { value: true });
        this._logicalIds = new logical_id_1.LogicalIDs();
        this.enableResourcePropertyConstraint =
            props.enableResourcePropertyConstraint === undefined ? true : false;
        if (props.description !== undefined) {
            // Max length 1024 bytes
            // Typically 2 bytes per character, may be more for more exotic characters
            if (props.description.length > 512) {
                throw new Error(`Stack description must be <= 1024 bytes. Received description: '${props.description}'`);
            }
            this.templateOptions.description = props.description;
        }
        if (props.metadata == undefined) {
            this.templateOptions.metadata = { 'ALIYUN::ROS::Interface': { 'TemplateTags': ["Create by ROS CDK"] } };
        }
        this._stackName =
            props.stackName !== undefined
                ? props.stackName
                : this.generateStackName();
        this.tags = new tag_manager_2.TagManager(tag_manager_1.TagType.KEY_VALUE, "aliyun:ros:stack", props.tags);
        const { account, region } = this.parseEnvironment(props.env);
        this.account = account;
        this.region = region;
        if (!VALID_STACK_NAME_REGEX.test(this.stackName)) {
            throw new Error(`Stack name must match the regular expression: ${VALID_STACK_NAME_REGEX.toString()}, got '${this.stackName}'`);
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
        const synthesizer = props.synthesizer ?? new stack_synthesizers_1.DefaultStackSynthesizer();
        if (stack_synthesizers_1.isReusableStackSynthesizer(synthesizer)) {
            // Produce a fresh instance for each stack (should have been the default behavior)
            this.synthesizer = synthesizer.reusableBind(this);
        }
        else {
            // Bind the single instance in-place to the current stack (backwards compat)
            this.synthesizer = synthesizer;
            this.synthesizer.bind(this);
        }
        new ros_info_1.RosInfo(this, ros_info_1.RosInfo.formatVersion, props.version ? props.version : ros_info_1.RosInfo.v20150901);
    }
    /**
     * Return whether the given object is a Stack.
     *
     * We do attribute detection since we can't reliably use 'instanceof'.
     */
    static isStack(x) {
        return x !== null && typeof x === "object" && STACK_SYMBOL in x;
    }
    /**
     * Looks up the first stack scope in which `construct` is defined. Fails if there is no stack up the tree.
     * @param construct The construct to start the search from.
     */
    static of(construct) {
        // we want this to be as cheap as possible.
        const cache = construct[MY_STACK_CACHE];
        if (cache) {
            return cache;
        }
        else {
            const value = _lookup(construct);
            Object.defineProperty(construct, MY_STACK_CACHE, {
                enumerable: false,
                writable: false,
                configurable: false,
                value,
            });
            return value;
        }
        function _lookup(c) {
            if (Stack.isStack(c)) {
                return c;
            }
            if (!c.node.scope) {
                throw new Error(`No stack could be identified for the construct at path ${construct.node.path}`);
            }
            return _lookup(c.node.scope);
        }
    }
    /**
     * Resolve a tokenized value in the context of the current stack.
     */
    resolve(obj) {
        return resolve_1.resolve(obj, {
            scope: this,
            prefix: [],
            resolver: template_lang_1.ROS_TOKEN_RESOLVER,
            preparing: false,
        });
    }
    /**
     * Determine the various stack environment attributes.
     *
     */
    parseEnvironment(env = {}) {
        // if an environment property is explicitly specified when the stack is
        // created, it will be used. if not, use tokens for account and region.
        const containingAssembly = stage_1.Stage.of(this);
        const account = env.account ?? containingAssembly?.account ?? ros_pseudo_1.RosPseudo.accountId;
        const region = env.region ?? containingAssembly?.region ?? ros_pseudo_1.RosPseudo.region;
        return {
            account,
            region
        };
    }
    /**
     * Convert an object, potentially containing tokens, to a JSON string
     */
    toJsonString(obj, space) {
        return template_lang_1.RosTemplateLang.toJSON(obj, space).toString();
    }
    /**
     * Rename a generated logical identities
     *
     * To modify the naming scheme strategy, extend the `Stack` class and
     * override the `allocateLogicalId` method.
     */
    renameLogicalId(oldId, newId) {
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
    getLogicalId(element) {
        const logicalId = this.allocateLogicalId(element);
        return this._logicalIds.applyRename(logicalId);
    }
    /**
     * Add a dependency between this stack and another stack.
     *
     * This can be used to define dependencies between any two stacks within an
     * app, and also supports nested stacks.
     */
    addDependency(target, reason) {
        deps_1.addDependency(this, target, reason);
    }
    /**
     * Return the stacks this stack depends on
     */
    get dependencies() {
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
    get stackName() {
        return this._stackName;
    }
    /**
     * The ID of the stack
     *
     */
    get stackId() {
        return ros_pseudo_1.RosPseudo.stackId;
    }
    /**
     * Indicates if this is a nested stack, in which case `parentStack` will include a reference to it's parent.
     */
    get nested() {
        return this.nestedStackResource !== undefined;
    }
    /**
     * If this is a nested stack, returns it's parent stack.
     */
    get nestedStackParent() {
        return this.nestedStackResource && Stack.of(this.nestedStackResource);
    }
    /**
     * Returns the parent of a nested stack.
     *
     * @deprecated use `nestedStackParent`
     */
    get parentStack() {
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
    _addAssemblyDependency(target, reason) {
        // defensive: we should never get here for nested stacks
        if (this.nested || target.nested) {
            throw new Error("Cannot add assembly-level dependencies for nested stacks");
        }
        reason = reason || "dependency added using stack.addDependency()";
        const cycle = target.stackDependencyReasons(this);
        if (cycle !== undefined) {
            // tslint:disable-next-line:max-line-length
            throw new Error(`'${target.node.path}' depends on '${this.node.path}' (${cycle.join(", ")}). Adding this dependency (${reason}) would create a cyclic reference.`);
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
            console.error(`[CDK_DEBUG_DEPS] stack "${this.node.path}" depends on "${target.node.path}" because: ${reason}`);
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
    allocateLogicalId(rosElement) {
        const scopes = rosElement.node.scopes;
        const stackIndex = scopes.indexOf(rosElement.stack);
        const pathComponents = scopes.slice(stackIndex + 1).map((x) => x.node.id);
        return uniqueid_1.makeUniqueId(pathComponents);
    }
    /**
     * Validate stack name
     *
     * ROS stack names can include dashes in addition to the regular identifier
     * character classes, and we don't allow one of the magic markers.
     *
     * @internal
     */
    _validateId(name) {
        if (name && !VALID_STACK_NAME_REGEX.test(name)) {
            throw new Error(`Stack name must match the regular expression: ${VALID_STACK_NAME_REGEX.toString()}, got '${name}'`);
        }
    }
    synthesize(session) {
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
            const counts = Object.entries(count(Object.values(resources).map((r) => `${r?.Type}`))).map(([type, c]) => `${type} (${c})`).join(', ');
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
    _toRosTemplate() {
        const template = {
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
    prepareCrossReference(_sourceStack, reference) {
        return reference;
    }
    /**
     * Check whether this stack has a (transitive) dependency on another stack
     *
     * Returns the list of reasons on the dependency path, or undefined
     * if there is no dependency.
     */
    stackDependencyReasons(other) {
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
    generateStackName() {
        const assembly = stage_1.Stage.of(this);
        const prefix = assembly && assembly.stageName ? `${assembly.stageName}-` : "";
        return `${prefix}${this.generateStackId(assembly)}`;
    }
    /**
     * The artifact ID for this stack
     *
     * Stack artifact ID is unique within the App's Cloud Assembly.
     */
    generateStackArtifactId() {
        return this.generateStackId(this.node.root);
    }
    /**
     * Generate an ID with respect to the given container construct.
     */
    generateStackId(container) {
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
    get bundlingRequired() {
        const bundlingStacks = this.node.tryGetContext(cxapi.BUNDLING_STACKS) ?? ['**'];
        return bundlingStacks.some(pattern => minimatch(this.node.path, // use the same value for pattern matching as the ALIYUN-cdk CLI (displayName / hierarchicalId)
        pattern));
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
    splitArn(arn, arnFormat) {
        return arn_1.Arn.split(arn, arnFormat);
    }
}
exports.Stack = Stack;
function merge(template, fragment) {
    for (const section of Object.keys(fragment)) {
        const src = fragment[section];
        // create top-level section if it doesn't exist
        const dest = template[section];
        if (!dest) {
            template[section] = src;
        }
        else {
            template[section] = mergeSection(section, dest, src);
        }
    }
}
function mergeSection(section, val1, val2) {
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
            throw new Error(`CDK doesn't know how to merge two instances of the ROS template section '${section}' - ` +
                "please remove one of them from your code");
    }
}
function mergeMetadataObjectsWithoutDuplicates(dest, src) {
    if (typeof dest !== "object" && typeof src !== "object") {
        throw new Error(`Expecting Metadata Value to be an object`);
    }
    if (src.hasOwnProperty('ALIYUN::ROS::Interface')) {
        if (typeof src["ALIYUN::ROS::Interface"] == "object") {
            if (src["ALIYUN::ROS::Interface"].hasOwnProperty('TemplateTags')) {
                if (src["ALIYUN::ROS::Interface"]["TemplateTags"] instanceof Array) {
                    src["ALIYUN::ROS::Interface"]["TemplateTags"].push("Create by ROS CDK");
                    dest["ALIYUN::ROS::Interface"] = src["ALIYUN::ROS::Interface"];
                }
                else {
                    throw new Error(`Expecting Metadata ALIYUN::ROS::Interface TemplateTags Value to be an Array`);
                }
            }
            else {
                dest["ALIYUN::ROS::Interface"] = src["ALIYUN::ROS::Interface"];
                dest["ALIYUN::ROS::Interface"].TemplateTags = ["Create by ROS CDK"];
            }
        }
        else {
            throw new Error(`Expecting Metadata ALIYUN::ROS::Interface Value to be an object`);
        }
    }
    else {
        dest["ALIYUN::ROS::Interface"] = { TemplateTags: ["Create by ROS CDK"] };
    }
    for (const id of Object.keys(src)) {
        if (id !== 'ALIYUN::ROS::Interface') {
            dest[id] = src[id];
        }
    }
    return dest;
}
function mergeObjectsWithoutDuplicates(section, dest, src) {
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
 * Collect all rosElements from a Stack.
 *
 * @param node Root node to collect all rosElements from
 * @param into Array to append rosElements to
 * @returns The same array as is being collected into
 */
function rosElements(node, into = []) {
    if (ros_element_1.RosElement.isRosElement(node)) {
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
function rootPathTo(construct, ancestor) {
    const scopes = construct.node.scopes;
    for (let i = scopes.length - 2; i >= 0; i--) {
        if (scopes[i] === ancestor) {
            return scopes.slice(i + 1);
        }
    }
    return scopes;
}
exports.rootPathTo = rootPathTo;
/**
 * makeUniqueId, specialized for Stack names
 *
 * Stack names may contain '-', so we allow that character if the stack name
 * has only one component. Otherwise we fall back to the regular "makeUniqueId"
 * behavior.
 */
function makeStackName(components) {
    if (components.length === 1) {
        return components[0];
    }
    return uniqueid_1.makeUniqueId(components);
}
// These imports have to be at the end to prevent circular imports
const ros_element_1 = require("./ros-element");
const ros_pseudo_1 = require("./ros-pseudo");
const tag_manager_1 = require("./tag-manager");
const deps_1 = require("./deps");
const stack_synthesizers_1 = require("./stack-synthesizers");
const stage_1 = require("./stage");
const tag_manager_2 = require("./tag-manager");
const arn_1 = require("./arn");
function count(xs) {
    const ret = {};
    for (const x of xs) {
        if (x in ret) {
            ret[x] += 1;
        }
        else {
            ret[x] = 1;
        }
    }
    return ret;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdGFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxpREFBaUQ7QUFDakQseUJBQXlCO0FBQ3pCLDZCQUE2QjtBQUM3Qix5REFBOEU7QUFDOUUsMkRBQThFO0FBQzlFLHFEQUFrRDtBQUNsRCwrQ0FBNEM7QUFDNUMsaURBQWtEO0FBQ2xELHlDQUFxQztBQUVyQyxNQUFNLFNBQVMsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7QUFFdkMsTUFBTSxZQUFZLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBQ3RELE1BQU0sY0FBYyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLENBQUMsQ0FBQztBQUVoRSxNQUFNLHNCQUFzQixHQUFHLHlCQUF5QixDQUFDO0FBNkd6RDs7R0FFRztBQUNILE1BQWEsS0FBTSxTQUFRLDRCQUFTO0lBaUpsQzs7Ozs7Ozs7T0FRRztJQUNILFlBQW1CLEtBQWlCLEVBQUUsRUFBVyxFQUFFLFFBQW9CLEVBQUU7UUFDdkUsb0dBQW9HO1FBQ3BHLEtBQUssQ0FBQyxLQUFNLEVBQUUsRUFBRyxDQUFDLENBQUM7UUE5RHJCOztXQUVHO1FBQ2Esb0JBQWUsR0FBcUIsRUFBRSxDQUFDO1FBbUN2RDs7V0FFRztRQUNjLHVCQUFrQixHQUUvQixFQUFFLENBQUM7UUFNVSxpQkFBWSxHQUFXLEdBQUcsQ0FBQztRQWUxQyxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxZQUFZLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUUzRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksdUJBQVUsRUFBRSxDQUFDO1FBRXBDLElBQUksQ0FBQyxnQ0FBZ0M7WUFDbkMsS0FBSyxDQUFDLGdDQUFnQyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7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QUFDLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckMsS0FBSyxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQzNDLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLFFBQVEsRUFBRTtZQUMxQixPQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQzVCO0tBQ0Y7SUFDRCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDO0FBWEQsZ0NBV0M7QUFFRDs7Ozs7O0dBTUc7QUFDSCxTQUFTLGFBQWEsQ0FBQyxVQUFvQjtJQUN6QyxJQUFJLFVBQVUsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1FBQzNCLE9BQU8sVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ3RCO0lBQ0QsT0FBTyx1QkFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ2xDLENBQUM7QUFFRCxrRUFBa0U7QUFDbEUsK0NBQTJDO0FBQzNDLDZDQUF5QztBQUV6QywrQ0FBd0M7QUFDeEMsaUNBQXVDO0FBR3ZDLDZEQUc4QjtBQUM5QixtQ0FBZ0M7QUFDaEMsK0NBQXNEO0FBRXRELCtCQUFvRDtBQU9wRCxTQUFTLEtBQUssQ0FBQyxFQUFZO0lBQ3pCLE1BQU0sR0FBRyxHQUEyQixFQUFFLENBQUM7SUFDdkMsS0FBSyxNQUFNLENBQUMsSUFBSSxFQUFFLEVBQUU7UUFDbEIsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFO1lBQ1osR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNiO2FBQU07WUFDTCxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ1o7S0FDRjtJQUNELE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGN4YXBpIGZyb20gXCJAYWxpY2xvdWQvcm9zLWNkay1jeGFwaVwiO1xuaW1wb3J0ICogYXMgZnMgZnJvbSBcImZzXCI7XG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgeyBDb25zdHJ1Y3QsIElDb25zdHJ1Y3QsIElTeW50aGVzaXNTZXNzaW9uIH0gZnJvbSBcIi4vY29uc3RydWN0LWNvbXBhdFwiO1xuaW1wb3J0IHsgUk9TX1RPS0VOX1JFU09MVkVSLCBSb3NUZW1wbGF0ZUxhbmcgfSBmcm9tIFwiLi9wcml2YXRlL3RlbXBsYXRlLWxhbmdcIjtcbmltcG9ydCB7IExvZ2ljYWxJRHMgfSBmcm9tIFwiLi9wcml2YXRlL2xvZ2ljYWwtaWRcIjtcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tIFwiLi9wcml2YXRlL3Jlc29sdmVcIjtcbmltcG9ydCB7IG1ha2VVbmlxdWVJZCB9IGZyb20gXCIuL3ByaXZhdGUvdW5pcXVlaWRcIjtcbmltcG9ydCB7IFJvc0luZm8gfSBmcm9tIFwiLi9yb3MtaW5mb1wiO1xuXG5jb25zdCBtaW5pbWF0Y2ggPSByZXF1aXJlKCdtaW5pbWF0Y2gnKTtcblxuY29uc3QgU1RBQ0tfU1lNQk9MID0gU3ltYm9sLmZvcihcInJvcy1jZGstY29yZS5TdGFja1wiKTtcbmNvbnN0IE1ZX1NUQUNLX0NBQ0hFID0gU3ltYm9sLmZvcihcInJvcy1jZGstY29yZS5TdGFjay5teVN0YWNrXCIpO1xuXG5jb25zdCBWQUxJRF9TVEFDS19OQU1FX1JFR0VYID0gL15bQS1aYS16XVtBLVphLXowLTktXSokLztcblxuZXhwb3J0IGludGVyZmFjZSBSYW1Sb2xlcyB7XG4gIC8qKlxuICAgKiBUaGUgUkFNIHJvbGUgQVJOIHRoYXQgZ3JhbnRzIEZDIGZ1bmN0aW9uIHRoZSByZXF1aXJlZCBwZXJtaXNzaW9ucy5cbiAgICovXG4gIHJlYWRvbmx5IGZjUm9sZTogSVJlc29sdmFibGUgfCBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RhY2tQcm9wcyB7XG4gIHJlYWRvbmx5IHZlcnNpb24/OiBTdHJpbmc7XG4gIC8qKlxuICAgKiBBIGRlc2NyaXB0aW9uIG9mIHRoZSBzdGFjay5cbiAgICpcbiAgICogQGRlZmF1bHQgLSBObyBkZXNjcmlwdGlvbi5cbiAgICovXG4gIHJlYWRvbmx5IGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgQUxJWVVOIGVudmlyb25tZW50IChhY2NvdW50L3JlZ2lvbikgd2hlcmUgdGhpcyBzdGFjayB3aWxsIGJlIGRlcGxveWVkLlxuICAgKlxuICAgKiBTZXQgdGhlIGByZWdpb25gL2BhY2NvdW50YCBmaWVsZHMgb2YgYGVudmAgdG8gZWl0aGVyIGEgY29uY3JldGUgdmFsdWUgdG9cbiAgICogc2VsZWN0IHRoZSBpbmRpY2F0ZWQgZW52aXJvbm1lbnQgKHJlY29tbWVuZGVkIGZvciBwcm9kdWN0aW9uIHN0YWNrcyksIG9yIHRvXG4gICAqIHRoZSB2YWx1ZXMgb2YgZW52aXJvbm1lbnQgdmFyaWFibGVzXG4gICAqIGBDREtfREVGQVVMVF9SRUdJT05gL2BDREtfREVGQVVMVF9BQ0NPVU5UYCB0byBsZXQgdGhlIHRhcmdldCBlbnZpcm9ubWVudFxuICAgKiBkZXBlbmQgb24gdGhlIEFMSVlVTiBjcmVkZW50aWFscy9jb25maWd1cmF0aW9uIHRoYXQgdGhlIENESyBDTEkgaXMgZXhlY3V0ZWRcbiAgICogdW5kZXIgKHJlY29tbWVuZGVkIGZvciBkZXZlbG9wbWVudCBzdGFja3MpLlxuICAgKlxuICAgKiBJZiB0aGUgYFN0YWNrYCBpcyBpbnN0YW50aWF0ZWQgaW5zaWRlIGEgYFN0YWdlYCwgYW55IHVuZGVmaW5lZFxuICAgKiBgcmVnaW9uYC9gYWNjb3VudGAgZmllbGRzIGZyb20gYGVudmAgd2lsbCBkZWZhdWx0IHRvIHRoZSBzYW1lIGZpZWxkIG9uIHRoZVxuICAgKiBlbmNvbXBhc3NpbmcgYFN0YWdlYCwgaWYgY29uZmlndXJlZCB0aGVyZS5cbiAgICpcbiAgICogSWYgZWl0aGVyIGByZWdpb25gIG9yIGBhY2NvdW50YCBhcmUgbm90IHNldCBub3IgaW5oZXJpdGVkIGZyb20gYFN0YWdlYCwgdGhlXG4gICAqIFN0YWNrIHdpbGwgYmUgY29uc2lkZXJlZCBcIiplbnZpcm9ubWVudC1hZ25vc3RpYypcIlwiLiBFbnZpcm9ubWVudC1hZ25vc3RpY1xuICAgKiBzdGFja3MgY2FuIGJlIGRlcGxveWVkIHRvIGFueSBlbnZpcm9ubWVudCBidXQgbWF5IG5vdCBiZSBhYmxlIHRvIHRha2VcbiAgICogYWR2YW50YWdlIG9mIGFsbCBmZWF0dXJlcyBvZiB0aGUgQ0RLLlxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKlxuICAgKiAvLyBVc2UgYSBjb25jcmV0ZSBhY2NvdW50IGFuZCByZWdpb24gdG8gZGVwbG95IHRoaXMgc3RhY2sgdG86XG4gICAqIC8vIGAuYWNjb3VudGAgYW5kIGAucmVnaW9uYCB3aWxsIHNpbXBseSByZXR1cm4gdGhlc2UgdmFsdWVzLlxuICAgKiBuZXcgU3RhY2soYXBwLCAnU3RhY2sxJywge1xuICAgKiAgIGVudjoge1xuICAgKiAgICAgYWNjb3VudDogJzEyMzQ1Njc4OTAxMicsXG4gICAqICAgICByZWdpb246ICdjbi1oYW5nemhvdSdcbiAgICogICB9LFxuICAgKiB9KTtcbiAgICpcbiAgICogLy8gVXNlIHRoZSBDTEkncyBjdXJyZW50IGNyZWRlbnRpYWxzIHRvIGRldGVybWluZSB0aGUgdGFyZ2V0IGVudmlyb25tZW50OlxuICAgKiAvLyBgLmFjY291bnRgIGFuZCBgLnJlZ2lvbmAgd2lsbCByZWZsZWN0IHRoZSBhY2NvdW50K3JlZ2lvbiB0aGUgQ0xJXG4gICAqIC8vIGlzIGNvbmZpZ3VyZWQgdG8gdXNlIChiYXNlZCBvbiB0aGUgdXNlciBDTEkgY3JlZGVudGlhbHMpXG4gICAqIG5ldyBTdGFjayhhcHAsICdTdGFjazInLCB7XG4gICAqICAgZW52OiB7XG4gICAqICAgICBhY2NvdW50OiBwcm9jZXNzLmVudi5DREtfREVGQVVMVF9BQ0NPVU5ULFxuICAgKiAgICAgcmVnaW9uOiBwcm9jZXNzLmVudi5DREtfREVGQVVMVF9SRUdJT05cbiAgICogICB9LFxuICAgKiB9KTtcbiAgICpcbiAgICogLy8gRGVmaW5lIG11bHRpcGxlIHN0YWNrcyBzdGFnZSBhc3NvY2lhdGVkIHdpdGggYW4gZW52aXJvbm1lbnRcbiAgICogY29uc3QgbXlTdGFnZSA9IG5ldyBTdGFnZShhcHAsICdNeVN0YWdlJywge1xuICAgKiAgIGVudjoge1xuICAgKiAgICAgYWNjb3VudDogJzEyMzQ1Njc4OTAxMicsXG4gICAqICAgICByZWdpb246ICdjbi1oYW5nemhvdSdcbiAgICogICB9XG4gICAqIH0pO1xuICAgKlxuICAgKiAvLyBib3RoIG9mIHRoZXNlIHN0YWNrcyB3aWxsIHVzZSB0aGUgc3RhZ2UncyBhY2NvdW50L3JlZ2lvbjpcbiAgICogLy8gYC5hY2NvdW50YCBhbmQgYC5yZWdpb25gIHdpbGwgcmVzb2x2ZSB0byB0aGUgY29uY3JldGUgdmFsdWVzIGFzIGFib3ZlXG4gICAqIG5ldyBNeVN0YWNrKG15U3RhZ2UsICdTdGFjazEnKTtcbiAgICogbmV3IFlvdXJTdGFjayhteVN0YWdlLCAnU3RhY2syJyk7XG4gICAqXG4gICAqIC8vIERlZmluZSBhbiBlbnZpcm9ubWVudC1hZ25vc3RpYyBzdGFjazpcbiAgICogLy8gYC5hY2NvdW50YCBhbmQgYC5yZWdpb25gIHdpbGwgcmVzb2x2ZSB0byBgeyBcIlJlZlwiOiBcIkFMSVlVTjo6QWNjb3VudElkXCIgfWAgYW5kIGB7IFwiUmVmXCI6IFwiQUxJWVVOOjpSZWdpb25cIiB9YCByZXNwZWN0aXZlbHkuXG4gICAqIC8vIHdoaWNoIHdpbGwgb25seSByZXNvbHZlIHRvIGFjdHVhbCB2YWx1ZXMgYnkgUk9TIGR1cmluZyBkZXBsb3ltZW50LlxuICAgKiBuZXcgTXlTdGFjayhhcHAsICdTdGFjazEnKTtcbiAgICpcbiAgICogQGRlZmF1bHQgLSBUaGUgZW52aXJvbm1lbnQgb2YgdGhlIGNvbnRhaW5pbmcgYFN0YWdlYCBpZiBhdmFpbGFibGUsXG4gICAqIG90aGVyd2lzZSBjcmVhdGUgdGhlIHN0YWNrIHdpbGwgYmUgZW52aXJvbm1lbnQtYWdub3N0aWMuXG4gICAqXG4gICAqIEBleHBlcmltZW50YWxcbiAgICovXG4gIHJlYWRvbmx5IGVudj86IEVudmlyb25tZW50O1xuXG4gIC8qKlxuICAgKiBOYW1lIHRvIGRlcGxveSB0aGUgc3RhY2sgd2l0aFxuICAgKlxuICAgKiBAZGVmYXVsdCAtIERlcml2ZWQgZnJvbSBjb25zdHJ1Y3QgcGF0aC5cbiAgICovXG4gIHJlYWRvbmx5IHN0YWNrTmFtZT86IHN0cmluZztcblxuICAvKipcbiAgICogU3RhY2sgdGFncyB0aGF0IHdpbGwgYmUgYXBwbGllZCB0byBhbGwgdGhlIHRhZ2dhYmxlIHJlc291cmNlcyBhbmQgdGhlIHN0YWNrIGl0c2VsZi5cbiAgICpcbiAgICogQGRlZmF1bHQge31cbiAgICovXG4gIHJlYWRvbmx5IHRhZ3M/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xuXG4gIC8qKlxuICAgKiBTeW50aGVzaXMgbWV0aG9kIHRvIHVzZSB3aGlsZSBkZXBsb3lpbmcgdGhpcyBzdGFja1xuICAgKlxuICAgKiBAZGVmYXVsdCAtIGBEZWZhdWx0U3RhY2tTeW50aGVzaXplcmBcbiAgICovXG4gIHJlYWRvbmx5IHN5bnRoZXNpemVyPzogSVN0YWNrU3ludGhlc2l6ZXI7XG5cbiAgcmVhZG9ubHkgbWV0YWRhdGE/OiB7W2tleTogc3RyaW5nXTogYW55fTtcblxuICByZWFkb25seSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludD86IGJvb2xlYW47XG59XG5cbi8qKlxuICogQSByb290IGNvbnN0cnVjdCB3aGljaCByZXByZXNlbnRzIGEgc2luZ2xlIFJPUyBzdGFjay5cbiAqL1xuZXhwb3J0IGNsYXNzIFN0YWNrIGV4dGVuZHMgQ29uc3RydWN0IGltcGxlbWVudHMgSVRhZ2dhYmxlIHtcbiAgLyoqXG4gICAqIFJldHVybiB3aGV0aGVyIHRoZSBnaXZlbiBvYmplY3QgaXMgYSBTdGFjay5cbiAgICpcbiAgICogV2UgZG8gYXR0cmlidXRlIGRldGVjdGlvbiBzaW5jZSB3ZSBjYW4ndCByZWxpYWJseSB1c2UgJ2luc3RhbmNlb2YnLlxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBpc1N0YWNrKHg6IGFueSk6IHggaXMgU3RhY2sge1xuICAgIHJldHVybiB4ICE9PSBudWxsICYmIHR5cGVvZiB4ID09PSBcIm9iamVjdFwiICYmIFNUQUNLX1NZTUJPTCBpbiB4O1xuICB9XG5cbiAgLyoqXG4gICAqIExvb2tzIHVwIHRoZSBmaXJzdCBzdGFjayBzY29wZSBpbiB3aGljaCBgY29uc3RydWN0YCBpcyBkZWZpbmVkLiBGYWlscyBpZiB0aGVyZSBpcyBubyBzdGFjayB1cCB0aGUgdHJlZS5cbiAgICogQHBhcmFtIGNvbnN0cnVjdCBUaGUgY29uc3RydWN0IHRvIHN0YXJ0IHRoZSBzZWFyY2ggZnJvbS5cbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgb2YoY29uc3RydWN0OiBJQ29uc3RydWN0KTogU3RhY2sge1xuICAgIC8vIHdlIHdhbnQgdGhpcyB0byBiZSBhcyBjaGVhcCBhcyBwb3NzaWJsZS5cbiAgICBjb25zdCBjYWNoZSA9IChjb25zdHJ1Y3QgYXMgYW55KVtNWV9TVEFDS19DQUNIRV0gYXMgU3RhY2sgfCB1bmRlZmluZWQ7XG4gICAgaWYgKGNhY2hlKSB7XG4gICAgICByZXR1cm4gY2FjaGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gX2xvb2t1cChjb25zdHJ1Y3QpO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvbnN0cnVjdCwgTVlfU1RBQ0tfQ0FDSEUsIHtcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgICAgdmFsdWUsXG4gICAgICB9KTtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfbG9va3VwKGM6IElDb25zdHJ1Y3QpOiBTdGFjayB7XG4gICAgICBpZiAoU3RhY2suaXNTdGFjayhjKSkge1xuICAgICAgICByZXR1cm4gYztcbiAgICAgIH1cblxuICAgICAgaWYgKCFjLm5vZGUuc2NvcGUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBObyBzdGFjayBjb3VsZCBiZSBpZGVudGlmaWVkIGZvciB0aGUgY29uc3RydWN0IGF0IHBhdGggJHtjb25zdHJ1Y3Qubm9kZS5wYXRofWBcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIF9sb29rdXAoYy5ub2RlLnNjb3BlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVGFncyB0byBiZSBhcHBsaWVkIHRvIHRoZSBzdGFjay5cbiAgICovXG4gIHB1YmxpYyByZWFkb25seSB0YWdzOiBUYWdNYW5hZ2VyO1xuXG4gIC8qKlxuICAgKiBUaGUgQUxJWVVOIHJlZ2lvbiBpbnRvIHdoaWNoIHRoaXMgc3RhY2sgd2lsbCBiZSBkZXBsb3llZCAoZS5nLiBgY24tYmVpamluZ2ApLlxuICAgKlxuICAgKiBUaGlzIHZhbHVlIGlzIHJlc29sdmVkIGFjY29yZGluZyB0byB0aGUgZm9sbG93aW5nIHJ1bGVzOlxuICAgKlxuICAgKiAxLiBUaGUgdmFsdWUgcHJvdmlkZWQgdG8gYGVudi5yZWdpb25gIHdoZW4gdGhlIHN0YWNrIGlzIGRlZmluZWQuIFRoaXMgY2FuXG4gICAqICAgIGVpdGhlciBiZSBhIGNvbmNyZXRlIHJlZ2lvbiBvciB0aGUgYEFMSVlVTi5SRUdJT05gIHRva2VuLlxuICAgKiAyLiBgQUxJWVVOLlJFR0lPTmAsIHdoaWNoIGlzIHJlcHJlc2VudHMgdGhlIFJPUyBpbnRyaW5zaWMgcmVmZXJlbmNlXG4gICAqICAgIGB7IFwiUmVmXCI6IFwiQUxJWVVOOjpSZWdpb25cIiB9YCBlbmNvZGVkIGFzIGEgc3RyaW5nIHRva2VuLlxuICAgKlxuICAgKiBQcmVmZXJhYmx5LCB5b3Ugc2hvdWxkIHVzZSB0aGUgcmV0dXJuIHZhbHVlIGFzIGFuIG9wYXF1ZSBzdHJpbmcgYW5kIG5vdFxuICAgKiBhdHRlbXB0IHRvIHBhcnNlIGl0IHRvIGltcGxlbWVudCB5b3VyIGxvZ2ljLiBJZiB5b3UgZG8sIHlvdSBtdXN0IGZpcnN0XG4gICAqIGNoZWNrIHRoYXQgaXQgaXMgYSBjb25jcmV0ZSB2YWx1ZSBhbiBub3QgYW4gdW5yZXNvbHZlZCB0b2tlbi4gSWYgdGhpc1xuICAgKiB2YWx1ZSBpcyBhbiB1bnJlc29sdmVkIHRva2VuIChgVG9rZW4uaXNVbnJlc29sdmVkKHN0YWNrLnJlZ2lvbilgIHJldHVybnNcbiAgICogYHRydWVgKSwgdGhpcyBpbXBsaWVzIHRoYXQgdGhlIHVzZXIgd2lzaGVzIHRoYXQgdGhpcyBzdGFjayB3aWxsIHN5bnRoZXNpemVcbiAgICogaW50byBhICoqcmVnaW9uLWFnbm9zdGljIHRlbXBsYXRlKiouIEluIHRoaXMgY2FzZSwgeW91ciBjb2RlIHNob3VsZCBlaXRoZXJcbiAgICogZmFpbCAodGhyb3cgYW4gZXJyb3IsIGVtaXQgYSBzeW50aCBlcnJvciB1c2luZyBgQW5ub3RhdGlvbnMub2YoY29uc3RydWN0KS5hZGRFcnJvcigpYCkgb3JcbiAgICogaW1wbGVtZW50IHNvbWUgb3RoZXIgcmVnaW9uLWFnbm9zdGljIGJlaGF2aW9yLlxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IHJlZ2lvbjogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgQUxJWVVOIGFjY291bnQgaW50byB3aGljaCB0aGlzIHN0YWNrIHdpbGwgYmUgZGVwbG95ZWQuXG4gICAqXG4gICAqIFRoaXMgdmFsdWUgaXMgcmVzb2x2ZWQgYWNjb3JkaW5nIHRvIHRoZSBmb2xsb3dpbmcgcnVsZXM6XG4gICAqXG4gICAqIDEuIFRoZSB2YWx1ZSBwcm92aWRlZCB0byBgZW52LmFjY291bnRgIHdoZW4gdGhlIHN0YWNrIGlzIGRlZmluZWQuIFRoaXMgY2FuXG4gICAqICAgIGVpdGhlciBiZSBhIGNvbmNyZXRlIGFjY291bnQgb3IgdGhlIGBBTElZVU4uQUNDT1VOVF9JRGAgdG9rZW4uXG4gICAqIDIuIGBBTElZVU4uQUNDT1VOVF9JRGAsIHdoaWNoIHJlcHJlc2VudHMgdGhlIFJPUyBpbnRyaW5zaWMgcmVmZXJlbmNlXG4gICAqICAgIGB7IFwiUmVmXCI6IFwiQUxJWVVOOjpBY2NvdW50SWRcIiB9YCBlbmNvZGVkIGFzIGEgc3RyaW5nIHRva2VuLlxuICAgKlxuICAgKiBQcmVmZXJhYmx5LCB5b3Ugc2hvdWxkIHVzZSB0aGUgcmV0dXJuIHZhbHVlIGFzIGFuIG9wYXF1ZSBzdHJpbmcgYW5kIG5vdFxuICAgKiBhdHRlbXB0IHRvIHBhcnNlIGl0IHRvIGltcGxlbWVudCB5b3VyIGxvZ2ljLiBJZiB5b3UgZG8sIHlvdSBtdXN0IGZpcnN0XG4gICAqIGNoZWNrIHRoYXQgaXQgaXMgYSBjb25jcmV0ZSB2YWx1ZSBhbiBub3QgYW4gdW5yZXNvbHZlZCB0b2tlbi4gSWYgdGhpc1xuICAgKiB2YWx1ZSBpcyBhbiB1bnJlc29sdmVkIHRva2VuIChgVG9rZW4uaXNVbnJlc29sdmVkKHN0YWNrLmFjY291bnQpYCByZXR1cm5zXG4gICAqIGB0cnVlYCksIHRoaXMgaW1wbGllcyB0aGF0IHRoZSB1c2VyIHdpc2hlcyB0aGF0IHRoaXMgc3RhY2sgd2lsbCBzeW50aGVzaXplXG4gICAqIGludG8gYSAqKmFjY291bnQtYWdub3N0aWMgdGVtcGxhdGUqKi4gSW4gdGhpcyBjYXNlLCB5b3VyIGNvZGUgc2hvdWxkIGVpdGhlclxuICAgKiBmYWlsICh0aHJvdyBhbiBlcnJvciwgZW1pdCBhIHN5bnRoIGVycm9yIHVzaW5nIGBBbm5vdGF0aW9ucy5vZihjb25zdHJ1Y3QpLmFkZEVycm9yKClgKSBvclxuICAgKiBpbXBsZW1lbnQgc29tZSBvdGhlciByZWdpb24tYWdub3N0aWMgYmVoYXZpb3IuXG4gICAqL1xuICBwdWJsaWMgcmVhZG9ubHkgYWNjb3VudDogc3RyaW5nO1xuXG4gIHB1YmxpYyByb2xlcz86IFJhbVJvbGVzO1xuXG4gIC8qKlxuICAgKiBPcHRpb25zIGZvciBST1MgdGVtcGxhdGUgKGxpa2UgdmVyc2lvbiwgZGVzY3JpcHRpb24pLlxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IHRlbXBsYXRlT3B0aW9uczogSVRlbXBsYXRlT3B0aW9ucyA9IHt9O1xuXG4gIC8qKlxuICAgKiBJZiB0aGlzIGlzIGEgbmVzdGVkIHN0YWNrLCB0aGlzIHJlcHJlc2VudHMgaXRzIGBBTElZVU46OlJPUzo6U3RhY2tgXG4gICAqIHJlc291cmNlLiBgdW5kZWZpbmVkYCBmb3IgdG9wLWxldmVsIChub24tbmVzdGVkKSBzdGFja3MuXG4gICAqXG4gICAqIEBleHBlcmltZW50YWxcbiAgICovXG4gIHB1YmxpYyByZWFkb25seSBuZXN0ZWRTdGFja1Jlc291cmNlPzogUm9zUmVzb3VyY2U7XG5cbiAgLyoqXG4gICAqIFRoZSBuYW1lIG9mIHRoZSBST1MgdGVtcGxhdGUgZmlsZSBlbWl0dGVkIHRvIHRoZSBvdXRwdXRcbiAgICogZGlyZWN0b3J5IGR1cmluZyBzeW50aGVzaXMuXG4gICAqXG4gICAqIEBleGFtcGxlIE15U3RhY2sudGVtcGxhdGUuanNvblxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IHRlbXBsYXRlRmlsZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgSUQgb2YgdGhlIGNsb3VkIGFzc2VtYmx5IGFydGlmYWN0IGZvciB0aGlzIHN0YWNrLlxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IGFydGlmYWN0SWQ6IHN0cmluZztcblxuICAvKipcbiAgICogU3ludGhlc2lzIG1ldGhvZCBmb3IgdGhpcyBzdGFja1xuICAgKlxuICAgKiBAZXhwZXJpbWVudGFsXG4gICAqL1xuICBwdWJsaWMgcmVhZG9ubHkgc3ludGhlc2l6ZXI6IElTdGFja1N5bnRoZXNpemVyO1xuXG4gIC8qKlxuICAgKiBMb2dpY2FsIElEIGdlbmVyYXRpb24gc3RyYXRlZ3lcbiAgICovXG4gIHByaXZhdGUgcmVhZG9ubHkgX2xvZ2ljYWxJZHM6IExvZ2ljYWxJRHM7XG5cbiAgLyoqXG4gICAqIE90aGVyIHN0YWNrcyB0aGlzIHN0YWNrIGRlcGVuZHMgb25cbiAgICovXG4gIHByaXZhdGUgcmVhZG9ubHkgX3N0YWNrRGVwZW5kZW5jaWVzOiB7XG4gICAgW3VuaXF1ZUlkOiBzdHJpbmddOiBTdGFja0RlcGVuZGVuY3k7XG4gIH0gPSB7fTtcblxuICBwcml2YXRlIHJlYWRvbmx5IF9zdGFja05hbWU6IHN0cmluZztcblxuICBwdWJsaWMgcmVhZG9ubHkgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cbiAgcHJpdmF0ZSByZWFkb25seSBtYXhSZXNvdXJjZXM6IG51bWJlciA9IDMwMDtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBzdGFjay5cbiAgICpcbiAgICogQHBhcmFtIHNjb3BlIFBhcmVudCBvZiB0aGlzIHN0YWNrLCB1c3VhbGx5IGEgUHJvZ3JhbSBpbnN0YW5jZS5cbiAgICogQHBhcmFtIGlkIFRoZSBjb25zdHJ1Y3QgSUQgb2YgdGhpcyBzdGFjay4gSWYgYHN0YWNrTmFtZWAgaXMgbm90IGV4cGxpY2l0bHlcbiAgICogZGVmaW5lZCwgdGhpcyBpZCAoYW5kIGFueSBwYXJlbnQgSURzKSB3aWxsIGJlIHVzZWQgdG8gZGV0ZXJtaW5lIHRoZVxuICAgKiBwaHlzaWNhbCBJRCBvZiB0aGUgc3RhY2suXG4gICAqIEBwYXJhbSBwcm9wcyBTdGFjayBwcm9wZXJ0aWVzLlxuICAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlPzogQ29uc3RydWN0LCBpZD86IHN0cmluZywgcHJvcHM6IFN0YWNrUHJvcHMgPSB7fSkge1xuICAgIC8vIEZvciB1bml0IHRlc3QgY29udmVuaWVuY2UgcGFyZW50cyBhcmUgb3B0aW9uYWwsIHNvIGJ5cGFzcyB0aGUgdHlwZSBjaGVjayB3aGVuIGNhbGxpbmcgdGhlIHBhcmVudC5cbiAgICBzdXBlcihzY29wZSEsIGlkISk7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgU1RBQ0tfU1lNQk9MLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG4gICAgdGhpcy5fbG9naWNhbElkcyA9IG5ldyBMb2dpY2FsSURzKCk7XG5cbiAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID1cbiAgICAgIHByb3BzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID09PSB1bmRlZmluZWQgPyB0cnVlIDogZmFsc2U7XG5cbiAgICBpZiAocHJvcHMuZGVzY3JpcHRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gTWF4IGxlbmd0aCAxMDI0IGJ5dGVzXG4gICAgICAvLyBUeXBpY2FsbHkgMiBieXRlcyBwZXIgY2hhcmFjdGVyLCBtYXkgYmUgbW9yZSBmb3IgbW9yZSBleG90aWMgY2hhcmFjdGVyc1xuICAgICAgaWYgKHByb3BzLmRlc2NyaXB0aW9uLmxlbmd0aCA+IDUxMikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYFN0YWNrIGRlc2NyaXB0aW9uIG11c3QgYmUgPD0gMTAyNCBieXRlcy4gUmVjZWl2ZWQgZGVzY3JpcHRpb246ICcke3Byb3BzLmRlc2NyaXB0aW9ufSdgXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICB0aGlzLnRlbXBsYXRlT3B0aW9ucy5kZXNjcmlwdGlvbiA9IHByb3BzLmRlc2NyaXB0aW9uO1xuICAgIH1cblxuICAgIGlmIChwcm9wcy5tZXRhZGF0YSA9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMudGVtcGxhdGVPcHRpb25zLm1ldGFkYXRhID0geydBTElZVU46OlJPUzo6SW50ZXJmYWNlJzp7J1RlbXBsYXRlVGFncyc6W1wiQ3JlYXRlIGJ5IFJPUyBDREtcIl19fTtcbiAgICB9XG5cbiAgICB0aGlzLl9zdGFja05hbWUgPVxuICAgICAgcHJvcHMuc3RhY2tOYW1lICE9PSB1bmRlZmluZWRcbiAgICAgICAgPyBwcm9wcy5zdGFja05hbWVcbiAgICAgICAgOiB0aGlzLmdlbmVyYXRlU3RhY2tOYW1lKCk7XG4gICAgdGhpcy50YWdzID0gbmV3IFRhZ01hbmFnZXIoXG4gICAgICBUYWdUeXBlLktFWV9WQUxVRSxcbiAgICAgIFwiYWxpeXVuOnJvczpzdGFja1wiLFxuICAgICAgcHJvcHMudGFnc1xuICAgICk7XG5cbiAgICBjb25zdCB7IGFjY291bnQsIHJlZ2lvbiB9ID0gdGhpcy5wYXJzZUVudmlyb25tZW50KHByb3BzLmVudik7XG5cbiAgICB0aGlzLmFjY291bnQgPSBhY2NvdW50O1xuICAgIHRoaXMucmVnaW9uID0gcmVnaW9uO1xuXG4gICAgaWYgKCFWQUxJRF9TVEFDS19OQU1FX1JFR0VYLnRlc3QodGhpcy5zdGFja05hbWUpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBTdGFjayBuYW1lIG11c3QgbWF0Y2ggdGhlIHJlZ3VsYXIgZXhwcmVzc2lvbjogJHtWQUxJRF9TVEFDS19OQU1FX1JFR0VYLnRvU3RyaW5nKCl9LCBnb3QgJyR7XG4gICAgICAgICAgdGhpcy5zdGFja05hbWVcbiAgICAgICAgfSdgXG4gICAgICApO1xuICAgIH1cblxuICAgIC8vIHRoZSBwcmVmZXJyZWQgYmVoYXZpb3IgaXMgdG8gZ2VuZXJhdGUgYSB1bmlxdWUgaWQgZm9yIHRoaXMgc3RhY2sgYW5kIHVzZVxuICAgIC8vIGl0IGFzIHRoZSBhcnRpZmFjdCBJRCBpbiB0aGUgYXNzZW1ibHkuIHRoaXMgYWxsb3dzIG11bHRpcGxlIHN0YWNrcyB0byB1c2VcbiAgICAvLyB0aGUgc2FtZSBuYW1lLiBob3dldmVyLCB0aGlzIGJlaGF2aW9yIGlzIGJyZWFraW5nIGZvciAxLnggc28gaXQncyBvbmx5XG4gICAgLy8gYXBwbGllZCB1bmRlciBhIGZlYXR1cmUgZmxhZyB3aGljaCBpcyBhcHBsaWVkIGF1dG9tYXRpY2FsbHkgZm9yIG5ld1xuICAgIC8vIHByb2plY3RzIGNyZWF0ZWQgdXNpbmcgYGNkayBpbml0YC5cbiAgICAvL1xuICAgIC8vIEFsc28gdXNlIHRoZSBuZXcgYmVoYXZpb3IgaWYgd2UgYXJlIHVzaW5nIHRoZSBuZXcgQ0kvQ0QtcmVhZHkgc3ludGhlc2l6ZXI7IHRoYXQgd2F5XG4gICAgLy8gcGVvcGxlIG9ubHkgaGF2ZSB0byBmbGlwIG9uZSBmbGFnLlxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWF4LWxpbmUtbGVuZ3RoXG4gICAgdGhpcy5hcnRpZmFjdElkID1cbiAgICAgIHRoaXMubm9kZS50cnlHZXRDb250ZXh0KGN4YXBpLkVOQUJMRV9TVEFDS19OQU1FX0RVUExJQ0FURVNfQ09OVEVYVCkgfHxcbiAgICAgIHRoaXMubm9kZS50cnlHZXRDb250ZXh0KGN4YXBpLk5FV19TVFlMRV9TVEFDS19TWU5USEVTSVNfQ09OVEVYVClcbiAgICAgICAgPyB0aGlzLmdlbmVyYXRlU3RhY2tBcnRpZmFjdElkKClcbiAgICAgICAgOiB0aGlzLnN0YWNrTmFtZTtcblxuICAgIHRoaXMudGVtcGxhdGVGaWxlID0gYCR7dGhpcy5hcnRpZmFjdElkfS50ZW1wbGF0ZS5qc29uYDtcblxuICAgIGNvbnN0IHN5bnRoZXNpemVyID0gcHJvcHMuc3ludGhlc2l6ZXIgPz8gbmV3IERlZmF1bHRTdGFja1N5bnRoZXNpemVyKCk7XG4gICAgaWYgKGlzUmV1c2FibGVTdGFja1N5bnRoZXNpemVyKHN5bnRoZXNpemVyKSkge1xuICAgICAgLy8gUHJvZHVjZSBhIGZyZXNoIGluc3RhbmNlIGZvciBlYWNoIHN0YWNrIChzaG91bGQgaGF2ZSBiZWVuIHRoZSBkZWZhdWx0IGJlaGF2aW9yKVxuICAgICAgdGhpcy5zeW50aGVzaXplciA9IHN5bnRoZXNpemVyLnJldXNhYmxlQmluZCh0aGlzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gQmluZCB0aGUgc2luZ2xlIGluc3RhbmNlIGluLXBsYWNlIHRvIHRoZSBjdXJyZW50IHN0YWNrIChiYWNrd2FyZHMgY29tcGF0KVxuICAgICAgdGhpcy5zeW50aGVzaXplciA9IHN5bnRoZXNpemVyO1xuICAgICAgdGhpcy5zeW50aGVzaXplci5iaW5kKHRoaXMpO1xuICAgIH1cbiAgICBuZXcgUm9zSW5mbyhcbiAgICAgIHRoaXMsXG4gICAgICBSb3NJbmZvLmZvcm1hdFZlcnNpb24sXG4gICAgICBwcm9wcy52ZXJzaW9uID8gcHJvcHMudmVyc2lvbiA6IFJvc0luZm8udjIwMTUwOTAxXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNvbHZlIGEgdG9rZW5pemVkIHZhbHVlIGluIHRoZSBjb250ZXh0IG9mIHRoZSBjdXJyZW50IHN0YWNrLlxuICAgKi9cbiAgcHVibGljIHJlc29sdmUob2JqOiBhbnkpOiBhbnkge1xuICAgIHJldHVybiByZXNvbHZlKG9iaiwge1xuICAgICAgc2NvcGU6IHRoaXMsXG4gICAgICBwcmVmaXg6IFtdLFxuICAgICAgcmVzb2x2ZXI6IFJPU19UT0tFTl9SRVNPTFZFUixcbiAgICAgIHByZXBhcmluZzogZmFsc2UsXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lIHRoZSB2YXJpb3VzIHN0YWNrIGVudmlyb25tZW50IGF0dHJpYnV0ZXMuXG4gICAqXG4gICAqL1xuICBwcml2YXRlIHBhcnNlRW52aXJvbm1lbnQoZW52OiBFbnZpcm9ubWVudCA9IHt9KSB7XG4gICAgLy8gaWYgYW4gZW52aXJvbm1lbnQgcHJvcGVydHkgaXMgZXhwbGljaXRseSBzcGVjaWZpZWQgd2hlbiB0aGUgc3RhY2sgaXNcbiAgICAvLyBjcmVhdGVkLCBpdCB3aWxsIGJlIHVzZWQuIGlmIG5vdCwgdXNlIHRva2VucyBmb3IgYWNjb3VudCBhbmQgcmVnaW9uLlxuICAgIGNvbnN0IGNvbnRhaW5pbmdBc3NlbWJseSA9IFN0YWdlLm9mKHRoaXMpO1xuXG4gICAgY29uc3QgYWNjb3VudCA9IGVudi5hY2NvdW50ID8/IGNvbnRhaW5pbmdBc3NlbWJseT8uYWNjb3VudCA/PyBSb3NQc2V1ZG8uYWNjb3VudElkO1xuICAgIGNvbnN0IHJlZ2lvbiA9IGVudi5yZWdpb24gPz8gY29udGFpbmluZ0Fzc2VtYmx5Py5yZWdpb24gPz8gUm9zUHNldWRvLnJlZ2lvbjtcblxuICAgIHJldHVybiB7XG4gICAgICBhY2NvdW50LFxuICAgICAgcmVnaW9uXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0IGFuIG9iamVjdCwgcG90ZW50aWFsbHkgY29udGFpbmluZyB0b2tlbnMsIHRvIGEgSlNPTiBzdHJpbmdcbiAgICovXG4gIHB1YmxpYyB0b0pzb25TdHJpbmcob2JqOiBhbnksIHNwYWNlPzogbnVtYmVyKTogc3RyaW5nIHtcbiAgICByZXR1cm4gUm9zVGVtcGxhdGVMYW5nLnRvSlNPTihvYmosIHNwYWNlKS50b1N0cmluZygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbmFtZSBhIGdlbmVyYXRlZCBsb2dpY2FsIGlkZW50aXRpZXNcbiAgICpcbiAgICogVG8gbW9kaWZ5IHRoZSBuYW1pbmcgc2NoZW1lIHN0cmF0ZWd5LCBleHRlbmQgdGhlIGBTdGFja2AgY2xhc3MgYW5kXG4gICAqIG92ZXJyaWRlIHRoZSBgYWxsb2NhdGVMb2dpY2FsSWRgIG1ldGhvZC5cbiAgICovXG4gIHB1YmxpYyByZW5hbWVMb2dpY2FsSWQob2xkSWQ6IHN0cmluZywgbmV3SWQ6IHN0cmluZykge1xuICAgIHRoaXMuX2xvZ2ljYWxJZHMuYWRkUmVuYW1lKG9sZElkLCBuZXdJZCk7XG4gIH1cblxuICAvKipcbiAgICogQWxsb2NhdGVzIGEgc3RhY2stdW5pcXVlIGxvZ2ljYWwgaWRlbnRpdHkgZm9yIGFcbiAgICogc3BlY2lmaWMgcmVzb3VyY2UuXG4gICAqXG4gICAqIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCB3aGVuIGEgYFJvc0VsZW1lbnRgIGlzIGNyZWF0ZWQgYW5kIHVzZWQgdG8gcmVuZGVyIHRoZVxuICAgKiBpbml0aWFsIGxvZ2ljYWwgaWRlbnRpdHkgb2YgcmVzb3VyY2VzLiBMb2dpY2FsIElEIHJlbmFtZXMgYXJlIGFwcGxpZWQgYXRcbiAgICogdGhpcyBzdGFnZS5cbiAgICpcbiAgICogVGhpcyBtZXRob2QgdXNlcyB0aGUgcHJvdGVjdGVkIG1ldGhvZCBgYWxsb2NhdGVMb2dpY2FsSWRgIHRvIHJlbmRlciB0aGVcbiAgICogbG9naWNhbCBJRCBmb3IgYW4gZWxlbWVudC4gVG8gbW9kaWZ5IHRoZSBuYW1pbmcgc2NoZW1lLCBleHRlbmQgdGhlIGBTdGFja2BcbiAgICogY2xhc3MgYW5kIG92ZXJyaWRlIHRoaXMgbWV0aG9kLlxuICAgKlxuICAgKiBAcGFyYW0gZWxlbWVudCBUaGUgUk9TIGVsZW1lbnQgZm9yIHdoaWNoIGEgbG9naWNhbCBpZGVudGl0eSBpc1xuICAgKiBuZWVkZWQuXG4gICAqL1xuICBwdWJsaWMgZ2V0TG9naWNhbElkKGVsZW1lbnQ6IFJvc0VsZW1lbnQpOiBzdHJpbmcge1xuICAgIGNvbnN0IGxvZ2ljYWxJZCA9IHRoaXMuYWxsb2NhdGVMb2dpY2FsSWQoZWxlbWVudCk7XG4gICAgcmV0dXJuIHRoaXMuX2xvZ2ljYWxJZHMuYXBwbHlSZW5hbWUobG9naWNhbElkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYSBkZXBlbmRlbmN5IGJldHdlZW4gdGhpcyBzdGFjayBhbmQgYW5vdGhlciBzdGFjay5cbiAgICpcbiAgICogVGhpcyBjYW4gYmUgdXNlZCB0byBkZWZpbmUgZGVwZW5kZW5jaWVzIGJldHdlZW4gYW55IHR3byBzdGFja3Mgd2l0aGluIGFuXG4gICAqIGFwcCwgYW5kIGFsc28gc3VwcG9ydHMgbmVzdGVkIHN0YWNrcy5cbiAgICovXG4gIHB1YmxpYyBhZGREZXBlbmRlbmN5KHRhcmdldDogU3RhY2ssIHJlYXNvbj86IHN0cmluZykge1xuICAgIGFkZERlcGVuZGVuY3kodGhpcywgdGFyZ2V0LCByZWFzb24pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgc3RhY2tzIHRoaXMgc3RhY2sgZGVwZW5kcyBvblxuICAgKi9cbiAgcHVibGljIGdldCBkZXBlbmRlbmNpZXMoKTogU3RhY2tbXSB7XG4gICAgcmV0dXJuIE9iamVjdC52YWx1ZXModGhpcy5fc3RhY2tEZXBlbmRlbmNpZXMpLm1hcCgoeCkgPT4geC5zdGFjayk7XG4gIH1cblxuICAvKipcbiAgICogVGhlIGNvbmNyZXRlIFJPUyBwaHlzaWNhbCBzdGFjayBuYW1lLlxuICAgKlxuICAgKiBUaGlzIGlzIGVpdGhlciB0aGUgbmFtZSBkZWZpbmVkIGV4cGxpY2l0bHkgaW4gdGhlIGBzdGFja05hbWVgIHByb3Agb3JcbiAgICogYWxsb2NhdGVkIGJhc2VkIG9uIHRoZSBzdGFjaydzIGxvY2F0aW9uIGluIHRoZSBjb25zdHJ1Y3QgdHJlZS4gU3RhY2tzIHRoYXRcbiAgICogYXJlIGRpcmVjdGx5IGRlZmluZWQgdW5kZXIgdGhlIGFwcCB1c2UgdGhlaXIgY29uc3RydWN0IGBpZGAgYXMgdGhlaXIgc3RhY2tcbiAgICogbmFtZS4gU3RhY2tzIHRoYXQgYXJlIGRlZmluZWQgZGVlcGVyIHdpdGhpbiB0aGUgdHJlZSB3aWxsIHVzZSBhIGhhc2hlZCBuYW1pbmdcbiAgICogc2NoZW1lIGJhc2VkIG9uIHRoZSBjb25zdHJ1Y3QgcGF0aCB0byBlbnN1cmUgdW5pcXVlbmVzcy5cbiAgICpcbiAgICovXG4gIHB1YmxpYyBnZXQgc3RhY2tOYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YWNrTmFtZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgSUQgb2YgdGhlIHN0YWNrXG4gICAqXG4gICAqL1xuICBwdWJsaWMgZ2V0IHN0YWNrSWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gUm9zUHNldWRvLnN0YWNrSWQ7XG4gIH1cblxuICAvKipcbiAgICogSW5kaWNhdGVzIGlmIHRoaXMgaXMgYSBuZXN0ZWQgc3RhY2ssIGluIHdoaWNoIGNhc2UgYHBhcmVudFN0YWNrYCB3aWxsIGluY2x1ZGUgYSByZWZlcmVuY2UgdG8gaXQncyBwYXJlbnQuXG4gICAqL1xuICBwdWJsaWMgZ2V0IG5lc3RlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5uZXN0ZWRTdGFja1Jlc291cmNlICE9PSB1bmRlZmluZWQ7XG4gIH1cblxuICAvKipcbiAgICogSWYgdGhpcyBpcyBhIG5lc3RlZCBzdGFjaywgcmV0dXJucyBpdCdzIHBhcmVudCBzdGFjay5cbiAgICovXG4gIHB1YmxpYyBnZXQgbmVzdGVkU3RhY2tQYXJlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMubmVzdGVkU3RhY2tSZXNvdXJjZSAmJiBTdGFjay5vZih0aGlzLm5lc3RlZFN0YWNrUmVzb3VyY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHBhcmVudCBvZiBhIG5lc3RlZCBzdGFjay5cbiAgICpcbiAgICogQGRlcHJlY2F0ZWQgdXNlIGBuZXN0ZWRTdGFja1BhcmVudGBcbiAgICovXG4gIHB1YmxpYyBnZXQgcGFyZW50U3RhY2soKSB7XG4gICAgcmV0dXJuIHRoaXMubmVzdGVkU3RhY2tQYXJlbnQ7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIGltcGxpY2l0bHkgYnkgdGhlIGBhZGREZXBlbmRlbmN5YCBoZWxwZXIgZnVuY3Rpb24gaW4gb3JkZXIgdG9cbiAgICogcmVhbGl6ZSBhIGRlcGVuZGVuY3kgYmV0d2VlbiB0d28gdG9wLWxldmVsIHN0YWNrcyBhdCB0aGUgYXNzZW1ibHkgbGV2ZWwuXG4gICAqXG4gICAqIFVzZSBgc3RhY2suYWRkRGVwZW5kZW5jeWAgdG8gZGVmaW5lIHRoZSBkZXBlbmRlbmN5IGJldHdlZW4gYW55IHR3byBzdGFja3MsXG4gICAqIGFuZCB0YWtlIGludG8gYWNjb3VudCBuZXN0ZWQgc3RhY2sgcmVsYXRpb25zaGlwcy5cbiAgICpcbiAgICogQGludGVybmFsXG4gICAqL1xuICBwdWJsaWMgX2FkZEFzc2VtYmx5RGVwZW5kZW5jeSh0YXJnZXQ6IFN0YWNrLCByZWFzb24/OiBzdHJpbmcpIHtcbiAgICAvLyBkZWZlbnNpdmU6IHdlIHNob3VsZCBuZXZlciBnZXQgaGVyZSBmb3IgbmVzdGVkIHN0YWNrc1xuICAgIGlmICh0aGlzLm5lc3RlZCB8fCB0YXJnZXQubmVzdGVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIFwiQ2Fubm90IGFkZCBhc3NlbWJseS1sZXZlbCBkZXBlbmRlbmNpZXMgZm9yIG5lc3RlZCBzdGFja3NcIlxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZWFzb24gPSByZWFzb24gfHwgXCJkZXBlbmRlbmN5IGFkZGVkIHVzaW5nIHN0YWNrLmFkZERlcGVuZGVuY3koKVwiO1xuICAgIGNvbnN0IGN5Y2xlID0gdGFyZ2V0LnN0YWNrRGVwZW5kZW5jeVJlYXNvbnModGhpcyk7XG4gICAgaWYgKGN5Y2xlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYCcke3RhcmdldC5ub2RlLnBhdGh9JyBkZXBlbmRzIG9uICcke3RoaXMubm9kZS5wYXRofScgKCR7Y3ljbGUuam9pbihcbiAgICAgICAgICBcIiwgXCJcbiAgICAgICAgKX0pLiBBZGRpbmcgdGhpcyBkZXBlbmRlbmN5ICgke3JlYXNvbn0pIHdvdWxkIGNyZWF0ZSBhIGN5Y2xpYyByZWZlcmVuY2UuYFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBsZXQgZGVwID0gdGhpcy5fc3RhY2tEZXBlbmRlbmNpZXNbdGFyZ2V0Lm5vZGUudW5pcXVlSWRdO1xuICAgIGlmICghZGVwKSB7XG4gICAgICBkZXAgPSB0aGlzLl9zdGFja0RlcGVuZGVuY2llc1t0YXJnZXQubm9kZS51bmlxdWVJZF0gPSB7XG4gICAgICAgIHN0YWNrOiB0YXJnZXQsXG4gICAgICAgIHJlYXNvbnM6IFtdLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBkZXAucmVhc29ucy5wdXNoKHJlYXNvbik7XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuQ0RLX0RFQlVHX0RFUFMpIHtcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG4gICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICBgW0NES19ERUJVR19ERVBTXSBzdGFjayBcIiR7dGhpcy5ub2RlLnBhdGh9XCIgZGVwZW5kcyBvbiBcIiR7dGFyZ2V0Lm5vZGUucGF0aH1cIiBiZWNhdXNlOiAke3JlYXNvbn1gXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBuYW1pbmcgc2NoZW1lIHVzZWQgdG8gYWxsb2NhdGUgbG9naWNhbCBJRHMuIEJ5IGRlZmF1bHQsIHVzZXNcbiAgICogdGhlIGBIYXNoZWRBZGRyZXNzaW5nU2NoZW1lYCBidXQgdGhpcyBtZXRob2QgY2FuIGJlIG92ZXJyaWRkZW4gdG8gY3VzdG9taXplXG4gICAqIHRoaXMgYmVoYXZpb3IuXG4gICAqXG4gICAqIEluIG9yZGVyIHRvIG1ha2Ugc3VyZSBsb2dpY2FsIElEcyBhcmUgdW5pcXVlIGFuZCBzdGFibGUsIHdlIGhhc2ggdGhlIHJlc291cmNlXG4gICAqIGNvbnN0cnVjdCB0cmVlIHBhdGggKGkuZS4gdG9wbGV2ZWwvc2Vjb25kbGV2ZWwvLi4uL215cmVzb3VyY2UpIGFuZCBhZGQgaXQgYXNcbiAgICogYSBzdWZmaXggdG8gdGhlIHBhdGggY29tcG9uZW50cyBqb2luZWQgd2l0aG91dCBhIHNlcGFyYXRvciAoUk9TXG4gICAqIElEcyBvbmx5IGFsbG93IGFscGhhbnVtZXJpYyBjaGFyYWN0ZXJzKS5cbiAgICpcbiAgICogVGhlIHJlc3VsdCB3aWxsIGJlOlxuICAgKlxuICAgKiAgIDxwYXRoLmpvaW4oJycpPjxtZDUocGF0aC5qb2luKCcvJyk+XG4gICAqICAgICBcImh1bWFuXCIgICAgICBcImhhc2hcIlxuICAgKlxuICAgKiBJZiB0aGUgXCJodW1hblwiIHBhcnQgb2YgdGhlIElEIGV4Y2VlZHMgMjQwIGNoYXJhY3RlcnMsIHdlIHNpbXBseSB0cmltIGl0IHNvXG4gICAqIHRoZSB0b3RhbCBJRCBkb2Vzbid0IGV4Y2VlZCAyNTUgY2hhcmFjdGVyIGxpbWl0LlxuICAgKlxuICAgKiBXZSBvbmx5IHRha2UgOCBjaGFyYWN0ZXJzIGZyb20gdGhlIG1kNSBoYXNoICgwLjAwMDAwNSBjaGFuY2Ugb2YgY29sbGlzaW9uKS5cbiAgICpcbiAgICogU3BlY2lhbCBjYXNlczpcbiAgICpcbiAgICogLSBJZiB0aGUgcGF0aCBvbmx5IGNvbnRhaW5zIGEgc2luZ2xlIGNvbXBvbmVudCAoaS5lLiBpdCdzIGEgdG9wLWxldmVsXG4gICAqICAgcmVzb3VyY2UpLCB3ZSB3b24ndCBhZGQgdGhlIGhhc2ggdG8gaXQuIFRoZSBoYXNoIGlzIG5vdCBuZWVkZWQgZm9yXG4gICAqICAgZGlzYW1pZ3VhdGlvbiBhbmQgYWxzbywgaXQgYWxsb3dzIGZvciBhIG1vcmUgc3RyYWlnaHRmb3J3YXJkIG1pZ3JhdGlvbiBhblxuICAgKiAgIGV4aXN0aW5nIFJPUyB0ZW1wbGF0ZSB0byBhIENESyBzdGFjayB3aXRob3V0IGxvZ2ljYWwgSUQgY2hhbmdlc1xuICAgKiAgIChvciByZW5hbWVzKS5cbiAgICogLSBGb3IgYWVzdGhldGljIHJlYXNvbnMsIGlmIHRoZSBsYXN0IGNvbXBvbmVudHMgb2YgdGhlIHBhdGggYXJlIHRoZSBzYW1lXG4gICAqICAgKGkuZS4gYEwxL0wyL1BpcGVsaW5lL1BpcGVsaW5lYCksIHRoZXkgd2lsbCBiZSBkZS1kdXBsaWNhdGVkIHRvIG1ha2UgdGhlXG4gICAqICAgcmVzdWx0aW5nIGh1bWFuIHBvcnRpb24gb2YgdGhlIElEIG1vcmUgcGxlYXNpbmc6IGBMMUwyUGlwZWxpbmU8SEFTSD5gXG4gICAqICAgaW5zdGVhZCBvZiBgTDFMMlBpcGVsaW5lUGlwZWxpbmU8SEFTSD5gXG4gICAqIC0gSWYgYSBjb21wb25lbnQgaXMgbmFtZWQgXCJEZWZhdWx0XCIgaXQgd2lsbCBiZSBvbWl0dGVkIGZyb20gdGhlIHBhdGguIFRoaXNcbiAgICogICBhbGxvd3MgcmVmYWN0b3JpbmcgaGlnaGVyIGxldmVsIGFic3RyYWN0aW9ucyBhcm91bmQgY29uc3RydWN0cyB3aXRob3V0IGFmZmVjdGluZ1xuICAgKiAgIHRoZSBJRHMgb2YgYWxyZWFkeSBkZXBsb3llZCByZXNvdXJjZXMuXG4gICAqIC0gSWYgYSBjb21wb25lbnQgaXMgbmFtZWQgXCJSZXNvdXJjZVwiIGl0IHdpbGwgYmUgb21pdHRlZCBmcm9tIHRoZSB1c2VyLXZpc2libGVcbiAgICogICBwYXRoLCBidXQgaW5jbHVkZWQgaW4gdGhlIGhhc2guIFRoaXMgcmVkdWNlcyB2aXN1YWwgbm9pc2UgaW4gdGhlIGh1bWFuIHJlYWRhYmxlXG4gICAqICAgcGFydCBvZiB0aGUgaWRlbnRpZmllci5cbiAgICpcbiAgICogQHBhcmFtIHJvc0VsZW1lbnQgVGhlIGVsZW1lbnQgZm9yIHdoaWNoIHRoZSBsb2dpY2FsIElEIGlzIGFsbG9jYXRlZC5cbiAgICovXG4gIHByb3RlY3RlZCBhbGxvY2F0ZUxvZ2ljYWxJZChyb3NFbGVtZW50OiBSb3NFbGVtZW50KTogc3RyaW5nIHtcbiAgICBjb25zdCBzY29wZXMgPSByb3NFbGVtZW50Lm5vZGUuc2NvcGVzO1xuICAgIGNvbnN0IHN0YWNrSW5kZXggPSBzY29wZXMuaW5kZXhPZihyb3NFbGVtZW50LnN0YWNrKTtcbiAgICBjb25zdCBwYXRoQ29tcG9uZW50cyA9IHNjb3Blcy5zbGljZShzdGFja0luZGV4ICsgMSkubWFwKCh4KSA9PiB4Lm5vZGUuaWQpO1xuICAgIHJldHVybiBtYWtlVW5pcXVlSWQocGF0aENvbXBvbmVudHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFZhbGlkYXRlIHN0YWNrIG5hbWVcbiAgICpcbiAgICogUk9TIHN0YWNrIG5hbWVzIGNhbiBpbmNsdWRlIGRhc2hlcyBpbiBhZGRpdGlvbiB0byB0aGUgcmVndWxhciBpZGVudGlmaWVyXG4gICAqIGNoYXJhY3RlciBjbGFzc2VzLCBhbmQgd2UgZG9uJ3QgYWxsb3cgb25lIG9mIHRoZSBtYWdpYyBtYXJrZXJzLlxuICAgKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIHByb3RlY3RlZCBfdmFsaWRhdGVJZChuYW1lOiBzdHJpbmcpIHtcbiAgICBpZiAobmFtZSAmJiAhVkFMSURfU1RBQ0tfTkFNRV9SRUdFWC50ZXN0KG5hbWUpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBTdGFjayBuYW1lIG11c3QgbWF0Y2ggdGhlIHJlZ3VsYXIgZXhwcmVzc2lvbjogJHtWQUxJRF9TVEFDS19OQU1FX1JFR0VYLnRvU3RyaW5nKCl9LCBnb3QgJyR7bmFtZX0nYFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc3ludGhlc2l6ZShzZXNzaW9uOiBJU3ludGhlc2lzU2Vzc2lvbik6IHZvaWQge1xuICAgIC8vIEluIHByaW5jaXBsZSwgc3RhY2sgc3ludGhlc2lzIGlzIGRlbGVnYXRlZCB0byB0aGVcbiAgICAvLyBTdGFja1N5bnRoZXNpcyBvYmplY3QuXG4gICAgLy9cbiAgICAvLyBIb3dldmVyLCBzb21lIHBhcnRzIG9mIHN5bnRoZXNpcyBjdXJyZW50bHkgdXNlIHNvbWUgcHJpdmF0ZVxuICAgIC8vIG1ldGhvZHMgb24gU3RhY2ssIGFuZCBJIGRvbid0IHJlYWxseSBzZWUgdGhlIHZhbHVlIGluIHJlZmFjdG9yaW5nXG4gICAgLy8gdGhpcyByaWdodCBub3csIHNvIHNvbWUgcGFydHMgc3RpbGwgaGFwcGVuIGhlcmUuXG4gICAgY29uc3QgYnVpbGRlciA9IHNlc3Npb24uYXNzZW1ibHk7XG4gICAgY29uc3QgdGVtcGxhdGUgPSB0aGlzLl90b1Jvc1RlbXBsYXRlKCk7XG5cbiAgICAvLyB3cml0ZSB0aGUgUk9TIHRlbXBsYXRlIGFzIGEgSlNPTiBmaWxlXG4gICAgY29uc3Qgb3V0UGF0aCA9IHBhdGguam9pbihidWlsZGVyLm91dGRpciwgdGhpcy50ZW1wbGF0ZUZpbGUpO1xuICAgIGNvbnN0IHJlc291cmNlcyA9IHRlbXBsYXRlLlJlc291cmNlcyB8fCB7fTtcbiAgICBjb25zdCBudW1iZXJPZlJlc291cmNlcyA9IE9iamVjdC5rZXlzKHJlc291cmNlcykubGVuZ3RoO1xuXG4gICAgaWYgKG51bWJlck9mUmVzb3VyY2VzID4gdGhpcy5tYXhSZXNvdXJjZXMpIHtcbiAgICAgIGNvbnN0IGNvdW50cyA9IE9iamVjdC5lbnRyaWVzKGNvdW50KE9iamVjdC52YWx1ZXMocmVzb3VyY2VzKS5tYXAoKHI6IGFueSkgPT4gYCR7cj8uVHlwZX1gKSkpLm1hcCgoW3R5cGUsIGNdKSA9PiBgJHt0eXBlfSAoJHtjfSlgKS5qb2luKCcsICcpO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBOdW1iZXIgb2YgcmVzb3VyY2VzIGluIHN0YWNrICcke3RoaXMubm9kZS5wYXRofSc6ICR7bnVtYmVyT2ZSZXNvdXJjZXN9IGlzIGdyZWF0ZXIgdGhhbiBhbGxvd2VkIG1heGltdW0gb2YgJHt0aGlzLm1heFJlc291cmNlc306ICR7Y291bnRzfWApO1xuICAgIH1cblxuICAgIGNvbnN0IHRleHQgPSBKU09OLnN0cmluZ2lmeSh0ZW1wbGF0ZSwgdW5kZWZpbmVkLCAyKTtcbiAgICBmcy53cml0ZUZpbGVTeW5jKG91dFBhdGgsIHRleHQpO1xuXG4gICAgLy8gRGVsZWdhdGUgYWRkaW5nIGFydGlmYWN0cyB0byB0aGUgU3ludGhlc2l6ZXJcbiAgICAvLyB0aGlzLnN5bnRoZXNpemVyLnN5bnRoZXNpemUoc2Vzc2lvbik7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgUm9zVGVtcGxhdGUgdGVtcGxhdGUgZm9yIHRoaXMgc3RhY2sgYnkgdHJhdmVyc2luZ1xuICAgKiB0aGUgdHJlZSBhbmQgaW52b2tpbmcgX3RvUm9zVGVtcGxhdGUoKSBvbiBhbGwgRW50aXR5IG9iamVjdHMuXG4gICAqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgcHJvdGVjdGVkIF90b1Jvc1RlbXBsYXRlKCkge1xuICAgIGNvbnN0IHRlbXBsYXRlOiBhbnkgPSB7XG4gICAgICBEZXNjcmlwdGlvbjogdGhpcy50ZW1wbGF0ZU9wdGlvbnMuZGVzY3JpcHRpb24sXG4gICAgICBNZXRhZGF0YTogdGhpcy50ZW1wbGF0ZU9wdGlvbnMubWV0YWRhdGEsXG4gICAgfTtcblxuICAgIGNvbnN0IGVsZW1lbnRzID0gcm9zRWxlbWVudHModGhpcyk7XG4gICAgY29uc3QgZnJhZ21lbnRzID0gZWxlbWVudHMubWFwKChlKSA9PiB0aGlzLnJlc29sdmUoZS5fdG9Sb3NUZW1wbGF0ZSgpKSk7XG5cbiAgICAvLyBtZXJnZSBpbiBhbGwgUk9TIGZyYWdtZW50cyBjb2xsZWN0ZWQgZnJvbSB0aGUgdHJlZVxuICAgIGZvciAoY29uc3QgZnJhZ21lbnQgb2YgZnJhZ21lbnRzKSB7XG4gICAgICBtZXJnZSh0ZW1wbGF0ZSwgZnJhZ21lbnQpO1xuICAgIH1cblxuICAgIC8vIHJlc29sdmUgYWxsIHRva2VucyBhbmQgcmVtb3ZlIGFsbCBlbXB0aWVzXG4gICAgY29uc3QgcmV0ID0gdGhpcy5yZXNvbHZlKHRlbXBsYXRlKSB8fCB7fTtcblxuICAgIHRoaXMuX2xvZ2ljYWxJZHMuYXNzZXJ0QWxsUmVuYW1lc0FwcGxpZWQoKTtcblxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICAvKipcbiAgICogRGVwcmVjYXRlZC5cbiAgICpcbiAgICogQHJldHVybnMgcmVmZXJlbmNlIGl0c2VsZiB3aXRob3V0IGFueSBjaGFuZ2VcbiAgICogQGRlcHJlY2F0ZWQgY3Jvc3MgcmVmZXJlbmNlIGhhbmRsaW5nIGhhcyBiZWVuIG1vdmVkIHRvIGBBcHAucHJlcGFyZSgpYC5cbiAgICovXG4gIHByb3RlY3RlZCBwcmVwYXJlQ3Jvc3NSZWZlcmVuY2UoXG4gICAgX3NvdXJjZVN0YWNrOiBTdGFjayxcbiAgICByZWZlcmVuY2U6IFJlZmVyZW5jZVxuICApOiBJUmVzb2x2YWJsZSB7XG4gICAgcmV0dXJuIHJlZmVyZW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayB3aGV0aGVyIHRoaXMgc3RhY2sgaGFzIGEgKHRyYW5zaXRpdmUpIGRlcGVuZGVuY3kgb24gYW5vdGhlciBzdGFja1xuICAgKlxuICAgKiBSZXR1cm5zIHRoZSBsaXN0IG9mIHJlYXNvbnMgb24gdGhlIGRlcGVuZGVuY3kgcGF0aCwgb3IgdW5kZWZpbmVkXG4gICAqIGlmIHRoZXJlIGlzIG5vIGRlcGVuZGVuY3kuXG4gICAqL1xuICBwcml2YXRlIHN0YWNrRGVwZW5kZW5jeVJlYXNvbnMob3RoZXI6IFN0YWNrKTogc3RyaW5nW10gfCB1bmRlZmluZWQge1xuICAgIGlmICh0aGlzID09PSBvdGhlcikge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IGRlcCBvZiBPYmplY3QudmFsdWVzKHRoaXMuX3N0YWNrRGVwZW5kZW5jaWVzKSkge1xuICAgICAgY29uc3QgcmV0ID0gZGVwLnN0YWNrLnN0YWNrRGVwZW5kZW5jeVJlYXNvbnMob3RoZXIpO1xuICAgICAgaWYgKHJldCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBbLi4uZGVwLnJlYXNvbnMsIC4uLnJldF07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICAvKipcbiAgICogQ2FsY3VsYXRlIHRoZSBzdGFjayBuYW1lIGJhc2VkIG9uIHRoZSBjb25zdHJ1Y3QgcGF0aFxuICAgKlxuICAgKiBUaGUgc3RhY2sgbmFtZSBpcyB0aGUgbmFtZSB1bmRlciB3aGljaCB3ZSdsbCBkZXBsb3kgdGhlIHN0YWNrLFxuICAgKiBhbmQgaW5jb3Jwb3JhdGVzIGNvbnRhaW5pbmcgU3RhZ2UgbmFtZXMgYnkgZGVmYXVsdC5cbiAgICpcbiAgICogR2VuZXJhbGx5IHRoaXMgbG9va3MgYSBsb3QgbGlrZSBob3cgbG9naWNhbCBJRHMgYXJlIGNhbGN1bGF0ZWQuXG4gICAqIFRoZSBzdGFjayBuYW1lIGlzIGNhbGN1bGF0ZWQgYmFzZWQgb24gdGhlIGNvbnN0cnVjdCByb290IHBhdGgsXG4gICAqIGFzIGZvbGxvd3M6XG4gICAqXG4gICAqIC0gUGF0aCBpcyBjYWxjdWxhdGVkIHdpdGggcmVzcGVjdCB0byBjb250YWluaW5nIEFwcCBvciBTdGFnZSAoaWYgYW55KVxuICAgKiAtIElmIHRoZSBwYXRoIGlzIG9uZSBjb21wb25lbnQgbG9uZyBqdXN0IHVzZSB0aGF0IGNvbXBvbmVudCwgb3RoZXJ3aXNlXG4gICAqICAgY29tYmluZSB0aGVtIHdpdGggYSBoYXNoLlxuICAgKlxuICAgKiBTaW5jZSB0aGUgaGFzaCBpcyBxdWl0ZSB1Z2x5IGFuZCB3ZSdkIGxpa2UgdG8gYXZvaWQgaXQgaWYgcG9zc2libGUgLS0gYnV0XG4gICAqIHdlIGNhbid0IGFueW1vcmUgaW4gdGhlIGdlbmVyYWwgY2FzZSBzaW5jZSBpdCBoYXMgYmVlbiB3cml0dGVuIGludG8gbGVnYWN5XG4gICAqIHN0YWNrcy4gVGhlIGludHJvZHVjdGlvbiBvZiBTdGFnZXMgbWFrZXMgaXQgcG9zc2libGUgdG8gbWFrZSB0aGlzIG5pY2VyIGhvd2V2ZXIuXG4gICAqIFdoZW4gYSBTdGFjayBpcyBuZXN0ZWQgaW5zaWRlIGEgU3RhZ2UsIHdlIHVzZSB0aGUgcGF0aCBjb21wb25lbnRzIGJlbG93IHRoZVxuICAgKiBTdGFnZSwgYW5kIHByZWZpeCB0aGUgcGF0aCBjb21wb25lbnRzIG9mIHRoZSBTdGFnZSBiZWZvcmUgaXQuXG4gICAqL1xuICBwcml2YXRlIGdlbmVyYXRlU3RhY2tOYW1lKCkge1xuICAgIGNvbnN0IGFzc2VtYmx5ID0gU3RhZ2Uub2YodGhpcyk7XG4gICAgY29uc3QgcHJlZml4ID1cbiAgICAgIGFzc2VtYmx5ICYmIGFzc2VtYmx5LnN0YWdlTmFtZSA/IGAke2Fzc2VtYmx5LnN0YWdlTmFtZX0tYCA6IFwiXCI7XG4gICAgcmV0dXJuIGAke3ByZWZpeH0ke3RoaXMuZ2VuZXJhdGVTdGFja0lkKGFzc2VtYmx5KX1gO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBhcnRpZmFjdCBJRCBmb3IgdGhpcyBzdGFja1xuICAgKlxuICAgKiBTdGFjayBhcnRpZmFjdCBJRCBpcyB1bmlxdWUgd2l0aGluIHRoZSBBcHAncyBDbG91ZCBBc3NlbWJseS5cbiAgICovXG4gIHByaXZhdGUgZ2VuZXJhdGVTdGFja0FydGlmYWN0SWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2VuZXJhdGVTdGFja0lkKHRoaXMubm9kZS5yb290KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZW5lcmF0ZSBhbiBJRCB3aXRoIHJlc3BlY3QgdG8gdGhlIGdpdmVuIGNvbnRhaW5lciBjb25zdHJ1Y3QuXG4gICAqL1xuICBwcml2YXRlIGdlbmVyYXRlU3RhY2tJZChjb250YWluZXI6IElDb25zdHJ1Y3QgfCB1bmRlZmluZWQpIHtcbiAgICBjb25zdCByb290UGF0aCA9IHJvb3RQYXRoVG8odGhpcywgY29udGFpbmVyKTtcbiAgICBjb25zdCBpZHMgPSByb290UGF0aC5tYXAoKGMpID0+IGMubm9kZS5pZCk7XG5cbiAgICAvLyBJbiB1bml0IHRlc3RzIG91ciBTdGFjayAod2hpY2ggaXMgdGhlIG9ubHkgY29tcG9uZW50KSBtYXkgbm90IGhhdmUgYW5cbiAgICAvLyBpZCwgc28gaW4gdGhhdCBjYXNlIGp1c3QgcHJldGVuZCBpdCdzIFwiU3RhY2tcIi5cbiAgICBpZiAoaWRzLmxlbmd0aCA9PT0gMSAmJiAhaWRzWzBdKSB7XG4gICAgICBpZHNbMF0gPSBcIlN0YWNrXCI7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ha2VTdGFja05hbWUoaWRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgc3RhY2sgcmVxdWlyZXMgYnVuZGxpbmcgb3Igbm90XG4gICAqL1xuICBwdWJsaWMgZ2V0IGJ1bmRsaW5nUmVxdWlyZWQoKSB7XG4gICAgY29uc3QgYnVuZGxpbmdTdGFja3M6IHN0cmluZ1tdID0gdGhpcy5ub2RlLnRyeUdldENvbnRleHQoY3hhcGkuQlVORExJTkdfU1RBQ0tTKSA/PyBbJyoqJ107XG5cbiAgICByZXR1cm4gYnVuZGxpbmdTdGFja3Muc29tZShwYXR0ZXJuID0+IG1pbmltYXRjaChcbiAgICAgICAgdGhpcy5ub2RlLnBhdGgsIC8vIHVzZSB0aGUgc2FtZSB2YWx1ZSBmb3IgcGF0dGVybiBtYXRjaGluZyBhcyB0aGUgQUxJWVVOLWNkayBDTEkgKGRpc3BsYXlOYW1lIC8gaGllcmFyY2hpY2FsSWQpXG4gICAgICAgIHBhdHRlcm4sXG4gICAgKSk7XG4gIH1cblxuICAvKipcbiAgICogU3BsaXRzIHRoZSBwcm92aWRlZCBBUk4gaW50byBpdHMgY29tcG9uZW50cy5cbiAgICogV29ya3MgYm90aCBpZiAnYXJuJyBpcyBhIHN0cmluZyBsaWtlICdhY3M6cmFtOjoxMjM0NTY3ODkwMTIqKioqOnJvbGUvUm9sZU5hbWUnLFxuICAgKiBhbmQgYSBUb2tlbiByZXByZXNlbnRpbmcgYSBkeW5hbWljIFJPUyBleHByZXNzaW9uXG4gICAqIChpbiB3aGljaCBjYXNlIHRoZSByZXR1cm5lZCBjb21wb25lbnRzIHdpbGwgYWxzbyBiZSBkeW5hbWljIFJPUyBleHByZXNzaW9ucyxcbiAgICogZW5jb2RlZCBhcyBUb2tlbnMpLlxuICAgKlxuICAgKiBAcGFyYW0gYXJuIHRoZSBBUk4gdG8gc3BsaXQgaW50byBpdHMgY29tcG9uZW50c1xuICAgKiBAcGFyYW0gYXJuRm9ybWF0IHRoZSBleHBlY3RlZCBmb3JtYXQgb2YgJ2FybicgLSBkZXBlbmRzIG9uIHdoYXQgZm9ybWF0IHRoZSBzZXJ2aWNlICdhcm4nIHJlcHJlc2VudHMgdXNlc1xuICAgKi9cbiAgcHVibGljIHNwbGl0QXJuKGFybjogc3RyaW5nIHwgSVJlc29sdmFibGUsIGFybkZvcm1hdDogQXJuRm9ybWF0KTogQXJuQ29tcG9uZW50cyB7XG4gICAgcmV0dXJuIEFybi5zcGxpdChhcm4sIGFybkZvcm1hdCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWVyZ2UodGVtcGxhdGU6IGFueSwgZnJhZ21lbnQ6IGFueSk6IHZvaWQge1xuICBmb3IgKGNvbnN0IHNlY3Rpb24gb2YgT2JqZWN0LmtleXMoZnJhZ21lbnQpKSB7XG4gICAgY29uc3Qgc3JjID0gZnJhZ21lbnRbc2VjdGlvbl07XG5cbiAgICAvLyBjcmVhdGUgdG9wLWxldmVsIHNlY3Rpb24gaWYgaXQgZG9lc24ndCBleGlzdFxuICAgIGNvbnN0IGRlc3QgPSB0ZW1wbGF0ZVtzZWN0aW9uXTtcbiAgICBpZiAoIWRlc3QpIHtcbiAgICAgIHRlbXBsYXRlW3NlY3Rpb25dID0gc3JjO1xuICAgIH0gZWxzZSB7XG4gICAgICB0ZW1wbGF0ZVtzZWN0aW9uXSA9IG1lcmdlU2VjdGlvbihzZWN0aW9uLCBkZXN0LCBzcmMpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBtZXJnZVNlY3Rpb24oc2VjdGlvbjogc3RyaW5nLCB2YWwxOiBhbnksIHZhbDI6IGFueSk6IGFueSB7XG4gIHN3aXRjaCAoc2VjdGlvbikge1xuICAgIGNhc2UgXCJEZXNjcmlwdGlvblwiOlxuICAgICAgcmV0dXJuIGAke3ZhbDF9XFxuJHt2YWwyfWA7XG4gICAgY2FzZSBcIlJlc291cmNlc1wiOlxuICAgIGNhc2UgXCJDb25kaXRpb25zXCI6XG4gICAgY2FzZSBcIlBhcmFtZXRlcnNcIjpcbiAgICBjYXNlIFwiT3V0cHV0c1wiOlxuICAgIGNhc2UgXCJNYXBwaW5nc1wiOlxuICAgIGNhc2UgXCJSdWxlc1wiOlxuICAgICAgcmV0dXJuIG1lcmdlT2JqZWN0c1dpdGhvdXREdXBsaWNhdGVzKHNlY3Rpb24sIHZhbDEsIHZhbDIpO1xuICAgIGNhc2UgXCJNZXRhZGF0YVwiOlxuICAgICAgcmV0dXJuIG1lcmdlTWV0YWRhdGFPYmplY3RzV2l0aG91dER1cGxpY2F0ZXModmFsMSwgdmFsMik7XG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYENESyBkb2Vzbid0IGtub3cgaG93IHRvIG1lcmdlIHR3byBpbnN0YW5jZXMgb2YgdGhlIFJPUyB0ZW1wbGF0ZSBzZWN0aW9uICcke3NlY3Rpb259JyAtIGAgK1xuICAgICAgICAgIFwicGxlYXNlIHJlbW92ZSBvbmUgb2YgdGhlbSBmcm9tIHlvdXIgY29kZVwiXG4gICAgICApO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1lcmdlTWV0YWRhdGFPYmplY3RzV2l0aG91dER1cGxpY2F0ZXMoXG4gICAgZGVzdDogYW55LFxuICAgIHNyYzogYW55XG4pOiBhbnkge1xuICBpZiAodHlwZW9mIGRlc3QgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIHNyYyAhPT0gXCJvYmplY3RcIikge1xuICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0aW5nIE1ldGFkYXRhIFZhbHVlIHRvIGJlIGFuIG9iamVjdGApO1xuICB9XG4gIGlmIChzcmMuaGFzT3duUHJvcGVydHkoJ0FMSVlVTjo6Uk9TOjpJbnRlcmZhY2UnKSkge1xuICAgIGlmICh0eXBlb2Ygc3JjW1wiQUxJWVVOOjpST1M6OkludGVyZmFjZVwiXSA9PSBcIm9iamVjdFwiKSB7XG4gICAgICBpZiAoc3JjW1wiQUxJWVVOOjpST1M6OkludGVyZmFjZVwiXS5oYXNPd25Qcm9wZXJ0eSgnVGVtcGxhdGVUYWdzJykpIHtcbiAgICAgICAgaWYgKHNyY1tcIkFMSVlVTjo6Uk9TOjpJbnRlcmZhY2VcIl0gW1wiVGVtcGxhdGVUYWdzXCJdIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICBzcmNbXCJBTElZVU46OlJPUzo6SW50ZXJmYWNlXCJdIFtcIlRlbXBsYXRlVGFnc1wiXS5wdXNoKFwiQ3JlYXRlIGJ5IFJPUyBDREtcIilcbiAgICAgICAgICBkZXN0W1wiQUxJWVVOOjpST1M6OkludGVyZmFjZVwiXSA9IHNyY1tcIkFMSVlVTjo6Uk9TOjpJbnRlcmZhY2VcIl1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGluZyBNZXRhZGF0YSBBTElZVU46OlJPUzo6SW50ZXJmYWNlIFRlbXBsYXRlVGFncyBWYWx1ZSB0byBiZSBhbiBBcnJheWApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgZGVzdFtcIkFMSVlVTjo6Uk9TOjpJbnRlcmZhY2VcIl0gPSBzcmNbXCJBTElZVU46OlJPUzo6SW50ZXJmYWNlXCJdXG4gICAgICAgIGRlc3RbXCJBTElZVU46OlJPUzo6SW50ZXJmYWNlXCJdLlRlbXBsYXRlVGFncyA9IFtcIkNyZWF0ZSBieSBST1MgQ0RLXCJdXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RpbmcgTWV0YWRhdGEgQUxJWVVOOjpST1M6OkludGVyZmFjZSBWYWx1ZSB0byBiZSBhbiBvYmplY3RgKTtcbiAgICB9XG4gIH1cbiAgZWxzZSB7XG4gICAgZGVzdFtcIkFMSVlVTjo6Uk9TOjpJbnRlcmZhY2VcIl0gPSB7IFRlbXBsYXRlVGFncyA6IFtcIkNyZWF0ZSBieSBST1MgQ0RLXCJdfVxuICB9XG4gIGZvciAoY29uc3QgaWQgb2YgT2JqZWN0LmtleXMoc3JjKSkge1xuICAgIGlmIChpZCAhPT0gJ0FMSVlVTjo6Uk9TOjpJbnRlcmZhY2UnKSB7XG4gICAgICBkZXN0W2lkXSA9IHNyY1tpZF07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRlc3Q7XG59XG5cbmZ1bmN0aW9uIG1lcmdlT2JqZWN0c1dpdGhvdXREdXBsaWNhdGVzKFxuICBzZWN0aW9uOiBzdHJpbmcsXG4gIGRlc3Q6IGFueSxcbiAgc3JjOiBhbnlcbik6IGFueSB7XG4gIGlmICh0eXBlb2YgZGVzdCAhPT0gXCJvYmplY3RcIikge1xuICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0aW5nICcke0pTT04uc3RyaW5naWZ5KGRlc3QpfScgdG8gYmUgYW4gb2JqZWN0YCk7XG4gIH1cbiAgaWYgKHR5cGVvZiBzcmMgIT09IFwib2JqZWN0XCIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGluZyAnJHtKU09OLnN0cmluZ2lmeShzcmMpfScgdG8gYmUgYW4gb2JqZWN0YCk7XG4gIH1cblxuICAvLyBhZGQgYWxsIGVudGl0aWVzIGZyb20gc291cmNlIHNlY3Rpb24gdG8gZGVzdGluYXRpb24gc2VjdGlvblxuICBmb3IgKGNvbnN0IGlkIG9mIE9iamVjdC5rZXlzKHNyYykpIHtcbiAgICBpZiAoaWQgaW4gZGVzdCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBzZWN0aW9uICcke3NlY3Rpb259JyBhbHJlYWR5IGNvbnRhaW5zICcke2lkfSdgKTtcbiAgICB9XG4gICAgZGVzdFtpZF0gPSBzcmNbaWRdO1xuICB9XG5cbiAgcmV0dXJuIGRlc3Q7XG59XG5cbi8qKlxuICogUk9TIHRlbXBsYXRlIG9wdGlvbnMgZm9yIGEgc3RhY2suXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSVRlbXBsYXRlT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBHZXRzIG9yIHNldHMgdGhlIGRlc2NyaXB0aW9uIG9mIHRoaXMgc3RhY2suXG4gICAqIElmIHByb3ZpZGVkLCBpdCB3aWxsIGJlIGluY2x1ZGVkIGluIHRoZSBST1MgdGVtcGxhdGUncyBcIkRlc2NyaXB0aW9uXCIgYXR0cmlidXRlLlxuICAgKi9cbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIE1ldGFkYXRhIGFzc29jaWF0ZWQgd2l0aCB0aGUgUk9TIHRlbXBsYXRlLlxuICAgKi9cbiAgbWV0YWRhdGE/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9O1xufVxuXG4vKipcbiAqIENvbGxlY3QgYWxsIHJvc0VsZW1lbnRzIGZyb20gYSBTdGFjay5cbiAqXG4gKiBAcGFyYW0gbm9kZSBSb290IG5vZGUgdG8gY29sbGVjdCBhbGwgcm9zRWxlbWVudHMgZnJvbVxuICogQHBhcmFtIGludG8gQXJyYXkgdG8gYXBwZW5kIHJvc0VsZW1lbnRzIHRvXG4gKiBAcmV0dXJucyBUaGUgc2FtZSBhcnJheSBhcyBpcyBiZWluZyBjb2xsZWN0ZWQgaW50b1xuICovXG5mdW5jdGlvbiByb3NFbGVtZW50cyhub2RlOiBJQ29uc3RydWN0LCBpbnRvOiBSb3NFbGVtZW50W10gPSBbXSk6IFJvc0VsZW1lbnRbXSB7XG4gIGlmIChSb3NFbGVtZW50LmlzUm9zRWxlbWVudChub2RlKSkge1xuICAgIGludG8ucHVzaChub2RlKTtcbiAgfVxuXG4gIGZvciAoY29uc3QgY2hpbGQgb2Ygbm9kZS5ub2RlLmNoaWxkcmVuKSB7XG4gICAgLy8gRG9uJ3QgcmVjdXJzZSBpbnRvIGEgc3Vic3RhY2tcbiAgICBpZiAoU3RhY2suaXNTdGFjayhjaGlsZCkpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHJvc0VsZW1lbnRzKGNoaWxkLCBpbnRvKTtcbiAgfVxuXG4gIHJldHVybiBpbnRvO1xufVxuXG4vKipcbiAqIFJldHVybiB0aGUgY29uc3RydWN0IHJvb3QgcGF0aCBvZiB0aGUgZ2l2ZW4gY29uc3RydWN0IHJlbGF0aXZlIHRvIHRoZSBnaXZlbiBhbmNlc3RvclxuICpcbiAqIElmIG5vIGFuY2VzdG9yIGlzIGdpdmVuIG9yIHRoZSBhbmNlc3RvciBpcyBub3QgZm91bmQsIHJldHVybiB0aGUgZW50aXJlIHJvb3QgcGF0aC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJvb3RQYXRoVG8oXG4gIGNvbnN0cnVjdDogSUNvbnN0cnVjdCxcbiAgYW5jZXN0b3I/OiBJQ29uc3RydWN0XG4pOiBJQ29uc3RydWN0W10ge1xuICBjb25zdCBzY29wZXMgPSBjb25zdHJ1Y3Qubm9kZS5zY29wZXM7XG4gIGZvciAobGV0IGkgPSBzY29wZXMubGVuZ3RoIC0gMjsgaSA+PSAwOyBpLS0pIHtcbiAgICBpZiAoc2NvcGVzW2ldID09PSBhbmNlc3Rvcikge1xuICAgICAgcmV0dXJuIHNjb3Blcy5zbGljZShpICsgMSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBzY29wZXM7XG59XG5cbi8qKlxuICogbWFrZVVuaXF1ZUlkLCBzcGVjaWFsaXplZCBmb3IgU3RhY2sgbmFtZXNcbiAqXG4gKiBTdGFjayBuYW1lcyBtYXkgY29udGFpbiAnLScsIHNvIHdlIGFsbG93IHRoYXQgY2hhcmFjdGVyIGlmIHRoZSBzdGFjayBuYW1lXG4gKiBoYXMgb25seSBvbmUgY29tcG9uZW50LiBPdGhlcndpc2Ugd2UgZmFsbCBiYWNrIHRvIHRoZSByZWd1bGFyIFwibWFrZVVuaXF1ZUlkXCJcbiAqIGJlaGF2aW9yLlxuICovXG5mdW5jdGlvbiBtYWtlU3RhY2tOYW1lKGNvbXBvbmVudHM6IHN0cmluZ1tdKSB7XG4gIGlmIChjb21wb25lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgIHJldHVybiBjb21wb25lbnRzWzBdO1xuICB9XG4gIHJldHVybiBtYWtlVW5pcXVlSWQoY29tcG9uZW50cyk7XG59XG5cbi8vIFRoZXNlIGltcG9ydHMgaGF2ZSB0byBiZSBhdCB0aGUgZW5kIHRvIHByZXZlbnQgY2lyY3VsYXIgaW1wb3J0c1xuaW1wb3J0IHsgUm9zRWxlbWVudCB9IGZyb20gXCIuL3Jvcy1lbGVtZW50XCI7XG5pbXBvcnQgeyBSb3NQc2V1ZG8gfSBmcm9tIFwiLi9yb3MtcHNldWRvXCI7XG5pbXBvcnQgeyBSb3NSZXNvdXJjZSB9IGZyb20gXCIuL3Jvcy1yZXNvdXJjZVwiO1xuaW1wb3J0IHsgVGFnVHlwZSB9IGZyb20gXCIuL3RhZy1tYW5hZ2VyXCI7XG5pbXBvcnQgeyBhZGREZXBlbmRlbmN5IH0gZnJvbSBcIi4vZGVwc1wiO1xuaW1wb3J0IHsgUmVmZXJlbmNlIH0gZnJvbSBcIi4vcmVmZXJlbmNlXCI7XG5pbXBvcnQgeyBJUmVzb2x2YWJsZSB9IGZyb20gXCIuL3Jlc29sdmFibGVcIjtcbmltcG9ydCB7XG4gIERlZmF1bHRTdGFja1N5bnRoZXNpemVyLCBpc1JldXNhYmxlU3RhY2tTeW50aGVzaXplcixcbiAgSVN0YWNrU3ludGhlc2l6ZXIsXG59IGZyb20gXCIuL3N0YWNrLXN5bnRoZXNpemVyc1wiO1xuaW1wb3J0IHsgU3RhZ2UgfSBmcm9tIFwiLi9zdGFnZVwiO1xuaW1wb3J0IHsgSVRhZ2dhYmxlLCBUYWdNYW5hZ2VyIH0gZnJvbSBcIi4vdGFnLW1hbmFnZXJcIjtcbmltcG9ydCB7RW52aXJvbm1lbnR9IGZyb20gXCIuL2Vudmlyb25tZW50XCI7XG5pbXBvcnQge0FybiwgQXJuRm9ybWF0LCBBcm5Db21wb25lbnRzfSBmcm9tIFwiLi9hcm5cIjtcblxuaW50ZXJmYWNlIFN0YWNrRGVwZW5kZW5jeSB7XG4gIHN0YWNrOiBTdGFjaztcbiAgcmVhc29uczogc3RyaW5nW107XG59XG5cbmZ1bmN0aW9uIGNvdW50KHhzOiBzdHJpbmdbXSk6IFJlY29yZDxzdHJpbmcsIG51bWJlcj4ge1xuICBjb25zdCByZXQ6IFJlY29yZDxzdHJpbmcsIG51bWJlcj4gPSB7fTtcbiAgZm9yIChjb25zdCB4IG9mIHhzKSB7XG4gICAgaWYgKHggaW4gcmV0KSB7XG4gICAgICByZXRbeF0gKz0gMTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0W3hdID0gMTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJldDtcbn1cbiJdfQ==