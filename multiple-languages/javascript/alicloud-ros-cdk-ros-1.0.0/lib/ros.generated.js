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
            allowedValues: ["ApiGateway", "NLP", "EMAS", "OSS", "BatchCompute", "IMM", "ARMS", "SLS", "NAS", "FC", "KMS", "RocketMQ", "AHAS", "DataHub", "OTS", "CMS", "PrivateLink", "HBR"],
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
        this.attrOutputs = ros.Token.asString(this.getAtt('Outputs'));
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.serviceToken = props.serviceToken;
        this.timeout = props.timeout;
        this.parameters = props.parameters;
    }
    get rosProperties() {
        return {
            serviceToken: this.serviceToken,
            timeout: this.timeout,
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
        this.templateBody = props.templateBody;
        this.templateId = props.templateId;
        this.templateUrl = props.templateUrl;
        this.templateVersion = props.templateVersion;
        this.timeoutMins = props.timeoutMins;
    }
    get rosProperties() {
        return {
            parameters: this.parameters,
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
        this.attrData = ros.Token.asString(this.getAtt('Data'));
        this.attrErrorData = ros.Token.asString(this.getAtt('ErrorData'));
        this.attrJoinedErrorData = ros.Token.asString(this.getAtt('JoinedErrorData'));
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
        this.attrCurlCli = ros.Token.asString(this.getAtt('CurlCli'));
        this.attrHeaders = ros.Token.asString(this.getAtt('Headers'));
        this.attrPowerShellCurlCli = ros.Token.asString(this.getAtt('PowerShellCurlCli'));
        this.attrUrl = ros.Token.asString(this.getAtt('URL'));
        this.attrWindowsCurlCli = ros.Token.asString(this.getAtt('WindowsCurlCli'));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9zLmdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJvcy5nZW5lcmF0ZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHlEQUF5RDs7O0FBRXpELDhDQUE4QztBQWdDOUM7Ozs7OztHQU1HO0FBQ0gsU0FBUyxrQ0FBa0MsQ0FBQyxVQUFlO0lBQ3ZELElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQUUsT0FBTyxHQUFHLENBQUMsa0JBQWtCLENBQUM7S0FBRTtJQUNuRSxNQUFNLE1BQU0sR0FBRyxJQUFJLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUNwRyxJQUFHLFVBQVUsQ0FBQyxXQUFXLElBQUksQ0FBQyxPQUFPLFVBQVUsQ0FBQyxXQUFXLENBQUMsS0FBSyxRQUFRLEVBQUU7UUFDdkUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1lBQzdFLElBQUksRUFBRSxVQUFVLENBQUMsV0FBVztZQUM1QixhQUFhLEVBQUUsQ0FBQyxZQUFZLEVBQUMsS0FBSyxFQUFDLE1BQU0sRUFBQyxLQUFLLEVBQUMsY0FBYyxFQUFDLEtBQUssRUFBQyxNQUFNLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxJQUFJLEVBQUMsS0FBSyxFQUFDLFVBQVUsRUFBQyxNQUFNLEVBQUMsU0FBUyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsYUFBYSxFQUFDLEtBQUssQ0FBQztTQUNoSyxDQUFDLENBQUMsQ0FBQztLQUNQO0lBQ0QsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENB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bSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cblxuaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6Uk9TOjpBdXRvRW5hYmxlU2VydmljZWBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NBdXRvRW5hYmxlU2VydmljZVByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzZXJ2aWNlTmFtZTogV2hpY2ggc2VydmljZSB0byBlbmFibGUuIFZhbGlkIHZhbHVlczpcbiAgICAgKiBBSEFTOiBBcHBsaWNhdGlvbiBIaWdoIEF2YWlsYWJpbGl0eSBTZXJ2aWNlXG4gICAgICogQVJNUzogUmVhbHRpbWUgTW9uaXRvcmluZyBTZXJ2aWNlXG4gICAgICogQXBpR2F0ZXdheTogQVBJIEdhdGV3YXlcbiAgICAgKiBCYXRjaENvbXB1dGU6IEJhdGNoIENvbXB1dGVcbiAgICAgKiBDTVM6IENsb3VkIE1vbml0b3IgU2VydmljZVxuICAgICAqIERhdGFIdWI6IERhdGEgSHViXG4gICAgICogRU1BUzogRW50ZXJwcmlzZSBNb2JpbGUgQXBwbGljYXRpb24gU3R1ZGlvXG4gICAgICogRkM6IEZ1bmN0aW9uIENvbXB1dGVcbiAgICAgKiBOQVM6IE5ldHdvcmsgQXR0YWNoZWQgU3RvcmFnZVxuICAgICAqIEhCUjogSHlicmlkIEJhY2t1cCBSZWNvdmVyeVxuICAgICAqIElNTTogSW50ZWxsaWdlbnQgTWVkaWEgTWFuYWdlbWVudFxuICAgICAqIEtNUzogS2V5IE1hbmFnZW1lbnQgU2VydmljZVxuICAgICAqIE5MUDogTmF0dXJhbCBMYW5ndWFnZSBQcm9jZXNzaW5nXG4gICAgICogT1NTOiBPYmplY3QgU3RvcmFnZSBTZXJ2aWNlXG4gICAgICogT1RTOiBUYWJsZSBTdG9yZVxuICAgICAqIFByaXZhdGVMaW5rOiBQcml2YXRlIExpbmtcbiAgICAgKiBSb2NrZXRNUTogUm9ja2V0TVFcbiAgICAgKiBTTFM6IExvZyBTZXJ2aWNlXG4gICAgICpcbiAgICAgKi9cbiAgICByZWFkb25seSBzZXJ2aWNlTmFtZTogc3RyaW5nO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc0F1dG9FbmFibGVTZXJ2aWNlUHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0F1dG9FbmFibGVTZXJ2aWNlUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zQXV0b0VuYWJsZVNlcnZpY2VQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NlcnZpY2VOYW1lJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnNlcnZpY2VOYW1lKSk7XG4gICAgaWYocHJvcGVydGllcy5zZXJ2aWNlTmFtZSAmJiAodHlwZW9mIHByb3BlcnRpZXMuc2VydmljZU5hbWUpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NlcnZpY2VOYW1lJywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuc2VydmljZU5hbWUsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiQXBpR2F0ZXdheVwiLFwiTkxQXCIsXCJFTUFTXCIsXCJPU1NcIixcIkJhdGNoQ29tcHV0ZVwiLFwiSU1NXCIsXCJBUk1TXCIsXCJTTFNcIixcIk5BU1wiLFwiRkNcIixcIktNU1wiLFwiUm9ja2V0TVFcIixcIkFIQVNcIixcIkRhdGFIdWJcIixcIk9UU1wiLFwiQ01TXCIsXCJQcml2YXRlTGlua1wiLFwiSEJSXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc2VydmljZU5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuc2VydmljZU5hbWUpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zQXV0b0VuYWJsZVNlcnZpY2VQcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6Uk9TOjpBdXRvRW5hYmxlU2VydmljZWAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zQXV0b0VuYWJsZVNlcnZpY2VQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6Uk9TOjpBdXRvRW5hYmxlU2VydmljZWAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NBdXRvRW5hYmxlU2VydmljZVByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zQXV0b0VuYWJsZVNlcnZpY2VQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBTZXJ2aWNlTmFtZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zZXJ2aWNlTmFtZSksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBBIFJPUyB0ZW1wbGF0ZSB0eXBlOiAgYEFMSVlVTjo6Uk9TOjpBdXRvRW5hYmxlU2VydmljZWBcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc0F1dG9FbmFibGVTZXJ2aWNlIGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiQUxJWVVOOjpST1M6OkF1dG9FbmFibGVTZXJ2aWNlXCI7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHNlcnZpY2VOYW1lOiBXaGljaCBzZXJ2aWNlIHRvIGVuYWJsZS4gVmFsaWQgdmFsdWVzOlxuICAgICAqIEFIQVM6IEFwcGxpY2F0aW9uIEhpZ2ggQXZhaWxhYmlsaXR5IFNlcnZpY2VcbiAgICAgKiBBUk1TOiBSZWFsdGltZSBNb25pdG9yaW5nIFNlcnZpY2VcbiAgICAgKiBBcGlHYXRld2F5OiBBUEkgR2F0ZXdheVxuICAgICAqIEJhdGNoQ29tcHV0ZTogQmF0Y2ggQ29tcHV0ZVxuICAgICAqIENNUzogQ2xvdWQgTW9uaXRvciBTZXJ2aWNlXG4gICAgICogRGF0YUh1YjogRGF0YSBIdWJcbiAgICAgKiBFTUFTOiBFbnRlcnByaXNlIE1vYmlsZSBBcHBsaWNhdGlvbiBTdHVkaW9cbiAgICAgKiBGQzogRnVuY3Rpb24gQ29tcHV0ZVxuICAgICAqIE5BUzogTmV0d29yayBBdHRhY2hlZCBTdG9yYWdlXG4gICAgICogSEJSOiBIeWJyaWQgQmFja3VwIFJlY292ZXJ5XG4gICAgICogSU1NOiBJbnRlbGxpZ2VudCBNZWRpYSBNYW5hZ2VtZW50XG4gICAgICogS01TOiBLZXkgTWFuYWdlbWVudCBTZXJ2aWNlXG4gICAgICogTkxQOiBOYXR1cmFsIExhbmd1YWdlIFByb2Nlc3NpbmdcbiAgICAgKiBPU1M6IE9iamVjdCBTdG9yYWdlIFNlcnZpY2VcbiAgICAgKiBPVFM6IFRhYmxlIFN0b3JlXG4gICAgICogUHJpdmF0ZUxpbms6IFByaXZhdGUgTGlua1xuICAgICAqIFJvY2tldE1ROiBSb2NrZXRNUVxuICAgICAqIFNMUzogTG9nIFNlcnZpY2VcbiAgICAgKlxuICAgICAqL1xuICAgIHB1YmxpYyBzZXJ2aWNlTmFtZTogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46OlJPUzo6QXV0b0VuYWJsZVNlcnZpY2VgLlxuICAgICAqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc0F1dG9FbmFibGVTZXJ2aWNlUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NBdXRvRW5hYmxlU2VydmljZS5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcblxuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMuc2VydmljZU5hbWUgPSBwcm9wcy5zZXJ2aWNlTmFtZTtcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzZXJ2aWNlTmFtZTogdGhpcy5zZXJ2aWNlTmFtZSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zQXV0b0VuYWJsZVNlcnZpY2VQcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OlJPUzo6Q3VzdG9tUmVzb3VyY2VgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zQ3VzdG9tUmVzb3VyY2VQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc2VydmljZVRva2VuOiBUaGUgc2VydmljZSB0b2tlbiB0aGF0IHdhcyBnaXZlbiB0byB0aGUgdGVtcGxhdGUgZGV2ZWxvcGVyIGJ5IHRoZSBzZXJ2aWNlIHByb3ZpZGVyIHRvIGFjY2VzcyB0aGUgc2VydmljZS5cbiAgICAgKiBBbGxvd2VkIHZhbHVlczpcbiAgICAgKiAtIEZ1bmN0aW9uIENvbXB1dGU6IGFjczpmYzo8cmVnaW9uX2lkPjo8YWNjb3VudF9pZD46c2VydmljZXMvPHNlcnZpY2VfbmFtZT4vZnVuY3Rpb25zLzxmdW5jdGlvbl9uYW1lPlxuICAgICAqIC0gTU5TIFF1ZXVlOiBhY3M6bW5zOjxyZWdpb25faWQ+OjxhY2NvdW50X2lkPjpxdWV1ZXMvPHF1ZXVlX25hbWU+IG9yIGFjczptbnM6PHJlZ2lvbl9pZD46PGFjY291bnRfaWQ+Oi9xdWV1ZXMvPHF1ZXVlX25hbWU+XG4gICAgICogLSBNTlMgVG9waWM6IGFjczptbnM6PHJlZ2lvbl9pZD46PGFjY291bnRfaWQ+OnRvcGljcy88dG9waWNfbmFtZT4gb3IgYWNzOm1uczo8cmVnaW9uX2lkPjo8YWNjb3VudF9pZD46L3RvcGljcy88dG9waWNfbmFtZT5cbiAgICAgKiAtIEhUVFAmSFRUUFM6IHdlYltvcHRpb25zXTo8dXJsPlxuICAgICAqICAgVHdvIG9wdGlvbnMgYXJlIHN1cHBvcnRlZDpcbiAgICAgKiAgIC0gc3luYzogc3luYyBIVFRQJkhUVFBTIHJlcXVlc3QuXG4gICAgICogICAtIGlkZW1wb3RlbnQ6IGluZGljYXRlcyB0aGF0IHRoZSBDcmVhdGUgcmVxdWVzdCBpcyBpZGVtcG90ZW50LiBVcGRhdGUgYW5kIERlbGV0ZSByZXF1ZXN0cyBzaG91bGQgYmUgYWx3YXlzIGlkZW1wb3RlbnQuXG4gICAgICogRXhhbXBsZXM6XG4gICAgICogICAtIGFjczpmYzpjbi1oYW5nemhvdToxMjM0NTY3ODk6c2VydmljZXMvdGVzdC1zZXJ2aWNlL2Z1bmN0aW9ucy90ZXN0LWZ1bmN0aW9uXG4gICAgICogICAtIGFjczptbnM6Y24taGFuZ3pob3U6MTIzNDU2Nzg5OnF1ZXVlcy90ZXN0LXF1ZXVlXG4gICAgICogICAtIGFjczptbnM6Y24taGFuZ3pob3U6MTIzNDU2Nzg5Oi9xdWV1ZXMvdGVzdC1xdWV1ZVxuICAgICAqICAgLSBhY3M6bW5zOmNuLWhhbmd6aG91OjEyMzQ1Njc4OTp0b3BpY3MvdGVzdC10b3BpY1xuICAgICAqICAgLSBhY3M6bW5zOmNuLWhhbmd6aG91OjEyMzQ1Njc4OTovdG9waWNzL3Rlc3QtdG9waWNcbiAgICAgKiAgIC0gd2ViOmh0dHBzOi8vYWJjLmNvbVxuICAgICAqICAgLSB3ZWJbc3luY106aHR0cDovL2FiYy5jb21cbiAgICAgKiAgIC0gd2ViW3N5bmMsaWRlbXBvdGVudF06aHR0cHM6Ly9hYmMuY29tXG4gICAgICovXG4gICAgcmVhZG9ubHkgc2VydmljZVRva2VuOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdGltZW91dDogVGltZW91dCBzZWNvbmRzIGJlZm9yZSBzZXJ2aWNlIHByb3ZpZGVyIHJlc3BvbnNlcy5cbiAgICAgKiBJdCB0YWtlcyBlZmZlY3RzIG9ubHkgaWYgdGhlIHR5cGUgb2YgU2VydmljZVRva2VuIGlzIEZ1bmN0aW9uIENvbXB1dGUsIE1OUyBRdWV1ZSwgTU5TIFRvcGljIG9yIGFzeW5jIEhUVFAmSFRUUFMgcmVxdWVzdC5cbiAgICAgKiBUaW1lb3V0IHNlY29uZHMgYXJlIGFsd2F5cyAxMCBmb3Igc3luYyBIVFRQJkhUVFBTIHJlcXVlc3QuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdGltZW91dDogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHBhcmFtZXRlcnM6IFBhcmFtZXRlcnMgdG8gYmUgcGFzc2VkIHRvIHNlcnZpY2UgcHJvdmlkZXIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcGFyYW1ldGVycz86IHsgW2tleTogc3RyaW5nXTogKGFueSB8IHJvcy5JUmVzb2x2YWJsZSkgfSB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NDdXN0b21SZXNvdXJjZVByb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NDdXN0b21SZXNvdXJjZVByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0N1c3RvbVJlc291cmNlUHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzZXJ2aWNlVG9rZW4nLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuc2VydmljZVRva2VuKSk7XG4gICAgaWYocHJvcGVydGllcy5zZXJ2aWNlVG9rZW4gJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy5zZXJ2aWNlVG9rZW4pIHx8ICh0eXBlb2YgcHJvcGVydGllcy5zZXJ2aWNlVG9rZW4pID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzZXJ2aWNlVG9rZW4nLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuc2VydmljZVRva2VuLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgbWF4OiA1MTIsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NlcnZpY2VUb2tlbicsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zZXJ2aWNlVG9rZW4pKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3BhcmFtZXRlcnMnLCByb3MuaGFzaFZhbGlkYXRvcihyb3MudmFsaWRhdGVBbnkpKShwcm9wZXJ0aWVzLnBhcmFtZXRlcnMpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RpbWVvdXQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMudGltZW91dCkpO1xuICAgIGlmKHByb3BlcnRpZXMudGltZW91dCAmJiAodHlwZW9mIHByb3BlcnRpZXMudGltZW91dCkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGltZW91dCcsIHJvcy52YWxpZGF0ZVJhbmdlKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnRpbWVvdXQsXG4gICAgICAgICAgICBtaW46IDEsXG4gICAgICAgICAgICBtYXg6IDQzMjAwLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0aW1lb3V0Jywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLnRpbWVvdXQpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zQ3VzdG9tUmVzb3VyY2VQcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6Uk9TOjpDdXN0b21SZXNvdXJjZWAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zQ3VzdG9tUmVzb3VyY2VQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6Uk9TOjpDdXN0b21SZXNvdXJjZWAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NDdXN0b21SZXNvdXJjZVByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zQ3VzdG9tUmVzb3VyY2VQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBTZXJ2aWNlVG9rZW46IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuc2VydmljZVRva2VuKSxcbiAgICAgIFRpbWVvdXQ6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudGltZW91dCksXG4gICAgICBQYXJhbWV0ZXJzOiByb3MuaGFzaE1hcHBlcihyb3Mub2JqZWN0VG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5wYXJhbWV0ZXJzKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIEEgUk9TIHRlbXBsYXRlIHR5cGU6ICBgQUxJWVVOOjpST1M6OkN1c3RvbVJlc291cmNlYFxuICovXG5leHBvcnQgY2xhc3MgUm9zQ3VzdG9tUmVzb3VyY2UgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46OlJPUzo6Q3VzdG9tUmVzb3VyY2VcIjtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBPdXRwdXRzOiBPdXRwdXQgZGF0YSByZWNlaXZlZCBmcm9tIHNlcnZpY2UgcHJvdmlkZXIuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJPdXRwdXRzOiBhbnk7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzZXJ2aWNlVG9rZW46IFRoZSBzZXJ2aWNlIHRva2VuIHRoYXQgd2FzIGdpdmVuIHRvIHRoZSB0ZW1wbGF0ZSBkZXZlbG9wZXIgYnkgdGhlIHNlcnZpY2UgcHJvdmlkZXIgdG8gYWNjZXNzIHRoZSBzZXJ2aWNlLlxuICAgICAqIEFsbG93ZWQgdmFsdWVzOlxuICAgICAqIC0gRnVuY3Rpb24gQ29tcHV0ZTogYWNzOmZjOjxyZWdpb25faWQ+OjxhY2NvdW50X2lkPjpzZXJ2aWNlcy88c2VydmljZV9uYW1lPi9mdW5jdGlvbnMvPGZ1bmN0aW9uX25hbWU+XG4gICAgICogLSBNTlMgUXVldWU6IGFjczptbnM6PHJlZ2lvbl9pZD46PGFjY291bnRfaWQ+OnF1ZXVlcy88cXVldWVfbmFtZT4gb3IgYWNzOm1uczo8cmVnaW9uX2lkPjo8YWNjb3VudF9pZD46L3F1ZXVlcy88cXVldWVfbmFtZT5cbiAgICAgKiAtIE1OUyBUb3BpYzogYWNzOm1uczo8cmVnaW9uX2lkPjo8YWNjb3VudF9pZD46dG9waWNzLzx0b3BpY19uYW1lPiBvciBhY3M6bW5zOjxyZWdpb25faWQ+OjxhY2NvdW50X2lkPjovdG9waWNzLzx0b3BpY19uYW1lPlxuICAgICAqIC0gSFRUUCZIVFRQUzogd2ViW29wdGlvbnNdOjx1cmw+XG4gICAgICogICBUd28gb3B0aW9ucyBhcmUgc3VwcG9ydGVkOlxuICAgICAqICAgLSBzeW5jOiBzeW5jIEhUVFAmSFRUUFMgcmVxdWVzdC5cbiAgICAgKiAgIC0gaWRlbXBvdGVudDogaW5kaWNhdGVzIHRoYXQgdGhlIENyZWF0ZSByZXF1ZXN0IGlzIGlkZW1wb3RlbnQuIFVwZGF0ZSBhbmQgRGVsZXRlIHJlcXVlc3RzIHNob3VsZCBiZSBhbHdheXMgaWRlbXBvdGVudC5cbiAgICAgKiBFeGFtcGxlczpcbiAgICAgKiAgIC0gYWNzOmZjOmNuLWhhbmd6aG91OjEyMzQ1Njc4OTpzZXJ2aWNlcy90ZXN0LXNlcnZpY2UvZnVuY3Rpb25zL3Rlc3QtZnVuY3Rpb25cbiAgICAgKiAgIC0gYWNzOm1uczpjbi1oYW5nemhvdToxMjM0NTY3ODk6cXVldWVzL3Rlc3QtcXVldWVcbiAgICAgKiAgIC0gYWNzOm1uczpjbi1oYW5nemhvdToxMjM0NTY3ODk6L3F1ZXVlcy90ZXN0LXF1ZXVlXG4gICAgICogICAtIGFjczptbnM6Y24taGFuZ3pob3U6MTIzNDU2Nzg5OnRvcGljcy90ZXN0LXRvcGljXG4gICAgICogICAtIGFjczptbnM6Y24taGFuZ3pob3U6MTIzNDU2Nzg5Oi90b3BpY3MvdGVzdC10b3BpY1xuICAgICAqICAgLSB3ZWI6aHR0cHM6Ly9hYmMuY29tXG4gICAgICogICAtIHdlYltzeW5jXTpodHRwOi8vYWJjLmNvbVxuICAgICAqICAgLSB3ZWJbc3luYyxpZGVtcG90ZW50XTpodHRwczovL2FiYy5jb21cbiAgICAgKi9cbiAgICBwdWJsaWMgc2VydmljZVRva2VuOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdGltZW91dDogVGltZW91dCBzZWNvbmRzIGJlZm9yZSBzZXJ2aWNlIHByb3ZpZGVyIHJlc3BvbnNlcy5cbiAgICAgKiBJdCB0YWtlcyBlZmZlY3RzIG9ubHkgaWYgdGhlIHR5cGUgb2YgU2VydmljZVRva2VuIGlzIEZ1bmN0aW9uIENvbXB1dGUsIE1OUyBRdWV1ZSwgTU5TIFRvcGljIG9yIGFzeW5jIEhUVFAmSFRUUFMgcmVxdWVzdC5cbiAgICAgKiBUaW1lb3V0IHNlY29uZHMgYXJlIGFsd2F5cyAxMCBmb3Igc3luYyBIVFRQJkhUVFBTIHJlcXVlc3QuXG4gICAgICovXG4gICAgcHVibGljIHRpbWVvdXQ6IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwYXJhbWV0ZXJzOiBQYXJhbWV0ZXJzIHRvIGJlIHBhc3NlZCB0byBzZXJ2aWNlIHByb3ZpZGVyLlxuICAgICAqL1xuICAgIHB1YmxpYyBwYXJhbWV0ZXJzOiB7IFtrZXk6IHN0cmluZ106IChhbnkgfCByb3MuSVJlc29sdmFibGUpIH0gfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6Uk9TOjpDdXN0b21SZXNvdXJjZWAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zQ3VzdG9tUmVzb3VyY2VQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc0N1c3RvbVJlc291cmNlLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJPdXRwdXRzID0gcm9zLlRva2VuLmFzU3RyaW5nKHRoaXMuZ2V0QXR0KCdPdXRwdXRzJykpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5zZXJ2aWNlVG9rZW4gPSBwcm9wcy5zZXJ2aWNlVG9rZW47XG4gICAgICAgIHRoaXMudGltZW91dCA9IHByb3BzLnRpbWVvdXQ7XG4gICAgICAgIHRoaXMucGFyYW1ldGVycyA9IHByb3BzLnBhcmFtZXRlcnM7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc2VydmljZVRva2VuOiB0aGlzLnNlcnZpY2VUb2tlbixcbiAgICAgICAgICAgIHRpbWVvdXQ6IHRoaXMudGltZW91dCxcbiAgICAgICAgICAgIHBhcmFtZXRlcnM6IHRoaXMucGFyYW1ldGVycyxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zQ3VzdG9tUmVzb3VyY2VQcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OlJPUzo6U3RhY2tgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zU3RhY2tQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcGFyYW1ldGVyczogVGhlIHNldCBvZiBwYXJhbWV0ZXJzIHBhc3NlZCB0byB0aGlzIG5lc3RlZCBzdGFjay5cbiAgICAgKi9cbiAgICByZWFkb25seSBwYXJhbWV0ZXJzPzogeyBba2V5OiBzdHJpbmddOiAoYW55IHwgcm9zLklSZXNvbHZhYmxlKSB9IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHRlbXBsYXRlQm9keTogU3RydWN0dXJlIGNvbnRhaW5pbmcgdGhlIHRlbXBsYXRlIGJvZHkuXG4gICAgICogSXQgaXMganVzdCB0byBmYWNpbGl0YXRlIHRoZSBwYXNzaW5nIG9mIHRlbXBsYXRlLiBJdCBpcyByYXcgY29udGVudC5GdW5jdGlvbnMgaW4gVGVtcGxhdGVCb2R5IHdpbGwgbm90IGJlIHJlc29sdmVkIGluIHBhcmVudCBzdGFjay5cbiAgICAgKiBZb3UgbXVzdCBzcGVjaWZ5IGVpdGhlciB0aGUgVGVtcGxhdGVCb2R5IG9yIHRoZSBUZW1wbGF0ZVVSTCBwcm9wZXJ0eS4gSWYgYm90aCBhcmUgc3BlY2lmaWVkLCBUZW1wbGF0ZUJvZHkgd2lsbCBiZSB1c2VkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRlbXBsYXRlQm9keT86IHsgW2tleTogc3RyaW5nXTogKGFueSB8IHJvcy5JUmVzb2x2YWJsZSkgfSB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0ZW1wbGF0ZUlkOiBUZW1wbGF0ZSBJRCBvZiB0ZW1wbGF0ZSBjb250YWluaW5nIHRoZSB0ZW1wbGF0ZSBib2R5LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRlbXBsYXRlSWQ/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdGVtcGxhdGVVcmw6IExvY2F0aW9uIG9mIGZpbGUgY29udGFpbmluZyB0aGUgdGVtcGxhdGUgYm9keS4gVGhlIFVSTCBtdXN0IHBvaW50IHRvIGEgdGVtcGxhdGUgKG1heCBzaXplOiA1MjQyODggYnl0ZXMpIHRoYXQgaXMgbG9jYXRlZCBpbiBhIGh0dHAgd2ViIHNlcnZlcihodHRwLCBodHRwcyksIG9yIGFuIEFsaXl1biBPU1MgYnVja2V0KFN1Y2ggYXMgb3NzOi8vcm9zLXRlbXBsYXRlL2RlbW8/UmVnaW9uSWQ9Y24taGFuZ3pob3UsIG9zczovL3Jvcy10ZW1wbGF0ZS9kZW1vLiBSZWdpb25JZCBpcyBkZWZhdWx0IHRvIHRoZSB2YWx1ZSBvZiBSZWdpb25JZCBQYXJhbWV0ZXIgb2YgdGhlIHJlcXVlc3QuKS5cbiAgICAgKiBZb3UgbXVzdCBzcGVjaWZ5IGVpdGhlciB0aGUgVGVtcGxhdGVCb2R5IG9yIHRoZSBUZW1wbGF0ZVVSTCBwcm9wZXJ0eS4gSWYgYm90aCBhcmUgc3BlY2lmaWVkLCBUZW1wbGF0ZUJvZHkgd2lsbCBiZSB1c2VkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRlbXBsYXRlVXJsPzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHRlbXBsYXRlVmVyc2lvbjogVGVtcGxhdGUgdmVyc2lvbiBvZiB0ZW1wbGF0ZSBjb250YWluaW5nIHRoZSB0ZW1wbGF0ZSBib2R5LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRlbXBsYXRlVmVyc2lvbj86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0aW1lb3V0TWluczogVGhlIGxlbmd0aCBvZiB0aW1lLCBpbiBtaW51dGVzLCB0byB3YWl0IGZvciB0aGUgbmVzdGVkIHN0YWNrIGNyZWF0aW9uIG9yIHVwZGF0ZS4gRGVmYXVsdCB0byA2MCBtaW51dGVzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRpbWVvdXRNaW5zPzogbnVtYmVyO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc1N0YWNrUHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc1N0YWNrUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zU3RhY2tQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBpZihwcm9wZXJ0aWVzLnRlbXBsYXRlVXJsICYmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXMudGVtcGxhdGVVcmwpIHx8ICh0eXBlb2YgcHJvcGVydGllcy50ZW1wbGF0ZVVybCkgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RlbXBsYXRlVXJsJywgcm9zLnZhbGlkYXRlTGVuZ3RoKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnRlbXBsYXRlVXJsLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgbWF4OiAxMDI0LFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0ZW1wbGF0ZVVybCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy50ZW1wbGF0ZVVybCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncGFyYW1ldGVycycsIHJvcy5oYXNoVmFsaWRhdG9yKHJvcy52YWxpZGF0ZUFueSkpKHByb3BlcnRpZXMucGFyYW1ldGVycykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGltZW91dE1pbnMnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMudGltZW91dE1pbnMpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnRlbXBsYXRlVmVyc2lvbiAmJiAodHlwZW9mIHByb3BlcnRpZXMudGVtcGxhdGVWZXJzaW9uKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0ZW1wbGF0ZVZlcnNpb24nLCByb3MudmFsaWRhdGVBbGxvd2VkUGF0dGVybikoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMudGVtcGxhdGVWZXJzaW9uLFxuICAgICAgICAgIHJlZzogL152KChbMS05XSl8KFsxLTldWzAtOV0pfChbMS05XVswLTldWzAtOV0pKSQvXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0ZW1wbGF0ZVZlcnNpb24nLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMudGVtcGxhdGVWZXJzaW9uKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0ZW1wbGF0ZUJvZHknLCByb3MuaGFzaFZhbGlkYXRvcihyb3MudmFsaWRhdGVBbnkpKShwcm9wZXJ0aWVzLnRlbXBsYXRlQm9keSkpO1xuICAgIGlmKHByb3BlcnRpZXMudGVtcGxhdGVJZCAmJiAodHlwZW9mIHByb3BlcnRpZXMudGVtcGxhdGVJZCkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGVtcGxhdGVJZCcsIHJvcy52YWxpZGF0ZUFsbG93ZWRQYXR0ZXJuKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy50ZW1wbGF0ZUlkLFxuICAgICAgICAgIHJlZzogL14oWzAtOWEtZl17OH1bLV1bMC05YS1mXXs0fVstXVswLTlhLWZdezR9Wy1dWzAtOWEtZl17NH1bLV1bMC05YS1mXXsxMn0pfChhY3NbOl1yb3NbOl1bKl1bOl1cXGQrWzpddGVtcGxhdGVcXC9bMC05YS1mXXs4fVstXVswLTlhLWZdezR9Wy1dWzAtOWEtZl17NH1bLV1bMC05YS1mXXs0fVstXVswLTlhLWZdezEyfSkkL1xuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGVtcGxhdGVJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy50ZW1wbGF0ZUlkKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc1N0YWNrUHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlJPUzo6U3RhY2tgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc1N0YWNrUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlJPUzo6U3RhY2tgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zU3RhY2tQcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc1N0YWNrUHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgUGFyYW1ldGVyczogcm9zLmhhc2hNYXBwZXIocm9zLm9iamVjdFRvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMucGFyYW1ldGVycyksXG4gICAgICBUZW1wbGF0ZUJvZHk6IHJvcy5oYXNoTWFwcGVyKHJvcy5vYmplY3RUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLnRlbXBsYXRlQm9keSksXG4gICAgICBUZW1wbGF0ZUlkOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnRlbXBsYXRlSWQpLFxuICAgICAgVGVtcGxhdGVVUkw6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudGVtcGxhdGVVcmwpLFxuICAgICAgVGVtcGxhdGVWZXJzaW9uOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnRlbXBsYXRlVmVyc2lvbiksXG4gICAgICBUaW1lb3V0TWluczogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy50aW1lb3V0TWlucyksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBBIFJPUyB0ZW1wbGF0ZSB0eXBlOiAgYEFMSVlVTjo6Uk9TOjpTdGFja2BcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc1N0YWNrIGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiQUxJWVVOOjpST1M6OlN0YWNrXCI7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHBhcmFtZXRlcnM6IFRoZSBzZXQgb2YgcGFyYW1ldGVycyBwYXNzZWQgdG8gdGhpcyBuZXN0ZWQgc3RhY2suXG4gICAgICovXG4gICAgcHVibGljIHBhcmFtZXRlcnM6IHsgW2tleTogc3RyaW5nXTogKGFueSB8IHJvcy5JUmVzb2x2YWJsZSkgfSB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0ZW1wbGF0ZUJvZHk6IFN0cnVjdHVyZSBjb250YWluaW5nIHRoZSB0ZW1wbGF0ZSBib2R5LlxuICAgICAqIEl0IGlzIGp1c3QgdG8gZmFjaWxpdGF0ZSB0aGUgcGFzc2luZyBvZiB0ZW1wbGF0ZS4gSXQgaXMgcmF3IGNvbnRlbnQuRnVuY3Rpb25zIGluIFRlbXBsYXRlQm9keSB3aWxsIG5vdCBiZSByZXNvbHZlZCBpbiBwYXJlbnQgc3RhY2suXG4gICAgICogWW91IG11c3Qgc3BlY2lmeSBlaXRoZXIgdGhlIFRlbXBsYXRlQm9keSBvciB0aGUgVGVtcGxhdGVVUkwgcHJvcGVydHkuIElmIGJvdGggYXJlIHNwZWNpZmllZCwgVGVtcGxhdGVCb2R5IHdpbGwgYmUgdXNlZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgdGVtcGxhdGVCb2R5OiB7IFtrZXk6IHN0cmluZ106IChhbnkgfCByb3MuSVJlc29sdmFibGUpIH0gfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdGVtcGxhdGVJZDogVGVtcGxhdGUgSUQgb2YgdGVtcGxhdGUgY29udGFpbmluZyB0aGUgdGVtcGxhdGUgYm9keS5cbiAgICAgKi9cbiAgICBwdWJsaWMgdGVtcGxhdGVJZDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHRlbXBsYXRlVXJsOiBMb2NhdGlvbiBvZiBmaWxlIGNvbnRhaW5pbmcgdGhlIHRlbXBsYXRlIGJvZHkuIFRoZSBVUkwgbXVzdCBwb2ludCB0byBhIHRlbXBsYXRlIChtYXggc2l6ZTogNTI0Mjg4IGJ5dGVzKSB0aGF0IGlzIGxvY2F0ZWQgaW4gYSBodHRwIHdlYiBzZXJ2ZXIoaHR0cCwgaHR0cHMpLCBvciBhbiBBbGl5dW4gT1NTIGJ1Y2tldChTdWNoIGFzIG9zczovL3Jvcy10ZW1wbGF0ZS9kZW1vP1JlZ2lvbklkPWNuLWhhbmd6aG91LCBvc3M6Ly9yb3MtdGVtcGxhdGUvZGVtby4gUmVnaW9uSWQgaXMgZGVmYXVsdCB0byB0aGUgdmFsdWUgb2YgUmVnaW9uSWQgUGFyYW1ldGVyIG9mIHRoZSByZXF1ZXN0LikuXG4gICAgICogWW91IG11c3Qgc3BlY2lmeSBlaXRoZXIgdGhlIFRlbXBsYXRlQm9keSBvciB0aGUgVGVtcGxhdGVVUkwgcHJvcGVydHkuIElmIGJvdGggYXJlIHNwZWNpZmllZCwgVGVtcGxhdGVCb2R5IHdpbGwgYmUgdXNlZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgdGVtcGxhdGVVcmw6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0ZW1wbGF0ZVZlcnNpb246IFRlbXBsYXRlIHZlcnNpb24gb2YgdGVtcGxhdGUgY29udGFpbmluZyB0aGUgdGVtcGxhdGUgYm9keS5cbiAgICAgKi9cbiAgICBwdWJsaWMgdGVtcGxhdGVWZXJzaW9uOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdGltZW91dE1pbnM6IFRoZSBsZW5ndGggb2YgdGltZSwgaW4gbWludXRlcywgdG8gd2FpdCBmb3IgdGhlIG5lc3RlZCBzdGFjayBjcmVhdGlvbiBvciB1cGRhdGUuIERlZmF1bHQgdG8gNjAgbWludXRlcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgdGltZW91dE1pbnM6IG51bWJlciB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpST1M6OlN0YWNrYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NTdGFja1Byb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zU3RhY2suUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLnBhcmFtZXRlcnMgPSBwcm9wcy5wYXJhbWV0ZXJzO1xuICAgICAgICB0aGlzLnRlbXBsYXRlQm9keSA9IHByb3BzLnRlbXBsYXRlQm9keTtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZUlkID0gcHJvcHMudGVtcGxhdGVJZDtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZVVybCA9IHByb3BzLnRlbXBsYXRlVXJsO1xuICAgICAgICB0aGlzLnRlbXBsYXRlVmVyc2lvbiA9IHByb3BzLnRlbXBsYXRlVmVyc2lvbjtcbiAgICAgICAgdGhpcy50aW1lb3V0TWlucyA9IHByb3BzLnRpbWVvdXRNaW5zO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHBhcmFtZXRlcnM6IHRoaXMucGFyYW1ldGVycyxcbiAgICAgICAgICAgIHRlbXBsYXRlQm9keTogdGhpcy50ZW1wbGF0ZUJvZHksXG4gICAgICAgICAgICB0ZW1wbGF0ZUlkOiB0aGlzLnRlbXBsYXRlSWQsXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogdGhpcy50ZW1wbGF0ZVVybCxcbiAgICAgICAgICAgIHRlbXBsYXRlVmVyc2lvbjogdGhpcy50ZW1wbGF0ZVZlcnNpb24sXG4gICAgICAgICAgICB0aW1lb3V0TWluczogdGhpcy50aW1lb3V0TWlucyxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zU3RhY2tQcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OlJPUzo6V2FpdENvbmRpdGlvbmBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NXYWl0Q29uZGl0aW9uUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGhhbmRsZTogQSByZWZlcmVuY2UgdG8gdGhlIHdhaXQgY29uZGl0aW9uIGhhbmRsZSB1c2VkIHRvIHNpZ25hbCB0aGlzIHdhaXQgY29uZGl0aW9uLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGhhbmRsZTogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHRpbWVvdXQ6IFRoZSBudW1iZXIgb2Ygc2Vjb25kcyB0byB3YWl0IGZvciB0aGUgY29ycmVjdCBudW1iZXIgb2Ygc2lnbmFscyB0byBhcnJpdmUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdGltZW91dDogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNvdW50OiBUaGUgbnVtYmVyIG9mIHN1Y2Nlc3Mgc2lnbmFscyB0aGF0IG11c3QgYmUgcmVjZWl2ZWQgYmVmb3JlIHRoZSBzdGFjayBjcmVhdGlvbiBwcm9jZXNzIGNvbnRpbnVlcy5cbiAgICAgKi9cbiAgICByZWFkb25seSBjb3VudD86IG51bWJlcjtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NXYWl0Q29uZGl0aW9uUHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc1dhaXRDb25kaXRpb25Qcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NXYWl0Q29uZGl0aW9uUHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0aW1lb3V0Jywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnRpbWVvdXQpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnRpbWVvdXQgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLnRpbWVvdXQpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RpbWVvdXQnLCByb3MudmFsaWRhdGVSYW5nZSkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy50aW1lb3V0LFxuICAgICAgICAgICAgbWluOiAxLFxuICAgICAgICAgICAgbWF4OiA0MzIwMCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGltZW91dCcsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy50aW1lb3V0KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjb3VudCcsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5jb3VudCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaGFuZGxlJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmhhbmRsZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaGFuZGxlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmhhbmRsZSkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NXYWl0Q29uZGl0aW9uUHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlJPUzo6V2FpdENvbmRpdGlvbmAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zV2FpdENvbmRpdGlvblByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpST1M6OldhaXRDb25kaXRpb25gIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zV2FpdENvbmRpdGlvblByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zV2FpdENvbmRpdGlvblByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIEhhbmRsZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5oYW5kbGUpLFxuICAgICAgVGltZW91dDogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy50aW1lb3V0KSxcbiAgICAgIENvdW50OiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmNvdW50KSxcbiAgICB9O1xufVxuXG4vKipcbiAqIEEgUk9TIHRlbXBsYXRlIHR5cGU6ICBgQUxJWVVOOjpST1M6OldhaXRDb25kaXRpb25gXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NXYWl0Q29uZGl0aW9uIGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiQUxJWVVOOjpST1M6OldhaXRDb25kaXRpb25cIjtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBEYXRhOiBKU09OIHNlcmlhbGl6ZWQgZGljdCBjb250YWluaW5nIGRhdGEgYXNzb2NpYXRlZCB3aXRoIHdhaXQgY29uZGl0aW9uIHNpZ25hbHMgc2VudCB0byB0aGUgaGFuZGxlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRGF0YTogYW55O1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBFcnJvckRhdGE6IEpTT04gc2VyaWFsaXplZCBkaWN0IGNvbnRhaW5pbmcgZGF0YSBhc3NvY2lhdGVkIHdpdGggd2FpdCBjb25kaXRpb24gZXJyb3Igc2lnbmFscyBzZW50IHRvIHRoZSBoYW5kbGUuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJFcnJvckRhdGE6IGFueTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgSm9pbmVkRXJyb3JEYXRhOiBTdHJpbmcgY29udGFpbmluZyBkYXRhIGFzc29jaWF0ZWQgd2l0aCB3YWl0IGNvbmRpdGlvbiBlcnJvciBzaWduYWxzIHNlbnQgdG8gdGhlIGhhbmRsZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckpvaW5lZEVycm9yRGF0YTogYW55O1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaGFuZGxlOiBBIHJlZmVyZW5jZSB0byB0aGUgd2FpdCBjb25kaXRpb24gaGFuZGxlIHVzZWQgdG8gc2lnbmFsIHRoaXMgd2FpdCBjb25kaXRpb24uXG4gICAgICovXG4gICAgcHVibGljIGhhbmRsZTogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHRpbWVvdXQ6IFRoZSBudW1iZXIgb2Ygc2Vjb25kcyB0byB3YWl0IGZvciB0aGUgY29ycmVjdCBudW1iZXIgb2Ygc2lnbmFscyB0byBhcnJpdmUuXG4gICAgICovXG4gICAgcHVibGljIHRpbWVvdXQ6IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjb3VudDogVGhlIG51bWJlciBvZiBzdWNjZXNzIHNpZ25hbHMgdGhhdCBtdXN0IGJlIHJlY2VpdmVkIGJlZm9yZSB0aGUgc3RhY2sgY3JlYXRpb24gcHJvY2VzcyBjb250aW51ZXMuXG4gICAgICovXG4gICAgcHVibGljIGNvdW50OiBudW1iZXIgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6Uk9TOjpXYWl0Q29uZGl0aW9uYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NXYWl0Q29uZGl0aW9uUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NXYWl0Q29uZGl0aW9uLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJEYXRhID0gcm9zLlRva2VuLmFzU3RyaW5nKHRoaXMuZ2V0QXR0KCdEYXRhJykpO1xuICAgICAgICB0aGlzLmF0dHJFcnJvckRhdGEgPSByb3MuVG9rZW4uYXNTdHJpbmcodGhpcy5nZXRBdHQoJ0Vycm9yRGF0YScpKTtcbiAgICAgICAgdGhpcy5hdHRySm9pbmVkRXJyb3JEYXRhID0gcm9zLlRva2VuLmFzU3RyaW5nKHRoaXMuZ2V0QXR0KCdKb2luZWRFcnJvckRhdGEnKSk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLmhhbmRsZSA9IHByb3BzLmhhbmRsZTtcbiAgICAgICAgdGhpcy50aW1lb3V0ID0gcHJvcHMudGltZW91dDtcbiAgICAgICAgdGhpcy5jb3VudCA9IHByb3BzLmNvdW50O1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGhhbmRsZTogdGhpcy5oYW5kbGUsXG4gICAgICAgICAgICB0aW1lb3V0OiB0aGlzLnRpbWVvdXQsXG4gICAgICAgICAgICBjb3VudDogdGhpcy5jb3VudCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zV2FpdENvbmRpdGlvblByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6Uk9TOjpXYWl0Q29uZGl0aW9uSGFuZGxlYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc1dhaXRDb25kaXRpb25IYW5kbGVQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY291bnQ6IFRoZXJlIGFyZSAzIHByZWNvbmRpdGlvbnMgdGhhdCBtYWtlIENvdW50IHRha2luZyBlZmZlY3Q6XG4gICAgICogMS5Nb2RlIGlzIHNldCB0byBGdWxsLlxuICAgICAqIDIuQ291bnQgPj0gMC5cbiAgICAgKiAzLlRoZSBpZCBvZiBzaWduYWwgaXMgbm90IHNwZWNpZmllZC4gSWYgc28sIGl0IHdpbGwgYmUgYSBzZWxmLWluY3JlYXNpbmcgaW50ZWdlciBzdGFydGVkIGZyb20gMS4gRm9yIGV4YW1wbGUsIHRoZSBpZCBvZiB0aGUgZmlyc3Qgc2lnbmFsIGlzIDEsIHRoZSBpZCBvZiB0aGUgc2Vjb25kIHNpZ25hbCBpcyAyLCBhbmQgc28gb24uXG4gICAgICogXG4gICAgICogSWYgQ291bnQgdGFrZXMgZWZmZWN0LCBzaWduYWxzIHdpdGggaWQgPiBDb3VudCB3aWxsIGJlIGRlbGV0ZWQgYmVmb3JlIHVwZGF0ZS5cbiAgICAgKiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyAtMSwgd2hpY2ggbWVhbnMgbm8gZWZmZWN0LlxuICAgICAqIEl0IGlzIHJlY29tbWVuZGVkIHRvIHF1b3RlIHRoZSBzYW1lIHZhbHVlIHdpdGggV2FpdENvbmRpdGlvbi5Db3VudC5cbiAgICAgKi9cbiAgICByZWFkb25seSBjb3VudD86IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBtb2RlOiBJZiBzZXQgdG8gSW5jcmVtZW50LCBhbGwgb2xkIHNpZ25hbHMgd2lsbCBiZSBkZWxldGVkIGJlZm9yZSB1cGRhdGUuIEluIHRoaXMgbW9kZSwgV2FpdENvbmRpdGlvbi5Db3VudCBzaG91bGQgcmVmZXJlbmNlIGFuIGluY3JlbWVudGFsIHZhbHVlIGluc3RlYWQgb2YgYSBmdWxsIHZhbHVlLCBzdWNoIGFzIFNjYWxpbmdHcm91cEVuYWJsZS5TY2FsaW5nUnVsZUFyaXNFeGVjdXRlUmVzdWx0TnVtYmVyT2ZBZGRlZEluc3RhbmNlcy5cbiAgICAgKiBcbiAgICAgKiBJZiBzZXQgdG8gRnVsbCwgbm8gb2xkIHNpZ25hbCB3aWxsIGJlIGRlbGV0ZWQgdW5sZXNzIENvdW50IGlzIHNldC4gSW4gdGhpcyBtb2RlLCBXYWl0Q29uZGl0aW9uLkNvdW50IHNob3VsZCByZWZlcmVuY2UgYSBmdWxsIHZhbHVlLCBzdWNoIGFzIHRoZSBzYW1lIHZhbHVlIHdpdGggSW5zdGFuY2VHcm91cC5NYXhBbW91bnQuIEl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGlzIG1vZGUgd2l0aCBDb3VudC5cbiAgICAgKiBcbiAgICAgKiBEZWZhdWx0IHRvIEZ1bGwuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbW9kZT86IHN0cmluZztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NXYWl0Q29uZGl0aW9uSGFuZGxlUHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc1dhaXRDb25kaXRpb25IYW5kbGVQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NXYWl0Q29uZGl0aW9uSGFuZGxlUHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgaWYocHJvcGVydGllcy5tb2RlICYmICh0eXBlb2YgcHJvcGVydGllcy5tb2RlKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdtb2RlJywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMubW9kZSxcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCJJbmNyZW1lbnRcIixcIkZ1bGxcIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdtb2RlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLm1vZGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NvdW50Jywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLmNvdW50KSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc1dhaXRDb25kaXRpb25IYW5kbGVQcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6Uk9TOjpXYWl0Q29uZGl0aW9uSGFuZGxlYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NXYWl0Q29uZGl0aW9uSGFuZGxlUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlJPUzo6V2FpdENvbmRpdGlvbkhhbmRsZWAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NXYWl0Q29uZGl0aW9uSGFuZGxlUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NXYWl0Q29uZGl0aW9uSGFuZGxlUHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgQ291bnQ6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuY291bnQpLFxuICAgICAgTW9kZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5tb2RlKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIEEgUk9TIHRlbXBsYXRlIHR5cGU6ICBgQUxJWVVOOjpST1M6OldhaXRDb25kaXRpb25IYW5kbGVgXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NXYWl0Q29uZGl0aW9uSGFuZGxlIGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiQUxJWVVOOjpST1M6OldhaXRDb25kaXRpb25IYW5kbGVcIjtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBDdXJsQ2xpOiBDb252ZW5pZW5jZSBhdHRyaWJ1dGUsIHByb3ZpZGVzIGN1cmwgQ0xJIGNvbW1hbmQgcHJlZml4LCB3aGljaCBjYW4gYmUgdXNlZCBmb3Igc2lnbmFsbGluZyBoYW5kbGUgY29tcGxldGlvbiBvciBmYWlsdXJlLiAgWW91IGNhbiBzaWduYWwgc3VjY2VzcyBieSBhZGRpbmcgLS1kYXRhLWJpbmFyeSAne1wic3RhdHVzXCI6IFwiU1VDQ0VTU1wifScgLCBvciBzaWduYWwgZmFpbHVyZSBieSBhZGRpbmcgLS1kYXRhLWJpbmFyeSAne1wic3RhdHVzXCI6IFwiRkFJTFVSRVwifSdcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckN1cmxDbGk6IGFueTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgSGVhZGVyczogSFRUUCBQT1NUIEhlYWRlcnMgdXNlZCBmb3Igc2lnbmFsbGluZyBoYW5kbGUgY29tcGxldGlvbiBvciBmYWlsdXJlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRySGVhZGVyczogYW55O1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBQb3dlclNoZWxsQ3VybENsaTogQ29udmVuaWVuY2UgYXR0cmlidXRlLCBwcm92aWRlcyBjdXJsIENMSSBjb21tYW5kIHByZWZpeCBmb3IgUG93ZXJTaGVsbCwgd2hpY2ggY2FuIGJlIHVzZWQgZm9yIHNpZ25hbGxpbmcgaGFuZGxlIGNvbXBsZXRpb24gb3IgZmFpbHVyZS4gQXMgdGhpcyBjbWRsZXQgd2FzIGludHJvZHVjZWQgaW4gUG93ZXJTaGVsbCAzLjAsIGVuc3VyZSB0aGUgdmVyc2lvbiBvZiBQb3dlclNoZWxsIHNhdGlzZmllcyB0aGUgY29uc3RyYWludC4gKFNob3cgdGhlIHZlcnNpb24gdmlhICRQU1ZlcnNpb25UYWJsZS5QU1ZlcnNpb24uKSBZb3UgY2FuIHNpZ25hbCBzdWNjZXNzIGJ5IGFkZGluZyAtQm9keSAne1wic3RhdHVzXCI6IFwiU1VDQ0VTU1wifScgLCBvciBzaWduYWwgZmFpbHVyZSBieSBhZGRpbmcgLUJvZHkgJ3tcInN0YXR1c1wiOiBcIkZBSUxVUkVcIn0nXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJQb3dlclNoZWxsQ3VybENsaTogYW55O1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBVUkw6IEhUVFAgUE9TVCBVUkwgdXNlZCBmb3Igc2lnbmFsbGluZyBoYW5kbGUgY29tcGxldGlvbiBvciBmYWlsdXJlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyVXJsOiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFdpbmRvd3NDdXJsQ2xpOiBDb252ZW5pZW5jZSBhdHRyaWJ1dGUsIHByb3ZpZGVzIGN1cmwgQ0xJIGNvbW1hbmQgcHJlZml4IGZvciBXaW5kb3dzLCB3aGljaCBjYW4gYmUgdXNlZCBmb3Igc2lnbmFsbGluZyBoYW5kbGUgY29tcGxldGlvbiBvciBmYWlsdXJlLiBBcyBXaW5kb3dzIGRvZXMgbm90IHN1cHBvcnQgY3VybCBjb21tYW5kLCB5b3UgbmVlZCB0byBpbnN0YWxsIGN1cmwuZXhlIGFuZCBhZGQgaXQgdG8gUEFUSCBmaXJzdC4gWW91IGNhbiBzaWduYWwgc3VjY2VzcyBieSBhZGRpbmcgLS1kYXRhLWJpbmFyeSBcIntcXFwic3RhdHVzXFxcIjogXFxcIlNVQ0NFU1NcXFwifVwiICwgb3Igc2lnbmFsIGZhaWx1cmUgYnkgYWRkaW5nIC0tZGF0YS1iaW5hcnkgXCJ7XFxcInN0YXR1c1xcXCI6IFxcXCJGQUlMVVJFXFxcIn1cIlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyV2luZG93c0N1cmxDbGk6IGFueTtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNvdW50OiBUaGVyZSBhcmUgMyBwcmVjb25kaXRpb25zIHRoYXQgbWFrZSBDb3VudCB0YWtpbmcgZWZmZWN0OlxuICAgICAqIDEuTW9kZSBpcyBzZXQgdG8gRnVsbC5cbiAgICAgKiAyLkNvdW50ID49IDAuXG4gICAgICogMy5UaGUgaWQgb2Ygc2lnbmFsIGlzIG5vdCBzcGVjaWZpZWQuIElmIHNvLCBpdCB3aWxsIGJlIGEgc2VsZi1pbmNyZWFzaW5nIGludGVnZXIgc3RhcnRlZCBmcm9tIDEuIEZvciBleGFtcGxlLCB0aGUgaWQgb2YgdGhlIGZpcnN0IHNpZ25hbCBpcyAxLCB0aGUgaWQgb2YgdGhlIHNlY29uZCBzaWduYWwgaXMgMiwgYW5kIHNvIG9uLlxuICAgICAqIFxuICAgICAqIElmIENvdW50IHRha2VzIGVmZmVjdCwgc2lnbmFscyB3aXRoIGlkID4gQ291bnQgd2lsbCBiZSBkZWxldGVkIGJlZm9yZSB1cGRhdGUuXG4gICAgICogVGhlIGRlZmF1bHQgdmFsdWUgaXMgLTEsIHdoaWNoIG1lYW5zIG5vIGVmZmVjdC5cbiAgICAgKiBJdCBpcyByZWNvbW1lbmRlZCB0byBxdW90ZSB0aGUgc2FtZSB2YWx1ZSB3aXRoIFdhaXRDb25kaXRpb24uQ291bnQuXG4gICAgICovXG4gICAgcHVibGljIGNvdW50OiBudW1iZXIgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbW9kZTogSWYgc2V0IHRvIEluY3JlbWVudCwgYWxsIG9sZCBzaWduYWxzIHdpbGwgYmUgZGVsZXRlZCBiZWZvcmUgdXBkYXRlLiBJbiB0aGlzIG1vZGUsIFdhaXRDb25kaXRpb24uQ291bnQgc2hvdWxkIHJlZmVyZW5jZSBhbiBpbmNyZW1lbnRhbCB2YWx1ZSBpbnN0ZWFkIG9mIGEgZnVsbCB2YWx1ZSwgc3VjaCBhcyBTY2FsaW5nR3JvdXBFbmFibGUuU2NhbGluZ1J1bGVBcmlzRXhlY3V0ZVJlc3VsdE51bWJlck9mQWRkZWRJbnN0YW5jZXMuXG4gICAgICogXG4gICAgICogSWYgc2V0IHRvIEZ1bGwsIG5vIG9sZCBzaWduYWwgd2lsbCBiZSBkZWxldGVkIHVubGVzcyBDb3VudCBpcyBzZXQuIEluIHRoaXMgbW9kZSwgV2FpdENvbmRpdGlvbi5Db3VudCBzaG91bGQgcmVmZXJlbmNlIGEgZnVsbCB2YWx1ZSwgc3VjaCBhcyB0aGUgc2FtZSB2YWx1ZSB3aXRoIEluc3RhbmNlR3JvdXAuTWF4QW1vdW50LiBJdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhpcyBtb2RlIHdpdGggQ291bnQuXG4gICAgICogXG4gICAgICogRGVmYXVsdCB0byBGdWxsLlxuICAgICAqL1xuICAgIHB1YmxpYyBtb2RlOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6Uk9TOjpXYWl0Q29uZGl0aW9uSGFuZGxlYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NXYWl0Q29uZGl0aW9uSGFuZGxlUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NXYWl0Q29uZGl0aW9uSGFuZGxlLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJDdXJsQ2xpID0gcm9zLlRva2VuLmFzU3RyaW5nKHRoaXMuZ2V0QXR0KCdDdXJsQ2xpJykpO1xuICAgICAgICB0aGlzLmF0dHJIZWFkZXJzID0gcm9zLlRva2VuLmFzU3RyaW5nKHRoaXMuZ2V0QXR0KCdIZWFkZXJzJykpO1xuICAgICAgICB0aGlzLmF0dHJQb3dlclNoZWxsQ3VybENsaSA9IHJvcy5Ub2tlbi5hc1N0cmluZyh0aGlzLmdldEF0dCgnUG93ZXJTaGVsbEN1cmxDbGknKSk7XG4gICAgICAgIHRoaXMuYXR0clVybCA9IHJvcy5Ub2tlbi5hc1N0cmluZyh0aGlzLmdldEF0dCgnVVJMJykpO1xuICAgICAgICB0aGlzLmF0dHJXaW5kb3dzQ3VybENsaSA9IHJvcy5Ub2tlbi5hc1N0cmluZyh0aGlzLmdldEF0dCgnV2luZG93c0N1cmxDbGknKSk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLmNvdW50ID0gcHJvcHMuY291bnQ7XG4gICAgICAgIHRoaXMubW9kZSA9IHByb3BzLm1vZGU7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY291bnQ6IHRoaXMuY291bnQsXG4gICAgICAgICAgICBtb2RlOiB0aGlzLm1vZGUsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc1dhaXRDb25kaXRpb25IYW5kbGVQcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cbiJdfQ==