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
            allowedValues: ["IOT", "EMAS", "MaxCompute", "BatchCompute", "IMM", "Xtrace", "DataWorks", "FNF", "FC", "KMS", "CS", "CR", "DataHub", "SLS", "CMS", "RocketMQ", "HBR", "ApiGateway", "NLP", "NAS", "OSS", "MNS", "ARMS", "SAE", "CloudStorageGateway", "PrivateZone", "DCDN", "VS", "AHAS", "BrainIndustrial", "OTS", "PrivateLink"],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9zLmdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJvcy5nZW5lcmF0ZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHlEQUF5RDs7O0FBRXpELDhDQUE4QztBQTRDOUM7Ozs7OztHQU1HO0FBQ0gsU0FBUyxrQ0FBa0MsQ0FBQyxVQUFlO0lBQ3ZELElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQUUsT0FBTyxHQUFHLENBQUMsa0JBQWtCLENBQUM7S0FBRTtJQUNuRSxNQUFNLE1BQU0sR0FBRyxJQUFJLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUNwRyxJQUFHLFVBQVUsQ0FBQyxXQUFXLElBQUksQ0FBQyxPQUFPLFVBQVUsQ0FBQyxXQUFXLENBQUMsS0FBSyxRQUFRLEVBQUU7UUFDdkUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1lBQzdFLElBQUksRUFBRSxVQUFVLENBQUMsV0FBVztZQUM1QixhQUFhLEVBQUUsQ0FBQyxLQUFLLEVBQUMsTUFBTSxFQUFDLFlBQVksRUFBQyxjQUFjLEVBQUMsS0FBSyxFQUFDLFFBQVEsRUFBQyxXQUFXLEVBQUMsS0FBSyxFQUFDLElBQUksRUFBQyxLQUFLLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxTQUFTLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxVQUFVLEVBQUMsS0FBSyxFQUFDLFlBQVksRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsTUFBTSxFQUFDLEtBQUssRUFBQyxxQkFBcUIsRUFB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QUFDO0lBQ2xHLENBQUM7O0FBekZMLHdEQTBGQztBQXpGRzs7R0FFRztBQUNvQiw2Q0FBc0IsR0FBRyxrQ0FBa0MsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuXG5pbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpST1M6OkF1dG9FbmFibGVTZXJ2aWNlYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc0F1dG9FbmFibGVTZXJ2aWNlUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHNlcnZpY2VOYW1lOiBXaGljaCBzZXJ2aWNlIHRvIGVuYWJsZS4gVmFsaWQgdmFsdWVzOlxuICAgICAqIEFIQVM6IEFwcGxpY2F0aW9uIEhpZ2ggQXZhaWxhYmlsaXR5IFNlcnZpY2VcbiAgICAgKiBBUk1TOiBSZWFsdGltZSBNb25pdG9yaW5nIFNlcnZpY2VcbiAgICAgKiBBcGlHYXRld2F5OiBBUEkgR2F0ZXdheVxuICAgICAqIEJhdGNoQ29tcHV0ZTogQmF0Y2ggQ29tcHV0ZVxuICAgICAqIEJyYWluSW5kdXN0cmlhbDogQnJhaW4gSW5kdXN0cmlhbFxuICAgICAqIENsb3VkU3RvcmFnZUdhdGV3YXk6IENsb3VkIFN0b3JhZ2UgR2F0ZXdheVxuICAgICAqIENNUzogQ2xvdWQgTW9uaXRvciBTZXJ2aWNlXG4gICAgICogQ1I6IENvbnRhaW5lciBSZWdpc3RyeVxuICAgICAqIENTOiBDb250YWluZXIgU2VydmljZVxuICAgICAqIERhdGFIdWI6IERhdGEgSHViXG4gICAgICogRGF0YVdvcmtzOiBEYXRhV29ya3NEQ0ROOiBEeW5hbWljIFJvdXRlIGZvciBDRE5cbiAgICAgKiBFTUFTOiBFbnRlcnByaXNlIE1vYmlsZSBBcHBsaWNhdGlvbiBTdHVkaW9cbiAgICAgKiBGQzogRnVuY3Rpb24gQ29tcHV0ZVxuICAgICAqIEZORjogU2VydmVybGVzcyBXb3JrZmxvd1xuICAgICAqIE1heENvbXB1dGU6IE1heENvbXB1dGVOQVM6IE5ldHdvcmsgQXR0YWNoZWQgU3RvcmFnZVxuICAgICAqIE1OUzogTWVzc2FnZSBTZXJ2aWNlIChNTlMpXG4gICAgICogSEJSOiBIeWJyaWQgQmFja3VwIFJlY292ZXJ5XG4gICAgICogSU1NOiBJbnRlbGxpZ2VudCBNZWRpYSBNYW5hZ2VtZW50XG4gICAgICogSU9UOiBJb1QgUGxhdGZvcm1cbiAgICAgKiBLTVM6IEtleSBNYW5hZ2VtZW50IFNlcnZpY2VcbiAgICAgKiBOTFA6IE5hdHVyYWwgTGFuZ3VhZ2UgUHJvY2Vzc2luZ1xuICAgICAqIE9TUzogT2JqZWN0IFN0b3JhZ2UgU2VydmljZVxuICAgICAqIE9UUzogVGFibGUgU3RvcmVcbiAgICAgKiBQcml2YXRlTGluazogUHJpdmF0ZSBMaW5rXG4gICAgICogUHJpdmF0ZVpvbmU6IFByaXZhdGUgWm9uZVxuICAgICAqIFJvY2tldE1ROiBSb2NrZXRNUVxuICAgICAqIFNBRTogU2VydmVybGVzcyBBcHAgRW5naW5lXG4gICAgICogU0xTOiBMb2cgU2VydmljZVxuICAgICAqIFZTOiBWaWRlbyBTdXJ2ZWlsbGFuY2VcbiAgICAgKiBYdHJhY2U6IFRyYWNpbmcgQW5sYXlzaXNcbiAgICAgKlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNlcnZpY2VOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zQXV0b0VuYWJsZVNlcnZpY2VQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zQXV0b0VuYWJsZVNlcnZpY2VQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NBdXRvRW5hYmxlU2VydmljZVByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc2VydmljZU5hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuc2VydmljZU5hbWUpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnNlcnZpY2VOYW1lICYmICh0eXBlb2YgcHJvcGVydGllcy5zZXJ2aWNlTmFtZSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc2VydmljZU5hbWUnLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5zZXJ2aWNlTmFtZSxcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCJJT1RcIixcIkVNQVNcIixcIk1heENvbXB1dGVcIixcIkJhdGNoQ29tcHV0ZVwiLFwiSU1NXCIsXCJYdHJhY2VcIixcIkRhdGFXb3Jrc1wiLFwiRk5GXCIsXCJGQ1wiLFwiS01TXCIsXCJDU1wiLFwiQ1JcIixcIkRhdGFIdWJcIixcIlNMU1wiLFwiQ01TXCIsXCJSb2NrZXRNUVwiLFwiSEJSXCIsXCJBcGlHYXRld2F5XCIsXCJOTFBcIixcIk5BU1wiLFwiT1NTXCIsXCJNTlNcIixcIkFSTVNcIixcIlNBRVwiLFwiQ2xvdWRTdG9yYWdlR2F0ZXdheVwiLFwiUHJpdmF0ZVpvbmVcIixcIkRDRE5cIixcIlZTXCIsXCJBSEFTXCIsXCJCcmFpbkluZHVzdHJpYWxcIixcIk9UU1wiLFwiUHJpdmF0ZUxpbmtcIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzZXJ2aWNlTmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zZXJ2aWNlTmFtZSkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NBdXRvRW5hYmxlU2VydmljZVByb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpST1M6OkF1dG9FbmFibGVTZXJ2aWNlYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NBdXRvRW5hYmxlU2VydmljZVByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpST1M6OkF1dG9FbmFibGVTZXJ2aWNlYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0F1dG9FbmFibGVTZXJ2aWNlUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NBdXRvRW5hYmxlU2VydmljZVByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIFNlcnZpY2VOYW1lOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnNlcnZpY2VOYW1lKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIEEgUk9TIHRlbXBsYXRlIHR5cGU6ICBgQUxJWVVOOjpST1M6OkF1dG9FbmFibGVTZXJ2aWNlYFxuICovXG5leHBvcnQgY2xhc3MgUm9zQXV0b0VuYWJsZVNlcnZpY2UgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46OlJPUzo6QXV0b0VuYWJsZVNlcnZpY2VcIjtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc2VydmljZU5hbWU6IFdoaWNoIHNlcnZpY2UgdG8gZW5hYmxlLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogQUhBUzogQXBwbGljYXRpb24gSGlnaCBBdmFpbGFiaWxpdHkgU2VydmljZVxuICAgICAqIEFSTVM6IFJlYWx0aW1lIE1vbml0b3JpbmcgU2VydmljZVxuICAgICAqIEFwaUdhdGV3YXk6IEFQSSBHYXRld2F5XG4gICAgICogQmF0Y2hDb21wdXRlOiBCYXRjaCBDb21wdXRlXG4gICAgICogQnJhaW5JbmR1c3RyaWFsOiBCcmFpbiBJbmR1c3RyaWFsXG4gICAgICogQ2xvdWRTdG9yYWdlR2F0ZXdheTogQ2xvdWQgU3RvcmFnZSBHYXRld2F5XG4gICAgICogQ01TOiBDbG91ZCBNb25pdG9yIFNlcnZpY2VcbiAgICAgKiBDUjogQ29udGFpbmVyIFJlZ2lzdHJ5XG4gICAgICogQ1M6IENvbnRhaW5lciBTZXJ2aWNlXG4gICAgICogRGF0YUh1YjogRGF0YSBIdWJcbiAgICAgKiBEYXRhV29ya3M6IERhdGFXb3Jrc0RDRE46IER5bmFtaWMgUm91dGUgZm9yIENETlxuICAgICAqIEVNQVM6IEVudGVycHJpc2UgTW9iaWxlIEFwcGxpY2F0aW9uIFN0dWRpb1xuICAgICAqIEZDOiBGdW5jdGlvbiBDb21wdXRlXG4gICAgICogRk5GOiBTZXJ2ZXJsZXNzIFdvcmtmbG93XG4gICAgICogTWF4Q29tcHV0ZTogTWF4Q29tcHV0ZU5BUzogTmV0d29yayBBdHRhY2hlZCBTdG9yYWdlXG4gICAgICogTU5TOiBNZXNzYWdlIFNlcnZpY2UgKE1OUylcbiAgICAgKiBIQlI6IEh5YnJpZCBCYWNrdXAgUmVjb3ZlcnlcbiAgICAgKiBJTU06IEludGVsbGlnZW50IE1lZGlhIE1hbmFnZW1lbnRcbiAgICAgKiBJT1Q6IElvVCBQbGF0Zm9ybVxuICAgICAqIEtNUzogS2V5IE1hbmFnZW1lbnQgU2VydmljZVxuICAgICAqIE5MUDogTmF0dXJhbCBMYW5ndWFnZSBQcm9jZXNzaW5nXG4gICAgICogT1NTOiBPYmplY3QgU3RvcmFnZSBTZXJ2aWNlXG4gICAgICogT1RTOiBUYWJsZSBTdG9yZVxuICAgICAqIFByaXZhdGVMaW5rOiBQcml2YXRlIExpbmtcbiAgICAgKiBQcml2YXRlWm9uZTogUHJpdmF0ZSBab25lXG4gICAgICogUm9ja2V0TVE6IFJvY2tldE1RXG4gICAgICogU0FFOiBTZXJ2ZXJsZXNzIEFwcCBFbmdpbmVcbiAgICAgKiBTTFM6IExvZyBTZXJ2aWNlXG4gICAgICogVlM6IFZpZGVvIFN1cnZlaWxsYW5jZVxuICAgICAqIFh0cmFjZTogVHJhY2luZyBBbmxheXNpc1xuICAgICAqXG4gICAgICovXG4gICAgcHVibGljIHNlcnZpY2VOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6Uk9TOjpBdXRvRW5hYmxlU2VydmljZWAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zQXV0b0VuYWJsZVNlcnZpY2VQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc0F1dG9FbmFibGVTZXJ2aWNlLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5zZXJ2aWNlTmFtZSA9IHByb3BzLnNlcnZpY2VOYW1lO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNlcnZpY2VOYW1lOiB0aGlzLnNlcnZpY2VOYW1lLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NBdXRvRW5hYmxlU2VydmljZVByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6Uk9TOjpDdXN0b21SZXNvdXJjZWBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NDdXN0b21SZXNvdXJjZVByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzZXJ2aWNlVG9rZW46IFRoZSBzZXJ2aWNlIHRva2VuIHRoYXQgd2FzIGdpdmVuIHRvIHRoZSB0ZW1wbGF0ZSBkZXZlbG9wZXIgYnkgdGhlIHNlcnZpY2UgcHJvdmlkZXIgdG8gYWNjZXNzIHRoZSBzZXJ2aWNlLlxuICAgICAqIEFsbG93ZWQgdmFsdWVzOlxuICAgICAqIC0gRnVuY3Rpb24gQ29tcHV0ZTogYWNzOmZjOjxyZWdpb25faWQ+OjxhY2NvdW50X2lkPjpzZXJ2aWNlcy88c2VydmljZV9uYW1lPi9mdW5jdGlvbnMvPGZ1bmN0aW9uX25hbWU+XG4gICAgICogLSBNTlMgUXVldWU6IGFjczptbnM6PHJlZ2lvbl9pZD46PGFjY291bnRfaWQ+OnF1ZXVlcy88cXVldWVfbmFtZT4gb3IgYWNzOm1uczo8cmVnaW9uX2lkPjo8YWNjb3VudF9pZD46L3F1ZXVlcy88cXVldWVfbmFtZT5cbiAgICAgKiAtIE1OUyBUb3BpYzogYWNzOm1uczo8cmVnaW9uX2lkPjo8YWNjb3VudF9pZD46dG9waWNzLzx0b3BpY19uYW1lPiBvciBhY3M6bW5zOjxyZWdpb25faWQ+OjxhY2NvdW50X2lkPjovdG9waWNzLzx0b3BpY19uYW1lPlxuICAgICAqIC0gSFRUUCZIVFRQUzogd2ViW29wdGlvbnNdOjx1cmw+XG4gICAgICogICBUd28gb3B0aW9ucyBhcmUgc3VwcG9ydGVkOlxuICAgICAqICAgLSBzeW5jOiBzeW5jIEhUVFAmSFRUUFMgcmVxdWVzdC5cbiAgICAgKiAgIC0gaWRlbXBvdGVudDogaW5kaWNhdGVzIHRoYXQgdGhlIENyZWF0ZSByZXF1ZXN0IGlzIGlkZW1wb3RlbnQuIFVwZGF0ZSBhbmQgRGVsZXRlIHJlcXVlc3RzIHNob3VsZCBiZSBhbHdheXMgaWRlbXBvdGVudC5cbiAgICAgKiBFeGFtcGxlczpcbiAgICAgKiAgIC0gYWNzOmZjOmNuLWhhbmd6aG91OjEyMzQ1Njc4OTpzZXJ2aWNlcy90ZXN0LXNlcnZpY2UvZnVuY3Rpb25zL3Rlc3QtZnVuY3Rpb25cbiAgICAgKiAgIC0gYWNzOm1uczpjbi1oYW5nemhvdToxMjM0NTY3ODk6cXVldWVzL3Rlc3QtcXVldWVcbiAgICAgKiAgIC0gYWNzOm1uczpjbi1oYW5nemhvdToxMjM0NTY3ODk6L3F1ZXVlcy90ZXN0LXF1ZXVlXG4gICAgICogICAtIGFjczptbnM6Y24taGFuZ3pob3U6MTIzNDU2Nzg5OnRvcGljcy90ZXN0LXRvcGljXG4gICAgICogICAtIGFjczptbnM6Y24taGFuZ3pob3U6MTIzNDU2Nzg5Oi90b3BpY3MvdGVzdC10b3BpY1xuICAgICAqICAgLSB3ZWI6aHR0cHM6Ly9hYmMuY29tXG4gICAgICogICAtIHdlYltzeW5jXTpodHRwOi8vYWJjLmNvbVxuICAgICAqICAgLSB3ZWJbc3luYyxpZGVtcG90ZW50XTpodHRwczovL2FiYy5jb21cbiAgICAgKi9cbiAgICByZWFkb25seSBzZXJ2aWNlVG9rZW46IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0aW1lb3V0OiBUaW1lb3V0IHNlY29uZHMgYmVmb3JlIHNlcnZpY2UgcHJvdmlkZXIgcmVzcG9uc2VzLlxuICAgICAqIEl0IHRha2VzIGVmZmVjdHMgb25seSBpZiB0aGUgdHlwZSBvZiBTZXJ2aWNlVG9rZW4gaXMgRnVuY3Rpb24gQ29tcHV0ZSwgTU5TIFF1ZXVlLCBNTlMgVG9waWMgb3IgYXN5bmMgSFRUUCZIVFRQUyByZXF1ZXN0LlxuICAgICAqIFRpbWVvdXQgc2Vjb25kcyBhcmUgYWx3YXlzIDEwIGZvciBzeW5jIEhUVFAmSFRUUFMgcmVxdWVzdC5cbiAgICAgKi9cbiAgICByZWFkb25seSB0aW1lb3V0OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaHR0cENvbmZpZzogQ29uZmlnIGZvciBIVFRQJkhUVFBTIHNlcnZpY2UgcHJvdmlkZXIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaHR0cENvbmZpZz86IFJvc0N1c3RvbVJlc291cmNlLkh0dHBDb25maWdQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwYXJhbWV0ZXJzOiBQYXJhbWV0ZXJzIHRvIGJlIHBhc3NlZCB0byBzZXJ2aWNlIHByb3ZpZGVyLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHBhcmFtZXRlcnM/OiB7IFtrZXk6IHN0cmluZ106IChhbnkgfCByb3MuSVJlc29sdmFibGUpIH0gfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zQ3VzdG9tUmVzb3VyY2VQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zQ3VzdG9tUmVzb3VyY2VQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NDdXN0b21SZXNvdXJjZVByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc2VydmljZVRva2VuJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnNlcnZpY2VUb2tlbikpO1xuICAgIGlmKHByb3BlcnRpZXMuc2VydmljZVRva2VuICYmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXMuc2VydmljZVRva2VuKSB8fCAodHlwZW9mIHByb3BlcnRpZXMuc2VydmljZVRva2VuKSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc2VydmljZVRva2VuJywgcm9zLnZhbGlkYXRlTGVuZ3RoKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnNlcnZpY2VUb2tlbi5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIG1heDogNTEyLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzZXJ2aWNlVG9rZW4nLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuc2VydmljZVRva2VuKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwYXJhbWV0ZXJzJywgcm9zLmhhc2hWYWxpZGF0b3Iocm9zLnZhbGlkYXRlQW55KSkocHJvcGVydGllcy5wYXJhbWV0ZXJzKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0aW1lb3V0Jywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnRpbWVvdXQpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnRpbWVvdXQgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLnRpbWVvdXQpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RpbWVvdXQnLCByb3MudmFsaWRhdGVSYW5nZSkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy50aW1lb3V0LFxuICAgICAgICAgICAgbWluOiAxLFxuICAgICAgICAgICAgbWF4OiA0MzIwMCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGltZW91dCcsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy50aW1lb3V0KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdodHRwQ29uZmlnJywgUm9zQ3VzdG9tUmVzb3VyY2VfSHR0cENvbmZpZ1Byb3BlcnR5VmFsaWRhdG9yKShwcm9wZXJ0aWVzLmh0dHBDb25maWcpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zQ3VzdG9tUmVzb3VyY2VQcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6Uk9TOjpDdXN0b21SZXNvdXJjZWAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zQ3VzdG9tUmVzb3VyY2VQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6Uk9TOjpDdXN0b21SZXNvdXJjZWAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NDdXN0b21SZXNvdXJjZVByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zQ3VzdG9tUmVzb3VyY2VQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBTZXJ2aWNlVG9rZW46IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuc2VydmljZVRva2VuKSxcbiAgICAgIFRpbWVvdXQ6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudGltZW91dCksXG4gICAgICBIdHRwQ29uZmlnOiByb3NDdXN0b21SZXNvdXJjZUh0dHBDb25maWdQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5odHRwQ29uZmlnKSxcbiAgICAgIFBhcmFtZXRlcnM6IHJvcy5oYXNoTWFwcGVyKHJvcy5vYmplY3RUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLnBhcmFtZXRlcnMpLFxuICAgIH07XG59XG5cbi8qKlxuICogQSBST1MgdGVtcGxhdGUgdHlwZTogIGBBTElZVU46OlJPUzo6Q3VzdG9tUmVzb3VyY2VgXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NDdXN0b21SZXNvdXJjZSBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6Uk9TOjpDdXN0b21SZXNvdXJjZVwiO1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIE91dHB1dHM6IE91dHB1dCBkYXRhIHJlY2VpdmVkIGZyb20gc2VydmljZSBwcm92aWRlci5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ck91dHB1dHM6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHNlcnZpY2VUb2tlbjogVGhlIHNlcnZpY2UgdG9rZW4gdGhhdCB3YXMgZ2l2ZW4gdG8gdGhlIHRlbXBsYXRlIGRldmVsb3BlciBieSB0aGUgc2VydmljZSBwcm92aWRlciB0byBhY2Nlc3MgdGhlIHNlcnZpY2UuXG4gICAgICogQWxsb3dlZCB2YWx1ZXM6XG4gICAgICogLSBGdW5jdGlvbiBDb21wdXRlOiBhY3M6ZmM6PHJlZ2lvbl9pZD46PGFjY291bnRfaWQ+OnNlcnZpY2VzLzxzZXJ2aWNlX25hbWU+L2Z1bmN0aW9ucy88ZnVuY3Rpb25fbmFtZT5cbiAgICAgKiAtIE1OUyBRdWV1ZTogYWNzOm1uczo8cmVnaW9uX2lkPjo8YWNjb3VudF9pZD46cXVldWVzLzxxdWV1ZV9uYW1lPiBvciBhY3M6bW5zOjxyZWdpb25faWQ+OjxhY2NvdW50X2lkPjovcXVldWVzLzxxdWV1ZV9uYW1lPlxuICAgICAqIC0gTU5TIFRvcGljOiBhY3M6bW5zOjxyZWdpb25faWQ+OjxhY2NvdW50X2lkPjp0b3BpY3MvPHRvcGljX25hbWU+IG9yIGFjczptbnM6PHJlZ2lvbl9pZD46PGFjY291bnRfaWQ+Oi90b3BpY3MvPHRvcGljX25hbWU+XG4gICAgICogLSBIVFRQJkhUVFBTOiB3ZWJbb3B0aW9uc106PHVybD5cbiAgICAgKiAgIFR3byBvcHRpb25zIGFyZSBzdXBwb3J0ZWQ6XG4gICAgICogICAtIHN5bmM6IHN5bmMgSFRUUCZIVFRQUyByZXF1ZXN0LlxuICAgICAqICAgLSBpZGVtcG90ZW50OiBpbmRpY2F0ZXMgdGhhdCB0aGUgQ3JlYXRlIHJlcXVlc3QgaXMgaWRlbXBvdGVudC4gVXBkYXRlIGFuZCBEZWxldGUgcmVxdWVzdHMgc2hvdWxkIGJlIGFsd2F5cyBpZGVtcG90ZW50LlxuICAgICAqIEV4YW1wbGVzOlxuICAgICAqICAgLSBhY3M6ZmM6Y24taGFuZ3pob3U6MTIzNDU2Nzg5OnNlcnZpY2VzL3Rlc3Qtc2VydmljZS9mdW5jdGlvbnMvdGVzdC1mdW5jdGlvblxuICAgICAqICAgLSBhY3M6bW5zOmNuLWhhbmd6aG91OjEyMzQ1Njc4OTpxdWV1ZXMvdGVzdC1xdWV1ZVxuICAgICAqICAgLSBhY3M6bW5zOmNuLWhhbmd6aG91OjEyMzQ1Njc4OTovcXVldWVzL3Rlc3QtcXVldWVcbiAgICAgKiAgIC0gYWNzOm1uczpjbi1oYW5nemhvdToxMjM0NTY3ODk6dG9waWNzL3Rlc3QtdG9waWNcbiAgICAgKiAgIC0gYWNzOm1uczpjbi1oYW5nemhvdToxMjM0NTY3ODk6L3RvcGljcy90ZXN0LXRvcGljXG4gICAgICogICAtIHdlYjpodHRwczovL2FiYy5jb21cbiAgICAgKiAgIC0gd2ViW3N5bmNdOmh0dHA6Ly9hYmMuY29tXG4gICAgICogICAtIHdlYltzeW5jLGlkZW1wb3RlbnRdOmh0dHBzOi8vYWJjLmNvbVxuICAgICAqL1xuICAgIHB1YmxpYyBzZXJ2aWNlVG9rZW46IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0aW1lb3V0OiBUaW1lb3V0IHNlY29uZHMgYmVmb3JlIHNlcnZpY2UgcHJvdmlkZXIgcmVzcG9uc2VzLlxuICAgICAqIEl0IHRha2VzIGVmZmVjdHMgb25seSBpZiB0aGUgdHlwZSBvZiBTZXJ2aWNlVG9rZW4gaXMgRnVuY3Rpb24gQ29tcHV0ZSwgTU5TIFF1ZXVlLCBNTlMgVG9waWMgb3IgYXN5bmMgSFRUUCZIVFRQUyByZXF1ZXN0LlxuICAgICAqIFRpbWVvdXQgc2Vjb25kcyBhcmUgYWx3YXlzIDEwIGZvciBzeW5jIEhUVFAmSFRUUFMgcmVxdWVzdC5cbiAgICAgKi9cbiAgICBwdWJsaWMgdGltZW91dDogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGh0dHBDb25maWc6IENvbmZpZyBmb3IgSFRUUCZIVFRQUyBzZXJ2aWNlIHByb3ZpZGVyLlxuICAgICAqL1xuICAgIHB1YmxpYyBodHRwQ29uZmlnOiBSb3NDdXN0b21SZXNvdXJjZS5IdHRwQ29uZmlnUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcGFyYW1ldGVyczogUGFyYW1ldGVycyB0byBiZSBwYXNzZWQgdG8gc2VydmljZSBwcm92aWRlci5cbiAgICAgKi9cbiAgICBwdWJsaWMgcGFyYW1ldGVyczogeyBba2V5OiBzdHJpbmddOiAoYW55IHwgcm9zLklSZXNvbHZhYmxlKSB9IHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46OlJPUzo6Q3VzdG9tUmVzb3VyY2VgLlxuICAgICAqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc0N1c3RvbVJlc291cmNlUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NDdXN0b21SZXNvdXJjZS5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcbiAgICAgICAgdGhpcy5hdHRyT3V0cHV0cyA9IHRoaXMuZ2V0QXR0KCdPdXRwdXRzJyk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLnNlcnZpY2VUb2tlbiA9IHByb3BzLnNlcnZpY2VUb2tlbjtcbiAgICAgICAgdGhpcy50aW1lb3V0ID0gcHJvcHMudGltZW91dDtcbiAgICAgICAgdGhpcy5odHRwQ29uZmlnID0gcHJvcHMuaHR0cENvbmZpZztcbiAgICAgICAgdGhpcy5wYXJhbWV0ZXJzID0gcHJvcHMucGFyYW1ldGVycztcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzZXJ2aWNlVG9rZW46IHRoaXMuc2VydmljZVRva2VuLFxuICAgICAgICAgICAgdGltZW91dDogdGhpcy50aW1lb3V0LFxuICAgICAgICAgICAgaHR0cENvbmZpZzogdGhpcy5odHRwQ29uZmlnLFxuICAgICAgICAgICAgcGFyYW1ldGVyczogdGhpcy5wYXJhbWV0ZXJzLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NDdXN0b21SZXNvdXJjZVByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0N1c3RvbVJlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBIdHRwQ29uZmlnUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHNpZ25LZXk6IElmIFNpZ25LZXkgaXMgc3BlY2lmaWVkLCBTaWduYXR1cmUgd2lsbCBiZSBhZGRlZCB0byByZXF1ZXN0IGRhdGEuXG4gICAgICogICBcIlNpZ25hdHVyZVwiOiB7XG4gICAgICogICAgICBcIkRhdGVcIjogXCIyMDIxLTAzLTExVDEzOjMyOjAyWlwiLFxuICAgICAqICAgICAgXCJWYWx1ZVwiOiBcIjEwODQxNDk4NDk5YmExYzRiMDc1NDdhNTQyYzNhODcxODIzNWY5ODNcIlxuICAgICAqICAgfVxuICAgICAqIERhdGU6IHRoZSBVVEMgdGltZSB0byBzZW5kIHJlcXVlc3QsIHdoaWNoIGZvbGxvd3MgdGhlIElTTyA4NjAxIHN0YW5kYXJkIGluIHRoZSB5eXl5LU1NLWRkVEhIOm1tOnNzWiBmb3JtYXQuXG4gICAgICogVmFsdWU6IHRoZSBzaWduYXR1cmUgdmFsdWUgY2FsY3VsYXRlZCBmcm9tIHRoZSBhbGdvcml0aG0gYmVsb3cuXG4gICAgICogXG4gICAgICogVGhlIHNpZ25hdHVyZSBhbGdvcml0aG06XG4gICAgICogMS5Db25jYXRlbmF0aW5nIHNpZ25hdHVyZSBzdHJpbmc6UE9TVFxuICAgICAqIFxcblxuICAgICAqIDxjb250ZW50IHR5cGU6IGlmIENvbnRlbnRUeXBlIGlzIHNwZWNpZmllZCwgdXNlIGl0LCBlbHNlIHVzZSBhcHBsaWNhdGlvbi9qc29uLj5cbiAgICAgKiBcXG5cbiAgICAgKiA8bWQ1IG9mIHJlcXVlc3QgZGF0YTogd2l0aG91dCBTaWduYXR1cmUsIGpzb24gZm9ybWF0LCB1dGYtOCBlbmNvZGVkLCBzb3J0IGtleXMsIGVuc3VyZSBhc2NpaS4+XG4gICAgICogXFxuXG4gICAgICogPERhdGUgaW4gU2lnbmF0dXJlPlxuICAgICAqIFxcblxuICAgICAqIDxoZWFkZXIgMSBrZXk6IHNvcnQgaW4gYWxwaGFiZXRpY2FsIG9yZGVyPjo8aGVhZGVyIDEgdmFsdWU+XG4gICAgICogXFxuXG4gICAgICogLi4uPGhlYWRlciBOIGtleT46PGhlYWRlciAyIHZhbHVlPlxuICAgICAqIFxcblxuICAgICAqIDx1cmwgaW4gU2VydmljZVRva2VuOiBzdWNoIGFzIGh0dHBzOi8vYWJjLmNvbT5cbiAgICAgKiAyLmNhbGN1bGF0ZSBzaWduYXR1cmUgd2l0aCBzaGExLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgc2lnbktleT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBjb250ZW50VHlwZTogQ29udGVudCB0eXBlIG9mIHJlcXVlc3QgYm9keS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGNvbnRlbnRUeXBlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGhlYWRlcnM6IEhlYWRlcnMgdG8gYmUgcGFzc2VkLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgaGVhZGVycz86IHsgW2tleTogc3RyaW5nXTogKGFueSB8IHJvcy5JUmVzb2x2YWJsZSkgfSB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYEh0dHBDb25maWdQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgSHR0cENvbmZpZ1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0N1c3RvbVJlc291cmNlX0h0dHBDb25maWdQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBpZihwcm9wZXJ0aWVzLnNpZ25LZXkgJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy5zaWduS2V5KSB8fCAodHlwZW9mIHByb3BlcnRpZXMuc2lnbktleSkgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NpZ25LZXknLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuc2lnbktleS5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IDEsXG4gICAgICAgICAgICBtYXg6IDEyOCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc2lnbktleScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zaWduS2V5KSk7XG4gICAgaWYocHJvcGVydGllcy5jb250ZW50VHlwZSAmJiAodHlwZW9mIHByb3BlcnRpZXMuY29udGVudFR5cGUpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NvbnRlbnRUeXBlJywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuY29udGVudFR5cGUsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiYXBwbGljYXRpb24vanNvblwiLFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY29udGVudFR5cGUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuY29udGVudFR5cGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2hlYWRlcnMnLCByb3MuaGFzaFZhbGlkYXRvcihyb3MudmFsaWRhdGVBbnkpKShwcm9wZXJ0aWVzLmhlYWRlcnMpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiSHR0cENvbmZpZ1Byb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpST1M6OkN1c3RvbVJlc291cmNlLkh0dHBDb25maWdgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYEh0dHBDb25maWdQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6Uk9TOjpDdXN0b21SZXNvdXJjZS5IdHRwQ29uZmlnYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0N1c3RvbVJlc291cmNlSHR0cENvbmZpZ1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NDdXN0b21SZXNvdXJjZV9IdHRwQ29uZmlnUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICBTaWduS2V5OiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnNpZ25LZXkpLFxuICAgICAgQ29udGVudFR5cGU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuY29udGVudFR5cGUpLFxuICAgICAgSGVhZGVyczogcm9zLmhhc2hNYXBwZXIocm9zLm9iamVjdFRvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMuaGVhZGVycyksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OlJPUzo6U3RhY2tgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zU3RhY2tQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcGFyYW1ldGVyczogVGhlIHNldCBvZiBwYXJhbWV0ZXJzIHBhc3NlZCB0byB0aGlzIG5lc3RlZCBzdGFjay5cbiAgICAgKi9cbiAgICByZWFkb25seSBwYXJhbWV0ZXJzPzogeyBba2V5OiBzdHJpbmddOiAoYW55IHwgcm9zLklSZXNvbHZhYmxlKSB9IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJlc291cmNlR3JvdXBJZDogUmVzb3VyY2UgZ3JvdXAuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcmVzb3VyY2VHcm91cElkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHRlbXBsYXRlQm9keTogU3RydWN0dXJlIGNvbnRhaW5pbmcgdGhlIHRlbXBsYXRlIGJvZHkuXG4gICAgICogSXQgaXMganVzdCB0byBmYWNpbGl0YXRlIHRoZSBwYXNzaW5nIG9mIHRlbXBsYXRlLiBJdCBpcyByYXcgY29udGVudC5GdW5jdGlvbnMgaW4gVGVtcGxhdGVCb2R5IHdpbGwgbm90IGJlIHJlc29sdmVkIGluIHBhcmVudCBzdGFjay5cbiAgICAgKiBZb3UgbXVzdCBzcGVjaWZ5IGVpdGhlciB0aGUgVGVtcGxhdGVCb2R5IG9yIHRoZSBUZW1wbGF0ZVVSTCBwcm9wZXJ0eS4gSWYgYm90aCBhcmUgc3BlY2lmaWVkLCBUZW1wbGF0ZUJvZHkgd2lsbCBiZSB1c2VkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRlbXBsYXRlQm9keT86IHsgW2tleTogc3RyaW5nXTogKGFueSB8IHJvcy5JUmVzb2x2YWJsZSkgfSB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0ZW1wbGF0ZUlkOiBUZW1wbGF0ZSBJRCBvZiB0ZW1wbGF0ZSBjb250YWluaW5nIHRoZSB0ZW1wbGF0ZSBib2R5LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRlbXBsYXRlSWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdGVtcGxhdGVVcmw6IExvY2F0aW9uIG9mIGZpbGUgY29udGFpbmluZyB0aGUgdGVtcGxhdGUgYm9keS4gVGhlIFVSTCBtdXN0IHBvaW50IHRvIGEgdGVtcGxhdGUgKG1heCBzaXplOiA1MjQyODggYnl0ZXMpIHRoYXQgaXMgbG9jYXRlZCBpbiBhIGh0dHAgd2ViIHNlcnZlcihodHRwLCBodHRwcyksIG9yIGFuIEFsaXl1biBPU1MgYnVja2V0KFN1Y2ggYXMgb3NzOi8vcm9zLXRlbXBsYXRlL2RlbW8/UmVnaW9uSWQ9Y24taGFuZ3pob3UsIG9zczovL3Jvcy10ZW1wbGF0ZS9kZW1vLiBSZWdpb25JZCBpcyBkZWZhdWx0IHRvIHRoZSB2YWx1ZSBvZiBSZWdpb25JZCBQYXJhbWV0ZXIgb2YgdGhlIHJlcXVlc3QuKS5cbiAgICAgKiBZb3UgbXVzdCBzcGVjaWZ5IGVpdGhlciB0aGUgVGVtcGxhdGVCb2R5IG9yIHRoZSBUZW1wbGF0ZVVSTCBwcm9wZXJ0eS4gSWYgYm90aCBhcmUgc3BlY2lmaWVkLCBUZW1wbGF0ZUJvZHkgd2lsbCBiZSB1c2VkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRlbXBsYXRlVXJsPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHRlbXBsYXRlVmVyc2lvbjogVGVtcGxhdGUgdmVyc2lvbiBvZiB0ZW1wbGF0ZSBjb250YWluaW5nIHRoZSB0ZW1wbGF0ZSBib2R5LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRlbXBsYXRlVmVyc2lvbj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0aW1lb3V0TWluczogVGhlIGxlbmd0aCBvZiB0aW1lLCBpbiBtaW51dGVzLCB0byB3YWl0IGZvciB0aGUgbmVzdGVkIHN0YWNrIGNyZWF0aW9uIG9yIHVwZGF0ZS4gRGVmYXVsdCB0byA2MCBtaW51dGVzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRpbWVvdXRNaW5zPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc1N0YWNrUHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc1N0YWNrUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zU3RhY2tQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBpZihwcm9wZXJ0aWVzLnRlbXBsYXRlVXJsICYmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXMudGVtcGxhdGVVcmwpIHx8ICh0eXBlb2YgcHJvcGVydGllcy50ZW1wbGF0ZVVybCkgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RlbXBsYXRlVXJsJywgcm9zLnZhbGlkYXRlTGVuZ3RoKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnRlbXBsYXRlVXJsLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgbWF4OiAxMDI0LFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0ZW1wbGF0ZVVybCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy50ZW1wbGF0ZVVybCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncGFyYW1ldGVycycsIHJvcy5oYXNoVmFsaWRhdG9yKHJvcy52YWxpZGF0ZUFueSkpKHByb3BlcnRpZXMucGFyYW1ldGVycykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVzb3VyY2VHcm91cElkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnJlc291cmNlR3JvdXBJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGltZW91dE1pbnMnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMudGltZW91dE1pbnMpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnRlbXBsYXRlVmVyc2lvbiAmJiAodHlwZW9mIHByb3BlcnRpZXMudGVtcGxhdGVWZXJzaW9uKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0ZW1wbGF0ZVZlcnNpb24nLCByb3MudmFsaWRhdGVBbGxvd2VkUGF0dGVybikoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMudGVtcGxhdGVWZXJzaW9uLFxuICAgICAgICAgIHJlZzogL152KChbMS05XSl8KFsxLTldWzAtOV0pfChbMS05XVswLTldWzAtOV0pKSQvXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0ZW1wbGF0ZVZlcnNpb24nLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMudGVtcGxhdGVWZXJzaW9uKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0ZW1wbGF0ZUJvZHknLCByb3MuaGFzaFZhbGlkYXRvcihyb3MudmFsaWRhdGVBbnkpKShwcm9wZXJ0aWVzLnRlbXBsYXRlQm9keSkpO1xuICAgIGlmKHByb3BlcnRpZXMudGVtcGxhdGVJZCAmJiAodHlwZW9mIHByb3BlcnRpZXMudGVtcGxhdGVJZCkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGVtcGxhdGVJZCcsIHJvcy52YWxpZGF0ZUFsbG93ZWRQYXR0ZXJuKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy50ZW1wbGF0ZUlkLFxuICAgICAgICAgIHJlZzogL14oWzAtOWEtZl17OH1bLV1bMC05YS1mXXs0fVstXVswLTlhLWZdezR9Wy1dWzAtOWEtZl17NH1bLV1bMC05YS1mXXsxMn0pfChhY3NbOl1yb3NbOl1bKl1bOl1cXGQrWzpddGVtcGxhdGVcXC9bMC05YS1mXXs4fVstXVswLTlhLWZdezR9Wy1dWzAtOWEtZl17NH1bLV1bMC05YS1mXXs0fVstXVswLTlhLWZdezEyfSkkL1xuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGVtcGxhdGVJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy50ZW1wbGF0ZUlkKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc1N0YWNrUHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlJPUzo6U3RhY2tgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc1N0YWNrUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlJPUzo6U3RhY2tgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zU3RhY2tQcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc1N0YWNrUHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgUGFyYW1ldGVyczogcm9zLmhhc2hNYXBwZXIocm9zLm9iamVjdFRvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMucGFyYW1ldGVycyksXG4gICAgICBSZXNvdXJjZUdyb3VwSWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucmVzb3VyY2VHcm91cElkKSxcbiAgICAgIFRlbXBsYXRlQm9keTogcm9zLmhhc2hNYXBwZXIocm9zLm9iamVjdFRvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMudGVtcGxhdGVCb2R5KSxcbiAgICAgIFRlbXBsYXRlSWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudGVtcGxhdGVJZCksXG4gICAgICBUZW1wbGF0ZVVSTDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy50ZW1wbGF0ZVVybCksXG4gICAgICBUZW1wbGF0ZVZlcnNpb246IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudGVtcGxhdGVWZXJzaW9uKSxcbiAgICAgIFRpbWVvdXRNaW5zOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnRpbWVvdXRNaW5zKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIEEgUk9TIHRlbXBsYXRlIHR5cGU6ICBgQUxJWVVOOjpST1M6OlN0YWNrYFxuICovXG5leHBvcnQgY2xhc3MgUm9zU3RhY2sgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46OlJPUzo6U3RhY2tcIjtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcGFyYW1ldGVyczogVGhlIHNldCBvZiBwYXJhbWV0ZXJzIHBhc3NlZCB0byB0aGlzIG5lc3RlZCBzdGFjay5cbiAgICAgKi9cbiAgICBwdWJsaWMgcGFyYW1ldGVyczogeyBba2V5OiBzdHJpbmddOiAoYW55IHwgcm9zLklSZXNvbHZhYmxlKSB9IHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJlc291cmNlR3JvdXBJZDogUmVzb3VyY2UgZ3JvdXAuXG4gICAgICovXG4gICAgcHVibGljIHJlc291cmNlR3JvdXBJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHRlbXBsYXRlQm9keTogU3RydWN0dXJlIGNvbnRhaW5pbmcgdGhlIHRlbXBsYXRlIGJvZHkuXG4gICAgICogSXQgaXMganVzdCB0byBmYWNpbGl0YXRlIHRoZSBwYXNzaW5nIG9mIHRlbXBsYXRlLiBJdCBpcyByYXcgY29udGVudC5GdW5jdGlvbnMgaW4gVGVtcGxhdGVCb2R5IHdpbGwgbm90IGJlIHJlc29sdmVkIGluIHBhcmVudCBzdGFjay5cbiAgICAgKiBZb3UgbXVzdCBzcGVjaWZ5IGVpdGhlciB0aGUgVGVtcGxhdGVCb2R5IG9yIHRoZSBUZW1wbGF0ZVVSTCBwcm9wZXJ0eS4gSWYgYm90aCBhcmUgc3BlY2lmaWVkLCBUZW1wbGF0ZUJvZHkgd2lsbCBiZSB1c2VkLlxuICAgICAqL1xuICAgIHB1YmxpYyB0ZW1wbGF0ZUJvZHk6IHsgW2tleTogc3RyaW5nXTogKGFueSB8IHJvcy5JUmVzb2x2YWJsZSkgfSB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0ZW1wbGF0ZUlkOiBUZW1wbGF0ZSBJRCBvZiB0ZW1wbGF0ZSBjb250YWluaW5nIHRoZSB0ZW1wbGF0ZSBib2R5LlxuICAgICAqL1xuICAgIHB1YmxpYyB0ZW1wbGF0ZUlkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdGVtcGxhdGVVcmw6IExvY2F0aW9uIG9mIGZpbGUgY29udGFpbmluZyB0aGUgdGVtcGxhdGUgYm9keS4gVGhlIFVSTCBtdXN0IHBvaW50IHRvIGEgdGVtcGxhdGUgKG1heCBzaXplOiA1MjQyODggYnl0ZXMpIHRoYXQgaXMgbG9jYXRlZCBpbiBhIGh0dHAgd2ViIHNlcnZlcihodHRwLCBodHRwcyksIG9yIGFuIEFsaXl1biBPU1MgYnVja2V0KFN1Y2ggYXMgb3NzOi8vcm9zLXRlbXBsYXRlL2RlbW8/UmVnaW9uSWQ9Y24taGFuZ3pob3UsIG9zczovL3Jvcy10ZW1wbGF0ZS9kZW1vLiBSZWdpb25JZCBpcyBkZWZhdWx0IHRvIHRoZSB2YWx1ZSBvZiBSZWdpb25JZCBQYXJhbWV0ZXIgb2YgdGhlIHJlcXVlc3QuKS5cbiAgICAgKiBZb3UgbXVzdCBzcGVjaWZ5IGVpdGhlciB0aGUgVGVtcGxhdGVCb2R5IG9yIHRoZSBUZW1wbGF0ZVVSTCBwcm9wZXJ0eS4gSWYgYm90aCBhcmUgc3BlY2lmaWVkLCBUZW1wbGF0ZUJvZHkgd2lsbCBiZSB1c2VkLlxuICAgICAqL1xuICAgIHB1YmxpYyB0ZW1wbGF0ZVVybDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHRlbXBsYXRlVmVyc2lvbjogVGVtcGxhdGUgdmVyc2lvbiBvZiB0ZW1wbGF0ZSBjb250YWluaW5nIHRoZSB0ZW1wbGF0ZSBib2R5LlxuICAgICAqL1xuICAgIHB1YmxpYyB0ZW1wbGF0ZVZlcnNpb246IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0aW1lb3V0TWluczogVGhlIGxlbmd0aCBvZiB0aW1lLCBpbiBtaW51dGVzLCB0byB3YWl0IGZvciB0aGUgbmVzdGVkIHN0YWNrIGNyZWF0aW9uIG9yIHVwZGF0ZS4gRGVmYXVsdCB0byA2MCBtaW51dGVzLlxuICAgICAqL1xuICAgIHB1YmxpYyB0aW1lb3V0TWluczogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46OlJPUzo6U3RhY2tgLlxuICAgICAqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc1N0YWNrUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NTdGFjay5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcblxuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMucGFyYW1ldGVycyA9IHByb3BzLnBhcmFtZXRlcnM7XG4gICAgICAgIHRoaXMucmVzb3VyY2VHcm91cElkID0gcHJvcHMucmVzb3VyY2VHcm91cElkO1xuICAgICAgICB0aGlzLnRlbXBsYXRlQm9keSA9IHByb3BzLnRlbXBsYXRlQm9keTtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZUlkID0gcHJvcHMudGVtcGxhdGVJZDtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZVVybCA9IHByb3BzLnRlbXBsYXRlVXJsO1xuICAgICAgICB0aGlzLnRlbXBsYXRlVmVyc2lvbiA9IHByb3BzLnRlbXBsYXRlVmVyc2lvbjtcbiAgICAgICAgdGhpcy50aW1lb3V0TWlucyA9IHByb3BzLnRpbWVvdXRNaW5zO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHBhcmFtZXRlcnM6IHRoaXMucGFyYW1ldGVycyxcbiAgICAgICAgICAgIHJlc291cmNlR3JvdXBJZDogdGhpcy5yZXNvdXJjZUdyb3VwSWQsXG4gICAgICAgICAgICB0ZW1wbGF0ZUJvZHk6IHRoaXMudGVtcGxhdGVCb2R5LFxuICAgICAgICAgICAgdGVtcGxhdGVJZDogdGhpcy50ZW1wbGF0ZUlkLFxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6IHRoaXMudGVtcGxhdGVVcmwsXG4gICAgICAgICAgICB0ZW1wbGF0ZVZlcnNpb246IHRoaXMudGVtcGxhdGVWZXJzaW9uLFxuICAgICAgICAgICAgdGltZW91dE1pbnM6IHRoaXMudGltZW91dE1pbnMsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc1N0YWNrUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpST1M6OldhaXRDb25kaXRpb25gXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zV2FpdENvbmRpdGlvblByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBoYW5kbGU6IEEgcmVmZXJlbmNlIHRvIHRoZSB3YWl0IGNvbmRpdGlvbiBoYW5kbGUgdXNlZCB0byBzaWduYWwgdGhpcyB3YWl0IGNvbmRpdGlvbi5cbiAgICAgKi9cbiAgICByZWFkb25seSBoYW5kbGU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0aW1lb3V0OiBUaGUgbnVtYmVyIG9mIHNlY29uZHMgdG8gd2FpdCBmb3IgdGhlIGNvcnJlY3QgbnVtYmVyIG9mIHNpZ25hbHMgdG8gYXJyaXZlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRpbWVvdXQ6IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjb3VudDogVGhlIG51bWJlciBvZiBzdWNjZXNzIHNpZ25hbHMgdGhhdCBtdXN0IGJlIHJlY2VpdmVkIGJlZm9yZSB0aGUgc3RhY2sgY3JlYXRpb24gcHJvY2VzcyBjb250aW51ZXMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgY291bnQ/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zV2FpdENvbmRpdGlvblByb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NXYWl0Q29uZGl0aW9uUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zV2FpdENvbmRpdGlvblByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGltZW91dCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy50aW1lb3V0KSk7XG4gICAgaWYocHJvcGVydGllcy50aW1lb3V0ICYmICh0eXBlb2YgcHJvcGVydGllcy50aW1lb3V0KSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0aW1lb3V0Jywgcm9zLnZhbGlkYXRlUmFuZ2UpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMudGltZW91dCxcbiAgICAgICAgICAgIG1pbjogMSxcbiAgICAgICAgICAgIG1heDogNDMyMDAsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RpbWVvdXQnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMudGltZW91dCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY291bnQnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMuY291bnQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2hhbmRsZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5oYW5kbGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2hhbmRsZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5oYW5kbGUpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zV2FpdENvbmRpdGlvblByb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpST1M6OldhaXRDb25kaXRpb25gIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc1dhaXRDb25kaXRpb25Qcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6Uk9TOjpXYWl0Q29uZGl0aW9uYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc1dhaXRDb25kaXRpb25Qcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc1dhaXRDb25kaXRpb25Qcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBIYW5kbGU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaGFuZGxlKSxcbiAgICAgIFRpbWVvdXQ6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudGltZW91dCksXG4gICAgICBDb3VudDogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5jb3VudCksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBBIFJPUyB0ZW1wbGF0ZSB0eXBlOiAgYEFMSVlVTjo6Uk9TOjpXYWl0Q29uZGl0aW9uYFxuICovXG5leHBvcnQgY2xhc3MgUm9zV2FpdENvbmRpdGlvbiBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6Uk9TOjpXYWl0Q29uZGl0aW9uXCI7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgRGF0YTogSlNPTiBzZXJpYWxpemVkIGRpY3QgY29udGFpbmluZyBkYXRhIGFzc29jaWF0ZWQgd2l0aCB3YWl0IGNvbmRpdGlvbiBzaWduYWxzIHNlbnQgdG8gdGhlIGhhbmRsZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckRhdGE6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgRXJyb3JEYXRhOiBKU09OIHNlcmlhbGl6ZWQgZGljdCBjb250YWluaW5nIGRhdGEgYXNzb2NpYXRlZCB3aXRoIHdhaXQgY29uZGl0aW9uIGVycm9yIHNpZ25hbHMgc2VudCB0byB0aGUgaGFuZGxlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRXJyb3JEYXRhOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIEpvaW5lZEVycm9yRGF0YTogU3RyaW5nIGNvbnRhaW5pbmcgZGF0YSBhc3NvY2lhdGVkIHdpdGggd2FpdCBjb25kaXRpb24gZXJyb3Igc2lnbmFscyBzZW50IHRvIHRoZSBoYW5kbGUuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJKb2luZWRFcnJvckRhdGE6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGhhbmRsZTogQSByZWZlcmVuY2UgdG8gdGhlIHdhaXQgY29uZGl0aW9uIGhhbmRsZSB1c2VkIHRvIHNpZ25hbCB0aGlzIHdhaXQgY29uZGl0aW9uLlxuICAgICAqL1xuICAgIHB1YmxpYyBoYW5kbGU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0aW1lb3V0OiBUaGUgbnVtYmVyIG9mIHNlY29uZHMgdG8gd2FpdCBmb3IgdGhlIGNvcnJlY3QgbnVtYmVyIG9mIHNpZ25hbHMgdG8gYXJyaXZlLlxuICAgICAqL1xuICAgIHB1YmxpYyB0aW1lb3V0OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY291bnQ6IFRoZSBudW1iZXIgb2Ygc3VjY2VzcyBzaWduYWxzIHRoYXQgbXVzdCBiZSByZWNlaXZlZCBiZWZvcmUgdGhlIHN0YWNrIGNyZWF0aW9uIHByb2Nlc3MgY29udGludWVzLlxuICAgICAqL1xuICAgIHB1YmxpYyBjb3VudDogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46OlJPUzo6V2FpdENvbmRpdGlvbmAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zV2FpdENvbmRpdGlvblByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zV2FpdENvbmRpdGlvbi5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcbiAgICAgICAgdGhpcy5hdHRyRGF0YSA9IHRoaXMuZ2V0QXR0KCdEYXRhJyk7XG4gICAgICAgIHRoaXMuYXR0ckVycm9yRGF0YSA9IHRoaXMuZ2V0QXR0KCdFcnJvckRhdGEnKTtcbiAgICAgICAgdGhpcy5hdHRySm9pbmVkRXJyb3JEYXRhID0gdGhpcy5nZXRBdHQoJ0pvaW5lZEVycm9yRGF0YScpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5oYW5kbGUgPSBwcm9wcy5oYW5kbGU7XG4gICAgICAgIHRoaXMudGltZW91dCA9IHByb3BzLnRpbWVvdXQ7XG4gICAgICAgIHRoaXMuY291bnQgPSBwcm9wcy5jb3VudDtcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBoYW5kbGU6IHRoaXMuaGFuZGxlLFxuICAgICAgICAgICAgdGltZW91dDogdGhpcy50aW1lb3V0LFxuICAgICAgICAgICAgY291bnQ6IHRoaXMuY291bnQsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc1dhaXRDb25kaXRpb25Qcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OlJPUzo6V2FpdENvbmRpdGlvbkhhbmRsZWBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NXYWl0Q29uZGl0aW9uSGFuZGxlUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNvdW50OiBUaGVyZSBhcmUgMyBwcmVjb25kaXRpb25zIHRoYXQgbWFrZSBDb3VudCB0YWtpbmcgZWZmZWN0OlxuICAgICAqIDEuTW9kZSBpcyBzZXQgdG8gRnVsbC5cbiAgICAgKiAyLkNvdW50ID49IDAuXG4gICAgICogMy5UaGUgaWQgb2Ygc2lnbmFsIGlzIG5vdCBzcGVjaWZpZWQuIElmIHNvLCBpdCB3aWxsIGJlIGEgc2VsZi1pbmNyZWFzaW5nIGludGVnZXIgc3RhcnRlZCBmcm9tIDEuIEZvciBleGFtcGxlLCB0aGUgaWQgb2YgdGhlIGZpcnN0IHNpZ25hbCBpcyAxLCB0aGUgaWQgb2YgdGhlIHNlY29uZCBzaWduYWwgaXMgMiwgYW5kIHNvIG9uLlxuICAgICAqIFxuICAgICAqIElmIENvdW50IHRha2VzIGVmZmVjdCwgc2lnbmFscyB3aXRoIGlkID4gQ291bnQgd2lsbCBiZSBkZWxldGVkIGJlZm9yZSB1cGRhdGUuXG4gICAgICogVGhlIGRlZmF1bHQgdmFsdWUgaXMgLTEsIHdoaWNoIG1lYW5zIG5vIGVmZmVjdC5cbiAgICAgKiBJdCBpcyByZWNvbW1lbmRlZCB0byBxdW90ZSB0aGUgc2FtZSB2YWx1ZSB3aXRoIFdhaXRDb25kaXRpb24uQ291bnQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgY291bnQ/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbW9kZTogSWYgc2V0IHRvIEluY3JlbWVudCwgYWxsIG9sZCBzaWduYWxzIHdpbGwgYmUgZGVsZXRlZCBiZWZvcmUgdXBkYXRlLiBJbiB0aGlzIG1vZGUsIFdhaXRDb25kaXRpb24uQ291bnQgc2hvdWxkIHJlZmVyZW5jZSBhbiBpbmNyZW1lbnRhbCB2YWx1ZSBpbnN0ZWFkIG9mIGEgZnVsbCB2YWx1ZSwgc3VjaCBhcyBTY2FsaW5nR3JvdXBFbmFibGUuU2NhbGluZ1J1bGVBcmlzRXhlY3V0ZVJlc3VsdE51bWJlck9mQWRkZWRJbnN0YW5jZXMuXG4gICAgICogXG4gICAgICogSWYgc2V0IHRvIEZ1bGwsIG5vIG9sZCBzaWduYWwgd2lsbCBiZSBkZWxldGVkIHVubGVzcyBDb3VudCBpcyBzZXQuIEluIHRoaXMgbW9kZSwgV2FpdENvbmRpdGlvbi5Db3VudCBzaG91bGQgcmVmZXJlbmNlIGEgZnVsbCB2YWx1ZSwgc3VjaCBhcyB0aGUgc2FtZSB2YWx1ZSB3aXRoIEluc3RhbmNlR3JvdXAuTWF4QW1vdW50LiBJdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhpcyBtb2RlIHdpdGggQ291bnQuXG4gICAgICogXG4gICAgICogRGVmYXVsdCB0byBGdWxsLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG1vZGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zV2FpdENvbmRpdGlvbkhhbmRsZVByb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NXYWl0Q29uZGl0aW9uSGFuZGxlUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zV2FpdENvbmRpdGlvbkhhbmRsZVByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGlmKHByb3BlcnRpZXMubW9kZSAmJiAodHlwZW9mIHByb3BlcnRpZXMubW9kZSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbW9kZScsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLm1vZGUsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiSW5jcmVtZW50XCIsXCJGdWxsXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbW9kZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5tb2RlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjb3VudCcsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5jb3VudCkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NXYWl0Q29uZGl0aW9uSGFuZGxlUHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlJPUzo6V2FpdENvbmRpdGlvbkhhbmRsZWAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zV2FpdENvbmRpdGlvbkhhbmRsZVByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpST1M6OldhaXRDb25kaXRpb25IYW5kbGVgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zV2FpdENvbmRpdGlvbkhhbmRsZVByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zV2FpdENvbmRpdGlvbkhhbmRsZVByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIENvdW50OiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmNvdW50KSxcbiAgICAgIE1vZGU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubW9kZSksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBBIFJPUyB0ZW1wbGF0ZSB0eXBlOiAgYEFMSVlVTjo6Uk9TOjpXYWl0Q29uZGl0aW9uSGFuZGxlYFxuICovXG5leHBvcnQgY2xhc3MgUm9zV2FpdENvbmRpdGlvbkhhbmRsZSBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6Uk9TOjpXYWl0Q29uZGl0aW9uSGFuZGxlXCI7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgQ3VybENsaTogQ29udmVuaWVuY2UgYXR0cmlidXRlLCBwcm92aWRlcyBjdXJsIENMSSBjb21tYW5kIHByZWZpeCwgd2hpY2ggY2FuIGJlIHVzZWQgZm9yIHNpZ25hbGxpbmcgaGFuZGxlIGNvbXBsZXRpb24gb3IgZmFpbHVyZS4gIFlvdSBjYW4gc2lnbmFsIHN1Y2Nlc3MgYnkgYWRkaW5nIC0tZGF0YS1iaW5hcnkgJ3tcInN0YXR1c1wiOiBcIlNVQ0NFU1NcIn0nICwgb3Igc2lnbmFsIGZhaWx1cmUgYnkgYWRkaW5nIC0tZGF0YS1iaW5hcnkgJ3tcInN0YXR1c1wiOiBcIkZBSUxVUkVcIn0nXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJDdXJsQ2xpOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIEhlYWRlcnM6IEhUVFAgUE9TVCBIZWFkZXJzIHVzZWQgZm9yIHNpZ25hbGxpbmcgaGFuZGxlIGNvbXBsZXRpb24gb3IgZmFpbHVyZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckhlYWRlcnM6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgUG93ZXJTaGVsbEN1cmxDbGk6IENvbnZlbmllbmNlIGF0dHJpYnV0ZSwgcHJvdmlkZXMgY3VybCBDTEkgY29tbWFuZCBwcmVmaXggZm9yIFBvd2VyU2hlbGwsIHdoaWNoIGNhbiBiZSB1c2VkIGZvciBzaWduYWxsaW5nIGhhbmRsZSBjb21wbGV0aW9uIG9yIGZhaWx1cmUuIEFzIHRoaXMgY21kbGV0IHdhcyBpbnRyb2R1Y2VkIGluIFBvd2VyU2hlbGwgMy4wLCBlbnN1cmUgdGhlIHZlcnNpb24gb2YgUG93ZXJTaGVsbCBzYXRpc2ZpZXMgdGhlIGNvbnN0cmFpbnQuIChTaG93IHRoZSB2ZXJzaW9uIHZpYSAkUFNWZXJzaW9uVGFibGUuUFNWZXJzaW9uLikgWW91IGNhbiBzaWduYWwgc3VjY2VzcyBieSBhZGRpbmcgLUJvZHkgJ3tcInN0YXR1c1wiOiBcIlNVQ0NFU1NcIn0nICwgb3Igc2lnbmFsIGZhaWx1cmUgYnkgYWRkaW5nIC1Cb2R5ICd7XCJzdGF0dXNcIjogXCJGQUlMVVJFXCJ9J1xuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUG93ZXJTaGVsbEN1cmxDbGk6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgVVJMOiBIVFRQIFBPU1QgVVJMIHVzZWQgZm9yIHNpZ25hbGxpbmcgaGFuZGxlIGNvbXBsZXRpb24gb3IgZmFpbHVyZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clVybDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBXaW5kb3dzQ3VybENsaTogQ29udmVuaWVuY2UgYXR0cmlidXRlLCBwcm92aWRlcyBjdXJsIENMSSBjb21tYW5kIHByZWZpeCBmb3IgV2luZG93cywgd2hpY2ggY2FuIGJlIHVzZWQgZm9yIHNpZ25hbGxpbmcgaGFuZGxlIGNvbXBsZXRpb24gb3IgZmFpbHVyZS4gQXMgV2luZG93cyBkb2VzIG5vdCBzdXBwb3J0IGN1cmwgY29tbWFuZCwgeW91IG5lZWQgdG8gaW5zdGFsbCBjdXJsLmV4ZSBhbmQgYWRkIGl0IHRvIFBBVEggZmlyc3QuIFlvdSBjYW4gc2lnbmFsIHN1Y2Nlc3MgYnkgYWRkaW5nIC0tZGF0YS1iaW5hcnkgXCJ7XFxcInN0YXR1c1xcXCI6IFxcXCJTVUNDRVNTXFxcIn1cIiAsIG9yIHNpZ25hbCBmYWlsdXJlIGJ5IGFkZGluZyAtLWRhdGEtYmluYXJ5IFwie1xcXCJzdGF0dXNcXFwiOiBcXFwiRkFJTFVSRVxcXCJ9XCJcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0cldpbmRvd3NDdXJsQ2xpOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjb3VudDogVGhlcmUgYXJlIDMgcHJlY29uZGl0aW9ucyB0aGF0IG1ha2UgQ291bnQgdGFraW5nIGVmZmVjdDpcbiAgICAgKiAxLk1vZGUgaXMgc2V0IHRvIEZ1bGwuXG4gICAgICogMi5Db3VudCA+PSAwLlxuICAgICAqIDMuVGhlIGlkIG9mIHNpZ25hbCBpcyBub3Qgc3BlY2lmaWVkLiBJZiBzbywgaXQgd2lsbCBiZSBhIHNlbGYtaW5jcmVhc2luZyBpbnRlZ2VyIHN0YXJ0ZWQgZnJvbSAxLiBGb3IgZXhhbXBsZSwgdGhlIGlkIG9mIHRoZSBmaXJzdCBzaWduYWwgaXMgMSwgdGhlIGlkIG9mIHRoZSBzZWNvbmQgc2lnbmFsIGlzIDIsIGFuZCBzbyBvbi5cbiAgICAgKiBcbiAgICAgKiBJZiBDb3VudCB0YWtlcyBlZmZlY3QsIHNpZ25hbHMgd2l0aCBpZCA+IENvdW50IHdpbGwgYmUgZGVsZXRlZCBiZWZvcmUgdXBkYXRlLlxuICAgICAqIFRoZSBkZWZhdWx0IHZhbHVlIGlzIC0xLCB3aGljaCBtZWFucyBubyBlZmZlY3QuXG4gICAgICogSXQgaXMgcmVjb21tZW5kZWQgdG8gcXVvdGUgdGhlIHNhbWUgdmFsdWUgd2l0aCBXYWl0Q29uZGl0aW9uLkNvdW50LlxuICAgICAqL1xuICAgIHB1YmxpYyBjb3VudDogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG1vZGU6IElmIHNldCB0byBJbmNyZW1lbnQsIGFsbCBvbGQgc2lnbmFscyB3aWxsIGJlIGRlbGV0ZWQgYmVmb3JlIHVwZGF0ZS4gSW4gdGhpcyBtb2RlLCBXYWl0Q29uZGl0aW9uLkNvdW50IHNob3VsZCByZWZlcmVuY2UgYW4gaW5jcmVtZW50YWwgdmFsdWUgaW5zdGVhZCBvZiBhIGZ1bGwgdmFsdWUsIHN1Y2ggYXMgU2NhbGluZ0dyb3VwRW5hYmxlLlNjYWxpbmdSdWxlQXJpc0V4ZWN1dGVSZXN1bHROdW1iZXJPZkFkZGVkSW5zdGFuY2VzLlxuICAgICAqIFxuICAgICAqIElmIHNldCB0byBGdWxsLCBubyBvbGQgc2lnbmFsIHdpbGwgYmUgZGVsZXRlZCB1bmxlc3MgQ291bnQgaXMgc2V0LiBJbiB0aGlzIG1vZGUsIFdhaXRDb25kaXRpb24uQ291bnQgc2hvdWxkIHJlZmVyZW5jZSBhIGZ1bGwgdmFsdWUsIHN1Y2ggYXMgdGhlIHNhbWUgdmFsdWUgd2l0aCBJbnN0YW5jZUdyb3VwLk1heEFtb3VudC4gSXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoaXMgbW9kZSB3aXRoIENvdW50LlxuICAgICAqIFxuICAgICAqIERlZmF1bHQgdG8gRnVsbC5cbiAgICAgKi9cbiAgICBwdWJsaWMgbW9kZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46OlJPUzo6V2FpdENvbmRpdGlvbkhhbmRsZWAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zV2FpdENvbmRpdGlvbkhhbmRsZVByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zV2FpdENvbmRpdGlvbkhhbmRsZS5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcbiAgICAgICAgdGhpcy5hdHRyQ3VybENsaSA9IHRoaXMuZ2V0QXR0KCdDdXJsQ2xpJyk7XG4gICAgICAgIHRoaXMuYXR0ckhlYWRlcnMgPSB0aGlzLmdldEF0dCgnSGVhZGVycycpO1xuICAgICAgICB0aGlzLmF0dHJQb3dlclNoZWxsQ3VybENsaSA9IHRoaXMuZ2V0QXR0KCdQb3dlclNoZWxsQ3VybENsaScpO1xuICAgICAgICB0aGlzLmF0dHJVcmwgPSB0aGlzLmdldEF0dCgnVVJMJyk7XG4gICAgICAgIHRoaXMuYXR0cldpbmRvd3NDdXJsQ2xpID0gdGhpcy5nZXRBdHQoJ1dpbmRvd3NDdXJsQ2xpJyk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLmNvdW50ID0gcHJvcHMuY291bnQ7XG4gICAgICAgIHRoaXMubW9kZSA9IHByb3BzLm1vZGU7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY291bnQ6IHRoaXMuY291bnQsXG4gICAgICAgICAgICBtb2RlOiB0aGlzLm1vZGUsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc1dhaXRDb25kaXRpb25IYW5kbGVQcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cbiJdfQ==