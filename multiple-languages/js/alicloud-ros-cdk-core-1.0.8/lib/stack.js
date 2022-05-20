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
        var _a;
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
        this.synthesizer = (_a = props.synthesizer) !== null && _a !== void 0 ? _a : new stack_synthesizers_1.DefaultStackSynthesizer();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdGFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxpREFBaUQ7QUFDakQseUJBQXlCO0FBQ3pCLDZCQUE2QjtBQUM3Qix5REFBOEU7QUFDOUUsMkRBQThFO0FBQzlFLHFEQUFrRDtBQUNsRCwrQ0FBNEM7QUFDNUMsaURBQWtEO0FBQ2xELHlDQUFxQztBQUVyQyxNQUFNLFlBQVksR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7QUFDdEQsTUFBTSxjQUFjLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO0FBRWhFLE1BQU0sc0JBQXNCLEdBQUcseUJBQXlCLENBQUM7QUFxQ3pEOztHQUVHO0FBQ0gsTUFBYSxLQUFNLFNBQVEsNEJBQVM7SUFtR2xDOzs7Ozs7OztPQVFHO0lBQ0gsWUFBbUIsS0FBaUIsRUFBRSxFQUFXLEVBQUUsUUFBb0IsRUFBRTs7UUFDdkUsb0dBQW9HO1FBQ3BHLEtBQUssQ0FBQyxLQUFNLEVBQUUsRUFBRyxDQUFDLENBQUM7UUE1RHJCOztXQUVHO1FBQ2Esb0JBQWUsR0FBcUIsRUFBRSxDQUFDO1FBbUN2RDs7V0FFRztRQUNjLHVCQUFrQixHQUUvQixFQUFFLENBQUM7UUFtQkwsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFFM0QsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLHVCQUFVLEVBQUUsQ0FBQztRQUVwQyxJQUFJLENBQUMsZ0NBQWdDO1lBQ25DLEtBQUssQ0FBQyxnQ0FBZ0MsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBRXRFLElBQUksS0FBSyxDQUFDLFdBQVcsS0FBSyxTQUFTLEVBQUU7WUFDbkMsd0JBQXdCO1lBQ3hCLDBFQUEwRTtZQUMx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QU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQztBQUVEOzs7O0dBSUc7QUFDSCxTQUFnQixVQUFVLENBQ3hCLFNBQXFCLEVBQ3JCLFFBQXFCO0lBRXJCLE1BQU0sTUFBTSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JDLEtBQUssSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUMzQyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxRQUFRLEVBQUU7WUFDMUIsT0FBTyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUM1QjtLQUNGO0lBQ0QsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQztBQVhELGdDQVdDO0FBRUQ7Ozs7OztHQU1HO0FBQ0gsU0FBUyxhQUFhLENBQUMsVUFBb0I7SUFDekMsSUFBSSxVQUFVLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtRQUMzQixPQUFPLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUN0QjtJQUNELE9BQU8sdUJBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUNsQyxDQUFDO0FBRUQsa0VBQWtFO0FBQ2xFLCtDQUEyQztBQUMzQyw2Q0FBeUM7QUFFekMsK0NBQXdDO0FBQ3hDLGlDQUF1QztBQUd2Qyw2REFHOEI7QUFDOUIsbUNBQWdDO0FBQ2hDLCtDQUFzRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGN4YXBpIGZyb20gXCJAYWxpY2xvdWQvcm9zLWNkay1jeGFwaVwiO1xuaW1wb3J0ICogYXMgZnMgZnJvbSBcImZzXCI7XG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgeyBDb25zdHJ1Y3QsIElDb25zdHJ1Y3QsIElTeW50aGVzaXNTZXNzaW9uIH0gZnJvbSBcIi4vY29uc3RydWN0LWNvbXBhdFwiO1xuaW1wb3J0IHsgUk9TX1RPS0VOX1JFU09MVkVSLCBSb3NUZW1wbGF0ZUxhbmcgfSBmcm9tIFwiLi9wcml2YXRlL3RlbXBsYXRlLWxhbmdcIjtcbmltcG9ydCB7IExvZ2ljYWxJRHMgfSBmcm9tIFwiLi9wcml2YXRlL2xvZ2ljYWwtaWRcIjtcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tIFwiLi9wcml2YXRlL3Jlc29sdmVcIjtcbmltcG9ydCB7IG1ha2VVbmlxdWVJZCB9IGZyb20gXCIuL3ByaXZhdGUvdW5pcXVlaWRcIjtcbmltcG9ydCB7IFJvc0luZm8gfSBmcm9tIFwiLi9yb3MtaW5mb1wiO1xuXG5jb25zdCBTVEFDS19TWU1CT0wgPSBTeW1ib2wuZm9yKFwicm9zLWNkay1jb3JlLlN0YWNrXCIpO1xuY29uc3QgTVlfU1RBQ0tfQ0FDSEUgPSBTeW1ib2wuZm9yKFwicm9zLWNkay1jb3JlLlN0YWNrLm15U3RhY2tcIik7XG5cbmNvbnN0IFZBTElEX1NUQUNLX05BTUVfUkVHRVggPSAvXltBLVphLXpdW0EtWmEtejAtOS1dKiQvO1xuXG5leHBvcnQgaW50ZXJmYWNlIFN0YWNrUHJvcHMge1xuICByZWFkb25seSB2ZXJzaW9uPzogU3RyaW5nO1xuICAvKipcbiAgICogQSBkZXNjcmlwdGlvbiBvZiB0aGUgc3RhY2suXG4gICAqXG4gICAqIEBkZWZhdWx0IC0gTm8gZGVzY3JpcHRpb24uXG4gICAqL1xuICByZWFkb25seSBkZXNjcmlwdGlvbj86IHN0cmluZztcblxuICAvKipcbiAgICogTmFtZSB0byBkZXBsb3kgdGhlIHN0YWNrIHdpdGhcbiAgICpcbiAgICogQGRlZmF1bHQgLSBEZXJpdmVkIGZyb20gY29uc3RydWN0IHBhdGguXG4gICAqL1xuICByZWFkb25seSBzdGFja05hbWU/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFN0YWNrIHRhZ3MgdGhhdCB3aWxsIGJlIGFwcGxpZWQgdG8gYWxsIHRoZSB0YWdnYWJsZSByZXNvdXJjZXMgYW5kIHRoZSBzdGFjayBpdHNlbGYuXG4gICAqXG4gICAqIEBkZWZhdWx0IHt9XG4gICAqL1xuICByZWFkb25seSB0YWdzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcblxuICAvKipcbiAgICogU3ludGhlc2lzIG1ldGhvZCB0byB1c2Ugd2hpbGUgZGVwbG95aW5nIHRoaXMgc3RhY2tcbiAgICpcbiAgICogQGRlZmF1bHQgLSBgRGVmYXVsdFN0YWNrU3ludGhlc2l6ZXJgXG4gICAqL1xuICByZWFkb25seSBzeW50aGVzaXplcj86IElTdGFja1N5bnRoZXNpemVyO1xuXG4gIHJlYWRvbmx5IG1ldGFkYXRhPzoge1trZXk6IHN0cmluZ106IGFueX07XG5cbiAgcmVhZG9ubHkgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ/OiBib29sZWFuO1xufVxuXG4vKipcbiAqIEEgcm9vdCBjb25zdHJ1Y3Qgd2hpY2ggcmVwcmVzZW50cyBhIHNpbmdsZSBST1Mgc3RhY2suXG4gKi9cbmV4cG9ydCBjbGFzcyBTdGFjayBleHRlbmRzIENvbnN0cnVjdCBpbXBsZW1lbnRzIElUYWdnYWJsZSB7XG4gIC8qKlxuICAgKiBSZXR1cm4gd2hldGhlciB0aGUgZ2l2ZW4gb2JqZWN0IGlzIGEgU3RhY2suXG4gICAqXG4gICAqIFdlIGRvIGF0dHJpYnV0ZSBkZXRlY3Rpb24gc2luY2Ugd2UgY2FuJ3QgcmVsaWFibHkgdXNlICdpbnN0YW5jZW9mJy5cbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgaXNTdGFjayh4OiBhbnkpOiB4IGlzIFN0YWNrIHtcbiAgICByZXR1cm4geCAhPT0gbnVsbCAmJiB0eXBlb2YgeCA9PT0gXCJvYmplY3RcIiAmJiBTVEFDS19TWU1CT0wgaW4geDtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb29rcyB1cCB0aGUgZmlyc3Qgc3RhY2sgc2NvcGUgaW4gd2hpY2ggYGNvbnN0cnVjdGAgaXMgZGVmaW5lZC4gRmFpbHMgaWYgdGhlcmUgaXMgbm8gc3RhY2sgdXAgdGhlIHRyZWUuXG4gICAqIEBwYXJhbSBjb25zdHJ1Y3QgVGhlIGNvbnN0cnVjdCB0byBzdGFydCB0aGUgc2VhcmNoIGZyb20uXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIG9mKGNvbnN0cnVjdDogSUNvbnN0cnVjdCk6IFN0YWNrIHtcbiAgICAvLyB3ZSB3YW50IHRoaXMgdG8gYmUgYXMgY2hlYXAgYXMgcG9zc2libGUuXG4gICAgY29uc3QgY2FjaGUgPSAoY29uc3RydWN0IGFzIGFueSlbTVlfU1RBQ0tfQ0FDSEVdIGFzIFN0YWNrIHwgdW5kZWZpbmVkO1xuICAgIGlmIChjYWNoZSkge1xuICAgICAgcmV0dXJuIGNhY2hlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IF9sb29rdXAoY29uc3RydWN0KTtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb25zdHJ1Y3QsIE1ZX1NUQUNLX0NBQ0hFLCB7XG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICAgIHZhbHVlLFxuICAgICAgfSk7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX2xvb2t1cChjOiBJQ29uc3RydWN0KTogU3RhY2sge1xuICAgICAgaWYgKFN0YWNrLmlzU3RhY2soYykpIHtcbiAgICAgICAgcmV0dXJuIGM7XG4gICAgICB9XG5cbiAgICAgIGlmICghYy5ub2RlLnNjb3BlKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgTm8gc3RhY2sgY291bGQgYmUgaWRlbnRpZmllZCBmb3IgdGhlIGNvbnN0cnVjdCBhdCBwYXRoICR7Y29uc3RydWN0Lm5vZGUucGF0aH1gXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfbG9va3VwKGMubm9kZS5zY29wZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRhZ3MgdG8gYmUgYXBwbGllZCB0byB0aGUgc3RhY2suXG4gICAqL1xuICBwdWJsaWMgcmVhZG9ubHkgdGFnczogVGFnTWFuYWdlcjtcblxuICAvKipcbiAgICogT3B0aW9ucyBmb3IgUk9TIHRlbXBsYXRlIChsaWtlIHZlcnNpb24sIGRlc2NyaXB0aW9uKS5cbiAgICovXG4gIHB1YmxpYyByZWFkb25seSB0ZW1wbGF0ZU9wdGlvbnM6IElUZW1wbGF0ZU9wdGlvbnMgPSB7fTtcblxuICAvKipcbiAgICogSWYgdGhpcyBpcyBhIG5lc3RlZCBzdGFjaywgdGhpcyByZXByZXNlbnRzIGl0cyBgQUxJWVVOOjpST1M6OlN0YWNrYFxuICAgKiByZXNvdXJjZS4gYHVuZGVmaW5lZGAgZm9yIHRvcC1sZXZlbCAobm9uLW5lc3RlZCkgc3RhY2tzLlxuICAgKlxuICAgKiBAZXhwZXJpbWVudGFsXG4gICAqL1xuICBwdWJsaWMgcmVhZG9ubHkgbmVzdGVkU3RhY2tSZXNvdXJjZT86IFJvc1Jlc291cmNlO1xuXG4gIC8qKlxuICAgKiBUaGUgbmFtZSBvZiB0aGUgUk9TIHRlbXBsYXRlIGZpbGUgZW1pdHRlZCB0byB0aGUgb3V0cHV0XG4gICAqIGRpcmVjdG9yeSBkdXJpbmcgc3ludGhlc2lzLlxuICAgKlxuICAgKiBAZXhhbXBsZSBNeVN0YWNrLnRlbXBsYXRlLmpzb25cbiAgICovXG4gIHB1YmxpYyByZWFkb25seSB0ZW1wbGF0ZUZpbGU6IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIElEIG9mIHRoZSBjbG91ZCBhc3NlbWJseSBhcnRpZmFjdCBmb3IgdGhpcyBzdGFjay5cbiAgICovXG4gIHB1YmxpYyByZWFkb25seSBhcnRpZmFjdElkOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFN5bnRoZXNpcyBtZXRob2QgZm9yIHRoaXMgc3RhY2tcbiAgICpcbiAgICogQGV4cGVyaW1lbnRhbFxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IHN5bnRoZXNpemVyOiBJU3RhY2tTeW50aGVzaXplcjtcblxuICAvKipcbiAgICogTG9naWNhbCBJRCBnZW5lcmF0aW9uIHN0cmF0ZWd5XG4gICAqL1xuICBwcml2YXRlIHJlYWRvbmx5IF9sb2dpY2FsSWRzOiBMb2dpY2FsSURzO1xuXG4gIC8qKlxuICAgKiBPdGhlciBzdGFja3MgdGhpcyBzdGFjayBkZXBlbmRzIG9uXG4gICAqL1xuICBwcml2YXRlIHJlYWRvbmx5IF9zdGFja0RlcGVuZGVuY2llczoge1xuICAgIFt1bmlxdWVJZDogc3RyaW5nXTogU3RhY2tEZXBlbmRlbmN5O1xuICB9ID0ge307XG5cbiAgcHJpdmF0ZSByZWFkb25seSBfc3RhY2tOYW1lOiBzdHJpbmc7XG5cbiAgcHVibGljIHJlYWRvbmx5IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IHN0YWNrLlxuICAgKlxuICAgKiBAcGFyYW0gc2NvcGUgUGFyZW50IG9mIHRoaXMgc3RhY2ssIHVzdWFsbHkgYSBQcm9ncmFtIGluc3RhbmNlLlxuICAgKiBAcGFyYW0gaWQgVGhlIGNvbnN0cnVjdCBJRCBvZiB0aGlzIHN0YWNrLiBJZiBgc3RhY2tOYW1lYCBpcyBub3QgZXhwbGljaXRseVxuICAgKiBkZWZpbmVkLCB0aGlzIGlkIChhbmQgYW55IHBhcmVudCBJRHMpIHdpbGwgYmUgdXNlZCB0byBkZXRlcm1pbmUgdGhlXG4gICAqIHBoeXNpY2FsIElEIG9mIHRoZSBzdGFjay5cbiAgICogQHBhcmFtIHByb3BzIFN0YWNrIHByb3BlcnRpZXMuXG4gICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU/OiBDb25zdHJ1Y3QsIGlkPzogc3RyaW5nLCBwcm9wczogU3RhY2tQcm9wcyA9IHt9KSB7XG4gICAgLy8gRm9yIHVuaXQgdGVzdCBjb252ZW5pZW5jZSBwYXJlbnRzIGFyZSBvcHRpb25hbCwgc28gYnlwYXNzIHRoZSB0eXBlIGNoZWNrIHdoZW4gY2FsbGluZyB0aGUgcGFyZW50LlxuICAgIHN1cGVyKHNjb3BlISwgaWQhKTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBTVEFDS19TWU1CT0wsIHsgdmFsdWU6IHRydWUgfSk7XG5cbiAgICB0aGlzLl9sb2dpY2FsSWRzID0gbmV3IExvZ2ljYWxJRHMoKTtcblxuICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPVxuICAgICAgcHJvcHMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPT09IHVuZGVmaW5lZCA/IHRydWUgOiBmYWxzZTtcblxuICAgIGlmIChwcm9wcy5kZXNjcmlwdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBNYXggbGVuZ3RoIDEwMjQgYnl0ZXNcbiAgICAgIC8vIFR5cGljYWxseSAyIGJ5dGVzIHBlciBjaGFyYWN0ZXIsIG1heSBiZSBtb3JlIGZvciBtb3JlIGV4b3RpYyBjaGFyYWN0ZXJzXG4gICAgICBpZiAocHJvcHMuZGVzY3JpcHRpb24ubGVuZ3RoID4gNTEyKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgU3RhY2sgZGVzY3JpcHRpb24gbXVzdCBiZSA8PSAxMDI0IGJ5dGVzLiBSZWNlaXZlZCBkZXNjcmlwdGlvbjogJyR7cHJvcHMuZGVzY3JpcHRpb259J2BcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHRoaXMudGVtcGxhdGVPcHRpb25zLmRlc2NyaXB0aW9uID0gcHJvcHMuZGVzY3JpcHRpb247XG4gICAgfVxuXG4gICAgaWYgKHByb3BzLm1ldGFkYXRhID09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy50ZW1wbGF0ZU9wdGlvbnMubWV0YWRhdGEgPSB7J0FMSVlVTjo6Uk9TOjpJbnRlcmZhY2UnOnsnVGVtcGxhdGVUYWdzJzpbXCJDcmVhdGUgYnkgUk9TIENES1wiXX19O1xuICAgIH1cblxuICAgIHRoaXMuX3N0YWNrTmFtZSA9XG4gICAgICBwcm9wcy5zdGFja05hbWUgIT09IHVuZGVmaW5lZFxuICAgICAgICA/IHByb3BzLnN0YWNrTmFtZVxuICAgICAgICA6IHRoaXMuZ2VuZXJhdGVTdGFja05hbWUoKTtcbiAgICB0aGlzLnRhZ3MgPSBuZXcgVGFnTWFuYWdlcihcbiAgICAgIFRhZ1R5cGUuS0VZX1ZBTFVFLFxuICAgICAgXCJhbGl5dW46cm9zOnN0YWNrXCIsXG4gICAgICBwcm9wcy50YWdzXG4gICAgKTtcblxuICAgIGlmICghVkFMSURfU1RBQ0tfTkFNRV9SRUdFWC50ZXN0KHRoaXMuc3RhY2tOYW1lKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgU3RhY2sgbmFtZSBtdXN0IG1hdGNoIHRoZSByZWd1bGFyIGV4cHJlc3Npb246ICR7VkFMSURfU1RBQ0tfTkFNRV9SRUdFWC50b1N0cmluZygpfSwgZ290ICcke1xuICAgICAgICAgIHRoaXMuc3RhY2tOYW1lXG4gICAgICAgIH0nYFxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyB0aGUgcHJlZmVycmVkIGJlaGF2aW9yIGlzIHRvIGdlbmVyYXRlIGEgdW5pcXVlIGlkIGZvciB0aGlzIHN0YWNrIGFuZCB1c2VcbiAgICAvLyBpdCBhcyB0aGUgYXJ0aWZhY3QgSUQgaW4gdGhlIGFzc2VtYmx5LiB0aGlzIGFsbG93cyBtdWx0aXBsZSBzdGFja3MgdG8gdXNlXG4gICAgLy8gdGhlIHNhbWUgbmFtZS4gaG93ZXZlciwgdGhpcyBiZWhhdmlvciBpcyBicmVha2luZyBmb3IgMS54IHNvIGl0J3Mgb25seVxuICAgIC8vIGFwcGxpZWQgdW5kZXIgYSBmZWF0dXJlIGZsYWcgd2hpY2ggaXMgYXBwbGllZCBhdXRvbWF0aWNhbGx5IGZvciBuZXdcbiAgICAvLyBwcm9qZWN0cyBjcmVhdGVkIHVzaW5nIGBjZGsgaW5pdGAuXG4gICAgLy9cbiAgICAvLyBBbHNvIHVzZSB0aGUgbmV3IGJlaGF2aW9yIGlmIHdlIGFyZSB1c2luZyB0aGUgbmV3IENJL0NELXJlYWR5IHN5bnRoZXNpemVyOyB0aGF0IHdheVxuICAgIC8vIHBlb3BsZSBvbmx5IGhhdmUgdG8gZmxpcCBvbmUgZmxhZy5cbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1heC1saW5lLWxlbmd0aFxuICAgIHRoaXMuYXJ0aWZhY3RJZCA9XG4gICAgICB0aGlzLm5vZGUudHJ5R2V0Q29udGV4dChjeGFwaS5FTkFCTEVfU1RBQ0tfTkFNRV9EVVBMSUNBVEVTX0NPTlRFWFQpIHx8XG4gICAgICB0aGlzLm5vZGUudHJ5R2V0Q29udGV4dChjeGFwaS5ORVdfU1RZTEVfU1RBQ0tfU1lOVEhFU0lTX0NPTlRFWFQpXG4gICAgICAgID8gdGhpcy5nZW5lcmF0ZVN0YWNrQXJ0aWZhY3RJZCgpXG4gICAgICAgIDogdGhpcy5zdGFja05hbWU7XG5cbiAgICB0aGlzLnRlbXBsYXRlRmlsZSA9IGAke3RoaXMuYXJ0aWZhY3RJZH0udGVtcGxhdGUuanNvbmA7XG5cbiAgICB0aGlzLnN5bnRoZXNpemVyID0gcHJvcHMuc3ludGhlc2l6ZXIgPz8gbmV3IERlZmF1bHRTdGFja1N5bnRoZXNpemVyKCk7XG4gICAgdGhpcy5zeW50aGVzaXplci5iaW5kKHRoaXMpO1xuICAgIG5ldyBSb3NJbmZvKFxuICAgICAgdGhpcyxcbiAgICAgIFJvc0luZm8uZm9ybWF0VmVyc2lvbixcbiAgICAgIHByb3BzLnZlcnNpb24gPyBwcm9wcy52ZXJzaW9uIDogUm9zSW5mby52MjAxNTA5MDFcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc29sdmUgYSB0b2tlbml6ZWQgdmFsdWUgaW4gdGhlIGNvbnRleHQgb2YgdGhlIGN1cnJlbnQgc3RhY2suXG4gICAqL1xuICBwdWJsaWMgcmVzb2x2ZShvYmo6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIHJlc29sdmUob2JqLCB7XG4gICAgICBzY29wZTogdGhpcyxcbiAgICAgIHByZWZpeDogW10sXG4gICAgICByZXNvbHZlcjogUk9TX1RPS0VOX1JFU09MVkVSLFxuICAgICAgcHJlcGFyaW5nOiBmYWxzZSxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0IGFuIG9iamVjdCwgcG90ZW50aWFsbHkgY29udGFpbmluZyB0b2tlbnMsIHRvIGEgSlNPTiBzdHJpbmdcbiAgICovXG4gIHB1YmxpYyB0b0pzb25TdHJpbmcob2JqOiBhbnksIHNwYWNlPzogbnVtYmVyKTogc3RyaW5nIHtcbiAgICByZXR1cm4gUm9zVGVtcGxhdGVMYW5nLnRvSlNPTihvYmosIHNwYWNlKS50b1N0cmluZygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbmFtZSBhIGdlbmVyYXRlZCBsb2dpY2FsIGlkZW50aXRpZXNcbiAgICpcbiAgICogVG8gbW9kaWZ5IHRoZSBuYW1pbmcgc2NoZW1lIHN0cmF0ZWd5LCBleHRlbmQgdGhlIGBTdGFja2AgY2xhc3MgYW5kXG4gICAqIG92ZXJyaWRlIHRoZSBgYWxsb2NhdGVMb2dpY2FsSWRgIG1ldGhvZC5cbiAgICovXG4gIHB1YmxpYyByZW5hbWVMb2dpY2FsSWQob2xkSWQ6IHN0cmluZywgbmV3SWQ6IHN0cmluZykge1xuICAgIHRoaXMuX2xvZ2ljYWxJZHMuYWRkUmVuYW1lKG9sZElkLCBuZXdJZCk7XG4gIH1cblxuICAvKipcbiAgICogQWxsb2NhdGVzIGEgc3RhY2stdW5pcXVlIGxvZ2ljYWwgaWRlbnRpdHkgZm9yIGFcbiAgICogc3BlY2lmaWMgcmVzb3VyY2UuXG4gICAqXG4gICAqIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCB3aGVuIGEgYFJvc0VsZW1lbnRgIGlzIGNyZWF0ZWQgYW5kIHVzZWQgdG8gcmVuZGVyIHRoZVxuICAgKiBpbml0aWFsIGxvZ2ljYWwgaWRlbnRpdHkgb2YgcmVzb3VyY2VzLiBMb2dpY2FsIElEIHJlbmFtZXMgYXJlIGFwcGxpZWQgYXRcbiAgICogdGhpcyBzdGFnZS5cbiAgICpcbiAgICogVGhpcyBtZXRob2QgdXNlcyB0aGUgcHJvdGVjdGVkIG1ldGhvZCBgYWxsb2NhdGVMb2dpY2FsSWRgIHRvIHJlbmRlciB0aGVcbiAgICogbG9naWNhbCBJRCBmb3IgYW4gZWxlbWVudC4gVG8gbW9kaWZ5IHRoZSBuYW1pbmcgc2NoZW1lLCBleHRlbmQgdGhlIGBTdGFja2BcbiAgICogY2xhc3MgYW5kIG92ZXJyaWRlIHRoaXMgbWV0aG9kLlxuICAgKlxuICAgKiBAcGFyYW0gZWxlbWVudCBUaGUgUk9TIGVsZW1lbnQgZm9yIHdoaWNoIGEgbG9naWNhbCBpZGVudGl0eSBpc1xuICAgKiBuZWVkZWQuXG4gICAqL1xuICBwdWJsaWMgZ2V0TG9naWNhbElkKGVsZW1lbnQ6IFJvc0VsZW1lbnQpOiBzdHJpbmcge1xuICAgIGNvbnN0IGxvZ2ljYWxJZCA9IHRoaXMuYWxsb2NhdGVMb2dpY2FsSWQoZWxlbWVudCk7XG4gICAgcmV0dXJuIHRoaXMuX2xvZ2ljYWxJZHMuYXBwbHlSZW5hbWUobG9naWNhbElkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYSBkZXBlbmRlbmN5IGJldHdlZW4gdGhpcyBzdGFjayBhbmQgYW5vdGhlciBzdGFjay5cbiAgICpcbiAgICogVGhpcyBjYW4gYmUgdXNlZCB0byBkZWZpbmUgZGVwZW5kZW5jaWVzIGJldHdlZW4gYW55IHR3byBzdGFja3Mgd2l0aGluIGFuXG4gICAqIGFwcCwgYW5kIGFsc28gc3VwcG9ydHMgbmVzdGVkIHN0YWNrcy5cbiAgICovXG4gIHB1YmxpYyBhZGREZXBlbmRlbmN5KHRhcmdldDogU3RhY2ssIHJlYXNvbj86IHN0cmluZykge1xuICAgIGFkZERlcGVuZGVuY3kodGhpcywgdGFyZ2V0LCByZWFzb24pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgc3RhY2tzIHRoaXMgc3RhY2sgZGVwZW5kcyBvblxuICAgKi9cbiAgcHVibGljIGdldCBkZXBlbmRlbmNpZXMoKTogU3RhY2tbXSB7XG4gICAgcmV0dXJuIE9iamVjdC52YWx1ZXModGhpcy5fc3RhY2tEZXBlbmRlbmNpZXMpLm1hcCgoeCkgPT4geC5zdGFjayk7XG4gIH1cblxuICAvKipcbiAgICogVGhlIGNvbmNyZXRlIFJPUyBwaHlzaWNhbCBzdGFjayBuYW1lLlxuICAgKlxuICAgKiBUaGlzIGlzIGVpdGhlciB0aGUgbmFtZSBkZWZpbmVkIGV4cGxpY2l0bHkgaW4gdGhlIGBzdGFja05hbWVgIHByb3Agb3JcbiAgICogYWxsb2NhdGVkIGJhc2VkIG9uIHRoZSBzdGFjaydzIGxvY2F0aW9uIGluIHRoZSBjb25zdHJ1Y3QgdHJlZS4gU3RhY2tzIHRoYXRcbiAgICogYXJlIGRpcmVjdGx5IGRlZmluZWQgdW5kZXIgdGhlIGFwcCB1c2UgdGhlaXIgY29uc3RydWN0IGBpZGAgYXMgdGhlaXIgc3RhY2tcbiAgICogbmFtZS4gU3RhY2tzIHRoYXQgYXJlIGRlZmluZWQgZGVlcGVyIHdpdGhpbiB0aGUgdHJlZSB3aWxsIHVzZSBhIGhhc2hlZCBuYW1pbmdcbiAgICogc2NoZW1lIGJhc2VkIG9uIHRoZSBjb25zdHJ1Y3QgcGF0aCB0byBlbnN1cmUgdW5pcXVlbmVzcy5cbiAgICpcbiAgICovXG4gIHB1YmxpYyBnZXQgc3RhY2tOYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YWNrTmFtZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgSUQgb2YgdGhlIHN0YWNrXG4gICAqXG4gICAqL1xuICBwdWJsaWMgZ2V0IHN0YWNrSWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gUm9zUHNldWRvLnN0YWNrSWQ7XG4gIH1cblxuICAvKipcbiAgICogSW5kaWNhdGVzIGlmIHRoaXMgaXMgYSBuZXN0ZWQgc3RhY2ssIGluIHdoaWNoIGNhc2UgYHBhcmVudFN0YWNrYCB3aWxsIGluY2x1ZGUgYSByZWZlcmVuY2UgdG8gaXQncyBwYXJlbnQuXG4gICAqL1xuICBwdWJsaWMgZ2V0IG5lc3RlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5uZXN0ZWRTdGFja1Jlc291cmNlICE9PSB1bmRlZmluZWQ7XG4gIH1cblxuICAvKipcbiAgICogSWYgdGhpcyBpcyBhIG5lc3RlZCBzdGFjaywgcmV0dXJucyBpdCdzIHBhcmVudCBzdGFjay5cbiAgICovXG4gIHB1YmxpYyBnZXQgbmVzdGVkU3RhY2tQYXJlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMubmVzdGVkU3RhY2tSZXNvdXJjZSAmJiBTdGFjay5vZih0aGlzLm5lc3RlZFN0YWNrUmVzb3VyY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHBhcmVudCBvZiBhIG5lc3RlZCBzdGFjay5cbiAgICpcbiAgICogQGRlcHJlY2F0ZWQgdXNlIGBuZXN0ZWRTdGFja1BhcmVudGBcbiAgICovXG4gIHB1YmxpYyBnZXQgcGFyZW50U3RhY2soKSB7XG4gICAgcmV0dXJuIHRoaXMubmVzdGVkU3RhY2tQYXJlbnQ7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIGltcGxpY2l0bHkgYnkgdGhlIGBhZGREZXBlbmRlbmN5YCBoZWxwZXIgZnVuY3Rpb24gaW4gb3JkZXIgdG9cbiAgICogcmVhbGl6ZSBhIGRlcGVuZGVuY3kgYmV0d2VlbiB0d28gdG9wLWxldmVsIHN0YWNrcyBhdCB0aGUgYXNzZW1ibHkgbGV2ZWwuXG4gICAqXG4gICAqIFVzZSBgc3RhY2suYWRkRGVwZW5kZW5jeWAgdG8gZGVmaW5lIHRoZSBkZXBlbmRlbmN5IGJldHdlZW4gYW55IHR3byBzdGFja3MsXG4gICAqIGFuZCB0YWtlIGludG8gYWNjb3VudCBuZXN0ZWQgc3RhY2sgcmVsYXRpb25zaGlwcy5cbiAgICpcbiAgICogQGludGVybmFsXG4gICAqL1xuICBwdWJsaWMgX2FkZEFzc2VtYmx5RGVwZW5kZW5jeSh0YXJnZXQ6IFN0YWNrLCByZWFzb24/OiBzdHJpbmcpIHtcbiAgICAvLyBkZWZlbnNpdmU6IHdlIHNob3VsZCBuZXZlciBnZXQgaGVyZSBmb3IgbmVzdGVkIHN0YWNrc1xuICAgIGlmICh0aGlzLm5lc3RlZCB8fCB0YXJnZXQubmVzdGVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIFwiQ2Fubm90IGFkZCBhc3NlbWJseS1sZXZlbCBkZXBlbmRlbmNpZXMgZm9yIG5lc3RlZCBzdGFja3NcIlxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZWFzb24gPSByZWFzb24gfHwgXCJkZXBlbmRlbmN5IGFkZGVkIHVzaW5nIHN0YWNrLmFkZERlcGVuZGVuY3koKVwiO1xuICAgIGNvbnN0IGN5Y2xlID0gdGFyZ2V0LnN0YWNrRGVwZW5kZW5jeVJlYXNvbnModGhpcyk7XG4gICAgaWYgKGN5Y2xlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYCcke3RhcmdldC5ub2RlLnBhdGh9JyBkZXBlbmRzIG9uICcke3RoaXMubm9kZS5wYXRofScgKCR7Y3ljbGUuam9pbihcbiAgICAgICAgICBcIiwgXCJcbiAgICAgICAgKX0pLiBBZGRpbmcgdGhpcyBkZXBlbmRlbmN5ICgke3JlYXNvbn0pIHdvdWxkIGNyZWF0ZSBhIGN5Y2xpYyByZWZlcmVuY2UuYFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBsZXQgZGVwID0gdGhpcy5fc3RhY2tEZXBlbmRlbmNpZXNbdGFyZ2V0Lm5vZGUudW5pcXVlSWRdO1xuICAgIGlmICghZGVwKSB7XG4gICAgICBkZXAgPSB0aGlzLl9zdGFja0RlcGVuZGVuY2llc1t0YXJnZXQubm9kZS51bmlxdWVJZF0gPSB7XG4gICAgICAgIHN0YWNrOiB0YXJnZXQsXG4gICAgICAgIHJlYXNvbnM6IFtdLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBkZXAucmVhc29ucy5wdXNoKHJlYXNvbik7XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuQ0RLX0RFQlVHX0RFUFMpIHtcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG4gICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICBgW0NES19ERUJVR19ERVBTXSBzdGFjayBcIiR7dGhpcy5ub2RlLnBhdGh9XCIgZGVwZW5kcyBvbiBcIiR7dGFyZ2V0Lm5vZGUucGF0aH1cIiBiZWNhdXNlOiAke3JlYXNvbn1gXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBuYW1pbmcgc2NoZW1lIHVzZWQgdG8gYWxsb2NhdGUgbG9naWNhbCBJRHMuIEJ5IGRlZmF1bHQsIHVzZXNcbiAgICogdGhlIGBIYXNoZWRBZGRyZXNzaW5nU2NoZW1lYCBidXQgdGhpcyBtZXRob2QgY2FuIGJlIG92ZXJyaWRkZW4gdG8gY3VzdG9taXplXG4gICAqIHRoaXMgYmVoYXZpb3IuXG4gICAqXG4gICAqIEluIG9yZGVyIHRvIG1ha2Ugc3VyZSBsb2dpY2FsIElEcyBhcmUgdW5pcXVlIGFuZCBzdGFibGUsIHdlIGhhc2ggdGhlIHJlc291cmNlXG4gICAqIGNvbnN0cnVjdCB0cmVlIHBhdGggKGkuZS4gdG9wbGV2ZWwvc2Vjb25kbGV2ZWwvLi4uL215cmVzb3VyY2UpIGFuZCBhZGQgaXQgYXNcbiAgICogYSBzdWZmaXggdG8gdGhlIHBhdGggY29tcG9uZW50cyBqb2luZWQgd2l0aG91dCBhIHNlcGFyYXRvciAoUk9TXG4gICAqIElEcyBvbmx5IGFsbG93IGFscGhhbnVtZXJpYyBjaGFyYWN0ZXJzKS5cbiAgICpcbiAgICogVGhlIHJlc3VsdCB3aWxsIGJlOlxuICAgKlxuICAgKiAgIDxwYXRoLmpvaW4oJycpPjxtZDUocGF0aC5qb2luKCcvJyk+XG4gICAqICAgICBcImh1bWFuXCIgICAgICBcImhhc2hcIlxuICAgKlxuICAgKiBJZiB0aGUgXCJodW1hblwiIHBhcnQgb2YgdGhlIElEIGV4Y2VlZHMgMjQwIGNoYXJhY3RlcnMsIHdlIHNpbXBseSB0cmltIGl0IHNvXG4gICAqIHRoZSB0b3RhbCBJRCBkb2Vzbid0IGV4Y2VlZCAyNTUgY2hhcmFjdGVyIGxpbWl0LlxuICAgKlxuICAgKiBXZSBvbmx5IHRha2UgOCBjaGFyYWN0ZXJzIGZyb20gdGhlIG1kNSBoYXNoICgwLjAwMDAwNSBjaGFuY2Ugb2YgY29sbGlzaW9uKS5cbiAgICpcbiAgICogU3BlY2lhbCBjYXNlczpcbiAgICpcbiAgICogLSBJZiB0aGUgcGF0aCBvbmx5IGNvbnRhaW5zIGEgc2luZ2xlIGNvbXBvbmVudCAoaS5lLiBpdCdzIGEgdG9wLWxldmVsXG4gICAqICAgcmVzb3VyY2UpLCB3ZSB3b24ndCBhZGQgdGhlIGhhc2ggdG8gaXQuIFRoZSBoYXNoIGlzIG5vdCBuZWVkZWQgZm9yXG4gICAqICAgZGlzYW1pZ3VhdGlvbiBhbmQgYWxzbywgaXQgYWxsb3dzIGZvciBhIG1vcmUgc3RyYWlnaHRmb3J3YXJkIG1pZ3JhdGlvbiBhblxuICAgKiAgIGV4aXN0aW5nIFJPUyB0ZW1wbGF0ZSB0byBhIENESyBzdGFjayB3aXRob3V0IGxvZ2ljYWwgSUQgY2hhbmdlc1xuICAgKiAgIChvciByZW5hbWVzKS5cbiAgICogLSBGb3IgYWVzdGhldGljIHJlYXNvbnMsIGlmIHRoZSBsYXN0IGNvbXBvbmVudHMgb2YgdGhlIHBhdGggYXJlIHRoZSBzYW1lXG4gICAqICAgKGkuZS4gYEwxL0wyL1BpcGVsaW5lL1BpcGVsaW5lYCksIHRoZXkgd2lsbCBiZSBkZS1kdXBsaWNhdGVkIHRvIG1ha2UgdGhlXG4gICAqICAgcmVzdWx0aW5nIGh1bWFuIHBvcnRpb24gb2YgdGhlIElEIG1vcmUgcGxlYXNpbmc6IGBMMUwyUGlwZWxpbmU8SEFTSD5gXG4gICAqICAgaW5zdGVhZCBvZiBgTDFMMlBpcGVsaW5lUGlwZWxpbmU8SEFTSD5gXG4gICAqIC0gSWYgYSBjb21wb25lbnQgaXMgbmFtZWQgXCJEZWZhdWx0XCIgaXQgd2lsbCBiZSBvbWl0dGVkIGZyb20gdGhlIHBhdGguIFRoaXNcbiAgICogICBhbGxvd3MgcmVmYWN0b3JpbmcgaGlnaGVyIGxldmVsIGFic3RyYWN0aW9ucyBhcm91bmQgY29uc3RydWN0cyB3aXRob3V0IGFmZmVjdGluZ1xuICAgKiAgIHRoZSBJRHMgb2YgYWxyZWFkeSBkZXBsb3llZCByZXNvdXJjZXMuXG4gICAqIC0gSWYgYSBjb21wb25lbnQgaXMgbmFtZWQgXCJSZXNvdXJjZVwiIGl0IHdpbGwgYmUgb21pdHRlZCBmcm9tIHRoZSB1c2VyLXZpc2libGVcbiAgICogICBwYXRoLCBidXQgaW5jbHVkZWQgaW4gdGhlIGhhc2guIFRoaXMgcmVkdWNlcyB2aXN1YWwgbm9pc2UgaW4gdGhlIGh1bWFuIHJlYWRhYmxlXG4gICAqICAgcGFydCBvZiB0aGUgaWRlbnRpZmllci5cbiAgICpcbiAgICogQHBhcmFtIHJvc0VsZW1lbnQgVGhlIGVsZW1lbnQgZm9yIHdoaWNoIHRoZSBsb2dpY2FsIElEIGlzIGFsbG9jYXRlZC5cbiAgICovXG4gIHByb3RlY3RlZCBhbGxvY2F0ZUxvZ2ljYWxJZChyb3NFbGVtZW50OiBSb3NFbGVtZW50KTogc3RyaW5nIHtcbiAgICBjb25zdCBzY29wZXMgPSByb3NFbGVtZW50Lm5vZGUuc2NvcGVzO1xuICAgIGNvbnN0IHN0YWNrSW5kZXggPSBzY29wZXMuaW5kZXhPZihyb3NFbGVtZW50LnN0YWNrKTtcbiAgICBjb25zdCBwYXRoQ29tcG9uZW50cyA9IHNjb3Blcy5zbGljZShzdGFja0luZGV4ICsgMSkubWFwKCh4KSA9PiB4Lm5vZGUuaWQpO1xuICAgIHJldHVybiBtYWtlVW5pcXVlSWQocGF0aENvbXBvbmVudHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFZhbGlkYXRlIHN0YWNrIG5hbWVcbiAgICpcbiAgICogUk9TIHN0YWNrIG5hbWVzIGNhbiBpbmNsdWRlIGRhc2hlcyBpbiBhZGRpdGlvbiB0byB0aGUgcmVndWxhciBpZGVudGlmaWVyXG4gICAqIGNoYXJhY3RlciBjbGFzc2VzLCBhbmQgd2UgZG9uJ3QgYWxsb3cgb25lIG9mIHRoZSBtYWdpYyBtYXJrZXJzLlxuICAgKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIHByb3RlY3RlZCBfdmFsaWRhdGVJZChuYW1lOiBzdHJpbmcpIHtcbiAgICBpZiAobmFtZSAmJiAhVkFMSURfU1RBQ0tfTkFNRV9SRUdFWC50ZXN0KG5hbWUpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBTdGFjayBuYW1lIG11c3QgbWF0Y2ggdGhlIHJlZ3VsYXIgZXhwcmVzc2lvbjogJHtWQUxJRF9TVEFDS19OQU1FX1JFR0VYLnRvU3RyaW5nKCl9LCBnb3QgJyR7bmFtZX0nYFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZShzZXNzaW9uOiBJU3ludGhlc2lzU2Vzc2lvbik6IHZvaWQge1xuICAgIC8vIEluIHByaW5jaXBsZSwgc3RhY2sgc3ludGhlc2lzIGlzIGRlbGVnYXRlZCB0byB0aGVcbiAgICAvLyBTdGFja1N5bnRoZXNpcyBvYmplY3QuXG4gICAgLy9cbiAgICAvLyBIb3dldmVyLCBzb21lIHBhcnRzIG9mIHN5bnRoZXNpcyBjdXJyZW50bHkgdXNlIHNvbWUgcHJpdmF0ZVxuICAgIC8vIG1ldGhvZHMgb24gU3RhY2ssIGFuZCBJIGRvbid0IHJlYWxseSBzZWUgdGhlIHZhbHVlIGluIHJlZmFjdG9yaW5nXG4gICAgLy8gdGhpcyByaWdodCBub3csIHNvIHNvbWUgcGFydHMgc3RpbGwgaGFwcGVuIGhlcmUuXG4gICAgY29uc3QgYnVpbGRlciA9IHNlc3Npb24uYXNzZW1ibHk7XG5cbiAgICAvLyB3cml0ZSB0aGUgUk9TIHRlbXBsYXRlIGFzIGEgSlNPTiBmaWxlXG4gICAgY29uc3Qgb3V0UGF0aCA9IHBhdGguam9pbihidWlsZGVyLm91dGRpciwgdGhpcy50ZW1wbGF0ZUZpbGUpO1xuICAgIGNvbnN0IHRleHQgPSBKU09OLnN0cmluZ2lmeSh0aGlzLl90b1Jvc1RlbXBsYXRlKCksIHVuZGVmaW5lZCwgMik7XG4gICAgZnMud3JpdGVGaWxlU3luYyhvdXRQYXRoLCB0ZXh0KTtcblxuICAgIC8vIERlbGVnYXRlIGFkZGluZyBhcnRpZmFjdHMgdG8gdGhlIFN5bnRoZXNpemVyXG4gICAgdGhpcy5zeW50aGVzaXplci5zeW50aGVzaXplU3RhY2tBcnRpZmFjdHMoc2Vzc2lvbik7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgUm9zVGVtcGxhdGUgdGVtcGxhdGUgZm9yIHRoaXMgc3RhY2sgYnkgdHJhdmVyc2luZ1xuICAgKiB0aGUgdHJlZSBhbmQgaW52b2tpbmcgX3RvUm9zVGVtcGxhdGUoKSBvbiBhbGwgRW50aXR5IG9iamVjdHMuXG4gICAqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgcHJvdGVjdGVkIF90b1Jvc1RlbXBsYXRlKCkge1xuICAgIGNvbnN0IHRlbXBsYXRlOiBhbnkgPSB7XG4gICAgICBEZXNjcmlwdGlvbjogdGhpcy50ZW1wbGF0ZU9wdGlvbnMuZGVzY3JpcHRpb24sXG4gICAgICBNZXRhZGF0YTogdGhpcy50ZW1wbGF0ZU9wdGlvbnMubWV0YWRhdGEsXG4gICAgfTtcblxuICAgIGNvbnN0IGVsZW1lbnRzID0gcm9zRWxlbWVudHModGhpcyk7XG4gICAgY29uc3QgZnJhZ21lbnRzID0gZWxlbWVudHMubWFwKChlKSA9PiB0aGlzLnJlc29sdmUoZS5fdG9Sb3NUZW1wbGF0ZSgpKSk7XG5cbiAgICAvLyBtZXJnZSBpbiBhbGwgUk9TIGZyYWdtZW50cyBjb2xsZWN0ZWQgZnJvbSB0aGUgdHJlZVxuICAgIGZvciAoY29uc3QgZnJhZ21lbnQgb2YgZnJhZ21lbnRzKSB7XG4gICAgICBtZXJnZSh0ZW1wbGF0ZSwgZnJhZ21lbnQpO1xuICAgIH1cblxuICAgIC8vIHJlc29sdmUgYWxsIHRva2VucyBhbmQgcmVtb3ZlIGFsbCBlbXB0aWVzXG4gICAgY29uc3QgcmV0ID0gdGhpcy5yZXNvbHZlKHRlbXBsYXRlKSB8fCB7fTtcblxuICAgIHRoaXMuX2xvZ2ljYWxJZHMuYXNzZXJ0QWxsUmVuYW1lc0FwcGxpZWQoKTtcblxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICAvKipcbiAgICogRGVwcmVjYXRlZC5cbiAgICpcbiAgICogQHJldHVybnMgcmVmZXJlbmNlIGl0c2VsZiB3aXRob3V0IGFueSBjaGFuZ2VcbiAgICogQGRlcHJlY2F0ZWQgY3Jvc3MgcmVmZXJlbmNlIGhhbmRsaW5nIGhhcyBiZWVuIG1vdmVkIHRvIGBBcHAucHJlcGFyZSgpYC5cbiAgICovXG4gIHByb3RlY3RlZCBwcmVwYXJlQ3Jvc3NSZWZlcmVuY2UoXG4gICAgX3NvdXJjZVN0YWNrOiBTdGFjayxcbiAgICByZWZlcmVuY2U6IFJlZmVyZW5jZVxuICApOiBJUmVzb2x2YWJsZSB7XG4gICAgcmV0dXJuIHJlZmVyZW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayB3aGV0aGVyIHRoaXMgc3RhY2sgaGFzIGEgKHRyYW5zaXRpdmUpIGRlcGVuZGVuY3kgb24gYW5vdGhlciBzdGFja1xuICAgKlxuICAgKiBSZXR1cm5zIHRoZSBsaXN0IG9mIHJlYXNvbnMgb24gdGhlIGRlcGVuZGVuY3kgcGF0aCwgb3IgdW5kZWZpbmVkXG4gICAqIGlmIHRoZXJlIGlzIG5vIGRlcGVuZGVuY3kuXG4gICAqL1xuICBwcml2YXRlIHN0YWNrRGVwZW5kZW5jeVJlYXNvbnMob3RoZXI6IFN0YWNrKTogc3RyaW5nW10gfCB1bmRlZmluZWQge1xuICAgIGlmICh0aGlzID09PSBvdGhlcikge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IGRlcCBvZiBPYmplY3QudmFsdWVzKHRoaXMuX3N0YWNrRGVwZW5kZW5jaWVzKSkge1xuICAgICAgY29uc3QgcmV0ID0gZGVwLnN0YWNrLnN0YWNrRGVwZW5kZW5jeVJlYXNvbnMob3RoZXIpO1xuICAgICAgaWYgKHJldCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBbLi4uZGVwLnJlYXNvbnMsIC4uLnJldF07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICAvKipcbiAgICogQ2FsY3VsYXRlIHRoZSBzdGFjayBuYW1lIGJhc2VkIG9uIHRoZSBjb25zdHJ1Y3QgcGF0aFxuICAgKlxuICAgKiBUaGUgc3RhY2sgbmFtZSBpcyB0aGUgbmFtZSB1bmRlciB3aGljaCB3ZSdsbCBkZXBsb3kgdGhlIHN0YWNrLFxuICAgKiBhbmQgaW5jb3Jwb3JhdGVzIGNvbnRhaW5pbmcgU3RhZ2UgbmFtZXMgYnkgZGVmYXVsdC5cbiAgICpcbiAgICogR2VuZXJhbGx5IHRoaXMgbG9va3MgYSBsb3QgbGlrZSBob3cgbG9naWNhbCBJRHMgYXJlIGNhbGN1bGF0ZWQuXG4gICAqIFRoZSBzdGFjayBuYW1lIGlzIGNhbGN1bGF0ZWQgYmFzZWQgb24gdGhlIGNvbnN0cnVjdCByb290IHBhdGgsXG4gICAqIGFzIGZvbGxvd3M6XG4gICAqXG4gICAqIC0gUGF0aCBpcyBjYWxjdWxhdGVkIHdpdGggcmVzcGVjdCB0byBjb250YWluaW5nIEFwcCBvciBTdGFnZSAoaWYgYW55KVxuICAgKiAtIElmIHRoZSBwYXRoIGlzIG9uZSBjb21wb25lbnQgbG9uZyBqdXN0IHVzZSB0aGF0IGNvbXBvbmVudCwgb3RoZXJ3aXNlXG4gICAqICAgY29tYmluZSB0aGVtIHdpdGggYSBoYXNoLlxuICAgKlxuICAgKiBTaW5jZSB0aGUgaGFzaCBpcyBxdWl0ZSB1Z2x5IGFuZCB3ZSdkIGxpa2UgdG8gYXZvaWQgaXQgaWYgcG9zc2libGUgLS0gYnV0XG4gICAqIHdlIGNhbid0IGFueW1vcmUgaW4gdGhlIGdlbmVyYWwgY2FzZSBzaW5jZSBpdCBoYXMgYmVlbiB3cml0dGVuIGludG8gbGVnYWN5XG4gICAqIHN0YWNrcy4gVGhlIGludHJvZHVjdGlvbiBvZiBTdGFnZXMgbWFrZXMgaXQgcG9zc2libGUgdG8gbWFrZSB0aGlzIG5pY2VyIGhvd2V2ZXIuXG4gICAqIFdoZW4gYSBTdGFjayBpcyBuZXN0ZWQgaW5zaWRlIGEgU3RhZ2UsIHdlIHVzZSB0aGUgcGF0aCBjb21wb25lbnRzIGJlbG93IHRoZVxuICAgKiBTdGFnZSwgYW5kIHByZWZpeCB0aGUgcGF0aCBjb21wb25lbnRzIG9mIHRoZSBTdGFnZSBiZWZvcmUgaXQuXG4gICAqL1xuICBwcml2YXRlIGdlbmVyYXRlU3RhY2tOYW1lKCkge1xuICAgIGNvbnN0IGFzc2VtYmx5ID0gU3RhZ2Uub2YodGhpcyk7XG4gICAgY29uc3QgcHJlZml4ID1cbiAgICAgIGFzc2VtYmx5ICYmIGFzc2VtYmx5LnN0YWdlTmFtZSA/IGAke2Fzc2VtYmx5LnN0YWdlTmFtZX0tYCA6IFwiXCI7XG4gICAgcmV0dXJuIGAke3ByZWZpeH0ke3RoaXMuZ2VuZXJhdGVTdGFja0lkKGFzc2VtYmx5KX1gO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBhcnRpZmFjdCBJRCBmb3IgdGhpcyBzdGFja1xuICAgKlxuICAgKiBTdGFjayBhcnRpZmFjdCBJRCBpcyB1bmlxdWUgd2l0aGluIHRoZSBBcHAncyBDbG91ZCBBc3NlbWJseS5cbiAgICovXG4gIHByaXZhdGUgZ2VuZXJhdGVTdGFja0FydGlmYWN0SWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2VuZXJhdGVTdGFja0lkKHRoaXMubm9kZS5yb290KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZW5lcmF0ZSBhbiBJRCB3aXRoIHJlc3BlY3QgdG8gdGhlIGdpdmVuIGNvbnRhaW5lciBjb25zdHJ1Y3QuXG4gICAqL1xuICBwcml2YXRlIGdlbmVyYXRlU3RhY2tJZChjb250YWluZXI6IElDb25zdHJ1Y3QgfCB1bmRlZmluZWQpIHtcbiAgICBjb25zdCByb290UGF0aCA9IHJvb3RQYXRoVG8odGhpcywgY29udGFpbmVyKTtcbiAgICBjb25zdCBpZHMgPSByb290UGF0aC5tYXAoKGMpID0+IGMubm9kZS5pZCk7XG5cbiAgICAvLyBJbiB1bml0IHRlc3RzIG91ciBTdGFjayAod2hpY2ggaXMgdGhlIG9ubHkgY29tcG9uZW50KSBtYXkgbm90IGhhdmUgYW5cbiAgICAvLyBpZCwgc28gaW4gdGhhdCBjYXNlIGp1c3QgcHJldGVuZCBpdCdzIFwiU3RhY2tcIi5cbiAgICBpZiAoaWRzLmxlbmd0aCA9PT0gMSAmJiAhaWRzWzBdKSB7XG4gICAgICBpZHNbMF0gPSBcIlN0YWNrXCI7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ha2VTdGFja05hbWUoaWRzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBtZXJnZSh0ZW1wbGF0ZTogYW55LCBmcmFnbWVudDogYW55KTogdm9pZCB7XG4gIGZvciAoY29uc3Qgc2VjdGlvbiBvZiBPYmplY3Qua2V5cyhmcmFnbWVudCkpIHtcbiAgICBjb25zdCBzcmMgPSBmcmFnbWVudFtzZWN0aW9uXTtcblxuICAgIC8vIGNyZWF0ZSB0b3AtbGV2ZWwgc2VjdGlvbiBpZiBpdCBkb2Vzbid0IGV4aXN0XG4gICAgY29uc3QgZGVzdCA9IHRlbXBsYXRlW3NlY3Rpb25dO1xuICAgIGlmICghZGVzdCkge1xuICAgICAgdGVtcGxhdGVbc2VjdGlvbl0gPSBzcmM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRlbXBsYXRlW3NlY3Rpb25dID0gbWVyZ2VTZWN0aW9uKHNlY3Rpb24sIGRlc3QsIHNyYyk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIG1lcmdlU2VjdGlvbihzZWN0aW9uOiBzdHJpbmcsIHZhbDE6IGFueSwgdmFsMjogYW55KTogYW55IHtcbiAgc3dpdGNoIChzZWN0aW9uKSB7XG4gICAgY2FzZSBcIkRlc2NyaXB0aW9uXCI6XG4gICAgICByZXR1cm4gYCR7dmFsMX1cXG4ke3ZhbDJ9YDtcbiAgICBjYXNlIFwiUmVzb3VyY2VzXCI6XG4gICAgY2FzZSBcIkNvbmRpdGlvbnNcIjpcbiAgICBjYXNlIFwiUGFyYW1ldGVyc1wiOlxuICAgIGNhc2UgXCJPdXRwdXRzXCI6XG4gICAgY2FzZSBcIk1hcHBpbmdzXCI6XG4gICAgICByZXR1cm4gbWVyZ2VPYmplY3RzV2l0aG91dER1cGxpY2F0ZXMoc2VjdGlvbiwgdmFsMSwgdmFsMik7XG4gICAgY2FzZSBcIk1ldGFkYXRhXCI6XG4gICAgICByZXR1cm4gbWVyZ2VNZXRhZGF0YU9iamVjdHNXaXRob3V0RHVwbGljYXRlcyh2YWwxLCB2YWwyKTtcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgQ0RLIGRvZXNuJ3Qga25vdyBob3cgdG8gbWVyZ2UgdHdvIGluc3RhbmNlcyBvZiB0aGUgUk9TIHRlbXBsYXRlIHNlY3Rpb24gJyR7c2VjdGlvbn0nIC0gYCArXG4gICAgICAgICAgXCJwbGVhc2UgcmVtb3ZlIG9uZSBvZiB0aGVtIGZyb20geW91ciBjb2RlXCJcbiAgICAgICk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWVyZ2VNZXRhZGF0YU9iamVjdHNXaXRob3V0RHVwbGljYXRlcyhcbiAgICBkZXN0OiBhbnksXG4gICAgc3JjOiBhbnlcbik6IGFueSB7XG4gIGlmICh0eXBlb2YgZGVzdCAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygc3JjICE9PSBcIm9iamVjdFwiKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RpbmcgTWV0YWRhdGEgVmFsdWUgdG8gYmUgYW4gb2JqZWN0YCk7XG4gIH1cbiAgaWYgKHNyYy5oYXNPd25Qcm9wZXJ0eSgnQUxJWVVOOjpST1M6OkludGVyZmFjZScpKSB7XG4gICAgaWYgKHR5cGVvZiBzcmNbXCJBTElZVU46OlJPUzo6SW50ZXJmYWNlXCJdID09IFwib2JqZWN0XCIpIHtcbiAgICAgIGlmIChzcmNbXCJBTElZVU46OlJPUzo6SW50ZXJmYWNlXCJdLmhhc093blByb3BlcnR5KCdUZW1wbGF0ZVRhZ3MnKSkge1xuICAgICAgICBpZiAoc3JjW1wiQUxJWVVOOjpST1M6OkludGVyZmFjZVwiXSBbXCJUZW1wbGF0ZVRhZ3NcIl0gaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgIHNyY1tcIkFMSVlVTjo6Uk9TOjpJbnRlcmZhY2VcIl0gW1wiVGVtcGxhdGVUYWdzXCJdLnB1c2goXCJDcmVhdGUgYnkgUk9TIENES1wiKVxuICAgICAgICAgIGRlc3RbXCJBTElZVU46OlJPUzo6SW50ZXJmYWNlXCJdID0gc3JjW1wiQUxJWVVOOjpST1M6OkludGVyZmFjZVwiXVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0aW5nIE1ldGFkYXRhIEFMSVlVTjo6Uk9TOjpJbnRlcmZhY2UgVGVtcGxhdGVUYWdzIFZhbHVlIHRvIGJlIGFuIEFycmF5YCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBkZXN0W1wiQUxJWVVOOjpST1M6OkludGVyZmFjZVwiXSA9IHNyY1tcIkFMSVlVTjo6Uk9TOjpJbnRlcmZhY2VcIl1cbiAgICAgICAgZGVzdFtcIkFMSVlVTjo6Uk9TOjpJbnRlcmZhY2VcIl0uVGVtcGxhdGVUYWdzID0gW1wiQ3JlYXRlIGJ5IFJPUyBDREtcIl1cbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGluZyBNZXRhZGF0YSBBTElZVU46OlJPUzo6SW50ZXJmYWNlIFZhbHVlIHRvIGJlIGFuIG9iamVjdGApO1xuICAgIH1cbiAgfVxuICBlbHNlIHtcbiAgICBkZXN0W1wiQUxJWVVOOjpST1M6OkludGVyZmFjZVwiXSA9IHsgVGVtcGxhdGVUYWdzIDogW1wiQ3JlYXRlIGJ5IFJPUyBDREtcIl19XG4gIH1cbiAgZm9yIChjb25zdCBpZCBvZiBPYmplY3Qua2V5cyhzcmMpKSB7XG4gICAgaWYgKGlkICE9PSAnQUxJWVVOOjpST1M6OkludGVyZmFjZScpIHtcbiAgICAgIGRlc3RbaWRdID0gc3JjW2lkXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGVzdDtcbn1cblxuZnVuY3Rpb24gbWVyZ2VPYmplY3RzV2l0aG91dER1cGxpY2F0ZXMoXG4gIHNlY3Rpb246IHN0cmluZyxcbiAgZGVzdDogYW55LFxuICBzcmM6IGFueVxuKTogYW55IHtcbiAgaWYgKHR5cGVvZiBkZXN0ICE9PSBcIm9iamVjdFwiKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RpbmcgJyR7SlNPTi5zdHJpbmdpZnkoZGVzdCl9JyB0byBiZSBhbiBvYmplY3RgKTtcbiAgfVxuICBpZiAodHlwZW9mIHNyYyAhPT0gXCJvYmplY3RcIikge1xuICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0aW5nICcke0pTT04uc3RyaW5naWZ5KHNyYyl9JyB0byBiZSBhbiBvYmplY3RgKTtcbiAgfVxuXG4gIC8vIGFkZCBhbGwgZW50aXRpZXMgZnJvbSBzb3VyY2Ugc2VjdGlvbiB0byBkZXN0aW5hdGlvbiBzZWN0aW9uXG4gIGZvciAoY29uc3QgaWQgb2YgT2JqZWN0LmtleXMoc3JjKSkge1xuICAgIGlmIChpZCBpbiBkZXN0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYHNlY3Rpb24gJyR7c2VjdGlvbn0nIGFscmVhZHkgY29udGFpbnMgJyR7aWR9J2ApO1xuICAgIH1cbiAgICBkZXN0W2lkXSA9IHNyY1tpZF07XG4gIH1cblxuICByZXR1cm4gZGVzdDtcbn1cblxuLyoqXG4gKiBST1MgdGVtcGxhdGUgb3B0aW9ucyBmb3IgYSBzdGFjay5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJVGVtcGxhdGVPcHRpb25zIHtcbiAgLyoqXG4gICAqIEdldHMgb3Igc2V0cyB0aGUgZGVzY3JpcHRpb24gb2YgdGhpcyBzdGFjay5cbiAgICogSWYgcHJvdmlkZWQsIGl0IHdpbGwgYmUgaW5jbHVkZWQgaW4gdGhlIFJPUyB0ZW1wbGF0ZSdzIFwiRGVzY3JpcHRpb25cIiBhdHRyaWJ1dGUuXG4gICAqL1xuICBkZXNjcmlwdGlvbj86IHN0cmluZztcblxuICAvKipcbiAgICogTWV0YWRhdGEgYXNzb2NpYXRlZCB3aXRoIHRoZSBST1MgdGVtcGxhdGUuXG4gICAqL1xuICBtZXRhZGF0YT86IHsgW2tleTogc3RyaW5nXTogYW55IH07XG59XG5cbi8qKlxuICogQ29sbGVjdCBhbGwgcm9zRWxlbWVudHMgZnJvbSBhIFN0YWNrLlxuICpcbiAqIEBwYXJhbSBub2RlIFJvb3Qgbm9kZSB0byBjb2xsZWN0IGFsbCByb3NFbGVtZW50cyBmcm9tXG4gKiBAcGFyYW0gaW50byBBcnJheSB0byBhcHBlbmQgcm9zRWxlbWVudHMgdG9cbiAqIEByZXR1cm5zIFRoZSBzYW1lIGFycmF5IGFzIGlzIGJlaW5nIGNvbGxlY3RlZCBpbnRvXG4gKi9cbmZ1bmN0aW9uIHJvc0VsZW1lbnRzKG5vZGU6IElDb25zdHJ1Y3QsIGludG86IFJvc0VsZW1lbnRbXSA9IFtdKTogUm9zRWxlbWVudFtdIHtcbiAgaWYgKFJvc0VsZW1lbnQuaXNSb3NFbGVtZW50KG5vZGUpKSB7XG4gICAgaW50by5wdXNoKG5vZGUpO1xuICB9XG5cbiAgZm9yIChjb25zdCBjaGlsZCBvZiBub2RlLm5vZGUuY2hpbGRyZW4pIHtcbiAgICAvLyBEb24ndCByZWN1cnNlIGludG8gYSBzdWJzdGFja1xuICAgIGlmIChTdGFjay5pc1N0YWNrKGNoaWxkKSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgcm9zRWxlbWVudHMoY2hpbGQsIGludG8pO1xuICB9XG5cbiAgcmV0dXJuIGludG87XG59XG5cbi8qKlxuICogUmV0dXJuIHRoZSBjb25zdHJ1Y3Qgcm9vdCBwYXRoIG9mIHRoZSBnaXZlbiBjb25zdHJ1Y3QgcmVsYXRpdmUgdG8gdGhlIGdpdmVuIGFuY2VzdG9yXG4gKlxuICogSWYgbm8gYW5jZXN0b3IgaXMgZ2l2ZW4gb3IgdGhlIGFuY2VzdG9yIGlzIG5vdCBmb3VuZCwgcmV0dXJuIHRoZSBlbnRpcmUgcm9vdCBwYXRoLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcm9vdFBhdGhUbyhcbiAgY29uc3RydWN0OiBJQ29uc3RydWN0LFxuICBhbmNlc3Rvcj86IElDb25zdHJ1Y3Rcbik6IElDb25zdHJ1Y3RbXSB7XG4gIGNvbnN0IHNjb3BlcyA9IGNvbnN0cnVjdC5ub2RlLnNjb3BlcztcbiAgZm9yIChsZXQgaSA9IHNjb3Blcy5sZW5ndGggLSAyOyBpID49IDA7IGktLSkge1xuICAgIGlmIChzY29wZXNbaV0gPT09IGFuY2VzdG9yKSB7XG4gICAgICByZXR1cm4gc2NvcGVzLnNsaWNlKGkgKyAxKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHNjb3Blcztcbn1cblxuLyoqXG4gKiBtYWtlVW5pcXVlSWQsIHNwZWNpYWxpemVkIGZvciBTdGFjayBuYW1lc1xuICpcbiAqIFN0YWNrIG5hbWVzIG1heSBjb250YWluICctJywgc28gd2UgYWxsb3cgdGhhdCBjaGFyYWN0ZXIgaWYgdGhlIHN0YWNrIG5hbWVcbiAqIGhhcyBvbmx5IG9uZSBjb21wb25lbnQuIE90aGVyd2lzZSB3ZSBmYWxsIGJhY2sgdG8gdGhlIHJlZ3VsYXIgXCJtYWtlVW5pcXVlSWRcIlxuICogYmVoYXZpb3IuXG4gKi9cbmZ1bmN0aW9uIG1ha2VTdGFja05hbWUoY29tcG9uZW50czogc3RyaW5nW10pIHtcbiAgaWYgKGNvbXBvbmVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgcmV0dXJuIGNvbXBvbmVudHNbMF07XG4gIH1cbiAgcmV0dXJuIG1ha2VVbmlxdWVJZChjb21wb25lbnRzKTtcbn1cblxuLy8gVGhlc2UgaW1wb3J0cyBoYXZlIHRvIGJlIGF0IHRoZSBlbmQgdG8gcHJldmVudCBjaXJjdWxhciBpbXBvcnRzXG5pbXBvcnQgeyBSb3NFbGVtZW50IH0gZnJvbSBcIi4vcm9zLWVsZW1lbnRcIjtcbmltcG9ydCB7IFJvc1BzZXVkbyB9IGZyb20gXCIuL3Jvcy1wc2V1ZG9cIjtcbmltcG9ydCB7IFJvc1Jlc291cmNlIH0gZnJvbSBcIi4vcm9zLXJlc291cmNlXCI7XG5pbXBvcnQgeyBUYWdUeXBlIH0gZnJvbSBcIi4vdGFnLW1hbmFnZXJcIjtcbmltcG9ydCB7IGFkZERlcGVuZGVuY3kgfSBmcm9tIFwiLi9kZXBzXCI7XG5pbXBvcnQgeyBSZWZlcmVuY2UgfSBmcm9tIFwiLi9yZWZlcmVuY2VcIjtcbmltcG9ydCB7IElSZXNvbHZhYmxlIH0gZnJvbSBcIi4vcmVzb2x2YWJsZVwiO1xuaW1wb3J0IHtcbiAgRGVmYXVsdFN0YWNrU3ludGhlc2l6ZXIsXG4gIElTdGFja1N5bnRoZXNpemVyLFxufSBmcm9tIFwiLi9zdGFjay1zeW50aGVzaXplcnNcIjtcbmltcG9ydCB7IFN0YWdlIH0gZnJvbSBcIi4vc3RhZ2VcIjtcbmltcG9ydCB7IElUYWdnYWJsZSwgVGFnTWFuYWdlciB9IGZyb20gXCIuL3RhZy1tYW5hZ2VyXCI7XG5cbmludGVyZmFjZSBTdGFja0RlcGVuZGVuY3kge1xuICBzdGFjazogU3RhY2s7XG4gIHJlYXNvbnM6IHN0cmluZ1tdO1xufVxuIl19