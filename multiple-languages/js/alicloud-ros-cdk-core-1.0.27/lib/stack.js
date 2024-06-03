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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdGFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxpREFBaUQ7QUFDakQseUJBQXlCO0FBQ3pCLDZCQUE2QjtBQUM3Qix5REFBOEU7QUFDOUUsMkRBQThFO0FBQzlFLHFEQUFrRDtBQUNsRCwrQ0FBNEM7QUFDNUMsaURBQWtEO0FBQ2xELHlDQUFxQztBQUVyQyxNQUFNLFNBQVMsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7QUFFdkMsTUFBTSxZQUFZLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBQ3RELE1BQU0sY0FBYyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLENBQUMsQ0FBQztBQUVoRSxNQUFNLHNCQUFzQixHQUFHLHlCQUF5QixDQUFDO0FBNkd6RDs7R0FFRztBQUNILE1BQWEsS0FBTSxTQUFRLDRCQUFTO0lBaUpsQzs7Ozs7Ozs7T0FRRztJQUNILFlBQW1CLEtBQWlCLEVBQUUsRUFBVyxFQUFFLFFBQW9CLEVBQUU7UUFDdkUsb0dBQW9HO1FBQ3BHLEtBQUssQ0FBQyxLQUFNLEVBQUUsRUFBRyxDQUFDLENBQUM7UUE5RHJCOztXQUVHO1FBQ2Esb0JBQWUsR0FBcUIsRUFBRSxDQUFDO1FBbUN2RDs7V0FFRztRQUNjLHVCQUFrQixHQUUvQixFQUFFLENBQUM7UUFNVSxpQkFBWSxHQUFXLEdBQUcsQ0FBQztRQWUxQyxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxZQUFZLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUUzRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksdUJBQVUsRUFBRSxDQUFDO1FBRXBDLElBQUksQ0FBQyxnQ0FBZ0M7WUFDbkMsS0FBSyxDQUFDLGdDQUFnQyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7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QUMsQ0FBQyxLQUFLLFFBQVEsRUFBRTtZQUMxQixPQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQzVCO0tBQ0Y7SUFDRCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDO0FBWEQsZ0NBV0M7QUFFRDs7Ozs7O0dBTUc7QUFDSCxTQUFTLGFBQWEsQ0FBQyxVQUFvQjtJQUN6QyxJQUFJLFVBQVUsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1FBQzNCLE9BQU8sVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ3RCO0lBQ0QsT0FBTyx1QkFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ2xDLENBQUM7QUFFRCxrRUFBa0U7QUFDbEUsK0NBQTJDO0FBQzNDLDZDQUF5QztBQUV6QywrQ0FBd0M7QUFDeEMsaUNBQXVDO0FBR3ZDLDZEQUc4QjtBQUM5QixtQ0FBZ0M7QUFDaEMsK0NBQXNEO0FBUXRELFNBQVMsS0FBSyxDQUFDLEVBQVk7SUFDekIsTUFBTSxHQUFHLEdBQTJCLEVBQUUsQ0FBQztJQUN2QyxLQUFLLE1BQU0sQ0FBQyxJQUFJLEVBQUUsRUFBRTtRQUNsQixJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUU7WUFDWixHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2I7YUFBTTtZQUNMLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDWjtLQUNGO0lBQ0QsT0FBTyxHQUFHLENBQUM7QUFDYixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY3hhcGkgZnJvbSBcIkBhbGljbG91ZC9yb3MtY2RrLWN4YXBpXCI7XG5pbXBvcnQgKiBhcyBmcyBmcm9tIFwiZnNcIjtcbmltcG9ydCAqIGFzIHBhdGggZnJvbSBcInBhdGhcIjtcbmltcG9ydCB7IENvbnN0cnVjdCwgSUNvbnN0cnVjdCwgSVN5bnRoZXNpc1Nlc3Npb24gfSBmcm9tIFwiLi9jb25zdHJ1Y3QtY29tcGF0XCI7XG5pbXBvcnQgeyBST1NfVE9LRU5fUkVTT0xWRVIsIFJvc1RlbXBsYXRlTGFuZyB9IGZyb20gXCIuL3ByaXZhdGUvdGVtcGxhdGUtbGFuZ1wiO1xuaW1wb3J0IHsgTG9naWNhbElEcyB9IGZyb20gXCIuL3ByaXZhdGUvbG9naWNhbC1pZFwiO1xuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gXCIuL3ByaXZhdGUvcmVzb2x2ZVwiO1xuaW1wb3J0IHsgbWFrZVVuaXF1ZUlkIH0gZnJvbSBcIi4vcHJpdmF0ZS91bmlxdWVpZFwiO1xuaW1wb3J0IHsgUm9zSW5mbyB9IGZyb20gXCIuL3Jvcy1pbmZvXCI7XG5cbmNvbnN0IG1pbmltYXRjaCA9IHJlcXVpcmUoJ21pbmltYXRjaCcpO1xuXG5jb25zdCBTVEFDS19TWU1CT0wgPSBTeW1ib2wuZm9yKFwicm9zLWNkay1jb3JlLlN0YWNrXCIpO1xuY29uc3QgTVlfU1RBQ0tfQ0FDSEUgPSBTeW1ib2wuZm9yKFwicm9zLWNkay1jb3JlLlN0YWNrLm15U3RhY2tcIik7XG5cbmNvbnN0IFZBTElEX1NUQUNLX05BTUVfUkVHRVggPSAvXltBLVphLXpdW0EtWmEtejAtOS1dKiQvO1xuXG5leHBvcnQgaW50ZXJmYWNlIFJhbVJvbGVzIHtcbiAgLyoqXG4gICAqIFRoZSBSQU0gcm9sZSBBUk4gdGhhdCBncmFudHMgRkMgZnVuY3Rpb24gdGhlIHJlcXVpcmVkIHBlcm1pc3Npb25zLlxuICAgKi9cbiAgcmVhZG9ubHkgZmNSb2xlOiBJUmVzb2x2YWJsZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTdGFja1Byb3BzIHtcbiAgcmVhZG9ubHkgdmVyc2lvbj86IFN0cmluZztcbiAgLyoqXG4gICAqIEEgZGVzY3JpcHRpb24gb2YgdGhlIHN0YWNrLlxuICAgKlxuICAgKiBAZGVmYXVsdCAtIE5vIGRlc2NyaXB0aW9uLlxuICAgKi9cbiAgcmVhZG9ubHkgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBBTElZVU4gZW52aXJvbm1lbnQgKGFjY291bnQvcmVnaW9uKSB3aGVyZSB0aGlzIHN0YWNrIHdpbGwgYmUgZGVwbG95ZWQuXG4gICAqXG4gICAqIFNldCB0aGUgYHJlZ2lvbmAvYGFjY291bnRgIGZpZWxkcyBvZiBgZW52YCB0byBlaXRoZXIgYSBjb25jcmV0ZSB2YWx1ZSB0b1xuICAgKiBzZWxlY3QgdGhlIGluZGljYXRlZCBlbnZpcm9ubWVudCAocmVjb21tZW5kZWQgZm9yIHByb2R1Y3Rpb24gc3RhY2tzKSwgb3IgdG9cbiAgICogdGhlIHZhbHVlcyBvZiBlbnZpcm9ubWVudCB2YXJpYWJsZXNcbiAgICogYENES19ERUZBVUxUX1JFR0lPTmAvYENES19ERUZBVUxUX0FDQ09VTlRgIHRvIGxldCB0aGUgdGFyZ2V0IGVudmlyb25tZW50XG4gICAqIGRlcGVuZCBvbiB0aGUgQUxJWVVOIGNyZWRlbnRpYWxzL2NvbmZpZ3VyYXRpb24gdGhhdCB0aGUgQ0RLIENMSSBpcyBleGVjdXRlZFxuICAgKiB1bmRlciAocmVjb21tZW5kZWQgZm9yIGRldmVsb3BtZW50IHN0YWNrcykuXG4gICAqXG4gICAqIElmIHRoZSBgU3RhY2tgIGlzIGluc3RhbnRpYXRlZCBpbnNpZGUgYSBgU3RhZ2VgLCBhbnkgdW5kZWZpbmVkXG4gICAqIGByZWdpb25gL2BhY2NvdW50YCBmaWVsZHMgZnJvbSBgZW52YCB3aWxsIGRlZmF1bHQgdG8gdGhlIHNhbWUgZmllbGQgb24gdGhlXG4gICAqIGVuY29tcGFzc2luZyBgU3RhZ2VgLCBpZiBjb25maWd1cmVkIHRoZXJlLlxuICAgKlxuICAgKiBJZiBlaXRoZXIgYHJlZ2lvbmAgb3IgYGFjY291bnRgIGFyZSBub3Qgc2V0IG5vciBpbmhlcml0ZWQgZnJvbSBgU3RhZ2VgLCB0aGVcbiAgICogU3RhY2sgd2lsbCBiZSBjb25zaWRlcmVkIFwiKmVudmlyb25tZW50LWFnbm9zdGljKlwiXCIuIEVudmlyb25tZW50LWFnbm9zdGljXG4gICAqIHN0YWNrcyBjYW4gYmUgZGVwbG95ZWQgdG8gYW55IGVudmlyb25tZW50IGJ1dCBtYXkgbm90IGJlIGFibGUgdG8gdGFrZVxuICAgKiBhZHZhbnRhZ2Ugb2YgYWxsIGZlYXR1cmVzIG9mIHRoZSBDREsuXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqXG4gICAqIC8vIFVzZSBhIGNvbmNyZXRlIGFjY291bnQgYW5kIHJlZ2lvbiB0byBkZXBsb3kgdGhpcyBzdGFjayB0bzpcbiAgICogLy8gYC5hY2NvdW50YCBhbmQgYC5yZWdpb25gIHdpbGwgc2ltcGx5IHJldHVybiB0aGVzZSB2YWx1ZXMuXG4gICAqIG5ldyBTdGFjayhhcHAsICdTdGFjazEnLCB7XG4gICAqICAgZW52OiB7XG4gICAqICAgICBhY2NvdW50OiAnMTIzNDU2Nzg5MDEyJyxcbiAgICogICAgIHJlZ2lvbjogJ2NuLWhhbmd6aG91J1xuICAgKiAgIH0sXG4gICAqIH0pO1xuICAgKlxuICAgKiAvLyBVc2UgdGhlIENMSSdzIGN1cnJlbnQgY3JlZGVudGlhbHMgdG8gZGV0ZXJtaW5lIHRoZSB0YXJnZXQgZW52aXJvbm1lbnQ6XG4gICAqIC8vIGAuYWNjb3VudGAgYW5kIGAucmVnaW9uYCB3aWxsIHJlZmxlY3QgdGhlIGFjY291bnQrcmVnaW9uIHRoZSBDTElcbiAgICogLy8gaXMgY29uZmlndXJlZCB0byB1c2UgKGJhc2VkIG9uIHRoZSB1c2VyIENMSSBjcmVkZW50aWFscylcbiAgICogbmV3IFN0YWNrKGFwcCwgJ1N0YWNrMicsIHtcbiAgICogICBlbnY6IHtcbiAgICogICAgIGFjY291bnQ6IHByb2Nlc3MuZW52LkNES19ERUZBVUxUX0FDQ09VTlQsXG4gICAqICAgICByZWdpb246IHByb2Nlc3MuZW52LkNES19ERUZBVUxUX1JFR0lPTlxuICAgKiAgIH0sXG4gICAqIH0pO1xuICAgKlxuICAgKiAvLyBEZWZpbmUgbXVsdGlwbGUgc3RhY2tzIHN0YWdlIGFzc29jaWF0ZWQgd2l0aCBhbiBlbnZpcm9ubWVudFxuICAgKiBjb25zdCBteVN0YWdlID0gbmV3IFN0YWdlKGFwcCwgJ015U3RhZ2UnLCB7XG4gICAqICAgZW52OiB7XG4gICAqICAgICBhY2NvdW50OiAnMTIzNDU2Nzg5MDEyJyxcbiAgICogICAgIHJlZ2lvbjogJ2NuLWhhbmd6aG91J1xuICAgKiAgIH1cbiAgICogfSk7XG4gICAqXG4gICAqIC8vIGJvdGggb2YgdGhlc2Ugc3RhY2tzIHdpbGwgdXNlIHRoZSBzdGFnZSdzIGFjY291bnQvcmVnaW9uOlxuICAgKiAvLyBgLmFjY291bnRgIGFuZCBgLnJlZ2lvbmAgd2lsbCByZXNvbHZlIHRvIHRoZSBjb25jcmV0ZSB2YWx1ZXMgYXMgYWJvdmVcbiAgICogbmV3IE15U3RhY2sobXlTdGFnZSwgJ1N0YWNrMScpO1xuICAgKiBuZXcgWW91clN0YWNrKG15U3RhZ2UsICdTdGFjazInKTtcbiAgICpcbiAgICogLy8gRGVmaW5lIGFuIGVudmlyb25tZW50LWFnbm9zdGljIHN0YWNrOlxuICAgKiAvLyBgLmFjY291bnRgIGFuZCBgLnJlZ2lvbmAgd2lsbCByZXNvbHZlIHRvIGB7IFwiUmVmXCI6IFwiQUxJWVVOOjpBY2NvdW50SWRcIiB9YCBhbmQgYHsgXCJSZWZcIjogXCJBTElZVU46OlJlZ2lvblwiIH1gIHJlc3BlY3RpdmVseS5cbiAgICogLy8gd2hpY2ggd2lsbCBvbmx5IHJlc29sdmUgdG8gYWN0dWFsIHZhbHVlcyBieSBST1MgZHVyaW5nIGRlcGxveW1lbnQuXG4gICAqIG5ldyBNeVN0YWNrKGFwcCwgJ1N0YWNrMScpO1xuICAgKlxuICAgKiBAZGVmYXVsdCAtIFRoZSBlbnZpcm9ubWVudCBvZiB0aGUgY29udGFpbmluZyBgU3RhZ2VgIGlmIGF2YWlsYWJsZSxcbiAgICogb3RoZXJ3aXNlIGNyZWF0ZSB0aGUgc3RhY2sgd2lsbCBiZSBlbnZpcm9ubWVudC1hZ25vc3RpYy5cbiAgICpcbiAgICogQGV4cGVyaW1lbnRhbFxuICAgKi9cbiAgcmVhZG9ubHkgZW52PzogRW52aXJvbm1lbnQ7XG5cbiAgLyoqXG4gICAqIE5hbWUgdG8gZGVwbG95IHRoZSBzdGFjayB3aXRoXG4gICAqXG4gICAqIEBkZWZhdWx0IC0gRGVyaXZlZCBmcm9tIGNvbnN0cnVjdCBwYXRoLlxuICAgKi9cbiAgcmVhZG9ubHkgc3RhY2tOYW1lPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBTdGFjayB0YWdzIHRoYXQgd2lsbCBiZSBhcHBsaWVkIHRvIGFsbCB0aGUgdGFnZ2FibGUgcmVzb3VyY2VzIGFuZCB0aGUgc3RhY2sgaXRzZWxmLlxuICAgKlxuICAgKiBAZGVmYXVsdCB7fVxuICAgKi9cbiAgcmVhZG9ubHkgdGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG5cbiAgLyoqXG4gICAqIFN5bnRoZXNpcyBtZXRob2QgdG8gdXNlIHdoaWxlIGRlcGxveWluZyB0aGlzIHN0YWNrXG4gICAqXG4gICAqIEBkZWZhdWx0IC0gYERlZmF1bHRTdGFja1N5bnRoZXNpemVyYFxuICAgKi9cbiAgcmVhZG9ubHkgc3ludGhlc2l6ZXI/OiBJU3RhY2tTeW50aGVzaXplcjtcblxuICByZWFkb25seSBtZXRhZGF0YT86IHtba2V5OiBzdHJpbmddOiBhbnl9O1xuXG4gIHJlYWRvbmx5IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50PzogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBBIHJvb3QgY29uc3RydWN0IHdoaWNoIHJlcHJlc2VudHMgYSBzaW5nbGUgUk9TIHN0YWNrLlxuICovXG5leHBvcnQgY2xhc3MgU3RhY2sgZXh0ZW5kcyBDb25zdHJ1Y3QgaW1wbGVtZW50cyBJVGFnZ2FibGUge1xuICAvKipcbiAgICogUmV0dXJuIHdoZXRoZXIgdGhlIGdpdmVuIG9iamVjdCBpcyBhIFN0YWNrLlxuICAgKlxuICAgKiBXZSBkbyBhdHRyaWJ1dGUgZGV0ZWN0aW9uIHNpbmNlIHdlIGNhbid0IHJlbGlhYmx5IHVzZSAnaW5zdGFuY2VvZicuXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGlzU3RhY2soeDogYW55KTogeCBpcyBTdGFjayB7XG4gICAgcmV0dXJuIHggIT09IG51bGwgJiYgdHlwZW9mIHggPT09IFwib2JqZWN0XCIgJiYgU1RBQ0tfU1lNQk9MIGluIHg7XG4gIH1cblxuICAvKipcbiAgICogTG9va3MgdXAgdGhlIGZpcnN0IHN0YWNrIHNjb3BlIGluIHdoaWNoIGBjb25zdHJ1Y3RgIGlzIGRlZmluZWQuIEZhaWxzIGlmIHRoZXJlIGlzIG5vIHN0YWNrIHVwIHRoZSB0cmVlLlxuICAgKiBAcGFyYW0gY29uc3RydWN0IFRoZSBjb25zdHJ1Y3QgdG8gc3RhcnQgdGhlIHNlYXJjaCBmcm9tLlxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBvZihjb25zdHJ1Y3Q6IElDb25zdHJ1Y3QpOiBTdGFjayB7XG4gICAgLy8gd2Ugd2FudCB0aGlzIHRvIGJlIGFzIGNoZWFwIGFzIHBvc3NpYmxlLlxuICAgIGNvbnN0IGNhY2hlID0gKGNvbnN0cnVjdCBhcyBhbnkpW01ZX1NUQUNLX0NBQ0hFXSBhcyBTdGFjayB8IHVuZGVmaW5lZDtcbiAgICBpZiAoY2FjaGUpIHtcbiAgICAgIHJldHVybiBjYWNoZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdmFsdWUgPSBfbG9va3VwKGNvbnN0cnVjdCk7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29uc3RydWN0LCBNWV9TVEFDS19DQUNIRSwge1xuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgICB2YWx1ZSxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9sb29rdXAoYzogSUNvbnN0cnVjdCk6IFN0YWNrIHtcbiAgICAgIGlmIChTdGFjay5pc1N0YWNrKGMpKSB7XG4gICAgICAgIHJldHVybiBjO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWMubm9kZS5zY29wZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYE5vIHN0YWNrIGNvdWxkIGJlIGlkZW50aWZpZWQgZm9yIHRoZSBjb25zdHJ1Y3QgYXQgcGF0aCAke2NvbnN0cnVjdC5ub2RlLnBhdGh9YFxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gX2xvb2t1cChjLm5vZGUuc2NvcGUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUYWdzIHRvIGJlIGFwcGxpZWQgdG8gdGhlIHN0YWNrLlxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IHRhZ3M6IFRhZ01hbmFnZXI7XG5cbiAgLyoqXG4gICAqIFRoZSBBTElZVU4gcmVnaW9uIGludG8gd2hpY2ggdGhpcyBzdGFjayB3aWxsIGJlIGRlcGxveWVkIChlLmcuIGBjbi1iZWlqaW5nYCkuXG4gICAqXG4gICAqIFRoaXMgdmFsdWUgaXMgcmVzb2x2ZWQgYWNjb3JkaW5nIHRvIHRoZSBmb2xsb3dpbmcgcnVsZXM6XG4gICAqXG4gICAqIDEuIFRoZSB2YWx1ZSBwcm92aWRlZCB0byBgZW52LnJlZ2lvbmAgd2hlbiB0aGUgc3RhY2sgaXMgZGVmaW5lZC4gVGhpcyBjYW5cbiAgICogICAgZWl0aGVyIGJlIGEgY29uY3JldGUgcmVnaW9uIG9yIHRoZSBgQUxJWVVOLlJFR0lPTmAgdG9rZW4uXG4gICAqIDIuIGBBTElZVU4uUkVHSU9OYCwgd2hpY2ggaXMgcmVwcmVzZW50cyB0aGUgUk9TIGludHJpbnNpYyByZWZlcmVuY2VcbiAgICogICAgYHsgXCJSZWZcIjogXCJBTElZVU46OlJlZ2lvblwiIH1gIGVuY29kZWQgYXMgYSBzdHJpbmcgdG9rZW4uXG4gICAqXG4gICAqIFByZWZlcmFibHksIHlvdSBzaG91bGQgdXNlIHRoZSByZXR1cm4gdmFsdWUgYXMgYW4gb3BhcXVlIHN0cmluZyBhbmQgbm90XG4gICAqIGF0dGVtcHQgdG8gcGFyc2UgaXQgdG8gaW1wbGVtZW50IHlvdXIgbG9naWMuIElmIHlvdSBkbywgeW91IG11c3QgZmlyc3RcbiAgICogY2hlY2sgdGhhdCBpdCBpcyBhIGNvbmNyZXRlIHZhbHVlIGFuIG5vdCBhbiB1bnJlc29sdmVkIHRva2VuLiBJZiB0aGlzXG4gICAqIHZhbHVlIGlzIGFuIHVucmVzb2x2ZWQgdG9rZW4gKGBUb2tlbi5pc1VucmVzb2x2ZWQoc3RhY2sucmVnaW9uKWAgcmV0dXJuc1xuICAgKiBgdHJ1ZWApLCB0aGlzIGltcGxpZXMgdGhhdCB0aGUgdXNlciB3aXNoZXMgdGhhdCB0aGlzIHN0YWNrIHdpbGwgc3ludGhlc2l6ZVxuICAgKiBpbnRvIGEgKipyZWdpb24tYWdub3N0aWMgdGVtcGxhdGUqKi4gSW4gdGhpcyBjYXNlLCB5b3VyIGNvZGUgc2hvdWxkIGVpdGhlclxuICAgKiBmYWlsICh0aHJvdyBhbiBlcnJvciwgZW1pdCBhIHN5bnRoIGVycm9yIHVzaW5nIGBBbm5vdGF0aW9ucy5vZihjb25zdHJ1Y3QpLmFkZEVycm9yKClgKSBvclxuICAgKiBpbXBsZW1lbnQgc29tZSBvdGhlciByZWdpb24tYWdub3N0aWMgYmVoYXZpb3IuXG4gICAqL1xuICBwdWJsaWMgcmVhZG9ubHkgcmVnaW9uOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBBTElZVU4gYWNjb3VudCBpbnRvIHdoaWNoIHRoaXMgc3RhY2sgd2lsbCBiZSBkZXBsb3llZC5cbiAgICpcbiAgICogVGhpcyB2YWx1ZSBpcyByZXNvbHZlZCBhY2NvcmRpbmcgdG8gdGhlIGZvbGxvd2luZyBydWxlczpcbiAgICpcbiAgICogMS4gVGhlIHZhbHVlIHByb3ZpZGVkIHRvIGBlbnYuYWNjb3VudGAgd2hlbiB0aGUgc3RhY2sgaXMgZGVmaW5lZC4gVGhpcyBjYW5cbiAgICogICAgZWl0aGVyIGJlIGEgY29uY3JldGUgYWNjb3VudCBvciB0aGUgYEFMSVlVTi5BQ0NPVU5UX0lEYCB0b2tlbi5cbiAgICogMi4gYEFMSVlVTi5BQ0NPVU5UX0lEYCwgd2hpY2ggcmVwcmVzZW50cyB0aGUgUk9TIGludHJpbnNpYyByZWZlcmVuY2VcbiAgICogICAgYHsgXCJSZWZcIjogXCJBTElZVU46OkFjY291bnRJZFwiIH1gIGVuY29kZWQgYXMgYSBzdHJpbmcgdG9rZW4uXG4gICAqXG4gICAqIFByZWZlcmFibHksIHlvdSBzaG91bGQgdXNlIHRoZSByZXR1cm4gdmFsdWUgYXMgYW4gb3BhcXVlIHN0cmluZyBhbmQgbm90XG4gICAqIGF0dGVtcHQgdG8gcGFyc2UgaXQgdG8gaW1wbGVtZW50IHlvdXIgbG9naWMuIElmIHlvdSBkbywgeW91IG11c3QgZmlyc3RcbiAgICogY2hlY2sgdGhhdCBpdCBpcyBhIGNvbmNyZXRlIHZhbHVlIGFuIG5vdCBhbiB1bnJlc29sdmVkIHRva2VuLiBJZiB0aGlzXG4gICAqIHZhbHVlIGlzIGFuIHVucmVzb2x2ZWQgdG9rZW4gKGBUb2tlbi5pc1VucmVzb2x2ZWQoc3RhY2suYWNjb3VudClgIHJldHVybnNcbiAgICogYHRydWVgKSwgdGhpcyBpbXBsaWVzIHRoYXQgdGhlIHVzZXIgd2lzaGVzIHRoYXQgdGhpcyBzdGFjayB3aWxsIHN5bnRoZXNpemVcbiAgICogaW50byBhICoqYWNjb3VudC1hZ25vc3RpYyB0ZW1wbGF0ZSoqLiBJbiB0aGlzIGNhc2UsIHlvdXIgY29kZSBzaG91bGQgZWl0aGVyXG4gICAqIGZhaWwgKHRocm93IGFuIGVycm9yLCBlbWl0IGEgc3ludGggZXJyb3IgdXNpbmcgYEFubm90YXRpb25zLm9mKGNvbnN0cnVjdCkuYWRkRXJyb3IoKWApIG9yXG4gICAqIGltcGxlbWVudCBzb21lIG90aGVyIHJlZ2lvbi1hZ25vc3RpYyBiZWhhdmlvci5cbiAgICovXG4gIHB1YmxpYyByZWFkb25seSBhY2NvdW50OiBzdHJpbmc7XG5cbiAgcHVibGljIHJvbGVzPzogUmFtUm9sZXM7XG5cbiAgLyoqXG4gICAqIE9wdGlvbnMgZm9yIFJPUyB0ZW1wbGF0ZSAobGlrZSB2ZXJzaW9uLCBkZXNjcmlwdGlvbikuXG4gICAqL1xuICBwdWJsaWMgcmVhZG9ubHkgdGVtcGxhdGVPcHRpb25zOiBJVGVtcGxhdGVPcHRpb25zID0ge307XG5cbiAgLyoqXG4gICAqIElmIHRoaXMgaXMgYSBuZXN0ZWQgc3RhY2ssIHRoaXMgcmVwcmVzZW50cyBpdHMgYEFMSVlVTjo6Uk9TOjpTdGFja2BcbiAgICogcmVzb3VyY2UuIGB1bmRlZmluZWRgIGZvciB0b3AtbGV2ZWwgKG5vbi1uZXN0ZWQpIHN0YWNrcy5cbiAgICpcbiAgICogQGV4cGVyaW1lbnRhbFxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IG5lc3RlZFN0YWNrUmVzb3VyY2U/OiBSb3NSZXNvdXJjZTtcblxuICAvKipcbiAgICogVGhlIG5hbWUgb2YgdGhlIFJPUyB0ZW1wbGF0ZSBmaWxlIGVtaXR0ZWQgdG8gdGhlIG91dHB1dFxuICAgKiBkaXJlY3RvcnkgZHVyaW5nIHN5bnRoZXNpcy5cbiAgICpcbiAgICogQGV4YW1wbGUgTXlTdGFjay50ZW1wbGF0ZS5qc29uXG4gICAqL1xuICBwdWJsaWMgcmVhZG9ubHkgdGVtcGxhdGVGaWxlOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBJRCBvZiB0aGUgY2xvdWQgYXNzZW1ibHkgYXJ0aWZhY3QgZm9yIHRoaXMgc3RhY2suXG4gICAqL1xuICBwdWJsaWMgcmVhZG9ubHkgYXJ0aWZhY3RJZDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBTeW50aGVzaXMgbWV0aG9kIGZvciB0aGlzIHN0YWNrXG4gICAqXG4gICAqIEBleHBlcmltZW50YWxcbiAgICovXG4gIHB1YmxpYyByZWFkb25seSBzeW50aGVzaXplcjogSVN0YWNrU3ludGhlc2l6ZXI7XG5cbiAgLyoqXG4gICAqIExvZ2ljYWwgSUQgZ2VuZXJhdGlvbiBzdHJhdGVneVxuICAgKi9cbiAgcHJpdmF0ZSByZWFkb25seSBfbG9naWNhbElkczogTG9naWNhbElEcztcblxuICAvKipcbiAgICogT3RoZXIgc3RhY2tzIHRoaXMgc3RhY2sgZGVwZW5kcyBvblxuICAgKi9cbiAgcHJpdmF0ZSByZWFkb25seSBfc3RhY2tEZXBlbmRlbmNpZXM6IHtcbiAgICBbdW5pcXVlSWQ6IHN0cmluZ106IFN0YWNrRGVwZW5kZW5jeTtcbiAgfSA9IHt9O1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgX3N0YWNrTmFtZTogc3RyaW5nO1xuXG4gIHB1YmxpYyByZWFkb25seSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuICBwcml2YXRlIHJlYWRvbmx5IG1heFJlc291cmNlczogbnVtYmVyID0gMzAwO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IHN0YWNrLlxuICAgKlxuICAgKiBAcGFyYW0gc2NvcGUgUGFyZW50IG9mIHRoaXMgc3RhY2ssIHVzdWFsbHkgYSBQcm9ncmFtIGluc3RhbmNlLlxuICAgKiBAcGFyYW0gaWQgVGhlIGNvbnN0cnVjdCBJRCBvZiB0aGlzIHN0YWNrLiBJZiBgc3RhY2tOYW1lYCBpcyBub3QgZXhwbGljaXRseVxuICAgKiBkZWZpbmVkLCB0aGlzIGlkIChhbmQgYW55IHBhcmVudCBJRHMpIHdpbGwgYmUgdXNlZCB0byBkZXRlcm1pbmUgdGhlXG4gICAqIHBoeXNpY2FsIElEIG9mIHRoZSBzdGFjay5cbiAgICogQHBhcmFtIHByb3BzIFN0YWNrIHByb3BlcnRpZXMuXG4gICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU/OiBDb25zdHJ1Y3QsIGlkPzogc3RyaW5nLCBwcm9wczogU3RhY2tQcm9wcyA9IHt9KSB7XG4gICAgLy8gRm9yIHVuaXQgdGVzdCBjb252ZW5pZW5jZSBwYXJlbnRzIGFyZSBvcHRpb25hbCwgc28gYnlwYXNzIHRoZSB0eXBlIGNoZWNrIHdoZW4gY2FsbGluZyB0aGUgcGFyZW50LlxuICAgIHN1cGVyKHNjb3BlISwgaWQhKTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBTVEFDS19TWU1CT0wsIHsgdmFsdWU6IHRydWUgfSk7XG5cbiAgICB0aGlzLl9sb2dpY2FsSWRzID0gbmV3IExvZ2ljYWxJRHMoKTtcblxuICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPVxuICAgICAgcHJvcHMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPT09IHVuZGVmaW5lZCA/IHRydWUgOiBmYWxzZTtcblxuICAgIGlmIChwcm9wcy5kZXNjcmlwdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBNYXggbGVuZ3RoIDEwMjQgYnl0ZXNcbiAgICAgIC8vIFR5cGljYWxseSAyIGJ5dGVzIHBlciBjaGFyYWN0ZXIsIG1heSBiZSBtb3JlIGZvciBtb3JlIGV4b3RpYyBjaGFyYWN0ZXJzXG4gICAgICBpZiAocHJvcHMuZGVzY3JpcHRpb24ubGVuZ3RoID4gNTEyKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgU3RhY2sgZGVzY3JpcHRpb24gbXVzdCBiZSA8PSAxMDI0IGJ5dGVzLiBSZWNlaXZlZCBkZXNjcmlwdGlvbjogJyR7cHJvcHMuZGVzY3JpcHRpb259J2BcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHRoaXMudGVtcGxhdGVPcHRpb25zLmRlc2NyaXB0aW9uID0gcHJvcHMuZGVzY3JpcHRpb247XG4gICAgfVxuXG4gICAgaWYgKHByb3BzLm1ldGFkYXRhID09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy50ZW1wbGF0ZU9wdGlvbnMubWV0YWRhdGEgPSB7J0FMSVlVTjo6Uk9TOjpJbnRlcmZhY2UnOnsnVGVtcGxhdGVUYWdzJzpbXCJDcmVhdGUgYnkgUk9TIENES1wiXX19O1xuICAgIH1cblxuICAgIHRoaXMuX3N0YWNrTmFtZSA9XG4gICAgICBwcm9wcy5zdGFja05hbWUgIT09IHVuZGVmaW5lZFxuICAgICAgICA/IHByb3BzLnN0YWNrTmFtZVxuICAgICAgICA6IHRoaXMuZ2VuZXJhdGVTdGFja05hbWUoKTtcbiAgICB0aGlzLnRhZ3MgPSBuZXcgVGFnTWFuYWdlcihcbiAgICAgIFRhZ1R5cGUuS0VZX1ZBTFVFLFxuICAgICAgXCJhbGl5dW46cm9zOnN0YWNrXCIsXG4gICAgICBwcm9wcy50YWdzXG4gICAgKTtcblxuICAgIGNvbnN0IHsgYWNjb3VudCwgcmVnaW9uIH0gPSB0aGlzLnBhcnNlRW52aXJvbm1lbnQocHJvcHMuZW52KTtcblxuICAgIHRoaXMuYWNjb3VudCA9IGFjY291bnQ7XG4gICAgdGhpcy5yZWdpb24gPSByZWdpb247XG5cbiAgICBpZiAoIVZBTElEX1NUQUNLX05BTUVfUkVHRVgudGVzdCh0aGlzLnN0YWNrTmFtZSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYFN0YWNrIG5hbWUgbXVzdCBtYXRjaCB0aGUgcmVndWxhciBleHByZXNzaW9uOiAke1ZBTElEX1NUQUNLX05BTUVfUkVHRVgudG9TdHJpbmcoKX0sIGdvdCAnJHtcbiAgICAgICAgICB0aGlzLnN0YWNrTmFtZVxuICAgICAgICB9J2BcbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gdGhlIHByZWZlcnJlZCBiZWhhdmlvciBpcyB0byBnZW5lcmF0ZSBhIHVuaXF1ZSBpZCBmb3IgdGhpcyBzdGFjayBhbmQgdXNlXG4gICAgLy8gaXQgYXMgdGhlIGFydGlmYWN0IElEIGluIHRoZSBhc3NlbWJseS4gdGhpcyBhbGxvd3MgbXVsdGlwbGUgc3RhY2tzIHRvIHVzZVxuICAgIC8vIHRoZSBzYW1lIG5hbWUuIGhvd2V2ZXIsIHRoaXMgYmVoYXZpb3IgaXMgYnJlYWtpbmcgZm9yIDEueCBzbyBpdCdzIG9ubHlcbiAgICAvLyBhcHBsaWVkIHVuZGVyIGEgZmVhdHVyZSBmbGFnIHdoaWNoIGlzIGFwcGxpZWQgYXV0b21hdGljYWxseSBmb3IgbmV3XG4gICAgLy8gcHJvamVjdHMgY3JlYXRlZCB1c2luZyBgY2RrIGluaXRgLlxuICAgIC8vXG4gICAgLy8gQWxzbyB1c2UgdGhlIG5ldyBiZWhhdmlvciBpZiB3ZSBhcmUgdXNpbmcgdGhlIG5ldyBDSS9DRC1yZWFkeSBzeW50aGVzaXplcjsgdGhhdCB3YXlcbiAgICAvLyBwZW9wbGUgb25seSBoYXZlIHRvIGZsaXAgb25lIGZsYWcuXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtYXgtbGluZS1sZW5ndGhcbiAgICB0aGlzLmFydGlmYWN0SWQgPVxuICAgICAgdGhpcy5ub2RlLnRyeUdldENvbnRleHQoY3hhcGkuRU5BQkxFX1NUQUNLX05BTUVfRFVQTElDQVRFU19DT05URVhUKSB8fFxuICAgICAgdGhpcy5ub2RlLnRyeUdldENvbnRleHQoY3hhcGkuTkVXX1NUWUxFX1NUQUNLX1NZTlRIRVNJU19DT05URVhUKVxuICAgICAgICA/IHRoaXMuZ2VuZXJhdGVTdGFja0FydGlmYWN0SWQoKVxuICAgICAgICA6IHRoaXMuc3RhY2tOYW1lO1xuXG4gICAgdGhpcy50ZW1wbGF0ZUZpbGUgPSBgJHt0aGlzLmFydGlmYWN0SWR9LnRlbXBsYXRlLmpzb25gO1xuXG4gICAgY29uc3Qgc3ludGhlc2l6ZXIgPSBwcm9wcy5zeW50aGVzaXplciA/PyBuZXcgRGVmYXVsdFN0YWNrU3ludGhlc2l6ZXIoKTtcbiAgICBpZiAoaXNSZXVzYWJsZVN0YWNrU3ludGhlc2l6ZXIoc3ludGhlc2l6ZXIpKSB7XG4gICAgICAvLyBQcm9kdWNlIGEgZnJlc2ggaW5zdGFuY2UgZm9yIGVhY2ggc3RhY2sgKHNob3VsZCBoYXZlIGJlZW4gdGhlIGRlZmF1bHQgYmVoYXZpb3IpXG4gICAgICB0aGlzLnN5bnRoZXNpemVyID0gc3ludGhlc2l6ZXIucmV1c2FibGVCaW5kKHRoaXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBCaW5kIHRoZSBzaW5nbGUgaW5zdGFuY2UgaW4tcGxhY2UgdG8gdGhlIGN1cnJlbnQgc3RhY2sgKGJhY2t3YXJkcyBjb21wYXQpXG4gICAgICB0aGlzLnN5bnRoZXNpemVyID0gc3ludGhlc2l6ZXI7XG4gICAgICB0aGlzLnN5bnRoZXNpemVyLmJpbmQodGhpcyk7XG4gICAgfVxuICAgIG5ldyBSb3NJbmZvKFxuICAgICAgdGhpcyxcbiAgICAgIFJvc0luZm8uZm9ybWF0VmVyc2lvbixcbiAgICAgIHByb3BzLnZlcnNpb24gPyBwcm9wcy52ZXJzaW9uIDogUm9zSW5mby52MjAxNTA5MDFcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc29sdmUgYSB0b2tlbml6ZWQgdmFsdWUgaW4gdGhlIGNvbnRleHQgb2YgdGhlIGN1cnJlbnQgc3RhY2suXG4gICAqL1xuICBwdWJsaWMgcmVzb2x2ZShvYmo6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIHJlc29sdmUob2JqLCB7XG4gICAgICBzY29wZTogdGhpcyxcbiAgICAgIHByZWZpeDogW10sXG4gICAgICByZXNvbHZlcjogUk9TX1RPS0VOX1JFU09MVkVSLFxuICAgICAgcHJlcGFyaW5nOiBmYWxzZSxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmUgdGhlIHZhcmlvdXMgc3RhY2sgZW52aXJvbm1lbnQgYXR0cmlidXRlcy5cbiAgICpcbiAgICovXG4gIHByaXZhdGUgcGFyc2VFbnZpcm9ubWVudChlbnY6IEVudmlyb25tZW50ID0ge30pIHtcbiAgICAvLyBpZiBhbiBlbnZpcm9ubWVudCBwcm9wZXJ0eSBpcyBleHBsaWNpdGx5IHNwZWNpZmllZCB3aGVuIHRoZSBzdGFjayBpc1xuICAgIC8vIGNyZWF0ZWQsIGl0IHdpbGwgYmUgdXNlZC4gaWYgbm90LCB1c2UgdG9rZW5zIGZvciBhY2NvdW50IGFuZCByZWdpb24uXG4gICAgY29uc3QgY29udGFpbmluZ0Fzc2VtYmx5ID0gU3RhZ2Uub2YodGhpcyk7XG5cbiAgICBjb25zdCBhY2NvdW50ID0gZW52LmFjY291bnQgPz8gY29udGFpbmluZ0Fzc2VtYmx5Py5hY2NvdW50ID8/IFJvc1BzZXVkby5hY2NvdW50SWQ7XG4gICAgY29uc3QgcmVnaW9uID0gZW52LnJlZ2lvbiA/PyBjb250YWluaW5nQXNzZW1ibHk/LnJlZ2lvbiA/PyBSb3NQc2V1ZG8ucmVnaW9uO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGFjY291bnQsXG4gICAgICByZWdpb25cbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnQgYW4gb2JqZWN0LCBwb3RlbnRpYWxseSBjb250YWluaW5nIHRva2VucywgdG8gYSBKU09OIHN0cmluZ1xuICAgKi9cbiAgcHVibGljIHRvSnNvblN0cmluZyhvYmo6IGFueSwgc3BhY2U/OiBudW1iZXIpOiBzdHJpbmcge1xuICAgIHJldHVybiBSb3NUZW1wbGF0ZUxhbmcudG9KU09OKG9iaiwgc3BhY2UpLnRvU3RyaW5nKCk7XG4gIH1cblxuICAvKipcbiAgICogUmVuYW1lIGEgZ2VuZXJhdGVkIGxvZ2ljYWwgaWRlbnRpdGllc1xuICAgKlxuICAgKiBUbyBtb2RpZnkgdGhlIG5hbWluZyBzY2hlbWUgc3RyYXRlZ3ksIGV4dGVuZCB0aGUgYFN0YWNrYCBjbGFzcyBhbmRcbiAgICogb3ZlcnJpZGUgdGhlIGBhbGxvY2F0ZUxvZ2ljYWxJZGAgbWV0aG9kLlxuICAgKi9cbiAgcHVibGljIHJlbmFtZUxvZ2ljYWxJZChvbGRJZDogc3RyaW5nLCBuZXdJZDogc3RyaW5nKSB7XG4gICAgdGhpcy5fbG9naWNhbElkcy5hZGRSZW5hbWUob2xkSWQsIG5ld0lkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBbGxvY2F0ZXMgYSBzdGFjay11bmlxdWUgbG9naWNhbCBpZGVudGl0eSBmb3IgYVxuICAgKiBzcGVjaWZpYyByZXNvdXJjZS5cbiAgICpcbiAgICogVGhpcyBtZXRob2QgaXMgY2FsbGVkIHdoZW4gYSBgUm9zRWxlbWVudGAgaXMgY3JlYXRlZCBhbmQgdXNlZCB0byByZW5kZXIgdGhlXG4gICAqIGluaXRpYWwgbG9naWNhbCBpZGVudGl0eSBvZiByZXNvdXJjZXMuIExvZ2ljYWwgSUQgcmVuYW1lcyBhcmUgYXBwbGllZCBhdFxuICAgKiB0aGlzIHN0YWdlLlxuICAgKlxuICAgKiBUaGlzIG1ldGhvZCB1c2VzIHRoZSBwcm90ZWN0ZWQgbWV0aG9kIGBhbGxvY2F0ZUxvZ2ljYWxJZGAgdG8gcmVuZGVyIHRoZVxuICAgKiBsb2dpY2FsIElEIGZvciBhbiBlbGVtZW50LiBUbyBtb2RpZnkgdGhlIG5hbWluZyBzY2hlbWUsIGV4dGVuZCB0aGUgYFN0YWNrYFxuICAgKiBjbGFzcyBhbmQgb3ZlcnJpZGUgdGhpcyBtZXRob2QuXG4gICAqXG4gICAqIEBwYXJhbSBlbGVtZW50IFRoZSBST1MgZWxlbWVudCBmb3Igd2hpY2ggYSBsb2dpY2FsIGlkZW50aXR5IGlzXG4gICAqIG5lZWRlZC5cbiAgICovXG4gIHB1YmxpYyBnZXRMb2dpY2FsSWQoZWxlbWVudDogUm9zRWxlbWVudCk6IHN0cmluZyB7XG4gICAgY29uc3QgbG9naWNhbElkID0gdGhpcy5hbGxvY2F0ZUxvZ2ljYWxJZChlbGVtZW50KTtcbiAgICByZXR1cm4gdGhpcy5fbG9naWNhbElkcy5hcHBseVJlbmFtZShsb2dpY2FsSWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhIGRlcGVuZGVuY3kgYmV0d2VlbiB0aGlzIHN0YWNrIGFuZCBhbm90aGVyIHN0YWNrLlxuICAgKlxuICAgKiBUaGlzIGNhbiBiZSB1c2VkIHRvIGRlZmluZSBkZXBlbmRlbmNpZXMgYmV0d2VlbiBhbnkgdHdvIHN0YWNrcyB3aXRoaW4gYW5cbiAgICogYXBwLCBhbmQgYWxzbyBzdXBwb3J0cyBuZXN0ZWQgc3RhY2tzLlxuICAgKi9cbiAgcHVibGljIGFkZERlcGVuZGVuY3kodGFyZ2V0OiBTdGFjaywgcmVhc29uPzogc3RyaW5nKSB7XG4gICAgYWRkRGVwZW5kZW5jeSh0aGlzLCB0YXJnZXQsIHJlYXNvbik7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBzdGFja3MgdGhpcyBzdGFjayBkZXBlbmRzIG9uXG4gICAqL1xuICBwdWJsaWMgZ2V0IGRlcGVuZGVuY2llcygpOiBTdGFja1tdIHtcbiAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyh0aGlzLl9zdGFja0RlcGVuZGVuY2llcykubWFwKCh4KSA9PiB4LnN0YWNrKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgY29uY3JldGUgUk9TIHBoeXNpY2FsIHN0YWNrIG5hbWUuXG4gICAqXG4gICAqIFRoaXMgaXMgZWl0aGVyIHRoZSBuYW1lIGRlZmluZWQgZXhwbGljaXRseSBpbiB0aGUgYHN0YWNrTmFtZWAgcHJvcCBvclxuICAgKiBhbGxvY2F0ZWQgYmFzZWQgb24gdGhlIHN0YWNrJ3MgbG9jYXRpb24gaW4gdGhlIGNvbnN0cnVjdCB0cmVlLiBTdGFja3MgdGhhdFxuICAgKiBhcmUgZGlyZWN0bHkgZGVmaW5lZCB1bmRlciB0aGUgYXBwIHVzZSB0aGVpciBjb25zdHJ1Y3QgYGlkYCBhcyB0aGVpciBzdGFja1xuICAgKiBuYW1lLiBTdGFja3MgdGhhdCBhcmUgZGVmaW5lZCBkZWVwZXIgd2l0aGluIHRoZSB0cmVlIHdpbGwgdXNlIGEgaGFzaGVkIG5hbWluZ1xuICAgKiBzY2hlbWUgYmFzZWQgb24gdGhlIGNvbnN0cnVjdCBwYXRoIHRvIGVuc3VyZSB1bmlxdWVuZXNzLlxuICAgKlxuICAgKi9cbiAgcHVibGljIGdldCBzdGFja05hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhY2tOYW1lO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBJRCBvZiB0aGUgc3RhY2tcbiAgICpcbiAgICovXG4gIHB1YmxpYyBnZXQgc3RhY2tJZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiBSb3NQc2V1ZG8uc3RhY2tJZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgaWYgdGhpcyBpcyBhIG5lc3RlZCBzdGFjaywgaW4gd2hpY2ggY2FzZSBgcGFyZW50U3RhY2tgIHdpbGwgaW5jbHVkZSBhIHJlZmVyZW5jZSB0byBpdCdzIHBhcmVudC5cbiAgICovXG4gIHB1YmxpYyBnZXQgbmVzdGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm5lc3RlZFN0YWNrUmVzb3VyY2UgIT09IHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBJZiB0aGlzIGlzIGEgbmVzdGVkIHN0YWNrLCByZXR1cm5zIGl0J3MgcGFyZW50IHN0YWNrLlxuICAgKi9cbiAgcHVibGljIGdldCBuZXN0ZWRTdGFja1BhcmVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5uZXN0ZWRTdGFja1Jlc291cmNlICYmIFN0YWNrLm9mKHRoaXMubmVzdGVkU3RhY2tSZXNvdXJjZSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgcGFyZW50IG9mIGEgbmVzdGVkIHN0YWNrLlxuICAgKlxuICAgKiBAZGVwcmVjYXRlZCB1c2UgYG5lc3RlZFN0YWNrUGFyZW50YFxuICAgKi9cbiAgcHVibGljIGdldCBwYXJlbnRTdGFjaygpIHtcbiAgICByZXR1cm4gdGhpcy5uZXN0ZWRTdGFja1BhcmVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgaW1wbGljaXRseSBieSB0aGUgYGFkZERlcGVuZGVuY3lgIGhlbHBlciBmdW5jdGlvbiBpbiBvcmRlciB0b1xuICAgKiByZWFsaXplIGEgZGVwZW5kZW5jeSBiZXR3ZWVuIHR3byB0b3AtbGV2ZWwgc3RhY2tzIGF0IHRoZSBhc3NlbWJseSBsZXZlbC5cbiAgICpcbiAgICogVXNlIGBzdGFjay5hZGREZXBlbmRlbmN5YCB0byBkZWZpbmUgdGhlIGRlcGVuZGVuY3kgYmV0d2VlbiBhbnkgdHdvIHN0YWNrcyxcbiAgICogYW5kIHRha2UgaW50byBhY2NvdW50IG5lc3RlZCBzdGFjayByZWxhdGlvbnNoaXBzLlxuICAgKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIHB1YmxpYyBfYWRkQXNzZW1ibHlEZXBlbmRlbmN5KHRhcmdldDogU3RhY2ssIHJlYXNvbj86IHN0cmluZykge1xuICAgIC8vIGRlZmVuc2l2ZTogd2Ugc2hvdWxkIG5ldmVyIGdldCBoZXJlIGZvciBuZXN0ZWQgc3RhY2tzXG4gICAgaWYgKHRoaXMubmVzdGVkIHx8IHRhcmdldC5uZXN0ZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgXCJDYW5ub3QgYWRkIGFzc2VtYmx5LWxldmVsIGRlcGVuZGVuY2llcyBmb3IgbmVzdGVkIHN0YWNrc1wiXG4gICAgICApO1xuICAgIH1cblxuICAgIHJlYXNvbiA9IHJlYXNvbiB8fCBcImRlcGVuZGVuY3kgYWRkZWQgdXNpbmcgc3RhY2suYWRkRGVwZW5kZW5jeSgpXCI7XG4gICAgY29uc3QgY3ljbGUgPSB0YXJnZXQuc3RhY2tEZXBlbmRlbmN5UmVhc29ucyh0aGlzKTtcbiAgICBpZiAoY3ljbGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgJyR7dGFyZ2V0Lm5vZGUucGF0aH0nIGRlcGVuZHMgb24gJyR7dGhpcy5ub2RlLnBhdGh9JyAoJHtjeWNsZS5qb2luKFxuICAgICAgICAgIFwiLCBcIlxuICAgICAgICApfSkuIEFkZGluZyB0aGlzIGRlcGVuZGVuY3kgKCR7cmVhc29ufSkgd291bGQgY3JlYXRlIGEgY3ljbGljIHJlZmVyZW5jZS5gXG4gICAgICApO1xuICAgIH1cblxuICAgIGxldCBkZXAgPSB0aGlzLl9zdGFja0RlcGVuZGVuY2llc1t0YXJnZXQubm9kZS51bmlxdWVJZF07XG4gICAgaWYgKCFkZXApIHtcbiAgICAgIGRlcCA9IHRoaXMuX3N0YWNrRGVwZW5kZW5jaWVzW3RhcmdldC5ub2RlLnVuaXF1ZUlkXSA9IHtcbiAgICAgICAgc3RhY2s6IHRhcmdldCxcbiAgICAgICAgcmVhc29uczogW10sXG4gICAgICB9O1xuICAgIH1cblxuICAgIGRlcC5yZWFzb25zLnB1c2gocmVhc29uKTtcblxuICAgIGlmIChwcm9jZXNzLmVudi5DREtfREVCVUdfREVQUykge1xuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgIGBbQ0RLX0RFQlVHX0RFUFNdIHN0YWNrIFwiJHt0aGlzLm5vZGUucGF0aH1cIiBkZXBlbmRzIG9uIFwiJHt0YXJnZXQubm9kZS5wYXRofVwiIGJlY2F1c2U6ICR7cmVhc29ufWBcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG5hbWluZyBzY2hlbWUgdXNlZCB0byBhbGxvY2F0ZSBsb2dpY2FsIElEcy4gQnkgZGVmYXVsdCwgdXNlc1xuICAgKiB0aGUgYEhhc2hlZEFkZHJlc3NpbmdTY2hlbWVgIGJ1dCB0aGlzIG1ldGhvZCBjYW4gYmUgb3ZlcnJpZGRlbiB0byBjdXN0b21pemVcbiAgICogdGhpcyBiZWhhdmlvci5cbiAgICpcbiAgICogSW4gb3JkZXIgdG8gbWFrZSBzdXJlIGxvZ2ljYWwgSURzIGFyZSB1bmlxdWUgYW5kIHN0YWJsZSwgd2UgaGFzaCB0aGUgcmVzb3VyY2VcbiAgICogY29uc3RydWN0IHRyZWUgcGF0aCAoaS5lLiB0b3BsZXZlbC9zZWNvbmRsZXZlbC8uLi4vbXlyZXNvdXJjZSkgYW5kIGFkZCBpdCBhc1xuICAgKiBhIHN1ZmZpeCB0byB0aGUgcGF0aCBjb21wb25lbnRzIGpvaW5lZCB3aXRob3V0IGEgc2VwYXJhdG9yIChST1NcbiAgICogSURzIG9ubHkgYWxsb3cgYWxwaGFudW1lcmljIGNoYXJhY3RlcnMpLlxuICAgKlxuICAgKiBUaGUgcmVzdWx0IHdpbGwgYmU6XG4gICAqXG4gICAqICAgPHBhdGguam9pbignJyk+PG1kNShwYXRoLmpvaW4oJy8nKT5cbiAgICogICAgIFwiaHVtYW5cIiAgICAgIFwiaGFzaFwiXG4gICAqXG4gICAqIElmIHRoZSBcImh1bWFuXCIgcGFydCBvZiB0aGUgSUQgZXhjZWVkcyAyNDAgY2hhcmFjdGVycywgd2Ugc2ltcGx5IHRyaW0gaXQgc29cbiAgICogdGhlIHRvdGFsIElEIGRvZXNuJ3QgZXhjZWVkIDI1NSBjaGFyYWN0ZXIgbGltaXQuXG4gICAqXG4gICAqIFdlIG9ubHkgdGFrZSA4IGNoYXJhY3RlcnMgZnJvbSB0aGUgbWQ1IGhhc2ggKDAuMDAwMDA1IGNoYW5jZSBvZiBjb2xsaXNpb24pLlxuICAgKlxuICAgKiBTcGVjaWFsIGNhc2VzOlxuICAgKlxuICAgKiAtIElmIHRoZSBwYXRoIG9ubHkgY29udGFpbnMgYSBzaW5nbGUgY29tcG9uZW50IChpLmUuIGl0J3MgYSB0b3AtbGV2ZWxcbiAgICogICByZXNvdXJjZSksIHdlIHdvbid0IGFkZCB0aGUgaGFzaCB0byBpdC4gVGhlIGhhc2ggaXMgbm90IG5lZWRlZCBmb3JcbiAgICogICBkaXNhbWlndWF0aW9uIGFuZCBhbHNvLCBpdCBhbGxvd3MgZm9yIGEgbW9yZSBzdHJhaWdodGZvcndhcmQgbWlncmF0aW9uIGFuXG4gICAqICAgZXhpc3RpbmcgUk9TIHRlbXBsYXRlIHRvIGEgQ0RLIHN0YWNrIHdpdGhvdXQgbG9naWNhbCBJRCBjaGFuZ2VzXG4gICAqICAgKG9yIHJlbmFtZXMpLlxuICAgKiAtIEZvciBhZXN0aGV0aWMgcmVhc29ucywgaWYgdGhlIGxhc3QgY29tcG9uZW50cyBvZiB0aGUgcGF0aCBhcmUgdGhlIHNhbWVcbiAgICogICAoaS5lLiBgTDEvTDIvUGlwZWxpbmUvUGlwZWxpbmVgKSwgdGhleSB3aWxsIGJlIGRlLWR1cGxpY2F0ZWQgdG8gbWFrZSB0aGVcbiAgICogICByZXN1bHRpbmcgaHVtYW4gcG9ydGlvbiBvZiB0aGUgSUQgbW9yZSBwbGVhc2luZzogYEwxTDJQaXBlbGluZTxIQVNIPmBcbiAgICogICBpbnN0ZWFkIG9mIGBMMUwyUGlwZWxpbmVQaXBlbGluZTxIQVNIPmBcbiAgICogLSBJZiBhIGNvbXBvbmVudCBpcyBuYW1lZCBcIkRlZmF1bHRcIiBpdCB3aWxsIGJlIG9taXR0ZWQgZnJvbSB0aGUgcGF0aC4gVGhpc1xuICAgKiAgIGFsbG93cyByZWZhY3RvcmluZyBoaWdoZXIgbGV2ZWwgYWJzdHJhY3Rpb25zIGFyb3VuZCBjb25zdHJ1Y3RzIHdpdGhvdXQgYWZmZWN0aW5nXG4gICAqICAgdGhlIElEcyBvZiBhbHJlYWR5IGRlcGxveWVkIHJlc291cmNlcy5cbiAgICogLSBJZiBhIGNvbXBvbmVudCBpcyBuYW1lZCBcIlJlc291cmNlXCIgaXQgd2lsbCBiZSBvbWl0dGVkIGZyb20gdGhlIHVzZXItdmlzaWJsZVxuICAgKiAgIHBhdGgsIGJ1dCBpbmNsdWRlZCBpbiB0aGUgaGFzaC4gVGhpcyByZWR1Y2VzIHZpc3VhbCBub2lzZSBpbiB0aGUgaHVtYW4gcmVhZGFibGVcbiAgICogICBwYXJ0IG9mIHRoZSBpZGVudGlmaWVyLlxuICAgKlxuICAgKiBAcGFyYW0gcm9zRWxlbWVudCBUaGUgZWxlbWVudCBmb3Igd2hpY2ggdGhlIGxvZ2ljYWwgSUQgaXMgYWxsb2NhdGVkLlxuICAgKi9cbiAgcHJvdGVjdGVkIGFsbG9jYXRlTG9naWNhbElkKHJvc0VsZW1lbnQ6IFJvc0VsZW1lbnQpOiBzdHJpbmcge1xuICAgIGNvbnN0IHNjb3BlcyA9IHJvc0VsZW1lbnQubm9kZS5zY29wZXM7XG4gICAgY29uc3Qgc3RhY2tJbmRleCA9IHNjb3Blcy5pbmRleE9mKHJvc0VsZW1lbnQuc3RhY2spO1xuICAgIGNvbnN0IHBhdGhDb21wb25lbnRzID0gc2NvcGVzLnNsaWNlKHN0YWNrSW5kZXggKyAxKS5tYXAoKHgpID0+IHgubm9kZS5pZCk7XG4gICAgcmV0dXJuIG1ha2VVbmlxdWVJZChwYXRoQ29tcG9uZW50cyk7XG4gIH1cblxuICAvKipcbiAgICogVmFsaWRhdGUgc3RhY2sgbmFtZVxuICAgKlxuICAgKiBST1Mgc3RhY2sgbmFtZXMgY2FuIGluY2x1ZGUgZGFzaGVzIGluIGFkZGl0aW9uIHRvIHRoZSByZWd1bGFyIGlkZW50aWZpZXJcbiAgICogY2hhcmFjdGVyIGNsYXNzZXMsIGFuZCB3ZSBkb24ndCBhbGxvdyBvbmUgb2YgdGhlIG1hZ2ljIG1hcmtlcnMuXG4gICAqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgcHJvdGVjdGVkIF92YWxpZGF0ZUlkKG5hbWU6IHN0cmluZykge1xuICAgIGlmIChuYW1lICYmICFWQUxJRF9TVEFDS19OQU1FX1JFR0VYLnRlc3QobmFtZSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYFN0YWNrIG5hbWUgbXVzdCBtYXRjaCB0aGUgcmVndWxhciBleHByZXNzaW9uOiAke1ZBTElEX1NUQUNLX05BTUVfUkVHRVgudG9TdHJpbmcoKX0sIGdvdCAnJHtuYW1lfSdgXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzeW50aGVzaXplKHNlc3Npb246IElTeW50aGVzaXNTZXNzaW9uKTogdm9pZCB7XG4gICAgLy8gSW4gcHJpbmNpcGxlLCBzdGFjayBzeW50aGVzaXMgaXMgZGVsZWdhdGVkIHRvIHRoZVxuICAgIC8vIFN0YWNrU3ludGhlc2lzIG9iamVjdC5cbiAgICAvL1xuICAgIC8vIEhvd2V2ZXIsIHNvbWUgcGFydHMgb2Ygc3ludGhlc2lzIGN1cnJlbnRseSB1c2Ugc29tZSBwcml2YXRlXG4gICAgLy8gbWV0aG9kcyBvbiBTdGFjaywgYW5kIEkgZG9uJ3QgcmVhbGx5IHNlZSB0aGUgdmFsdWUgaW4gcmVmYWN0b3JpbmdcbiAgICAvLyB0aGlzIHJpZ2h0IG5vdywgc28gc29tZSBwYXJ0cyBzdGlsbCBoYXBwZW4gaGVyZS5cbiAgICBjb25zdCBidWlsZGVyID0gc2Vzc2lvbi5hc3NlbWJseTtcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IHRoaXMuX3RvUm9zVGVtcGxhdGUoKTtcblxuICAgIC8vIHdyaXRlIHRoZSBST1MgdGVtcGxhdGUgYXMgYSBKU09OIGZpbGVcbiAgICBjb25zdCBvdXRQYXRoID0gcGF0aC5qb2luKGJ1aWxkZXIub3V0ZGlyLCB0aGlzLnRlbXBsYXRlRmlsZSk7XG4gICAgY29uc3QgcmVzb3VyY2VzID0gdGVtcGxhdGUuUmVzb3VyY2VzIHx8IHt9O1xuICAgIGNvbnN0IG51bWJlck9mUmVzb3VyY2VzID0gT2JqZWN0LmtleXMocmVzb3VyY2VzKS5sZW5ndGg7XG5cbiAgICBpZiAobnVtYmVyT2ZSZXNvdXJjZXMgPiB0aGlzLm1heFJlc291cmNlcykge1xuICAgICAgY29uc3QgY291bnRzID0gT2JqZWN0LmVudHJpZXMoY291bnQoT2JqZWN0LnZhbHVlcyhyZXNvdXJjZXMpLm1hcCgocjogYW55KSA9PiBgJHtyPy5UeXBlfWApKSkubWFwKChbdHlwZSwgY10pID0+IGAke3R5cGV9ICgke2N9KWApLmpvaW4oJywgJyk7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE51bWJlciBvZiByZXNvdXJjZXMgaW4gc3RhY2sgJyR7dGhpcy5ub2RlLnBhdGh9JzogJHtudW1iZXJPZlJlc291cmNlc30gaXMgZ3JlYXRlciB0aGFuIGFsbG93ZWQgbWF4aW11bSBvZiAke3RoaXMubWF4UmVzb3VyY2VzfTogJHtjb3VudHN9YCk7XG4gICAgfVxuXG4gICAgY29uc3QgdGV4dCA9IEpTT04uc3RyaW5naWZ5KHRlbXBsYXRlLCB1bmRlZmluZWQsIDIpO1xuICAgIGZzLndyaXRlRmlsZVN5bmMob3V0UGF0aCwgdGV4dCk7XG5cbiAgICAvLyBEZWxlZ2F0ZSBhZGRpbmcgYXJ0aWZhY3RzIHRvIHRoZSBTeW50aGVzaXplclxuICAgIC8vIHRoaXMuc3ludGhlc2l6ZXIuc3ludGhlc2l6ZShzZXNzaW9uKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBSb3NUZW1wbGF0ZSB0ZW1wbGF0ZSBmb3IgdGhpcyBzdGFjayBieSB0cmF2ZXJzaW5nXG4gICAqIHRoZSB0cmVlIGFuZCBpbnZva2luZyBfdG9Sb3NUZW1wbGF0ZSgpIG9uIGFsbCBFbnRpdHkgb2JqZWN0cy5cbiAgICpcbiAgICogQGludGVybmFsXG4gICAqL1xuICBwcm90ZWN0ZWQgX3RvUm9zVGVtcGxhdGUoKSB7XG4gICAgY29uc3QgdGVtcGxhdGU6IGFueSA9IHtcbiAgICAgIERlc2NyaXB0aW9uOiB0aGlzLnRlbXBsYXRlT3B0aW9ucy5kZXNjcmlwdGlvbixcbiAgICAgIE1ldGFkYXRhOiB0aGlzLnRlbXBsYXRlT3B0aW9ucy5tZXRhZGF0YSxcbiAgICB9O1xuXG4gICAgY29uc3QgZWxlbWVudHMgPSByb3NFbGVtZW50cyh0aGlzKTtcbiAgICBjb25zdCBmcmFnbWVudHMgPSBlbGVtZW50cy5tYXAoKGUpID0+IHRoaXMucmVzb2x2ZShlLl90b1Jvc1RlbXBsYXRlKCkpKTtcblxuICAgIC8vIG1lcmdlIGluIGFsbCBST1MgZnJhZ21lbnRzIGNvbGxlY3RlZCBmcm9tIHRoZSB0cmVlXG4gICAgZm9yIChjb25zdCBmcmFnbWVudCBvZiBmcmFnbWVudHMpIHtcbiAgICAgIG1lcmdlKHRlbXBsYXRlLCBmcmFnbWVudCk7XG4gICAgfVxuXG4gICAgLy8gcmVzb2x2ZSBhbGwgdG9rZW5zIGFuZCByZW1vdmUgYWxsIGVtcHRpZXNcbiAgICBjb25zdCByZXQgPSB0aGlzLnJlc29sdmUodGVtcGxhdGUpIHx8IHt9O1xuXG4gICAgdGhpcy5fbG9naWNhbElkcy5hc3NlcnRBbGxSZW5hbWVzQXBwbGllZCgpO1xuXG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXByZWNhdGVkLlxuICAgKlxuICAgKiBAcmV0dXJucyByZWZlcmVuY2UgaXRzZWxmIHdpdGhvdXQgYW55IGNoYW5nZVxuICAgKiBAZGVwcmVjYXRlZCBjcm9zcyByZWZlcmVuY2UgaGFuZGxpbmcgaGFzIGJlZW4gbW92ZWQgdG8gYEFwcC5wcmVwYXJlKClgLlxuICAgKi9cbiAgcHJvdGVjdGVkIHByZXBhcmVDcm9zc1JlZmVyZW5jZShcbiAgICBfc291cmNlU3RhY2s6IFN0YWNrLFxuICAgIHJlZmVyZW5jZTogUmVmZXJlbmNlXG4gICk6IElSZXNvbHZhYmxlIHtcbiAgICByZXR1cm4gcmVmZXJlbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIHdoZXRoZXIgdGhpcyBzdGFjayBoYXMgYSAodHJhbnNpdGl2ZSkgZGVwZW5kZW5jeSBvbiBhbm90aGVyIHN0YWNrXG4gICAqXG4gICAqIFJldHVybnMgdGhlIGxpc3Qgb2YgcmVhc29ucyBvbiB0aGUgZGVwZW5kZW5jeSBwYXRoLCBvciB1bmRlZmluZWRcbiAgICogaWYgdGhlcmUgaXMgbm8gZGVwZW5kZW5jeS5cbiAgICovXG4gIHByaXZhdGUgc3RhY2tEZXBlbmRlbmN5UmVhc29ucyhvdGhlcjogU3RhY2spOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCB7XG4gICAgaWYgKHRoaXMgPT09IG90aGVyKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIGZvciAoY29uc3QgZGVwIG9mIE9iamVjdC52YWx1ZXModGhpcy5fc3RhY2tEZXBlbmRlbmNpZXMpKSB7XG4gICAgICBjb25zdCByZXQgPSBkZXAuc3RhY2suc3RhY2tEZXBlbmRlbmN5UmVhc29ucyhvdGhlcik7XG4gICAgICBpZiAocmV0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIFsuLi5kZXAucmVhc29ucywgLi4ucmV0XTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxjdWxhdGUgdGhlIHN0YWNrIG5hbWUgYmFzZWQgb24gdGhlIGNvbnN0cnVjdCBwYXRoXG4gICAqXG4gICAqIFRoZSBzdGFjayBuYW1lIGlzIHRoZSBuYW1lIHVuZGVyIHdoaWNoIHdlJ2xsIGRlcGxveSB0aGUgc3RhY2ssXG4gICAqIGFuZCBpbmNvcnBvcmF0ZXMgY29udGFpbmluZyBTdGFnZSBuYW1lcyBieSBkZWZhdWx0LlxuICAgKlxuICAgKiBHZW5lcmFsbHkgdGhpcyBsb29rcyBhIGxvdCBsaWtlIGhvdyBsb2dpY2FsIElEcyBhcmUgY2FsY3VsYXRlZC5cbiAgICogVGhlIHN0YWNrIG5hbWUgaXMgY2FsY3VsYXRlZCBiYXNlZCBvbiB0aGUgY29uc3RydWN0IHJvb3QgcGF0aCxcbiAgICogYXMgZm9sbG93czpcbiAgICpcbiAgICogLSBQYXRoIGlzIGNhbGN1bGF0ZWQgd2l0aCByZXNwZWN0IHRvIGNvbnRhaW5pbmcgQXBwIG9yIFN0YWdlIChpZiBhbnkpXG4gICAqIC0gSWYgdGhlIHBhdGggaXMgb25lIGNvbXBvbmVudCBsb25nIGp1c3QgdXNlIHRoYXQgY29tcG9uZW50LCBvdGhlcndpc2VcbiAgICogICBjb21iaW5lIHRoZW0gd2l0aCBhIGhhc2guXG4gICAqXG4gICAqIFNpbmNlIHRoZSBoYXNoIGlzIHF1aXRlIHVnbHkgYW5kIHdlJ2QgbGlrZSB0byBhdm9pZCBpdCBpZiBwb3NzaWJsZSAtLSBidXRcbiAgICogd2UgY2FuJ3QgYW55bW9yZSBpbiB0aGUgZ2VuZXJhbCBjYXNlIHNpbmNlIGl0IGhhcyBiZWVuIHdyaXR0ZW4gaW50byBsZWdhY3lcbiAgICogc3RhY2tzLiBUaGUgaW50cm9kdWN0aW9uIG9mIFN0YWdlcyBtYWtlcyBpdCBwb3NzaWJsZSB0byBtYWtlIHRoaXMgbmljZXIgaG93ZXZlci5cbiAgICogV2hlbiBhIFN0YWNrIGlzIG5lc3RlZCBpbnNpZGUgYSBTdGFnZSwgd2UgdXNlIHRoZSBwYXRoIGNvbXBvbmVudHMgYmVsb3cgdGhlXG4gICAqIFN0YWdlLCBhbmQgcHJlZml4IHRoZSBwYXRoIGNvbXBvbmVudHMgb2YgdGhlIFN0YWdlIGJlZm9yZSBpdC5cbiAgICovXG4gIHByaXZhdGUgZ2VuZXJhdGVTdGFja05hbWUoKSB7XG4gICAgY29uc3QgYXNzZW1ibHkgPSBTdGFnZS5vZih0aGlzKTtcbiAgICBjb25zdCBwcmVmaXggPVxuICAgICAgYXNzZW1ibHkgJiYgYXNzZW1ibHkuc3RhZ2VOYW1lID8gYCR7YXNzZW1ibHkuc3RhZ2VOYW1lfS1gIDogXCJcIjtcbiAgICByZXR1cm4gYCR7cHJlZml4fSR7dGhpcy5nZW5lcmF0ZVN0YWNrSWQoYXNzZW1ibHkpfWA7XG4gIH1cblxuICAvKipcbiAgICogVGhlIGFydGlmYWN0IElEIGZvciB0aGlzIHN0YWNrXG4gICAqXG4gICAqIFN0YWNrIGFydGlmYWN0IElEIGlzIHVuaXF1ZSB3aXRoaW4gdGhlIEFwcCdzIENsb3VkIEFzc2VtYmx5LlxuICAgKi9cbiAgcHJpdmF0ZSBnZW5lcmF0ZVN0YWNrQXJ0aWZhY3RJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZW5lcmF0ZVN0YWNrSWQodGhpcy5ub2RlLnJvb3QpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdlbmVyYXRlIGFuIElEIHdpdGggcmVzcGVjdCB0byB0aGUgZ2l2ZW4gY29udGFpbmVyIGNvbnN0cnVjdC5cbiAgICovXG4gIHByaXZhdGUgZ2VuZXJhdGVTdGFja0lkKGNvbnRhaW5lcjogSUNvbnN0cnVjdCB8IHVuZGVmaW5lZCkge1xuICAgIGNvbnN0IHJvb3RQYXRoID0gcm9vdFBhdGhUbyh0aGlzLCBjb250YWluZXIpO1xuICAgIGNvbnN0IGlkcyA9IHJvb3RQYXRoLm1hcCgoYykgPT4gYy5ub2RlLmlkKTtcblxuICAgIC8vIEluIHVuaXQgdGVzdHMgb3VyIFN0YWNrICh3aGljaCBpcyB0aGUgb25seSBjb21wb25lbnQpIG1heSBub3QgaGF2ZSBhblxuICAgIC8vIGlkLCBzbyBpbiB0aGF0IGNhc2UganVzdCBwcmV0ZW5kIGl0J3MgXCJTdGFja1wiLlxuICAgIGlmIChpZHMubGVuZ3RoID09PSAxICYmICFpZHNbMF0pIHtcbiAgICAgIGlkc1swXSA9IFwiU3RhY2tcIjtcbiAgICB9XG5cbiAgICByZXR1cm4gbWFrZVN0YWNrTmFtZShpZHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluZGljYXRlcyB3aGV0aGVyIHRoZSBzdGFjayByZXF1aXJlcyBidW5kbGluZyBvciBub3RcbiAgICovXG4gIHB1YmxpYyBnZXQgYnVuZGxpbmdSZXF1aXJlZCgpIHtcbiAgICBjb25zdCBidW5kbGluZ1N0YWNrczogc3RyaW5nW10gPSB0aGlzLm5vZGUudHJ5R2V0Q29udGV4dChjeGFwaS5CVU5ETElOR19TVEFDS1MpID8/IFsnKionXTtcblxuICAgIHJldHVybiBidW5kbGluZ1N0YWNrcy5zb21lKHBhdHRlcm4gPT4gbWluaW1hdGNoKFxuICAgICAgICB0aGlzLm5vZGUucGF0aCwgLy8gdXNlIHRoZSBzYW1lIHZhbHVlIGZvciBwYXR0ZXJuIG1hdGNoaW5nIGFzIHRoZSBBTElZVU4tY2RrIENMSSAoZGlzcGxheU5hbWUgLyBoaWVyYXJjaGljYWxJZClcbiAgICAgICAgcGF0dGVybixcbiAgICApKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBtZXJnZSh0ZW1wbGF0ZTogYW55LCBmcmFnbWVudDogYW55KTogdm9pZCB7XG4gIGZvciAoY29uc3Qgc2VjdGlvbiBvZiBPYmplY3Qua2V5cyhmcmFnbWVudCkpIHtcbiAgICBjb25zdCBzcmMgPSBmcmFnbWVudFtzZWN0aW9uXTtcblxuICAgIC8vIGNyZWF0ZSB0b3AtbGV2ZWwgc2VjdGlvbiBpZiBpdCBkb2Vzbid0IGV4aXN0XG4gICAgY29uc3QgZGVzdCA9IHRlbXBsYXRlW3NlY3Rpb25dO1xuICAgIGlmICghZGVzdCkge1xuICAgICAgdGVtcGxhdGVbc2VjdGlvbl0gPSBzcmM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRlbXBsYXRlW3NlY3Rpb25dID0gbWVyZ2VTZWN0aW9uKHNlY3Rpb24sIGRlc3QsIHNyYyk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIG1lcmdlU2VjdGlvbihzZWN0aW9uOiBzdHJpbmcsIHZhbDE6IGFueSwgdmFsMjogYW55KTogYW55IHtcbiAgc3dpdGNoIChzZWN0aW9uKSB7XG4gICAgY2FzZSBcIkRlc2NyaXB0aW9uXCI6XG4gICAgICByZXR1cm4gYCR7dmFsMX1cXG4ke3ZhbDJ9YDtcbiAgICBjYXNlIFwiUmVzb3VyY2VzXCI6XG4gICAgY2FzZSBcIkNvbmRpdGlvbnNcIjpcbiAgICBjYXNlIFwiUGFyYW1ldGVyc1wiOlxuICAgIGNhc2UgXCJPdXRwdXRzXCI6XG4gICAgY2FzZSBcIk1hcHBpbmdzXCI6XG4gICAgICByZXR1cm4gbWVyZ2VPYmplY3RzV2l0aG91dER1cGxpY2F0ZXMoc2VjdGlvbiwgdmFsMSwgdmFsMik7XG4gICAgY2FzZSBcIk1ldGFkYXRhXCI6XG4gICAgICByZXR1cm4gbWVyZ2VNZXRhZGF0YU9iamVjdHNXaXRob3V0RHVwbGljYXRlcyh2YWwxLCB2YWwyKTtcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgQ0RLIGRvZXNuJ3Qga25vdyBob3cgdG8gbWVyZ2UgdHdvIGluc3RhbmNlcyBvZiB0aGUgUk9TIHRlbXBsYXRlIHNlY3Rpb24gJyR7c2VjdGlvbn0nIC0gYCArXG4gICAgICAgICAgXCJwbGVhc2UgcmVtb3ZlIG9uZSBvZiB0aGVtIGZyb20geW91ciBjb2RlXCJcbiAgICAgICk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWVyZ2VNZXRhZGF0YU9iamVjdHNXaXRob3V0RHVwbGljYXRlcyhcbiAgICBkZXN0OiBhbnksXG4gICAgc3JjOiBhbnlcbik6IGFueSB7XG4gIGlmICh0eXBlb2YgZGVzdCAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygc3JjICE9PSBcIm9iamVjdFwiKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RpbmcgTWV0YWRhdGEgVmFsdWUgdG8gYmUgYW4gb2JqZWN0YCk7XG4gIH1cbiAgaWYgKHNyYy5oYXNPd25Qcm9wZXJ0eSgnQUxJWVVOOjpST1M6OkludGVyZmFjZScpKSB7XG4gICAgaWYgKHR5cGVvZiBzcmNbXCJBTElZVU46OlJPUzo6SW50ZXJmYWNlXCJdID09IFwib2JqZWN0XCIpIHtcbiAgICAgIGlmIChzcmNbXCJBTElZVU46OlJPUzo6SW50ZXJmYWNlXCJdLmhhc093blByb3BlcnR5KCdUZW1wbGF0ZVRhZ3MnKSkge1xuICAgICAgICBpZiAoc3JjW1wiQUxJWVVOOjpST1M6OkludGVyZmFjZVwiXSBbXCJUZW1wbGF0ZVRhZ3NcIl0gaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgIHNyY1tcIkFMSVlVTjo6Uk9TOjpJbnRlcmZhY2VcIl0gW1wiVGVtcGxhdGVUYWdzXCJdLnB1c2goXCJDcmVhdGUgYnkgUk9TIENES1wiKVxuICAgICAgICAgIGRlc3RbXCJBTElZVU46OlJPUzo6SW50ZXJmYWNlXCJdID0gc3JjW1wiQUxJWVVOOjpST1M6OkludGVyZmFjZVwiXVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0aW5nIE1ldGFkYXRhIEFMSVlVTjo6Uk9TOjpJbnRlcmZhY2UgVGVtcGxhdGVUYWdzIFZhbHVlIHRvIGJlIGFuIEFycmF5YCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBkZXN0W1wiQUxJWVVOOjpST1M6OkludGVyZmFjZVwiXSA9IHNyY1tcIkFMSVlVTjo6Uk9TOjpJbnRlcmZhY2VcIl1cbiAgICAgICAgZGVzdFtcIkFMSVlVTjo6Uk9TOjpJbnRlcmZhY2VcIl0uVGVtcGxhdGVUYWdzID0gW1wiQ3JlYXRlIGJ5IFJPUyBDREtcIl1cbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGluZyBNZXRhZGF0YSBBTElZVU46OlJPUzo6SW50ZXJmYWNlIFZhbHVlIHRvIGJlIGFuIG9iamVjdGApO1xuICAgIH1cbiAgfVxuICBlbHNlIHtcbiAgICBkZXN0W1wiQUxJWVVOOjpST1M6OkludGVyZmFjZVwiXSA9IHsgVGVtcGxhdGVUYWdzIDogW1wiQ3JlYXRlIGJ5IFJPUyBDREtcIl19XG4gIH1cbiAgZm9yIChjb25zdCBpZCBvZiBPYmplY3Qua2V5cyhzcmMpKSB7XG4gICAgaWYgKGlkICE9PSAnQUxJWVVOOjpST1M6OkludGVyZmFjZScpIHtcbiAgICAgIGRlc3RbaWRdID0gc3JjW2lkXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGVzdDtcbn1cblxuZnVuY3Rpb24gbWVyZ2VPYmplY3RzV2l0aG91dER1cGxpY2F0ZXMoXG4gIHNlY3Rpb246IHN0cmluZyxcbiAgZGVzdDogYW55LFxuICBzcmM6IGFueVxuKTogYW55IHtcbiAgaWYgKHR5cGVvZiBkZXN0ICE9PSBcIm9iamVjdFwiKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RpbmcgJyR7SlNPTi5zdHJpbmdpZnkoZGVzdCl9JyB0byBiZSBhbiBvYmplY3RgKTtcbiAgfVxuICBpZiAodHlwZW9mIHNyYyAhPT0gXCJvYmplY3RcIikge1xuICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0aW5nICcke0pTT04uc3RyaW5naWZ5KHNyYyl9JyB0byBiZSBhbiBvYmplY3RgKTtcbiAgfVxuXG4gIC8vIGFkZCBhbGwgZW50aXRpZXMgZnJvbSBzb3VyY2Ugc2VjdGlvbiB0byBkZXN0aW5hdGlvbiBzZWN0aW9uXG4gIGZvciAoY29uc3QgaWQgb2YgT2JqZWN0LmtleXMoc3JjKSkge1xuICAgIGlmIChpZCBpbiBkZXN0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYHNlY3Rpb24gJyR7c2VjdGlvbn0nIGFscmVhZHkgY29udGFpbnMgJyR7aWR9J2ApO1xuICAgIH1cbiAgICBkZXN0W2lkXSA9IHNyY1tpZF07XG4gIH1cblxuICByZXR1cm4gZGVzdDtcbn1cblxuLyoqXG4gKiBST1MgdGVtcGxhdGUgb3B0aW9ucyBmb3IgYSBzdGFjay5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJVGVtcGxhdGVPcHRpb25zIHtcbiAgLyoqXG4gICAqIEdldHMgb3Igc2V0cyB0aGUgZGVzY3JpcHRpb24gb2YgdGhpcyBzdGFjay5cbiAgICogSWYgcHJvdmlkZWQsIGl0IHdpbGwgYmUgaW5jbHVkZWQgaW4gdGhlIFJPUyB0ZW1wbGF0ZSdzIFwiRGVzY3JpcHRpb25cIiBhdHRyaWJ1dGUuXG4gICAqL1xuICBkZXNjcmlwdGlvbj86IHN0cmluZztcblxuICAvKipcbiAgICogTWV0YWRhdGEgYXNzb2NpYXRlZCB3aXRoIHRoZSBST1MgdGVtcGxhdGUuXG4gICAqL1xuICBtZXRhZGF0YT86IHsgW2tleTogc3RyaW5nXTogYW55IH07XG59XG5cbi8qKlxuICogQ29sbGVjdCBhbGwgcm9zRWxlbWVudHMgZnJvbSBhIFN0YWNrLlxuICpcbiAqIEBwYXJhbSBub2RlIFJvb3Qgbm9kZSB0byBjb2xsZWN0IGFsbCByb3NFbGVtZW50cyBmcm9tXG4gKiBAcGFyYW0gaW50byBBcnJheSB0byBhcHBlbmQgcm9zRWxlbWVudHMgdG9cbiAqIEByZXR1cm5zIFRoZSBzYW1lIGFycmF5IGFzIGlzIGJlaW5nIGNvbGxlY3RlZCBpbnRvXG4gKi9cbmZ1bmN0aW9uIHJvc0VsZW1lbnRzKG5vZGU6IElDb25zdHJ1Y3QsIGludG86IFJvc0VsZW1lbnRbXSA9IFtdKTogUm9zRWxlbWVudFtdIHtcbiAgaWYgKFJvc0VsZW1lbnQuaXNSb3NFbGVtZW50KG5vZGUpKSB7XG4gICAgaW50by5wdXNoKG5vZGUpO1xuICB9XG5cbiAgZm9yIChjb25zdCBjaGlsZCBvZiBub2RlLm5vZGUuY2hpbGRyZW4pIHtcbiAgICAvLyBEb24ndCByZWN1cnNlIGludG8gYSBzdWJzdGFja1xuICAgIGlmIChTdGFjay5pc1N0YWNrKGNoaWxkKSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgcm9zRWxlbWVudHMoY2hpbGQsIGludG8pO1xuICB9XG5cbiAgcmV0dXJuIGludG87XG59XG5cbi8qKlxuICogUmV0dXJuIHRoZSBjb25zdHJ1Y3Qgcm9vdCBwYXRoIG9mIHRoZSBnaXZlbiBjb25zdHJ1Y3QgcmVsYXRpdmUgdG8gdGhlIGdpdmVuIGFuY2VzdG9yXG4gKlxuICogSWYgbm8gYW5jZXN0b3IgaXMgZ2l2ZW4gb3IgdGhlIGFuY2VzdG9yIGlzIG5vdCBmb3VuZCwgcmV0dXJuIHRoZSBlbnRpcmUgcm9vdCBwYXRoLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcm9vdFBhdGhUbyhcbiAgY29uc3RydWN0OiBJQ29uc3RydWN0LFxuICBhbmNlc3Rvcj86IElDb25zdHJ1Y3Rcbik6IElDb25zdHJ1Y3RbXSB7XG4gIGNvbnN0IHNjb3BlcyA9IGNvbnN0cnVjdC5ub2RlLnNjb3BlcztcbiAgZm9yIChsZXQgaSA9IHNjb3Blcy5sZW5ndGggLSAyOyBpID49IDA7IGktLSkge1xuICAgIGlmIChzY29wZXNbaV0gPT09IGFuY2VzdG9yKSB7XG4gICAgICByZXR1cm4gc2NvcGVzLnNsaWNlKGkgKyAxKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHNjb3Blcztcbn1cblxuLyoqXG4gKiBtYWtlVW5pcXVlSWQsIHNwZWNpYWxpemVkIGZvciBTdGFjayBuYW1lc1xuICpcbiAqIFN0YWNrIG5hbWVzIG1heSBjb250YWluICctJywgc28gd2UgYWxsb3cgdGhhdCBjaGFyYWN0ZXIgaWYgdGhlIHN0YWNrIG5hbWVcbiAqIGhhcyBvbmx5IG9uZSBjb21wb25lbnQuIE90aGVyd2lzZSB3ZSBmYWxsIGJhY2sgdG8gdGhlIHJlZ3VsYXIgXCJtYWtlVW5pcXVlSWRcIlxuICogYmVoYXZpb3IuXG4gKi9cbmZ1bmN0aW9uIG1ha2VTdGFja05hbWUoY29tcG9uZW50czogc3RyaW5nW10pIHtcbiAgaWYgKGNvbXBvbmVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgcmV0dXJuIGNvbXBvbmVudHNbMF07XG4gIH1cbiAgcmV0dXJuIG1ha2VVbmlxdWVJZChjb21wb25lbnRzKTtcbn1cblxuLy8gVGhlc2UgaW1wb3J0cyBoYXZlIHRvIGJlIGF0IHRoZSBlbmQgdG8gcHJldmVudCBjaXJjdWxhciBpbXBvcnRzXG5pbXBvcnQgeyBSb3NFbGVtZW50IH0gZnJvbSBcIi4vcm9zLWVsZW1lbnRcIjtcbmltcG9ydCB7IFJvc1BzZXVkbyB9IGZyb20gXCIuL3Jvcy1wc2V1ZG9cIjtcbmltcG9ydCB7IFJvc1Jlc291cmNlIH0gZnJvbSBcIi4vcm9zLXJlc291cmNlXCI7XG5pbXBvcnQgeyBUYWdUeXBlIH0gZnJvbSBcIi4vdGFnLW1hbmFnZXJcIjtcbmltcG9ydCB7IGFkZERlcGVuZGVuY3kgfSBmcm9tIFwiLi9kZXBzXCI7XG5pbXBvcnQgeyBSZWZlcmVuY2UgfSBmcm9tIFwiLi9yZWZlcmVuY2VcIjtcbmltcG9ydCB7IElSZXNvbHZhYmxlIH0gZnJvbSBcIi4vcmVzb2x2YWJsZVwiO1xuaW1wb3J0IHtcbiAgRGVmYXVsdFN0YWNrU3ludGhlc2l6ZXIsIGlzUmV1c2FibGVTdGFja1N5bnRoZXNpemVyLFxuICBJU3RhY2tTeW50aGVzaXplcixcbn0gZnJvbSBcIi4vc3RhY2stc3ludGhlc2l6ZXJzXCI7XG5pbXBvcnQgeyBTdGFnZSB9IGZyb20gXCIuL3N0YWdlXCI7XG5pbXBvcnQgeyBJVGFnZ2FibGUsIFRhZ01hbmFnZXIgfSBmcm9tIFwiLi90YWctbWFuYWdlclwiO1xuaW1wb3J0IHtFbnZpcm9ubWVudH0gZnJvbSBcIi4vZW52aXJvbm1lbnRcIjtcblxuaW50ZXJmYWNlIFN0YWNrRGVwZW5kZW5jeSB7XG4gIHN0YWNrOiBTdGFjaztcbiAgcmVhc29uczogc3RyaW5nW107XG59XG5cbmZ1bmN0aW9uIGNvdW50KHhzOiBzdHJpbmdbXSk6IFJlY29yZDxzdHJpbmcsIG51bWJlcj4ge1xuICBjb25zdCByZXQ6IFJlY29yZDxzdHJpbmcsIG51bWJlcj4gPSB7fTtcbiAgZm9yIChjb25zdCB4IG9mIHhzKSB7XG4gICAgaWYgKHggaW4gcmV0KSB7XG4gICAgICByZXRbeF0gKz0gMTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0W3hdID0gMTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJldDtcbn1cbiJdfQ==