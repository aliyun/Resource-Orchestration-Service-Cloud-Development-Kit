"use strict";
// Generated from the AliCloud ROS Resource Specification
Object.defineProperty(exports, "__esModule", { value: true });
exports.RosTemplate = exports.RosParameter = exports.RosExecution = void 0;
const ros = require("@alicloud/ros-cdk-core");
/**
 * Determine whether the given properties match those of a `RosExecutionProps`
 *
 * @param properties - the TypeScript properties of a `RosExecutionProps`
 *
 * @returns the result of the validation.
 */
function RosExecutionPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('parentExecutionId', ros.validateString)(properties.parentExecutionId));
    errors.collect(ros.propertyValidator('resourceOptions', RosExecution_ResourceOptionsPropertyValidator)(properties.resourceOptions));
    errors.collect(ros.propertyValidator('parameters', ros.hashValidator(ros.validateAny))(properties.parameters));
    if (properties.safetyCheck && (typeof properties.safetyCheck) !== 'object') {
        errors.collect(ros.propertyValidator('safetyCheck', ros.validateAllowedValues)({
            data: properties.safetyCheck,
            allowedValues: ["ConfirmEveryHighRiskAction", "Skip"],
        }));
    }
    errors.collect(ros.propertyValidator('safetyCheck', ros.validateString)(properties.safetyCheck));
    if (properties.mode && (typeof properties.mode) !== 'object') {
        errors.collect(ros.propertyValidator('mode', ros.validateAllowedValues)({
            data: properties.mode,
            allowedValues: ["Automatic", "Debug"],
        }));
    }
    errors.collect(ros.propertyValidator('mode', ros.validateString)(properties.mode));
    errors.collect(ros.propertyValidator('templateName', ros.requiredValidator)(properties.templateName));
    if (properties.templateName && (Array.isArray(properties.templateName) || (typeof properties.templateName) === 'string')) {
        errors.collect(ros.propertyValidator('templateName', ros.validateLength)({
            data: properties.templateName.length,
            min: undefined,
            max: 200,
        }));
    }
    errors.collect(ros.propertyValidator('templateName', ros.validateString)(properties.templateName));
    errors.collect(ros.propertyValidator('templateVersion', ros.validateString)(properties.templateVersion));
    return errors.wrap('supplied properties not correct for "RosExecutionProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::OOS::Execution` resource
 *
 * @param properties - the TypeScript properties of a `RosExecutionProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::OOS::Execution` resource.
 */
// @ts-ignore TS6133
function rosExecutionPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosExecutionPropsValidator(properties).assertSuccess();
    }
    return {
        TemplateName: ros.stringToRosTemplate(properties.templateName),
        Mode: ros.stringToRosTemplate(properties.mode),
        Parameters: ros.hashMapper(ros.objectToRosTemplate)(properties.parameters),
        ParentExecutionId: ros.stringToRosTemplate(properties.parentExecutionId),
        ResourceOptions: rosExecutionResourceOptionsPropertyToRosTemplate(properties.resourceOptions),
        SafetyCheck: ros.stringToRosTemplate(properties.safetyCheck),
        TemplateVersion: ros.stringToRosTemplate(properties.templateVersion),
    };
}
/**
 * A ROS template type:  `ALIYUN::OOS::Execution`
 */
class RosExecution extends ros.RosResource {
    /**
     * Create a new `ALIYUN::OOS::Execution`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosExecution.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCounters = ros.Token.asString(this.getAtt('Counters'));
        this.attrCurlCli = ros.Token.asString(this.getAtt('CurlCli'));
        this.attrExecutionId = ros.Token.asString(this.getAtt('ExecutionId'));
        this.attrOutputs = ros.Token.asString(this.getAtt('Outputs'));
        this.attrPowerShellCurlCli = ros.Token.asString(this.getAtt('PowerShellCurlCli'));
        this.attrStatus = ros.Token.asString(this.getAtt('Status'));
        this.attrStatusMessage = ros.Token.asString(this.getAtt('StatusMessage'));
        this.attrWindowsCurlCli = ros.Token.asString(this.getAtt('WindowsCurlCli'));
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.templateName = props.templateName;
        this.mode = props.mode;
        this.parameters = props.parameters;
        this.parentExecutionId = props.parentExecutionId;
        this.resourceOptions = props.resourceOptions;
        this.safetyCheck = props.safetyCheck;
        this.templateVersion = props.templateVersion;
    }
    get rosProperties() {
        return {
            templateName: this.templateName,
            mode: this.mode,
            parameters: this.parameters,
            parentExecutionId: this.parentExecutionId,
            resourceOptions: this.resourceOptions,
            safetyCheck: this.safetyCheck,
            templateVersion: this.templateVersion,
        };
    }
    renderProperties(props) {
        return rosExecutionPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosExecution = RosExecution;
/**
 * The resource type name for this resource class.
 */
RosExecution.ROS_RESOURCE_TYPE_NAME = "ALIYUN::OOS::Execution";
/**
 * Determine whether the given properties match those of a `ResourceOptionsProperty`
 *
 * @param properties - the TypeScript properties of a `ResourceOptionsProperty`
 *
 * @returns the result of the validation.
 */
function RosExecution_ResourceOptionsPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('cancelOnDelete', ros.validateBoolean)(properties.cancelOnDelete));
    if (properties.timeout && (typeof properties.timeout) !== 'object') {
        errors.collect(ros.propertyValidator('timeout', ros.validateRange)({
            data: properties.timeout,
            min: 10,
            max: 43200,
        }));
    }
    errors.collect(ros.propertyValidator('timeout', ros.validateNumber)(properties.timeout));
    errors.collect(ros.propertyValidator('successStatuses', ros.listValidator(ros.validateAny))(properties.successStatuses));
    errors.collect(ros.propertyValidator('failureStatuses', ros.listValidator(ros.validateAny))(properties.failureStatuses));
    return errors.wrap('supplied properties not correct for "ResourceOptionsProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::OOS::Execution.ResourceOptions` resource
 *
 * @param properties - the TypeScript properties of a `ResourceOptionsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::OOS::Execution.ResourceOptions` resource.
 */
// @ts-ignore TS6133
function rosExecutionResourceOptionsPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosExecution_ResourceOptionsPropertyValidator(properties).assertSuccess();
    return {
        CancelOnDelete: ros.booleanToRosTemplate(properties.cancelOnDelete),
        Timeout: ros.numberToRosTemplate(properties.timeout),
        SuccessStatuses: ros.listMapper(ros.objectToRosTemplate)(properties.successStatuses),
        FailureStatuses: ros.listMapper(ros.objectToRosTemplate)(properties.failureStatuses),
    };
}
/**
 * Determine whether the given properties match those of a `RosParameterProps`
 *
 * @param properties - the TypeScript properties of a `RosParameterProps`
 *
 * @returns the result of the validation.
 */
function RosParameterPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('type', ros.requiredValidator)(properties.type));
    if (properties.type && (typeof properties.type) !== 'object') {
        errors.collect(ros.propertyValidator('type', ros.validateAllowedValues)({
            data: properties.type,
            allowedValues: ["String", "StringList"],
        }));
    }
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('constraints', ros.validateString)(properties.constraints));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('value', ros.requiredValidator)(properties.value));
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "RosParameterProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::OOS::Parameter` resource
 *
 * @param properties - the TypeScript properties of a `RosParameterProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::OOS::Parameter` resource.
 */
// @ts-ignore TS6133
function rosParameterPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosParameterPropsValidator(properties).assertSuccess();
    }
    return {
        Name: ros.stringToRosTemplate(properties.name),
        Type: ros.stringToRosTemplate(properties.type),
        Value: ros.stringToRosTemplate(properties.value),
        Constraints: ros.stringToRosTemplate(properties.constraints),
        Description: ros.stringToRosTemplate(properties.description),
    };
}
/**
 * A ROS template type:  `ALIYUN::OOS::Parameter`
 */
class RosParameter extends ros.RosResource {
    /**
     * Create a new `ALIYUN::OOS::Parameter`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosParameter.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrName = ros.Token.asString(this.getAtt('Name'));
        this.attrValue = ros.Token.asString(this.getAtt('Value'));
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.name = props.name;
        this.type = props.type;
        this.value = props.value;
        this.constraints = props.constraints;
        this.description = props.description;
    }
    get rosProperties() {
        return {
            name: this.name,
            type: this.type,
            value: this.value,
            constraints: this.constraints,
            description: this.description,
        };
    }
    renderProperties(props) {
        return rosParameterPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosParameter = RosParameter;
/**
 * The resource type name for this resource class.
 */
RosParameter.ROS_RESOURCE_TYPE_NAME = "ALIYUN::OOS::Parameter";
/**
 * Determine whether the given properties match those of a `RosTemplateProps`
 *
 * @param properties - the TypeScript properties of a `RosTemplateProps`
 *
 * @returns the result of the validation.
 */
function RosTemplatePropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('content', ros.requiredValidator)(properties.content));
    if (properties.content && (Array.isArray(properties.content) || (typeof properties.content) === 'string')) {
        errors.collect(ros.propertyValidator('content', ros.validateLength)({
            data: properties.content.length,
            min: undefined,
            max: 65536,
        }));
    }
    errors.collect(ros.propertyValidator('content', ros.validateString)(properties.content));
    errors.collect(ros.propertyValidator('templateName', ros.requiredValidator)(properties.templateName));
    if (properties.templateName && (Array.isArray(properties.templateName) || (typeof properties.templateName) === 'string')) {
        errors.collect(ros.propertyValidator('templateName', ros.validateLength)({
            data: properties.templateName.length,
            min: undefined,
            max: 200,
        }));
    }
    errors.collect(ros.propertyValidator('templateName', ros.validateString)(properties.templateName));
    if (properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
        }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(ros.validateRosTag))(properties.tags));
    return errors.wrap('supplied properties not correct for "RosTemplateProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::OOS::Template` resource
 *
 * @param properties - the TypeScript properties of a `RosTemplateProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::OOS::Template` resource.
 */
// @ts-ignore TS6133
function rosTemplatePropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosTemplatePropsValidator(properties).assertSuccess();
    }
    return {
        Content: ros.stringToRosTemplate(properties.content),
        TemplateName: ros.stringToRosTemplate(properties.templateName),
        Tags: ros.listMapper(ros.rosTagToRosTemplate)(properties.tags),
    };
}
/**
 * A ROS template type:  `ALIYUN::OOS::Template`
 */
class RosTemplate extends ros.RosResource {
    /**
     * Create a new `ALIYUN::OOS::Template`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosTemplate.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrExecutionPolicy = ros.Token.asString(this.getAtt('ExecutionPolicy'));
        this.attrTemplateId = ros.Token.asString(this.getAtt('TemplateId'));
        this.attrTemplateName = ros.Token.asString(this.getAtt('TemplateName'));
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.content = props.content;
        this.templateName = props.templateName;
        this.tags = new ros.TagManager(ros.TagType.STANDARD, "ALIYUN::OOS::Template", props.tags, { tagPropertyName: 'tags' });
    }
    get rosProperties() {
        return {
            content: this.content,
            templateName: this.templateName,
            tags: this.tags.renderTags(),
        };
    }
    renderProperties(props) {
        return rosTemplatePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosTemplate = RosTemplate;
/**
 * The resource type name for this resource class.
 */
RosTemplate.ROS_RESOURCE_TYPE_NAME = "ALIYUN::OOS::Template";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib29zLmdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm9vcy5nZW5lcmF0ZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHlEQUF5RDs7O0FBRXpELDhDQUE4QztBQTZDOUM7Ozs7OztHQU1HO0FBQ0gsU0FBUywwQkFBMEIsQ0FBQyxVQUFlO0lBQy9DLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQUUsT0FBTyxHQUFHLENBQUMsa0JBQWtCLENBQUM7S0FBRTtJQUNuRSxNQUFNLE1BQU0sR0FBRyxJQUFJLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLG1CQUFtQixFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO0lBQzdHLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGlCQUFpQixFQUFFLDZDQUE2QyxDQUFDLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7SUFDcEksTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLEdBQUcsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDL0csSUFBRyxVQUFVLENBQUMsV0FBVyxJQUFJLENBQUMsT0FBTyxVQUFVLENBQUMsV0FBVyxDQUFDLEtBQUssUUFBUSxFQUFFO1FBQ3ZFLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztZQUM3RSxJQUFJLEVBQUUsVUFBVSxDQUFDLFdBQVc7WUFDNUIsYUFBYSxFQUFFLENBQUMsNEJB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LENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztRQUNwRSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1FBRXhFLElBQUksQ0FBQyxnQ0FBZ0MsR0FBRyxnQ0FBZ0MsQ0FBQztRQUN6RSxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7UUFDN0IsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLHVCQUF1QixFQUFFLEtBQUssQ0FBQyxJQUFJLEVBQUUsRUFBRSxlQUFlLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUMzSCxDQUFDO0lBR0QsSUFBYyxhQUFhO1FBQ3ZCLE9BQU87WUFDSCxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDckIsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZO1lBQy9CLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtTQUMvQixDQUFDO0lBQ04sQ0FBQztJQUNTLGdCQUFnQixDQUFDLEtBQTJCO1FBQ2xELE9BQU8sNkJBQTZCLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO0lBQ3ZGLENBQUM7O0FBekVMLGtDQTBFQztBQXpFRzs7R0FFRztBQUNvQixrQ0FBc0IsR0FBRyx1QkFBdUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuXG5pbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpPT1M6OkV4ZWN1dGlvbmBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NFeGVjdXRpb25Qcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdGVtcGxhdGVOYW1lOiBUZW1wbGF0ZSBuYW1lLiBDb250ZW50IGlzIGxpbWl0ZWQgdG8gbGV0dGVycywgbnVtYmVycywgdW5kZXJsaW5lZCwgdW5kZXJsaW5lLCB0aGUgbGVuZ3RoIG9mIDIwMCBjaGFyYWN0ZXJzLCBhbmQgY2FuIG5vdCBiZWdpbiB0byBBTElZVU4sIEFDUywgQUxJQkFCQS5cbiAgICAgKi9cbiAgICByZWFkb25seSB0ZW1wbGF0ZU5hbWU6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBtb2RlOiBFeGVjdXRpb24gbW9kZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBtb2RlPzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHBhcmFtZXRlcnM6IFBhcmFtZXRlcnMgZm9yIHRoZSBleGVjdXRpb24gb2YgdGVtcGxhdGUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcGFyYW1ldGVycz86IHsgW2tleTogc3RyaW5nXTogKGFueSB8IHJvcy5JUmVzb2x2YWJsZSkgfSB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwYXJlbnRFeGVjdXRpb25JZDogUGFyZW50IGV4ZWN1dGlvbiBJRC5cbiAgICAgKi9cbiAgICByZWFkb25seSBwYXJlbnRFeGVjdXRpb25JZD86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByZXNvdXJjZU9wdGlvbnM6IFJlc291cmNlIG9wdGlvbnMgdXNlciBieSBST1MuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcmVzb3VyY2VPcHRpb25zPzogUm9zRXhlY3V0aW9uLlJlc291cmNlT3B0aW9uc1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHNhZmV0eUNoZWNrOiBTZWN1cml0eSBjaGVjayBtb2RlLiBBbGxvd2VkIHZhbHVlczpcbiAgICAgKiAtIFNraXA6IFRoaXMgb3B0aW9uIG1lYW5zIHRoYXQgY3VzdG9tZXJzIHVuZGVyc3RhbmQgdGhlIHJpc2tzLCB5b3UgY2FuIGRvIGFueXRoaW5nIHdpdGhvdXQgY29uZmlybWF0aW9uIEFjdGlvbiwgbm8gbWF0dGVyIHdoYXQgdGhlIGxldmVsIG9mIHJpc2suIEl0IHRha2VzIGVmZmVjdCBvbmx5IGlmIE1vZGUgaXMgQXV0b21hdGljLlxuICAgICAqIC0gQ29uZmlybUV2ZXJ5SGlnaFJpc2tBY3Rpb24gKGRlZmF1bHQpOiBUaGlzIG9wdGlvbiB3b3VsZCByZXF1aXJlIGN1c3RvbWVycyB0byBjb25maXJtIGVhY2ggQWN0aW9uIGEgaGlnaCByaXNrLiBOb3RpZnlFeGVjdXRpb24gYnkgY2FsbGluZyBjdXN0b21lciBpbnRlcmZhY2UgdG8gY29uZmlybSBvciBjYW5jZWwuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc2FmZXR5Q2hlY2s/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdGVtcGxhdGVWZXJzaW9uOiBWZXJzaW9uIG51bWJlciBvZiB0ZW1wbGF0ZS4gRGVmYXVsdCB0byB0aGUgbGF0ZXN0IHZlcnNpb24uXG4gICAgICovXG4gICAgcmVhZG9ubHkgdGVtcGxhdGVWZXJzaW9uPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc0V4ZWN1dGlvblByb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NFeGVjdXRpb25Qcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NFeGVjdXRpb25Qcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3BhcmVudEV4ZWN1dGlvbklkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnBhcmVudEV4ZWN1dGlvbklkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZXNvdXJjZU9wdGlvbnMnLCBSb3NFeGVjdXRpb25fUmVzb3VyY2VPcHRpb25zUHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMucmVzb3VyY2VPcHRpb25zKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwYXJhbWV0ZXJzJywgcm9zLmhhc2hWYWxpZGF0b3Iocm9zLnZhbGlkYXRlQW55KSkocHJvcGVydGllcy5wYXJhbWV0ZXJzKSk7XG4gICAgaWYocHJvcGVydGllcy5zYWZldHlDaGVjayAmJiAodHlwZW9mIHByb3BlcnRpZXMuc2FmZXR5Q2hlY2spICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NhZmV0eUNoZWNrJywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuc2FmZXR5Q2hlY2ssXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiQ29uZmlybUV2ZXJ5SGlnaFJpc2tBY3Rpb25cIixcIlNraXBcIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzYWZldHlDaGVjaycsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zYWZldHlDaGVjaykpO1xuICAgIGlmKHByb3BlcnRpZXMubW9kZSAmJiAodHlwZW9mIHByb3BlcnRpZXMubW9kZSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbW9kZScsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLm1vZGUsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiQXV0b21hdGljXCIsXCJEZWJ1Z1wiXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ21vZGUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMubW9kZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGVtcGxhdGVOYW1lJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnRlbXBsYXRlTmFtZSkpO1xuICAgIGlmKHByb3BlcnRpZXMudGVtcGxhdGVOYW1lICYmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXMudGVtcGxhdGVOYW1lKSB8fCAodHlwZW9mIHByb3BlcnRpZXMudGVtcGxhdGVOYW1lKSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGVtcGxhdGVOYW1lJywgcm9zLnZhbGlkYXRlTGVuZ3RoKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnRlbXBsYXRlTmFtZS5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIG1heDogMjAwLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0ZW1wbGF0ZU5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMudGVtcGxhdGVOYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0ZW1wbGF0ZVZlcnNpb24nLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMudGVtcGxhdGVWZXJzaW9uKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc0V4ZWN1dGlvblByb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpPT1M6OkV4ZWN1dGlvbmAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zRXhlY3V0aW9uUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46Ok9PUzo6RXhlY3V0aW9uYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0V4ZWN1dGlvblByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zRXhlY3V0aW9uUHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgVGVtcGxhdGVOYW1lOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnRlbXBsYXRlTmFtZSksXG4gICAgICBNb2RlOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm1vZGUpLFxuICAgICAgUGFyYW1ldGVyczogcm9zLmhhc2hNYXBwZXIocm9zLm9iamVjdFRvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMucGFyYW1ldGVycyksXG4gICAgICBQYXJlbnRFeGVjdXRpb25JZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5wYXJlbnRFeGVjdXRpb25JZCksXG4gICAgICBSZXNvdXJjZU9wdGlvbnM6IHJvc0V4ZWN1dGlvblJlc291cmNlT3B0aW9uc1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnJlc291cmNlT3B0aW9ucyksXG4gICAgICBTYWZldHlDaGVjazogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zYWZldHlDaGVjayksXG4gICAgICBUZW1wbGF0ZVZlcnNpb246IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudGVtcGxhdGVWZXJzaW9uKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIEEgUk9TIHRlbXBsYXRlIHR5cGU6ICBgQUxJWVVOOjpPT1M6OkV4ZWN1dGlvbmBcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc0V4ZWN1dGlvbiBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6T09TOjpFeGVjdXRpb25cIjtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBDb3VudGVyczogVGFzayBzdGF0aXN0aWNzOiBGYWlsZWRUYXNrcywgU3VjY2Vzc1Rhc2tzLCBUb3RhbFRhc2tzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQ291bnRlcnM6IGFueTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgQ3VybENsaTogQ29udmVuaWVuY2UgYXR0cmlidXRlLCBwcm92aWRlcyBjdXJsIENMSSBjb21tYW5kIHByZWZpeCwgd2hpY2ggY2FuIGJlIHVzZWQgdG8gbm90aWZ5IG9vcyBleGVjdXRpb24gaW5zdGVhZCBvZiBPT1MgQVBJIE5vdGlmeUV4ZWN1dGlvbi5cbllvdSBjYW4gbm90aWZ5IGFwcHJvdmUgdG8gb29zIGV4ZWN1dGlvbiBieSBhZGRpbmcgLS1kYXRhLWJpbmFyeSAne1wiZGF0YVwiOiB7XCJOb3RpZnlUeXBlXCI6IFwiQXBwcm92ZVwifX0nIFxuRm9yIG1vcmUgcGFyYW1ldGVycyBpbiBkYXRhLCByZWZlciB0byBodHRwczovL2hlbHAuYWxpeXVuLmNvbS9kb2N1bWVudF9kZXRhaWwvMTIwNzc3Lmh0bWwuXG5Zb3UgY2FuIGFsc28gbm90aWZ5IGV4ZWN1dGlvbiB2aWEgUk9TIEFQSSBTaWduYWxSZXNvdXJjZS4gQVBJIHBhcmFtZXRlcnMgU3RhdHVzIGFuZCBVbmlxdWVJZCBhcmUgaWdub3JlZC4gVXNlIEFQSSBwYXJhbWV0ZXIgRGF0YSB0byBwYXNzIGRhdGEuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJDdXJsQ2xpOiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIEV4ZWN1dGlvbklkOiBFeGVjdXRpb24gSUQuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJFeGVjdXRpb25JZDogYW55O1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBPdXRwdXRzOiBFeGVjdXRpb24gb3V0cHV0LlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyT3V0cHV0czogYW55O1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBQb3dlclNoZWxsQ3VybENsaTogQ29udmVuaWVuY2UgYXR0cmlidXRlLCBwcm92aWRlcyBjdXJsIENMSSBjb21tYW5kIHByZWZpeCBmb3IgUG93ZXJTaGVsbCwgd2hpY2ggY2FuIGJlIHVzZWQgdG8gbm90aWZ5IG9vcyBleGVjdXRpb24gaW5zdGVhZCBvZiBPT1MgQVBJIE5vdGlmeUV4ZWN1dGlvbi5cbllvdSBjYW4gbm90aWZ5IGFwcHJvdmUgdG8gb29zIGV4ZWN1dGlvbiBieSBhZGRpbmcgLUJvZHkgJ3tcImRhdGFcIjoge1wiTm90aWZ5VHlwZVwiOiBcIkFwcHJvdmVcIn19JyBcbkZvciBtb3JlIHBhcmFtZXRlcnMgaW4gZGF0YSwgcmVmZXIgdG8gaHR0cHM6Ly9oZWxwLmFsaXl1bi5jb20vZG9jdW1lbnRfZGV0YWlsLzEyMDc3Ny5odG1sLllvdSBjYW4gYWxzbyBub3RpZnkgZXhlY3V0aW9uIHZpYSBST1MgQVBJIFNpZ25hbFJlc291cmNlLiBBUEkgcGFyYW1ldGVycyBTdGF0dXMgYW5kIFVuaXF1ZUlkIGFyZSBpZ25vcmVkLiBVc2UgQVBJIHBhcmFtZXRlciBEYXRhIHRvIHBhc3MgZGF0YS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clBvd2VyU2hlbGxDdXJsQ2xpOiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFN0YXR1czogRXhlY3V0aW9uIHN0YXR1cy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clN0YXR1czogYW55O1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBTdGF0dXNNZXNzYWdlOiBFeGVjdXRpb24gc3RhdHVzIGluZm9ybWF0aW9uLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyU3RhdHVzTWVzc2FnZTogYW55O1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBXaW5kb3dzQ3VybENsaTogQ29udmVuaWVuY2UgYXR0cmlidXRlLCBwcm92aWRlcyBjdXJsIENMSSBjb21tYW5kIHByZWZpeCBmb3IgV2luZG93cywgd2hpY2ggY2FuIGJlIHVzZWQgdG8gbm90aWZ5IG9vcyBleGVjdXRpb24gaW5zdGVhZCBvZiBPT1MgQVBJIE5vdGlmeUV4ZWN1dGlvbi5cbllvdSBjYW4gbm90aWZ5IGFwcHJvdmUgdG8gb29zIGV4ZWN1dGlvbiBieSBhZGRpbmcgLS1kYXRhLWJpbmFyeSBcIntcXFwiZGF0YVxcXCI6IHtcXFwiTm90aWZ5VHlwZVxcXCI6IFxcXCJBcHByb3ZlXFxcIn19XCIgXG5Gb3IgbW9yZSBwYXJhbWV0ZXJzIGluIGRhdGEsIHJlZmVyIHRvIGh0dHBzOi8vaGVscC5hbGl5dW4uY29tL2RvY3VtZW50X2RldGFpbC8xMjA3NzcuaHRtbC5Zb3UgY2FuIGFsc28gbm90aWZ5IGV4ZWN1dGlvbiB2aWEgUk9TIEFQSSBTaWduYWxSZXNvdXJjZS4gQVBJIHBhcmFtZXRlcnMgU3RhdHVzIGFuZCBVbmlxdWVJZCBhcmUgaWdub3JlZC4gVXNlIEFQSSBwYXJhbWV0ZXIgRGF0YSB0byBwYXNzIGRhdGEuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJXaW5kb3dzQ3VybENsaTogYW55O1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdGVtcGxhdGVOYW1lOiBUZW1wbGF0ZSBuYW1lLiBDb250ZW50IGlzIGxpbWl0ZWQgdG8gbGV0dGVycywgbnVtYmVycywgdW5kZXJsaW5lZCwgdW5kZXJsaW5lLCB0aGUgbGVuZ3RoIG9mIDIwMCBjaGFyYWN0ZXJzLCBhbmQgY2FuIG5vdCBiZWdpbiB0byBBTElZVU4sIEFDUywgQUxJQkFCQS5cbiAgICAgKi9cbiAgICBwdWJsaWMgdGVtcGxhdGVOYW1lOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbW9kZTogRXhlY3V0aW9uIG1vZGUuXG4gICAgICovXG4gICAgcHVibGljIG1vZGU6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwYXJhbWV0ZXJzOiBQYXJhbWV0ZXJzIGZvciB0aGUgZXhlY3V0aW9uIG9mIHRlbXBsYXRlLlxuICAgICAqL1xuICAgIHB1YmxpYyBwYXJhbWV0ZXJzOiB7IFtrZXk6IHN0cmluZ106IChhbnkgfCByb3MuSVJlc29sdmFibGUpIH0gfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcGFyZW50RXhlY3V0aW9uSWQ6IFBhcmVudCBleGVjdXRpb24gSUQuXG4gICAgICovXG4gICAgcHVibGljIHBhcmVudEV4ZWN1dGlvbklkOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVzb3VyY2VPcHRpb25zOiBSZXNvdXJjZSBvcHRpb25zIHVzZXIgYnkgUk9TLlxuICAgICAqL1xuICAgIHB1YmxpYyByZXNvdXJjZU9wdGlvbnM6IFJvc0V4ZWN1dGlvbi5SZXNvdXJjZU9wdGlvbnNQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzYWZldHlDaGVjazogU2VjdXJpdHkgY2hlY2sgbW9kZS4gQWxsb3dlZCB2YWx1ZXM6XG4gICAgICogLSBTa2lwOiBUaGlzIG9wdGlvbiBtZWFucyB0aGF0IGN1c3RvbWVycyB1bmRlcnN0YW5kIHRoZSByaXNrcywgeW91IGNhbiBkbyBhbnl0aGluZyB3aXRob3V0IGNvbmZpcm1hdGlvbiBBY3Rpb24sIG5vIG1hdHRlciB3aGF0IHRoZSBsZXZlbCBvZiByaXNrLiBJdCB0YWtlcyBlZmZlY3Qgb25seSBpZiBNb2RlIGlzIEF1dG9tYXRpYy5cbiAgICAgKiAtIENvbmZpcm1FdmVyeUhpZ2hSaXNrQWN0aW9uIChkZWZhdWx0KTogVGhpcyBvcHRpb24gd291bGQgcmVxdWlyZSBjdXN0b21lcnMgdG8gY29uZmlybSBlYWNoIEFjdGlvbiBhIGhpZ2ggcmlzay4gTm90aWZ5RXhlY3V0aW9uIGJ5IGNhbGxpbmcgY3VzdG9tZXIgaW50ZXJmYWNlIHRvIGNvbmZpcm0gb3IgY2FuY2VsLlxuICAgICAqL1xuICAgIHB1YmxpYyBzYWZldHlDaGVjazogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHRlbXBsYXRlVmVyc2lvbjogVmVyc2lvbiBudW1iZXIgb2YgdGVtcGxhdGUuIERlZmF1bHQgdG8gdGhlIGxhdGVzdCB2ZXJzaW9uLlxuICAgICAqL1xuICAgIHB1YmxpYyB0ZW1wbGF0ZVZlcnNpb246IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpPT1M6OkV4ZWN1dGlvbmAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zRXhlY3V0aW9uUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NFeGVjdXRpb24uUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG4gICAgICAgIHRoaXMuYXR0ckNvdW50ZXJzID0gcm9zLlRva2VuLmFzU3RyaW5nKHRoaXMuZ2V0QXR0KCdDb3VudGVycycpKTtcbiAgICAgICAgdGhpcy5hdHRyQ3VybENsaSA9IHJvcy5Ub2tlbi5hc1N0cmluZyh0aGlzLmdldEF0dCgnQ3VybENsaScpKTtcbiAgICAgICAgdGhpcy5hdHRyRXhlY3V0aW9uSWQgPSByb3MuVG9rZW4uYXNTdHJpbmcodGhpcy5nZXRBdHQoJ0V4ZWN1dGlvbklkJykpO1xuICAgICAgICB0aGlzLmF0dHJPdXRwdXRzID0gcm9zLlRva2VuLmFzU3RyaW5nKHRoaXMuZ2V0QXR0KCdPdXRwdXRzJykpO1xuICAgICAgICB0aGlzLmF0dHJQb3dlclNoZWxsQ3VybENsaSA9IHJvcy5Ub2tlbi5hc1N0cmluZyh0aGlzLmdldEF0dCgnUG93ZXJTaGVsbEN1cmxDbGknKSk7XG4gICAgICAgIHRoaXMuYXR0clN0YXR1cyA9IHJvcy5Ub2tlbi5hc1N0cmluZyh0aGlzLmdldEF0dCgnU3RhdHVzJykpO1xuICAgICAgICB0aGlzLmF0dHJTdGF0dXNNZXNzYWdlID0gcm9zLlRva2VuLmFzU3RyaW5nKHRoaXMuZ2V0QXR0KCdTdGF0dXNNZXNzYWdlJykpO1xuICAgICAgICB0aGlzLmF0dHJXaW5kb3dzQ3VybENsaSA9IHJvcy5Ub2tlbi5hc1N0cmluZyh0aGlzLmdldEF0dCgnV2luZG93c0N1cmxDbGknKSk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLnRlbXBsYXRlTmFtZSA9IHByb3BzLnRlbXBsYXRlTmFtZTtcbiAgICAgICAgdGhpcy5tb2RlID0gcHJvcHMubW9kZTtcbiAgICAgICAgdGhpcy5wYXJhbWV0ZXJzID0gcHJvcHMucGFyYW1ldGVycztcbiAgICAgICAgdGhpcy5wYXJlbnRFeGVjdXRpb25JZCA9IHByb3BzLnBhcmVudEV4ZWN1dGlvbklkO1xuICAgICAgICB0aGlzLnJlc291cmNlT3B0aW9ucyA9IHByb3BzLnJlc291cmNlT3B0aW9ucztcbiAgICAgICAgdGhpcy5zYWZldHlDaGVjayA9IHByb3BzLnNhZmV0eUNoZWNrO1xuICAgICAgICB0aGlzLnRlbXBsYXRlVmVyc2lvbiA9IHByb3BzLnRlbXBsYXRlVmVyc2lvbjtcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0ZW1wbGF0ZU5hbWU6IHRoaXMudGVtcGxhdGVOYW1lLFxuICAgICAgICAgICAgbW9kZTogdGhpcy5tb2RlLFxuICAgICAgICAgICAgcGFyYW1ldGVyczogdGhpcy5wYXJhbWV0ZXJzLFxuICAgICAgICAgICAgcGFyZW50RXhlY3V0aW9uSWQ6IHRoaXMucGFyZW50RXhlY3V0aW9uSWQsXG4gICAgICAgICAgICByZXNvdXJjZU9wdGlvbnM6IHRoaXMucmVzb3VyY2VPcHRpb25zLFxuICAgICAgICAgICAgc2FmZXR5Q2hlY2s6IHRoaXMuc2FmZXR5Q2hlY2ssXG4gICAgICAgICAgICB0ZW1wbGF0ZVZlcnNpb246IHRoaXMudGVtcGxhdGVWZXJzaW9uLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NFeGVjdXRpb25Qcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NFeGVjdXRpb24ge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIFJlc291cmNlT3B0aW9uc1Byb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBjYW5jZWxPbkRlbGV0ZTogV2hldGhlciB0byBjYW5jZWwgZXhlY3V0aW9uIGZvciByZXNvdXJjZSBkZWxldGlvbiwgaWYgdGhlIGV4ZWN1dGlvbiBpcyBub3QgY29tcGxldGVkLiBEZWZhdWx0IHRvIGZhbHNlLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgY2FuY2VsT25EZWxldGU/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHRpbWVvdXQ6IFRpbWVvdXQgc2Vjb25kcyBiZWZvcmUgdGhlIGNvbXBsZXRpb24gb2YgZXhlY3V0aW9uLiBEZWZhdWx0IHRvIDE4MDAuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSB0aW1lb3V0PzogbnVtYmVyO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHN1Y2Nlc3NTdGF0dXNlczogSXQgaXMgdXNlZCBmb3IgUk9TIHRvIGp1ZGdlIGlmIHJlc291cmNlIGNyZWF0aW9uIGlzIHN1Y2Nlc3NmdWwuXG4gICAgICogRGVmYXVsdCB0byBbU3VjY2Vzc10uXG4gICAgICogUk9TIHdpbGwgd2FpdCB1dGlsIHNvbWUgc3RhdHVzIGluIFN1Y2Nlc3NTdGF0dXNlcyBvciBGYWlsdXJlU3RhdHVzZXMuXG4gICAgICogRmFpbHVyZVN0YXR1c2VzIGhhcyBoaWdoZXIgcHJpb3JpdHkuXG4gICAgICogU3BlY2lmaWVkIGFsbCBzdGF0dXNlcyhTdGFydGVkLFF1ZXVlZCxSdW5uaW5nLFdhaXRpbmcsU3VjY2VzcyxGYWlsZWQsQ2FuY2VsbGVkKSBpZiB5b3UgZG8gbm90IHdhbnQgdG8gd2FpdCBmb3IgdGhlIGNvbXBsZXRpb24gb2YgZXhlY3V0aW9uLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgc3VjY2Vzc1N0YXR1c2VzPzogQXJyYXk8YW55IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBmYWlsdXJlU3RhdHVzZXM6IEl0IGlzIHVzZWQgZm9yIFJPUyB0byBqdWRnZSBpZiByZXNvdXJjZSBjcmVhdGlvbiBmYWlscy5cbiAgICAgKiBEZWZhdWx0IHRvIFtGYWlsZWQsIENhbmNlbGxlZF0uXG4gICAgICogUk9TIHdpbGwgd2FpdCB1dGlsIHNvbWUgc3RhdHVzIGluIFN1Y2Nlc3NTdGF0dXNlcyBvciBGYWlsdXJlU3RhdHVzZXMuXG4gICAgICogRmFpbHVyZVN0YXR1c2VzIGhhcyBoaWdoZXIgcHJpb3JpdHkuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBmYWlsdXJlU3RhdHVzZXM/OiBBcnJheTxhbnkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUmVzb3VyY2VPcHRpb25zUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJlc291cmNlT3B0aW9uc1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0V4ZWN1dGlvbl9SZXNvdXJjZU9wdGlvbnNQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NhbmNlbE9uRGVsZXRlJywgcm9zLnZhbGlkYXRlQm9vbGVhbikocHJvcGVydGllcy5jYW5jZWxPbkRlbGV0ZSkpO1xuICAgIGlmKHByb3BlcnRpZXMudGltZW91dCAmJiAodHlwZW9mIHByb3BlcnRpZXMudGltZW91dCkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGltZW91dCcsIHJvcy52YWxpZGF0ZVJhbmdlKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnRpbWVvdXQsXG4gICAgICAgICAgICBtaW46IDEwLFxuICAgICAgICAgICAgbWF4OiA0MzIwMCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGltZW91dCcsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy50aW1lb3V0KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzdWNjZXNzU3RhdHVzZXMnLCByb3MubGlzdFZhbGlkYXRvcihyb3MudmFsaWRhdGVBbnkpKShwcm9wZXJ0aWVzLnN1Y2Nlc3NTdGF0dXNlcykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZmFpbHVyZVN0YXR1c2VzJywgcm9zLmxpc3RWYWxpZGF0b3Iocm9zLnZhbGlkYXRlQW55KSkocHJvcGVydGllcy5mYWlsdXJlU3RhdHVzZXMpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUmVzb3VyY2VPcHRpb25zUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46Ok9PUzo6RXhlY3V0aW9uLlJlc291cmNlT3B0aW9uc2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUmVzb3VyY2VPcHRpb25zUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46Ok9PUzo6RXhlY3V0aW9uLlJlc291cmNlT3B0aW9uc2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NFeGVjdXRpb25SZXNvdXJjZU9wdGlvbnNQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zRXhlY3V0aW9uX1Jlc291cmNlT3B0aW9uc1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgQ2FuY2VsT25EZWxldGU6IHJvcy5ib29sZWFuVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmNhbmNlbE9uRGVsZXRlKSxcbiAgICAgIFRpbWVvdXQ6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudGltZW91dCksXG4gICAgICBTdWNjZXNzU3RhdHVzZXM6IHJvcy5saXN0TWFwcGVyKHJvcy5vYmplY3RUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLnN1Y2Nlc3NTdGF0dXNlcyksXG4gICAgICBGYWlsdXJlU3RhdHVzZXM6IHJvcy5saXN0TWFwcGVyKHJvcy5vYmplY3RUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLmZhaWx1cmVTdGF0dXNlcyksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46Ok9PUzo6UGFyYW1ldGVyYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc1BhcmFtZXRlclByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBuYW1lOiBUaGUgbmFtZSBvZiB0aGUgcGFyYW1ldGVyLiBcbiAgICAgKiBUaGUgbmFtZSBtdXN0IGJlIDEgdG8gMjAwIGNoYXJhY3RlcnMgaW4gbGVuZ3RoLGFuZCBjYW4gY29udGFpbiBsZXR0ZXJzLCBkaWdpdHMsIGh5cGhlbnMgKC0pLCBhbmQgdW5kZXJzY29yZXMgKF8pLiBcbiAgICAgKiBJdCBjYW5ub3Qgc3RhcnQgd2l0aCBBTElZVU4sIEFDUywgQUxJQkFCQSwgQUxJQ0xPVUQsIG9yIE9PUy5cbiAgICAgKi9cbiAgICByZWFkb25seSBuYW1lOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdHlwZTogVGhlIGRhdGEgdHlwZSBvZiB0aGUgY29tbW9uIHBhcmFtZXRlci4gXG4gICAgICogVmFsaWQgdmFsdWVzOiBTdHJpbmcgYW5kIFN0cmluZ0xpc3QuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdHlwZTogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHZhbHVlOiBUaGUgdmFsdWUgb2YgdGhlIHBhcmFtZXRlci4gXG4gICAgICogVGhlIHZhbHVlIG11c3QgYmUgMSB0byA0MDk2IGNoYXJhY3RlcnMgaW4gbGVuZ3RoLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHZhbHVlOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY29uc3RyYWludHM6IFRoZSBjb25zdHJhaW50cyBvZiB0aGUgcGFyYW1ldGVyLiBcbiAgICAgKiBCeSBkZWZhdWx0LCB0aGlzIHBhcmFtZXRlciBpcyBudWxsLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogQWxsb3dlZFZhbHVlczogVGhlIHZhbHVlIHRoYXQgaXMgYWxsb3dlZCBmb3IgdGhlIHBhcmFtZXRlci4gSXQgbXVzdCBiZSBhbiBhcnJheSBzdHJpbmcuXG4gICAgICogQWxsb3dlZFBhdHRlcm46IFRoZSBwYXR0ZXJuIHRoYXQgaXMgYWxsb3dlZCBmb3IgdGhlIHBhcmFtZXRlci4gSXQgbXVzdCBiZSBhIHJlZ3VsYXIgZXhwcmVzc2lvbi5cbiAgICAgKiBNaW5MZW5ndGg6IFRoZSBtaW5pbXVtIGxlbmd0aCBvZiB0aGUgcGFyYW1ldGVyLlxuICAgICAqIE1heExlbmd0aDogVGhlIG1heGltdW0gbGVuZ3RoIG9mIHRoZSBwYXJhbWV0ZXIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgY29uc3RyYWludHM/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGVzY3JpcHRpb246IFRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgcGFyYW1ldGVyLiBcbiAgICAgKiBUaGUgZGVzY3JpcHRpb24gbXVzdCBiZSAxIHRvIDIwMCBjaGFyYWN0ZXJzIGluIGxlbmd0aC5cbiAgICAgKi9cbiAgICByZWFkb25seSBkZXNjcmlwdGlvbj86IHN0cmluZztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NQYXJhbWV0ZXJQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zUGFyYW1ldGVyUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zUGFyYW1ldGVyUHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0eXBlJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnR5cGUpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnR5cGUgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLnR5cGUpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3R5cGUnLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy50eXBlLFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFtcIlN0cmluZ1wiLFwiU3RyaW5nTGlzdFwiXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3R5cGUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMudHlwZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY29uc3RyYWludHMnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuY29uc3RyYWludHMpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2Rlc2NyaXB0aW9uJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmRlc2NyaXB0aW9uKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd2YWx1ZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy52YWx1ZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndmFsdWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMudmFsdWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ25hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMubmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5uYW1lKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc1BhcmFtZXRlclByb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpPT1M6OlBhcmFtZXRlcmAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zUGFyYW1ldGVyUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46Ok9PUzo6UGFyYW1ldGVyYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc1BhcmFtZXRlclByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zUGFyYW1ldGVyUHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgTmFtZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5uYW1lKSxcbiAgICAgIFR5cGU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudHlwZSksXG4gICAgICBWYWx1ZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy52YWx1ZSksXG4gICAgICBDb25zdHJhaW50czogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5jb25zdHJhaW50cyksXG4gICAgICBEZXNjcmlwdGlvbjogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5kZXNjcmlwdGlvbiksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBBIFJPUyB0ZW1wbGF0ZSB0eXBlOiAgYEFMSVlVTjo6T09TOjpQYXJhbWV0ZXJgXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NQYXJhbWV0ZXIgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46Ok9PUzo6UGFyYW1ldGVyXCI7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgTmFtZTogVGhlIE5hbWUgb2YgdGhlIHBhcmFtZXRlci5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ck5hbWU6IGFueTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgVmFsdWU6IFRoZSBWYWx1ZSBvZiB0aGUgcGFyYW1ldGVyLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyVmFsdWU6IGFueTtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG5hbWU6IFRoZSBuYW1lIG9mIHRoZSBwYXJhbWV0ZXIuIFxuICAgICAqIFRoZSBuYW1lIG11c3QgYmUgMSB0byAyMDAgY2hhcmFjdGVycyBpbiBsZW5ndGgsYW5kIGNhbiBjb250YWluIGxldHRlcnMsIGRpZ2l0cywgaHlwaGVucyAoLSksIGFuZCB1bmRlcnNjb3JlcyAoXykuIFxuICAgICAqIEl0IGNhbm5vdCBzdGFydCB3aXRoIEFMSVlVTiwgQUNTLCBBTElCQUJBLCBBTElDTE9VRCwgb3IgT09TLlxuICAgICAqL1xuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdHlwZTogVGhlIGRhdGEgdHlwZSBvZiB0aGUgY29tbW9uIHBhcmFtZXRlci4gXG4gICAgICogVmFsaWQgdmFsdWVzOiBTdHJpbmcgYW5kIFN0cmluZ0xpc3QuXG4gICAgICovXG4gICAgcHVibGljIHR5cGU6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB2YWx1ZTogVGhlIHZhbHVlIG9mIHRoZSBwYXJhbWV0ZXIuIFxuICAgICAqIFRoZSB2YWx1ZSBtdXN0IGJlIDEgdG8gNDA5NiBjaGFyYWN0ZXJzIGluIGxlbmd0aC5cbiAgICAgKi9cbiAgICBwdWJsaWMgdmFsdWU6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjb25zdHJhaW50czogVGhlIGNvbnN0cmFpbnRzIG9mIHRoZSBwYXJhbWV0ZXIuIFxuICAgICAqIEJ5IGRlZmF1bHQsIHRoaXMgcGFyYW1ldGVyIGlzIG51bGwuIFZhbGlkIHZhbHVlczpcbiAgICAgKiBBbGxvd2VkVmFsdWVzOiBUaGUgdmFsdWUgdGhhdCBpcyBhbGxvd2VkIGZvciB0aGUgcGFyYW1ldGVyLiBJdCBtdXN0IGJlIGFuIGFycmF5IHN0cmluZy5cbiAgICAgKiBBbGxvd2VkUGF0dGVybjogVGhlIHBhdHRlcm4gdGhhdCBpcyBhbGxvd2VkIGZvciB0aGUgcGFyYW1ldGVyLiBJdCBtdXN0IGJlIGEgcmVndWxhciBleHByZXNzaW9uLlxuICAgICAqIE1pbkxlbmd0aDogVGhlIG1pbmltdW0gbGVuZ3RoIG9mIHRoZSBwYXJhbWV0ZXIuXG4gICAgICogTWF4TGVuZ3RoOiBUaGUgbWF4aW11bSBsZW5ndGggb2YgdGhlIHBhcmFtZXRlci5cbiAgICAgKi9cbiAgICBwdWJsaWMgY29uc3RyYWludHM6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZXNjcmlwdGlvbjogVGhlIGRlc2NyaXB0aW9uIG9mIHRoZSBwYXJhbWV0ZXIuIFxuICAgICAqIFRoZSBkZXNjcmlwdGlvbiBtdXN0IGJlIDEgdG8gMjAwIGNoYXJhY3RlcnMgaW4gbGVuZ3RoLlxuICAgICAqL1xuICAgIHB1YmxpYyBkZXNjcmlwdGlvbjogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46Ok9PUzo6UGFyYW1ldGVyYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NQYXJhbWV0ZXJQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc1BhcmFtZXRlci5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcbiAgICAgICAgdGhpcy5hdHRyTmFtZSA9IHJvcy5Ub2tlbi5hc1N0cmluZyh0aGlzLmdldEF0dCgnTmFtZScpKTtcbiAgICAgICAgdGhpcy5hdHRyVmFsdWUgPSByb3MuVG9rZW4uYXNTdHJpbmcodGhpcy5nZXRBdHQoJ1ZhbHVlJykpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5uYW1lID0gcHJvcHMubmFtZTtcbiAgICAgICAgdGhpcy50eXBlID0gcHJvcHMudHlwZTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHByb3BzLnZhbHVlO1xuICAgICAgICB0aGlzLmNvbnN0cmFpbnRzID0gcHJvcHMuY29uc3RyYWludHM7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBwcm9wcy5kZXNjcmlwdGlvbjtcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICAgICAgICB0eXBlOiB0aGlzLnR5cGUsXG4gICAgICAgICAgICB2YWx1ZTogdGhpcy52YWx1ZSxcbiAgICAgICAgICAgIGNvbnN0cmFpbnRzOiB0aGlzLmNvbnN0cmFpbnRzLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc1BhcmFtZXRlclByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6T09TOjpUZW1wbGF0ZWBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NUZW1wbGF0ZVByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjb250ZW50OiBUaGUgY29udGVudCBvZiB0aGUgdGVtcGxhdGUuIFRoZSB0ZW1wbGF0ZSBtdXN0IGJlIGluIHRoZSBKU09OIG9yIFlBTUwgZm9ybWF0LiBNYXhpbXVtIHNpemU6IDY0IEtCLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNvbnRlbnQ6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0ZW1wbGF0ZU5hbWU6IFRoZSBuYW1lIG9mIHRoZSB0ZW1wbGF0ZS4gVGhlIHRlbXBsYXRlIG5hbWUgY2FuIGJlIHVwIHRvIDIwMCBjaGFyYWN0ZXJzIGluIGxlbmd0aC4gVGhlIG5hbWUgY2FuIGNvbnRhaW4gbGV0dGVycywgZGlnaXRzLCBoeXBoZW5zICgtKSwgYW5kIHVuZGVyc2NvcmVzIChfKS4gSXQgY2Fubm90IHN0YXJ0IHdpdGggQUxJWVVOLCBBQ1MsIEFMSUJBQkEsIG9yIEFMSUNMT1VELlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRlbXBsYXRlTmFtZTogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHRhZ3M6IFRhZyB2YWx1ZSBhbmQgdGhlIGtleSBtYXBwaW5nLCB0aGUgbGFiZWwgb2YgdGhlIGtleSBudW1iZXIgY2FuIGJlIHVwIHRvIDIwLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRhZ3M/OiByb3MuUm9zVGFnW107XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zVGVtcGxhdGVQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zVGVtcGxhdGVQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NUZW1wbGF0ZVByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY29udGVudCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5jb250ZW50KSk7XG4gICAgaWYocHJvcGVydGllcy5jb250ZW50ICYmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXMuY29udGVudCkgfHwgKHR5cGVvZiBwcm9wZXJ0aWVzLmNvbnRlbnQpID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjb250ZW50Jywgcm9zLnZhbGlkYXRlTGVuZ3RoKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmNvbnRlbnQubGVuZ3RoLFxuICAgICAgICAgICAgbWluOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBtYXg6IDY1NTM2LFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjb250ZW50Jywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmNvbnRlbnQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RlbXBsYXRlTmFtZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy50ZW1wbGF0ZU5hbWUpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnRlbXBsYXRlTmFtZSAmJiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzLnRlbXBsYXRlTmFtZSkgfHwgKHR5cGVvZiBwcm9wZXJ0aWVzLnRlbXBsYXRlTmFtZSkgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RlbXBsYXRlTmFtZScsIHJvcy52YWxpZGF0ZUxlbmd0aCkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy50ZW1wbGF0ZU5hbWUubGVuZ3RoLFxuICAgICAgICAgICAgbWluOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBtYXg6IDIwMCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGVtcGxhdGVOYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnRlbXBsYXRlTmFtZSkpO1xuICAgIGlmKHByb3BlcnRpZXMudGFncyAmJiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzLnRhZ3MpIHx8ICh0eXBlb2YgcHJvcGVydGllcy50YWdzKSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGFncycsIHJvcy52YWxpZGF0ZUxlbmd0aCkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy50YWdzLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgbWF4OiAyMCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGFncycsIHJvcy5saXN0VmFsaWRhdG9yKHJvcy52YWxpZGF0ZVJvc1RhZykpKHByb3BlcnRpZXMudGFncykpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NUZW1wbGF0ZVByb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpPT1M6OlRlbXBsYXRlYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NUZW1wbGF0ZVByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpPT1M6OlRlbXBsYXRlYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc1RlbXBsYXRlUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NUZW1wbGF0ZVByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIENvbnRlbnQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuY29udGVudCksXG4gICAgICBUZW1wbGF0ZU5hbWU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudGVtcGxhdGVOYW1lKSxcbiAgICAgIFRhZ3M6IHJvcy5saXN0TWFwcGVyKHJvcy5yb3NUYWdUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLnRhZ3MpLFxuICAgIH07XG59XG5cbi8qKlxuICogQSBST1MgdGVtcGxhdGUgdHlwZTogIGBBTElZVU46Ok9PUzo6VGVtcGxhdGVgXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NUZW1wbGF0ZSBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6T09TOjpUZW1wbGF0ZVwiO1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIEV4ZWN1dGlvblBvbGljeTogRXhlY3V0aW9uIFBvbGljeVxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRXhlY3V0aW9uUG9saWN5OiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFRlbXBsYXRlSWQ6IFRlbXBsYXRlIElEXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJUZW1wbGF0ZUlkOiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFRlbXBsYXRlTmFtZTogVGVtcGxhdGUgTmFtZVxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyVGVtcGxhdGVOYW1lOiBhbnk7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjb250ZW50OiBUaGUgY29udGVudCBvZiB0aGUgdGVtcGxhdGUuIFRoZSB0ZW1wbGF0ZSBtdXN0IGJlIGluIHRoZSBKU09OIG9yIFlBTUwgZm9ybWF0LiBNYXhpbXVtIHNpemU6IDY0IEtCLlxuICAgICAqL1xuICAgIHB1YmxpYyBjb250ZW50OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdGVtcGxhdGVOYW1lOiBUaGUgbmFtZSBvZiB0aGUgdGVtcGxhdGUuIFRoZSB0ZW1wbGF0ZSBuYW1lIGNhbiBiZSB1cCB0byAyMDAgY2hhcmFjdGVycyBpbiBsZW5ndGguIFRoZSBuYW1lIGNhbiBjb250YWluIGxldHRlcnMsIGRpZ2l0cywgaHlwaGVucyAoLSksIGFuZCB1bmRlcnNjb3JlcyAoXykuIEl0IGNhbm5vdCBzdGFydCB3aXRoIEFMSVlVTiwgQUNTLCBBTElCQUJBLCBvciBBTElDTE9VRC5cbiAgICAgKi9cbiAgICBwdWJsaWMgdGVtcGxhdGVOYW1lOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdGFnczogVGFnIHZhbHVlIGFuZCB0aGUga2V5IG1hcHBpbmcsIHRoZSBsYWJlbCBvZiB0aGUga2V5IG51bWJlciBjYW4gYmUgdXAgdG8gMjAuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IHRhZ3M6IHJvcy5UYWdNYW5hZ2VyO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46Ok9PUzo6VGVtcGxhdGVgLlxuICAgICAqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc1RlbXBsYXRlUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NUZW1wbGF0ZS5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcbiAgICAgICAgdGhpcy5hdHRyRXhlY3V0aW9uUG9saWN5ID0gcm9zLlRva2VuLmFzU3RyaW5nKHRoaXMuZ2V0QXR0KCdFeGVjdXRpb25Qb2xpY3knKSk7XG4gICAgICAgIHRoaXMuYXR0clRlbXBsYXRlSWQgPSByb3MuVG9rZW4uYXNTdHJpbmcodGhpcy5nZXRBdHQoJ1RlbXBsYXRlSWQnKSk7XG4gICAgICAgIHRoaXMuYXR0clRlbXBsYXRlTmFtZSA9IHJvcy5Ub2tlbi5hc1N0cmluZyh0aGlzLmdldEF0dCgnVGVtcGxhdGVOYW1lJykpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5jb250ZW50ID0gcHJvcHMuY29udGVudDtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZU5hbWUgPSBwcm9wcy50ZW1wbGF0ZU5hbWU7XG4gICAgICAgIHRoaXMudGFncyA9IG5ldyByb3MuVGFnTWFuYWdlcihyb3MuVGFnVHlwZS5TVEFOREFSRCwgXCJBTElZVU46Ok9PUzo6VGVtcGxhdGVcIiwgcHJvcHMudGFncywgeyB0YWdQcm9wZXJ0eU5hbWU6ICd0YWdzJyB9KTtcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjb250ZW50OiB0aGlzLmNvbnRlbnQsXG4gICAgICAgICAgICB0ZW1wbGF0ZU5hbWU6IHRoaXMudGVtcGxhdGVOYW1lLFxuICAgICAgICAgICAgdGFnczogdGhpcy50YWdzLnJlbmRlclRhZ3MoKSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zVGVtcGxhdGVQcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cbiJdfQ==