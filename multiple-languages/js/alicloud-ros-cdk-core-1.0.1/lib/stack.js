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
        case "Metadata":
            return mergeObjectsWithoutDuplicates(section, val1, val2);
        default:
            throw new Error(`CDK doesn't know how to merge two instances of the ROS template section '${section}' - ` +
                "please remove one of them from your code");
    }
}
function mergeObjectsWithoutDuplicates(section, dest, src) {
    if (typeof dest !== "object") {
        throw new Error(`Expecting ${JSON.stringify(dest)} to be an object`);
    }
    if (typeof src !== "object") {
        throw new Error(`Expecting ${JSON.stringify(src)} to be an object`);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdGFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxpREFBaUQ7QUFDakQseUJBQXlCO0FBQ3pCLDZCQUE2QjtBQUM3Qix5REFBOEU7QUFDOUUsMkRBQThFO0FBQzlFLHFEQUFrRDtBQUNsRCwrQ0FBNEM7QUFDNUMsaURBQWtEO0FBQ2xELHlDQUFxQztBQUVyQyxNQUFNLFlBQVksR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7QUFDdEQsTUFBTSxjQUFjLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO0FBRWhFLE1BQU0sc0JBQXNCLEdBQUcseUJBQXlCLENBQUM7QUFtQ3pEOztHQUVHO0FBQ0gsTUFBYSxLQUFNLFNBQVEsNEJBQVM7SUFtR2xDOzs7Ozs7OztPQVFHO0lBQ0gsWUFBbUIsS0FBaUIsRUFBRSxFQUFXLEVBQUUsUUFBb0IsRUFBRTs7UUFDdkUsb0dBQW9HO1FBQ3BHLEtBQUssQ0FBQyxLQUFNLEVBQUUsRUFBRyxDQUFDLENBQUM7UUE1RHJCOztXQUVHO1FBQ2Esb0JBQWUsR0FBcUIsRUFBRSxDQUFDO1FBbUN2RDs7V0FFRztRQUNjLHVCQUFrQixHQUUvQixFQUFFLENBQUM7UUFtQkwsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFFM0QsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLHVCQUFVLEVBQUUsQ0FBQztRQUVwQyxJQUFJLENBQUMsZ0NBQWdDO1lBQ25DLEtBQUssQ0FBQyxnQ0FBZ0MsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBRXRFLElBQUksS0FBSyxDQUFDLFdBQVcsS0FBSyxTQUFTLEVBQUU7WUFDbkMsd0JBQXdCO1lBQ3hCLDBFQUEwRTtZQUMx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QU0sQ0FBQztBQUNoQixDQUFDO0FBWEQsZ0NBV0M7QUFFRDs7Ozs7O0dBTUc7QUFDSCxTQUFTLGFBQWEsQ0FBQyxVQUFvQjtJQUN6QyxJQUFJLFVBQVUsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1FBQzNCLE9BQU8sVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ3RCO0lBQ0QsT0FBTyx1QkFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ2xDLENBQUM7QUFFRCxrRUFBa0U7QUFDbEUsK0NBQTJDO0FBQzNDLDZDQUF5QztBQUV6QywrQ0FBd0M7QUFDeEMsaUNBQXVDO0FBR3ZDLDZEQUc4QjtBQUM5QixtQ0FBZ0M7QUFDaEMsK0NBQXNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY3hhcGkgZnJvbSBcIkBhbGljbG91ZC9yb3MtY2RrLWN4YXBpXCI7XG5pbXBvcnQgKiBhcyBmcyBmcm9tIFwiZnNcIjtcbmltcG9ydCAqIGFzIHBhdGggZnJvbSBcInBhdGhcIjtcbmltcG9ydCB7IENvbnN0cnVjdCwgSUNvbnN0cnVjdCwgSVN5bnRoZXNpc1Nlc3Npb24gfSBmcm9tIFwiLi9jb25zdHJ1Y3QtY29tcGF0XCI7XG5pbXBvcnQgeyBST1NfVE9LRU5fUkVTT0xWRVIsIFJvc1RlbXBsYXRlTGFuZyB9IGZyb20gXCIuL3ByaXZhdGUvdGVtcGxhdGUtbGFuZ1wiO1xuaW1wb3J0IHsgTG9naWNhbElEcyB9IGZyb20gXCIuL3ByaXZhdGUvbG9naWNhbC1pZFwiO1xuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gXCIuL3ByaXZhdGUvcmVzb2x2ZVwiO1xuaW1wb3J0IHsgbWFrZVVuaXF1ZUlkIH0gZnJvbSBcIi4vcHJpdmF0ZS91bmlxdWVpZFwiO1xuaW1wb3J0IHsgUm9zSW5mbyB9IGZyb20gXCIuL3Jvcy1pbmZvXCI7XG5cbmNvbnN0IFNUQUNLX1NZTUJPTCA9IFN5bWJvbC5mb3IoXCJyb3MtY2RrLWNvcmUuU3RhY2tcIik7XG5jb25zdCBNWV9TVEFDS19DQUNIRSA9IFN5bWJvbC5mb3IoXCJyb3MtY2RrLWNvcmUuU3RhY2subXlTdGFja1wiKTtcblxuY29uc3QgVkFMSURfU1RBQ0tfTkFNRV9SRUdFWCA9IC9eW0EtWmEtel1bQS1aYS16MC05LV0qJC87XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RhY2tQcm9wcyB7XG4gIHJlYWRvbmx5IHZlcnNpb24/OiBTdHJpbmc7XG4gIC8qKlxuICAgKiBBIGRlc2NyaXB0aW9uIG9mIHRoZSBzdGFjay5cbiAgICpcbiAgICogQGRlZmF1bHQgLSBObyBkZXNjcmlwdGlvbi5cbiAgICovXG4gIHJlYWRvbmx5IGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBOYW1lIHRvIGRlcGxveSB0aGUgc3RhY2sgd2l0aFxuICAgKlxuICAgKiBAZGVmYXVsdCAtIERlcml2ZWQgZnJvbSBjb25zdHJ1Y3QgcGF0aC5cbiAgICovXG4gIHJlYWRvbmx5IHN0YWNrTmFtZT86IHN0cmluZztcblxuICAvKipcbiAgICogU3RhY2sgdGFncyB0aGF0IHdpbGwgYmUgYXBwbGllZCB0byBhbGwgdGhlIHRhZ2dhYmxlIHJlc291cmNlcyBhbmQgdGhlIHN0YWNrIGl0c2VsZi5cbiAgICpcbiAgICogQGRlZmF1bHQge31cbiAgICovXG4gIHJlYWRvbmx5IHRhZ3M/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xuXG4gIC8qKlxuICAgKiBTeW50aGVzaXMgbWV0aG9kIHRvIHVzZSB3aGlsZSBkZXBsb3lpbmcgdGhpcyBzdGFja1xuICAgKlxuICAgKiBAZGVmYXVsdCAtIGBEZWZhdWx0U3RhY2tTeW50aGVzaXplcmBcbiAgICovXG4gIHJlYWRvbmx5IHN5bnRoZXNpemVyPzogSVN0YWNrU3ludGhlc2l6ZXI7XG5cbiAgcmVhZG9ubHkgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ/OiBib29sZWFuO1xufVxuXG4vKipcbiAqIEEgcm9vdCBjb25zdHJ1Y3Qgd2hpY2ggcmVwcmVzZW50cyBhIHNpbmdsZSBST1Mgc3RhY2suXG4gKi9cbmV4cG9ydCBjbGFzcyBTdGFjayBleHRlbmRzIENvbnN0cnVjdCBpbXBsZW1lbnRzIElUYWdnYWJsZSB7XG4gIC8qKlxuICAgKiBSZXR1cm4gd2hldGhlciB0aGUgZ2l2ZW4gb2JqZWN0IGlzIGEgU3RhY2suXG4gICAqXG4gICAqIFdlIGRvIGF0dHJpYnV0ZSBkZXRlY3Rpb24gc2luY2Ugd2UgY2FuJ3QgcmVsaWFibHkgdXNlICdpbnN0YW5jZW9mJy5cbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgaXNTdGFjayh4OiBhbnkpOiB4IGlzIFN0YWNrIHtcbiAgICByZXR1cm4geCAhPT0gbnVsbCAmJiB0eXBlb2YgeCA9PT0gXCJvYmplY3RcIiAmJiBTVEFDS19TWU1CT0wgaW4geDtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb29rcyB1cCB0aGUgZmlyc3Qgc3RhY2sgc2NvcGUgaW4gd2hpY2ggYGNvbnN0cnVjdGAgaXMgZGVmaW5lZC4gRmFpbHMgaWYgdGhlcmUgaXMgbm8gc3RhY2sgdXAgdGhlIHRyZWUuXG4gICAqIEBwYXJhbSBjb25zdHJ1Y3QgVGhlIGNvbnN0cnVjdCB0byBzdGFydCB0aGUgc2VhcmNoIGZyb20uXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIG9mKGNvbnN0cnVjdDogSUNvbnN0cnVjdCk6IFN0YWNrIHtcbiAgICAvLyB3ZSB3YW50IHRoaXMgdG8gYmUgYXMgY2hlYXAgYXMgcG9zc2libGUuXG4gICAgY29uc3QgY2FjaGUgPSAoY29uc3RydWN0IGFzIGFueSlbTVlfU1RBQ0tfQ0FDSEVdIGFzIFN0YWNrIHwgdW5kZWZpbmVkO1xuICAgIGlmIChjYWNoZSkge1xuICAgICAgcmV0dXJuIGNhY2hlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IF9sb29rdXAoY29uc3RydWN0KTtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb25zdHJ1Y3QsIE1ZX1NUQUNLX0NBQ0hFLCB7XG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICAgIHZhbHVlLFxuICAgICAgfSk7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX2xvb2t1cChjOiBJQ29uc3RydWN0KTogU3RhY2sge1xuICAgICAgaWYgKFN0YWNrLmlzU3RhY2soYykpIHtcbiAgICAgICAgcmV0dXJuIGM7XG4gICAgICB9XG5cbiAgICAgIGlmICghYy5ub2RlLnNjb3BlKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgTm8gc3RhY2sgY291bGQgYmUgaWRlbnRpZmllZCBmb3IgdGhlIGNvbnN0cnVjdCBhdCBwYXRoICR7Y29uc3RydWN0Lm5vZGUucGF0aH1gXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfbG9va3VwKGMubm9kZS5zY29wZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRhZ3MgdG8gYmUgYXBwbGllZCB0byB0aGUgc3RhY2suXG4gICAqL1xuICBwdWJsaWMgcmVhZG9ubHkgdGFnczogVGFnTWFuYWdlcjtcblxuICAvKipcbiAgICogT3B0aW9ucyBmb3IgUk9TIHRlbXBsYXRlIChsaWtlIHZlcnNpb24sIGRlc2NyaXB0aW9uKS5cbiAgICovXG4gIHB1YmxpYyByZWFkb25seSB0ZW1wbGF0ZU9wdGlvbnM6IElUZW1wbGF0ZU9wdGlvbnMgPSB7fTtcblxuICAvKipcbiAgICogSWYgdGhpcyBpcyBhIG5lc3RlZCBzdGFjaywgdGhpcyByZXByZXNlbnRzIGl0cyBgQUxJWVVOOjpST1M6OlN0YWNrYFxuICAgKiByZXNvdXJjZS4gYHVuZGVmaW5lZGAgZm9yIHRvcC1sZXZlbCAobm9uLW5lc3RlZCkgc3RhY2tzLlxuICAgKlxuICAgKiBAZXhwZXJpbWVudGFsXG4gICAqL1xuICBwdWJsaWMgcmVhZG9ubHkgbmVzdGVkU3RhY2tSZXNvdXJjZT86IFJvc1Jlc291cmNlO1xuXG4gIC8qKlxuICAgKiBUaGUgbmFtZSBvZiB0aGUgUk9TIHRlbXBsYXRlIGZpbGUgZW1pdHRlZCB0byB0aGUgb3V0cHV0XG4gICAqIGRpcmVjdG9yeSBkdXJpbmcgc3ludGhlc2lzLlxuICAgKlxuICAgKiBAZXhhbXBsZSBNeVN0YWNrLnRlbXBsYXRlLmpzb25cbiAgICovXG4gIHB1YmxpYyByZWFkb25seSB0ZW1wbGF0ZUZpbGU6IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIElEIG9mIHRoZSBjbG91ZCBhc3NlbWJseSBhcnRpZmFjdCBmb3IgdGhpcyBzdGFjay5cbiAgICovXG4gIHB1YmxpYyByZWFkb25seSBhcnRpZmFjdElkOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFN5bnRoZXNpcyBtZXRob2QgZm9yIHRoaXMgc3RhY2tcbiAgICpcbiAgICogQGV4cGVyaW1lbnRhbFxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IHN5bnRoZXNpemVyOiBJU3RhY2tTeW50aGVzaXplcjtcblxuICAvKipcbiAgICogTG9naWNhbCBJRCBnZW5lcmF0aW9uIHN0cmF0ZWd5XG4gICAqL1xuICBwcml2YXRlIHJlYWRvbmx5IF9sb2dpY2FsSWRzOiBMb2dpY2FsSURzO1xuXG4gIC8qKlxuICAgKiBPdGhlciBzdGFja3MgdGhpcyBzdGFjayBkZXBlbmRzIG9uXG4gICAqL1xuICBwcml2YXRlIHJlYWRvbmx5IF9zdGFja0RlcGVuZGVuY2llczoge1xuICAgIFt1bmlxdWVJZDogc3RyaW5nXTogU3RhY2tEZXBlbmRlbmN5O1xuICB9ID0ge307XG5cbiAgcHJpdmF0ZSByZWFkb25seSBfc3RhY2tOYW1lOiBzdHJpbmc7XG5cbiAgcHVibGljIHJlYWRvbmx5IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IHN0YWNrLlxuICAgKlxuICAgKiBAcGFyYW0gc2NvcGUgUGFyZW50IG9mIHRoaXMgc3RhY2ssIHVzdWFsbHkgYSBQcm9ncmFtIGluc3RhbmNlLlxuICAgKiBAcGFyYW0gaWQgVGhlIGNvbnN0cnVjdCBJRCBvZiB0aGlzIHN0YWNrLiBJZiBgc3RhY2tOYW1lYCBpcyBub3QgZXhwbGljaXRseVxuICAgKiBkZWZpbmVkLCB0aGlzIGlkIChhbmQgYW55IHBhcmVudCBJRHMpIHdpbGwgYmUgdXNlZCB0byBkZXRlcm1pbmUgdGhlXG4gICAqIHBoeXNpY2FsIElEIG9mIHRoZSBzdGFjay5cbiAgICogQHBhcmFtIHByb3BzIFN0YWNrIHByb3BlcnRpZXMuXG4gICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU/OiBDb25zdHJ1Y3QsIGlkPzogc3RyaW5nLCBwcm9wczogU3RhY2tQcm9wcyA9IHt9KSB7XG4gICAgLy8gRm9yIHVuaXQgdGVzdCBjb252ZW5pZW5jZSBwYXJlbnRzIGFyZSBvcHRpb25hbCwgc28gYnlwYXNzIHRoZSB0eXBlIGNoZWNrIHdoZW4gY2FsbGluZyB0aGUgcGFyZW50LlxuICAgIHN1cGVyKHNjb3BlISwgaWQhKTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBTVEFDS19TWU1CT0wsIHsgdmFsdWU6IHRydWUgfSk7XG5cbiAgICB0aGlzLl9sb2dpY2FsSWRzID0gbmV3IExvZ2ljYWxJRHMoKTtcblxuICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPVxuICAgICAgcHJvcHMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPT09IHVuZGVmaW5lZCA/IHRydWUgOiBmYWxzZTtcblxuICAgIGlmIChwcm9wcy5kZXNjcmlwdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBNYXggbGVuZ3RoIDEwMjQgYnl0ZXNcbiAgICAgIC8vIFR5cGljYWxseSAyIGJ5dGVzIHBlciBjaGFyYWN0ZXIsIG1heSBiZSBtb3JlIGZvciBtb3JlIGV4b3RpYyBjaGFyYWN0ZXJzXG4gICAgICBpZiAocHJvcHMuZGVzY3JpcHRpb24ubGVuZ3RoID4gNTEyKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgU3RhY2sgZGVzY3JpcHRpb24gbXVzdCBiZSA8PSAxMDI0IGJ5dGVzLiBSZWNlaXZlZCBkZXNjcmlwdGlvbjogJyR7cHJvcHMuZGVzY3JpcHRpb259J2BcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHRoaXMudGVtcGxhdGVPcHRpb25zLmRlc2NyaXB0aW9uID0gcHJvcHMuZGVzY3JpcHRpb247XG4gICAgfVxuXG4gICAgdGhpcy5fc3RhY2tOYW1lID1cbiAgICAgIHByb3BzLnN0YWNrTmFtZSAhPT0gdW5kZWZpbmVkXG4gICAgICAgID8gcHJvcHMuc3RhY2tOYW1lXG4gICAgICAgIDogdGhpcy5nZW5lcmF0ZVN0YWNrTmFtZSgpO1xuICAgIHRoaXMudGFncyA9IG5ldyBUYWdNYW5hZ2VyKFxuICAgICAgVGFnVHlwZS5LRVlfVkFMVUUsXG4gICAgICBcImFsaXl1bjpyb3M6c3RhY2tcIixcbiAgICAgIHByb3BzLnRhZ3NcbiAgICApO1xuXG4gICAgaWYgKCFWQUxJRF9TVEFDS19OQU1FX1JFR0VYLnRlc3QodGhpcy5zdGFja05hbWUpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBTdGFjayBuYW1lIG11c3QgbWF0Y2ggdGhlIHJlZ3VsYXIgZXhwcmVzc2lvbjogJHtWQUxJRF9TVEFDS19OQU1FX1JFR0VYLnRvU3RyaW5nKCl9LCBnb3QgJyR7XG4gICAgICAgICAgdGhpcy5zdGFja05hbWVcbiAgICAgICAgfSdgXG4gICAgICApO1xuICAgIH1cblxuICAgIC8vIHRoZSBwcmVmZXJyZWQgYmVoYXZpb3IgaXMgdG8gZ2VuZXJhdGUgYSB1bmlxdWUgaWQgZm9yIHRoaXMgc3RhY2sgYW5kIHVzZVxuICAgIC8vIGl0IGFzIHRoZSBhcnRpZmFjdCBJRCBpbiB0aGUgYXNzZW1ibHkuIHRoaXMgYWxsb3dzIG11bHRpcGxlIHN0YWNrcyB0byB1c2VcbiAgICAvLyB0aGUgc2FtZSBuYW1lLiBob3dldmVyLCB0aGlzIGJlaGF2aW9yIGlzIGJyZWFraW5nIGZvciAxLnggc28gaXQncyBvbmx5XG4gICAgLy8gYXBwbGllZCB1bmRlciBhIGZlYXR1cmUgZmxhZyB3aGljaCBpcyBhcHBsaWVkIGF1dG9tYXRpY2FsbHkgZm9yIG5ld1xuICAgIC8vIHByb2plY3RzIGNyZWF0ZWQgdXNpbmcgYGNkayBpbml0YC5cbiAgICAvL1xuICAgIC8vIEFsc28gdXNlIHRoZSBuZXcgYmVoYXZpb3IgaWYgd2UgYXJlIHVzaW5nIHRoZSBuZXcgQ0kvQ0QtcmVhZHkgc3ludGhlc2l6ZXI7IHRoYXQgd2F5XG4gICAgLy8gcGVvcGxlIG9ubHkgaGF2ZSB0byBmbGlwIG9uZSBmbGFnLlxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWF4LWxpbmUtbGVuZ3RoXG4gICAgdGhpcy5hcnRpZmFjdElkID1cbiAgICAgIHRoaXMubm9kZS50cnlHZXRDb250ZXh0KGN4YXBpLkVOQUJMRV9TVEFDS19OQU1FX0RVUExJQ0FURVNfQ09OVEVYVCkgfHxcbiAgICAgIHRoaXMubm9kZS50cnlHZXRDb250ZXh0KGN4YXBpLk5FV19TVFlMRV9TVEFDS19TWU5USEVTSVNfQ09OVEVYVClcbiAgICAgICAgPyB0aGlzLmdlbmVyYXRlU3RhY2tBcnRpZmFjdElkKClcbiAgICAgICAgOiB0aGlzLnN0YWNrTmFtZTtcblxuICAgIHRoaXMudGVtcGxhdGVGaWxlID0gYCR7dGhpcy5hcnRpZmFjdElkfS50ZW1wbGF0ZS5qc29uYDtcblxuICAgIHRoaXMuc3ludGhlc2l6ZXIgPSBwcm9wcy5zeW50aGVzaXplciA/PyBuZXcgRGVmYXVsdFN0YWNrU3ludGhlc2l6ZXIoKTtcbiAgICB0aGlzLnN5bnRoZXNpemVyLmJpbmQodGhpcyk7XG4gICAgbmV3IFJvc0luZm8oXG4gICAgICB0aGlzLFxuICAgICAgUm9zSW5mby5mb3JtYXRWZXJzaW9uLFxuICAgICAgcHJvcHMudmVyc2lvbiA/IHByb3BzLnZlcnNpb24gOiBSb3NJbmZvLnYyMDE1MDkwMVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmVzb2x2ZSBhIHRva2VuaXplZCB2YWx1ZSBpbiB0aGUgY29udGV4dCBvZiB0aGUgY3VycmVudCBzdGFjay5cbiAgICovXG4gIHB1YmxpYyByZXNvbHZlKG9iajogYW55KTogYW55IHtcbiAgICByZXR1cm4gcmVzb2x2ZShvYmosIHtcbiAgICAgIHNjb3BlOiB0aGlzLFxuICAgICAgcHJlZml4OiBbXSxcbiAgICAgIHJlc29sdmVyOiBST1NfVE9LRU5fUkVTT0xWRVIsXG4gICAgICBwcmVwYXJpbmc6IGZhbHNlLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnQgYW4gb2JqZWN0LCBwb3RlbnRpYWxseSBjb250YWluaW5nIHRva2VucywgdG8gYSBKU09OIHN0cmluZ1xuICAgKi9cbiAgcHVibGljIHRvSnNvblN0cmluZyhvYmo6IGFueSwgc3BhY2U/OiBudW1iZXIpOiBzdHJpbmcge1xuICAgIHJldHVybiBSb3NUZW1wbGF0ZUxhbmcudG9KU09OKG9iaiwgc3BhY2UpLnRvU3RyaW5nKCk7XG4gIH1cblxuICAvKipcbiAgICogUmVuYW1lIGEgZ2VuZXJhdGVkIGxvZ2ljYWwgaWRlbnRpdGllc1xuICAgKlxuICAgKiBUbyBtb2RpZnkgdGhlIG5hbWluZyBzY2hlbWUgc3RyYXRlZ3ksIGV4dGVuZCB0aGUgYFN0YWNrYCBjbGFzcyBhbmRcbiAgICogb3ZlcnJpZGUgdGhlIGBhbGxvY2F0ZUxvZ2ljYWxJZGAgbWV0aG9kLlxuICAgKi9cbiAgcHVibGljIHJlbmFtZUxvZ2ljYWxJZChvbGRJZDogc3RyaW5nLCBuZXdJZDogc3RyaW5nKSB7XG4gICAgdGhpcy5fbG9naWNhbElkcy5hZGRSZW5hbWUob2xkSWQsIG5ld0lkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBbGxvY2F0ZXMgYSBzdGFjay11bmlxdWUgbG9naWNhbCBpZGVudGl0eSBmb3IgYVxuICAgKiBzcGVjaWZpYyByZXNvdXJjZS5cbiAgICpcbiAgICogVGhpcyBtZXRob2QgaXMgY2FsbGVkIHdoZW4gYSBgUm9zRWxlbWVudGAgaXMgY3JlYXRlZCBhbmQgdXNlZCB0byByZW5kZXIgdGhlXG4gICAqIGluaXRpYWwgbG9naWNhbCBpZGVudGl0eSBvZiByZXNvdXJjZXMuIExvZ2ljYWwgSUQgcmVuYW1lcyBhcmUgYXBwbGllZCBhdFxuICAgKiB0aGlzIHN0YWdlLlxuICAgKlxuICAgKiBUaGlzIG1ldGhvZCB1c2VzIHRoZSBwcm90ZWN0ZWQgbWV0aG9kIGBhbGxvY2F0ZUxvZ2ljYWxJZGAgdG8gcmVuZGVyIHRoZVxuICAgKiBsb2dpY2FsIElEIGZvciBhbiBlbGVtZW50LiBUbyBtb2RpZnkgdGhlIG5hbWluZyBzY2hlbWUsIGV4dGVuZCB0aGUgYFN0YWNrYFxuICAgKiBjbGFzcyBhbmQgb3ZlcnJpZGUgdGhpcyBtZXRob2QuXG4gICAqXG4gICAqIEBwYXJhbSBlbGVtZW50IFRoZSBST1MgZWxlbWVudCBmb3Igd2hpY2ggYSBsb2dpY2FsIGlkZW50aXR5IGlzXG4gICAqIG5lZWRlZC5cbiAgICovXG4gIHB1YmxpYyBnZXRMb2dpY2FsSWQoZWxlbWVudDogUm9zRWxlbWVudCk6IHN0cmluZyB7XG4gICAgY29uc3QgbG9naWNhbElkID0gdGhpcy5hbGxvY2F0ZUxvZ2ljYWxJZChlbGVtZW50KTtcbiAgICByZXR1cm4gdGhpcy5fbG9naWNhbElkcy5hcHBseVJlbmFtZShsb2dpY2FsSWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhIGRlcGVuZGVuY3kgYmV0d2VlbiB0aGlzIHN0YWNrIGFuZCBhbm90aGVyIHN0YWNrLlxuICAgKlxuICAgKiBUaGlzIGNhbiBiZSB1c2VkIHRvIGRlZmluZSBkZXBlbmRlbmNpZXMgYmV0d2VlbiBhbnkgdHdvIHN0YWNrcyB3aXRoaW4gYW5cbiAgICogYXBwLCBhbmQgYWxzbyBzdXBwb3J0cyBuZXN0ZWQgc3RhY2tzLlxuICAgKi9cbiAgcHVibGljIGFkZERlcGVuZGVuY3kodGFyZ2V0OiBTdGFjaywgcmVhc29uPzogc3RyaW5nKSB7XG4gICAgYWRkRGVwZW5kZW5jeSh0aGlzLCB0YXJnZXQsIHJlYXNvbik7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBzdGFja3MgdGhpcyBzdGFjayBkZXBlbmRzIG9uXG4gICAqL1xuICBwdWJsaWMgZ2V0IGRlcGVuZGVuY2llcygpOiBTdGFja1tdIHtcbiAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyh0aGlzLl9zdGFja0RlcGVuZGVuY2llcykubWFwKCh4KSA9PiB4LnN0YWNrKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgY29uY3JldGUgUk9TIHBoeXNpY2FsIHN0YWNrIG5hbWUuXG4gICAqXG4gICAqIFRoaXMgaXMgZWl0aGVyIHRoZSBuYW1lIGRlZmluZWQgZXhwbGljaXRseSBpbiB0aGUgYHN0YWNrTmFtZWAgcHJvcCBvclxuICAgKiBhbGxvY2F0ZWQgYmFzZWQgb24gdGhlIHN0YWNrJ3MgbG9jYXRpb24gaW4gdGhlIGNvbnN0cnVjdCB0cmVlLiBTdGFja3MgdGhhdFxuICAgKiBhcmUgZGlyZWN0bHkgZGVmaW5lZCB1bmRlciB0aGUgYXBwIHVzZSB0aGVpciBjb25zdHJ1Y3QgYGlkYCBhcyB0aGVpciBzdGFja1xuICAgKiBuYW1lLiBTdGFja3MgdGhhdCBhcmUgZGVmaW5lZCBkZWVwZXIgd2l0aGluIHRoZSB0cmVlIHdpbGwgdXNlIGEgaGFzaGVkIG5hbWluZ1xuICAgKiBzY2hlbWUgYmFzZWQgb24gdGhlIGNvbnN0cnVjdCBwYXRoIHRvIGVuc3VyZSB1bmlxdWVuZXNzLlxuICAgKlxuICAgKi9cbiAgcHVibGljIGdldCBzdGFja05hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhY2tOYW1lO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBJRCBvZiB0aGUgc3RhY2tcbiAgICpcbiAgICovXG4gIHB1YmxpYyBnZXQgc3RhY2tJZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiBSb3NQc2V1ZG8uc3RhY2tJZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgaWYgdGhpcyBpcyBhIG5lc3RlZCBzdGFjaywgaW4gd2hpY2ggY2FzZSBgcGFyZW50U3RhY2tgIHdpbGwgaW5jbHVkZSBhIHJlZmVyZW5jZSB0byBpdCdzIHBhcmVudC5cbiAgICovXG4gIHB1YmxpYyBnZXQgbmVzdGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm5lc3RlZFN0YWNrUmVzb3VyY2UgIT09IHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBJZiB0aGlzIGlzIGEgbmVzdGVkIHN0YWNrLCByZXR1cm5zIGl0J3MgcGFyZW50IHN0YWNrLlxuICAgKi9cbiAgcHVibGljIGdldCBuZXN0ZWRTdGFja1BhcmVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5uZXN0ZWRTdGFja1Jlc291cmNlICYmIFN0YWNrLm9mKHRoaXMubmVzdGVkU3RhY2tSZXNvdXJjZSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgcGFyZW50IG9mIGEgbmVzdGVkIHN0YWNrLlxuICAgKlxuICAgKiBAZGVwcmVjYXRlZCB1c2UgYG5lc3RlZFN0YWNrUGFyZW50YFxuICAgKi9cbiAgcHVibGljIGdldCBwYXJlbnRTdGFjaygpIHtcbiAgICByZXR1cm4gdGhpcy5uZXN0ZWRTdGFja1BhcmVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgaW1wbGljaXRseSBieSB0aGUgYGFkZERlcGVuZGVuY3lgIGhlbHBlciBmdW5jdGlvbiBpbiBvcmRlciB0b1xuICAgKiByZWFsaXplIGEgZGVwZW5kZW5jeSBiZXR3ZWVuIHR3byB0b3AtbGV2ZWwgc3RhY2tzIGF0IHRoZSBhc3NlbWJseSBsZXZlbC5cbiAgICpcbiAgICogVXNlIGBzdGFjay5hZGREZXBlbmRlbmN5YCB0byBkZWZpbmUgdGhlIGRlcGVuZGVuY3kgYmV0d2VlbiBhbnkgdHdvIHN0YWNrcyxcbiAgICogYW5kIHRha2UgaW50byBhY2NvdW50IG5lc3RlZCBzdGFjayByZWxhdGlvbnNoaXBzLlxuICAgKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIHB1YmxpYyBfYWRkQXNzZW1ibHlEZXBlbmRlbmN5KHRhcmdldDogU3RhY2ssIHJlYXNvbj86IHN0cmluZykge1xuICAgIC8vIGRlZmVuc2l2ZTogd2Ugc2hvdWxkIG5ldmVyIGdldCBoZXJlIGZvciBuZXN0ZWQgc3RhY2tzXG4gICAgaWYgKHRoaXMubmVzdGVkIHx8IHRhcmdldC5uZXN0ZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgXCJDYW5ub3QgYWRkIGFzc2VtYmx5LWxldmVsIGRlcGVuZGVuY2llcyBmb3IgbmVzdGVkIHN0YWNrc1wiXG4gICAgICApO1xuICAgIH1cblxuICAgIHJlYXNvbiA9IHJlYXNvbiB8fCBcImRlcGVuZGVuY3kgYWRkZWQgdXNpbmcgc3RhY2suYWRkRGVwZW5kZW5jeSgpXCI7XG4gICAgY29uc3QgY3ljbGUgPSB0YXJnZXQuc3RhY2tEZXBlbmRlbmN5UmVhc29ucyh0aGlzKTtcbiAgICBpZiAoY3ljbGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgJyR7dGFyZ2V0Lm5vZGUucGF0aH0nIGRlcGVuZHMgb24gJyR7dGhpcy5ub2RlLnBhdGh9JyAoJHtjeWNsZS5qb2luKFxuICAgICAgICAgIFwiLCBcIlxuICAgICAgICApfSkuIEFkZGluZyB0aGlzIGRlcGVuZGVuY3kgKCR7cmVhc29ufSkgd291bGQgY3JlYXRlIGEgY3ljbGljIHJlZmVyZW5jZS5gXG4gICAgICApO1xuICAgIH1cblxuICAgIGxldCBkZXAgPSB0aGlzLl9zdGFja0RlcGVuZGVuY2llc1t0YXJnZXQubm9kZS51bmlxdWVJZF07XG4gICAgaWYgKCFkZXApIHtcbiAgICAgIGRlcCA9IHRoaXMuX3N0YWNrRGVwZW5kZW5jaWVzW3RhcmdldC5ub2RlLnVuaXF1ZUlkXSA9IHtcbiAgICAgICAgc3RhY2s6IHRhcmdldCxcbiAgICAgICAgcmVhc29uczogW10sXG4gICAgICB9O1xuICAgIH1cblxuICAgIGRlcC5yZWFzb25zLnB1c2gocmVhc29uKTtcblxuICAgIGlmIChwcm9jZXNzLmVudi5DREtfREVCVUdfREVQUykge1xuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgIGBbQ0RLX0RFQlVHX0RFUFNdIHN0YWNrIFwiJHt0aGlzLm5vZGUucGF0aH1cIiBkZXBlbmRzIG9uIFwiJHt0YXJnZXQubm9kZS5wYXRofVwiIGJlY2F1c2U6ICR7cmVhc29ufWBcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG5hbWluZyBzY2hlbWUgdXNlZCB0byBhbGxvY2F0ZSBsb2dpY2FsIElEcy4gQnkgZGVmYXVsdCwgdXNlc1xuICAgKiB0aGUgYEhhc2hlZEFkZHJlc3NpbmdTY2hlbWVgIGJ1dCB0aGlzIG1ldGhvZCBjYW4gYmUgb3ZlcnJpZGRlbiB0byBjdXN0b21pemVcbiAgICogdGhpcyBiZWhhdmlvci5cbiAgICpcbiAgICogSW4gb3JkZXIgdG8gbWFrZSBzdXJlIGxvZ2ljYWwgSURzIGFyZSB1bmlxdWUgYW5kIHN0YWJsZSwgd2UgaGFzaCB0aGUgcmVzb3VyY2VcbiAgICogY29uc3RydWN0IHRyZWUgcGF0aCAoaS5lLiB0b3BsZXZlbC9zZWNvbmRsZXZlbC8uLi4vbXlyZXNvdXJjZSkgYW5kIGFkZCBpdCBhc1xuICAgKiBhIHN1ZmZpeCB0byB0aGUgcGF0aCBjb21wb25lbnRzIGpvaW5lZCB3aXRob3V0IGEgc2VwYXJhdG9yIChST1NcbiAgICogSURzIG9ubHkgYWxsb3cgYWxwaGFudW1lcmljIGNoYXJhY3RlcnMpLlxuICAgKlxuICAgKiBUaGUgcmVzdWx0IHdpbGwgYmU6XG4gICAqXG4gICAqICAgPHBhdGguam9pbignJyk+PG1kNShwYXRoLmpvaW4oJy8nKT5cbiAgICogICAgIFwiaHVtYW5cIiAgICAgIFwiaGFzaFwiXG4gICAqXG4gICAqIElmIHRoZSBcImh1bWFuXCIgcGFydCBvZiB0aGUgSUQgZXhjZWVkcyAyNDAgY2hhcmFjdGVycywgd2Ugc2ltcGx5IHRyaW0gaXQgc29cbiAgICogdGhlIHRvdGFsIElEIGRvZXNuJ3QgZXhjZWVkIDI1NSBjaGFyYWN0ZXIgbGltaXQuXG4gICAqXG4gICAqIFdlIG9ubHkgdGFrZSA4IGNoYXJhY3RlcnMgZnJvbSB0aGUgbWQ1IGhhc2ggKDAuMDAwMDA1IGNoYW5jZSBvZiBjb2xsaXNpb24pLlxuICAgKlxuICAgKiBTcGVjaWFsIGNhc2VzOlxuICAgKlxuICAgKiAtIElmIHRoZSBwYXRoIG9ubHkgY29udGFpbnMgYSBzaW5nbGUgY29tcG9uZW50IChpLmUuIGl0J3MgYSB0b3AtbGV2ZWxcbiAgICogICByZXNvdXJjZSksIHdlIHdvbid0IGFkZCB0aGUgaGFzaCB0byBpdC4gVGhlIGhhc2ggaXMgbm90IG5lZWRlZCBmb3JcbiAgICogICBkaXNhbWlndWF0aW9uIGFuZCBhbHNvLCBpdCBhbGxvd3MgZm9yIGEgbW9yZSBzdHJhaWdodGZvcndhcmQgbWlncmF0aW9uIGFuXG4gICAqICAgZXhpc3RpbmcgUk9TIHRlbXBsYXRlIHRvIGEgQ0RLIHN0YWNrIHdpdGhvdXQgbG9naWNhbCBJRCBjaGFuZ2VzXG4gICAqICAgKG9yIHJlbmFtZXMpLlxuICAgKiAtIEZvciBhZXN0aGV0aWMgcmVhc29ucywgaWYgdGhlIGxhc3QgY29tcG9uZW50cyBvZiB0aGUgcGF0aCBhcmUgdGhlIHNhbWVcbiAgICogICAoaS5lLiBgTDEvTDIvUGlwZWxpbmUvUGlwZWxpbmVgKSwgdGhleSB3aWxsIGJlIGRlLWR1cGxpY2F0ZWQgdG8gbWFrZSB0aGVcbiAgICogICByZXN1bHRpbmcgaHVtYW4gcG9ydGlvbiBvZiB0aGUgSUQgbW9yZSBwbGVhc2luZzogYEwxTDJQaXBlbGluZTxIQVNIPmBcbiAgICogICBpbnN0ZWFkIG9mIGBMMUwyUGlwZWxpbmVQaXBlbGluZTxIQVNIPmBcbiAgICogLSBJZiBhIGNvbXBvbmVudCBpcyBuYW1lZCBcIkRlZmF1bHRcIiBpdCB3aWxsIGJlIG9taXR0ZWQgZnJvbSB0aGUgcGF0aC4gVGhpc1xuICAgKiAgIGFsbG93cyByZWZhY3RvcmluZyBoaWdoZXIgbGV2ZWwgYWJzdHJhY3Rpb25zIGFyb3VuZCBjb25zdHJ1Y3RzIHdpdGhvdXQgYWZmZWN0aW5nXG4gICAqICAgdGhlIElEcyBvZiBhbHJlYWR5IGRlcGxveWVkIHJlc291cmNlcy5cbiAgICogLSBJZiBhIGNvbXBvbmVudCBpcyBuYW1lZCBcIlJlc291cmNlXCIgaXQgd2lsbCBiZSBvbWl0dGVkIGZyb20gdGhlIHVzZXItdmlzaWJsZVxuICAgKiAgIHBhdGgsIGJ1dCBpbmNsdWRlZCBpbiB0aGUgaGFzaC4gVGhpcyByZWR1Y2VzIHZpc3VhbCBub2lzZSBpbiB0aGUgaHVtYW4gcmVhZGFibGVcbiAgICogICBwYXJ0IG9mIHRoZSBpZGVudGlmaWVyLlxuICAgKlxuICAgKiBAcGFyYW0gcm9zRWxlbWVudCBUaGUgZWxlbWVudCBmb3Igd2hpY2ggdGhlIGxvZ2ljYWwgSUQgaXMgYWxsb2NhdGVkLlxuICAgKi9cbiAgcHJvdGVjdGVkIGFsbG9jYXRlTG9naWNhbElkKHJvc0VsZW1lbnQ6IFJvc0VsZW1lbnQpOiBzdHJpbmcge1xuICAgIGNvbnN0IHNjb3BlcyA9IHJvc0VsZW1lbnQubm9kZS5zY29wZXM7XG4gICAgY29uc3Qgc3RhY2tJbmRleCA9IHNjb3Blcy5pbmRleE9mKHJvc0VsZW1lbnQuc3RhY2spO1xuICAgIGNvbnN0IHBhdGhDb21wb25lbnRzID0gc2NvcGVzLnNsaWNlKHN0YWNrSW5kZXggKyAxKS5tYXAoKHgpID0+IHgubm9kZS5pZCk7XG4gICAgcmV0dXJuIG1ha2VVbmlxdWVJZChwYXRoQ29tcG9uZW50cyk7XG4gIH1cblxuICAvKipcbiAgICogVmFsaWRhdGUgc3RhY2sgbmFtZVxuICAgKlxuICAgKiBST1Mgc3RhY2sgbmFtZXMgY2FuIGluY2x1ZGUgZGFzaGVzIGluIGFkZGl0aW9uIHRvIHRoZSByZWd1bGFyIGlkZW50aWZpZXJcbiAgICogY2hhcmFjdGVyIGNsYXNzZXMsIGFuZCB3ZSBkb24ndCBhbGxvdyBvbmUgb2YgdGhlIG1hZ2ljIG1hcmtlcnMuXG4gICAqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgcHJvdGVjdGVkIF92YWxpZGF0ZUlkKG5hbWU6IHN0cmluZykge1xuICAgIGlmIChuYW1lICYmICFWQUxJRF9TVEFDS19OQU1FX1JFR0VYLnRlc3QobmFtZSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYFN0YWNrIG5hbWUgbXVzdCBtYXRjaCB0aGUgcmVndWxhciBleHByZXNzaW9uOiAke1ZBTElEX1NUQUNLX05BTUVfUkVHRVgudG9TdHJpbmcoKX0sIGdvdCAnJHtuYW1lfSdgXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplKHNlc3Npb246IElTeW50aGVzaXNTZXNzaW9uKTogdm9pZCB7XG4gICAgLy8gSW4gcHJpbmNpcGxlLCBzdGFjayBzeW50aGVzaXMgaXMgZGVsZWdhdGVkIHRvIHRoZVxuICAgIC8vIFN0YWNrU3ludGhlc2lzIG9iamVjdC5cbiAgICAvL1xuICAgIC8vIEhvd2V2ZXIsIHNvbWUgcGFydHMgb2Ygc3ludGhlc2lzIGN1cnJlbnRseSB1c2Ugc29tZSBwcml2YXRlXG4gICAgLy8gbWV0aG9kcyBvbiBTdGFjaywgYW5kIEkgZG9uJ3QgcmVhbGx5IHNlZSB0aGUgdmFsdWUgaW4gcmVmYWN0b3JpbmdcbiAgICAvLyB0aGlzIHJpZ2h0IG5vdywgc28gc29tZSBwYXJ0cyBzdGlsbCBoYXBwZW4gaGVyZS5cbiAgICBjb25zdCBidWlsZGVyID0gc2Vzc2lvbi5hc3NlbWJseTtcblxuICAgIC8vIHdyaXRlIHRoZSBST1MgdGVtcGxhdGUgYXMgYSBKU09OIGZpbGVcbiAgICBjb25zdCBvdXRQYXRoID0gcGF0aC5qb2luKGJ1aWxkZXIub3V0ZGlyLCB0aGlzLnRlbXBsYXRlRmlsZSk7XG4gICAgY29uc3QgdGV4dCA9IEpTT04uc3RyaW5naWZ5KHRoaXMuX3RvUm9zVGVtcGxhdGUoKSwgdW5kZWZpbmVkLCAyKTtcbiAgICBmcy53cml0ZUZpbGVTeW5jKG91dFBhdGgsIHRleHQpO1xuXG4gICAgLy8gRGVsZWdhdGUgYWRkaW5nIGFydGlmYWN0cyB0byB0aGUgU3ludGhlc2l6ZXJcbiAgICB0aGlzLnN5bnRoZXNpemVyLnN5bnRoZXNpemVTdGFja0FydGlmYWN0cyhzZXNzaW9uKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBSb3NUZW1wbGF0ZSB0ZW1wbGF0ZSBmb3IgdGhpcyBzdGFjayBieSB0cmF2ZXJzaW5nXG4gICAqIHRoZSB0cmVlIGFuZCBpbnZva2luZyBfdG9Sb3NUZW1wbGF0ZSgpIG9uIGFsbCBFbnRpdHkgb2JqZWN0cy5cbiAgICpcbiAgICogQGludGVybmFsXG4gICAqL1xuICBwcm90ZWN0ZWQgX3RvUm9zVGVtcGxhdGUoKSB7XG4gICAgY29uc3QgdGVtcGxhdGU6IGFueSA9IHtcbiAgICAgIERlc2NyaXB0aW9uOiB0aGlzLnRlbXBsYXRlT3B0aW9ucy5kZXNjcmlwdGlvbixcbiAgICAgIE1ldGFkYXRhOiB0aGlzLnRlbXBsYXRlT3B0aW9ucy5tZXRhZGF0YSxcbiAgICB9O1xuXG4gICAgY29uc3QgZWxlbWVudHMgPSByb3NFbGVtZW50cyh0aGlzKTtcbiAgICBjb25zdCBmcmFnbWVudHMgPSBlbGVtZW50cy5tYXAoKGUpID0+IHRoaXMucmVzb2x2ZShlLl90b1Jvc1RlbXBsYXRlKCkpKTtcblxuICAgIC8vIG1lcmdlIGluIGFsbCBST1MgZnJhZ21lbnRzIGNvbGxlY3RlZCBmcm9tIHRoZSB0cmVlXG4gICAgZm9yIChjb25zdCBmcmFnbWVudCBvZiBmcmFnbWVudHMpIHtcbiAgICAgIG1lcmdlKHRlbXBsYXRlLCBmcmFnbWVudCk7XG4gICAgfVxuXG4gICAgLy8gcmVzb2x2ZSBhbGwgdG9rZW5zIGFuZCByZW1vdmUgYWxsIGVtcHRpZXNcbiAgICBjb25zdCByZXQgPSB0aGlzLnJlc29sdmUodGVtcGxhdGUpIHx8IHt9O1xuXG4gICAgdGhpcy5fbG9naWNhbElkcy5hc3NlcnRBbGxSZW5hbWVzQXBwbGllZCgpO1xuXG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXByZWNhdGVkLlxuICAgKlxuICAgKiBAcmV0dXJucyByZWZlcmVuY2UgaXRzZWxmIHdpdGhvdXQgYW55IGNoYW5nZVxuICAgKiBAZGVwcmVjYXRlZCBjcm9zcyByZWZlcmVuY2UgaGFuZGxpbmcgaGFzIGJlZW4gbW92ZWQgdG8gYEFwcC5wcmVwYXJlKClgLlxuICAgKi9cbiAgcHJvdGVjdGVkIHByZXBhcmVDcm9zc1JlZmVyZW5jZShcbiAgICBfc291cmNlU3RhY2s6IFN0YWNrLFxuICAgIHJlZmVyZW5jZTogUmVmZXJlbmNlXG4gICk6IElSZXNvbHZhYmxlIHtcbiAgICByZXR1cm4gcmVmZXJlbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIHdoZXRoZXIgdGhpcyBzdGFjayBoYXMgYSAodHJhbnNpdGl2ZSkgZGVwZW5kZW5jeSBvbiBhbm90aGVyIHN0YWNrXG4gICAqXG4gICAqIFJldHVybnMgdGhlIGxpc3Qgb2YgcmVhc29ucyBvbiB0aGUgZGVwZW5kZW5jeSBwYXRoLCBvciB1bmRlZmluZWRcbiAgICogaWYgdGhlcmUgaXMgbm8gZGVwZW5kZW5jeS5cbiAgICovXG4gIHByaXZhdGUgc3RhY2tEZXBlbmRlbmN5UmVhc29ucyhvdGhlcjogU3RhY2spOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCB7XG4gICAgaWYgKHRoaXMgPT09IG90aGVyKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIGZvciAoY29uc3QgZGVwIG9mIE9iamVjdC52YWx1ZXModGhpcy5fc3RhY2tEZXBlbmRlbmNpZXMpKSB7XG4gICAgICBjb25zdCByZXQgPSBkZXAuc3RhY2suc3RhY2tEZXBlbmRlbmN5UmVhc29ucyhvdGhlcik7XG4gICAgICBpZiAocmV0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIFsuLi5kZXAucmVhc29ucywgLi4ucmV0XTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxjdWxhdGUgdGhlIHN0YWNrIG5hbWUgYmFzZWQgb24gdGhlIGNvbnN0cnVjdCBwYXRoXG4gICAqXG4gICAqIFRoZSBzdGFjayBuYW1lIGlzIHRoZSBuYW1lIHVuZGVyIHdoaWNoIHdlJ2xsIGRlcGxveSB0aGUgc3RhY2ssXG4gICAqIGFuZCBpbmNvcnBvcmF0ZXMgY29udGFpbmluZyBTdGFnZSBuYW1lcyBieSBkZWZhdWx0LlxuICAgKlxuICAgKiBHZW5lcmFsbHkgdGhpcyBsb29rcyBhIGxvdCBsaWtlIGhvdyBsb2dpY2FsIElEcyBhcmUgY2FsY3VsYXRlZC5cbiAgICogVGhlIHN0YWNrIG5hbWUgaXMgY2FsY3VsYXRlZCBiYXNlZCBvbiB0aGUgY29uc3RydWN0IHJvb3QgcGF0aCxcbiAgICogYXMgZm9sbG93czpcbiAgICpcbiAgICogLSBQYXRoIGlzIGNhbGN1bGF0ZWQgd2l0aCByZXNwZWN0IHRvIGNvbnRhaW5pbmcgQXBwIG9yIFN0YWdlIChpZiBhbnkpXG4gICAqIC0gSWYgdGhlIHBhdGggaXMgb25lIGNvbXBvbmVudCBsb25nIGp1c3QgdXNlIHRoYXQgY29tcG9uZW50LCBvdGhlcndpc2VcbiAgICogICBjb21iaW5lIHRoZW0gd2l0aCBhIGhhc2guXG4gICAqXG4gICAqIFNpbmNlIHRoZSBoYXNoIGlzIHF1aXRlIHVnbHkgYW5kIHdlJ2QgbGlrZSB0byBhdm9pZCBpdCBpZiBwb3NzaWJsZSAtLSBidXRcbiAgICogd2UgY2FuJ3QgYW55bW9yZSBpbiB0aGUgZ2VuZXJhbCBjYXNlIHNpbmNlIGl0IGhhcyBiZWVuIHdyaXR0ZW4gaW50byBsZWdhY3lcbiAgICogc3RhY2tzLiBUaGUgaW50cm9kdWN0aW9uIG9mIFN0YWdlcyBtYWtlcyBpdCBwb3NzaWJsZSB0byBtYWtlIHRoaXMgbmljZXIgaG93ZXZlci5cbiAgICogV2hlbiBhIFN0YWNrIGlzIG5lc3RlZCBpbnNpZGUgYSBTdGFnZSwgd2UgdXNlIHRoZSBwYXRoIGNvbXBvbmVudHMgYmVsb3cgdGhlXG4gICAqIFN0YWdlLCBhbmQgcHJlZml4IHRoZSBwYXRoIGNvbXBvbmVudHMgb2YgdGhlIFN0YWdlIGJlZm9yZSBpdC5cbiAgICovXG4gIHByaXZhdGUgZ2VuZXJhdGVTdGFja05hbWUoKSB7XG4gICAgY29uc3QgYXNzZW1ibHkgPSBTdGFnZS5vZih0aGlzKTtcbiAgICBjb25zdCBwcmVmaXggPVxuICAgICAgYXNzZW1ibHkgJiYgYXNzZW1ibHkuc3RhZ2VOYW1lID8gYCR7YXNzZW1ibHkuc3RhZ2VOYW1lfS1gIDogXCJcIjtcbiAgICByZXR1cm4gYCR7cHJlZml4fSR7dGhpcy5nZW5lcmF0ZVN0YWNrSWQoYXNzZW1ibHkpfWA7XG4gIH1cblxuICAvKipcbiAgICogVGhlIGFydGlmYWN0IElEIGZvciB0aGlzIHN0YWNrXG4gICAqXG4gICAqIFN0YWNrIGFydGlmYWN0IElEIGlzIHVuaXF1ZSB3aXRoaW4gdGhlIEFwcCdzIENsb3VkIEFzc2VtYmx5LlxuICAgKi9cbiAgcHJpdmF0ZSBnZW5lcmF0ZVN0YWNrQXJ0aWZhY3RJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZW5lcmF0ZVN0YWNrSWQodGhpcy5ub2RlLnJvb3QpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdlbmVyYXRlIGFuIElEIHdpdGggcmVzcGVjdCB0byB0aGUgZ2l2ZW4gY29udGFpbmVyIGNvbnN0cnVjdC5cbiAgICovXG4gIHByaXZhdGUgZ2VuZXJhdGVTdGFja0lkKGNvbnRhaW5lcjogSUNvbnN0cnVjdCB8IHVuZGVmaW5lZCkge1xuICAgIGNvbnN0IHJvb3RQYXRoID0gcm9vdFBhdGhUbyh0aGlzLCBjb250YWluZXIpO1xuICAgIGNvbnN0IGlkcyA9IHJvb3RQYXRoLm1hcCgoYykgPT4gYy5ub2RlLmlkKTtcblxuICAgIC8vIEluIHVuaXQgdGVzdHMgb3VyIFN0YWNrICh3aGljaCBpcyB0aGUgb25seSBjb21wb25lbnQpIG1heSBub3QgaGF2ZSBhblxuICAgIC8vIGlkLCBzbyBpbiB0aGF0IGNhc2UganVzdCBwcmV0ZW5kIGl0J3MgXCJTdGFja1wiLlxuICAgIGlmIChpZHMubGVuZ3RoID09PSAxICYmICFpZHNbMF0pIHtcbiAgICAgIGlkc1swXSA9IFwiU3RhY2tcIjtcbiAgICB9XG5cbiAgICByZXR1cm4gbWFrZVN0YWNrTmFtZShpZHMpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1lcmdlKHRlbXBsYXRlOiBhbnksIGZyYWdtZW50OiBhbnkpOiB2b2lkIHtcbiAgZm9yIChjb25zdCBzZWN0aW9uIG9mIE9iamVjdC5rZXlzKGZyYWdtZW50KSkge1xuICAgIGNvbnN0IHNyYyA9IGZyYWdtZW50W3NlY3Rpb25dO1xuXG4gICAgLy8gY3JlYXRlIHRvcC1sZXZlbCBzZWN0aW9uIGlmIGl0IGRvZXNuJ3QgZXhpc3RcbiAgICBjb25zdCBkZXN0ID0gdGVtcGxhdGVbc2VjdGlvbl07XG4gICAgaWYgKCFkZXN0KSB7XG4gICAgICB0ZW1wbGF0ZVtzZWN0aW9uXSA9IHNyYztcbiAgICB9IGVsc2Uge1xuICAgICAgdGVtcGxhdGVbc2VjdGlvbl0gPSBtZXJnZVNlY3Rpb24oc2VjdGlvbiwgZGVzdCwgc3JjKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gbWVyZ2VTZWN0aW9uKHNlY3Rpb246IHN0cmluZywgdmFsMTogYW55LCB2YWwyOiBhbnkpOiBhbnkge1xuICBzd2l0Y2ggKHNlY3Rpb24pIHtcbiAgICBjYXNlIFwiRGVzY3JpcHRpb25cIjpcbiAgICAgIHJldHVybiBgJHt2YWwxfVxcbiR7dmFsMn1gO1xuICAgIGNhc2UgXCJSZXNvdXJjZXNcIjpcbiAgICBjYXNlIFwiQ29uZGl0aW9uc1wiOlxuICAgIGNhc2UgXCJQYXJhbWV0ZXJzXCI6XG4gICAgY2FzZSBcIk91dHB1dHNcIjpcbiAgICBjYXNlIFwiTWFwcGluZ3NcIjpcbiAgICBjYXNlIFwiTWV0YWRhdGFcIjpcbiAgICAgIHJldHVybiBtZXJnZU9iamVjdHNXaXRob3V0RHVwbGljYXRlcyhzZWN0aW9uLCB2YWwxLCB2YWwyKTtcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgQ0RLIGRvZXNuJ3Qga25vdyBob3cgdG8gbWVyZ2UgdHdvIGluc3RhbmNlcyBvZiB0aGUgUk9TIHRlbXBsYXRlIHNlY3Rpb24gJyR7c2VjdGlvbn0nIC0gYCArXG4gICAgICAgICAgXCJwbGVhc2UgcmVtb3ZlIG9uZSBvZiB0aGVtIGZyb20geW91ciBjb2RlXCJcbiAgICAgICk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWVyZ2VPYmplY3RzV2l0aG91dER1cGxpY2F0ZXMoXG4gIHNlY3Rpb246IHN0cmluZyxcbiAgZGVzdDogYW55LFxuICBzcmM6IGFueVxuKTogYW55IHtcbiAgaWYgKHR5cGVvZiBkZXN0ICE9PSBcIm9iamVjdFwiKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RpbmcgJHtKU09OLnN0cmluZ2lmeShkZXN0KX0gdG8gYmUgYW4gb2JqZWN0YCk7XG4gIH1cbiAgaWYgKHR5cGVvZiBzcmMgIT09IFwib2JqZWN0XCIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGluZyAke0pTT04uc3RyaW5naWZ5KHNyYyl9IHRvIGJlIGFuIG9iamVjdGApO1xuICB9XG5cbiAgLy8gYWRkIGFsbCBlbnRpdGllcyBmcm9tIHNvdXJjZSBzZWN0aW9uIHRvIGRlc3RpbmF0aW9uIHNlY3Rpb25cbiAgZm9yIChjb25zdCBpZCBvZiBPYmplY3Qua2V5cyhzcmMpKSB7XG4gICAgaWYgKGlkIGluIGRlc3QpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgc2VjdGlvbiAnJHtzZWN0aW9ufScgYWxyZWFkeSBjb250YWlucyAnJHtpZH0nYCk7XG4gICAgfVxuICAgIGRlc3RbaWRdID0gc3JjW2lkXTtcbiAgfVxuXG4gIHJldHVybiBkZXN0O1xufVxuXG4vKipcbiAqIFJPUyB0ZW1wbGF0ZSBvcHRpb25zIGZvciBhIHN0YWNrLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIElUZW1wbGF0ZU9wdGlvbnMge1xuICAvKipcbiAgICogR2V0cyBvciBzZXRzIHRoZSBkZXNjcmlwdGlvbiBvZiB0aGlzIHN0YWNrLlxuICAgKiBJZiBwcm92aWRlZCwgaXQgd2lsbCBiZSBpbmNsdWRlZCBpbiB0aGUgUk9TIHRlbXBsYXRlJ3MgXCJEZXNjcmlwdGlvblwiIGF0dHJpYnV0ZS5cbiAgICovXG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBNZXRhZGF0YSBhc3NvY2lhdGVkIHdpdGggdGhlIFJPUyB0ZW1wbGF0ZS5cbiAgICovXG4gIG1ldGFkYXRhPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfTtcbn1cblxuLyoqXG4gKiBDb2xsZWN0IGFsbCByb3NFbGVtZW50cyBmcm9tIGEgU3RhY2suXG4gKlxuICogQHBhcmFtIG5vZGUgUm9vdCBub2RlIHRvIGNvbGxlY3QgYWxsIHJvc0VsZW1lbnRzIGZyb21cbiAqIEBwYXJhbSBpbnRvIEFycmF5IHRvIGFwcGVuZCByb3NFbGVtZW50cyB0b1xuICogQHJldHVybnMgVGhlIHNhbWUgYXJyYXkgYXMgaXMgYmVpbmcgY29sbGVjdGVkIGludG9cbiAqL1xuZnVuY3Rpb24gcm9zRWxlbWVudHMobm9kZTogSUNvbnN0cnVjdCwgaW50bzogUm9zRWxlbWVudFtdID0gW10pOiBSb3NFbGVtZW50W10ge1xuICBpZiAoUm9zRWxlbWVudC5pc1Jvc0VsZW1lbnQobm9kZSkpIHtcbiAgICBpbnRvLnB1c2gobm9kZSk7XG4gIH1cblxuICBmb3IgKGNvbnN0IGNoaWxkIG9mIG5vZGUubm9kZS5jaGlsZHJlbikge1xuICAgIC8vIERvbid0IHJlY3Vyc2UgaW50byBhIHN1YnN0YWNrXG4gICAgaWYgKFN0YWNrLmlzU3RhY2soY2hpbGQpKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICByb3NFbGVtZW50cyhjaGlsZCwgaW50byk7XG4gIH1cblxuICByZXR1cm4gaW50bztcbn1cblxuLyoqXG4gKiBSZXR1cm4gdGhlIGNvbnN0cnVjdCByb290IHBhdGggb2YgdGhlIGdpdmVuIGNvbnN0cnVjdCByZWxhdGl2ZSB0byB0aGUgZ2l2ZW4gYW5jZXN0b3JcbiAqXG4gKiBJZiBubyBhbmNlc3RvciBpcyBnaXZlbiBvciB0aGUgYW5jZXN0b3IgaXMgbm90IGZvdW5kLCByZXR1cm4gdGhlIGVudGlyZSByb290IHBhdGguXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByb290UGF0aFRvKFxuICBjb25zdHJ1Y3Q6IElDb25zdHJ1Y3QsXG4gIGFuY2VzdG9yPzogSUNvbnN0cnVjdFxuKTogSUNvbnN0cnVjdFtdIHtcbiAgY29uc3Qgc2NvcGVzID0gY29uc3RydWN0Lm5vZGUuc2NvcGVzO1xuICBmb3IgKGxldCBpID0gc2NvcGVzLmxlbmd0aCAtIDI7IGkgPj0gMDsgaS0tKSB7XG4gICAgaWYgKHNjb3Blc1tpXSA9PT0gYW5jZXN0b3IpIHtcbiAgICAgIHJldHVybiBzY29wZXMuc2xpY2UoaSArIDEpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gc2NvcGVzO1xufVxuXG4vKipcbiAqIG1ha2VVbmlxdWVJZCwgc3BlY2lhbGl6ZWQgZm9yIFN0YWNrIG5hbWVzXG4gKlxuICogU3RhY2sgbmFtZXMgbWF5IGNvbnRhaW4gJy0nLCBzbyB3ZSBhbGxvdyB0aGF0IGNoYXJhY3RlciBpZiB0aGUgc3RhY2sgbmFtZVxuICogaGFzIG9ubHkgb25lIGNvbXBvbmVudC4gT3RoZXJ3aXNlIHdlIGZhbGwgYmFjayB0byB0aGUgcmVndWxhciBcIm1ha2VVbmlxdWVJZFwiXG4gKiBiZWhhdmlvci5cbiAqL1xuZnVuY3Rpb24gbWFrZVN0YWNrTmFtZShjb21wb25lbnRzOiBzdHJpbmdbXSkge1xuICBpZiAoY29tcG9uZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICByZXR1cm4gY29tcG9uZW50c1swXTtcbiAgfVxuICByZXR1cm4gbWFrZVVuaXF1ZUlkKGNvbXBvbmVudHMpO1xufVxuXG4vLyBUaGVzZSBpbXBvcnRzIGhhdmUgdG8gYmUgYXQgdGhlIGVuZCB0byBwcmV2ZW50IGNpcmN1bGFyIGltcG9ydHNcbmltcG9ydCB7IFJvc0VsZW1lbnQgfSBmcm9tIFwiLi9yb3MtZWxlbWVudFwiO1xuaW1wb3J0IHsgUm9zUHNldWRvIH0gZnJvbSBcIi4vcm9zLXBzZXVkb1wiO1xuaW1wb3J0IHsgUm9zUmVzb3VyY2UgfSBmcm9tIFwiLi9yb3MtcmVzb3VyY2VcIjtcbmltcG9ydCB7IFRhZ1R5cGUgfSBmcm9tIFwiLi90YWctbWFuYWdlclwiO1xuaW1wb3J0IHsgYWRkRGVwZW5kZW5jeSB9IGZyb20gXCIuL2RlcHNcIjtcbmltcG9ydCB7IFJlZmVyZW5jZSB9IGZyb20gXCIuL3JlZmVyZW5jZVwiO1xuaW1wb3J0IHsgSVJlc29sdmFibGUgfSBmcm9tIFwiLi9yZXNvbHZhYmxlXCI7XG5pbXBvcnQge1xuICBEZWZhdWx0U3RhY2tTeW50aGVzaXplcixcbiAgSVN0YWNrU3ludGhlc2l6ZXIsXG59IGZyb20gXCIuL3N0YWNrLXN5bnRoZXNpemVyc1wiO1xuaW1wb3J0IHsgU3RhZ2UgfSBmcm9tIFwiLi9zdGFnZVwiO1xuaW1wb3J0IHsgSVRhZ2dhYmxlLCBUYWdNYW5hZ2VyIH0gZnJvbSBcIi4vdGFnLW1hbmFnZXJcIjtcblxuaW50ZXJmYWNlIFN0YWNrRGVwZW5kZW5jeSB7XG4gIHN0YWNrOiBTdGFjaztcbiAgcmVhc29uczogc3RyaW5nW107XG59XG4iXX0=