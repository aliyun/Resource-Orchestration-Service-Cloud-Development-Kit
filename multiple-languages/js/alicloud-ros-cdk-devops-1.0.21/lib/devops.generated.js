"use strict";
// Generated from the AliCloud ROS Resource Specification
Object.defineProperty(exports, "__esModule", { value: true });
exports.RosVariableGroup = exports.RosPipelineRun = exports.RosPipelineRelations = exports.RosPipeline = void 0;
const ros = require("@alicloud/ros-cdk-core");
/**
 * Determine whether the given properties match those of a `RosPipelineProps`
 *
 * @param properties - the TypeScript properties of a `RosPipelineProps`
 *
 * @returns the result of the validation.
 */
function RosPipelinePropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('content', ros.requiredValidator)(properties.content));
    errors.collect(ros.propertyValidator('content', ros.validateString)(properties.content));
    errors.collect(ros.propertyValidator('organizationId', ros.requiredValidator)(properties.organizationId));
    errors.collect(ros.propertyValidator('organizationId', ros.validateString)(properties.organizationId));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "RosPipelineProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DEVOPS::Pipeline` resource
 *
 * @param properties - the TypeScript properties of a `RosPipelineProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DEVOPS::Pipeline` resource.
 */
// @ts-ignore TS6133
function rosPipelinePropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosPipelinePropsValidator(properties).assertSuccess();
    }
    return {
        Content: ros.stringToRosTemplate(properties.content),
        Name: ros.stringToRosTemplate(properties.name),
        OrganizationId: ros.stringToRosTemplate(properties.organizationId),
    };
}
/**
 * A ROS template type:  `ALIYUN::DEVOPS::Pipeline`
 */
class RosPipeline extends ros.RosResource {
    /**
     * Create a new `ALIYUN::DEVOPS::Pipeline`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosPipeline.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrPipelineId = this.getAtt('PipelineId');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.content = props.content;
        this.name = props.name;
        this.organizationId = props.organizationId;
    }
    get rosProperties() {
        return {
            content: this.content,
            name: this.name,
            organizationId: this.organizationId,
        };
    }
    renderProperties(props) {
        return rosPipelinePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosPipeline = RosPipeline;
/**
 * The resource type name for this resource class.
 */
RosPipeline.ROS_RESOURCE_TYPE_NAME = "ALIYUN::DEVOPS::Pipeline";
/**
 * Determine whether the given properties match those of a `RosPipelineRelationsProps`
 *
 * @param properties - the TypeScript properties of a `RosPipelineRelationsProps`
 *
 * @returns the result of the validation.
 */
function RosPipelineRelationsPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('relObjectType', ros.requiredValidator)(properties.relObjectType));
    errors.collect(ros.propertyValidator('relObjectType', ros.validateString)(properties.relObjectType));
    errors.collect(ros.propertyValidator('relObjectIds', ros.requiredValidator)(properties.relObjectIds));
    errors.collect(ros.propertyValidator('relObjectIds', ros.listValidator(ros.validateNumber))(properties.relObjectIds));
    errors.collect(ros.propertyValidator('pipelineId', ros.requiredValidator)(properties.pipelineId));
    errors.collect(ros.propertyValidator('pipelineId', ros.validateNumber)(properties.pipelineId));
    errors.collect(ros.propertyValidator('organizationId', ros.requiredValidator)(properties.organizationId));
    errors.collect(ros.propertyValidator('organizationId', ros.validateString)(properties.organizationId));
    return errors.wrap('supplied properties not correct for "RosPipelineRelationsProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DEVOPS::PipelineRelations` resource
 *
 * @param properties - the TypeScript properties of a `RosPipelineRelationsProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DEVOPS::PipelineRelations` resource.
 */
// @ts-ignore TS6133
function rosPipelineRelationsPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosPipelineRelationsPropsValidator(properties).assertSuccess();
    }
    return {
        OrganizationId: ros.stringToRosTemplate(properties.organizationId),
        PipelineId: ros.numberToRosTemplate(properties.pipelineId),
        RelObjectIds: ros.listMapper(ros.numberToRosTemplate)(properties.relObjectIds),
        RelObjectType: ros.stringToRosTemplate(properties.relObjectType),
    };
}
/**
 * A ROS template type:  `ALIYUN::DEVOPS::PipelineRelations`
 */
class RosPipelineRelations extends ros.RosResource {
    /**
     * Create a new `ALIYUN::DEVOPS::PipelineRelations`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosPipelineRelations.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.organizationId = props.organizationId;
        this.pipelineId = props.pipelineId;
        this.relObjectIds = props.relObjectIds;
        this.relObjectType = props.relObjectType;
    }
    get rosProperties() {
        return {
            organizationId: this.organizationId,
            pipelineId: this.pipelineId,
            relObjectIds: this.relObjectIds,
            relObjectType: this.relObjectType,
        };
    }
    renderProperties(props) {
        return rosPipelineRelationsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosPipelineRelations = RosPipelineRelations;
/**
 * The resource type name for this resource class.
 */
RosPipelineRelations.ROS_RESOURCE_TYPE_NAME = "ALIYUN::DEVOPS::PipelineRelations";
/**
 * Determine whether the given properties match those of a `RosPipelineRunProps`
 *
 * @param properties - the TypeScript properties of a `RosPipelineRunProps`
 *
 * @returns the result of the validation.
 */
function RosPipelineRunPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    if (properties.timeout && (typeof properties.timeout) !== 'object') {
        errors.collect(ros.propertyValidator('timeout', ros.validateRange)({
            data: properties.timeout,
            min: 1,
            max: 120,
        }));
    }
    errors.collect(ros.propertyValidator('timeout', ros.validateNumber)(properties.timeout));
    errors.collect(ros.propertyValidator('pipelineId', ros.requiredValidator)(properties.pipelineId));
    errors.collect(ros.propertyValidator('pipelineId', ros.validateNumber)(properties.pipelineId));
    errors.collect(ros.propertyValidator('params', ros.hashValidator(ros.validateAny))(properties.params));
    errors.collect(ros.propertyValidator('organizationId', ros.requiredValidator)(properties.organizationId));
    errors.collect(ros.propertyValidator('organizationId', ros.validateString)(properties.organizationId));
    errors.collect(ros.propertyValidator('sync', ros.validateBoolean)(properties.sync));
    return errors.wrap('supplied properties not correct for "RosPipelineRunProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DEVOPS::PipelineRun` resource
 *
 * @param properties - the TypeScript properties of a `RosPipelineRunProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DEVOPS::PipelineRun` resource.
 */
// @ts-ignore TS6133
function rosPipelineRunPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosPipelineRunPropsValidator(properties).assertSuccess();
    }
    return {
        OrganizationId: ros.stringToRosTemplate(properties.organizationId),
        PipelineId: ros.numberToRosTemplate(properties.pipelineId),
        Params: ros.hashMapper(ros.objectToRosTemplate)(properties.params),
        Sync: ros.booleanToRosTemplate(properties.sync),
        Timeout: ros.numberToRosTemplate(properties.timeout),
    };
}
/**
 * A ROS template type:  `ALIYUN::DEVOPS::PipelineRun`
 */
class RosPipelineRun extends ros.RosResource {
    /**
     * Create a new `ALIYUN::DEVOPS::PipelineRun`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosPipelineRun.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrPipelineRunId = this.getAtt('PipelineRunId');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.organizationId = props.organizationId;
        this.pipelineId = props.pipelineId;
        this.params = props.params;
        this.sync = props.sync;
        this.timeout = props.timeout;
    }
    get rosProperties() {
        return {
            organizationId: this.organizationId,
            pipelineId: this.pipelineId,
            params: this.params,
            sync: this.sync,
            timeout: this.timeout,
        };
    }
    renderProperties(props) {
        return rosPipelineRunPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosPipelineRun = RosPipelineRun;
/**
 * The resource type name for this resource class.
 */
RosPipelineRun.ROS_RESOURCE_TYPE_NAME = "ALIYUN::DEVOPS::PipelineRun";
/**
 * Determine whether the given properties match those of a `RosVariableGroupProps`
 *
 * @param properties - the TypeScript properties of a `RosVariableGroupProps`
 *
 * @returns the result of the validation.
 */
function RosVariableGroupPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('variables', ros.requiredValidator)(properties.variables));
    errors.collect(ros.propertyValidator('variables', ros.listValidator(RosVariableGroup_VariablesPropertyValidator))(properties.variables));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('organizationId', ros.requiredValidator)(properties.organizationId));
    errors.collect(ros.propertyValidator('organizationId', ros.validateString)(properties.organizationId));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "RosVariableGroupProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DEVOPS::VariableGroup` resource
 *
 * @param properties - the TypeScript properties of a `RosVariableGroupProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DEVOPS::VariableGroup` resource.
 */
// @ts-ignore TS6133
function rosVariableGroupPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosVariableGroupPropsValidator(properties).assertSuccess();
    }
    return {
        Name: ros.stringToRosTemplate(properties.name),
        OrganizationId: ros.stringToRosTemplate(properties.organizationId),
        Variables: ros.listMapper(rosVariableGroupVariablesPropertyToRosTemplate)(properties.variables),
        Description: ros.stringToRosTemplate(properties.description),
    };
}
/**
 * A ROS template type:  `ALIYUN::DEVOPS::VariableGroup`
 */
class RosVariableGroup extends ros.RosResource {
    /**
     * Create a new `ALIYUN::DEVOPS::VariableGroup`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosVariableGroup.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrVariableGroupId = this.getAtt('VariableGroupId');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.name = props.name;
        this.organizationId = props.organizationId;
        this.variables = props.variables;
        this.description = props.description;
    }
    get rosProperties() {
        return {
            name: this.name,
            organizationId: this.organizationId,
            variables: this.variables,
            description: this.description,
        };
    }
    renderProperties(props) {
        return rosVariableGroupPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosVariableGroup = RosVariableGroup;
/**
 * The resource type name for this resource class.
 */
RosVariableGroup.ROS_RESOURCE_TYPE_NAME = "ALIYUN::DEVOPS::VariableGroup";
/**
 * Determine whether the given properties match those of a `VariablesProperty`
 *
 * @param properties - the TypeScript properties of a `VariablesProperty`
 *
 * @returns the result of the validation.
 */
function RosVariableGroup_VariablesPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('isEncrypted', ros.requiredValidator)(properties.isEncrypted));
    errors.collect(ros.propertyValidator('isEncrypted', ros.validateBoolean)(properties.isEncrypted));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    errors.collect(ros.propertyValidator('value', ros.requiredValidator)(properties.value));
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    return errors.wrap('supplied properties not correct for "VariablesProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DEVOPS::VariableGroup.Variables` resource
 *
 * @param properties - the TypeScript properties of a `VariablesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DEVOPS::VariableGroup.Variables` resource.
 */
// @ts-ignore TS6133
function rosVariableGroupVariablesPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosVariableGroup_VariablesPropertyValidator(properties).assertSuccess();
    return {
        isEncrypted: ros.booleanToRosTemplate(properties.isEncrypted),
        name: ros.stringToRosTemplate(properties.name),
        value: ros.stringToRosTemplate(properties.value),
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2b3BzLmdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRldm9wcy5nZW5lcmF0ZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHlEQUF5RDs7O0FBRXpELDhDQUE4QztBQXVCOUM7Ozs7OztHQU1HO0FBQ0gsU0FBUyx5QkFBeUIsQ0FBQyxVQUFlO0lBQzlDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQUUsT0FBTyxHQUFHLENBQUMsa0JBQWtCLENBQUM7S0FBRTtJQUNuRSxNQUFNLE1BQU0sR0FBRyxJQUFJLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUM1RixNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ3pGLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGdCQUFnQixFQUFFLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO0lBQzFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGdCQUFnQixFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztJQUN2RyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENB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QyxJQUFJLENBQUMseURBQXlELENBQUMsQ0FBQztBQUNsRixDQUFDO0FBRUQ7Ozs7OztHQU1HO0FBQ0gsb0JBQW9CO0FBQ3BCLFNBQVMsOENBQThDLENBQUMsVUFBZTtJQUNuRSxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBRTtRQUFFLE9BQU8sVUFBVSxDQUFDO0tBQUU7SUFDdkQsMkNBQTJDLENBQUMsVUFBVSxDQUFDLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDeEUsT0FBTztRQUNMLFdBQVcsRUFBRSxHQUFHLENBQUMsb0JBQW9CLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQztRQUM3RCxJQUFJLEVBQUUsR0FBRyxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7UUFDOUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDO0tBQ2pELENBQUM7QUFDTixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5cbmltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OkRFVk9QUzo6UGlwZWxpbmVgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zUGlwZWxpbmVQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY29udGVudDogUGlwZWxpbmUgZGVzY3JpcHRpb24gaW4gWUFNTCBmb3JtYXQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgY29udGVudDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG5hbWU6IFBpcGVsaW5lIG5hbWUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG9yZ2FuaXphdGlvbklkOiBDb3Jwb3JhdGUgaWRlbnRpdHksIGFsc28ga25vd24gYXMgZW50ZXJwcmlzZSBpZCwgY2FuIG9idGFpbiBpbiBjbG91ZCBlZmZlY3QgYWNjZXNzIGxpbmtzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG9yZ2FuaXphdGlvbklkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zUGlwZWxpbmVQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zUGlwZWxpbmVQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NQaXBlbGluZVByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY29udGVudCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5jb250ZW50KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjb250ZW50Jywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmNvbnRlbnQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ29yZ2FuaXphdGlvbklkJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLm9yZ2FuaXphdGlvbklkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdvcmdhbml6YXRpb25JZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5vcmdhbml6YXRpb25JZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbmFtZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5uYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCduYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLm5hbWUpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zUGlwZWxpbmVQcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6REVWT1BTOjpQaXBlbGluZWAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zUGlwZWxpbmVQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6REVWT1BTOjpQaXBlbGluZWAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NQaXBlbGluZVByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zUGlwZWxpbmVQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBDb250ZW50OiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmNvbnRlbnQpLFxuICAgICAgTmFtZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5uYW1lKSxcbiAgICAgIE9yZ2FuaXphdGlvbklkOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm9yZ2FuaXphdGlvbklkKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIEEgUk9TIHRlbXBsYXRlIHR5cGU6ICBgQUxJWVVOOjpERVZPUFM6OlBpcGVsaW5lYFxuICovXG5leHBvcnQgY2xhc3MgUm9zUGlwZWxpbmUgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46OkRFVk9QUzo6UGlwZWxpbmVcIjtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBQaXBlbGluZUlkOiBQaXBlbGluZSBpZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clBpcGVsaW5lSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNvbnRlbnQ6IFBpcGVsaW5lIGRlc2NyaXB0aW9uIGluIFlBTUwgZm9ybWF0LlxuICAgICAqL1xuICAgIHB1YmxpYyBjb250ZW50OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbmFtZTogUGlwZWxpbmUgbmFtZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG9yZ2FuaXphdGlvbklkOiBDb3Jwb3JhdGUgaWRlbnRpdHksIGFsc28ga25vd24gYXMgZW50ZXJwcmlzZSBpZCwgY2FuIG9idGFpbiBpbiBjbG91ZCBlZmZlY3QgYWNjZXNzIGxpbmtzLlxuICAgICAqL1xuICAgIHB1YmxpYyBvcmdhbml6YXRpb25JZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46OkRFVk9QUzo6UGlwZWxpbmVgLlxuICAgICAqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc1BpcGVsaW5lUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NQaXBlbGluZS5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcbiAgICAgICAgdGhpcy5hdHRyUGlwZWxpbmVJZCA9IHRoaXMuZ2V0QXR0KCdQaXBlbGluZUlkJyk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLmNvbnRlbnQgPSBwcm9wcy5jb250ZW50O1xuICAgICAgICB0aGlzLm5hbWUgPSBwcm9wcy5uYW1lO1xuICAgICAgICB0aGlzLm9yZ2FuaXphdGlvbklkID0gcHJvcHMub3JnYW5pemF0aW9uSWQ7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY29udGVudDogdGhpcy5jb250ZW50LFxuICAgICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgICAgICAgb3JnYW5pemF0aW9uSWQ6IHRoaXMub3JnYW5pemF0aW9uSWQsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc1BpcGVsaW5lUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpERVZPUFM6OlBpcGVsaW5lUmVsYXRpb25zYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc1BpcGVsaW5lUmVsYXRpb25zUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG9yZ2FuaXphdGlvbklkOiBDb3Jwb3JhdGUgaWRlbnRpdHksIGFsc28ga25vd24gYXMgZW50ZXJwcmlzZSBpZCwgY2FuIG9idGFpbiBpbiBjbG91ZCBlZmZlY3QgYWNjZXNzIGxpbmtzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG9yZ2FuaXphdGlvbklkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcGlwZWxpbmVJZDogVGhlIHBpcGVsaW5lIElELCB3aGljaCBjYW4gYmUgb2J0YWluZWQgZnJvbSB0aGUgcGlwZWxpbmUgbGluay5cbiAgICAgKi9cbiAgICByZWFkb25seSBwaXBlbGluZUlkOiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVsT2JqZWN0SWRzOiBJZHMgb2YgdGhlIGFzc29jaWF0ZWQgcmVzb3VyY2UuIEZvciBub3csIG9ubHkgdmFyaWFibGUgZ3JvdXAgaWRzIGFyZSBzdXBwb3J0ZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcmVsT2JqZWN0SWRzOiBBcnJheTxudW1iZXIgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJlbE9iamVjdFR5cGU6IEFzc29jaWF0ZWQgcmVzb3VyY2UgdHlwZS4gVmFsaWQgdmFsdWVzOlxuICAgICAqIC0gVkFSSUFCTEVfR1JPVVBcbiAgICAgKiAtIE9PU19BUFBfSURcbiAgICAgKiBGb3Igbm93LCBvbmx5IFZBUklBQkxFIEdST1VQIGlzIHN1cHBvcnRlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSByZWxPYmplY3RUeXBlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zUGlwZWxpbmVSZWxhdGlvbnNQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zUGlwZWxpbmVSZWxhdGlvbnNQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NQaXBlbGluZVJlbGF0aW9uc1Byb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVsT2JqZWN0VHlwZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5yZWxPYmplY3RUeXBlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZWxPYmplY3RUeXBlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnJlbE9iamVjdFR5cGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JlbE9iamVjdElkcycsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5yZWxPYmplY3RJZHMpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JlbE9iamVjdElkcycsIHJvcy5saXN0VmFsaWRhdG9yKHJvcy52YWxpZGF0ZU51bWJlcikpKHByb3BlcnRpZXMucmVsT2JqZWN0SWRzKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwaXBlbGluZUlkJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnBpcGVsaW5lSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3BpcGVsaW5lSWQnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMucGlwZWxpbmVJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignb3JnYW5pemF0aW9uSWQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMub3JnYW5pemF0aW9uSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ29yZ2FuaXphdGlvbklkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLm9yZ2FuaXphdGlvbklkKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc1BpcGVsaW5lUmVsYXRpb25zUHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkRFVk9QUzo6UGlwZWxpbmVSZWxhdGlvbnNgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc1BpcGVsaW5lUmVsYXRpb25zUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkRFVk9QUzo6UGlwZWxpbmVSZWxhdGlvbnNgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zUGlwZWxpbmVSZWxhdGlvbnNQcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc1BpcGVsaW5lUmVsYXRpb25zUHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgT3JnYW5pemF0aW9uSWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMub3JnYW5pemF0aW9uSWQpLFxuICAgICAgUGlwZWxpbmVJZDogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5waXBlbGluZUlkKSxcbiAgICAgIFJlbE9iamVjdElkczogcm9zLmxpc3RNYXBwZXIocm9zLm51bWJlclRvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMucmVsT2JqZWN0SWRzKSxcbiAgICAgIFJlbE9iamVjdFR5cGU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucmVsT2JqZWN0VHlwZSksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBBIFJPUyB0ZW1wbGF0ZSB0eXBlOiAgYEFMSVlVTjo6REVWT1BTOjpQaXBlbGluZVJlbGF0aW9uc2BcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc1BpcGVsaW5lUmVsYXRpb25zIGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiQUxJWVVOOjpERVZPUFM6OlBpcGVsaW5lUmVsYXRpb25zXCI7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG9yZ2FuaXphdGlvbklkOiBDb3Jwb3JhdGUgaWRlbnRpdHksIGFsc28ga25vd24gYXMgZW50ZXJwcmlzZSBpZCwgY2FuIG9idGFpbiBpbiBjbG91ZCBlZmZlY3QgYWNjZXNzIGxpbmtzLlxuICAgICAqL1xuICAgIHB1YmxpYyBvcmdhbml6YXRpb25JZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHBpcGVsaW5lSWQ6IFRoZSBwaXBlbGluZSBJRCwgd2hpY2ggY2FuIGJlIG9idGFpbmVkIGZyb20gdGhlIHBpcGVsaW5lIGxpbmsuXG4gICAgICovXG4gICAgcHVibGljIHBpcGVsaW5lSWQ6IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByZWxPYmplY3RJZHM6IElkcyBvZiB0aGUgYXNzb2NpYXRlZCByZXNvdXJjZS4gRm9yIG5vdywgb25seSB2YXJpYWJsZSBncm91cCBpZHMgYXJlIHN1cHBvcnRlZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVsT2JqZWN0SWRzOiBBcnJheTxudW1iZXIgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJlbE9iamVjdFR5cGU6IEFzc29jaWF0ZWQgcmVzb3VyY2UgdHlwZS4gVmFsaWQgdmFsdWVzOlxuICAgICAqIC0gVkFSSUFCTEVfR1JPVVBcbiAgICAgKiAtIE9PU19BUFBfSURcbiAgICAgKiBGb3Igbm93LCBvbmx5IFZBUklBQkxFIEdST1VQIGlzIHN1cHBvcnRlZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVsT2JqZWN0VHlwZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46OkRFVk9QUzo6UGlwZWxpbmVSZWxhdGlvbnNgLlxuICAgICAqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc1BpcGVsaW5lUmVsYXRpb25zUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NQaXBlbGluZVJlbGF0aW9ucy5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcblxuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMub3JnYW5pemF0aW9uSWQgPSBwcm9wcy5vcmdhbml6YXRpb25JZDtcbiAgICAgICAgdGhpcy5waXBlbGluZUlkID0gcHJvcHMucGlwZWxpbmVJZDtcbiAgICAgICAgdGhpcy5yZWxPYmplY3RJZHMgPSBwcm9wcy5yZWxPYmplY3RJZHM7XG4gICAgICAgIHRoaXMucmVsT2JqZWN0VHlwZSA9IHByb3BzLnJlbE9iamVjdFR5cGU7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgb3JnYW5pemF0aW9uSWQ6IHRoaXMub3JnYW5pemF0aW9uSWQsXG4gICAgICAgICAgICBwaXBlbGluZUlkOiB0aGlzLnBpcGVsaW5lSWQsXG4gICAgICAgICAgICByZWxPYmplY3RJZHM6IHRoaXMucmVsT2JqZWN0SWRzLFxuICAgICAgICAgICAgcmVsT2JqZWN0VHlwZTogdGhpcy5yZWxPYmplY3RUeXBlLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NQaXBlbGluZVJlbGF0aW9uc1Byb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6REVWT1BTOjpQaXBlbGluZVJ1bmBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NQaXBlbGluZVJ1blByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBvcmdhbml6YXRpb25JZDogQ29ycG9yYXRlIGlkZW50aXR5LCBhbHNvIGtub3duIGFzIGVudGVycHJpc2UgaWQsIGNhbiBvYnRhaW4gaW4gY2xvdWQgZWZmZWN0IGFjY2VzcyBsaW5rcy5cbiAgICAgKi9cbiAgICByZWFkb25seSBvcmdhbml6YXRpb25JZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHBpcGVsaW5lSWQ6IFRoZSBwaXBlbGluZSBJRCwgd2hpY2ggY2FuIGJlIG9idGFpbmVkIGZyb20gdGhlIHBpcGVsaW5lIGxpbmsuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcGlwZWxpbmVJZDogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHBhcmFtczogUGlwZWxpbmUgb3BlcmF0aW5nIHBhcmFtZXRlcnMuIEtleXM6XG4gICAgICogLSAqKmJyYW5jaE1vZGVCcmFuY2hzKio6IEJyYW5jaCBtb2RlIHJ1bnMgYnJhbmNoZXMuXG4gICAgICogLSAqKmVudnMqKjogUnVubmluZyB2YXJpYWJsZXMuXG4gICAgICogLSAqKnJ1bm5pbmdCcmFuY2hzKio6IFJ1bm5pbmcgYnJhbmNoZXMgd2hvc2Uga2V5IGlzIHRoZSB3YXJlaG91c2UgYWRkcmVzcy5cbiAgICAgKiAtICoqcnVubmluZ1RhZ3MqKjogUnVubmluZyB0YWdzIHdob3NlIGtleSBpcyB0aGUgd2FyZWhvdXNlIGFkZHJlc3MuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcGFyYW1zPzogeyBba2V5OiBzdHJpbmddOiAoYW55IHwgcm9zLklSZXNvbHZhYmxlKSB9IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHN5bmM6IFdoZXRoZXIgdG8gd2FpdCBzeW5jaHJvbm91c2x5IGZvciB0aGUgcmVzdWx0IG9mIHRoZSBwaXBlbGluZSBleGVjdXRpb24uIElmIHlvdSBzZWxlY3QgdHJ1ZSwgdGhlIHJlc291cmNlIHdpbGwgbm90IGJlIGNyZWF0ZWQgdW50aWwgdGhlIHBpcGVsaW5lIGlzIGNvbXBsZXRlLiAqKkRlZmF1bHQgaXMgZmFsc2UuKipcbiAgICAgKiBOb3RlOiBEbyBub3Qgc2V0IHRoaXMgb3B0aW9uIHRvIHRydWUgd2hlbiB0aGUgcGlwZWxpbmUgaGFzIGEgcGF1c2UgcG9saWN5IGNvbmZpZ3VyZWQsIGFzIHB1Ymxpc2hpbmcgcmVxdWlyZXMgbWFudWFsIGludGVydmVudGlvbiBhbmQgc3luY2hyb25pemF0aW9uIGlzIG5vdCBhcHByb3ByaWF0ZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBzeW5jPzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0aW1lb3V0OiBNYXhpbXVtIHdhaXQgdGltZSBmb3IgcGlwZWxpbmUgZXhlY3V0aW9uIGluIG1pbnV0ZXMuIFRoaXMgcGFyYW1ldGVyIG5lZWQgb25seSBiZSBjb25maWd1cmVkIGlmIFN5bmMgaXMgc2V0IHRvIHRydWUuICoqRGVmYXVsdCBpcyAxMC4qKlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRpbWVvdXQ/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zUGlwZWxpbmVSdW5Qcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zUGlwZWxpbmVSdW5Qcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NQaXBlbGluZVJ1blByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGlmKHByb3BlcnRpZXMudGltZW91dCAmJiAodHlwZW9mIHByb3BlcnRpZXMudGltZW91dCkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGltZW91dCcsIHJvcy52YWxpZGF0ZVJhbmdlKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnRpbWVvdXQsXG4gICAgICAgICAgICBtaW46IDEsXG4gICAgICAgICAgICBtYXg6IDEyMCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGltZW91dCcsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy50aW1lb3V0KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwaXBlbGluZUlkJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnBpcGVsaW5lSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3BpcGVsaW5lSWQnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMucGlwZWxpbmVJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncGFyYW1zJywgcm9zLmhhc2hWYWxpZGF0b3Iocm9zLnZhbGlkYXRlQW55KSkocHJvcGVydGllcy5wYXJhbXMpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ29yZ2FuaXphdGlvbklkJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLm9yZ2FuaXphdGlvbklkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdvcmdhbml6YXRpb25JZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5vcmdhbml6YXRpb25JZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc3luYycsIHJvcy52YWxpZGF0ZUJvb2xlYW4pKHByb3BlcnRpZXMuc3luYykpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NQaXBlbGluZVJ1blByb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpERVZPUFM6OlBpcGVsaW5lUnVuYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NQaXBlbGluZVJ1blByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpERVZPUFM6OlBpcGVsaW5lUnVuYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc1BpcGVsaW5lUnVuUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NQaXBlbGluZVJ1blByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIE9yZ2FuaXphdGlvbklkOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm9yZ2FuaXphdGlvbklkKSxcbiAgICAgIFBpcGVsaW5lSWQ6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucGlwZWxpbmVJZCksXG4gICAgICBQYXJhbXM6IHJvcy5oYXNoTWFwcGVyKHJvcy5vYmplY3RUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLnBhcmFtcyksXG4gICAgICBTeW5jOiByb3MuYm9vbGVhblRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zeW5jKSxcbiAgICAgIFRpbWVvdXQ6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudGltZW91dCksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBBIFJPUyB0ZW1wbGF0ZSB0eXBlOiAgYEFMSVlVTjo6REVWT1BTOjpQaXBlbGluZVJ1bmBcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc1BpcGVsaW5lUnVuIGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiQUxJWVVOOjpERVZPUFM6OlBpcGVsaW5lUnVuXCI7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgUGlwZWxpbmVSdW5JZDogUGlwZWxpbmUgcnVuIGlkLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUGlwZWxpbmVSdW5JZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgb3JnYW5pemF0aW9uSWQ6IENvcnBvcmF0ZSBpZGVudGl0eSwgYWxzbyBrbm93biBhcyBlbnRlcnByaXNlIGlkLCBjYW4gb2J0YWluIGluIGNsb3VkIGVmZmVjdCBhY2Nlc3MgbGlua3MuXG4gICAgICovXG4gICAgcHVibGljIG9yZ2FuaXphdGlvbklkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcGlwZWxpbmVJZDogVGhlIHBpcGVsaW5lIElELCB3aGljaCBjYW4gYmUgb2J0YWluZWQgZnJvbSB0aGUgcGlwZWxpbmUgbGluay5cbiAgICAgKi9cbiAgICBwdWJsaWMgcGlwZWxpbmVJZDogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHBhcmFtczogUGlwZWxpbmUgb3BlcmF0aW5nIHBhcmFtZXRlcnMuIEtleXM6XG4gICAgICogLSAqKmJyYW5jaE1vZGVCcmFuY2hzKio6IEJyYW5jaCBtb2RlIHJ1bnMgYnJhbmNoZXMuXG4gICAgICogLSAqKmVudnMqKjogUnVubmluZyB2YXJpYWJsZXMuXG4gICAgICogLSAqKnJ1bm5pbmdCcmFuY2hzKio6IFJ1bm5pbmcgYnJhbmNoZXMgd2hvc2Uga2V5IGlzIHRoZSB3YXJlaG91c2UgYWRkcmVzcy5cbiAgICAgKiAtICoqcnVubmluZ1RhZ3MqKjogUnVubmluZyB0YWdzIHdob3NlIGtleSBpcyB0aGUgd2FyZWhvdXNlIGFkZHJlc3MuXG4gICAgICovXG4gICAgcHVibGljIHBhcmFtczogeyBba2V5OiBzdHJpbmddOiAoYW55IHwgcm9zLklSZXNvbHZhYmxlKSB9IHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHN5bmM6IFdoZXRoZXIgdG8gd2FpdCBzeW5jaHJvbm91c2x5IGZvciB0aGUgcmVzdWx0IG9mIHRoZSBwaXBlbGluZSBleGVjdXRpb24uIElmIHlvdSBzZWxlY3QgdHJ1ZSwgdGhlIHJlc291cmNlIHdpbGwgbm90IGJlIGNyZWF0ZWQgdW50aWwgdGhlIHBpcGVsaW5lIGlzIGNvbXBsZXRlLiAqKkRlZmF1bHQgaXMgZmFsc2UuKipcbiAgICAgKiBOb3RlOiBEbyBub3Qgc2V0IHRoaXMgb3B0aW9uIHRvIHRydWUgd2hlbiB0aGUgcGlwZWxpbmUgaGFzIGEgcGF1c2UgcG9saWN5IGNvbmZpZ3VyZWQsIGFzIHB1Ymxpc2hpbmcgcmVxdWlyZXMgbWFudWFsIGludGVydmVudGlvbiBhbmQgc3luY2hyb25pemF0aW9uIGlzIG5vdCBhcHByb3ByaWF0ZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3luYzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0aW1lb3V0OiBNYXhpbXVtIHdhaXQgdGltZSBmb3IgcGlwZWxpbmUgZXhlY3V0aW9uIGluIG1pbnV0ZXMuIFRoaXMgcGFyYW1ldGVyIG5lZWQgb25seSBiZSBjb25maWd1cmVkIGlmIFN5bmMgaXMgc2V0IHRvIHRydWUuICoqRGVmYXVsdCBpcyAxMC4qKlxuICAgICAqL1xuICAgIHB1YmxpYyB0aW1lb3V0OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6REVWT1BTOjpQaXBlbGluZVJ1bmAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zUGlwZWxpbmVSdW5Qcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc1BpcGVsaW5lUnVuLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJQaXBlbGluZVJ1bklkID0gdGhpcy5nZXRBdHQoJ1BpcGVsaW5lUnVuSWQnKTtcblxuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMub3JnYW5pemF0aW9uSWQgPSBwcm9wcy5vcmdhbml6YXRpb25JZDtcbiAgICAgICAgdGhpcy5waXBlbGluZUlkID0gcHJvcHMucGlwZWxpbmVJZDtcbiAgICAgICAgdGhpcy5wYXJhbXMgPSBwcm9wcy5wYXJhbXM7XG4gICAgICAgIHRoaXMuc3luYyA9IHByb3BzLnN5bmM7XG4gICAgICAgIHRoaXMudGltZW91dCA9IHByb3BzLnRpbWVvdXQ7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgb3JnYW5pemF0aW9uSWQ6IHRoaXMub3JnYW5pemF0aW9uSWQsXG4gICAgICAgICAgICBwaXBlbGluZUlkOiB0aGlzLnBpcGVsaW5lSWQsXG4gICAgICAgICAgICBwYXJhbXM6IHRoaXMucGFyYW1zLFxuICAgICAgICAgICAgc3luYzogdGhpcy5zeW5jLFxuICAgICAgICAgICAgdGltZW91dDogdGhpcy50aW1lb3V0LFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NQaXBlbGluZVJ1blByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6REVWT1BTOjpWYXJpYWJsZUdyb3VwYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc1ZhcmlhYmxlR3JvdXBQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbmFtZTogVGhlIG5hbWUgb2YgdmFyaWFibGUgZ3JvdXAuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG9yZ2FuaXphdGlvbklkOiBDb3Jwb3JhdGUgaWRlbnRpdHksIGFsc28ga25vd24gYXMgZW50ZXJwcmlzZSBpZCwgY2FuIG9idGFpbiBpbiBjbG91ZCBlZmZlY3QgYWNjZXNzIGxpbmtzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG9yZ2FuaXphdGlvbklkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdmFyaWFibGVzOiBWYXJpYWJsZXMgaW5mb3JtYXRpb24uXG4gICAgICovXG4gICAgcmVhZG9ubHkgdmFyaWFibGVzOiBBcnJheTxSb3NWYXJpYWJsZUdyb3VwLlZhcmlhYmxlc1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZXNjcmlwdGlvbjogVGhlIGRlc2NyaXB0aW9uIG9mIHZhcmlhYmxlIGdyb3VwLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlc2NyaXB0aW9uPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc1ZhcmlhYmxlR3JvdXBQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zVmFyaWFibGVHcm91cFByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc1ZhcmlhYmxlR3JvdXBQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ZhcmlhYmxlcycsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy52YXJpYWJsZXMpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ZhcmlhYmxlcycsIHJvcy5saXN0VmFsaWRhdG9yKFJvc1ZhcmlhYmxlR3JvdXBfVmFyaWFibGVzUHJvcGVydHlWYWxpZGF0b3IpKShwcm9wZXJ0aWVzLnZhcmlhYmxlcykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGVzY3JpcHRpb24nLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZGVzY3JpcHRpb24pKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ29yZ2FuaXphdGlvbklkJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLm9yZ2FuaXphdGlvbklkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdvcmdhbml6YXRpb25JZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5vcmdhbml6YXRpb25JZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbmFtZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5uYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCduYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLm5hbWUpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zVmFyaWFibGVHcm91cFByb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpERVZPUFM6OlZhcmlhYmxlR3JvdXBgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc1ZhcmlhYmxlR3JvdXBQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6REVWT1BTOjpWYXJpYWJsZUdyb3VwYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc1ZhcmlhYmxlR3JvdXBQcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc1ZhcmlhYmxlR3JvdXBQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBOYW1lOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm5hbWUpLFxuICAgICAgT3JnYW5pemF0aW9uSWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMub3JnYW5pemF0aW9uSWQpLFxuICAgICAgVmFyaWFibGVzOiByb3MubGlzdE1hcHBlcihyb3NWYXJpYWJsZUdyb3VwVmFyaWFibGVzUHJvcGVydHlUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLnZhcmlhYmxlcyksXG4gICAgICBEZXNjcmlwdGlvbjogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5kZXNjcmlwdGlvbiksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBBIFJPUyB0ZW1wbGF0ZSB0eXBlOiAgYEFMSVlVTjo6REVWT1BTOjpWYXJpYWJsZUdyb3VwYFxuICovXG5leHBvcnQgY2xhc3MgUm9zVmFyaWFibGVHcm91cCBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6REVWT1BTOjpWYXJpYWJsZUdyb3VwXCI7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgVmFyaWFibGVHcm91cElkOiBWYXJpYWJsZSBncm91cCBpZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clZhcmlhYmxlR3JvdXBJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbmFtZTogVGhlIG5hbWUgb2YgdmFyaWFibGUgZ3JvdXAuXG4gICAgICovXG4gICAgcHVibGljIG5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBvcmdhbml6YXRpb25JZDogQ29ycG9yYXRlIGlkZW50aXR5LCBhbHNvIGtub3duIGFzIGVudGVycHJpc2UgaWQsIGNhbiBvYnRhaW4gaW4gY2xvdWQgZWZmZWN0IGFjY2VzcyBsaW5rcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgb3JnYW5pemF0aW9uSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB2YXJpYWJsZXM6IFZhcmlhYmxlcyBpbmZvcm1hdGlvbi5cbiAgICAgKi9cbiAgICBwdWJsaWMgdmFyaWFibGVzOiBBcnJheTxSb3NWYXJpYWJsZUdyb3VwLlZhcmlhYmxlc1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZXNjcmlwdGlvbjogVGhlIGRlc2NyaXB0aW9uIG9mIHZhcmlhYmxlIGdyb3VwLlxuICAgICAqL1xuICAgIHB1YmxpYyBkZXNjcmlwdGlvbjogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46OkRFVk9QUzo6VmFyaWFibGVHcm91cGAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zVmFyaWFibGVHcm91cFByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zVmFyaWFibGVHcm91cC5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcbiAgICAgICAgdGhpcy5hdHRyVmFyaWFibGVHcm91cElkID0gdGhpcy5nZXRBdHQoJ1ZhcmlhYmxlR3JvdXBJZCcpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5uYW1lID0gcHJvcHMubmFtZTtcbiAgICAgICAgdGhpcy5vcmdhbml6YXRpb25JZCA9IHByb3BzLm9yZ2FuaXphdGlvbklkO1xuICAgICAgICB0aGlzLnZhcmlhYmxlcyA9IHByb3BzLnZhcmlhYmxlcztcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IHByb3BzLmRlc2NyaXB0aW9uO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgICAgICAgIG9yZ2FuaXphdGlvbklkOiB0aGlzLm9yZ2FuaXphdGlvbklkLFxuICAgICAgICAgICAgdmFyaWFibGVzOiB0aGlzLnZhcmlhYmxlcyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NWYXJpYWJsZUdyb3VwUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zVmFyaWFibGVHcm91cCB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgVmFyaWFibGVzUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGlzRW5jcnlwdGVkOiBFbmNyeXB0aW9uIG9yIG5vdC5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGlzRW5jcnlwdGVkOiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IG5hbWU6IE5hbWUgb2YgdGhlIHZhcmlhYmxlLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgbmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHZhbHVlOiBWYWx1ZSBvZiB0aGUgdmFyaWFibGUuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSB2YWx1ZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgVmFyaWFibGVzUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFZhcmlhYmxlc1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc1ZhcmlhYmxlR3JvdXBfVmFyaWFibGVzUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpc0VuY3J5cHRlZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5pc0VuY3J5cHRlZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaXNFbmNyeXB0ZWQnLCByb3MudmFsaWRhdGVCb29sZWFuKShwcm9wZXJ0aWVzLmlzRW5jcnlwdGVkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCduYW1lJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLm5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ25hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMubmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndmFsdWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMudmFsdWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ZhbHVlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnZhbHVlKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlZhcmlhYmxlc1Byb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpERVZPUFM6OlZhcmlhYmxlR3JvdXAuVmFyaWFibGVzYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBWYXJpYWJsZXNQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6REVWT1BTOjpWYXJpYWJsZUdyb3VwLlZhcmlhYmxlc2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NWYXJpYWJsZUdyb3VwVmFyaWFibGVzUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc1ZhcmlhYmxlR3JvdXBfVmFyaWFibGVzUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICBpc0VuY3J5cHRlZDogcm9zLmJvb2xlYW5Ub1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaXNFbmNyeXB0ZWQpLFxuICAgICAgbmFtZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5uYW1lKSxcbiAgICAgIHZhbHVlOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnZhbHVlKSxcbiAgICB9O1xufVxuIl19