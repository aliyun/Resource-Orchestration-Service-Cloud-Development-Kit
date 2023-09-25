// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `ALIYUN::ALB::Acl`
 */
export interface RosAclProps {

    /**
     * @Property aclEntries: undefined
     */
    readonly aclEntries?: Array<RosAcl.AclEntriesProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property aclName: The name of the ACL. The name must be 2 to 128 characters in length, and can contain
     * letters, digits, hyphens (-) and underscores (_). It must start with a letter.
     */
    readonly aclName?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosAclProps`
 *
 * @param properties - the TypeScript properties of a `RosAclProps`
 *
 * @returns the result of the validation.
 */
function RosAclPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.aclEntries && (Array.isArray(properties.aclEntries) || (typeof properties.aclEntries) === 'string')) {
        errors.collect(ros.propertyValidator('aclEntries', ros.validateLength)({
            data: properties.aclEntries.length,
            min: undefined,
            max: 1000,
          }));
    }
    errors.collect(ros.propertyValidator('aclEntries', ros.listValidator(RosAcl_AclEntriesPropertyValidator))(properties.aclEntries));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    if(properties.aclName && (Array.isArray(properties.aclName) || (typeof properties.aclName) === 'string')) {
        errors.collect(ros.propertyValidator('aclName', ros.validateLength)({
            data: properties.aclName.length,
            min: 2,
            max: 128,
          }));
    }
    errors.collect(ros.propertyValidator('aclName', ros.validateString)(properties.aclName));
    return errors.wrap('supplied properties not correct for "RosAclProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ALB::Acl` resource
 *
 * @param properties - the TypeScript properties of a `RosAclProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ALB::Acl` resource.
 */
// @ts-ignore TS6133
function rosAclPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosAclPropsValidator(properties).assertSuccess();
    }
    return {
      AclEntries: ros.listMapper(rosAclAclEntriesPropertyToRosTemplate)(properties.aclEntries),
      AclName: ros.stringToRosTemplate(properties.aclName),
      ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
    };
}

/**
 * A ROS template type:  `ALIYUN::ALB::Acl`
 */
export class RosAcl extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ALB::Acl";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute AclId: The ID of the ACL.
     */
    public readonly attrAclId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property aclEntries: undefined
     */
    public aclEntries: Array<RosAcl.AclEntriesProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property aclName: The name of the ACL. The name must be 2 to 128 characters in length, and can contain
     * letters, digits, hyphens (-) and underscores (_). It must start with a letter.
     */
    public aclName: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::ALB::Acl`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAclProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosAcl.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAclId = this.getAtt('AclId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.aclEntries = props.aclEntries;
        this.aclName = props.aclName;
        this.resourceGroupId = props.resourceGroupId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            aclEntries: this.aclEntries,
            aclName: this.aclName,
            resourceGroupId: this.resourceGroupId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAclPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosAcl {
    /**
     * @stability external
     */
    export interface AclEntriesProperty {
        /**
         * @Property entry: The CIDR block for the ACL entry.
         */
        readonly entry: string | ros.IResolvable;
        /**
         * @Property description: The description of ACL entries. The description must be 2 to 256 characters in length, and can contain only the characters specified by the following expression:/^([^\x00-\xff]|[\w.,;/@-]){2,256}$/.
         */
        readonly description?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `AclEntriesProperty`
 *
 * @param properties - the TypeScript properties of a `AclEntriesProperty`
 *
 * @returns the result of the validation.
 */
function RosAcl_AclEntriesPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('entry', ros.requiredValidator)(properties.entry));
    errors.collect(ros.propertyValidator('entry', ros.validateString)(properties.entry));
    if(properties.description && (Array.isArray(properties.description) || (typeof properties.description) === 'string')) {
        errors.collect(ros.propertyValidator('description', ros.validateLength)({
            data: properties.description.length,
            min: 2,
            max: 256,
          }));
    }
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    return errors.wrap('supplied properties not correct for "AclEntriesProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ALB::Acl.AclEntries` resource
 *
 * @param properties - the TypeScript properties of a `AclEntriesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ALB::Acl.AclEntries` resource.
 */
// @ts-ignore TS6133
function rosAclAclEntriesPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosAcl_AclEntriesPropertyValidator(properties).assertSuccess();
    return {
      Entry: ros.stringToRosTemplate(properties.entry),
      Description: ros.stringToRosTemplate(properties.description),
    };
}

/**
 * Properties for defining a `ALIYUN::ALB::AclAssociation`
 */
export interface RosAclAssociationProps {

    /**
     * @Property aclIds: The IDs of the ACLs. You can specify up to three IDs at a time.
     */
    readonly aclIds: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property aclType: The type of ACL.
     */
    readonly aclType: string | ros.IResolvable;

    /**
     * @Property listenerId: The ID of the listener.
     */
    readonly listenerId: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosAclAssociationProps`
 *
 * @param properties - the TypeScript properties of a `RosAclAssociationProps`
 *
 * @returns the result of the validation.
 */
function RosAclAssociationPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('aclType', ros.requiredValidator)(properties.aclType));
    if(properties.aclType && (typeof properties.aclType) !== 'object') {
        errors.collect(ros.propertyValidator('aclType', ros.validateAllowedValues)({
          data: properties.aclType,
          allowedValues: ["White","Black"],
        }));
    }
    errors.collect(ros.propertyValidator('aclType', ros.validateString)(properties.aclType));
    errors.collect(ros.propertyValidator('aclIds', ros.requiredValidator)(properties.aclIds));
    if(properties.aclIds && (Array.isArray(properties.aclIds) || (typeof properties.aclIds) === 'string')) {
        errors.collect(ros.propertyValidator('aclIds', ros.validateLength)({
            data: properties.aclIds.length,
            min: 1,
            max: 3,
          }));
    }
    errors.collect(ros.propertyValidator('aclIds', ros.listValidator(ros.validateString))(properties.aclIds));
    errors.collect(ros.propertyValidator('listenerId', ros.requiredValidator)(properties.listenerId));
    errors.collect(ros.propertyValidator('listenerId', ros.validateString)(properties.listenerId));
    return errors.wrap('supplied properties not correct for "RosAclAssociationProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ALB::AclAssociation` resource
 *
 * @param properties - the TypeScript properties of a `RosAclAssociationProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ALB::AclAssociation` resource.
 */
// @ts-ignore TS6133
function rosAclAssociationPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosAclAssociationPropsValidator(properties).assertSuccess();
    }
    return {
      AclIds: ros.listMapper(ros.stringToRosTemplate)(properties.aclIds),
      AclType: ros.stringToRosTemplate(properties.aclType),
      ListenerId: ros.stringToRosTemplate(properties.listenerId),
    };
}

/**
 * A ROS template type:  `ALIYUN::ALB::AclAssociation`
 */
export class RosAclAssociation extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ALB::AclAssociation";

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
     * @Property aclIds: The IDs of the ACLs. You can specify up to three IDs at a time.
     */
    public aclIds: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property aclType: The type of ACL.
     */
    public aclType: string | ros.IResolvable;

    /**
     * @Property listenerId: The ID of the listener.
     */
    public listenerId: string | ros.IResolvable;

    /**
     * Create a new `ALIYUN::ALB::AclAssociation`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAclAssociationProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosAclAssociation.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrListenerId = this.getAtt('ListenerId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.aclIds = props.aclIds;
        this.aclType = props.aclType;
        this.listenerId = props.listenerId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            aclIds: this.aclIds,
            aclType: this.aclType,
            listenerId: this.listenerId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAclAssociationPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::ALB::AdditionalCertificateAssociation`
 */
export interface RosAdditionalCertificateAssociationProps {

    /**
     * @Property certificates: The list of the additional certificates.
     */
    readonly certificates: Array<RosAdditionalCertificateAssociation.CertificatesProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property listenerId: The ID of the listener.
     */
    readonly listenerId: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosAdditionalCertificateAssociationProps`
 *
 * @param properties - the TypeScript properties of a `RosAdditionalCertificateAssociationProps`
 *
 * @returns the result of the validation.
 */
function RosAdditionalCertificateAssociationPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('certificates', ros.requiredValidator)(properties.certificates));
    if(properties.certificates && (Array.isArray(properties.certificates) || (typeof properties.certificates) === 'string')) {
        errors.collect(ros.propertyValidator('certificates', ros.validateLength)({
            data: properties.certificates.length,
            min: 1,
            max: 25,
          }));
    }
    errors.collect(ros.propertyValidator('certificates', ros.listValidator(RosAdditionalCertificateAssociation_CertificatesPropertyValidator))(properties.certificates));
    errors.collect(ros.propertyValidator('listenerId', ros.requiredValidator)(properties.listenerId));
    errors.collect(ros.propertyValidator('listenerId', ros.validateString)(properties.listenerId));
    return errors.wrap('supplied properties not correct for "RosAdditionalCertificateAssociationProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ALB::AdditionalCertificateAssociation` resource
 *
 * @param properties - the TypeScript properties of a `RosAdditionalCertificateAssociationProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ALB::AdditionalCertificateAssociation` resource.
 */
// @ts-ignore TS6133
function rosAdditionalCertificateAssociationPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosAdditionalCertificateAssociationPropsValidator(properties).assertSuccess();
    }
    return {
      Certificates: ros.listMapper(rosAdditionalCertificateAssociationCertificatesPropertyToRosTemplate)(properties.certificates),
      ListenerId: ros.stringToRosTemplate(properties.listenerId),
    };
}

/**
 * A ROS template type:  `ALIYUN::ALB::AdditionalCertificateAssociation`
 */
export class RosAdditionalCertificateAssociation extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ALB::AdditionalCertificateAssociation";

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
     * @Property certificates: The list of the additional certificates.
     */
    public certificates: Array<RosAdditionalCertificateAssociation.CertificatesProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property listenerId: The ID of the listener.
     */
    public listenerId: string | ros.IResolvable;

    /**
     * Create a new `ALIYUN::ALB::AdditionalCertificateAssociation`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAdditionalCertificateAssociationProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosAdditionalCertificateAssociation.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrListenerId = this.getAtt('ListenerId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.certificates = props.certificates;
        this.listenerId = props.listenerId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            certificates: this.certificates,
            listenerId: this.listenerId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAdditionalCertificateAssociationPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosAdditionalCertificateAssociation {
    /**
     * @stability external
     */
    export interface CertificatesProperty {
        /**
         * @Property certificateId: The ID of additional certificate.
         */
        readonly certificateId: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `CertificatesProperty`
 *
 * @param properties - the TypeScript properties of a `CertificatesProperty`
 *
 * @returns the result of the validation.
 */
function RosAdditionalCertificateAssociation_CertificatesPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('certificateId', ros.requiredValidator)(properties.certificateId));
    errors.collect(ros.propertyValidator('certificateId', ros.validateString)(properties.certificateId));
    return errors.wrap('supplied properties not correct for "CertificatesProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ALB::AdditionalCertificateAssociation.Certificates` resource
 *
 * @param properties - the TypeScript properties of a `CertificatesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ALB::AdditionalCertificateAssociation.Certificates` resource.
 */
// @ts-ignore TS6133
function rosAdditionalCertificateAssociationCertificatesPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosAdditionalCertificateAssociation_CertificatesPropertyValidator(properties).assertSuccess();
    return {
      CertificateId: ros.stringToRosTemplate(properties.certificateId),
    };
}

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
    if(properties.servers && (Array.isArray(properties.servers) || (typeof properties.servers) === 'string')) {
        errors.collect(ros.propertyValidator('servers', ros.validateLength)({
            data: properties.servers.length,
            min: undefined,
            max: 1000,
          }));
    }
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
 * Properties for defining a `ALIYUN::ALB::HealthCheckTemplate`
 */
export interface RosHealthCheckTemplateProps {

    /**
     * @Property healthCheckTemplateName: The name of the health check template.
     * The name must be 2 to 128 characters in length, and can contain letters, digits, periods
     * (.), underscores (_), and hyphens (-). The name must start with a letter.
     */
    readonly healthCheckTemplateName: string | ros.IResolvable;

    /**
     * @Property healthCheckCodes: The HTTP status code for a successful health check.
     * If HealthCheckProtocol is set to HTTP, HealthCheckCodes can be set to http_2xx (default), http_3xx, http_4xx, and http_5xx. Separate multiple HTTP status codes with commas (,).
     * If HealthCheckProtocol is set to gRPC, HealthCheckCodes can be set to 0 to 99. Default value: 0. Value ranges are supported. You can enter at most 20 value ranges and must separate
     * them with commas (,).
     * Note This parameter is required only if the HealthCheckProtocol parameter is set to HTTP.
     */
    readonly healthCheckCodes?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property healthCheckConnectPort: The port that is used for health checks.
     * Valid values: 0 to 65535.
     * Default value: 0. This value indicates that the port on a backend server is used for health checks.
     */
    readonly healthCheckConnectPort?: number | ros.IResolvable;

    /**
     * @Property healthCheckHost: The domain name that is used for health checks.
     * Default value: $SERVER_IP. The domain name is 1 to 80 characters in length. Make sure that the destination
     * CIDR block meets the following requirements:
     * The domain name can contain lowercase letters, digits, hyphens (-), and periods (.).
     * The domain name contains at least one period (.) but does not start or end with a
     * period (.).
     * The rightmost domain label can contain only letters, and cannot contain digits or
     * hyphens (-).
     * Other domain labels cannot start or end with a hyphen (-).
     * This parameter is required only if the HealthCheckProtocol parameter is set to HTTP.
     */
    readonly healthCheckHost?: string | ros.IResolvable;

    /**
     * @Property healthCheckInterval: The interval between two consecutive health checks. Unit: seconds.
     * Valid values: 1 to 50.
     * Default value: 2.
     */
    readonly healthCheckInterval?: number | ros.IResolvable;

    /**
     * @Property healthCheckMethod: The HTTP method that is used for health checks. Valid values:
     * HEAD: By default, the ALB instance sends HEAD requests to a backend server to perform
     * HTTP health checks.
     * POST: By default, gRPC health checks use the POST method.
     * GET: If the length of a response exceeds 8 KB, the response is truncated. However, the
     * health check result is not affected.
     * Note This parameter is required only if the HealthCheckProtocol parameter is set to HTTP.
     */
    readonly healthCheckMethod?: string | ros.IResolvable;

    /**
     * @Property healthCheckPath: The URL path that is used for health checks.
     * It must be 1 to 80 characters in length, and can contain letters, digits, hyphens
     * (-), forward slashes (/), periods (.), percent signs (%), question marks (?), number
     * signs (#), and ampersands (&). It can also contain the following extended characters:
     * _ ; ~ ! ( ) * [ ] @ $ ^ : ' , +. The URL path must start with a forward slash (/).
     * Note This parameter is required only if the HealthCheckProtocol parameter is set to HTTP.
     */
    readonly healthCheckPath?: string | ros.IResolvable;

    /**
     * @Property healthCheckProtocol: The protocol that is used for health checks. Valid values:
     * HTTP: The ALB instance sends HEAD or GET requests to a backend server to simulate access
     * from a browser and check whether the backend server is healthy. This is the default
     * protocol.
     * TCP: To perform TCP health checks, ALB sends SYN packets to a backend server to check
     * whether the port of the backend server is available to receive requests.
     * GRPC: To perform gRPC health checks, ALB sends POST or GET requests to a backend server
     * to check whether the backend server is healthy.
     */
    readonly healthCheckProtocol?: string | ros.IResolvable;

    /**
     * @Property healthCheckTimeout: The timeout period of a health check. Unit: seconds. If a backend server does not
     * respond within the specified timeout period, the backend server fails the health check.
     * Valid values: 1 to 300.
     * Default value: 5.
     * Note If the value of the HealthCheckTimeout parameter is smaller than that of the HealthCheckInterval parameter, the timeout period specified by the HealthCheckTimeout parameter is ignored and the value of the HealthCheckInterval parameter is used as the timeout period.
     */
    readonly healthCheckTimeout?: number | ros.IResolvable;

    /**
     * @Property healthyThreshold: The number of times that an unhealthy backend server must consecutively pass health
     * checks before it is declared healthy. In this case, the health status is changed from
     * fail to success.
     * Valid values: 2 to 10.
     * Default value: 3.
     */
    readonly healthyThreshold?: number | ros.IResolvable;

    /**
     * @Property unhealthyThreshold: The number of times that a healthy backend server must consecutively fail health checks
     * before it is declared unhealthy. In this case, the health status is changed from success to fail.
     * Valid values: 2 to 10.
     * Default value: 3.
     */
    readonly unhealthyThreshold?: number | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosHealthCheckTemplateProps`
 *
 * @param properties - the TypeScript properties of a `RosHealthCheckTemplateProps`
 *
 * @returns the result of the validation.
 */
function RosHealthCheckTemplatePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('healthCheckInterval', ros.validateNumber)(properties.healthCheckInterval));
    errors.collect(ros.propertyValidator('healthCheckConnectPort', ros.validateNumber)(properties.healthCheckConnectPort));
    if(properties.healthCheckCodes && (Array.isArray(properties.healthCheckCodes) || (typeof properties.healthCheckCodes) === 'string')) {
        errors.collect(ros.propertyValidator('healthCheckCodes', ros.validateLength)({
            data: properties.healthCheckCodes.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('healthCheckCodes', ros.listValidator(ros.validateString))(properties.healthCheckCodes));
    errors.collect(ros.propertyValidator('unhealthyThreshold', ros.validateNumber)(properties.unhealthyThreshold));
    if(properties.healthCheckMethod && (typeof properties.healthCheckMethod) !== 'object') {
        errors.collect(ros.propertyValidator('healthCheckMethod', ros.validateAllowedValues)({
          data: properties.healthCheckMethod,
          allowedValues: ["HEAD","GET","POST"],
        }));
    }
    errors.collect(ros.propertyValidator('healthCheckMethod', ros.validateString)(properties.healthCheckMethod));
    errors.collect(ros.propertyValidator('healthCheckPath', ros.validateString)(properties.healthCheckPath));
    errors.collect(ros.propertyValidator('healthCheckTemplateName', ros.requiredValidator)(properties.healthCheckTemplateName));
    errors.collect(ros.propertyValidator('healthCheckTemplateName', ros.validateString)(properties.healthCheckTemplateName));
    errors.collect(ros.propertyValidator('healthCheckHost', ros.validateString)(properties.healthCheckHost));
    errors.collect(ros.propertyValidator('healthyThreshold', ros.validateNumber)(properties.healthyThreshold));
    if(properties.healthCheckProtocol && (typeof properties.healthCheckProtocol) !== 'object') {
        errors.collect(ros.propertyValidator('healthCheckProtocol', ros.validateAllowedValues)({
          data: properties.healthCheckProtocol,
          allowedValues: ["HTTP","TCP","gRPC"],
        }));
    }
    errors.collect(ros.propertyValidator('healthCheckProtocol', ros.validateString)(properties.healthCheckProtocol));
    errors.collect(ros.propertyValidator('healthCheckTimeout', ros.validateNumber)(properties.healthCheckTimeout));
    return errors.wrap('supplied properties not correct for "RosHealthCheckTemplateProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ALB::HealthCheckTemplate` resource
 *
 * @param properties - the TypeScript properties of a `RosHealthCheckTemplateProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ALB::HealthCheckTemplate` resource.
 */
// @ts-ignore TS6133
function rosHealthCheckTemplatePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosHealthCheckTemplatePropsValidator(properties).assertSuccess();
    }
    return {
      HealthCheckTemplateName: ros.stringToRosTemplate(properties.healthCheckTemplateName),
      HealthCheckCodes: ros.listMapper(ros.stringToRosTemplate)(properties.healthCheckCodes),
      HealthCheckConnectPort: ros.numberToRosTemplate(properties.healthCheckConnectPort),
      HealthCheckHost: ros.stringToRosTemplate(properties.healthCheckHost),
      HealthCheckInterval: ros.numberToRosTemplate(properties.healthCheckInterval),
      HealthCheckMethod: ros.stringToRosTemplate(properties.healthCheckMethod),
      HealthCheckPath: ros.stringToRosTemplate(properties.healthCheckPath),
      HealthCheckProtocol: ros.stringToRosTemplate(properties.healthCheckProtocol),
      HealthCheckTimeout: ros.numberToRosTemplate(properties.healthCheckTimeout),
      HealthyThreshold: ros.numberToRosTemplate(properties.healthyThreshold),
      UnhealthyThreshold: ros.numberToRosTemplate(properties.unhealthyThreshold),
    };
}

/**
 * A ROS template type:  `ALIYUN::ALB::HealthCheckTemplate`
 */
export class RosHealthCheckTemplate extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ALB::HealthCheckTemplate";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute HealthCheckTemplateId: The ID of the health check template.
     */
    public readonly attrHealthCheckTemplateId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property healthCheckTemplateName: The name of the health check template.
     * The name must be 2 to 128 characters in length, and can contain letters, digits, periods
     * (.), underscores (_), and hyphens (-). The name must start with a letter.
     */
    public healthCheckTemplateName: string | ros.IResolvable;

    /**
     * @Property healthCheckCodes: The HTTP status code for a successful health check.
     * If HealthCheckProtocol is set to HTTP, HealthCheckCodes can be set to http_2xx (default), http_3xx, http_4xx, and http_5xx. Separate multiple HTTP status codes with commas (,).
     * If HealthCheckProtocol is set to gRPC, HealthCheckCodes can be set to 0 to 99. Default value: 0. Value ranges are supported. You can enter at most 20 value ranges and must separate
     * them with commas (,).
     * Note This parameter is required only if the HealthCheckProtocol parameter is set to HTTP.
     */
    public healthCheckCodes: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property healthCheckConnectPort: The port that is used for health checks.
     * Valid values: 0 to 65535.
     * Default value: 0. This value indicates that the port on a backend server is used for health checks.
     */
    public healthCheckConnectPort: number | ros.IResolvable | undefined;

    /**
     * @Property healthCheckHost: The domain name that is used for health checks.
     * Default value: $SERVER_IP. The domain name is 1 to 80 characters in length. Make sure that the destination
     * CIDR block meets the following requirements:
     * The domain name can contain lowercase letters, digits, hyphens (-), and periods (.).
     * The domain name contains at least one period (.) but does not start or end with a
     * period (.).
     * The rightmost domain label can contain only letters, and cannot contain digits or
     * hyphens (-).
     * Other domain labels cannot start or end with a hyphen (-).
     * This parameter is required only if the HealthCheckProtocol parameter is set to HTTP.
     */
    public healthCheckHost: string | ros.IResolvable | undefined;

    /**
     * @Property healthCheckInterval: The interval between two consecutive health checks. Unit: seconds.
     * Valid values: 1 to 50.
     * Default value: 2.
     */
    public healthCheckInterval: number | ros.IResolvable | undefined;

    /**
     * @Property healthCheckMethod: The HTTP method that is used for health checks. Valid values:
     * HEAD: By default, the ALB instance sends HEAD requests to a backend server to perform
     * HTTP health checks.
     * POST: By default, gRPC health checks use the POST method.
     * GET: If the length of a response exceeds 8 KB, the response is truncated. However, the
     * health check result is not affected.
     * Note This parameter is required only if the HealthCheckProtocol parameter is set to HTTP.
     */
    public healthCheckMethod: string | ros.IResolvable | undefined;

    /**
     * @Property healthCheckPath: The URL path that is used for health checks.
     * It must be 1 to 80 characters in length, and can contain letters, digits, hyphens
     * (-), forward slashes (/), periods (.), percent signs (%), question marks (?), number
     * signs (#), and ampersands (&). It can also contain the following extended characters:
     * _ ; ~ ! ( ) * [ ] @ $ ^ : ' , +. The URL path must start with a forward slash (/).
     * Note This parameter is required only if the HealthCheckProtocol parameter is set to HTTP.
     */
    public healthCheckPath: string | ros.IResolvable | undefined;

    /**
     * @Property healthCheckProtocol: The protocol that is used for health checks. Valid values:
     * HTTP: The ALB instance sends HEAD or GET requests to a backend server to simulate access
     * from a browser and check whether the backend server is healthy. This is the default
     * protocol.
     * TCP: To perform TCP health checks, ALB sends SYN packets to a backend server to check
     * whether the port of the backend server is available to receive requests.
     * GRPC: To perform gRPC health checks, ALB sends POST or GET requests to a backend server
     * to check whether the backend server is healthy.
     */
    public healthCheckProtocol: string | ros.IResolvable | undefined;

    /**
     * @Property healthCheckTimeout: The timeout period of a health check. Unit: seconds. If a backend server does not
     * respond within the specified timeout period, the backend server fails the health check.
     * Valid values: 1 to 300.
     * Default value: 5.
     * Note If the value of the HealthCheckTimeout parameter is smaller than that of the HealthCheckInterval parameter, the timeout period specified by the HealthCheckTimeout parameter is ignored and the value of the HealthCheckInterval parameter is used as the timeout period.
     */
    public healthCheckTimeout: number | ros.IResolvable | undefined;

    /**
     * @Property healthyThreshold: The number of times that an unhealthy backend server must consecutively pass health
     * checks before it is declared healthy. In this case, the health status is changed from
     * fail to success.
     * Valid values: 2 to 10.
     * Default value: 3.
     */
    public healthyThreshold: number | ros.IResolvable | undefined;

    /**
     * @Property unhealthyThreshold: The number of times that a healthy backend server must consecutively fail health checks
     * before it is declared unhealthy. In this case, the health status is changed from success to fail.
     * Valid values: 2 to 10.
     * Default value: 3.
     */
    public unhealthyThreshold: number | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::ALB::HealthCheckTemplate`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosHealthCheckTemplateProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosHealthCheckTemplate.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrHealthCheckTemplateId = this.getAtt('HealthCheckTemplateId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.healthCheckTemplateName = props.healthCheckTemplateName;
        this.healthCheckCodes = props.healthCheckCodes;
        this.healthCheckConnectPort = props.healthCheckConnectPort;
        this.healthCheckHost = props.healthCheckHost;
        this.healthCheckInterval = props.healthCheckInterval;
        this.healthCheckMethod = props.healthCheckMethod;
        this.healthCheckPath = props.healthCheckPath;
        this.healthCheckProtocol = props.healthCheckProtocol;
        this.healthCheckTimeout = props.healthCheckTimeout;
        this.healthyThreshold = props.healthyThreshold;
        this.unhealthyThreshold = props.unhealthyThreshold;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            healthCheckTemplateName: this.healthCheckTemplateName,
            healthCheckCodes: this.healthCheckCodes,
            healthCheckConnectPort: this.healthCheckConnectPort,
            healthCheckHost: this.healthCheckHost,
            healthCheckInterval: this.healthCheckInterval,
            healthCheckMethod: this.healthCheckMethod,
            healthCheckPath: this.healthCheckPath,
            healthCheckProtocol: this.healthCheckProtocol,
            healthCheckTimeout: this.healthCheckTimeout,
            healthyThreshold: this.healthyThreshold,
            unhealthyThreshold: this.unhealthyThreshold,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosHealthCheckTemplatePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
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
     * @Property caCertificates: List of configured CA certificates for listener.
     */
    readonly caCertificates?: Array<RosListener.CaCertificatesProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property caEnabled: Specifies whether to enable mutual authentication. Default false.
     */
    readonly caEnabled?: boolean | ros.IResolvable;

    /**
     * @Property certificates: The list of SSL certificates for listener.
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
     * Valid values: 1 to 180. Unit: seconds.
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
     * @Property listenerStatus: The status of the listener.
     */
    readonly listenerStatus?: string | ros.IResolvable;

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
    errors.collect(ros.propertyValidator('caEnabled', ros.validateBoolean)(properties.caEnabled));
    errors.collect(ros.propertyValidator('listenerPort', ros.requiredValidator)(properties.listenerPort));
    if(properties.listenerPort && (typeof properties.listenerPort) !== 'object') {
        errors.collect(ros.propertyValidator('listenerPort', ros.validateRange)({
            data: properties.listenerPort,
            min: 1,
            max: 65535,
          }));
    }
    errors.collect(ros.propertyValidator('listenerPort', ros.validateNumber)(properties.listenerPort));
    if(properties.requestTimeout && (typeof properties.requestTimeout) !== 'object') {
        errors.collect(ros.propertyValidator('requestTimeout', ros.validateRange)({
            data: properties.requestTimeout,
            min: 1,
            max: 180,
          }));
    }
    errors.collect(ros.propertyValidator('requestTimeout', ros.validateNumber)(properties.requestTimeout));
    errors.collect(ros.propertyValidator('http2Enabled', ros.validateBoolean)(properties.http2Enabled));
    errors.collect(ros.propertyValidator('defaultActions', ros.requiredValidator)(properties.defaultActions));
    errors.collect(ros.propertyValidator('defaultActions', ros.listValidator(RosListener_DefaultActionsPropertyValidator))(properties.defaultActions));
    errors.collect(ros.propertyValidator('certificates', ros.listValidator(RosListener_CertificatesPropertyValidator))(properties.certificates));
    if(properties.idleTimeout && (typeof properties.idleTimeout) !== 'object') {
        errors.collect(ros.propertyValidator('idleTimeout', ros.validateRange)({
            data: properties.idleTimeout,
            min: 1,
            max: 180,
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
    if(properties.listenerStatus && (typeof properties.listenerStatus) !== 'object') {
        errors.collect(ros.propertyValidator('listenerStatus', ros.validateAllowedValues)({
          data: properties.listenerStatus,
          allowedValues: ["Running","Stopped"],
        }));
    }
    errors.collect(ros.propertyValidator('listenerStatus', ros.validateString)(properties.listenerStatus));
    if(properties.listenerDescription && (Array.isArray(properties.listenerDescription) || (typeof properties.listenerDescription) === 'string')) {
        errors.collect(ros.propertyValidator('listenerDescription', ros.validateLength)({
            data: properties.listenerDescription.length,
            min: 2,
            max: 256,
          }));
    }
    errors.collect(ros.propertyValidator('listenerDescription', ros.validateString)(properties.listenerDescription));
    errors.collect(ros.propertyValidator('xForwardedForConfig', RosListener_XForwardedForConfigPropertyValidator)(properties.xForwardedForConfig));
    errors.collect(ros.propertyValidator('caCertificates', ros.listValidator(RosListener_CaCertificatesPropertyValidator))(properties.caCertificates));
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
      CaCertificates: ros.listMapper(rosListenerCaCertificatesPropertyToRosTemplate)(properties.caCertificates),
      CaEnabled: ros.booleanToRosTemplate(properties.caEnabled),
      Certificates: ros.listMapper(rosListenerCertificatesPropertyToRosTemplate)(properties.certificates),
      GzipEnabled: ros.booleanToRosTemplate(properties.gzipEnabled),
      Http2Enabled: ros.booleanToRosTemplate(properties.http2Enabled),
      IdleTimeout: ros.numberToRosTemplate(properties.idleTimeout),
      ListenerDescription: ros.stringToRosTemplate(properties.listenerDescription),
      ListenerStatus: ros.stringToRosTemplate(properties.listenerStatus),
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
     * @Property caCertificates: List of configured CA certificates for listener.
     */
    public caCertificates: Array<RosListener.CaCertificatesProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property caEnabled: Specifies whether to enable mutual authentication. Default false.
     */
    public caEnabled: boolean | ros.IResolvable | undefined;

    /**
     * @Property certificates: The list of SSL certificates for listener.
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
     * Valid values: 1 to 180. Unit: seconds.
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
     * @Property listenerStatus: The status of the listener.
     */
    public listenerStatus: string | ros.IResolvable | undefined;

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
        this.caCertificates = props.caCertificates;
        this.caEnabled = props.caEnabled;
        this.certificates = props.certificates;
        this.gzipEnabled = props.gzipEnabled;
        this.http2Enabled = props.http2Enabled;
        this.idleTimeout = props.idleTimeout;
        this.listenerDescription = props.listenerDescription;
        this.listenerStatus = props.listenerStatus;
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
            caCertificates: this.caCertificates,
            caEnabled: this.caEnabled,
            certificates: this.certificates,
            gzipEnabled: this.gzipEnabled,
            http2Enabled: this.http2Enabled,
            idleTimeout: this.idleTimeout,
            listenerDescription: this.listenerDescription,
            listenerStatus: this.listenerStatus,
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
    export interface CaCertificatesProperty {
        /**
         * @Property certificateId: The CA certificate ID.
         */
        readonly certificateId?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `CaCertificatesProperty`
 *
 * @param properties - the TypeScript properties of a `CaCertificatesProperty`
 *
 * @returns the result of the validation.
 */
function RosListener_CaCertificatesPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('certificateId', ros.validateString)(properties.certificateId));
    return errors.wrap('supplied properties not correct for "CaCertificatesProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ALB::Listener.CaCertificates` resource
 *
 * @param properties - the TypeScript properties of a `CaCertificatesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ALB::Listener.CaCertificates` resource.
 */
// @ts-ignore TS6133
function rosListenerCaCertificatesPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosListener_CaCertificatesPropertyValidator(properties).assertSuccess();
    return {
      CertificateId: ros.stringToRosTemplate(properties.certificateId),
    };
}

export namespace RosListener {
    /**
     * @stability external
     */
    export interface CertificatesProperty {
        /**
         * @Property certificateId: The certificate ID.
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
         * @Property xForwardedForClientSourceIpsEnabled:
         */
        readonly xForwardedForClientSourceIpsEnabled?: boolean | ros.IResolvable;
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
         * @Property xForwardedForClientSourceIpsTrusted:
         */
        readonly xForwardedForClientSourceIpsTrusted?: string | ros.IResolvable;
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
    errors.collect(ros.propertyValidator('xForwardedForClientSourceIpsEnabled', ros.validateBoolean)(properties.xForwardedForClientSourceIpsEnabled));
    if(properties.xForwardedForClientCertFingerprintAlias && (typeof properties.xForwardedForClientCertFingerprintAlias) !== 'object') {
        errors.collect(ros.propertyValidator('xForwardedForClientCertFingerprintAlias', ros.validateAllowedPattern)({
          data: properties.xForwardedForClientCertFingerprintAlias,
          reg: /[-a-z0-9_]{2,40}/
        }));
    }
    errors.collect(ros.propertyValidator('xForwardedForClientCertFingerprintAlias', ros.validateString)(properties.xForwardedForClientCertFingerprintAlias));
    errors.collect(ros.propertyValidator('xForwardedForClientCertFingerprintEnabled', ros.validateBoolean)(properties.xForwardedForClientCertFingerprintEnabled));
    errors.collect(ros.propertyValidator('xForwardedForClientSourceIpsTrusted', ros.validateString)(properties.xForwardedForClientSourceIpsTrusted));
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
      XForwardedForClientSourceIpsEnabled: ros.booleanToRosTemplate(properties.xForwardedForClientSourceIpsEnabled),
      XForwardedForClientCertFingerprintAlias: ros.stringToRosTemplate(properties.xForwardedForClientCertFingerprintAlias),
      XForwardedForClientCertFingerprintEnabled: ros.booleanToRosTemplate(properties.xForwardedForClientCertFingerprintEnabled),
      XForwardedForClientSourceIpsTrusted: ros.stringToRosTemplate(properties.xForwardedForClientSourceIpsTrusted),
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
     * StandardWithWaf: Standard Edition with WAF
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
     * @Property accessLogConfig:
     */
    readonly accessLogConfig?: RosLoadBalancer.AccessLogConfigProperty | ros.IResolvable;

    /**
     * @Property addressAllocatedMode: The mode in which IP addresses are assigned. Valid values:
     * Fixed: The ALB instance uses a static IP address.
     * Dynamic: An IP address is dynamically assigned to the ALB instance in each zone. This is the default value.
     */
    readonly addressAllocatedMode?: string | ros.IResolvable;

    /**
     * @Property addressIpVersion: The protocol version. Valid values:
     * IPv4: IPv4
     * DualStack: dual stack
     */
    readonly addressIpVersion?: string | ros.IResolvable;

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
    if(properties.addressIpVersion && (typeof properties.addressIpVersion) !== 'object') {
        errors.collect(ros.propertyValidator('addressIpVersion', ros.validateAllowedValues)({
          data: properties.addressIpVersion,
          allowedValues: ["IPv4","DualStack"],
        }));
    }
    errors.collect(ros.propertyValidator('addressIpVersion', ros.validateString)(properties.addressIpVersion));
    errors.collect(ros.propertyValidator('loadBalancerEdition', ros.requiredValidator)(properties.loadBalancerEdition));
    if(properties.loadBalancerEdition && (typeof properties.loadBalancerEdition) !== 'object') {
        errors.collect(ros.propertyValidator('loadBalancerEdition', ros.validateAllowedValues)({
          data: properties.loadBalancerEdition,
          allowedValues: ["Basic","Standard","StandardWithWaf"],
        }));
    }
    errors.collect(ros.propertyValidator('loadBalancerEdition', ros.validateString)(properties.loadBalancerEdition));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('loadBalancerBillingConfig', ros.requiredValidator)(properties.loadBalancerBillingConfig));
    errors.collect(ros.propertyValidator('loadBalancerBillingConfig', RosLoadBalancer_LoadBalancerBillingConfigPropertyValidator)(properties.loadBalancerBillingConfig));
    errors.collect(ros.propertyValidator('zoneMappings', ros.requiredValidator)(properties.zoneMappings));
    if(properties.zoneMappings && (Array.isArray(properties.zoneMappings) || (typeof properties.zoneMappings) === 'string')) {
        errors.collect(ros.propertyValidator('zoneMappings', ros.validateLength)({
            data: properties.zoneMappings.length,
            min: 2,
            max: 10,
          }));
    }
    errors.collect(ros.propertyValidator('zoneMappings', ros.listValidator(RosLoadBalancer_ZoneMappingsPropertyValidator))(properties.zoneMappings));
    errors.collect(ros.propertyValidator('modificationProtectionConfig', RosLoadBalancer_ModificationProtectionConfigPropertyValidator)(properties.modificationProtectionConfig));
    errors.collect(ros.propertyValidator('loadBalancerName', ros.requiredValidator)(properties.loadBalancerName));
    errors.collect(ros.propertyValidator('loadBalancerName', ros.validateString)(properties.loadBalancerName));
    errors.collect(ros.propertyValidator('accessLogConfig', RosLoadBalancer_AccessLogConfigPropertyValidator)(properties.accessLogConfig));
    errors.collect(ros.propertyValidator('vpcId', ros.requiredValidator)(properties.vpcId));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
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
      AccessLogConfig: rosLoadBalancerAccessLogConfigPropertyToRosTemplate(properties.accessLogConfig),
      AddressAllocatedMode: ros.stringToRosTemplate(properties.addressAllocatedMode),
      AddressIpVersion: ros.stringToRosTemplate(properties.addressIpVersion),
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
     * StandardWithWaf: Standard Edition with WAF
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
     * @Property accessLogConfig:
     */
    public accessLogConfig: RosLoadBalancer.AccessLogConfigProperty | ros.IResolvable | undefined;

    /**
     * @Property addressAllocatedMode: The mode in which IP addresses are assigned. Valid values:
     * Fixed: The ALB instance uses a static IP address.
     * Dynamic: An IP address is dynamically assigned to the ALB instance in each zone. This is the default value.
     */
    public addressAllocatedMode: string | ros.IResolvable | undefined;

    /**
     * @Property addressIpVersion: The protocol version. Valid values:
     * IPv4: IPv4
     * DualStack: dual stack
     */
    public addressIpVersion: string | ros.IResolvable | undefined;

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
        this.accessLogConfig = props.accessLogConfig;
        this.addressAllocatedMode = props.addressAllocatedMode;
        this.addressIpVersion = props.addressIpVersion;
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
            accessLogConfig: this.accessLogConfig,
            addressAllocatedMode: this.addressAllocatedMode,
            addressIpVersion: this.addressIpVersion,
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
    export interface AccessLogConfigProperty {
        /**
         * @Property logStore:
         */
        readonly logStore: string | ros.IResolvable;
        /**
         * @Property enable: Whether enable access log config. If LogProject and LogStore are configured, default True.
         */
        readonly enable?: boolean | ros.IResolvable;
        /**
         * @Property logProject:
         */
        readonly logProject: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `AccessLogConfigProperty`
 *
 * @param properties - the TypeScript properties of a `AccessLogConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosLoadBalancer_AccessLogConfigPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('logStore', ros.requiredValidator)(properties.logStore));
    errors.collect(ros.propertyValidator('logStore', ros.validateString)(properties.logStore));
    errors.collect(ros.propertyValidator('enable', ros.validateBoolean)(properties.enable));
    errors.collect(ros.propertyValidator('logProject', ros.requiredValidator)(properties.logProject));
    errors.collect(ros.propertyValidator('logProject', ros.validateString)(properties.logProject));
    return errors.wrap('supplied properties not correct for "AccessLogConfigProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ALB::LoadBalancer.AccessLogConfig` resource
 *
 * @param properties - the TypeScript properties of a `AccessLogConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ALB::LoadBalancer.AccessLogConfig` resource.
 */
// @ts-ignore TS6133
function rosLoadBalancerAccessLogConfigPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosLoadBalancer_AccessLogConfigPropertyValidator(properties).assertSuccess();
    return {
      LogStore: ros.stringToRosTemplate(properties.logStore),
      Enable: ros.booleanToRosTemplate(properties.enable),
      LogProject: ros.stringToRosTemplate(properties.logProject),
    };
}

export namespace RosLoadBalancer {
    /**
     * @stability external
     */
    export interface LoadBalancerAddressesProperty {
        /**
         * @Property allocationId: The ID of the elastic IP address (EIP) that is associated with the ALB instance.
         */
        readonly allocationId: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `LoadBalancerAddressesProperty`
 *
 * @param properties - the TypeScript properties of a `LoadBalancerAddressesProperty`
 *
 * @returns the result of the validation.
 */
function RosLoadBalancer_LoadBalancerAddressesPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('allocationId', ros.requiredValidator)(properties.allocationId));
    errors.collect(ros.propertyValidator('allocationId', ros.validateString)(properties.allocationId));
    return errors.wrap('supplied properties not correct for "LoadBalancerAddressesProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ALB::LoadBalancer.LoadBalancerAddresses` resource
 *
 * @param properties - the TypeScript properties of a `LoadBalancerAddressesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ALB::LoadBalancer.LoadBalancerAddresses` resource.
 */
// @ts-ignore TS6133
function rosLoadBalancerLoadBalancerAddressesPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosLoadBalancer_LoadBalancerAddressesPropertyValidator(properties).assertSuccess();
    return {
      AllocationId: ros.stringToRosTemplate(properties.allocationId),
    };
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
        /**
         * @Property allocationId: The ID of the elastic IP address (EIP) that is associated with the ALB instance.
         */
        readonly allocationId?: string | ros.IResolvable;
        /**
         * @Property loadBalancerAddresses: Load balancer addresses. This property has higher priority than AllocationId and EipType in ZoneMappings.
         */
        readonly loadBalancerAddresses?: Array<RosLoadBalancer.LoadBalancerAddressesProperty | ros.IResolvable> | ros.IResolvable;
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
    errors.collect(ros.propertyValidator('allocationId', ros.validateString)(properties.allocationId));
    if(properties.loadBalancerAddresses && (Array.isArray(properties.loadBalancerAddresses) || (typeof properties.loadBalancerAddresses) === 'string')) {
        errors.collect(ros.propertyValidator('loadBalancerAddresses', ros.validateLength)({
            data: properties.loadBalancerAddresses.length,
            min: undefined,
            max: 1,
          }));
    }
    errors.collect(ros.propertyValidator('loadBalancerAddresses', ros.listValidator(RosLoadBalancer_LoadBalancerAddressesPropertyValidator))(properties.loadBalancerAddresses));
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
      AllocationId: ros.stringToRosTemplate(properties.allocationId),
      LoadBalancerAddresses: ros.listMapper(rosLoadBalancerLoadBalancerAddressesPropertyToRosTemplate)(properties.loadBalancerAddresses),
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
    if(properties.ruleActions && (Array.isArray(properties.ruleActions) || (typeof properties.ruleActions) === 'string')) {
        errors.collect(ros.propertyValidator('ruleActions', ros.validateLength)({
            data: properties.ruleActions.length,
            min: undefined,
            max: 5,
          }));
    }
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
    if(properties.ruleConditions && (Array.isArray(properties.ruleConditions) || (typeof properties.ruleConditions) === 'string')) {
        errors.collect(ros.propertyValidator('ruleConditions', ros.validateLength)({
            data: properties.ruleConditions.length,
            min: undefined,
            max: 10,
          }));
    }
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
         * @Property serverGroupStickySession: The list of session persistence of server group.
         */
        readonly serverGroupStickySession?: RosRule.ServerGroupStickySessionProperty | ros.IResolvable;
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
    errors.collect(ros.propertyValidator('serverGroupStickySession', RosRule_ServerGroupStickySessionPropertyValidator)(properties.serverGroupStickySession));
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
      ServerGroupStickySession: rosRuleServerGroupStickySessionPropertyToRosTemplate(properties.serverGroupStickySession),
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
    export interface MirrorGroupConfigProperty {
        /**
         * @Property serverGroupTuples:
         */
        readonly serverGroupTuples: Array<RosRule.MirrorGroupConfigServerGroupTuplesProperty | ros.IResolvable> | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `MirrorGroupConfigProperty`
 *
 * @param properties - the TypeScript properties of a `MirrorGroupConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosRule_MirrorGroupConfigPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('serverGroupTuples', ros.requiredValidator)(properties.serverGroupTuples));
    errors.collect(ros.propertyValidator('serverGroupTuples', ros.listValidator(RosRule_MirrorGroupConfigServerGroupTuplesPropertyValidator))(properties.serverGroupTuples));
    return errors.wrap('supplied properties not correct for "MirrorGroupConfigProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ALB::Rule.MirrorGroupConfig` resource
 *
 * @param properties - the TypeScript properties of a `MirrorGroupConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ALB::Rule.MirrorGroupConfig` resource.
 */
// @ts-ignore TS6133
function rosRuleMirrorGroupConfigPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosRule_MirrorGroupConfigPropertyValidator(properties).assertSuccess();
    return {
      ServerGroupTuples: ros.listMapper(rosRuleMirrorGroupConfigServerGroupTuplesPropertyToRosTemplate)(properties.serverGroupTuples),
    };
}

export namespace RosRule {
    /**
     * @stability external
     */
    export interface MirrorGroupConfigServerGroupTuplesProperty {
        /**
         * @Property serverGroupId: The ID of server group.
         */
        readonly serverGroupId: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `MirrorGroupConfigServerGroupTuplesProperty`
 *
 * @param properties - the TypeScript properties of a `MirrorGroupConfigServerGroupTuplesProperty`
 *
 * @returns the result of the validation.
 */
function RosRule_MirrorGroupConfigServerGroupTuplesPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('serverGroupId', ros.requiredValidator)(properties.serverGroupId));
    errors.collect(ros.propertyValidator('serverGroupId', ros.validateString)(properties.serverGroupId));
    return errors.wrap('supplied properties not correct for "MirrorGroupConfigServerGroupTuplesProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ALB::Rule.MirrorGroupConfigServerGroupTuples` resource
 *
 * @param properties - the TypeScript properties of a `MirrorGroupConfigServerGroupTuplesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ALB::Rule.MirrorGroupConfigServerGroupTuples` resource.
 */
// @ts-ignore TS6133
function rosRuleMirrorGroupConfigServerGroupTuplesPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosRule_MirrorGroupConfigServerGroupTuplesPropertyValidator(properties).assertSuccess();
    return {
      ServerGroupId: ros.stringToRosTemplate(properties.serverGroupId),
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
    export interface RemoveHeaderConfigProperty {
        /**
         * @Property key: The key of the response header.
     * The key must be 1 to 40 characters in length.
     * It can contain letters, digits, underscores (_), and hyphens (-).
     *
         */
        readonly key?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `RemoveHeaderConfigProperty`
 *
 * @param properties - the TypeScript properties of a `RemoveHeaderConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosRule_RemoveHeaderConfigPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.key && (typeof properties.key) !== 'object') {
        errors.collect(ros.propertyValidator('key', ros.validateAllowedPattern)({
          data: properties.key,
          reg: /[-a-z0-9_]{1,40}/
        }));
    }
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "RemoveHeaderConfigProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ALB::Rule.RemoveHeaderConfig` resource
 *
 * @param properties - the TypeScript properties of a `RemoveHeaderConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ALB::Rule.RemoveHeaderConfig` resource.
 */
// @ts-ignore TS6133
function rosRuleRemoveHeaderConfigPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosRule_RemoveHeaderConfigPropertyValidator(properties).assertSuccess();
    return {
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
         * @Property removeHeaderConfig: The configuration of the header to be removed.
         */
        readonly removeHeaderConfig?: RosRule.RemoveHeaderConfigProperty | ros.IResolvable;
        /**
         * @Property insertHeaderConfig: The configuration of the header to be inserted.
         */
        readonly insertHeaderConfig?: RosRule.InsertHeaderConfigProperty | ros.IResolvable;
        /**
         * @Property rewriteConfig: The configuration of the internal redirect action.
         */
        readonly rewriteConfig?: RosRule.RewriteConfigProperty | ros.IResolvable;
        /**
         * @Property trafficLimitConfig: The configuration of the traffic limit.
         */
        readonly trafficLimitConfig?: RosRule.TrafficLimitConfigProperty | ros.IResolvable;
        /**
         * @Property trafficMirrorConfig: The configuration of the traffic mirror.
         */
        readonly trafficMirrorConfig?: RosRule.TrafficMirrorConfigProperty | ros.IResolvable;
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
          allowedValues: ["ForwardGroup","Redirect","FixedResponse","Rewrite","InsertHeader","RemoveHeader","TrafficLimit","TrafficMirror"],
        }));
    }
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('redirectConfig', RosRule_RedirectConfigPropertyValidator)(properties.redirectConfig));
    errors.collect(ros.propertyValidator('forwardGroupConfig', RosRule_ForwardGroupConfigPropertyValidator)(properties.forwardGroupConfig));
    errors.collect(ros.propertyValidator('removeHeaderConfig', RosRule_RemoveHeaderConfigPropertyValidator)(properties.removeHeaderConfig));
    errors.collect(ros.propertyValidator('insertHeaderConfig', RosRule_InsertHeaderConfigPropertyValidator)(properties.insertHeaderConfig));
    errors.collect(ros.propertyValidator('rewriteConfig', RosRule_RewriteConfigPropertyValidator)(properties.rewriteConfig));
    errors.collect(ros.propertyValidator('trafficLimitConfig', RosRule_TrafficLimitConfigPropertyValidator)(properties.trafficLimitConfig));
    errors.collect(ros.propertyValidator('trafficMirrorConfig', RosRule_TrafficMirrorConfigPropertyValidator)(properties.trafficMirrorConfig));
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
      RemoveHeaderConfig: rosRuleRemoveHeaderConfigPropertyToRosTemplate(properties.removeHeaderConfig),
      InsertHeaderConfig: rosRuleInsertHeaderConfigPropertyToRosTemplate(properties.insertHeaderConfig),
      RewriteConfig: rosRuleRewriteConfigPropertyToRosTemplate(properties.rewriteConfig),
      TrafficLimitConfig: rosRuleTrafficLimitConfigPropertyToRosTemplate(properties.trafficLimitConfig),
      TrafficMirrorConfig: rosRuleTrafficMirrorConfigPropertyToRosTemplate(properties.trafficMirrorConfig),
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
        /**
         * @Property sourceIpConfig: Service traffic matching based on source IP. Required and valid when Type is SourceIP.
         */
        readonly sourceIpConfig?: RosRule.SourceIpConfigProperty | ros.IResolvable;
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
          allowedValues: ["Cookie","Header","Host","Method","Path","QueryString","SourceIp"],
        }));
    }
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('queryStringConfig', RosRule_QueryStringConfigPropertyValidator)(properties.queryStringConfig));
    errors.collect(ros.propertyValidator('hostConfig', RosRule_HostConfigPropertyValidator)(properties.hostConfig));
    errors.collect(ros.propertyValidator('cookieConfig', RosRule_CookieConfigPropertyValidator)(properties.cookieConfig));
    errors.collect(ros.propertyValidator('headerConfig', RosRule_HeaderConfigPropertyValidator)(properties.headerConfig));
    errors.collect(ros.propertyValidator('sourceIpConfig', RosRule_SourceIpConfigPropertyValidator)(properties.sourceIpConfig));
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
      QueryStringConfig: rosRuleQueryStringConfigPropertyToRosTemplate(properties.queryStringConfig),
      HostConfig: rosRuleHostConfigPropertyToRosTemplate(properties.hostConfig),
      CookieConfig: rosRuleCookieConfigPropertyToRosTemplate(properties.cookieConfig),
      HeaderConfig: rosRuleHeaderConfigPropertyToRosTemplate(properties.headerConfig),
      SourceIpConfig: rosRuleSourceIpConfigPropertyToRosTemplate(properties.sourceIpConfig),
    };
}

export namespace RosRule {
    /**
     * @stability external
     */
    export interface ServerGroupStickySessionProperty {
        /**
         * @Property timeout: The timeout period. Unit: seconds. Default value: 1000.
         */
        readonly timeout?: number | ros.IResolvable;
        /**
         * @Property enabled: Specifies whether to enable session persistence. Valid values:
     * true: enables session persistence.
     * false (default): disables session persistence.
         */
        readonly enabled?: boolean | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `ServerGroupStickySessionProperty`
 *
 * @param properties - the TypeScript properties of a `ServerGroupStickySessionProperty`
 *
 * @returns the result of the validation.
 */
function RosRule_ServerGroupStickySessionPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.timeout && (typeof properties.timeout) !== 'object') {
        errors.collect(ros.propertyValidator('timeout', ros.validateRange)({
            data: properties.timeout,
            min: 1,
            max: 86400,
          }));
    }
    errors.collect(ros.propertyValidator('timeout', ros.validateNumber)(properties.timeout));
    errors.collect(ros.propertyValidator('enabled', ros.validateBoolean)(properties.enabled));
    return errors.wrap('supplied properties not correct for "ServerGroupStickySessionProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ALB::Rule.ServerGroupStickySession` resource
 *
 * @param properties - the TypeScript properties of a `ServerGroupStickySessionProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ALB::Rule.ServerGroupStickySession` resource.
 */
// @ts-ignore TS6133
function rosRuleServerGroupStickySessionPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosRule_ServerGroupStickySessionPropertyValidator(properties).assertSuccess();
    return {
      Timeout: ros.numberToRosTemplate(properties.timeout),
      Enabled: ros.booleanToRosTemplate(properties.enabled),
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
        /**
         * @Property weight: The weight of the server group. A larger value specifies a higher weight. A server group with a higher weight receives more requests. Default value: 100.
         */
        readonly weight?: number | ros.IResolvable;
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
    if(properties.weight && (typeof properties.weight) !== 'object') {
        errors.collect(ros.propertyValidator('weight', ros.validateRange)({
            data: properties.weight,
            min: 1,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('weight', ros.validateNumber)(properties.weight));
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
      Weight: ros.numberToRosTemplate(properties.weight),
    };
}

export namespace RosRule {
    /**
     * @stability external
     */
    export interface SourceIpConfigProperty {
        /**
         * @Property values: The IP addresses or CIDR blocks.
     * You can specify at most five values for SourceIp.
         */
        readonly values?: Array<string | ros.IResolvable> | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `SourceIpConfigProperty`
 *
 * @param properties - the TypeScript properties of a `SourceIpConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosRule_SourceIpConfigPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.values && (Array.isArray(properties.values) || (typeof properties.values) === 'string')) {
        errors.collect(ros.propertyValidator('values', ros.validateLength)({
            data: properties.values.length,
            min: undefined,
            max: 5,
          }));
    }
    errors.collect(ros.propertyValidator('values', ros.listValidator(ros.validateString))(properties.values));
    return errors.wrap('supplied properties not correct for "SourceIpConfigProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ALB::Rule.SourceIpConfig` resource
 *
 * @param properties - the TypeScript properties of a `SourceIpConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ALB::Rule.SourceIpConfig` resource.
 */
// @ts-ignore TS6133
function rosRuleSourceIpConfigPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosRule_SourceIpConfigPropertyValidator(properties).assertSuccess();
    return {
      Values: ros.listMapper(ros.stringToRosTemplate)(properties.values),
    };
}

export namespace RosRule {
    /**
     * @stability external
     */
    export interface TrafficLimitConfigProperty {
        /**
         * @Property perIpQps: QPS per IP address. 
     * Note If both QPS and PerIpQps are set, make sure that the PerIpQps is smaller than the QPS.
         */
        readonly perIpQps?: number | ros.IResolvable;
        /**
         * @Property qps: Queries per second (QPS).
         */
        readonly qps: number | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `TrafficLimitConfigProperty`
 *
 * @param properties - the TypeScript properties of a `TrafficLimitConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosRule_TrafficLimitConfigPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.perIpQps && (typeof properties.perIpQps) !== 'object') {
        errors.collect(ros.propertyValidator('perIpQps', ros.validateRange)({
            data: properties.perIpQps,
            min: 1,
            max: 100000,
          }));
    }
    errors.collect(ros.propertyValidator('perIpQps', ros.validateNumber)(properties.perIpQps));
    errors.collect(ros.propertyValidator('qps', ros.requiredValidator)(properties.qps));
    if(properties.qps && (typeof properties.qps) !== 'object') {
        errors.collect(ros.propertyValidator('qps', ros.validateRange)({
            data: properties.qps,
            min: 1,
            max: 100000,
          }));
    }
    errors.collect(ros.propertyValidator('qps', ros.validateNumber)(properties.qps));
    return errors.wrap('supplied properties not correct for "TrafficLimitConfigProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ALB::Rule.TrafficLimitConfig` resource
 *
 * @param properties - the TypeScript properties of a `TrafficLimitConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ALB::Rule.TrafficLimitConfig` resource.
 */
// @ts-ignore TS6133
function rosRuleTrafficLimitConfigPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosRule_TrafficLimitConfigPropertyValidator(properties).assertSuccess();
    return {
      PerIpQps: ros.numberToRosTemplate(properties.perIpQps),
      QPS: ros.numberToRosTemplate(properties.qps),
    };
}

export namespace RosRule {
    /**
     * @stability external
     */
    export interface TrafficMirrorConfigProperty {
        /**
         * @Property mirrorGroupConfig: Traffic mirroring to server groups.
         */
        readonly mirrorGroupConfig: RosRule.MirrorGroupConfigProperty | ros.IResolvable;
        /**
         * @Property targetType: The type of destination to which network traffic is mirrored. Valid values:
     * ForwardGroupMirror: a server group
     * SlsMirror: Log Service
         */
        readonly targetType: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `TrafficMirrorConfigProperty`
 *
 * @param properties - the TypeScript properties of a `TrafficMirrorConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosRule_TrafficMirrorConfigPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('mirrorGroupConfig', ros.requiredValidator)(properties.mirrorGroupConfig));
    errors.collect(ros.propertyValidator('mirrorGroupConfig', RosRule_MirrorGroupConfigPropertyValidator)(properties.mirrorGroupConfig));
    errors.collect(ros.propertyValidator('targetType', ros.requiredValidator)(properties.targetType));
    errors.collect(ros.propertyValidator('targetType', ros.validateString)(properties.targetType));
    return errors.wrap('supplied properties not correct for "TrafficMirrorConfigProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ALB::Rule.TrafficMirrorConfig` resource
 *
 * @param properties - the TypeScript properties of a `TrafficMirrorConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ALB::Rule.TrafficMirrorConfig` resource.
 */
// @ts-ignore TS6133
function rosRuleTrafficMirrorConfigPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosRule_TrafficMirrorConfigPropertyValidator(properties).assertSuccess();
    return {
      MirrorGroupConfig: rosRuleMirrorGroupConfigPropertyToRosTemplate(properties.mirrorGroupConfig),
      TargetType: ros.stringToRosTemplate(properties.targetType),
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
 * Properties for defining a `ALIYUN::ALB::SecurityPolicy`
 */
export interface RosSecurityPolicyProps {

    /**
     * @Property ciphers: The supported cipher suites, which are determined by the TLS protocol version.
     * The specified cipher suites must be supported by at least one TLS protocol version that you specify.
     * Note For example, if you set the TLSVersions parameter to TLSv1.3, you must specify cipher suites that are supported by TLS 1.3.
     */
    readonly ciphers: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property securityPolicyName: The name of the security policy.
     * The name must be 2 to 128 characters in length, and can contain letters, digits, periods
     * (.), underscores (_), and hyphens (-). The name must start with a letter.
     */
    readonly securityPolicyName: string | ros.IResolvable;

    /**
     * @Property tlsVersions: The supported versions of the Transport Layer Security (TLS) protocol. Valid values: TLSv1.0, TLSv1.1, TLSv1.2, and TLSv1.3 and so on.
     */
    readonly tlsVersions: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosSecurityPolicyProps`
 *
 * @param properties - the TypeScript properties of a `RosSecurityPolicyProps`
 *
 * @returns the result of the validation.
 */
function RosSecurityPolicyPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('ciphers', ros.requiredValidator)(properties.ciphers));
    if(properties.ciphers && (Array.isArray(properties.ciphers) || (typeof properties.ciphers) === 'string')) {
        errors.collect(ros.propertyValidator('ciphers', ros.validateLength)({
            data: properties.ciphers.length,
            min: 1,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('ciphers', ros.listValidator(ros.validateString))(properties.ciphers));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('tlsVersions', ros.requiredValidator)(properties.tlsVersions));
    if(properties.tlsVersions && (Array.isArray(properties.tlsVersions) || (typeof properties.tlsVersions) === 'string')) {
        errors.collect(ros.propertyValidator('tlsVersions', ros.validateLength)({
            data: properties.tlsVersions.length,
            min: 1,
            max: 5,
          }));
    }
    errors.collect(ros.propertyValidator('tlsVersions', ros.listValidator(ros.validateString))(properties.tlsVersions));
    errors.collect(ros.propertyValidator('securityPolicyName', ros.requiredValidator)(properties.securityPolicyName));
    errors.collect(ros.propertyValidator('securityPolicyName', ros.validateString)(properties.securityPolicyName));
    return errors.wrap('supplied properties not correct for "RosSecurityPolicyProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ALB::SecurityPolicy` resource
 *
 * @param properties - the TypeScript properties of a `RosSecurityPolicyProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ALB::SecurityPolicy` resource.
 */
// @ts-ignore TS6133
function rosSecurityPolicyPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosSecurityPolicyPropsValidator(properties).assertSuccess();
    }
    return {
      Ciphers: ros.listMapper(ros.stringToRosTemplate)(properties.ciphers),
      SecurityPolicyName: ros.stringToRosTemplate(properties.securityPolicyName),
      TLSVersions: ros.listMapper(ros.stringToRosTemplate)(properties.tlsVersions),
      ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
    };
}

/**
 * A ROS template type:  `ALIYUN::ALB::SecurityPolicy`
 */
export class RosSecurityPolicy extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ALB::SecurityPolicy";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute SecurityPolicyId: The ID of the security policy.
     */
    public readonly attrSecurityPolicyId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property ciphers: The supported cipher suites, which are determined by the TLS protocol version.
     * The specified cipher suites must be supported by at least one TLS protocol version that you specify.
     * Note For example, if you set the TLSVersions parameter to TLSv1.3, you must specify cipher suites that are supported by TLS 1.3.
     */
    public ciphers: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property securityPolicyName: The name of the security policy.
     * The name must be 2 to 128 characters in length, and can contain letters, digits, periods
     * (.), underscores (_), and hyphens (-). The name must start with a letter.
     */
    public securityPolicyName: string | ros.IResolvable;

    /**
     * @Property tlsVersions: The supported versions of the Transport Layer Security (TLS) protocol. Valid values: TLSv1.0, TLSv1.1, TLSv1.2, and TLSv1.3 and so on.
     */
    public tlsVersions: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::ALB::SecurityPolicy`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSecurityPolicyProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosSecurityPolicy.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrSecurityPolicyId = this.getAtt('SecurityPolicyId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.ciphers = props.ciphers;
        this.securityPolicyName = props.securityPolicyName;
        this.tlsVersions = props.tlsVersions;
        this.resourceGroupId = props.resourceGroupId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            ciphers: this.ciphers,
            securityPolicyName: this.securityPolicyName,
            tlsVersions: this.tlsVersions,
            resourceGroupId: this.resourceGroupId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosSecurityPolicyPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
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
     * Note: This parameter is required if the ServerGroupType parameter is set to Instance or Ip.
     * Note: This parameter takes effect when the ServerGroupType parameter is set to Instance or Ip.
     */
    readonly vpcId: string | ros.IResolvable;

    /**
     * @Property protocol: The backend protocol. Valid values:
     * HTTP (default): The server group can be associated with HTTPS, HTTP, and QUIC listeners.
     * HTTPS: The server group can be associated with HTTPS listeners.
     * gRPC: The server group can be associated with HTTPS and QUIC listeners.
     * Note: If the ServerGroupType parameter is set to Fc, you can set Protocol only to HTTP.
     */
    readonly protocol?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property scheduler: The scheduling algorithm. Valid values:
     * Wrr (default): The weighted round-robin algorithm is used. Backend servers that have higher weights receive more requests than those that have lower weights.
     * Wlc: The weighted least connections algorithm is used. Requests are distributed based on the weights and the number of connections to backend servers. If two backend servers have the same weight, the backend server that has fewer connections is expected to receive more requests.
     * Sch: The consistent hashing algorithm is used. Requests from the same source IP address are distributed to the same backend server.
     * Note: This parameter takes effect when the ServerGroupType parameter is set to Instance or Ip.
     */
    readonly scheduler?: string | ros.IResolvable;

    /**
     * @Property serverGroupType: The type of the server group. Valid values:
     * Instance (default): allows you add servers by specifying Ecs, Ens, or Eci.
     * Ip: allows you to add servers by specifying IP addresses.
     * Fc: allows you to add servers by specifying functions of Function Compute.
     */
    readonly serverGroupType?: string | ros.IResolvable;

    /**
     * @Property serviceName: This parameter is available only if the ALB Ingress controller is used. In this case, set the parameter to the name of the Kubernetes Service that is associated with the server group.
     */
    readonly serviceName?: string | ros.IResolvable;

    /**
     * @Property stickySessionConfig: The configuration of session persistence.
     * Note: This parameter is required if the ServerGroupType parameter is set to Instance or Ip.
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
    errors.collect(ros.propertyValidator('serviceName', ros.validateString)(properties.serviceName));
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
          allowedValues: ["HTTPS","HTTP","gRPC"],
        }));
    }
    errors.collect(ros.propertyValidator('protocol', ros.validateString)(properties.protocol));
    if(properties.serverGroupType && (typeof properties.serverGroupType) !== 'object') {
        errors.collect(ros.propertyValidator('serverGroupType', ros.validateAllowedValues)({
          data: properties.serverGroupType,
          allowedValues: ["Ip","Instance","Fc"],
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
      ServiceName: ros.stringToRosTemplate(properties.serviceName),
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
     * Note: This parameter is required if the ServerGroupType parameter is set to Instance or Ip.
     * Note: This parameter takes effect when the ServerGroupType parameter is set to Instance or Ip.
     */
    public vpcId: string | ros.IResolvable;

    /**
     * @Property protocol: The backend protocol. Valid values:
     * HTTP (default): The server group can be associated with HTTPS, HTTP, and QUIC listeners.
     * HTTPS: The server group can be associated with HTTPS listeners.
     * gRPC: The server group can be associated with HTTPS and QUIC listeners.
     * Note: If the ServerGroupType parameter is set to Fc, you can set Protocol only to HTTP.
     */
    public protocol: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property scheduler: The scheduling algorithm. Valid values:
     * Wrr (default): The weighted round-robin algorithm is used. Backend servers that have higher weights receive more requests than those that have lower weights.
     * Wlc: The weighted least connections algorithm is used. Requests are distributed based on the weights and the number of connections to backend servers. If two backend servers have the same weight, the backend server that has fewer connections is expected to receive more requests.
     * Sch: The consistent hashing algorithm is used. Requests from the same source IP address are distributed to the same backend server.
     * Note: This parameter takes effect when the ServerGroupType parameter is set to Instance or Ip.
     */
    public scheduler: string | ros.IResolvable | undefined;

    /**
     * @Property serverGroupType: The type of the server group. Valid values:
     * Instance (default): allows you add servers by specifying Ecs, Ens, or Eci.
     * Ip: allows you to add servers by specifying IP addresses.
     * Fc: allows you to add servers by specifying functions of Function Compute.
     */
    public serverGroupType: string | ros.IResolvable | undefined;

    /**
     * @Property serviceName: This parameter is available only if the ALB Ingress controller is used. In this case, set the parameter to the name of the Kubernetes Service that is associated with the server group.
     */
    public serviceName: string | ros.IResolvable | undefined;

    /**
     * @Property stickySessionConfig: The configuration of session persistence.
     * Note: This parameter is required if the ServerGroupType parameter is set to Instance or Ip.
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
        this.serviceName = props.serviceName;
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
            serviceName: this.serviceName,
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
         * @Property healthCheckCodes: The HTTP status codes that are used to determine whether the backend server passes the health check.
     * If HealthCheckProtocol is set to HTTP, HealthCheckCodes can be set to http_2xx (default), http_3xx, http_4xx, and http_5xx. Separate multiple HTTP status codes with a comma (,).
     * If HealthCheckProtocol is set to gRPC, HealthCheckCodes can be set to 0 to 99. Default value: 0. Value ranges are supported. You can enter at most 20 value ranges. Separate multiple value ranges with commas (,).)
     * Note: This parameter takes effect only when the HealthCheckProtocol parameter is set to HTTP or gRPC.
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
         * @Property healthCheckMethod: The HTTP method that is used for health checks. Valid values:
     * GET: If the length of a response exceeds 8 KB, the response is truncated. However, the health check result is not affected.
     * POST: By default, gRPC health checks use the POST method.
     * HEAD: By default, HTTP health checks use the HEAD method.
     * Note: This parameter takes effect only when the HealthCheckProtocol parameter is set to HTTP or gRPC.
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
     * Note: This parameter is required only if the HealthCheckProtocol parameter is set to HTTP.
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
     * Note: This parameter is required only if the HealthCheckProtocol parameter is set to HTTP.
     * Note: This parameter takes effect only when the HealthCheckProtocol parameter is set to HTTP.
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
     * Note: This parameter is required only if the HealthCheckProtocol parameter is set to HTTP.
         */
        readonly healthCheckHttpVersion?: string | ros.IResolvable;
        /**
         * @Property healthCheckEnabled: Specifies whether to enable the health check feature. Valid values:
     * true: enables the feature.
     * false: disables the feature.
     * Note: If the ServerGroupType parameter is set to Instance or Ip, the health check feature is enabled by default. If the ServerGroupType parameter is set to Fc, the health check feature is disabled by default.
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
          allowedValues: ["HTTP","HTTPS","gRPC"],
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
     * Note: This parameter is required if the StickySessionEnabled parameter is set to true and the StickySessionType parameter is set to Server.
         */
        readonly cookie?: string | ros.IResolvable;
        /**
         * @Property cookieTimeout: The timeout period of the cookie. Unit: seconds.
     * Valid values: 1 to 86400.
     * Default value: 1000.
     * Note: This parameter is required if the StickySessionEnabled parameter is set to true and the StickySessionType parameter is set to Insert.
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
     * Note: This parameter is required if the StickySessionEnabled parameter is set to true.
         */
        readonly stickySessionType?: string | ros.IResolvable;
        /**
         * @Property stickySessionEnabled: Specifies whether to enable session persistence. Valid values: true and false.
     * Note: This parameter is required if the ServerGroupType parameter is set to Instance or Ip.
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
