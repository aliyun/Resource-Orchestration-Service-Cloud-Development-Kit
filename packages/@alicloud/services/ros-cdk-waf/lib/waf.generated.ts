// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosAclRule`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-waf-aclrule
 */
export interface RosAclRuleProps {

    /**
     * @Property domain: Domain name.
     */
    readonly domain: string | ros.IResolvable;

    /**
     * @Property instanceId: WAF instance ID.
     * Description Interface You can view your current WAF instance ID by calling DescribePayInfo.
     */
    readonly instanceId: string | ros.IResolvable;

    /**
     * @Property rules: Detailed information of precise access control rules, expressed in JSON format strings.
     */
    readonly rules: string | ros.IResolvable;

    /**
     * @Property region: Examples of areas where the WAF. Value:
     * cn: China mainland (default)
     * cn-hongkong: China HongKong and other overseas
     */
    readonly region?: string | ros.IResolvable;

    /**
     * @Property ruleId: Precise access control rule ID
     */
    readonly ruleId?: number | ros.IResolvable;
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
      'Domain': ros.stringToRosTemplate(properties.domain),
      'InstanceId': ros.stringToRosTemplate(properties.instanceId),
      'Rules': ros.stringToRosTemplate(properties.rules),
      'Region': ros.stringToRosTemplate(properties.region),
      'RuleId': ros.numberToRosTemplate(properties.ruleId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::WAF::AclRule`, which is used to add an HTTP access control list (ACL) rule for a specified domain name.
 * @Note This class does not contain additional functions, so it is recommended to use the `AclRule` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-waf-aclrule
 */
export class RosAclRule extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::WAF::AclRule";

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property domain: Domain name.
     */
    public domain: string | ros.IResolvable;

    /**
     * @Property instanceId: WAF instance ID.
     * Description Interface You can view your current WAF instance ID by calling DescribePayInfo.
     */
    public instanceId: string | ros.IResolvable;

    /**
     * @Property rules: Detailed information of precise access control rules, expressed in JSON format strings.
     */
    public rules: string | ros.IResolvable;

    /**
     * @Property region: Examples of areas where the WAF. Value:
     * cn: China mainland (default)
     * cn-hongkong: China HongKong and other overseas
     */
    public region: string | ros.IResolvable | undefined;

    /**
     * @Property ruleId: Precise access control rule ID
     */
    public ruleId: number | ros.IResolvable | undefined;

    /**
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
 * Properties for defining a `RosDomain`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-waf-domain
 */
export interface RosDomainProps {

    /**
     * @Property domainName: Domain name
     */
    readonly domainName: string | ros.IResolvable;

    /**
     * @Property instanceId: Instance id
     */
    readonly instanceId: string | ros.IResolvable;

    /**
     * @Property isAccessProduct: Is there a seven-layer agency before WAF
     */
    readonly isAccessProduct: string | ros.IResolvable;

    /**
     * @Property sourceIps: Back to source IP configuration
     */
    readonly sourceIps: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property clusterType: Cluster type
     */
    readonly clusterType?: string | ros.IResolvable;

    /**
     * @Property connectionTime: Connection timeout
     */
    readonly connectionTime?: number | ros.IResolvable;

    /**
     * @Property http2Port: Http2 port configuration
     */
    readonly http2Port?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property httpPort: Http port configuration
     */
    readonly httpPort?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property httpsPort: Https port configuration
     */
    readonly httpsPort?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property httpsRedirect: Https forced redirect configuration
     */
    readonly httpsRedirect?: string | ros.IResolvable;

    /**
     * @Property httpToUserIp: Http back to source
     */
    readonly httpToUserIp?: string | ros.IResolvable;

    /**
     * @Property loadBalancing: Load balancing configuration
     */
    readonly loadBalancing?: string | ros.IResolvable;

    /**
     * @Property logHeaders: Domain traffic tagging
     */
    readonly logHeaders?: Array<RosDomain.LogHeadersProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property readTime: Read connection timeout period
     */
    readonly readTime?: number | ros.IResolvable;

    /**
     * @Property resourceGroupId: Resource group Id
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property writeTime: Write connection timeout period
     */
    readonly writeTime?: number | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosDomainProps`
 *
 * @param properties - the TypeScript properties of a `RosDomainProps`
 *
 * @returns the result of the validation.
 */
function RosDomainPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('httpToUserIp', ros.validateString)(properties.httpToUserIp));
    errors.collect(ros.propertyValidator('httpPort', ros.listValidator(ros.validateString))(properties.httpPort));
    errors.collect(ros.propertyValidator('isAccessProduct', ros.requiredValidator)(properties.isAccessProduct));
    errors.collect(ros.propertyValidator('isAccessProduct', ros.validateString)(properties.isAccessProduct));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('domainName', ros.requiredValidator)(properties.domainName));
    errors.collect(ros.propertyValidator('domainName', ros.validateString)(properties.domainName));
    errors.collect(ros.propertyValidator('instanceId', ros.requiredValidator)(properties.instanceId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    errors.collect(ros.propertyValidator('sourceIps', ros.requiredValidator)(properties.sourceIps));
    errors.collect(ros.propertyValidator('sourceIps', ros.listValidator(ros.validateString))(properties.sourceIps));
    errors.collect(ros.propertyValidator('readTime', ros.validateNumber)(properties.readTime));
    errors.collect(ros.propertyValidator('clusterType', ros.validateString)(properties.clusterType));
    errors.collect(ros.propertyValidator('loadBalancing', ros.validateString)(properties.loadBalancing));
    errors.collect(ros.propertyValidator('logHeaders', ros.listValidator(RosDomain_LogHeadersPropertyValidator))(properties.logHeaders));
    errors.collect(ros.propertyValidator('writeTime', ros.validateNumber)(properties.writeTime));
    errors.collect(ros.propertyValidator('http2Port', ros.listValidator(ros.validateString))(properties.http2Port));
    errors.collect(ros.propertyValidator('connectionTime', ros.validateNumber)(properties.connectionTime));
    errors.collect(ros.propertyValidator('httpsRedirect', ros.validateString)(properties.httpsRedirect));
    errors.collect(ros.propertyValidator('httpsPort', ros.listValidator(ros.validateString))(properties.httpsPort));
    return errors.wrap('supplied properties not correct for "RosDomainProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::WAF::Domain` resource
 *
 * @param properties - the TypeScript properties of a `RosDomainProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::WAF::Domain` resource.
 */
// @ts-ignore TS6133
function rosDomainPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDomainPropsValidator(properties).assertSuccess();
    }
    return {
      'DomainName': ros.stringToRosTemplate(properties.domainName),
      'InstanceId': ros.stringToRosTemplate(properties.instanceId),
      'IsAccessProduct': ros.stringToRosTemplate(properties.isAccessProduct),
      'SourceIps': ros.listMapper(ros.stringToRosTemplate)(properties.sourceIps),
      'ClusterType': ros.stringToRosTemplate(properties.clusterType),
      'ConnectionTime': ros.numberToRosTemplate(properties.connectionTime),
      'Http2Port': ros.listMapper(ros.stringToRosTemplate)(properties.http2Port),
      'HttpPort': ros.listMapper(ros.stringToRosTemplate)(properties.httpPort),
      'HttpsPort': ros.listMapper(ros.stringToRosTemplate)(properties.httpsPort),
      'HttpsRedirect': ros.stringToRosTemplate(properties.httpsRedirect),
      'HttpToUserIp': ros.stringToRosTemplate(properties.httpToUserIp),
      'LoadBalancing': ros.stringToRosTemplate(properties.loadBalancing),
      'LogHeaders': ros.listMapper(rosDomainLogHeadersPropertyToRosTemplate)(properties.logHeaders),
      'ReadTime': ros.numberToRosTemplate(properties.readTime),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
      'WriteTime': ros.numberToRosTemplate(properties.writeTime),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::WAF::Domain`, which is used to add a domain to Web Application Firewall (WAF).
 * @Note This class does not contain additional functions, so it is recommended to use the `Domain` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-waf-domain
 */
export class RosDomain extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::WAF::Domain";

    /**
     * @Attribute ClusterType: Cluster type
     */
    public readonly attrClusterType: ros.IResolvable;

    /**
     * @Attribute Cname: CNAME assigned by WAF instance
     */
    public readonly attrCname: ros.IResolvable;

    /**
     * @Attribute DomainName: Domain name
     */
    public readonly attrDomainName: ros.IResolvable;

    /**
     * @Attribute Http2Port: Http2 port configuration
     */
    public readonly attrHttp2Port: ros.IResolvable;

    /**
     * @Attribute HttpPort: Http port configuration
     */
    public readonly attrHttpPort: ros.IResolvable;

    /**
     * @Attribute HttpToUserIp: Http back to source
     */
    public readonly attrHttpToUserIp: ros.IResolvable;

    /**
     * @Attribute HttpsPort: Https port configuration
     */
    public readonly attrHttpsPort: ros.IResolvable;

    /**
     * @Attribute HttpsRedirect: Https forced redirect configuration
     */
    public readonly attrHttpsRedirect: ros.IResolvable;

    /**
     * @Attribute InstanceId: Instance id
     */
    public readonly attrInstanceId: ros.IResolvable;

    /**
     * @Attribute IsAccessProduct: Is there a seven-layer agency before WAF
     */
    public readonly attrIsAccessProduct: ros.IResolvable;

    /**
     * @Attribute LoadBalancing: Load balancing configuration
     */
    public readonly attrLoadBalancing: ros.IResolvable;

    /**
     * @Attribute LogHeaders: Domain traffic tagging
     */
    public readonly attrLogHeaders: ros.IResolvable;

    /**
     * @Attribute ResourceGroupId: Resource group Id
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * @Attribute SourceIps: Back to source IP configuration
     */
    public readonly attrSourceIps: ros.IResolvable;

    /**
     * @Attribute Version: Optimistic lock version
     */
    public readonly attrVersion: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property domainName: Domain name
     */
    public domainName: string | ros.IResolvable;

    /**
     * @Property instanceId: Instance id
     */
    public instanceId: string | ros.IResolvable;

    /**
     * @Property isAccessProduct: Is there a seven-layer agency before WAF
     */
    public isAccessProduct: string | ros.IResolvable;

    /**
     * @Property sourceIps: Back to source IP configuration
     */
    public sourceIps: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property clusterType: Cluster type
     */
    public clusterType: string | ros.IResolvable | undefined;

    /**
     * @Property connectionTime: Connection timeout
     */
    public connectionTime: number | ros.IResolvable | undefined;

    /**
     * @Property http2Port: Http2 port configuration
     */
    public http2Port: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property httpPort: Http port configuration
     */
    public httpPort: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property httpsPort: Https port configuration
     */
    public httpsPort: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property httpsRedirect: Https forced redirect configuration
     */
    public httpsRedirect: string | ros.IResolvable | undefined;

    /**
     * @Property httpToUserIp: Http back to source
     */
    public httpToUserIp: string | ros.IResolvable | undefined;

    /**
     * @Property loadBalancing: Load balancing configuration
     */
    public loadBalancing: string | ros.IResolvable | undefined;

    /**
     * @Property logHeaders: Domain traffic tagging
     */
    public logHeaders: Array<RosDomain.LogHeadersProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property readTime: Read connection timeout period
     */
    public readTime: number | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: Resource group Id
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property writeTime: Write connection timeout period
     */
    public writeTime: number | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDomainProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDomain.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrClusterType = this.getAtt('ClusterType');
        this.attrCname = this.getAtt('Cname');
        this.attrDomainName = this.getAtt('DomainName');
        this.attrHttp2Port = this.getAtt('Http2Port');
        this.attrHttpPort = this.getAtt('HttpPort');
        this.attrHttpToUserIp = this.getAtt('HttpToUserIp');
        this.attrHttpsPort = this.getAtt('HttpsPort');
        this.attrHttpsRedirect = this.getAtt('HttpsRedirect');
        this.attrInstanceId = this.getAtt('InstanceId');
        this.attrIsAccessProduct = this.getAtt('IsAccessProduct');
        this.attrLoadBalancing = this.getAtt('LoadBalancing');
        this.attrLogHeaders = this.getAtt('LogHeaders');
        this.attrResourceGroupId = this.getAtt('ResourceGroupId');
        this.attrSourceIps = this.getAtt('SourceIps');
        this.attrVersion = this.getAtt('Version');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.domainName = props.domainName;
        this.instanceId = props.instanceId;
        this.isAccessProduct = props.isAccessProduct;
        this.sourceIps = props.sourceIps;
        this.clusterType = props.clusterType;
        this.connectionTime = props.connectionTime;
        this.http2Port = props.http2Port;
        this.httpPort = props.httpPort;
        this.httpsPort = props.httpsPort;
        this.httpsRedirect = props.httpsRedirect;
        this.httpToUserIp = props.httpToUserIp;
        this.loadBalancing = props.loadBalancing;
        this.logHeaders = props.logHeaders;
        this.readTime = props.readTime;
        this.resourceGroupId = props.resourceGroupId;
        this.writeTime = props.writeTime;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            domainName: this.domainName,
            instanceId: this.instanceId,
            isAccessProduct: this.isAccessProduct,
            sourceIps: this.sourceIps,
            clusterType: this.clusterType,
            connectionTime: this.connectionTime,
            http2Port: this.http2Port,
            httpPort: this.httpPort,
            httpsPort: this.httpsPort,
            httpsRedirect: this.httpsRedirect,
            httpToUserIp: this.httpToUserIp,
            loadBalancing: this.loadBalancing,
            logHeaders: this.logHeaders,
            readTime: this.readTime,
            resourceGroupId: this.resourceGroupId,
            writeTime: this.writeTime,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDomainPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosDomain {
    /**
     * @stability external
     */
    export interface LogHeadersProperty {
        /**
         * @Property v: The value of the traffic tag of the domain name
         */
        readonly v?: string | ros.IResolvable;
        /**
         * @Property k: The field name of the traffic tag of the domain name
         */
        readonly k?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `LogHeadersProperty`
 *
 * @param properties - the TypeScript properties of a `LogHeadersProperty`
 *
 * @returns the result of the validation.
 */
function RosDomain_LogHeadersPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('v', ros.validateString)(properties.v));
    errors.collect(ros.propertyValidator('k', ros.validateString)(properties.k));
    return errors.wrap('supplied properties not correct for "LogHeadersProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::WAF::Domain.LogHeaders` resource
 *
 * @param properties - the TypeScript properties of a `LogHeadersProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::WAF::Domain.LogHeaders` resource.
 */
// @ts-ignore TS6133
function rosDomainLogHeadersPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosDomain_LogHeadersPropertyValidator(properties).assertSuccess();
    return {
      'V': ros.stringToRosTemplate(properties.v),
      'K': ros.stringToRosTemplate(properties.k),
    };
}

/**
 * Properties for defining a `RosDomainConfig`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-waf-domainconfig
 */
export interface RosDomainConfigProps {

    /**
     * @Property domain: Domain name.
     */
    readonly domain: string | ros.IResolvable;

    /**
     * @Property instanceId: WAF instance ID.
     * Description Interface You can view your current WAF instance ID by calling DescribePayInfo.
     */
    readonly instanceId: string | ros.IResolvable;

    /**
     * @Property isAccessProduct: The domain before WAF is configured with seven agents (eg, high defense, CDN, etc.), the value of:
     * 0: none.
     * 1: expressed.
     */
    readonly isAccessProduct: number | ros.IResolvable;

    /**
     * @Property protocols: The domain supports access protocols, values:
     * http: expressed support for the HTTP protocol.
     * https: support for HTTPS protocol.
     * http, https: supports HTTP, HTTPS protocol.
     */
    readonly protocols: string | ros.IResolvable;

    /**
     * @Property httpPort: HTTP protocol configuration port. When specifying a plurality of HTTP port "," separated. Example values: [80].
     * Configure the HTTP protocol, this parameter is required. The default value is 80. HttpPort HttpsPort with at least two parameters need to fill a request.
     */
    readonly httpPort?: string | ros.IResolvable;

    /**
     * @Property httpsPort: HTTPS protocol configuration port. When specifying a plurality HTTPS port, using the "," separated. Example values: [443].
     * Configure the protocol is HTTPS, this parameter is required. The default value is 443. HttpPort HttpsPort with at least two parameters need to fill a request.
     */
    readonly httpsPort?: string | ros.IResolvable;

    /**
     * @Property httpsRedirect: HTTPS is turned forcefully jump the argument:
     * 0: off (default)
     * 1: Turn
     * Description required to complete the request parameters using only HTTPS access protocol. After opening force will show a jump HTTP request is HTTPS, a default jump to 443.
     */
    readonly httpsRedirect?: number | ros.IResolvable;

    /**
     * @Property httpToUserIp: Whether to open HTTPS access request is forwarded back to the source station via the HTTP protocol, the value of:
     * 0: off (default)
     * 1: Turn
     * Note If your site does not support HTTPS back to the source, open source HTTP return (default back to the source port is port 80) function key, can be realized by WAF HTTPS access.
     */
    readonly httpToUserIp?: number | ros.IResolvable;

    /**
     * @Property loadBalancing: Back to the source load balancing policy values:
     * 0: IP Hash way.
     * 1: represents a polling mode.
     */
    readonly loadBalancing?: number | ros.IResolvable;

    /**
     * @Property region: Examples of areas where the WAF. Value:
     * cn: China mainland (default)
     * cn-hongkong: China HongKong and other overseas
     */
    readonly region?: string | ros.IResolvable;

    /**
     * @Property rsType: Back to the source address type the domain name values:
     * 0: back to the source to IP.
     * 1: Indicates the domain name back to the source.
     */
    readonly rsType?: number | ros.IResolvable;

    /**
     * @Property sourceIps: Source station IP, supports a plurality of specified IP. Example values: [ "1.1.1.1"].
     */
    readonly sourceIps?: string | ros.IResolvable;
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
      'Domain': ros.stringToRosTemplate(properties.domain),
      'InstanceId': ros.stringToRosTemplate(properties.instanceId),
      'IsAccessProduct': ros.numberToRosTemplate(properties.isAccessProduct),
      'Protocols': ros.stringToRosTemplate(properties.protocols),
      'HttpPort': ros.stringToRosTemplate(properties.httpPort),
      'HttpsPort': ros.stringToRosTemplate(properties.httpsPort),
      'HttpsRedirect': ros.numberToRosTemplate(properties.httpsRedirect),
      'HttpToUserIp': ros.numberToRosTemplate(properties.httpToUserIp),
      'LoadBalancing': ros.numberToRosTemplate(properties.loadBalancing),
      'Region': ros.stringToRosTemplate(properties.region),
      'RsType': ros.numberToRosTemplate(properties.rsType),
      'SourceIps': ros.stringToRosTemplate(properties.sourceIps),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::WAF::DomainConfig`ALIYUN::CDN::DomainConfig is used to add domain name settings.
 * @Note This class does not contain additional functions, so it is recommended to use the `DomainConfig` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-waf-domainconfig
 */
export class RosDomainConfig extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::WAF::DomainConfig";

    /**
     * @Attribute Cname: CNAME assigned by WAF instance.
     */
    public readonly attrCname: ros.IResolvable;

    /**
     * @Attribute ProtocolType: agreement type:0: indicates that the HTTP protocol is supported.1: indicates that the HTTPS protocol is supported.2: indicates that both HTTP and HTTPS protocols are supported.
     */
    public readonly attrProtocolType: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property domain: Domain name.
     */
    public domain: string | ros.IResolvable;

    /**
     * @Property instanceId: WAF instance ID.
     * Description Interface You can view your current WAF instance ID by calling DescribePayInfo.
     */
    public instanceId: string | ros.IResolvable;

    /**
     * @Property isAccessProduct: The domain before WAF is configured with seven agents (eg, high defense, CDN, etc.), the value of:
     * 0: none.
     * 1: expressed.
     */
    public isAccessProduct: number | ros.IResolvable;

    /**
     * @Property protocols: The domain supports access protocols, values:
     * http: expressed support for the HTTP protocol.
     * https: support for HTTPS protocol.
     * http, https: supports HTTP, HTTPS protocol.
     */
    public protocols: string | ros.IResolvable;

    /**
     * @Property httpPort: HTTP protocol configuration port. When specifying a plurality of HTTP port "," separated. Example values: [80].
     * Configure the HTTP protocol, this parameter is required. The default value is 80. HttpPort HttpsPort with at least two parameters need to fill a request.
     */
    public httpPort: string | ros.IResolvable | undefined;

    /**
     * @Property httpsPort: HTTPS protocol configuration port. When specifying a plurality HTTPS port, using the "," separated. Example values: [443].
     * Configure the protocol is HTTPS, this parameter is required. The default value is 443. HttpPort HttpsPort with at least two parameters need to fill a request.
     */
    public httpsPort: string | ros.IResolvable | undefined;

    /**
     * @Property httpsRedirect: HTTPS is turned forcefully jump the argument:
     * 0: off (default)
     * 1: Turn
     * Description required to complete the request parameters using only HTTPS access protocol. After opening force will show a jump HTTP request is HTTPS, a default jump to 443.
     */
    public httpsRedirect: number | ros.IResolvable | undefined;

    /**
     * @Property httpToUserIp: Whether to open HTTPS access request is forwarded back to the source station via the HTTP protocol, the value of:
     * 0: off (default)
     * 1: Turn
     * Note If your site does not support HTTPS back to the source, open source HTTP return (default back to the source port is port 80) function key, can be realized by WAF HTTPS access.
     */
    public httpToUserIp: number | ros.IResolvable | undefined;

    /**
     * @Property loadBalancing: Back to the source load balancing policy values:
     * 0: IP Hash way.
     * 1: represents a polling mode.
     */
    public loadBalancing: number | ros.IResolvable | undefined;

    /**
     * @Property region: Examples of areas where the WAF. Value:
     * cn: China mainland (default)
     * cn-hongkong: China HongKong and other overseas
     */
    public region: string | ros.IResolvable | undefined;

    /**
     * @Property rsType: Back to the source address type the domain name values:
     * 0: back to the source to IP.
     * 1: Indicates the domain name back to the source.
     */
    public rsType: number | ros.IResolvable | undefined;

    /**
     * @Property sourceIps: Source station IP, supports a plurality of specified IP. Example values: [ "1.1.1.1"].
     */
    public sourceIps: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDomainConfigProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDomainConfig.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCname = this.getAtt('Cname');
        this.attrProtocolType = this.getAtt('ProtocolType');

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
 * Properties for defining a `RosInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-waf-instance
 */
export interface RosInstanceProps {

    /**
     * @Property bigScreen:
     */
    readonly bigScreen: string | ros.IResolvable;

    /**
     * @Property exclusiveIpPackage:
     */
    readonly exclusiveIpPackage: string | ros.IResolvable;

    /**
     * @Property extBandwidth:
     */
    readonly extBandwidth: string | ros.IResolvable;

    /**
     * @Property extDomainPackage:
     */
    readonly extDomainPackage: string | ros.IResolvable;

    /**
     * @Property logStorage:
     */
    readonly logStorage: string | ros.IResolvable;

    /**
     * @Property logTime:
     */
    readonly logTime: string | ros.IResolvable;

    /**
     * @Property packageCode:
     */
    readonly packageCode: string | ros.IResolvable;

    /**
     * @Property prefessionalService:
     */
    readonly prefessionalService: string | ros.IResolvable;

    /**
     * @Property subscriptionType: Subscription type of the instance
     */
    readonly subscriptionType: string | ros.IResolvable;

    /**
     * @Property wafLog:
     */
    readonly wafLog: string | ros.IResolvable;

    /**
     * @Property period:
     */
    readonly period?: string | ros.IResolvable;

    /**
     * @Property renewalStatus:
     */
    readonly renewalStatus?: string | ros.IResolvable;

    /**
     * @Property renewPeriod:
     */
    readonly renewPeriod?: string | ros.IResolvable;
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
    errors.collect(ros.propertyValidator('prefessionalService', ros.requiredValidator)(properties.prefessionalService));
    errors.collect(ros.propertyValidator('prefessionalService', ros.validateString)(properties.prefessionalService));
    errors.collect(ros.propertyValidator('bigScreen', ros.requiredValidator)(properties.bigScreen));
    errors.collect(ros.propertyValidator('bigScreen', ros.validateString)(properties.bigScreen));
    errors.collect(ros.propertyValidator('extDomainPackage', ros.requiredValidator)(properties.extDomainPackage));
    errors.collect(ros.propertyValidator('extDomainPackage', ros.validateString)(properties.extDomainPackage));
    errors.collect(ros.propertyValidator('logTime', ros.requiredValidator)(properties.logTime));
    errors.collect(ros.propertyValidator('logTime', ros.validateString)(properties.logTime));
    errors.collect(ros.propertyValidator('renewalStatus', ros.validateString)(properties.renewalStatus));
    errors.collect(ros.propertyValidator('renewPeriod', ros.validateString)(properties.renewPeriod));
    errors.collect(ros.propertyValidator('period', ros.validateString)(properties.period));
    errors.collect(ros.propertyValidator('exclusiveIpPackage', ros.requiredValidator)(properties.exclusiveIpPackage));
    errors.collect(ros.propertyValidator('exclusiveIpPackage', ros.validateString)(properties.exclusiveIpPackage));
    errors.collect(ros.propertyValidator('logStorage', ros.requiredValidator)(properties.logStorage));
    errors.collect(ros.propertyValidator('logStorage', ros.validateString)(properties.logStorage));
    errors.collect(ros.propertyValidator('subscriptionType', ros.requiredValidator)(properties.subscriptionType));
    errors.collect(ros.propertyValidator('subscriptionType', ros.validateString)(properties.subscriptionType));
    errors.collect(ros.propertyValidator('extBandwidth', ros.requiredValidator)(properties.extBandwidth));
    errors.collect(ros.propertyValidator('extBandwidth', ros.validateString)(properties.extBandwidth));
    errors.collect(ros.propertyValidator('wafLog', ros.requiredValidator)(properties.wafLog));
    errors.collect(ros.propertyValidator('wafLog', ros.validateString)(properties.wafLog));
    errors.collect(ros.propertyValidator('packageCode', ros.requiredValidator)(properties.packageCode));
    errors.collect(ros.propertyValidator('packageCode', ros.validateString)(properties.packageCode));
    return errors.wrap('supplied properties not correct for "RosInstanceProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::WAF::Instance` resource
 *
 * @param properties - the TypeScript properties of a `RosInstanceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::WAF::Instance` resource.
 */
// @ts-ignore TS6133
function rosInstancePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosInstancePropsValidator(properties).assertSuccess();
    }
    return {
      'BigScreen': ros.stringToRosTemplate(properties.bigScreen),
      'ExclusiveIpPackage': ros.stringToRosTemplate(properties.exclusiveIpPackage),
      'ExtBandwidth': ros.stringToRosTemplate(properties.extBandwidth),
      'ExtDomainPackage': ros.stringToRosTemplate(properties.extDomainPackage),
      'LogStorage': ros.stringToRosTemplate(properties.logStorage),
      'LogTime': ros.stringToRosTemplate(properties.logTime),
      'PackageCode': ros.stringToRosTemplate(properties.packageCode),
      'PrefessionalService': ros.stringToRosTemplate(properties.prefessionalService),
      'SubscriptionType': ros.stringToRosTemplate(properties.subscriptionType),
      'WafLog': ros.stringToRosTemplate(properties.wafLog),
      'Period': ros.stringToRosTemplate(properties.period),
      'RenewalStatus': ros.stringToRosTemplate(properties.renewalStatus),
      'RenewPeriod': ros.stringToRosTemplate(properties.renewPeriod),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::WAF::Instance`, which is used to create a Web Application Firewall (WAF) instance 2.0.
 * @Note This class does not contain additional functions, so it is recommended to use the `Instance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-waf-instance
 */
export class RosInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::WAF::Instance";

    /**
     * @Attribute EndDate: Due date of the instance
     */
    public readonly attrEndDate: ros.IResolvable;

    /**
     * @Attribute InDebt: Instance is overdue
     */
    public readonly attrInDebt: ros.IResolvable;

    /**
     * @Attribute InstanceId: Instance ID
     */
    public readonly attrInstanceId: ros.IResolvable;

    /**
     * @Attribute RemainDay: Number of available days for WAF Trial version
     */
    public readonly attrRemainDay: ros.IResolvable;

    /**
     * @Attribute SubscriptionType: Subscription type of the instance
     */
    public readonly attrSubscriptionType: ros.IResolvable;

    /**
     * @Attribute Trial: Trial version
     */
    public readonly attrTrial: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property bigScreen:
     */
    public bigScreen: string | ros.IResolvable;

    /**
     * @Property exclusiveIpPackage:
     */
    public exclusiveIpPackage: string | ros.IResolvable;

    /**
     * @Property extBandwidth:
     */
    public extBandwidth: string | ros.IResolvable;

    /**
     * @Property extDomainPackage:
     */
    public extDomainPackage: string | ros.IResolvable;

    /**
     * @Property logStorage:
     */
    public logStorage: string | ros.IResolvable;

    /**
     * @Property logTime:
     */
    public logTime: string | ros.IResolvable;

    /**
     * @Property packageCode:
     */
    public packageCode: string | ros.IResolvable;

    /**
     * @Property prefessionalService:
     */
    public prefessionalService: string | ros.IResolvable;

    /**
     * @Property subscriptionType: Subscription type of the instance
     */
    public subscriptionType: string | ros.IResolvable;

    /**
     * @Property wafLog:
     */
    public wafLog: string | ros.IResolvable;

    /**
     * @Property period:
     */
    public period: string | ros.IResolvable | undefined;

    /**
     * @Property renewalStatus:
     */
    public renewalStatus: string | ros.IResolvable | undefined;

    /**
     * @Property renewPeriod:
     */
    public renewPeriod: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstanceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosInstance.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrEndDate = this.getAtt('EndDate');
        this.attrInDebt = this.getAtt('InDebt');
        this.attrInstanceId = this.getAtt('InstanceId');
        this.attrRemainDay = this.getAtt('RemainDay');
        this.attrSubscriptionType = this.getAtt('SubscriptionType');
        this.attrTrial = this.getAtt('Trial');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.bigScreen = props.bigScreen;
        this.exclusiveIpPackage = props.exclusiveIpPackage;
        this.extBandwidth = props.extBandwidth;
        this.extDomainPackage = props.extDomainPackage;
        this.logStorage = props.logStorage;
        this.logTime = props.logTime;
        this.packageCode = props.packageCode;
        this.prefessionalService = props.prefessionalService;
        this.subscriptionType = props.subscriptionType;
        this.wafLog = props.wafLog;
        this.period = props.period;
        this.renewalStatus = props.renewalStatus;
        this.renewPeriod = props.renewPeriod;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            bigScreen: this.bigScreen,
            exclusiveIpPackage: this.exclusiveIpPackage,
            extBandwidth: this.extBandwidth,
            extDomainPackage: this.extDomainPackage,
            logStorage: this.logStorage,
            logTime: this.logTime,
            packageCode: this.packageCode,
            prefessionalService: this.prefessionalService,
            subscriptionType: this.subscriptionType,
            wafLog: this.wafLog,
            period: this.period,
            renewalStatus: this.renewalStatus,
            renewPeriod: this.renewPeriod,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosInstancePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosLogServiceEnable`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-waf-logserviceenable
 */
export interface RosLogServiceEnableProps {

    /**
     * @Property domain: The domain name that is added to WAF.
     */
    readonly domain: string | ros.IResolvable;

    /**
     * @Property instanceId: The ID of the WAF instance.
     * You can call the DescribeInstanceInfo operation to query the ID of the WAF instance.
     */
    readonly instanceId: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosLogServiceEnableProps`
 *
 * @param properties - the TypeScript properties of a `RosLogServiceEnableProps`
 *
 * @returns the result of the validation.
 */
function RosLogServiceEnablePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('instanceId', ros.requiredValidator)(properties.instanceId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    errors.collect(ros.propertyValidator('domain', ros.requiredValidator)(properties.domain));
    errors.collect(ros.propertyValidator('domain', ros.validateString)(properties.domain));
    return errors.wrap('supplied properties not correct for "RosLogServiceEnableProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::WAF::LogServiceEnable` resource
 *
 * @param properties - the TypeScript properties of a `RosLogServiceEnableProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::WAF::LogServiceEnable` resource.
 */
// @ts-ignore TS6133
function rosLogServiceEnablePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosLogServiceEnablePropsValidator(properties).assertSuccess();
    }
    return {
      'Domain': ros.stringToRosTemplate(properties.domain),
      'InstanceId': ros.stringToRosTemplate(properties.instanceId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::WAF::LogServiceEnable`, which is used to enable the log collection feature for a specific domain name.
 * @Note This class does not contain additional functions, so it is recommended to use the `LogServiceEnable` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-waf-logserviceenable
 */
export class RosLogServiceEnable extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::WAF::LogServiceEnable";

    /**
     * @Attribute Domain: The domain name that is added to WAF.
     */
    public readonly attrDomain: ros.IResolvable;

    /**
     * @Attribute InstanceId: The ID of the WAF instance.
You can call the DescribeInstanceInfo operation to query the ID of the WAF instance.
     */
    public readonly attrInstanceId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property domain: The domain name that is added to WAF.
     */
    public domain: string | ros.IResolvable;

    /**
     * @Property instanceId: The ID of the WAF instance.
     * You can call the DescribeInstanceInfo operation to query the ID of the WAF instance.
     */
    public instanceId: string | ros.IResolvable;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosLogServiceEnableProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosLogServiceEnable.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDomain = this.getAtt('Domain');
        this.attrInstanceId = this.getAtt('InstanceId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.domain = props.domain;
        this.instanceId = props.instanceId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            domain: this.domain,
            instanceId: this.instanceId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosLogServiceEnablePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosWafSwitch`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-waf-wafswitch
 */
export interface RosWafSwitchProps {

    /**
     * @Property domain: Domain name.
     */
    readonly domain: string | ros.IResolvable;

    /**
     * @Property instanceId: WAF instance ID.
     * Description Interface You can view your current WAF instance ID by calling DescribePayInfo.
     */
    readonly instanceId: string | ros.IResolvable;

    /**
     * @Property serviceOn: Web attack protection switch, the value of:
     * 0: closed.
     * 1: indicate on.
     */
    readonly serviceOn: number | ros.IResolvable;

    /**
     * @Property region: Examples of areas where the WAF. Value:
     * cn: China mainland (default)
     * cn-hongkong: China HongKong and other overseas
     */
    readonly region?: string | ros.IResolvable;
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
      'Domain': ros.stringToRosTemplate(properties.domain),
      'InstanceId': ros.stringToRosTemplate(properties.instanceId),
      'ServiceOn': ros.numberToRosTemplate(properties.serviceOn),
      'Region': ros.stringToRosTemplate(properties.region),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::WAF::WafSwitch`, which is used to enable or disable Web attack protection.
 * @Note This class does not contain additional functions, so it is recommended to use the `WafSwitch` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-waf-wafswitch
 */
export class RosWafSwitch extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::WAF::WafSwitch";

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property domain: Domain name.
     */
    public domain: string | ros.IResolvable;

    /**
     * @Property instanceId: WAF instance ID.
     * Description Interface You can view your current WAF instance ID by calling DescribePayInfo.
     */
    public instanceId: string | ros.IResolvable;

    /**
     * @Property serviceOn: Web attack protection switch, the value of:
     * 0: closed.
     * 1: indicate on.
     */
    public serviceOn: number | ros.IResolvable;

    /**
     * @Property region: Examples of areas where the WAF. Value:
     * cn: China mainland (default)
     * cn-hongkong: China HongKong and other overseas
     */
    public region: string | ros.IResolvable | undefined;

    /**
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
