// Generated from the AliCloud ROS Resource Specification

import * as ros from '@ros-cdk/core';

/**
 * Properties for defining a `ALIYUN::WAF::AclRule`
 */
export interface RosAclRuleProps {

    /**
     * @Property domain: Domain name.
     */
    readonly domain: string;

    /**
     * @Property instanceId: WAF instance ID.
     * Description Interface You can view your current WAF instance ID by calling DescribePayInfo.
     */
    readonly instanceId: string;

    /**
     * @Property rules: Detailed information of precise access control rules, expressed in JSON format strings.
     */
    readonly rules: string;

    /**
     * @Property region: Examples of areas where the WAF. Value:
     * cn: China mainland (default)
     * cn-hongkong: China HongKong and other overseas
     */
    readonly region?: string;

    /**
     * @Property ruleId: Precise access control rule ID
     */
    readonly ruleId?: number;
}

/**
 * Determine whether the given properties match those of a `RosAclRuleProps`
 *
 * @param properties - the TypeScript properties of a `RosAclRuleProps`
 *
 * @returns the result of the validation.
 */
function RosAclRulePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('instanceId', ros.requiredValidator)(properties.instanceId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    errors.collect(ros.propertyValidator('ruleId', ros.validateNumber)(properties.ruleId));
    if(properties.region && (typeof properties.region) !== 'object') {
        errors.collect(ros.propertyValidator('region', ros.validateAllowedValues)({
          data: properties.region,
          allowedValues: ["cn","cn-hongkong"],
        }));
    }
    errors.collect(ros.propertyValidator('region', ros.validateString)(properties.region));
    errors.collect(ros.propertyValidator('domain', ros.requiredValidator)(properties.domain));
    errors.collect(ros.propertyValidator('domain', ros.validateString)(properties.domain));
    errors.collect(ros.propertyValidator('rules', ros.requiredValidator)(properties.rules));
    errors.collect(ros.propertyValidator('rules', ros.validateString)(properties.rules));
    return errors.wrap('supplied properties not correct for "RosAclRuleProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::WAF::AclRule` resource
 *
 * @param properties - the TypeScript properties of a `RosAclRuleProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::WAF::AclRule` resource.
 */
// @ts-ignore TS6133
function rosAclRulePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosAclRulePropsValidator(properties).assertSuccess();
    }
    return {
      Domain: ros.stringToRosTemplate(properties.domain),
      InstanceId: ros.stringToRosTemplate(properties.instanceId),
      Rules: ros.stringToRosTemplate(properties.rules),
      Region: ros.stringToRosTemplate(properties.region),
      RuleId: ros.numberToRosTemplate(properties.ruleId),
    };
}

/**
 * A ROS template type:  `ALIYUN::WAF::AclRule`
 */
export class RosAclRule extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::WAF::AclRule";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property domain: Domain name.
     */
    public domain: string;

    /**
     * @Property instanceId: WAF instance ID.
     * Description Interface You can view your current WAF instance ID by calling DescribePayInfo.
     */
    public instanceId: string;

    /**
     * @Property rules: Detailed information of precise access control rules, expressed in JSON format strings.
     */
    public rules: string;

    /**
     * @Property region: Examples of areas where the WAF. Value:
     * cn: China mainland (default)
     * cn-hongkong: China HongKong and other overseas
     */
    public region: string | undefined;

    /**
     * @Property ruleId: Precise access control rule ID
     */
    public ruleId: number | undefined;

    /**
     * Create a new `ALIYUN::WAF::AclRule`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAclRuleProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosAclRule.ROS_RESOURCE_TYPE_NAME, properties: props });

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.domain = props.domain;
        this.instanceId = props.instanceId;
        this.rules = props.rules;
        this.region = props.region;
        this.ruleId = props.ruleId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            domain: this.domain,
            instanceId: this.instanceId,
            rules: this.rules,
            region: this.region,
            ruleId: this.ruleId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAclRulePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::WAF::DomainConfig`
 */
export interface RosDomainConfigProps {

    /**
     * @Property domain: Domain name.
     */
    readonly domain: string;

    /**
     * @Property instanceId: WAF instance ID.
     * Description Interface You can view your current WAF instance ID by calling DescribePayInfo.
     */
    readonly instanceId: string;

    /**
     * @Property isAccessProduct: The domain before WAF is configured with seven agents (eg, high defense, CDN, etc.), the value of:
     * 0: none.
     * 1: expressed.
     */
    readonly isAccessProduct: number;

    /**
     * @Property protocols: The domain supports access protocols, values:
     * http: expressed support for the HTTP protocol.
     * https: support for HTTPS protocol.
     * http, https: supports HTTP, HTTPS protocol.
     */
    readonly protocols: string;

    /**
     * @Property httpPort: HTTP protocol configuration port. When specifying a plurality of HTTP port "," separated. Example values: [80].
     * Configure the HTTP protocol, this parameter is required. The default value is 80. HttpPort HttpsPort with at least two parameters need to fill a request.
     */
    readonly httpPort?: string;

    /**
     * @Property httpsPort: HTTPS protocol configuration port. When specifying a plurality HTTPS port, using the "," separated. Example values: [443].
     * Configure the protocol is HTTPS, this parameter is required. The default value is 443. HttpPort HttpsPort with at least two parameters need to fill a request.
     */
    readonly httpsPort?: string;

    /**
     * @Property httpsRedirect: HTTPS is turned forcefully jump the argument:
     * 0: off (default)
     * 1: Turn
     * Description required to complete the request parameters using only HTTPS access protocol. After opening force will show a jump HTTP request is HTTPS, a default jump to 443.
     */
    readonly httpsRedirect?: number;

    /**
     * @Property httpToUserIp: Whether to open HTTPS access request is forwarded back to the source station via the HTTP protocol, the value of:
     * 0: off (default)
     * 1: Turn
     * Note If your site does not support HTTPS back to the source, open source HTTP return (default back to the source port is port 80) function key, can be realized by WAF HTTPS access.
     */
    readonly httpToUserIp?: number;

    /**
     * @Property loadBalancing: Back to the source load balancing policy values:
     * 0: IP Hash way.
     * 1: represents a polling mode.
     */
    readonly loadBalancing?: number;

    /**
     * @Property region: Examples of areas where the WAF. Value:
     * cn: China mainland (default)
     * cn-hongkong: China HongKong and other overseas
     */
    readonly region?: string;

    /**
     * @Property rsType: Back to the source address type the domain name values:
     * 0: back to the source to IP.
     * 1: Indicates the domain name back to the source.
     */
    readonly rsType?: number;

    /**
     * @Property sourceIps: Source station IP, supports a plurality of specified IP. Example values: [ "1.1.1.1"].
     */
    readonly sourceIps?: string;
}

/**
 * Determine whether the given properties match those of a `RosDomainConfigProps`
 *
 * @param properties - the TypeScript properties of a `RosDomainConfigProps`
 *
 * @returns the result of the validation.
 */
function RosDomainConfigPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.httpToUserIp && (typeof properties.httpToUserIp) !== 'object') {
        errors.collect(ros.propertyValidator('httpToUserIp', ros.validateAllowedValues)({
          data: properties.httpToUserIp,
          allowedValues: [0,1],
        }));
    }
    errors.collect(ros.propertyValidator('httpToUserIp', ros.validateNumber)(properties.httpToUserIp));
    errors.collect(ros.propertyValidator('httpPort', ros.validateString)(properties.httpPort));
    errors.collect(ros.propertyValidator('isAccessProduct', ros.requiredValidator)(properties.isAccessProduct));
    if(properties.isAccessProduct && (typeof properties.isAccessProduct) !== 'object') {
        errors.collect(ros.propertyValidator('isAccessProduct', ros.validateAllowedValues)({
          data: properties.isAccessProduct,
          allowedValues: [0,1],
        }));
    }
    errors.collect(ros.propertyValidator('isAccessProduct', ros.validateNumber)(properties.isAccessProduct));
    if(properties.rsType && (typeof properties.rsType) !== 'object') {
        errors.collect(ros.propertyValidator('rsType', ros.validateAllowedValues)({
          data: properties.rsType,
          allowedValues: [0,1],
        }));
    }
    errors.collect(ros.propertyValidator('rsType', ros.validateNumber)(properties.rsType));
    errors.collect(ros.propertyValidator('protocols', ros.requiredValidator)(properties.protocols));
    errors.collect(ros.propertyValidator('protocols', ros.validateString)(properties.protocols));
    errors.collect(ros.propertyValidator('instanceId', ros.requiredValidator)(properties.instanceId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    errors.collect(ros.propertyValidator('sourceIps', ros.validateString)(properties.sourceIps));
    if(properties.httpsRedirect && (typeof properties.httpsRedirect) !== 'object') {
        errors.collect(ros.propertyValidator('httpsRedirect', ros.validateAllowedValues)({
          data: properties.httpsRedirect,
          allowedValues: [0,1],
        }));
    }
    errors.collect(ros.propertyValidator('httpsRedirect', ros.validateNumber)(properties.httpsRedirect));
    if(properties.region && (typeof properties.region) !== 'object') {
        errors.collect(ros.propertyValidator('region', ros.validateAllowedValues)({
          data: properties.region,
          allowedValues: ["cn","cn-hongkong"],
        }));
    }
    errors.collect(ros.propertyValidator('region', ros.validateString)(properties.region));
    errors.collect(ros.propertyValidator('domain', ros.requiredValidator)(properties.domain));
    errors.collect(ros.propertyValidator('domain', ros.validateString)(properties.domain));
    if(properties.loadBalancing && (typeof properties.loadBalancing) !== 'object') {
        errors.collect(ros.propertyValidator('loadBalancing', ros.validateAllowedValues)({
          data: properties.loadBalancing,
          allowedValues: [0,1],
        }));
    }
    errors.collect(ros.propertyValidator('loadBalancing', ros.validateNumber)(properties.loadBalancing));
    errors.collect(ros.propertyValidator('httpsPort', ros.validateString)(properties.httpsPort));
    return errors.wrap('supplied properties not correct for "RosDomainConfigProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::WAF::DomainConfig` resource
 *
 * @param properties - the TypeScript properties of a `RosDomainConfigProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::WAF::DomainConfig` resource.
 */
// @ts-ignore TS6133
function rosDomainConfigPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDomainConfigPropsValidator(properties).assertSuccess();
    }
    return {
      Domain: ros.stringToRosTemplate(properties.domain),
      InstanceId: ros.stringToRosTemplate(properties.instanceId),
      IsAccessProduct: ros.numberToRosTemplate(properties.isAccessProduct),
      Protocols: ros.stringToRosTemplate(properties.protocols),
      HttpPort: ros.stringToRosTemplate(properties.httpPort),
      HttpsPort: ros.stringToRosTemplate(properties.httpsPort),
      HttpsRedirect: ros.numberToRosTemplate(properties.httpsRedirect),
      HttpToUserIp: ros.numberToRosTemplate(properties.httpToUserIp),
      LoadBalancing: ros.numberToRosTemplate(properties.loadBalancing),
      Region: ros.stringToRosTemplate(properties.region),
      RsType: ros.numberToRosTemplate(properties.rsType),
      SourceIps: ros.stringToRosTemplate(properties.sourceIps),
    };
}

/**
 * A ROS template type:  `ALIYUN::WAF::DomainConfig`
 */
export class RosDomainConfig extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::WAF::DomainConfig";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute Cname: CNAME assigned by WAF instance.
     */
    public readonly attrCname: any;

    /**
     * @Attribute ProtocolType: agreement type:0: indicates that the HTTP protocol is supported.1: indicates that the HTTPS protocol is supported.2: indicates that both HTTP and HTTPS protocols are supported.
     */
    public readonly attrProtocolType: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property domain: Domain name.
     */
    public domain: string;

    /**
     * @Property instanceId: WAF instance ID.
     * Description Interface You can view your current WAF instance ID by calling DescribePayInfo.
     */
    public instanceId: string;

    /**
     * @Property isAccessProduct: The domain before WAF is configured with seven agents (eg, high defense, CDN, etc.), the value of:
     * 0: none.
     * 1: expressed.
     */
    public isAccessProduct: number;

    /**
     * @Property protocols: The domain supports access protocols, values:
     * http: expressed support for the HTTP protocol.
     * https: support for HTTPS protocol.
     * http, https: supports HTTP, HTTPS protocol.
     */
    public protocols: string;

    /**
     * @Property httpPort: HTTP protocol configuration port. When specifying a plurality of HTTP port "," separated. Example values: [80].
     * Configure the HTTP protocol, this parameter is required. The default value is 80. HttpPort HttpsPort with at least two parameters need to fill a request.
     */
    public httpPort: string | undefined;

    /**
     * @Property httpsPort: HTTPS protocol configuration port. When specifying a plurality HTTPS port, using the "," separated. Example values: [443].
     * Configure the protocol is HTTPS, this parameter is required. The default value is 443. HttpPort HttpsPort with at least two parameters need to fill a request.
     */
    public httpsPort: string | undefined;

    /**
     * @Property httpsRedirect: HTTPS is turned forcefully jump the argument:
     * 0: off (default)
     * 1: Turn
     * Description required to complete the request parameters using only HTTPS access protocol. After opening force will show a jump HTTP request is HTTPS, a default jump to 443.
     */
    public httpsRedirect: number | undefined;

    /**
     * @Property httpToUserIp: Whether to open HTTPS access request is forwarded back to the source station via the HTTP protocol, the value of:
     * 0: off (default)
     * 1: Turn
     * Note If your site does not support HTTPS back to the source, open source HTTP return (default back to the source port is port 80) function key, can be realized by WAF HTTPS access.
     */
    public httpToUserIp: number | undefined;

    /**
     * @Property loadBalancing: Back to the source load balancing policy values:
     * 0: IP Hash way.
     * 1: represents a polling mode.
     */
    public loadBalancing: number | undefined;

    /**
     * @Property region: Examples of areas where the WAF. Value:
     * cn: China mainland (default)
     * cn-hongkong: China HongKong and other overseas
     */
    public region: string | undefined;

    /**
     * @Property rsType: Back to the source address type the domain name values:
     * 0: back to the source to IP.
     * 1: Indicates the domain name back to the source.
     */
    public rsType: number | undefined;

    /**
     * @Property sourceIps: Source station IP, supports a plurality of specified IP. Example values: [ "1.1.1.1"].
     */
    public sourceIps: string | undefined;

    /**
     * Create a new `ALIYUN::WAF::DomainConfig`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDomainConfigProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDomainConfig.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCname = ros.Token.asString(this.getAtt('Cname'));
        this.attrProtocolType = ros.Token.asString(this.getAtt('ProtocolType'));

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.domain = props.domain;
        this.instanceId = props.instanceId;
        this.isAccessProduct = props.isAccessProduct;
        this.protocols = props.protocols;
        this.httpPort = props.httpPort;
        this.httpsPort = props.httpsPort;
        this.httpsRedirect = props.httpsRedirect;
        this.httpToUserIp = props.httpToUserIp;
        this.loadBalancing = props.loadBalancing;
        this.region = props.region;
        this.rsType = props.rsType;
        this.sourceIps = props.sourceIps;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            domain: this.domain,
            instanceId: this.instanceId,
            isAccessProduct: this.isAccessProduct,
            protocols: this.protocols,
            httpPort: this.httpPort,
            httpsPort: this.httpsPort,
            httpsRedirect: this.httpsRedirect,
            httpToUserIp: this.httpToUserIp,
            loadBalancing: this.loadBalancing,
            region: this.region,
            rsType: this.rsType,
            sourceIps: this.sourceIps,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDomainConfigPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::WAF::WafSwitch`
 */
export interface RosWafSwitchProps {

    /**
     * @Property domain: Domain name.
     */
    readonly domain: string;

    /**
     * @Property instanceId: WAF instance ID.
     * Description Interface You can view your current WAF instance ID by calling DescribePayInfo.
     */
    readonly instanceId: string;

    /**
     * @Property serviceOn: Web attack protection switch, the value of:
     * 0: closed.
     * 1: indicate on.
     */
    readonly serviceOn: number;

    /**
     * @Property region: Examples of areas where the WAF. Value:
     * cn: China mainland (default)
     * cn-hongkong: China HongKong and other overseas
     */
    readonly region?: string;
}

/**
 * Determine whether the given properties match those of a `RosWafSwitchProps`
 *
 * @param properties - the TypeScript properties of a `RosWafSwitchProps`
 *
 * @returns the result of the validation.
 */
function RosWafSwitchPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('instanceId', ros.requiredValidator)(properties.instanceId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    if(properties.region && (typeof properties.region) !== 'object') {
        errors.collect(ros.propertyValidator('region', ros.validateAllowedValues)({
          data: properties.region,
          allowedValues: ["cn","cn-hongkong"],
        }));
    }
    errors.collect(ros.propertyValidator('region', ros.validateString)(properties.region));
    errors.collect(ros.propertyValidator('serviceOn', ros.requiredValidator)(properties.serviceOn));
    if(properties.serviceOn && (typeof properties.serviceOn) !== 'object') {
        errors.collect(ros.propertyValidator('serviceOn', ros.validateAllowedValues)({
          data: properties.serviceOn,
          allowedValues: [0,1],
        }));
    }
    errors.collect(ros.propertyValidator('serviceOn', ros.validateNumber)(properties.serviceOn));
    errors.collect(ros.propertyValidator('domain', ros.requiredValidator)(properties.domain));
    errors.collect(ros.propertyValidator('domain', ros.validateString)(properties.domain));
    return errors.wrap('supplied properties not correct for "RosWafSwitchProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::WAF::WafSwitch` resource
 *
 * @param properties - the TypeScript properties of a `RosWafSwitchProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::WAF::WafSwitch` resource.
 */
// @ts-ignore TS6133
function rosWafSwitchPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosWafSwitchPropsValidator(properties).assertSuccess();
    }
    return {
      Domain: ros.stringToRosTemplate(properties.domain),
      InstanceId: ros.stringToRosTemplate(properties.instanceId),
      ServiceOn: ros.numberToRosTemplate(properties.serviceOn),
      Region: ros.stringToRosTemplate(properties.region),
    };
}

/**
 * A ROS template type:  `ALIYUN::WAF::WafSwitch`
 */
export class RosWafSwitch extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::WAF::WafSwitch";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property domain: Domain name.
     */
    public domain: string;

    /**
     * @Property instanceId: WAF instance ID.
     * Description Interface You can view your current WAF instance ID by calling DescribePayInfo.
     */
    public instanceId: string;

    /**
     * @Property serviceOn: Web attack protection switch, the value of:
     * 0: closed.
     * 1: indicate on.
     */
    public serviceOn: number;

    /**
     * @Property region: Examples of areas where the WAF. Value:
     * cn: China mainland (default)
     * cn-hongkong: China HongKong and other overseas
     */
    public region: string | undefined;

    /**
     * Create a new `ALIYUN::WAF::WafSwitch`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosWafSwitchProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosWafSwitch.ROS_RESOURCE_TYPE_NAME, properties: props });

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.domain = props.domain;
        this.instanceId = props.instanceId;
        this.serviceOn = props.serviceOn;
        this.region = props.region;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            domain: this.domain,
            instanceId: this.instanceId,
            serviceOn: this.serviceOn,
            region: this.region,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosWafSwitchPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
