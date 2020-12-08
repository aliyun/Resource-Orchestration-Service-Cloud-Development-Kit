// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

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
 * Properties for defining a `ALIYUN::WAF::Domain`
 */
export interface RosDomainProps {

    /**
     * @Property domainName: Domain name
     */
    readonly domainName: string;

    /**
     * @Property instanceId: Instance id
     */
    readonly instanceId: string;

    /**
     * @Property isAccessProduct: Is there a seven-layer agency before WAF
     */
    readonly isAccessProduct: string;

    /**
     * @Property sourceIps: Back to source IP configuration
     */
    readonly sourceIps: string[];

    /**
     * @Property clusterType: Cluster type
     */
    readonly clusterType?: string;

    /**
     * @Property connectionTime: Connection timeout
     */
    readonly connectionTime?: number;

    /**
     * @Property http2Port: Http2 port configuration
     */
    readonly http2Port?: string[];

    /**
     * @Property httpPort: Http port configuration
     */
    readonly httpPort?: string[];

    /**
     * @Property httpsPort: Https port configuration
     */
    readonly httpsPort?: string[];

    /**
     * @Property httpsRedirect: Https forced redirect configuration
     */
    readonly httpsRedirect?: string;

    /**
     * @Property httpToUserIp: Http back to source
     */
    readonly httpToUserIp?: string;

    /**
     * @Property loadBalancing: Load balancing configuration
     */
    readonly loadBalancing?: string;

    /**
     * @Property logHeaders: Domain traffic tagging
     */
    readonly logHeaders?: Array<RosDomain.LogHeadersProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property readTime: Read connection timeout period
     */
    readonly readTime?: number;

    /**
     * @Property resourceGroupId: Resource group Id
     */
    readonly resourceGroupId?: string;

    /**
     * @Property writeTime: Write connection timeout period
     */
    readonly writeTime?: number;
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
      DomainName: ros.stringToRosTemplate(properties.domainName),
      InstanceId: ros.stringToRosTemplate(properties.instanceId),
      IsAccessProduct: ros.stringToRosTemplate(properties.isAccessProduct),
      SourceIps: ros.listMapper(ros.stringToRosTemplate)(properties.sourceIps),
      ClusterType: ros.stringToRosTemplate(properties.clusterType),
      ConnectionTime: ros.numberToRosTemplate(properties.connectionTime),
      Http2Port: ros.listMapper(ros.stringToRosTemplate)(properties.http2Port),
      HttpPort: ros.listMapper(ros.stringToRosTemplate)(properties.httpPort),
      HttpsPort: ros.listMapper(ros.stringToRosTemplate)(properties.httpsPort),
      HttpsRedirect: ros.stringToRosTemplate(properties.httpsRedirect),
      HttpToUserIp: ros.stringToRosTemplate(properties.httpToUserIp),
      LoadBalancing: ros.stringToRosTemplate(properties.loadBalancing),
      LogHeaders: ros.listMapper(rosDomainLogHeadersPropertyToRosTemplate)(properties.logHeaders),
      ReadTime: ros.numberToRosTemplate(properties.readTime),
      ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
      WriteTime: ros.numberToRosTemplate(properties.writeTime),
    };
}

/**
 * A ROS template type:  `ALIYUN::WAF::Domain`
 */
export class RosDomain extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::WAF::Domain";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute ClusterType: Cluster type
     */
    public readonly attrClusterType: any;

    /**
     * @Attribute Cname: CNAME assigned by WAF instance
     */
    public readonly attrCname: any;

    /**
     * @Attribute DomainName: Domain name
     */
    public readonly attrDomainName: any;

    /**
     * @Attribute Http2Port: Http2 port configuration
     */
    public readonly attrHttp2Port: any;

    /**
     * @Attribute HttpPort: Http port configuration
     */
    public readonly attrHttpPort: any;

    /**
     * @Attribute HttpToUserIp: Http back to source
     */
    public readonly attrHttpToUserIp: any;

    /**
     * @Attribute HttpsPort: Https port configuration
     */
    public readonly attrHttpsPort: any;

    /**
     * @Attribute HttpsRedirect: Https forced redirect configuration
     */
    public readonly attrHttpsRedirect: any;

    /**
     * @Attribute InstanceId: Instance id
     */
    public readonly attrInstanceId: any;

    /**
     * @Attribute IsAccessProduct: Is there a seven-layer agency before WAF
     */
    public readonly attrIsAccessProduct: any;

    /**
     * @Attribute LoadBalancing: Load balancing configuration
     */
    public readonly attrLoadBalancing: any;

    /**
     * @Attribute LogHeaders: Domain traffic tagging
     */
    public readonly attrLogHeaders: any;

    /**
     * @Attribute ResourceGroupId: Resource group Id
     */
    public readonly attrResourceGroupId: any;

    /**
     * @Attribute SourceIps: Back to source IP configuration
     */
    public readonly attrSourceIps: any;

    /**
     * @Attribute Version: Optimistic lock version
     */
    public readonly attrVersion: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property domainName: Domain name
     */
    public domainName: string;

    /**
     * @Property instanceId: Instance id
     */
    public instanceId: string;

    /**
     * @Property isAccessProduct: Is there a seven-layer agency before WAF
     */
    public isAccessProduct: string;

    /**
     * @Property sourceIps: Back to source IP configuration
     */
    public sourceIps: string[];

    /**
     * @Property clusterType: Cluster type
     */
    public clusterType: string | undefined;

    /**
     * @Property connectionTime: Connection timeout
     */
    public connectionTime: number | undefined;

    /**
     * @Property http2Port: Http2 port configuration
     */
    public http2Port: string[] | undefined;

    /**
     * @Property httpPort: Http port configuration
     */
    public httpPort: string[] | undefined;

    /**
     * @Property httpsPort: Https port configuration
     */
    public httpsPort: string[] | undefined;

    /**
     * @Property httpsRedirect: Https forced redirect configuration
     */
    public httpsRedirect: string | undefined;

    /**
     * @Property httpToUserIp: Http back to source
     */
    public httpToUserIp: string | undefined;

    /**
     * @Property loadBalancing: Load balancing configuration
     */
    public loadBalancing: string | undefined;

    /**
     * @Property logHeaders: Domain traffic tagging
     */
    public logHeaders: Array<RosDomain.LogHeadersProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property readTime: Read connection timeout period
     */
    public readTime: number | undefined;

    /**
     * @Property resourceGroupId: Resource group Id
     */
    public resourceGroupId: string | undefined;

    /**
     * @Property writeTime: Write connection timeout period
     */
    public writeTime: number | undefined;

    /**
     * Create a new `ALIYUN::WAF::Domain`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDomainProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDomain.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrClusterType = ros.Token.asString(this.getAtt('ClusterType'));
        this.attrCname = ros.Token.asString(this.getAtt('Cname'));
        this.attrDomainName = ros.Token.asString(this.getAtt('DomainName'));
        this.attrHttp2Port = ros.Token.asString(this.getAtt('Http2Port'));
        this.attrHttpPort = ros.Token.asString(this.getAtt('HttpPort'));
        this.attrHttpToUserIp = ros.Token.asString(this.getAtt('HttpToUserIp'));
        this.attrHttpsPort = ros.Token.asString(this.getAtt('HttpsPort'));
        this.attrHttpsRedirect = ros.Token.asString(this.getAtt('HttpsRedirect'));
        this.attrInstanceId = ros.Token.asString(this.getAtt('InstanceId'));
        this.attrIsAccessProduct = ros.Token.asString(this.getAtt('IsAccessProduct'));
        this.attrLoadBalancing = ros.Token.asString(this.getAtt('LoadBalancing'));
        this.attrLogHeaders = ros.Token.asString(this.getAtt('LogHeaders'));
        this.attrResourceGroupId = ros.Token.asString(this.getAtt('ResourceGroupId'));
        this.attrSourceIps = ros.Token.asString(this.getAtt('SourceIps'));
        this.attrVersion = ros.Token.asString(this.getAtt('Version'));

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
        readonly v?: string;
        /**
         * @Property k: The field name of the traffic tag of the domain name
         */
        readonly k?: string;
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
      V: ros.stringToRosTemplate(properties.v),
      K: ros.stringToRosTemplate(properties.k),
    };
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
 * Properties for defining a `ALIYUN::WAF::Instance`
 */
export interface RosInstanceProps {

    /**
     * @Property bigScreen:
     */
    readonly bigScreen: string;

    /**
     * @Property exclusiveIpPackage:
     */
    readonly exclusiveIpPackage: string;

    /**
     * @Property extBandwidth:
     */
    readonly extBandwidth: string;

    /**
     * @Property extDomainPackage:
     */
    readonly extDomainPackage: string;

    /**
     * @Property logStorage:
     */
    readonly logStorage: string;

    /**
     * @Property logTime:
     */
    readonly logTime: string;

    /**
     * @Property packageCode:
     */
    readonly packageCode: string;

    /**
     * @Property prefessionalService:
     */
    readonly prefessionalService: string;

    /**
     * @Property subscriptionType: Subscription type of the instance
     */
    readonly subscriptionType: string;

    /**
     * @Property wafLog:
     */
    readonly wafLog: string;

    /**
     * @Property period:
     */
    readonly period?: string;

    /**
     * @Property renewalStatus:
     */
    readonly renewalStatus?: string;

    /**
     * @Property renewPeriod:
     */
    readonly renewPeriod?: string;
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
    errors.collect(ros.propertyValidator('bigScreen', ros.requiredValidator)(properties.bigScreen));
    errors.collect(ros.propertyValidator('bigScreen', ros.validateString)(properties.bigScreen));
    errors.collect(ros.propertyValidator('prefessionalService', ros.requiredValidator)(properties.prefessionalService));
    errors.collect(ros.propertyValidator('prefessionalService', ros.validateString)(properties.prefessionalService));
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
      BigScreen: ros.stringToRosTemplate(properties.bigScreen),
      ExclusiveIpPackage: ros.stringToRosTemplate(properties.exclusiveIpPackage),
      ExtBandwidth: ros.stringToRosTemplate(properties.extBandwidth),
      ExtDomainPackage: ros.stringToRosTemplate(properties.extDomainPackage),
      LogStorage: ros.stringToRosTemplate(properties.logStorage),
      LogTime: ros.stringToRosTemplate(properties.logTime),
      PackageCode: ros.stringToRosTemplate(properties.packageCode),
      PrefessionalService: ros.stringToRosTemplate(properties.prefessionalService),
      SubscriptionType: ros.stringToRosTemplate(properties.subscriptionType),
      WafLog: ros.stringToRosTemplate(properties.wafLog),
      Period: ros.stringToRosTemplate(properties.period),
      RenewalStatus: ros.stringToRosTemplate(properties.renewalStatus),
      RenewPeriod: ros.stringToRosTemplate(properties.renewPeriod),
    };
}

/**
 * A ROS template type:  `ALIYUN::WAF::Instance`
 */
export class RosInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::WAF::Instance";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute EndDate: Due date of the instance
     */
    public readonly attrEndDate: any;

    /**
     * @Attribute InDebt: Instance is overdue
     */
    public readonly attrInDebt: any;

    /**
     * @Attribute InstanceId: Instance ID
     */
    public readonly attrInstanceId: any;

    /**
     * @Attribute RemainDay: Number of available days for WAF Trial version
     */
    public readonly attrRemainDay: any;

    /**
     * @Attribute SubscriptionType: Subscription type of the instance
     */
    public readonly attrSubscriptionType: any;

    /**
     * @Attribute Trial: Trial version
     */
    public readonly attrTrial: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property bigScreen:
     */
    public bigScreen: string;

    /**
     * @Property exclusiveIpPackage:
     */
    public exclusiveIpPackage: string;

    /**
     * @Property extBandwidth:
     */
    public extBandwidth: string;

    /**
     * @Property extDomainPackage:
     */
    public extDomainPackage: string;

    /**
     * @Property logStorage:
     */
    public logStorage: string;

    /**
     * @Property logTime:
     */
    public logTime: string;

    /**
     * @Property packageCode:
     */
    public packageCode: string;

    /**
     * @Property prefessionalService:
     */
    public prefessionalService: string;

    /**
     * @Property subscriptionType: Subscription type of the instance
     */
    public subscriptionType: string;

    /**
     * @Property wafLog:
     */
    public wafLog: string;

    /**
     * @Property period:
     */
    public period: string | undefined;

    /**
     * @Property renewalStatus:
     */
    public renewalStatus: string | undefined;

    /**
     * @Property renewPeriod:
     */
    public renewPeriod: string | undefined;

    /**
     * Create a new `ALIYUN::WAF::Instance`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstanceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosInstance.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrEndDate = ros.Token.asString(this.getAtt('EndDate'));
        this.attrInDebt = ros.Token.asString(this.getAtt('InDebt'));
        this.attrInstanceId = ros.Token.asString(this.getAtt('InstanceId'));
        this.attrRemainDay = ros.Token.asString(this.getAtt('RemainDay'));
        this.attrSubscriptionType = ros.Token.asString(this.getAtt('SubscriptionType'));
        this.attrTrial = ros.Token.asString(this.getAtt('Trial'));

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
