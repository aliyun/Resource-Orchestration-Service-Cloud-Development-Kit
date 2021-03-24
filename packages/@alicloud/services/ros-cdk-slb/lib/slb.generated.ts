// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `ALIYUN::SLB::AccessControl`
 */
export interface RosAccessControlProps {

    /**
     * @Property aclName: The name of the access control list.
     */
    readonly aclName: string;

    /**
     * @Property aclEntrys: A list of acl entrys. Each entry can be IP addresses or CIDR blocks. Max length: 50.
     */
    readonly aclEntrys?: Array<RosAccessControl.AclEntrysProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property addressIpVersion: IP version. Could be "ipv4" or "ipv6".
     */
    readonly addressIpVersion?: string;
}

/**
 * Determine whether the given properties match those of a `RosAccessControlProps`
 *
 * @param properties - the TypeScript properties of a `RosAccessControlProps`
 *
 * @returns the result of the validation.
 */
function RosAccessControlPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.aclEntrys && (Array.isArray(properties.aclEntrys) || (typeof properties.aclEntrys) === 'string')) {
        errors.collect(ros.propertyValidator('aclEntrys', ros.validateLength)({
            data: properties.aclEntrys.length,
            min: undefined,
            max: 50,
          }));
    }
    errors.collect(ros.propertyValidator('aclEntrys', ros.listValidator(RosAccessControl_AclEntrysPropertyValidator))(properties.aclEntrys));
    if(properties.addressIpVersion && (typeof properties.addressIpVersion) !== 'object') {
        errors.collect(ros.propertyValidator('addressIpVersion', ros.validateAllowedValues)({
          data: properties.addressIpVersion,
          allowedValues: ["ipv4","ipv6"],
        }));
    }
    errors.collect(ros.propertyValidator('addressIpVersion', ros.validateString)(properties.addressIpVersion));
    errors.collect(ros.propertyValidator('aclName', ros.requiredValidator)(properties.aclName));
    errors.collect(ros.propertyValidator('aclName', ros.validateString)(properties.aclName));
    return errors.wrap('supplied properties not correct for "RosAccessControlProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLB::AccessControl` resource
 *
 * @param properties - the TypeScript properties of a `RosAccessControlProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLB::AccessControl` resource.
 */
// @ts-ignore TS6133
function rosAccessControlPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosAccessControlPropsValidator(properties).assertSuccess();
    }
    return {
      AclName: ros.stringToRosTemplate(properties.aclName),
      AclEntrys: ros.listMapper(rosAccessControlAclEntrysPropertyToRosTemplate)(properties.aclEntrys),
      AddressIPVersion: ros.stringToRosTemplate(properties.addressIpVersion),
    };
}

/**
 * A ROS template type:  `ALIYUN::SLB::AccessControl`
 */
export class RosAccessControl extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLB::AccessControl";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute AclId: The ID of the access control list.
     */
    public readonly attrAclId: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property aclName: The name of the access control list.
     */
    public aclName: string;

    /**
     * @Property aclEntrys: A list of acl entrys. Each entry can be IP addresses or CIDR blocks. Max length: 50.
     */
    public aclEntrys: Array<RosAccessControl.AclEntrysProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property addressIpVersion: IP version. Could be "ipv4" or "ipv6".
     */
    public addressIpVersion: string | undefined;

    /**
     * Create a new `ALIYUN::SLB::AccessControl`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAccessControlProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosAccessControl.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAclId = ros.Token.asString(this.getAtt('AclId'));

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.aclName = props.aclName;
        this.aclEntrys = props.aclEntrys;
        this.addressIpVersion = props.addressIpVersion;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            aclName: this.aclName,
            aclEntrys: this.aclEntrys,
            addressIpVersion: this.addressIpVersion,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAccessControlPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosAccessControl {
    /**
     * @stability external
     */
    export interface AclEntrysProperty {
        /**
         * @Property entry: IP addresses or CIDR blocks. For example: "10.0.0.1" or "192.168.0.0/16"
         */
        readonly entry: string;
        /**
         * @Property comment: Description of the entry.
         */
        readonly comment?: string;
    }
}
/**
 * Determine whether the given properties match those of a `AclEntrysProperty`
 *
 * @param properties - the TypeScript properties of a `AclEntrysProperty`
 *
 * @returns the result of the validation.
 */
function RosAccessControl_AclEntrysPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('entry', ros.requiredValidator)(properties.entry));
    errors.collect(ros.propertyValidator('entry', ros.validateString)(properties.entry));
    errors.collect(ros.propertyValidator('comment', ros.validateString)(properties.comment));
    return errors.wrap('supplied properties not correct for "AclEntrysProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLB::AccessControl.AclEntrys` resource
 *
 * @param properties - the TypeScript properties of a `AclEntrysProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLB::AccessControl.AclEntrys` resource.
 */
// @ts-ignore TS6133
function rosAccessControlAclEntrysPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosAccessControl_AclEntrysPropertyValidator(properties).assertSuccess();
    return {
      entry: ros.stringToRosTemplate(properties.entry),
      comment: ros.stringToRosTemplate(properties.comment),
    };
}

/**
 * Properties for defining a `ALIYUN::SLB::BackendServerAttachment`
 */
export interface RosBackendServerAttachmentProps {

    /**
     * @Property loadBalancerId: The id of load balancer.
     */
    readonly loadBalancerId: string;

    /**
     * @Property backendServerList: The comma delimited instance id list.If the property "BackendServers" is setting, this property will be ignored.
     */
    readonly backendServerList?: string[];

    /**
     * @Property backendServers: The list of ECS instance, which will attached to load balancer.
     */
    readonly backendServers?: Array<RosBackendServerAttachment.BackendServersProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property backendServerWeightList: The comma delimited weight list. If no value specified will use 100. If the length is small than "BackendServerList", it will copy the last one to fill the array.If the property "BackendServers" is setting, this property will be ignored.
     */
    readonly backendServerWeightList?: Array<any | ros.IResolvable> | ros.IResolvable;
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
    errors.collect(ros.propertyValidator('backendServerList', ros.listValidator(ros.validateString))(properties.backendServerList));
    errors.collect(ros.propertyValidator('loadBalancerId', ros.requiredValidator)(properties.loadBalancerId));
    errors.collect(ros.propertyValidator('loadBalancerId', ros.validateString)(properties.loadBalancerId));
    errors.collect(ros.propertyValidator('backendServerWeightList', ros.listValidator(ros.validateAny))(properties.backendServerWeightList));
    errors.collect(ros.propertyValidator('backendServers', ros.listValidator(RosBackendServerAttachment_BackendServersPropertyValidator))(properties.backendServers));
    return errors.wrap('supplied properties not correct for "RosBackendServerAttachmentProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLB::BackendServerAttachment` resource
 *
 * @param properties - the TypeScript properties of a `RosBackendServerAttachmentProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLB::BackendServerAttachment` resource.
 */
// @ts-ignore TS6133
function rosBackendServerAttachmentPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosBackendServerAttachmentPropsValidator(properties).assertSuccess();
    }
    return {
      LoadBalancerId: ros.stringToRosTemplate(properties.loadBalancerId),
      BackendServerList: ros.listMapper(ros.stringToRosTemplate)(properties.backendServerList),
      BackendServers: ros.listMapper(rosBackendServerAttachmentBackendServersPropertyToRosTemplate)(properties.backendServers),
      BackendServerWeightList: ros.listMapper(ros.objectToRosTemplate)(properties.backendServerWeightList),
    };
}

/**
 * A ROS template type:  `ALIYUN::SLB::BackendServerAttachment`
 */
export class RosBackendServerAttachment extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLB::BackendServerAttachment";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute BackendServers: The collection of attached backend server.
     */
    public readonly attrBackendServers: any;

    /**
     * @Attribute LoadBalancerId: The id of load balancer.
     */
    public readonly attrLoadBalancerId: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property loadBalancerId: The id of load balancer.
     */
    public loadBalancerId: string;

    /**
     * @Property backendServerList: The comma delimited instance id list.If the property "BackendServers" is setting, this property will be ignored.
     */
    public backendServerList: string[] | undefined;

    /**
     * @Property backendServers: The list of ECS instance, which will attached to load balancer.
     */
    public backendServers: Array<RosBackendServerAttachment.BackendServersProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property backendServerWeightList: The comma delimited weight list. If no value specified will use 100. If the length is small than "BackendServerList", it will copy the last one to fill the array.If the property "BackendServers" is setting, this property will be ignored.
     */
    public backendServerWeightList: Array<any | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::SLB::BackendServerAttachment`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosBackendServerAttachmentProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosBackendServerAttachment.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrBackendServers = ros.Token.asString(this.getAtt('BackendServers'));
        this.attrLoadBalancerId = ros.Token.asString(this.getAtt('LoadBalancerId'));

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.loadBalancerId = props.loadBalancerId;
        this.backendServerList = props.backendServerList;
        this.backendServers = props.backendServers;
        this.backendServerWeightList = props.backendServerWeightList;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            loadBalancerId: this.loadBalancerId,
            backendServerList: this.backendServerList,
            backendServers: this.backendServers,
            backendServerWeightList: this.backendServerWeightList,
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
    export interface BackendServersProperty {
        /**
         * @Property type: The backend server type. Valid values:ecs: ECS instance (default)eni: Elastic Network Interface (ENI)
         */
        readonly type?: string;
        /**
         * @Property serverId: Need one valid instance id. The instance status should running.
         */
        readonly serverId: string;
        /**
         * @Property description: A description of the backend server.
         */
        readonly description?: string;
        /**
         * @Property serverIp: The IP of the instance.
         */
        readonly serverIp?: string;
        /**
         * @Property weight: The weight of backend server of load balancer. From 0 to 100, 0 means offline. Default is 100.
         */
        readonly weight: number;
    }
}
/**
 * Determine whether the given properties match those of a `BackendServersProperty`
 *
 * @param properties - the TypeScript properties of a `BackendServersProperty`
 *
 * @returns the result of the validation.
 */
function RosBackendServerAttachment_BackendServersPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('serverId', ros.requiredValidator)(properties.serverId));
    errors.collect(ros.propertyValidator('serverId', ros.validateString)(properties.serverId));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('serverIp', ros.validateString)(properties.serverIp));
    errors.collect(ros.propertyValidator('weight', ros.requiredValidator)(properties.weight));
    if(properties.weight && (typeof properties.weight) !== 'object') {
        errors.collect(ros.propertyValidator('weight', ros.validateRange)({
            data: properties.weight,
            min: 0,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('weight', ros.validateNumber)(properties.weight));
    return errors.wrap('supplied properties not correct for "BackendServersProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLB::BackendServerAttachment.BackendServers` resource
 *
 * @param properties - the TypeScript properties of a `BackendServersProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLB::BackendServerAttachment.BackendServers` resource.
 */
// @ts-ignore TS6133
function rosBackendServerAttachmentBackendServersPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosBackendServerAttachment_BackendServersPropertyValidator(properties).assertSuccess();
    return {
      Type: ros.stringToRosTemplate(properties.type),
      ServerId: ros.stringToRosTemplate(properties.serverId),
      Description: ros.stringToRosTemplate(properties.description),
      ServerIp: ros.stringToRosTemplate(properties.serverIp),
      Weight: ros.numberToRosTemplate(properties.weight),
    };
}

/**
 * Properties for defining a `ALIYUN::SLB::BackendServerToVServerGroupAddition`
 */
export interface RosBackendServerToVServerGroupAdditionProps {

    /**
     * @Property backendServers: The list of a combination of ECS Instance-Port-Weight.Same ecs instance with different port is allowed, but same ecs instance with same port isn't.
     */
    readonly backendServers: Array<RosBackendServerToVServerGroupAddition.BackendServersProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property vServerGroupId: The ID of virtual server group.
     */
    readonly vServerGroupId: string;
}

/**
 * Determine whether the given properties match those of a `RosBackendServerToVServerGroupAdditionProps`
 *
 * @param properties - the TypeScript properties of a `RosBackendServerToVServerGroupAdditionProps`
 *
 * @returns the result of the validation.
 */
function RosBackendServerToVServerGroupAdditionPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('vServerGroupId', ros.requiredValidator)(properties.vServerGroupId));
    errors.collect(ros.propertyValidator('vServerGroupId', ros.validateString)(properties.vServerGroupId));
    errors.collect(ros.propertyValidator('backendServers', ros.requiredValidator)(properties.backendServers));
    errors.collect(ros.propertyValidator('backendServers', ros.listValidator(RosBackendServerToVServerGroupAddition_BackendServersPropertyValidator))(properties.backendServers));
    return errors.wrap('supplied properties not correct for "RosBackendServerToVServerGroupAdditionProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLB::BackendServerToVServerGroupAddition` resource
 *
 * @param properties - the TypeScript properties of a `RosBackendServerToVServerGroupAdditionProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLB::BackendServerToVServerGroupAddition` resource.
 */
// @ts-ignore TS6133
function rosBackendServerToVServerGroupAdditionPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosBackendServerToVServerGroupAdditionPropsValidator(properties).assertSuccess();
    }
    return {
      BackendServers: ros.listMapper(rosBackendServerToVServerGroupAdditionBackendServersPropertyToRosTemplate)(properties.backendServers),
      VServerGroupId: ros.stringToRosTemplate(properties.vServerGroupId),
    };
}

/**
 * A ROS template type:  `ALIYUN::SLB::BackendServerToVServerGroupAddition`
 */
export class RosBackendServerToVServerGroupAddition extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLB::BackendServerToVServerGroupAddition";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute VServerGroupId: The ID of virtual server group.
     */
    public readonly attrVServerGroupId: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property backendServers: The list of a combination of ECS Instance-Port-Weight.Same ecs instance with different port is allowed, but same ecs instance with same port isn't.
     */
    public backendServers: Array<RosBackendServerToVServerGroupAddition.BackendServersProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property vServerGroupId: The ID of virtual server group.
     */
    public vServerGroupId: string;

    /**
     * Create a new `ALIYUN::SLB::BackendServerToVServerGroupAddition`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosBackendServerToVServerGroupAdditionProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosBackendServerToVServerGroupAddition.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrVServerGroupId = ros.Token.asString(this.getAtt('VServerGroupId'));

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.backendServers = props.backendServers;
        this.vServerGroupId = props.vServerGroupId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            backendServers: this.backendServers,
            vServerGroupId: this.vServerGroupId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosBackendServerToVServerGroupAdditionPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosBackendServerToVServerGroupAddition {
    /**
     * @stability external
     */
    export interface BackendServersProperty {
        /**
         * @Property serverId: Need one valid ECS instance id.
         */
        readonly serverId: string;
        /**
         * @Property port: The port of backend server. From 1 to 65535.
         */
        readonly port: number;
        /**
         * @Property weight: The weight of backend server of load balancer. From 0 to 100, 0 means offline. Default is 100.
         */
        readonly weight?: number;
    }
}
/**
 * Determine whether the given properties match those of a `BackendServersProperty`
 *
 * @param properties - the TypeScript properties of a `BackendServersProperty`
 *
 * @returns the result of the validation.
 */
function RosBackendServerToVServerGroupAddition_BackendServersPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('serverId', ros.requiredValidator)(properties.serverId));
    errors.collect(ros.propertyValidator('serverId', ros.validateString)(properties.serverId));
    errors.collect(ros.propertyValidator('port', ros.requiredValidator)(properties.port));
    errors.collect(ros.propertyValidator('port', ros.validateNumber)(properties.port));
    if(properties.weight && (typeof properties.weight) !== 'object') {
        errors.collect(ros.propertyValidator('weight', ros.validateRange)({
            data: properties.weight,
            min: 0,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('weight', ros.validateNumber)(properties.weight));
    return errors.wrap('supplied properties not correct for "BackendServersProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLB::BackendServerToVServerGroupAddition.BackendServers` resource
 *
 * @param properties - the TypeScript properties of a `BackendServersProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLB::BackendServerToVServerGroupAddition.BackendServers` resource.
 */
// @ts-ignore TS6133
function rosBackendServerToVServerGroupAdditionBackendServersPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosBackendServerToVServerGroupAddition_BackendServersPropertyValidator(properties).assertSuccess();
    return {
      ServerId: ros.stringToRosTemplate(properties.serverId),
      Port: ros.numberToRosTemplate(properties.port),
      Weight: ros.numberToRosTemplate(properties.weight),
    };
}

/**
 * Properties for defining a `ALIYUN::SLB::Certificate`
 */
export interface RosCertificateProps {

    /**
     * @Property certificate: The content of the certificate public key.
     */
    readonly certificate: string;

    /**
     * @Property aliCloudCertificateId: The ID of the Alibaba Cloud certificate.
     */
    readonly aliCloudCertificateId?: string;

    /**
     * @Property aliCloudCertificateName: The name of the Alibaba Cloud certificate.
     */
    readonly aliCloudCertificateName?: string;

    /**
     * @Property certificateName: The name of the certificate.
     */
    readonly certificateName?: string;

    /**
     * @Property certificateType: The type of the certificate.
     */
    readonly certificateType?: string;

    /**
     * @Property privateKey: The private key.
     */
    readonly privateKey?: string;

    /**
     * @Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string;
}

/**
 * Determine whether the given properties match those of a `RosCertificateProps`
 *
 * @param properties - the TypeScript properties of a `RosCertificateProps`
 *
 * @returns the result of the validation.
 */
function RosCertificatePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.certificateType && (typeof properties.certificateType) !== 'object') {
        errors.collect(ros.propertyValidator('certificateType', ros.validateAllowedValues)({
          data: properties.certificateType,
          allowedValues: ["Server","CA"],
        }));
    }
    errors.collect(ros.propertyValidator('certificateType', ros.validateString)(properties.certificateType));
    errors.collect(ros.propertyValidator('aliCloudCertificateName', ros.validateString)(properties.aliCloudCertificateName));
    errors.collect(ros.propertyValidator('privateKey', ros.validateString)(properties.privateKey));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('certificateName', ros.validateString)(properties.certificateName));
    errors.collect(ros.propertyValidator('certificate', ros.requiredValidator)(properties.certificate));
    errors.collect(ros.propertyValidator('certificate', ros.validateString)(properties.certificate));
    errors.collect(ros.propertyValidator('aliCloudCertificateId', ros.validateString)(properties.aliCloudCertificateId));
    return errors.wrap('supplied properties not correct for "RosCertificateProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLB::Certificate` resource
 *
 * @param properties - the TypeScript properties of a `RosCertificateProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLB::Certificate` resource.
 */
// @ts-ignore TS6133
function rosCertificatePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosCertificatePropsValidator(properties).assertSuccess();
    }
    return {
      Certificate: ros.stringToRosTemplate(properties.certificate),
      AliCloudCertificateId: ros.stringToRosTemplate(properties.aliCloudCertificateId),
      AliCloudCertificateName: ros.stringToRosTemplate(properties.aliCloudCertificateName),
      CertificateName: ros.stringToRosTemplate(properties.certificateName),
      CertificateType: ros.stringToRosTemplate(properties.certificateType),
      PrivateKey: ros.stringToRosTemplate(properties.privateKey),
      ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
    };
}

/**
 * A ROS template type:  `ALIYUN::SLB::Certificate`
 */
export class RosCertificate extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLB::Certificate";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute CertificateId: The ID of the certificate.
     */
    public readonly attrCertificateId: any;

    /**
     * @Attribute Fingerprint: The fingerprint of the certificate.
     */
    public readonly attrFingerprint: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property certificate: The content of the certificate public key.
     */
    public certificate: string;

    /**
     * @Property aliCloudCertificateId: The ID of the Alibaba Cloud certificate.
     */
    public aliCloudCertificateId: string | undefined;

    /**
     * @Property aliCloudCertificateName: The name of the Alibaba Cloud certificate.
     */
    public aliCloudCertificateName: string | undefined;

    /**
     * @Property certificateName: The name of the certificate.
     */
    public certificateName: string | undefined;

    /**
     * @Property certificateType: The type of the certificate.
     */
    public certificateType: string | undefined;

    /**
     * @Property privateKey: The private key.
     */
    public privateKey: string | undefined;

    /**
     * @Property resourceGroupId: Resource group id.
     */
    public resourceGroupId: string | undefined;

    /**
     * Create a new `ALIYUN::SLB::Certificate`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosCertificateProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosCertificate.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCertificateId = ros.Token.asString(this.getAtt('CertificateId'));
        this.attrFingerprint = ros.Token.asString(this.getAtt('Fingerprint'));

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.certificate = props.certificate;
        this.aliCloudCertificateId = props.aliCloudCertificateId;
        this.aliCloudCertificateName = props.aliCloudCertificateName;
        this.certificateName = props.certificateName;
        this.certificateType = props.certificateType;
        this.privateKey = props.privateKey;
        this.resourceGroupId = props.resourceGroupId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            certificate: this.certificate,
            aliCloudCertificateId: this.aliCloudCertificateId,
            aliCloudCertificateName: this.aliCloudCertificateName,
            certificateName: this.certificateName,
            certificateType: this.certificateType,
            privateKey: this.privateKey,
            resourceGroupId: this.resourceGroupId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosCertificatePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::SLB::DomainExtension`
 */
export interface RosDomainExtensionProps {

    /**
     * @Property domain: The domain name.
     */
    readonly domain: string;

    /**
     * @Property listenerPort: The front-end HTTPS listener port of the Server Load Balancer instance. Valid value:
     * 1-65535
     */
    readonly listenerPort: number;

    /**
     * @Property loadBalancerId: The ID of Server Load Balancer instance.
     */
    readonly loadBalancerId: string;

    /**
     * @Property serverCertificateId: The ID of the certificate corresponding to the domain name.
     */
    readonly serverCertificateId: string;
}

/**
 * Determine whether the given properties match those of a `RosDomainExtensionProps`
 *
 * @param properties - the TypeScript properties of a `RosDomainExtensionProps`
 *
 * @returns the result of the validation.
 */
function RosDomainExtensionPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('listenerPort', ros.requiredValidator)(properties.listenerPort));
    if(properties.listenerPort && (typeof properties.listenerPort) !== 'object') {
        errors.collect(ros.propertyValidator('listenerPort', ros.validateRange)({
            data: properties.listenerPort,
            min: 1,
            max: 65535,
          }));
    }
    errors.collect(ros.propertyValidator('listenerPort', ros.validateNumber)(properties.listenerPort));
    errors.collect(ros.propertyValidator('serverCertificateId', ros.requiredValidator)(properties.serverCertificateId));
    errors.collect(ros.propertyValidator('serverCertificateId', ros.validateString)(properties.serverCertificateId));
    errors.collect(ros.propertyValidator('loadBalancerId', ros.requiredValidator)(properties.loadBalancerId));
    errors.collect(ros.propertyValidator('loadBalancerId', ros.validateString)(properties.loadBalancerId));
    errors.collect(ros.propertyValidator('domain', ros.requiredValidator)(properties.domain));
    errors.collect(ros.propertyValidator('domain', ros.validateString)(properties.domain));
    return errors.wrap('supplied properties not correct for "RosDomainExtensionProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLB::DomainExtension` resource
 *
 * @param properties - the TypeScript properties of a `RosDomainExtensionProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLB::DomainExtension` resource.
 */
// @ts-ignore TS6133
function rosDomainExtensionPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDomainExtensionPropsValidator(properties).assertSuccess();
    }
    return {
      Domain: ros.stringToRosTemplate(properties.domain),
      ListenerPort: ros.numberToRosTemplate(properties.listenerPort),
      LoadBalancerId: ros.stringToRosTemplate(properties.loadBalancerId),
      ServerCertificateId: ros.stringToRosTemplate(properties.serverCertificateId),
    };
}

/**
 * A ROS template type:  `ALIYUN::SLB::DomainExtension`
 */
export class RosDomainExtension extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLB::DomainExtension";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute DomainExtensionId: The ID of the created domain name extension.
     */
    public readonly attrDomainExtensionId: any;

    /**
     * @Attribute ListenerPort: The front-end HTTPS listener port of the Server Load Balancer instance. Valid value:
1-65535
     */
    public readonly attrListenerPort: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property domain: The domain name.
     */
    public domain: string;

    /**
     * @Property listenerPort: The front-end HTTPS listener port of the Server Load Balancer instance. Valid value:
     * 1-65535
     */
    public listenerPort: number;

    /**
     * @Property loadBalancerId: The ID of Server Load Balancer instance.
     */
    public loadBalancerId: string;

    /**
     * @Property serverCertificateId: The ID of the certificate corresponding to the domain name.
     */
    public serverCertificateId: string;

    /**
     * Create a new `ALIYUN::SLB::DomainExtension`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDomainExtensionProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDomainExtension.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDomainExtensionId = ros.Token.asString(this.getAtt('DomainExtensionId'));
        this.attrListenerPort = ros.Token.asString(this.getAtt('ListenerPort'));

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.domain = props.domain;
        this.listenerPort = props.listenerPort;
        this.loadBalancerId = props.loadBalancerId;
        this.serverCertificateId = props.serverCertificateId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            domain: this.domain,
            listenerPort: this.listenerPort,
            loadBalancerId: this.loadBalancerId,
            serverCertificateId: this.serverCertificateId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDomainExtensionPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::SLB::Listener`
 */
export interface RosListenerProps {

    /**
     * @Property backendServerPort: Backend server can listen on ports from 1 to 65535.
     */
    readonly backendServerPort: number;

    /**
     * @Property bandwidth: The bandwidth of network, unit in Mbps(Million bits per second). If the specified load balancer with "LOAD_BALANCE_ID" is charged by "paybybandwidth" and is created in classic network, each Listener's bandwidth must be greater than 0 and the sum of all of its Listeners' bandwidth can't be greater than the bandwidth of the load balancer.
     */
    readonly bandwidth: number;

    /**
     * @Property listenerPort: Port for front listener. Range from 1 to 65535.
     */
    readonly listenerPort: number;

    /**
     * @Property loadBalancerId: The id of load balancer to create listener.
     */
    readonly loadBalancerId: string;

    /**
     * @Property protocol: The load balancer transport protocol to use for routing: http, https, tcp, or udp.
     */
    readonly protocol: string;

    /**
     * @Property aclId: The ID of the access control list associated with the listener to be created.
     * If the value of the AclStatus parameter is on, this parameter is required.
     */
    readonly aclId?: string;

    /**
     * @Property aclStatus: Indicates whether to enable access control.
     * Valid values: on | off. Default value: off
     */
    readonly aclStatus?: string;

    /**
     * @Property aclType: The access control type:
     * * white: Indicates a whitelist. Only requests from IP addresses or CIDR blocks in the selected access control lists are forwarded. This applies to scenarios in which an application only allows access from specific IP addresses.
     * Enabling a whitelist poses some risks to your services.
     * After a whitelist is enabled, only the IP addresses in the list can access the listener.
     * If you enable a whitelist without adding any IP addresses in the list, no requests are forwarded.
     * * black: Indicates a blacklist. Requests from IP addresses or CIDR blocks in the selected access control lists are not forwarded (that is, they are blocked). This applies to scenarios in which an application only denies access from specific IP addresses.
     * If you enable a blacklist without adding any IP addresses in the list, all requests are forwarded.
     * 
     * If the value of the AclStatus parameter is on, this parameter is required.
     */
    readonly aclType?: string;

    /**
     * @Property caCertificateId: CA server certificate id, for https listener only.
     */
    readonly caCertificateId?: string;

    /**
     * @Property healthCheck: The properties of health checking setting.
     */
    readonly healthCheck?: RosListener.HealthCheckProperty | ros.IResolvable;

    /**
     * @Property httpConfig: Config for http protocol.
     */
    readonly httpConfig?: RosListener.HttpConfigProperty | ros.IResolvable;

    /**
     * @Property idleTimeout: Specify the idle connection timeout in seconds. Valid value: 1-60 If no request is received during the specified timeout period, Server Load Balancer will temporarily terminate the connection and restart the connection when the next request comes.
     */
    readonly idleTimeout?: number;

    /**
     * @Property masterSlaveServerGroupId: The id of the MasterSlaveServerGroup which use in listener.
     */
    readonly masterSlaveServerGroupId?: string;

    /**
     * @Property persistence: The properties of persistence.
     */
    readonly persistence?: RosListener.PersistenceProperty | ros.IResolvable;

    /**
     * @Property requestTimeout: Specify the request timeout in seconds. Valid value: 1-180 If no response is received from the backend server during the specified timeout period, Server Load Balancer will stop waiting and send an HTTP 504 error to the client.
     */
    readonly requestTimeout?: number;

    /**
     * @Property scheduler: The scheduler algorithm. Support 'wrr' or 'wlc' only, default is 'wrr'
     */
    readonly scheduler?: string;

    /**
     * @Property serverCertificateId: Server certificate id, for https listener only, this properties is required.
     */
    readonly serverCertificateId?: string;

    /**
     * @Property vServerGroupId: The id of the VServerGroup which use in listener.
     */
    readonly vServerGroupId?: string;
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
    errors.collect(ros.propertyValidator('vServerGroupId', ros.validateString)(properties.vServerGroupId));
    errors.collect(ros.propertyValidator('caCertificateId', ros.validateString)(properties.caCertificateId));
    if(properties.scheduler && (typeof properties.scheduler) !== 'object') {
        errors.collect(ros.propertyValidator('scheduler', ros.validateAllowedValues)({
          data: properties.scheduler,
          allowedValues: ["wrr","wlc"],
        }));
    }
    errors.collect(ros.propertyValidator('scheduler', ros.validateString)(properties.scheduler));
    errors.collect(ros.propertyValidator('aclId', ros.validateString)(properties.aclId));
    errors.collect(ros.propertyValidator('healthCheck', RosListener_HealthCheckPropertyValidator)(properties.healthCheck));
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
    errors.collect(ros.propertyValidator('backendServerPort', ros.requiredValidator)(properties.backendServerPort));
    if(properties.backendServerPort && (typeof properties.backendServerPort) !== 'object') {
        errors.collect(ros.propertyValidator('backendServerPort', ros.validateRange)({
            data: properties.backendServerPort,
            min: 1,
            max: 65535,
          }));
    }
    errors.collect(ros.propertyValidator('backendServerPort', ros.validateNumber)(properties.backendServerPort));
    errors.collect(ros.propertyValidator('persistence', RosListener_PersistencePropertyValidator)(properties.persistence));
    if(properties.aclStatus && (typeof properties.aclStatus) !== 'object') {
        errors.collect(ros.propertyValidator('aclStatus', ros.validateAllowedValues)({
          data: properties.aclStatus,
          allowedValues: ["on","off"],
        }));
    }
    errors.collect(ros.propertyValidator('aclStatus', ros.validateString)(properties.aclStatus));
    errors.collect(ros.propertyValidator('bandwidth', ros.requiredValidator)(properties.bandwidth));
    if(properties.bandwidth && (typeof properties.bandwidth) !== 'object') {
        errors.collect(ros.propertyValidator('bandwidth', ros.validateRange)({
            data: properties.bandwidth,
            min: -1,
            max: 1000,
          }));
    }
    errors.collect(ros.propertyValidator('bandwidth', ros.validateNumber)(properties.bandwidth));
    errors.collect(ros.propertyValidator('masterSlaveServerGroupId', ros.validateString)(properties.masterSlaveServerGroupId));
    errors.collect(ros.propertyValidator('serverCertificateId', ros.validateString)(properties.serverCertificateId));
    errors.collect(ros.propertyValidator('httpConfig', RosListener_HttpConfigPropertyValidator)(properties.httpConfig));
    if(properties.aclType && (typeof properties.aclType) !== 'object') {
        errors.collect(ros.propertyValidator('aclType', ros.validateAllowedValues)({
          data: properties.aclType,
          allowedValues: ["white","black"],
        }));
    }
    errors.collect(ros.propertyValidator('aclType', ros.validateString)(properties.aclType));
    errors.collect(ros.propertyValidator('protocol', ros.requiredValidator)(properties.protocol));
    if(properties.protocol && (typeof properties.protocol) !== 'object') {
        errors.collect(ros.propertyValidator('protocol', ros.validateAllowedValues)({
          data: properties.protocol,
          allowedValues: ["http","https","tcp","udp"],
        }));
    }
    errors.collect(ros.propertyValidator('protocol', ros.validateString)(properties.protocol));
    return errors.wrap('supplied properties not correct for "RosListenerProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLB::Listener` resource
 *
 * @param properties - the TypeScript properties of a `RosListenerProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLB::Listener` resource.
 */
// @ts-ignore TS6133
function rosListenerPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosListenerPropsValidator(properties).assertSuccess();
    }
    return {
      BackendServerPort: ros.numberToRosTemplate(properties.backendServerPort),
      Bandwidth: ros.numberToRosTemplate(properties.bandwidth),
      ListenerPort: ros.numberToRosTemplate(properties.listenerPort),
      LoadBalancerId: ros.stringToRosTemplate(properties.loadBalancerId),
      Protocol: ros.stringToRosTemplate(properties.protocol),
      AclId: ros.stringToRosTemplate(properties.aclId),
      AclStatus: ros.stringToRosTemplate(properties.aclStatus),
      AclType: ros.stringToRosTemplate(properties.aclType),
      CACertificateId: ros.stringToRosTemplate(properties.caCertificateId),
      HealthCheck: rosListenerHealthCheckPropertyToRosTemplate(properties.healthCheck),
      HttpConfig: rosListenerHttpConfigPropertyToRosTemplate(properties.httpConfig),
      IdleTimeout: ros.numberToRosTemplate(properties.idleTimeout),
      MasterSlaveServerGroupId: ros.stringToRosTemplate(properties.masterSlaveServerGroupId),
      Persistence: rosListenerPersistencePropertyToRosTemplate(properties.persistence),
      RequestTimeout: ros.numberToRosTemplate(properties.requestTimeout),
      Scheduler: ros.stringToRosTemplate(properties.scheduler),
      ServerCertificateId: ros.stringToRosTemplate(properties.serverCertificateId),
      VServerGroupId: ros.stringToRosTemplate(properties.vServerGroupId),
    };
}

/**
 * A ROS template type:  `ALIYUN::SLB::Listener`
 */
export class RosListener extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLB::Listener";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute ListenerPortsAndProtocol: The collection of listener.
     */
    public readonly attrListenerPortsAndProtocol: any;

    /**
     * @Attribute LoadBalancerId: The id of load balancer
     */
    public readonly attrLoadBalancerId: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property backendServerPort: Backend server can listen on ports from 1 to 65535.
     */
    public backendServerPort: number;

    /**
     * @Property bandwidth: The bandwidth of network, unit in Mbps(Million bits per second). If the specified load balancer with "LOAD_BALANCE_ID" is charged by "paybybandwidth" and is created in classic network, each Listener's bandwidth must be greater than 0 and the sum of all of its Listeners' bandwidth can't be greater than the bandwidth of the load balancer.
     */
    public bandwidth: number;

    /**
     * @Property listenerPort: Port for front listener. Range from 1 to 65535.
     */
    public listenerPort: number;

    /**
     * @Property loadBalancerId: The id of load balancer to create listener.
     */
    public loadBalancerId: string;

    /**
     * @Property protocol: The load balancer transport protocol to use for routing: http, https, tcp, or udp.
     */
    public protocol: string;

    /**
     * @Property aclId: The ID of the access control list associated with the listener to be created.
     * If the value of the AclStatus parameter is on, this parameter is required.
     */
    public aclId: string | undefined;

    /**
     * @Property aclStatus: Indicates whether to enable access control.
     * Valid values: on | off. Default value: off
     */
    public aclStatus: string | undefined;

    /**
     * @Property aclType: The access control type:
     * * white: Indicates a whitelist. Only requests from IP addresses or CIDR blocks in the selected access control lists are forwarded. This applies to scenarios in which an application only allows access from specific IP addresses.
     * Enabling a whitelist poses some risks to your services.
     * After a whitelist is enabled, only the IP addresses in the list can access the listener.
     * If you enable a whitelist without adding any IP addresses in the list, no requests are forwarded.
     * * black: Indicates a blacklist. Requests from IP addresses or CIDR blocks in the selected access control lists are not forwarded (that is, they are blocked). This applies to scenarios in which an application only denies access from specific IP addresses.
     * If you enable a blacklist without adding any IP addresses in the list, all requests are forwarded.
     * 
     * If the value of the AclStatus parameter is on, this parameter is required.
     */
    public aclType: string | undefined;

    /**
     * @Property caCertificateId: CA server certificate id, for https listener only.
     */
    public caCertificateId: string | undefined;

    /**
     * @Property healthCheck: The properties of health checking setting.
     */
    public healthCheck: RosListener.HealthCheckProperty | ros.IResolvable | undefined;

    /**
     * @Property httpConfig: Config for http protocol.
     */
    public httpConfig: RosListener.HttpConfigProperty | ros.IResolvable | undefined;

    /**
     * @Property idleTimeout: Specify the idle connection timeout in seconds. Valid value: 1-60 If no request is received during the specified timeout period, Server Load Balancer will temporarily terminate the connection and restart the connection when the next request comes.
     */
    public idleTimeout: number | undefined;

    /**
     * @Property masterSlaveServerGroupId: The id of the MasterSlaveServerGroup which use in listener.
     */
    public masterSlaveServerGroupId: string | undefined;

    /**
     * @Property persistence: The properties of persistence.
     */
    public persistence: RosListener.PersistenceProperty | ros.IResolvable | undefined;

    /**
     * @Property requestTimeout: Specify the request timeout in seconds. Valid value: 1-180 If no response is received from the backend server during the specified timeout period, Server Load Balancer will stop waiting and send an HTTP 504 error to the client.
     */
    public requestTimeout: number | undefined;

    /**
     * @Property scheduler: The scheduler algorithm. Support 'wrr' or 'wlc' only, default is 'wrr'
     */
    public scheduler: string | undefined;

    /**
     * @Property serverCertificateId: Server certificate id, for https listener only, this properties is required.
     */
    public serverCertificateId: string | undefined;

    /**
     * @Property vServerGroupId: The id of the VServerGroup which use in listener.
     */
    public vServerGroupId: string | undefined;

    /**
     * Create a new `ALIYUN::SLB::Listener`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosListenerProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosListener.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrListenerPortsAndProtocol = ros.Token.asString(this.getAtt('ListenerPortsAndProtocol'));
        this.attrLoadBalancerId = ros.Token.asString(this.getAtt('LoadBalancerId'));

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.backendServerPort = props.backendServerPort;
        this.bandwidth = props.bandwidth;
        this.listenerPort = props.listenerPort;
        this.loadBalancerId = props.loadBalancerId;
        this.protocol = props.protocol;
        this.aclId = props.aclId;
        this.aclStatus = props.aclStatus;
        this.aclType = props.aclType;
        this.caCertificateId = props.caCertificateId;
        this.healthCheck = props.healthCheck;
        this.httpConfig = props.httpConfig;
        this.idleTimeout = props.idleTimeout;
        this.masterSlaveServerGroupId = props.masterSlaveServerGroupId;
        this.persistence = props.persistence;
        this.requestTimeout = props.requestTimeout;
        this.scheduler = props.scheduler;
        this.serverCertificateId = props.serverCertificateId;
        this.vServerGroupId = props.vServerGroupId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            backendServerPort: this.backendServerPort,
            bandwidth: this.bandwidth,
            listenerPort: this.listenerPort,
            loadBalancerId: this.loadBalancerId,
            protocol: this.protocol,
            aclId: this.aclId,
            aclStatus: this.aclStatus,
            aclType: this.aclType,
            caCertificateId: this.caCertificateId,
            healthCheck: this.healthCheck,
            httpConfig: this.httpConfig,
            idleTimeout: this.idleTimeout,
            masterSlaveServerGroupId: this.masterSlaveServerGroupId,
            persistence: this.persistence,
            requestTimeout: this.requestTimeout,
            scheduler: this.scheduler,
            serverCertificateId: this.serverCertificateId,
            vServerGroupId: this.vServerGroupId,
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
    export interface HealthCheckProperty {
        /**
         * @Property httpCode: The expect status of health check result. Any answer other than referred status within the timeout period is considered unhealthy.
         */
        readonly httpCode?: string;
        /**
         * @Property unhealthyThreshold: The number of consecutive health checks failures required,before identified the backend server in Unhealthy status.
         */
        readonly unhealthyThreshold?: number;
        /**
         * @Property timeout: The amount of time, in seconds, during which no response means a failed health check.
         */
        readonly timeout?: number;
        /**
         * @Property healthyThreshold: The number of consecutive health checks successes required,before identified the backend server in Healthy status.
         */
        readonly healthyThreshold?: number;
        /**
         * @Property port: The port being checked. The range of valid ports is 0 through 65535.
         */
        readonly port?: number;
        /**
         * @Property domain: The domain of health check target.
         */
        readonly domain?: string;
        /**
         * @Property uri: The url of health check target.
         */
        readonly uri?: string;
        /**
         * @Property interval: The approximate interval, unit in seconds, between health checks of an backend server.
         */
        readonly interval?: number;
    }
}
/**
 * Determine whether the given properties match those of a `HealthCheckProperty`
 *
 * @param properties - the TypeScript properties of a `HealthCheckProperty`
 *
 * @returns the result of the validation.
 */
function RosListener_HealthCheckPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('httpCode', ros.validateString)(properties.httpCode));
    if(properties.unhealthyThreshold && (typeof properties.unhealthyThreshold) !== 'object') {
        errors.collect(ros.propertyValidator('unhealthyThreshold', ros.validateRange)({
            data: properties.unhealthyThreshold,
            min: 1,
            max: 10,
          }));
    }
    errors.collect(ros.propertyValidator('unhealthyThreshold', ros.validateNumber)(properties.unhealthyThreshold));
    errors.collect(ros.propertyValidator('timeout', ros.validateNumber)(properties.timeout));
    if(properties.healthyThreshold && (typeof properties.healthyThreshold) !== 'object') {
        errors.collect(ros.propertyValidator('healthyThreshold', ros.validateRange)({
            data: properties.healthyThreshold,
            min: 1,
            max: 10,
          }));
    }
    errors.collect(ros.propertyValidator('healthyThreshold', ros.validateNumber)(properties.healthyThreshold));
    if(properties.port && (typeof properties.port) !== 'object') {
        errors.collect(ros.propertyValidator('port', ros.validateRange)({
            data: properties.port,
            min: 0,
            max: 65535,
          }));
    }
    errors.collect(ros.propertyValidator('port', ros.validateNumber)(properties.port));
    errors.collect(ros.propertyValidator('domain', ros.validateString)(properties.domain));
    errors.collect(ros.propertyValidator('uri', ros.validateString)(properties.uri));
    if(properties.interval && (typeof properties.interval) !== 'object') {
        errors.collect(ros.propertyValidator('interval', ros.validateRange)({
            data: properties.interval,
            min: 1,
            max: 50,
          }));
    }
    errors.collect(ros.propertyValidator('interval', ros.validateNumber)(properties.interval));
    return errors.wrap('supplied properties not correct for "HealthCheckProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLB::Listener.HealthCheck` resource
 *
 * @param properties - the TypeScript properties of a `HealthCheckProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLB::Listener.HealthCheck` resource.
 */
// @ts-ignore TS6133
function rosListenerHealthCheckPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosListener_HealthCheckPropertyValidator(properties).assertSuccess();
    return {
      HttpCode: ros.stringToRosTemplate(properties.httpCode),
      UnhealthyThreshold: ros.numberToRosTemplate(properties.unhealthyThreshold),
      Timeout: ros.numberToRosTemplate(properties.timeout),
      HealthyThreshold: ros.numberToRosTemplate(properties.healthyThreshold),
      Port: ros.numberToRosTemplate(properties.port),
      Domain: ros.stringToRosTemplate(properties.domain),
      URI: ros.stringToRosTemplate(properties.uri),
      Interval: ros.numberToRosTemplate(properties.interval),
    };
}

export namespace RosListener {
    /**
     * @stability external
     */
    export interface HttpConfigProperty {
        /**
         * @Property listenerForward: Whether to enable HTTP to HTTPS forwarding.
     * Valid values: on | off. Default value: off.
         */
        readonly listenerForward?: string;
        /**
         * @Property forwardPort: HTTP to HTTPS listening forwarding port.
     * Default value: 443.
         */
        readonly forwardPort?: number;
    }
}
/**
 * Determine whether the given properties match those of a `HttpConfigProperty`
 *
 * @param properties - the TypeScript properties of a `HttpConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosListener_HttpConfigPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.listenerForward && (typeof properties.listenerForward) !== 'object') {
        errors.collect(ros.propertyValidator('listenerForward', ros.validateAllowedValues)({
          data: properties.listenerForward,
          allowedValues: ["on","off"],
        }));
    }
    errors.collect(ros.propertyValidator('listenerForward', ros.validateString)(properties.listenerForward));
    if(properties.forwardPort && (typeof properties.forwardPort) !== 'object') {
        errors.collect(ros.propertyValidator('forwardPort', ros.validateRange)({
            data: properties.forwardPort,
            min: 1,
            max: 65535,
          }));
    }
    errors.collect(ros.propertyValidator('forwardPort', ros.validateNumber)(properties.forwardPort));
    return errors.wrap('supplied properties not correct for "HttpConfigProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLB::Listener.HttpConfig` resource
 *
 * @param properties - the TypeScript properties of a `HttpConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLB::Listener.HttpConfig` resource.
 */
// @ts-ignore TS6133
function rosListenerHttpConfigPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosListener_HttpConfigPropertyValidator(properties).assertSuccess();
    return {
      ListenerForward: ros.stringToRosTemplate(properties.listenerForward),
      ForwardPort: ros.numberToRosTemplate(properties.forwardPort),
    };
}

export namespace RosListener {
    /**
     * @stability external
     */
    export interface PersistenceProperty {
        /**
         * @Property xForwardedForSlbid: Optional. Indicates whether to use the SLB-ID header field to obtain the SLB instance ID. Valid values: on | off. Default value: off If you do not set this parameter, the default value is used.
         */
        readonly xForwardedForSlbid?: string;
        /**
         * @Property cookieTimeout: The timeout for cookie setting, in seconds. It only take effect while StickySession is setting to 'on' and StickySessionType is setting to 'insert'.
         */
        readonly cookieTimeout?: number;
        /**
         * @Property cookie: The type of session persistence.
         */
        readonly cookie?: string;
        /**
         * @Property stickySession: The switch of session persistence. Support 'on' and 'off'.
         */
        readonly stickySession?: string;
        /**
         * @Property persistenceTimeout: The timeout number of persistence, in seconds.
         */
        readonly persistenceTimeout?: number;
        /**
         * @Property xForwardedFor: Use 'X-Forwarded-For' to get real ip of accessor. On for open, off for close.
         */
        readonly xForwardedFor?: string;
        /**
         * @Property xForwardedForProto: Optional. Indicates whether to use the X-Forwarded-Proto header field to obtainthe listening protocol used by the SLB instance. Valid values: on | off. Default value: offIf you do not set this parameter, the default value is used.
         */
        readonly xForwardedForProto?: string;
        /**
         * @Property stickySessionType: The type of session persistence. Depends on parameter StickySession, if it is set to off, this parameter will be ignored.
         */
        readonly stickySessionType?: string;
        /**
         * @Property xForwardedForSlbip: Optional. Indicates whether to use the SLB-IP header field to obtainthe real IP address of a client request.Valid values: on | off. Default value: offIf you do not set this parameter, the default value is used.
         */
        readonly xForwardedForSlbip?: string;
    }
}
/**
 * Determine whether the given properties match those of a `PersistenceProperty`
 *
 * @param properties - the TypeScript properties of a `PersistenceProperty`
 *
 * @returns the result of the validation.
 */
function RosListener_PersistencePropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.xForwardedForSlbid && (typeof properties.xForwardedForSlbid) !== 'object') {
        errors.collect(ros.propertyValidator('xForwardedForSlbid', ros.validateAllowedValues)({
          data: properties.xForwardedForSlbid,
          allowedValues: ["on","off"],
        }));
    }
    errors.collect(ros.propertyValidator('xForwardedForSlbid', ros.validateString)(properties.xForwardedForSlbid));
    if(properties.cookieTimeout && (typeof properties.cookieTimeout) !== 'object') {
        errors.collect(ros.propertyValidator('cookieTimeout', ros.validateRange)({
            data: properties.cookieTimeout,
            min: 0,
            max: 86400,
          }));
    }
    errors.collect(ros.propertyValidator('cookieTimeout', ros.validateNumber)(properties.cookieTimeout));
    errors.collect(ros.propertyValidator('cookie', ros.validateString)(properties.cookie));
    if(properties.stickySession && (typeof properties.stickySession) !== 'object') {
        errors.collect(ros.propertyValidator('stickySession', ros.validateAllowedValues)({
          data: properties.stickySession,
          allowedValues: ["on","off"],
        }));
    }
    errors.collect(ros.propertyValidator('stickySession', ros.validateString)(properties.stickySession));
    if(properties.persistenceTimeout && (typeof properties.persistenceTimeout) !== 'object') {
        errors.collect(ros.propertyValidator('persistenceTimeout', ros.validateRange)({
            data: properties.persistenceTimeout,
            min: 0,
            max: 1000,
          }));
    }
    errors.collect(ros.propertyValidator('persistenceTimeout', ros.validateNumber)(properties.persistenceTimeout));
    if(properties.xForwardedFor && (typeof properties.xForwardedFor) !== 'object') {
        errors.collect(ros.propertyValidator('xForwardedFor', ros.validateAllowedValues)({
          data: properties.xForwardedFor,
          allowedValues: ["on","off"],
        }));
    }
    errors.collect(ros.propertyValidator('xForwardedFor', ros.validateString)(properties.xForwardedFor));
    if(properties.xForwardedForProto && (typeof properties.xForwardedForProto) !== 'object') {
        errors.collect(ros.propertyValidator('xForwardedForProto', ros.validateAllowedValues)({
          data: properties.xForwardedForProto,
          allowedValues: ["on","off"],
        }));
    }
    errors.collect(ros.propertyValidator('xForwardedForProto', ros.validateString)(properties.xForwardedForProto));
    if(properties.stickySessionType && (typeof properties.stickySessionType) !== 'object') {
        errors.collect(ros.propertyValidator('stickySessionType', ros.validateAllowedValues)({
          data: properties.stickySessionType,
          allowedValues: ["insert","server"],
        }));
    }
    errors.collect(ros.propertyValidator('stickySessionType', ros.validateString)(properties.stickySessionType));
    if(properties.xForwardedForSlbip && (typeof properties.xForwardedForSlbip) !== 'object') {
        errors.collect(ros.propertyValidator('xForwardedForSlbip', ros.validateAllowedValues)({
          data: properties.xForwardedForSlbip,
          allowedValues: ["on","off"],
        }));
    }
    errors.collect(ros.propertyValidator('xForwardedForSlbip', ros.validateString)(properties.xForwardedForSlbip));
    return errors.wrap('supplied properties not correct for "PersistenceProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLB::Listener.Persistence` resource
 *
 * @param properties - the TypeScript properties of a `PersistenceProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLB::Listener.Persistence` resource.
 */
// @ts-ignore TS6133
function rosListenerPersistencePropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosListener_PersistencePropertyValidator(properties).assertSuccess();
    return {
      XForwardedFor_SLBID: ros.stringToRosTemplate(properties.xForwardedForSlbid),
      CookieTimeout: ros.numberToRosTemplate(properties.cookieTimeout),
      Cookie: ros.stringToRosTemplate(properties.cookie),
      StickySession: ros.stringToRosTemplate(properties.stickySession),
      PersistenceTimeout: ros.numberToRosTemplate(properties.persistenceTimeout),
      XForwardedFor: ros.stringToRosTemplate(properties.xForwardedFor),
      XForwardedFor_proto: ros.stringToRosTemplate(properties.xForwardedForProto),
      StickySessionType: ros.stringToRosTemplate(properties.stickySessionType),
      XForwardedFor_SLBIP: ros.stringToRosTemplate(properties.xForwardedForSlbip),
    };
}

/**
 * Properties for defining a `ALIYUN::SLB::LoadBalancer`
 */
export interface RosLoadBalancerProps {

    /**
     * @Property addressType: Loader balancer address type. Support 'internet' and 'intranet' only, default is 'internet'.
     */
    readonly addressType?: string;

    /**
     * @Property autoPay: Optional. Indicates whether to automatically pay the bill for the Subscription-billed Internet instance to be created.
     * Valid values: true | false (default value)
     */
    readonly autoPay?: boolean | ros.IResolvable;

    /**
     * @Property bandwidth: The bandwidth for network, unit in Mbps(Mega bit per second). Range is 1 to 1000, default is 1. If InternetChargeType is specified as "paybytraffic", this property will be ignore and please specify the "Bandwidth" in ALIYUN::SLB::Listener.
     */
    readonly bandwidth?: number;

    /**
     * @Property deletionProtection: Whether to enable deletion protection.
     */
    readonly deletionProtection?: boolean | ros.IResolvable;

    /**
     * @Property duration: Optional. The subscription duration of a Subscription Internet instance.
     * Valid values:
     * If PricingCycle is month, the valid range is 1 to 9.
     * If PricingCycle is year, the value range is 1 to 3.
     */
    readonly duration?: number;

    /**
     * @Property internetChargeType: Instance internet access charge type.Support 'paybybandwidth' and 'paybytraffic' only. Default is 'paybytraffic'. If load balancer is created in VPC, the charge type will be set as 'paybytraffic' by default.
     */
    readonly internetChargeType?: string;

    /**
     * @Property loadBalancerName: Name of created load balancer. Length is limited to 1-80 characters, allowed to contain letters, numbers, '-, /, _,.' When not specified, a default name will be assigned.
     */
    readonly loadBalancerName?: string;

    /**
     * @Property loadBalancerSpec: The specification of the Server Load Balancer instance. Allowed value: slb.s1.small|slb.s2.small|slb.s2.medium|slb.s3.small|slb.s3.medium|slb.s3.large|slb.s3.xlarge|slb.s3.xxlarge. Default value: slb.s1.small. The supported performance specification in each region is different, two specifications are supported in the US East 1 region. If the region does not support the performance-guaranteed instances, the value will not take effect.
     */
    readonly loadBalancerSpec?: string;

    /**
     * @Property masterZoneId: The master zone id to create load balancer instance.
     */
    readonly masterZoneId?: string;

    /**
     * @Property modificationProtectionReason: Set the reason for modifying the protection status. The length is 1-80 English or Chinese characters, must start with upper and lower letters or Chinese, and can include numbers, periods (.), underscores (_) and dashes (-).
     * Only valid when ModificationProtectionStatus is ConsoleProtection.
     */
    readonly modificationProtectionReason?: string;

    /**
     * @Property modificationProtectionStatus: NonProtection or empty: means no restriction on modification protection
     * ConsoleProtection: Modify instance protection status by console
     * Default value is empty.
     */
    readonly modificationProtectionStatus?: string;

    /**
     * @Property payType: Optional. The billing method of the instance to be created.
     * Valid value: PayOnDemand (Pay-As-You-Go) | PrePay (Subscription)
     */
    readonly payType?: string;

    /**
     * @Property pricingCycle: Optional. The duration of the Subscription-billed Internet instance to be created.
     * Valid values: month | year.
     */
    readonly pricingCycle?: string;

    /**
     * @Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string;

    /**
     * @Property slaveZoneId: The slave zone id to create load balancer instance.
     */
    readonly slaveZoneId?: string;

    /**
     * @Property tags: Tags to attach to slb. Max support 5 tags to add during create slb. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: ros.RosTag[];

    /**
     * @Property vpcId: The VPC id to create load balancer instance. For VPC network only.
     */
    readonly vpcId?: string;

    /**
     * @Property vSwitchId: The VSwitch id to create load balancer instance. For VPC network only.
     */
    readonly vSwitchId?: string;
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
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    if(properties.pricingCycle && (typeof properties.pricingCycle) !== 'object') {
        errors.collect(ros.propertyValidator('pricingCycle', ros.validateAllowedValues)({
          data: properties.pricingCycle,
          allowedValues: ["month","year"],
        }));
    }
    errors.collect(ros.propertyValidator('pricingCycle', ros.validateString)(properties.pricingCycle));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    if(properties.duration && (typeof properties.duration) !== 'object') {
        errors.collect(ros.propertyValidator('duration', ros.validateRange)({
            data: properties.duration,
            min: 1,
            max: 9,
          }));
    }
    errors.collect(ros.propertyValidator('duration', ros.validateNumber)(properties.duration));
    errors.collect(ros.propertyValidator('deletionProtection', ros.validateBoolean)(properties.deletionProtection));
    errors.collect(ros.propertyValidator('autoPay', ros.validateBoolean)(properties.autoPay));
    if(properties.payType && (typeof properties.payType) !== 'object') {
        errors.collect(ros.propertyValidator('payType', ros.validateAllowedValues)({
          data: properties.payType,
          allowedValues: ["PayOnDemand","PrePay"],
        }));
    }
    errors.collect(ros.propertyValidator('payType', ros.validateString)(properties.payType));
    errors.collect(ros.propertyValidator('slaveZoneId', ros.validateString)(properties.slaveZoneId));
    if(properties.modificationProtectionStatus && (typeof properties.modificationProtectionStatus) !== 'object') {
        errors.collect(ros.propertyValidator('modificationProtectionStatus', ros.validateAllowedValues)({
          data: properties.modificationProtectionStatus,
          allowedValues: ["NonProtection","ConsoleProtection"],
        }));
    }
    errors.collect(ros.propertyValidator('modificationProtectionStatus', ros.validateString)(properties.modificationProtectionStatus));
    if(properties.internetChargeType && (typeof properties.internetChargeType) !== 'object') {
        errors.collect(ros.propertyValidator('internetChargeType', ros.validateAllowedValues)({
          data: properties.internetChargeType,
          allowedValues: ["paybybandwidth","paybytraffic"],
        }));
    }
    errors.collect(ros.propertyValidator('internetChargeType', ros.validateString)(properties.internetChargeType));
    errors.collect(ros.propertyValidator('loadBalancerSpec', ros.validateString)(properties.loadBalancerSpec));
    errors.collect(ros.propertyValidator('loadBalancerName', ros.validateString)(properties.loadBalancerName));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('bandwidth', ros.validateNumber)(properties.bandwidth));
    if(properties.modificationProtectionReason && (Array.isArray(properties.modificationProtectionReason) || (typeof properties.modificationProtectionReason) === 'string')) {
        errors.collect(ros.propertyValidator('modificationProtectionReason', ros.validateLength)({
            data: properties.modificationProtectionReason.length,
            min: undefined,
            max: 80,
          }));
    }
    errors.collect(ros.propertyValidator('modificationProtectionReason', ros.validateString)(properties.modificationProtectionReason));
    if(properties.addressType && (typeof properties.addressType) !== 'object') {
        errors.collect(ros.propertyValidator('addressType', ros.validateAllowedValues)({
          data: properties.addressType,
          allowedValues: ["internet","intranet"],
        }));
    }
    errors.collect(ros.propertyValidator('addressType', ros.validateString)(properties.addressType));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 5,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(ros.validateRosTag))(properties.tags));
    errors.collect(ros.propertyValidator('masterZoneId', ros.validateString)(properties.masterZoneId));
    return errors.wrap('supplied properties not correct for "RosLoadBalancerProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLB::LoadBalancer` resource
 *
 * @param properties - the TypeScript properties of a `RosLoadBalancerProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLB::LoadBalancer` resource.
 */
// @ts-ignore TS6133
function rosLoadBalancerPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosLoadBalancerPropsValidator(properties).assertSuccess();
    }
    return {
      AddressType: ros.stringToRosTemplate(properties.addressType),
      AutoPay: ros.booleanToRosTemplate(properties.autoPay),
      Bandwidth: ros.numberToRosTemplate(properties.bandwidth),
      DeletionProtection: ros.booleanToRosTemplate(properties.deletionProtection),
      Duration: ros.numberToRosTemplate(properties.duration),
      InternetChargeType: ros.stringToRosTemplate(properties.internetChargeType),
      LoadBalancerName: ros.stringToRosTemplate(properties.loadBalancerName),
      LoadBalancerSpec: ros.stringToRosTemplate(properties.loadBalancerSpec),
      MasterZoneId: ros.stringToRosTemplate(properties.masterZoneId),
      ModificationProtectionReason: ros.stringToRosTemplate(properties.modificationProtectionReason),
      ModificationProtectionStatus: ros.stringToRosTemplate(properties.modificationProtectionStatus),
      PayType: ros.stringToRosTemplate(properties.payType),
      PricingCycle: ros.stringToRosTemplate(properties.pricingCycle),
      ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
      SlaveZoneId: ros.stringToRosTemplate(properties.slaveZoneId),
      Tags: ros.listMapper(ros.rosTagToRosTemplate)(properties.tags),
      VpcId: ros.stringToRosTemplate(properties.vpcId),
      VSwitchId: ros.stringToRosTemplate(properties.vSwitchId),
    };
}

/**
 * A ROS template type:  `ALIYUN::SLB::LoadBalancer`
 */
export class RosLoadBalancer extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLB::LoadBalancer";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute AddressType: The address type of the load balancer. "intranet" or "internet".
     */
    public readonly attrAddressType: any;

    /**
     * @Attribute IpAddress: The ip address of the load balancer.
     */
    public readonly attrIpAddress: any;

    /**
     * @Attribute LoadBalancerId: The id of load balance created.
     */
    public readonly attrLoadBalancerId: any;

    /**
     * @Attribute NetworkType: The network type of the load balancer. "vpc" or "classic" network.
     */
    public readonly attrNetworkType: any;

    /**
     * @Attribute OrderId: The order ID.
     */
    public readonly attrOrderId: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property addressType: Loader balancer address type. Support 'internet' and 'intranet' only, default is 'internet'.
     */
    public addressType: string | undefined;

    /**
     * @Property autoPay: Optional. Indicates whether to automatically pay the bill for the Subscription-billed Internet instance to be created.
     * Valid values: true | false (default value)
     */
    public autoPay: boolean | ros.IResolvable | undefined;

    /**
     * @Property bandwidth: The bandwidth for network, unit in Mbps(Mega bit per second). Range is 1 to 1000, default is 1. If InternetChargeType is specified as "paybytraffic", this property will be ignore and please specify the "Bandwidth" in ALIYUN::SLB::Listener.
     */
    public bandwidth: number | undefined;

    /**
     * @Property deletionProtection: Whether to enable deletion protection.
     */
    public deletionProtection: boolean | ros.IResolvable | undefined;

    /**
     * @Property duration: Optional. The subscription duration of a Subscription Internet instance.
     * Valid values:
     * If PricingCycle is month, the valid range is 1 to 9.
     * If PricingCycle is year, the value range is 1 to 3.
     */
    public duration: number | undefined;

    /**
     * @Property internetChargeType: Instance internet access charge type.Support 'paybybandwidth' and 'paybytraffic' only. Default is 'paybytraffic'. If load balancer is created in VPC, the charge type will be set as 'paybytraffic' by default.
     */
    public internetChargeType: string | undefined;

    /**
     * @Property loadBalancerName: Name of created load balancer. Length is limited to 1-80 characters, allowed to contain letters, numbers, '-, /, _,.' When not specified, a default name will be assigned.
     */
    public loadBalancerName: string | undefined;

    /**
     * @Property loadBalancerSpec: The specification of the Server Load Balancer instance. Allowed value: slb.s1.small|slb.s2.small|slb.s2.medium|slb.s3.small|slb.s3.medium|slb.s3.large|slb.s3.xlarge|slb.s3.xxlarge. Default value: slb.s1.small. The supported performance specification in each region is different, two specifications are supported in the US East 1 region. If the region does not support the performance-guaranteed instances, the value will not take effect.
     */
    public loadBalancerSpec: string | undefined;

    /**
     * @Property masterZoneId: The master zone id to create load balancer instance.
     */
    public masterZoneId: string | undefined;

    /**
     * @Property modificationProtectionReason: Set the reason for modifying the protection status. The length is 1-80 English or Chinese characters, must start with upper and lower letters or Chinese, and can include numbers, periods (.), underscores (_) and dashes (-).
     * Only valid when ModificationProtectionStatus is ConsoleProtection.
     */
    public modificationProtectionReason: string | undefined;

    /**
     * @Property modificationProtectionStatus: NonProtection or empty: means no restriction on modification protection
     * ConsoleProtection: Modify instance protection status by console
     * Default value is empty.
     */
    public modificationProtectionStatus: string | undefined;

    /**
     * @Property payType: Optional. The billing method of the instance to be created.
     * Valid value: PayOnDemand (Pay-As-You-Go) | PrePay (Subscription)
     */
    public payType: string | undefined;

    /**
     * @Property pricingCycle: Optional. The duration of the Subscription-billed Internet instance to be created.
     * Valid values: month | year.
     */
    public pricingCycle: string | undefined;

    /**
     * @Property resourceGroupId: Resource group id.
     */
    public resourceGroupId: string | undefined;

    /**
     * @Property slaveZoneId: The slave zone id to create load balancer instance.
     */
    public slaveZoneId: string | undefined;

    /**
     * @Property tags: Tags to attach to slb. Max support 5 tags to add during create slb. Each tag with two properties Key and Value, and Key is required.
     */
    public readonly tags: ros.TagManager;

    /**
     * @Property vpcId: The VPC id to create load balancer instance. For VPC network only.
     */
    public vpcId: string | undefined;

    /**
     * @Property vSwitchId: The VSwitch id to create load balancer instance. For VPC network only.
     */
    public vSwitchId: string | undefined;

    /**
     * Create a new `ALIYUN::SLB::LoadBalancer`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosLoadBalancerProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosLoadBalancer.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAddressType = ros.Token.asString(this.getAtt('AddressType'));
        this.attrIpAddress = ros.Token.asString(this.getAtt('IpAddress'));
        this.attrLoadBalancerId = ros.Token.asString(this.getAtt('LoadBalancerId'));
        this.attrNetworkType = ros.Token.asString(this.getAtt('NetworkType'));
        this.attrOrderId = ros.Token.asString(this.getAtt('OrderId'));

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.addressType = props.addressType;
        this.autoPay = props.autoPay;
        this.bandwidth = props.bandwidth;
        this.deletionProtection = props.deletionProtection;
        this.duration = props.duration;
        this.internetChargeType = props.internetChargeType;
        this.loadBalancerName = props.loadBalancerName;
        this.loadBalancerSpec = props.loadBalancerSpec;
        this.masterZoneId = props.masterZoneId;
        this.modificationProtectionReason = props.modificationProtectionReason;
        this.modificationProtectionStatus = props.modificationProtectionStatus;
        this.payType = props.payType;
        this.pricingCycle = props.pricingCycle;
        this.resourceGroupId = props.resourceGroupId;
        this.slaveZoneId = props.slaveZoneId;
        this.tags = new ros.TagManager(ros.TagType.STANDARD, "ALIYUN::SLB::LoadBalancer", props.tags, { tagPropertyName: 'tags' });
        this.vpcId = props.vpcId;
        this.vSwitchId = props.vSwitchId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            addressType: this.addressType,
            autoPay: this.autoPay,
            bandwidth: this.bandwidth,
            deletionProtection: this.deletionProtection,
            duration: this.duration,
            internetChargeType: this.internetChargeType,
            loadBalancerName: this.loadBalancerName,
            loadBalancerSpec: this.loadBalancerSpec,
            masterZoneId: this.masterZoneId,
            modificationProtectionReason: this.modificationProtectionReason,
            modificationProtectionStatus: this.modificationProtectionStatus,
            payType: this.payType,
            pricingCycle: this.pricingCycle,
            resourceGroupId: this.resourceGroupId,
            slaveZoneId: this.slaveZoneId,
            tags: this.tags.renderTags(),
            vpcId: this.vpcId,
            vSwitchId: this.vSwitchId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosLoadBalancerPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::SLB::LoadBalancerClone`
 */
export interface RosLoadBalancerCloneProps {

    /**
     * @Property sourceLoadBalancerId: Source load balancer id to clone
     */
    readonly sourceLoadBalancerId: string;

    /**
     * @Property backendServers: The list of ECS instance, which will attached to load balancer.
     */
    readonly backendServers?: Array<RosLoadBalancerClone.BackendServersProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property backendServersPolicy: Solution for handle the backend server and weights. If select 'clone', it will clone from source load balancer. If select 'empty' it will not attach any backend servers. If select 'append' it will append the new backend server list to source backed servers. If select 'replace' it will only attach new backend server list. Default is 'clone'.
     */
    readonly backendServersPolicy?: string;

    /**
     * @Property loadBalancerName: Name of created load balancer. Length is limited to 1-80 characters, allowed to contain letters, numbers, '-, /, _,.' When not specified, a default name will be assigned.
     */
    readonly loadBalancerName?: string;

    /**
     * @Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string;

    /**
     * @Property tags: Tags to attach to slb. Max support 5 tags to add during create slb. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: ros.RosTag[];

    /**
     * @Property tagsPolicy: Solution for handle the tags. If select 'clone', it will clone from source load balancer. If select 'empty' it will not coppy tags. If select 'append' it will append the new tags. If select 'replace' it will add new tags.
     * Default is 'empty'.
     */
    readonly tagsPolicy?: string;

    /**
     * @Property vSwitchId: The new VSwitch ID to create load balancer instance. For VPC network only and the VSwitch should belong to the VPC which source load balancer is located.When not specified, source load balancer VSwitch ID will be used.
     */
    readonly vSwitchId?: string;
}

/**
 * Determine whether the given properties match those of a `RosLoadBalancerCloneProps`
 *
 * @param properties - the TypeScript properties of a `RosLoadBalancerCloneProps`
 *
 * @returns the result of the validation.
 */
function RosLoadBalancerClonePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('loadBalancerName', ros.validateString)(properties.loadBalancerName));
    errors.collect(ros.propertyValidator('sourceLoadBalancerId', ros.requiredValidator)(properties.sourceLoadBalancerId));
    errors.collect(ros.propertyValidator('sourceLoadBalancerId', ros.validateString)(properties.sourceLoadBalancerId));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    if(properties.tagsPolicy && (typeof properties.tagsPolicy) !== 'object') {
        errors.collect(ros.propertyValidator('tagsPolicy', ros.validateAllowedValues)({
          data: properties.tagsPolicy,
          allowedValues: ["clone","empty","append","replace"],
        }));
    }
    errors.collect(ros.propertyValidator('tagsPolicy', ros.validateString)(properties.tagsPolicy));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('backendServers', ros.listValidator(RosLoadBalancerClone_BackendServersPropertyValidator))(properties.backendServers));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 5,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(ros.validateRosTag))(properties.tags));
    if(properties.backendServersPolicy && (typeof properties.backendServersPolicy) !== 'object') {
        errors.collect(ros.propertyValidator('backendServersPolicy', ros.validateAllowedValues)({
          data: properties.backendServersPolicy,
          allowedValues: ["clone","empty","append","replace"],
        }));
    }
    errors.collect(ros.propertyValidator('backendServersPolicy', ros.validateString)(properties.backendServersPolicy));
    return errors.wrap('supplied properties not correct for "RosLoadBalancerCloneProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLB::LoadBalancerClone` resource
 *
 * @param properties - the TypeScript properties of a `RosLoadBalancerCloneProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLB::LoadBalancerClone` resource.
 */
// @ts-ignore TS6133
function rosLoadBalancerClonePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosLoadBalancerClonePropsValidator(properties).assertSuccess();
    }
    return {
      SourceLoadBalancerId: ros.stringToRosTemplate(properties.sourceLoadBalancerId),
      BackendServers: ros.listMapper(rosLoadBalancerCloneBackendServersPropertyToRosTemplate)(properties.backendServers),
      BackendServersPolicy: ros.stringToRosTemplate(properties.backendServersPolicy),
      LoadBalancerName: ros.stringToRosTemplate(properties.loadBalancerName),
      ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
      Tags: ros.listMapper(ros.rosTagToRosTemplate)(properties.tags),
      TagsPolicy: ros.stringToRosTemplate(properties.tagsPolicy),
      VSwitchId: ros.stringToRosTemplate(properties.vSwitchId),
    };
}

/**
 * A ROS template type:  `ALIYUN::SLB::LoadBalancerClone`
 */
export class RosLoadBalancerClone extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLB::LoadBalancerClone";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute LoadBalancerId: The id of load balance generated
     */
    public readonly attrLoadBalancerId: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property sourceLoadBalancerId: Source load balancer id to clone
     */
    public sourceLoadBalancerId: string;

    /**
     * @Property backendServers: The list of ECS instance, which will attached to load balancer.
     */
    public backendServers: Array<RosLoadBalancerClone.BackendServersProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property backendServersPolicy: Solution for handle the backend server and weights. If select 'clone', it will clone from source load balancer. If select 'empty' it will not attach any backend servers. If select 'append' it will append the new backend server list to source backed servers. If select 'replace' it will only attach new backend server list. Default is 'clone'.
     */
    public backendServersPolicy: string | undefined;

    /**
     * @Property loadBalancerName: Name of created load balancer. Length is limited to 1-80 characters, allowed to contain letters, numbers, '-, /, _,.' When not specified, a default name will be assigned.
     */
    public loadBalancerName: string | undefined;

    /**
     * @Property resourceGroupId: Resource group id.
     */
    public resourceGroupId: string | undefined;

    /**
     * @Property tags: Tags to attach to slb. Max support 5 tags to add during create slb. Each tag with two properties Key and Value, and Key is required.
     */
    public readonly tags: ros.TagManager;

    /**
     * @Property tagsPolicy: Solution for handle the tags. If select 'clone', it will clone from source load balancer. If select 'empty' it will not coppy tags. If select 'append' it will append the new tags. If select 'replace' it will add new tags.
     * Default is 'empty'.
     */
    public tagsPolicy: string | undefined;

    /**
     * @Property vSwitchId: The new VSwitch ID to create load balancer instance. For VPC network only and the VSwitch should belong to the VPC which source load balancer is located.When not specified, source load balancer VSwitch ID will be used.
     */
    public vSwitchId: string | undefined;

    /**
     * Create a new `ALIYUN::SLB::LoadBalancerClone`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosLoadBalancerCloneProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosLoadBalancerClone.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrLoadBalancerId = ros.Token.asString(this.getAtt('LoadBalancerId'));

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.sourceLoadBalancerId = props.sourceLoadBalancerId;
        this.backendServers = props.backendServers;
        this.backendServersPolicy = props.backendServersPolicy;
        this.loadBalancerName = props.loadBalancerName;
        this.resourceGroupId = props.resourceGroupId;
        this.tags = new ros.TagManager(ros.TagType.STANDARD, "ALIYUN::SLB::LoadBalancerClone", props.tags, { tagPropertyName: 'tags' });
        this.tagsPolicy = props.tagsPolicy;
        this.vSwitchId = props.vSwitchId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            sourceLoadBalancerId: this.sourceLoadBalancerId,
            backendServers: this.backendServers,
            backendServersPolicy: this.backendServersPolicy,
            loadBalancerName: this.loadBalancerName,
            resourceGroupId: this.resourceGroupId,
            tags: this.tags.renderTags(),
            tagsPolicy: this.tagsPolicy,
            vSwitchId: this.vSwitchId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosLoadBalancerClonePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosLoadBalancerClone {
    /**
     * @stability external
     */
    export interface BackendServersProperty {
        /**
         * @Property type: The backend server type. Valid values:ecs: ECS instance (default)eni: Elastic Network Interface (ENI)
         */
        readonly type?: string;
        /**
         * @Property serverId: Need one valid instance id. The instance status should running.
         */
        readonly serverId: string;
        /**
         * @Property description: A description of the backend server.
         */
        readonly description?: string;
        /**
         * @Property serverIp: The IP of the instance.
         */
        readonly serverIp?: string;
        /**
         * @Property weight: The weight of backend server of load balancer. From 0 to 100, 0 means offline. Default is 100.
         */
        readonly weight: number;
    }
}
/**
 * Determine whether the given properties match those of a `BackendServersProperty`
 *
 * @param properties - the TypeScript properties of a `BackendServersProperty`
 *
 * @returns the result of the validation.
 */
function RosLoadBalancerClone_BackendServersPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('serverId', ros.requiredValidator)(properties.serverId));
    errors.collect(ros.propertyValidator('serverId', ros.validateString)(properties.serverId));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('serverIp', ros.validateString)(properties.serverIp));
    errors.collect(ros.propertyValidator('weight', ros.requiredValidator)(properties.weight));
    if(properties.weight && (typeof properties.weight) !== 'object') {
        errors.collect(ros.propertyValidator('weight', ros.validateRange)({
            data: properties.weight,
            min: 0,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('weight', ros.validateNumber)(properties.weight));
    return errors.wrap('supplied properties not correct for "BackendServersProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLB::LoadBalancerClone.BackendServers` resource
 *
 * @param properties - the TypeScript properties of a `BackendServersProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLB::LoadBalancerClone.BackendServers` resource.
 */
// @ts-ignore TS6133
function rosLoadBalancerCloneBackendServersPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosLoadBalancerClone_BackendServersPropertyValidator(properties).assertSuccess();
    return {
      Type: ros.stringToRosTemplate(properties.type),
      ServerId: ros.stringToRosTemplate(properties.serverId),
      Description: ros.stringToRosTemplate(properties.description),
      ServerIp: ros.stringToRosTemplate(properties.serverIp),
      Weight: ros.numberToRosTemplate(properties.weight),
    };
}

/**
 * Properties for defining a `ALIYUN::SLB::MasterSlaveServerGroup`
 */
export interface RosMasterSlaveServerGroupProps {

    /**
     * @Property loadBalancerId: The ID of the Server Load Balancer instance.
     */
    readonly loadBalancerId: string;

    /**
     * @Property masterSlaveBackendServers: A list of active/standby server group.
     * An active/standby server group can only contain two backend servers.
     */
    readonly masterSlaveBackendServers: Array<RosMasterSlaveServerGroup.MasterSlaveBackendServersProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property masterSlaveServerGroupName: The name of the active/standby server group.
     */
    readonly masterSlaveServerGroupName?: string;
}

/**
 * Determine whether the given properties match those of a `RosMasterSlaveServerGroupProps`
 *
 * @param properties - the TypeScript properties of a `RosMasterSlaveServerGroupProps`
 *
 * @returns the result of the validation.
 */
function RosMasterSlaveServerGroupPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('loadBalancerId', ros.requiredValidator)(properties.loadBalancerId));
    errors.collect(ros.propertyValidator('loadBalancerId', ros.validateString)(properties.loadBalancerId));
    errors.collect(ros.propertyValidator('masterSlaveServerGroupName', ros.validateString)(properties.masterSlaveServerGroupName));
    errors.collect(ros.propertyValidator('masterSlaveBackendServers', ros.requiredValidator)(properties.masterSlaveBackendServers));
    if(properties.masterSlaveBackendServers && (Array.isArray(properties.masterSlaveBackendServers) || (typeof properties.masterSlaveBackendServers) === 'string')) {
        errors.collect(ros.propertyValidator('masterSlaveBackendServers', ros.validateLength)({
            data: properties.masterSlaveBackendServers.length,
            min: 2,
            max: 2,
          }));
    }
    errors.collect(ros.propertyValidator('masterSlaveBackendServers', ros.listValidator(RosMasterSlaveServerGroup_MasterSlaveBackendServersPropertyValidator))(properties.masterSlaveBackendServers));
    return errors.wrap('supplied properties not correct for "RosMasterSlaveServerGroupProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLB::MasterSlaveServerGroup` resource
 *
 * @param properties - the TypeScript properties of a `RosMasterSlaveServerGroupProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLB::MasterSlaveServerGroup` resource.
 */
// @ts-ignore TS6133
function rosMasterSlaveServerGroupPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosMasterSlaveServerGroupPropsValidator(properties).assertSuccess();
    }
    return {
      LoadBalancerId: ros.stringToRosTemplate(properties.loadBalancerId),
      MasterSlaveBackendServers: ros.listMapper(rosMasterSlaveServerGroupMasterSlaveBackendServersPropertyToRosTemplate)(properties.masterSlaveBackendServers),
      MasterSlaveServerGroupName: ros.stringToRosTemplate(properties.masterSlaveServerGroupName),
    };
}

/**
 * A ROS template type:  `ALIYUN::SLB::MasterSlaveServerGroup`
 */
export class RosMasterSlaveServerGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLB::MasterSlaveServerGroup";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute MasterSlaveServerGroupId: Active/standby server group ID.
     */
    public readonly attrMasterSlaveServerGroupId: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property loadBalancerId: The ID of the Server Load Balancer instance.
     */
    public loadBalancerId: string;

    /**
     * @Property masterSlaveBackendServers: A list of active/standby server group.
     * An active/standby server group can only contain two backend servers.
     */
    public masterSlaveBackendServers: Array<RosMasterSlaveServerGroup.MasterSlaveBackendServersProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property masterSlaveServerGroupName: The name of the active/standby server group.
     */
    public masterSlaveServerGroupName: string | undefined;

    /**
     * Create a new `ALIYUN::SLB::MasterSlaveServerGroup`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosMasterSlaveServerGroupProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosMasterSlaveServerGroup.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrMasterSlaveServerGroupId = ros.Token.asString(this.getAtt('MasterSlaveServerGroupId'));

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.loadBalancerId = props.loadBalancerId;
        this.masterSlaveBackendServers = props.masterSlaveBackendServers;
        this.masterSlaveServerGroupName = props.masterSlaveServerGroupName;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            loadBalancerId: this.loadBalancerId,
            masterSlaveBackendServers: this.masterSlaveBackendServers,
            masterSlaveServerGroupName: this.masterSlaveServerGroupName,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosMasterSlaveServerGroupPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosMasterSlaveServerGroup {
    /**
     * @stability external
     */
    export interface MasterSlaveBackendServersProperty {
        /**
         * @Property serverType: The identity of backend server. Could be "Master" (default) or "Slave"
         */
        readonly serverType?: string;
        /**
         * @Property serverId: ECS instance ID
         */
        readonly serverId: string;
        /**
         * @Property port: The port used by backend server. From 1 to 65535
         */
        readonly port: number;
        /**
         * @Property weight: The weight of backend server of load balancer. From 0 to 100, 0 means offline. Default is 100.
         */
        readonly weight: number;
    }
}
/**
 * Determine whether the given properties match those of a `MasterSlaveBackendServersProperty`
 *
 * @param properties - the TypeScript properties of a `MasterSlaveBackendServersProperty`
 *
 * @returns the result of the validation.
 */
function RosMasterSlaveServerGroup_MasterSlaveBackendServersPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.serverType && (typeof properties.serverType) !== 'object') {
        errors.collect(ros.propertyValidator('serverType', ros.validateAllowedValues)({
          data: properties.serverType,
          allowedValues: ["Master","Slave"],
        }));
    }
    errors.collect(ros.propertyValidator('serverType', ros.validateString)(properties.serverType));
    errors.collect(ros.propertyValidator('serverId', ros.requiredValidator)(properties.serverId));
    errors.collect(ros.propertyValidator('serverId', ros.validateString)(properties.serverId));
    errors.collect(ros.propertyValidator('port', ros.requiredValidator)(properties.port));
    if(properties.port && (typeof properties.port) !== 'object') {
        errors.collect(ros.propertyValidator('port', ros.validateRange)({
            data: properties.port,
            min: 1,
            max: 65535,
          }));
    }
    errors.collect(ros.propertyValidator('port', ros.validateNumber)(properties.port));
    errors.collect(ros.propertyValidator('weight', ros.requiredValidator)(properties.weight));
    if(properties.weight && (typeof properties.weight) !== 'object') {
        errors.collect(ros.propertyValidator('weight', ros.validateRange)({
            data: properties.weight,
            min: 0,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('weight', ros.validateNumber)(properties.weight));
    return errors.wrap('supplied properties not correct for "MasterSlaveBackendServersProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLB::MasterSlaveServerGroup.MasterSlaveBackendServers` resource
 *
 * @param properties - the TypeScript properties of a `MasterSlaveBackendServersProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLB::MasterSlaveServerGroup.MasterSlaveBackendServers` resource.
 */
// @ts-ignore TS6133
function rosMasterSlaveServerGroupMasterSlaveBackendServersPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosMasterSlaveServerGroup_MasterSlaveBackendServersPropertyValidator(properties).assertSuccess();
    return {
      ServerType: ros.stringToRosTemplate(properties.serverType),
      ServerId: ros.stringToRosTemplate(properties.serverId),
      Port: ros.numberToRosTemplate(properties.port),
      Weight: ros.numberToRosTemplate(properties.weight),
    };
}

/**
 * Properties for defining a `ALIYUN::SLB::Rule`
 */
export interface RosRuleProps {

    /**
     * @Property listenerPort: The front-end HTTPS listener port of the Server Load Balancer instance. Valid value:
     * 1-65535
     */
    readonly listenerPort: number;

    /**
     * @Property loadBalancerId: The ID of Server Load Balancer instance.
     */
    readonly loadBalancerId: string;

    /**
     * @Property ruleList: The forwarding rules to add.
     */
    readonly ruleList: Array<RosRule.RuleListProperty | ros.IResolvable> | ros.IResolvable;
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
    errors.collect(ros.propertyValidator('listenerPort', ros.requiredValidator)(properties.listenerPort));
    if(properties.listenerPort && (typeof properties.listenerPort) !== 'object') {
        errors.collect(ros.propertyValidator('listenerPort', ros.validateRange)({
            data: properties.listenerPort,
            min: 1,
            max: 65535,
          }));
    }
    errors.collect(ros.propertyValidator('listenerPort', ros.validateNumber)(properties.listenerPort));
    errors.collect(ros.propertyValidator('ruleList', ros.requiredValidator)(properties.ruleList));
    if(properties.ruleList && (Array.isArray(properties.ruleList) || (typeof properties.ruleList) === 'string')) {
        errors.collect(ros.propertyValidator('ruleList', ros.validateLength)({
            data: properties.ruleList.length,
            min: 1,
            max: 10,
          }));
    }
    errors.collect(ros.propertyValidator('ruleList', ros.listValidator(RosRule_RuleListPropertyValidator))(properties.ruleList));
    errors.collect(ros.propertyValidator('loadBalancerId', ros.requiredValidator)(properties.loadBalancerId));
    errors.collect(ros.propertyValidator('loadBalancerId', ros.validateString)(properties.loadBalancerId));
    return errors.wrap('supplied properties not correct for "RosRuleProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLB::Rule` resource
 *
 * @param properties - the TypeScript properties of a `RosRuleProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLB::Rule` resource.
 */
// @ts-ignore TS6133
function rosRulePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosRulePropsValidator(properties).assertSuccess();
    }
    return {
      ListenerPort: ros.numberToRosTemplate(properties.listenerPort),
      LoadBalancerId: ros.stringToRosTemplate(properties.loadBalancerId),
      RuleList: ros.listMapper(rosRuleRuleListPropertyToRosTemplate)(properties.ruleList),
    };
}

/**
 * A ROS template type:  `ALIYUN::SLB::Rule`
 */
export class RosRule extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLB::Rule";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute Rules: A list of forwarding rules. Each element of rules contains "RuleId".
     */
    public readonly attrRules: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property listenerPort: The front-end HTTPS listener port of the Server Load Balancer instance. Valid value:
     * 1-65535
     */
    public listenerPort: number;

    /**
     * @Property loadBalancerId: The ID of Server Load Balancer instance.
     */
    public loadBalancerId: string;

    /**
     * @Property ruleList: The forwarding rules to add.
     */
    public ruleList: Array<RosRule.RuleListProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Create a new `ALIYUN::SLB::Rule`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosRuleProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosRule.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrRules = ros.Token.asString(this.getAtt('Rules'));

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.listenerPort = props.listenerPort;
        this.loadBalancerId = props.loadBalancerId;
        this.ruleList = props.ruleList;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            listenerPort: this.listenerPort,
            loadBalancerId: this.loadBalancerId,
            ruleList: this.ruleList,
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
    export interface RuleListProperty {
        /**
         * @Property vServerGroupId: The ID of the VServer group associated with the forwarding rule.
         */
        readonly vServerGroupId: string;
        /**
         * @Property domain: The domain name.
         */
        readonly domain?: string;
        /**
         * @Property url: The URL.
         */
        readonly url?: string;
        /**
         * @Property ruleName: The name of the forwarding rule.
         */
        readonly ruleName: string;
    }
}
/**
 * Determine whether the given properties match those of a `RuleListProperty`
 *
 * @param properties - the TypeScript properties of a `RuleListProperty`
 *
 * @returns the result of the validation.
 */
function RosRule_RuleListPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('vServerGroupId', ros.requiredValidator)(properties.vServerGroupId));
    errors.collect(ros.propertyValidator('vServerGroupId', ros.validateString)(properties.vServerGroupId));
    errors.collect(ros.propertyValidator('domain', ros.validateString)(properties.domain));
    errors.collect(ros.propertyValidator('url', ros.validateString)(properties.url));
    errors.collect(ros.propertyValidator('ruleName', ros.requiredValidator)(properties.ruleName));
    errors.collect(ros.propertyValidator('ruleName', ros.validateString)(properties.ruleName));
    return errors.wrap('supplied properties not correct for "RuleListProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLB::Rule.RuleList` resource
 *
 * @param properties - the TypeScript properties of a `RuleListProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLB::Rule.RuleList` resource.
 */
// @ts-ignore TS6133
function rosRuleRuleListPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosRule_RuleListPropertyValidator(properties).assertSuccess();
    return {
      VServerGroupId: ros.stringToRosTemplate(properties.vServerGroupId),
      Domain: ros.stringToRosTemplate(properties.domain),
      Url: ros.stringToRosTemplate(properties.url),
      RuleName: ros.stringToRosTemplate(properties.ruleName),
    };
}

/**
 * Properties for defining a `ALIYUN::SLB::VServerGroup`
 */
export interface RosVServerGroupProps {

    /**
     * @Property loadBalancerId: The id of load balancer.
     */
    readonly loadBalancerId: string;

    /**
     * @Property vServerGroupName: Display name of the VServerGroup.
     */
    readonly vServerGroupName: string;

    /**
     * @Property backendServers: The list of a combination of ECS Instance-Port-Weight.Same ecs instance with different port is allowed, but same ecs instance with same port isn't.
     */
    readonly backendServers?: Array<RosVServerGroup.BackendServersProperty | ros.IResolvable> | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosVServerGroupProps`
 *
 * @param properties - the TypeScript properties of a `RosVServerGroupProps`
 *
 * @returns the result of the validation.
 */
function RosVServerGroupPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('vServerGroupName', ros.requiredValidator)(properties.vServerGroupName));
    errors.collect(ros.propertyValidator('vServerGroupName', ros.validateString)(properties.vServerGroupName));
    errors.collect(ros.propertyValidator('loadBalancerId', ros.requiredValidator)(properties.loadBalancerId));
    errors.collect(ros.propertyValidator('loadBalancerId', ros.validateString)(properties.loadBalancerId));
    errors.collect(ros.propertyValidator('backendServers', ros.listValidator(RosVServerGroup_BackendServersPropertyValidator))(properties.backendServers));
    return errors.wrap('supplied properties not correct for "RosVServerGroupProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLB::VServerGroup` resource
 *
 * @param properties - the TypeScript properties of a `RosVServerGroupProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLB::VServerGroup` resource.
 */
// @ts-ignore TS6133
function rosVServerGroupPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosVServerGroupPropsValidator(properties).assertSuccess();
    }
    return {
      LoadBalancerId: ros.stringToRosTemplate(properties.loadBalancerId),
      VServerGroupName: ros.stringToRosTemplate(properties.vServerGroupName),
      BackendServers: ros.listMapper(rosVServerGroupBackendServersPropertyToRosTemplate)(properties.backendServers),
    };
}

/**
 * A ROS template type:  `ALIYUN::SLB::VServerGroup`
 */
export class RosVServerGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLB::VServerGroup";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute BackendServers: Backend server list in this VServerGroup.
     */
    public readonly attrBackendServers: any;

    /**
     * @Attribute VServerGroupId: The id of VServerGroup created.
     */
    public readonly attrVServerGroupId: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property loadBalancerId: The id of load balancer.
     */
    public loadBalancerId: string;

    /**
     * @Property vServerGroupName: Display name of the VServerGroup.
     */
    public vServerGroupName: string;

    /**
     * @Property backendServers: The list of a combination of ECS Instance-Port-Weight.Same ecs instance with different port is allowed, but same ecs instance with same port isn't.
     */
    public backendServers: Array<RosVServerGroup.BackendServersProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::SLB::VServerGroup`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosVServerGroupProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosVServerGroup.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrBackendServers = ros.Token.asString(this.getAtt('BackendServers'));
        this.attrVServerGroupId = ros.Token.asString(this.getAtt('VServerGroupId'));

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.loadBalancerId = props.loadBalancerId;
        this.vServerGroupName = props.vServerGroupName;
        this.backendServers = props.backendServers;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            loadBalancerId: this.loadBalancerId,
            vServerGroupName: this.vServerGroupName,
            backendServers: this.backendServers,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosVServerGroupPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosVServerGroup {
    /**
     * @stability external
     */
    export interface BackendServersProperty {
        /**
         * @Property serverId: Need one valid ECS instance id.
         */
        readonly serverId: string;
        /**
         * @Property port: The port of backend server. From 1 to 65535.
         */
        readonly port: number;
        /**
         * @Property weight: The weight of backend server of load balancer. From 0 to 100, 0 means offline. Default is 100.
         */
        readonly weight?: number;
    }
}
/**
 * Determine whether the given properties match those of a `BackendServersProperty`
 *
 * @param properties - the TypeScript properties of a `BackendServersProperty`
 *
 * @returns the result of the validation.
 */
function RosVServerGroup_BackendServersPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('serverId', ros.requiredValidator)(properties.serverId));
    errors.collect(ros.propertyValidator('serverId', ros.validateString)(properties.serverId));
    errors.collect(ros.propertyValidator('port', ros.requiredValidator)(properties.port));
    errors.collect(ros.propertyValidator('port', ros.validateNumber)(properties.port));
    if(properties.weight && (typeof properties.weight) !== 'object') {
        errors.collect(ros.propertyValidator('weight', ros.validateRange)({
            data: properties.weight,
            min: 0,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('weight', ros.validateNumber)(properties.weight));
    return errors.wrap('supplied properties not correct for "BackendServersProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLB::VServerGroup.BackendServers` resource
 *
 * @param properties - the TypeScript properties of a `BackendServersProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLB::VServerGroup.BackendServers` resource.
 */
// @ts-ignore TS6133
function rosVServerGroupBackendServersPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosVServerGroup_BackendServersPropertyValidator(properties).assertSuccess();
    return {
      ServerId: ros.stringToRosTemplate(properties.serverId),
      Port: ros.numberToRosTemplate(properties.port),
      Weight: ros.numberToRosTemplate(properties.weight),
    };
}
