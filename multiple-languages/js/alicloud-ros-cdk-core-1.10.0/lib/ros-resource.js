"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RosResource = void 0;
const ros_resource_policy_1 = require("./ros-resource-policy");
const util_1 = require("./util");
const tag_manager_1 = require("./tag-manager");
const deps_1 = require("./deps");
const ros_reference_1 = require("./private/ros-reference");
const ros_removal_policy_1 = require("./ros-removal-policy");
const ros_element_1 = require("./ros-element");
/**
 * Represents a ROS resource.
 */
class RosResource extends ros_element_1.RosRefElement {
    /**
     * Check whether the given construct is a RosResource
     */
    static isRosResource(construct) {
        return construct.rosResourceType !== undefined;
    }
    /**
     * Creates a resource construct.
     * @param rosResourceType The ROS type of this resource (e.g. ALIYUN::ECS::Instance)
     */
    constructor(scope, id, props) {
        super(scope, id);
        // MAINTAINERS NOTE: this class serves as the base class for the generated L1
        // ("ALIYUN") resources (such as `ecs.Instance`). These resources will have a
        // property for each ROS property of the resource. This means that
        // if at some point in the future a property is introduced with a name similar
        // to one of the properties here, it will be "masked" by the derived class. To
        // that end, we prefix all properties in this class with `rosXxx` with the
        // hope to avoid those conflicts in the future.
        /**
         * Options for this resource, such as condition, update policy etc.
         */
        this.rosOptions = {};
        /**
         * An object to be merged on top of the entire resource definition.
         */
        this.rawOverrides = {};
        /**
         * Logical IDs of dependencies.
         *
         * Is filled during prepare().
         */
        this.dependsOn = new Set();
        this.rosDependsOn = new Set();
        this.id = id;
        if (!props.type) {
            throw new Error("The `type` property is required");
        }
        this.rosResourceType = props.type;
        this._rosProperties = props.properties || {};
    }
    /**
     * Sets the deletion policy of the resource based on the removal policy specified.
     */
    applyRemovalPolicy(policy, options = {}) {
        policy = policy || options.defaultPolicy || ros_removal_policy_1.RemovalPolicy.RETAIN;
        let deletionPolicy;
        switch (policy) {
            case ros_removal_policy_1.RemovalPolicy.DESTROY:
                deletionPolicy = ros_resource_policy_1.RosDeletionPolicy.DELETE;
                break;
            case ros_removal_policy_1.RemovalPolicy.RETAIN:
                deletionPolicy = ros_resource_policy_1.RosDeletionPolicy.RETAIN;
                break;
            default:
                throw new Error(`Invalid removal policy: ${policy}`);
        }
        this.rosOptions.deletionPolicy = deletionPolicy;
        // if (options.applyToUpdateReplacePolicy !== false) {
        //   this.rosOptions.updateReplacePolicy = deletionPolicy;
        // }
    }
    /**
     * Returns a token for an runtime attribute of this resource.
     * Ideally, use generated attribute accessors (e.g. `resource.arn`), but this can be used for future compatibility
     * in case there is no generated attribute.
     * @param attributeName The name of the attribute.
     */
    getAtt(attributeName) {
        return ros_reference_1.RosReference.for(this, attributeName);
    }
    /**
     * Adds an override to the synthesized ROS resource. To add a
     * property override, either use `addPropertyOverride` or prefix `path` with
     * "Properties." (i.e. `Properties.TopicName`).
     *
     * If the override is nested, separate each nested level using a dot (.) in the path parameter.
     * If there is an array as part of the nesting, specify the index in the path.
     *
     * For example,
     * ```typescript
     * addOverride('Properties.GlobalSecondaryIndexes.0.Projection.NonKeyAttributes', ['myattribute'])
     * addOverride('Properties.GlobalSecondaryIndexes.1.ProjectionType', 'INCLUDE')
     * ```
     * would add the overrides
     * ```json
     * "Properties": {
     *   "GlobalSecondaryIndexes": [
     *     {
     *       "Projection": {
     *         "NonKeyAttributes": [ "myattribute" ]
     *         ...
     *       }
     *       ...
     *     },
     *     {
     *       "ProjectionType": "INCLUDE"
     *       ...
     *     },
     *   ]
     *   ...
     * }
     * ```
     *
     * @param path - The path of the property, you can use dot notation to
     *        override values in complex types. Any intermdediate keys
     *        will be created as needed.
     * @param value - The value. Could be primitive or complex.
     */
    addOverride(path, value) {
        const parts = path.split(".");
        let curr = this.rawOverrides;
        while (parts.length > 1) {
            const key = parts.shift();
            // if we can't recurse further or the previous value is not an
            // object overwrite it with an object.
            const isObject = curr[key] != null &&
                typeof curr[key] === "object" &&
                !Array.isArray(curr[key]);
            if (!isObject) {
                curr[key] = {};
            }
            curr = curr[key];
        }
        const lastKey = parts.shift();
        curr[lastKey] = value;
    }
    /**
     * Syntactic sugar for `addOverride(path, undefined)`.
     * @param path The path of the value to delete
     */
    addDeletionOverride(path) {
        this.addOverride(path, undefined);
    }
    addMetaData(key, value) {
        if (!this.rosOptions.metadata) {
            this.rosOptions.metadata = {};
        }
        this.rosOptions.metadata[key] = value;
    }
    addDesc(desc) {
        this.rosOptions.description = desc;
    }
    fetchDesc() {
        return this.rosOptions.description;
    }
    addCondition(con) {
        this.rosOptions.condition = con;
    }
    fetchCondition() {
        return this.rosOptions.condition;
    }
    addCount(count) {
        this.rosOptions.count = count;
    }
    /**
     * Adds an override to a resource property.
     *
     * Syntactic sugar for `addOverride("Properties.<...>", value)`.
     *
     * @param propertyPath The path of the property
     * @param value The value
     */
    addPropertyOverride(propertyPath, value) {
        this.addOverride(`Properties.${propertyPath}`, value);
    }
    /**
     * Adds an override that deletes the value of a property from the resource definition.
     * @param propertyPath The path to the property.
     */
    addPropertyDeletionOverride(propertyPath) {
        this.addPropertyOverride(propertyPath, undefined);
    }
    /**
     * Indicates that this resource depends on another resource and cannot be
     * provisioned unless the other resource has been successfully provisioned.
     *
     * This can be used for resources across stacks (or nested stack) boundaries
     * and the dependency will automatically be transferred to the relevant scope.
     */
    addDependsOn(target) {
        (0, deps_1.addDependency)(this, target, `"${this.node.path}" depends on "${target.node.path}"`);
    }
    /**
     * @returns a string representation of this resource
     */
    toString() {
        return `${super.toString()} [${this.rosResourceType}]`;
    }
    /**
     * Called by the `addDependency` helper function in order to realize a direct
     * dependency between two resources that are directly defined in the same
     * stacks.
     *
     * Use `resource.addDependsOn` to define the dependency between two resources,
     * which also takes stack boundaries into account.
     *
     * @internal
     */
    _addResourceDependency(target) {
        this.dependsOn.add(target);
    }
    addRosDependency(target) {
        // target.forEach(x => this.rosDependsOn.add(x));
        this.rosDependsOn.add(target);
    }
    fetchRosDependency() {
        return Array.from(this.rosDependsOn);
    }
    /**
     * Emits ROS template for this resource.
     * @internal
     */
    _toRosTemplate() {
        try {
            const ret = {
                Resources: {
                    // Post-Resolve operation since otherwise deepMerge is going to mix values into
                    // the Token objects returned by ignoreEmpty.
                    [this.id]: new util_1.PostResolveToken({
                        Type: this.rosResourceType,
                        Properties: (0, util_1.ignoreEmpty)(this.rosProperties),
                        DependsOn: (0, util_1.ignoreEmpty)(renderRosDependsOn(this.rosDependsOn)),
                        // UpdatePolicy: capitalizePropertyNames(this, this.rosOptions.updatePolicy),
                        // UpdateReplacePolicy: capitalizePropertyNames(this, this.rosOptions.updateReplacePolicy),
                        DeletionPolicy: (0, util_1.capitalizePropertyNames)(this, this.rosOptions.deletionPolicy),
                        Metadata: (0, util_1.ignoreEmpty)(this.rosOptions.metadata),
                        Description: (0, util_1.ignoreEmpty)(this.rosOptions.description),
                        Condition: this.rosOptions.condition &&
                            this.rosOptions.condition.logicalId,
                        Count: (0, util_1.ignoreEmpty)(this.rosOptions.count),
                    }, (props) => {
                        const renderedProps = this.renderProperties(props.Properties || {});
                        props.Properties =
                            renderedProps &&
                                (Object.values(renderedProps).find((v) => !!v)
                                    ? renderedProps
                                    : undefined);
                        return deepMerge(props, this.rawOverrides);
                    }),
                },
            };
            return ret;
        }
        catch (e) {
            if (e instanceof Error) {
                // Change message
                e.message = `While synthesizing ${this.node.path}: ${e.message}`;
                // Adjust stack trace (make it look like node built it, too...)
                const trace = this.creationStack;
                if (trace) {
                    const creationStack = ["--- resource created at ---", ...trace].join("\n  at ");
                    const problemTrace = e.stack ? e.stack.substr(e.stack.indexOf(e.message) + e.message.length) : '';
                    e.stack = `${e.message}\n  ${creationStack}\n  --- problem discovered at ---${problemTrace}`;
                }
            }
            // Re-throw
            throw e;
        }
        function renderRosDependsOn(rosDependsOn) {
            return Array.from(rosDependsOn);
        }
    }
    get rosProperties() {
        const props = this._rosProperties || {};
        if (tag_manager_1.TagManager.isTaggable(this)) {
            const tagsProp = {};
            tagsProp[this.tags.tagPropertyName] = this.tags.renderTags();
            return deepMerge(props, tagsProp);
        }
        return props;
    }
    renderProperties(props) {
        return props;
    }
    /**
     * Return properties modified after initiation
     *
     * Resources that expose mutable properties should override this function to
     * collect and return the properties object for this resource.
     */
    get updatedProperites() {
        return this._rosProperties;
    }
    validateProperties(_properties) {
        // Nothing
    }
}
exports.RosResource = RosResource;
/**
 * Merges `source` into `target`, overriding any existing values.
 * `null`s will cause a value to be deleted.
 */
function deepMerge(target, ...sources) {
    for (const source of sources) {
        if (typeof source !== "object" || typeof target !== "object") {
            throw new Error(`Invalid usage. Both source (${JSON.stringify(source)}) and target (${JSON.stringify(target)}) must be objects`);
        }
        for (const key of Object.keys(source)) {
            const value = source[key];
            if (typeof value === "object" && value != null && !Array.isArray(value)) {
                // if the value at the target is not an object, override it with an
                // object so we can continue the recursion
                if (typeof target[key] !== "object") {
                    target[key] = {};
                }
                deepMerge(target[key], value);
                // if the result of the merge is an empty object, it's because the
                // eventual value we assigned is `undefined`, and there are no
                // sibling concrete values alongside, so we can delete this tree.
                const output = target[key];
                if (typeof output === "object" && Object.keys(output).length === 0) {
                    delete target[key];
                }
            }
            else if (value === undefined) {
                delete target[key];
            }
            else {
                target[key] = value;
            }
        }
    }
    return target;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9zLXJlc291cmNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicm9zLXJlc291cmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLCtEQUF3RDtBQUN4RCxpQ0FBOEU7QUFFOUUsK0NBQXlDO0FBRXpDLGlDQUFxQztBQUNyQywyREFBcUQ7QUFDckQsNkRBQXlFO0FBRXpFLCtDQUE0QztBQWlCNUM7O0dBRUc7QUFDSCxNQUFhLFdBQVksU0FBUSwyQkFBYTtJQUMxQzs7T0FFRztJQUNJLE1BQU0sQ0FBQyxhQUFhLENBQUMsU0FBcUI7UUFDN0MsT0FBUSxTQUFpQixDQUFDLGVBQWUsS0FBSyxTQUFTLENBQUM7SUFDNUQsQ0FBQztJQXdDRDs7O09BR0c7SUFDSCxZQUFZLEtBQWdCLEVBQUUsRUFBVSxFQUFFLEtBQXVCO1FBQzdELEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUEzQ3JCLDZFQUE2RTtRQUM3RSw2RUFBNkU7UUFDN0Usa0VBQWtFO1FBQ2xFLDhFQUE4RTtRQUM5RSw4RUFBOEU7UUFDOUUsMEVBQTBFO1FBQzFFLCtDQUErQztRQUUvQzs7V0FFRztRQUNhLGVBQVUsR0FBd0IsRUFBRSxDQUFDO1FBYXJEOztXQUVHO1FBQ2MsaUJBQVksR0FBUSxFQUFFLENBQUM7UUFFeEM7Ozs7V0FJRztRQUNjLGNBQVMsR0FBRyxJQUFJLEdBQUcsRUFBZSxDQUFDO1FBRW5DLGlCQUFZLEdBQUcsSUFBSSxHQUFHLEVBQVUsQ0FBQztRQVE5QyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFO1lBQ2IsTUFBTSxJQUFJLEtBQUssQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO1NBQ3REO1FBRUQsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDLFVBQVUsSUFBSSxFQUFFLENBQUM7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SyxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ3JFLG1FQUFtRTtnQkFDbkUsMENBQTBDO2dCQUMxQyxJQUFJLE9BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLFFBQVEsRUFBRTtvQkFDakMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztpQkFDcEI7Z0JBRUQsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFFOUIsa0VBQWtFO2dCQUNsRSw4REFBOEQ7Z0JBQzlELGlFQUFpRTtnQkFDakUsTUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUMzQixJQUFJLE9BQU8sTUFBTSxLQUFLLFFBQVEsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7b0JBQ2hFLE9BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUN0QjthQUNKO2lCQUFNLElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtnQkFDNUIsT0FBTyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDdEI7aUJBQU07Z0JBQ0gsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQzthQUN2QjtTQUNKO0tBQ0o7SUFFRCxPQUFPLE1BQU0sQ0FBQztBQUNsQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtSb3NEZWxldGlvblBvbGljeX0gZnJvbSBcIi4vcm9zLXJlc291cmNlLXBvbGljeVwiO1xuaW1wb3J0IHtjYXBpdGFsaXplUHJvcGVydHlOYW1lcywgaWdub3JlRW1wdHksIFBvc3RSZXNvbHZlVG9rZW59IGZyb20gXCIuL3V0aWxcIjtcbmltcG9ydCB7Q29uc3RydWN0LCBJQ29uc3RydWN0fSBmcm9tIFwiLi9jb25zdHJ1Y3QtY29tcGF0XCI7XG5pbXBvcnQge1RhZ01hbmFnZXJ9IGZyb20gXCIuL3RhZy1tYW5hZ2VyXCI7XG5pbXBvcnQge1JlZmVyZW5jZX0gZnJvbSBcIi4vcmVmZXJlbmNlXCI7XG5pbXBvcnQge2FkZERlcGVuZGVuY3l9IGZyb20gXCIuL2RlcHNcIjtcbmltcG9ydCB7Um9zUmVmZXJlbmNlfSBmcm9tIFwiLi9wcml2YXRlL3Jvcy1yZWZlcmVuY2VcIjtcbmltcG9ydCB7UmVtb3ZhbFBvbGljeSwgUmVtb3ZhbFBvbGljeU9wdGlvbnN9IGZyb20gXCIuL3Jvcy1yZW1vdmFsLXBvbGljeVwiO1xuaW1wb3J0IHtSb3NDb25kaXRpb259IGZyb20gXCIuL3Jvcy1jb25kaXRpb25cIjtcbmltcG9ydCB7Um9zUmVmRWxlbWVudH0gZnJvbSBcIi4vcm9zLWVsZW1lbnRcIjtcbmltcG9ydCB7SVJlc29sdmFibGV9IGZyb20gXCIuL3Jlc29sdmFibGVcIjtcblxuZXhwb3J0IGludGVyZmFjZSBSb3NSZXNvdXJjZVByb3BzIHtcbiAgICAvKipcbiAgICAgKiBST1MgdGVtcGxhdGUgcmVzb3VyY2UgdHlwZSAoZS5nLiBgQUxJWVVOOjpFQ1M6Okluc3RhbmNlYCkuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdHlwZTogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogUmVzb3VyY2UgcHJvcGVydGllcy5cbiAgICAgKlxuICAgICAqIEBkZWZhdWx0IC0gTm8gcmVzb3VyY2UgcHJvcGVydGllcy5cbiAgICAgKi9cbiAgICByZWFkb25seSBwcm9wZXJ0aWVzPzogeyBbbmFtZTogc3RyaW5nXTogYW55IH07XG59XG5cbi8qKlxuICogUmVwcmVzZW50cyBhIFJPUyByZXNvdXJjZS5cbiAqL1xuZXhwb3J0IGNsYXNzIFJvc1Jlc291cmNlIGV4dGVuZHMgUm9zUmVmRWxlbWVudCB7XG4gICAgLyoqXG4gICAgICogQ2hlY2sgd2hldGhlciB0aGUgZ2l2ZW4gY29uc3RydWN0IGlzIGEgUm9zUmVzb3VyY2VcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGlzUm9zUmVzb3VyY2UoY29uc3RydWN0OiBJQ29uc3RydWN0KTogY29uc3RydWN0IGlzIFJvc1Jlc291cmNlIHtcbiAgICAgICAgcmV0dXJuIChjb25zdHJ1Y3QgYXMgYW55KS5yb3NSZXNvdXJjZVR5cGUgIT09IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICAvLyBNQUlOVEFJTkVSUyBOT1RFOiB0aGlzIGNsYXNzIHNlcnZlcyBhcyB0aGUgYmFzZSBjbGFzcyBmb3IgdGhlIGdlbmVyYXRlZCBMMVxuICAgIC8vIChcIkFMSVlVTlwiKSByZXNvdXJjZXMgKHN1Y2ggYXMgYGVjcy5JbnN0YW5jZWApLiBUaGVzZSByZXNvdXJjZXMgd2lsbCBoYXZlIGFcbiAgICAvLyBwcm9wZXJ0eSBmb3IgZWFjaCBST1MgcHJvcGVydHkgb2YgdGhlIHJlc291cmNlLiBUaGlzIG1lYW5zIHRoYXRcbiAgICAvLyBpZiBhdCBzb21lIHBvaW50IGluIHRoZSBmdXR1cmUgYSBwcm9wZXJ0eSBpcyBpbnRyb2R1Y2VkIHdpdGggYSBuYW1lIHNpbWlsYXJcbiAgICAvLyB0byBvbmUgb2YgdGhlIHByb3BlcnRpZXMgaGVyZSwgaXQgd2lsbCBiZSBcIm1hc2tlZFwiIGJ5IHRoZSBkZXJpdmVkIGNsYXNzLiBUb1xuICAgIC8vIHRoYXQgZW5kLCB3ZSBwcmVmaXggYWxsIHByb3BlcnRpZXMgaW4gdGhpcyBjbGFzcyB3aXRoIGByb3NYeHhgIHdpdGggdGhlXG4gICAgLy8gaG9wZSB0byBhdm9pZCB0aG9zZSBjb25mbGljdHMgaW4gdGhlIGZ1dHVyZS5cblxuICAgIC8qKlxuICAgICAqIE9wdGlvbnMgZm9yIHRoaXMgcmVzb3VyY2UsIHN1Y2ggYXMgY29uZGl0aW9uLCB1cGRhdGUgcG9saWN5IGV0Yy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgcm9zT3B0aW9uczogSVJvc1Jlc291cmNlT3B0aW9ucyA9IHt9O1xuXG4gICAgLyoqXG4gICAgICogUk9TIHJlc291cmNlIHR5cGUuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IHJvc1Jlc291cmNlVHlwZTogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQWxpeXVuIHJlc291cmNlIHByb3BlcnRpZXMuXG4gICAgICogQGludGVybmFsXG4gICAgICovXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IF9yb3NQcm9wZXJ0aWVzOiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBBbiBvYmplY3QgdG8gYmUgbWVyZ2VkIG9uIHRvcCBvZiB0aGUgZW50aXJlIHJlc291cmNlIGRlZmluaXRpb24uXG4gICAgICovXG4gICAgcHJpdmF0ZSByZWFkb25seSByYXdPdmVycmlkZXM6IGFueSA9IHt9O1xuXG4gICAgLyoqXG4gICAgICogTG9naWNhbCBJRHMgb2YgZGVwZW5kZW5jaWVzLlxuICAgICAqXG4gICAgICogSXMgZmlsbGVkIGR1cmluZyBwcmVwYXJlKCkuXG4gICAgICovXG4gICAgcHJpdmF0ZSByZWFkb25seSBkZXBlbmRzT24gPSBuZXcgU2V0PFJvc1Jlc291cmNlPigpO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgaWQ6IHN0cmluZztcbiAgICBwcml2YXRlIHJlYWRvbmx5IHJvc0RlcGVuZHNPbiA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIHJlc291cmNlIGNvbnN0cnVjdC5cbiAgICAgKiBAcGFyYW0gcm9zUmVzb3VyY2VUeXBlIFRoZSBST1MgdHlwZSBvZiB0aGlzIHJlc291cmNlIChlLmcuIEFMSVlVTjo6RUNTOjpJbnN0YW5jZSlcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zUmVzb3VyY2VQcm9wcykge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIGlmICghcHJvcHMudHlwZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlIGB0eXBlYCBwcm9wZXJ0eSBpcyByZXF1aXJlZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucm9zUmVzb3VyY2VUeXBlID0gcHJvcHMudHlwZTtcbiAgICAgICAgdGhpcy5fcm9zUHJvcGVydGllcyA9IHByb3BzLnByb3BlcnRpZXMgfHwge307XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgZGVsZXRpb24gcG9saWN5IG9mIHRoZSByZXNvdXJjZSBiYXNlZCBvbiB0aGUgcmVtb3ZhbCBwb2xpY3kgc3BlY2lmaWVkLlxuICAgICAqL1xuICAgIHB1YmxpYyBhcHBseVJlbW92YWxQb2xpY3koXG4gICAgICAgIHBvbGljeTogUmVtb3ZhbFBvbGljeSB8IHVuZGVmaW5lZCxcbiAgICAgICAgb3B0aW9uczogUmVtb3ZhbFBvbGljeU9wdGlvbnMgPSB7fVxuICAgICkge1xuICAgICAgICBwb2xpY3kgPSBwb2xpY3kgfHwgb3B0aW9ucy5kZWZhdWx0UG9saWN5IHx8IFJlbW92YWxQb2xpY3kuUkVUQUlOO1xuXG4gICAgICAgIGxldCBkZWxldGlvblBvbGljeTtcblxuICAgICAgICBzd2l0Y2ggKHBvbGljeSkge1xuICAgICAgICAgICAgY2FzZSBSZW1vdmFsUG9saWN5LkRFU1RST1k6XG4gICAgICAgICAgICAgICAgZGVsZXRpb25Qb2xpY3kgPSBSb3NEZWxldGlvblBvbGljeS5ERUxFVEU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgUmVtb3ZhbFBvbGljeS5SRVRBSU46XG4gICAgICAgICAgICAgICAgZGVsZXRpb25Qb2xpY3kgPSBSb3NEZWxldGlvblBvbGljeS5SRVRBSU47XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHJlbW92YWwgcG9saWN5OiAke3BvbGljeX1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucm9zT3B0aW9ucy5kZWxldGlvblBvbGljeSA9IGRlbGV0aW9uUG9saWN5O1xuICAgICAgICAvLyBpZiAob3B0aW9ucy5hcHBseVRvVXBkYXRlUmVwbGFjZVBvbGljeSAhPT0gZmFsc2UpIHtcbiAgICAgICAgLy8gICB0aGlzLnJvc09wdGlvbnMudXBkYXRlUmVwbGFjZVBvbGljeSA9IGRlbGV0aW9uUG9saWN5O1xuICAgICAgICAvLyB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHRva2VuIGZvciBhbiBydW50aW1lIGF0dHJpYnV0ZSBvZiB0aGlzIHJlc291cmNlLlxuICAgICAqIElkZWFsbHksIHVzZSBnZW5lcmF0ZWQgYXR0cmlidXRlIGFjY2Vzc29ycyAoZS5nLiBgcmVzb3VyY2UuYXJuYCksIGJ1dCB0aGlzIGNhbiBiZSB1c2VkIGZvciBmdXR1cmUgY29tcGF0aWJpbGl0eVxuICAgICAqIGluIGNhc2UgdGhlcmUgaXMgbm8gZ2VuZXJhdGVkIGF0dHJpYnV0ZS5cbiAgICAgKiBAcGFyYW0gYXR0cmlidXRlTmFtZSBUaGUgbmFtZSBvZiB0aGUgYXR0cmlidXRlLlxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRBdHQoYXR0cmlidXRlTmFtZTogc3RyaW5nKTogUmVmZXJlbmNlIHtcbiAgICAgICAgcmV0dXJuIFJvc1JlZmVyZW5jZS5mb3IodGhpcywgYXR0cmlidXRlTmFtZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyBhbiBvdmVycmlkZSB0byB0aGUgc3ludGhlc2l6ZWQgUk9TIHJlc291cmNlLiBUbyBhZGQgYVxuICAgICAqIHByb3BlcnR5IG92ZXJyaWRlLCBlaXRoZXIgdXNlIGBhZGRQcm9wZXJ0eU92ZXJyaWRlYCBvciBwcmVmaXggYHBhdGhgIHdpdGhcbiAgICAgKiBcIlByb3BlcnRpZXMuXCIgKGkuZS4gYFByb3BlcnRpZXMuVG9waWNOYW1lYCkuXG4gICAgICpcbiAgICAgKiBJZiB0aGUgb3ZlcnJpZGUgaXMgbmVzdGVkLCBzZXBhcmF0ZSBlYWNoIG5lc3RlZCBsZXZlbCB1c2luZyBhIGRvdCAoLikgaW4gdGhlIHBhdGggcGFyYW1ldGVyLlxuICAgICAqIElmIHRoZXJlIGlzIGFuIGFycmF5IGFzIHBhcnQgb2YgdGhlIG5lc3RpbmcsIHNwZWNpZnkgdGhlIGluZGV4IGluIHRoZSBwYXRoLlxuICAgICAqXG4gICAgICogRm9yIGV4YW1wbGUsXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGFkZE92ZXJyaWRlKCdQcm9wZXJ0aWVzLkdsb2JhbFNlY29uZGFyeUluZGV4ZXMuMC5Qcm9qZWN0aW9uLk5vbktleUF0dHJpYnV0ZXMnLCBbJ215YXR0cmlidXRlJ10pXG4gICAgICogYWRkT3ZlcnJpZGUoJ1Byb3BlcnRpZXMuR2xvYmFsU2Vjb25kYXJ5SW5kZXhlcy4xLlByb2plY3Rpb25UeXBlJywgJ0lOQ0xVREUnKVxuICAgICAqIGBgYFxuICAgICAqIHdvdWxkIGFkZCB0aGUgb3ZlcnJpZGVzXG4gICAgICogYGBganNvblxuICAgICAqIFwiUHJvcGVydGllc1wiOiB7XG4gICAgICogICBcIkdsb2JhbFNlY29uZGFyeUluZGV4ZXNcIjogW1xuICAgICAqICAgICB7XG4gICAgICogICAgICAgXCJQcm9qZWN0aW9uXCI6IHtcbiAgICAgKiAgICAgICAgIFwiTm9uS2V5QXR0cmlidXRlc1wiOiBbIFwibXlhdHRyaWJ1dGVcIiBdXG4gICAgICogICAgICAgICAuLi5cbiAgICAgKiAgICAgICB9XG4gICAgICogICAgICAgLi4uXG4gICAgICogICAgIH0sXG4gICAgICogICAgIHtcbiAgICAgKiAgICAgICBcIlByb2plY3Rpb25UeXBlXCI6IFwiSU5DTFVERVwiXG4gICAgICogICAgICAgLi4uXG4gICAgICogICAgIH0sXG4gICAgICogICBdXG4gICAgICogICAuLi5cbiAgICAgKiB9XG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcGF0aCAtIFRoZSBwYXRoIG9mIHRoZSBwcm9wZXJ0eSwgeW91IGNhbiB1c2UgZG90IG5vdGF0aW9uIHRvXG4gICAgICogICAgICAgIG92ZXJyaWRlIHZhbHVlcyBpbiBjb21wbGV4IHR5cGVzLiBBbnkgaW50ZXJtZGVkaWF0ZSBrZXlzXG4gICAgICogICAgICAgIHdpbGwgYmUgY3JlYXRlZCBhcyBuZWVkZWQuXG4gICAgICogQHBhcmFtIHZhbHVlIC0gVGhlIHZhbHVlLiBDb3VsZCBiZSBwcmltaXRpdmUgb3IgY29tcGxleC5cbiAgICAgKi9cbiAgICBwdWJsaWMgYWRkT3ZlcnJpZGUocGF0aDogc3RyaW5nLCB2YWx1ZTogYW55KSB7XG4gICAgICAgIGNvbnN0IHBhcnRzID0gcGF0aC5zcGxpdChcIi5cIik7XG4gICAgICAgIGxldCBjdXJyOiBhbnkgPSB0aGlzLnJhd092ZXJyaWRlcztcblxuICAgICAgICB3aGlsZSAocGFydHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gcGFydHMuc2hpZnQoKSE7XG5cbiAgICAgICAgICAgIC8vIGlmIHdlIGNhbid0IHJlY3Vyc2UgZnVydGhlciBvciB0aGUgcHJldmlvdXMgdmFsdWUgaXMgbm90IGFuXG4gICAgICAgICAgICAvLyBvYmplY3Qgb3ZlcndyaXRlIGl0IHdpdGggYW4gb2JqZWN0LlxuICAgICAgICAgICAgY29uc3QgaXNPYmplY3QgPVxuICAgICAgICAgICAgICAgIGN1cnJba2V5XSAhPSBudWxsICYmXG4gICAgICAgICAgICAgICAgdHlwZW9mIGN1cnJba2V5XSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgICAgICFBcnJheS5pc0FycmF5KGN1cnJba2V5XSk7XG4gICAgICAgICAgICBpZiAoIWlzT2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgY3VycltrZXldID0ge307XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGN1cnIgPSBjdXJyW2tleV07XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBsYXN0S2V5ID0gcGFydHMuc2hpZnQoKSE7XG4gICAgICAgIGN1cnJbbGFzdEtleV0gPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTeW50YWN0aWMgc3VnYXIgZm9yIGBhZGRPdmVycmlkZShwYXRoLCB1bmRlZmluZWQpYC5cbiAgICAgKiBAcGFyYW0gcGF0aCBUaGUgcGF0aCBvZiB0aGUgdmFsdWUgdG8gZGVsZXRlXG4gICAgICovXG4gICAgcHVibGljIGFkZERlbGV0aW9uT3ZlcnJpZGUocGF0aDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuYWRkT3ZlcnJpZGUocGF0aCwgdW5kZWZpbmVkKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkTWV0YURhdGEoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcbiAgICAgICAgaWYgKCF0aGlzLnJvc09wdGlvbnMubWV0YWRhdGEpIHtcbiAgICAgICAgICAgIHRoaXMucm9zT3B0aW9ucy5tZXRhZGF0YSA9IHt9O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucm9zT3B0aW9ucy5tZXRhZGF0YVtrZXldID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIGFkZERlc2MoZGVzYzogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMucm9zT3B0aW9ucy5kZXNjcmlwdGlvbiA9IGRlc2M7XG4gICAgfVxuXG4gICAgcHVibGljIGZldGNoRGVzYygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucm9zT3B0aW9ucy5kZXNjcmlwdGlvbjtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkQ29uZGl0aW9uKGNvbjogUm9zQ29uZGl0aW9uKSB7XG4gICAgICAgIHRoaXMucm9zT3B0aW9ucy5jb25kaXRpb24gPSBjb247XG4gICAgfVxuXG4gICAgcHVibGljIGZldGNoQ29uZGl0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yb3NPcHRpb25zLmNvbmRpdGlvbjtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkQ291bnQoY291bnQ6IG51bWJlciB8IElSZXNvbHZhYmxlKSB7XG4gICAgICAgIHRoaXMucm9zT3B0aW9ucy5jb3VudCA9IGNvdW50O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgYW4gb3ZlcnJpZGUgdG8gYSByZXNvdXJjZSBwcm9wZXJ0eS5cbiAgICAgKlxuICAgICAqIFN5bnRhY3RpYyBzdWdhciBmb3IgYGFkZE92ZXJyaWRlKFwiUHJvcGVydGllcy48Li4uPlwiLCB2YWx1ZSlgLlxuICAgICAqXG4gICAgICogQHBhcmFtIHByb3BlcnR5UGF0aCBUaGUgcGF0aCBvZiB0aGUgcHJvcGVydHlcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlXG4gICAgICovXG4gICAgcHVibGljIGFkZFByb3BlcnR5T3ZlcnJpZGUocHJvcGVydHlQYXRoOiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcbiAgICAgICAgdGhpcy5hZGRPdmVycmlkZShgUHJvcGVydGllcy4ke3Byb3BlcnR5UGF0aH1gLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyBhbiBvdmVycmlkZSB0aGF0IGRlbGV0ZXMgdGhlIHZhbHVlIG9mIGEgcHJvcGVydHkgZnJvbSB0aGUgcmVzb3VyY2UgZGVmaW5pdGlvbi5cbiAgICAgKiBAcGFyYW0gcHJvcGVydHlQYXRoIFRoZSBwYXRoIHRvIHRoZSBwcm9wZXJ0eS5cbiAgICAgKi9cbiAgICBwdWJsaWMgYWRkUHJvcGVydHlEZWxldGlvbk92ZXJyaWRlKHByb3BlcnR5UGF0aDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuYWRkUHJvcGVydHlPdmVycmlkZShwcm9wZXJ0eVBhdGgsIHVuZGVmaW5lZCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5kaWNhdGVzIHRoYXQgdGhpcyByZXNvdXJjZSBkZXBlbmRzIG9uIGFub3RoZXIgcmVzb3VyY2UgYW5kIGNhbm5vdCBiZVxuICAgICAqIHByb3Zpc2lvbmVkIHVubGVzcyB0aGUgb3RoZXIgcmVzb3VyY2UgaGFzIGJlZW4gc3VjY2Vzc2Z1bGx5IHByb3Zpc2lvbmVkLlxuICAgICAqXG4gICAgICogVGhpcyBjYW4gYmUgdXNlZCBmb3IgcmVzb3VyY2VzIGFjcm9zcyBzdGFja3MgKG9yIG5lc3RlZCBzdGFjaykgYm91bmRhcmllc1xuICAgICAqIGFuZCB0aGUgZGVwZW5kZW5jeSB3aWxsIGF1dG9tYXRpY2FsbHkgYmUgdHJhbnNmZXJyZWQgdG8gdGhlIHJlbGV2YW50IHNjb3BlLlxuICAgICAqL1xuICAgIHB1YmxpYyBhZGREZXBlbmRzT24odGFyZ2V0OiBSb3NSZXNvdXJjZSkge1xuICAgICAgICBhZGREZXBlbmRlbmN5KFxuICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgIHRhcmdldCxcbiAgICAgICAgICAgIGBcIiR7dGhpcy5ub2RlLnBhdGh9XCIgZGVwZW5kcyBvbiBcIiR7dGFyZ2V0Lm5vZGUucGF0aH1cImBcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIHJlc291cmNlXG4gICAgICovXG4gICAgcHVibGljIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gYCR7c3VwZXIudG9TdHJpbmcoKX0gWyR7dGhpcy5yb3NSZXNvdXJjZVR5cGV9XWA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbGVkIGJ5IHRoZSBgYWRkRGVwZW5kZW5jeWAgaGVscGVyIGZ1bmN0aW9uIGluIG9yZGVyIHRvIHJlYWxpemUgYSBkaXJlY3RcbiAgICAgKiBkZXBlbmRlbmN5IGJldHdlZW4gdHdvIHJlc291cmNlcyB0aGF0IGFyZSBkaXJlY3RseSBkZWZpbmVkIGluIHRoZSBzYW1lXG4gICAgICogc3RhY2tzLlxuICAgICAqXG4gICAgICogVXNlIGByZXNvdXJjZS5hZGREZXBlbmRzT25gIHRvIGRlZmluZSB0aGUgZGVwZW5kZW5jeSBiZXR3ZWVuIHR3byByZXNvdXJjZXMsXG4gICAgICogd2hpY2ggYWxzbyB0YWtlcyBzdGFjayBib3VuZGFyaWVzIGludG8gYWNjb3VudC5cbiAgICAgKlxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIHB1YmxpYyBfYWRkUmVzb3VyY2VEZXBlbmRlbmN5KHRhcmdldDogUm9zUmVzb3VyY2UpIHtcbiAgICAgICAgdGhpcy5kZXBlbmRzT24uYWRkKHRhcmdldCk7XG4gICAgfVxuXG4gICAgcHVibGljIGFkZFJvc0RlcGVuZGVuY3kodGFyZ2V0OiBzdHJpbmcpIHtcbiAgICAgICAgLy8gdGFyZ2V0LmZvckVhY2goeCA9PiB0aGlzLnJvc0RlcGVuZHNPbi5hZGQoeCkpO1xuICAgICAgICB0aGlzLnJvc0RlcGVuZHNPbi5hZGQodGFyZ2V0KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZmV0Y2hSb3NEZXBlbmRlbmN5KCkge1xuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLnJvc0RlcGVuZHNPbik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRW1pdHMgUk9TIHRlbXBsYXRlIGZvciB0aGlzIHJlc291cmNlLlxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIHB1YmxpYyBfdG9Sb3NUZW1wbGF0ZSgpOiBvYmplY3Qge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmV0ID0ge1xuICAgICAgICAgICAgICAgIFJlc291cmNlczoge1xuICAgICAgICAgICAgICAgICAgICAvLyBQb3N0LVJlc29sdmUgb3BlcmF0aW9uIHNpbmNlIG90aGVyd2lzZSBkZWVwTWVyZ2UgaXMgZ29pbmcgdG8gbWl4IHZhbHVlcyBpbnRvXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZSBUb2tlbiBvYmplY3RzIHJldHVybmVkIGJ5IGlnbm9yZUVtcHR5LlxuICAgICAgICAgICAgICAgICAgICBbdGhpcy5pZF06IG5ldyBQb3N0UmVzb2x2ZVRva2VuKFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFR5cGU6IHRoaXMucm9zUmVzb3VyY2VUeXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByb3BlcnRpZXM6IGlnbm9yZUVtcHR5KHRoaXMucm9zUHJvcGVydGllcyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRGVwZW5kc09uOiBpZ25vcmVFbXB0eShyZW5kZXJSb3NEZXBlbmRzT24odGhpcy5yb3NEZXBlbmRzT24pKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBVcGRhdGVQb2xpY3k6IGNhcGl0YWxpemVQcm9wZXJ0eU5hbWVzKHRoaXMsIHRoaXMucm9zT3B0aW9ucy51cGRhdGVQb2xpY3kpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFVwZGF0ZVJlcGxhY2VQb2xpY3k6IGNhcGl0YWxpemVQcm9wZXJ0eU5hbWVzKHRoaXMsIHRoaXMucm9zT3B0aW9ucy51cGRhdGVSZXBsYWNlUG9saWN5KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZWxldGlvblBvbGljeTogY2FwaXRhbGl6ZVByb3BlcnR5TmFtZXMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucm9zT3B0aW9ucy5kZWxldGlvblBvbGljeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTWV0YWRhdGE6IGlnbm9yZUVtcHR5KHRoaXMucm9zT3B0aW9ucy5tZXRhZGF0YSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRGVzY3JpcHRpb246IGlnbm9yZUVtcHR5KHRoaXMucm9zT3B0aW9ucy5kZXNjcmlwdGlvbiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29uZGl0aW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJvc09wdGlvbnMuY29uZGl0aW9uICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucm9zT3B0aW9ucy5jb25kaXRpb24ubG9naWNhbElkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvdW50OiBpZ25vcmVFbXB0eSh0aGlzLnJvc09wdGlvbnMuY291bnQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIChwcm9wcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlbmRlcmVkUHJvcHMgPSB0aGlzLnJlbmRlclByb3BlcnRpZXMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLlByb3BlcnRpZXMgfHwge31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLlByb3BlcnRpZXMgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJlZFByb3BzICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChPYmplY3QudmFsdWVzKHJlbmRlcmVkUHJvcHMpLmZpbmQoKHYpID0+ICEhdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gcmVuZGVyZWRQcm9wc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB1bmRlZmluZWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkZWVwTWVyZ2UocHJvcHMsIHRoaXMucmF3T3ZlcnJpZGVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGlmIChlIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAvLyBDaGFuZ2UgbWVzc2FnZVxuICAgICAgICAgICAgICAgIGUubWVzc2FnZSA9IGBXaGlsZSBzeW50aGVzaXppbmcgJHt0aGlzLm5vZGUucGF0aH06ICR7ZS5tZXNzYWdlfWA7XG4gICAgICAgICAgICAgICAgLy8gQWRqdXN0IHN0YWNrIHRyYWNlIChtYWtlIGl0IGxvb2sgbGlrZSBub2RlIGJ1aWx0IGl0LCB0b28uLi4pXG4gICAgICAgICAgICAgICAgY29uc3QgdHJhY2UgPSB0aGlzLmNyZWF0aW9uU3RhY2s7XG4gICAgICAgICAgICAgICAgaWYgKHRyYWNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNyZWF0aW9uU3RhY2sgPSBbXCItLS0gcmVzb3VyY2UgY3JlYXRlZCBhdCAtLS1cIiwgLi4udHJhY2VdLmpvaW4oXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgYXQgXCJcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvYmxlbVRyYWNlID0gZS5zdGFjayA/IGUuc3RhY2suc3Vic3RyKFxuICAgICAgICAgICAgICAgICAgICAgICAgZS5zdGFjay5pbmRleE9mKGUubWVzc2FnZSkgKyBlLm1lc3NhZ2UubGVuZ3RoXG4gICAgICAgICAgICAgICAgICAgICkgOiAnJztcbiAgICAgICAgICAgICAgICAgICAgZS5zdGFjayA9IGAke2UubWVzc2FnZX1cXG4gICR7Y3JlYXRpb25TdGFja31cXG4gIC0tLSBwcm9ibGVtIGRpc2NvdmVyZWQgYXQgLS0tJHtwcm9ibGVtVHJhY2V9YDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFJlLXRocm93XG4gICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gcmVuZGVyUm9zRGVwZW5kc09uKHJvc0RlcGVuZHNPbjogU2V0PHN0cmluZz4pIHtcbiAgICAgICAgICAgIHJldHVybiBBcnJheS5mcm9tKHJvc0RlcGVuZHNPbik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSB7XG4gICAgICAgIGNvbnN0IHByb3BzID0gdGhpcy5fcm9zUHJvcGVydGllcyB8fCB7fTtcbiAgICAgICAgaWYgKFRhZ01hbmFnZXIuaXNUYWdnYWJsZSh0aGlzKSkge1xuICAgICAgICAgICAgY29uc3QgdGFnc1Byb3A6IHsgW2tleTogc3RyaW5nXTogYW55IH0gPSB7fTtcbiAgICAgICAgICAgIHRhZ3NQcm9wW3RoaXMudGFncy50YWdQcm9wZXJ0eU5hbWVdID0gdGhpcy50YWdzLnJlbmRlclRhZ3MoKTtcbiAgICAgICAgICAgIHJldHVybiBkZWVwTWVyZ2UocHJvcHMsIHRhZ3NQcm9wKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJvcHM7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtcbiAgICAgICAgW2tleTogc3RyaW5nXTogYW55O1xuICAgIH0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9IHtcbiAgICAgICAgcmV0dXJuIHByb3BzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybiBwcm9wZXJ0aWVzIG1vZGlmaWVkIGFmdGVyIGluaXRpYXRpb25cbiAgICAgKlxuICAgICAqIFJlc291cmNlcyB0aGF0IGV4cG9zZSBtdXRhYmxlIHByb3BlcnRpZXMgc2hvdWxkIG92ZXJyaWRlIHRoaXMgZnVuY3Rpb24gdG9cbiAgICAgKiBjb2xsZWN0IGFuZCByZXR1cm4gdGhlIHByb3BlcnRpZXMgb2JqZWN0IGZvciB0aGlzIHJlc291cmNlLlxuICAgICAqL1xuICAgIHByb3RlY3RlZCBnZXQgdXBkYXRlZFByb3Blcml0ZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yb3NQcm9wZXJ0aWVzO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCB2YWxpZGF0ZVByb3BlcnRpZXMoX3Byb3BlcnRpZXM6IGFueSkge1xuICAgICAgICAvLyBOb3RoaW5nXG4gICAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElSb3NSZXNvdXJjZU9wdGlvbnMge1xuICAgIC8qKlxuICAgICAqIEEgY29uZGl0aW9uIHRvIGFzc29jaWF0ZSB3aXRoIHRoaXMgcmVzb3VyY2UuIFRoaXMgbWVhbnMgdGhhdCBvbmx5IGlmIHRoZSBjb25kaXRpb24gZXZhbHVhdGVzIHRvICd0cnVlJyB3aGVuIHRoZSBzdGFja1xuICAgICAqIGlzIGRlcGxveWVkLCB0aGUgcmVzb3VyY2Ugd2lsbCBiZSBpbmNsdWRlZC4gVGhpcyBpcyBwcm92aWRlZCB0byBhbGxvdyBDREsgcHJvamVjdHMgdG8gcHJvZHVjZSBsZWdhY3kgdGVtcGxhdGVzLCBidXQgbm9yYW1sbHlcbiAgICAgKiB0aGVyZSBpcyBubyBuZWVkIHRvIHVzZSBpdCBpbiBDREsgcHJvamVjdHMuXG4gICAgICovXG4gICAgY29uZGl0aW9uPzogUm9zQ29uZGl0aW9uO1xuXG4gICAgLyoqXG4gICAgICogV2l0aCB0aGUgRGVsZXRpb25Qb2xpY3kgYXR0cmlidXRlIHlvdSBjYW4gcHJlc2VydmUgb3IgKGluIHNvbWUgY2FzZXMpIGJhY2t1cCBhIHJlc291cmNlIHdoZW4gaXRzIHN0YWNrIGlzIGRlbGV0ZWQuXG4gICAgICogWW91IHNwZWNpZnkgYSBEZWxldGlvblBvbGljeSBhdHRyaWJ1dGUgZm9yIGVhY2ggcmVzb3VyY2UgdGhhdCB5b3Ugd2FudCB0byBjb250cm9sLiBJZiBhIHJlc291cmNlIGhhcyBubyBEZWxldGlvblBvbGljeVxuICAgICAqIGF0dHJpYnV0ZSwgUk9TIGRlbGV0ZXMgdGhlIHJlc291cmNlIGJ5IGRlZmF1bHQuIE5vdGUgdGhhdCB0aGlzIGNhcGFiaWxpdHkgYWxzbyBhcHBsaWVzIHRvIHVwZGF0ZSBvcGVyYXRpb25zXG4gICAgICogdGhhdCBsZWFkIHRvIHJlc291cmNlcyBiZWluZyByZW1vdmVkLlxuICAgICAqL1xuICAgIGRlbGV0aW9uUG9saWN5PzogUm9zRGVsZXRpb25Qb2xpY3k7XG5cbiAgICAvKipcbiAgICAgKiBNZXRhZGF0YSBhc3NvY2lhdGVkIHdpdGggdGhlIFJPUyByZXNvdXJjZS4gVGhpcyBpcyBub3QgdGhlIHNhbWUgYXMgdGhlIGNvbnN0cnVjdCBtZXRhZGF0YSB3aGljaCBjYW4gYmUgYWRkZWRcbiAgICAgKiB1c2luZyBjb25zdHJ1Y3QuYWRkTWV0YWRhdGEoKSwgYnV0IHdvdWxkIG5vdCBhcHBlYXIgaW4gdGhlIFJPUyB0ZW1wbGF0ZSBhdXRvbWF0aWNhbGx5LlxuICAgICAqL1xuICAgIG1ldGFkYXRhPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfTtcblxuICAgIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuXG4gICAgY291bnQ/OiBudW1iZXIgfCBJUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBNZXJnZXMgYHNvdXJjZWAgaW50byBgdGFyZ2V0YCwgb3ZlcnJpZGluZyBhbnkgZXhpc3RpbmcgdmFsdWVzLlxuICogYG51bGxgcyB3aWxsIGNhdXNlIGEgdmFsdWUgdG8gYmUgZGVsZXRlZC5cbiAqL1xuZnVuY3Rpb24gZGVlcE1lcmdlKHRhcmdldDogYW55LCAuLi5zb3VyY2VzOiBhbnlbXSkge1xuICAgIGZvciAoY29uc3Qgc291cmNlIG9mIHNvdXJjZXMpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBzb3VyY2UgIT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIHRhcmdldCAhPT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICAgIGBJbnZhbGlkIHVzYWdlLiBCb3RoIHNvdXJjZSAoJHtKU09OLnN0cmluZ2lmeShcbiAgICAgICAgICAgICAgICAgICAgc291cmNlXG4gICAgICAgICAgICAgICAgKX0pIGFuZCB0YXJnZXQgKCR7SlNPTi5zdHJpbmdpZnkodGFyZ2V0KX0pIG11c3QgYmUgb2JqZWN0c2BcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhzb3VyY2UpKSB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHNvdXJjZVtrZXldO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiB2YWx1ZSAhPSBudWxsICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSB2YWx1ZSBhdCB0aGUgdGFyZ2V0IGlzIG5vdCBhbiBvYmplY3QsIG92ZXJyaWRlIGl0IHdpdGggYW5cbiAgICAgICAgICAgICAgICAvLyBvYmplY3Qgc28gd2UgY2FuIGNvbnRpbnVlIHRoZSByZWN1cnNpb25cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldFtrZXldICE9PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFtrZXldID0ge307XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZGVlcE1lcmdlKHRhcmdldFtrZXldLCB2YWx1ZSk7XG5cbiAgICAgICAgICAgICAgICAvLyBpZiB0aGUgcmVzdWx0IG9mIHRoZSBtZXJnZSBpcyBhbiBlbXB0eSBvYmplY3QsIGl0J3MgYmVjYXVzZSB0aGVcbiAgICAgICAgICAgICAgICAvLyBldmVudHVhbCB2YWx1ZSB3ZSBhc3NpZ25lZCBpcyBgdW5kZWZpbmVkYCwgYW5kIHRoZXJlIGFyZSBub1xuICAgICAgICAgICAgICAgIC8vIHNpYmxpbmcgY29uY3JldGUgdmFsdWVzIGFsb25nc2lkZSwgc28gd2UgY2FuIGRlbGV0ZSB0aGlzIHRyZWUuXG4gICAgICAgICAgICAgICAgY29uc3Qgb3V0cHV0ID0gdGFyZ2V0W2tleV07XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvdXRwdXQgPT09IFwib2JqZWN0XCIgJiYgT2JqZWN0LmtleXMob3V0cHV0KS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRhcmdldFtrZXldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSB0YXJnZXRba2V5XTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG59XG4iXX0=