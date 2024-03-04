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
      PayType: ros.stringToRosTemplate(properties.payType),
      Region: ros.stringToRosTemplate(properties.region),
      AdditionalProtectionNodes: ros.numberToRosTemplate(properties.additionalProtectionNodes),
      ApiSecurity: ros.booleanToRosTemplate(properties.apiSecurity),
      AutoPay: ros.booleanToRosTemplate(properties.autoPay),
      AutoRenew: ros.booleanToRosTemplate(properties.autoRenew),
      BotAppProtection: ros.booleanToRosTemplate(properties.botAppProtection),
      BotWebProtection: ros.booleanToRosTemplate(properties.botWebProtection),
      DomainsExtension: ros.numberToRosTemplate(properties.domainsExtension),
      ElasticQps: ros.numberToRosTemplate(properties.elasticQps),
      ExclusiveIPAddress: ros.numberToRosTemplate(properties.exclusiveIpAddress),
      FraudDetection: ros.booleanToRosTemplate(properties.fraudDetection),
      IgnoreExisting: ros.booleanToRosTemplate(properties.ignoreExisting),
      IntelligentLoadBalancing: ros.booleanToRosTemplate(properties.intelligentLoadBalancing),
      LogService: ros.booleanToRosTemplate(properties.logService),
      LogStorage: ros.numberToRosTemplate(properties.logStorage),
      Period: ros.numberToRosTemplate(properties.period),
      PeriodUnit: ros.stringToRosTemplate(properties.periodUnit),
      QpsExtension: ros.numberToRosTemplate(properties.qpsExtension),
      TrafficBillingProtectionThreshold: ros.numberToRosTemplate(properties.trafficBillingProtectionThreshold),
      WafVersion: ros.stringToRosTemplate(properties.wafVersion),
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
