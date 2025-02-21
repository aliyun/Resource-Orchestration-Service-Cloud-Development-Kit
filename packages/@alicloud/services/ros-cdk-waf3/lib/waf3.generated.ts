// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-waf3-instance
 */
export interface RosInstanceProps {

    /**
     * @Property payType: The billing method of the firewall instance. Valid values:
     * PayAsYouGo: pay-as-you-go
     * Subscription: subscription
     */
    readonly payType: string | ros.IResolvable;

    /**
     * @Property region: Web Application Firewall is available in the following regions: regions in the Chinese mainland, China (Hong Kong), Singapore (Singapore), Malaysia (Kuala Lumpur), US (Silicon Valley), Australia (Sydney), Germany (Frankfurt), India (Mumbai), Indonesia (Jakarta), UAE (Dubai), and Japan (Tokyo).
     *  If your origin server is deployed within the Chinese mainland, select Chinese Mainland. If your origin server is deployed outside the Chinese mainland, select Outside Chinese mainland. Intelligent region selection is supported.
     */
    readonly region: string | ros.IResolvable;

    /**
     * @Property additionalProtectionNodes: Each protection cluster has at least two protection nodes, and each node provides the protection capabilities of up to 5,000 QPS for HTTP requests or up to 3,000 QPS for HTTPS requests. You can add protection nodes to increase protection capabilities.
     */
    readonly additionalProtectionNodes?: number | ros.IResolvable;

    /**
     * @Property apiSecurity: The API security feature detects responses with specified characteristics to check whether data leaks occur. After you enable the feature, WAF is authorized to perform related analysis on your data. If you select Chinese Mainland, service deployment and data processing are performed in the Chinese mainland.
     */
    readonly apiSecurity?: boolean | ros.IResolvable;

    /**
     * @Property autoPay: Whether to auto pay the bill.
     */
    readonly autoPay?: boolean | ros.IResolvable;

    /**
     * @Property autoRenew: Whether to auto renew the prepay instance.
     */
    readonly autoRenew?: boolean | ros.IResolvable;

    /**
     * @Property botAppProtection: Bot management module for App protection.
     */
    readonly botAppProtection?: boolean | ros.IResolvable;

    /**
     * @Property botWebProtection: Bot management module for Web application protection.
     */
    readonly botWebProtection?: boolean | ros.IResolvable;

    /**
     * @Property domainsExtension: If the actual number of required access domain names exceeds the number of free domain names in the version, the number of domain names can be expanded according to this specification.Domain name counting does not differentiate between domain name types. The main domain name, sub-domain name, and pan-domain name are each counted as one domain name.
     */
    readonly domainsExtension?: number | ros.IResolvable;

    /**
     * @Property elasticQps: The burstable QPS (pay-as-you-go) feature is suitable for scenarios that involve short-term or sudden traffic surges, for example, during promotions. In these scenarios, the traffic peak may exceed the sum of the maximum QPS that is supported by your WAF edition and the extended QPS. If you enable the feature, you are charged based on the amount of excess QPS resources that you use. This helps prevent your domain names from being added to a sandbox when QPS resources are excessively used and helps ensure service continuity.
     */
    readonly elasticQps?: number | ros.IResolvable;

    /**
     * @Property exclusiveIpAddress: Excluesive IP address number.
     */
    readonly exclusiveIpAddress?: number | ros.IResolvable;

    /**
     * @Property fraudDetection: You can enable this feature only after you enable the bot management module. If abnormal phone numbers are used in logon or registration scenarios, anomaly tags are matched. Requests from the abnormal phone numbers are blocked or CAPTCHA verification is required. You are charged based on the number of times that anomaly tags are matched.
     */
    readonly fraudDetection?: boolean | ros.IResolvable;

    /**
     * @Property ignoreExisting: Whether to ignore existing WAF3 instance
     * False: ROS will perform a uniqueness check.If the WAF3 instance exists, an error will be reported when creating it.
     * True: ROS will not check the uniqueness.If the WAF3 instance exists, the creation process will be ignored.
     * If the WAF3 instance is not created by ROS, it will be ignored during update and delete stage.
     */
    readonly ignoreExisting?: boolean | ros.IResolvable;

    /**
     * @Property intelligentLoadBalancing: Intelligent load balancer for WAF instance.
     */
    readonly intelligentLoadBalancing?: boolean | ros.IResolvable;

    /**
     * @Property logService: Log service for WAF instance.
     */
    readonly logService?: boolean | ros.IResolvable;

    /**
     * @Property logStorage: Log storage capacity.
     */
    readonly logStorage?: number | ros.IResolvable;

    /**
     * @Property period: The subscription period of the firewallIf PeriodUnit is month, the valid range is 1, 3, 6
     * If periodUnit is year, the valid range is 1, 2, 3
     */
    readonly period?: number | ros.IResolvable;

    /**
     * @Property periodUnit: The unit of the subscription duration. Valid values:
     * Month
     * Year
     * Default value: Month.
     */
    readonly periodUnit?: string | ros.IResolvable;

    /**
     * @Property qpsExtension: Extended QPS.
     */
    readonly qpsExtension?: number | ros.IResolvable;

    /**
     * @Property trafficBillingProtectionThreshold: In pay-as-you-go WAF 3.0, the traffic billing protection feature is automatically enabled to prevent unexpected and unusually high bills that result from unpredictable factors such as HTTP flood attacks. A bill is not generated for an hour if the peak traffic exceeds the traffic billing protection threshold within the hour. Then, your WAF instance is added to a sandbox. If the peak traffic is lower than the traffic billing protection threshold the next hour, your WAF instance is removed from the sandbox.
     */
    readonly trafficBillingProtectionThreshold?: number | ros.IResolvable;

    /**
     * @Property wafVersion: The version of WAF3.0.
     *
     */
    readonly wafVersion?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosInstanceProps`
 *
 * @param properties - the TypeScript properties of a `RosInstanceProps`
 *
 * @returns the result of the validation.
 */
function RosInstancePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('ignoreExisting', ros.validateBoolean)(properties.ignoreExisting));
    errors.collect(ros.propertyValidator('intelligentLoadBalancing', ros.validateBoolean)(properties.intelligentLoadBalancing));
    errors.collect(ros.propertyValidator('autoRenew', ros.validateBoolean)(properties.autoRenew));
    if(properties.period && (typeof properties.period) !== 'object') {
        errors.collect(ros.propertyValidator('period', ros.validateAllowedValues)({
          data: properties.period,
          allowedValues: [1,2,3,6],
        }));
    }
    errors.collect(ros.propertyValidator('period', ros.validateNumber)(properties.period));
    errors.collect(ros.propertyValidator('botWebProtection', ros.validateBoolean)(properties.botWebProtection));
    errors.collect(ros.propertyValidator('apiSecurity', ros.validateBoolean)(properties.apiSecurity));
    errors.collect(ros.propertyValidator('autoPay', ros.validateBoolean)(properties.autoPay));
    if(properties.trafficBillingProtectionThreshold && (typeof properties.trafficBillingProtectionThreshold) !== 'object') {
        errors.collect(ros.propertyValidator('trafficBillingProtectionThreshold', ros.validateRange)({
            data: properties.trafficBillingProtectionThreshold,
            min: 1000,
            max: 100000,
          }));
    }
    errors.collect(ros.propertyValidator('trafficBillingProtectionThreshold', ros.validateNumber)(properties.trafficBillingProtectionThreshold));
    errors.collect(ros.propertyValidator('payType', ros.requiredValidator)(properties.payType));
    if(properties.payType && (typeof properties.payType) !== 'object') {
        errors.collect(ros.propertyValidator('payType', ros.validateAllowedValues)({
          data: properties.payType,
          allowedValues: ["PayAsYouGo","PostPaid","PayOnDemand","Postpaid","PostPay","Postpay","POSTPAY","POST","Subscription","PrePaid","Prepaid","PrePay","Prepay","PREPAY","PRE"],
        }));
    }
    errors.collect(ros.propertyValidator('payType', ros.validateString)(properties.payType));
    if(properties.logStorage && (typeof properties.logStorage) !== 'object') {
        errors.collect(ros.propertyValidator('logStorage', ros.validateRange)({
            data: properties.logStorage,
            min: 3,
            max: 150,
          }));
    }
    errors.collect(ros.propertyValidator('logStorage', ros.validateNumber)(properties.logStorage));
    if(properties.elasticQps && (typeof properties.elasticQps) !== 'object') {
        errors.collect(ros.propertyValidator('elasticQps', ros.validateRange)({
            data: properties.elasticQps,
            min: 0,
            max: 60000,
          }));
    }
    errors.collect(ros.propertyValidator('elasticQps', ros.validateNumber)(properties.elasticQps));
    if(properties.domainsExtension && (typeof properties.domainsExtension) !== 'object') {
        errors.collect(ros.propertyValidator('domainsExtension', ros.validateRange)({
            data: properties.domainsExtension,
            min: 0,
            max: 5000,
          }));
    }
    errors.collect(ros.propertyValidator('domainsExtension', ros.validateNumber)(properties.domainsExtension));
    if(properties.wafVersion && (typeof properties.wafVersion) !== 'object') {
        errors.collect(ros.propertyValidator('wafVersion', ros.validateAllowedValues)({
          data: properties.wafVersion,
          allowedValues: ["Basic","Pro","Enterprise","Ultimate"],
        }));
    }
    errors.collect(ros.propertyValidator('wafVersion', ros.validateString)(properties.wafVersion));
    if(properties.exclusiveIpAddress && (typeof properties.exclusiveIpAddress) !== 'object') {
        errors.collect(ros.propertyValidator('exclusiveIpAddress', ros.validateRange)({
            data: properties.exclusiveIpAddress,
            min: 0,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('exclusiveIpAddress', ros.validateNumber)(properties.exclusiveIpAddress));
    if(properties.additionalProtectionNodes && (typeof properties.additionalProtectionNodes) !== 'object') {
        errors.collect(ros.propertyValidator('additionalProtectionNodes', ros.validateRange)({
            data: properties.additionalProtectionNodes,
            min: 0,
            max: 500,
          }));
    }
    errors.collect(ros.propertyValidator('additionalProtectionNodes', ros.validateNumber)(properties.additionalProtectionNodes));
    errors.collect(ros.propertyValidator('region', ros.requiredValidator)(properties.region));
    if(properties.region && (typeof properties.region) !== 'object') {
        errors.collect(ros.propertyValidator('region', ros.validateAllowedValues)({
          data: properties.region,
          allowedValues: ["OutsideChineseMainland","ChineseMainland"],
        }));
    }
    errors.collect(ros.propertyValidator('region', ros.validateString)(properties.region));
    if(properties.qpsExtension && (typeof properties.qpsExtension) !== 'object') {
        errors.collect(ros.propertyValidator('qpsExtension', ros.validateRange)({
            data: properties.qpsExtension,
            min: 0,
            max: 30000,
          }));
    }
    errors.collect(ros.propertyValidator('qpsExtension', ros.validateNumber)(properties.qpsExtension));
    errors.collect(ros.propertyValidator('fraudDetection', ros.validateBoolean)(properties.fraudDetection));
    errors.collect(ros.propertyValidator('botAppProtection', ros.validateBoolean)(properties.botAppProtection));
    errors.collect(ros.propertyValidator('logService', ros.validateBoolean)(properties.logService));
    if(properties.periodUnit && (typeof properties.periodUnit) !== 'object') {
        errors.collect(ros.propertyValidator('periodUnit', ros.validateAllowedValues)({
          data: properties.periodUnit,
          allowedValues: ["Month","Year"],
        }));
    }
    errors.collect(ros.propertyValidator('periodUnit', ros.validateString)(properties.periodUnit));
    return errors.wrap('supplied properties not correct for "RosInstanceProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::WAF3::Instance` resource
 *
 * @param properties - the TypeScript properties of a `RosInstanceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::WAF3::Instance` resource.
 */
// @ts-ignore TS6133
function rosInstancePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosInstancePropsValidator(properties).assertSuccess();
    }
    return {
      'PayType': ros.stringToRosTemplate(properties.payType),
      'Region': ros.stringToRosTemplate(properties.region),
      'AdditionalProtectionNodes': ros.numberToRosTemplate(properties.additionalProtectionNodes),
      'ApiSecurity': ros.booleanToRosTemplate(properties.apiSecurity),
      'AutoPay': ros.booleanToRosTemplate(properties.autoPay),
      'AutoRenew': ros.booleanToRosTemplate(properties.autoRenew),
      'BotAppProtection': ros.booleanToRosTemplate(properties.botAppProtection),
      'BotWebProtection': ros.booleanToRosTemplate(properties.botWebProtection),
      'DomainsExtension': ros.numberToRosTemplate(properties.domainsExtension),
      'ElasticQps': ros.numberToRosTemplate(properties.elasticQps),
      'ExclusiveIPAddress': ros.numberToRosTemplate(properties.exclusiveIpAddress),
      'FraudDetection': ros.booleanToRosTemplate(properties.fraudDetection),
      'IgnoreExisting': ros.booleanToRosTemplate(properties.ignoreExisting),
      'IntelligentLoadBalancing': ros.booleanToRosTemplate(properties.intelligentLoadBalancing),
      'LogService': ros.booleanToRosTemplate(properties.logService),
      'LogStorage': ros.numberToRosTemplate(properties.logStorage),
      'Period': ros.numberToRosTemplate(properties.period),
      'PeriodUnit': ros.stringToRosTemplate(properties.periodUnit),
      'QpsExtension': ros.numberToRosTemplate(properties.qpsExtension),
      'TrafficBillingProtectionThreshold': ros.numberToRosTemplate(properties.trafficBillingProtectionThreshold),
      'WafVersion': ros.stringToRosTemplate(properties.wafVersion),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::WAF3::Instance`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Instance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-waf3-instance
 */
export class RosInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::WAF3::Instance";

    /**
     * @Attribute InstanceId: Instance Id.
     */
    public readonly attrInstanceId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property payType: The billing method of the firewall instance. Valid values:
     * PayAsYouGo: pay-as-you-go
     * Subscription: subscription
     */
    public payType: string | ros.IResolvable;

    /**
     * @Property region: Web Application Firewall is available in the following regions: regions in the Chinese mainland, China (Hong Kong), Singapore (Singapore), Malaysia (Kuala Lumpur), US (Silicon Valley), Australia (Sydney), Germany (Frankfurt), India (Mumbai), Indonesia (Jakarta), UAE (Dubai), and Japan (Tokyo).
     *  If your origin server is deployed within the Chinese mainland, select Chinese Mainland. If your origin server is deployed outside the Chinese mainland, select Outside Chinese mainland. Intelligent region selection is supported.
     */
    public region: string | ros.IResolvable;

    /**
     * @Property additionalProtectionNodes: Each protection cluster has at least two protection nodes, and each node provides the protection capabilities of up to 5,000 QPS for HTTP requests or up to 3,000 QPS for HTTPS requests. You can add protection nodes to increase protection capabilities.
     */
    public additionalProtectionNodes: number | ros.IResolvable | undefined;

    /**
     * @Property apiSecurity: The API security feature detects responses with specified characteristics to check whether data leaks occur. After you enable the feature, WAF is authorized to perform related analysis on your data. If you select Chinese Mainland, service deployment and data processing are performed in the Chinese mainland.
     */
    public apiSecurity: boolean | ros.IResolvable | undefined;

    /**
     * @Property autoPay: Whether to auto pay the bill.
     */
    public autoPay: boolean | ros.IResolvable | undefined;

    /**
     * @Property autoRenew: Whether to auto renew the prepay instance.
     */
    public autoRenew: boolean | ros.IResolvable | undefined;

    /**
     * @Property botAppProtection: Bot management module for App protection.
     */
    public botAppProtection: boolean | ros.IResolvable | undefined;

    /**
     * @Property botWebProtection: Bot management module for Web application protection.
     */
    public botWebProtection: boolean | ros.IResolvable | undefined;

    /**
     * @Property domainsExtension: If the actual number of required access domain names exceeds the number of free domain names in the version, the number of domain names can be expanded according to this specification.Domain name counting does not differentiate between domain name types. The main domain name, sub-domain name, and pan-domain name are each counted as one domain name.
     */
    public domainsExtension: number | ros.IResolvable | undefined;

    /**
     * @Property elasticQps: The burstable QPS (pay-as-you-go) feature is suitable for scenarios that involve short-term or sudden traffic surges, for example, during promotions. In these scenarios, the traffic peak may exceed the sum of the maximum QPS that is supported by your WAF edition and the extended QPS. If you enable the feature, you are charged based on the amount of excess QPS resources that you use. This helps prevent your domain names from being added to a sandbox when QPS resources are excessively used and helps ensure service continuity.
     */
    public elasticQps: number | ros.IResolvable | undefined;

    /**
     * @Property exclusiveIpAddress: Excluesive IP address number.
     */
    public exclusiveIpAddress: number | ros.IResolvable | undefined;

    /**
     * @Property fraudDetection: You can enable this feature only after you enable the bot management module. If abnormal phone numbers are used in logon or registration scenarios, anomaly tags are matched. Requests from the abnormal phone numbers are blocked or CAPTCHA verification is required. You are charged based on the number of times that anomaly tags are matched.
     */
    public fraudDetection: boolean | ros.IResolvable | undefined;

    /**
     * @Property ignoreExisting: Whether to ignore existing WAF3 instance
     * False: ROS will perform a uniqueness check.If the WAF3 instance exists, an error will be reported when creating it.
     * True: ROS will not check the uniqueness.If the WAF3 instance exists, the creation process will be ignored.
     * If the WAF3 instance is not created by ROS, it will be ignored during update and delete stage.
     */
    public ignoreExisting: boolean | ros.IResolvable | undefined;

    /**
     * @Property intelligentLoadBalancing: Intelligent load balancer for WAF instance.
     */
    public intelligentLoadBalancing: boolean | ros.IResolvable | undefined;

    /**
     * @Property logService: Log service for WAF instance.
     */
    public logService: boolean | ros.IResolvable | undefined;

    /**
     * @Property logStorage: Log storage capacity.
     */
    public logStorage: number | ros.IResolvable | undefined;

    /**
     * @Property period: The subscription period of the firewallIf PeriodUnit is month, the valid range is 1, 3, 6
     * If periodUnit is year, the valid range is 1, 2, 3
     */
    public period: number | ros.IResolvable | undefined;

    /**
     * @Property periodUnit: The unit of the subscription duration. Valid values:
     * Month
     * Year
     * Default value: Month.
     */
    public periodUnit: string | ros.IResolvable | undefined;

    /**
     * @Property qpsExtension: Extended QPS.
     */
    public qpsExtension: number | ros.IResolvable | undefined;

    /**
     * @Property trafficBillingProtectionThreshold: In pay-as-you-go WAF 3.0, the traffic billing protection feature is automatically enabled to prevent unexpected and unusually high bills that result from unpredictable factors such as HTTP flood attacks. A bill is not generated for an hour if the peak traffic exceeds the traffic billing protection threshold within the hour. Then, your WAF instance is added to a sandbox. If the peak traffic is lower than the traffic billing protection threshold the next hour, your WAF instance is removed from the sandbox.
     */
    public trafficBillingProtectionThreshold: number | ros.IResolvable | undefined;

    /**
     * @Property wafVersion: The version of WAF3.0.
     *
     */
    public wafVersion: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstanceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosInstance.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrInstanceId = this.getAtt('InstanceId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.payType = props.payType;
        this.region = props.region;
        this.additionalProtectionNodes = props.additionalProtectionNodes;
        this.apiSecurity = props.apiSecurity;
        this.autoPay = props.autoPay;
        this.autoRenew = props.autoRenew;
        this.botAppProtection = props.botAppProtection;
        this.botWebProtection = props.botWebProtection;
        this.domainsExtension = props.domainsExtension;
        this.elasticQps = props.elasticQps;
        this.exclusiveIpAddress = props.exclusiveIpAddress;
        this.fraudDetection = props.fraudDetection;
        this.ignoreExisting = props.ignoreExisting;
        this.intelligentLoadBalancing = props.intelligentLoadBalancing;
        this.logService = props.logService;
        this.logStorage = props.logStorage;
        this.period = props.period;
        this.periodUnit = props.periodUnit;
        this.qpsExtension = props.qpsExtension;
        this.trafficBillingProtectionThreshold = props.trafficBillingProtectionThreshold;
        this.wafVersion = props.wafVersion;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            payType: this.payType,
            region: this.region,
            additionalProtectionNodes: this.additionalProtectionNodes,
            apiSecurity: this.apiSecurity,
            autoPay: this.autoPay,
            autoRenew: this.autoRenew,
            botAppProtection: this.botAppProtection,
            botWebProtection: this.botWebProtection,
            domainsExtension: this.domainsExtension,
            elasticQps: this.elasticQps,
            exclusiveIpAddress: this.exclusiveIpAddress,
            fraudDetection: this.fraudDetection,
            ignoreExisting: this.ignoreExisting,
            intelligentLoadBalancing: this.intelligentLoadBalancing,
            logService: this.logService,
            logStorage: this.logStorage,
            period: this.period,
            periodUnit: this.periodUnit,
            qpsExtension: this.qpsExtension,
            trafficBillingProtectionThreshold: this.trafficBillingProtectionThreshold,
            wafVersion: this.wafVersion,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosInstancePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosTGW`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-waf3-tgw
 */
export interface RosTGWProps {

    /**
     * @Property instanceId: The ID of the WAF instance.
     */
    readonly instanceId: string | ros.IResolvable;

    /**
     * @Property listen: Listening information.
     */
    readonly listen: RosTGW.ListenProperty | ros.IResolvable;

    /**
     * @Property redirect: Forwarding information.
     */
    readonly redirect?: RosTGW.RedirectProperty | ros.IResolvable;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosTGWProps`
 *
 * @param properties - the TypeScript properties of a `RosTGWProps`
 *
 * @returns the result of the validation.
 */
function RosTGWPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('instanceId', ros.requiredValidator)(properties.instanceId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    errors.collect(ros.propertyValidator('listen', ros.requiredValidator)(properties.listen));
    errors.collect(ros.propertyValidator('listen', RosTGW_ListenPropertyValidator)(properties.listen));
    errors.collect(ros.propertyValidator('redirect', RosTGW_RedirectPropertyValidator)(properties.redirect));
    return errors.wrap('supplied properties not correct for "RosTGWProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::WAF3::TGW` resource
 *
 * @param properties - the TypeScript properties of a `RosTGWProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::WAF3::TGW` resource.
 */
// @ts-ignore TS6133
function rosTGWPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosTGWPropsValidator(properties).assertSuccess();
    }
    return {
      'InstanceId': ros.stringToRosTemplate(properties.instanceId),
      'Listen': rosTGWListenPropertyToRosTemplate(properties.listen),
      'Redirect': rosTGWRedirectPropertyToRosTemplate(properties.redirect),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::WAF3::TGW`.
 * @Note This class does not contain additional functions, so it is recommended to use the `TGW` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-waf3-tgw
 */
export class RosTGW extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::WAF3::TGW";

    /**
     * @Attribute InstanceId: The ID of the WAF instance.
     */
    public readonly attrInstanceId: ros.IResolvable;

    /**
     * @Attribute Port: Access the cloud product port of WAF.
     */
    public readonly attrPort: ros.IResolvable;

    /**
     * @Attribute ResourceProduct: Access to WAF cloud products.
     */
    public readonly attrResourceProduct: ros.IResolvable;

    /**
     * @Attribute TgwId: The protection object ID of the transparent access resource.
     */
    public readonly attrTgwId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property instanceId: The ID of the WAF instance.
     */
    public instanceId: string | ros.IResolvable;

    /**
     * @Property listen: Listening information.
     */
    public listen: RosTGW.ListenProperty | ros.IResolvable;

    /**
     * @Property redirect: Forwarding information.
     */
    public redirect: RosTGW.RedirectProperty | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosTGWProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosTGW.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrInstanceId = this.getAtt('InstanceId');
        this.attrPort = this.getAtt('Port');
        this.attrResourceProduct = this.getAtt('ResourceProduct');
        this.attrTgwId = this.getAtt('TgwId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.instanceId = props.instanceId;
        this.listen = props.listen;
        this.redirect = props.redirect;
        this.resourceGroupId = props.resourceGroupId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            instanceId: this.instanceId,
            listen: this.listen,
            redirect: this.redirect,
            resourceGroupId: this.resourceGroupId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosTGWPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosTGW {
    /**
     * @stability external
     */
    export interface CertificatesProperty {
        /**
         * @Property appliedType: The certificate type for the HTTPS protocol. Valid values:
     * default: Indicates the default certificate.
     * extension: Indicates an extended certificate.
         */
        readonly appliedType?: string | ros.IResolvable;
        /**
         * @Property certificateId: The ID of the certificate that was added.
         */
        readonly certificateId?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `CertificatesProperty`
 *
 * @param properties - the TypeScript properties of a `CertificatesProperty`
 *
 * @returns the result of the validation.
 */
function RosTGW_CertificatesPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.appliedType && (typeof properties.appliedType) !== 'object') {
        errors.collect(ros.propertyValidator('appliedType', ros.validateAllowedValues)({
          data: properties.appliedType,
          allowedValues: ["default","extension"],
        }));
    }
    errors.collect(ros.propertyValidator('appliedType', ros.validateString)(properties.appliedType));
    errors.collect(ros.propertyValidator('certificateId', ros.validateString)(properties.certificateId));
    return errors.wrap('supplied properties not correct for "CertificatesProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::WAF3::TGW.Certificates` resource
 *
 * @param properties - the TypeScript properties of a `CertificatesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::WAF3::TGW.Certificates` resource.
 */
// @ts-ignore TS6133
function rosTGWCertificatesPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosTGW_CertificatesPropertyValidator(properties).assertSuccess();
    return {
      'AppliedType': ros.stringToRosTemplate(properties.appliedType),
      'CertificateId': ros.stringToRosTemplate(properties.certificateId),
    };
}

export namespace RosTGW {
    /**
     * @stability external
     */
    export interface ListenProperty {
        /**
         * @Property customCiphers: Customize the encryption suite list. This parameter is used only when CipherSuite is set to 99.
         */
        readonly customCiphers?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property tlsVersion: The TLS version to be added. This parameter is used only when the value of HttpsPorts is not empty (indicating that the domain name uses the HTTPS protocol). Values:
     * tlsv1
     * tlsv1.1
     * tlsv1.2
         */
        readonly tlsVersion?: string | ros.IResolvable;
        /**
         * @Property http2Enabled: Whether to enable HTTP2. This parameter is used only when the value of HttpsPorts is not empty (indicating that the domain name uses the HTTPS protocol). Values:
     * true: Enable HTTP2.
     * false (default): Disable HTTP2.
         */
        readonly http2Enabled?: boolean | ros.IResolvable;
        /**
         * @Property cipherSuite: The type of encryption suite to be added. This parameter is used only when the value of HttpsPorts is not empty (indicating that the domain name uses the HTTPS protocol). Values:
     * 1: Indicates adding all encryption suites.
     * 2: Indicates adding a strong encryption suite. This value can be selected only when the value of TLSVersion is tlsv1.2.
     * 99: Indicates adding a custom encryption suite.
         */
        readonly cipherSuite?: number | ros.IResolvable;
        /**
         * @Property enableTlSv3: Whether to support TSL1.3 version. This parameter is used only when the value of HttpsPorts is not empty (indicating that the domain name uses the HTTPS protocol). Value:
     * true: indicates that TSL1.3 version is supported.
     * false: indicates that TSL1.3 version is not supported.
         */
        readonly enableTlSv3?: boolean | ros.IResolvable;
        /**
         * @Property port: Access the cloud product port of WAF.
         */
        readonly port: number | ros.IResolvable;
        /**
         * @Property resourceProduct: Access to WAF cloud products.
         */
        readonly resourceProduct: string | ros.IResolvable;
        /**
         * @Property certificates: The domain name bound to the certificate.
         */
        readonly certificates?: Array<RosTGW.CertificatesProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property protocol: Protocol type
         */
        readonly protocol: string | ros.IResolvable;
        /**
         * @Property resourceInstanceId: The instance ID of the cloud product connected to WAF.
         */
        readonly resourceInstanceId: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `ListenProperty`
 *
 * @param properties - the TypeScript properties of a `ListenProperty`
 *
 * @returns the result of the validation.
 */
function RosTGW_ListenPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.customCiphers && (Array.isArray(properties.customCiphers) || (typeof properties.customCiphers) === 'string')) {
        errors.collect(ros.propertyValidator('customCiphers', ros.validateLength)({
            data: properties.customCiphers.length,
            min: 0,
            max: 5,
          }));
    }
    errors.collect(ros.propertyValidator('customCiphers', ros.listValidator(ros.validateAny))(properties.customCiphers));
    if(properties.tlsVersion && (typeof properties.tlsVersion) !== 'object') {
        errors.collect(ros.propertyValidator('tlsVersion', ros.validateAllowedValues)({
          data: properties.tlsVersion,
          allowedValues: ["tlsv1","tlsv1.1","tlsv1.2"],
        }));
    }
    errors.collect(ros.propertyValidator('tlsVersion', ros.validateString)(properties.tlsVersion));
    errors.collect(ros.propertyValidator('http2Enabled', ros.validateBoolean)(properties.http2Enabled));
    errors.collect(ros.propertyValidator('cipherSuite', ros.validateNumber)(properties.cipherSuite));
    errors.collect(ros.propertyValidator('enableTlSv3', ros.validateBoolean)(properties.enableTlSv3));
    errors.collect(ros.propertyValidator('port', ros.requiredValidator)(properties.port));
    errors.collect(ros.propertyValidator('port', ros.validateNumber)(properties.port));
    errors.collect(ros.propertyValidator('resourceProduct', ros.requiredValidator)(properties.resourceProduct));
    errors.collect(ros.propertyValidator('resourceProduct', ros.validateString)(properties.resourceProduct));
    if(properties.certificates && (Array.isArray(properties.certificates) || (typeof properties.certificates) === 'string')) {
        errors.collect(ros.propertyValidator('certificates', ros.validateLength)({
            data: properties.certificates.length,
            min: 0,
            max: 10,
          }));
    }
    errors.collect(ros.propertyValidator('certificates', ros.listValidator(RosTGW_CertificatesPropertyValidator))(properties.certificates));
    errors.collect(ros.propertyValidator('protocol', ros.requiredValidator)(properties.protocol));
    errors.collect(ros.propertyValidator('protocol', ros.validateString)(properties.protocol));
    errors.collect(ros.propertyValidator('resourceInstanceId', ros.requiredValidator)(properties.resourceInstanceId));
    errors.collect(ros.propertyValidator('resourceInstanceId', ros.validateString)(properties.resourceInstanceId));
    return errors.wrap('supplied properties not correct for "ListenProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::WAF3::TGW.Listen` resource
 *
 * @param properties - the TypeScript properties of a `ListenProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::WAF3::TGW.Listen` resource.
 */
// @ts-ignore TS6133
function rosTGWListenPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosTGW_ListenPropertyValidator(properties).assertSuccess();
    return {
      'CustomCiphers': ros.listMapper(ros.objectToRosTemplate)(properties.customCiphers),
      'TLSVersion': ros.stringToRosTemplate(properties.tlsVersion),
      'Http2Enabled': ros.booleanToRosTemplate(properties.http2Enabled),
      'CipherSuite': ros.numberToRosTemplate(properties.cipherSuite),
      'EnableTLSv3': ros.booleanToRosTemplate(properties.enableTlSv3),
      'Port': ros.numberToRosTemplate(properties.port),
      'ResourceProduct': ros.stringToRosTemplate(properties.resourceProduct),
      'Certificates': ros.listMapper(rosTGWCertificatesPropertyToRosTemplate)(properties.certificates),
      'Protocol': ros.stringToRosTemplate(properties.protocol),
      'ResourceInstanceId': ros.stringToRosTemplate(properties.resourceInstanceId),
    };
}

export namespace RosTGW {
    /**
     * @stability external
     */
    export interface RedirectProperty {
        /**
         * @Property xffHeaders: Sets a custom field list for obtaining the client IP, expressed in the format of ["header1", "header2", ...].
         */
        readonly xffHeaders?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property writeTimeout: Write timeout duration, unit: seconds. Value range: 1~3600.
         */
        readonly writeTimeout?: number | ros.IResolvable;
        /**
         * @Property xffHeaderMode: The way WAF obtains the client's real IP. Value:
     * 0 (default): indicates that the client access traffic is not forwarded by other seven-layer proxies before reaching WAF.
     * 1: indicates that WAF reads the first value of the X-Forwarded-For (XFF) field in the request header as the client IP.
     * 2: indicates that WAF reads the custom field value set by you in the request header as the client IP.
         */
        readonly xffHeaderMode?: number | ros.IResolvable;
        /**
         * @Property keepalive: Whether to maintain a long connection. Value:
     * true (default): indicates to maintain a long connection.
     * false: indicates not to maintain a long connection.
         */
        readonly keepalive?: boolean | ros.IResolvable;
        /**
         * @Property requestHeaders: The traffic tag field and value of the domain name, used to tag traffic processed by WAF.
         */
        readonly requestHeaders?: Array<RosTGW.RequestHeadersProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property keepaliveRequests: The number of requests for multiplexing long connections. Value range: 60~1000, unit: number.
         */
        readonly keepaliveRequests?: number | ros.IResolvable;
        /**
         * @Property keepaliveTimeout: Idle long connection timeout, value range: 1~60, default 15, unit: second.
         */
        readonly keepaliveTimeout?: number | ros.IResolvable;
        /**
         * @Property readTimeout: Read timeout duration, unit: seconds. Value range: 1~3600.
         */
        readonly readTimeout?: number | ros.IResolvable;
        /**
         * @Property xffProto: X-Forward-For-Proto The protocol of WAF. Value:
     * true (default): indicates that the protocol of WAF is transmitted.
     * false: indicates that the protocol of WAF is not transmitted.
         */
        readonly xffProto?: boolean | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `RedirectProperty`
 *
 * @param properties - the TypeScript properties of a `RedirectProperty`
 *
 * @returns the result of the validation.
 */
function RosTGW_RedirectPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.xffHeaders && (Array.isArray(properties.xffHeaders) || (typeof properties.xffHeaders) === 'string')) {
        errors.collect(ros.propertyValidator('xffHeaders', ros.validateLength)({
            data: properties.xffHeaders.length,
            min: 0,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('xffHeaders', ros.listValidator(ros.validateAny))(properties.xffHeaders));
    if(properties.writeTimeout && (typeof properties.writeTimeout) !== 'object') {
        errors.collect(ros.propertyValidator('writeTimeout', ros.validateRange)({
            data: properties.writeTimeout,
            min: 1,
            max: 3600,
          }));
    }
    errors.collect(ros.propertyValidator('writeTimeout', ros.validateNumber)(properties.writeTimeout));
    if(properties.xffHeaderMode && (typeof properties.xffHeaderMode) !== 'object') {
        errors.collect(ros.propertyValidator('xffHeaderMode', ros.validateAllowedValues)({
          data: properties.xffHeaderMode,
          allowedValues: [0,1,2],
        }));
    }
    errors.collect(ros.propertyValidator('xffHeaderMode', ros.validateNumber)(properties.xffHeaderMode));
    errors.collect(ros.propertyValidator('keepalive', ros.validateBoolean)(properties.keepalive));
    if(properties.requestHeaders && (Array.isArray(properties.requestHeaders) || (typeof properties.requestHeaders) === 'string')) {
        errors.collect(ros.propertyValidator('requestHeaders', ros.validateLength)({
            data: properties.requestHeaders.length,
            min: 0,
            max: 5,
          }));
    }
    errors.collect(ros.propertyValidator('requestHeaders', ros.listValidator(RosTGW_RequestHeadersPropertyValidator))(properties.requestHeaders));
    if(properties.keepaliveRequests && (typeof properties.keepaliveRequests) !== 'object') {
        errors.collect(ros.propertyValidator('keepaliveRequests', ros.validateRange)({
            data: properties.keepaliveRequests,
            min: 60,
            max: 1000,
          }));
    }
    errors.collect(ros.propertyValidator('keepaliveRequests', ros.validateNumber)(properties.keepaliveRequests));
    if(properties.keepaliveTimeout && (typeof properties.keepaliveTimeout) !== 'object') {
        errors.collect(ros.propertyValidator('keepaliveTimeout', ros.validateRange)({
            data: properties.keepaliveTimeout,
            min: 1,
            max: 60,
          }));
    }
    errors.collect(ros.propertyValidator('keepaliveTimeout', ros.validateNumber)(properties.keepaliveTimeout));
    if(properties.readTimeout && (typeof properties.readTimeout) !== 'object') {
        errors.collect(ros.propertyValidator('readTimeout', ros.validateRange)({
            data: properties.readTimeout,
            min: 1,
            max: 3600,
          }));
    }
    errors.collect(ros.propertyValidator('readTimeout', ros.validateNumber)(properties.readTimeout));
    errors.collect(ros.propertyValidator('xffProto', ros.validateBoolean)(properties.xffProto));
    return errors.wrap('supplied properties not correct for "RedirectProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::WAF3::TGW.Redirect` resource
 *
 * @param properties - the TypeScript properties of a `RedirectProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::WAF3::TGW.Redirect` resource.
 */
// @ts-ignore TS6133
function rosTGWRedirectPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosTGW_RedirectPropertyValidator(properties).assertSuccess();
    return {
      'XffHeaders': ros.listMapper(ros.objectToRosTemplate)(properties.xffHeaders),
      'WriteTimeout': ros.numberToRosTemplate(properties.writeTimeout),
      'XffHeaderMode': ros.numberToRosTemplate(properties.xffHeaderMode),
      'Keepalive': ros.booleanToRosTemplate(properties.keepalive),
      'RequestHeaders': ros.listMapper(rosTGWRequestHeadersPropertyToRosTemplate)(properties.requestHeaders),
      'KeepaliveRequests': ros.numberToRosTemplate(properties.keepaliveRequests),
      'KeepaliveTimeout': ros.numberToRosTemplate(properties.keepaliveTimeout),
      'ReadTimeout': ros.numberToRosTemplate(properties.readTimeout),
      'XffProto': ros.booleanToRosTemplate(properties.xffProto),
    };
}

export namespace RosTGW {
    /**
     * @stability external
     */
    export interface RequestHeadersProperty {
        /**
         * @Property value: Customize the value set by the request header field.
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: The specified custom request header field.
         */
        readonly key?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `RequestHeadersProperty`
 *
 * @param properties - the TypeScript properties of a `RequestHeadersProperty`
 *
 * @returns the result of the validation.
 */
function RosTGW_RequestHeadersPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "RequestHeadersProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::WAF3::TGW.RequestHeaders` resource
 *
 * @param properties - the TypeScript properties of a `RequestHeadersProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::WAF3::TGW.RequestHeaders` resource.
 */
// @ts-ignore TS6133
function rosTGWRequestHeadersPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosTGW_RequestHeadersPropertyValidator(properties).assertSuccess();
    return {
      'Value': ros.stringToRosTemplate(properties.value),
      'Key': ros.stringToRosTemplate(properties.key),
    };
}
