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
        this.synthesizer = props.synthesizer ?? new stack_synthesizers_1.DefaultStackSynthesizer();
        this.synthesizer.bind(this);
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
        // write the ROS template as a JSON file
        const outPath = path.join(builder.outdir, this.templateFile);
        const text = JSON.stringify(this._toRosTemplate(), undefined, 2);
        fs.writeFileSync(outPath, text);
        // Delegate adding artifacts to the Synthesizer
        this.synthesizer.synthesizeStackArtifacts(session);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdGFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxpREFBaUQ7QUFDakQseUJBQXlCO0FBQ3pCLDZCQUE2QjtBQUM3Qix5REFBOEU7QUFDOUUsMkRBQThFO0FBQzlFLHFEQUFrRDtBQUNsRCwrQ0FBNEM7QUFDNUMsaURBQWtEO0FBQ2xELHlDQUFxQztBQUVyQyxNQUFNLFlBQVksR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7QUFDdEQsTUFBTSxjQUFjLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO0FBRWhFLE1BQU0sc0JBQXNCLEdBQUcseUJBQXlCLENBQUM7QUFxQ3pEOztHQUVHO0FBQ0gsTUFBYSxLQUFNLFNBQVEsNEJBQVM7SUFtR2xDOzs7Ozs7OztPQVFHO0lBQ0gsWUFBbUIsS0FBaUIsRUFBRSxFQUFXLEVBQUUsUUFBb0IsRUFBRTtRQUN2RSxvR0FBb0c7UUFDcEcsS0FBSyxDQUFDLEtBQU0sRUFBRSxFQUFHLENBQUMsQ0FBQztRQTVEckI7O1dBRUc7UUFDYSxvQkFBZSxHQUFxQixFQUFFLENBQUM7UUFtQ3ZEOztXQUVHO1FBQ2MsdUJBQWtCLEdBRS9CLEVBQUUsQ0FBQztRQW1CTCxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxZQUFZLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUUzRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksdUJBQVUsRUFBRSxDQUFDO1FBRXBDLElBQUksQ0FBQyxnQ0FBZ0M7WUFDbkMsS0FBSyxDQUFDLGdDQUFnQyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFFdEUsSUFBSSxLQUFLLENBQUMsV0FBVyxLQUFLLFNBQVMsRUFBRTtZQUNuQyx3QkFBd0I7WUFDeEIsMEVBQTBFO1lBQzFF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LElBQUksQ0FBQztBQUNkLENBQUM7QUFFRDs7OztHQUlHO0FBQ0gsU0FBZ0IsVUFBVSxDQUN4QixTQUFxQixFQUNyQixRQUFxQjtJQUVyQixNQUFNLE1BQU0sR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQyxLQUFLLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDM0MsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssUUFBUSxFQUFFO1lBQzFCLE9BQU8sTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDNUI7S0FDRjtJQUNELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUM7QUFYRCxnQ0FXQztBQUVEOzs7Ozs7R0FNRztBQUNILFNBQVMsYUFBYSxDQUFDLFVBQW9CO0lBQ3pDLElBQUksVUFBVSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDM0IsT0FBTyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDdEI7SUFDRCxPQUFPLHVCQUFZLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDbEMsQ0FBQztBQUVELGtFQUFrRTtBQUNsRSwrQ0FBMkM7QUFDM0MsNkNBQXlDO0FBRXpDLCtDQUF3QztBQUN4QyxpQ0FBdUM7QUFHdkMsNkRBRzhCO0FBQzlCLG1DQUFnQztBQUNoQywrQ0FBc0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjeGFwaSBmcm9tIFwiQGFsaWNsb3VkL3Jvcy1jZGstY3hhcGlcIjtcbmltcG9ydCAqIGFzIGZzIGZyb20gXCJmc1wiO1xuaW1wb3J0ICogYXMgcGF0aCBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IHsgQ29uc3RydWN0LCBJQ29uc3RydWN0LCBJU3ludGhlc2lzU2Vzc2lvbiB9IGZyb20gXCIuL2NvbnN0cnVjdC1jb21wYXRcIjtcbmltcG9ydCB7IFJPU19UT0tFTl9SRVNPTFZFUiwgUm9zVGVtcGxhdGVMYW5nIH0gZnJvbSBcIi4vcHJpdmF0ZS90ZW1wbGF0ZS1sYW5nXCI7XG5pbXBvcnQgeyBMb2dpY2FsSURzIH0gZnJvbSBcIi4vcHJpdmF0ZS9sb2dpY2FsLWlkXCI7XG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSBcIi4vcHJpdmF0ZS9yZXNvbHZlXCI7XG5pbXBvcnQgeyBtYWtlVW5pcXVlSWQgfSBmcm9tIFwiLi9wcml2YXRlL3VuaXF1ZWlkXCI7XG5pbXBvcnQgeyBSb3NJbmZvIH0gZnJvbSBcIi4vcm9zLWluZm9cIjtcblxuY29uc3QgU1RBQ0tfU1lNQk9MID0gU3ltYm9sLmZvcihcInJvcy1jZGstY29yZS5TdGFja1wiKTtcbmNvbnN0IE1ZX1NUQUNLX0NBQ0hFID0gU3ltYm9sLmZvcihcInJvcy1jZGstY29yZS5TdGFjay5teVN0YWNrXCIpO1xuXG5jb25zdCBWQUxJRF9TVEFDS19OQU1FX1JFR0VYID0gL15bQS1aYS16XVtBLVphLXowLTktXSokLztcblxuZXhwb3J0IGludGVyZmFjZSBTdGFja1Byb3BzIHtcbiAgcmVhZG9ubHkgdmVyc2lvbj86IFN0cmluZztcbiAgLyoqXG4gICAqIEEgZGVzY3JpcHRpb24gb2YgdGhlIHN0YWNrLlxuICAgKlxuICAgKiBAZGVmYXVsdCAtIE5vIGRlc2NyaXB0aW9uLlxuICAgKi9cbiAgcmVhZG9ubHkgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIE5hbWUgdG8gZGVwbG95IHRoZSBzdGFjayB3aXRoXG4gICAqXG4gICAqIEBkZWZhdWx0IC0gRGVyaXZlZCBmcm9tIGNvbnN0cnVjdCBwYXRoLlxuICAgKi9cbiAgcmVhZG9ubHkgc3RhY2tOYW1lPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBTdGFjayB0YWdzIHRoYXQgd2lsbCBiZSBhcHBsaWVkIHRvIGFsbCB0aGUgdGFnZ2FibGUgcmVzb3VyY2VzIGFuZCB0aGUgc3RhY2sgaXRzZWxmLlxuICAgKlxuICAgKiBAZGVmYXVsdCB7fVxuICAgKi9cbiAgcmVhZG9ubHkgdGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG5cbiAgLyoqXG4gICAqIFN5bnRoZXNpcyBtZXRob2QgdG8gdXNlIHdoaWxlIGRlcGxveWluZyB0aGlzIHN0YWNrXG4gICAqXG4gICAqIEBkZWZhdWx0IC0gYERlZmF1bHRTdGFja1N5bnRoZXNpemVyYFxuICAgKi9cbiAgcmVhZG9ubHkgc3ludGhlc2l6ZXI/OiBJU3RhY2tTeW50aGVzaXplcjtcblxuICByZWFkb25seSBtZXRhZGF0YT86IHtba2V5OiBzdHJpbmddOiBhbnl9O1xuXG4gIHJlYWRvbmx5IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50PzogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBBIHJvb3QgY29uc3RydWN0IHdoaWNoIHJlcHJlc2VudHMgYSBzaW5nbGUgUk9TIHN0YWNrLlxuICovXG5leHBvcnQgY2xhc3MgU3RhY2sgZXh0ZW5kcyBDb25zdHJ1Y3QgaW1wbGVtZW50cyBJVGFnZ2FibGUge1xuICAvKipcbiAgICogUmV0dXJuIHdoZXRoZXIgdGhlIGdpdmVuIG9iamVjdCBpcyBhIFN0YWNrLlxuICAgKlxuICAgKiBXZSBkbyBhdHRyaWJ1dGUgZGV0ZWN0aW9uIHNpbmNlIHdlIGNhbid0IHJlbGlhYmx5IHVzZSAnaW5zdGFuY2VvZicuXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGlzU3RhY2soeDogYW55KTogeCBpcyBTdGFjayB7XG4gICAgcmV0dXJuIHggIT09IG51bGwgJiYgdHlwZW9mIHggPT09IFwib2JqZWN0XCIgJiYgU1RBQ0tfU1lNQk9MIGluIHg7XG4gIH1cblxuICAvKipcbiAgICogTG9va3MgdXAgdGhlIGZpcnN0IHN0YWNrIHNjb3BlIGluIHdoaWNoIGBjb25zdHJ1Y3RgIGlzIGRlZmluZWQuIEZhaWxzIGlmIHRoZXJlIGlzIG5vIHN0YWNrIHVwIHRoZSB0cmVlLlxuICAgKiBAcGFyYW0gY29uc3RydWN0IFRoZSBjb25zdHJ1Y3QgdG8gc3RhcnQgdGhlIHNlYXJjaCBmcm9tLlxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBvZihjb25zdHJ1Y3Q6IElDb25zdHJ1Y3QpOiBTdGFjayB7XG4gICAgLy8gd2Ugd2FudCB0aGlzIHRvIGJlIGFzIGNoZWFwIGFzIHBvc3NpYmxlLlxuICAgIGNvbnN0IGNhY2hlID0gKGNvbnN0cnVjdCBhcyBhbnkpW01ZX1NUQUNLX0NBQ0hFXSBhcyBTdGFjayB8IHVuZGVmaW5lZDtcbiAgICBpZiAoY2FjaGUpIHtcbiAgICAgIHJldHVybiBjYWNoZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdmFsdWUgPSBfbG9va3VwKGNvbnN0cnVjdCk7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29uc3RydWN0LCBNWV9TVEFDS19DQUNIRSwge1xuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgICB2YWx1ZSxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9sb29rdXAoYzogSUNvbnN0cnVjdCk6IFN0YWNrIHtcbiAgICAgIGlmIChTdGFjay5pc1N0YWNrKGMpKSB7XG4gICAgICAgIHJldHVybiBjO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWMubm9kZS5zY29wZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYE5vIHN0YWNrIGNvdWxkIGJlIGlkZW50aWZpZWQgZm9yIHRoZSBjb25zdHJ1Y3QgYXQgcGF0aCAke2NvbnN0cnVjdC5ub2RlLnBhdGh9YFxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gX2xvb2t1cChjLm5vZGUuc2NvcGUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUYWdzIHRvIGJlIGFwcGxpZWQgdG8gdGhlIHN0YWNrLlxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IHRhZ3M6IFRhZ01hbmFnZXI7XG5cbiAgLyoqXG4gICAqIE9wdGlvbnMgZm9yIFJPUyB0ZW1wbGF0ZSAobGlrZSB2ZXJzaW9uLCBkZXNjcmlwdGlvbikuXG4gICAqL1xuICBwdWJsaWMgcmVhZG9ubHkgdGVtcGxhdGVPcHRpb25zOiBJVGVtcGxhdGVPcHRpb25zID0ge307XG5cbiAgLyoqXG4gICAqIElmIHRoaXMgaXMgYSBuZXN0ZWQgc3RhY2ssIHRoaXMgcmVwcmVzZW50cyBpdHMgYEFMSVlVTjo6Uk9TOjpTdGFja2BcbiAgICogcmVzb3VyY2UuIGB1bmRlZmluZWRgIGZvciB0b3AtbGV2ZWwgKG5vbi1uZXN0ZWQpIHN0YWNrcy5cbiAgICpcbiAgICogQGV4cGVyaW1lbnRhbFxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IG5lc3RlZFN0YWNrUmVzb3VyY2U/OiBSb3NSZXNvdXJjZTtcblxuICAvKipcbiAgICogVGhlIG5hbWUgb2YgdGhlIFJPUyB0ZW1wbGF0ZSBmaWxlIGVtaXR0ZWQgdG8gdGhlIG91dHB1dFxuICAgKiBkaXJlY3RvcnkgZHVyaW5nIHN5bnRoZXNpcy5cbiAgICpcbiAgICogQGV4YW1wbGUgTXlTdGFjay50ZW1wbGF0ZS5qc29uXG4gICAqL1xuICBwdWJsaWMgcmVhZG9ubHkgdGVtcGxhdGVGaWxlOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBJRCBvZiB0aGUgY2xvdWQgYXNzZW1ibHkgYXJ0aWZhY3QgZm9yIHRoaXMgc3RhY2suXG4gICAqL1xuICBwdWJsaWMgcmVhZG9ubHkgYXJ0aWZhY3RJZDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBTeW50aGVzaXMgbWV0aG9kIGZvciB0aGlzIHN0YWNrXG4gICAqXG4gICAqIEBleHBlcmltZW50YWxcbiAgICovXG4gIHB1YmxpYyByZWFkb25seSBzeW50aGVzaXplcjogSVN0YWNrU3ludGhlc2l6ZXI7XG5cbiAgLyoqXG4gICAqIExvZ2ljYWwgSUQgZ2VuZXJhdGlvbiBzdHJhdGVneVxuICAgKi9cbiAgcHJpdmF0ZSByZWFkb25seSBfbG9naWNhbElkczogTG9naWNhbElEcztcblxuICAvKipcbiAgICogT3RoZXIgc3RhY2tzIHRoaXMgc3RhY2sgZGVwZW5kcyBvblxuICAgKi9cbiAgcHJpdmF0ZSByZWFkb25seSBfc3RhY2tEZXBlbmRlbmNpZXM6IHtcbiAgICBbdW5pcXVlSWQ6IHN0cmluZ106IFN0YWNrRGVwZW5kZW5jeTtcbiAgfSA9IHt9O1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgX3N0YWNrTmFtZTogc3RyaW5nO1xuXG4gIHB1YmxpYyByZWFkb25seSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBzdGFjay5cbiAgICpcbiAgICogQHBhcmFtIHNjb3BlIFBhcmVudCBvZiB0aGlzIHN0YWNrLCB1c3VhbGx5IGEgUHJvZ3JhbSBpbnN0YW5jZS5cbiAgICogQHBhcmFtIGlkIFRoZSBjb25zdHJ1Y3QgSUQgb2YgdGhpcyBzdGFjay4gSWYgYHN0YWNrTmFtZWAgaXMgbm90IGV4cGxpY2l0bHlcbiAgICogZGVmaW5lZCwgdGhpcyBpZCAoYW5kIGFueSBwYXJlbnQgSURzKSB3aWxsIGJlIHVzZWQgdG8gZGV0ZXJtaW5lIHRoZVxuICAgKiBwaHlzaWNhbCBJRCBvZiB0aGUgc3RhY2suXG4gICAqIEBwYXJhbSBwcm9wcyBTdGFjayBwcm9wZXJ0aWVzLlxuICAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlPzogQ29uc3RydWN0LCBpZD86IHN0cmluZywgcHJvcHM6IFN0YWNrUHJvcHMgPSB7fSkge1xuICAgIC8vIEZvciB1bml0IHRlc3QgY29udmVuaWVuY2UgcGFyZW50cyBhcmUgb3B0aW9uYWwsIHNvIGJ5cGFzcyB0aGUgdHlwZSBjaGVjayB3aGVuIGNhbGxpbmcgdGhlIHBhcmVudC5cbiAgICBzdXBlcihzY29wZSEsIGlkISk7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgU1RBQ0tfU1lNQk9MLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG4gICAgdGhpcy5fbG9naWNhbElkcyA9IG5ldyBMb2dpY2FsSURzKCk7XG5cbiAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID1cbiAgICAgIHByb3BzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID09PSB1bmRlZmluZWQgPyB0cnVlIDogZmFsc2U7XG5cbiAgICBpZiAocHJvcHMuZGVzY3JpcHRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gTWF4IGxlbmd0aCAxMDI0IGJ5dGVzXG4gICAgICAvLyBUeXBpY2FsbHkgMiBieXRlcyBwZXIgY2hhcmFjdGVyLCBtYXkgYmUgbW9yZSBmb3IgbW9yZSBleG90aWMgY2hhcmFjdGVyc1xuICAgICAgaWYgKHByb3BzLmRlc2NyaXB0aW9uLmxlbmd0aCA+IDUxMikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYFN0YWNrIGRlc2NyaXB0aW9uIG11c3QgYmUgPD0gMTAyNCBieXRlcy4gUmVjZWl2ZWQgZGVzY3JpcHRpb246ICcke3Byb3BzLmRlc2NyaXB0aW9ufSdgXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICB0aGlzLnRlbXBsYXRlT3B0aW9ucy5kZXNjcmlwdGlvbiA9IHByb3BzLmRlc2NyaXB0aW9uO1xuICAgIH1cblxuICAgIGlmIChwcm9wcy5tZXRhZGF0YSA9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMudGVtcGxhdGVPcHRpb25zLm1ldGFkYXRhID0geydBTElZVU46OlJPUzo6SW50ZXJmYWNlJzp7J1RlbXBsYXRlVGFncyc6W1wiQ3JlYXRlIGJ5IFJPUyBDREtcIl19fTtcbiAgICB9XG5cbiAgICB0aGlzLl9zdGFja05hbWUgPVxuICAgICAgcHJvcHMuc3RhY2tOYW1lICE9PSB1bmRlZmluZWRcbiAgICAgICAgPyBwcm9wcy5zdGFja05hbWVcbiAgICAgICAgOiB0aGlzLmdlbmVyYXRlU3RhY2tOYW1lKCk7XG4gICAgdGhpcy50YWdzID0gbmV3IFRhZ01hbmFnZXIoXG4gICAgICBUYWdUeXBlLktFWV9WQUxVRSxcbiAgICAgIFwiYWxpeXVuOnJvczpzdGFja1wiLFxuICAgICAgcHJvcHMudGFnc1xuICAgICk7XG5cbiAgICBpZiAoIVZBTElEX1NUQUNLX05BTUVfUkVHRVgudGVzdCh0aGlzLnN0YWNrTmFtZSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYFN0YWNrIG5hbWUgbXVzdCBtYXRjaCB0aGUgcmVndWxhciBleHByZXNzaW9uOiAke1ZBTElEX1NUQUNLX05BTUVfUkVHRVgudG9TdHJpbmcoKX0sIGdvdCAnJHtcbiAgICAgICAgICB0aGlzLnN0YWNrTmFtZVxuICAgICAgICB9J2BcbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gdGhlIHByZWZlcnJlZCBiZWhhdmlvciBpcyB0byBnZW5lcmF0ZSBhIHVuaXF1ZSBpZCBmb3IgdGhpcyBzdGFjayBhbmQgdXNlXG4gICAgLy8gaXQgYXMgdGhlIGFydGlmYWN0IElEIGluIHRoZSBhc3NlbWJseS4gdGhpcyBhbGxvd3MgbXVsdGlwbGUgc3RhY2tzIHRvIHVzZVxuICAgIC8vIHRoZSBzYW1lIG5hbWUuIGhvd2V2ZXIsIHRoaXMgYmVoYXZpb3IgaXMgYnJlYWtpbmcgZm9yIDEueCBzbyBpdCdzIG9ubHlcbiAgICAvLyBhcHBsaWVkIHVuZGVyIGEgZmVhdHVyZSBmbGFnIHdoaWNoIGlzIGFwcGxpZWQgYXV0b21hdGljYWxseSBmb3IgbmV3XG4gICAgLy8gcHJvamVjdHMgY3JlYXRlZCB1c2luZyBgY2RrIGluaXRgLlxuICAgIC8vXG4gICAgLy8gQWxzbyB1c2UgdGhlIG5ldyBiZWhhdmlvciBpZiB3ZSBhcmUgdXNpbmcgdGhlIG5ldyBDSS9DRC1yZWFkeSBzeW50aGVzaXplcjsgdGhhdCB3YXlcbiAgICAvLyBwZW9wbGUgb25seSBoYXZlIHRvIGZsaXAgb25lIGZsYWcuXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtYXgtbGluZS1sZW5ndGhcbiAgICB0aGlzLmFydGlmYWN0SWQgPVxuICAgICAgdGhpcy5ub2RlLnRyeUdldENvbnRleHQoY3hhcGkuRU5BQkxFX1NUQUNLX05BTUVfRFVQTElDQVRFU19DT05URVhUKSB8fFxuICAgICAgdGhpcy5ub2RlLnRyeUdldENvbnRleHQoY3hhcGkuTkVXX1NUWUxFX1NUQUNLX1NZTlRIRVNJU19DT05URVhUKVxuICAgICAgICA/IHRoaXMuZ2VuZXJhdGVTdGFja0FydGlmYWN0SWQoKVxuICAgICAgICA6IHRoaXMuc3RhY2tOYW1lO1xuXG4gICAgdGhpcy50ZW1wbGF0ZUZpbGUgPSBgJHt0aGlzLmFydGlmYWN0SWR9LnRlbXBsYXRlLmpzb25gO1xuXG4gICAgdGhpcy5zeW50aGVzaXplciA9IHByb3BzLnN5bnRoZXNpemVyID8/IG5ldyBEZWZhdWx0U3RhY2tTeW50aGVzaXplcigpO1xuICAgIHRoaXMuc3ludGhlc2l6ZXIuYmluZCh0aGlzKTtcbiAgICBuZXcgUm9zSW5mbyhcbiAgICAgIHRoaXMsXG4gICAgICBSb3NJbmZvLmZvcm1hdFZlcnNpb24sXG4gICAgICBwcm9wcy52ZXJzaW9uID8gcHJvcHMudmVyc2lvbiA6IFJvc0luZm8udjIwMTUwOTAxXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNvbHZlIGEgdG9rZW5pemVkIHZhbHVlIGluIHRoZSBjb250ZXh0IG9mIHRoZSBjdXJyZW50IHN0YWNrLlxuICAgKi9cbiAgcHVibGljIHJlc29sdmUob2JqOiBhbnkpOiBhbnkge1xuICAgIHJldHVybiByZXNvbHZlKG9iaiwge1xuICAgICAgc2NvcGU6IHRoaXMsXG4gICAgICBwcmVmaXg6IFtdLFxuICAgICAgcmVzb2x2ZXI6IFJPU19UT0tFTl9SRVNPTFZFUixcbiAgICAgIHByZXBhcmluZzogZmFsc2UsXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydCBhbiBvYmplY3QsIHBvdGVudGlhbGx5IGNvbnRhaW5pbmcgdG9rZW5zLCB0byBhIEpTT04gc3RyaW5nXG4gICAqL1xuICBwdWJsaWMgdG9Kc29uU3RyaW5nKG9iajogYW55LCBzcGFjZT86IG51bWJlcik6IHN0cmluZyB7XG4gICAgcmV0dXJuIFJvc1RlbXBsYXRlTGFuZy50b0pTT04ob2JqLCBzcGFjZSkudG9TdHJpbmcoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW5hbWUgYSBnZW5lcmF0ZWQgbG9naWNhbCBpZGVudGl0aWVzXG4gICAqXG4gICAqIFRvIG1vZGlmeSB0aGUgbmFtaW5nIHNjaGVtZSBzdHJhdGVneSwgZXh0ZW5kIHRoZSBgU3RhY2tgIGNsYXNzIGFuZFxuICAgKiBvdmVycmlkZSB0aGUgYGFsbG9jYXRlTG9naWNhbElkYCBtZXRob2QuXG4gICAqL1xuICBwdWJsaWMgcmVuYW1lTG9naWNhbElkKG9sZElkOiBzdHJpbmcsIG5ld0lkOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9sb2dpY2FsSWRzLmFkZFJlbmFtZShvbGRJZCwgbmV3SWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFsbG9jYXRlcyBhIHN0YWNrLXVuaXF1ZSBsb2dpY2FsIGlkZW50aXR5IGZvciBhXG4gICAqIHNwZWNpZmljIHJlc291cmNlLlxuICAgKlxuICAgKiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgd2hlbiBhIGBSb3NFbGVtZW50YCBpcyBjcmVhdGVkIGFuZCB1c2VkIHRvIHJlbmRlciB0aGVcbiAgICogaW5pdGlhbCBsb2dpY2FsIGlkZW50aXR5IG9mIHJlc291cmNlcy4gTG9naWNhbCBJRCByZW5hbWVzIGFyZSBhcHBsaWVkIGF0XG4gICAqIHRoaXMgc3RhZ2UuXG4gICAqXG4gICAqIFRoaXMgbWV0aG9kIHVzZXMgdGhlIHByb3RlY3RlZCBtZXRob2QgYGFsbG9jYXRlTG9naWNhbElkYCB0byByZW5kZXIgdGhlXG4gICAqIGxvZ2ljYWwgSUQgZm9yIGFuIGVsZW1lbnQuIFRvIG1vZGlmeSB0aGUgbmFtaW5nIHNjaGVtZSwgZXh0ZW5kIHRoZSBgU3RhY2tgXG4gICAqIGNsYXNzIGFuZCBvdmVycmlkZSB0aGlzIG1ldGhvZC5cbiAgICpcbiAgICogQHBhcmFtIGVsZW1lbnQgVGhlIFJPUyBlbGVtZW50IGZvciB3aGljaCBhIGxvZ2ljYWwgaWRlbnRpdHkgaXNcbiAgICogbmVlZGVkLlxuICAgKi9cbiAgcHVibGljIGdldExvZ2ljYWxJZChlbGVtZW50OiBSb3NFbGVtZW50KTogc3RyaW5nIHtcbiAgICBjb25zdCBsb2dpY2FsSWQgPSB0aGlzLmFsbG9jYXRlTG9naWNhbElkKGVsZW1lbnQpO1xuICAgIHJldHVybiB0aGlzLl9sb2dpY2FsSWRzLmFwcGx5UmVuYW1lKGxvZ2ljYWxJZCk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGEgZGVwZW5kZW5jeSBiZXR3ZWVuIHRoaXMgc3RhY2sgYW5kIGFub3RoZXIgc3RhY2suXG4gICAqXG4gICAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gZGVmaW5lIGRlcGVuZGVuY2llcyBiZXR3ZWVuIGFueSB0d28gc3RhY2tzIHdpdGhpbiBhblxuICAgKiBhcHAsIGFuZCBhbHNvIHN1cHBvcnRzIG5lc3RlZCBzdGFja3MuXG4gICAqL1xuICBwdWJsaWMgYWRkRGVwZW5kZW5jeSh0YXJnZXQ6IFN0YWNrLCByZWFzb24/OiBzdHJpbmcpIHtcbiAgICBhZGREZXBlbmRlbmN5KHRoaXMsIHRhcmdldCwgcmVhc29uKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIHN0YWNrcyB0aGlzIHN0YWNrIGRlcGVuZHMgb25cbiAgICovXG4gIHB1YmxpYyBnZXQgZGVwZW5kZW5jaWVzKCk6IFN0YWNrW10ge1xuICAgIHJldHVybiBPYmplY3QudmFsdWVzKHRoaXMuX3N0YWNrRGVwZW5kZW5jaWVzKS5tYXAoKHgpID0+IHguc3RhY2spO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBjb25jcmV0ZSBST1MgcGh5c2ljYWwgc3RhY2sgbmFtZS5cbiAgICpcbiAgICogVGhpcyBpcyBlaXRoZXIgdGhlIG5hbWUgZGVmaW5lZCBleHBsaWNpdGx5IGluIHRoZSBgc3RhY2tOYW1lYCBwcm9wIG9yXG4gICAqIGFsbG9jYXRlZCBiYXNlZCBvbiB0aGUgc3RhY2sncyBsb2NhdGlvbiBpbiB0aGUgY29uc3RydWN0IHRyZWUuIFN0YWNrcyB0aGF0XG4gICAqIGFyZSBkaXJlY3RseSBkZWZpbmVkIHVuZGVyIHRoZSBhcHAgdXNlIHRoZWlyIGNvbnN0cnVjdCBgaWRgIGFzIHRoZWlyIHN0YWNrXG4gICAqIG5hbWUuIFN0YWNrcyB0aGF0IGFyZSBkZWZpbmVkIGRlZXBlciB3aXRoaW4gdGhlIHRyZWUgd2lsbCB1c2UgYSBoYXNoZWQgbmFtaW5nXG4gICAqIHNjaGVtZSBiYXNlZCBvbiB0aGUgY29uc3RydWN0IHBhdGggdG8gZW5zdXJlIHVuaXF1ZW5lc3MuXG4gICAqXG4gICAqL1xuICBwdWJsaWMgZ2V0IHN0YWNrTmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9zdGFja05hbWU7XG4gIH1cblxuICAvKipcbiAgICogVGhlIElEIG9mIHRoZSBzdGFja1xuICAgKlxuICAgKi9cbiAgcHVibGljIGdldCBzdGFja0lkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIFJvc1BzZXVkby5zdGFja0lkO1xuICB9XG5cbiAgLyoqXG4gICAqIEluZGljYXRlcyBpZiB0aGlzIGlzIGEgbmVzdGVkIHN0YWNrLCBpbiB3aGljaCBjYXNlIGBwYXJlbnRTdGFja2Agd2lsbCBpbmNsdWRlIGEgcmVmZXJlbmNlIHRvIGl0J3MgcGFyZW50LlxuICAgKi9cbiAgcHVibGljIGdldCBuZXN0ZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubmVzdGVkU3RhY2tSZXNvdXJjZSAhPT0gdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIElmIHRoaXMgaXMgYSBuZXN0ZWQgc3RhY2ssIHJldHVybnMgaXQncyBwYXJlbnQgc3RhY2suXG4gICAqL1xuICBwdWJsaWMgZ2V0IG5lc3RlZFN0YWNrUGFyZW50KCkge1xuICAgIHJldHVybiB0aGlzLm5lc3RlZFN0YWNrUmVzb3VyY2UgJiYgU3RhY2sub2YodGhpcy5uZXN0ZWRTdGFja1Jlc291cmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBwYXJlbnQgb2YgYSBuZXN0ZWQgc3RhY2suXG4gICAqXG4gICAqIEBkZXByZWNhdGVkIHVzZSBgbmVzdGVkU3RhY2tQYXJlbnRgXG4gICAqL1xuICBwdWJsaWMgZ2V0IHBhcmVudFN0YWNrKCkge1xuICAgIHJldHVybiB0aGlzLm5lc3RlZFN0YWNrUGFyZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCBpbXBsaWNpdGx5IGJ5IHRoZSBgYWRkRGVwZW5kZW5jeWAgaGVscGVyIGZ1bmN0aW9uIGluIG9yZGVyIHRvXG4gICAqIHJlYWxpemUgYSBkZXBlbmRlbmN5IGJldHdlZW4gdHdvIHRvcC1sZXZlbCBzdGFja3MgYXQgdGhlIGFzc2VtYmx5IGxldmVsLlxuICAgKlxuICAgKiBVc2UgYHN0YWNrLmFkZERlcGVuZGVuY3lgIHRvIGRlZmluZSB0aGUgZGVwZW5kZW5jeSBiZXR3ZWVuIGFueSB0d28gc3RhY2tzLFxuICAgKiBhbmQgdGFrZSBpbnRvIGFjY291bnQgbmVzdGVkIHN0YWNrIHJlbGF0aW9uc2hpcHMuXG4gICAqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgcHVibGljIF9hZGRBc3NlbWJseURlcGVuZGVuY3kodGFyZ2V0OiBTdGFjaywgcmVhc29uPzogc3RyaW5nKSB7XG4gICAgLy8gZGVmZW5zaXZlOiB3ZSBzaG91bGQgbmV2ZXIgZ2V0IGhlcmUgZm9yIG5lc3RlZCBzdGFja3NcbiAgICBpZiAodGhpcy5uZXN0ZWQgfHwgdGFyZ2V0Lm5lc3RlZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBcIkNhbm5vdCBhZGQgYXNzZW1ibHktbGV2ZWwgZGVwZW5kZW5jaWVzIGZvciBuZXN0ZWQgc3RhY2tzXCJcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmVhc29uID0gcmVhc29uIHx8IFwiZGVwZW5kZW5jeSBhZGRlZCB1c2luZyBzdGFjay5hZGREZXBlbmRlbmN5KClcIjtcbiAgICBjb25zdCBjeWNsZSA9IHRhcmdldC5zdGFja0RlcGVuZGVuY3lSZWFzb25zKHRoaXMpO1xuICAgIGlmIChjeWNsZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGAnJHt0YXJnZXQubm9kZS5wYXRofScgZGVwZW5kcyBvbiAnJHt0aGlzLm5vZGUucGF0aH0nICgke2N5Y2xlLmpvaW4oXG4gICAgICAgICAgXCIsIFwiXG4gICAgICAgICl9KS4gQWRkaW5nIHRoaXMgZGVwZW5kZW5jeSAoJHtyZWFzb259KSB3b3VsZCBjcmVhdGUgYSBjeWNsaWMgcmVmZXJlbmNlLmBcbiAgICAgICk7XG4gICAgfVxuXG4gICAgbGV0IGRlcCA9IHRoaXMuX3N0YWNrRGVwZW5kZW5jaWVzW3RhcmdldC5ub2RlLnVuaXF1ZUlkXTtcbiAgICBpZiAoIWRlcCkge1xuICAgICAgZGVwID0gdGhpcy5fc3RhY2tEZXBlbmRlbmNpZXNbdGFyZ2V0Lm5vZGUudW5pcXVlSWRdID0ge1xuICAgICAgICBzdGFjazogdGFyZ2V0LFxuICAgICAgICByZWFzb25zOiBbXSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgZGVwLnJlYXNvbnMucHVzaChyZWFzb24pO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52LkNES19ERUJVR19ERVBTKSB7XG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgYFtDREtfREVCVUdfREVQU10gc3RhY2sgXCIke3RoaXMubm9kZS5wYXRofVwiIGRlcGVuZHMgb24gXCIke3RhcmdldC5ub2RlLnBhdGh9XCIgYmVjYXVzZTogJHtyZWFzb259YFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbmFtaW5nIHNjaGVtZSB1c2VkIHRvIGFsbG9jYXRlIGxvZ2ljYWwgSURzLiBCeSBkZWZhdWx0LCB1c2VzXG4gICAqIHRoZSBgSGFzaGVkQWRkcmVzc2luZ1NjaGVtZWAgYnV0IHRoaXMgbWV0aG9kIGNhbiBiZSBvdmVycmlkZGVuIHRvIGN1c3RvbWl6ZVxuICAgKiB0aGlzIGJlaGF2aW9yLlxuICAgKlxuICAgKiBJbiBvcmRlciB0byBtYWtlIHN1cmUgbG9naWNhbCBJRHMgYXJlIHVuaXF1ZSBhbmQgc3RhYmxlLCB3ZSBoYXNoIHRoZSByZXNvdXJjZVxuICAgKiBjb25zdHJ1Y3QgdHJlZSBwYXRoIChpLmUuIHRvcGxldmVsL3NlY29uZGxldmVsLy4uLi9teXJlc291cmNlKSBhbmQgYWRkIGl0IGFzXG4gICAqIGEgc3VmZml4IHRvIHRoZSBwYXRoIGNvbXBvbmVudHMgam9pbmVkIHdpdGhvdXQgYSBzZXBhcmF0b3IgKFJPU1xuICAgKiBJRHMgb25seSBhbGxvdyBhbHBoYW51bWVyaWMgY2hhcmFjdGVycykuXG4gICAqXG4gICAqIFRoZSByZXN1bHQgd2lsbCBiZTpcbiAgICpcbiAgICogICA8cGF0aC5qb2luKCcnKT48bWQ1KHBhdGguam9pbignLycpPlxuICAgKiAgICAgXCJodW1hblwiICAgICAgXCJoYXNoXCJcbiAgICpcbiAgICogSWYgdGhlIFwiaHVtYW5cIiBwYXJ0IG9mIHRoZSBJRCBleGNlZWRzIDI0MCBjaGFyYWN0ZXJzLCB3ZSBzaW1wbHkgdHJpbSBpdCBzb1xuICAgKiB0aGUgdG90YWwgSUQgZG9lc24ndCBleGNlZWQgMjU1IGNoYXJhY3RlciBsaW1pdC5cbiAgICpcbiAgICogV2Ugb25seSB0YWtlIDggY2hhcmFjdGVycyBmcm9tIHRoZSBtZDUgaGFzaCAoMC4wMDAwMDUgY2hhbmNlIG9mIGNvbGxpc2lvbikuXG4gICAqXG4gICAqIFNwZWNpYWwgY2FzZXM6XG4gICAqXG4gICAqIC0gSWYgdGhlIHBhdGggb25seSBjb250YWlucyBhIHNpbmdsZSBjb21wb25lbnQgKGkuZS4gaXQncyBhIHRvcC1sZXZlbFxuICAgKiAgIHJlc291cmNlKSwgd2Ugd29uJ3QgYWRkIHRoZSBoYXNoIHRvIGl0LiBUaGUgaGFzaCBpcyBub3QgbmVlZGVkIGZvclxuICAgKiAgIGRpc2FtaWd1YXRpb24gYW5kIGFsc28sIGl0IGFsbG93cyBmb3IgYSBtb3JlIHN0cmFpZ2h0Zm9yd2FyZCBtaWdyYXRpb24gYW5cbiAgICogICBleGlzdGluZyBST1MgdGVtcGxhdGUgdG8gYSBDREsgc3RhY2sgd2l0aG91dCBsb2dpY2FsIElEIGNoYW5nZXNcbiAgICogICAob3IgcmVuYW1lcykuXG4gICAqIC0gRm9yIGFlc3RoZXRpYyByZWFzb25zLCBpZiB0aGUgbGFzdCBjb21wb25lbnRzIG9mIHRoZSBwYXRoIGFyZSB0aGUgc2FtZVxuICAgKiAgIChpLmUuIGBMMS9MMi9QaXBlbGluZS9QaXBlbGluZWApLCB0aGV5IHdpbGwgYmUgZGUtZHVwbGljYXRlZCB0byBtYWtlIHRoZVxuICAgKiAgIHJlc3VsdGluZyBodW1hbiBwb3J0aW9uIG9mIHRoZSBJRCBtb3JlIHBsZWFzaW5nOiBgTDFMMlBpcGVsaW5lPEhBU0g+YFxuICAgKiAgIGluc3RlYWQgb2YgYEwxTDJQaXBlbGluZVBpcGVsaW5lPEhBU0g+YFxuICAgKiAtIElmIGEgY29tcG9uZW50IGlzIG5hbWVkIFwiRGVmYXVsdFwiIGl0IHdpbGwgYmUgb21pdHRlZCBmcm9tIHRoZSBwYXRoLiBUaGlzXG4gICAqICAgYWxsb3dzIHJlZmFjdG9yaW5nIGhpZ2hlciBsZXZlbCBhYnN0cmFjdGlvbnMgYXJvdW5kIGNvbnN0cnVjdHMgd2l0aG91dCBhZmZlY3RpbmdcbiAgICogICB0aGUgSURzIG9mIGFscmVhZHkgZGVwbG95ZWQgcmVzb3VyY2VzLlxuICAgKiAtIElmIGEgY29tcG9uZW50IGlzIG5hbWVkIFwiUmVzb3VyY2VcIiBpdCB3aWxsIGJlIG9taXR0ZWQgZnJvbSB0aGUgdXNlci12aXNpYmxlXG4gICAqICAgcGF0aCwgYnV0IGluY2x1ZGVkIGluIHRoZSBoYXNoLiBUaGlzIHJlZHVjZXMgdmlzdWFsIG5vaXNlIGluIHRoZSBodW1hbiByZWFkYWJsZVxuICAgKiAgIHBhcnQgb2YgdGhlIGlkZW50aWZpZXIuXG4gICAqXG4gICAqIEBwYXJhbSByb3NFbGVtZW50IFRoZSBlbGVtZW50IGZvciB3aGljaCB0aGUgbG9naWNhbCBJRCBpcyBhbGxvY2F0ZWQuXG4gICAqL1xuICBwcm90ZWN0ZWQgYWxsb2NhdGVMb2dpY2FsSWQocm9zRWxlbWVudDogUm9zRWxlbWVudCk6IHN0cmluZyB7XG4gICAgY29uc3Qgc2NvcGVzID0gcm9zRWxlbWVudC5ub2RlLnNjb3BlcztcbiAgICBjb25zdCBzdGFja0luZGV4ID0gc2NvcGVzLmluZGV4T2Yocm9zRWxlbWVudC5zdGFjayk7XG4gICAgY29uc3QgcGF0aENvbXBvbmVudHMgPSBzY29wZXMuc2xpY2Uoc3RhY2tJbmRleCArIDEpLm1hcCgoeCkgPT4geC5ub2RlLmlkKTtcbiAgICByZXR1cm4gbWFrZVVuaXF1ZUlkKHBhdGhDb21wb25lbnRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBWYWxpZGF0ZSBzdGFjayBuYW1lXG4gICAqXG4gICAqIFJPUyBzdGFjayBuYW1lcyBjYW4gaW5jbHVkZSBkYXNoZXMgaW4gYWRkaXRpb24gdG8gdGhlIHJlZ3VsYXIgaWRlbnRpZmllclxuICAgKiBjaGFyYWN0ZXIgY2xhc3NlcywgYW5kIHdlIGRvbid0IGFsbG93IG9uZSBvZiB0aGUgbWFnaWMgbWFya2Vycy5cbiAgICpcbiAgICogQGludGVybmFsXG4gICAqL1xuICBwcm90ZWN0ZWQgX3ZhbGlkYXRlSWQobmFtZTogc3RyaW5nKSB7XG4gICAgaWYgKG5hbWUgJiYgIVZBTElEX1NUQUNLX05BTUVfUkVHRVgudGVzdChuYW1lKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgU3RhY2sgbmFtZSBtdXN0IG1hdGNoIHRoZSByZWd1bGFyIGV4cHJlc3Npb246ICR7VkFMSURfU1RBQ0tfTkFNRV9SRUdFWC50b1N0cmluZygpfSwgZ290ICcke25hbWV9J2BcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemUoc2Vzc2lvbjogSVN5bnRoZXNpc1Nlc3Npb24pOiB2b2lkIHtcbiAgICAvLyBJbiBwcmluY2lwbGUsIHN0YWNrIHN5bnRoZXNpcyBpcyBkZWxlZ2F0ZWQgdG8gdGhlXG4gICAgLy8gU3RhY2tTeW50aGVzaXMgb2JqZWN0LlxuICAgIC8vXG4gICAgLy8gSG93ZXZlciwgc29tZSBwYXJ0cyBvZiBzeW50aGVzaXMgY3VycmVudGx5IHVzZSBzb21lIHByaXZhdGVcbiAgICAvLyBtZXRob2RzIG9uIFN0YWNrLCBhbmQgSSBkb24ndCByZWFsbHkgc2VlIHRoZSB2YWx1ZSBpbiByZWZhY3RvcmluZ1xuICAgIC8vIHRoaXMgcmlnaHQgbm93LCBzbyBzb21lIHBhcnRzIHN0aWxsIGhhcHBlbiBoZXJlLlxuICAgIGNvbnN0IGJ1aWxkZXIgPSBzZXNzaW9uLmFzc2VtYmx5O1xuXG4gICAgLy8gd3JpdGUgdGhlIFJPUyB0ZW1wbGF0ZSBhcyBhIEpTT04gZmlsZVxuICAgIGNvbnN0IG91dFBhdGggPSBwYXRoLmpvaW4oYnVpbGRlci5vdXRkaXIsIHRoaXMudGVtcGxhdGVGaWxlKTtcbiAgICBjb25zdCB0ZXh0ID0gSlNPTi5zdHJpbmdpZnkodGhpcy5fdG9Sb3NUZW1wbGF0ZSgpLCB1bmRlZmluZWQsIDIpO1xuICAgIGZzLndyaXRlRmlsZVN5bmMob3V0UGF0aCwgdGV4dCk7XG5cbiAgICAvLyBEZWxlZ2F0ZSBhZGRpbmcgYXJ0aWZhY3RzIHRvIHRoZSBTeW50aGVzaXplclxuICAgIHRoaXMuc3ludGhlc2l6ZXIuc3ludGhlc2l6ZVN0YWNrQXJ0aWZhY3RzKHNlc3Npb24pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIFJvc1RlbXBsYXRlIHRlbXBsYXRlIGZvciB0aGlzIHN0YWNrIGJ5IHRyYXZlcnNpbmdcbiAgICogdGhlIHRyZWUgYW5kIGludm9raW5nIF90b1Jvc1RlbXBsYXRlKCkgb24gYWxsIEVudGl0eSBvYmplY3RzLlxuICAgKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIHByb3RlY3RlZCBfdG9Sb3NUZW1wbGF0ZSgpIHtcbiAgICBjb25zdCB0ZW1wbGF0ZTogYW55ID0ge1xuICAgICAgRGVzY3JpcHRpb246IHRoaXMudGVtcGxhdGVPcHRpb25zLmRlc2NyaXB0aW9uLFxuICAgICAgTWV0YWRhdGE6IHRoaXMudGVtcGxhdGVPcHRpb25zLm1ldGFkYXRhLFxuICAgIH07XG5cbiAgICBjb25zdCBlbGVtZW50cyA9IHJvc0VsZW1lbnRzKHRoaXMpO1xuICAgIGNvbnN0IGZyYWdtZW50cyA9IGVsZW1lbnRzLm1hcCgoZSkgPT4gdGhpcy5yZXNvbHZlKGUuX3RvUm9zVGVtcGxhdGUoKSkpO1xuXG4gICAgLy8gbWVyZ2UgaW4gYWxsIFJPUyBmcmFnbWVudHMgY29sbGVjdGVkIGZyb20gdGhlIHRyZWVcbiAgICBmb3IgKGNvbnN0IGZyYWdtZW50IG9mIGZyYWdtZW50cykge1xuICAgICAgbWVyZ2UodGVtcGxhdGUsIGZyYWdtZW50KTtcbiAgICB9XG5cbiAgICAvLyByZXNvbHZlIGFsbCB0b2tlbnMgYW5kIHJlbW92ZSBhbGwgZW1wdGllc1xuICAgIGNvbnN0IHJldCA9IHRoaXMucmVzb2x2ZSh0ZW1wbGF0ZSkgfHwge307XG5cbiAgICB0aGlzLl9sb2dpY2FsSWRzLmFzc2VydEFsbFJlbmFtZXNBcHBsaWVkKCk7XG5cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgLyoqXG4gICAqIERlcHJlY2F0ZWQuXG4gICAqXG4gICAqIEByZXR1cm5zIHJlZmVyZW5jZSBpdHNlbGYgd2l0aG91dCBhbnkgY2hhbmdlXG4gICAqIEBkZXByZWNhdGVkIGNyb3NzIHJlZmVyZW5jZSBoYW5kbGluZyBoYXMgYmVlbiBtb3ZlZCB0byBgQXBwLnByZXBhcmUoKWAuXG4gICAqL1xuICBwcm90ZWN0ZWQgcHJlcGFyZUNyb3NzUmVmZXJlbmNlKFxuICAgIF9zb3VyY2VTdGFjazogU3RhY2ssXG4gICAgcmVmZXJlbmNlOiBSZWZlcmVuY2VcbiAgKTogSVJlc29sdmFibGUge1xuICAgIHJldHVybiByZWZlcmVuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgd2hldGhlciB0aGlzIHN0YWNrIGhhcyBhICh0cmFuc2l0aXZlKSBkZXBlbmRlbmN5IG9uIGFub3RoZXIgc3RhY2tcbiAgICpcbiAgICogUmV0dXJucyB0aGUgbGlzdCBvZiByZWFzb25zIG9uIHRoZSBkZXBlbmRlbmN5IHBhdGgsIG9yIHVuZGVmaW5lZFxuICAgKiBpZiB0aGVyZSBpcyBubyBkZXBlbmRlbmN5LlxuICAgKi9cbiAgcHJpdmF0ZSBzdGFja0RlcGVuZGVuY3lSZWFzb25zKG90aGVyOiBTdGFjayk6IHN0cmluZ1tdIHwgdW5kZWZpbmVkIHtcbiAgICBpZiAodGhpcyA9PT0gb3RoZXIpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBkZXAgb2YgT2JqZWN0LnZhbHVlcyh0aGlzLl9zdGFja0RlcGVuZGVuY2llcykpIHtcbiAgICAgIGNvbnN0IHJldCA9IGRlcC5zdGFjay5zdGFja0RlcGVuZGVuY3lSZWFzb25zKG90aGVyKTtcbiAgICAgIGlmIChyZXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gWy4uLmRlcC5yZWFzb25zLCAuLi5yZXRdO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGN1bGF0ZSB0aGUgc3RhY2sgbmFtZSBiYXNlZCBvbiB0aGUgY29uc3RydWN0IHBhdGhcbiAgICpcbiAgICogVGhlIHN0YWNrIG5hbWUgaXMgdGhlIG5hbWUgdW5kZXIgd2hpY2ggd2UnbGwgZGVwbG95IHRoZSBzdGFjayxcbiAgICogYW5kIGluY29ycG9yYXRlcyBjb250YWluaW5nIFN0YWdlIG5hbWVzIGJ5IGRlZmF1bHQuXG4gICAqXG4gICAqIEdlbmVyYWxseSB0aGlzIGxvb2tzIGEgbG90IGxpa2UgaG93IGxvZ2ljYWwgSURzIGFyZSBjYWxjdWxhdGVkLlxuICAgKiBUaGUgc3RhY2sgbmFtZSBpcyBjYWxjdWxhdGVkIGJhc2VkIG9uIHRoZSBjb25zdHJ1Y3Qgcm9vdCBwYXRoLFxuICAgKiBhcyBmb2xsb3dzOlxuICAgKlxuICAgKiAtIFBhdGggaXMgY2FsY3VsYXRlZCB3aXRoIHJlc3BlY3QgdG8gY29udGFpbmluZyBBcHAgb3IgU3RhZ2UgKGlmIGFueSlcbiAgICogLSBJZiB0aGUgcGF0aCBpcyBvbmUgY29tcG9uZW50IGxvbmcganVzdCB1c2UgdGhhdCBjb21wb25lbnQsIG90aGVyd2lzZVxuICAgKiAgIGNvbWJpbmUgdGhlbSB3aXRoIGEgaGFzaC5cbiAgICpcbiAgICogU2luY2UgdGhlIGhhc2ggaXMgcXVpdGUgdWdseSBhbmQgd2UnZCBsaWtlIHRvIGF2b2lkIGl0IGlmIHBvc3NpYmxlIC0tIGJ1dFxuICAgKiB3ZSBjYW4ndCBhbnltb3JlIGluIHRoZSBnZW5lcmFsIGNhc2Ugc2luY2UgaXQgaGFzIGJlZW4gd3JpdHRlbiBpbnRvIGxlZ2FjeVxuICAgKiBzdGFja3MuIFRoZSBpbnRyb2R1Y3Rpb24gb2YgU3RhZ2VzIG1ha2VzIGl0IHBvc3NpYmxlIHRvIG1ha2UgdGhpcyBuaWNlciBob3dldmVyLlxuICAgKiBXaGVuIGEgU3RhY2sgaXMgbmVzdGVkIGluc2lkZSBhIFN0YWdlLCB3ZSB1c2UgdGhlIHBhdGggY29tcG9uZW50cyBiZWxvdyB0aGVcbiAgICogU3RhZ2UsIGFuZCBwcmVmaXggdGhlIHBhdGggY29tcG9uZW50cyBvZiB0aGUgU3RhZ2UgYmVmb3JlIGl0LlxuICAgKi9cbiAgcHJpdmF0ZSBnZW5lcmF0ZVN0YWNrTmFtZSgpIHtcbiAgICBjb25zdCBhc3NlbWJseSA9IFN0YWdlLm9mKHRoaXMpO1xuICAgIGNvbnN0IHByZWZpeCA9XG4gICAgICBhc3NlbWJseSAmJiBhc3NlbWJseS5zdGFnZU5hbWUgPyBgJHthc3NlbWJseS5zdGFnZU5hbWV9LWAgOiBcIlwiO1xuICAgIHJldHVybiBgJHtwcmVmaXh9JHt0aGlzLmdlbmVyYXRlU3RhY2tJZChhc3NlbWJseSl9YDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgYXJ0aWZhY3QgSUQgZm9yIHRoaXMgc3RhY2tcbiAgICpcbiAgICogU3RhY2sgYXJ0aWZhY3QgSUQgaXMgdW5pcXVlIHdpdGhpbiB0aGUgQXBwJ3MgQ2xvdWQgQXNzZW1ibHkuXG4gICAqL1xuICBwcml2YXRlIGdlbmVyYXRlU3RhY2tBcnRpZmFjdElkKCkge1xuICAgIHJldHVybiB0aGlzLmdlbmVyYXRlU3RhY2tJZCh0aGlzLm5vZGUucm9vdCk7XG4gIH1cblxuICAvKipcbiAgICogR2VuZXJhdGUgYW4gSUQgd2l0aCByZXNwZWN0IHRvIHRoZSBnaXZlbiBjb250YWluZXIgY29uc3RydWN0LlxuICAgKi9cbiAgcHJpdmF0ZSBnZW5lcmF0ZVN0YWNrSWQoY29udGFpbmVyOiBJQ29uc3RydWN0IHwgdW5kZWZpbmVkKSB7XG4gICAgY29uc3Qgcm9vdFBhdGggPSByb290UGF0aFRvKHRoaXMsIGNvbnRhaW5lcik7XG4gICAgY29uc3QgaWRzID0gcm9vdFBhdGgubWFwKChjKSA9PiBjLm5vZGUuaWQpO1xuXG4gICAgLy8gSW4gdW5pdCB0ZXN0cyBvdXIgU3RhY2sgKHdoaWNoIGlzIHRoZSBvbmx5IGNvbXBvbmVudCkgbWF5IG5vdCBoYXZlIGFuXG4gICAgLy8gaWQsIHNvIGluIHRoYXQgY2FzZSBqdXN0IHByZXRlbmQgaXQncyBcIlN0YWNrXCIuXG4gICAgaWYgKGlkcy5sZW5ndGggPT09IDEgJiYgIWlkc1swXSkge1xuICAgICAgaWRzWzBdID0gXCJTdGFja1wiO1xuICAgIH1cblxuICAgIHJldHVybiBtYWtlU3RhY2tOYW1lKGlkcyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWVyZ2UodGVtcGxhdGU6IGFueSwgZnJhZ21lbnQ6IGFueSk6IHZvaWQge1xuICBmb3IgKGNvbnN0IHNlY3Rpb24gb2YgT2JqZWN0LmtleXMoZnJhZ21lbnQpKSB7XG4gICAgY29uc3Qgc3JjID0gZnJhZ21lbnRbc2VjdGlvbl07XG5cbiAgICAvLyBjcmVhdGUgdG9wLWxldmVsIHNlY3Rpb24gaWYgaXQgZG9lc24ndCBleGlzdFxuICAgIGNvbnN0IGRlc3QgPSB0ZW1wbGF0ZVtzZWN0aW9uXTtcbiAgICBpZiAoIWRlc3QpIHtcbiAgICAgIHRlbXBsYXRlW3NlY3Rpb25dID0gc3JjO1xuICAgIH0gZWxzZSB7XG4gICAgICB0ZW1wbGF0ZVtzZWN0aW9uXSA9IG1lcmdlU2VjdGlvbihzZWN0aW9uLCBkZXN0LCBzcmMpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBtZXJnZVNlY3Rpb24oc2VjdGlvbjogc3RyaW5nLCB2YWwxOiBhbnksIHZhbDI6IGFueSk6IGFueSB7XG4gIHN3aXRjaCAoc2VjdGlvbikge1xuICAgIGNhc2UgXCJEZXNjcmlwdGlvblwiOlxuICAgICAgcmV0dXJuIGAke3ZhbDF9XFxuJHt2YWwyfWA7XG4gICAgY2FzZSBcIlJlc291cmNlc1wiOlxuICAgIGNhc2UgXCJDb25kaXRpb25zXCI6XG4gICAgY2FzZSBcIlBhcmFtZXRlcnNcIjpcbiAgICBjYXNlIFwiT3V0cHV0c1wiOlxuICAgIGNhc2UgXCJNYXBwaW5nc1wiOlxuICAgICAgcmV0dXJuIG1lcmdlT2JqZWN0c1dpdGhvdXREdXBsaWNhdGVzKHNlY3Rpb24sIHZhbDEsIHZhbDIpO1xuICAgIGNhc2UgXCJNZXRhZGF0YVwiOlxuICAgICAgcmV0dXJuIG1lcmdlTWV0YWRhdGFPYmplY3RzV2l0aG91dER1cGxpY2F0ZXModmFsMSwgdmFsMik7XG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYENESyBkb2Vzbid0IGtub3cgaG93IHRvIG1lcmdlIHR3byBpbnN0YW5jZXMgb2YgdGhlIFJPUyB0ZW1wbGF0ZSBzZWN0aW9uICcke3NlY3Rpb259JyAtIGAgK1xuICAgICAgICAgIFwicGxlYXNlIHJlbW92ZSBvbmUgb2YgdGhlbSBmcm9tIHlvdXIgY29kZVwiXG4gICAgICApO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1lcmdlTWV0YWRhdGFPYmplY3RzV2l0aG91dER1cGxpY2F0ZXMoXG4gICAgZGVzdDogYW55LFxuICAgIHNyYzogYW55XG4pOiBhbnkge1xuICBpZiAodHlwZW9mIGRlc3QgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIHNyYyAhPT0gXCJvYmplY3RcIikge1xuICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0aW5nIE1ldGFkYXRhIFZhbHVlIHRvIGJlIGFuIG9iamVjdGApO1xuICB9XG4gIGlmIChzcmMuaGFzT3duUHJvcGVydHkoJ0FMSVlVTjo6Uk9TOjpJbnRlcmZhY2UnKSkge1xuICAgIGlmICh0eXBlb2Ygc3JjW1wiQUxJWVVOOjpST1M6OkludGVyZmFjZVwiXSA9PSBcIm9iamVjdFwiKSB7XG4gICAgICBpZiAoc3JjW1wiQUxJWVVOOjpST1M6OkludGVyZmFjZVwiXS5oYXNPd25Qcm9wZXJ0eSgnVGVtcGxhdGVUYWdzJykpIHtcbiAgICAgICAgaWYgKHNyY1tcIkFMSVlVTjo6Uk9TOjpJbnRlcmZhY2VcIl0gW1wiVGVtcGxhdGVUYWdzXCJdIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICBzcmNbXCJBTElZVU46OlJPUzo6SW50ZXJmYWNlXCJdIFtcIlRlbXBsYXRlVGFnc1wiXS5wdXNoKFwiQ3JlYXRlIGJ5IFJPUyBDREtcIilcbiAgICAgICAgICBkZXN0W1wiQUxJWVVOOjpST1M6OkludGVyZmFjZVwiXSA9IHNyY1tcIkFMSVlVTjo6Uk9TOjpJbnRlcmZhY2VcIl1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGluZyBNZXRhZGF0YSBBTElZVU46OlJPUzo6SW50ZXJmYWNlIFRlbXBsYXRlVGFncyBWYWx1ZSB0byBiZSBhbiBBcnJheWApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgZGVzdFtcIkFMSVlVTjo6Uk9TOjpJbnRlcmZhY2VcIl0gPSBzcmNbXCJBTElZVU46OlJPUzo6SW50ZXJmYWNlXCJdXG4gICAgICAgIGRlc3RbXCJBTElZVU46OlJPUzo6SW50ZXJmYWNlXCJdLlRlbXBsYXRlVGFncyA9IFtcIkNyZWF0ZSBieSBST1MgQ0RLXCJdXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RpbmcgTWV0YWRhdGEgQUxJWVVOOjpST1M6OkludGVyZmFjZSBWYWx1ZSB0byBiZSBhbiBvYmplY3RgKTtcbiAgICB9XG4gIH1cbiAgZWxzZSB7XG4gICAgZGVzdFtcIkFMSVlVTjo6Uk9TOjpJbnRlcmZhY2VcIl0gPSB7IFRlbXBsYXRlVGFncyA6IFtcIkNyZWF0ZSBieSBST1MgQ0RLXCJdfVxuICB9XG4gIGZvciAoY29uc3QgaWQgb2YgT2JqZWN0LmtleXMoc3JjKSkge1xuICAgIGlmIChpZCAhPT0gJ0FMSVlVTjo6Uk9TOjpJbnRlcmZhY2UnKSB7XG4gICAgICBkZXN0W2lkXSA9IHNyY1tpZF07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRlc3Q7XG59XG5cbmZ1bmN0aW9uIG1lcmdlT2JqZWN0c1dpdGhvdXREdXBsaWNhdGVzKFxuICBzZWN0aW9uOiBzdHJpbmcsXG4gIGRlc3Q6IGFueSxcbiAgc3JjOiBhbnlcbik6IGFueSB7XG4gIGlmICh0eXBlb2YgZGVzdCAhPT0gXCJvYmplY3RcIikge1xuICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0aW5nICcke0pTT04uc3RyaW5naWZ5KGRlc3QpfScgdG8gYmUgYW4gb2JqZWN0YCk7XG4gIH1cbiAgaWYgKHR5cGVvZiBzcmMgIT09IFwib2JqZWN0XCIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGluZyAnJHtKU09OLnN0cmluZ2lmeShzcmMpfScgdG8gYmUgYW4gb2JqZWN0YCk7XG4gIH1cblxuICAvLyBhZGQgYWxsIGVudGl0aWVzIGZyb20gc291cmNlIHNlY3Rpb24gdG8gZGVzdGluYXRpb24gc2VjdGlvblxuICBmb3IgKGNvbnN0IGlkIG9mIE9iamVjdC5rZXlzKHNyYykpIHtcbiAgICBpZiAoaWQgaW4gZGVzdCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBzZWN0aW9uICcke3NlY3Rpb259JyBhbHJlYWR5IGNvbnRhaW5zICcke2lkfSdgKTtcbiAgICB9XG4gICAgZGVzdFtpZF0gPSBzcmNbaWRdO1xuICB9XG5cbiAgcmV0dXJuIGRlc3Q7XG59XG5cbi8qKlxuICogUk9TIHRlbXBsYXRlIG9wdGlvbnMgZm9yIGEgc3RhY2suXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSVRlbXBsYXRlT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBHZXRzIG9yIHNldHMgdGhlIGRlc2NyaXB0aW9uIG9mIHRoaXMgc3RhY2suXG4gICAqIElmIHByb3ZpZGVkLCBpdCB3aWxsIGJlIGluY2x1ZGVkIGluIHRoZSBST1MgdGVtcGxhdGUncyBcIkRlc2NyaXB0aW9uXCIgYXR0cmlidXRlLlxuICAgKi9cbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIE1ldGFkYXRhIGFzc29jaWF0ZWQgd2l0aCB0aGUgUk9TIHRlbXBsYXRlLlxuICAgKi9cbiAgbWV0YWRhdGE/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9O1xufVxuXG4vKipcbiAqIENvbGxlY3QgYWxsIHJvc0VsZW1lbnRzIGZyb20gYSBTdGFjay5cbiAqXG4gKiBAcGFyYW0gbm9kZSBSb290IG5vZGUgdG8gY29sbGVjdCBhbGwgcm9zRWxlbWVudHMgZnJvbVxuICogQHBhcmFtIGludG8gQXJyYXkgdG8gYXBwZW5kIHJvc0VsZW1lbnRzIHRvXG4gKiBAcmV0dXJucyBUaGUgc2FtZSBhcnJheSBhcyBpcyBiZWluZyBjb2xsZWN0ZWQgaW50b1xuICovXG5mdW5jdGlvbiByb3NFbGVtZW50cyhub2RlOiBJQ29uc3RydWN0LCBpbnRvOiBSb3NFbGVtZW50W10gPSBbXSk6IFJvc0VsZW1lbnRbXSB7XG4gIGlmIChSb3NFbGVtZW50LmlzUm9zRWxlbWVudChub2RlKSkge1xuICAgIGludG8ucHVzaChub2RlKTtcbiAgfVxuXG4gIGZvciAoY29uc3QgY2hpbGQgb2Ygbm9kZS5ub2RlLmNoaWxkcmVuKSB7XG4gICAgLy8gRG9uJ3QgcmVjdXJzZSBpbnRvIGEgc3Vic3RhY2tcbiAgICBpZiAoU3RhY2suaXNTdGFjayhjaGlsZCkpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHJvc0VsZW1lbnRzKGNoaWxkLCBpbnRvKTtcbiAgfVxuXG4gIHJldHVybiBpbnRvO1xufVxuXG4vKipcbiAqIFJldHVybiB0aGUgY29uc3RydWN0IHJvb3QgcGF0aCBvZiB0aGUgZ2l2ZW4gY29uc3RydWN0IHJlbGF0aXZlIHRvIHRoZSBnaXZlbiBhbmNlc3RvclxuICpcbiAqIElmIG5vIGFuY2VzdG9yIGlzIGdpdmVuIG9yIHRoZSBhbmNlc3RvciBpcyBub3QgZm91bmQsIHJldHVybiB0aGUgZW50aXJlIHJvb3QgcGF0aC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJvb3RQYXRoVG8oXG4gIGNvbnN0cnVjdDogSUNvbnN0cnVjdCxcbiAgYW5jZXN0b3I/OiBJQ29uc3RydWN0XG4pOiBJQ29uc3RydWN0W10ge1xuICBjb25zdCBzY29wZXMgPSBjb25zdHJ1Y3Qubm9kZS5zY29wZXM7XG4gIGZvciAobGV0IGkgPSBzY29wZXMubGVuZ3RoIC0gMjsgaSA+PSAwOyBpLS0pIHtcbiAgICBpZiAoc2NvcGVzW2ldID09PSBhbmNlc3Rvcikge1xuICAgICAgcmV0dXJuIHNjb3Blcy5zbGljZShpICsgMSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBzY29wZXM7XG59XG5cbi8qKlxuICogbWFrZVVuaXF1ZUlkLCBzcGVjaWFsaXplZCBmb3IgU3RhY2sgbmFtZXNcbiAqXG4gKiBTdGFjayBuYW1lcyBtYXkgY29udGFpbiAnLScsIHNvIHdlIGFsbG93IHRoYXQgY2hhcmFjdGVyIGlmIHRoZSBzdGFjayBuYW1lXG4gKiBoYXMgb25seSBvbmUgY29tcG9uZW50LiBPdGhlcndpc2Ugd2UgZmFsbCBiYWNrIHRvIHRoZSByZWd1bGFyIFwibWFrZVVuaXF1ZUlkXCJcbiAqIGJlaGF2aW9yLlxuICovXG5mdW5jdGlvbiBtYWtlU3RhY2tOYW1lKGNvbXBvbmVudHM6IHN0cmluZ1tdKSB7XG4gIGlmIChjb21wb25lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgIHJldHVybiBjb21wb25lbnRzWzBdO1xuICB9XG4gIHJldHVybiBtYWtlVW5pcXVlSWQoY29tcG9uZW50cyk7XG59XG5cbi8vIFRoZXNlIGltcG9ydHMgaGF2ZSB0byBiZSBhdCB0aGUgZW5kIHRvIHByZXZlbnQgY2lyY3VsYXIgaW1wb3J0c1xuaW1wb3J0IHsgUm9zRWxlbWVudCB9IGZyb20gXCIuL3Jvcy1lbGVtZW50XCI7XG5pbXBvcnQgeyBSb3NQc2V1ZG8gfSBmcm9tIFwiLi9yb3MtcHNldWRvXCI7XG5pbXBvcnQgeyBSb3NSZXNvdXJjZSB9IGZyb20gXCIuL3Jvcy1yZXNvdXJjZVwiO1xuaW1wb3J0IHsgVGFnVHlwZSB9IGZyb20gXCIuL3RhZy1tYW5hZ2VyXCI7XG5pbXBvcnQgeyBhZGREZXBlbmRlbmN5IH0gZnJvbSBcIi4vZGVwc1wiO1xuaW1wb3J0IHsgUmVmZXJlbmNlIH0gZnJvbSBcIi4vcmVmZXJlbmNlXCI7XG5pbXBvcnQgeyBJUmVzb2x2YWJsZSB9IGZyb20gXCIuL3Jlc29sdmFibGVcIjtcbmltcG9ydCB7XG4gIERlZmF1bHRTdGFja1N5bnRoZXNpemVyLFxuICBJU3RhY2tTeW50aGVzaXplcixcbn0gZnJvbSBcIi4vc3RhY2stc3ludGhlc2l6ZXJzXCI7XG5pbXBvcnQgeyBTdGFnZSB9IGZyb20gXCIuL3N0YWdlXCI7XG5pbXBvcnQgeyBJVGFnZ2FibGUsIFRhZ01hbmFnZXIgfSBmcm9tIFwiLi90YWctbWFuYWdlclwiO1xuXG5pbnRlcmZhY2UgU3RhY2tEZXBlbmRlbmN5IHtcbiAgc3RhY2s6IFN0YWNrO1xuICByZWFzb25zOiBzdHJpbmdbXTtcbn1cbiJdfQ==