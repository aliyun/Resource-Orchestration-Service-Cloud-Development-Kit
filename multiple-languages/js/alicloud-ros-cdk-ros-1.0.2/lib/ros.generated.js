"use strict";
// Generated from the AliCloud ROS Resource Specification
Object.defineProperty(exports, "__esModule", { value: true });
exports.RosWaitConditionHandle = exports.RosWaitCondition = exports.RosStack = exports.RosCustomResource = exports.RosAutoEnableService = void 0;
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
            allowedValues: ["IOT", "EMAS", "MaxCompute", "BatchCompute", "IMM", "Xtrace", "DataWorks", "FNF", "FC", "KMS", "CS", "CR", "DataHub", "EDAS", "CMS", "RocketMQ", "HBR", "ApiGateway", "NLP", "SLS", "NAS", "OSS", "MNS", "ARMS", "SAE", "CloudStorageGateway", "PrivateZone", "DCDN", "VS", "AHAS", "BrainIndustrial", "OTS", "PrivateLink"],
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
            reg: /^([0-9a-f]{8}[-][0-9a-f]{4}[-][0-9a-f]{4}[-][0-9a-f]{4}[-][0-9a-f]{12})|(acs[:]ros[:][*][:]\d+[:]template\/[0-9a-f]{8}[-][0-9a-f]{4}[-][0-9a-f]{4}[-][0-9a-f]{4}[-][0-9a-f]{12})$/
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
    }
    get rosProperties() {
        return {
            handle: this.handle,
            timeout: this.timeout,
            count: this.count,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9zLmdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJvcy5nZW5lcmF0ZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHlEQUF5RDs7O0FBRXpELDhDQUE4QztBQStDOUM7Ozs7OztHQU1HO0FBQ0gsU0FBUyxrQ0FBa0MsQ0FBQyxVQUFlO0lBQ3ZELElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQUUsT0FBTyxHQUFHLENBQUMsa0JBQWtCLENBQUM7S0FBRTtJQUNuRSxNQUFNLE1BQU0sR0FBRyxJQUFJLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUNwRyxJQUFHLFVBQVUsQ0FBQyxXQUFXLElBQUksQ0FBQyxPQUFPLFVBQVUsQ0FBQyxXQUFXLENBQUMsS0FBSyxRQUFRLEVBQUU7UUFDdkUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1lBQzdFLElBQUksRUFBRSxVQUFVLENBQUMsV0FBVztZQUM1QixhQUFhLEVBQUUsQ0FBQyxLQUFLLEVBQUMsTUFBTSxFQUFDLFlBQVksRUFBQyxjQUFjLEVBQUMsS0FBSyxFQUFDLFFBQVEsRUFBQyxXQUFXLEVBQUMsS0FBSyxFQUFDLElBQUksRUFBQyxLQUFLLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxTQUFTLEVBQUMsTUFBTSxFQUFDLEtBQUssRUFBQyxVQUFVLEVBQUMsS0FBSyxFQUFDLFlBQVksRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLE1BQU0sRUFBQyxLQUFLLEVBQUMs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QWdDLENBQUMsQ0FBQztJQUNsRyxDQUFDOztBQXpGTCx3REEwRkM7QUF6Rkc7O0dBRUc7QUFDb0IsNkNBQXNCLEdBQUcsa0NBQWtDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cblxuaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6Uk9TOjpBdXRvRW5hYmxlU2VydmljZWBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NBdXRvRW5hYmxlU2VydmljZVByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzZXJ2aWNlTmFtZTogV2hpY2ggc2VydmljZSB0byBlbmFibGUuIFZhbGlkIHZhbHVlczpcbiAgICAgKiBBSEFTOiBBcHBsaWNhdGlvbiBIaWdoIEF2YWlsYWJpbGl0eSBTZXJ2aWNlXG4gICAgICogQVJNUzogUmVhbHRpbWUgTW9uaXRvcmluZyBTZXJ2aWNlXG4gICAgICogQXBpR2F0ZXdheTogQVBJIEdhdGV3YXlcbiAgICAgKiBCYXRjaENvbXB1dGU6IEJhdGNoIENvbXB1dGVcbiAgICAgKiBCcmFpbkluZHVzdHJpYWw6IEJyYWluIEluZHVzdHJpYWxcbiAgICAgKiBDbG91ZFN0b3JhZ2VHYXRld2F5OiBDbG91ZCBTdG9yYWdlIEdhdGV3YXlcbiAgICAgKiBDTVM6IENsb3VkIE1vbml0b3IgU2VydmljZVxuICAgICAqIENSOiBDb250YWluZXIgUmVnaXN0cnlcbiAgICAgKiBDUzogQ29udGFpbmVyIFNlcnZpY2VcbiAgICAgKiBEYXRhSHViOiBEYXRhIEh1YlxuICAgICAqIERhdGFXb3JrczogRGF0YVdvcmtzXG4gICAgICogRENETjogRHluYW1pYyBSb3V0ZSBmb3IgQ0ROXG4gICAgICogRURBUzogRW50ZXJwcmlzZSBEaXN0cmlidXRlZCBBcHBsaWNhdGlvbiBTZXJ2aWNlXG4gICAgICogRU1BUzogRW50ZXJwcmlzZSBNb2JpbGUgQXBwbGljYXRpb24gU3R1ZGlvXG4gICAgICogRkM6IEZ1bmN0aW9uIENvbXB1dGVcbiAgICAgKiBGTkY6IFNlcnZlcmxlc3MgV29ya2Zsb3dcbiAgICAgKiBNYXhDb21wdXRlOiBNYXhDb21wdXRlXG4gICAgICogTkFTOiBOZXR3b3JrIEF0dGFjaGVkIFN0b3JhZ2VcbiAgICAgKiBNTlM6IE1lc3NhZ2UgU2VydmljZSAoTU5TKVxuICAgICAqIEhCUjogSHlicmlkIEJhY2t1cCBSZWNvdmVyeVxuICAgICAqIElNTTogSW50ZWxsaWdlbnQgTWVkaWEgTWFuYWdlbWVudFxuICAgICAqIElPVDogSW9UIFBsYXRmb3JtXG4gICAgICogS01TOiBLZXkgTWFuYWdlbWVudCBTZXJ2aWNlXG4gICAgICogTkxQOiBOYXR1cmFsIExhbmd1YWdlIFByb2Nlc3NpbmdcbiAgICAgKiBPU1M6IE9iamVjdCBTdG9yYWdlIFNlcnZpY2VcbiAgICAgKiBPVFM6IFRhYmxlIFN0b3JlXG4gICAgICogUHJpdmF0ZUxpbms6IFByaXZhdGUgTGlua1xuICAgICAqIFByaXZhdGVab25lOiBQcml2YXRlIFpvbmVcbiAgICAgKiBSb2NrZXRNUTogUm9ja2V0TVFcbiAgICAgKiBTQUU6IFNlcnZlcmxlc3MgQXBwIEVuZ2luZVxuICAgICAqIFNMUzogTG9nIFNlcnZpY2VcbiAgICAgKiBWUzogVmlkZW8gU3VydmVpbGxhbmNlXG4gICAgICogWHRyYWNlOiBUcmFjaW5nIEFubGF5c2lzXG4gICAgICpcbiAgICAgKi9cbiAgICByZWFkb25seSBzZXJ2aWNlTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc0F1dG9FbmFibGVTZXJ2aWNlUHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0F1dG9FbmFibGVTZXJ2aWNlUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zQXV0b0VuYWJsZVNlcnZpY2VQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NlcnZpY2VOYW1lJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnNlcnZpY2VOYW1lKSk7XG4gICAgaWYocHJvcGVydGllcy5zZXJ2aWNlTmFtZSAmJiAodHlwZW9mIHByb3BlcnRpZXMuc2VydmljZU5hbWUpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NlcnZpY2VOYW1lJywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuc2VydmljZU5hbWUsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiSU9UXCIsXCJFTUFTXCIsXCJNYXhDb21wdXRlXCIsXCJCYXRjaENvbXB1dGVcIixcIklNTVwiLFwiWHRyYWNlXCIsXCJEYXRhV29ya3NcIixcIkZORlwiLFwiRkNcIixcIktNU1wiLFwiQ1NcIixcIkNSXCIsXCJEYXRhSHViXCIsXCJFREFTXCIsXCJDTVNcIixcIlJvY2tldE1RXCIsXCJIQlJcIixcIkFwaUdhdGV3YXlcIixcIk5MUFwiLFwiU0xTXCIsXCJOQVNcIixcIk9TU1wiLFwiTU5TXCIsXCJBUk1TXCIsXCJTQUVcIixcIkNsb3VkU3RvcmFnZUdhdGV3YXlcIixcIlByaXZhdGVab25lXCIsXCJEQ0ROXCIsXCJWU1wiLFwiQUhBU1wiLFwiQnJhaW5JbmR1c3RyaWFsXCIsXCJPVFNcIixcIlByaXZhdGVMaW5rXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc2VydmljZU5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuc2VydmljZU5hbWUpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zQXV0b0VuYWJsZVNlcnZpY2VQcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6Uk9TOjpBdXRvRW5hYmxlU2VydmljZWAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zQXV0b0VuYWJsZVNlcnZpY2VQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6Uk9TOjpBdXRvRW5hYmxlU2VydmljZWAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NBdXRvRW5hYmxlU2VydmljZVByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zQXV0b0VuYWJsZVNlcnZpY2VQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBTZXJ2aWNlTmFtZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zZXJ2aWNlTmFtZSksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBBIFJPUyB0ZW1wbGF0ZSB0eXBlOiAgYEFMSVlVTjo6Uk9TOjpBdXRvRW5hYmxlU2VydmljZWBcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc0F1dG9FbmFibGVTZXJ2aWNlIGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiQUxJWVVOOjpST1M6OkF1dG9FbmFibGVTZXJ2aWNlXCI7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHNlcnZpY2VOYW1lOiBXaGljaCBzZXJ2aWNlIHRvIGVuYWJsZS4gVmFsaWQgdmFsdWVzOlxuICAgICAqIEFIQVM6IEFwcGxpY2F0aW9uIEhpZ2ggQXZhaWxhYmlsaXR5IFNlcnZpY2VcbiAgICAgKiBBUk1TOiBSZWFsdGltZSBNb25pdG9yaW5nIFNlcnZpY2VcbiAgICAgKiBBcGlHYXRld2F5OiBBUEkgR2F0ZXdheVxuICAgICAqIEJhdGNoQ29tcHV0ZTogQmF0Y2ggQ29tcHV0ZVxuICAgICAqIEJyYWluSW5kdXN0cmlhbDogQnJhaW4gSW5kdXN0cmlhbFxuICAgICAqIENsb3VkU3RvcmFnZUdhdGV3YXk6IENsb3VkIFN0b3JhZ2UgR2F0ZXdheVxuICAgICAqIENNUzogQ2xvdWQgTW9uaXRvciBTZXJ2aWNlXG4gICAgICogQ1I6IENvbnRhaW5lciBSZWdpc3RyeVxuICAgICAqIENTOiBDb250YWluZXIgU2VydmljZVxuICAgICAqIERhdGFIdWI6IERhdGEgSHViXG4gICAgICogRGF0YVdvcmtzOiBEYXRhV29ya3NcbiAgICAgKiBEQ0ROOiBEeW5hbWljIFJvdXRlIGZvciBDRE5cbiAgICAgKiBFREFTOiBFbnRlcnByaXNlIERpc3RyaWJ1dGVkIEFwcGxpY2F0aW9uIFNlcnZpY2VcbiAgICAgKiBFTUFTOiBFbnRlcnByaXNlIE1vYmlsZSBBcHBsaWNhdGlvbiBTdHVkaW9cbiAgICAgKiBGQzogRnVuY3Rpb24gQ29tcHV0ZVxuICAgICAqIEZORjogU2VydmVybGVzcyBXb3JrZmxvd1xuICAgICAqIE1heENvbXB1dGU6IE1heENvbXB1dGVcbiAgICAgKiBOQVM6IE5ldHdvcmsgQXR0YWNoZWQgU3RvcmFnZVxuICAgICAqIE1OUzogTWVzc2FnZSBTZXJ2aWNlIChNTlMpXG4gICAgICogSEJSOiBIeWJyaWQgQmFja3VwIFJlY292ZXJ5XG4gICAgICogSU1NOiBJbnRlbGxpZ2VudCBNZWRpYSBNYW5hZ2VtZW50XG4gICAgICogSU9UOiBJb1QgUGxhdGZvcm1cbiAgICAgKiBLTVM6IEtleSBNYW5hZ2VtZW50IFNlcnZpY2VcbiAgICAgKiBOTFA6IE5hdHVyYWwgTGFuZ3VhZ2UgUHJvY2Vzc2luZ1xuICAgICAqIE9TUzogT2JqZWN0IFN0b3JhZ2UgU2VydmljZVxuICAgICAqIE9UUzogVGFibGUgU3RvcmVcbiAgICAgKiBQcml2YXRlTGluazogUHJpdmF0ZSBMaW5rXG4gICAgICogUHJpdmF0ZVpvbmU6IFByaXZhdGUgWm9uZVxuICAgICAqIFJvY2tldE1ROiBSb2NrZXRNUVxuICAgICAqIFNBRTogU2VydmVybGVzcyBBcHAgRW5naW5lXG4gICAgICogU0xTOiBMb2cgU2VydmljZVxuICAgICAqIFZTOiBWaWRlbyBTdXJ2ZWlsbGFuY2VcbiAgICAgKiBYdHJhY2U6IFRyYWNpbmcgQW5sYXlzaXNcbiAgICAgKlxuICAgICAqL1xuICAgIHB1YmxpYyBzZXJ2aWNlTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46OlJPUzo6QXV0b0VuYWJsZVNlcnZpY2VgLlxuICAgICAqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc0F1dG9FbmFibGVTZXJ2aWNlUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NBdXRvRW5hYmxlU2VydmljZS5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcblxuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMuc2VydmljZU5hbWUgPSBwcm9wcy5zZXJ2aWNlTmFtZTtcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzZXJ2aWNlTmFtZTogdGhpcy5zZXJ2aWNlTmFtZSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zQXV0b0VuYWJsZVNlcnZpY2VQcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OlJPUzo6Q3VzdG9tUmVzb3VyY2VgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zQ3VzdG9tUmVzb3VyY2VQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc2VydmljZVRva2VuOiBUaGUgc2VydmljZSB0b2tlbiB0aGF0IHdhcyBnaXZlbiB0byB0aGUgdGVtcGxhdGUgZGV2ZWxvcGVyIGJ5IHRoZSBzZXJ2aWNlIHByb3ZpZGVyIHRvIGFjY2VzcyB0aGUgc2VydmljZS5cbiAgICAgKiBBbGxvd2VkIHZhbHVlczpcbiAgICAgKiAtIEZ1bmN0aW9uIENvbXB1dGU6IGFjczpmYzo8cmVnaW9uX2lkPjo8YWNjb3VudF9pZD46c2VydmljZXMvPHNlcnZpY2VfbmFtZT4vZnVuY3Rpb25zLzxmdW5jdGlvbl9uYW1lPlxuICAgICAqIC0gTU5TIFF1ZXVlOiBhY3M6bW5zOjxyZWdpb25faWQ+OjxhY2NvdW50X2lkPjpxdWV1ZXMvPHF1ZXVlX25hbWU+IG9yIGFjczptbnM6PHJlZ2lvbl9pZD46PGFjY291bnRfaWQ+Oi9xdWV1ZXMvPHF1ZXVlX25hbWU+XG4gICAgICogLSBNTlMgVG9waWM6IGFjczptbnM6PHJlZ2lvbl9pZD46PGFjY291bnRfaWQ+OnRvcGljcy88dG9waWNfbmFtZT4gb3IgYWNzOm1uczo8cmVnaW9uX2lkPjo8YWNjb3VudF9pZD46L3RvcGljcy88dG9waWNfbmFtZT5cbiAgICAgKiAtIEhUVFAmSFRUUFM6IHdlYltvcHRpb25zXTo8dXJsPlxuICAgICAqICAgVHdvIG9wdGlvbnMgYXJlIHN1cHBvcnRlZDpcbiAgICAgKiAgIC0gc3luYzogc3luYyBIVFRQJkhUVFBTIHJlcXVlc3QuXG4gICAgICogICAtIGlkZW1wb3RlbnQ6IGluZGljYXRlcyB0aGF0IHRoZSBDcmVhdGUgcmVxdWVzdCBpcyBpZGVtcG90ZW50LiBVcGRhdGUgYW5kIERlbGV0ZSByZXF1ZXN0cyBzaG91bGQgYmUgYWx3YXlzIGlkZW1wb3RlbnQuXG4gICAgICogRXhhbXBsZXM6XG4gICAgICogICAtIGFjczpmYzpjbi1oYW5nemhvdToxMjM0NTY3ODk6c2VydmljZXMvdGVzdC1zZXJ2aWNlL2Z1bmN0aW9ucy90ZXN0LWZ1bmN0aW9uXG4gICAgICogICAtIGFjczptbnM6Y24taGFuZ3pob3U6MTIzNDU2Nzg5OnF1ZXVlcy90ZXN0LXF1ZXVlXG4gICAgICogICAtIGFjczptbnM6Y24taGFuZ3pob3U6MTIzNDU2Nzg5Oi9xdWV1ZXMvdGVzdC1xdWV1ZVxuICAgICAqICAgLSBhY3M6bW5zOmNuLWhhbmd6aG91OjEyMzQ1Njc4OTp0b3BpY3MvdGVzdC10b3BpY1xuICAgICAqICAgLSBhY3M6bW5zOmNuLWhhbmd6aG91OjEyMzQ1Njc4OTovdG9waWNzL3Rlc3QtdG9waWNcbiAgICAgKiAgIC0gd2ViOmh0dHBzOi8vYWJjLmNvbVxuICAgICAqICAgLSB3ZWJbc3luY106aHR0cDovL2FiYy5jb21cbiAgICAgKiAgIC0gd2ViW3N5bmMsaWRlbXBvdGVudF06aHR0cHM6Ly9hYmMuY29tXG4gICAgICovXG4gICAgcmVhZG9ubHkgc2VydmljZVRva2VuOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdGltZW91dDogVGltZW91dCBzZWNvbmRzIGJlZm9yZSBzZXJ2aWNlIHByb3ZpZGVyIHJlc3BvbnNlcy5cbiAgICAgKiBJdCB0YWtlcyBlZmZlY3RzIG9ubHkgaWYgdGhlIHR5cGUgb2YgU2VydmljZVRva2VuIGlzIEZ1bmN0aW9uIENvbXB1dGUsIE1OUyBRdWV1ZSwgTU5TIFRvcGljIG9yIGFzeW5jIEhUVFAmSFRUUFMgcmVxdWVzdC5cbiAgICAgKiBUaW1lb3V0IHNlY29uZHMgYXJlIGFsd2F5cyAxMCBmb3Igc3luYyBIVFRQJkhUVFBTIHJlcXVlc3QuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdGltZW91dDogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGh0dHBDb25maWc6IENvbmZpZyBmb3IgSFRUUCZIVFRQUyBzZXJ2aWNlIHByb3ZpZGVyLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGh0dHBDb25maWc/OiBSb3NDdXN0b21SZXNvdXJjZS5IdHRwQ29uZmlnUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcGFyYW1ldGVyczogUGFyYW1ldGVycyB0byBiZSBwYXNzZWQgdG8gc2VydmljZSBwcm92aWRlci5cbiAgICAgKi9cbiAgICByZWFkb25seSBwYXJhbWV0ZXJzPzogeyBba2V5OiBzdHJpbmddOiAoYW55IHwgcm9zLklSZXNvbHZhYmxlKSB9IHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc0N1c3RvbVJlc291cmNlUHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0N1c3RvbVJlc291cmNlUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zQ3VzdG9tUmVzb3VyY2VQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NlcnZpY2VUb2tlbicsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5zZXJ2aWNlVG9rZW4pKTtcbiAgICBpZihwcm9wZXJ0aWVzLnNlcnZpY2VUb2tlbiAmJiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzLnNlcnZpY2VUb2tlbikgfHwgKHR5cGVvZiBwcm9wZXJ0aWVzLnNlcnZpY2VUb2tlbikgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NlcnZpY2VUb2tlbicsIHJvcy52YWxpZGF0ZUxlbmd0aCkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5zZXJ2aWNlVG9rZW4ubGVuZ3RoLFxuICAgICAgICAgICAgbWluOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBtYXg6IDUxMixcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc2VydmljZVRva2VuJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnNlcnZpY2VUb2tlbikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncGFyYW1ldGVycycsIHJvcy5oYXNoVmFsaWRhdG9yKHJvcy52YWxpZGF0ZUFueSkpKHByb3BlcnRpZXMucGFyYW1ldGVycykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGltZW91dCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy50aW1lb3V0KSk7XG4gICAgaWYocHJvcGVydGllcy50aW1lb3V0ICYmICh0eXBlb2YgcHJvcGVydGllcy50aW1lb3V0KSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0aW1lb3V0Jywgcm9zLnZhbGlkYXRlUmFuZ2UpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMudGltZW91dCxcbiAgICAgICAgICAgIG1pbjogMSxcbiAgICAgICAgICAgIG1heDogNDMyMDAsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RpbWVvdXQnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMudGltZW91dCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaHR0cENvbmZpZycsIFJvc0N1c3RvbVJlc291cmNlX0h0dHBDb25maWdQcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy5odHRwQ29uZmlnKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc0N1c3RvbVJlc291cmNlUHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlJPUzo6Q3VzdG9tUmVzb3VyY2VgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0N1c3RvbVJlc291cmNlUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlJPUzo6Q3VzdG9tUmVzb3VyY2VgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zQ3VzdG9tUmVzb3VyY2VQcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc0N1c3RvbVJlc291cmNlUHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgU2VydmljZVRva2VuOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnNlcnZpY2VUb2tlbiksXG4gICAgICBUaW1lb3V0OiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnRpbWVvdXQpLFxuICAgICAgSHR0cENvbmZpZzogcm9zQ3VzdG9tUmVzb3VyY2VIdHRwQ29uZmlnUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaHR0cENvbmZpZyksXG4gICAgICBQYXJhbWV0ZXJzOiByb3MuaGFzaE1hcHBlcihyb3Mub2JqZWN0VG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5wYXJhbWV0ZXJzKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIEEgUk9TIHRlbXBsYXRlIHR5cGU6ICBgQUxJWVVOOjpST1M6OkN1c3RvbVJlc291cmNlYFxuICovXG5leHBvcnQgY2xhc3MgUm9zQ3VzdG9tUmVzb3VyY2UgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46OlJPUzo6Q3VzdG9tUmVzb3VyY2VcIjtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBPdXRwdXRzOiBPdXRwdXQgZGF0YSByZWNlaXZlZCBmcm9tIHNlcnZpY2UgcHJvdmlkZXIuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJPdXRwdXRzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzZXJ2aWNlVG9rZW46IFRoZSBzZXJ2aWNlIHRva2VuIHRoYXQgd2FzIGdpdmVuIHRvIHRoZSB0ZW1wbGF0ZSBkZXZlbG9wZXIgYnkgdGhlIHNlcnZpY2UgcHJvdmlkZXIgdG8gYWNjZXNzIHRoZSBzZXJ2aWNlLlxuICAgICAqIEFsbG93ZWQgdmFsdWVzOlxuICAgICAqIC0gRnVuY3Rpb24gQ29tcHV0ZTogYWNzOmZjOjxyZWdpb25faWQ+OjxhY2NvdW50X2lkPjpzZXJ2aWNlcy88c2VydmljZV9uYW1lPi9mdW5jdGlvbnMvPGZ1bmN0aW9uX25hbWU+XG4gICAgICogLSBNTlMgUXVldWU6IGFjczptbnM6PHJlZ2lvbl9pZD46PGFjY291bnRfaWQ+OnF1ZXVlcy88cXVldWVfbmFtZT4gb3IgYWNzOm1uczo8cmVnaW9uX2lkPjo8YWNjb3VudF9pZD46L3F1ZXVlcy88cXVldWVfbmFtZT5cbiAgICAgKiAtIE1OUyBUb3BpYzogYWNzOm1uczo8cmVnaW9uX2lkPjo8YWNjb3VudF9pZD46dG9waWNzLzx0b3BpY19uYW1lPiBvciBhY3M6bW5zOjxyZWdpb25faWQ+OjxhY2NvdW50X2lkPjovdG9waWNzLzx0b3BpY19uYW1lPlxuICAgICAqIC0gSFRUUCZIVFRQUzogd2ViW29wdGlvbnNdOjx1cmw+XG4gICAgICogICBUd28gb3B0aW9ucyBhcmUgc3VwcG9ydGVkOlxuICAgICAqICAgLSBzeW5jOiBzeW5jIEhUVFAmSFRUUFMgcmVxdWVzdC5cbiAgICAgKiAgIC0gaWRlbXBvdGVudDogaW5kaWNhdGVzIHRoYXQgdGhlIENyZWF0ZSByZXF1ZXN0IGlzIGlkZW1wb3RlbnQuIFVwZGF0ZSBhbmQgRGVsZXRlIHJlcXVlc3RzIHNob3VsZCBiZSBhbHdheXMgaWRlbXBvdGVudC5cbiAgICAgKiBFeGFtcGxlczpcbiAgICAgKiAgIC0gYWNzOmZjOmNuLWhhbmd6aG91OjEyMzQ1Njc4OTpzZXJ2aWNlcy90ZXN0LXNlcnZpY2UvZnVuY3Rpb25zL3Rlc3QtZnVuY3Rpb25cbiAgICAgKiAgIC0gYWNzOm1uczpjbi1oYW5nemhvdToxMjM0NTY3ODk6cXVldWVzL3Rlc3QtcXVldWVcbiAgICAgKiAgIC0gYWNzOm1uczpjbi1oYW5nemhvdToxMjM0NTY3ODk6L3F1ZXVlcy90ZXN0LXF1ZXVlXG4gICAgICogICAtIGFjczptbnM6Y24taGFuZ3pob3U6MTIzNDU2Nzg5OnRvcGljcy90ZXN0LXRvcGljXG4gICAgICogICAtIGFjczptbnM6Y24taGFuZ3pob3U6MTIzNDU2Nzg5Oi90b3BpY3MvdGVzdC10b3BpY1xuICAgICAqICAgLSB3ZWI6aHR0cHM6Ly9hYmMuY29tXG4gICAgICogICAtIHdlYltzeW5jXTpodHRwOi8vYWJjLmNvbVxuICAgICAqICAgLSB3ZWJbc3luYyxpZGVtcG90ZW50XTpodHRwczovL2FiYy5jb21cbiAgICAgKi9cbiAgICBwdWJsaWMgc2VydmljZVRva2VuOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdGltZW91dDogVGltZW91dCBzZWNvbmRzIGJlZm9yZSBzZXJ2aWNlIHByb3ZpZGVyIHJlc3BvbnNlcy5cbiAgICAgKiBJdCB0YWtlcyBlZmZlY3RzIG9ubHkgaWYgdGhlIHR5cGUgb2YgU2VydmljZVRva2VuIGlzIEZ1bmN0aW9uIENvbXB1dGUsIE1OUyBRdWV1ZSwgTU5TIFRvcGljIG9yIGFzeW5jIEhUVFAmSFRUUFMgcmVxdWVzdC5cbiAgICAgKiBUaW1lb3V0IHNlY29uZHMgYXJlIGFsd2F5cyAxMCBmb3Igc3luYyBIVFRQJkhUVFBTIHJlcXVlc3QuXG4gICAgICovXG4gICAgcHVibGljIHRpbWVvdXQ6IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBodHRwQ29uZmlnOiBDb25maWcgZm9yIEhUVFAmSFRUUFMgc2VydmljZSBwcm92aWRlci5cbiAgICAgKi9cbiAgICBwdWJsaWMgaHR0cENvbmZpZzogUm9zQ3VzdG9tUmVzb3VyY2UuSHR0cENvbmZpZ1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHBhcmFtZXRlcnM6IFBhcmFtZXRlcnMgdG8gYmUgcGFzc2VkIHRvIHNlcnZpY2UgcHJvdmlkZXIuXG4gICAgICovXG4gICAgcHVibGljIHBhcmFtZXRlcnM6IHsgW2tleTogc3RyaW5nXTogKGFueSB8IHJvcy5JUmVzb2x2YWJsZSkgfSB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpST1M6OkN1c3RvbVJlc291cmNlYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NDdXN0b21SZXNvdXJjZVByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zQ3VzdG9tUmVzb3VyY2UuUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG4gICAgICAgIHRoaXMuYXR0ck91dHB1dHMgPSB0aGlzLmdldEF0dCgnT3V0cHV0cycpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5zZXJ2aWNlVG9rZW4gPSBwcm9wcy5zZXJ2aWNlVG9rZW47XG4gICAgICAgIHRoaXMudGltZW91dCA9IHByb3BzLnRpbWVvdXQ7XG4gICAgICAgIHRoaXMuaHR0cENvbmZpZyA9IHByb3BzLmh0dHBDb25maWc7XG4gICAgICAgIHRoaXMucGFyYW1ldGVycyA9IHByb3BzLnBhcmFtZXRlcnM7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc2VydmljZVRva2VuOiB0aGlzLnNlcnZpY2VUb2tlbixcbiAgICAgICAgICAgIHRpbWVvdXQ6IHRoaXMudGltZW91dCxcbiAgICAgICAgICAgIGh0dHBDb25maWc6IHRoaXMuaHR0cENvbmZpZyxcbiAgICAgICAgICAgIHBhcmFtZXRlcnM6IHRoaXMucGFyYW1ldGVycyxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zQ3VzdG9tUmVzb3VyY2VQcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NDdXN0b21SZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgSHR0cENvbmZpZ1Byb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBzaWduS2V5OiBJZiBTaWduS2V5IGlzIHNwZWNpZmllZCwgU2lnbmF0dXJlIHdpbGwgYmUgYWRkZWQgdG8gcmVxdWVzdCBkYXRhLlxuICAgICAqICAgXCJTaWduYXR1cmVcIjoge1xuICAgICAqICAgICAgXCJEYXRlXCI6IFwiMjAyMS0wMy0xMVQxMzozMjowMlpcIixcbiAgICAgKiAgICAgIFwiVmFsdWVcIjogXCIxMDg0MTQ5ODQ5OWJhMWM0YjA3NTQ3YTU0MmMzYTg3MTgyMzVmOTgzXCJcbiAgICAgKiAgIH1cbiAgICAgKiBEYXRlOiB0aGUgVVRDIHRpbWUgdG8gc2VuZCByZXF1ZXN0LCB3aGljaCBmb2xsb3dzIHRoZSBJU08gODYwMSBzdGFuZGFyZCBpbiB0aGUgeXl5eS1NTS1kZFRISDptbTpzc1ogZm9ybWF0LlxuICAgICAqIFZhbHVlOiB0aGUgc2lnbmF0dXJlIHZhbHVlIGNhbGN1bGF0ZWQgZnJvbSB0aGUgYWxnb3JpdGhtIGJlbG93LlxuICAgICAqIFxuICAgICAqIFRoZSBzaWduYXR1cmUgYWxnb3JpdGhtOlxuICAgICAqIDEuQ29uY2F0ZW5hdGluZyBzaWduYXR1cmUgc3RyaW5nOlBPU1RcbiAgICAgKiBcXG5cbiAgICAgKiA8Y29udGVudCB0eXBlOiBpZiBDb250ZW50VHlwZSBpcyBzcGVjaWZpZWQsIHVzZSBpdCwgZWxzZSB1c2UgYXBwbGljYXRpb24vanNvbi4+XG4gICAgICogXFxuXG4gICAgICogPG1kNSBvZiByZXF1ZXN0IGRhdGE6IHdpdGhvdXQgU2lnbmF0dXJlLCBqc29uIGZvcm1hdCwgdXRmLTggZW5jb2RlZCwgc29ydCBrZXlzLCBlbnN1cmUgYXNjaWkuPlxuICAgICAqIFxcblxuICAgICAqIDxEYXRlIGluIFNpZ25hdHVyZT5cbiAgICAgKiBcXG5cbiAgICAgKiA8aGVhZGVyIDEga2V5OiBzb3J0IGluIGFscGhhYmV0aWNhbCBvcmRlcj46PGhlYWRlciAxIHZhbHVlPlxuICAgICAqIFxcblxuICAgICAqIC4uLjxoZWFkZXIgTiBrZXk+OjxoZWFkZXIgMiB2YWx1ZT5cbiAgICAgKiBcXG5cbiAgICAgKiA8dXJsIGluIFNlcnZpY2VUb2tlbjogc3VjaCBhcyBodHRwczovL2FiYy5jb20+XG4gICAgICogMi5jYWxjdWxhdGUgc2lnbmF0dXJlIHdpdGggc2hhMS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHNpZ25LZXk/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgY29udGVudFR5cGU6IENvbnRlbnQgdHlwZSBvZiByZXF1ZXN0IGJvZHkuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBjb250ZW50VHlwZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBoZWFkZXJzOiBIZWFkZXJzIHRvIGJlIHBhc3NlZC5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGhlYWRlcnM/OiB7IFtrZXk6IHN0cmluZ106IChhbnkgfCByb3MuSVJlc29sdmFibGUpIH0gfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBIdHRwQ29uZmlnUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYEh0dHBDb25maWdQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NDdXN0b21SZXNvdXJjZV9IdHRwQ29uZmlnUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgaWYocHJvcGVydGllcy5zaWduS2V5ICYmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXMuc2lnbktleSkgfHwgKHR5cGVvZiBwcm9wZXJ0aWVzLnNpZ25LZXkpID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzaWduS2V5Jywgcm9zLnZhbGlkYXRlTGVuZ3RoKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnNpZ25LZXkubGVuZ3RoLFxuICAgICAgICAgICAgbWluOiAxLFxuICAgICAgICAgICAgbWF4OiAxMjgsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NpZ25LZXknLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuc2lnbktleSkpO1xuICAgIGlmKHByb3BlcnRpZXMuY29udGVudFR5cGUgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLmNvbnRlbnRUeXBlKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjb250ZW50VHlwZScsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmNvbnRlbnRUeXBlLFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFtcImFwcGxpY2F0aW9uL2pzb25cIixcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NvbnRlbnRUeXBlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmNvbnRlbnRUeXBlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdoZWFkZXJzJywgcm9zLmhhc2hWYWxpZGF0b3Iocm9zLnZhbGlkYXRlQW55KSkocHJvcGVydGllcy5oZWFkZXJzKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIkh0dHBDb25maWdQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6Uk9TOjpDdXN0b21SZXNvdXJjZS5IdHRwQ29uZmlnYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBIdHRwQ29uZmlnUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlJPUzo6Q3VzdG9tUmVzb3VyY2UuSHR0cENvbmZpZ2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NDdXN0b21SZXNvdXJjZUh0dHBDb25maWdQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zQ3VzdG9tUmVzb3VyY2VfSHR0cENvbmZpZ1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgU2lnbktleTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zaWduS2V5KSxcbiAgICAgIENvbnRlbnRUeXBlOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmNvbnRlbnRUeXBlKSxcbiAgICAgIEhlYWRlcnM6IHJvcy5oYXNoTWFwcGVyKHJvcy5vYmplY3RUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLmhlYWRlcnMpLFxuICAgIH07XG59XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpST1M6OlN0YWNrYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc1N0YWNrUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHBhcmFtZXRlcnM6IFRoZSBzZXQgb2YgcGFyYW1ldGVycyBwYXNzZWQgdG8gdGhpcyBuZXN0ZWQgc3RhY2suXG4gICAgICovXG4gICAgcmVhZG9ubHkgcGFyYW1ldGVycz86IHsgW2tleTogc3RyaW5nXTogKGFueSB8IHJvcy5JUmVzb2x2YWJsZSkgfSB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByZXNvdXJjZUdyb3VwSWQ6IFJlc291cmNlIGdyb3VwLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJlc291cmNlR3JvdXBJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0ZW1wbGF0ZUJvZHk6IFN0cnVjdHVyZSBjb250YWluaW5nIHRoZSB0ZW1wbGF0ZSBib2R5LlxuICAgICAqIEl0IGlzIGp1c3QgdG8gZmFjaWxpdGF0ZSB0aGUgcGFzc2luZyBvZiB0ZW1wbGF0ZS4gSXQgaXMgcmF3IGNvbnRlbnQuRnVuY3Rpb25zIGluIFRlbXBsYXRlQm9keSB3aWxsIG5vdCBiZSByZXNvbHZlZCBpbiBwYXJlbnQgc3RhY2suXG4gICAgICogWW91IG11c3Qgc3BlY2lmeSBlaXRoZXIgdGhlIFRlbXBsYXRlQm9keSBvciB0aGUgVGVtcGxhdGVVUkwgcHJvcGVydHkuIElmIGJvdGggYXJlIHNwZWNpZmllZCwgVGVtcGxhdGVCb2R5IHdpbGwgYmUgdXNlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSB0ZW1wbGF0ZUJvZHk/OiB7IFtrZXk6IHN0cmluZ106IChhbnkgfCByb3MuSVJlc29sdmFibGUpIH0gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdGVtcGxhdGVJZDogVGVtcGxhdGUgSUQgb2YgdGVtcGxhdGUgY29udGFpbmluZyB0aGUgdGVtcGxhdGUgYm9keS5cbiAgICAgKi9cbiAgICByZWFkb25seSB0ZW1wbGF0ZUlkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHRlbXBsYXRlVXJsOiBMb2NhdGlvbiBvZiBmaWxlIGNvbnRhaW5pbmcgdGhlIHRlbXBsYXRlIGJvZHkuIFRoZSBVUkwgbXVzdCBwb2ludCB0byBhIHRlbXBsYXRlIChtYXggc2l6ZTogNTI0Mjg4IGJ5dGVzKSB0aGF0IGlzIGxvY2F0ZWQgaW4gYSBodHRwIHdlYiBzZXJ2ZXIoaHR0cCwgaHR0cHMpLCBvciBhbiBBbGl5dW4gT1NTIGJ1Y2tldChTdWNoIGFzIG9zczovL3Jvcy10ZW1wbGF0ZS9kZW1vP1JlZ2lvbklkPWNuLWhhbmd6aG91LCBvc3M6Ly9yb3MtdGVtcGxhdGUvZGVtby4gUmVnaW9uSWQgaXMgZGVmYXVsdCB0byB0aGUgdmFsdWUgb2YgUmVnaW9uSWQgUGFyYW1ldGVyIG9mIHRoZSByZXF1ZXN0LikuXG4gICAgICogWW91IG11c3Qgc3BlY2lmeSBlaXRoZXIgdGhlIFRlbXBsYXRlQm9keSBvciB0aGUgVGVtcGxhdGVVUkwgcHJvcGVydHkuIElmIGJvdGggYXJlIHNwZWNpZmllZCwgVGVtcGxhdGVCb2R5IHdpbGwgYmUgdXNlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSB0ZW1wbGF0ZVVybD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0ZW1wbGF0ZVZlcnNpb246IFRlbXBsYXRlIHZlcnNpb24gb2YgdGVtcGxhdGUgY29udGFpbmluZyB0aGUgdGVtcGxhdGUgYm9keS5cbiAgICAgKi9cbiAgICByZWFkb25seSB0ZW1wbGF0ZVZlcnNpb24/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdGltZW91dE1pbnM6IFRoZSBsZW5ndGggb2YgdGltZSwgaW4gbWludXRlcywgdG8gd2FpdCBmb3IgdGhlIG5lc3RlZCBzdGFjayBjcmVhdGlvbiBvciB1cGRhdGUuIERlZmF1bHQgdG8gNjAgbWludXRlcy5cbiAgICAgKi9cbiAgICByZWFkb25seSB0aW1lb3V0TWlucz86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NTdGFja1Byb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NTdGFja1Byb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc1N0YWNrUHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgaWYocHJvcGVydGllcy50ZW1wbGF0ZVVybCAmJiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzLnRlbXBsYXRlVXJsKSB8fCAodHlwZW9mIHByb3BlcnRpZXMudGVtcGxhdGVVcmwpID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0ZW1wbGF0ZVVybCcsIHJvcy52YWxpZGF0ZUxlbmd0aCkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy50ZW1wbGF0ZVVybC5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIG1heDogMTAyNCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGVtcGxhdGVVcmwnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMudGVtcGxhdGVVcmwpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3BhcmFtZXRlcnMnLCByb3MuaGFzaFZhbGlkYXRvcihyb3MudmFsaWRhdGVBbnkpKShwcm9wZXJ0aWVzLnBhcmFtZXRlcnMpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3Jlc291cmNlR3JvdXBJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5yZXNvdXJjZUdyb3VwSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RpbWVvdXRNaW5zJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLnRpbWVvdXRNaW5zKSk7XG4gICAgaWYocHJvcGVydGllcy50ZW1wbGF0ZVZlcnNpb24gJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLnRlbXBsYXRlVmVyc2lvbikgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGVtcGxhdGVWZXJzaW9uJywgcm9zLnZhbGlkYXRlQWxsb3dlZFBhdHRlcm4pKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnRlbXBsYXRlVmVyc2lvbixcbiAgICAgICAgICByZWc6IC9edigoWzEtOV0pfChbMS05XVswLTldKXwoWzEtOV1bMC05XVswLTldKSkkL1xuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGVtcGxhdGVWZXJzaW9uJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnRlbXBsYXRlVmVyc2lvbikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGVtcGxhdGVCb2R5Jywgcm9zLmhhc2hWYWxpZGF0b3Iocm9zLnZhbGlkYXRlQW55KSkocHJvcGVydGllcy50ZW1wbGF0ZUJvZHkpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnRlbXBsYXRlSWQgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLnRlbXBsYXRlSWQpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RlbXBsYXRlSWQnLCByb3MudmFsaWRhdGVBbGxvd2VkUGF0dGVybikoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMudGVtcGxhdGVJZCxcbiAgICAgICAgICByZWc6IC9eKFswLTlhLWZdezh9Wy1dWzAtOWEtZl17NH1bLV1bMC05YS1mXXs0fVstXVswLTlhLWZdezR9Wy1dWzAtOWEtZl17MTJ9KXwoYWNzWzpdcm9zWzpdWypdWzpdXFxkK1s6XXRlbXBsYXRlXFwvWzAtOWEtZl17OH1bLV1bMC05YS1mXXs0fVstXVswLTlhLWZdezR9Wy1dWzAtOWEtZl17NH1bLV1bMC05YS1mXXsxMn0pJC9cbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RlbXBsYXRlSWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMudGVtcGxhdGVJZCkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NTdGFja1Byb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpST1M6OlN0YWNrYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NTdGFja1Byb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpST1M6OlN0YWNrYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc1N0YWNrUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NTdGFja1Byb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIFBhcmFtZXRlcnM6IHJvcy5oYXNoTWFwcGVyKHJvcy5vYmplY3RUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLnBhcmFtZXRlcnMpLFxuICAgICAgUmVzb3VyY2VHcm91cElkOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnJlc291cmNlR3JvdXBJZCksXG4gICAgICBUZW1wbGF0ZUJvZHk6IHJvcy5oYXNoTWFwcGVyKHJvcy5vYmplY3RUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLnRlbXBsYXRlQm9keSksXG4gICAgICBUZW1wbGF0ZUlkOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnRlbXBsYXRlSWQpLFxuICAgICAgVGVtcGxhdGVVUkw6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudGVtcGxhdGVVcmwpLFxuICAgICAgVGVtcGxhdGVWZXJzaW9uOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnRlbXBsYXRlVmVyc2lvbiksXG4gICAgICBUaW1lb3V0TWluczogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy50aW1lb3V0TWlucyksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBBIFJPUyB0ZW1wbGF0ZSB0eXBlOiAgYEFMSVlVTjo6Uk9TOjpTdGFja2BcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc1N0YWNrIGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiQUxJWVVOOjpST1M6OlN0YWNrXCI7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHBhcmFtZXRlcnM6IFRoZSBzZXQgb2YgcGFyYW1ldGVycyBwYXNzZWQgdG8gdGhpcyBuZXN0ZWQgc3RhY2suXG4gICAgICovXG4gICAgcHVibGljIHBhcmFtZXRlcnM6IHsgW2tleTogc3RyaW5nXTogKGFueSB8IHJvcy5JUmVzb2x2YWJsZSkgfSB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByZXNvdXJjZUdyb3VwSWQ6IFJlc291cmNlIGdyb3VwLlxuICAgICAqL1xuICAgIHB1YmxpYyByZXNvdXJjZUdyb3VwSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0ZW1wbGF0ZUJvZHk6IFN0cnVjdHVyZSBjb250YWluaW5nIHRoZSB0ZW1wbGF0ZSBib2R5LlxuICAgICAqIEl0IGlzIGp1c3QgdG8gZmFjaWxpdGF0ZSB0aGUgcGFzc2luZyBvZiB0ZW1wbGF0ZS4gSXQgaXMgcmF3IGNvbnRlbnQuRnVuY3Rpb25zIGluIFRlbXBsYXRlQm9keSB3aWxsIG5vdCBiZSByZXNvbHZlZCBpbiBwYXJlbnQgc3RhY2suXG4gICAgICogWW91IG11c3Qgc3BlY2lmeSBlaXRoZXIgdGhlIFRlbXBsYXRlQm9keSBvciB0aGUgVGVtcGxhdGVVUkwgcHJvcGVydHkuIElmIGJvdGggYXJlIHNwZWNpZmllZCwgVGVtcGxhdGVCb2R5IHdpbGwgYmUgdXNlZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgdGVtcGxhdGVCb2R5OiB7IFtrZXk6IHN0cmluZ106IChhbnkgfCByb3MuSVJlc29sdmFibGUpIH0gfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdGVtcGxhdGVJZDogVGVtcGxhdGUgSUQgb2YgdGVtcGxhdGUgY29udGFpbmluZyB0aGUgdGVtcGxhdGUgYm9keS5cbiAgICAgKi9cbiAgICBwdWJsaWMgdGVtcGxhdGVJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHRlbXBsYXRlVXJsOiBMb2NhdGlvbiBvZiBmaWxlIGNvbnRhaW5pbmcgdGhlIHRlbXBsYXRlIGJvZHkuIFRoZSBVUkwgbXVzdCBwb2ludCB0byBhIHRlbXBsYXRlIChtYXggc2l6ZTogNTI0Mjg4IGJ5dGVzKSB0aGF0IGlzIGxvY2F0ZWQgaW4gYSBodHRwIHdlYiBzZXJ2ZXIoaHR0cCwgaHR0cHMpLCBvciBhbiBBbGl5dW4gT1NTIGJ1Y2tldChTdWNoIGFzIG9zczovL3Jvcy10ZW1wbGF0ZS9kZW1vP1JlZ2lvbklkPWNuLWhhbmd6aG91LCBvc3M6Ly9yb3MtdGVtcGxhdGUvZGVtby4gUmVnaW9uSWQgaXMgZGVmYXVsdCB0byB0aGUgdmFsdWUgb2YgUmVnaW9uSWQgUGFyYW1ldGVyIG9mIHRoZSByZXF1ZXN0LikuXG4gICAgICogWW91IG11c3Qgc3BlY2lmeSBlaXRoZXIgdGhlIFRlbXBsYXRlQm9keSBvciB0aGUgVGVtcGxhdGVVUkwgcHJvcGVydHkuIElmIGJvdGggYXJlIHNwZWNpZmllZCwgVGVtcGxhdGVCb2R5IHdpbGwgYmUgdXNlZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgdGVtcGxhdGVVcmw6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0ZW1wbGF0ZVZlcnNpb246IFRlbXBsYXRlIHZlcnNpb24gb2YgdGVtcGxhdGUgY29udGFpbmluZyB0aGUgdGVtcGxhdGUgYm9keS5cbiAgICAgKi9cbiAgICBwdWJsaWMgdGVtcGxhdGVWZXJzaW9uOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdGltZW91dE1pbnM6IFRoZSBsZW5ndGggb2YgdGltZSwgaW4gbWludXRlcywgdG8gd2FpdCBmb3IgdGhlIG5lc3RlZCBzdGFjayBjcmVhdGlvbiBvciB1cGRhdGUuIERlZmF1bHQgdG8gNjAgbWludXRlcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgdGltZW91dE1pbnM6IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpST1M6OlN0YWNrYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NTdGFja1Byb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zU3RhY2suUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLnBhcmFtZXRlcnMgPSBwcm9wcy5wYXJhbWV0ZXJzO1xuICAgICAgICB0aGlzLnJlc291cmNlR3JvdXBJZCA9IHByb3BzLnJlc291cmNlR3JvdXBJZDtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZUJvZHkgPSBwcm9wcy50ZW1wbGF0ZUJvZHk7XG4gICAgICAgIHRoaXMudGVtcGxhdGVJZCA9IHByb3BzLnRlbXBsYXRlSWQ7XG4gICAgICAgIHRoaXMudGVtcGxhdGVVcmwgPSBwcm9wcy50ZW1wbGF0ZVVybDtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZVZlcnNpb24gPSBwcm9wcy50ZW1wbGF0ZVZlcnNpb247XG4gICAgICAgIHRoaXMudGltZW91dE1pbnMgPSBwcm9wcy50aW1lb3V0TWlucztcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwYXJhbWV0ZXJzOiB0aGlzLnBhcmFtZXRlcnMsXG4gICAgICAgICAgICByZXNvdXJjZUdyb3VwSWQ6IHRoaXMucmVzb3VyY2VHcm91cElkLFxuICAgICAgICAgICAgdGVtcGxhdGVCb2R5OiB0aGlzLnRlbXBsYXRlQm9keSxcbiAgICAgICAgICAgIHRlbXBsYXRlSWQ6IHRoaXMudGVtcGxhdGVJZCxcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiB0aGlzLnRlbXBsYXRlVXJsLFxuICAgICAgICAgICAgdGVtcGxhdGVWZXJzaW9uOiB0aGlzLnRlbXBsYXRlVmVyc2lvbixcbiAgICAgICAgICAgIHRpbWVvdXRNaW5zOiB0aGlzLnRpbWVvdXRNaW5zLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NTdGFja1Byb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6Uk9TOjpXYWl0Q29uZGl0aW9uYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc1dhaXRDb25kaXRpb25Qcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaGFuZGxlOiBBIHJlZmVyZW5jZSB0byB0aGUgd2FpdCBjb25kaXRpb24gaGFuZGxlIHVzZWQgdG8gc2lnbmFsIHRoaXMgd2FpdCBjb25kaXRpb24uXG4gICAgICovXG4gICAgcmVhZG9ubHkgaGFuZGxlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdGltZW91dDogVGhlIG51bWJlciBvZiBzZWNvbmRzIHRvIHdhaXQgZm9yIHRoZSBjb3JyZWN0IG51bWJlciBvZiBzaWduYWxzIHRvIGFycml2ZS5cbiAgICAgKi9cbiAgICByZWFkb25seSB0aW1lb3V0OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY291bnQ6IFRoZSBudW1iZXIgb2Ygc3VjY2VzcyBzaWduYWxzIHRoYXQgbXVzdCBiZSByZWNlaXZlZCBiZWZvcmUgdGhlIHN0YWNrIGNyZWF0aW9uIHByb2Nlc3MgY29udGludWVzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNvdW50PzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc1dhaXRDb25kaXRpb25Qcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zV2FpdENvbmRpdGlvblByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc1dhaXRDb25kaXRpb25Qcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RpbWVvdXQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMudGltZW91dCkpO1xuICAgIGlmKHByb3BlcnRpZXMudGltZW91dCAmJiAodHlwZW9mIHByb3BlcnRpZXMudGltZW91dCkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGltZW91dCcsIHJvcy52YWxpZGF0ZVJhbmdlKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnRpbWVvdXQsXG4gICAgICAgICAgICBtaW46IDEsXG4gICAgICAgICAgICBtYXg6IDQzMjAwLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0aW1lb3V0Jywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLnRpbWVvdXQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NvdW50Jywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLmNvdW50KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdoYW5kbGUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuaGFuZGxlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdoYW5kbGUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuaGFuZGxlKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc1dhaXRDb25kaXRpb25Qcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6Uk9TOjpXYWl0Q29uZGl0aW9uYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NXYWl0Q29uZGl0aW9uUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlJPUzo6V2FpdENvbmRpdGlvbmAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NXYWl0Q29uZGl0aW9uUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NXYWl0Q29uZGl0aW9uUHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgSGFuZGxlOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmhhbmRsZSksXG4gICAgICBUaW1lb3V0OiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnRpbWVvdXQpLFxuICAgICAgQ291bnQ6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuY291bnQpLFxuICAgIH07XG59XG5cbi8qKlxuICogQSBST1MgdGVtcGxhdGUgdHlwZTogIGBBTElZVU46OlJPUzo6V2FpdENvbmRpdGlvbmBcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc1dhaXRDb25kaXRpb24gZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46OlJPUzo6V2FpdENvbmRpdGlvblwiO1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIERhdGE6IEpTT04gc2VyaWFsaXplZCBkaWN0IGNvbnRhaW5pbmcgZGF0YSBhc3NvY2lhdGVkIHdpdGggd2FpdCBjb25kaXRpb24gc2lnbmFscyBzZW50IHRvIHRoZSBoYW5kbGUuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJEYXRhOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIEVycm9yRGF0YTogSlNPTiBzZXJpYWxpemVkIGRpY3QgY29udGFpbmluZyBkYXRhIGFzc29jaWF0ZWQgd2l0aCB3YWl0IGNvbmRpdGlvbiBlcnJvciBzaWduYWxzIHNlbnQgdG8gdGhlIGhhbmRsZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckVycm9yRGF0YTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBKb2luZWRFcnJvckRhdGE6IFN0cmluZyBjb250YWluaW5nIGRhdGEgYXNzb2NpYXRlZCB3aXRoIHdhaXQgY29uZGl0aW9uIGVycm9yIHNpZ25hbHMgc2VudCB0byB0aGUgaGFuZGxlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRySm9pbmVkRXJyb3JEYXRhOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBoYW5kbGU6IEEgcmVmZXJlbmNlIHRvIHRoZSB3YWl0IGNvbmRpdGlvbiBoYW5kbGUgdXNlZCB0byBzaWduYWwgdGhpcyB3YWl0IGNvbmRpdGlvbi5cbiAgICAgKi9cbiAgICBwdWJsaWMgaGFuZGxlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdGltZW91dDogVGhlIG51bWJlciBvZiBzZWNvbmRzIHRvIHdhaXQgZm9yIHRoZSBjb3JyZWN0IG51bWJlciBvZiBzaWduYWxzIHRvIGFycml2ZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgdGltZW91dDogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNvdW50OiBUaGUgbnVtYmVyIG9mIHN1Y2Nlc3Mgc2lnbmFscyB0aGF0IG11c3QgYmUgcmVjZWl2ZWQgYmVmb3JlIHRoZSBzdGFjayBjcmVhdGlvbiBwcm9jZXNzIGNvbnRpbnVlcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgY291bnQ6IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpST1M6OldhaXRDb25kaXRpb25gLlxuICAgICAqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc1dhaXRDb25kaXRpb25Qcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc1dhaXRDb25kaXRpb24uUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG4gICAgICAgIHRoaXMuYXR0ckRhdGEgPSB0aGlzLmdldEF0dCgnRGF0YScpO1xuICAgICAgICB0aGlzLmF0dHJFcnJvckRhdGEgPSB0aGlzLmdldEF0dCgnRXJyb3JEYXRhJyk7XG4gICAgICAgIHRoaXMuYXR0ckpvaW5lZEVycm9yRGF0YSA9IHRoaXMuZ2V0QXR0KCdKb2luZWRFcnJvckRhdGEnKTtcblxuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMuaGFuZGxlID0gcHJvcHMuaGFuZGxlO1xuICAgICAgICB0aGlzLnRpbWVvdXQgPSBwcm9wcy50aW1lb3V0O1xuICAgICAgICB0aGlzLmNvdW50ID0gcHJvcHMuY291bnQ7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaGFuZGxlOiB0aGlzLmhhbmRsZSxcbiAgICAgICAgICAgIHRpbWVvdXQ6IHRoaXMudGltZW91dCxcbiAgICAgICAgICAgIGNvdW50OiB0aGlzLmNvdW50LFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NXYWl0Q29uZGl0aW9uUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpST1M6OldhaXRDb25kaXRpb25IYW5kbGVgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zV2FpdENvbmRpdGlvbkhhbmRsZVByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjb3VudDogVGhlcmUgYXJlIDMgcHJlY29uZGl0aW9ucyB0aGF0IG1ha2UgQ291bnQgdGFraW5nIGVmZmVjdDpcbiAgICAgKiAxLk1vZGUgaXMgc2V0IHRvIEZ1bGwuXG4gICAgICogMi5Db3VudCA+PSAwLlxuICAgICAqIDMuVGhlIGlkIG9mIHNpZ25hbCBpcyBub3Qgc3BlY2lmaWVkLiBJZiBzbywgaXQgd2lsbCBiZSBhIHNlbGYtaW5jcmVhc2luZyBpbnRlZ2VyIHN0YXJ0ZWQgZnJvbSAxLiBGb3IgZXhhbXBsZSwgdGhlIGlkIG9mIHRoZSBmaXJzdCBzaWduYWwgaXMgMSwgdGhlIGlkIG9mIHRoZSBzZWNvbmQgc2lnbmFsIGlzIDIsIGFuZCBzbyBvbi5cbiAgICAgKiBcbiAgICAgKiBJZiBDb3VudCB0YWtlcyBlZmZlY3QsIHNpZ25hbHMgd2l0aCBpZCA+IENvdW50IHdpbGwgYmUgZGVsZXRlZCBiZWZvcmUgdXBkYXRlLlxuICAgICAqIFRoZSBkZWZhdWx0IHZhbHVlIGlzIC0xLCB3aGljaCBtZWFucyBubyBlZmZlY3QuXG4gICAgICogSXQgaXMgcmVjb21tZW5kZWQgdG8gcXVvdGUgdGhlIHNhbWUgdmFsdWUgd2l0aCBXYWl0Q29uZGl0aW9uLkNvdW50LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNvdW50PzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG1vZGU6IElmIHNldCB0byBJbmNyZW1lbnQsIGFsbCBvbGQgc2lnbmFscyB3aWxsIGJlIGRlbGV0ZWQgYmVmb3JlIHVwZGF0ZS4gSW4gdGhpcyBtb2RlLCBXYWl0Q29uZGl0aW9uLkNvdW50IHNob3VsZCByZWZlcmVuY2UgYW4gaW5jcmVtZW50YWwgdmFsdWUgaW5zdGVhZCBvZiBhIGZ1bGwgdmFsdWUsIHN1Y2ggYXMgU2NhbGluZ0dyb3VwRW5hYmxlLlNjYWxpbmdSdWxlQXJpc0V4ZWN1dGVSZXN1bHROdW1iZXJPZkFkZGVkSW5zdGFuY2VzLlxuICAgICAqIFxuICAgICAqIElmIHNldCB0byBGdWxsLCBubyBvbGQgc2lnbmFsIHdpbGwgYmUgZGVsZXRlZCB1bmxlc3MgQ291bnQgaXMgc2V0LiBJbiB0aGlzIG1vZGUsIFdhaXRDb25kaXRpb24uQ291bnQgc2hvdWxkIHJlZmVyZW5jZSBhIGZ1bGwgdmFsdWUsIHN1Y2ggYXMgdGhlIHNhbWUgdmFsdWUgd2l0aCBJbnN0YW5jZUdyb3VwLk1heEFtb3VudC4gSXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoaXMgbW9kZSB3aXRoIENvdW50LlxuICAgICAqIFxuICAgICAqIERlZmF1bHQgdG8gRnVsbC5cbiAgICAgKi9cbiAgICByZWFkb25seSBtb2RlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc1dhaXRDb25kaXRpb25IYW5kbGVQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zV2FpdENvbmRpdGlvbkhhbmRsZVByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc1dhaXRDb25kaXRpb25IYW5kbGVQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBpZihwcm9wZXJ0aWVzLm1vZGUgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLm1vZGUpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ21vZGUnLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5tb2RlLFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFtcIkluY3JlbWVudFwiLFwiRnVsbFwiXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ21vZGUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMubW9kZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY291bnQnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMuY291bnQpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zV2FpdENvbmRpdGlvbkhhbmRsZVByb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpST1M6OldhaXRDb25kaXRpb25IYW5kbGVgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc1dhaXRDb25kaXRpb25IYW5kbGVQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6Uk9TOjpXYWl0Q29uZGl0aW9uSGFuZGxlYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc1dhaXRDb25kaXRpb25IYW5kbGVQcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc1dhaXRDb25kaXRpb25IYW5kbGVQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBDb3VudDogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5jb3VudCksXG4gICAgICBNb2RlOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm1vZGUpLFxuICAgIH07XG59XG5cbi8qKlxuICogQSBST1MgdGVtcGxhdGUgdHlwZTogIGBBTElZVU46OlJPUzo6V2FpdENvbmRpdGlvbkhhbmRsZWBcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc1dhaXRDb25kaXRpb25IYW5kbGUgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46OlJPUzo6V2FpdENvbmRpdGlvbkhhbmRsZVwiO1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIEN1cmxDbGk6IENvbnZlbmllbmNlIGF0dHJpYnV0ZSwgcHJvdmlkZXMgY3VybCBDTEkgY29tbWFuZCBwcmVmaXgsIHdoaWNoIGNhbiBiZSB1c2VkIGZvciBzaWduYWxsaW5nIGhhbmRsZSBjb21wbGV0aW9uIG9yIGZhaWx1cmUuICBZb3UgY2FuIHNpZ25hbCBzdWNjZXNzIGJ5IGFkZGluZyAtLWRhdGEtYmluYXJ5ICd7XCJzdGF0dXNcIjogXCJTVUNDRVNTXCJ9JyAsIG9yIHNpZ25hbCBmYWlsdXJlIGJ5IGFkZGluZyAtLWRhdGEtYmluYXJ5ICd7XCJzdGF0dXNcIjogXCJGQUlMVVJFXCJ9J1xuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQ3VybENsaTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBIZWFkZXJzOiBIVFRQIFBPU1QgSGVhZGVycyB1c2VkIGZvciBzaWduYWxsaW5nIGhhbmRsZSBjb21wbGV0aW9uIG9yIGZhaWx1cmUuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJIZWFkZXJzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFBvd2VyU2hlbGxDdXJsQ2xpOiBDb252ZW5pZW5jZSBhdHRyaWJ1dGUsIHByb3ZpZGVzIGN1cmwgQ0xJIGNvbW1hbmQgcHJlZml4IGZvciBQb3dlclNoZWxsLCB3aGljaCBjYW4gYmUgdXNlZCBmb3Igc2lnbmFsbGluZyBoYW5kbGUgY29tcGxldGlvbiBvciBmYWlsdXJlLiBBcyB0aGlzIGNtZGxldCB3YXMgaW50cm9kdWNlZCBpbiBQb3dlclNoZWxsIDMuMCwgZW5zdXJlIHRoZSB2ZXJzaW9uIG9mIFBvd2VyU2hlbGwgc2F0aXNmaWVzIHRoZSBjb25zdHJhaW50LiAoU2hvdyB0aGUgdmVyc2lvbiB2aWEgJFBTVmVyc2lvblRhYmxlLlBTVmVyc2lvbi4pIFlvdSBjYW4gc2lnbmFsIHN1Y2Nlc3MgYnkgYWRkaW5nIC1Cb2R5ICd7XCJzdGF0dXNcIjogXCJTVUNDRVNTXCJ9JyAsIG9yIHNpZ25hbCBmYWlsdXJlIGJ5IGFkZGluZyAtQm9keSAne1wic3RhdHVzXCI6IFwiRkFJTFVSRVwifSdcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clBvd2VyU2hlbGxDdXJsQ2xpOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFVSTDogSFRUUCBQT1NUIFVSTCB1c2VkIGZvciBzaWduYWxsaW5nIGhhbmRsZSBjb21wbGV0aW9uIG9yIGZhaWx1cmUuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJVcmw6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgV2luZG93c0N1cmxDbGk6IENvbnZlbmllbmNlIGF0dHJpYnV0ZSwgcHJvdmlkZXMgY3VybCBDTEkgY29tbWFuZCBwcmVmaXggZm9yIFdpbmRvd3MsIHdoaWNoIGNhbiBiZSB1c2VkIGZvciBzaWduYWxsaW5nIGhhbmRsZSBjb21wbGV0aW9uIG9yIGZhaWx1cmUuIEFzIFdpbmRvd3MgZG9lcyBub3Qgc3VwcG9ydCBjdXJsIGNvbW1hbmQsIHlvdSBuZWVkIHRvIGluc3RhbGwgY3VybC5leGUgYW5kIGFkZCBpdCB0byBQQVRIIGZpcnN0LiBZb3UgY2FuIHNpZ25hbCBzdWNjZXNzIGJ5IGFkZGluZyAtLWRhdGEtYmluYXJ5IFwie1xcXCJzdGF0dXNcXFwiOiBcXFwiU1VDQ0VTU1xcXCJ9XCIgLCBvciBzaWduYWwgZmFpbHVyZSBieSBhZGRpbmcgLS1kYXRhLWJpbmFyeSBcIntcXFwic3RhdHVzXFxcIjogXFxcIkZBSUxVUkVcXFwifVwiXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJXaW5kb3dzQ3VybENsaTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY291bnQ6IFRoZXJlIGFyZSAzIHByZWNvbmRpdGlvbnMgdGhhdCBtYWtlIENvdW50IHRha2luZyBlZmZlY3Q6XG4gICAgICogMS5Nb2RlIGlzIHNldCB0byBGdWxsLlxuICAgICAqIDIuQ291bnQgPj0gMC5cbiAgICAgKiAzLlRoZSBpZCBvZiBzaWduYWwgaXMgbm90IHNwZWNpZmllZC4gSWYgc28sIGl0IHdpbGwgYmUgYSBzZWxmLWluY3JlYXNpbmcgaW50ZWdlciBzdGFydGVkIGZyb20gMS4gRm9yIGV4YW1wbGUsIHRoZSBpZCBvZiB0aGUgZmlyc3Qgc2lnbmFsIGlzIDEsIHRoZSBpZCBvZiB0aGUgc2Vjb25kIHNpZ25hbCBpcyAyLCBhbmQgc28gb24uXG4gICAgICogXG4gICAgICogSWYgQ291bnQgdGFrZXMgZWZmZWN0LCBzaWduYWxzIHdpdGggaWQgPiBDb3VudCB3aWxsIGJlIGRlbGV0ZWQgYmVmb3JlIHVwZGF0ZS5cbiAgICAgKiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyAtMSwgd2hpY2ggbWVhbnMgbm8gZWZmZWN0LlxuICAgICAqIEl0IGlzIHJlY29tbWVuZGVkIHRvIHF1b3RlIHRoZSBzYW1lIHZhbHVlIHdpdGggV2FpdENvbmRpdGlvbi5Db3VudC5cbiAgICAgKi9cbiAgICBwdWJsaWMgY291bnQ6IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBtb2RlOiBJZiBzZXQgdG8gSW5jcmVtZW50LCBhbGwgb2xkIHNpZ25hbHMgd2lsbCBiZSBkZWxldGVkIGJlZm9yZSB1cGRhdGUuIEluIHRoaXMgbW9kZSwgV2FpdENvbmRpdGlvbi5Db3VudCBzaG91bGQgcmVmZXJlbmNlIGFuIGluY3JlbWVudGFsIHZhbHVlIGluc3RlYWQgb2YgYSBmdWxsIHZhbHVlLCBzdWNoIGFzIFNjYWxpbmdHcm91cEVuYWJsZS5TY2FsaW5nUnVsZUFyaXNFeGVjdXRlUmVzdWx0TnVtYmVyT2ZBZGRlZEluc3RhbmNlcy5cbiAgICAgKiBcbiAgICAgKiBJZiBzZXQgdG8gRnVsbCwgbm8gb2xkIHNpZ25hbCB3aWxsIGJlIGRlbGV0ZWQgdW5sZXNzIENvdW50IGlzIHNldC4gSW4gdGhpcyBtb2RlLCBXYWl0Q29uZGl0aW9uLkNvdW50IHNob3VsZCByZWZlcmVuY2UgYSBmdWxsIHZhbHVlLCBzdWNoIGFzIHRoZSBzYW1lIHZhbHVlIHdpdGggSW5zdGFuY2VHcm91cC5NYXhBbW91bnQuIEl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGlzIG1vZGUgd2l0aCBDb3VudC5cbiAgICAgKiBcbiAgICAgKiBEZWZhdWx0IHRvIEZ1bGwuXG4gICAgICovXG4gICAgcHVibGljIG1vZGU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpST1M6OldhaXRDb25kaXRpb25IYW5kbGVgLlxuICAgICAqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc1dhaXRDb25kaXRpb25IYW5kbGVQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc1dhaXRDb25kaXRpb25IYW5kbGUuUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG4gICAgICAgIHRoaXMuYXR0ckN1cmxDbGkgPSB0aGlzLmdldEF0dCgnQ3VybENsaScpO1xuICAgICAgICB0aGlzLmF0dHJIZWFkZXJzID0gdGhpcy5nZXRBdHQoJ0hlYWRlcnMnKTtcbiAgICAgICAgdGhpcy5hdHRyUG93ZXJTaGVsbEN1cmxDbGkgPSB0aGlzLmdldEF0dCgnUG93ZXJTaGVsbEN1cmxDbGknKTtcbiAgICAgICAgdGhpcy5hdHRyVXJsID0gdGhpcy5nZXRBdHQoJ1VSTCcpO1xuICAgICAgICB0aGlzLmF0dHJXaW5kb3dzQ3VybENsaSA9IHRoaXMuZ2V0QXR0KCdXaW5kb3dzQ3VybENsaScpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5jb3VudCA9IHByb3BzLmNvdW50O1xuICAgICAgICB0aGlzLm1vZGUgPSBwcm9wcy5tb2RlO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNvdW50OiB0aGlzLmNvdW50LFxuICAgICAgICAgICAgbW9kZTogdGhpcy5tb2RlLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NXYWl0Q29uZGl0aW9uSGFuZGxlUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG4iXX0=