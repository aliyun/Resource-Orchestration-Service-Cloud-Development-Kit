// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `ALIYUN::UIS::Uis`
 */
export interface RosUisProps {

    /**
     * @Property description: Description of the instance.
     * The length is 2-256 characters and must start with a letter or Chinese, but cannot start with http:// or https://.
     */
    readonly description?: string;

    /**
     * @Property name: The name of the instance.
     * The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_), and dashes (-). But it can't start with http:// or https://.
     */
    readonly name?: string;
}

/**
 * Determine whether the given properties match those of a `RosUisProps`
 *
 * @param properties - the TypeScript properties of a `RosUisProps`
 *
 * @returns the result of the validation.
 */
function RosUisPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.description && (Array.isArray(properties.description) || (typeof properties.description) === 'string')) {
        errors.collect(ros.propertyValidator('description', ros.validateLength)({
            data: properties.description.length,
            min: 2,
            max: 256,
          }));
    }
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    if(properties.name && (Array.isArray(properties.name) || (typeof properties.name) === 'string')) {
        errors.collect(ros.propertyValidator('name', ros.validateLength)({
            data: properties.name.length,
            min: 2,
            max: 128,
          }));
    }
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "RosUisProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::UIS::Uis` resource
 *
 * @param properties - the TypeScript properties of a `RosUisProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::UIS::Uis` resource.
 */
// @ts-ignore TS6133
function rosUisPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosUisPropsValidator(properties).assertSuccess();
    }
    return {
      Description: ros.stringToRosTemplate(properties.description),
      Name: ros.stringToRosTemplate(properties.name),
    };
}

/**
 * A ROS template type:  `ALIYUN::UIS::Uis`
 */
export class RosUis extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::UIS::Uis";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute ClientInfoDB: The client info DB.
     */
    public readonly attrClientInfoDb: any;

    /**
     * @Attribute ClientInfoDBAccount: The client info DB account.
     */
    public readonly attrClientInfoDbAccount: any;

    /**
     * @Attribute ClientInfoDBPassword: The client info DB password.
     */
    public readonly attrClientInfoDbPassword: any;

    /**
     * @Attribute SslClientCertUrl: The ssl client cert url.
     */
    public readonly attrSslClientCertUrl: any;

    /**
     * @Attribute UisId: The ID of the instance.
     */
    public readonly attrUisId: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property description: Description of the instance.
     * The length is 2-256 characters and must start with a letter or Chinese, but cannot start with http:// or https://.
     */
    public description: string | undefined;

    /**
     * @Property name: The name of the instance.
     * The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_), and dashes (-). But it can't start with http:// or https://.
     */
    public name: string | undefined;

    /**
     * Create a new `ALIYUN::UIS::Uis`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosUisProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosUis.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrClientInfoDb = ros.Token.asString(this.getAtt('ClientInfoDB'));
        this.attrClientInfoDbAccount = ros.Token.asString(this.getAtt('ClientInfoDBAccount'));
        this.attrClientInfoDbPassword = ros.Token.asString(this.getAtt('ClientInfoDBPassword'));
        this.attrSslClientCertUrl = ros.Token.asString(this.getAtt('SslClientCertUrl'));
        this.attrUisId = ros.Token.asString(this.getAtt('UisId'));

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.description = props.description;
        this.name = props.name;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            description: this.description,
            name: this.name,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosUisPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::UIS::UisConnection`
 */
export interface RosUisConnectionProps {

    /**
     * @Property uisNodeId: Node instance ID.
     */
    readonly uisNodeId: string;

    /**
     * @Property uisProtocol: The protocol name used by the software and server. The default value is SSLVPN.
     */
    readonly uisProtocol: string;

    /**
     * @Property description: A description of the tunnel connection.
     */
    readonly description?: string;

    /**
     * @Property greConfig: The config for GRE. Item can be overwritten, but removed.
     */
    readonly greConfig?: Array<RosUisConnection.GreConfigProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property name: The name of the tunnel connection.
     */
    readonly name?: string;

    /**
     * @Property sslConfig: The config for SSLVPN.
     */
    readonly sslConfig?: RosUisConnection.SslConfigProperty | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosUisConnectionProps`
 *
 * @param properties - the TypeScript properties of a `RosUisConnectionProps`
 *
 * @returns the result of the validation.
 */
function RosUisConnectionPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('sslConfig', RosUisConnection_SslConfigPropertyValidator)(properties.sslConfig));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('greConfig', ros.listValidator(RosUisConnection_GreConfigPropertyValidator))(properties.greConfig));
    errors.collect(ros.propertyValidator('uisProtocol', ros.requiredValidator)(properties.uisProtocol));
    if(properties.uisProtocol && (typeof properties.uisProtocol) !== 'object') {
        errors.collect(ros.propertyValidator('uisProtocol', ros.validateAllowedValues)({
          data: properties.uisProtocol,
          allowedValues: ["GRE","SDK","SSLVPN"],
        }));
    }
    errors.collect(ros.propertyValidator('uisProtocol', ros.validateString)(properties.uisProtocol));
    errors.collect(ros.propertyValidator('uisNodeId', ros.requiredValidator)(properties.uisNodeId));
    errors.collect(ros.propertyValidator('uisNodeId', ros.validateString)(properties.uisNodeId));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "RosUisConnectionProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::UIS::UisConnection` resource
 *
 * @param properties - the TypeScript properties of a `RosUisConnectionProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::UIS::UisConnection` resource.
 */
// @ts-ignore TS6133
function rosUisConnectionPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosUisConnectionPropsValidator(properties).assertSuccess();
    }
    return {
      UisNodeId: ros.stringToRosTemplate(properties.uisNodeId),
      UisProtocol: ros.stringToRosTemplate(properties.uisProtocol),
      Description: ros.stringToRosTemplate(properties.description),
      GreConfig: ros.listMapper(rosUisConnectionGreConfigPropertyToRosTemplate)(properties.greConfig),
      Name: ros.stringToRosTemplate(properties.name),
      SslConfig: rosUisConnectionSslConfigPropertyToRosTemplate(properties.sslConfig),
    };
}

/**
 * A ROS template type:  `ALIYUN::UIS::UisConnection`
 */
export class RosUisConnection extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::UIS::UisConnection";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute UisConnectionId: ID of the VPN server. This ID does not distinguish between protocols.
     */
    public readonly attrUisConnectionId: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property uisNodeId: Node instance ID.
     */
    public uisNodeId: string;

    /**
     * @Property uisProtocol: The protocol name used by the software and server. The default value is SSLVPN.
     */
    public uisProtocol: string;

    /**
     * @Property description: A description of the tunnel connection.
     */
    public description: string | undefined;

    /**
     * @Property greConfig: The config for GRE. Item can be overwritten, but removed.
     */
    public greConfig: Array<RosUisConnection.GreConfigProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property name: The name of the tunnel connection.
     */
    public name: string | undefined;

    /**
     * @Property sslConfig: The config for SSLVPN.
     */
    public sslConfig: RosUisConnection.SslConfigProperty | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::UIS::UisConnection`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosUisConnectionProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosUisConnection.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrUisConnectionId = ros.Token.asString(this.getAtt('UisConnectionId'));

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.uisNodeId = props.uisNodeId;
        this.uisProtocol = props.uisProtocol;
        this.description = props.description;
        this.greConfig = props.greConfig;
        this.name = props.name;
        this.sslConfig = props.sslConfig;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            uisNodeId: this.uisNodeId,
            uisProtocol: this.uisProtocol,
            description: this.description,
            greConfig: this.greConfig,
            name: this.name,
            sslConfig: this.sslConfig,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosUisConnectionPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosUisConnection {
    /**
     * @stability external
     */
    export interface GreConfigProperty {
        /**
         * @Property customerTunnelIp: The GRE Tunnel IP for Customer.
         */
        readonly customerTunnelIp: string;
        /**
         * @Property localTunnelIp: The GRE Tunnel IP for UisNode.
         */
        readonly localTunnelIp: string;
        /**
         * @Property localIp: UisNode IP.
         */
        readonly localIp: string;
        /**
         * @Property customerIp: The customer's public IP.
         */
        readonly customerIp: string;
        /**
         * @Property customerSubnet: The CIDR of customer's GRE private network.
         */
        readonly customerSubnet: string;
    }
}
/**
 * Determine whether the given properties match those of a `GreConfigProperty`
 *
 * @param properties - the TypeScript properties of a `GreConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosUisConnection_GreConfigPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('customerTunnelIp', ros.requiredValidator)(properties.customerTunnelIp));
    errors.collect(ros.propertyValidator('customerTunnelIp', ros.validateString)(properties.customerTunnelIp));
    errors.collect(ros.propertyValidator('localTunnelIp', ros.requiredValidator)(properties.localTunnelIp));
    errors.collect(ros.propertyValidator('localTunnelIp', ros.validateString)(properties.localTunnelIp));
    errors.collect(ros.propertyValidator('localIp', ros.requiredValidator)(properties.localIp));
    errors.collect(ros.propertyValidator('localIp', ros.validateString)(properties.localIp));
    errors.collect(ros.propertyValidator('customerIp', ros.requiredValidator)(properties.customerIp));
    errors.collect(ros.propertyValidator('customerIp', ros.validateString)(properties.customerIp));
    errors.collect(ros.propertyValidator('customerSubnet', ros.requiredValidator)(properties.customerSubnet));
    errors.collect(ros.propertyValidator('customerSubnet', ros.validateString)(properties.customerSubnet));
    return errors.wrap('supplied properties not correct for "GreConfigProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::UIS::UisConnection.GreConfig` resource
 *
 * @param properties - the TypeScript properties of a `GreConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::UIS::UisConnection.GreConfig` resource.
 */
// @ts-ignore TS6133
function rosUisConnectionGreConfigPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosUisConnection_GreConfigPropertyValidator(properties).assertSuccess();
    return {
      CustomerTunnelIP: ros.stringToRosTemplate(properties.customerTunnelIp),
      LocalTunnelIP: ros.stringToRosTemplate(properties.localTunnelIp),
      LocalIP: ros.stringToRosTemplate(properties.localIp),
      CustomerIP: ros.stringToRosTemplate(properties.customerIp),
      CustomerSubnet: ros.stringToRosTemplate(properties.customerSubnet),
    };
}

export namespace RosUisConnection {
    /**
     * @stability external
     */
    export interface SslConfigProperty {
        /**
         * @Property port: The port used by the SSL-VPN server. The default value is 1194. The port range us 1025-10000, and avoid the following well-known ports [22, 2222, 22222, 9000, 9001, 9002, 7505, 80, 443, 53, 68, 123, 4510, 4560, 500, 4500]
         */
        readonly port: number;
        /**
         * @Property cipher: The encryption algorithm used by SSL-VPN. Value: AES-128-CBC (default) | AES-192-CBC | AES-256-CBC | none.
         */
        readonly cipher: string;
        /**
         * @Property protocol: The protocol used by the SSL-VPN server. Value: UDP (default) | TCP
         */
        readonly protocol: string;
    }
}
/**
 * Determine whether the given properties match those of a `SslConfigProperty`
 *
 * @param properties - the TypeScript properties of a `SslConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosUisConnection_SslConfigPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('port', ros.requiredValidator)(properties.port));
    if(properties.port && (typeof properties.port) !== 'object') {
        errors.collect(ros.propertyValidator('port', ros.validateRange)({
            data: properties.port,
            min: 1025,
            max: 10000,
          }));
    }
    errors.collect(ros.propertyValidator('port', ros.validateNumber)(properties.port));
    errors.collect(ros.propertyValidator('cipher', ros.requiredValidator)(properties.cipher));
    if(properties.cipher && (typeof properties.cipher) !== 'object') {
        errors.collect(ros.propertyValidator('cipher', ros.validateAllowedValues)({
          data: properties.cipher,
          allowedValues: ["AES-128-CBC","AES-192-CBC","AES-256-CBC","none"],
        }));
    }
    errors.collect(ros.propertyValidator('cipher', ros.validateString)(properties.cipher));
    errors.collect(ros.propertyValidator('protocol', ros.requiredValidator)(properties.protocol));
    if(properties.protocol && (typeof properties.protocol) !== 'object') {
        errors.collect(ros.propertyValidator('protocol', ros.validateAllowedValues)({
          data: properties.protocol,
          allowedValues: ["UDP","TCP"],
        }));
    }
    errors.collect(ros.propertyValidator('protocol', ros.validateString)(properties.protocol));
    return errors.wrap('supplied properties not correct for "SslConfigProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::UIS::UisConnection.SslConfig` resource
 *
 * @param properties - the TypeScript properties of a `SslConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::UIS::UisConnection.SslConfig` resource.
 */
// @ts-ignore TS6133
function rosUisConnectionSslConfigPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosUisConnection_SslConfigPropertyValidator(properties).assertSuccess();
    return {
      Port: ros.numberToRosTemplate(properties.port),
      Cipher: ros.stringToRosTemplate(properties.cipher),
      Protocol: ros.stringToRosTemplate(properties.protocol),
    };
}

/**
 * Properties for defining a `ALIYUN::UIS::UisNode`
 */
export interface RosUisNodeProps {

    /**
     * @Property ipAddrsNum: The number of IPs available at the boarding point. The default is 2, the maximum is 10, if you need more quota, please submit the work order.
     */
    readonly ipAddrsNum: number;

    /**
     * @Property uisId: The instance ID to which the boarding point belongs.
     */
    readonly uisId: string;

    /**
     * @Property uisNodeAreaId: Specifies the territory ID of the node. You can query the supported territories through the DescribeRegions interface.
     */
    readonly uisNodeAreaId: string;

    /**
     * @Property uisNodeBandwidth: Specify the bandwidth bandwidth value for this pick-up point, even if the Internet bandwidth.
     * If you do not specify a bandwidth, the default value is 20Mbps.
     */
    readonly uisNodeBandwidth: number;

    /**
     * @Property description: Description of the instance of the boarding point.
     */
    readonly description?: string;

    /**
     * @Property name: The name of the instance of the boarding point.
     */
    readonly name?: string;
}

/**
 * Determine whether the given properties match those of a `RosUisNodeProps`
 *
 * @param properties - the TypeScript properties of a `RosUisNodeProps`
 *
 * @returns the result of the validation.
 */
function RosUisNodePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('uisId', ros.requiredValidator)(properties.uisId));
    errors.collect(ros.propertyValidator('uisId', ros.validateString)(properties.uisId));
    errors.collect(ros.propertyValidator('ipAddrsNum', ros.requiredValidator)(properties.ipAddrsNum));
    if(properties.ipAddrsNum && (typeof properties.ipAddrsNum) !== 'object') {
        errors.collect(ros.propertyValidator('ipAddrsNum', ros.validateRange)({
            data: properties.ipAddrsNum,
            min: 2,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('ipAddrsNum', ros.validateNumber)(properties.ipAddrsNum));
    errors.collect(ros.propertyValidator('uisNodeBandwidth', ros.requiredValidator)(properties.uisNodeBandwidth));
    if(properties.uisNodeBandwidth && (typeof properties.uisNodeBandwidth) !== 'object') {
        errors.collect(ros.propertyValidator('uisNodeBandwidth', ros.validateRange)({
            data: properties.uisNodeBandwidth,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('uisNodeBandwidth', ros.validateNumber)(properties.uisNodeBandwidth));
    errors.collect(ros.propertyValidator('uisNodeAreaId', ros.requiredValidator)(properties.uisNodeAreaId));
    errors.collect(ros.propertyValidator('uisNodeAreaId', ros.validateString)(properties.uisNodeAreaId));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "RosUisNodeProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::UIS::UisNode` resource
 *
 * @param properties - the TypeScript properties of a `RosUisNodeProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::UIS::UisNode` resource.
 */
// @ts-ignore TS6133
function rosUisNodePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosUisNodePropsValidator(properties).assertSuccess();
    }
    return {
      IpAddrsNum: ros.numberToRosTemplate(properties.ipAddrsNum),
      UisId: ros.stringToRosTemplate(properties.uisId),
      UisNodeAreaId: ros.stringToRosTemplate(properties.uisNodeAreaId),
      UisNodeBandwidth: ros.numberToRosTemplate(properties.uisNodeBandwidth),
      Description: ros.stringToRosTemplate(properties.description),
      Name: ros.stringToRosTemplate(properties.name),
    };
}

/**
 * A ROS template type:  `ALIYUN::UIS::UisNode`
 */
export class RosUisNode extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::UIS::UisNode";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute UisNodeActiveIps: The node active IP list.
     */
    public readonly attrUisNodeActiveIps: any;

    /**
     * @Attribute UisNodeId: The node ID of the instance.
     */
    public readonly attrUisNodeId: any;

    /**
     * @Attribute UisNodeIps: The node IP list.
     */
    public readonly attrUisNodeIps: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property ipAddrsNum: The number of IPs available at the boarding point. The default is 2, the maximum is 10, if you need more quota, please submit the work order.
     */
    public ipAddrsNum: number;

    /**
     * @Property uisId: The instance ID to which the boarding point belongs.
     */
    public uisId: string;

    /**
     * @Property uisNodeAreaId: Specifies the territory ID of the node. You can query the supported territories through the DescribeRegions interface.
     */
    public uisNodeAreaId: string;

    /**
     * @Property uisNodeBandwidth: Specify the bandwidth bandwidth value for this pick-up point, even if the Internet bandwidth.
     * If you do not specify a bandwidth, the default value is 20Mbps.
     */
    public uisNodeBandwidth: number;

    /**
     * @Property description: Description of the instance of the boarding point.
     */
    public description: string | undefined;

    /**
     * @Property name: The name of the instance of the boarding point.
     */
    public name: string | undefined;

    /**
     * Create a new `ALIYUN::UIS::UisNode`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosUisNodeProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosUisNode.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrUisNodeActiveIps = ros.Token.asString(this.getAtt('UisNodeActiveIps'));
        this.attrUisNodeId = ros.Token.asString(this.getAtt('UisNodeId'));
        this.attrUisNodeIps = ros.Token.asString(this.getAtt('UisNodeIps'));

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.ipAddrsNum = props.ipAddrsNum;
        this.uisId = props.uisId;
        this.uisNodeAreaId = props.uisNodeAreaId;
        this.uisNodeBandwidth = props.uisNodeBandwidth;
        this.description = props.description;
        this.name = props.name;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            ipAddrsNum: this.ipAddrsNum,
            uisId: this.uisId,
            uisNodeAreaId: this.uisNodeAreaId,
            uisNodeBandwidth: this.uisNodeBandwidth,
            description: this.description,
            name: this.name,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosUisNodePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
