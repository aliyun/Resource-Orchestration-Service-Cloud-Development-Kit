// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosCompressionRule`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-compressionrule
 */
export interface RosCompressionRuleProps {

    /**
     * @Property siteId: The site ID, which can be obtained by calling the ListSites API.
     */
    readonly siteId: number | ros.IResolvable;

    /**
     * @Property brotli: Brotli compression. Value range:
     * on: Enable.
     * off: Disable.
     */
    readonly brotli?: string | ros.IResolvable;

    /**
     * @Property gzip: Gzip compression. Value range:
     * on: Enable.
     * off: Disable.
     */
    readonly gzip?: string | ros.IResolvable;

    /**
     * @Property paymentType: Payment Type.
     */
    readonly paymentType?: string | ros.IResolvable;

    /**
     * @Property rule: Rule content, using conditional expressions to match user requests. When adding global configuration, this parameter does not need to be set. There are two usage scenarios:
     * - Match all incoming requests: value set to true
     * - Match specified request: Set the value to a custom expression, for example: (http.host eq \"video.example.com\").
     */
    readonly rule?: string | ros.IResolvable;

    /**
     * @Property ruleEnable: Rule switch. When adding global configuration, this parameter does not need to be set. Value range:
     * on: Enable.
     * off: Disable.
     */
    readonly ruleEnable?: string | ros.IResolvable;

    /**
     * @Property ruleName: Rule name. When adding global configuration, this parameter does not need to be set.
     */
    readonly ruleName?: string | ros.IResolvable;

    /**
     * @Property sequence: Order of rule execution. The smaller the value, the higher the priority for execution.
     */
    readonly sequence?: number | ros.IResolvable;

    /**
     * @Property siteVersion: The version number of the site configuration. For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
     */
    readonly siteVersion?: number | ros.IResolvable;

    /**
     * @Property zstd: Zstd compression. Value range:
     * on: Enable.
     * off: Disable.
     */
    readonly zstd?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosCompressionRuleProps`
 *
 * @param properties - the TypeScript properties of a `RosCompressionRuleProps`
 *
 * @returns the result of the validation.
 */
function RosCompressionRulePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('siteId', ros.requiredValidator)(properties.siteId));
    errors.collect(ros.propertyValidator('siteId', ros.validateNumber)(properties.siteId));
    if(properties.zstd && (typeof properties.zstd) !== 'object') {
        errors.collect(ros.propertyValidator('zstd', ros.validateAllowedValues)({
          data: properties.zstd,
          allowedValues: ["on","off"],
        }));
    }
    errors.collect(ros.propertyValidator('zstd', ros.validateString)(properties.zstd));
    if(properties.ruleEnable && (typeof properties.ruleEnable) !== 'object') {
        errors.collect(ros.propertyValidator('ruleEnable', ros.validateAllowedValues)({
          data: properties.ruleEnable,
          allowedValues: ["on","off"],
        }));
    }
    errors.collect(ros.propertyValidator('ruleEnable', ros.validateString)(properties.ruleEnable));
    if(properties.brotli && (typeof properties.brotli) !== 'object') {
        errors.collect(ros.propertyValidator('brotli', ros.validateAllowedValues)({
          data: properties.brotli,
          allowedValues: ["on","off"],
        }));
    }
    errors.collect(ros.propertyValidator('brotli', ros.validateString)(properties.brotli));
    if(properties.gzip && (typeof properties.gzip) !== 'object') {
        errors.collect(ros.propertyValidator('gzip', ros.validateAllowedValues)({
          data: properties.gzip,
          allowedValues: ["on","off"],
        }));
    }
    errors.collect(ros.propertyValidator('gzip', ros.validateString)(properties.gzip));
    errors.collect(ros.propertyValidator('paymentType', ros.validateString)(properties.paymentType));
    errors.collect(ros.propertyValidator('sequence', ros.validateNumber)(properties.sequence));
    errors.collect(ros.propertyValidator('rule', ros.validateString)(properties.rule));
    errors.collect(ros.propertyValidator('siteVersion', ros.validateNumber)(properties.siteVersion));
    errors.collect(ros.propertyValidator('ruleName', ros.validateString)(properties.ruleName));
    return errors.wrap('supplied properties not correct for "RosCompressionRuleProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ESA::CompressionRule` resource
 *
 * @param properties - the TypeScript properties of a `RosCompressionRuleProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ESA::CompressionRule` resource.
 */
// @ts-ignore TS6133
function rosCompressionRulePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosCompressionRulePropsValidator(properties).assertSuccess();
    }
    return {
      'SiteId': ros.numberToRosTemplate(properties.siteId),
      'Brotli': ros.stringToRosTemplate(properties.brotli),
      'Gzip': ros.stringToRosTemplate(properties.gzip),
      'PaymentType': ros.stringToRosTemplate(properties.paymentType),
      'Rule': ros.stringToRosTemplate(properties.rule),
      'RuleEnable': ros.stringToRosTemplate(properties.ruleEnable),
      'RuleName': ros.stringToRosTemplate(properties.ruleName),
      'Sequence': ros.numberToRosTemplate(properties.sequence),
      'SiteVersion': ros.numberToRosTemplate(properties.siteVersion),
      'Zstd': ros.stringToRosTemplate(properties.zstd),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ESA::CompressionRule`.
 * @Note This class does not contain additional functions, so it is recommended to use the `CompressionRule` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-compressionrule
 */
export class RosCompressionRule extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ESA::CompressionRule";

    /**
     * @Attribute Brotli: Brotli compression.
     */
    public readonly attrBrotli: ros.IResolvable;

    /**
     * @Attribute ConfigId: Config Id.
     */
    public readonly attrConfigId: ros.IResolvable;

    /**
     * @Attribute ConfigType: The type of the configuration.
     */
    public readonly attrConfigType: ros.IResolvable;

    /**
     * @Attribute Gzip: Gzip compression.
     */
    public readonly attrGzip: ros.IResolvable;

    /**
     * @Attribute Rule: Rule content, using conditional expressions to match user requests. When adding global configuration, this parameter does not need to be set.
     */
    public readonly attrRule: ros.IResolvable;

    /**
     * @Attribute RuleEnable: Rule switch. When adding global configuration, this parameter does not need to be set.
     */
    public readonly attrRuleEnable: ros.IResolvable;

    /**
     * @Attribute RuleName: Rule name. When adding global configuration, this parameter does not need to be set.
     */
    public readonly attrRuleName: ros.IResolvable;

    /**
     * @Attribute Sequence: Order of rule execution. The smaller the value, the higher the priority for execution.
     */
    public readonly attrSequence: ros.IResolvable;

    /**
     * @Attribute SiteVersion: The version number of the site configuration. For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
     */
    public readonly attrSiteVersion: ros.IResolvable;

    /**
     * @Attribute Zstd: Zstd compression.
     */
    public readonly attrZstd: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property siteId: The site ID, which can be obtained by calling the ListSites API.
     */
    public siteId: number | ros.IResolvable;

    /**
     * @Property brotli: Brotli compression. Value range:
     * on: Enable.
     * off: Disable.
     */
    public brotli: string | ros.IResolvable | undefined;

    /**
     * @Property gzip: Gzip compression. Value range:
     * on: Enable.
     * off: Disable.
     */
    public gzip: string | ros.IResolvable | undefined;

    /**
     * @Property paymentType: Payment Type.
     */
    public paymentType: string | ros.IResolvable | undefined;

    /**
     * @Property rule: Rule content, using conditional expressions to match user requests. When adding global configuration, this parameter does not need to be set. There are two usage scenarios:
     * - Match all incoming requests: value set to true
     * - Match specified request: Set the value to a custom expression, for example: (http.host eq \"video.example.com\").
     */
    public rule: string | ros.IResolvable | undefined;

    /**
     * @Property ruleEnable: Rule switch. When adding global configuration, this parameter does not need to be set. Value range:
     * on: Enable.
     * off: Disable.
     */
    public ruleEnable: string | ros.IResolvable | undefined;

    /**
     * @Property ruleName: Rule name. When adding global configuration, this parameter does not need to be set.
     */
    public ruleName: string | ros.IResolvable | undefined;

    /**
     * @Property sequence: Order of rule execution. The smaller the value, the higher the priority for execution.
     */
    public sequence: number | ros.IResolvable | undefined;

    /**
     * @Property siteVersion: The version number of the site configuration. For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
     */
    public siteVersion: number | ros.IResolvable | undefined;

    /**
     * @Property zstd: Zstd compression. Value range:
     * on: Enable.
     * off: Disable.
     */
    public zstd: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosCompressionRuleProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosCompressionRule.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrBrotli = this.getAtt('Brotli');
        this.attrConfigId = this.getAtt('ConfigId');
        this.attrConfigType = this.getAtt('ConfigType');
        this.attrGzip = this.getAtt('Gzip');
        this.attrRule = this.getAtt('Rule');
        this.attrRuleEnable = this.getAtt('RuleEnable');
        this.attrRuleName = this.getAtt('RuleName');
        this.attrSequence = this.getAtt('Sequence');
        this.attrSiteVersion = this.getAtt('SiteVersion');
        this.attrZstd = this.getAtt('Zstd');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.siteId = props.siteId;
        this.brotli = props.brotli;
        this.gzip = props.gzip;
        this.paymentType = props.paymentType;
        this.rule = props.rule;
        this.ruleEnable = props.ruleEnable;
        this.ruleName = props.ruleName;
        this.sequence = props.sequence;
        this.siteVersion = props.siteVersion;
        this.zstd = props.zstd;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            siteId: this.siteId,
            brotli: this.brotli,
            gzip: this.gzip,
            paymentType: this.paymentType,
            rule: this.rule,
            ruleEnable: this.ruleEnable,
            ruleName: this.ruleName,
            sequence: this.sequence,
            siteVersion: this.siteVersion,
            zstd: this.zstd,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosCompressionRulePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosCustomScenePolicy`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-customscenepolicy
 */
export interface RosCustomScenePolicyProps {

    /**
     * @Property createTime: The time when the policy takes effect.
     * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
     */
    readonly createTime: string | ros.IResolvable;

    /**
     * @Property customScenePolicyName: The policy name.
     */
    readonly customScenePolicyName: string | ros.IResolvable;

    /**
     * @Property endTime: The time when the policy expires.
     * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
     */
    readonly endTime: string | ros.IResolvable;

    /**
     * @Property objects: The IDs of the websites that you want to associate with the policy. Separate multiple IDs with commas (,).
     */
    readonly objects: string | ros.IResolvable;

    /**
     * @Property template: The name of the policy template. Valid value:
     * promotion: major events.
     */
    readonly template: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosCustomScenePolicyProps`
 *
 * @param properties - the TypeScript properties of a `RosCustomScenePolicyProps`
 *
 * @returns the result of the validation.
 */
function RosCustomScenePolicyPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('customScenePolicyName', ros.requiredValidator)(properties.customScenePolicyName));
    errors.collect(ros.propertyValidator('customScenePolicyName', ros.validateString)(properties.customScenePolicyName));
    errors.collect(ros.propertyValidator('endTime', ros.requiredValidator)(properties.endTime));
    errors.collect(ros.propertyValidator('endTime', ros.validateString)(properties.endTime));
    errors.collect(ros.propertyValidator('createTime', ros.requiredValidator)(properties.createTime));
    errors.collect(ros.propertyValidator('createTime', ros.validateString)(properties.createTime));
    errors.collect(ros.propertyValidator('objects', ros.requiredValidator)(properties.objects));
    errors.collect(ros.propertyValidator('objects', ros.validateString)(properties.objects));
    errors.collect(ros.propertyValidator('template', ros.requiredValidator)(properties.template));
    if(properties.template && (typeof properties.template) !== 'object') {
        errors.collect(ros.propertyValidator('template', ros.validateAllowedValues)({
          data: properties.template,
          allowedValues: ["promotion"],
        }));
    }
    errors.collect(ros.propertyValidator('template', ros.validateString)(properties.template));
    return errors.wrap('supplied properties not correct for "RosCustomScenePolicyProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ESA::CustomScenePolicy` resource
 *
 * @param properties - the TypeScript properties of a `RosCustomScenePolicyProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ESA::CustomScenePolicy` resource.
 */
// @ts-ignore TS6133
function rosCustomScenePolicyPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosCustomScenePolicyPropsValidator(properties).assertSuccess();
    }
    return {
      'CreateTime': ros.stringToRosTemplate(properties.createTime),
      'CustomScenePolicyName': ros.stringToRosTemplate(properties.customScenePolicyName),
      'EndTime': ros.stringToRosTemplate(properties.endTime),
      'Objects': ros.stringToRosTemplate(properties.objects),
      'Template': ros.stringToRosTemplate(properties.template),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ESA::CustomScenePolicy`.
 * @Note This class does not contain additional functions, so it is recommended to use the `CustomScenePolicy` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-customscenepolicy
 */
export class RosCustomScenePolicy extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ESA::CustomScenePolicy";

    /**
     * @Attribute CreateTime: The time when the policy takes effect.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute CustomScenePolicyName: The name of the policy.
     */
    public readonly attrCustomScenePolicyName: ros.IResolvable;

    /**
     * @Attribute EndTime: The time when the policy expires.
     */
    public readonly attrEndTime: ros.IResolvable;

    /**
     * @Attribute Objects: The IDs of websites associated.
     */
    public readonly attrObjects: ros.IResolvable;

    /**
     * @Attribute PolicyId: The Id of the Policy.
     */
    public readonly attrPolicyId: ros.IResolvable;

    /**
     * @Attribute Template: The name of the policy template.
     */
    public readonly attrTemplate: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property createTime: The time when the policy takes effect.
     * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
     */
    public createTime: string | ros.IResolvable;

    /**
     * @Property customScenePolicyName: The policy name.
     */
    public customScenePolicyName: string | ros.IResolvable;

    /**
     * @Property endTime: The time when the policy expires.
     * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
     */
    public endTime: string | ros.IResolvable;

    /**
     * @Property objects: The IDs of the websites that you want to associate with the policy. Separate multiple IDs with commas (,).
     */
    public objects: string | ros.IResolvable;

    /**
     * @Property template: The name of the policy template. Valid value:
     * promotion: major events.
     */
    public template: string | ros.IResolvable;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosCustomScenePolicyProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosCustomScenePolicy.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrCustomScenePolicyName = this.getAtt('CustomScenePolicyName');
        this.attrEndTime = this.getAtt('EndTime');
        this.attrObjects = this.getAtt('Objects');
        this.attrPolicyId = this.getAtt('PolicyId');
        this.attrTemplate = this.getAtt('Template');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.createTime = props.createTime;
        this.customScenePolicyName = props.customScenePolicyName;
        this.endTime = props.endTime;
        this.objects = props.objects;
        this.template = props.template;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            createTime: this.createTime,
            customScenePolicyName: this.customScenePolicyName,
            endTime: this.endTime,
            objects: this.objects,
            template: this.template,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosCustomScenePolicyPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosEdgeContainerApp`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-edgecontainerapp
 */
export interface RosEdgeContainerAppProps {

    /**
     * @Property edgeContainerAppName: The name of the application. The name must start with a lowercase letter and can contain lowercase letters, digits, and hyphens (-). The name must be 6 to 128 characters in length.
     */
    readonly edgeContainerAppName: string | ros.IResolvable;

    /**
     * @Property servicePort: The server port. Valid values: 1 to 65535.
     */
    readonly servicePort: number | ros.IResolvable;

    /**
     * @Property targetPort: The backend port, which is also the service port of the application. Valid values: 1 to 65535.
     */
    readonly targetPort: number | ros.IResolvable;

    /**
     * @Property healthCheckFailTimes: The number of consecutive failed health checks required for an application to be considered as unhealthy. Valid values: 1 to 10. Default value: 5.
     */
    readonly healthCheckFailTimes?: number | ros.IResolvable;

    /**
     * @Property healthCheckHost: The domain name that is used for health checks. This parameter is empty by default.
     */
    readonly healthCheckHost?: string | ros.IResolvable;

    /**
     * @Property healthCheckHttpCode: The HTTP status code returned for a successful health check. Valid values:
     * http_2xx (default)http_3xx
     */
    readonly healthCheckHttpCode?: string | ros.IResolvable;

    /**
     * @Property healthCheckInterval: The interval between two consecutive health checks. Unit: seconds. Valid values: 1 to 50. Default value: 5.
     */
    readonly healthCheckInterval?: number | ros.IResolvable;

    /**
     * @Property healthCheckMethod: The HTTP request method for health checks. Valid values:
     * HEAD (default): requests the headers of the resource.
     * GET: requests the specified resource and returns both the headers and entity body.
     */
    readonly healthCheckMethod?: string | ros.IResolvable;

    /**
     * @Property healthCheckPort: The port used for health checks. Valid values: 1 to 65535. Default value: 80.
     */
    readonly healthCheckPort?: number | ros.IResolvable;

    /**
     * @Property healthCheckSuccTimes: The number of consecutive successful health checks required for an application to be considered as healthy. Valid values: 1 to 10. Default value: 2.
     */
    readonly healthCheckSuccTimes?: number | ros.IResolvable;

    /**
     * @Property healthCheckTimeout: The timeout period of a health check response. If a backend ECS instance does not respond within the specified timeout period, the ECS instance fails the health check. Unit: seconds. Valid values: 1 to 100. Default value: 3.
     */
    readonly healthCheckTimeout?: number | ros.IResolvable;

    /**
     * @Property healthCheckType: The health check type. By default, this parameter is left empty. Valid values:
     * l4: Layer 4 health check.
     * l7: Layer 7 health check.
     *
     */
    readonly healthCheckType?: string | ros.IResolvable;

    /**
     * @Property healthCheckUri: The URI used for health checks. The URI must be 1 to 80 characters in length. Default value: "\/".
     */
    readonly healthCheckUri?: string | ros.IResolvable;

    /**
     * @Property remarks: The remarks. This parameter is empty by default.
     */
    readonly remarks?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosEdgeContainerAppProps`
 *
 * @param properties - the TypeScript properties of a `RosEdgeContainerAppProps`
 *
 * @returns the result of the validation.
 */
function RosEdgeContainerAppPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.healthCheckFailTimes && (typeof properties.healthCheckFailTimes) !== 'object') {
        errors.collect(ros.propertyValidator('healthCheckFailTimes', ros.validateRange)({
            data: properties.healthCheckFailTimes,
            min: 1,
            max: 10,
          }));
    }
    errors.collect(ros.propertyValidator('healthCheckFailTimes', ros.validateNumber)(properties.healthCheckFailTimes));
    errors.collect(ros.propertyValidator('servicePort', ros.requiredValidator)(properties.servicePort));
    if(properties.servicePort && (typeof properties.servicePort) !== 'object') {
        errors.collect(ros.propertyValidator('servicePort', ros.validateRange)({
            data: properties.servicePort,
            min: 1,
            max: 65535,
          }));
    }
    errors.collect(ros.propertyValidator('servicePort', ros.validateNumber)(properties.servicePort));
    if(properties.healthCheckInterval && (typeof properties.healthCheckInterval) !== 'object') {
        errors.collect(ros.propertyValidator('healthCheckInterval', ros.validateRange)({
            data: properties.healthCheckInterval,
            min: 1,
            max: 50,
          }));
    }
    errors.collect(ros.propertyValidator('healthCheckInterval', ros.validateNumber)(properties.healthCheckInterval));
    errors.collect(ros.propertyValidator('targetPort', ros.requiredValidator)(properties.targetPort));
    if(properties.targetPort && (typeof properties.targetPort) !== 'object') {
        errors.collect(ros.propertyValidator('targetPort', ros.validateRange)({
            data: properties.targetPort,
            min: 1,
            max: 65535,
          }));
    }
    errors.collect(ros.propertyValidator('targetPort', ros.validateNumber)(properties.targetPort));
    errors.collect(ros.propertyValidator('healthCheckUri', ros.validateString)(properties.healthCheckUri));
    errors.collect(ros.propertyValidator('healthCheckHost', ros.validateString)(properties.healthCheckHost));
    if(properties.healthCheckTimeout && (typeof properties.healthCheckTimeout) !== 'object') {
        errors.collect(ros.propertyValidator('healthCheckTimeout', ros.validateRange)({
            data: properties.healthCheckTimeout,
            min: 1,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('healthCheckTimeout', ros.validateNumber)(properties.healthCheckTimeout));
    if(properties.healthCheckSuccTimes && (typeof properties.healthCheckSuccTimes) !== 'object') {
        errors.collect(ros.propertyValidator('healthCheckSuccTimes', ros.validateRange)({
            data: properties.healthCheckSuccTimes,
            min: 1,
            max: 10,
          }));
    }
    errors.collect(ros.propertyValidator('healthCheckSuccTimes', ros.validateNumber)(properties.healthCheckSuccTimes));
    errors.collect(ros.propertyValidator('remarks', ros.validateString)(properties.remarks));
    errors.collect(ros.propertyValidator('healthCheckMethod', ros.validateString)(properties.healthCheckMethod));
    if(properties.healthCheckPort && (typeof properties.healthCheckPort) !== 'object') {
        errors.collect(ros.propertyValidator('healthCheckPort', ros.validateRange)({
            data: properties.healthCheckPort,
            min: 1,
            max: 65535,
          }));
    }
    errors.collect(ros.propertyValidator('healthCheckPort', ros.validateNumber)(properties.healthCheckPort));
    errors.collect(ros.propertyValidator('edgeContainerAppName', ros.requiredValidator)(properties.edgeContainerAppName));
    errors.collect(ros.propertyValidator('edgeContainerAppName', ros.validateString)(properties.edgeContainerAppName));
    errors.collect(ros.propertyValidator('healthCheckHttpCode', ros.validateString)(properties.healthCheckHttpCode));
    if(properties.healthCheckType && (typeof properties.healthCheckType) !== 'object') {
        errors.collect(ros.propertyValidator('healthCheckType', ros.validateAllowedValues)({
          data: properties.healthCheckType,
          allowedValues: ["l4","l7"],
        }));
    }
    errors.collect(ros.propertyValidator('healthCheckType', ros.validateString)(properties.healthCheckType));
    return errors.wrap('supplied properties not correct for "RosEdgeContainerAppProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ESA::EdgeContainerApp` resource
 *
 * @param properties - the TypeScript properties of a `RosEdgeContainerAppProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ESA::EdgeContainerApp` resource.
 */
// @ts-ignore TS6133
function rosEdgeContainerAppPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosEdgeContainerAppPropsValidator(properties).assertSuccess();
    }
    return {
      'EdgeContainerAppName': ros.stringToRosTemplate(properties.edgeContainerAppName),
      'ServicePort': ros.numberToRosTemplate(properties.servicePort),
      'TargetPort': ros.numberToRosTemplate(properties.targetPort),
      'HealthCheckFailTimes': ros.numberToRosTemplate(properties.healthCheckFailTimes),
      'HealthCheckHost': ros.stringToRosTemplate(properties.healthCheckHost),
      'HealthCheckHttpCode': ros.stringToRosTemplate(properties.healthCheckHttpCode),
      'HealthCheckInterval': ros.numberToRosTemplate(properties.healthCheckInterval),
      'HealthCheckMethod': ros.stringToRosTemplate(properties.healthCheckMethod),
      'HealthCheckPort': ros.numberToRosTemplate(properties.healthCheckPort),
      'HealthCheckSuccTimes': ros.numberToRosTemplate(properties.healthCheckSuccTimes),
      'HealthCheckTimeout': ros.numberToRosTemplate(properties.healthCheckTimeout),
      'HealthCheckType': ros.stringToRosTemplate(properties.healthCheckType),
      'HealthCheckUri': ros.stringToRosTemplate(properties.healthCheckUri),
      'Remarks': ros.stringToRosTemplate(properties.remarks),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ESA::EdgeContainerApp`.
 * @Note This class does not contain additional functions, so it is recommended to use the `EdgeContainerApp` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-edgecontainerapp
 */
export class RosEdgeContainerApp extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ESA::EdgeContainerApp";

    /**
     * @Attribute AppStatus: The status of the application.
     */
    public readonly attrAppStatus: ros.IResolvable;

    /**
     * @Attribute CreateTime: The time when the application was created.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute DomainName: The domain name that is associated with the application. If no domain name is associated with the application, the value is an empty string.
     */
    public readonly attrDomainName: ros.IResolvable;

    /**
     * @Attribute EdgeContainerAppName: The name of the application.
     */
    public readonly attrEdgeContainerAppName: ros.IResolvable;

    /**
     * @Attribute GatewayType: The type of the gateway.
     */
    public readonly attrGatewayType: ros.IResolvable;

    /**
     * @Attribute HealthCheckFailTimes: TThe number of consecutive failed health checks required for an application to be considered as unhealthy.
     */
    public readonly attrHealthCheckFailTimes: ros.IResolvable;

    /**
     * @Attribute HealthCheckHost: The domain name that is used for health checks.
     */
    public readonly attrHealthCheckHost: ros.IResolvable;

    /**
     * @Attribute HealthCheckHttpCode: The HTTP status code returned for a successful health check.
     */
    public readonly attrHealthCheckHttpCode: ros.IResolvable;

    /**
     * @Attribute HealthCheckInterval: The interval between two consecutive health checks. Unit: seconds.
     */
    public readonly attrHealthCheckInterval: ros.IResolvable;

    /**
     * @Attribute HealthCheckMethod: The HTTP request method for health checks.
     */
    public readonly attrHealthCheckMethod: ros.IResolvable;

    /**
     * @Attribute HealthCheckPort: The port used for health checks. Valid values: 1 to 65535. Default value: 80.
     */
    public readonly attrHealthCheckPort: ros.IResolvable;

    /**
     * @Attribute HealthCheckSuccTimes: The number of consecutive successful health checks required for an application to be considered as healthy.
     */
    public readonly attrHealthCheckSuccTimes: ros.IResolvable;

    /**
     * @Attribute HealthCheckTimeout: The timeout period of a health check response.
     */
    public readonly attrHealthCheckTimeout: ros.IResolvable;

    /**
     * @Attribute HealthCheckType: The health check type.
     */
    public readonly attrHealthCheckType: ros.IResolvable;

    /**
     * @Attribute HealthCheckUri: The URI used for health checks.
     */
    public readonly attrHealthCheckUri: ros.IResolvable;

    /**
     * @Attribute QuicCid: Indicates whether QUIC is enabled.
     */
    public readonly attrQuicCid: ros.IResolvable;

    /**
     * @Attribute Remarks: The remarks. This parameter is empty by default.
     */
    public readonly attrRemarks: ros.IResolvable;

    /**
     * @Attribute ServicePort: The server port.
     */
    public readonly attrServicePort: ros.IResolvable;

    /**
     * @Attribute TargetPort: The backend port, which is also the service port of the application.
     */
    public readonly attrTargetPort: ros.IResolvable;

    /**
     * @Attribute UpdateTime: The time when the application was last modified. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss format. The time is displayed in UTC.
     */
    public readonly attrUpdateTime: ros.IResolvable;

    /**
     * @Attribute VersionCount: The number of versions of the application.
     */
    public readonly attrVersionCount: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property edgeContainerAppName: The name of the application. The name must start with a lowercase letter and can contain lowercase letters, digits, and hyphens (-). The name must be 6 to 128 characters in length.
     */
    public edgeContainerAppName: string | ros.IResolvable;

    /**
     * @Property servicePort: The server port. Valid values: 1 to 65535.
     */
    public servicePort: number | ros.IResolvable;

    /**
     * @Property targetPort: The backend port, which is also the service port of the application. Valid values: 1 to 65535.
     */
    public targetPort: number | ros.IResolvable;

    /**
     * @Property healthCheckFailTimes: The number of consecutive failed health checks required for an application to be considered as unhealthy. Valid values: 1 to 10. Default value: 5.
     */
    public healthCheckFailTimes: number | ros.IResolvable | undefined;

    /**
     * @Property healthCheckHost: The domain name that is used for health checks. This parameter is empty by default.
     */
    public healthCheckHost: string | ros.IResolvable | undefined;

    /**
     * @Property healthCheckHttpCode: The HTTP status code returned for a successful health check. Valid values:
     * http_2xx (default)http_3xx
     */
    public healthCheckHttpCode: string | ros.IResolvable | undefined;

    /**
     * @Property healthCheckInterval: The interval between two consecutive health checks. Unit: seconds. Valid values: 1 to 50. Default value: 5.
     */
    public healthCheckInterval: number | ros.IResolvable | undefined;

    /**
     * @Property healthCheckMethod: The HTTP request method for health checks. Valid values:
     * HEAD (default): requests the headers of the resource.
     * GET: requests the specified resource and returns both the headers and entity body.
     */
    public healthCheckMethod: string | ros.IResolvable | undefined;

    /**
     * @Property healthCheckPort: The port used for health checks. Valid values: 1 to 65535. Default value: 80.
     */
    public healthCheckPort: number | ros.IResolvable | undefined;

    /**
     * @Property healthCheckSuccTimes: The number of consecutive successful health checks required for an application to be considered as healthy. Valid values: 1 to 10. Default value: 2.
     */
    public healthCheckSuccTimes: number | ros.IResolvable | undefined;

    /**
     * @Property healthCheckTimeout: The timeout period of a health check response. If a backend ECS instance does not respond within the specified timeout period, the ECS instance fails the health check. Unit: seconds. Valid values: 1 to 100. Default value: 3.
     */
    public healthCheckTimeout: number | ros.IResolvable | undefined;

    /**
     * @Property healthCheckType: The health check type. By default, this parameter is left empty. Valid values:
     * l4: Layer 4 health check.
     * l7: Layer 7 health check.
     *
     */
    public healthCheckType: string | ros.IResolvable | undefined;

    /**
     * @Property healthCheckUri: The URI used for health checks. The URI must be 1 to 80 characters in length. Default value: "\/".
     */
    public healthCheckUri: string | ros.IResolvable | undefined;

    /**
     * @Property remarks: The remarks. This parameter is empty by default.
     */
    public remarks: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosEdgeContainerAppProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosEdgeContainerApp.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAppStatus = this.getAtt('AppStatus');
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrDomainName = this.getAtt('DomainName');
        this.attrEdgeContainerAppName = this.getAtt('EdgeContainerAppName');
        this.attrGatewayType = this.getAtt('GatewayType');
        this.attrHealthCheckFailTimes = this.getAtt('HealthCheckFailTimes');
        this.attrHealthCheckHost = this.getAtt('HealthCheckHost');
        this.attrHealthCheckHttpCode = this.getAtt('HealthCheckHttpCode');
        this.attrHealthCheckInterval = this.getAtt('HealthCheckInterval');
        this.attrHealthCheckMethod = this.getAtt('HealthCheckMethod');
        this.attrHealthCheckPort = this.getAtt('HealthCheckPort');
        this.attrHealthCheckSuccTimes = this.getAtt('HealthCheckSuccTimes');
        this.attrHealthCheckTimeout = this.getAtt('HealthCheckTimeout');
        this.attrHealthCheckType = this.getAtt('HealthCheckType');
        this.attrHealthCheckUri = this.getAtt('HealthCheckUri');
        this.attrQuicCid = this.getAtt('QuicCid');
        this.attrRemarks = this.getAtt('Remarks');
        this.attrServicePort = this.getAtt('ServicePort');
        this.attrTargetPort = this.getAtt('TargetPort');
        this.attrUpdateTime = this.getAtt('UpdateTime');
        this.attrVersionCount = this.getAtt('VersionCount');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.edgeContainerAppName = props.edgeContainerAppName;
        this.servicePort = props.servicePort;
        this.targetPort = props.targetPort;
        this.healthCheckFailTimes = props.healthCheckFailTimes;
        this.healthCheckHost = props.healthCheckHost;
        this.healthCheckHttpCode = props.healthCheckHttpCode;
        this.healthCheckInterval = props.healthCheckInterval;
        this.healthCheckMethod = props.healthCheckMethod;
        this.healthCheckPort = props.healthCheckPort;
        this.healthCheckSuccTimes = props.healthCheckSuccTimes;
        this.healthCheckTimeout = props.healthCheckTimeout;
        this.healthCheckType = props.healthCheckType;
        this.healthCheckUri = props.healthCheckUri;
        this.remarks = props.remarks;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            edgeContainerAppName: this.edgeContainerAppName,
            servicePort: this.servicePort,
            targetPort: this.targetPort,
            healthCheckFailTimes: this.healthCheckFailTimes,
            healthCheckHost: this.healthCheckHost,
            healthCheckHttpCode: this.healthCheckHttpCode,
            healthCheckInterval: this.healthCheckInterval,
            healthCheckMethod: this.healthCheckMethod,
            healthCheckPort: this.healthCheckPort,
            healthCheckSuccTimes: this.healthCheckSuccTimes,
            healthCheckTimeout: this.healthCheckTimeout,
            healthCheckType: this.healthCheckType,
            healthCheckUri: this.healthCheckUri,
            remarks: this.remarks,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosEdgeContainerAppPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosHttpsApplicationConfiguration`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-httpsapplicationconfiguration
 */
export interface RosHttpsApplicationConfigurationProps {

    /**
     * @Property siteId: The site ID, which can be obtained by calling the ListSites API.
     */
    readonly siteId: number | ros.IResolvable;

    /**
     * @Property altSvc: Function switch, default off. Value range:
     * on: Enabled.
     * off: Disabled.
     */
    readonly altSvc?: string | ros.IResolvable;

    /**
     * @Property altSvcClear: Alt-Svc whether The header contains the clear parameter. This parameter is disabled by default. Value range:
     * on: Enabled.
     * off: Disabled.
     */
    readonly altSvcClear?: string | ros.IResolvable;

    /**
     * @Property altSvcMa: The effective time of the Alt-Svc, in seconds. The default value is 86400 seconds.
     */
    readonly altSvcMa?: string | ros.IResolvable;

    /**
     * @Property altSvcPersist: Alt-Svc whether The header contains the persist parameter. This parameter is disabled by default. Value range:
     * on: Enabled.
     * off: Disabled.
     */
    readonly altSvcPersist?: string | ros.IResolvable;

    /**
     * @Property hsts: Whether to enable HSTS. It is disabled by default. Value range:
     * on: Enabled.
     * off: Disabled.
     */
    readonly hsts?: string | ros.IResolvable;

    /**
     * @Property hstsIncludeSubdomains: Whether to include subdomains in HSTS is disabled by default. Value range:
     * on: Enabled.
     * off: Disabled.
     */
    readonly hstsIncludeSubdomains?: string | ros.IResolvable;

    /**
     * @Property hstsMaxAge: The expiration time of HSTS, in seconds.
     */
    readonly hstsMaxAge?: string | ros.IResolvable;

    /**
     * @Property hstsPreload: Whether to enable HSTS preloading. It is disabled by default. Value range:
     * on: Enabled.
     * off: Disabled.
     */
    readonly hstsPreload?: string | ros.IResolvable;

    /**
     * @Property httpsForce: Whether to enable forced HTTPS. It is disabled by default. Value range:
     * on: Enabled.
     * off: Disabled.
     */
    readonly httpsForce?: string | ros.IResolvable;

    /**
     * @Property httpsForceCode: Forced HTTPS jump status code, value range:
     * 301
     * 302
     * 307
     * 308
     */
    readonly httpsForceCode?: string | ros.IResolvable;

    /**
     * @Property httpsNoSniDeny: Whether to enable to reject TLS handshake requests without SNI. This parameter is disabled by default. Value range:
     * on: Enabled.
     * off: Disabled.
     */
    readonly httpsNoSniDeny?: string | ros.IResolvable;

    /**
     * @Property httpsSniVerify: Whether to enable SNI verification. It is disabled by default. Value range:
     * on: Enabled.
     * off: Disabled.
     */
    readonly httpsSniVerify?: string | ros.IResolvable;

    /**
     * @Property httpsSniWhitelist: Specifies the list of allowed SNI whitelists, separated by spaces.
     */
    readonly httpsSniWhitelist?: string | ros.IResolvable;

    /**
     * @Property paymentType: Payment Type.
     */
    readonly paymentType?: string | ros.IResolvable;

    /**
     * @Property rule: Rule content, using conditional expressions to match user requests. When adding global configuration, this parameter does not need to be set. There are two usage scenarios:
     * Match all incoming requests: value set to true
     * Match specified request: Set the value to a custom expression, for example: (http.host eq \"video.example.com\").
     */
    readonly rule?: string | ros.IResolvable;

    /**
     * @Property ruleEnable: Rule switch. When adding global configuration, this parameter does not need to be set. Value range:
     * on: Enabled.
     * off: Disabled.
     */
    readonly ruleEnable?: string | ros.IResolvable;

    /**
     * @Property ruleName: Rule name. When adding global configuration, this parameter does not need to be set.
     */
    readonly ruleName?: string | ros.IResolvable;

    /**
     * @Property sequence: Order of rule execution. The smaller the value, the higher the priority for execution.
     */
    readonly sequence?: number | ros.IResolvable;

    /**
     * @Property siteVersion: The version number of the site configuration. For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
     */
    readonly siteVersion?: number | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosHttpsApplicationConfigurationProps`
 *
 * @param properties - the TypeScript properties of a `RosHttpsApplicationConfigurationProps`
 *
 * @returns the result of the validation.
 */
function RosHttpsApplicationConfigurationPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('siteId', ros.requiredValidator)(properties.siteId));
    errors.collect(ros.propertyValidator('siteId', ros.validateNumber)(properties.siteId));
    if(properties.hstsIncludeSubdomains && (typeof properties.hstsIncludeSubdomains) !== 'object') {
        errors.collect(ros.propertyValidator('hstsIncludeSubdomains', ros.validateAllowedValues)({
          data: properties.hstsIncludeSubdomains,
          allowedValues: ["on","off"],
        }));
    }
    errors.collect(ros.propertyValidator('hstsIncludeSubdomains', ros.validateString)(properties.hstsIncludeSubdomains));
    errors.collect(ros.propertyValidator('altSvcMa', ros.validateString)(properties.altSvcMa));
    if(properties.ruleEnable && (typeof properties.ruleEnable) !== 'object') {
        errors.collect(ros.propertyValidator('ruleEnable', ros.validateAllowedValues)({
          data: properties.ruleEnable,
          allowedValues: ["on","off"],
        }));
    }
    errors.collect(ros.propertyValidator('ruleEnable', ros.validateString)(properties.ruleEnable));
    if(properties.altSvc && (typeof properties.altSvc) !== 'object') {
        errors.collect(ros.propertyValidator('altSvc', ros.validateAllowedValues)({
          data: properties.altSvc,
          allowedValues: ["on","off"],
        }));
    }
    errors.collect(ros.propertyValidator('altSvc', ros.validateString)(properties.altSvc));
    if(properties.httpsForceCode && (typeof properties.httpsForceCode) !== 'object') {
        errors.collect(ros.propertyValidator('httpsForceCode', ros.validateAllowedValues)({
          data: properties.httpsForceCode,
          allowedValues: ["301","302","307","308"],
        }));
    }
    errors.collect(ros.propertyValidator('httpsForceCode', ros.validateString)(properties.httpsForceCode));
    if(properties.httpsNoSniDeny && (typeof properties.httpsNoSniDeny) !== 'object') {
        errors.collect(ros.propertyValidator('httpsNoSniDeny', ros.validateAllowedValues)({
          data: properties.httpsNoSniDeny,
          allowedValues: ["on","off"],
        }));
    }
    errors.collect(ros.propertyValidator('httpsNoSniDeny', ros.validateString)(properties.httpsNoSniDeny));
    if(properties.hsts && (typeof properties.hsts) !== 'object') {
        errors.collect(ros.propertyValidator('hsts', ros.validateAllowedValues)({
          data: properties.hsts,
          allowedValues: ["on","off"],
        }));
    }
    errors.collect(ros.propertyValidator('hsts', ros.validateString)(properties.hsts));
    if(properties.hstsPreload && (typeof properties.hstsPreload) !== 'object') {
        errors.collect(ros.propertyValidator('hstsPreload', ros.validateAllowedValues)({
          data: properties.hstsPreload,
          allowedValues: ["on","off"],
        }));
    }
    errors.collect(ros.propertyValidator('hstsPreload', ros.validateString)(properties.hstsPreload));
    errors.collect(ros.propertyValidator('hstsMaxAge', ros.validateString)(properties.hstsMaxAge));
    errors.collect(ros.propertyValidator('sequence', ros.validateNumber)(properties.sequence));
    errors.collect(ros.propertyValidator('httpsSniWhitelist', ros.validateString)(properties.httpsSniWhitelist));
    if(properties.altSvcPersist && (typeof properties.altSvcPersist) !== 'object') {
        errors.collect(ros.propertyValidator('altSvcPersist', ros.validateAllowedValues)({
          data: properties.altSvcPersist,
          allowedValues: ["on","off"],
        }));
    }
    errors.collect(ros.propertyValidator('altSvcPersist', ros.validateString)(properties.altSvcPersist));
    if(properties.httpsSniVerify && (typeof properties.httpsSniVerify) !== 'object') {
        errors.collect(ros.propertyValidator('httpsSniVerify', ros.validateAllowedValues)({
          data: properties.httpsSniVerify,
          allowedValues: ["on","off"],
        }));
    }
    errors.collect(ros.propertyValidator('httpsSniVerify', ros.validateString)(properties.httpsSniVerify));
    if(properties.altSvcClear && (typeof properties.altSvcClear) !== 'object') {
        errors.collect(ros.propertyValidator('altSvcClear', ros.validateAllowedValues)({
          data: properties.altSvcClear,
          allowedValues: ["on","off"],
        }));
    }
    errors.collect(ros.propertyValidator('altSvcClear', ros.validateString)(properties.altSvcClear));
    if(properties.httpsForce && (typeof properties.httpsForce) !== 'object') {
        errors.collect(ros.propertyValidator('httpsForce', ros.validateAllowedValues)({
          data: properties.httpsForce,
          allowedValues: ["on","off"],
        }));
    }
    errors.collect(ros.propertyValidator('httpsForce', ros.validateString)(properties.httpsForce));
    errors.collect(ros.propertyValidator('paymentType', ros.validateString)(properties.paymentType));
    errors.collect(ros.propertyValidator('rule', ros.validateString)(properties.rule));
    errors.collect(ros.propertyValidator('siteVersion', ros.validateNumber)(properties.siteVersion));
    errors.collect(ros.propertyValidator('ruleName', ros.validateString)(properties.ruleName));
    return errors.wrap('supplied properties not correct for "RosHttpsApplicationConfigurationProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ESA::HttpsApplicationConfiguration` resource
 *
 * @param properties - the TypeScript properties of a `RosHttpsApplicationConfigurationProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ESA::HttpsApplicationConfiguration` resource.
 */
// @ts-ignore TS6133
function rosHttpsApplicationConfigurationPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosHttpsApplicationConfigurationPropsValidator(properties).assertSuccess();
    }
    return {
      'SiteId': ros.numberToRosTemplate(properties.siteId),
      'AltSvc': ros.stringToRosTemplate(properties.altSvc),
      'AltSvcClear': ros.stringToRosTemplate(properties.altSvcClear),
      'AltSvcMa': ros.stringToRosTemplate(properties.altSvcMa),
      'AltSvcPersist': ros.stringToRosTemplate(properties.altSvcPersist),
      'Hsts': ros.stringToRosTemplate(properties.hsts),
      'HstsIncludeSubdomains': ros.stringToRosTemplate(properties.hstsIncludeSubdomains),
      'HstsMaxAge': ros.stringToRosTemplate(properties.hstsMaxAge),
      'HstsPreload': ros.stringToRosTemplate(properties.hstsPreload),
      'HttpsForce': ros.stringToRosTemplate(properties.httpsForce),
      'HttpsForceCode': ros.stringToRosTemplate(properties.httpsForceCode),
      'HttpsNoSniDeny': ros.stringToRosTemplate(properties.httpsNoSniDeny),
      'HttpsSniVerify': ros.stringToRosTemplate(properties.httpsSniVerify),
      'HttpsSniWhitelist': ros.stringToRosTemplate(properties.httpsSniWhitelist),
      'PaymentType': ros.stringToRosTemplate(properties.paymentType),
      'Rule': ros.stringToRosTemplate(properties.rule),
      'RuleEnable': ros.stringToRosTemplate(properties.ruleEnable),
      'RuleName': ros.stringToRosTemplate(properties.ruleName),
      'Sequence': ros.numberToRosTemplate(properties.sequence),
      'SiteVersion': ros.numberToRosTemplate(properties.siteVersion),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ESA::HttpsApplicationConfiguration`.
 * @Note This class does not contain additional functions, so it is recommended to use the `HttpsApplicationConfiguration` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-httpsapplicationconfiguration
 */
export class RosHttpsApplicationConfiguration extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ESA::HttpsApplicationConfiguration";

    /**
     * @Attribute AltSvc: Function switch, default off.
     */
    public readonly attrAltSvc: ros.IResolvable;

    /**
     * @Attribute AltSvcClear: Alt-Svc whether The header contains the clear parameter. This parameter is disabled by default.
     */
    public readonly attrAltSvcClear: ros.IResolvable;

    /**
     * @Attribute AltSvcMa: The effective time of the Alt-Svc, in seconds. The default value is 86400 seconds.
     */
    public readonly attrAltSvcMa: ros.IResolvable;

    /**
     * @Attribute AltSvcPersist: Alt-Svc whether The header contains the persist parameter. This parameter is disabled by default.
     */
    public readonly attrAltSvcPersist: ros.IResolvable;

    /**
     * @Attribute ConfigId: Config Id.
     */
    public readonly attrConfigId: ros.IResolvable;

    /**
     * @Attribute ConfigType: The type of the configuration.
     */
    public readonly attrConfigType: ros.IResolvable;

    /**
     * @Attribute Hsts: Whether to enable HSTS. It is disabled by default.
     */
    public readonly attrHsts: ros.IResolvable;

    /**
     * @Attribute HstsIncludeSubdomains: Whether to include subdomains in HSTS is disabled by default.
     */
    public readonly attrHstsIncludeSubdomains: ros.IResolvable;

    /**
     * @Attribute HstsMaxAge: The expiration time of HSTS, in seconds.
     */
    public readonly attrHstsMaxAge: ros.IResolvable;

    /**
     * @Attribute HstsPreload: Whether to enable HSTS preloading. It is disabled by default.
     */
    public readonly attrHstsPreload: ros.IResolvable;

    /**
     * @Attribute HttpsForce: Whether to enable forced HTTPS. It is disabled by default.
     */
    public readonly attrHttpsForce: ros.IResolvable;

    /**
     * @Attribute HttpsForceCode: Forced HTTPS jump status code, value range:.
     */
    public readonly attrHttpsForceCode: ros.IResolvable;

    /**
     * @Attribute HttpsNoSniDeny: Whether to enable to reject TLS handshake requests without SNI. This parameter is disabled by default.
     */
    public readonly attrHttpsNoSniDeny: ros.IResolvable;

    /**
     * @Attribute HttpsSniVerify: Whether to enable SNI verification. It is disabled by default.
     */
    public readonly attrHttpsSniVerify: ros.IResolvable;

    /**
     * @Attribute HttpsSniWhitelist: Specifies the list of allowed SNI whitelists, separated by spaces.
     */
    public readonly attrHttpsSniWhitelist: ros.IResolvable;

    /**
     * @Attribute Rule: Rule content, using conditional expressions to match user requests. When adding global configuration, this parameter does not need to be set.
     */
    public readonly attrRule: ros.IResolvable;

    /**
     * @Attribute RuleEnable: Rule switch. When adding global configuration, this parameter does not need to be set.
     */
    public readonly attrRuleEnable: ros.IResolvable;

    /**
     * @Attribute RuleName: Rule name. When adding global configuration, this parameter does not need to be set.
     */
    public readonly attrRuleName: ros.IResolvable;

    /**
     * @Attribute Sequence: Order of rule execution. The smaller the value, the higher the priority for execution.
     */
    public readonly attrSequence: ros.IResolvable;

    /**
     * @Attribute SiteVersion: The version number of the site configuration. For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
     */
    public readonly attrSiteVersion: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property siteId: The site ID, which can be obtained by calling the ListSites API.
     */
    public siteId: number | ros.IResolvable;

    /**
     * @Property altSvc: Function switch, default off. Value range:
     * on: Enabled.
     * off: Disabled.
     */
    public altSvc: string | ros.IResolvable | undefined;

    /**
     * @Property altSvcClear: Alt-Svc whether The header contains the clear parameter. This parameter is disabled by default. Value range:
     * on: Enabled.
     * off: Disabled.
     */
    public altSvcClear: string | ros.IResolvable | undefined;

    /**
     * @Property altSvcMa: The effective time of the Alt-Svc, in seconds. The default value is 86400 seconds.
     */
    public altSvcMa: string | ros.IResolvable | undefined;

    /**
     * @Property altSvcPersist: Alt-Svc whether The header contains the persist parameter. This parameter is disabled by default. Value range:
     * on: Enabled.
     * off: Disabled.
     */
    public altSvcPersist: string | ros.IResolvable | undefined;

    /**
     * @Property hsts: Whether to enable HSTS. It is disabled by default. Value range:
     * on: Enabled.
     * off: Disabled.
     */
    public hsts: string | ros.IResolvable | undefined;

    /**
     * @Property hstsIncludeSubdomains: Whether to include subdomains in HSTS is disabled by default. Value range:
     * on: Enabled.
     * off: Disabled.
     */
    public hstsIncludeSubdomains: string | ros.IResolvable | undefined;

    /**
     * @Property hstsMaxAge: The expiration time of HSTS, in seconds.
     */
    public hstsMaxAge: string | ros.IResolvable | undefined;

    /**
     * @Property hstsPreload: Whether to enable HSTS preloading. It is disabled by default. Value range:
     * on: Enabled.
     * off: Disabled.
     */
    public hstsPreload: string | ros.IResolvable | undefined;

    /**
     * @Property httpsForce: Whether to enable forced HTTPS. It is disabled by default. Value range:
     * on: Enabled.
     * off: Disabled.
     */
    public httpsForce: string | ros.IResolvable | undefined;

    /**
     * @Property httpsForceCode: Forced HTTPS jump status code, value range:
     * 301
     * 302
     * 307
     * 308
     */
    public httpsForceCode: string | ros.IResolvable | undefined;

    /**
     * @Property httpsNoSniDeny: Whether to enable to reject TLS handshake requests without SNI. This parameter is disabled by default. Value range:
     * on: Enabled.
     * off: Disabled.
     */
    public httpsNoSniDeny: string | ros.IResolvable | undefined;

    /**
     * @Property httpsSniVerify: Whether to enable SNI verification. It is disabled by default. Value range:
     * on: Enabled.
     * off: Disabled.
     */
    public httpsSniVerify: string | ros.IResolvable | undefined;

    /**
     * @Property httpsSniWhitelist: Specifies the list of allowed SNI whitelists, separated by spaces.
     */
    public httpsSniWhitelist: string | ros.IResolvable | undefined;

    /**
     * @Property paymentType: Payment Type.
     */
    public paymentType: string | ros.IResolvable | undefined;

    /**
     * @Property rule: Rule content, using conditional expressions to match user requests. When adding global configuration, this parameter does not need to be set. There are two usage scenarios:
     * Match all incoming requests: value set to true
     * Match specified request: Set the value to a custom expression, for example: (http.host eq \"video.example.com\").
     */
    public rule: string | ros.IResolvable | undefined;

    /**
     * @Property ruleEnable: Rule switch. When adding global configuration, this parameter does not need to be set. Value range:
     * on: Enabled.
     * off: Disabled.
     */
    public ruleEnable: string | ros.IResolvable | undefined;

    /**
     * @Property ruleName: Rule name. When adding global configuration, this parameter does not need to be set.
     */
    public ruleName: string | ros.IResolvable | undefined;

    /**
     * @Property sequence: Order of rule execution. The smaller the value, the higher the priority for execution.
     */
    public sequence: number | ros.IResolvable | undefined;

    /**
     * @Property siteVersion: The version number of the site configuration. For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
     */
    public siteVersion: number | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosHttpsApplicationConfigurationProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosHttpsApplicationConfiguration.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAltSvc = this.getAtt('AltSvc');
        this.attrAltSvcClear = this.getAtt('AltSvcClear');
        this.attrAltSvcMa = this.getAtt('AltSvcMa');
        this.attrAltSvcPersist = this.getAtt('AltSvcPersist');
        this.attrConfigId = this.getAtt('ConfigId');
        this.attrConfigType = this.getAtt('ConfigType');
        this.attrHsts = this.getAtt('Hsts');
        this.attrHstsIncludeSubdomains = this.getAtt('HstsIncludeSubdomains');
        this.attrHstsMaxAge = this.getAtt('HstsMaxAge');
        this.attrHstsPreload = this.getAtt('HstsPreload');
        this.attrHttpsForce = this.getAtt('HttpsForce');
        this.attrHttpsForceCode = this.getAtt('HttpsForceCode');
        this.attrHttpsNoSniDeny = this.getAtt('HttpsNoSniDeny');
        this.attrHttpsSniVerify = this.getAtt('HttpsSniVerify');
        this.attrHttpsSniWhitelist = this.getAtt('HttpsSniWhitelist');
        this.attrRule = this.getAtt('Rule');
        this.attrRuleEnable = this.getAtt('RuleEnable');
        this.attrRuleName = this.getAtt('RuleName');
        this.attrSequence = this.getAtt('Sequence');
        this.attrSiteVersion = this.getAtt('SiteVersion');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.siteId = props.siteId;
        this.altSvc = props.altSvc;
        this.altSvcClear = props.altSvcClear;
        this.altSvcMa = props.altSvcMa;
        this.altSvcPersist = props.altSvcPersist;
        this.hsts = props.hsts;
        this.hstsIncludeSubdomains = props.hstsIncludeSubdomains;
        this.hstsMaxAge = props.hstsMaxAge;
        this.hstsPreload = props.hstsPreload;
        this.httpsForce = props.httpsForce;
        this.httpsForceCode = props.httpsForceCode;
        this.httpsNoSniDeny = props.httpsNoSniDeny;
        this.httpsSniVerify = props.httpsSniVerify;
        this.httpsSniWhitelist = props.httpsSniWhitelist;
        this.paymentType = props.paymentType;
        this.rule = props.rule;
        this.ruleEnable = props.ruleEnable;
        this.ruleName = props.ruleName;
        this.sequence = props.sequence;
        this.siteVersion = props.siteVersion;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            siteId: this.siteId,
            altSvc: this.altSvc,
            altSvcClear: this.altSvcClear,
            altSvcMa: this.altSvcMa,
            altSvcPersist: this.altSvcPersist,
            hsts: this.hsts,
            hstsIncludeSubdomains: this.hstsIncludeSubdomains,
            hstsMaxAge: this.hstsMaxAge,
            hstsPreload: this.hstsPreload,
            httpsForce: this.httpsForce,
            httpsForceCode: this.httpsForceCode,
            httpsNoSniDeny: this.httpsNoSniDeny,
            httpsSniVerify: this.httpsSniVerify,
            httpsSniWhitelist: this.httpsSniWhitelist,
            paymentType: this.paymentType,
            rule: this.rule,
            ruleEnable: this.ruleEnable,
            ruleName: this.ruleName,
            sequence: this.sequence,
            siteVersion: this.siteVersion,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosHttpsApplicationConfigurationPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosImageTransform`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-imagetransform
 */
export interface RosImageTransformProps {

    /**
     * @Property siteId: The site ID, which can be obtained by calling the ListSites API.
     */
    readonly siteId: number | ros.IResolvable;

    /**
     * @Property enable: Indicates whether the image transformations feature is enabled. Valid values:
     * on: Enabled.
     * off: Disabled.
     */
    readonly enable?: string | ros.IResolvable;

    /**
     * @Property paymentType: Payment Type.
     */
    readonly paymentType?: string | ros.IResolvable;

    /**
     * @Property rule: Rule content, using conditional expressions to match user requests. When adding global configuration, this parameter does not need to be set. There are two usage scenarios:
     * Match all incoming requests: value set to true
     * Match specified request: Set the value to a custom expression, for example: (http.host eq \"video.example.com\").
     */
    readonly rule?: string | ros.IResolvable;

    /**
     * @Property ruleEnable: Rule switch. When adding global configuration, this parameter does not need to be set. Value range:
     * on: Enabled.
     * off: Disabled.
     */
    readonly ruleEnable?: string | ros.IResolvable;

    /**
     * @Property ruleName: Rule name. When adding global configuration, this parameter does not need to be set.
     */
    readonly ruleName?: string | ros.IResolvable;

    /**
     * @Property sequence: Order of rule execution. The smaller the value, the higher the priority for execution.
     */
    readonly sequence?: number | ros.IResolvable;

    /**
     * @Property siteVersion: The version number of the site configuration. For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
     */
    readonly siteVersion?: number | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosImageTransformProps`
 *
 * @param properties - the TypeScript properties of a `RosImageTransformProps`
 *
 * @returns the result of the validation.
 */
function RosImageTransformPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('siteId', ros.requiredValidator)(properties.siteId));
    errors.collect(ros.propertyValidator('siteId', ros.validateNumber)(properties.siteId));
    if(properties.ruleEnable && (typeof properties.ruleEnable) !== 'object') {
        errors.collect(ros.propertyValidator('ruleEnable', ros.validateAllowedValues)({
          data: properties.ruleEnable,
          allowedValues: ["on","off"],
        }));
    }
    errors.collect(ros.propertyValidator('ruleEnable', ros.validateString)(properties.ruleEnable));
    if(properties.enable && (typeof properties.enable) !== 'object') {
        errors.collect(ros.propertyValidator('enable', ros.validateAllowedValues)({
          data: properties.enable,
          allowedValues: ["on","off"],
        }));
    }
    errors.collect(ros.propertyValidator('enable', ros.validateString)(properties.enable));
    errors.collect(ros.propertyValidator('paymentType', ros.validateString)(properties.paymentType));
    errors.collect(ros.propertyValidator('sequence', ros.validateNumber)(properties.sequence));
    errors.collect(ros.propertyValidator('rule', ros.validateString)(properties.rule));
    errors.collect(ros.propertyValidator('siteVersion', ros.validateNumber)(properties.siteVersion));
    errors.collect(ros.propertyValidator('ruleName', ros.validateString)(properties.ruleName));
    return errors.wrap('supplied properties not correct for "RosImageTransformProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ESA::ImageTransform` resource
 *
 * @param properties - the TypeScript properties of a `RosImageTransformProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ESA::ImageTransform` resource.
 */
// @ts-ignore TS6133
function rosImageTransformPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosImageTransformPropsValidator(properties).assertSuccess();
    }
    return {
      'SiteId': ros.numberToRosTemplate(properties.siteId),
      'Enable': ros.stringToRosTemplate(properties.enable),
      'PaymentType': ros.stringToRosTemplate(properties.paymentType),
      'Rule': ros.stringToRosTemplate(properties.rule),
      'RuleEnable': ros.stringToRosTemplate(properties.ruleEnable),
      'RuleName': ros.stringToRosTemplate(properties.ruleName),
      'Sequence': ros.numberToRosTemplate(properties.sequence),
      'SiteVersion': ros.numberToRosTemplate(properties.siteVersion),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ESA::ImageTransform`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ImageTransform` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-imagetransform
 */
export class RosImageTransform extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ESA::ImageTransform";

    /**
     * @Attribute ConfigId: Config Id.
     */
    public readonly attrConfigId: ros.IResolvable;

    /**
     * @Attribute ConfigType: The type of the configuration.
     */
    public readonly attrConfigType: ros.IResolvable;

    /**
     * @Attribute Enable: Indicates whether the image transformations feature is enabled.
     */
    public readonly attrEnable: ros.IResolvable;

    /**
     * @Attribute Rule: Rule content, using conditional expressions to match user requests. When adding global configuration, this parameter does not need to be set.
     */
    public readonly attrRule: ros.IResolvable;

    /**
     * @Attribute RuleEnable: Rule switch. When adding global configuration, this parameter does not need to be set.
     */
    public readonly attrRuleEnable: ros.IResolvable;

    /**
     * @Attribute RuleName: Rule name. When adding global configuration, this parameter does not need to be set.
     */
    public readonly attrRuleName: ros.IResolvable;

    /**
     * @Attribute Sequence: Order of rule execution. The smaller the value, the higher the priority for execution.
     */
    public readonly attrSequence: ros.IResolvable;

    /**
     * @Attribute SiteVersion: The version number of the site configuration. For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
     */
    public readonly attrSiteVersion: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property siteId: The site ID, which can be obtained by calling the ListSites API.
     */
    public siteId: number | ros.IResolvable;

    /**
     * @Property enable: Indicates whether the image transformations feature is enabled. Valid values:
     * on: Enabled.
     * off: Disabled.
     */
    public enable: string | ros.IResolvable | undefined;

    /**
     * @Property paymentType: Payment Type.
     */
    public paymentType: string | ros.IResolvable | undefined;

    /**
     * @Property rule: Rule content, using conditional expressions to match user requests. When adding global configuration, this parameter does not need to be set. There are two usage scenarios:
     * Match all incoming requests: value set to true
     * Match specified request: Set the value to a custom expression, for example: (http.host eq \"video.example.com\").
     */
    public rule: string | ros.IResolvable | undefined;

    /**
     * @Property ruleEnable: Rule switch. When adding global configuration, this parameter does not need to be set. Value range:
     * on: Enabled.
     * off: Disabled.
     */
    public ruleEnable: string | ros.IResolvable | undefined;

    /**
     * @Property ruleName: Rule name. When adding global configuration, this parameter does not need to be set.
     */
    public ruleName: string | ros.IResolvable | undefined;

    /**
     * @Property sequence: Order of rule execution. The smaller the value, the higher the priority for execution.
     */
    public sequence: number | ros.IResolvable | undefined;

    /**
     * @Property siteVersion: The version number of the site configuration. For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
     */
    public siteVersion: number | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosImageTransformProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosImageTransform.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrConfigId = this.getAtt('ConfigId');
        this.attrConfigType = this.getAtt('ConfigType');
        this.attrEnable = this.getAtt('Enable');
        this.attrRule = this.getAtt('Rule');
        this.attrRuleEnable = this.getAtt('RuleEnable');
        this.attrRuleName = this.getAtt('RuleName');
        this.attrSequence = this.getAtt('Sequence');
        this.attrSiteVersion = this.getAtt('SiteVersion');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.siteId = props.siteId;
        this.enable = props.enable;
        this.paymentType = props.paymentType;
        this.rule = props.rule;
        this.ruleEnable = props.ruleEnable;
        this.ruleName = props.ruleName;
        this.sequence = props.sequence;
        this.siteVersion = props.siteVersion;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            siteId: this.siteId,
            enable: this.enable,
            paymentType: this.paymentType,
            rule: this.rule,
            ruleEnable: this.ruleEnable,
            ruleName: this.ruleName,
            sequence: this.sequence,
            siteVersion: this.siteVersion,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosImageTransformPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosKvNamespace`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-kvnamespace
 */
export interface RosKvNamespaceProps {

    /**
     * @Property kvNamespace: The name of the namespace.
     */
    readonly kvNamespace: string | ros.IResolvable;

    /**
     * @Property description: The description of the namespace.
     */
    readonly description?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosKvNamespaceProps`
 *
 * @param properties - the TypeScript properties of a `RosKvNamespaceProps`
 *
 * @returns the result of the validation.
 */
function RosKvNamespacePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('kvNamespace', ros.requiredValidator)(properties.kvNamespace));
    errors.collect(ros.propertyValidator('kvNamespace', ros.validateString)(properties.kvNamespace));
    return errors.wrap('supplied properties not correct for "RosKvNamespaceProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ESA::KvNamespace` resource
 *
 * @param properties - the TypeScript properties of a `RosKvNamespaceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ESA::KvNamespace` resource.
 */
// @ts-ignore TS6133
function rosKvNamespacePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosKvNamespacePropsValidator(properties).assertSuccess();
    }
    return {
      'KvNamespace': ros.stringToRosTemplate(properties.kvNamespace),
      'Description': ros.stringToRosTemplate(properties.description),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ESA::KvNamespace`.
 * @Note This class does not contain additional functions, so it is recommended to use the `KvNamespace` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-kvnamespace
 */
export class RosKvNamespace extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ESA::KvNamespace";

    /**
     * @Attribute Description: The description of the namespace.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * @Attribute KvCapacity: The available capacity of the namespace. Unit: bytes.
     */
    public readonly attrKvCapacity: ros.IResolvable;

    /**
     * @Attribute KvCapacityString: The available capacity of the namespace.
     */
    public readonly attrKvCapacityString: ros.IResolvable;

    /**
     * @Attribute KvCapacityUsed: The used capacity of the namespace. Unit: bytes.
     */
    public readonly attrKvCapacityUsed: ros.IResolvable;

    /**
     * @Attribute KvCapacityUsedString: The used capacity of the namespace.
     */
    public readonly attrKvCapacityUsedString: ros.IResolvable;

    /**
     * @Attribute KvNamespace: The name of the namespace.
     */
    public readonly attrKvNamespace: ros.IResolvable;

    /**
     * @Attribute NamespaceId: The ID of the namespace.
     */
    public readonly attrNamespaceId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property kvNamespace: The name of the namespace.
     */
    public kvNamespace: string | ros.IResolvable;

    /**
     * @Property description: The description of the namespace.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosKvNamespaceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosKvNamespace.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDescription = this.getAtt('Description');
        this.attrKvCapacity = this.getAtt('KvCapacity');
        this.attrKvCapacityString = this.getAtt('KvCapacityString');
        this.attrKvCapacityUsed = this.getAtt('KvCapacityUsed');
        this.attrKvCapacityUsedString = this.getAtt('KvCapacityUsedString');
        this.attrKvNamespace = this.getAtt('KvNamespace');
        this.attrNamespaceId = this.getAtt('NamespaceId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.kvNamespace = props.kvNamespace;
        this.description = props.description;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            kvNamespace: this.kvNamespace,
            description: this.description,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosKvNamespacePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
