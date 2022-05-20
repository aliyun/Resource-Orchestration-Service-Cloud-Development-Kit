// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `ALIYUN::ALB::BackendServerAttachment`
 */
export interface RosBackendServerAttachmentProps {

    /**
     * @Property serverGroupId: The ID of the server group.
     */
    readonly serverGroupId: string | ros.IResolvable;

    /**
     * @Property servers: The backend servers that you want to add to the server group. You can specify up to
     * 40 servers in each call.
     */
    readonly servers: Array<RosBackendServerAttachment.ServersProperty | ros.IResolvable> | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosBackendServerAttachmentProps`
 *
 * @param properties - the TypeScript properties of a `RosBackendServerAttachmentProps`
 *
 * @returns the result of the validation.
 */
function RosBackendServerAttachmentPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('serverGroupId', ros.requiredValidator)(properties.serverGroupId));
    errors.collect(ros.propertyValidator('serverGroupId', ros.validateString)(properties.serverGroupId));
    errors.collect(ros.propertyValidator('servers', ros.requiredValidator)(properties.servers));
    errors.collect(ros.propertyValidator('servers', ros.listValidator(RosBackendServerAttachment_ServersPropertyValidator))(properties.servers));
    return errors.wrap('supplied properties not correct for "RosBackendServerAttachmentProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ALB::BackendServerAttachment` resource
 *
 * @param properties - the TypeScript properties of a `RosBackendServerAttachmentProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ALB::BackendServerAttachment` resource.
 */
// @ts-ignore TS6133
function rosBackendServerAttachmentPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosBackendServerAttachmentPropsValidator(properties).assertSuccess();
    }
    return {
      ServerGroupId: ros.stringToRosTemplate(properties.serverGroupId),
      Servers: ros.listMapper(rosBackendServerAttachmentServersPropertyToRosTemplate)(properties.servers),
    };
}

/**
 * A ROS template type:  `ALIYUN::ALB::BackendServerAttachment`
 */
export class RosBackendServerAttachment extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ALB::BackendServerAttachment";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute ServerGroupId: The ID of the server group.
     */
    public readonly attrServerGroupId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property serverGroupId: The ID of the server group.
     */
    public serverGroupId: string | ros.IResolvable;

    /**
     * @Property servers: The backend servers that you want to add to the server group. You can specify up to
     * 40 servers in each call.
     */
    public servers: Array<RosBackendServerAttachment.ServersProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Create a new `ALIYUN::ALB::BackendServerAttachment`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosBackendServerAttachmentProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosBackendServerAttachment.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrServerGroupId = this.getAtt('ServerGroupId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.serverGroupId = props.serverGroupId;
        this.servers = props.servers;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            serverGroupId: this.serverGroupId,
            servers: this.servers,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosBackendServerAttachmentPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosBackendServerAttachment {
    /**
     * @stability external
     */
    export interface ServersProperty {
        /**
         * @Property serverType: The type of the backend server. Valid values:
     * Ecs: an ECS instance
     * Eni: an ENI
     * Eci: an elastic container instance
     * Ip: an IP address
         */
        readonly serverType: string | ros.IResolvable;
        /**
         * @Property description: The description of the backend server. The description must be 2 to 256 characters
     * in length, and can contain only the characters specified by the following expression:
     * /^([^\x00-\xff]|[\w.,;/@-]){2,256}$/.
         */
        readonly description?: string | ros.IResolvable;
        /**
         * @Property serverId: If the server group consists of servers, you can set this parameter to the ID of a
     * resource, such as an Elastic Compute Service (ECS) instance, an elastic network interface
     * (ENI), or an elastic container instance.
     * If the server group consists of IP addresses, you can set this parameter to an IP
     * address.
         */
        readonly serverId: string | ros.IResolvable;
        /**
         * @Property serverIp: The IP address of the ENI in inclusive ENI mode.
         */
        readonly serverIp?: string | ros.IResolvable;
        /**
         * @Property port: The port that is used by the backend server. Valid values: 1 to 65535.
     * Note This parameter is required if the ServerType parameter is set to Ecs, Eni, Eci, or Ip.
         */
        readonly port?: number | ros.IResolvable;
        /**
         * @Property weight: The weight of the backend server. Valid values: 0 to 100. Default value: 100. A value of 0 indicates that no requests are forwarded to the backend server.
         */
        readonly weight?: number | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `ServersProperty`
 *
 * @param properties - the TypeScript properties of a `ServersProperty`
 *
 * @returns the result of the validation.
 */
function RosBackendServerAttachment_ServersPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('serverType', ros.requiredValidator)(properties.serverType));
    if(properties.serverType && (typeof properties.serverType) !== 'object') {
        errors.collect(ros.propertyValidator('serverType', ros.validateAllowedValues)({
          data: properties.serverType,
          allowedValues: ["Eci","Ecs","Eni","Ip"],
        }));
    }
    errors.collect(ros.propertyValidator('serverType', ros.validateString)(properties.serverType));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('serverId', ros.requiredValidator)(properties.serverId));
    errors.collect(ros.propertyValidator('serverId', ros.validateString)(properties.serverId));
    errors.collect(ros.propertyValidator('serverIp', ros.validateString)(properties.serverIp));
    errors.collect(ros.propertyValidator('port', ros.validateNumber)(properties.port));
    errors.collect(ros.propertyValidator('weight', ros.validateNumber)(properties.weight));
    return errors.wrap('supplied properties not correct for "ServersProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ALB::BackendServerAttachment.Servers` resource
 *
 * @param properties - the TypeScript properties of a `ServersProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ALB::BackendServerAttachment.Servers` resource.
 */
// @ts-ignore TS6133
function rosBackendServerAttachmentServersPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosBackendServerAttachment_ServersPropertyValidator(properties).assertSuccess();
    return {
      ServerType: ros.stringToRosTemplate(properties.serverType),
      Description: ros.stringToRosTemplate(properties.description),
      ServerId: ros.stringToRosTemplate(properties.serverId),
      ServerIp: ros.stringToRosTemplate(properties.serverIp),
      Port: ros.numberToRosTemplate(properties.port),
      Weight: ros.numberToRosTemplate(properties.weight),
    };
}

/**
 * Properties for defining a `ALIYUN::ALB::Listener`
 */
export interface RosListenerProps {

    /**
     * @Property defaultActions: The actions of the rule.
     */
    readonly defaultActions: Array<RosListener.DefaultActionsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property listenerPort: The frontend port that is used by the ALB instance.
     * Valid values: 1 to 65535.
     */
    readonly listenerPort: number | ros.IResolvable;

    /**
     * @Property listenerProtocol: The listener protocol.
     * Valid values: HTTP, HTTPS, and QUIC.
     */
    readonly listenerProtocol: string | ros.IResolvable;

    /**
     * @Property loadBalancerId: The ID of the ALB instance.
     */
    readonly loadBalancerId: string | ros.IResolvable;

    /**
     * @Property certificates: The content of the SSL certificate.
     */
    readonly certificates?: Array<RosListener.CertificatesProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property gzipEnabled: Specifies whether to enable gzip compression to compress files of a specific type.
     * Valid values: true and false.
     * Default value: true.
     */
    readonly gzipEnabled?: boolean | ros.IResolvable;

    /**
     * @Property http2Enabled: Specifies whether to enable HTTP/2. Default value: on.
     * Valid values: true and false.
     * Default value: true.
     * Note Only HTTPS listeners support this parameter.
     */
    readonly http2Enabled?: boolean | ros.IResolvable;

    /**
     * @Property idleTimeout: The timeout period of idle connections.
     * Valid values: 1 to 60. Unit: seconds.
     * Default value: 15.
     * If no request is received within the specified timeout period, ALB closes the connection.
     * ALB recreates the connection when a new connection request is received.
     */
    readonly idleTimeout?: number | ros.IResolvable;

    /**
     * @Property listenerDescription: The description of the listener. 
     * The description must be 2 to 256 characters in length.
     */
    readonly listenerDescription?: string | ros.IResolvable;

    /**
     * @Property quicConfig: Select a QUIC listener and associate it with the ALB instance.
     */
    readonly quicConfig?: RosListener.QuicConfigProperty | ros.IResolvable;

    /**
     * @Property requestTimeout: The timeout period of the request.
     * Valid values: 1 to 180. Unit: seconds.
     * Default value: 60.
     * If no response is received from the backend server during the request timeout period,
     * ALB sends an HTTP 504 error code to the client.
     */
    readonly requestTimeout?: number | ros.IResolvable;

    /**
     * @Property securityPolicyId: The ID of the security policy. System security policies and custom security policies
     * are supported.
     * Default value: tls_cipher_policy_1_0. This value indicates a system security policy.
     * Note Only HTTPS listeners support this parameter.
     */
    readonly securityPolicyId?: string | ros.IResolvable;

    /**
     * @Property xForwardedForConfig: The configuration of the XForward field.
     */
    readonly xForwardedForConfig?: RosListener.XForwardedForConfigProperty | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosListenerProps`
 *
 * @param properties - the TypeScript properties of a `RosListenerProps`
 *
 * @returns the result of the validation.
 */
function RosListenerPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.requestTimeout && (typeof properties.requestTimeout) !== 'object') {
        errors.collect(ros.propertyValidator('requestTimeout', ros.validateRange)({
            data: properties.requestTimeout,
            min: 1,
            max: 180,
          }));
    }
    errors.collect(ros.propertyValidator('requestTimeout', ros.validateNumber)(properties.requestTimeout));
    errors.collect(ros.propertyValidator('listenerPort', ros.requiredValidator)(properties.listenerPort));
    if(properties.listenerPort && (typeof properties.listenerPort) !== 'object') {
        errors.collect(ros.propertyValidator('listenerPort', ros.validateRange)({
            data: properties.listenerPort,
            min: 1,
            max: 65535,
          }));
    }
    errors.collect(ros.propertyValidator('listenerPort', ros.validateNumber)(properties.listenerPort));
    errors.collect(ros.propertyValidator('http2Enabled', ros.validateBoolean)(properties.http2Enabled));
    errors.collect(ros.propertyValidator('defaultActions', ros.requiredValidator)(properties.defaultActions));
    errors.collect(ros.propertyValidator('defaultActions', ros.listValidator(RosListener_DefaultActionsPropertyValidator))(properties.defaultActions));
    errors.collect(ros.propertyValidator('certificates', ros.listValidator(RosListener_CertificatesPropertyValidator))(properties.certificates));
    if(properties.idleTimeout && (typeof properties.idleTimeout) !== 'object') {
        errors.collect(ros.propertyValidator('idleTimeout', ros.validateRange)({
            data: properties.idleTimeout,
            min: 1,
            max: 60,
          }));
    }
    errors.collect(ros.propertyValidator('idleTimeout', ros.validateNumber)(properties.idleTimeout));
    errors.collect(ros.propertyValidator('loadBalancerId', ros.requiredValidator)(properties.loadBalancerId));
    errors.collect(ros.propertyValidator('loadBalancerId', ros.validateString)(properties.loadBalancerId));
    errors.collect(ros.propertyValidator('listenerProtocol', ros.requiredValidator)(properties.listenerProtocol));
    if(properties.listenerProtocol && (typeof properties.listenerProtocol) !== 'object') {
        errors.collect(ros.propertyValidator('listenerProtocol', ros.validateAllowedValues)({
          data: properties.listenerProtocol,
          allowedValues: ["HTTP","HTTPS","QUIC"],
        }));
    }
    errors.collect(ros.propertyValidator('listenerProtocol', ros.validateString)(properties.listenerProtocol));
    errors.collect(ros.propertyValidator('quicConfig', RosListener_QuicConfigPropertyValidator)(properties.quicConfig));
    errors.collect(ros.propertyValidator('gzipEnabled', ros.validateBoolean)(properties.gzipEnabled));
    errors.collect(ros.propertyValidator('securityPolicyId', ros.validateString)(properties.securityPolicyId));
    if(properties.listenerDescription && (Array.isArray(properties.listenerDescription) || (typeof properties.listenerDescription) === 'string')) {
        errors.collect(ros.propertyValidator('listenerDescription', ros.validateLength)({
            data: properties.listenerDescription.length,
            min: 2,
            max: 256,
          }));
    }
    errors.collect(ros.propertyValidator('listenerDescription', ros.validateString)(properties.listenerDescription));
    errors.collect(ros.propertyValidator('xForwardedForConfig', RosListener_XForwardedForConfigPropertyValidator)(properties.xForwardedForConfig));
    return errors.wrap('supplied properties not correct for "RosListenerProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ALB::Listener` resource
 *
 * @param properties - the TypeScript properties of a `RosListenerProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ALB::Listener` resource.
 */
// @ts-ignore TS6133
function rosListenerPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosListenerPropsValidator(properties).assertSuccess();
    }
    return {
      DefaultActions: ros.listMapper(rosListenerDefaultActionsPropertyToRosTemplate)(properties.defaultActions),
      ListenerPort: ros.numberToRosTemplate(properties.listenerPort),
      ListenerProtocol: ros.stringToRosTemplate(properties.listenerProtocol),
      LoadBalancerId: ros.stringToRosTemplate(properties.loadBalancerId),
      Certificates: ros.listMapper(rosListenerCertificatesPropertyToRosTemplate)(properties.certificates),
      GzipEnabled: ros.booleanToRosTemplate(properties.gzipEnabled),
      Http2Enabled: ros.booleanToRosTemplate(properties.http2Enabled),
      IdleTimeout: ros.numberToRosTemplate(properties.idleTimeout),
      ListenerDescription: ros.stringToRosTemplate(properties.listenerDescription),
      QuicConfig: rosListenerQuicConfigPropertyToRosTemplate(properties.quicConfig),
      RequestTimeout: ros.numberToRosTemplate(properties.requestTimeout),
      SecurityPolicyId: ros.stringToRosTemplate(properties.securityPolicyId),
      XForwardedForConfig: rosListenerXForwardedForConfigPropertyToRosTemplate(properties.xForwardedForConfig),
    };
}

/**
 * A ROS template type:  `ALIYUN::ALB::Listener`
 */
export class RosListener extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ALB::Listener";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute ListenerId: The ID of the listener.
     */
    public readonly attrListenerId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property defaultActions: The actions of the rule.
     */
    public defaultActions: Array<RosListener.DefaultActionsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property listenerPort: The frontend port that is used by the ALB instance.
     * Valid values: 1 to 65535.
     */
    public listenerPort: number | ros.IResolvable;

    /**
     * @Property listenerProtocol: The listener protocol.
     * Valid values: HTTP, HTTPS, and QUIC.
     */
    public listenerProtocol: string | ros.IResolvable;

    /**
     * @Property loadBalancerId: The ID of the ALB instance.
     */
    public loadBalancerId: string | ros.IResolvable;

    /**
     * @Property certificates: The content of the SSL certificate.
     */
    public certificates: Array<RosListener.CertificatesProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property gzipEnabled: Specifies whether to enable gzip compression to compress files of a specific type.
     * Valid values: true and false.
     * Default value: true.
     */
    public gzipEnabled: boolean | ros.IResolvable | undefined;

    /**
     * @Property http2Enabled: Specifies whether to enable HTTP/2. Default value: on.
     * Valid values: true and false.
     * Default value: true.
     * Note Only HTTPS listeners support this parameter.
     */
    public http2Enabled: boolean | ros.IResolvable | undefined;

    /**
     * @Property idleTimeout: The timeout period of idle connections.
     * Valid values: 1 to 60. Unit: seconds.
     * Default value: 15.
     * If no request is received within the specified timeout period, ALB closes the connection.
     * ALB recreates the connection when a new connection request is received.
     */
    public idleTimeout: number | ros.IResolvable | undefined;

    /**
     * @Property listenerDescription: The description of the listener. 
     * The description must be 2 to 256 characters in length.
     */
    public listenerDescription: string | ros.IResolvable | undefined;

    /**
     * @Property quicConfig: Select a QUIC listener and associate it with the ALB instance.
     */
    public quicConfig: RosListener.QuicConfigProperty | ros.IResolvable | undefined;

    /**
     * @Property requestTimeout: The timeout period of the request.
     * Valid values: 1 to 180. Unit: seconds.
     * Default value: 60.
     * If no response is received from the backend server during the request timeout period,
     * ALB sends an HTTP 504 error code to the client.
     */
    public requestTimeout: number | ros.IResolvable | undefined;

    /**
     * @Property securityPolicyId: The ID of the security policy. System security policies and custom security policies
     * are supported.
     * Default value: tls_cipher_policy_1_0. This value indicates a system security policy.
     * Note Only HTTPS listeners support this parameter.
     */
    public securityPolicyId: string | ros.IResolvable | undefined;

    /**
     * @Property xForwardedForConfig: The configuration of the XForward field.
     */
    public xForwardedForConfig: RosListener.XForwardedForConfigProperty | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::ALB::Listener`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosListenerProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosListener.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrListenerId = this.getAtt('ListenerId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.defaultActions = props.defaultActions;
        this.listenerPort = props.listenerPort;
        this.listenerProtocol = props.listenerProtocol;
        this.loadBalancerId = props.loadBalancerId;
        this.certificates = props.certificates;
        this.gzipEnabled = props.gzipEnabled;
        this.http2Enabled = props.http2Enabled;
        this.idleTimeout = props.idleTimeout;
        this.listenerDescription = props.listenerDescription;
        this.quicConfig = props.quicConfig;
        this.requestTimeout = props.requestTimeout;
        this.securityPolicyId = props.securityPolicyId;
        this.xForwardedForConfig = props.xForwardedForConfig;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            defaultActions: this.defaultActions,
            listenerPort: this.listenerPort,
            listenerProtocol: this.listenerProtocol,
            loadBalancerId: this.loadBalancerId,
            certificates: this.certificates,
            gzipEnabled: this.gzipEnabled,
            http2Enabled: this.http2Enabled,
            idleTimeout: this.idleTimeout,
            listenerDescription: this.listenerDescription,
            quicConfig: this.quicConfig,
            requestTimeout: this.requestTimeout,
            securityPolicyId: this.securityPolicyId,
            xForwardedForConfig: this.xForwardedForConfig,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosListenerPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosListener {
    /**
     * @stability external
     */
    export interface CertificatesProperty {
        /**
         * @Property certificateId: The certificate ID. You must enter IDs of server certificate.
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
function RosListener_CertificatesPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('certificateId', ros.validateString)(properties.certificateId));
    return errors.wrap('supplied properties not correct for "CertificatesProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ALB::Listener.Certificates` resource
 *
 * @param properties - the TypeScript properties of a `CertificatesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ALB::Listener.Certificates` resource.
 */
// @ts-ignore TS6133
function rosListenerCertificatesPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosListener_CertificatesPropertyValidator(properties).assertSuccess();
    return {
      CertificateId: ros.stringToRosTemplate(properties.certificateId),
    };
}

export namespace RosListener {
    /**
     * @stability external
     */
    export interface DefaultActionsProperty {
        /**
         * @Property type: The action type. The value is set to ForwardGroup. 
     * It indicates that requests are forwarded to multiple vServer groups.
         */
        readonly type: string | ros.IResolvable;
        /**
         * @Property forwardGroupConfig: The configurations of the actions. This parameter is required if Type is set to FowardGroup.
         */
        readonly forwardGroupConfig: RosListener.ForwardGroupConfigProperty | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `DefaultActionsProperty`
 *
 * @param properties - the TypeScript properties of a `DefaultActionsProperty`
 *
 * @returns the result of the validation.
 */
function RosListener_DefaultActionsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('type', ros.requiredValidator)(properties.type));
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('forwardGroupConfig', ros.requiredValidator)(properties.forwardGroupConfig));
    errors.collect(ros.propertyValidator('forwardGroupConfig', RosListener_ForwardGroupConfigPropertyValidator)(properties.forwardGroupConfig));
    return errors.wrap('supplied properties not correct for "DefaultActionsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ALB::Listener.DefaultActions` resource
 *
 * @param properties - the TypeScript properties of a `DefaultActionsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ALB::Listener.DefaultActions` resource.
 */
// @ts-ignore TS6133
function rosListenerDefaultActionsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosListener_DefaultActionsPropertyValidator(properties).assertSuccess();
    return {
      Type: ros.stringToRosTemplate(properties.type),
      ForwardGroupConfig: rosListenerForwardGroupConfigPropertyToRosTemplate(properties.forwardGroupConfig),
    };
}

export namespace RosListener {
    /**
     * @stability external
     */
    export interface ForwardGroupConfigProperty {
        /**
         * @Property serverGroupTuples: The destination server group to which requests are forwarded.
         */
        readonly serverGroupTuples: Array<RosListener.ServerGroupTuplesProperty | ros.IResolvable> | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `ForwardGroupConfigProperty`
 *
 * @param properties - the TypeScript properties of a `ForwardGroupConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosListener_ForwardGroupConfigPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('serverGroupTuples', ros.requiredValidator)(properties.serverGroupTuples));
    errors.collect(ros.propertyValidator('serverGroupTuples', ros.listValidator(RosListener_ServerGroupTuplesPropertyValidator))(properties.serverGroupTuples));
    return errors.wrap('supplied properties not correct for "ForwardGroupConfigProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ALB::Listener.ForwardGroupConfig` resource
 *
 * @param properties - the TypeScript properties of a `ForwardGroupConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ALB::Listener.ForwardGroupConfig` resource.
 */
// @ts-ignore TS6133
function rosListenerForwardGroupConfigPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosListener_ForwardGroupConfigPropertyValidator(properties).assertSuccess();
    return {
      ServerGroupTuples: ros.listMapper(rosListenerServerGroupTuplesPropertyToRosTemplate)(properties.serverGroupTuples),
    };
}

export namespace RosListener {
    /**
     * @stability external
     */
    export interface QuicConfigProperty {
        /**
         * @Property quicListenerId: The ID of the QUIC listener to be associated. Only HTTPS listeners support this parameter. If QuicUpgradeEnabled is set to true, this parameter is required.
     * Note The original listener and the QUIC listener must belong to the same ALB instance.
     * In addition, make sure that the QUIC listener has not been associated before.
         */
        readonly quicListenerId?: string | ros.IResolvable;
        /**
         * @Property quicUpgradeEnabled: Specifies whether to enable the QUIC update feature.
     * Valid values: true and false.
     * Default value: false.
     * Note Only HTTPS listeners support this parameter.
         */
        readonly quicUpgradeEnabled?: boolean | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `QuicConfigProperty`
 *
 * @param properties - the TypeScript properties of a `QuicConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosListener_QuicConfigPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('quicListenerId', ros.validateString)(properties.quicListenerId));
    errors.collect(ros.propertyValidator('quicUpgradeEnabled', ros.validateBoolean)(properties.quicUpgradeEnabled));
    return errors.wrap('supplied properties not correct for "QuicConfigProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ALB::Listener.QuicConfig` resource
 *
 * @param properties - the TypeScript properties of a `QuicConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ALB::Listener.QuicConfig` resource.
 */
// @ts-ignore TS6133
function rosListenerQuicConfigPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosListener_QuicConfigPropertyValidator(properties).assertSuccess();
    return {
      QuicListenerId: ros.stringToRosTemplate(properties.quicListenerId),
      QuicUpgradeEnabled: ros.booleanToRosTemplate(properties.quicUpgradeEnabled),
    };
}

export namespace RosListener {
    /**
     * @stability external
     */
    export interface ServerGroupTuplesProperty {
        /**
         * @Property serverGroupId: The ID of the destination server group to which requests are forwarded.
         */
        readonly serverGroupId: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `ServerGroupTuplesProperty`
 *
 * @param properties - the TypeScript properties of a `ServerGroupTuplesProperty`
 *
 * @returns the result of the validation.
 */
function RosListener_ServerGroupTuplesPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('serverGroupId', ros.requiredValidator)(properties.serverGroupId));
    errors.collect(ros.propertyValidator('serverGroupId', ros.validateString)(properties.serverGroupId));
    return errors.wrap('supplied properties not correct for "ServerGroupTuplesProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ALB::Listener.ServerGroupTuples` resource
 *
 * @param properties - the TypeScript properties of a `ServerGroupTuplesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ALB::Listener.ServerGroupTuples` resource.
 */
// @ts-ignore TS6133
function rosListenerServerGroupTuplesPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosListener_ServerGroupTuplesPropertyValidator(properties).assertSuccess();
    return {
      ServerGroupId: ros.stringToRosTemplate(properties.serverGroupId),
    };
}

export namespace RosListener {
    /**
     * @stability external
     */
    export interface XForwardedForConfigProperty {
        /**
         * @Property xForwardedForClientCertFingerprintAlias: The name of the custom header. This parameter is valid only if XForwardedForClientCertFingerprintEnabled is set to true.
     * The name must be 1 to 40 characters in length, and can contain letters, hyphens (-),
     * underscores (_), and digits.
     * Note Only HTTPS listeners support this parameter.
         */
        readonly xForwardedForClientCertFingerprintAlias?: string | ros.IResolvable;
        /**
         * @Property xForwardedForClientCertFingerprintEnabled: Specifies whether to use the X-Forwarded-Clientcert-fingerprint header field to obtain the fingerprint of the ALB client certificate.
     * Valid values: true and false.
     * Default value: false.
     * Note Only HTTPS listeners support this parameter.
         */
        readonly xForwardedForClientCertFingerprintEnabled?: boolean | ros.IResolvable;
        /**
         * @Property xForwardedForClientCertIssuerDnAlias: The name of the custom header. This parameter is valid only if XForwardedForClientCertIssuerDNEnabled is set to On.
     * The name must be 1 to 40 characters in length, and can contain letters, hyphens (-),
     * underscores (_), and digits.
     * Note Only HTTPS listeners support this parameter.
         */
        readonly xForwardedForClientCertIssuerDnAlias?: string | ros.IResolvable;
        /**
         * @Property xForwardedForClientCertClientVerifyAlias: The name of the custom header. This parameter is valid only if XForwardedForClientCertClientVerifyEnabled is set to true.
     * The name must be 1 to 40 characters in length, and can contain letters, hyphens (-),
     * underscores (_), and digits.
     * Note Only HTTPS listeners support this parameter.
         */
        readonly xForwardedForClientCertClientVerifyAlias?: string | ros.IResolvable;
        /**
         * @Property xForwardedForSlbIdEnabled: Specifies whether to use the SLB-ID header field to obtain the ID of the ALB instance.
     * Valid values: true and false.
     * Default value: false.
     * Note HTTP, HTTPS, and QUIC listeners support this parameter.
         */
        readonly xForwardedForSlbIdEnabled?: boolean | ros.IResolvable;
        /**
         * @Property xForwardedForClientCertSubjectDnEnabled: Specifies whether to use the X-Forwarded-Clientcert-subjectdn header field to obtain information about the owner of the ALB client certificate.
     * Valid values: true and false.
     * Default value: false.
     * Note Only HTTPS listeners support this parameter.
         */
        readonly xForwardedForClientCertSubjectDnEnabled?: boolean | ros.IResolvable;
        /**
         * @Property xForwardedForClientCertSubjectDnAlias: The name of the custom header. This parameter is valid only if XForwardedForClientCertSubjectDNEnabled
     * is set to true.
     * The name must be 1 to 40 characters in length, and can contain letters, hyphens (-),
     * underscores (_), and digits.
     * Note Only HTTPS listeners support this parameter.
         */
        readonly xForwardedForClientCertSubjectDnAlias?: string | ros.IResolvable;
        /**
         * @Property xForwardedForProtoEnabled: Specifies whether to use the X-Forwarded-Proto header field to obtain the listener protocol of the ALB instance.
     * Valid values: true and false.
     * Default value: false.
     * Note HTTP, HTTPS, and QUIC listeners support this parameter.
         */
        readonly xForwardedForProtoEnabled?: boolean | ros.IResolvable;
        /**
         * @Property xForwardedForClientSrcPortEnabled: Specifies whether to use the X-Forwarded-Client-Port header field to obtain the port of the ALB client.
     * Valid values: true and false.
     * Default value: false.
     * Note HTTP and HTTPS listeners support this parameter.
         */
        readonly xForwardedForClientSrcPortEnabled?: boolean | ros.IResolvable;
        /**
         * @Property xForwardedForSlbPortEnabled: Specifies whether to use the X-Forwarded-Port header field to obtain the listener port of the ALB instance.
     * Valid values: true and false.
     * Default value: false.
     * Note HTTP, HTTPS, and QUIC listeners support this parameter.
         */
        readonly xForwardedForSlbPortEnabled?: boolean | ros.IResolvable;
        /**
         * @Property xForwardedForEnabled: Specifies whether to use the X-Forwarded-For header field to obtain the real IP address of the client.
     * Valid values: true and false.
     * Default value: true.
     * Note HTTP and HTTPS listeners support this parameter.
         */
        readonly xForwardedForEnabled?: boolean | ros.IResolvable;
        /**
         * @Property xForwardedForClientCertIssuerDnEnabled: Specifies whether to use the X-Forwarded-Clientcert-issuerdn header field to obtain information about the authority that issues the ALB client
     * certificate.
     * Valid values: true and false.
     * Default value: false.
     * Note Only HTTPS listeners support this parameter.
         */
        readonly xForwardedForClientCertIssuerDnEnabled?: boolean | ros.IResolvable;
        /**
         * @Property xForwardedForClientCertClientVerifyEnabled: Specifies whether to use the X-Forwarded-Clientcert-clientverify header field to obtain the verification result of the ALB client certificate.
     * Valid values: true and false.
     * Default value: false.
     * Note Only HTTPS listeners support this parameter.
         */
        readonly xForwardedForClientCertClientVerifyEnabled?: boolean | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `XForwardedForConfigProperty`
 *
 * @param properties - the TypeScript properties of a `XForwardedForConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosListener_XForwardedForConfigPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.xForwardedForClientCertFingerprintAlias && (typeof properties.xForwardedForClientCertFingerprintAlias) !== 'object') {
        errors.collect(ros.propertyValidator('xForwardedForClientCertFingerprintAlias', ros.validateAllowedPattern)({
          data: properties.xForwardedForClientCertFingerprintAlias,
          reg: /[-a-z0-9_]{2,40}/
        }));
    }
    errors.collect(ros.propertyValidator('xForwardedForClientCertFingerprintAlias', ros.validateString)(properties.xForwardedForClientCertFingerprintAlias));
    errors.collect(ros.propertyValidator('xForwardedForClientCertFingerprintEnabled', ros.validateBoolean)(properties.xForwardedForClientCertFingerprintEnabled));
    if(properties.xForwardedForClientCertIssuerDnAlias && (typeof properties.xForwardedForClientCertIssuerDnAlias) !== 'object') {
        errors.collect(ros.propertyValidator('xForwardedForClientCertIssuerDnAlias', ros.validateAllowedPattern)({
          data: properties.xForwardedForClientCertIssuerDnAlias,
          reg: /[-a-z0-9_]{2,40}/
        }));
    }
    errors.collect(ros.propertyValidator('xForwardedForClientCertIssuerDnAlias', ros.validateString)(properties.xForwardedForClientCertIssuerDnAlias));
    if(properties.xForwardedForClientCertClientVerifyAlias && (typeof properties.xForwardedForClientCertClientVerifyAlias) !== 'object') {
        errors.collect(ros.propertyValidator('xForwardedForClientCertClientVerifyAlias', ros.validateAllowedPattern)({
          data: properties.xForwardedForClientCertClientVerifyAlias,
          reg: /[-a-z0-9_]{2,40}/
        }));
    }
    errors.collect(ros.propertyValidator('xForwardedForClientCertClientVerifyAlias', ros.validateString)(properties.xForwardedForClientCertClientVerifyAlias));
    errors.collect(ros.propertyValidator('xForwardedForSlbIdEnabled', ros.validateBoolean)(properties.xForwardedForSlbIdEnabled));
    errors.collect(ros.propertyValidator('xForwardedForClientCertSubjectDnEnabled', ros.validateBoolean)(properties.xForwardedForClientCertSubjectDnEnabled));
    if(properties.xForwardedForClientCertSubjectDnAlias && (typeof properties.xForwardedForClientCertSubjectDnAlias) !== 'object') {
        errors.collect(ros.propertyValidator('xForwardedForClientCertSubjectDnAlias', ros.validateAllowedPattern)({
          data: properties.xForwardedForClientCertSubjectDnAlias,
          reg: /[-a-z0-9_]{2,40}/
        }));
    }
    errors.collect(ros.propertyValidator('xForwardedForClientCertSubjectDnAlias', ros.validateString)(properties.xForwardedForClientCertSubjectDnAlias));
    errors.collect(ros.propertyValidator('xForwardedForProtoEnabled', ros.validateBoolean)(properties.xForwardedForProtoEnabled));
    errors.collect(ros.propertyValidator('xForwardedForClientSrcPortEnabled', ros.validateBoolean)(properties.xForwardedForClientSrcPortEnabled));
    errors.collect(ros.propertyValidator('xForwardedForSlbPortEnabled', ros.validateBoolean)(properties.xForwardedForSlbPortEnabled));
    errors.collect(ros.propertyValidator('xForwardedForEnabled', ros.validateBoolean)(properties.xForwardedForEnabled));
    errors.collect(ros.propertyValidator('xForwardedForClientCertIssuerDnEnabled', ros.validateBoolean)(properties.xForwardedForClientCertIssuerDnEnabled));
    errors.collect(ros.propertyValidator('xForwardedForClientCertClientVerifyEnabled', ros.validateBoolean)(properties.xForwardedForClientCertClientVerifyEnabled));
    return errors.wrap('supplied properties not correct for "XForwardedForConfigProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ALB::Listener.XForwardedForConfig` resource
 *
 * @param properties - the TypeScript properties of a `XForwardedForConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ALB::Listener.XForwardedForConfig` resource.
 */
// @ts-ignore TS6133
function rosListenerXForwardedForConfigPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosListener_XForwardedForConfigPropertyValidator(properties).assertSuccess();
    return {
      XForwardedForClientCertFingerprintAlias: ros.stringToRosTemplate(properties.xForwardedForClientCertFingerprintAlias),
      XForwardedForClientCertFingerprintEnabled: ros.booleanToRosTemplate(properties.xForwardedForClientCertFingerprintEnabled),
      XForwardedForClientCertIssuerDNAlias: ros.stringToRosTemplate(properties.xForwardedForClientCertIssuerDnAlias),
      XForwardedForClientCertClientVerifyAlias: ros.stringToRosTemplate(properties.xForwardedForClientCertClientVerifyAlias),
      XForwardedForSLBIdEnabled: ros.booleanToRosTemplate(properties.xForwardedForSlbIdEnabled),
      XForwardedForClientCertSubjectDNEnabled: ros.booleanToRosTemplate(properties.xForwardedForClientCertSubjectDnEnabled),
      XForwardedForClientCertSubjectDNAlias: ros.stringToRosTemplate(properties.xForwardedForClientCertSubjectDnAlias),
      XForwardedForProtoEnabled: ros.booleanToRosTemplate(properties.xForwardedForProtoEnabled),
      XForwardedForClientSrcPortEnabled: ros.booleanToRosTemplate(properties.xForwardedForClientSrcPortEnabled),
      XForwardedForSLBPortEnabled: ros.booleanToRosTemplate(properties.xForwardedForSlbPortEnabled),
      XForwardedForEnabled: ros.booleanToRosTemplate(properties.xForwardedForEnabled),
      XForwardedForClientCertIssuerDNEnabled: ros.booleanToRosTemplate(properties.xForwardedForClientCertIssuerDnEnabled),
      XForwardedForClientCertClientVerifyEnabled: ros.booleanToRosTemplate(properties.xForwardedForClientCertClientVerifyEnabled),
    };
}

/**
 * Properties for defining a `ALIYUN::ALB::LoadBalancer`
 */
export interface RosLoadBalancerProps {

    /**
     * @Property addressType: The type of IP address that the ALB instance uses to provide services. Valid values:
     * Internet: The ALB instance uses a public IP address. The domain name of the ALB instance is resolved to the public IP address. Therefore, the ALB instance can be accessed over the Internet.
     * Intranet: The ALB instance uses a private IP address. The domain name of the ALB instance is resolved to the private IP address. Therefore, the ALB instance can be accessed over the VPC where the ALB instance is deployed.
     */
    readonly addressType: string | ros.IResolvable;

    /**
     * @Property loadBalancerBillingConfig: The configuration of the billing method.
     */
    readonly loadBalancerBillingConfig: RosLoadBalancer.LoadBalancerBillingConfigProperty | ros.IResolvable;

    /**
     * @Property loadBalancerEdition: The edition of the ALB instance. Different editions have different limits and billing methods. Valid values:
     * Basic: Basic Edition
     * Standard: Standard Edition
     */
    readonly loadBalancerEdition: string | ros.IResolvable;

    /**
     * @Property loadBalancerName: The name of the ALB instance.
     * The name must be 2 to 128 characters in length, and can contain letters, digits, periods(.), underscores (_), and hyphens (-). The name must start with a letter.
     */
    readonly loadBalancerName: string | ros.IResolvable;

    /**
     * @Property vpcId: The ID of the virtual private cloud (VPC) where the ALB instance is deployed.
     */
    readonly vpcId: string | ros.IResolvable;

    /**
     * @Property zoneMappings: The zones and the vSwitches in the zones. You must specify at least two zones.
     */
    readonly zoneMappings: Array<RosLoadBalancer.ZoneMappingsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property addressAllocatedMode: The mode in which IP addresses are assigned. Valid values:
     * Fixed: The ALB instance uses a static IP address.
     * Dynamic: An IP address is dynamically assigned to the ALB instance in each zone. This is the default value.
     */
    readonly addressAllocatedMode?: string | ros.IResolvable;

    /**
     * @Property bandwidthPackageId: Attach common bandwidth package to load balancer. It only takes effect when AddressType=Internet.
     */
    readonly bandwidthPackageId?: string | ros.IResolvable;

    /**
     * @Property deletionProtectionEnabled: Specifies whether to enable deletion protection. Default value: false.
     */
    readonly deletionProtectionEnabled?: boolean | ros.IResolvable;

    /**
     * @Property modificationProtectionConfig: The configuration of modification protection.
     */
    readonly modificationProtectionConfig?: RosLoadBalancer.ModificationProtectionConfigProperty | ros.IResolvable;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosLoadBalancer.TagsProperty[];
}

/**
 * Determine whether the given properties match those of a `RosLoadBalancerProps`
 *
 * @param properties - the TypeScript properties of a `RosLoadBalancerProps`
 *
 * @returns the result of the validation.
 */
function RosLoadBalancerPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('loadBalancerName', ros.requiredValidator)(properties.loadBalancerName));
    errors.collect(ros.propertyValidator('loadBalancerName', ros.validateString)(properties.loadBalancerName));
    errors.collect(ros.propertyValidator('loadBalancerEdition', ros.requiredValidator)(properties.loadBalancerEdition));
    if(properties.loadBalancerEdition && (typeof properties.loadBalancerEdition) !== 'object') {
        errors.collect(ros.propertyValidator('loadBalancerEdition', ros.validateAllowedValues)({
          data: properties.loadBalancerEdition,
          allowedValues: ["Basic","Standard"],
        }));
    }
    errors.collect(ros.propertyValidator('loadBalancerEdition', ros.validateString)(properties.loadBalancerEdition));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('vpcId', ros.requiredValidator)(properties.vpcId));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('loadBalancerBillingConfig', ros.requiredValidator)(properties.loadBalancerBillingConfig));
    errors.collect(ros.propertyValidator('loadBalancerBillingConfig', RosLoadBalancer_LoadBalancerBillingConfigPropertyValidator)(properties.loadBalancerBillingConfig));
    errors.collect(ros.propertyValidator('bandwidthPackageId', ros.validateString)(properties.bandwidthPackageId));
    errors.collect(ros.propertyValidator('addressType', ros.requiredValidator)(properties.addressType));
    if(properties.addressType && (typeof properties.addressType) !== 'object') {
        errors.collect(ros.propertyValidator('addressType', ros.validateAllowedValues)({
          data: properties.addressType,
          allowedValues: ["Internet","Intranet"],
        }));
    }
    errors.collect(ros.propertyValidator('addressType', ros.validateString)(properties.addressType));
    if(properties.addressAllocatedMode && (typeof properties.addressAllocatedMode) !== 'object') {
        errors.collect(ros.propertyValidator('addressAllocatedMode', ros.validateAllowedValues)({
          data: properties.addressAllocatedMode,
          allowedValues: ["Fixed","Dynamic"],
        }));
    }
    errors.collect(ros.propertyValidator('addressAllocatedMode', ros.validateString)(properties.addressAllocatedMode));
    errors.collect(ros.propertyValidator('zoneMappings', ros.requiredValidator)(properties.zoneMappings));
    errors.collect(ros.propertyValidator('zoneMappings', ros.listValidator(RosLoadBalancer_ZoneMappingsPropertyValidator))(properties.zoneMappings));
    errors.collect(ros.propertyValidator('modificationProtectionConfig', RosLoadBalancer_ModificationProtectionConfigPropertyValidator)(properties.modificationProtectionConfig));
    errors.collect(ros.propertyValidator('deletionProtectionEnabled', ros.validateBoolean)(properties.deletionProtectionEnabled));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosLoadBalancer_TagsPropertyValidator))(properties.tags));
    return errors.wrap('supplied properties not correct for "RosLoadBalancerProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ALB::LoadBalancer` resource
 *
 * @param properties - the TypeScript properties of a `RosLoadBalancerProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ALB::LoadBalancer` resource.
 */
// @ts-ignore TS6133
function rosLoadBalancerPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosLoadBalancerPropsValidator(properties).assertSuccess();
    }
    return {
      AddressType: ros.stringToRosTemplate(properties.addressType),
      LoadBalancerBillingConfig: rosLoadBalancerLoadBalancerBillingConfigPropertyToRosTemplate(properties.loadBalancerBillingConfig),
      LoadBalancerEdition: ros.stringToRosTemplate(properties.loadBalancerEdition),
      LoadBalancerName: ros.stringToRosTemplate(properties.loadBalancerName),
      VpcId: ros.stringToRosTemplate(properties.vpcId),
      ZoneMappings: ros.listMapper(rosLoadBalancerZoneMappingsPropertyToRosTemplate)(properties.zoneMappings),
      AddressAllocatedMode: ros.stringToRosTemplate(properties.addressAllocatedMode),
      BandwidthPackageId: ros.stringToRosTemplate(properties.bandwidthPackageId),
      DeletionProtectionEnabled: ros.booleanToRosTemplate(properties.deletionProtectionEnabled),
      ModificationProtectionConfig: rosLoadBalancerModificationProtectionConfigPropertyToRosTemplate(properties.modificationProtectionConfig),
      ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
      Tags: ros.listMapper(rosLoadBalancerTagsPropertyToRosTemplate)(properties.tags),
    };
}

/**
 * A ROS template type:  `ALIYUN::ALB::LoadBalancer`
 */
export class RosLoadBalancer extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ALB::LoadBalancer";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute AddressType: The type of IP address that the ALB instance uses to provide services.
     */
    public readonly attrAddressType: ros.IResolvable;

    /**
     * @Attribute DNSName: The domain name of the ALB instance.
     */
    public readonly attrDnsName: ros.IResolvable;

    /**
     * @Attribute LoadBalancerEdition: The edition of the ALB instance.
     */
    public readonly attrLoadBalancerEdition: ros.IResolvable;

    /**
     * @Attribute LoadBalancerId: The ID of the ALB instance.
     */
    public readonly attrLoadBalancerId: ros.IResolvable;

    /**
     * @Attribute VpcId: The ID of the virtual private cloud (VPC) where the ALB instance is deployed.
     */
    public readonly attrVpcId: ros.IResolvable;

    /**
     * @Attribute ZoneMappings: The zones, vSwitches and addresses which are mapped to the zones.
     */
    public readonly attrZoneMappings: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property addressType: The type of IP address that the ALB instance uses to provide services. Valid values:
     * Internet: The ALB instance uses a public IP address. The domain name of the ALB instance is resolved to the public IP address. Therefore, the ALB instance can be accessed over the Internet.
     * Intranet: The ALB instance uses a private IP address. The domain name of the ALB instance is resolved to the private IP address. Therefore, the ALB instance can be accessed over the VPC where the ALB instance is deployed.
     */
    public addressType: string | ros.IResolvable;

    /**
     * @Property loadBalancerBillingConfig: The configuration of the billing method.
     */
    public loadBalancerBillingConfig: RosLoadBalancer.LoadBalancerBillingConfigProperty | ros.IResolvable;

    /**
     * @Property loadBalancerEdition: The edition of the ALB instance. Different editions have different limits and billing methods. Valid values:
     * Basic: Basic Edition
     * Standard: Standard Edition
     */
    public loadBalancerEdition: string | ros.IResolvable;

    /**
     * @Property loadBalancerName: The name of the ALB instance.
     * The name must be 2 to 128 characters in length, and can contain letters, digits, periods(.), underscores (_), and hyphens (-). The name must start with a letter.
     */
    public loadBalancerName: string | ros.IResolvable;

    /**
     * @Property vpcId: The ID of the virtual private cloud (VPC) where the ALB instance is deployed.
     */
    public vpcId: string | ros.IResolvable;

    /**
     * @Property zoneMappings: The zones and the vSwitches in the zones. You must specify at least two zones.
     */
    public zoneMappings: Array<RosLoadBalancer.ZoneMappingsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property addressAllocatedMode: The mode in which IP addresses are assigned. Valid values:
     * Fixed: The ALB instance uses a static IP address.
     * Dynamic: An IP address is dynamically assigned to the ALB instance in each zone. This is the default value.
     */
    public addressAllocatedMode: string | ros.IResolvable | undefined;

    /**
     * @Property bandwidthPackageId: Attach common bandwidth package to load balancer. It only takes effect when AddressType=Internet.
     */
    public bandwidthPackageId: string | ros.IResolvable | undefined;

    /**
     * @Property deletionProtectionEnabled: Specifies whether to enable deletion protection. Default value: false.
     */
    public deletionProtectionEnabled: boolean | ros.IResolvable | undefined;

    /**
     * @Property modificationProtectionConfig: The configuration of modification protection.
     */
    public modificationProtectionConfig: RosLoadBalancer.ModificationProtectionConfigProperty | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    public tags: RosLoadBalancer.TagsProperty[] | undefined;

    /**
     * Create a new `ALIYUN::ALB::LoadBalancer`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosLoadBalancerProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosLoadBalancer.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAddressType = this.getAtt('AddressType');
        this.attrDnsName = this.getAtt('DNSName');
        this.attrLoadBalancerEdition = this.getAtt('LoadBalancerEdition');
        this.attrLoadBalancerId = this.getAtt('LoadBalancerId');
        this.attrVpcId = this.getAtt('VpcId');
        this.attrZoneMappings = this.getAtt('ZoneMappings');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.addressType = props.addressType;
        this.loadBalancerBillingConfig = props.loadBalancerBillingConfig;
        this.loadBalancerEdition = props.loadBalancerEdition;
        this.loadBalancerName = props.loadBalancerName;
        this.vpcId = props.vpcId;
        this.zoneMappings = props.zoneMappings;
        this.addressAllocatedMode = props.addressAllocatedMode;
        this.bandwidthPackageId = props.bandwidthPackageId;
        this.deletionProtectionEnabled = props.deletionProtectionEnabled;
        this.modificationProtectionConfig = props.modificationProtectionConfig;
        this.resourceGroupId = props.resourceGroupId;
        this.tags = props.tags;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            addressType: this.addressType,
            loadBalancerBillingConfig: this.loadBalancerBillingConfig,
            loadBalancerEdition: this.loadBalancerEdition,
            loadBalancerName: this.loadBalancerName,
            vpcId: this.vpcId,
            zoneMappings: this.zoneMappings,
            addressAllocatedMode: this.addressAllocatedMode,
            bandwidthPackageId: this.bandwidthPackageId,
            deletionProtectionEnabled: this.deletionProtectionEnabled,
            modificationProtectionConfig: this.modificationProtectionConfig,
            resourceGroupId: this.resourceGroupId,
            tags: this.tags,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosLoadBalancerPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosLoadBalancer {
    /**
     * @stability external
     */
    export interface LoadBalancerBillingConfigProperty {
        /**
         * @Property payType: The billing method of the ALB instance. Set the value to PostPay, which indicates the pay-as-you-go billing method.
         */
        readonly payType: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `LoadBalancerBillingConfigProperty`
 *
 * @param properties - the TypeScript properties of a `LoadBalancerBillingConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosLoadBalancer_LoadBalancerBillingConfigPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('payType', ros.requiredValidator)(properties.payType));
    errors.collect(ros.propertyValidator('payType', ros.validateString)(properties.payType));
    return errors.wrap('supplied properties not correct for "LoadBalancerBillingConfigProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ALB::LoadBalancer.LoadBalancerBillingConfig` resource
 *
 * @param properties - the TypeScript properties of a `LoadBalancerBillingConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ALB::LoadBalancer.LoadBalancerBillingConfig` resource.
 */
// @ts-ignore TS6133
function rosLoadBalancerLoadBalancerBillingConfigPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosLoadBalancer_LoadBalancerBillingConfigPropertyValidator(properties).assertSuccess();
    return {
      PayType: ros.stringToRosTemplate(properties.payType),
    };
}

export namespace RosLoadBalancer {
    /**
     * @stability external
     */
    export interface ModificationProtectionConfigProperty {
        /**
         * @Property status: Specifies whether to enable the configuration read-only mode for the ALB instance. Valid values:
     * NonProtection: disables the configuration read-only mode. In this case, you cannot set the Reason parameter. If the Reason parameter is set, the value is cleared.
     * ConsoleProtection: enables the configuration read-only mode. In this case, you can set the Reason parameter.
         */
        readonly status: string | ros.IResolvable;
        /**
         * @Property reason: The reason for modification protection. The reason must be 2 to 128 characters in
     * length, and can contain letters, digits, periods (.), underscores (_), and hyphens
     * (-). The reason must start with a letter.
     * This parameter is valid only if the ModificationProtectionStatus parameter is set to ConsoleProtection.
         */
        readonly reason?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `ModificationProtectionConfigProperty`
 *
 * @param properties - the TypeScript properties of a `ModificationProtectionConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosLoadBalancer_ModificationProtectionConfigPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('status', ros.requiredValidator)(properties.status));
    errors.collect(ros.propertyValidator('status', ros.validateString)(properties.status));
    errors.collect(ros.propertyValidator('reason', ros.validateString)(properties.reason));
    return errors.wrap('supplied properties not correct for "ModificationProtectionConfigProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ALB::LoadBalancer.ModificationProtectionConfig` resource
 *
 * @param properties - the TypeScript properties of a `ModificationProtectionConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ALB::LoadBalancer.ModificationProtectionConfig` resource.
 */
// @ts-ignore TS6133
function rosLoadBalancerModificationProtectionConfigPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosLoadBalancer_ModificationProtectionConfigPropertyValidator(properties).assertSuccess();
    return {
      Status: ros.stringToRosTemplate(properties.status),
      Reason: ros.stringToRosTemplate(properties.reason),
    };
}

export namespace RosLoadBalancer {
    /**
     * @stability external
     */
    export interface TagsProperty {
        /**
         * @Property value: undefined
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: undefined
         */
        readonly key: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `TagsProperty`
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the result of the validation.
 */
function RosLoadBalancer_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ALB::LoadBalancer.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ALB::LoadBalancer.Tags` resource.
 */
// @ts-ignore TS6133
function rosLoadBalancerTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosLoadBalancer_TagsPropertyValidator(properties).assertSuccess();
    return {
      Value: ros.stringToRosTemplate(properties.value),
      Key: ros.stringToRosTemplate(properties.key),
    };
}

export namespace RosLoadBalancer {
    /**
     * @stability external
     */
    export interface ZoneMappingsProperty {
        /**
         * @Property zoneId: The ID of the zone to which the ALB instance belongs.
         */
        readonly zoneId: string | ros.IResolvable;
        /**
         * @Property vSwitchId: The ID of the vSwitch in the zone. Each zone can contain only one vSwitch and one subnet.
         */
        readonly vSwitchId: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `ZoneMappingsProperty`
 *
 * @param properties - the TypeScript properties of a `ZoneMappingsProperty`
 *
 * @returns the result of the validation.
 */
function RosLoadBalancer_ZoneMappingsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('zoneId', ros.requiredValidator)(properties.zoneId));
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.requiredValidator)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    return errors.wrap('supplied properties not correct for "ZoneMappingsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ALB::LoadBalancer.ZoneMappings` resource
 *
 * @param properties - the TypeScript properties of a `ZoneMappingsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ALB::LoadBalancer.ZoneMappings` resource.
 */
// @ts-ignore TS6133
function rosLoadBalancerZoneMappingsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosLoadBalancer_ZoneMappingsPropertyValidator(properties).assertSuccess();
    return {
      ZoneId: ros.stringToRosTemplate(properties.zoneId),
      VSwitchId: ros.stringToRosTemplate(properties.vSwitchId),
    };
}

/**
 * Properties for defining a `ALIYUN::ALB::Rule`
 */
export interface RosRuleProps {

    /**
     * @Property listenerId: The ID of the listener that is configured for the Application Load Balancer (ALB)
     * instance.
     */
    readonly listenerId: string | ros.IResolvable;

    /**
     * @Property priority: The priority of the forwarding rule. Valid values: 1 to 10000. A lower value specifies a higher priority.
     * Note The priority of each forwarding rule within a listener must be unique.
     */
    readonly priority: number | ros.IResolvable;

    /**
     * @Property ruleActions: The actions of the forwarding rule.
     */
    readonly ruleActions: Array<RosRule.RuleActionsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property ruleConditions: The conditions of the forwarding rule.
     */
    readonly ruleConditions: Array<RosRule.RuleConditionsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property ruleName: The name of the forwarding rule.
     * The name must be 2 to 128 characters in length.
     * It can contain letters, digits, periods (.), underscores (_), and hyphens (-). It
     * must start with a letter.
     */
    readonly ruleName: string | ros.IResolvable;

    /**
     * @Property direction: Rule direction. Valid values: Request or Response.
     */
    readonly direction?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosRuleProps`
 *
 * @param properties - the TypeScript properties of a `RosRuleProps`
 *
 * @returns the result of the validation.
 */
function RosRulePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('ruleActions', ros.requiredValidator)(properties.ruleActions));
    errors.collect(ros.propertyValidator('ruleActions', ros.listValidator(RosRule_RuleActionsPropertyValidator))(properties.ruleActions));
    errors.collect(ros.propertyValidator('priority', ros.requiredValidator)(properties.priority));
    if(properties.priority && (typeof properties.priority) !== 'object') {
        errors.collect(ros.propertyValidator('priority', ros.validateRange)({
            data: properties.priority,
            min: 1,
            max: 10000,
          }));
    }
    errors.collect(ros.propertyValidator('priority', ros.validateNumber)(properties.priority));
    errors.collect(ros.propertyValidator('ruleConditions', ros.requiredValidator)(properties.ruleConditions));
    errors.collect(ros.propertyValidator('ruleConditions', ros.listValidator(RosRule_RuleConditionsPropertyValidator))(properties.ruleConditions));
    if(properties.direction && (typeof properties.direction) !== 'object') {
        errors.collect(ros.propertyValidator('direction', ros.validateAllowedValues)({
          data: properties.direction,
          allowedValues: ["Request","Response"],
        }));
    }
    errors.collect(ros.propertyValidator('direction', ros.validateString)(properties.direction));
    errors.collect(ros.propertyValidator('ruleName', ros.requiredValidator)(properties.ruleName));
    errors.collect(ros.propertyValidator('ruleName', ros.validateString)(properties.ruleName));
    errors.collect(ros.propertyValidator('listenerId', ros.requiredValidator)(properties.listenerId));
    errors.collect(ros.propertyValidator('listenerId', ros.validateString)(properties.listenerId));
    return errors.wrap('supplied properties not correct for "RosRuleProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ALB::Rule` resource
 *
 * @param properties - the TypeScript properties of a `RosRuleProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ALB::Rule` resource.
 */
// @ts-ignore TS6133
function rosRulePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosRulePropsValidator(properties).assertSuccess();
    }
    return {
      ListenerId: ros.stringToRosTemplate(properties.listenerId),
      Priority: ros.numberToRosTemplate(properties.priority),
      RuleActions: ros.listMapper(rosRuleRuleActionsPropertyToRosTemplate)(properties.ruleActions),
      RuleConditions: ros.listMapper(rosRuleRuleConditionsPropertyToRosTemplate)(properties.ruleConditions),
      RuleName: ros.stringToRosTemplate(properties.ruleName),
      Direction: ros.stringToRosTemplate(properties.direction),
    };
}

/**
 * A ROS template type:  `ALIYUN::ALB::Rule`
 */
export class RosRule extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ALB::Rule";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute RuleId: The ID of the forwarding rules.
     */
    public readonly attrRuleId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property listenerId: The ID of the listener that is configured for the Application Load Balancer (ALB)
     * instance.
     */
    public listenerId: string | ros.IResolvable;

    /**
     * @Property priority: The priority of the forwarding rule. Valid values: 1 to 10000. A lower value specifies a higher priority.
     * Note The priority of each forwarding rule within a listener must be unique.
     */
    public priority: number | ros.IResolvable;

    /**
     * @Property ruleActions: The actions of the forwarding rule.
     */
    public ruleActions: Array<RosRule.RuleActionsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property ruleConditions: The conditions of the forwarding rule.
     */
    public ruleConditions: Array<RosRule.RuleConditionsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property ruleName: The name of the forwarding rule.
     * The name must be 2 to 128 characters in length.
     * It can contain letters, digits, periods (.), underscores (_), and hyphens (-). It
     * must start with a letter.
     */
    public ruleName: string | ros.IResolvable;

    /**
     * @Property direction: Rule direction. Valid values: Request or Response.
     */
    public direction: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::ALB::Rule`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosRuleProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosRule.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrRuleId = this.getAtt('RuleId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.listenerId = props.listenerId;
        this.priority = props.priority;
        this.ruleActions = props.ruleActions;
        this.ruleConditions = props.ruleConditions;
        this.ruleName = props.ruleName;
        this.direction = props.direction;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            listenerId: this.listenerId,
            priority: this.priority,
            ruleActions: this.ruleActions,
            ruleConditions: this.ruleConditions,
            ruleName: this.ruleName,
            direction: this.direction,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosRulePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosRule {
    /**
     * @stability external
     */
    export interface CookieConfigProperty {
        /**
         * @Property values: Cookie values
         */
        readonly values?: Array<RosRule.ValuesProperty | ros.IResolvable> | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `CookieConfigProperty`
 *
 * @param properties - the TypeScript properties of a `CookieConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosRule_CookieConfigPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('values', ros.listValidator(RosRule_ValuesPropertyValidator))(properties.values));
    return errors.wrap('supplied properties not correct for "CookieConfigProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ALB::Rule.CookieConfig` resource
 *
 * @param properties - the TypeScript properties of a `CookieConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ALB::Rule.CookieConfig` resource.
 */
// @ts-ignore TS6133
function rosRuleCookieConfigPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosRule_CookieConfigPropertyValidator(properties).assertSuccess();
    return {
      Values: ros.listMapper(rosRuleValuesPropertyToRosTemplate)(properties.values),
    };
}

export namespace RosRule {
    /**
     * @stability external
     */
    export interface FixedResponseConfigProperty {
        /**
         * @Property httpCode: The HTTP status code of the response. Valid values: HTTP_2xx, HTTP_4xx, and HTTP_5xx. x is a digit.
         */
        readonly httpCode?: string | ros.IResolvable;
        /**
         * @Property contentType: The format of the content.
     * Valid values: text/plain, text/css, text/html, application/javascript, and application/json.
         */
        readonly contentType?: string | ros.IResolvable;
        /**
         * @Property content: The content of the fixed response. The content cannot exceed 1 KB in size, and can
     * contain only ASCII characters.
         */
        readonly content?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `FixedResponseConfigProperty`
 *
 * @param properties - the TypeScript properties of a `FixedResponseConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosRule_FixedResponseConfigPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('httpCode', ros.validateString)(properties.httpCode));
    if(properties.contentType && (typeof properties.contentType) !== 'object') {
        errors.collect(ros.propertyValidator('contentType', ros.validateAllowedValues)({
          data: properties.contentType,
          allowedValues: ["text/plain","text/css","text/html","application/javascript","application/json"],
        }));
    }
    errors.collect(ros.propertyValidator('contentType', ros.validateString)(properties.contentType));
    errors.collect(ros.propertyValidator('content', ros.validateString)(properties.content));
    return errors.wrap('supplied properties not correct for "FixedResponseConfigProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ALB::Rule.FixedResponseConfig` resource
 *
 * @param properties - the TypeScript properties of a `FixedResponseConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ALB::Rule.FixedResponseConfig` resource.
 */
// @ts-ignore TS6133
function rosRuleFixedResponseConfigPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosRule_FixedResponseConfigPropertyValidator(properties).assertSuccess();
    return {
      HttpCode: ros.stringToRosTemplate(properties.httpCode),
      ContentType: ros.stringToRosTemplate(properties.contentType),
      Content: ros.stringToRosTemplate(properties.content),
    };
}

export namespace RosRule {
    /**
     * @stability external
     */
    export interface ForwardGroupConfigProperty {
        /**
         * @Property serverGroupTuples: The list of server groups to which requests are forwarded.
         */
        readonly serverGroupTuples?: Array<RosRule.ServerGroupTuplesProperty | ros.IResolvable> | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `ForwardGroupConfigProperty`
 *
 * @param properties - the TypeScript properties of a `ForwardGroupConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosRule_ForwardGroupConfigPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('serverGroupTuples', ros.listValidator(RosRule_ServerGroupTuplesPropertyValidator))(properties.serverGroupTuples));
    return errors.wrap('supplied properties not correct for "ForwardGroupConfigProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ALB::Rule.ForwardGroupConfig` resource
 *
 * @param properties - the TypeScript properties of a `ForwardGroupConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ALB::Rule.ForwardGroupConfig` resource.
 */
// @ts-ignore TS6133
function rosRuleForwardGroupConfigPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosRule_ForwardGroupConfigPropertyValidator(properties).assertSuccess();
    return {
      ServerGroupTuples: ros.listMapper(rosRuleServerGroupTuplesPropertyToRosTemplate)(properties.serverGroupTuples),
    };
}

export namespace RosRule {
    /**
     * @stability external
     */
    export interface HeaderConfigProperty {
        /**
         * @Property values: The values of the header. The header values within a forwarding rule must be unique.
     * The value must be 1 to 128 characters in length.
     * It can contain asterisks (*), question marks (?), and other printable characters from ASCII code 32 to 127 (ch >= 32 && ch < 127).
     * The value cannot start or end with a space character.
         */
        readonly values?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property key: The key of the header.
     * The key must be 1 to 40 characters in length
     * It can contain letters, digits, hyphens (-), and underscores (_).
     * Cookie or Host is not supported.
         */
        readonly key?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `HeaderConfigProperty`
 *
 * @param properties - the TypeScript properties of a `HeaderConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosRule_HeaderConfigPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('values', ros.listValidator(ros.validateString))(properties.values));
    if(properties.key && (typeof properties.key) !== 'object') {
        errors.collect(ros.propertyValidator('key', ros.validateAllowedPattern)({
          data: properties.key,
          reg: /[-a-z0-9_]{1,40}/
        }));
    }
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "HeaderConfigProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ALB::Rule.HeaderConfig` resource
 *
 * @param properties - the TypeScript properties of a `HeaderConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ALB::Rule.HeaderConfig` resource.
 */
// @ts-ignore TS6133
function rosRuleHeaderConfigPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosRule_HeaderConfigPropertyValidator(properties).assertSuccess();
    return {
      Values: ros.listMapper(ros.stringToRosTemplate)(properties.values),
      Key: ros.stringToRosTemplate(properties.key),
    };
}

export namespace RosRule {
    /**
     * @stability external
     */
    export interface HostConfigProperty {
        /**
         * @Property values: The host name. A forwarding rule can contain only one host name. The host names must be unique.
     * The host name must be 3 to 128 characters in length, and can contain lowercase letters, digits, hyphens (-), periods (.), asterisks (*), and question marks (?).
     * The host name must contain at least one period (.). It cannot start or end with a period (.).
     * The rightmost field can contain only letters and wildcard characters. It cannot contain digits or hyphens (-).
     * The domain labels cannot start or end with hyphens (-). You can include an asterisk (*) and question mark (?) anywhere in a domain label.
         */
        readonly values?: Array<string | ros.IResolvable> | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `HostConfigProperty`
 *
 * @param properties - the TypeScript properties of a `HostConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosRule_HostConfigPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('values', ros.listValidator(ros.validateString))(properties.values));
    return errors.wrap('supplied properties not correct for "HostConfigProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ALB::Rule.HostConfig` resource
 *
 * @param properties - the TypeScript properties of a `HostConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ALB::Rule.HostConfig` resource.
 */
// @ts-ignore TS6133
function rosRuleHostConfigPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosRule_HostConfigPropertyValidator(properties).assertSuccess();
    return {
      Values: ros.listMapper(ros.stringToRosTemplate)(properties.values),
    };
}

export namespace RosRule {
    /**
     * @stability external
     */
    export interface InsertHeaderConfigProperty {
        /**
         * @Property valueType: The type of the content. Valid values:
     * UserDefined: user-defined.
     * ReferenceHeader: references one of the request headers.
     * SystemDefined: system-defined.
         */
        readonly valueType?: string | ros.IResolvable;
        /**
         * @Property value: The content of the header to be inserted.
     * If ValueType is set to SystemDefined, you can set the value to:
     * ClientSrcPort: the port of the client.
     * ClientSrcIp: the IP address of the client.
     * Protocol: the request protocol (HTTP or HTTPS)
     * SLBId: the ID of the ALB instance.
     * SLBPort: the listening port of the ALB instance.
     * If ValueType is set to UserDefined, you can customize the content of the header. The content must be 1 to 128 characters in length, and can contain asterisks (*) and question marks (?). 
     * It can also contain printable characters from ASCII code 32 to 127 (ch >= 32 && ch < 127). The header content cannot start or end with a space character.
     * If ValueType is set to ReferenceHeader, you can reference one of the request headers. The header content must be 1 to 128 characters 
     * in length, and can contain lowercase letters, digits, underscores (_), and hyphens (-).
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: The key of the response header.
     * The key must be 1 to 40 characters in length.
     * It can contain letters, digits, underscores (_), and hyphens (-).
     * The header names specified by InsertHeaderConfig must be unique.
     * Note You cannot set the name of the header to one of the following values (case-insensitive): 
     * slb-id, slb-ip, x-forwarded-for, x-forwarded-proto, x-forwarded-eip, x-forwarded-port, x-forwarded-client-srcport, connection, upgrade, content-length, transfer-encoding, keep-alive, te, host, cookie, remoteip, and authority.
         */
        readonly key?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `InsertHeaderConfigProperty`
 *
 * @param properties - the TypeScript properties of a `InsertHeaderConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosRule_InsertHeaderConfigPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.valueType && (typeof properties.valueType) !== 'object') {
        errors.collect(ros.propertyValidator('valueType', ros.validateAllowedValues)({
          data: properties.valueType,
          allowedValues: ["ReferenceHeader","SystemDefined","UserDefined"],
        }));
    }
    errors.collect(ros.propertyValidator('valueType', ros.validateString)(properties.valueType));
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    if(properties.key && (typeof properties.key) !== 'object') {
        errors.collect(ros.propertyValidator('key', ros.validateAllowedPattern)({
          data: properties.key,
          reg: /[-a-z0-9_]{1,40}/
        }));
    }
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "InsertHeaderConfigProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ALB::Rule.InsertHeaderConfig` resource
 *
 * @param properties - the TypeScript properties of a `InsertHeaderConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ALB::Rule.InsertHeaderConfig` resource.
 */
// @ts-ignore TS6133
function rosRuleInsertHeaderConfigPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosRule_InsertHeaderConfigPropertyValidator(properties).assertSuccess();
    return {
      ValueType: ros.stringToRosTemplate(properties.valueType),
      Value: ros.stringToRosTemplate(properties.value),
      Key: ros.stringToRosTemplate(properties.key),
    };
}

export namespace RosRule {
    /**
     * @stability external
     */
    export interface MethodConfigProperty {
        /**
         * @Property values: The request method.
         */
        readonly values?: Array<string | ros.IResolvable> | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `MethodConfigProperty`
 *
 * @param properties - the TypeScript properties of a `MethodConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosRule_MethodConfigPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('values', ros.listValidator(ros.validateString))(properties.values));
    return errors.wrap('supplied properties not correct for "MethodConfigProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ALB::Rule.MethodConfig` resource
 *
 * @param properties - the TypeScript properties of a `MethodConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ALB::Rule.MethodConfig` resource.
 */
// @ts-ignore TS6133
function rosRuleMethodConfigPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosRule_MethodConfigPropertyValidator(properties).assertSuccess();
    return {
      Values: ros.listMapper(ros.stringToRosTemplate)(properties.values),
    };
}

export namespace RosRule {
    /**
     * @stability external
     */
    export interface PathConfigProperty {
        /**
         * @Property values: The path of the URL.
         */
        readonly values?: Array<string | ros.IResolvable> | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `PathConfigProperty`
 *
 * @param properties - the TypeScript properties of a `PathConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosRule_PathConfigPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('values', ros.listValidator(ros.validateString))(properties.values));
    return errors.wrap('supplied properties not correct for "PathConfigProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ALB::Rule.PathConfig` resource
 *
 * @param properties - the TypeScript properties of a `PathConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ALB::Rule.PathConfig` resource.
 */
// @ts-ignore TS6133
function rosRulePathConfigPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosRule_PathConfigPropertyValidator(properties).assertSuccess();
    return {
      Values: ros.listMapper(ros.stringToRosTemplate)(properties.values),
    };
}

export namespace RosRule {
    /**
     * @stability external
     */
    export interface QueryStringConfigProperty {
        /**
         * @Property values: The list of query strings.
         */
        readonly values?: Array<RosRule.QueryStringConfigValuesProperty | ros.IResolvable> | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `QueryStringConfigProperty`
 *
 * @param properties - the TypeScript properties of a `QueryStringConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosRule_QueryStringConfigPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('values', ros.listValidator(RosRule_QueryStringConfigValuesPropertyValidator))(properties.values));
    return errors.wrap('supplied properties not correct for "QueryStringConfigProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ALB::Rule.QueryStringConfig` resource
 *
 * @param properties - the TypeScript properties of a `QueryStringConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ALB::Rule.QueryStringConfig` resource.
 */
// @ts-ignore TS6133
function rosRuleQueryStringConfigPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosRule_QueryStringConfigPropertyValidator(properties).assertSuccess();
    return {
      Values: ros.listMapper(rosRuleQueryStringConfigValuesPropertyToRosTemplate)(properties.values),
    };
}

export namespace RosRule {
    /**
     * @stability external
     */
    export interface QueryStringConfigValuesProperty {
        /**
         * @Property value: The value of the cookie.
     * The key must be 1 to 128 characters in length.
     * It can contain lowercase letters, asterisks (*), question marks (?), and other printable characters. It cannot contain uppercase letters, space characters, or the following special characters: # [ ] { } \ | < > &.
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: They key of the query string.
     * The key must be 1 to 100 characters in length
     * It can contain asterisks (*), question marks (?), and other printable characters. It cannot contain uppercase letters.
     * The key cannot contain space characters or the following special characters: ; # [ ] { } \ | < > &.
         */
        readonly key?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `QueryStringConfigValuesProperty`
 *
 * @param properties - the TypeScript properties of a `QueryStringConfigValuesProperty`
 *
 * @returns the result of the validation.
 */
function RosRule_QueryStringConfigValuesPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "QueryStringConfigValuesProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ALB::Rule.QueryStringConfigValues` resource
 *
 * @param properties - the TypeScript properties of a `QueryStringConfigValuesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ALB::Rule.QueryStringConfigValues` resource.
 */
// @ts-ignore TS6133
function rosRuleQueryStringConfigValuesPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosRule_QueryStringConfigValuesPropertyValidator(properties).assertSuccess();
    return {
      Value: ros.stringToRosTemplate(properties.value),
      Key: ros.stringToRosTemplate(properties.key),
    };
}

export namespace RosRule {
    /**
     * @stability external
     */
    export interface RedirectConfigProperty {
        /**
         * @Property path: The path of the URL to which requests are redirected. Valid values:
     * Default value: ${path}. ${host}, ${protocol}, and ${port} are also supported. Each variable can be specified only once. You can specify one
     * or more of the preceding variables in each request. You can also combine them with
     * the following characters.
     * To customize the path, make sure that the following requirements are met:
     * The path must be 1 to 128 characters in length.
     * It must start with a forward slash (/). The path can contain letters, digits, and
     * the following special characters: $ - _ .+ / & ~ @ :. It cannot contain the following special characters: " % # ; ! ( ) [ ]^ , ". It can also contain asterisks (*) and question marks (?) as wildcard characters.
     * The value is case-sensitive.
         */
        readonly path?: string | ros.IResolvable;
        /**
         * @Property httpCode: The redirect type. Valid values: 301, 302, 303, 307, and 308.
         */
        readonly httpCode?: number | ros.IResolvable;
        /**
         * @Property query: The query string of the URL to which requests are redirected.
     * Default value: ${query}. ${host}, ${protocol}, and ${port} are also supported. Each variable can be specified only once. You can specify one
     * or more of the preceding variables in each request. You can also combine them with
     * the following characters.
     * To customize the query string, make sure that the following requirements are met:
     * The value must be 1 to 128 characters in length.
     * It can contain printable characters. It cannot contain space characters or the following
     * special characters: # [ ] { } \ | < > &. It cannot contain uppercase letters.
         */
        readonly query?: string | ros.IResolvable;
        /**
         * @Property port: The port to which requests are redirected.
     * ${port} (default): If you set the value to ${port}, you cannot add other characters to the
     * value.
     * You can also enter a port number. Valid values: 1 to 63335.
         */
        readonly port?: string | ros.IResolvable;
        /**
         * @Property host: The host name to which requests are redirected. Valid values:
     * ${host} (default): If you set the value to ${host}, you cannot add other characters to the
     * value.
     * To customize the host name, make sure that the following requirements are met:
     * The host name must be 3 to 128 characters in length, and can contain lowercase letters,
     * digits, hyphens (-), periods (.), asterisks (*), and question marks (?).
     * The host name must contain at least one period (.). It cannot start or end with a
     * period (.).
     * The rightmost field can contain only letters and wildcard characters. It cannot contain
     * digits or hyphens (-).
     * The domain labels cannot start or end with hyphens (-). You can include an asterisk
     * (*) and question mark (?) anywhere in a domain label.
         */
        readonly host?: string | ros.IResolvable;
        /**
         * @Property protocol: The redirect protocol.
     * ${protocol} (default): If you set the value to ${protocol}, you cannot add other characters to
     * the value.
     * You can also set the value to HTTP or HTTPS.
     * Note HTTPS listeners do not support HTTPS to HTTP redirection.
         */
        readonly protocol?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `RedirectConfigProperty`
 *
 * @param properties - the TypeScript properties of a `RedirectConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosRule_RedirectConfigPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('path', ros.validateString)(properties.path));
    if(properties.httpCode && (typeof properties.httpCode) !== 'object') {
        errors.collect(ros.propertyValidator('httpCode', ros.validateAllowedValues)({
          data: properties.httpCode,
          allowedValues: [301,302,303,307,308],
        }));
    }
    errors.collect(ros.propertyValidator('httpCode', ros.validateNumber)(properties.httpCode));
    errors.collect(ros.propertyValidator('query', ros.validateString)(properties.query));
    errors.collect(ros.propertyValidator('port', ros.validateString)(properties.port));
    errors.collect(ros.propertyValidator('host', ros.validateString)(properties.host));
    errors.collect(ros.propertyValidator('protocol', ros.validateString)(properties.protocol));
    return errors.wrap('supplied properties not correct for "RedirectConfigProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ALB::Rule.RedirectConfig` resource
 *
 * @param properties - the TypeScript properties of a `RedirectConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ALB::Rule.RedirectConfig` resource.
 */
// @ts-ignore TS6133
function rosRuleRedirectConfigPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosRule_RedirectConfigPropertyValidator(properties).assertSuccess();
    return {
      Path: ros.stringToRosTemplate(properties.path),
      HttpCode: ros.numberToRosTemplate(properties.httpCode),
      Query: ros.stringToRosTemplate(properties.query),
      Port: ros.stringToRosTemplate(properties.port),
      Host: ros.stringToRosTemplate(properties.host),
      Protocol: ros.stringToRosTemplate(properties.protocol),
    };
}

export namespace RosRule {
    /**
     * @stability external
     */
    export interface ResponseHeaderConfigProperty {
        /**
         * @Property values: The values of the header.
         */
        readonly values?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property key: The key of the header.
     * The key must be 1 to 40 characters in length
     * It can contain letters, digits, hyphens (-), and underscores (_).
     * Cookie or Host is not supported.
         */
        readonly key?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `ResponseHeaderConfigProperty`
 *
 * @param properties - the TypeScript properties of a `ResponseHeaderConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosRule_ResponseHeaderConfigPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('values', ros.listValidator(ros.validateString))(properties.values));
    if(properties.key && (typeof properties.key) !== 'object') {
        errors.collect(ros.propertyValidator('key', ros.validateAllowedPattern)({
          data: properties.key,
          reg: /[-a-z0-9_]{1,40}/
        }));
    }
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "ResponseHeaderConfigProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ALB::Rule.ResponseHeaderConfig` resource
 *
 * @param properties - the TypeScript properties of a `ResponseHeaderConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ALB::Rule.ResponseHeaderConfig` resource.
 */
// @ts-ignore TS6133
function rosRuleResponseHeaderConfigPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosRule_ResponseHeaderConfigPropertyValidator(properties).assertSuccess();
    return {
      Values: ros.listMapper(ros.stringToRosTemplate)(properties.values),
      Key: ros.stringToRosTemplate(properties.key),
    };
}

export namespace RosRule {
    /**
     * @stability external
     */
    export interface RewriteConfigProperty {
        /**
         * @Property path: The path to jump. Valid values:
     * Default value: ${path}. ${host}, ${protocol}, and ${port} are also supported. Each variable can be specified only once. You can specify one
     * or more of the preceding variables in each request. You can also combine them with
     * the following characters.
     * To customize the path, make sure that the following requirements are met:
     * The path must be 1 to 128 characters in length.
     * It must start with a forward slash (/). The path can contain letters, digits, and
     * the following special characters: $ - _ .+ / & ~ @ :. It cannot contain the following special characters: " % # ; ! ( ) [ ]^ , ". It can also contain asterisks (*) and question marks (?) as wildcard characters.
     * The value is case-sensitive.
         */
        readonly path?: string | ros.IResolvable;
        /**
         * @Property query: Query string for internal jump.
     * Default value: ${query}. ${host}, ${protocol}, and ${port} are also supported. Each variable can be specified only once. You can specify one
     * or more of the preceding variables in each request. You can also combine them with
     * the following characters.
     * To customize the query string, make sure that the following requirements are met:
     * The value must be 1 to 128 characters in length.
     * It can contain printable characters. It cannot contain space characters or the following
     * special characters: # [ ] { } \ | < > &. It cannot contain uppercase letters.
         */
        readonly query?: string | ros.IResolvable;
        /**
         * @Property host: Destination host address of internal jump. Valid values:
     * ${host} (default): If you set the value to ${host}, you cannot add other characters to the
     * value.
     * To customize the host name, make sure that the following requirements are met:
     * The host name must be 3 to 128 characters in length, and can contain lowercase letters,
     * digits, hyphens (-), periods (.), asterisks (*), and question marks (?).
     * The host name must contain at least one period (.). It cannot start or end with a
     * period (.).
     * The rightmost field can contain only letters and wildcard characters. It cannot contain
     * digits or hyphens (-).
     * The domain labels cannot start or end with hyphens (-). You can include an asterisk
     * (*) and question mark (?) anywhere in a domain label.
         */
        readonly host?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `RewriteConfigProperty`
 *
 * @param properties - the TypeScript properties of a `RewriteConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosRule_RewriteConfigPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('path', ros.validateString)(properties.path));
    errors.collect(ros.propertyValidator('query', ros.validateString)(properties.query));
    errors.collect(ros.propertyValidator('host', ros.validateString)(properties.host));
    return errors.wrap('supplied properties not correct for "RewriteConfigProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ALB::Rule.RewriteConfig` resource
 *
 * @param properties - the TypeScript properties of a `RewriteConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ALB::Rule.RewriteConfig` resource.
 */
// @ts-ignore TS6133
function rosRuleRewriteConfigPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosRule_RewriteConfigPropertyValidator(properties).assertSuccess();
    return {
      Path: ros.stringToRosTemplate(properties.path),
      Query: ros.stringToRosTemplate(properties.query),
      Host: ros.stringToRosTemplate(properties.host),
    };
}

export namespace RosRule {
    /**
     * @stability external
     */
    export interface RuleActionsProperty {
        /**
         * @Property order: The priority of the action. Valid values: 1 to 50000. A lower value specifies a higher priority. The actions specified in a forwarding
     * rule are applied in descending order of priority. This parameter is required. The
     * priority of each action within a forwarding rule is unique.
         */
        readonly order: number | ros.IResolvable;
        /**
         * @Property fixedResponseConfig: The configuration of the fixed response.
         */
        readonly fixedResponseConfig?: RosRule.FixedResponseConfigProperty | ros.IResolvable;
        /**
         * @Property type: The action. Valid values:
     * ForwardGroup: forwards a request to multiple vServer groups.
     * Redirect: redirects a request.
     * FixedResponse: returns a fixed response.
     * Rewrite: rewrites a request.
     * InsertHeader: adds a header to a request.
     * The type of the action. You can specify the last action and the actions 
     * that you want to perform before the last action: 
     * FinalType: the last action that you want to perform in a forwarding rule. Each forwarding rule can contain only one FinalType action. 
     * You can specify a ForwardGroup, Redirect, or FixedResponse action as the FinalType action.
     * ExtType: the action or the actions to be performed before the FinalType action. A forwarding rule can contain one or more ExtType actions. 
     * To specify this parameter, you must also specify FinalType. You can specify multiple InsertHeader actions or one Rewrite action.
         */
        readonly type: string | ros.IResolvable;
        /**
         * @Property redirectConfig: The configuration of the external redirect action.
         */
        readonly redirectConfig?: RosRule.RedirectConfigProperty | ros.IResolvable;
        /**
         * @Property forwardGroupConfig: The configuration of the server group.
         */
        readonly forwardGroupConfig?: RosRule.ForwardGroupConfigProperty | ros.IResolvable;
        /**
         * @Property insertHeaderConfig: The configuration of the header to be inserted.
         */
        readonly insertHeaderConfig?: RosRule.InsertHeaderConfigProperty | ros.IResolvable;
        /**
         * @Property rewriteConfig: The configuration of the internal redirect action.
         */
        readonly rewriteConfig?: RosRule.RewriteConfigProperty | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `RuleActionsProperty`
 *
 * @param properties - the TypeScript properties of a `RuleActionsProperty`
 *
 * @returns the result of the validation.
 */
function RosRule_RuleActionsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('order', ros.requiredValidator)(properties.order));
    if(properties.order && (typeof properties.order) !== 'object') {
        errors.collect(ros.propertyValidator('order', ros.validateRange)({
            data: properties.order,
            min: 1,
            max: 50000,
          }));
    }
    errors.collect(ros.propertyValidator('order', ros.validateNumber)(properties.order));
    errors.collect(ros.propertyValidator('fixedResponseConfig', RosRule_FixedResponseConfigPropertyValidator)(properties.fixedResponseConfig));
    errors.collect(ros.propertyValidator('type', ros.requiredValidator)(properties.type));
    if(properties.type && (typeof properties.type) !== 'object') {
        errors.collect(ros.propertyValidator('type', ros.validateAllowedValues)({
          data: properties.type,
          allowedValues: ["ForwardGroup","Redirect","FixedResponse","Rewrite","InsertHeader"],
        }));
    }
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('redirectConfig', RosRule_RedirectConfigPropertyValidator)(properties.redirectConfig));
    errors.collect(ros.propertyValidator('forwardGroupConfig', RosRule_ForwardGroupConfigPropertyValidator)(properties.forwardGroupConfig));
    errors.collect(ros.propertyValidator('insertHeaderConfig', RosRule_InsertHeaderConfigPropertyValidator)(properties.insertHeaderConfig));
    errors.collect(ros.propertyValidator('rewriteConfig', RosRule_RewriteConfigPropertyValidator)(properties.rewriteConfig));
    return errors.wrap('supplied properties not correct for "RuleActionsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ALB::Rule.RuleActions` resource
 *
 * @param properties - the TypeScript properties of a `RuleActionsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ALB::Rule.RuleActions` resource.
 */
// @ts-ignore TS6133
function rosRuleRuleActionsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosRule_RuleActionsPropertyValidator(properties).assertSuccess();
    return {
      Order: ros.numberToRosTemplate(properties.order),
      FixedResponseConfig: rosRuleFixedResponseConfigPropertyToRosTemplate(properties.fixedResponseConfig),
      Type: ros.stringToRosTemplate(properties.type),
      RedirectConfig: rosRuleRedirectConfigPropertyToRosTemplate(properties.redirectConfig),
      ForwardGroupConfig: rosRuleForwardGroupConfigPropertyToRosTemplate(properties.forwardGroupConfig),
      InsertHeaderConfig: rosRuleInsertHeaderConfigPropertyToRosTemplate(properties.insertHeaderConfig),
      RewriteConfig: rosRuleRewriteConfigPropertyToRosTemplate(properties.rewriteConfig),
    };
}

export namespace RosRule {
    /**
     * @stability external
     */
    export interface RuleConditionsProperty {
        /**
         * @Property methodConfig: The configuration of the request method.
         */
        readonly methodConfig?: RosRule.MethodConfigProperty | ros.IResolvable;
        /**
         * @Property pathConfig: The configuration of the URL.
         */
        readonly pathConfig?: RosRule.PathConfigProperty | ros.IResolvable;
        /**
         * @Property type: The type of the forwarding rule. Valid values:
     * Host: Requests are forwarded based on hosts.
     * Path: Requests are forwarded based on paths.
     * Header: Requests are forwarded based on HTTP headers.
     * QueryString: Requests are forwarded based on query strings.
     * Method: Request are forwarded based on request methods.
     * Cookie: Request are forwarded based on cookies.
         */
        readonly type: string | ros.IResolvable;
        /**
         * @Property responseHeaderConfig: The configuration of header.
         */
        readonly responseHeaderConfig?: RosRule.ResponseHeaderConfigProperty | ros.IResolvable;
        /**
         * @Property queryStringConfig: The configuration of the query string.
         */
        readonly queryStringConfig?: RosRule.QueryStringConfigProperty | ros.IResolvable;
        /**
         * @Property hostConfig: The configuration of the host.
         */
        readonly hostConfig?: RosRule.HostConfigProperty | ros.IResolvable;
        /**
         * @Property cookieConfig: The configuration of the cookie.
         */
        readonly cookieConfig?: RosRule.CookieConfigProperty | ros.IResolvable;
        /**
         * @Property headerConfig: The configuration of the header.
         */
        readonly headerConfig?: RosRule.HeaderConfigProperty | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `RuleConditionsProperty`
 *
 * @param properties - the TypeScript properties of a `RuleConditionsProperty`
 *
 * @returns the result of the validation.
 */
function RosRule_RuleConditionsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('methodConfig', RosRule_MethodConfigPropertyValidator)(properties.methodConfig));
    errors.collect(ros.propertyValidator('pathConfig', RosRule_PathConfigPropertyValidator)(properties.pathConfig));
    errors.collect(ros.propertyValidator('type', ros.requiredValidator)(properties.type));
    if(properties.type && (typeof properties.type) !== 'object') {
        errors.collect(ros.propertyValidator('type', ros.validateAllowedValues)({
          data: properties.type,
          allowedValues: ["Cookie","Header","Host","Method","Path","QueryString"],
        }));
    }
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('responseHeaderConfig', RosRule_ResponseHeaderConfigPropertyValidator)(properties.responseHeaderConfig));
    errors.collect(ros.propertyValidator('queryStringConfig', RosRule_QueryStringConfigPropertyValidator)(properties.queryStringConfig));
    errors.collect(ros.propertyValidator('hostConfig', RosRule_HostConfigPropertyValidator)(properties.hostConfig));
    errors.collect(ros.propertyValidator('cookieConfig', RosRule_CookieConfigPropertyValidator)(properties.cookieConfig));
    errors.collect(ros.propertyValidator('headerConfig', RosRule_HeaderConfigPropertyValidator)(properties.headerConfig));
    return errors.wrap('supplied properties not correct for "RuleConditionsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ALB::Rule.RuleConditions` resource
 *
 * @param properties - the TypeScript properties of a `RuleConditionsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ALB::Rule.RuleConditions` resource.
 */
// @ts-ignore TS6133
function rosRuleRuleConditionsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosRule_RuleConditionsPropertyValidator(properties).assertSuccess();
    return {
      MethodConfig: rosRuleMethodConfigPropertyToRosTemplate(properties.methodConfig),
      PathConfig: rosRulePathConfigPropertyToRosTemplate(properties.pathConfig),
      Type: ros.stringToRosTemplate(properties.type),
      ResponseHeaderConfig: rosRuleResponseHeaderConfigPropertyToRosTemplate(properties.responseHeaderConfig),
      QueryStringConfig: rosRuleQueryStringConfigPropertyToRosTemplate(properties.queryStringConfig),
      HostConfig: rosRuleHostConfigPropertyToRosTemplate(properties.hostConfig),
      CookieConfig: rosRuleCookieConfigPropertyToRosTemplate(properties.cookieConfig),
      HeaderConfig: rosRuleHeaderConfigPropertyToRosTemplate(properties.headerConfig),
    };
}

export namespace RosRule {
    /**
     * @stability external
     */
    export interface ServerGroupTuplesProperty {
        /**
         * @Property serverGroupId: The server group to which requests are forwarded.
         */
        readonly serverGroupId?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `ServerGroupTuplesProperty`
 *
 * @param properties - the TypeScript properties of a `ServerGroupTuplesProperty`
 *
 * @returns the result of the validation.
 */
function RosRule_ServerGroupTuplesPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('serverGroupId', ros.validateString)(properties.serverGroupId));
    return errors.wrap('supplied properties not correct for "ServerGroupTuplesProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ALB::Rule.ServerGroupTuples` resource
 *
 * @param properties - the TypeScript properties of a `ServerGroupTuplesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ALB::Rule.ServerGroupTuples` resource.
 */
// @ts-ignore TS6133
function rosRuleServerGroupTuplesPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosRule_ServerGroupTuplesPropertyValidator(properties).assertSuccess();
    return {
      ServerGroupId: ros.stringToRosTemplate(properties.serverGroupId),
    };
}

export namespace RosRule {
    /**
     * @stability external
     */
    export interface ValuesProperty {
        /**
         * @Property value: The value of the cookie.
     * The key must be 1 to 100 characters in length.
     * It can contain asterisks (*), question marks (?), and other printable characters. It cannot contain uppercase letters.
     * It cannot contain space characters or the following special characters: ; # [ ] { } \ | < > &.
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: The key of the cookie.
     * The key must be 1 to 100 characters in length
     * It can contain asterisks (*), question marks (?), and other printable characters. It cannot contain uppercase letters.
     * It cannot contain space characters or the following special characters: ; # [ ] { } \ | < > &.
         */
        readonly key?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `ValuesProperty`
 *
 * @param properties - the TypeScript properties of a `ValuesProperty`
 *
 * @returns the result of the validation.
 */
function RosRule_ValuesPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "ValuesProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ALB::Rule.Values` resource
 *
 * @param properties - the TypeScript properties of a `ValuesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ALB::Rule.Values` resource.
 */
// @ts-ignore TS6133
function rosRuleValuesPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosRule_ValuesPropertyValidator(properties).assertSuccess();
    return {
      Value: ros.stringToRosTemplate(properties.value),
      Key: ros.stringToRosTemplate(properties.key),
    };
}

/**
 * Properties for defining a `ALIYUN::ALB::ServerGroup`
 */
export interface RosServerGroupProps {

    /**
     * @Property healthCheckConfig: The configuration of health checks.
     */
    readonly healthCheckConfig: RosServerGroup.HealthCheckConfigProperty | ros.IResolvable;

    /**
     * @Property serverGroupName: The name of the server group. The name must be 2 to 128 characters in length, and
     * can contain letters, digits, periods (.), underscores (_), and hyphens (-). The name
     * must start with a letter.
     */
    readonly serverGroupName: string | ros.IResolvable;

    /**
     * @Property vpcId: The ID of the virtual private cloud (VPC). You can add only servers that are deployed
     * in the specified VPC to the server group.
     * Note This parameter is required if the ServerGroupType parameter is set to Instance or Ip.
     */
    readonly vpcId: string | ros.IResolvable;

    /**
     * @Property protocol: The server protocol. Valid values:
     * HTTP: allows you to associate HTTPS, HTTP, or QUIC listeners with backend servers. This
     * is the default value.
     * HTTPS: allows you to associate HTTPS listeners with backend servers.
     */
    readonly protocol?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property scheduler: The scheduling algorithm. Valid values:
     * Wrr: Backend servers that have higher weights receive more requests than those that have
     * lower weights. This is the default value.
     * Wlc: Requests are distributed based on the weight and load of each backend server. The
     * load refers to the number of connections to a backend server. If multiple backend
     * servers have the same weight, requests are routed to the backend server with the least
     * connections.
     * Sch: specifies consistent hashing that is based on source IP addresses.
     */
    readonly scheduler?: string | ros.IResolvable;

    /**
     * @Property serverGroupType: The type of the server group. Valid values:
     * Instance: a server group that consists of servers. You can add Elastic Compute Service (ECS)
     * instances, elastic network interfaces (ENIs), and elastic container instances to this
     * type of server group. This is the default value.
     * Ip: a server group that consists of IP addresses. You can add IP addresses to this type
     * of server group.
     */
    readonly serverGroupType?: string | ros.IResolvable;

    /**
     * @Property stickySessionConfig: The configuration of session persistence.
     * Note This parameter is required if the ServerGroupType parameter is set to Instance or Ip.
     */
    readonly stickySessionConfig?: RosServerGroup.StickySessionConfigProperty | ros.IResolvable;

    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosServerGroup.TagsProperty[];
}

/**
 * Determine whether the given properties match those of a `RosServerGroupProps`
 *
 * @param properties - the TypeScript properties of a `RosServerGroupProps`
 *
 * @returns the result of the validation.
 */
function RosServerGroupPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('vpcId', ros.requiredValidator)(properties.vpcId));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    if(properties.scheduler && (typeof properties.scheduler) !== 'object') {
        errors.collect(ros.propertyValidator('scheduler', ros.validateAllowedValues)({
          data: properties.scheduler,
          allowedValues: ["Sch","Wlc","Wrr"],
        }));
    }
    errors.collect(ros.propertyValidator('scheduler', ros.validateString)(properties.scheduler));
    errors.collect(ros.propertyValidator('stickySessionConfig', RosServerGroup_StickySessionConfigPropertyValidator)(properties.stickySessionConfig));
    errors.collect(ros.propertyValidator('healthCheckConfig', ros.requiredValidator)(properties.healthCheckConfig));
    errors.collect(ros.propertyValidator('healthCheckConfig', RosServerGroup_HealthCheckConfigPropertyValidator)(properties.healthCheckConfig));
    if(properties.protocol && (typeof properties.protocol) !== 'object') {
        errors.collect(ros.propertyValidator('protocol', ros.validateAllowedValues)({
          data: properties.protocol,
          allowedValues: ["HTTPS","HTTP"],
        }));
    }
    errors.collect(ros.propertyValidator('protocol', ros.validateString)(properties.protocol));
    if(properties.serverGroupType && (typeof properties.serverGroupType) !== 'object') {
        errors.collect(ros.propertyValidator('serverGroupType', ros.validateAllowedValues)({
          data: properties.serverGroupType,
          allowedValues: ["Ip","Instance"],
        }));
    }
    errors.collect(ros.propertyValidator('serverGroupType', ros.validateString)(properties.serverGroupType));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosServerGroup_TagsPropertyValidator))(properties.tags));
    errors.collect(ros.propertyValidator('serverGroupName', ros.requiredValidator)(properties.serverGroupName));
    errors.collect(ros.propertyValidator('serverGroupName', ros.validateString)(properties.serverGroupName));
    return errors.wrap('supplied properties not correct for "RosServerGroupProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ALB::ServerGroup` resource
 *
 * @param properties - the TypeScript properties of a `RosServerGroupProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ALB::ServerGroup` resource.
 */
// @ts-ignore TS6133
function rosServerGroupPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosServerGroupPropsValidator(properties).assertSuccess();
    }
    return {
      HealthCheckConfig: rosServerGroupHealthCheckConfigPropertyToRosTemplate(properties.healthCheckConfig),
      ServerGroupName: ros.stringToRosTemplate(properties.serverGroupName),
      VpcId: ros.stringToRosTemplate(properties.vpcId),
      Protocol: ros.stringToRosTemplate(properties.protocol),
      ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
      Scheduler: ros.stringToRosTemplate(properties.scheduler),
      ServerGroupType: ros.stringToRosTemplate(properties.serverGroupType),
      StickySessionConfig: rosServerGroupStickySessionConfigPropertyToRosTemplate(properties.stickySessionConfig),
      Tags: ros.listMapper(rosServerGroupTagsPropertyToRosTemplate)(properties.tags),
    };
}

/**
 * A ROS template type:  `ALIYUN::ALB::ServerGroup`
 */
export class RosServerGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ALB::ServerGroup";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute ServerGroupId: The ID of the server group.
     */
    public readonly attrServerGroupId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property healthCheckConfig: The configuration of health checks.
     */
    public healthCheckConfig: RosServerGroup.HealthCheckConfigProperty | ros.IResolvable;

    /**
     * @Property serverGroupName: The name of the server group. The name must be 2 to 128 characters in length, and
     * can contain letters, digits, periods (.), underscores (_), and hyphens (-). The name
     * must start with a letter.
     */
    public serverGroupName: string | ros.IResolvable;

    /**
     * @Property vpcId: The ID of the virtual private cloud (VPC). You can add only servers that are deployed
     * in the specified VPC to the server group.
     * Note This parameter is required if the ServerGroupType parameter is set to Instance or Ip.
     */
    public vpcId: string | ros.IResolvable;

    /**
     * @Property protocol: The server protocol. Valid values:
     * HTTP: allows you to associate HTTPS, HTTP, or QUIC listeners with backend servers. This
     * is the default value.
     * HTTPS: allows you to associate HTTPS listeners with backend servers.
     */
    public protocol: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property scheduler: The scheduling algorithm. Valid values:
     * Wrr: Backend servers that have higher weights receive more requests than those that have
     * lower weights. This is the default value.
     * Wlc: Requests are distributed based on the weight and load of each backend server. The
     * load refers to the number of connections to a backend server. If multiple backend
     * servers have the same weight, requests are routed to the backend server with the least
     * connections.
     * Sch: specifies consistent hashing that is based on source IP addresses.
     */
    public scheduler: string | ros.IResolvable | undefined;

    /**
     * @Property serverGroupType: The type of the server group. Valid values:
     * Instance: a server group that consists of servers. You can add Elastic Compute Service (ECS)
     * instances, elastic network interfaces (ENIs), and elastic container instances to this
     * type of server group. This is the default value.
     * Ip: a server group that consists of IP addresses. You can add IP addresses to this type
     * of server group.
     */
    public serverGroupType: string | ros.IResolvable | undefined;

    /**
     * @Property stickySessionConfig: The configuration of session persistence.
     * Note This parameter is required if the ServerGroupType parameter is set to Instance or Ip.
     */
    public stickySessionConfig: RosServerGroup.StickySessionConfigProperty | ros.IResolvable | undefined;

    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    public tags: RosServerGroup.TagsProperty[] | undefined;

    /**
     * Create a new `ALIYUN::ALB::ServerGroup`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosServerGroupProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosServerGroup.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrServerGroupId = this.getAtt('ServerGroupId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.healthCheckConfig = props.healthCheckConfig;
        this.serverGroupName = props.serverGroupName;
        this.vpcId = props.vpcId;
        this.protocol = props.protocol;
        this.resourceGroupId = props.resourceGroupId;
        this.scheduler = props.scheduler;
        this.serverGroupType = props.serverGroupType;
        this.stickySessionConfig = props.stickySessionConfig;
        this.tags = props.tags;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            healthCheckConfig: this.healthCheckConfig,
            serverGroupName: this.serverGroupName,
            vpcId: this.vpcId,
            protocol: this.protocol,
            resourceGroupId: this.resourceGroupId,
            scheduler: this.scheduler,
            serverGroupType: this.serverGroupType,
            stickySessionConfig: this.stickySessionConfig,
            tags: this.tags,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosServerGroupPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosServerGroup {
    /**
     * @stability external
     */
    export interface HealthCheckConfigProperty {
        /**
         * @Property healthCheckInterval: The time interval between two consecutive health checks. Unit: seconds.
     * Valid values: 1 to 50.
     * Default value: 2.
         */
        readonly healthCheckInterval?: number | ros.IResolvable;
        /**
         * @Property healthCheckConnectPort: The backend port that is used for health checks.
     * Valid values: 0 to 65535.
     * Default value: 0. This value indicates that the port on a backend server is used for health checks.
         */
        readonly healthCheckConnectPort?: number | ros.IResolvable;
        /**
         * @Property healthCheckCodes: The HTTP status code that indicates a successful health check. Multiple HTTP status
     * codes can be specified as a list.
     * Note This parameter is required only if the HealthCheckProtocol parameter is set to HTTP.
     * Valid values: http_2xx, http_3xx, http_4xx, and http_5xx. Default value: http_2xx.
         */
        readonly healthCheckCodes?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property unhealthyThreshold: The number of health checks that a healthy backend server must consecutively fail
     * before it is declared unhealthy. In this case, the health status is changed from success to fail.
     * Valid values: 2 to 10.
     * Default value: 3.
         */
        readonly unhealthyThreshold?: number | ros.IResolvable;
        /**
         * @Property healthCheckMethod: The HTTP method that is used for health checks. Valid values: GET and HEAD. Default value: HEAD.
         */
        readonly healthCheckMethod?: string | ros.IResolvable;
        /**
         * @Property healthCheckPath: The URL that is used for health checks.
     * The URL must be 1 to 80 characters in length, and can contain letters, digits, and
     * the following special characters:
     * - / .% ?# & =.
     * It can also contain the following extended characters:
     * _ ; ~ ! ( )* [ ] @ $ ^ : ' , +.
     * The URL must start with a forward slash (/).
     * Note This parameter is required only if the HealthCheckProtocol parameter is set to HTTP.
         */
        readonly healthCheckPath?: string | ros.IResolvable;
        /**
         * @Property healthCheckHost: The domain name that is used for health checks. The domain name must meet the following
     * requirements:
     * The domain name must be 1 to 80 characters in length.
     * The domain name can contain lowercase letters, digits, hyphens (-), and periods (.).
     * The domain name must contain at least one period (.),and cannot start or end with
     * a period (.).
     * The rightmost field can contain only letters, and cannot contain digits or hyphens
     * (-).
     * Other fields cannot start or end with a hyphen (-).
     * Note This parameter is required only if the HealthCheckProtocol parameter is set to HTTP.
         */
        readonly healthCheckHost?: string | ros.IResolvable;
        /**
         * @Property healthyThreshold: The number of health checks that an unhealthy backend server must consecutively pass
     * before it is declared healthy. In this case, the health status is changed from fail to success.
     * Valid values: 2 to 10.
     * Default value: 3.
         */
        readonly healthyThreshold?: number | ros.IResolvable;
        /**
         * @Property healthCheckProtocol: The protocol that is used for health checks. Valid values: HTTP and HTTPS.
         */
        readonly healthCheckProtocol?: string | ros.IResolvable;
        /**
         * @Property healthCheckHttpVersion: The version of the HTTP protocol. Valid values: HTTP1.0 and HTTP1.1. Default value: HTTP1.1.
     * Note This parameter is required only if the HealthCheckProtocol parameter is set to HTTP.
         */
        readonly healthCheckHttpVersion?: string | ros.IResolvable;
        /**
         * @Property healthCheckEnabled: Specifies whether to enable the health check feature. Valid values:
     * true: enables the feature.
     * false: disables the feature.
         */
        readonly healthCheckEnabled: boolean | ros.IResolvable;
        /**
         * @Property healthCheckTimeout: The timeout period of a health check. If a backend server does not respond within
     * the specified timeout period, the backend server fails the health check. Unit: seconds.
     * Valid values: 1 to 300.
     * Default value: 5.
     * Note If the value of the HealthCheckTimeout parameter is smaller than that of the HealthCheckInterval parameter, the timeout period specified by the HealthCheckTimeout parameter is ignored and the period of time specified by the HealthCheckInterval parameter is used as the timeout period.
         */
        readonly healthCheckTimeout?: number | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `HealthCheckConfigProperty`
 *
 * @param properties - the TypeScript properties of a `HealthCheckConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosServerGroup_HealthCheckConfigPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('healthCheckInterval', ros.validateNumber)(properties.healthCheckInterval));
    errors.collect(ros.propertyValidator('healthCheckConnectPort', ros.validateNumber)(properties.healthCheckConnectPort));
    errors.collect(ros.propertyValidator('healthCheckCodes', ros.listValidator(ros.validateString))(properties.healthCheckCodes));
    errors.collect(ros.propertyValidator('unhealthyThreshold', ros.validateNumber)(properties.unhealthyThreshold));
    errors.collect(ros.propertyValidator('healthCheckMethod', ros.validateString)(properties.healthCheckMethod));
    errors.collect(ros.propertyValidator('healthCheckPath', ros.validateString)(properties.healthCheckPath));
    errors.collect(ros.propertyValidator('healthCheckHost', ros.validateString)(properties.healthCheckHost));
    errors.collect(ros.propertyValidator('healthyThreshold', ros.validateNumber)(properties.healthyThreshold));
    if(properties.healthCheckProtocol && (typeof properties.healthCheckProtocol) !== 'object') {
        errors.collect(ros.propertyValidator('healthCheckProtocol', ros.validateAllowedValues)({
          data: properties.healthCheckProtocol,
          allowedValues: ["HTTP","HTTPS"],
        }));
    }
    errors.collect(ros.propertyValidator('healthCheckProtocol', ros.validateString)(properties.healthCheckProtocol));
    if(properties.healthCheckHttpVersion && (typeof properties.healthCheckHttpVersion) !== 'object') {
        errors.collect(ros.propertyValidator('healthCheckHttpVersion', ros.validateAllowedValues)({
          data: properties.healthCheckHttpVersion,
          allowedValues: ["HTTP1.0","HTTP1.1"],
        }));
    }
    errors.collect(ros.propertyValidator('healthCheckHttpVersion', ros.validateString)(properties.healthCheckHttpVersion));
    errors.collect(ros.propertyValidator('healthCheckEnabled', ros.requiredValidator)(properties.healthCheckEnabled));
    errors.collect(ros.propertyValidator('healthCheckEnabled', ros.validateBoolean)(properties.healthCheckEnabled));
    errors.collect(ros.propertyValidator('healthCheckTimeout', ros.validateNumber)(properties.healthCheckTimeout));
    return errors.wrap('supplied properties not correct for "HealthCheckConfigProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ALB::ServerGroup.HealthCheckConfig` resource
 *
 * @param properties - the TypeScript properties of a `HealthCheckConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ALB::ServerGroup.HealthCheckConfig` resource.
 */
// @ts-ignore TS6133
function rosServerGroupHealthCheckConfigPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosServerGroup_HealthCheckConfigPropertyValidator(properties).assertSuccess();
    return {
      HealthCheckInterval: ros.numberToRosTemplate(properties.healthCheckInterval),
      HealthCheckConnectPort: ros.numberToRosTemplate(properties.healthCheckConnectPort),
      HealthCheckCodes: ros.listMapper(ros.stringToRosTemplate)(properties.healthCheckCodes),
      UnhealthyThreshold: ros.numberToRosTemplate(properties.unhealthyThreshold),
      HealthCheckMethod: ros.stringToRosTemplate(properties.healthCheckMethod),
      HealthCheckPath: ros.stringToRosTemplate(properties.healthCheckPath),
      HealthCheckHost: ros.stringToRosTemplate(properties.healthCheckHost),
      HealthyThreshold: ros.numberToRosTemplate(properties.healthyThreshold),
      HealthCheckProtocol: ros.stringToRosTemplate(properties.healthCheckProtocol),
      HealthCheckHttpVersion: ros.stringToRosTemplate(properties.healthCheckHttpVersion),
      HealthCheckEnabled: ros.booleanToRosTemplate(properties.healthCheckEnabled),
      HealthCheckTimeout: ros.numberToRosTemplate(properties.healthCheckTimeout),
    };
}

export namespace RosServerGroup {
    /**
     * @stability external
     */
    export interface StickySessionConfigProperty {
        /**
         * @Property cookie: The cookie to be configured on the backend server.
     * The cookie must be 1 to 200 characters in length, and can contain ASCII characters
     * and digits. It cannot contain commas (,), semicolons (;), or spaces. It cannot start
     * with a dollar sign ($).
     * Note This parameter is required if the StickySessionEnabled parameter is set to true and the StickySessionType parameter is set to Server.
         */
        readonly cookie?: string | ros.IResolvable;
        /**
         * @Property cookieTimeout: The timeout period of the cookie. Unit: seconds.
     * Valid values: 1 to 86400.
     * Default value: 1000.
     * Note This parameter is required if the StickySessionEnabled parameter is set to true and the StickySessionType parameter is set to Insert.
         */
        readonly cookieTimeout?: number | ros.IResolvable;
        /**
         * @Property stickySessionType: The method that is used to handle a cookie. Valid values:
     * Insert : inserts a cookie. This is the default value.
     * Application Load Balancer (ALB) inserts the server ID as a cookie into the first HTTP
     * or HTTPS response that is sent to a client. The next request from the client will
     * contain this cookie, and the listener will distribute this request to the recorded
     * backend server.
     * Server: rewrites a cookie.
     * When ALB detects a user-defined cookie, it uses the user-defined cookie to rewrite
     * the original cookie. The next request from the client will contain the user-defined
     * cookie, and the listener will distribute this request to the recorded backend server.
     * Note This parameter is required if the StickySessionEnabled parameter is set to true.
         */
        readonly stickySessionType?: string | ros.IResolvable;
        /**
         * @Property stickySessionEnabled: Specifies whether to enable session persistence. Valid values: true and false.
     * Note This parameter is required if the ServerGroupType parameter is set to Instance or Ip.
         */
        readonly stickySessionEnabled?: boolean | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `StickySessionConfigProperty`
 *
 * @param properties - the TypeScript properties of a `StickySessionConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosServerGroup_StickySessionConfigPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('cookie', ros.validateString)(properties.cookie));
    errors.collect(ros.propertyValidator('cookieTimeout', ros.validateNumber)(properties.cookieTimeout));
    if(properties.stickySessionType && (typeof properties.stickySessionType) !== 'object') {
        errors.collect(ros.propertyValidator('stickySessionType', ros.validateAllowedValues)({
          data: properties.stickySessionType,
          allowedValues: ["Server","Insert"],
        }));
    }
    errors.collect(ros.propertyValidator('stickySessionType', ros.validateString)(properties.stickySessionType));
    errors.collect(ros.propertyValidator('stickySessionEnabled', ros.validateBoolean)(properties.stickySessionEnabled));
    return errors.wrap('supplied properties not correct for "StickySessionConfigProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ALB::ServerGroup.StickySessionConfig` resource
 *
 * @param properties - the TypeScript properties of a `StickySessionConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ALB::ServerGroup.StickySessionConfig` resource.
 */
// @ts-ignore TS6133
function rosServerGroupStickySessionConfigPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosServerGroup_StickySessionConfigPropertyValidator(properties).assertSuccess();
    return {
      Cookie: ros.stringToRosTemplate(properties.cookie),
      CookieTimeout: ros.numberToRosTemplate(properties.cookieTimeout),
      StickySessionType: ros.stringToRosTemplate(properties.stickySessionType),
      StickySessionEnabled: ros.booleanToRosTemplate(properties.stickySessionEnabled),
    };
}

export namespace RosServerGroup {
    /**
     * @stability external
     */
    export interface TagsProperty {
        /**
         * @Property value: undefined
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: undefined
         */
        readonly key: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `TagsProperty`
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the result of the validation.
 */
function RosServerGroup_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ALB::ServerGroup.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ALB::ServerGroup.Tags` resource.
 */
// @ts-ignore TS6133
function rosServerGroupTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosServerGroup_TagsPropertyValidator(properties).assertSuccess();
    return {
      Value: ros.stringToRosTemplate(properties.value),
      Key: ros.stringToRosTemplate(properties.key),
    };
}
