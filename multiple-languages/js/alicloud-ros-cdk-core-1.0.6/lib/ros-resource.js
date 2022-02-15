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
     * Check whether the given construct is a RosResource
     */
    static isRosResource(construct) {
        return construct.rosResourceType !== undefined;
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
    addCondition(con) {
        this.rosOptions.condition = con;
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
        deps_1.addDependency(this, target, `"${this.node.path}" depends on "${target.node.path}"`);
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
                        Properties: util_1.ignoreEmpty(this.rosProperties),
                        DependsOn: util_1.ignoreEmpty(renderRosDependsOn(this.rosDependsOn)),
                        // UpdatePolicy: capitalizePropertyNames(this, this.rosOptions.updatePolicy),
                        // UpdateReplacePolicy: capitalizePropertyNames(this, this.rosOptions.updateReplacePolicy),
                        DeletionPolicy: util_1.capitalizePropertyNames(this, this.rosOptions.deletionPolicy),
                        Metadata: util_1.ignoreEmpty(this.rosOptions.metadata),
                        Description: util_1.ignoreEmpty(this.rosOptions.description),
                        Condition: this.rosOptions.condition &&
                            this.rosOptions.condition.logicalId,
                        Count: util_1.ignoreEmpty(this.rosOptions.count),
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
            // Change message
            e.message = `While synthesizing ${this.node.path}: ${e.message}`;
            // Adjust stack trace (make it look like node built it, too...)
            const trace = this.creationStack;
            if (trace) {
                const creationStack = ["--- resource created at ---", ...trace].join("\n  at ");
                const problemTrace = e.stack.substr(e.stack.indexOf(e.message) + e.message.length);
                e.stack = `${e.message}\n  ${creationStack}\n  --- problem discovered at ---${problemTrace}`;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9zLXJlc291cmNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicm9zLXJlc291cmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLCtEQUEwRDtBQUMxRCxpQ0FBZ0Y7QUFFaEYsK0NBQTJDO0FBRTNDLGlDQUF1QztBQUN2QywyREFBdUQ7QUFDdkQsNkRBQTJFO0FBRTNFLCtDQUE4QztBQWdCOUM7O0dBRUc7QUFDSCxNQUFhLFdBQVksU0FBUSwyQkFBYTtJQThDNUM7OztPQUdHO0lBQ0gsWUFBWSxLQUFnQixFQUFFLEVBQVUsRUFBRSxLQUF1QjtRQUMvRCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBM0NuQiw2RUFBNkU7UUFDN0UsNkVBQTZFO1FBQzdFLGtFQUFrRTtRQUNsRSw4RUFBOEU7UUFDOUUsOEVBQThFO1FBQzlFLDBFQUEwRTtRQUMxRSwrQ0FBK0M7UUFFL0M7O1dBRUc7UUFDYSxlQUFVLEdBQXdCLEVBQUUsQ0FBQztRQWFyRDs7V0FFRztRQUNjLGlCQUFZLEdBQVEsRUFBRSxDQUFDO1FBRXhDOzs7O1dBSUc7UUFDYyxjQUFTLEdBQUcsSUFBSSxHQUFHLEVBQWUsQ0FBQztRQUVuQyxpQkFBWSxHQUFHLElBQUksR0FBRyxFQUFVLENBQUM7UUFRaEQsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRTtZQUNmLE1BQU0sSUFBSSxLQUFLLENBQUMsaUNBQWlDLENBQUMsQ0FBQztTQUNwRDtRQUVELElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztRQUNsQyxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQyxVQUFVLElBQUksRUFBRSxDQUFDO0lBQy9DLENBQUM7SUExREQ7O09BRUc7SUFDSSxNQUFNLENBQUMsYUFBYSxDQUFDLFNBQXFCO1FBQy9DLE9BQVEsU0FBaUIsQ0FBQyxlQUFlLEtBQUssU0FBUyxDQUFD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QztnQkFDM0IsSUFBSSxPQUFPLE1BQU0sS0FBSyxRQUFRLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO29CQUNsRSxPQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDcEI7YUFDRjtpQkFBTSxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7Z0JBQzlCLE9BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ3BCO2lCQUFNO2dCQUNMLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUM7YUFDckI7U0FDRjtLQUNGO0lBRUQsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvc0RlbGV0aW9uUG9saWN5IH0gZnJvbSBcIi4vcm9zLXJlc291cmNlLXBvbGljeVwiO1xuaW1wb3J0IHsgY2FwaXRhbGl6ZVByb3BlcnR5TmFtZXMsIGlnbm9yZUVtcHR5LCBQb3N0UmVzb2x2ZVRva2VuIH0gZnJvbSBcIi4vdXRpbFwiO1xuaW1wb3J0IHsgQ29uc3RydWN0LCBJQ29uc3RydWN0IH0gZnJvbSBcIi4vY29uc3RydWN0LWNvbXBhdFwiO1xuaW1wb3J0IHsgVGFnTWFuYWdlciB9IGZyb20gXCIuL3RhZy1tYW5hZ2VyXCI7XG5pbXBvcnQgeyBSZWZlcmVuY2UgfSBmcm9tIFwiLi9yZWZlcmVuY2VcIjtcbmltcG9ydCB7IGFkZERlcGVuZGVuY3kgfSBmcm9tIFwiLi9kZXBzXCI7XG5pbXBvcnQgeyBSb3NSZWZlcmVuY2UgfSBmcm9tIFwiLi9wcml2YXRlL3Jvcy1yZWZlcmVuY2VcIjtcbmltcG9ydCB7IFJlbW92YWxQb2xpY3ksIFJlbW92YWxQb2xpY3lPcHRpb25zIH0gZnJvbSBcIi4vcm9zLXJlbW92YWwtcG9saWN5XCI7XG5pbXBvcnQgeyBSb3NDb25kaXRpb24gfSBmcm9tIFwiLi9yb3MtY29uZGl0aW9uXCI7XG5pbXBvcnQgeyBSb3NSZWZFbGVtZW50IH0gZnJvbSBcIi4vcm9zLWVsZW1lbnRcIjtcbmltcG9ydCB7SVJlc29sdmFibGV9IGZyb20gXCIuL3Jlc29sdmFibGVcIjtcbmV4cG9ydCBpbnRlcmZhY2UgUm9zUmVzb3VyY2VQcm9wcyB7XG4gIC8qKlxuICAgKiBST1MgdGVtcGxhdGUgcmVzb3VyY2UgdHlwZSAoZS5nLiBgQUxJWVVOOjpFQ1M6Okluc3RhbmNlYCkuXG4gICAqL1xuICByZWFkb25seSB0eXBlOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFJlc291cmNlIHByb3BlcnRpZXMuXG4gICAqXG4gICAqIEBkZWZhdWx0IC0gTm8gcmVzb3VyY2UgcHJvcGVydGllcy5cbiAgICovXG4gIHJlYWRvbmx5IHByb3BlcnRpZXM/OiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfTtcbn1cblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgUk9TIHJlc291cmNlLlxuICovXG5leHBvcnQgY2xhc3MgUm9zUmVzb3VyY2UgZXh0ZW5kcyBSb3NSZWZFbGVtZW50IHtcbiAgLyoqXG4gICAqIENoZWNrIHdoZXRoZXIgdGhlIGdpdmVuIGNvbnN0cnVjdCBpcyBhIFJvc1Jlc291cmNlXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGlzUm9zUmVzb3VyY2UoY29uc3RydWN0OiBJQ29uc3RydWN0KTogY29uc3RydWN0IGlzIFJvc1Jlc291cmNlIHtcbiAgICByZXR1cm4gKGNvbnN0cnVjdCBhcyBhbnkpLnJvc1Jlc291cmNlVHlwZSAhPT0gdW5kZWZpbmVkO1xuICB9XG5cbiAgLy8gTUFJTlRBSU5FUlMgTk9URTogdGhpcyBjbGFzcyBzZXJ2ZXMgYXMgdGhlIGJhc2UgY2xhc3MgZm9yIHRoZSBnZW5lcmF0ZWQgTDFcbiAgLy8gKFwiQUxJWVVOXCIpIHJlc291cmNlcyAoc3VjaCBhcyBgZWNzLkluc3RhbmNlYCkuIFRoZXNlIHJlc291cmNlcyB3aWxsIGhhdmUgYVxuICAvLyBwcm9wZXJ0eSBmb3IgZWFjaCBST1MgcHJvcGVydHkgb2YgdGhlIHJlc291cmNlLiBUaGlzIG1lYW5zIHRoYXRcbiAgLy8gaWYgYXQgc29tZSBwb2ludCBpbiB0aGUgZnV0dXJlIGEgcHJvcGVydHkgaXMgaW50cm9kdWNlZCB3aXRoIGEgbmFtZSBzaW1pbGFyXG4gIC8vIHRvIG9uZSBvZiB0aGUgcHJvcGVydGllcyBoZXJlLCBpdCB3aWxsIGJlIFwibWFza2VkXCIgYnkgdGhlIGRlcml2ZWQgY2xhc3MuIFRvXG4gIC8vIHRoYXQgZW5kLCB3ZSBwcmVmaXggYWxsIHByb3BlcnRpZXMgaW4gdGhpcyBjbGFzcyB3aXRoIGByb3NYeHhgIHdpdGggdGhlXG4gIC8vIGhvcGUgdG8gYXZvaWQgdGhvc2UgY29uZmxpY3RzIGluIHRoZSBmdXR1cmUuXG5cbiAgLyoqXG4gICAqIE9wdGlvbnMgZm9yIHRoaXMgcmVzb3VyY2UsIHN1Y2ggYXMgY29uZGl0aW9uLCB1cGRhdGUgcG9saWN5IGV0Yy5cbiAgICovXG4gIHB1YmxpYyByZWFkb25seSByb3NPcHRpb25zOiBJUm9zUmVzb3VyY2VPcHRpb25zID0ge307XG5cbiAgLyoqXG4gICAqIFJPUyByZXNvdXJjZSB0eXBlLlxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IHJvc1Jlc291cmNlVHlwZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBBbGl5dW4gcmVzb3VyY2UgcHJvcGVydGllcy5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBwcm90ZWN0ZWQgcmVhZG9ubHkgX3Jvc1Byb3BlcnRpZXM6IGFueTtcblxuICAvKipcbiAgICogQW4gb2JqZWN0IHRvIGJlIG1lcmdlZCBvbiB0b3Agb2YgdGhlIGVudGlyZSByZXNvdXJjZSBkZWZpbml0aW9uLlxuICAgKi9cbiAgcHJpdmF0ZSByZWFkb25seSByYXdPdmVycmlkZXM6IGFueSA9IHt9O1xuXG4gIC8qKlxuICAgKiBMb2dpY2FsIElEcyBvZiBkZXBlbmRlbmNpZXMuXG4gICAqXG4gICAqIElzIGZpbGxlZCBkdXJpbmcgcHJlcGFyZSgpLlxuICAgKi9cbiAgcHJpdmF0ZSByZWFkb25seSBkZXBlbmRzT24gPSBuZXcgU2V0PFJvc1Jlc291cmNlPigpO1xuICBwcml2YXRlIHJlYWRvbmx5IGlkOiBzdHJpbmc7XG4gIHByaXZhdGUgcmVhZG9ubHkgcm9zRGVwZW5kc09uID0gbmV3IFNldDxzdHJpbmc+KCk7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSByZXNvdXJjZSBjb25zdHJ1Y3QuXG4gICAqIEBwYXJhbSByb3NSZXNvdXJjZVR5cGUgVGhlIFJPUyB0eXBlIG9mIHRoaXMgcmVzb3VyY2UgKGUuZy4gQUxJWVVOOjpFQ1M6Okluc3RhbmNlKVxuICAgKi9cbiAgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc1Jlc291cmNlUHJvcHMpIHtcbiAgICBzdXBlcihzY29wZSwgaWQpO1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgICBpZiAoIXByb3BzLnR5cGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSBgdHlwZWAgcHJvcGVydHkgaXMgcmVxdWlyZWRcIik7XG4gICAgfVxuXG4gICAgdGhpcy5yb3NSZXNvdXJjZVR5cGUgPSBwcm9wcy50eXBlO1xuICAgIHRoaXMuX3Jvc1Byb3BlcnRpZXMgPSBwcm9wcy5wcm9wZXJ0aWVzIHx8IHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGRlbGV0aW9uIHBvbGljeSBvZiB0aGUgcmVzb3VyY2UgYmFzZWQgb24gdGhlIHJlbW92YWwgcG9saWN5IHNwZWNpZmllZC5cbiAgICovXG4gIHB1YmxpYyBhcHBseVJlbW92YWxQb2xpY3koXG4gICAgcG9saWN5OiBSZW1vdmFsUG9saWN5IHwgdW5kZWZpbmVkLFxuICAgIG9wdGlvbnM6IFJlbW92YWxQb2xpY3lPcHRpb25zID0ge31cbiAgKSB7XG4gICAgcG9saWN5ID0gcG9saWN5IHx8IG9wdGlvbnMuZGVmYXVsdFBvbGljeSB8fCBSZW1vdmFsUG9saWN5LlJFVEFJTjtcblxuICAgIGxldCBkZWxldGlvblBvbGljeTtcblxuICAgIHN3aXRjaCAocG9saWN5KSB7XG4gICAgICBjYXNlIFJlbW92YWxQb2xpY3kuREVTVFJPWTpcbiAgICAgICAgZGVsZXRpb25Qb2xpY3kgPSBSb3NEZWxldGlvblBvbGljeS5ERUxFVEU7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFJlbW92YWxQb2xpY3kuUkVUQUlOOlxuICAgICAgICBkZWxldGlvblBvbGljeSA9IFJvc0RlbGV0aW9uUG9saWN5LlJFVEFJTjtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCByZW1vdmFsIHBvbGljeTogJHtwb2xpY3l9YCk7XG4gICAgfVxuXG4gICAgdGhpcy5yb3NPcHRpb25zLmRlbGV0aW9uUG9saWN5ID0gZGVsZXRpb25Qb2xpY3k7XG4gICAgLy8gaWYgKG9wdGlvbnMuYXBwbHlUb1VwZGF0ZVJlcGxhY2VQb2xpY3kgIT09IGZhbHNlKSB7XG4gICAgLy8gICB0aGlzLnJvc09wdGlvbnMudXBkYXRlUmVwbGFjZVBvbGljeSA9IGRlbGV0aW9uUG9saWN5O1xuICAgIC8vIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgdG9rZW4gZm9yIGFuIHJ1bnRpbWUgYXR0cmlidXRlIG9mIHRoaXMgcmVzb3VyY2UuXG4gICAqIElkZWFsbHksIHVzZSBnZW5lcmF0ZWQgYXR0cmlidXRlIGFjY2Vzc29ycyAoZS5nLiBgcmVzb3VyY2UuYXJuYCksIGJ1dCB0aGlzIGNhbiBiZSB1c2VkIGZvciBmdXR1cmUgY29tcGF0aWJpbGl0eVxuICAgKiBpbiBjYXNlIHRoZXJlIGlzIG5vIGdlbmVyYXRlZCBhdHRyaWJ1dGUuXG4gICAqIEBwYXJhbSBhdHRyaWJ1dGVOYW1lIFRoZSBuYW1lIG9mIHRoZSBhdHRyaWJ1dGUuXG4gICAqL1xuICBwdWJsaWMgZ2V0QXR0KGF0dHJpYnV0ZU5hbWU6IHN0cmluZyk6IFJlZmVyZW5jZSB7XG4gICAgcmV0dXJuIFJvc1JlZmVyZW5jZS5mb3IodGhpcywgYXR0cmlidXRlTmFtZSk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhbiBvdmVycmlkZSB0byB0aGUgc3ludGhlc2l6ZWQgUk9TIHJlc291cmNlLiBUbyBhZGQgYVxuICAgKiBwcm9wZXJ0eSBvdmVycmlkZSwgZWl0aGVyIHVzZSBgYWRkUHJvcGVydHlPdmVycmlkZWAgb3IgcHJlZml4IGBwYXRoYCB3aXRoXG4gICAqIFwiUHJvcGVydGllcy5cIiAoaS5lLiBgUHJvcGVydGllcy5Ub3BpY05hbWVgKS5cbiAgICpcbiAgICogSWYgdGhlIG92ZXJyaWRlIGlzIG5lc3RlZCwgc2VwYXJhdGUgZWFjaCBuZXN0ZWQgbGV2ZWwgdXNpbmcgYSBkb3QgKC4pIGluIHRoZSBwYXRoIHBhcmFtZXRlci5cbiAgICogSWYgdGhlcmUgaXMgYW4gYXJyYXkgYXMgcGFydCBvZiB0aGUgbmVzdGluZywgc3BlY2lmeSB0aGUgaW5kZXggaW4gdGhlIHBhdGguXG4gICAqXG4gICAqIEZvciBleGFtcGxlLFxuICAgKiBgYGB0eXBlc2NyaXB0XG4gICAqIGFkZE92ZXJyaWRlKCdQcm9wZXJ0aWVzLkdsb2JhbFNlY29uZGFyeUluZGV4ZXMuMC5Qcm9qZWN0aW9uLk5vbktleUF0dHJpYnV0ZXMnLCBbJ215YXR0cmlidXRlJ10pXG4gICAqIGFkZE92ZXJyaWRlKCdQcm9wZXJ0aWVzLkdsb2JhbFNlY29uZGFyeUluZGV4ZXMuMS5Qcm9qZWN0aW9uVHlwZScsICdJTkNMVURFJylcbiAgICogYGBgXG4gICAqIHdvdWxkIGFkZCB0aGUgb3ZlcnJpZGVzXG4gICAqIGBgYGpzb25cbiAgICogXCJQcm9wZXJ0aWVzXCI6IHtcbiAgICogICBcIkdsb2JhbFNlY29uZGFyeUluZGV4ZXNcIjogW1xuICAgKiAgICAge1xuICAgKiAgICAgICBcIlByb2plY3Rpb25cIjoge1xuICAgKiAgICAgICAgIFwiTm9uS2V5QXR0cmlidXRlc1wiOiBbIFwibXlhdHRyaWJ1dGVcIiBdXG4gICAqICAgICAgICAgLi4uXG4gICAqICAgICAgIH1cbiAgICogICAgICAgLi4uXG4gICAqICAgICB9LFxuICAgKiAgICAge1xuICAgKiAgICAgICBcIlByb2plY3Rpb25UeXBlXCI6IFwiSU5DTFVERVwiXG4gICAqICAgICAgIC4uLlxuICAgKiAgICAgfSxcbiAgICogICBdXG4gICAqICAgLi4uXG4gICAqIH1cbiAgICogYGBgXG4gICAqXG4gICAqIEBwYXJhbSBwYXRoIC0gVGhlIHBhdGggb2YgdGhlIHByb3BlcnR5LCB5b3UgY2FuIHVzZSBkb3Qgbm90YXRpb24gdG9cbiAgICogICAgICAgIG92ZXJyaWRlIHZhbHVlcyBpbiBjb21wbGV4IHR5cGVzLiBBbnkgaW50ZXJtZGVkaWF0ZSBrZXlzXG4gICAqICAgICAgICB3aWxsIGJlIGNyZWF0ZWQgYXMgbmVlZGVkLlxuICAgKiBAcGFyYW0gdmFsdWUgLSBUaGUgdmFsdWUuIENvdWxkIGJlIHByaW1pdGl2ZSBvciBjb21wbGV4LlxuICAgKi9cbiAgcHVibGljIGFkZE92ZXJyaWRlKHBhdGg6IHN0cmluZywgdmFsdWU6IGFueSkge1xuICAgIGNvbnN0IHBhcnRzID0gcGF0aC5zcGxpdChcIi5cIik7XG4gICAgbGV0IGN1cnI6IGFueSA9IHRoaXMucmF3T3ZlcnJpZGVzO1xuXG4gICAgd2hpbGUgKHBhcnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgIGNvbnN0IGtleSA9IHBhcnRzLnNoaWZ0KCkhO1xuXG4gICAgICAvLyBpZiB3ZSBjYW4ndCByZWN1cnNlIGZ1cnRoZXIgb3IgdGhlIHByZXZpb3VzIHZhbHVlIGlzIG5vdCBhblxuICAgICAgLy8gb2JqZWN0IG92ZXJ3cml0ZSBpdCB3aXRoIGFuIG9iamVjdC5cbiAgICAgIGNvbnN0IGlzT2JqZWN0ID1cbiAgICAgICAgY3VycltrZXldICE9IG51bGwgJiZcbiAgICAgICAgdHlwZW9mIGN1cnJba2V5XSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAhQXJyYXkuaXNBcnJheShjdXJyW2tleV0pO1xuICAgICAgaWYgKCFpc09iamVjdCkge1xuICAgICAgICBjdXJyW2tleV0gPSB7fTtcbiAgICAgIH1cblxuICAgICAgY3VyciA9IGN1cnJba2V5XTtcbiAgICB9XG5cbiAgICBjb25zdCBsYXN0S2V5ID0gcGFydHMuc2hpZnQoKSE7XG4gICAgY3VycltsYXN0S2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFN5bnRhY3RpYyBzdWdhciBmb3IgYGFkZE92ZXJyaWRlKHBhdGgsIHVuZGVmaW5lZClgLlxuICAgKiBAcGFyYW0gcGF0aCBUaGUgcGF0aCBvZiB0aGUgdmFsdWUgdG8gZGVsZXRlXG4gICAqL1xuICBwdWJsaWMgYWRkRGVsZXRpb25PdmVycmlkZShwYXRoOiBzdHJpbmcpIHtcbiAgICB0aGlzLmFkZE92ZXJyaWRlKHBhdGgsIHVuZGVmaW5lZCk7XG4gIH1cblxuICBwdWJsaWMgYWRkTWV0YURhdGEoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcbiAgICBpZiAoIXRoaXMucm9zT3B0aW9ucy5tZXRhZGF0YSkge1xuICAgICAgdGhpcy5yb3NPcHRpb25zLm1ldGFkYXRhID0ge307XG4gICAgfVxuICAgIHRoaXMucm9zT3B0aW9ucy5tZXRhZGF0YVtrZXldID0gdmFsdWU7XG4gIH1cblxuICBwdWJsaWMgYWRkRGVzYyhkZXNjOiBzdHJpbmcpIHtcbiAgICB0aGlzLnJvc09wdGlvbnMuZGVzY3JpcHRpb24gPSBkZXNjO1xuICB9XG5cbiAgcHVibGljIGFkZENvbmRpdGlvbihjb246IFJvc0NvbmRpdGlvbikge1xuICAgIHRoaXMucm9zT3B0aW9ucy5jb25kaXRpb24gPSBjb247XG4gIH1cblxuICBwdWJsaWMgYWRkQ291bnQoY291bnQ6IG51bWJlciB8IElSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5yb3NPcHRpb25zLmNvdW50ID0gY291bnQ7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhbiBvdmVycmlkZSB0byBhIHJlc291cmNlIHByb3BlcnR5LlxuICAgKlxuICAgKiBTeW50YWN0aWMgc3VnYXIgZm9yIGBhZGRPdmVycmlkZShcIlByb3BlcnRpZXMuPC4uLj5cIiwgdmFsdWUpYC5cbiAgICpcbiAgICogQHBhcmFtIHByb3BlcnR5UGF0aCBUaGUgcGF0aCBvZiB0aGUgcHJvcGVydHlcbiAgICogQHBhcmFtIHZhbHVlIFRoZSB2YWx1ZVxuICAgKi9cbiAgcHVibGljIGFkZFByb3BlcnR5T3ZlcnJpZGUocHJvcGVydHlQYXRoOiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLmFkZE92ZXJyaWRlKGBQcm9wZXJ0aWVzLiR7cHJvcGVydHlQYXRofWAsIHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGFuIG92ZXJyaWRlIHRoYXQgZGVsZXRlcyB0aGUgdmFsdWUgb2YgYSBwcm9wZXJ0eSBmcm9tIHRoZSByZXNvdXJjZSBkZWZpbml0aW9uLlxuICAgKiBAcGFyYW0gcHJvcGVydHlQYXRoIFRoZSBwYXRoIHRvIHRoZSBwcm9wZXJ0eS5cbiAgICovXG4gIHB1YmxpYyBhZGRQcm9wZXJ0eURlbGV0aW9uT3ZlcnJpZGUocHJvcGVydHlQYXRoOiBzdHJpbmcpIHtcbiAgICB0aGlzLmFkZFByb3BlcnR5T3ZlcnJpZGUocHJvcGVydHlQYXRoLCB1bmRlZmluZWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluZGljYXRlcyB0aGF0IHRoaXMgcmVzb3VyY2UgZGVwZW5kcyBvbiBhbm90aGVyIHJlc291cmNlIGFuZCBjYW5ub3QgYmVcbiAgICogcHJvdmlzaW9uZWQgdW5sZXNzIHRoZSBvdGhlciByZXNvdXJjZSBoYXMgYmVlbiBzdWNjZXNzZnVsbHkgcHJvdmlzaW9uZWQuXG4gICAqXG4gICAqIFRoaXMgY2FuIGJlIHVzZWQgZm9yIHJlc291cmNlcyBhY3Jvc3Mgc3RhY2tzIChvciBuZXN0ZWQgc3RhY2spIGJvdW5kYXJpZXNcbiAgICogYW5kIHRoZSBkZXBlbmRlbmN5IHdpbGwgYXV0b21hdGljYWxseSBiZSB0cmFuc2ZlcnJlZCB0byB0aGUgcmVsZXZhbnQgc2NvcGUuXG4gICAqL1xuICBwdWJsaWMgYWRkRGVwZW5kc09uKHRhcmdldDogUm9zUmVzb3VyY2UpIHtcbiAgICBhZGREZXBlbmRlbmN5KFxuICAgICAgdGhpcyxcbiAgICAgIHRhcmdldCxcbiAgICAgIGBcIiR7dGhpcy5ub2RlLnBhdGh9XCIgZGVwZW5kcyBvbiBcIiR7dGFyZ2V0Lm5vZGUucGF0aH1cImBcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgcmVzb3VyY2VcbiAgICovXG4gIHB1YmxpYyB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gYCR7c3VwZXIudG9TdHJpbmcoKX0gWyR7dGhpcy5yb3NSZXNvdXJjZVR5cGV9XWA7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIGJ5IHRoZSBgYWRkRGVwZW5kZW5jeWAgaGVscGVyIGZ1bmN0aW9uIGluIG9yZGVyIHRvIHJlYWxpemUgYSBkaXJlY3RcbiAgICogZGVwZW5kZW5jeSBiZXR3ZWVuIHR3byByZXNvdXJjZXMgdGhhdCBhcmUgZGlyZWN0bHkgZGVmaW5lZCBpbiB0aGUgc2FtZVxuICAgKiBzdGFja3MuXG4gICAqXG4gICAqIFVzZSBgcmVzb3VyY2UuYWRkRGVwZW5kc09uYCB0byBkZWZpbmUgdGhlIGRlcGVuZGVuY3kgYmV0d2VlbiB0d28gcmVzb3VyY2VzLFxuICAgKiB3aGljaCBhbHNvIHRha2VzIHN0YWNrIGJvdW5kYXJpZXMgaW50byBhY2NvdW50LlxuICAgKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIHB1YmxpYyBfYWRkUmVzb3VyY2VEZXBlbmRlbmN5KHRhcmdldDogUm9zUmVzb3VyY2UpIHtcbiAgICB0aGlzLmRlcGVuZHNPbi5hZGQodGFyZ2V0KTtcbiAgfVxuXG4gIHB1YmxpYyBhZGRSb3NEZXBlbmRlbmN5KHRhcmdldDogc3RyaW5nKSB7XG4gICAgLy8gdGFyZ2V0LmZvckVhY2goeCA9PiB0aGlzLnJvc0RlcGVuZHNPbi5hZGQoeCkpO1xuICAgIHRoaXMucm9zRGVwZW5kc09uLmFkZCh0YXJnZXQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEVtaXRzIFJPUyB0ZW1wbGF0ZSBmb3IgdGhpcyByZXNvdXJjZS5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBwdWJsaWMgX3RvUm9zVGVtcGxhdGUoKTogb2JqZWN0IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmV0ID0ge1xuICAgICAgICBSZXNvdXJjZXM6IHtcbiAgICAgICAgICAvLyBQb3N0LVJlc29sdmUgb3BlcmF0aW9uIHNpbmNlIG90aGVyd2lzZSBkZWVwTWVyZ2UgaXMgZ29pbmcgdG8gbWl4IHZhbHVlcyBpbnRvXG4gICAgICAgICAgLy8gdGhlIFRva2VuIG9iamVjdHMgcmV0dXJuZWQgYnkgaWdub3JlRW1wdHkuXG4gICAgICAgICAgW3RoaXMuaWRdOiBuZXcgUG9zdFJlc29sdmVUb2tlbihcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgVHlwZTogdGhpcy5yb3NSZXNvdXJjZVR5cGUsXG4gICAgICAgICAgICAgIFByb3BlcnRpZXM6IGlnbm9yZUVtcHR5KHRoaXMucm9zUHJvcGVydGllcyksXG4gICAgICAgICAgICAgIERlcGVuZHNPbjogaWdub3JlRW1wdHkocmVuZGVyUm9zRGVwZW5kc09uKHRoaXMucm9zRGVwZW5kc09uKSksXG4gICAgICAgICAgICAgIC8vIFVwZGF0ZVBvbGljeTogY2FwaXRhbGl6ZVByb3BlcnR5TmFtZXModGhpcywgdGhpcy5yb3NPcHRpb25zLnVwZGF0ZVBvbGljeSksXG4gICAgICAgICAgICAgIC8vIFVwZGF0ZVJlcGxhY2VQb2xpY3k6IGNhcGl0YWxpemVQcm9wZXJ0eU5hbWVzKHRoaXMsIHRoaXMucm9zT3B0aW9ucy51cGRhdGVSZXBsYWNlUG9saWN5KSxcbiAgICAgICAgICAgICAgRGVsZXRpb25Qb2xpY3k6IGNhcGl0YWxpemVQcm9wZXJ0eU5hbWVzKFxuICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgdGhpcy5yb3NPcHRpb25zLmRlbGV0aW9uUG9saWN5XG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIE1ldGFkYXRhOiBpZ25vcmVFbXB0eSh0aGlzLnJvc09wdGlvbnMubWV0YWRhdGEpLFxuICAgICAgICAgICAgICBEZXNjcmlwdGlvbjogaWdub3JlRW1wdHkodGhpcy5yb3NPcHRpb25zLmRlc2NyaXB0aW9uKSxcbiAgICAgICAgICAgICAgQ29uZGl0aW9uOlxuICAgICAgICAgICAgICAgIHRoaXMucm9zT3B0aW9ucy5jb25kaXRpb24gJiZcbiAgICAgICAgICAgICAgICB0aGlzLnJvc09wdGlvbnMuY29uZGl0aW9uLmxvZ2ljYWxJZCxcbiAgICAgICAgICAgICAgQ291bnQ6IGlnbm9yZUVtcHR5KHRoaXMucm9zT3B0aW9ucy5jb3VudCksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgKHByb3BzKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHJlbmRlcmVkUHJvcHMgPSB0aGlzLnJlbmRlclByb3BlcnRpZXMoXG4gICAgICAgICAgICAgICAgcHJvcHMuUHJvcGVydGllcyB8fCB7fVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICBwcm9wcy5Qcm9wZXJ0aWVzID1cbiAgICAgICAgICAgICAgICByZW5kZXJlZFByb3BzICYmXG4gICAgICAgICAgICAgICAgKE9iamVjdC52YWx1ZXMocmVuZGVyZWRQcm9wcykuZmluZCgodikgPT4gISF2KVxuICAgICAgICAgICAgICAgICAgPyByZW5kZXJlZFByb3BzXG4gICAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZCk7XG4gICAgICAgICAgICAgIHJldHVybiBkZWVwTWVyZ2UocHJvcHMsIHRoaXMucmF3T3ZlcnJpZGVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICAgIHJldHVybiByZXQ7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLy8gQ2hhbmdlIG1lc3NhZ2VcbiAgICAgIGUubWVzc2FnZSA9IGBXaGlsZSBzeW50aGVzaXppbmcgJHt0aGlzLm5vZGUucGF0aH06ICR7ZS5tZXNzYWdlfWA7XG4gICAgICAvLyBBZGp1c3Qgc3RhY2sgdHJhY2UgKG1ha2UgaXQgbG9vayBsaWtlIG5vZGUgYnVpbHQgaXQsIHRvby4uLilcbiAgICAgIGNvbnN0IHRyYWNlID0gdGhpcy5jcmVhdGlvblN0YWNrO1xuICAgICAgaWYgKHRyYWNlKSB7XG4gICAgICAgIGNvbnN0IGNyZWF0aW9uU3RhY2sgPSBbXCItLS0gcmVzb3VyY2UgY3JlYXRlZCBhdCAtLS1cIiwgLi4udHJhY2VdLmpvaW4oXG4gICAgICAgICAgXCJcXG4gIGF0IFwiXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IHByb2JsZW1UcmFjZSA9IGUuc3RhY2suc3Vic3RyKFxuICAgICAgICAgIGUuc3RhY2suaW5kZXhPZihlLm1lc3NhZ2UpICsgZS5tZXNzYWdlLmxlbmd0aFxuICAgICAgICApO1xuICAgICAgICBlLnN0YWNrID0gYCR7ZS5tZXNzYWdlfVxcbiAgJHtjcmVhdGlvblN0YWNrfVxcbiAgLS0tIHByb2JsZW0gZGlzY292ZXJlZCBhdCAtLS0ke3Byb2JsZW1UcmFjZX1gO1xuICAgICAgfVxuXG4gICAgICAvLyBSZS10aHJvd1xuICAgICAgdGhyb3cgZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW5kZXJSb3NEZXBlbmRzT24ocm9zRGVwZW5kc09uOiBTZXQ8c3RyaW5nPikge1xuICAgICAgcmV0dXJuIEFycmF5LmZyb20ocm9zRGVwZW5kc09uKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSB7XG4gICAgY29uc3QgcHJvcHMgPSB0aGlzLl9yb3NQcm9wZXJ0aWVzIHx8IHt9O1xuICAgIGlmIChUYWdNYW5hZ2VyLmlzVGFnZ2FibGUodGhpcykpIHtcbiAgICAgIGNvbnN0IHRhZ3NQcm9wOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ID0ge307XG4gICAgICB0YWdzUHJvcFt0aGlzLnRhZ3MudGFnUHJvcGVydHlOYW1lXSA9IHRoaXMudGFncy5yZW5kZXJUYWdzKCk7XG4gICAgICByZXR1cm4gZGVlcE1lcmdlKHByb3BzLCB0YWdzUHJvcCk7XG4gICAgfVxuICAgIHJldHVybiBwcm9wcztcbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7XG4gICAgW2tleTogc3RyaW5nXTogYW55O1xuICB9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHByb3BzO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBwcm9wZXJ0aWVzIG1vZGlmaWVkIGFmdGVyIGluaXRpYXRpb25cbiAgICpcbiAgICogUmVzb3VyY2VzIHRoYXQgZXhwb3NlIG11dGFibGUgcHJvcGVydGllcyBzaG91bGQgb3ZlcnJpZGUgdGhpcyBmdW5jdGlvbiB0b1xuICAgKiBjb2xsZWN0IGFuZCByZXR1cm4gdGhlIHByb3BlcnRpZXMgb2JqZWN0IGZvciB0aGlzIHJlc291cmNlLlxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCB1cGRhdGVkUHJvcGVyaXRlcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4gdGhpcy5fcm9zUHJvcGVydGllcztcbiAgfVxuXG4gIHByb3RlY3RlZCB2YWxpZGF0ZVByb3BlcnRpZXMoX3Byb3BlcnRpZXM6IGFueSkge1xuICAgIC8vIE5vdGhpbmdcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElSb3NSZXNvdXJjZU9wdGlvbnMge1xuICAvKipcbiAgICogQSBjb25kaXRpb24gdG8gYXNzb2NpYXRlIHdpdGggdGhpcyByZXNvdXJjZS4gVGhpcyBtZWFucyB0aGF0IG9ubHkgaWYgdGhlIGNvbmRpdGlvbiBldmFsdWF0ZXMgdG8gJ3RydWUnIHdoZW4gdGhlIHN0YWNrXG4gICAqIGlzIGRlcGxveWVkLCB0aGUgcmVzb3VyY2Ugd2lsbCBiZSBpbmNsdWRlZC4gVGhpcyBpcyBwcm92aWRlZCB0byBhbGxvdyBDREsgcHJvamVjdHMgdG8gcHJvZHVjZSBsZWdhY3kgdGVtcGxhdGVzLCBidXQgbm9yYW1sbHlcbiAgICogdGhlcmUgaXMgbm8gbmVlZCB0byB1c2UgaXQgaW4gQ0RLIHByb2plY3RzLlxuICAgKi9cbiAgY29uZGl0aW9uPzogUm9zQ29uZGl0aW9uO1xuXG4gIC8qKlxuICAgKiBXaXRoIHRoZSBEZWxldGlvblBvbGljeSBhdHRyaWJ1dGUgeW91IGNhbiBwcmVzZXJ2ZSBvciAoaW4gc29tZSBjYXNlcykgYmFja3VwIGEgcmVzb3VyY2Ugd2hlbiBpdHMgc3RhY2sgaXMgZGVsZXRlZC5cbiAgICogWW91IHNwZWNpZnkgYSBEZWxldGlvblBvbGljeSBhdHRyaWJ1dGUgZm9yIGVhY2ggcmVzb3VyY2UgdGhhdCB5b3Ugd2FudCB0byBjb250cm9sLiBJZiBhIHJlc291cmNlIGhhcyBubyBEZWxldGlvblBvbGljeVxuICAgKiBhdHRyaWJ1dGUsIFJPUyBkZWxldGVzIHRoZSByZXNvdXJjZSBieSBkZWZhdWx0LiBOb3RlIHRoYXQgdGhpcyBjYXBhYmlsaXR5IGFsc28gYXBwbGllcyB0byB1cGRhdGUgb3BlcmF0aW9uc1xuICAgKiB0aGF0IGxlYWQgdG8gcmVzb3VyY2VzIGJlaW5nIHJlbW92ZWQuXG4gICAqL1xuICBkZWxldGlvblBvbGljeT86IFJvc0RlbGV0aW9uUG9saWN5O1xuXG4gIC8qKlxuICAgKiBNZXRhZGF0YSBhc3NvY2lhdGVkIHdpdGggdGhlIFJPUyByZXNvdXJjZS4gVGhpcyBpcyBub3QgdGhlIHNhbWUgYXMgdGhlIGNvbnN0cnVjdCBtZXRhZGF0YSB3aGljaCBjYW4gYmUgYWRkZWRcbiAgICogdXNpbmcgY29uc3RydWN0LmFkZE1ldGFkYXRhKCksIGJ1dCB3b3VsZCBub3QgYXBwZWFyIGluIHRoZSBST1MgdGVtcGxhdGUgYXV0b21hdGljYWxseS5cbiAgICovXG4gIG1ldGFkYXRhPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfTtcblxuICBkZXNjcmlwdGlvbj86IHN0cmluZztcblxuICBjb3VudD86IG51bWJlciB8IElSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIE1lcmdlcyBgc291cmNlYCBpbnRvIGB0YXJnZXRgLCBvdmVycmlkaW5nIGFueSBleGlzdGluZyB2YWx1ZXMuXG4gKiBgbnVsbGBzIHdpbGwgY2F1c2UgYSB2YWx1ZSB0byBiZSBkZWxldGVkLlxuICovXG5mdW5jdGlvbiBkZWVwTWVyZ2UodGFyZ2V0OiBhbnksIC4uLnNvdXJjZXM6IGFueVtdKSB7XG4gIGZvciAoY29uc3Qgc291cmNlIG9mIHNvdXJjZXMpIHtcbiAgICBpZiAodHlwZW9mIHNvdXJjZSAhPT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgdGFyZ2V0ICE9PSBcIm9iamVjdFwiKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBJbnZhbGlkIHVzYWdlLiBCb3RoIHNvdXJjZSAoJHtKU09OLnN0cmluZ2lmeShcbiAgICAgICAgICBzb3VyY2VcbiAgICAgICAgKX0pIGFuZCB0YXJnZXQgKCR7SlNPTi5zdHJpbmdpZnkodGFyZ2V0KX0pIG11c3QgYmUgb2JqZWN0c2BcbiAgICAgICk7XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMoc291cmNlKSkge1xuICAgICAgY29uc3QgdmFsdWUgPSBzb3VyY2Vba2V5XTtcbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiYgdmFsdWUgIT0gbnVsbCAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgLy8gaWYgdGhlIHZhbHVlIGF0IHRoZSB0YXJnZXQgaXMgbm90IGFuIG9iamVjdCwgb3ZlcnJpZGUgaXQgd2l0aCBhblxuICAgICAgICAvLyBvYmplY3Qgc28gd2UgY2FuIGNvbnRpbnVlIHRoZSByZWN1cnNpb25cbiAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXRba2V5XSAhPT0gXCJvYmplY3RcIikge1xuICAgICAgICAgIHRhcmdldFtrZXldID0ge307XG4gICAgICAgIH1cblxuICAgICAgICBkZWVwTWVyZ2UodGFyZ2V0W2tleV0sIHZhbHVlKTtcblxuICAgICAgICAvLyBpZiB0aGUgcmVzdWx0IG9mIHRoZSBtZXJnZSBpcyBhbiBlbXB0eSBvYmplY3QsIGl0J3MgYmVjYXVzZSB0aGVcbiAgICAgICAgLy8gZXZlbnR1YWwgdmFsdWUgd2UgYXNzaWduZWQgaXMgYHVuZGVmaW5lZGAsIGFuZCB0aGVyZSBhcmUgbm9cbiAgICAgICAgLy8gc2libGluZyBjb25jcmV0ZSB2YWx1ZXMgYWxvbmdzaWRlLCBzbyB3ZSBjYW4gZGVsZXRlIHRoaXMgdHJlZS5cbiAgICAgICAgY29uc3Qgb3V0cHV0ID0gdGFyZ2V0W2tleV07XG4gICAgICAgIGlmICh0eXBlb2Ygb3V0cHV0ID09PSBcIm9iamVjdFwiICYmIE9iamVjdC5rZXlzKG91dHB1dCkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgZGVsZXRlIHRhcmdldFtrZXldO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZGVsZXRlIHRhcmdldFtrZXldO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuIl19