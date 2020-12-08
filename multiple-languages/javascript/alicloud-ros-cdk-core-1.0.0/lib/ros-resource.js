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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9zLXJlc291cmNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicm9zLXJlc291cmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLCtEQUEwRDtBQUMxRCxpQ0FBZ0Y7QUFFaEYsK0NBQTJDO0FBRTNDLGlDQUF1QztBQUN2QywyREFBdUQ7QUFDdkQsNkRBQTJFO0FBRTNFLCtDQUE4QztBQWU5Qzs7R0FFRztBQUNILE1BQWEsV0FBWSxTQUFRLDJCQUFhO0lBOEM1Qzs7O09BR0c7SUFDSCxZQUFZLEtBQWdCLEVBQUUsRUFBVSxFQUFFLEtBQXVCO1FBQy9ELEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUEzQ25CLDZFQUE2RTtRQUM3RSw2RUFBNkU7UUFDN0Usa0VBQWtFO1FBQ2xFLDhFQUE4RTtRQUM5RSw4RUFBOEU7UUFDOUUsMEVBQTBFO1FBQzFFLCtDQUErQztRQUUvQzs7V0FFRztRQUNhLGVBQVUsR0FBd0IsRUFBRSxDQUFDO1FBYXJEOztXQUVHO1FBQ2MsaUJBQVksR0FBUSxFQUFFLENBQUM7UUFFeEM7Ozs7V0FJRztRQUNjLGNBQVMsR0FBRyxJQUFJLEdBQUcsRUFBZSxDQUFDO1FBRW5DLGlCQUFZLEdBQUcsSUFBSSxHQUFHLEVBQVUsQ0FBQztRQVFoRCxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFO1lBQ2YsTUFBTSxJQUFJLEtBQUssQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO1NBQ3BEO1FBRUQsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDLFVBQVUsSUFBSSxFQUFFLENBQUM7SUFDL0MsQ0FBQztJQTFERDs7T0FFRztJQUNJLE1BQU0sQ0FBQyxhQUFhLENBQUMsU0FBcUI7UUFDL0MsT0FBUSxTQUFpQixDQUFDLGVBQWUsS0FBSyxTQUFTLENBQUM7SUFDMUQsQ0FBQztJQXVERDs7T0FFRztJQUNJLGtCQUFrQixDQUN2QixNQUFpQyxFQUNqQyxVQUFnQyxFQUFFO1FBRWxDLE1BQU0sR0FBRyxNQUFNLElBQUksT0FBTyxDQUFDLGFBQWEsSUFBSSxrQ0FBYSxDQUFDLE1BQU0sQ0FBQztRQUVqRSxJQUFJLGNBQWMsQ0FBQztRQUVuQixRQUFRLE1BQU0sRUFBRTtZQUNkLEtBQUssa0NBQWEsQ0FBQyxPQUFPO2dCQUN4QixjQUFjLEdBQUcsdUNBQWlCLENBQUMsTUFBTSxDQUFDO2dCQUMxQyxNQUFNO1lBRVIsS0FBSyxrQ0FBYSxDQUFDLE1BQU07Z0JBQ3ZCLGNBQWMsR0FBRyx1Q0FBaUIsQ0FBQyxNQUFNLENBQUM7Z0JBQzFDLE1BQU07WUFFUjtnQkFDRSxNQUFNLElBQUksS0FBSyxDQUFDLDJCQUEyQixNQUFNLEVBQUUsQ0FBQyxDQUFDO1NBQ3hEO1FBRUQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO1FBQ2hELHNEQUFzRDtRQUN0RCwwREFBMEQ7UUFDMUQsSUFBSTtJQUNOLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLE1BQU0sQ0FBQyxhQUFxQjtRQUNqQyxPQUFPLDRCQUFZLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxhQUFhLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FxQ0c7SUFDSSxXQUFXLENBQUMsSUFBWSxFQUFFLEtBQVU7UUFDekMsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM5QixJQUFJLElBQUksR0FBUSxJQUFJLENBQUMsWUFBWSxDQUFDO1FBRWxDLE9BQU8sS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDdkIsTUFBTSxHQUFHLEdBQUcsS0FBSyxDQUFDLEtBQUssRUFBRyxDQUFDO1lBRTNCLDhEQUE4RDtZQUM5RCxzQ0FBc0M7WUFDdEMsTUFBTSxRQUFRLEdBQ1osSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUk7Z0JBQ2pCLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLFFBQVE7Z0JBQzdCLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUM1QixJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNiLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7YUFDaEI7WUFFRCxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2xCO1FBRUQsTUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLEtBQUssRUFBRyxDQUFDO1FBQy9CLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQztJQUVEOzs7T0FHRztJQUNJLG1CQUFtQixDQUFDLElBQVk7UUFDckMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVNLFdBQVcsQ0FBQyxHQUFXLEVBQUUsS0FBVTtRQUN4QyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUU7WUFDN0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1NBQy9CO1FBQ0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDO0lBQ3hDLENBQUM7SUFFTSxPQUFPLENBQUMsSUFBWTtRQUN6QixJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7SUFDckMsQ0FBQztJQUVNLFlBQVksQ0FBQyxHQUFpQjtRQUNuQyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7SUFDbEMsQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFDSSxtQkFBbUIsQ0FBQyxZQUFvQixFQUFFLEtBQVU7UUFDekQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLFlBQVksRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFRDs7O09BR0c7SUFDSSwyQkFBMkIsQ0FBQyxZQUFvQjtRQUNyRCxJQUFJLENBQUMsbUJBQW1CLENBQUMsWUFBWSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSSxZQUFZLENBQUMsTUFBbUI7UUFDckMsb0JBQWEsQ0FDWCxJQUFJLEVBQ0osTUFBTSxFQUNOLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLGlCQUFpQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUN2RCxDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHO0lBQ0ksUUFBUTtRQUNiLE9BQU8sR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFLEtBQUssSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDO0lBQ3pELENBQUM7SUFFRDs7Ozs7Ozs7O09BU0c7SUFDSSxzQkFBc0IsQ0FBQyxNQUFtQjtRQUMvQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRU0sZ0JBQWdCLENBQUMsTUFBYztRQUNwQyxpREFBaUQ7UUFDakQsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVEOzs7T0FHRztJQUNJLGNBQWM7UUFDbkIsSUFBSTtZQUNGLE1BQU0sR0FBRyxHQUFHO2dCQUNWLFNBQVMsRUFBRTtvQkFDVCwrRUFBK0U7b0JBQy9FLDZDQUE2QztvQkFDN0MsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSx1QkFBZ0IsQ0FDN0I7d0JBQ0UsSUFBSSxFQUFFLElBQUksQ0FBQyxlQUFlO3dCQUMxQixVQUFVLEVBQUUsa0JBQVcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO3dCQUMzQyxTQUFTLEVBQUUsa0JBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7d0JBQzdELDZFQUE2RTt3QkFDN0UsMkZBQTJGO3dCQUMzRixjQUFjLEVBQUUsOEJBQXVCLENBQ3JDLElBQUksRUFDSixJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FDL0I7d0JBQ0QsUUFBUSxFQUFFLGtCQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUM7d0JBQy9DLFdBQVcsRUFBRSxrQkFBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDO3dCQUNyRCxTQUFTLEVBQ1AsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTOzRCQUN6QixJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxTQUFTO3FCQUN0QyxFQUNELENBQUMsS0FBSyxFQUFFLEVBQUU7d0JBQ1IsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUN6QyxLQUFLLENBQUMsVUFBVSxJQUFJLEVBQUUsQ0FDdkIsQ0FBQzt3QkFDRixLQUFLLENBQUMsVUFBVTs0QkFDZCxhQUFhO2dDQUNiLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0NBQzVDLENBQUMsQ0FBQyxhQUFhO29DQUNmLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQzt3QkFDakIsT0FBTyxTQUFTLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztvQkFDN0MsQ0FBQyxDQUNGO2lCQUNGO2FBQ0YsQ0FBQztZQUNGLE9BQU8sR0FBRyxDQUFDO1NBQ1o7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLGlCQUFpQjtZQUNqQixDQUFDLENBQUMsT0FBTyxHQUFHLHNCQUFzQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakUsK0RBQStEO1lBQy9ELE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7WUFDakMsSUFBSSxLQUFLLEVBQUU7Z0JBQ1QsTUFBTSxhQUFhLEdBQUcsQ0FBQyw2QkFBNkIsRUFBRSxHQUFHLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FDbEUsU0FBUyxDQUNWLENBQUM7Z0JBQ0YsTUFBTSxZQUFZLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQ2pDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FDOUMsQ0FBQztnQkFDRixDQUFDLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxDQUFDLE9BQU8sT0FBTyxhQUFhLG9DQUFvQyxZQUFZLEVBQUUsQ0FBQzthQUM5RjtZQUVELFdBQVc7WUFDWCxNQUFNLENBQUMsQ0FBQztTQUNUO1FBRUQsU0FBUyxrQkFBa0IsQ0FBQyxZQUF5QjtZQUNuRCxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDbEMsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFjLGFBQWE7UUFDekIsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLGNBQWMsSUFBSSxFQUFFLENBQUM7UUFDeEMsSUFBSSx3QkFBVSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUMvQixNQUFNLFFBQVEsR0FBMkIsRUFBRSxDQUFDO1lBQzVDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDN0QsT0FBTyxTQUFTLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1NBQ25DO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRVMsZ0JBQWdCLENBQUMsS0FFMUI7UUFDQyxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILElBQWMsaUJBQWlCO1FBQzdCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUM3QixDQUFDO0lBRVMsa0JBQWtCLENBQUMsV0FBZ0I7UUFDM0MsVUFBVTtJQUNaLENBQUM7Q0FDRjtBQXRWRCxrQ0FzVkM7QUEyQkQ7OztHQUdHO0FBQ0gsU0FBUyxTQUFTLENBQUMsTUFBVyxFQUFFLEdBQUcsT0FBYztJQUMvQyxLQUFLLE1BQU0sTUFBTSxJQUFJLE9BQU8sRUFBRTtRQUM1QixJQUFJLE9BQU8sTUFBTSxLQUFLLFFBQVEsSUFBSSxPQUFPLE1BQU0sS0FBSyxRQUFRLEVBQUU7WUFDNUQsTUFBTSxJQUFJLEtBQUssQ0FDYiwrQkFBK0IsSUFBSSxDQUFDLFNBQVMsQ0FDM0MsTUFBTSxDQUNQLGlCQUFpQixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FDNUQsQ0FBQztTQUNIO1FBRUQsS0FBSyxNQUFNLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ3JDLE1BQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMxQixJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsSUFBSSxLQUFLLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDdkUsbUVBQW1FO2dCQUNuRSwwQ0FBMEM7Z0JBQzFDLElBQUksT0FBTyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssUUFBUSxFQUFFO29CQUNuQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO2lCQUNsQjtnQkFFRCxTQUFTLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUU5QixrRUFBa0U7Z0JBQ2xFLDhEQUE4RDtnQkFDOUQsaUVBQWlFO2dCQUNqRSxNQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzNCLElBQUksT0FBTyxNQUFNLEtBQUssUUFBUSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtvQkFDbEUsT0FBTyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQ3BCO2FBQ0Y7aUJBQU0sSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO2dCQUM5QixPQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNwQjtpQkFBTTtnQkFDTCxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDO2FBQ3JCO1NBQ0Y7S0FDRjtJQUVELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3NEZWxldGlvblBvbGljeSB9IGZyb20gXCIuL3Jvcy1yZXNvdXJjZS1wb2xpY3lcIjtcbmltcG9ydCB7IGNhcGl0YWxpemVQcm9wZXJ0eU5hbWVzLCBpZ25vcmVFbXB0eSwgUG9zdFJlc29sdmVUb2tlbiB9IGZyb20gXCIuL3V0aWxcIjtcbmltcG9ydCB7IENvbnN0cnVjdCwgSUNvbnN0cnVjdCB9IGZyb20gXCIuL2NvbnN0cnVjdC1jb21wYXRcIjtcbmltcG9ydCB7IFRhZ01hbmFnZXIgfSBmcm9tIFwiLi90YWctbWFuYWdlclwiO1xuaW1wb3J0IHsgUmVmZXJlbmNlIH0gZnJvbSBcIi4vcmVmZXJlbmNlXCI7XG5pbXBvcnQgeyBhZGREZXBlbmRlbmN5IH0gZnJvbSBcIi4vZGVwc1wiO1xuaW1wb3J0IHsgUm9zUmVmZXJlbmNlIH0gZnJvbSBcIi4vcHJpdmF0ZS9yb3MtcmVmZXJlbmNlXCI7XG5pbXBvcnQgeyBSZW1vdmFsUG9saWN5LCBSZW1vdmFsUG9saWN5T3B0aW9ucyB9IGZyb20gXCIuL3Jvcy1yZW1vdmFsLXBvbGljeVwiO1xuaW1wb3J0IHsgUm9zQ29uZGl0aW9uIH0gZnJvbSBcIi4vcm9zLWNvbmRpdGlvblwiO1xuaW1wb3J0IHsgUm9zUmVmRWxlbWVudCB9IGZyb20gXCIuL3Jvcy1lbGVtZW50XCI7XG5leHBvcnQgaW50ZXJmYWNlIFJvc1Jlc291cmNlUHJvcHMge1xuICAvKipcbiAgICogUk9TIHRlbXBsYXRlIHJlc291cmNlIHR5cGUgKGUuZy4gYEFMSVlVTjo6RUNTOjpJbnN0YW5jZWApLlxuICAgKi9cbiAgcmVhZG9ubHkgdHlwZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBSZXNvdXJjZSBwcm9wZXJ0aWVzLlxuICAgKlxuICAgKiBAZGVmYXVsdCAtIE5vIHJlc291cmNlIHByb3BlcnRpZXMuXG4gICAqL1xuICByZWFkb25seSBwcm9wZXJ0aWVzPzogeyBbbmFtZTogc3RyaW5nXTogYW55IH07XG59XG5cbi8qKlxuICogUmVwcmVzZW50cyBhIFJPUyByZXNvdXJjZS5cbiAqL1xuZXhwb3J0IGNsYXNzIFJvc1Jlc291cmNlIGV4dGVuZHMgUm9zUmVmRWxlbWVudCB7XG4gIC8qKlxuICAgKiBDaGVjayB3aGV0aGVyIHRoZSBnaXZlbiBjb25zdHJ1Y3QgaXMgYSBSb3NSZXNvdXJjZVxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBpc1Jvc1Jlc291cmNlKGNvbnN0cnVjdDogSUNvbnN0cnVjdCk6IGNvbnN0cnVjdCBpcyBSb3NSZXNvdXJjZSB7XG4gICAgcmV0dXJuIChjb25zdHJ1Y3QgYXMgYW55KS5yb3NSZXNvdXJjZVR5cGUgIT09IHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8vIE1BSU5UQUlORVJTIE5PVEU6IHRoaXMgY2xhc3Mgc2VydmVzIGFzIHRoZSBiYXNlIGNsYXNzIGZvciB0aGUgZ2VuZXJhdGVkIEwxXG4gIC8vIChcIkFMSVlVTlwiKSByZXNvdXJjZXMgKHN1Y2ggYXMgYGVjcy5JbnN0YW5jZWApLiBUaGVzZSByZXNvdXJjZXMgd2lsbCBoYXZlIGFcbiAgLy8gcHJvcGVydHkgZm9yIGVhY2ggUk9TIHByb3BlcnR5IG9mIHRoZSByZXNvdXJjZS4gVGhpcyBtZWFucyB0aGF0XG4gIC8vIGlmIGF0IHNvbWUgcG9pbnQgaW4gdGhlIGZ1dHVyZSBhIHByb3BlcnR5IGlzIGludHJvZHVjZWQgd2l0aCBhIG5hbWUgc2ltaWxhclxuICAvLyB0byBvbmUgb2YgdGhlIHByb3BlcnRpZXMgaGVyZSwgaXQgd2lsbCBiZSBcIm1hc2tlZFwiIGJ5IHRoZSBkZXJpdmVkIGNsYXNzLiBUb1xuICAvLyB0aGF0IGVuZCwgd2UgcHJlZml4IGFsbCBwcm9wZXJ0aWVzIGluIHRoaXMgY2xhc3Mgd2l0aCBgcm9zWHh4YCB3aXRoIHRoZVxuICAvLyBob3BlIHRvIGF2b2lkIHRob3NlIGNvbmZsaWN0cyBpbiB0aGUgZnV0dXJlLlxuXG4gIC8qKlxuICAgKiBPcHRpb25zIGZvciB0aGlzIHJlc291cmNlLCBzdWNoIGFzIGNvbmRpdGlvbiwgdXBkYXRlIHBvbGljeSBldGMuXG4gICAqL1xuICBwdWJsaWMgcmVhZG9ubHkgcm9zT3B0aW9uczogSVJvc1Jlc291cmNlT3B0aW9ucyA9IHt9O1xuXG4gIC8qKlxuICAgKiBST1MgcmVzb3VyY2UgdHlwZS5cbiAgICovXG4gIHB1YmxpYyByZWFkb25seSByb3NSZXNvdXJjZVR5cGU6IHN0cmluZztcblxuICAvKipcbiAgICogQWxpeXVuIHJlc291cmNlIHByb3BlcnRpZXMuXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgcHJvdGVjdGVkIHJlYWRvbmx5IF9yb3NQcm9wZXJ0aWVzOiBhbnk7XG5cbiAgLyoqXG4gICAqIEFuIG9iamVjdCB0byBiZSBtZXJnZWQgb24gdG9wIG9mIHRoZSBlbnRpcmUgcmVzb3VyY2UgZGVmaW5pdGlvbi5cbiAgICovXG4gIHByaXZhdGUgcmVhZG9ubHkgcmF3T3ZlcnJpZGVzOiBhbnkgPSB7fTtcblxuICAvKipcbiAgICogTG9naWNhbCBJRHMgb2YgZGVwZW5kZW5jaWVzLlxuICAgKlxuICAgKiBJcyBmaWxsZWQgZHVyaW5nIHByZXBhcmUoKS5cbiAgICovXG4gIHByaXZhdGUgcmVhZG9ubHkgZGVwZW5kc09uID0gbmV3IFNldDxSb3NSZXNvdXJjZT4oKTtcbiAgcHJpdmF0ZSByZWFkb25seSBpZDogc3RyaW5nO1xuICBwcml2YXRlIHJlYWRvbmx5IHJvc0RlcGVuZHNPbiA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgcmVzb3VyY2UgY29uc3RydWN0LlxuICAgKiBAcGFyYW0gcm9zUmVzb3VyY2VUeXBlIFRoZSBST1MgdHlwZSBvZiB0aGlzIHJlc291cmNlIChlLmcuIEFMSVlVTjo6RUNTOjpJbnN0YW5jZSlcbiAgICovXG4gIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NSZXNvdXJjZVByb3BzKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkKTtcbiAgICB0aGlzLmlkID0gaWQ7XG4gICAgaWYgKCFwcm9wcy50eXBlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgYHR5cGVgIHByb3BlcnR5IGlzIHJlcXVpcmVkXCIpO1xuICAgIH1cblxuICAgIHRoaXMucm9zUmVzb3VyY2VUeXBlID0gcHJvcHMudHlwZTtcbiAgICB0aGlzLl9yb3NQcm9wZXJ0aWVzID0gcHJvcHMucHJvcGVydGllcyB8fCB7fTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBkZWxldGlvbiBwb2xpY3kgb2YgdGhlIHJlc291cmNlIGJhc2VkIG9uIHRoZSByZW1vdmFsIHBvbGljeSBzcGVjaWZpZWQuXG4gICAqL1xuICBwdWJsaWMgYXBwbHlSZW1vdmFsUG9saWN5KFxuICAgIHBvbGljeTogUmVtb3ZhbFBvbGljeSB8IHVuZGVmaW5lZCxcbiAgICBvcHRpb25zOiBSZW1vdmFsUG9saWN5T3B0aW9ucyA9IHt9XG4gICkge1xuICAgIHBvbGljeSA9IHBvbGljeSB8fCBvcHRpb25zLmRlZmF1bHRQb2xpY3kgfHwgUmVtb3ZhbFBvbGljeS5SRVRBSU47XG5cbiAgICBsZXQgZGVsZXRpb25Qb2xpY3k7XG5cbiAgICBzd2l0Y2ggKHBvbGljeSkge1xuICAgICAgY2FzZSBSZW1vdmFsUG9saWN5LkRFU1RST1k6XG4gICAgICAgIGRlbGV0aW9uUG9saWN5ID0gUm9zRGVsZXRpb25Qb2xpY3kuREVMRVRFO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBSZW1vdmFsUG9saWN5LlJFVEFJTjpcbiAgICAgICAgZGVsZXRpb25Qb2xpY3kgPSBSb3NEZWxldGlvblBvbGljeS5SRVRBSU47XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgcmVtb3ZhbCBwb2xpY3k6ICR7cG9saWN5fWApO1xuICAgIH1cblxuICAgIHRoaXMucm9zT3B0aW9ucy5kZWxldGlvblBvbGljeSA9IGRlbGV0aW9uUG9saWN5O1xuICAgIC8vIGlmIChvcHRpb25zLmFwcGx5VG9VcGRhdGVSZXBsYWNlUG9saWN5ICE9PSBmYWxzZSkge1xuICAgIC8vICAgdGhpcy5yb3NPcHRpb25zLnVwZGF0ZVJlcGxhY2VQb2xpY3kgPSBkZWxldGlvblBvbGljeTtcbiAgICAvLyB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIHRva2VuIGZvciBhbiBydW50aW1lIGF0dHJpYnV0ZSBvZiB0aGlzIHJlc291cmNlLlxuICAgKiBJZGVhbGx5LCB1c2UgZ2VuZXJhdGVkIGF0dHJpYnV0ZSBhY2Nlc3NvcnMgKGUuZy4gYHJlc291cmNlLmFybmApLCBidXQgdGhpcyBjYW4gYmUgdXNlZCBmb3IgZnV0dXJlIGNvbXBhdGliaWxpdHlcbiAgICogaW4gY2FzZSB0aGVyZSBpcyBubyBnZW5lcmF0ZWQgYXR0cmlidXRlLlxuICAgKiBAcGFyYW0gYXR0cmlidXRlTmFtZSBUaGUgbmFtZSBvZiB0aGUgYXR0cmlidXRlLlxuICAgKi9cbiAgcHVibGljIGdldEF0dChhdHRyaWJ1dGVOYW1lOiBzdHJpbmcpOiBSZWZlcmVuY2Uge1xuICAgIHJldHVybiBSb3NSZWZlcmVuY2UuZm9yKHRoaXMsIGF0dHJpYnV0ZU5hbWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYW4gb3ZlcnJpZGUgdG8gdGhlIHN5bnRoZXNpemVkIFJPUyByZXNvdXJjZS4gVG8gYWRkIGFcbiAgICogcHJvcGVydHkgb3ZlcnJpZGUsIGVpdGhlciB1c2UgYGFkZFByb3BlcnR5T3ZlcnJpZGVgIG9yIHByZWZpeCBgcGF0aGAgd2l0aFxuICAgKiBcIlByb3BlcnRpZXMuXCIgKGkuZS4gYFByb3BlcnRpZXMuVG9waWNOYW1lYCkuXG4gICAqXG4gICAqIElmIHRoZSBvdmVycmlkZSBpcyBuZXN0ZWQsIHNlcGFyYXRlIGVhY2ggbmVzdGVkIGxldmVsIHVzaW5nIGEgZG90ICguKSBpbiB0aGUgcGF0aCBwYXJhbWV0ZXIuXG4gICAqIElmIHRoZXJlIGlzIGFuIGFycmF5IGFzIHBhcnQgb2YgdGhlIG5lc3RpbmcsIHNwZWNpZnkgdGhlIGluZGV4IGluIHRoZSBwYXRoLlxuICAgKlxuICAgKiBGb3IgZXhhbXBsZSxcbiAgICogYGBgdHlwZXNjcmlwdFxuICAgKiBhZGRPdmVycmlkZSgnUHJvcGVydGllcy5HbG9iYWxTZWNvbmRhcnlJbmRleGVzLjAuUHJvamVjdGlvbi5Ob25LZXlBdHRyaWJ1dGVzJywgWydteWF0dHJpYnV0ZSddKVxuICAgKiBhZGRPdmVycmlkZSgnUHJvcGVydGllcy5HbG9iYWxTZWNvbmRhcnlJbmRleGVzLjEuUHJvamVjdGlvblR5cGUnLCAnSU5DTFVERScpXG4gICAqIGBgYFxuICAgKiB3b3VsZCBhZGQgdGhlIG92ZXJyaWRlc1xuICAgKiBgYGBqc29uXG4gICAqIFwiUHJvcGVydGllc1wiOiB7XG4gICAqICAgXCJHbG9iYWxTZWNvbmRhcnlJbmRleGVzXCI6IFtcbiAgICogICAgIHtcbiAgICogICAgICAgXCJQcm9qZWN0aW9uXCI6IHtcbiAgICogICAgICAgICBcIk5vbktleUF0dHJpYnV0ZXNcIjogWyBcIm15YXR0cmlidXRlXCIgXVxuICAgKiAgICAgICAgIC4uLlxuICAgKiAgICAgICB9XG4gICAqICAgICAgIC4uLlxuICAgKiAgICAgfSxcbiAgICogICAgIHtcbiAgICogICAgICAgXCJQcm9qZWN0aW9uVHlwZVwiOiBcIklOQ0xVREVcIlxuICAgKiAgICAgICAuLi5cbiAgICogICAgIH0sXG4gICAqICAgXVxuICAgKiAgIC4uLlxuICAgKiB9XG4gICAqIGBgYFxuICAgKlxuICAgKiBAcGFyYW0gcGF0aCAtIFRoZSBwYXRoIG9mIHRoZSBwcm9wZXJ0eSwgeW91IGNhbiB1c2UgZG90IG5vdGF0aW9uIHRvXG4gICAqICAgICAgICBvdmVycmlkZSB2YWx1ZXMgaW4gY29tcGxleCB0eXBlcy4gQW55IGludGVybWRlZGlhdGUga2V5c1xuICAgKiAgICAgICAgd2lsbCBiZSBjcmVhdGVkIGFzIG5lZWRlZC5cbiAgICogQHBhcmFtIHZhbHVlIC0gVGhlIHZhbHVlLiBDb3VsZCBiZSBwcmltaXRpdmUgb3IgY29tcGxleC5cbiAgICovXG4gIHB1YmxpYyBhZGRPdmVycmlkZShwYXRoOiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcbiAgICBjb25zdCBwYXJ0cyA9IHBhdGguc3BsaXQoXCIuXCIpO1xuICAgIGxldCBjdXJyOiBhbnkgPSB0aGlzLnJhd092ZXJyaWRlcztcblxuICAgIHdoaWxlIChwYXJ0cy5sZW5ndGggPiAxKSB7XG4gICAgICBjb25zdCBrZXkgPSBwYXJ0cy5zaGlmdCgpITtcblxuICAgICAgLy8gaWYgd2UgY2FuJ3QgcmVjdXJzZSBmdXJ0aGVyIG9yIHRoZSBwcmV2aW91cyB2YWx1ZSBpcyBub3QgYW5cbiAgICAgIC8vIG9iamVjdCBvdmVyd3JpdGUgaXQgd2l0aCBhbiBvYmplY3QuXG4gICAgICBjb25zdCBpc09iamVjdCA9XG4gICAgICAgIGN1cnJba2V5XSAhPSBudWxsICYmXG4gICAgICAgIHR5cGVvZiBjdXJyW2tleV0gPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgIUFycmF5LmlzQXJyYXkoY3VycltrZXldKTtcbiAgICAgIGlmICghaXNPYmplY3QpIHtcbiAgICAgICAgY3VycltrZXldID0ge307XG4gICAgICB9XG5cbiAgICAgIGN1cnIgPSBjdXJyW2tleV07XG4gICAgfVxuXG4gICAgY29uc3QgbGFzdEtleSA9IHBhcnRzLnNoaWZ0KCkhO1xuICAgIGN1cnJbbGFzdEtleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTeW50YWN0aWMgc3VnYXIgZm9yIGBhZGRPdmVycmlkZShwYXRoLCB1bmRlZmluZWQpYC5cbiAgICogQHBhcmFtIHBhdGggVGhlIHBhdGggb2YgdGhlIHZhbHVlIHRvIGRlbGV0ZVxuICAgKi9cbiAgcHVibGljIGFkZERlbGV0aW9uT3ZlcnJpZGUocGF0aDogc3RyaW5nKSB7XG4gICAgdGhpcy5hZGRPdmVycmlkZShwYXRoLCB1bmRlZmluZWQpO1xuICB9XG5cbiAgcHVibGljIGFkZE1ldGFEYXRhKGtleTogc3RyaW5nLCB2YWx1ZTogYW55KSB7XG4gICAgaWYgKCF0aGlzLnJvc09wdGlvbnMubWV0YWRhdGEpIHtcbiAgICAgIHRoaXMucm9zT3B0aW9ucy5tZXRhZGF0YSA9IHt9O1xuICAgIH1cbiAgICB0aGlzLnJvc09wdGlvbnMubWV0YWRhdGFba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcHVibGljIGFkZERlc2MoZGVzYzogc3RyaW5nKSB7XG4gICAgdGhpcy5yb3NPcHRpb25zLmRlc2NyaXB0aW9uID0gZGVzYztcbiAgfVxuXG4gIHB1YmxpYyBhZGRDb25kaXRpb24oY29uOiBSb3NDb25kaXRpb24pIHtcbiAgICB0aGlzLnJvc09wdGlvbnMuY29uZGl0aW9uID0gY29uO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYW4gb3ZlcnJpZGUgdG8gYSByZXNvdXJjZSBwcm9wZXJ0eS5cbiAgICpcbiAgICogU3ludGFjdGljIHN1Z2FyIGZvciBgYWRkT3ZlcnJpZGUoXCJQcm9wZXJ0aWVzLjwuLi4+XCIsIHZhbHVlKWAuXG4gICAqXG4gICAqIEBwYXJhbSBwcm9wZXJ0eVBhdGggVGhlIHBhdGggb2YgdGhlIHByb3BlcnR5XG4gICAqIEBwYXJhbSB2YWx1ZSBUaGUgdmFsdWVcbiAgICovXG4gIHB1YmxpYyBhZGRQcm9wZXJ0eU92ZXJyaWRlKHByb3BlcnR5UGF0aDogc3RyaW5nLCB2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5hZGRPdmVycmlkZShgUHJvcGVydGllcy4ke3Byb3BlcnR5UGF0aH1gLCB2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhbiBvdmVycmlkZSB0aGF0IGRlbGV0ZXMgdGhlIHZhbHVlIG9mIGEgcHJvcGVydHkgZnJvbSB0aGUgcmVzb3VyY2UgZGVmaW5pdGlvbi5cbiAgICogQHBhcmFtIHByb3BlcnR5UGF0aCBUaGUgcGF0aCB0byB0aGUgcHJvcGVydHkuXG4gICAqL1xuICBwdWJsaWMgYWRkUHJvcGVydHlEZWxldGlvbk92ZXJyaWRlKHByb3BlcnR5UGF0aDogc3RyaW5nKSB7XG4gICAgdGhpcy5hZGRQcm9wZXJ0eU92ZXJyaWRlKHByb3BlcnR5UGF0aCwgdW5kZWZpbmVkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgdGhhdCB0aGlzIHJlc291cmNlIGRlcGVuZHMgb24gYW5vdGhlciByZXNvdXJjZSBhbmQgY2Fubm90IGJlXG4gICAqIHByb3Zpc2lvbmVkIHVubGVzcyB0aGUgb3RoZXIgcmVzb3VyY2UgaGFzIGJlZW4gc3VjY2Vzc2Z1bGx5IHByb3Zpc2lvbmVkLlxuICAgKlxuICAgKiBUaGlzIGNhbiBiZSB1c2VkIGZvciByZXNvdXJjZXMgYWNyb3NzIHN0YWNrcyAob3IgbmVzdGVkIHN0YWNrKSBib3VuZGFyaWVzXG4gICAqIGFuZCB0aGUgZGVwZW5kZW5jeSB3aWxsIGF1dG9tYXRpY2FsbHkgYmUgdHJhbnNmZXJyZWQgdG8gdGhlIHJlbGV2YW50IHNjb3BlLlxuICAgKi9cbiAgcHVibGljIGFkZERlcGVuZHNPbih0YXJnZXQ6IFJvc1Jlc291cmNlKSB7XG4gICAgYWRkRGVwZW5kZW5jeShcbiAgICAgIHRoaXMsXG4gICAgICB0YXJnZXQsXG4gICAgICBgXCIke3RoaXMubm9kZS5wYXRofVwiIGRlcGVuZHMgb24gXCIke3RhcmdldC5ub2RlLnBhdGh9XCJgXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIHJlc291cmNlXG4gICAqL1xuICBwdWJsaWMgdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIGAke3N1cGVyLnRvU3RyaW5nKCl9IFske3RoaXMucm9zUmVzb3VyY2VUeXBlfV1gO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCBieSB0aGUgYGFkZERlcGVuZGVuY3lgIGhlbHBlciBmdW5jdGlvbiBpbiBvcmRlciB0byByZWFsaXplIGEgZGlyZWN0XG4gICAqIGRlcGVuZGVuY3kgYmV0d2VlbiB0d28gcmVzb3VyY2VzIHRoYXQgYXJlIGRpcmVjdGx5IGRlZmluZWQgaW4gdGhlIHNhbWVcbiAgICogc3RhY2tzLlxuICAgKlxuICAgKiBVc2UgYHJlc291cmNlLmFkZERlcGVuZHNPbmAgdG8gZGVmaW5lIHRoZSBkZXBlbmRlbmN5IGJldHdlZW4gdHdvIHJlc291cmNlcyxcbiAgICogd2hpY2ggYWxzbyB0YWtlcyBzdGFjayBib3VuZGFyaWVzIGludG8gYWNjb3VudC5cbiAgICpcbiAgICogQGludGVybmFsXG4gICAqL1xuICBwdWJsaWMgX2FkZFJlc291cmNlRGVwZW5kZW5jeSh0YXJnZXQ6IFJvc1Jlc291cmNlKSB7XG4gICAgdGhpcy5kZXBlbmRzT24uYWRkKHRhcmdldCk7XG4gIH1cblxuICBwdWJsaWMgYWRkUm9zRGVwZW5kZW5jeSh0YXJnZXQ6IHN0cmluZykge1xuICAgIC8vIHRhcmdldC5mb3JFYWNoKHggPT4gdGhpcy5yb3NEZXBlbmRzT24uYWRkKHgpKTtcbiAgICB0aGlzLnJvc0RlcGVuZHNPbi5hZGQodGFyZ2V0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFbWl0cyBST1MgdGVtcGxhdGUgZm9yIHRoaXMgcmVzb3VyY2UuXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgcHVibGljIF90b1Jvc1RlbXBsYXRlKCk6IG9iamVjdCB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJldCA9IHtcbiAgICAgICAgUmVzb3VyY2VzOiB7XG4gICAgICAgICAgLy8gUG9zdC1SZXNvbHZlIG9wZXJhdGlvbiBzaW5jZSBvdGhlcndpc2UgZGVlcE1lcmdlIGlzIGdvaW5nIHRvIG1peCB2YWx1ZXMgaW50b1xuICAgICAgICAgIC8vIHRoZSBUb2tlbiBvYmplY3RzIHJldHVybmVkIGJ5IGlnbm9yZUVtcHR5LlxuICAgICAgICAgIFt0aGlzLmlkXTogbmV3IFBvc3RSZXNvbHZlVG9rZW4oXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFR5cGU6IHRoaXMucm9zUmVzb3VyY2VUeXBlLFxuICAgICAgICAgICAgICBQcm9wZXJ0aWVzOiBpZ25vcmVFbXB0eSh0aGlzLnJvc1Byb3BlcnRpZXMpLFxuICAgICAgICAgICAgICBEZXBlbmRzT246IGlnbm9yZUVtcHR5KHJlbmRlclJvc0RlcGVuZHNPbih0aGlzLnJvc0RlcGVuZHNPbikpLFxuICAgICAgICAgICAgICAvLyBVcGRhdGVQb2xpY3k6IGNhcGl0YWxpemVQcm9wZXJ0eU5hbWVzKHRoaXMsIHRoaXMucm9zT3B0aW9ucy51cGRhdGVQb2xpY3kpLFxuICAgICAgICAgICAgICAvLyBVcGRhdGVSZXBsYWNlUG9saWN5OiBjYXBpdGFsaXplUHJvcGVydHlOYW1lcyh0aGlzLCB0aGlzLnJvc09wdGlvbnMudXBkYXRlUmVwbGFjZVBvbGljeSksXG4gICAgICAgICAgICAgIERlbGV0aW9uUG9saWN5OiBjYXBpdGFsaXplUHJvcGVydHlOYW1lcyhcbiAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgIHRoaXMucm9zT3B0aW9ucy5kZWxldGlvblBvbGljeVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBNZXRhZGF0YTogaWdub3JlRW1wdHkodGhpcy5yb3NPcHRpb25zLm1ldGFkYXRhKSxcbiAgICAgICAgICAgICAgRGVzY3JpcHRpb246IGlnbm9yZUVtcHR5KHRoaXMucm9zT3B0aW9ucy5kZXNjcmlwdGlvbiksXG4gICAgICAgICAgICAgIENvbmRpdGlvbjpcbiAgICAgICAgICAgICAgICB0aGlzLnJvc09wdGlvbnMuY29uZGl0aW9uICYmXG4gICAgICAgICAgICAgICAgdGhpcy5yb3NPcHRpb25zLmNvbmRpdGlvbi5sb2dpY2FsSWQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgKHByb3BzKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHJlbmRlcmVkUHJvcHMgPSB0aGlzLnJlbmRlclByb3BlcnRpZXMoXG4gICAgICAgICAgICAgICAgcHJvcHMuUHJvcGVydGllcyB8fCB7fVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICBwcm9wcy5Qcm9wZXJ0aWVzID1cbiAgICAgICAgICAgICAgICByZW5kZXJlZFByb3BzICYmXG4gICAgICAgICAgICAgICAgKE9iamVjdC52YWx1ZXMocmVuZGVyZWRQcm9wcykuZmluZCgodikgPT4gISF2KVxuICAgICAgICAgICAgICAgICAgPyByZW5kZXJlZFByb3BzXG4gICAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZCk7XG4gICAgICAgICAgICAgIHJldHVybiBkZWVwTWVyZ2UocHJvcHMsIHRoaXMucmF3T3ZlcnJpZGVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICAgIHJldHVybiByZXQ7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLy8gQ2hhbmdlIG1lc3NhZ2VcbiAgICAgIGUubWVzc2FnZSA9IGBXaGlsZSBzeW50aGVzaXppbmcgJHt0aGlzLm5vZGUucGF0aH06ICR7ZS5tZXNzYWdlfWA7XG4gICAgICAvLyBBZGp1c3Qgc3RhY2sgdHJhY2UgKG1ha2UgaXQgbG9vayBsaWtlIG5vZGUgYnVpbHQgaXQsIHRvby4uLilcbiAgICAgIGNvbnN0IHRyYWNlID0gdGhpcy5jcmVhdGlvblN0YWNrO1xuICAgICAgaWYgKHRyYWNlKSB7XG4gICAgICAgIGNvbnN0IGNyZWF0aW9uU3RhY2sgPSBbXCItLS0gcmVzb3VyY2UgY3JlYXRlZCBhdCAtLS1cIiwgLi4udHJhY2VdLmpvaW4oXG4gICAgICAgICAgXCJcXG4gIGF0IFwiXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IHByb2JsZW1UcmFjZSA9IGUuc3RhY2suc3Vic3RyKFxuICAgICAgICAgIGUuc3RhY2suaW5kZXhPZihlLm1lc3NhZ2UpICsgZS5tZXNzYWdlLmxlbmd0aFxuICAgICAgICApO1xuICAgICAgICBlLnN0YWNrID0gYCR7ZS5tZXNzYWdlfVxcbiAgJHtjcmVhdGlvblN0YWNrfVxcbiAgLS0tIHByb2JsZW0gZGlzY292ZXJlZCBhdCAtLS0ke3Byb2JsZW1UcmFjZX1gO1xuICAgICAgfVxuXG4gICAgICAvLyBSZS10aHJvd1xuICAgICAgdGhyb3cgZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW5kZXJSb3NEZXBlbmRzT24ocm9zRGVwZW5kc09uOiBTZXQ8c3RyaW5nPikge1xuICAgICAgcmV0dXJuIEFycmF5LmZyb20ocm9zRGVwZW5kc09uKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSB7XG4gICAgY29uc3QgcHJvcHMgPSB0aGlzLl9yb3NQcm9wZXJ0aWVzIHx8IHt9O1xuICAgIGlmIChUYWdNYW5hZ2VyLmlzVGFnZ2FibGUodGhpcykpIHtcbiAgICAgIGNvbnN0IHRhZ3NQcm9wOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ID0ge307XG4gICAgICB0YWdzUHJvcFt0aGlzLnRhZ3MudGFnUHJvcGVydHlOYW1lXSA9IHRoaXMudGFncy5yZW5kZXJUYWdzKCk7XG4gICAgICByZXR1cm4gZGVlcE1lcmdlKHByb3BzLCB0YWdzUHJvcCk7XG4gICAgfVxuICAgIHJldHVybiBwcm9wcztcbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7XG4gICAgW2tleTogc3RyaW5nXTogYW55O1xuICB9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHByb3BzO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBwcm9wZXJ0aWVzIG1vZGlmaWVkIGFmdGVyIGluaXRpYXRpb25cbiAgICpcbiAgICogUmVzb3VyY2VzIHRoYXQgZXhwb3NlIG11dGFibGUgcHJvcGVydGllcyBzaG91bGQgb3ZlcnJpZGUgdGhpcyBmdW5jdGlvbiB0b1xuICAgKiBjb2xsZWN0IGFuZCByZXR1cm4gdGhlIHByb3BlcnRpZXMgb2JqZWN0IGZvciB0aGlzIHJlc291cmNlLlxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCB1cGRhdGVkUHJvcGVyaXRlcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4gdGhpcy5fcm9zUHJvcGVydGllcztcbiAgfVxuXG4gIHByb3RlY3RlZCB2YWxpZGF0ZVByb3BlcnRpZXMoX3Byb3BlcnRpZXM6IGFueSkge1xuICAgIC8vIE5vdGhpbmdcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElSb3NSZXNvdXJjZU9wdGlvbnMge1xuICAvKipcbiAgICogQSBjb25kaXRpb24gdG8gYXNzb2NpYXRlIHdpdGggdGhpcyByZXNvdXJjZS4gVGhpcyBtZWFucyB0aGF0IG9ubHkgaWYgdGhlIGNvbmRpdGlvbiBldmFsdWF0ZXMgdG8gJ3RydWUnIHdoZW4gdGhlIHN0YWNrXG4gICAqIGlzIGRlcGxveWVkLCB0aGUgcmVzb3VyY2Ugd2lsbCBiZSBpbmNsdWRlZC4gVGhpcyBpcyBwcm92aWRlZCB0byBhbGxvdyBDREsgcHJvamVjdHMgdG8gcHJvZHVjZSBsZWdhY3kgdGVtcGxhdGVzLCBidXQgbm9yYW1sbHlcbiAgICogdGhlcmUgaXMgbm8gbmVlZCB0byB1c2UgaXQgaW4gQ0RLIHByb2plY3RzLlxuICAgKi9cbiAgY29uZGl0aW9uPzogUm9zQ29uZGl0aW9uO1xuXG4gIC8qKlxuICAgKiBXaXRoIHRoZSBEZWxldGlvblBvbGljeSBhdHRyaWJ1dGUgeW91IGNhbiBwcmVzZXJ2ZSBvciAoaW4gc29tZSBjYXNlcykgYmFja3VwIGEgcmVzb3VyY2Ugd2hlbiBpdHMgc3RhY2sgaXMgZGVsZXRlZC5cbiAgICogWW91IHNwZWNpZnkgYSBEZWxldGlvblBvbGljeSBhdHRyaWJ1dGUgZm9yIGVhY2ggcmVzb3VyY2UgdGhhdCB5b3Ugd2FudCB0byBjb250cm9sLiBJZiBhIHJlc291cmNlIGhhcyBubyBEZWxldGlvblBvbGljeVxuICAgKiBhdHRyaWJ1dGUsIFJPUyBkZWxldGVzIHRoZSByZXNvdXJjZSBieSBkZWZhdWx0LiBOb3RlIHRoYXQgdGhpcyBjYXBhYmlsaXR5IGFsc28gYXBwbGllcyB0byB1cGRhdGUgb3BlcmF0aW9uc1xuICAgKiB0aGF0IGxlYWQgdG8gcmVzb3VyY2VzIGJlaW5nIHJlbW92ZWQuXG4gICAqL1xuICBkZWxldGlvblBvbGljeT86IFJvc0RlbGV0aW9uUG9saWN5O1xuXG4gIC8qKlxuICAgKiBNZXRhZGF0YSBhc3NvY2lhdGVkIHdpdGggdGhlIFJPUyByZXNvdXJjZS4gVGhpcyBpcyBub3QgdGhlIHNhbWUgYXMgdGhlIGNvbnN0cnVjdCBtZXRhZGF0YSB3aGljaCBjYW4gYmUgYWRkZWRcbiAgICogdXNpbmcgY29uc3RydWN0LmFkZE1ldGFkYXRhKCksIGJ1dCB3b3VsZCBub3QgYXBwZWFyIGluIHRoZSBST1MgdGVtcGxhdGUgYXV0b21hdGljYWxseS5cbiAgICovXG4gIG1ldGFkYXRhPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfTtcblxuICBkZXNjcmlwdGlvbj86IHN0cmluZztcbn1cblxuLyoqXG4gKiBNZXJnZXMgYHNvdXJjZWAgaW50byBgdGFyZ2V0YCwgb3ZlcnJpZGluZyBhbnkgZXhpc3RpbmcgdmFsdWVzLlxuICogYG51bGxgcyB3aWxsIGNhdXNlIGEgdmFsdWUgdG8gYmUgZGVsZXRlZC5cbiAqL1xuZnVuY3Rpb24gZGVlcE1lcmdlKHRhcmdldDogYW55LCAuLi5zb3VyY2VzOiBhbnlbXSkge1xuICBmb3IgKGNvbnN0IHNvdXJjZSBvZiBzb3VyY2VzKSB7XG4gICAgaWYgKHR5cGVvZiBzb3VyY2UgIT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIHRhcmdldCAhPT0gXCJvYmplY3RcIikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW52YWxpZCB1c2FnZS4gQm90aCBzb3VyY2UgKCR7SlNPTi5zdHJpbmdpZnkoXG4gICAgICAgICAgc291cmNlXG4gICAgICAgICl9KSBhbmQgdGFyZ2V0ICgke0pTT04uc3RyaW5naWZ5KHRhcmdldCl9KSBtdXN0IGJlIG9iamVjdHNgXG4gICAgICApO1xuICAgIH1cblxuICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKHNvdXJjZSkpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gc291cmNlW2tleV07XG4gICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmIHZhbHVlICE9IG51bGwgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIC8vIGlmIHRoZSB2YWx1ZSBhdCB0aGUgdGFyZ2V0IGlzIG5vdCBhbiBvYmplY3QsIG92ZXJyaWRlIGl0IHdpdGggYW5cbiAgICAgICAgLy8gb2JqZWN0IHNvIHdlIGNhbiBjb250aW51ZSB0aGUgcmVjdXJzaW9uXG4gICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0W2tleV0gIT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgZGVlcE1lcmdlKHRhcmdldFtrZXldLCB2YWx1ZSk7XG5cbiAgICAgICAgLy8gaWYgdGhlIHJlc3VsdCBvZiB0aGUgbWVyZ2UgaXMgYW4gZW1wdHkgb2JqZWN0LCBpdCdzIGJlY2F1c2UgdGhlXG4gICAgICAgIC8vIGV2ZW50dWFsIHZhbHVlIHdlIGFzc2lnbmVkIGlzIGB1bmRlZmluZWRgLCBhbmQgdGhlcmUgYXJlIG5vXG4gICAgICAgIC8vIHNpYmxpbmcgY29uY3JldGUgdmFsdWVzIGFsb25nc2lkZSwgc28gd2UgY2FuIGRlbGV0ZSB0aGlzIHRyZWUuXG4gICAgICAgIGNvbnN0IG91dHB1dCA9IHRhcmdldFtrZXldO1xuICAgICAgICBpZiAodHlwZW9mIG91dHB1dCA9PT0gXCJvYmplY3RcIiAmJiBPYmplY3Qua2V5cyhvdXRwdXQpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIGRlbGV0ZSB0YXJnZXRba2V5XTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGRlbGV0ZSB0YXJnZXRba2V5XTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cbiJdfQ==