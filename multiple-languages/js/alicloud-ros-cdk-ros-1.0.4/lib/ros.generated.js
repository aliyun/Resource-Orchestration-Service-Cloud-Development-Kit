"use strict";
// Generated from the AliCloud ROS Resource Specification
Object.defineProperty(exports, "__esModule", { value: true });
exports.RosWaitConditionHandle = exports.RosWaitCondition = exports.RosStack = exports.RosSleep = exports.RosCustomResource = exports.RosAutoEnableService = void 0;
const ros = require("@alicloud/ros-cdk-core");
/**
 * Determine whether the given properties match those of a `RosAutoEnableServiceProps`
 *
 * @param properties - the TypeScript properties of a `RosAutoEnableServiceProps`
 *
 * @returns the result of the validation.
 */
function RosAutoEnableServicePropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('serviceName', ros.requiredValidator)(properties.serviceName));
    if (properties.serviceName && (typeof properties.serviceName) !== 'object') {
        errors.collect(ros.propertyValidator('serviceName', ros.validateAllowedValues)({
            data: properties.serviceName,
            allowedValues: ["IOT", "EMAS", "MaxCompute", "BatchCompute", "IMM", "Xtrace", "DataWorks", "FNF", "FC", "KMS", "CS", "CR", "DataHub", "EDAS", "CMS", "RocketMQ", "HBR", "ApiGateway", "NLP", "SLS", "NAS", "OSS", "MNS", "TrafficMirror", "ARMS", "SAE", "CloudStorageGateway", "PrivateZone", "DCDN", "VS", "AHAS", "BrainIndustrial", "OTS", "PrivateLink"],
        }));
    }
    errors.collect(ros.propertyValidator('serviceName', ros.validateString)(properties.serviceName));
    return errors.wrap('supplied properties not correct for "RosAutoEnableServiceProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ROS::AutoEnableService` resource
 *
 * @param properties - the TypeScript properties of a `RosAutoEnableServiceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ROS::AutoEnableService` resource.
 */
// @ts-ignore TS6133
function rosAutoEnableServicePropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosAutoEnableServicePropsValidator(properties).assertSuccess();
    }
    return {
        ServiceName: ros.stringToRosTemplate(properties.serviceName),
    };
}
/**
 * A ROS template type:  `ALIYUN::ROS::AutoEnableService`
 */
class RosAutoEnableService extends ros.RosResource {
    /**
     * Create a new `ALIYUN::ROS::AutoEnableService`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosAutoEnableService.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.serviceName = props.serviceName;
    }
    get rosProperties() {
        return {
            serviceName: this.serviceName,
        };
    }
    renderProperties(props) {
        return rosAutoEnableServicePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosAutoEnableService = RosAutoEnableService;
/**
 * The resource type name for this resource class.
 */
RosAutoEnableService.ROS_RESOURCE_TYPE_NAME = "ALIYUN::ROS::AutoEnableService";
/**
 * Determine whether the given properties match those of a `RosCustomResourceProps`
 *
 * @param properties - the TypeScript properties of a `RosCustomResourceProps`
 *
 * @returns the result of the validation.
 */
function RosCustomResourcePropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('serviceToken', ros.requiredValidator)(properties.serviceToken));
    if (properties.serviceToken && (Array.isArray(properties.serviceToken) || (typeof properties.serviceToken) === 'string')) {
        errors.collect(ros.propertyValidator('serviceToken', ros.validateLength)({
            data: properties.serviceToken.length,
            min: undefined,
            max: 512,
        }));
    }
    errors.collect(ros.propertyValidator('serviceToken', ros.validateString)(properties.serviceToken));
    errors.collect(ros.propertyValidator('parameters', ros.hashValidator(ros.validateAny))(properties.parameters));
    errors.collect(ros.propertyValidator('timeout', ros.requiredValidator)(properties.timeout));
    if (properties.timeout && (typeof properties.timeout) !== 'object') {
        errors.collect(ros.propertyValidator('timeout', ros.validateRange)({
            data: properties.timeout,
            min: 1,
            max: 43200,
        }));
    }
    errors.collect(ros.propertyValidator('timeout', ros.validateNumber)(properties.timeout));
    errors.collect(ros.propertyValidator('httpConfig', RosCustomResource_HttpConfigPropertyValidator)(properties.httpConfig));
    return errors.wrap('supplied properties not correct for "RosCustomResourceProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ROS::CustomResource` resource
 *
 * @param properties - the TypeScript properties of a `RosCustomResourceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ROS::CustomResource` resource.
 */
// @ts-ignore TS6133
function rosCustomResourcePropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosCustomResourcePropsValidator(properties).assertSuccess();
    }
    return {
        ServiceToken: ros.stringToRosTemplate(properties.serviceToken),
        Timeout: ros.numberToRosTemplate(properties.timeout),
        HttpConfig: rosCustomResourceHttpConfigPropertyToRosTemplate(properties.httpConfig),
        Parameters: ros.hashMapper(ros.objectToRosTemplate)(properties.parameters),
    };
}
/**
 * A ROS template type:  `ALIYUN::ROS::CustomResource`
 */
class RosCustomResource extends ros.RosResource {
    /**
     * Create a new `ALIYUN::ROS::CustomResource`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosCustomResource.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrOutputs = this.getAtt('Outputs');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.serviceToken = props.serviceToken;
        this.timeout = props.timeout;
        this.httpConfig = props.httpConfig;
        this.parameters = props.parameters;
    }
    get rosProperties() {
        return {
            serviceToken: this.serviceToken,
            timeout: this.timeout,
            httpConfig: this.httpConfig,
            parameters: this.parameters,
        };
    }
    renderProperties(props) {
        return rosCustomResourcePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosCustomResource = RosCustomResource;
/**
 * The resource type name for this resource class.
 */
RosCustomResource.ROS_RESOURCE_TYPE_NAME = "ALIYUN::ROS::CustomResource";
/**
 * Determine whether the given properties match those of a `HttpConfigProperty`
 *
 * @param properties - the TypeScript properties of a `HttpConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosCustomResource_HttpConfigPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    if (properties.signKey && (Array.isArray(properties.signKey) || (typeof properties.signKey) === 'string')) {
        errors.collect(ros.propertyValidator('signKey', ros.validateLength)({
            data: properties.signKey.length,
            min: 1,
            max: 128,
        }));
    }
    errors.collect(ros.propertyValidator('signKey', ros.validateString)(properties.signKey));
    if (properties.contentType && (typeof properties.contentType) !== 'object') {
        errors.collect(ros.propertyValidator('contentType', ros.validateAllowedValues)({
            data: properties.contentType,
            allowedValues: ["application/json", "application/x-www-form-urlencoded"],
        }));
    }
    errors.collect(ros.propertyValidator('contentType', ros.validateString)(properties.contentType));
    errors.collect(ros.propertyValidator('headers', ros.hashValidator(ros.validateAny))(properties.headers));
    return errors.wrap('supplied properties not correct for "HttpConfigProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ROS::CustomResource.HttpConfig` resource
 *
 * @param properties - the TypeScript properties of a `HttpConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ROS::CustomResource.HttpConfig` resource.
 */
// @ts-ignore TS6133
function rosCustomResourceHttpConfigPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosCustomResource_HttpConfigPropertyValidator(properties).assertSuccess();
    return {
        SignKey: ros.stringToRosTemplate(properties.signKey),
        ContentType: ros.stringToRosTemplate(properties.contentType),
        Headers: ros.hashMapper(ros.objectToRosTemplate)(properties.headers),
    };
}
/**
 * Determine whether the given properties match those of a `RosSleepProps`
 *
 * @param properties - the TypeScript properties of a `RosSleepProps`
 *
 * @returns the result of the validation.
 */
function RosSleepPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    if (properties.deleteDuration && (typeof properties.deleteDuration) !== 'object') {
        errors.collect(ros.propertyValidator('deleteDuration', ros.validateRange)({
            data: properties.deleteDuration,
            min: 0,
            max: 1800,
        }));
    }
    errors.collect(ros.propertyValidator('deleteDuration', ros.validateNumber)(properties.deleteDuration));
    if (properties.updateRollbackDuration && (typeof properties.updateRollbackDuration) !== 'object') {
        errors.collect(ros.propertyValidator('updateRollbackDuration', ros.validateRange)({
            data: properties.updateRollbackDuration,
            min: 0,
            max: 1800,
        }));
    }
    errors.collect(ros.propertyValidator('updateRollbackDuration', ros.validateNumber)(properties.updateRollbackDuration));
    if (properties.updateDuration && (typeof properties.updateDuration) !== 'object') {
        errors.collect(ros.propertyValidator('updateDuration', ros.validateRange)({
            data: properties.updateDuration,
            min: 0,
            max: 1800,
        }));
    }
    errors.collect(ros.propertyValidator('updateDuration', ros.validateNumber)(properties.updateDuration));
    if (properties.createDuration && (typeof properties.createDuration) !== 'object') {
        errors.collect(ros.propertyValidator('createDuration', ros.validateRange)({
            data: properties.createDuration,
            min: 0,
            max: 1800,
        }));
    }
    errors.collect(ros.propertyValidator('createDuration', ros.validateNumber)(properties.createDuration));
    errors.collect(ros.propertyValidator('triggers', ros.hashValidator(ros.validateAny))(properties.triggers));
    return errors.wrap('supplied properties not correct for "RosSleepProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ROS::Sleep` resource
 *
 * @param properties - the TypeScript properties of a `RosSleepProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ROS::Sleep` resource.
 */
// @ts-ignore TS6133
function rosSleepPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosSleepPropsValidator(properties).assertSuccess();
    }
    return {
        CreateDuration: ros.numberToRosTemplate(properties.createDuration),
        DeleteDuration: ros.numberToRosTemplate(properties.deleteDuration),
        Triggers: ros.hashMapper(ros.objectToRosTemplate)(properties.triggers),
        UpdateDuration: ros.numberToRosTemplate(properties.updateDuration),
        UpdateRollbackDuration: ros.numberToRosTemplate(properties.updateRollbackDuration),
    };
}
/**
 * A ROS template type:  `ALIYUN::ROS::Sleep`
 */
class RosSleep extends ros.RosResource {
    /**
     * Create a new `ALIYUN::ROS::Sleep`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosSleep.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.createDuration = props.createDuration;
        this.deleteDuration = props.deleteDuration;
        this.triggers = props.triggers;
        this.updateDuration = props.updateDuration;
        this.updateRollbackDuration = props.updateRollbackDuration;
    }
    get rosProperties() {
        return {
            createDuration: this.createDuration,
            deleteDuration: this.deleteDuration,
            triggers: this.triggers,
            updateDuration: this.updateDuration,
            updateRollbackDuration: this.updateRollbackDuration,
        };
    }
    renderProperties(props) {
        return rosSleepPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosSleep = RosSleep;
/**
 * The resource type name for this resource class.
 */
RosSleep.ROS_RESOURCE_TYPE_NAME = "ALIYUN::ROS::Sleep";
/**
 * Determine whether the given properties match those of a `RosStackProps`
 *
 * @param properties - the TypeScript properties of a `RosStackProps`
 *
 * @returns the result of the validation.
 */
function RosStackPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    if (properties.templateUrl && (Array.isArray(properties.templateUrl) || (typeof properties.templateUrl) === 'string')) {
        errors.collect(ros.propertyValidator('templateUrl', ros.validateLength)({
            data: properties.templateUrl.length,
            min: undefined,
            max: 1024,
        }));
    }
    errors.collect(ros.propertyValidator('templateUrl', ros.validateString)(properties.templateUrl));
    errors.collect(ros.propertyValidator('parameters', ros.hashValidator(ros.validateAny))(properties.parameters));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('timeoutMins', ros.validateNumber)(properties.timeoutMins));
    if (properties.templateVersion && (typeof properties.templateVersion) !== 'object') {
        errors.collect(ros.propertyValidator('templateVersion', ros.validateAllowedPattern)({
            data: properties.templateVersion,
            reg: /^v(([1-9])|([1-9][0-9])|([1-9][0-9][0-9]))$/
        }));
    }
    errors.collect(ros.propertyValidator('templateVersion', ros.validateString)(properties.templateVersion));
    errors.collect(ros.propertyValidator('templateBody', ros.hashValidator(ros.validateAny))(properties.templateBody));
    if (properties.templateId && (typeof properties.templateId) !== 'object') {
        errors.collect(ros.propertyValidator('templateId', ros.validateAllowedPattern)({
            data: properties.templateId,
            reg: /^([0-9a-f]{8}[-][0-9a-f]{4}[-][0-9a-f]{4}[-][0-9a-f]{4}[-][0-9a-f]{12})|(acs[:]ros[:][*][:]\d+[:]template\/[0-9a-f]{8}[-][0-9a-f]{4}[-][0-9a-f]{4}[-][0-9a-f]{4}[-][0-9a-f]{12})|(acs[:]ros[:]template[/][-_a-zA-Z0-9]+[/][-_a-zA-Z0-9]+)$/
        }));
    }
    errors.collect(ros.propertyValidator('templateId', ros.validateString)(properties.templateId));
    return errors.wrap('supplied properties not correct for "RosStackProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ROS::Stack` resource
 *
 * @param properties - the TypeScript properties of a `RosStackProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ROS::Stack` resource.
 */
// @ts-ignore TS6133
function rosStackPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosStackPropsValidator(properties).assertSuccess();
    }
    return {
        Parameters: ros.hashMapper(ros.objectToRosTemplate)(properties.parameters),
        ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
        TemplateBody: ros.hashMapper(ros.objectToRosTemplate)(properties.templateBody),
        TemplateId: ros.stringToRosTemplate(properties.templateId),
        TemplateURL: ros.stringToRosTemplate(properties.templateUrl),
        TemplateVersion: ros.stringToRosTemplate(properties.templateVersion),
        TimeoutMins: ros.numberToRosTemplate(properties.timeoutMins),
    };
}
/**
 * A ROS template type:  `ALIYUN::ROS::Stack`
 */
class RosStack extends ros.RosResource {
    /**
     * Create a new `ALIYUN::ROS::Stack`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosStack.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.parameters = props.parameters;
        this.resourceGroupId = props.resourceGroupId;
        this.templateBody = props.templateBody;
        this.templateId = props.templateId;
        this.templateUrl = props.templateUrl;
        this.templateVersion = props.templateVersion;
        this.timeoutMins = props.timeoutMins;
    }
    get rosProperties() {
        return {
            parameters: this.parameters,
            resourceGroupId: this.resourceGroupId,
            templateBody: this.templateBody,
            templateId: this.templateId,
            templateUrl: this.templateUrl,
            templateVersion: this.templateVersion,
            timeoutMins: this.timeoutMins,
        };
    }
    renderProperties(props) {
        return rosStackPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosStack = RosStack;
/**
 * The resource type name for this resource class.
 */
RosStack.ROS_RESOURCE_TYPE_NAME = "ALIYUN::ROS::Stack";
/**
 * Determine whether the given properties match those of a `RosWaitConditionProps`
 *
 * @param properties - the TypeScript properties of a `RosWaitConditionProps`
 *
 * @returns the result of the validation.
 */
function RosWaitConditionPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    if (properties.showProgressEvent && (typeof properties.showProgressEvent) !== 'object') {
        errors.collect(ros.propertyValidator('showProgressEvent', ros.validateAllowedValues)({
            data: properties.showProgressEvent,
            allowedValues: ["EnabledIfCreateStack", "Disabled"],
        }));
    }
    errors.collect(ros.propertyValidator('showProgressEvent', ros.validateString)(properties.showProgressEvent));
    errors.collect(ros.propertyValidator('timeout', ros.requiredValidator)(properties.timeout));
    if (properties.timeout && (typeof properties.timeout) !== 'object') {
        errors.collect(ros.propertyValidator('timeout', ros.validateRange)({
            data: properties.timeout,
            min: 1,
            max: 43200,
        }));
    }
    errors.collect(ros.propertyValidator('timeout', ros.validateNumber)(properties.timeout));
    errors.collect(ros.propertyValidator('count', ros.validateNumber)(properties.count));
    errors.collect(ros.propertyValidator('handle', ros.requiredValidator)(properties.handle));
    errors.collect(ros.propertyValidator('handle', ros.validateString)(properties.handle));
    return errors.wrap('supplied properties not correct for "RosWaitConditionProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ROS::WaitCondition` resource
 *
 * @param properties - the TypeScript properties of a `RosWaitConditionProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ROS::WaitCondition` resource.
 */
// @ts-ignore TS6133
function rosWaitConditionPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosWaitConditionPropsValidator(properties).assertSuccess();
    }
    return {
        Handle: ros.stringToRosTemplate(properties.handle),
        Timeout: ros.numberToRosTemplate(properties.timeout),
        Count: ros.numberToRosTemplate(properties.count),
        ShowProgressEvent: ros.stringToRosTemplate(properties.showProgressEvent),
    };
}
/**
 * A ROS template type:  `ALIYUN::ROS::WaitCondition`
 */
class RosWaitCondition extends ros.RosResource {
    /**
     * Create a new `ALIYUN::ROS::WaitCondition`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosWaitCondition.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrData = this.getAtt('Data');
        this.attrErrorData = this.getAtt('ErrorData');
        this.attrJoinedErrorData = this.getAtt('JoinedErrorData');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.handle = props.handle;
        this.timeout = props.timeout;
        this.count = props.count;
        this.showProgressEvent = props.showProgressEvent;
    }
    get rosProperties() {
        return {
            handle: this.handle,
            timeout: this.timeout,
            count: this.count,
            showProgressEvent: this.showProgressEvent,
        };
    }
    renderProperties(props) {
        return rosWaitConditionPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosWaitCondition = RosWaitCondition;
/**
 * The resource type name for this resource class.
 */
RosWaitCondition.ROS_RESOURCE_TYPE_NAME = "ALIYUN::ROS::WaitCondition";
/**
 * Determine whether the given properties match those of a `RosWaitConditionHandleProps`
 *
 * @param properties - the TypeScript properties of a `RosWaitConditionHandleProps`
 *
 * @returns the result of the validation.
 */
function RosWaitConditionHandlePropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    if (properties.mode && (typeof properties.mode) !== 'object') {
        errors.collect(ros.propertyValidator('mode', ros.validateAllowedValues)({
            data: properties.mode,
            allowedValues: ["Increment", "Full"],
        }));
    }
    errors.collect(ros.propertyValidator('mode', ros.validateString)(properties.mode));
    errors.collect(ros.propertyValidator('count', ros.validateNumber)(properties.count));
    return errors.wrap('supplied properties not correct for "RosWaitConditionHandleProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ROS::WaitConditionHandle` resource
 *
 * @param properties - the TypeScript properties of a `RosWaitConditionHandleProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ROS::WaitConditionHandle` resource.
 */
// @ts-ignore TS6133
function rosWaitConditionHandlePropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosWaitConditionHandlePropsValidator(properties).assertSuccess();
    }
    return {
        Count: ros.numberToRosTemplate(properties.count),
        Mode: ros.stringToRosTemplate(properties.mode),
    };
}
/**
 * A ROS template type:  `ALIYUN::ROS::WaitConditionHandle`
 */
class RosWaitConditionHandle extends ros.RosResource {
    /**
     * Create a new `ALIYUN::ROS::WaitConditionHandle`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosWaitConditionHandle.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCurlCli = this.getAtt('CurlCli');
        this.attrHeaders = this.getAtt('Headers');
        this.attrPowerShellCurlCli = this.getAtt('PowerShellCurlCli');
        this.attrUrl = this.getAtt('URL');
        this.attrWindowsCurlCli = this.getAtt('WindowsCurlCli');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.count = props.count;
        this.mode = props.mode;
    }
    get rosProperties() {
        return {
            count: this.count,
            mode: this.mode,
        };
    }
    renderProperties(props) {
        return rosWaitConditionHandlePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosWaitConditionHandle = RosWaitConditionHandle;
/**
 * The resource type name for this resource class.
 */
RosWaitConditionHandle.ROS_RESOURCE_TYPE_NAME = "ALIYUN::ROS::WaitConditionHandle";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9zLmdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJvcy5nZW5lcmF0ZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHlEQUF5RDs7O0FBRXpELDhDQUE4QztBQWdEOUM7Ozs7OztHQU1HO0FBQ0gsU0FBUyxrQ0FBa0MsQ0FBQyxVQUFlO0lBQ3ZELElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQUUsT0FBTyxHQUFHLENBQUMsa0JBQWtCLENBQUM7S0FBRTtJQUNuRSxNQUFNLE1BQU0sR0FBRyxJQUFJLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUNwRyxJQUFHLFVBQVUsQ0FBQyxXQUFXLElBQUksQ0FBQyxPQUFPLFVBQVUsQ0FBQyxXQUFXLENBQUMsS0FBSyxRQUFRLEVBQUU7UUFDdkUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1lBQzdFLElBQUksRUFBRSxVQUFVLENBQUMsV0FBVztZQUM1QixhQUFhLEVBQUUsQ0FBQyxLQUFLLEVBQUMsTUFBTSxFQUFDLFlBQVksRUFBQyxjQUFjLEVBQUMsS0FBSyxFQUFDLFFBQVEsRUFBQyxXQUFXLEVBQUMsS0FBSyxFQUFDLElBQUksRUFBQyxLQUFLLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxTQUFTLEVBQUMsTUFBTSxFQUFDLEtBQUssRUFBQyxVQUFVLEVBQUMsS0FBSyxFQUFDLFlBQVksRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLGVBQWUsRUFBQyxNQUFNLEVBQUMs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S0FBSyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztJQUMzQixDQUFDO0lBR0QsSUFBYyxhQUFhO1FBQ3ZCLE9BQU87WUFDSCxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1NBQ2xCLENBQUM7SUFDTixDQUFDO0lBQ1MsZ0JBQWdCLENBQUMsS0FBMkI7UUFDbEQsT0FBTyx3Q0FBd0MsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLENBQUM7SUFDbEcsQ0FBQzs7QUF6Rkwsd0RBMEZDO0FBekZHOztHQUVHO0FBQ29CLDZDQUFzQixHQUFHLGtDQUFrQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5cbmltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OlJPUzo6QXV0b0VuYWJsZVNlcnZpY2VgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zQXV0b0VuYWJsZVNlcnZpY2VQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc2VydmljZU5hbWU6IFdoaWNoIHNlcnZpY2UgdG8gZW5hYmxlLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogQUhBUzogQXBwbGljYXRpb24gSGlnaCBBdmFpbGFiaWxpdHkgU2VydmljZVxuICAgICAqIEFSTVM6IFJlYWx0aW1lIE1vbml0b3JpbmcgU2VydmljZVxuICAgICAqIEFwaUdhdGV3YXk6IEFQSSBHYXRld2F5XG4gICAgICogQmF0Y2hDb21wdXRlOiBCYXRjaCBDb21wdXRlXG4gICAgICogQnJhaW5JbmR1c3RyaWFsOiBCcmFpbiBJbmR1c3RyaWFsXG4gICAgICogQ2xvdWRTdG9yYWdlR2F0ZXdheTogQ2xvdWQgU3RvcmFnZSBHYXRld2F5XG4gICAgICogQ01TOiBDbG91ZCBNb25pdG9yIFNlcnZpY2VcbiAgICAgKiBDUjogQ29udGFpbmVyIFJlZ2lzdHJ5XG4gICAgICogQ1M6IENvbnRhaW5lciBTZXJ2aWNlXG4gICAgICogRGF0YUh1YjogRGF0YSBIdWJcbiAgICAgKiBEYXRhV29ya3M6IERhdGFXb3Jrc1xuICAgICAqIERDRE46IER5bmFtaWMgUm91dGUgZm9yIENETlxuICAgICAqIEVEQVM6IEVudGVycHJpc2UgRGlzdHJpYnV0ZWQgQXBwbGljYXRpb24gU2VydmljZVxuICAgICAqIEVNQVM6IEVudGVycHJpc2UgTW9iaWxlIEFwcGxpY2F0aW9uIFN0dWRpb1xuICAgICAqIEZDOiBGdW5jdGlvbiBDb21wdXRlXG4gICAgICogRk5GOiBTZXJ2ZXJsZXNzIFdvcmtmbG93XG4gICAgICogTWF4Q29tcHV0ZTogTWF4Q29tcHV0ZVxuICAgICAqIE5BUzogTmV0d29yayBBdHRhY2hlZCBTdG9yYWdlXG4gICAgICogTU5TOiBNZXNzYWdlIFNlcnZpY2UgKE1OUylcbiAgICAgKiBIQlI6IEh5YnJpZCBCYWNrdXAgUmVjb3ZlcnlcbiAgICAgKiBJTU06IEludGVsbGlnZW50IE1lZGlhIE1hbmFnZW1lbnRcbiAgICAgKiBJT1Q6IElvVCBQbGF0Zm9ybVxuICAgICAqIEtNUzogS2V5IE1hbmFnZW1lbnQgU2VydmljZVxuICAgICAqIE5MUDogTmF0dXJhbCBMYW5ndWFnZSBQcm9jZXNzaW5nXG4gICAgICogT1NTOiBPYmplY3QgU3RvcmFnZSBTZXJ2aWNlXG4gICAgICogT1RTOiBUYWJsZSBTdG9yZVxuICAgICAqIFByaXZhdGVMaW5rOiBQcml2YXRlIExpbmtcbiAgICAgKiBQcml2YXRlWm9uZTogUHJpdmF0ZSBab25lXG4gICAgICogUm9ja2V0TVE6IFJvY2tldE1RXG4gICAgICogU0FFOiBTZXJ2ZXJsZXNzIEFwcCBFbmdpbmVcbiAgICAgKiBTTFM6IExvZyBTZXJ2aWNlXG4gICAgICogVHJhZmZpY01pcnJvcjogVlBDIFRyYWZmaWMgTWlycm9yaW5nXG4gICAgICogVlM6IFZpZGVvIFN1cnZlaWxsYW5jZVxuICAgICAqIFh0cmFjZTogVHJhY2luZyBBbmxheXNpc1xuICAgICAqXG4gICAgICovXG4gICAgcmVhZG9ubHkgc2VydmljZU5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NBdXRvRW5hYmxlU2VydmljZVByb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NBdXRvRW5hYmxlU2VydmljZVByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0F1dG9FbmFibGVTZXJ2aWNlUHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzZXJ2aWNlTmFtZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5zZXJ2aWNlTmFtZSkpO1xuICAgIGlmKHByb3BlcnRpZXMuc2VydmljZU5hbWUgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLnNlcnZpY2VOYW1lKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzZXJ2aWNlTmFtZScsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnNlcnZpY2VOYW1lLFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFtcIklPVFwiLFwiRU1BU1wiLFwiTWF4Q29tcHV0ZVwiLFwiQmF0Y2hDb21wdXRlXCIsXCJJTU1cIixcIlh0cmFjZVwiLFwiRGF0YVdvcmtzXCIsXCJGTkZcIixcIkZDXCIsXCJLTVNcIixcIkNTXCIsXCJDUlwiLFwiRGF0YUh1YlwiLFwiRURBU1wiLFwiQ01TXCIsXCJSb2NrZXRNUVwiLFwiSEJSXCIsXCJBcGlHYXRld2F5XCIsXCJOTFBcIixcIlNMU1wiLFwiTkFTXCIsXCJPU1NcIixcIk1OU1wiLFwiVHJhZmZpY01pcnJvclwiLFwiQVJNU1wiLFwiU0FFXCIsXCJDbG91ZFN0b3JhZ2VHYXRld2F5XCIsXCJQcml2YXRlWm9uZVwiLFwiRENETlwiLFwiVlNcIixcIkFIQVNcIixcIkJyYWluSW5kdXN0cmlhbFwiLFwiT1RTXCIsXCJQcml2YXRlTGlua1wiXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NlcnZpY2VOYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnNlcnZpY2VOYW1lKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc0F1dG9FbmFibGVTZXJ2aWNlUHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlJPUzo6QXV0b0VuYWJsZVNlcnZpY2VgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0F1dG9FbmFibGVTZXJ2aWNlUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlJPUzo6QXV0b0VuYWJsZVNlcnZpY2VgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zQXV0b0VuYWJsZVNlcnZpY2VQcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc0F1dG9FbmFibGVTZXJ2aWNlUHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgU2VydmljZU5hbWU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuc2VydmljZU5hbWUpLFxuICAgIH07XG59XG5cbi8qKlxuICogQSBST1MgdGVtcGxhdGUgdHlwZTogIGBBTElZVU46OlJPUzo6QXV0b0VuYWJsZVNlcnZpY2VgXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NBdXRvRW5hYmxlU2VydmljZSBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6Uk9TOjpBdXRvRW5hYmxlU2VydmljZVwiO1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzZXJ2aWNlTmFtZTogV2hpY2ggc2VydmljZSB0byBlbmFibGUuIFZhbGlkIHZhbHVlczpcbiAgICAgKiBBSEFTOiBBcHBsaWNhdGlvbiBIaWdoIEF2YWlsYWJpbGl0eSBTZXJ2aWNlXG4gICAgICogQVJNUzogUmVhbHRpbWUgTW9uaXRvcmluZyBTZXJ2aWNlXG4gICAgICogQXBpR2F0ZXdheTogQVBJIEdhdGV3YXlcbiAgICAgKiBCYXRjaENvbXB1dGU6IEJhdGNoIENvbXB1dGVcbiAgICAgKiBCcmFpbkluZHVzdHJpYWw6IEJyYWluIEluZHVzdHJpYWxcbiAgICAgKiBDbG91ZFN0b3JhZ2VHYXRld2F5OiBDbG91ZCBTdG9yYWdlIEdhdGV3YXlcbiAgICAgKiBDTVM6IENsb3VkIE1vbml0b3IgU2VydmljZVxuICAgICAqIENSOiBDb250YWluZXIgUmVnaXN0cnlcbiAgICAgKiBDUzogQ29udGFpbmVyIFNlcnZpY2VcbiAgICAgKiBEYXRhSHViOiBEYXRhIEh1YlxuICAgICAqIERhdGFXb3JrczogRGF0YVdvcmtzXG4gICAgICogRENETjogRHluYW1pYyBSb3V0ZSBmb3IgQ0ROXG4gICAgICogRURBUzogRW50ZXJwcmlzZSBEaXN0cmlidXRlZCBBcHBsaWNhdGlvbiBTZXJ2aWNlXG4gICAgICogRU1BUzogRW50ZXJwcmlzZSBNb2JpbGUgQXBwbGljYXRpb24gU3R1ZGlvXG4gICAgICogRkM6IEZ1bmN0aW9uIENvbXB1dGVcbiAgICAgKiBGTkY6IFNlcnZlcmxlc3MgV29ya2Zsb3dcbiAgICAgKiBNYXhDb21wdXRlOiBNYXhDb21wdXRlXG4gICAgICogTkFTOiBOZXR3b3JrIEF0dGFjaGVkIFN0b3JhZ2VcbiAgICAgKiBNTlM6IE1lc3NhZ2UgU2VydmljZSAoTU5TKVxuICAgICAqIEhCUjogSHlicmlkIEJhY2t1cCBSZWNvdmVyeVxuICAgICAqIElNTTogSW50ZWxsaWdlbnQgTWVkaWEgTWFuYWdlbWVudFxuICAgICAqIElPVDogSW9UIFBsYXRmb3JtXG4gICAgICogS01TOiBLZXkgTWFuYWdlbWVudCBTZXJ2aWNlXG4gICAgICogTkxQOiBOYXR1cmFsIExhbmd1YWdlIFByb2Nlc3NpbmdcbiAgICAgKiBPU1M6IE9iamVjdCBTdG9yYWdlIFNlcnZpY2VcbiAgICAgKiBPVFM6IFRhYmxlIFN0b3JlXG4gICAgICogUHJpdmF0ZUxpbms6IFByaXZhdGUgTGlua1xuICAgICAqIFByaXZhdGVab25lOiBQcml2YXRlIFpvbmVcbiAgICAgKiBSb2NrZXRNUTogUm9ja2V0TVFcbiAgICAgKiBTQUU6IFNlcnZlcmxlc3MgQXBwIEVuZ2luZVxuICAgICAqIFNMUzogTG9nIFNlcnZpY2VcbiAgICAgKiBUcmFmZmljTWlycm9yOiBWUEMgVHJhZmZpYyBNaXJyb3JpbmdcbiAgICAgKiBWUzogVmlkZW8gU3VydmVpbGxhbmNlXG4gICAgICogWHRyYWNlOiBUcmFjaW5nIEFubGF5c2lzXG4gICAgICpcbiAgICAgKi9cbiAgICBwdWJsaWMgc2VydmljZU5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpST1M6OkF1dG9FbmFibGVTZXJ2aWNlYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NBdXRvRW5hYmxlU2VydmljZVByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zQXV0b0VuYWJsZVNlcnZpY2UuUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLnNlcnZpY2VOYW1lID0gcHJvcHMuc2VydmljZU5hbWU7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc2VydmljZU5hbWU6IHRoaXMuc2VydmljZU5hbWUsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc0F1dG9FbmFibGVTZXJ2aWNlUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpST1M6OkN1c3RvbVJlc291cmNlYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc0N1c3RvbVJlc291cmNlUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHNlcnZpY2VUb2tlbjogVGhlIHNlcnZpY2UgdG9rZW4gdGhhdCB3YXMgZ2l2ZW4gdG8gdGhlIHRlbXBsYXRlIGRldmVsb3BlciBieSB0aGUgc2VydmljZSBwcm92aWRlciB0byBhY2Nlc3MgdGhlIHNlcnZpY2UuXG4gICAgICogQWxsb3dlZCB2YWx1ZXM6XG4gICAgICogLSBGdW5jdGlvbiBDb21wdXRlOiBhY3M6ZmM6PHJlZ2lvbl9pZD46PGFjY291bnRfaWQ+OnNlcnZpY2VzLzxzZXJ2aWNlX25hbWU+L2Z1bmN0aW9ucy88ZnVuY3Rpb25fbmFtZT5cbiAgICAgKiAtIE1OUyBRdWV1ZTogYWNzOm1uczo8cmVnaW9uX2lkPjo8YWNjb3VudF9pZD46cXVldWVzLzxxdWV1ZV9uYW1lPiBvciBhY3M6bW5zOjxyZWdpb25faWQ+OjxhY2NvdW50X2lkPjovcXVldWVzLzxxdWV1ZV9uYW1lPlxuICAgICAqIC0gTU5TIFRvcGljOiBhY3M6bW5zOjxyZWdpb25faWQ+OjxhY2NvdW50X2lkPjp0b3BpY3MvPHRvcGljX25hbWU+IG9yIGFjczptbnM6PHJlZ2lvbl9pZD46PGFjY291bnRfaWQ+Oi90b3BpY3MvPHRvcGljX25hbWU+XG4gICAgICogLSBIVFRQJkhUVFBTOiB3ZWJbb3B0aW9uc106PHVybD5cbiAgICAgKiAgIFR3byBvcHRpb25zIGFyZSBzdXBwb3J0ZWQ6XG4gICAgICogICAtIHN5bmM6IHN5bmMgSFRUUCZIVFRQUyByZXF1ZXN0LlxuICAgICAqICAgLSBpZGVtcG90ZW50OiBpbmRpY2F0ZXMgdGhhdCB0aGUgQ3JlYXRlIHJlcXVlc3QgaXMgaWRlbXBvdGVudC4gVXBkYXRlIGFuZCBEZWxldGUgcmVxdWVzdHMgc2hvdWxkIGJlIGFsd2F5cyBpZGVtcG90ZW50LlxuICAgICAqIEV4YW1wbGVzOlxuICAgICAqICAgLSBhY3M6ZmM6Y24taGFuZ3pob3U6MTIzNDU2Nzg5OnNlcnZpY2VzL3Rlc3Qtc2VydmljZS9mdW5jdGlvbnMvdGVzdC1mdW5jdGlvblxuICAgICAqICAgLSBhY3M6bW5zOmNuLWhhbmd6aG91OjEyMzQ1Njc4OTpxdWV1ZXMvdGVzdC1xdWV1ZVxuICAgICAqICAgLSBhY3M6bW5zOmNuLWhhbmd6aG91OjEyMzQ1Njc4OTovcXVldWVzL3Rlc3QtcXVldWVcbiAgICAgKiAgIC0gYWNzOm1uczpjbi1oYW5nemhvdToxMjM0NTY3ODk6dG9waWNzL3Rlc3QtdG9waWNcbiAgICAgKiAgIC0gYWNzOm1uczpjbi1oYW5nemhvdToxMjM0NTY3ODk6L3RvcGljcy90ZXN0LXRvcGljXG4gICAgICogICAtIHdlYjpodHRwczovL2FiYy5jb21cbiAgICAgKiAgIC0gd2ViW3N5bmNdOmh0dHA6Ly9hYmMuY29tXG4gICAgICogICAtIHdlYltzeW5jLGlkZW1wb3RlbnRdOmh0dHBzOi8vYWJjLmNvbVxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNlcnZpY2VUb2tlbjogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHRpbWVvdXQ6IFRpbWVvdXQgc2Vjb25kcyBiZWZvcmUgc2VydmljZSBwcm92aWRlciByZXNwb25zZXMuXG4gICAgICogSXQgdGFrZXMgZWZmZWN0cyBvbmx5IGlmIHRoZSB0eXBlIG9mIFNlcnZpY2VUb2tlbiBpcyBGdW5jdGlvbiBDb21wdXRlLCBNTlMgUXVldWUsIE1OUyBUb3BpYyBvciBhc3luYyBIVFRQJkhUVFBTIHJlcXVlc3QuXG4gICAgICogVGltZW91dCBzZWNvbmRzIGFyZSBhbHdheXMgMTAgZm9yIHN5bmMgSFRUUCZIVFRQUyByZXF1ZXN0LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRpbWVvdXQ6IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBodHRwQ29uZmlnOiBDb25maWcgZm9yIEhUVFAmSFRUUFMgc2VydmljZSBwcm92aWRlci5cbiAgICAgKi9cbiAgICByZWFkb25seSBodHRwQ29uZmlnPzogUm9zQ3VzdG9tUmVzb3VyY2UuSHR0cENvbmZpZ1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHBhcmFtZXRlcnM6IFBhcmFtZXRlcnMgdG8gYmUgcGFzc2VkIHRvIHNlcnZpY2UgcHJvdmlkZXIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcGFyYW1ldGVycz86IHsgW2tleTogc3RyaW5nXTogKGFueSB8IHJvcy5JUmVzb2x2YWJsZSkgfSB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NDdXN0b21SZXNvdXJjZVByb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NDdXN0b21SZXNvdXJjZVByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0N1c3RvbVJlc291cmNlUHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzZXJ2aWNlVG9rZW4nLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuc2VydmljZVRva2VuKSk7XG4gICAgaWYocHJvcGVydGllcy5zZXJ2aWNlVG9rZW4gJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy5zZXJ2aWNlVG9rZW4pIHx8ICh0eXBlb2YgcHJvcGVydGllcy5zZXJ2aWNlVG9rZW4pID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzZXJ2aWNlVG9rZW4nLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuc2VydmljZVRva2VuLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgbWF4OiA1MTIsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NlcnZpY2VUb2tlbicsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zZXJ2aWNlVG9rZW4pKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3BhcmFtZXRlcnMnLCByb3MuaGFzaFZhbGlkYXRvcihyb3MudmFsaWRhdGVBbnkpKShwcm9wZXJ0aWVzLnBhcmFtZXRlcnMpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RpbWVvdXQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMudGltZW91dCkpO1xuICAgIGlmKHByb3BlcnRpZXMudGltZW91dCAmJiAodHlwZW9mIHByb3BlcnRpZXMudGltZW91dCkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGltZW91dCcsIHJvcy52YWxpZGF0ZVJhbmdlKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnRpbWVvdXQsXG4gICAgICAgICAgICBtaW46IDEsXG4gICAgICAgICAgICBtYXg6IDQzMjAwLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0aW1lb3V0Jywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLnRpbWVvdXQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2h0dHBDb25maWcnLCBSb3NDdXN0b21SZXNvdXJjZV9IdHRwQ29uZmlnUHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMuaHR0cENvbmZpZykpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NDdXN0b21SZXNvdXJjZVByb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpST1M6OkN1c3RvbVJlc291cmNlYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NDdXN0b21SZXNvdXJjZVByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpST1M6OkN1c3RvbVJlc291cmNlYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0N1c3RvbVJlc291cmNlUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NDdXN0b21SZXNvdXJjZVByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIFNlcnZpY2VUb2tlbjogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zZXJ2aWNlVG9rZW4pLFxuICAgICAgVGltZW91dDogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy50aW1lb3V0KSxcbiAgICAgIEh0dHBDb25maWc6IHJvc0N1c3RvbVJlc291cmNlSHR0cENvbmZpZ1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmh0dHBDb25maWcpLFxuICAgICAgUGFyYW1ldGVyczogcm9zLmhhc2hNYXBwZXIocm9zLm9iamVjdFRvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMucGFyYW1ldGVycyksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBBIFJPUyB0ZW1wbGF0ZSB0eXBlOiAgYEFMSVlVTjo6Uk9TOjpDdXN0b21SZXNvdXJjZWBcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc0N1c3RvbVJlc291cmNlIGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiQUxJWVVOOjpST1M6OkN1c3RvbVJlc291cmNlXCI7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgT3V0cHV0czogT3V0cHV0IGRhdGEgcmVjZWl2ZWQgZnJvbSBzZXJ2aWNlIHByb3ZpZGVyLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyT3V0cHV0czogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc2VydmljZVRva2VuOiBUaGUgc2VydmljZSB0b2tlbiB0aGF0IHdhcyBnaXZlbiB0byB0aGUgdGVtcGxhdGUgZGV2ZWxvcGVyIGJ5IHRoZSBzZXJ2aWNlIHByb3ZpZGVyIHRvIGFjY2VzcyB0aGUgc2VydmljZS5cbiAgICAgKiBBbGxvd2VkIHZhbHVlczpcbiAgICAgKiAtIEZ1bmN0aW9uIENvbXB1dGU6IGFjczpmYzo8cmVnaW9uX2lkPjo8YWNjb3VudF9pZD46c2VydmljZXMvPHNlcnZpY2VfbmFtZT4vZnVuY3Rpb25zLzxmdW5jdGlvbl9uYW1lPlxuICAgICAqIC0gTU5TIFF1ZXVlOiBhY3M6bW5zOjxyZWdpb25faWQ+OjxhY2NvdW50X2lkPjpxdWV1ZXMvPHF1ZXVlX25hbWU+IG9yIGFjczptbnM6PHJlZ2lvbl9pZD46PGFjY291bnRfaWQ+Oi9xdWV1ZXMvPHF1ZXVlX25hbWU+XG4gICAgICogLSBNTlMgVG9waWM6IGFjczptbnM6PHJlZ2lvbl9pZD46PGFjY291bnRfaWQ+OnRvcGljcy88dG9waWNfbmFtZT4gb3IgYWNzOm1uczo8cmVnaW9uX2lkPjo8YWNjb3VudF9pZD46L3RvcGljcy88dG9waWNfbmFtZT5cbiAgICAgKiAtIEhUVFAmSFRUUFM6IHdlYltvcHRpb25zXTo8dXJsPlxuICAgICAqICAgVHdvIG9wdGlvbnMgYXJlIHN1cHBvcnRlZDpcbiAgICAgKiAgIC0gc3luYzogc3luYyBIVFRQJkhUVFBTIHJlcXVlc3QuXG4gICAgICogICAtIGlkZW1wb3RlbnQ6IGluZGljYXRlcyB0aGF0IHRoZSBDcmVhdGUgcmVxdWVzdCBpcyBpZGVtcG90ZW50LiBVcGRhdGUgYW5kIERlbGV0ZSByZXF1ZXN0cyBzaG91bGQgYmUgYWx3YXlzIGlkZW1wb3RlbnQuXG4gICAgICogRXhhbXBsZXM6XG4gICAgICogICAtIGFjczpmYzpjbi1oYW5nemhvdToxMjM0NTY3ODk6c2VydmljZXMvdGVzdC1zZXJ2aWNlL2Z1bmN0aW9ucy90ZXN0LWZ1bmN0aW9uXG4gICAgICogICAtIGFjczptbnM6Y24taGFuZ3pob3U6MTIzNDU2Nzg5OnF1ZXVlcy90ZXN0LXF1ZXVlXG4gICAgICogICAtIGFjczptbnM6Y24taGFuZ3pob3U6MTIzNDU2Nzg5Oi9xdWV1ZXMvdGVzdC1xdWV1ZVxuICAgICAqICAgLSBhY3M6bW5zOmNuLWhhbmd6aG91OjEyMzQ1Njc4OTp0b3BpY3MvdGVzdC10b3BpY1xuICAgICAqICAgLSBhY3M6bW5zOmNuLWhhbmd6aG91OjEyMzQ1Njc4OTovdG9waWNzL3Rlc3QtdG9waWNcbiAgICAgKiAgIC0gd2ViOmh0dHBzOi8vYWJjLmNvbVxuICAgICAqICAgLSB3ZWJbc3luY106aHR0cDovL2FiYy5jb21cbiAgICAgKiAgIC0gd2ViW3N5bmMsaWRlbXBvdGVudF06aHR0cHM6Ly9hYmMuY29tXG4gICAgICovXG4gICAgcHVibGljIHNlcnZpY2VUb2tlbjogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHRpbWVvdXQ6IFRpbWVvdXQgc2Vjb25kcyBiZWZvcmUgc2VydmljZSBwcm92aWRlciByZXNwb25zZXMuXG4gICAgICogSXQgdGFrZXMgZWZmZWN0cyBvbmx5IGlmIHRoZSB0eXBlIG9mIFNlcnZpY2VUb2tlbiBpcyBGdW5jdGlvbiBDb21wdXRlLCBNTlMgUXVldWUsIE1OUyBUb3BpYyBvciBhc3luYyBIVFRQJkhUVFBTIHJlcXVlc3QuXG4gICAgICogVGltZW91dCBzZWNvbmRzIGFyZSBhbHdheXMgMTAgZm9yIHN5bmMgSFRUUCZIVFRQUyByZXF1ZXN0LlxuICAgICAqL1xuICAgIHB1YmxpYyB0aW1lb3V0OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaHR0cENvbmZpZzogQ29uZmlnIGZvciBIVFRQJkhUVFBTIHNlcnZpY2UgcHJvdmlkZXIuXG4gICAgICovXG4gICAgcHVibGljIGh0dHBDb25maWc6IFJvc0N1c3RvbVJlc291cmNlLkh0dHBDb25maWdQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwYXJhbWV0ZXJzOiBQYXJhbWV0ZXJzIHRvIGJlIHBhc3NlZCB0byBzZXJ2aWNlIHByb3ZpZGVyLlxuICAgICAqL1xuICAgIHB1YmxpYyBwYXJhbWV0ZXJzOiB7IFtrZXk6IHN0cmluZ106IChhbnkgfCByb3MuSVJlc29sdmFibGUpIH0gfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6Uk9TOjpDdXN0b21SZXNvdXJjZWAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zQ3VzdG9tUmVzb3VyY2VQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc0N1c3RvbVJlc291cmNlLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJPdXRwdXRzID0gdGhpcy5nZXRBdHQoJ091dHB1dHMnKTtcblxuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMuc2VydmljZVRva2VuID0gcHJvcHMuc2VydmljZVRva2VuO1xuICAgICAgICB0aGlzLnRpbWVvdXQgPSBwcm9wcy50aW1lb3V0O1xuICAgICAgICB0aGlzLmh0dHBDb25maWcgPSBwcm9wcy5odHRwQ29uZmlnO1xuICAgICAgICB0aGlzLnBhcmFtZXRlcnMgPSBwcm9wcy5wYXJhbWV0ZXJzO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNlcnZpY2VUb2tlbjogdGhpcy5zZXJ2aWNlVG9rZW4sXG4gICAgICAgICAgICB0aW1lb3V0OiB0aGlzLnRpbWVvdXQsXG4gICAgICAgICAgICBodHRwQ29uZmlnOiB0aGlzLmh0dHBDb25maWcsXG4gICAgICAgICAgICBwYXJhbWV0ZXJzOiB0aGlzLnBhcmFtZXRlcnMsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc0N1c3RvbVJlc291cmNlUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zQ3VzdG9tUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIEh0dHBDb25maWdQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgc2lnbktleTogSWYgU2lnbktleSBpcyBzcGVjaWZpZWQsIFNpZ25hdHVyZSB3aWxsIGJlIGFkZGVkIHRvIHJlcXVlc3QgZGF0YS5cbiAgICAgKiAgIFwiU2lnbmF0dXJlXCI6IHtcbiAgICAgKiAgICAgIFwiRGF0ZVwiOiBcIjIwMjEtMDMtMTFUMTM6MzI6MDJaXCIsXG4gICAgICogICAgICBcIlZhbHVlXCI6IFwiMTA4NDE0OTg0OTliYTFjNGIwNzU0N2E1NDJjM2E4NzE4MjM1Zjk4M1wiXG4gICAgICogICB9XG4gICAgICogRGF0ZTogdGhlIFVUQyB0aW1lIHRvIHNlbmQgcmVxdWVzdCwgd2hpY2ggZm9sbG93cyB0aGUgSVNPIDg2MDEgc3RhbmRhcmQgaW4gdGhlIHl5eXktTU0tZGRUSEg6bW06c3NaIGZvcm1hdC5cbiAgICAgKiBWYWx1ZTogdGhlIHNpZ25hdHVyZSB2YWx1ZSBjYWxjdWxhdGVkIGZyb20gdGhlIGFsZ29yaXRobSBiZWxvdy5cbiAgICAgKiBcbiAgICAgKiBUaGUgc2lnbmF0dXJlIGFsZ29yaXRobTpcbiAgICAgKiAxLkNvbmNhdGVuYXRpbmcgc2lnbmF0dXJlIHN0cmluZzpQT1NUXG4gICAgICogXFxuXG4gICAgICogPGNvbnRlbnQgdHlwZTogaWYgQ29udGVudFR5cGUgaXMgc3BlY2lmaWVkLCB1c2UgaXQsIGVsc2UgdXNlIGFwcGxpY2F0aW9uL2pzb24uPlxuICAgICAqIFxcblxuICAgICAqIDxtZDUgb2YgcmVxdWVzdCBkYXRhOiB3aXRob3V0IFNpZ25hdHVyZSwganNvbiBmb3JtYXQsIHV0Zi04IGVuY29kZWQsIHNvcnQga2V5cywgZW5zdXJlIGFzY2lpLj5cbiAgICAgKiBcXG5cbiAgICAgKiA8RGF0ZSBpbiBTaWduYXR1cmU+XG4gICAgICogXFxuXG4gICAgICogPGhlYWRlciAxIGtleTogc29ydCBpbiBhbHBoYWJldGljYWwgb3JkZXI+OjxoZWFkZXIgMSB2YWx1ZT5cbiAgICAgKiBcXG5cbiAgICAgKiAuLi48aGVhZGVyIE4ga2V5Pjo8aGVhZGVyIDIgdmFsdWU+XG4gICAgICogXFxuXG4gICAgICogPHVybCBpbiBTZXJ2aWNlVG9rZW46IHN1Y2ggYXMgaHR0cHM6Ly9hYmMuY29tPlxuICAgICAqIDIuY2FsY3VsYXRlIHNpZ25hdHVyZSB3aXRoIHNoYTEuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBzaWduS2V5Pzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGNvbnRlbnRUeXBlOiBDb250ZW50IHR5cGUgb2YgcmVxdWVzdCBib2R5LlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgY29udGVudFR5cGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgaGVhZGVyczogSGVhZGVycyB0byBiZSBwYXNzZWQuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBoZWFkZXJzPzogeyBba2V5OiBzdHJpbmddOiAoYW55IHwgcm9zLklSZXNvbHZhYmxlKSB9IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgSHR0cENvbmZpZ1Byb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBIdHRwQ29uZmlnUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zQ3VzdG9tUmVzb3VyY2VfSHR0cENvbmZpZ1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGlmKHByb3BlcnRpZXMuc2lnbktleSAmJiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzLnNpZ25LZXkpIHx8ICh0eXBlb2YgcHJvcGVydGllcy5zaWduS2V5KSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc2lnbktleScsIHJvcy52YWxpZGF0ZUxlbmd0aCkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5zaWduS2V5Lmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogMSxcbiAgICAgICAgICAgIG1heDogMTI4LFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzaWduS2V5Jywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnNpZ25LZXkpKTtcbiAgICBpZihwcm9wZXJ0aWVzLmNvbnRlbnRUeXBlICYmICh0eXBlb2YgcHJvcGVydGllcy5jb250ZW50VHlwZSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY29udGVudFR5cGUnLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5jb250ZW50VHlwZSxcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCJhcHBsaWNhdGlvbi9qc29uXCIsXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjb250ZW50VHlwZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5jb250ZW50VHlwZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaGVhZGVycycsIHJvcy5oYXNoVmFsaWRhdG9yKHJvcy52YWxpZGF0ZUFueSkpKHByb3BlcnRpZXMuaGVhZGVycykpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJIdHRwQ29uZmlnUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlJPUzo6Q3VzdG9tUmVzb3VyY2UuSHR0cENvbmZpZ2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgSHR0cENvbmZpZ1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpST1M6OkN1c3RvbVJlc291cmNlLkh0dHBDb25maWdgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zQ3VzdG9tUmVzb3VyY2VIdHRwQ29uZmlnUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0N1c3RvbVJlc291cmNlX0h0dHBDb25maWdQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIFNpZ25LZXk6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuc2lnbktleSksXG4gICAgICBDb250ZW50VHlwZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5jb250ZW50VHlwZSksXG4gICAgICBIZWFkZXJzOiByb3MuaGFzaE1hcHBlcihyb3Mub2JqZWN0VG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5oZWFkZXJzKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6Uk9TOjpTbGVlcGBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NTbGVlcFByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjcmVhdGVEdXJhdGlvbjogVGhlIG51bWJlciBvZiBzZWNvbmRzIHRvIHdhaXQgYmVmb3JlIHJlc291cmNlIGNyZWF0aW9uLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNyZWF0ZUR1cmF0aW9uPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRlbGV0ZUR1cmF0aW9uOiBUaGUgbnVtYmVyIG9mIHNlY29uZHMgdG8gd2FpdCBiZWZvcmUgcmVzb3VyY2UgZGVsZXRpb24uXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGVsZXRlRHVyYXRpb24/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdHJpZ2dlcnM6IEFyYml0cmFyeSBtYXAgb2YgdmFsdWVzIHRoYXQsIHdoZW4gY2hhbmdlZCwgd2lsbCBydW4gdXBkYXRlIG9yIHVwZGF0ZSByb2xsYmFjayBkZWxheXMgYWdhaW4uXG4gICAgICovXG4gICAgcmVhZG9ubHkgdHJpZ2dlcnM/OiB7IFtrZXk6IHN0cmluZ106IChhbnkgfCByb3MuSVJlc29sdmFibGUpIH0gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdXBkYXRlRHVyYXRpb246IFRoZSBudW1iZXIgb2Ygc2Vjb25kcyB0byB3YWl0IGJlZm9yZSByZXNvdXJjZSB1cGRhdGUuIEl0IG9ubHkgdHJpZ2dlcnMgd2hlbiB0aGUgcHJvcGVydHkgVHJpZ2dlcnMgY2hhbmdlIGFuZCB0aGUgc3RhdHVzIG9mIHN0YWNrIGlzIFVQREFURV9JTl9QUk9HUkVTUy5cbiAgICAgKi9cbiAgICByZWFkb25seSB1cGRhdGVEdXJhdGlvbj86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB1cGRhdGVSb2xsYmFja0R1cmF0aW9uOiBUaGUgbnVtYmVyIG9mIHNlY29uZHMgdG8gd2FpdCBiZWZvcmUgcmVzb3VyY2UgdXBkYXRlIHJvbGxiYWNrLiBJdCBvbmx5IHRyaWdnZXJzIHdoZW4gc3RhY2sgdXBkYXRlIGZhaWxlZCBhbmQgcmVzb3VyY2Ugd2FzIHVwZGF0ZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdXBkYXRlUm9sbGJhY2tEdXJhdGlvbj86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NTbGVlcFByb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NTbGVlcFByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc1NsZWVwUHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgaWYocHJvcGVydGllcy5kZWxldGVEdXJhdGlvbiAmJiAodHlwZW9mIHByb3BlcnRpZXMuZGVsZXRlRHVyYXRpb24pICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2RlbGV0ZUR1cmF0aW9uJywgcm9zLnZhbGlkYXRlUmFuZ2UpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuZGVsZXRlRHVyYXRpb24sXG4gICAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgICBtYXg6IDE4MDAsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2RlbGV0ZUR1cmF0aW9uJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLmRlbGV0ZUR1cmF0aW9uKSk7XG4gICAgaWYocHJvcGVydGllcy51cGRhdGVSb2xsYmFja0R1cmF0aW9uICYmICh0eXBlb2YgcHJvcGVydGllcy51cGRhdGVSb2xsYmFja0R1cmF0aW9uKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd1cGRhdGVSb2xsYmFja0R1cmF0aW9uJywgcm9zLnZhbGlkYXRlUmFuZ2UpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMudXBkYXRlUm9sbGJhY2tEdXJhdGlvbixcbiAgICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICAgIG1heDogMTgwMCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndXBkYXRlUm9sbGJhY2tEdXJhdGlvbicsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy51cGRhdGVSb2xsYmFja0R1cmF0aW9uKSk7XG4gICAgaWYocHJvcGVydGllcy51cGRhdGVEdXJhdGlvbiAmJiAodHlwZW9mIHByb3BlcnRpZXMudXBkYXRlRHVyYXRpb24pICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3VwZGF0ZUR1cmF0aW9uJywgcm9zLnZhbGlkYXRlUmFuZ2UpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMudXBkYXRlRHVyYXRpb24sXG4gICAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgICBtYXg6IDE4MDAsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3VwZGF0ZUR1cmF0aW9uJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLnVwZGF0ZUR1cmF0aW9uKSk7XG4gICAgaWYocHJvcGVydGllcy5jcmVhdGVEdXJhdGlvbiAmJiAodHlwZW9mIHByb3BlcnRpZXMuY3JlYXRlRHVyYXRpb24pICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NyZWF0ZUR1cmF0aW9uJywgcm9zLnZhbGlkYXRlUmFuZ2UpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuY3JlYXRlRHVyYXRpb24sXG4gICAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgICBtYXg6IDE4MDAsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NyZWF0ZUR1cmF0aW9uJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLmNyZWF0ZUR1cmF0aW9uKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0cmlnZ2VycycsIHJvcy5oYXNoVmFsaWRhdG9yKHJvcy52YWxpZGF0ZUFueSkpKHByb3BlcnRpZXMudHJpZ2dlcnMpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zU2xlZXBQcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6Uk9TOjpTbGVlcGAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zU2xlZXBQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6Uk9TOjpTbGVlcGAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NTbGVlcFByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zU2xlZXBQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBDcmVhdGVEdXJhdGlvbjogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5jcmVhdGVEdXJhdGlvbiksXG4gICAgICBEZWxldGVEdXJhdGlvbjogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5kZWxldGVEdXJhdGlvbiksXG4gICAgICBUcmlnZ2Vyczogcm9zLmhhc2hNYXBwZXIocm9zLm9iamVjdFRvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMudHJpZ2dlcnMpLFxuICAgICAgVXBkYXRlRHVyYXRpb246IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudXBkYXRlRHVyYXRpb24pLFxuICAgICAgVXBkYXRlUm9sbGJhY2tEdXJhdGlvbjogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy51cGRhdGVSb2xsYmFja0R1cmF0aW9uKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIEEgUk9TIHRlbXBsYXRlIHR5cGU6ICBgQUxJWVVOOjpST1M6OlNsZWVwYFxuICovXG5leHBvcnQgY2xhc3MgUm9zU2xlZXAgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46OlJPUzo6U2xlZXBcIjtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY3JlYXRlRHVyYXRpb246IFRoZSBudW1iZXIgb2Ygc2Vjb25kcyB0byB3YWl0IGJlZm9yZSByZXNvdXJjZSBjcmVhdGlvbi5cbiAgICAgKi9cbiAgICBwdWJsaWMgY3JlYXRlRHVyYXRpb246IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZWxldGVEdXJhdGlvbjogVGhlIG51bWJlciBvZiBzZWNvbmRzIHRvIHdhaXQgYmVmb3JlIHJlc291cmNlIGRlbGV0aW9uLlxuICAgICAqL1xuICAgIHB1YmxpYyBkZWxldGVEdXJhdGlvbjogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHRyaWdnZXJzOiBBcmJpdHJhcnkgbWFwIG9mIHZhbHVlcyB0aGF0LCB3aGVuIGNoYW5nZWQsIHdpbGwgcnVuIHVwZGF0ZSBvciB1cGRhdGUgcm9sbGJhY2sgZGVsYXlzIGFnYWluLlxuICAgICAqL1xuICAgIHB1YmxpYyB0cmlnZ2VyczogeyBba2V5OiBzdHJpbmddOiAoYW55IHwgcm9zLklSZXNvbHZhYmxlKSB9IHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHVwZGF0ZUR1cmF0aW9uOiBUaGUgbnVtYmVyIG9mIHNlY29uZHMgdG8gd2FpdCBiZWZvcmUgcmVzb3VyY2UgdXBkYXRlLiBJdCBvbmx5IHRyaWdnZXJzIHdoZW4gdGhlIHByb3BlcnR5IFRyaWdnZXJzIGNoYW5nZSBhbmQgdGhlIHN0YXR1cyBvZiBzdGFjayBpcyBVUERBVEVfSU5fUFJPR1JFU1MuXG4gICAgICovXG4gICAgcHVibGljIHVwZGF0ZUR1cmF0aW9uOiBudW1iZXIgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdXBkYXRlUm9sbGJhY2tEdXJhdGlvbjogVGhlIG51bWJlciBvZiBzZWNvbmRzIHRvIHdhaXQgYmVmb3JlIHJlc291cmNlIHVwZGF0ZSByb2xsYmFjay4gSXQgb25seSB0cmlnZ2VycyB3aGVuIHN0YWNrIHVwZGF0ZSBmYWlsZWQgYW5kIHJlc291cmNlIHdhcyB1cGRhdGVkLlxuICAgICAqL1xuICAgIHB1YmxpYyB1cGRhdGVSb2xsYmFja0R1cmF0aW9uOiBudW1iZXIgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6Uk9TOjpTbGVlcGAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zU2xlZXBQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc1NsZWVwLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5jcmVhdGVEdXJhdGlvbiA9IHByb3BzLmNyZWF0ZUR1cmF0aW9uO1xuICAgICAgICB0aGlzLmRlbGV0ZUR1cmF0aW9uID0gcHJvcHMuZGVsZXRlRHVyYXRpb247XG4gICAgICAgIHRoaXMudHJpZ2dlcnMgPSBwcm9wcy50cmlnZ2VycztcbiAgICAgICAgdGhpcy51cGRhdGVEdXJhdGlvbiA9IHByb3BzLnVwZGF0ZUR1cmF0aW9uO1xuICAgICAgICB0aGlzLnVwZGF0ZVJvbGxiYWNrRHVyYXRpb24gPSBwcm9wcy51cGRhdGVSb2xsYmFja0R1cmF0aW9uO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNyZWF0ZUR1cmF0aW9uOiB0aGlzLmNyZWF0ZUR1cmF0aW9uLFxuICAgICAgICAgICAgZGVsZXRlRHVyYXRpb246IHRoaXMuZGVsZXRlRHVyYXRpb24sXG4gICAgICAgICAgICB0cmlnZ2VyczogdGhpcy50cmlnZ2VycyxcbiAgICAgICAgICAgIHVwZGF0ZUR1cmF0aW9uOiB0aGlzLnVwZGF0ZUR1cmF0aW9uLFxuICAgICAgICAgICAgdXBkYXRlUm9sbGJhY2tEdXJhdGlvbjogdGhpcy51cGRhdGVSb2xsYmFja0R1cmF0aW9uLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NTbGVlcFByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6Uk9TOjpTdGFja2BcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NTdGFja1Byb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwYXJhbWV0ZXJzOiBUaGUgc2V0IG9mIHBhcmFtZXRlcnMgcGFzc2VkIHRvIHRoaXMgbmVzdGVkIHN0YWNrLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHBhcmFtZXRlcnM/OiB7IFtrZXk6IHN0cmluZ106IChhbnkgfCByb3MuSVJlc29sdmFibGUpIH0gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVzb3VyY2VHcm91cElkOiBSZXNvdXJjZSBncm91cC5cbiAgICAgKi9cbiAgICByZWFkb25seSByZXNvdXJjZUdyb3VwSWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdGVtcGxhdGVCb2R5OiBTdHJ1Y3R1cmUgY29udGFpbmluZyB0aGUgdGVtcGxhdGUgYm9keS5cbiAgICAgKiBJdCBpcyBqdXN0IHRvIGZhY2lsaXRhdGUgdGhlIHBhc3Npbmcgb2YgdGVtcGxhdGUuIEl0IGlzIHJhdyBjb250ZW50LkZ1bmN0aW9ucyBpbiBUZW1wbGF0ZUJvZHkgd2lsbCBub3QgYmUgcmVzb2x2ZWQgaW4gcGFyZW50IHN0YWNrLlxuICAgICAqIFlvdSBtdXN0IHNwZWNpZnkgZWl0aGVyIHRoZSBUZW1wbGF0ZUJvZHkgb3IgdGhlIFRlbXBsYXRlVVJMIHByb3BlcnR5LiBJZiBib3RoIGFyZSBzcGVjaWZpZWQsIFRlbXBsYXRlQm9keSB3aWxsIGJlIHVzZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdGVtcGxhdGVCb2R5PzogeyBba2V5OiBzdHJpbmddOiAoYW55IHwgcm9zLklSZXNvbHZhYmxlKSB9IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHRlbXBsYXRlSWQ6IFRlbXBsYXRlIElEIG9mIHRlbXBsYXRlIGNvbnRhaW5pbmcgdGhlIHRlbXBsYXRlIGJvZHkuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdGVtcGxhdGVJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0ZW1wbGF0ZVVybDogTG9jYXRpb24gb2YgZmlsZSBjb250YWluaW5nIHRoZSB0ZW1wbGF0ZSBib2R5LiBUaGUgVVJMIG11c3QgcG9pbnQgdG8gYSB0ZW1wbGF0ZSAobWF4IHNpemU6IDUyNDI4OCBieXRlcykgdGhhdCBpcyBsb2NhdGVkIGluIGEgaHR0cCB3ZWIgc2VydmVyKGh0dHAsIGh0dHBzKSwgb3IgYW4gQWxpeXVuIE9TUyBidWNrZXQoU3VjaCBhcyBvc3M6Ly9yb3MtdGVtcGxhdGUvZGVtbz9SZWdpb25JZD1jbi1oYW5nemhvdSwgb3NzOi8vcm9zLXRlbXBsYXRlL2RlbW8uIFJlZ2lvbklkIGlzIGRlZmF1bHQgdG8gdGhlIHZhbHVlIG9mIFJlZ2lvbklkIFBhcmFtZXRlciBvZiB0aGUgcmVxdWVzdC4pLlxuICAgICAqIFlvdSBtdXN0IHNwZWNpZnkgZWl0aGVyIHRoZSBUZW1wbGF0ZUJvZHkgb3IgdGhlIFRlbXBsYXRlVVJMIHByb3BlcnR5LiBJZiBib3RoIGFyZSBzcGVjaWZpZWQsIFRlbXBsYXRlQm9keSB3aWxsIGJlIHVzZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdGVtcGxhdGVVcmw/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdGVtcGxhdGVWZXJzaW9uOiBUZW1wbGF0ZSB2ZXJzaW9uIG9mIHRlbXBsYXRlIGNvbnRhaW5pbmcgdGhlIHRlbXBsYXRlIGJvZHkuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdGVtcGxhdGVWZXJzaW9uPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHRpbWVvdXRNaW5zOiBUaGUgbGVuZ3RoIG9mIHRpbWUsIGluIG1pbnV0ZXMsIHRvIHdhaXQgZm9yIHRoZSBuZXN0ZWQgc3RhY2sgY3JlYXRpb24gb3IgdXBkYXRlLiBEZWZhdWx0IHRvIDYwIG1pbnV0ZXMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdGltZW91dE1pbnM/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zU3RhY2tQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zU3RhY2tQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NTdGFja1Byb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGlmKHByb3BlcnRpZXMudGVtcGxhdGVVcmwgJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy50ZW1wbGF0ZVVybCkgfHwgKHR5cGVvZiBwcm9wZXJ0aWVzLnRlbXBsYXRlVXJsKSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGVtcGxhdGVVcmwnLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMudGVtcGxhdGVVcmwubGVuZ3RoLFxuICAgICAgICAgICAgbWluOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBtYXg6IDEwMjQsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RlbXBsYXRlVXJsJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnRlbXBsYXRlVXJsKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwYXJhbWV0ZXJzJywgcm9zLmhhc2hWYWxpZGF0b3Iocm9zLnZhbGlkYXRlQW55KSkocHJvcGVydGllcy5wYXJhbWV0ZXJzKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZXNvdXJjZUdyb3VwSWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucmVzb3VyY2VHcm91cElkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0aW1lb3V0TWlucycsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy50aW1lb3V0TWlucykpO1xuICAgIGlmKHByb3BlcnRpZXMudGVtcGxhdGVWZXJzaW9uICYmICh0eXBlb2YgcHJvcGVydGllcy50ZW1wbGF0ZVZlcnNpb24pICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RlbXBsYXRlVmVyc2lvbicsIHJvcy52YWxpZGF0ZUFsbG93ZWRQYXR0ZXJuKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy50ZW1wbGF0ZVZlcnNpb24sXG4gICAgICAgICAgcmVnOiAvXnYoKFsxLTldKXwoWzEtOV1bMC05XSl8KFsxLTldWzAtOV1bMC05XSkpJC9cbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RlbXBsYXRlVmVyc2lvbicsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy50ZW1wbGF0ZVZlcnNpb24pKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RlbXBsYXRlQm9keScsIHJvcy5oYXNoVmFsaWRhdG9yKHJvcy52YWxpZGF0ZUFueSkpKHByb3BlcnRpZXMudGVtcGxhdGVCb2R5KSk7XG4gICAgaWYocHJvcGVydGllcy50ZW1wbGF0ZUlkICYmICh0eXBlb2YgcHJvcGVydGllcy50ZW1wbGF0ZUlkKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0ZW1wbGF0ZUlkJywgcm9zLnZhbGlkYXRlQWxsb3dlZFBhdHRlcm4pKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnRlbXBsYXRlSWQsXG4gICAgICAgICAgcmVnOiAvXihbMC05YS1mXXs4fVstXVswLTlhLWZdezR9Wy1dWzAtOWEtZl17NH1bLV1bMC05YS1mXXs0fVstXVswLTlhLWZdezEyfSl8KGFjc1s6XXJvc1s6XVsqXVs6XVxcZCtbOl10ZW1wbGF0ZVxcL1swLTlhLWZdezh9Wy1dWzAtOWEtZl17NH1bLV1bMC05YS1mXXs0fVstXVswLTlhLWZdezR9Wy1dWzAtOWEtZl17MTJ9KXwoYWNzWzpdcm9zWzpddGVtcGxhdGVbL11bLV9hLXpBLVowLTldK1svXVstX2EtekEtWjAtOV0rKSQvXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0ZW1wbGF0ZUlkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnRlbXBsYXRlSWQpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zU3RhY2tQcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6Uk9TOjpTdGFja2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zU3RhY2tQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6Uk9TOjpTdGFja2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NTdGFja1Byb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zU3RhY2tQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBQYXJhbWV0ZXJzOiByb3MuaGFzaE1hcHBlcihyb3Mub2JqZWN0VG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5wYXJhbWV0ZXJzKSxcbiAgICAgIFJlc291cmNlR3JvdXBJZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5yZXNvdXJjZUdyb3VwSWQpLFxuICAgICAgVGVtcGxhdGVCb2R5OiByb3MuaGFzaE1hcHBlcihyb3Mub2JqZWN0VG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy50ZW1wbGF0ZUJvZHkpLFxuICAgICAgVGVtcGxhdGVJZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy50ZW1wbGF0ZUlkKSxcbiAgICAgIFRlbXBsYXRlVVJMOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnRlbXBsYXRlVXJsKSxcbiAgICAgIFRlbXBsYXRlVmVyc2lvbjogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy50ZW1wbGF0ZVZlcnNpb24pLFxuICAgICAgVGltZW91dE1pbnM6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudGltZW91dE1pbnMpLFxuICAgIH07XG59XG5cbi8qKlxuICogQSBST1MgdGVtcGxhdGUgdHlwZTogIGBBTElZVU46OlJPUzo6U3RhY2tgXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NTdGFjayBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6Uk9TOjpTdGFja1wiO1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwYXJhbWV0ZXJzOiBUaGUgc2V0IG9mIHBhcmFtZXRlcnMgcGFzc2VkIHRvIHRoaXMgbmVzdGVkIHN0YWNrLlxuICAgICAqL1xuICAgIHB1YmxpYyBwYXJhbWV0ZXJzOiB7IFtrZXk6IHN0cmluZ106IChhbnkgfCByb3MuSVJlc29sdmFibGUpIH0gfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVzb3VyY2VHcm91cElkOiBSZXNvdXJjZSBncm91cC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVzb3VyY2VHcm91cElkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdGVtcGxhdGVCb2R5OiBTdHJ1Y3R1cmUgY29udGFpbmluZyB0aGUgdGVtcGxhdGUgYm9keS5cbiAgICAgKiBJdCBpcyBqdXN0IHRvIGZhY2lsaXRhdGUgdGhlIHBhc3Npbmcgb2YgdGVtcGxhdGUuIEl0IGlzIHJhdyBjb250ZW50LkZ1bmN0aW9ucyBpbiBUZW1wbGF0ZUJvZHkgd2lsbCBub3QgYmUgcmVzb2x2ZWQgaW4gcGFyZW50IHN0YWNrLlxuICAgICAqIFlvdSBtdXN0IHNwZWNpZnkgZWl0aGVyIHRoZSBUZW1wbGF0ZUJvZHkgb3IgdGhlIFRlbXBsYXRlVVJMIHByb3BlcnR5LiBJZiBib3RoIGFyZSBzcGVjaWZpZWQsIFRlbXBsYXRlQm9keSB3aWxsIGJlIHVzZWQuXG4gICAgICovXG4gICAgcHVibGljIHRlbXBsYXRlQm9keTogeyBba2V5OiBzdHJpbmddOiAoYW55IHwgcm9zLklSZXNvbHZhYmxlKSB9IHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHRlbXBsYXRlSWQ6IFRlbXBsYXRlIElEIG9mIHRlbXBsYXRlIGNvbnRhaW5pbmcgdGhlIHRlbXBsYXRlIGJvZHkuXG4gICAgICovXG4gICAgcHVibGljIHRlbXBsYXRlSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0ZW1wbGF0ZVVybDogTG9jYXRpb24gb2YgZmlsZSBjb250YWluaW5nIHRoZSB0ZW1wbGF0ZSBib2R5LiBUaGUgVVJMIG11c3QgcG9pbnQgdG8gYSB0ZW1wbGF0ZSAobWF4IHNpemU6IDUyNDI4OCBieXRlcykgdGhhdCBpcyBsb2NhdGVkIGluIGEgaHR0cCB3ZWIgc2VydmVyKGh0dHAsIGh0dHBzKSwgb3IgYW4gQWxpeXVuIE9TUyBidWNrZXQoU3VjaCBhcyBvc3M6Ly9yb3MtdGVtcGxhdGUvZGVtbz9SZWdpb25JZD1jbi1oYW5nemhvdSwgb3NzOi8vcm9zLXRlbXBsYXRlL2RlbW8uIFJlZ2lvbklkIGlzIGRlZmF1bHQgdG8gdGhlIHZhbHVlIG9mIFJlZ2lvbklkIFBhcmFtZXRlciBvZiB0aGUgcmVxdWVzdC4pLlxuICAgICAqIFlvdSBtdXN0IHNwZWNpZnkgZWl0aGVyIHRoZSBUZW1wbGF0ZUJvZHkgb3IgdGhlIFRlbXBsYXRlVVJMIHByb3BlcnR5LiBJZiBib3RoIGFyZSBzcGVjaWZpZWQsIFRlbXBsYXRlQm9keSB3aWxsIGJlIHVzZWQuXG4gICAgICovXG4gICAgcHVibGljIHRlbXBsYXRlVXJsOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdGVtcGxhdGVWZXJzaW9uOiBUZW1wbGF0ZSB2ZXJzaW9uIG9mIHRlbXBsYXRlIGNvbnRhaW5pbmcgdGhlIHRlbXBsYXRlIGJvZHkuXG4gICAgICovXG4gICAgcHVibGljIHRlbXBsYXRlVmVyc2lvbjogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHRpbWVvdXRNaW5zOiBUaGUgbGVuZ3RoIG9mIHRpbWUsIGluIG1pbnV0ZXMsIHRvIHdhaXQgZm9yIHRoZSBuZXN0ZWQgc3RhY2sgY3JlYXRpb24gb3IgdXBkYXRlLiBEZWZhdWx0IHRvIDYwIG1pbnV0ZXMuXG4gICAgICovXG4gICAgcHVibGljIHRpbWVvdXRNaW5zOiBudW1iZXIgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6Uk9TOjpTdGFja2AuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zU3RhY2tQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc1N0YWNrLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5wYXJhbWV0ZXJzID0gcHJvcHMucGFyYW1ldGVycztcbiAgICAgICAgdGhpcy5yZXNvdXJjZUdyb3VwSWQgPSBwcm9wcy5yZXNvdXJjZUdyb3VwSWQ7XG4gICAgICAgIHRoaXMudGVtcGxhdGVCb2R5ID0gcHJvcHMudGVtcGxhdGVCb2R5O1xuICAgICAgICB0aGlzLnRlbXBsYXRlSWQgPSBwcm9wcy50ZW1wbGF0ZUlkO1xuICAgICAgICB0aGlzLnRlbXBsYXRlVXJsID0gcHJvcHMudGVtcGxhdGVVcmw7XG4gICAgICAgIHRoaXMudGVtcGxhdGVWZXJzaW9uID0gcHJvcHMudGVtcGxhdGVWZXJzaW9uO1xuICAgICAgICB0aGlzLnRpbWVvdXRNaW5zID0gcHJvcHMudGltZW91dE1pbnM7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcGFyYW1ldGVyczogdGhpcy5wYXJhbWV0ZXJzLFxuICAgICAgICAgICAgcmVzb3VyY2VHcm91cElkOiB0aGlzLnJlc291cmNlR3JvdXBJZCxcbiAgICAgICAgICAgIHRlbXBsYXRlQm9keTogdGhpcy50ZW1wbGF0ZUJvZHksXG4gICAgICAgICAgICB0ZW1wbGF0ZUlkOiB0aGlzLnRlbXBsYXRlSWQsXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogdGhpcy50ZW1wbGF0ZVVybCxcbiAgICAgICAgICAgIHRlbXBsYXRlVmVyc2lvbjogdGhpcy50ZW1wbGF0ZVZlcnNpb24sXG4gICAgICAgICAgICB0aW1lb3V0TWluczogdGhpcy50aW1lb3V0TWlucyxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zU3RhY2tQcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OlJPUzo6V2FpdENvbmRpdGlvbmBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NXYWl0Q29uZGl0aW9uUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGhhbmRsZTogQSByZWZlcmVuY2UgdG8gdGhlIHdhaXQgY29uZGl0aW9uIGhhbmRsZSB1c2VkIHRvIHNpZ25hbCB0aGlzIHdhaXQgY29uZGl0aW9uLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGhhbmRsZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHRpbWVvdXQ6IFRoZSBudW1iZXIgb2Ygc2Vjb25kcyB0byB3YWl0IGZvciB0aGUgY29ycmVjdCBudW1iZXIgb2Ygc2lnbmFscyB0byBhcnJpdmUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdGltZW91dDogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNvdW50OiBUaGUgbnVtYmVyIG9mIHN1Y2Nlc3Mgc2lnbmFscyB0aGF0IG11c3QgYmUgcmVjZWl2ZWQgYmVmb3JlIHRoZSBzdGFjayBjcmVhdGlvbiBwcm9jZXNzIGNvbnRpbnVlcy5cbiAgICAgKi9cbiAgICByZWFkb25seSBjb3VudD86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzaG93UHJvZ3Jlc3NFdmVudDogV2hldGhlciB0byBnZW5lcmF0ZSBwcm9ncmVzcyBjaGFuZ2VkIGV2ZW50LiBEZWZhdWx0IHRvIERpc2FibGVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNob3dQcm9ncmVzc0V2ZW50Pzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc1dhaXRDb25kaXRpb25Qcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zV2FpdENvbmRpdGlvblByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc1dhaXRDb25kaXRpb25Qcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBpZihwcm9wZXJ0aWVzLnNob3dQcm9ncmVzc0V2ZW50ICYmICh0eXBlb2YgcHJvcGVydGllcy5zaG93UHJvZ3Jlc3NFdmVudCkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc2hvd1Byb2dyZXNzRXZlbnQnLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5zaG93UHJvZ3Jlc3NFdmVudCxcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCJFbmFibGVkSWZDcmVhdGVTdGFja1wiLFwiRGlzYWJsZWRcIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzaG93UHJvZ3Jlc3NFdmVudCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zaG93UHJvZ3Jlc3NFdmVudCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGltZW91dCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy50aW1lb3V0KSk7XG4gICAgaWYocHJvcGVydGllcy50aW1lb3V0ICYmICh0eXBlb2YgcHJvcGVydGllcy50aW1lb3V0KSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0aW1lb3V0Jywgcm9zLnZhbGlkYXRlUmFuZ2UpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMudGltZW91dCxcbiAgICAgICAgICAgIG1pbjogMSxcbiAgICAgICAgICAgIG1heDogNDMyMDAsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RpbWVvdXQnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMudGltZW91dCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY291bnQnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMuY291bnQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2hhbmRsZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5oYW5kbGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2hhbmRsZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5oYW5kbGUpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zV2FpdENvbmRpdGlvblByb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpST1M6OldhaXRDb25kaXRpb25gIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc1dhaXRDb25kaXRpb25Qcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6Uk9TOjpXYWl0Q29uZGl0aW9uYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc1dhaXRDb25kaXRpb25Qcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc1dhaXRDb25kaXRpb25Qcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBIYW5kbGU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaGFuZGxlKSxcbiAgICAgIFRpbWVvdXQ6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudGltZW91dCksXG4gICAgICBDb3VudDogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5jb3VudCksXG4gICAgICBTaG93UHJvZ3Jlc3NFdmVudDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zaG93UHJvZ3Jlc3NFdmVudCksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBBIFJPUyB0ZW1wbGF0ZSB0eXBlOiAgYEFMSVlVTjo6Uk9TOjpXYWl0Q29uZGl0aW9uYFxuICovXG5leHBvcnQgY2xhc3MgUm9zV2FpdENvbmRpdGlvbiBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6Uk9TOjpXYWl0Q29uZGl0aW9uXCI7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgRGF0YTogSlNPTiBzZXJpYWxpemVkIGRpY3QgY29udGFpbmluZyBkYXRhIGFzc29jaWF0ZWQgd2l0aCB3YWl0IGNvbmRpdGlvbiBzaWduYWxzIHNlbnQgdG8gdGhlIGhhbmRsZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckRhdGE6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgRXJyb3JEYXRhOiBKU09OIHNlcmlhbGl6ZWQgZGljdCBjb250YWluaW5nIGRhdGEgYXNzb2NpYXRlZCB3aXRoIHdhaXQgY29uZGl0aW9uIGVycm9yIHNpZ25hbHMgc2VudCB0byB0aGUgaGFuZGxlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRXJyb3JEYXRhOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIEpvaW5lZEVycm9yRGF0YTogU3RyaW5nIGNvbnRhaW5pbmcgZGF0YSBhc3NvY2lhdGVkIHdpdGggd2FpdCBjb25kaXRpb24gZXJyb3Igc2lnbmFscyBzZW50IHRvIHRoZSBoYW5kbGUuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJKb2luZWRFcnJvckRhdGE6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGhhbmRsZTogQSByZWZlcmVuY2UgdG8gdGhlIHdhaXQgY29uZGl0aW9uIGhhbmRsZSB1c2VkIHRvIHNpZ25hbCB0aGlzIHdhaXQgY29uZGl0aW9uLlxuICAgICAqL1xuICAgIHB1YmxpYyBoYW5kbGU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0aW1lb3V0OiBUaGUgbnVtYmVyIG9mIHNlY29uZHMgdG8gd2FpdCBmb3IgdGhlIGNvcnJlY3QgbnVtYmVyIG9mIHNpZ25hbHMgdG8gYXJyaXZlLlxuICAgICAqL1xuICAgIHB1YmxpYyB0aW1lb3V0OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY291bnQ6IFRoZSBudW1iZXIgb2Ygc3VjY2VzcyBzaWduYWxzIHRoYXQgbXVzdCBiZSByZWNlaXZlZCBiZWZvcmUgdGhlIHN0YWNrIGNyZWF0aW9uIHByb2Nlc3MgY29udGludWVzLlxuICAgICAqL1xuICAgIHB1YmxpYyBjb3VudDogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHNob3dQcm9ncmVzc0V2ZW50OiBXaGV0aGVyIHRvIGdlbmVyYXRlIHByb2dyZXNzIGNoYW5nZWQgZXZlbnQuIERlZmF1bHQgdG8gRGlzYWJsZWQuXG4gICAgICovXG4gICAgcHVibGljIHNob3dQcm9ncmVzc0V2ZW50OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6Uk9TOjpXYWl0Q29uZGl0aW9uYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NXYWl0Q29uZGl0aW9uUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NXYWl0Q29uZGl0aW9uLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJEYXRhID0gdGhpcy5nZXRBdHQoJ0RhdGEnKTtcbiAgICAgICAgdGhpcy5hdHRyRXJyb3JEYXRhID0gdGhpcy5nZXRBdHQoJ0Vycm9yRGF0YScpO1xuICAgICAgICB0aGlzLmF0dHJKb2luZWRFcnJvckRhdGEgPSB0aGlzLmdldEF0dCgnSm9pbmVkRXJyb3JEYXRhJyk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLmhhbmRsZSA9IHByb3BzLmhhbmRsZTtcbiAgICAgICAgdGhpcy50aW1lb3V0ID0gcHJvcHMudGltZW91dDtcbiAgICAgICAgdGhpcy5jb3VudCA9IHByb3BzLmNvdW50O1xuICAgICAgICB0aGlzLnNob3dQcm9ncmVzc0V2ZW50ID0gcHJvcHMuc2hvd1Byb2dyZXNzRXZlbnQ7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaGFuZGxlOiB0aGlzLmhhbmRsZSxcbiAgICAgICAgICAgIHRpbWVvdXQ6IHRoaXMudGltZW91dCxcbiAgICAgICAgICAgIGNvdW50OiB0aGlzLmNvdW50LFxuICAgICAgICAgICAgc2hvd1Byb2dyZXNzRXZlbnQ6IHRoaXMuc2hvd1Byb2dyZXNzRXZlbnQsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc1dhaXRDb25kaXRpb25Qcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OlJPUzo6V2FpdENvbmRpdGlvbkhhbmRsZWBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NXYWl0Q29uZGl0aW9uSGFuZGxlUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNvdW50OiBUaGVyZSBhcmUgMyBwcmVjb25kaXRpb25zIHRoYXQgbWFrZSBDb3VudCB0YWtpbmcgZWZmZWN0OlxuICAgICAqIDEuTW9kZSBpcyBzZXQgdG8gRnVsbC5cbiAgICAgKiAyLkNvdW50ID49IDAuXG4gICAgICogMy5UaGUgaWQgb2Ygc2lnbmFsIGlzIG5vdCBzcGVjaWZpZWQuIElmIHNvLCBpdCB3aWxsIGJlIGEgc2VsZi1pbmNyZWFzaW5nIGludGVnZXIgc3RhcnRlZCBmcm9tIDEuIEZvciBleGFtcGxlLCB0aGUgaWQgb2YgdGhlIGZpcnN0IHNpZ25hbCBpcyAxLCB0aGUgaWQgb2YgdGhlIHNlY29uZCBzaWduYWwgaXMgMiwgYW5kIHNvIG9uLlxuICAgICAqIFxuICAgICAqIElmIENvdW50IHRha2VzIGVmZmVjdCwgc2lnbmFscyB3aXRoIGlkID4gQ291bnQgd2lsbCBiZSBkZWxldGVkIGJlZm9yZSB1cGRhdGUuXG4gICAgICogVGhlIGRlZmF1bHQgdmFsdWUgaXMgLTEsIHdoaWNoIG1lYW5zIG5vIGVmZmVjdC5cbiAgICAgKiBJdCBpcyByZWNvbW1lbmRlZCB0byBxdW90ZSB0aGUgc2FtZSB2YWx1ZSB3aXRoIFdhaXRDb25kaXRpb24uQ291bnQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgY291bnQ/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbW9kZTogSWYgc2V0IHRvIEluY3JlbWVudCwgYWxsIG9sZCBzaWduYWxzIHdpbGwgYmUgZGVsZXRlZCBiZWZvcmUgdXBkYXRlLiBJbiB0aGlzIG1vZGUsIFdhaXRDb25kaXRpb24uQ291bnQgc2hvdWxkIHJlZmVyZW5jZSBhbiBpbmNyZW1lbnRhbCB2YWx1ZSBpbnN0ZWFkIG9mIGEgZnVsbCB2YWx1ZSwgc3VjaCBhcyBTY2FsaW5nR3JvdXBFbmFibGUuU2NhbGluZ1J1bGVBcmlzRXhlY3V0ZVJlc3VsdE51bWJlck9mQWRkZWRJbnN0YW5jZXMuXG4gICAgICogXG4gICAgICogSWYgc2V0IHRvIEZ1bGwsIG5vIG9sZCBzaWduYWwgd2lsbCBiZSBkZWxldGVkIHVubGVzcyBDb3VudCBpcyBzZXQuIEluIHRoaXMgbW9kZSwgV2FpdENvbmRpdGlvbi5Db3VudCBzaG91bGQgcmVmZXJlbmNlIGEgZnVsbCB2YWx1ZSwgc3VjaCBhcyB0aGUgc2FtZSB2YWx1ZSB3aXRoIEluc3RhbmNlR3JvdXAuTWF4QW1vdW50LiBJdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhpcyBtb2RlIHdpdGggQ291bnQuXG4gICAgICogXG4gICAgICogRGVmYXVsdCB0byBGdWxsLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG1vZGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zV2FpdENvbmRpdGlvbkhhbmRsZVByb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NXYWl0Q29uZGl0aW9uSGFuZGxlUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zV2FpdENvbmRpdGlvbkhhbmRsZVByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGlmKHByb3BlcnRpZXMubW9kZSAmJiAodHlwZW9mIHByb3BlcnRpZXMubW9kZSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbW9kZScsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLm1vZGUsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiSW5jcmVtZW50XCIsXCJGdWxsXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbW9kZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5tb2RlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjb3VudCcsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5jb3VudCkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NXYWl0Q29uZGl0aW9uSGFuZGxlUHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlJPUzo6V2FpdENvbmRpdGlvbkhhbmRsZWAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zV2FpdENvbmRpdGlvbkhhbmRsZVByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpST1M6OldhaXRDb25kaXRpb25IYW5kbGVgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zV2FpdENvbmRpdGlvbkhhbmRsZVByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zV2FpdENvbmRpdGlvbkhhbmRsZVByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIENvdW50OiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmNvdW50KSxcbiAgICAgIE1vZGU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubW9kZSksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBBIFJPUyB0ZW1wbGF0ZSB0eXBlOiAgYEFMSVlVTjo6Uk9TOjpXYWl0Q29uZGl0aW9uSGFuZGxlYFxuICovXG5leHBvcnQgY2xhc3MgUm9zV2FpdENvbmRpdGlvbkhhbmRsZSBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6Uk9TOjpXYWl0Q29uZGl0aW9uSGFuZGxlXCI7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgQ3VybENsaTogQ29udmVuaWVuY2UgYXR0cmlidXRlLCBwcm92aWRlcyBjdXJsIENMSSBjb21tYW5kIHByZWZpeCwgd2hpY2ggY2FuIGJlIHVzZWQgZm9yIHNpZ25hbGxpbmcgaGFuZGxlIGNvbXBsZXRpb24gb3IgZmFpbHVyZS4gIFlvdSBjYW4gc2lnbmFsIHN1Y2Nlc3MgYnkgYWRkaW5nIC0tZGF0YS1iaW5hcnkgJ3tcInN0YXR1c1wiOiBcIlNVQ0NFU1NcIn0nICwgb3Igc2lnbmFsIGZhaWx1cmUgYnkgYWRkaW5nIC0tZGF0YS1iaW5hcnkgJ3tcInN0YXR1c1wiOiBcIkZBSUxVUkVcIn0nXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJDdXJsQ2xpOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIEhlYWRlcnM6IEhUVFAgUE9TVCBIZWFkZXJzIHVzZWQgZm9yIHNpZ25hbGxpbmcgaGFuZGxlIGNvbXBsZXRpb24gb3IgZmFpbHVyZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckhlYWRlcnM6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgUG93ZXJTaGVsbEN1cmxDbGk6IENvbnZlbmllbmNlIGF0dHJpYnV0ZSwgcHJvdmlkZXMgY3VybCBDTEkgY29tbWFuZCBwcmVmaXggZm9yIFBvd2VyU2hlbGwsIHdoaWNoIGNhbiBiZSB1c2VkIGZvciBzaWduYWxsaW5nIGhhbmRsZSBjb21wbGV0aW9uIG9yIGZhaWx1cmUuIEFzIHRoaXMgY21kbGV0IHdhcyBpbnRyb2R1Y2VkIGluIFBvd2VyU2hlbGwgMy4wLCBlbnN1cmUgdGhlIHZlcnNpb24gb2YgUG93ZXJTaGVsbCBzYXRpc2ZpZXMgdGhlIGNvbnN0cmFpbnQuIChTaG93IHRoZSB2ZXJzaW9uIHZpYSAkUFNWZXJzaW9uVGFibGUuUFNWZXJzaW9uLikgWW91IGNhbiBzaWduYWwgc3VjY2VzcyBieSBhZGRpbmcgLUJvZHkgJ3tcInN0YXR1c1wiOiBcIlNVQ0NFU1NcIn0nICwgb3Igc2lnbmFsIGZhaWx1cmUgYnkgYWRkaW5nIC1Cb2R5ICd7XCJzdGF0dXNcIjogXCJGQUlMVVJFXCJ9J1xuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUG93ZXJTaGVsbEN1cmxDbGk6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgVVJMOiBIVFRQIFBPU1QgVVJMIHVzZWQgZm9yIHNpZ25hbGxpbmcgaGFuZGxlIGNvbXBsZXRpb24gb3IgZmFpbHVyZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clVybDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBXaW5kb3dzQ3VybENsaTogQ29udmVuaWVuY2UgYXR0cmlidXRlLCBwcm92aWRlcyBjdXJsIENMSSBjb21tYW5kIHByZWZpeCBmb3IgV2luZG93cywgd2hpY2ggY2FuIGJlIHVzZWQgZm9yIHNpZ25hbGxpbmcgaGFuZGxlIGNvbXBsZXRpb24gb3IgZmFpbHVyZS4gQXMgV2luZG93cyBkb2VzIG5vdCBzdXBwb3J0IGN1cmwgY29tbWFuZCwgeW91IG5lZWQgdG8gaW5zdGFsbCBjdXJsLmV4ZSBhbmQgYWRkIGl0IHRvIFBBVEggZmlyc3QuIFlvdSBjYW4gc2lnbmFsIHN1Y2Nlc3MgYnkgYWRkaW5nIC0tZGF0YS1iaW5hcnkgXCJ7XFxcInN0YXR1c1xcXCI6IFxcXCJTVUNDRVNTXFxcIn1cIiAsIG9yIHNpZ25hbCBmYWlsdXJlIGJ5IGFkZGluZyAtLWRhdGEtYmluYXJ5IFwie1xcXCJzdGF0dXNcXFwiOiBcXFwiRkFJTFVSRVxcXCJ9XCJcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0cldpbmRvd3NDdXJsQ2xpOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjb3VudDogVGhlcmUgYXJlIDMgcHJlY29uZGl0aW9ucyB0aGF0IG1ha2UgQ291bnQgdGFraW5nIGVmZmVjdDpcbiAgICAgKiAxLk1vZGUgaXMgc2V0IHRvIEZ1bGwuXG4gICAgICogMi5Db3VudCA+PSAwLlxuICAgICAqIDMuVGhlIGlkIG9mIHNpZ25hbCBpcyBub3Qgc3BlY2lmaWVkLiBJZiBzbywgaXQgd2lsbCBiZSBhIHNlbGYtaW5jcmVhc2luZyBpbnRlZ2VyIHN0YXJ0ZWQgZnJvbSAxLiBGb3IgZXhhbXBsZSwgdGhlIGlkIG9mIHRoZSBmaXJzdCBzaWduYWwgaXMgMSwgdGhlIGlkIG9mIHRoZSBzZWNvbmQgc2lnbmFsIGlzIDIsIGFuZCBzbyBvbi5cbiAgICAgKiBcbiAgICAgKiBJZiBDb3VudCB0YWtlcyBlZmZlY3QsIHNpZ25hbHMgd2l0aCBpZCA+IENvdW50IHdpbGwgYmUgZGVsZXRlZCBiZWZvcmUgdXBkYXRlLlxuICAgICAqIFRoZSBkZWZhdWx0IHZhbHVlIGlzIC0xLCB3aGljaCBtZWFucyBubyBlZmZlY3QuXG4gICAgICogSXQgaXMgcmVjb21tZW5kZWQgdG8gcXVvdGUgdGhlIHNhbWUgdmFsdWUgd2l0aCBXYWl0Q29uZGl0aW9uLkNvdW50LlxuICAgICAqL1xuICAgIHB1YmxpYyBjb3VudDogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG1vZGU6IElmIHNldCB0byBJbmNyZW1lbnQsIGFsbCBvbGQgc2lnbmFscyB3aWxsIGJlIGRlbGV0ZWQgYmVmb3JlIHVwZGF0ZS4gSW4gdGhpcyBtb2RlLCBXYWl0Q29uZGl0aW9uLkNvdW50IHNob3VsZCByZWZlcmVuY2UgYW4gaW5jcmVtZW50YWwgdmFsdWUgaW5zdGVhZCBvZiBhIGZ1bGwgdmFsdWUsIHN1Y2ggYXMgU2NhbGluZ0dyb3VwRW5hYmxlLlNjYWxpbmdSdWxlQXJpc0V4ZWN1dGVSZXN1bHROdW1iZXJPZkFkZGVkSW5zdGFuY2VzLlxuICAgICAqIFxuICAgICAqIElmIHNldCB0byBGdWxsLCBubyBvbGQgc2lnbmFsIHdpbGwgYmUgZGVsZXRlZCB1bmxlc3MgQ291bnQgaXMgc2V0LiBJbiB0aGlzIG1vZGUsIFdhaXRDb25kaXRpb24uQ291bnQgc2hvdWxkIHJlZmVyZW5jZSBhIGZ1bGwgdmFsdWUsIHN1Y2ggYXMgdGhlIHNhbWUgdmFsdWUgd2l0aCBJbnN0YW5jZUdyb3VwLk1heEFtb3VudC4gSXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoaXMgbW9kZSB3aXRoIENvdW50LlxuICAgICAqIFxuICAgICAqIERlZmF1bHQgdG8gRnVsbC5cbiAgICAgKi9cbiAgICBwdWJsaWMgbW9kZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46OlJPUzo6V2FpdENvbmRpdGlvbkhhbmRsZWAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zV2FpdENvbmRpdGlvbkhhbmRsZVByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zV2FpdENvbmRpdGlvbkhhbmRsZS5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcbiAgICAgICAgdGhpcy5hdHRyQ3VybENsaSA9IHRoaXMuZ2V0QXR0KCdDdXJsQ2xpJyk7XG4gICAgICAgIHRoaXMuYXR0ckhlYWRlcnMgPSB0aGlzLmdldEF0dCgnSGVhZGVycycpO1xuICAgICAgICB0aGlzLmF0dHJQb3dlclNoZWxsQ3VybENsaSA9IHRoaXMuZ2V0QXR0KCdQb3dlclNoZWxsQ3VybENsaScpO1xuICAgICAgICB0aGlzLmF0dHJVcmwgPSB0aGlzLmdldEF0dCgnVVJMJyk7XG4gICAgICAgIHRoaXMuYXR0cldpbmRvd3NDdXJsQ2xpID0gdGhpcy5nZXRBdHQoJ1dpbmRvd3NDdXJsQ2xpJyk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLmNvdW50ID0gcHJvcHMuY291bnQ7XG4gICAgICAgIHRoaXMubW9kZSA9IHByb3BzLm1vZGU7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY291bnQ6IHRoaXMuY291bnQsXG4gICAgICAgICAgICBtb2RlOiB0aGlzLm1vZGUsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc1dhaXRDb25kaXRpb25IYW5kbGVQcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cbiJdfQ==