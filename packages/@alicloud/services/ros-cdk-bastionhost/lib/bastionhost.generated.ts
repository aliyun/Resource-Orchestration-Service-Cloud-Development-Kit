// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosExportConfigJob`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-exportconfigjob
 */
export interface RosExportConfigJobProps {

    /**
     * @Property instanceId: The ID of the bastion host instance.
     */
    readonly instanceId: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosExportConfigJobProps`
 *
 * @param properties - the TypeScript properties of a `RosExportConfigJobProps`
 *
 * @returns the result of the validation.
 */
function RosExportConfigJobPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('instanceId', ros.requiredValidator)(properties.instanceId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    return errors.wrap('supplied properties not correct for "RosExportConfigJobProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::BastionHost::ExportConfigJob` resource
 *
 * @param properties - the TypeScript properties of a `RosExportConfigJobProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::BastionHost::ExportConfigJob` resource.
 */
// @ts-ignore TS6133
function rosExportConfigJobPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosExportConfigJobPropsValidator(properties).assertSuccess();
    }
    return {
      'InstanceId': ros.stringToRosTemplate(properties.instanceId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::BastionHost::ExportConfigJob`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ExportConfigJob` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-exportconfigjob
 */
export class RosExportConfigJob extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::BastionHost::ExportConfigJob";

    /**
     * @Attribute DownloadUrl: The download url of the export config job.
     */
    public readonly attrDownloadUrl: ros.IResolvable;

    /**
     * @Attribute JobId: The ID of the export config job.
     */
    public readonly attrJobId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property instanceId: The ID of the bastion host instance.
     */
    public instanceId: string | ros.IResolvable;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosExportConfigJobProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosExportConfigJob.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDownloadUrl = this.getAtt('DownloadUrl');
        this.attrJobId = this.getAtt('JobId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.instanceId = props.instanceId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            instanceId: this.instanceId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosExportConfigJobPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosHost`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-host
 */
export interface RosHostProps {

    /**
     * @Property activeAddressType: The endpoint type of the host that you want to create. Valid values:
     * Public: a public endpoint
     * Private: an internal endpoint
     */
    readonly activeAddressType: string | ros.IResolvable;

    /**
     * @Property hostName: The name of the host that you want to create. The name can be up to 128 characters in length.
     */
    readonly hostName: string | ros.IResolvable;

    /**
     * @Property instanceId: The ID of the Bastionhost instance where you want to create the host.
     * Note: You can call the DescribeInstances operation to query the ID of the Bastionhost instance.
     */
    readonly instanceId: string | ros.IResolvable;

    /**
     * @Property osType: The operating system of the host that you want to create. Valid values:
     * - Linux
     * - Windows
     */
    readonly osType: string | ros.IResolvable;

    /**
     * @Property source: The source of the host that you want to create. Valid values:
     * - Local: an on-premises host
     * - Ecs: an Elastic Compute Service (ECS) instance
     * - Rds: a host in a dedicated cluster
     */
    readonly source: string | ros.IResolvable;

    /**
     * @Property comment: The description of the host that you want to create. The value can be up to 500 characters.
     */
    readonly comment?: string | ros.IResolvable;

    /**
     * @Property hostPrivateAddress: The internal endpoint of the host that you want to create. You can set this parameter to a domain name or an IP address.
     * Note: This parameter is required if the ActiveAddressType parameter is set to Private.
     */
    readonly hostPrivateAddress?: string | ros.IResolvable;

    /**
     * @Property hostPublicAddress: The public endpoint of the host that you want to create. You can set this parameter to a domain name or an IP address.
     * Note: This parameter is required if the ActiveAddressType parameter is set to Public.
     */
    readonly hostPublicAddress?: string | ros.IResolvable;

    /**
     * @Property instanceRegionId: The ID of the region where the ECS instance or dedicated cluster host that you want to create resides.
     * Note: This parameter is required if the Source parameter is set to Ecs or Rds.
     */
    readonly instanceRegionId?: string | ros.IResolvable;

    /**
     * @Property sourceInstanceId: The ID of the ECS instance or dedicated cluster host that you want to create.
     * Note This parameter is required if the Source parameter is set to Ecs or Rds.
     */
    readonly sourceInstanceId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosHostProps`
 *
 * @param properties - the TypeScript properties of a `RosHostProps`
 *
 * @returns the result of the validation.
 */
function RosHostPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.comment && (Array.isArray(properties.comment) || (typeof properties.comment) === 'string')) {
        errors.collect(ros.propertyValidator('comment', ros.validateLength)({
            data: properties.comment.length,
            min: undefined,
            max: 500,
          }));
    }
    errors.collect(ros.propertyValidator('comment', ros.validateString)(properties.comment));
    errors.collect(ros.propertyValidator('activeAddressType', ros.requiredValidator)(properties.activeAddressType));
    if(properties.activeAddressType && (typeof properties.activeAddressType) !== 'object') {
        errors.collect(ros.propertyValidator('activeAddressType', ros.validateAllowedValues)({
          data: properties.activeAddressType,
          allowedValues: ["Private","Public"],
        }));
    }
    errors.collect(ros.propertyValidator('activeAddressType', ros.validateString)(properties.activeAddressType));
    errors.collect(ros.propertyValidator('instanceRegionId', ros.validateString)(properties.instanceRegionId));
    errors.collect(ros.propertyValidator('hostPrivateAddress', ros.validateString)(properties.hostPrivateAddress));
    errors.collect(ros.propertyValidator('hostPublicAddress', ros.validateString)(properties.hostPublicAddress));
    errors.collect(ros.propertyValidator('instanceId', ros.requiredValidator)(properties.instanceId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    errors.collect(ros.propertyValidator('osType', ros.requiredValidator)(properties.osType));
    if(properties.osType && (typeof properties.osType) !== 'object') {
        errors.collect(ros.propertyValidator('osType', ros.validateAllowedValues)({
          data: properties.osType,
          allowedValues: ["Linux","Windows"],
        }));
    }
    errors.collect(ros.propertyValidator('osType', ros.validateString)(properties.osType));
    errors.collect(ros.propertyValidator('sourceInstanceId', ros.validateString)(properties.sourceInstanceId));
    errors.collect(ros.propertyValidator('hostName', ros.requiredValidator)(properties.hostName));
    if(properties.hostName && (Array.isArray(properties.hostName) || (typeof properties.hostName) === 'string')) {
        errors.collect(ros.propertyValidator('hostName', ros.validateLength)({
            data: properties.hostName.length,
            min: undefined,
            max: 128,
          }));
    }
    errors.collect(ros.propertyValidator('hostName', ros.validateString)(properties.hostName));
    errors.collect(ros.propertyValidator('source', ros.requiredValidator)(properties.source));
    if(properties.source && (typeof properties.source) !== 'object') {
        errors.collect(ros.propertyValidator('source', ros.validateAllowedValues)({
          data: properties.source,
          allowedValues: ["Ecs","Local","Rds"],
        }));
    }
    errors.collect(ros.propertyValidator('source', ros.validateString)(properties.source));
    return errors.wrap('supplied properties not correct for "RosHostProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::BastionHost::Host` resource
 *
 * @param properties - the TypeScript properties of a `RosHostProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::BastionHost::Host` resource.
 */
// @ts-ignore TS6133
function rosHostPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosHostPropsValidator(properties).assertSuccess();
    }
    return {
      'ActiveAddressType': ros.stringToRosTemplate(properties.activeAddressType),
      'HostName': ros.stringToRosTemplate(properties.hostName),
      'InstanceId': ros.stringToRosTemplate(properties.instanceId),
      'OSType': ros.stringToRosTemplate(properties.osType),
      'Source': ros.stringToRosTemplate(properties.source),
      'Comment': ros.stringToRosTemplate(properties.comment),
      'HostPrivateAddress': ros.stringToRosTemplate(properties.hostPrivateAddress),
      'HostPublicAddress': ros.stringToRosTemplate(properties.hostPublicAddress),
      'InstanceRegionId': ros.stringToRosTemplate(properties.instanceRegionId),
      'SourceInstanceId': ros.stringToRosTemplate(properties.sourceInstanceId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::BastionHost::Host`, which is used to create a host for O&M in a bastion host.
 * @Note This class does not contain additional functions, so it is recommended to use the `Host` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-host
 */
export class RosHost extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::BastionHost::Host";

    /**
     * @Attribute HostId: The ID of the host that was created.
     */
    public readonly attrHostId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property activeAddressType: The endpoint type of the host that you want to create. Valid values:
     * Public: a public endpoint
     * Private: an internal endpoint
     */
    public activeAddressType: string | ros.IResolvable;

    /**
     * @Property hostName: The name of the host that you want to create. The name can be up to 128 characters in length.
     */
    public hostName: string | ros.IResolvable;

    /**
     * @Property instanceId: The ID of the Bastionhost instance where you want to create the host.
     * Note: You can call the DescribeInstances operation to query the ID of the Bastionhost instance.
     */
    public instanceId: string | ros.IResolvable;

    /**
     * @Property osType: The operating system of the host that you want to create. Valid values:
     * - Linux
     * - Windows
     */
    public osType: string | ros.IResolvable;

    /**
     * @Property source: The source of the host that you want to create. Valid values:
     * - Local: an on-premises host
     * - Ecs: an Elastic Compute Service (ECS) instance
     * - Rds: a host in a dedicated cluster
     */
    public source: string | ros.IResolvable;

    /**
     * @Property comment: The description of the host that you want to create. The value can be up to 500 characters.
     */
    public comment: string | ros.IResolvable | undefined;

    /**
     * @Property hostPrivateAddress: The internal endpoint of the host that you want to create. You can set this parameter to a domain name or an IP address.
     * Note: This parameter is required if the ActiveAddressType parameter is set to Private.
     */
    public hostPrivateAddress: string | ros.IResolvable | undefined;

    /**
     * @Property hostPublicAddress: The public endpoint of the host that you want to create. You can set this parameter to a domain name or an IP address.
     * Note: This parameter is required if the ActiveAddressType parameter is set to Public.
     */
    public hostPublicAddress: string | ros.IResolvable | undefined;

    /**
     * @Property instanceRegionId: The ID of the region where the ECS instance or dedicated cluster host that you want to create resides.
     * Note: This parameter is required if the Source parameter is set to Ecs or Rds.
     */
    public instanceRegionId: string | ros.IResolvable | undefined;

    /**
     * @Property sourceInstanceId: The ID of the ECS instance or dedicated cluster host that you want to create.
     * Note This parameter is required if the Source parameter is set to Ecs or Rds.
     */
    public sourceInstanceId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosHostProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosHost.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrHostId = this.getAtt('HostId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.activeAddressType = props.activeAddressType;
        this.hostName = props.hostName;
        this.instanceId = props.instanceId;
        this.osType = props.osType;
        this.source = props.source;
        this.comment = props.comment;
        this.hostPrivateAddress = props.hostPrivateAddress;
        this.hostPublicAddress = props.hostPublicAddress;
        this.instanceRegionId = props.instanceRegionId;
        this.sourceInstanceId = props.sourceInstanceId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            activeAddressType: this.activeAddressType,
            hostName: this.hostName,
            instanceId: this.instanceId,
            osType: this.osType,
            source: this.source,
            comment: this.comment,
            hostPrivateAddress: this.hostPrivateAddress,
            hostPublicAddress: this.hostPublicAddress,
            instanceRegionId: this.instanceRegionId,
            sourceInstanceId: this.sourceInstanceId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosHostPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosHostAccount`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-hostaccount
 */
export interface RosHostAccountProps {

    /**
     * @Property hostAccountName: The name of the host account.
     */
    readonly hostAccountName: string | ros.IResolvable;

    /**
     * @Property hostId: The ID of the host.
     */
    readonly hostId: string | ros.IResolvable;

    /**
     * @Property instanceId: The ID of the bastion host instance.
     */
    readonly instanceId: string | ros.IResolvable;

    /**
     * @Property protocolName: The protocol name of the host account. Valid values: SSH, RDP.
     */
    readonly protocolName: string | ros.IResolvable;

    /**
     * @Property hostShareKeyId: The ID of the host share key. This parameter is required when the protocol is SSH.
     */
    readonly hostShareKeyId?: string | ros.IResolvable;

    /**
     * @Property passPhrase: The passphrase of the host account. This parameter is required when the protocol is SSH and the private key is encrypted.
     */
    readonly passPhrase?: string | ros.IResolvable;

    /**
     * @Property password: The password of the host account. This parameter is required when the protocol is SSH or RDP.
     */
    readonly password?: string | ros.IResolvable;

    /**
     * @Property privateKey: The private key of the host account. This parameter is required when the protocol is SSH.
     */
    readonly privateKey?: string | ros.IResolvable;

    /**
     * @Property privilegeType: The privilege type of the host account. Valid values: Normal, Administrator.
     */
    readonly privilegeType?: string | ros.IResolvable;

    /**
     * @Property rotationMode: The rotation mode of the host account. Valid values: Manual, Automatic.
     */
    readonly rotationMode?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosHostAccountProps`
 *
 * @param properties - the TypeScript properties of a `RosHostAccountProps`
 *
 * @returns the result of the validation.
 */
function RosHostAccountPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('protocolName', ros.requiredValidator)(properties.protocolName));
    errors.collect(ros.propertyValidator('protocolName', ros.validateString)(properties.protocolName));
    errors.collect(ros.propertyValidator('hostAccountName', ros.requiredValidator)(properties.hostAccountName));
    errors.collect(ros.propertyValidator('hostAccountName', ros.validateString)(properties.hostAccountName));
    errors.collect(ros.propertyValidator('privateKey', ros.validateString)(properties.privateKey));
    errors.collect(ros.propertyValidator('instanceId', ros.requiredValidator)(properties.instanceId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    errors.collect(ros.propertyValidator('rotationMode', ros.validateString)(properties.rotationMode));
    errors.collect(ros.propertyValidator('hostId', ros.requiredValidator)(properties.hostId));
    errors.collect(ros.propertyValidator('hostId', ros.validateString)(properties.hostId));
    errors.collect(ros.propertyValidator('passPhrase', ros.validateString)(properties.passPhrase));
    errors.collect(ros.propertyValidator('hostShareKeyId', ros.validateString)(properties.hostShareKeyId));
    errors.collect(ros.propertyValidator('privilegeType', ros.validateString)(properties.privilegeType));
    errors.collect(ros.propertyValidator('password', ros.validateString)(properties.password));
    return errors.wrap('supplied properties not correct for "RosHostAccountProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::BastionHost::HostAccount` resource
 *
 * @param properties - the TypeScript properties of a `RosHostAccountProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::BastionHost::HostAccount` resource.
 */
// @ts-ignore TS6133
function rosHostAccountPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosHostAccountPropsValidator(properties).assertSuccess();
    }
    return {
      'HostAccountName': ros.stringToRosTemplate(properties.hostAccountName),
      'HostId': ros.stringToRosTemplate(properties.hostId),
      'InstanceId': ros.stringToRosTemplate(properties.instanceId),
      'ProtocolName': ros.stringToRosTemplate(properties.protocolName),
      'HostShareKeyId': ros.stringToRosTemplate(properties.hostShareKeyId),
      'PassPhrase': ros.stringToRosTemplate(properties.passPhrase),
      'Password': ros.stringToRosTemplate(properties.password),
      'PrivateKey': ros.stringToRosTemplate(properties.privateKey),
      'PrivilegeType': ros.stringToRosTemplate(properties.privilegeType),
      'RotationMode': ros.stringToRosTemplate(properties.rotationMode),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::BastionHost::HostAccount`.
 * @Note This class does not contain additional functions, so it is recommended to use the `HostAccount` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-hostaccount
 */
export class RosHostAccount extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::BastionHost::HostAccount";

    /**
     * @Attribute HostAccountId: The ID of the host account.
     */
    public readonly attrHostAccountId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property hostAccountName: The name of the host account.
     */
    public hostAccountName: string | ros.IResolvable;

    /**
     * @Property hostId: The ID of the host.
     */
    public hostId: string | ros.IResolvable;

    /**
     * @Property instanceId: The ID of the bastion host instance.
     */
    public instanceId: string | ros.IResolvable;

    /**
     * @Property protocolName: The protocol name of the host account. Valid values: SSH, RDP.
     */
    public protocolName: string | ros.IResolvable;

    /**
     * @Property hostShareKeyId: The ID of the host share key. This parameter is required when the protocol is SSH.
     */
    public hostShareKeyId: string | ros.IResolvable | undefined;

    /**
     * @Property passPhrase: The passphrase of the host account. This parameter is required when the protocol is SSH and the private key is encrypted.
     */
    public passPhrase: string | ros.IResolvable | undefined;

    /**
     * @Property password: The password of the host account. This parameter is required when the protocol is SSH or RDP.
     */
    public password: string | ros.IResolvable | undefined;

    /**
     * @Property privateKey: The private key of the host account. This parameter is required when the protocol is SSH.
     */
    public privateKey: string | ros.IResolvable | undefined;

    /**
     * @Property privilegeType: The privilege type of the host account. Valid values: Normal, Administrator.
     */
    public privilegeType: string | ros.IResolvable | undefined;

    /**
     * @Property rotationMode: The rotation mode of the host account. Valid values: Manual, Automatic.
     */
    public rotationMode: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosHostAccountProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosHostAccount.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrHostAccountId = this.getAtt('HostAccountId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.hostAccountName = props.hostAccountName;
        this.hostId = props.hostId;
        this.instanceId = props.instanceId;
        this.protocolName = props.protocolName;
        this.hostShareKeyId = props.hostShareKeyId;
        this.passPhrase = props.passPhrase;
        this.password = props.password;
        this.privateKey = props.privateKey;
        this.privilegeType = props.privilegeType;
        this.rotationMode = props.rotationMode;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            hostAccountName: this.hostAccountName,
            hostId: this.hostId,
            instanceId: this.instanceId,
            protocolName: this.protocolName,
            hostShareKeyId: this.hostShareKeyId,
            passPhrase: this.passPhrase,
            password: this.password,
            privateKey: this.privateKey,
            privilegeType: this.privilegeType,
            rotationMode: this.rotationMode,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosHostAccountPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosHostAccountUserGroupAttachment`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-hostaccountusergroupattachment
 */
export interface RosHostAccountUserGroupAttachmentProps {

    /**
     * @Property hosts: Specify the host IDs and host account IDs that you want to authorize for the user group.
     */
    readonly hosts: Array<RosHostAccountUserGroupAttachment.HostsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property instanceId: The ID of the BastionHost instance.
     */
    readonly instanceId: string | ros.IResolvable;

    /**
     * @Property userGroupId: The ID of the user group.
     */
    readonly userGroupId: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosHostAccountUserGroupAttachmentProps`
 *
 * @param properties - the TypeScript properties of a `RosHostAccountUserGroupAttachmentProps`
 *
 * @returns the result of the validation.
 */
function RosHostAccountUserGroupAttachmentPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('hosts', ros.requiredValidator)(properties.hosts));
    if(properties.hosts && (Array.isArray(properties.hosts) || (typeof properties.hosts) === 'string')) {
        errors.collect(ros.propertyValidator('hosts', ros.validateLength)({
            data: properties.hosts.length,
            min: 1,
            max: 10,
          }));
    }
    errors.collect(ros.propertyValidator('hosts', ros.listValidator(RosHostAccountUserGroupAttachment_HostsPropertyValidator))(properties.hosts));
    errors.collect(ros.propertyValidator('instanceId', ros.requiredValidator)(properties.instanceId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    errors.collect(ros.propertyValidator('userGroupId', ros.requiredValidator)(properties.userGroupId));
    errors.collect(ros.propertyValidator('userGroupId', ros.validateString)(properties.userGroupId));
    return errors.wrap('supplied properties not correct for "RosHostAccountUserGroupAttachmentProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::BastionHost::HostAccountUserGroupAttachment` resource
 *
 * @param properties - the TypeScript properties of a `RosHostAccountUserGroupAttachmentProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::BastionHost::HostAccountUserGroupAttachment` resource.
 */
// @ts-ignore TS6133
function rosHostAccountUserGroupAttachmentPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosHostAccountUserGroupAttachmentPropsValidator(properties).assertSuccess();
    }
    return {
      'Hosts': ros.listMapper(rosHostAccountUserGroupAttachmentHostsPropertyToRosTemplate)(properties.hosts),
      'InstanceId': ros.stringToRosTemplate(properties.instanceId),
      'UserGroupId': ros.stringToRosTemplate(properties.userGroupId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::BastionHost::HostAccountUserGroupAttachment`.
 * @Note This class does not contain additional functions, so it is recommended to use the `HostAccountUserGroupAttachment` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-hostaccountusergroupattachment
 */
export class RosHostAccountUserGroupAttachment extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::BastionHost::HostAccountUserGroupAttachment";

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property hosts: Specify the host IDs and host account IDs that you want to authorize for the user group.
     */
    public hosts: Array<RosHostAccountUserGroupAttachment.HostsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property instanceId: The ID of the BastionHost instance.
     */
    public instanceId: string | ros.IResolvable;

    /**
     * @Property userGroupId: The ID of the user group.
     */
    public userGroupId: string | ros.IResolvable;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosHostAccountUserGroupAttachmentProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosHostAccountUserGroupAttachment.ROS_RESOURCE_TYPE_NAME, properties: props });

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.hosts = props.hosts;
        this.instanceId = props.instanceId;
        this.userGroupId = props.userGroupId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            hosts: this.hosts,
            instanceId: this.instanceId,
            userGroupId: this.userGroupId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosHostAccountUserGroupAttachmentPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosHostAccountUserGroupAttachment {
    /**
     * @stability external
     */
    export interface HostsProperty {
        /**
         * @Property hostId: The ID of the host.
         */
        readonly hostId: string | ros.IResolvable;
        /**
         * @Property hostAccountIds: The IDs of the host accounts.
         */
        readonly hostAccountIds?: Array<string | ros.IResolvable> | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `HostsProperty`
 *
 * @param properties - the TypeScript properties of a `HostsProperty`
 *
 * @returns the result of the validation.
 */
function RosHostAccountUserGroupAttachment_HostsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('hostId', ros.requiredValidator)(properties.hostId));
    errors.collect(ros.propertyValidator('hostId', ros.validateString)(properties.hostId));
    if(properties.hostAccountIds && (Array.isArray(properties.hostAccountIds) || (typeof properties.hostAccountIds) === 'string')) {
        errors.collect(ros.propertyValidator('hostAccountIds', ros.validateLength)({
            data: properties.hostAccountIds.length,
            min: 1,
            max: 10,
          }));
    }
    errors.collect(ros.propertyValidator('hostAccountIds', ros.listValidator(ros.validateString))(properties.hostAccountIds));
    return errors.wrap('supplied properties not correct for "HostsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::BastionHost::HostAccountUserGroupAttachment.Hosts` resource
 *
 * @param properties - the TypeScript properties of a `HostsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::BastionHost::HostAccountUserGroupAttachment.Hosts` resource.
 */
// @ts-ignore TS6133
function rosHostAccountUserGroupAttachmentHostsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosHostAccountUserGroupAttachment_HostsPropertyValidator(properties).assertSuccess();
    return {
      'HostId': ros.stringToRosTemplate(properties.hostId),
      'HostAccountIds': ros.listMapper(ros.stringToRosTemplate)(properties.hostAccountIds),
    };
}

/**
 * Properties for defining a `RosInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-instance
 */
export interface RosInstanceProps {

    /**
     * @Property extendedStoragePlans: If the default storage capacity is insufficient, you can purchase extended storage plans.Unit: TB
     */
    readonly extendedStoragePlans: number | ros.IResolvable;

    /**
     * @Property extraBandwidth: Additional bandwidth is added to the default settings to ensure efficient O&M.Unit: Mbps
     */
    readonly extraBandwidth: number | ros.IResolvable;

    /**
     * @Property plan: The number of asset authorization and concurrency limit.Unit: Asset number
     */
    readonly plan: number | ros.IResolvable;

    /**
     * @Property startInstanceParam: Parameters required to start a bastion host instance.
     */
    readonly startInstanceParam: RosInstance.StartInstanceParamProperty | ros.IResolvable;

    /**
     * @Property version: Enterprise version:- Deployment instructions: dual-engine architecture, supports multiple availability zones, and ensures high stability
     * - Operation and maintenance scenarios: unified operation and maintenance of assets on Alibaba Cloud, offline IDC servers, and third-party clouds
     * - Asset type: Linux\/Windows, database assets
     * - User management: RAM, AD\/LDAP and local users
     * - Control strategy: fine-grained strategic control such as operation and maintenance approval, high-risk command blocking, etc.
     * - Operation and maintenance audit: full traceability of operation and maintenance log audit and video audit
     * Value-added capabilities: automatic password change of Linux assets, database operation and maintenance management and control, convenient operation and maintenance of Web and client, network domain agent hybrid cloud scenario operation and maintenance mode, etc.Basic version:- Deployment instructions: The basic version is deployed on a single machine and does not support multiple availability zones.
     * - Operation and maintenance scenarios: unified operation and maintenance of assets on Alibaba Cloud, offline IDC servers, and third-party clouds
     * - Asset type: Linux\/Windows assets
     * - User management: RAM, AD\/LDAP and local users
     * - Control strategy: Operation and maintenance approval, high-risk command blocking and other strategic management and control
     * - Operation and maintenance audit: full traceability of operation and maintenance log audit and video audit
     */
    readonly version: string | ros.IResolvable;

    /**
     * @Property autoPay: Whether to auto pay the bill.
     */
    readonly autoPay?: boolean | ros.IResolvable;

    /**
     * @Property autoRenew: Whether to auto renew the prepay instance. The auto-renewal period is Monthly.After you enable auto-renewal, the system deducts the renewal fee nine days before the resource expires.If the payment fails, the system does not stop deducting the fee until the deduction is successful or one day before the resource expires.
     */
    readonly autoRenew?: boolean | ros.IResolvable;

    /**
     * @Property period: The subscription period of the bastionhost instanceIf PeriodUnit is month, the valid range is 1, 3, 6
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
     * @Property resourceGroupId: Resource group ID.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
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
    errors.collect(ros.propertyValidator('extraBandwidth', ros.requiredValidator)(properties.extraBandwidth));
    if(properties.extraBandwidth && (typeof properties.extraBandwidth) !== 'object') {
        errors.collect(ros.propertyValidator('extraBandwidth', ros.validateRange)({
            data: properties.extraBandwidth,
            min: 0,
            max: 200,
          }));
    }
    errors.collect(ros.propertyValidator('extraBandwidth', ros.validateNumber)(properties.extraBandwidth));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('version', ros.requiredValidator)(properties.version));
    if(properties.version && (typeof properties.version) !== 'object') {
        errors.collect(ros.propertyValidator('version', ros.validateAllowedValues)({
          data: properties.version,
          allowedValues: ["Enterprise","Basic"],
        }));
    }
    errors.collect(ros.propertyValidator('version', ros.validateString)(properties.version));
    errors.collect(ros.propertyValidator('autoRenew', ros.validateBoolean)(properties.autoRenew));
    errors.collect(ros.propertyValidator('extendedStoragePlans', ros.requiredValidator)(properties.extendedStoragePlans));
    if(properties.extendedStoragePlans && (typeof properties.extendedStoragePlans) !== 'object') {
        errors.collect(ros.propertyValidator('extendedStoragePlans', ros.validateRange)({
            data: properties.extendedStoragePlans,
            min: 0,
            max: 500,
          }));
    }
    errors.collect(ros.propertyValidator('extendedStoragePlans', ros.validateNumber)(properties.extendedStoragePlans));
    if(properties.period && (typeof properties.period) !== 'object') {
        errors.collect(ros.propertyValidator('period', ros.validateAllowedValues)({
          data: properties.period,
          allowedValues: [1,2,3,6],
        }));
    }
    errors.collect(ros.propertyValidator('period', ros.validateNumber)(properties.period));
    errors.collect(ros.propertyValidator('autoPay', ros.validateBoolean)(properties.autoPay));
    errors.collect(ros.propertyValidator('plan', ros.requiredValidator)(properties.plan));
    if(properties.plan && (typeof properties.plan) !== 'object') {
        errors.collect(ros.propertyValidator('plan', ros.validateAllowedValues)({
          data: properties.plan,
          allowedValues: [50,100,200,500,1000,2000,5000,10000],
        }));
    }
    errors.collect(ros.propertyValidator('plan', ros.validateNumber)(properties.plan));
    errors.collect(ros.propertyValidator('startInstanceParam', ros.requiredValidator)(properties.startInstanceParam));
    errors.collect(ros.propertyValidator('startInstanceParam', RosInstance_StartInstanceParamPropertyValidator)(properties.startInstanceParam));
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
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::BastionHost::Instance` resource
 *
 * @param properties - the TypeScript properties of a `RosInstanceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::BastionHost::Instance` resource.
 */
// @ts-ignore TS6133
function rosInstancePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosInstancePropsValidator(properties).assertSuccess();
    }
    return {
      'ExtendedStoragePlans': ros.numberToRosTemplate(properties.extendedStoragePlans),
      'ExtraBandwidth': ros.numberToRosTemplate(properties.extraBandwidth),
      'Plan': ros.numberToRosTemplate(properties.plan),
      'StartInstanceParam': rosInstanceStartInstanceParamPropertyToRosTemplate(properties.startInstanceParam),
      'Version': ros.stringToRosTemplate(properties.version),
      'AutoPay': ros.booleanToRosTemplate(properties.autoPay),
      'AutoRenew': ros.booleanToRosTemplate(properties.autoRenew),
      'Period': ros.numberToRosTemplate(properties.period),
      'PeriodUnit': ros.stringToRosTemplate(properties.periodUnit),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::BastionHost::Instance`, which is used to create a bastion host.
 * @Note This class does not contain additional functions, so it is recommended to use the `Instance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-instance
 */
export class RosInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::BastionHost::Instance";

    /**
     * @Attribute InstanceId: Instance Id.
     */
    public readonly attrInstanceId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property extendedStoragePlans: If the default storage capacity is insufficient, you can purchase extended storage plans.Unit: TB
     */
    public extendedStoragePlans: number | ros.IResolvable;

    /**
     * @Property extraBandwidth: Additional bandwidth is added to the default settings to ensure efficient O&M.Unit: Mbps
     */
    public extraBandwidth: number | ros.IResolvable;

    /**
     * @Property plan: The number of asset authorization and concurrency limit.Unit: Asset number
     */
    public plan: number | ros.IResolvable;

    /**
     * @Property startInstanceParam: Parameters required to start a bastion host instance.
     */
    public startInstanceParam: RosInstance.StartInstanceParamProperty | ros.IResolvable;

    /**
     * @Property version: Enterprise version:- Deployment instructions: dual-engine architecture, supports multiple availability zones, and ensures high stability
     * - Operation and maintenance scenarios: unified operation and maintenance of assets on Alibaba Cloud, offline IDC servers, and third-party clouds
     * - Asset type: Linux\/Windows, database assets
     * - User management: RAM, AD\/LDAP and local users
     * - Control strategy: fine-grained strategic control such as operation and maintenance approval, high-risk command blocking, etc.
     * - Operation and maintenance audit: full traceability of operation and maintenance log audit and video audit
     * Value-added capabilities: automatic password change of Linux assets, database operation and maintenance management and control, convenient operation and maintenance of Web and client, network domain agent hybrid cloud scenario operation and maintenance mode, etc.Basic version:- Deployment instructions: The basic version is deployed on a single machine and does not support multiple availability zones.
     * - Operation and maintenance scenarios: unified operation and maintenance of assets on Alibaba Cloud, offline IDC servers, and third-party clouds
     * - Asset type: Linux\/Windows assets
     * - User management: RAM, AD\/LDAP and local users
     * - Control strategy: Operation and maintenance approval, high-risk command blocking and other strategic management and control
     * - Operation and maintenance audit: full traceability of operation and maintenance log audit and video audit
     */
    public version: string | ros.IResolvable;

    /**
     * @Property autoPay: Whether to auto pay the bill.
     */
    public autoPay: boolean | ros.IResolvable | undefined;

    /**
     * @Property autoRenew: Whether to auto renew the prepay instance. The auto-renewal period is Monthly.After you enable auto-renewal, the system deducts the renewal fee nine days before the resource expires.If the payment fails, the system does not stop deducting the fee until the deduction is successful or one day before the resource expires.
     */
    public autoRenew: boolean | ros.IResolvable | undefined;

    /**
     * @Property period: The subscription period of the bastionhost instanceIf PeriodUnit is month, the valid range is 1, 3, 6
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
     * @Property resourceGroupId: Resource group ID.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstanceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosInstance.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrInstanceId = this.getAtt('InstanceId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.extendedStoragePlans = props.extendedStoragePlans;
        this.extraBandwidth = props.extraBandwidth;
        this.plan = props.plan;
        this.startInstanceParam = props.startInstanceParam;
        this.version = props.version;
        this.autoPay = props.autoPay;
        this.autoRenew = props.autoRenew;
        this.period = props.period;
        this.periodUnit = props.periodUnit;
        this.resourceGroupId = props.resourceGroupId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            extendedStoragePlans: this.extendedStoragePlans,
            extraBandwidth: this.extraBandwidth,
            plan: this.plan,
            startInstanceParam: this.startInstanceParam,
            version: this.version,
            autoPay: this.autoPay,
            autoRenew: this.autoRenew,
            period: this.period,
            periodUnit: this.periodUnit,
            resourceGroupId: this.resourceGroupId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosInstancePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosInstance {
    /**
     * @stability external
     */
    export interface StartInstanceParamProperty {
        /**
         * @Property vswitchId: The VSwitch ID bound to the bastion host instance.
         */
        readonly vswitchId: string | ros.IResolvable;
        /**
         * @Property securityGroupIds: List of security group IDs bound to the bastion host instance
         */
        readonly securityGroupIds: Array<string | ros.IResolvable> | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `StartInstanceParamProperty`
 *
 * @param properties - the TypeScript properties of a `StartInstanceParamProperty`
 *
 * @returns the result of the validation.
 */
function RosInstance_StartInstanceParamPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('vswitchId', ros.requiredValidator)(properties.vswitchId));
    errors.collect(ros.propertyValidator('vswitchId', ros.validateString)(properties.vswitchId));
    errors.collect(ros.propertyValidator('securityGroupIds', ros.requiredValidator)(properties.securityGroupIds));
    if(properties.securityGroupIds && (Array.isArray(properties.securityGroupIds) || (typeof properties.securityGroupIds) === 'string')) {
        errors.collect(ros.propertyValidator('securityGroupIds', ros.validateLength)({
            data: properties.securityGroupIds.length,
            min: 1,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('securityGroupIds', ros.listValidator(ros.validateString))(properties.securityGroupIds));
    return errors.wrap('supplied properties not correct for "StartInstanceParamProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::BastionHost::Instance.StartInstanceParam` resource
 *
 * @param properties - the TypeScript properties of a `StartInstanceParamProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::BastionHost::Instance.StartInstanceParam` resource.
 */
// @ts-ignore TS6133
function rosInstanceStartInstanceParamPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosInstance_StartInstanceParamPropertyValidator(properties).assertSuccess();
    return {
      'VswitchId': ros.stringToRosTemplate(properties.vswitchId),
      'SecurityGroupIds': ros.listMapper(ros.stringToRosTemplate)(properties.securityGroupIds),
    };
}

/**
 * Properties for defining a `RosPasswordTask`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-passwordtask
 */
export interface RosPasswordTaskProps {

    /**
     * @Property instanceId: The ID of the BastionHost instance.
     */
    readonly instanceId: string | ros.IResolvable;

    /**
     * @Property name: The name of the password task.
     */
    readonly name: string | ros.IResolvable;

    /**
     * @Property taskScheduleType: The schedule type of the password task.
     */
    readonly taskScheduleType: string | ros.IResolvable;

    /**
     * @Property comment: The comment of the password task.
     */
    readonly comment?: string | ros.IResolvable;

    /**
     * @Property credentialType: The credential type of the password task.
     */
    readonly credentialType?: string | ros.IResolvable;

    /**
     * @Property keyPairGenerateConfig: The key pair generate config of the password task.
     */
    readonly keyPairGenerateConfig?: string | ros.IResolvable;

    /**
     * @Property passwordGenerateConfig: The password generate config of the password task.
     */
    readonly passwordGenerateConfig?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * @Property passwordGenerateType: The password generate type of the password task.
     */
    readonly passwordGenerateType?: string | ros.IResolvable;

    /**
     * @Property taskScheduleConfig: The schedule config of the password task.
     */
    readonly taskScheduleConfig?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosPasswordTaskProps`
 *
 * @param properties - the TypeScript properties of a `RosPasswordTaskProps`
 *
 * @returns the result of the validation.
 */
function RosPasswordTaskPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('taskScheduleType', ros.requiredValidator)(properties.taskScheduleType));
    errors.collect(ros.propertyValidator('taskScheduleType', ros.validateString)(properties.taskScheduleType));
    errors.collect(ros.propertyValidator('comment', ros.validateString)(properties.comment));
    errors.collect(ros.propertyValidator('passwordGenerateConfig', ros.hashValidator(ros.validateAny))(properties.passwordGenerateConfig));
    errors.collect(ros.propertyValidator('instanceId', ros.requiredValidator)(properties.instanceId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    errors.collect(ros.propertyValidator('keyPairGenerateConfig', ros.validateString)(properties.keyPairGenerateConfig));
    errors.collect(ros.propertyValidator('credentialType', ros.validateString)(properties.credentialType));
    errors.collect(ros.propertyValidator('passwordGenerateType', ros.validateString)(properties.passwordGenerateType));
    errors.collect(ros.propertyValidator('taskScheduleConfig', ros.hashValidator(ros.validateAny))(properties.taskScheduleConfig));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "RosPasswordTaskProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::BastionHost::PasswordTask` resource
 *
 * @param properties - the TypeScript properties of a `RosPasswordTaskProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::BastionHost::PasswordTask` resource.
 */
// @ts-ignore TS6133
function rosPasswordTaskPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosPasswordTaskPropsValidator(properties).assertSuccess();
    }
    return {
      'InstanceId': ros.stringToRosTemplate(properties.instanceId),
      'Name': ros.stringToRosTemplate(properties.name),
      'TaskScheduleType': ros.stringToRosTemplate(properties.taskScheduleType),
      'Comment': ros.stringToRosTemplate(properties.comment),
      'CredentialType': ros.stringToRosTemplate(properties.credentialType),
      'KeyPairGenerateConfig': ros.stringToRosTemplate(properties.keyPairGenerateConfig),
      'PasswordGenerateConfig': ros.hashMapper(ros.objectToRosTemplate)(properties.passwordGenerateConfig),
      'PasswordGenerateType': ros.stringToRosTemplate(properties.passwordGenerateType),
      'TaskScheduleConfig': ros.hashMapper(ros.objectToRosTemplate)(properties.taskScheduleConfig),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::BastionHost::PasswordTask`.
 * @Note This class does not contain additional functions, so it is recommended to use the `PasswordTask` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-passwordtask
 */
export class RosPasswordTask extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::BastionHost::PasswordTask";

    /**
     * @Attribute TaskId: The ID of the password task.
     */
    public readonly attrTaskId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property instanceId: The ID of the BastionHost instance.
     */
    public instanceId: string | ros.IResolvable;

    /**
     * @Property name: The name of the password task.
     */
    public name: string | ros.IResolvable;

    /**
     * @Property taskScheduleType: The schedule type of the password task.
     */
    public taskScheduleType: string | ros.IResolvable;

    /**
     * @Property comment: The comment of the password task.
     */
    public comment: string | ros.IResolvable | undefined;

    /**
     * @Property credentialType: The credential type of the password task.
     */
    public credentialType: string | ros.IResolvable | undefined;

    /**
     * @Property keyPairGenerateConfig: The key pair generate config of the password task.
     */
    public keyPairGenerateConfig: string | ros.IResolvable | undefined;

    /**
     * @Property passwordGenerateConfig: The password generate config of the password task.
     */
    public passwordGenerateConfig: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable | undefined;

    /**
     * @Property passwordGenerateType: The password generate type of the password task.
     */
    public passwordGenerateType: string | ros.IResolvable | undefined;

    /**
     * @Property taskScheduleConfig: The schedule config of the password task.
     */
    public taskScheduleConfig: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosPasswordTaskProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosPasswordTask.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrTaskId = this.getAtt('TaskId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.instanceId = props.instanceId;
        this.name = props.name;
        this.taskScheduleType = props.taskScheduleType;
        this.comment = props.comment;
        this.credentialType = props.credentialType;
        this.keyPairGenerateConfig = props.keyPairGenerateConfig;
        this.passwordGenerateConfig = props.passwordGenerateConfig;
        this.passwordGenerateType = props.passwordGenerateType;
        this.taskScheduleConfig = props.taskScheduleConfig;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            instanceId: this.instanceId,
            name: this.name,
            taskScheduleType: this.taskScheduleType,
            comment: this.comment,
            credentialType: this.credentialType,
            keyPairGenerateConfig: this.keyPairGenerateConfig,
            passwordGenerateConfig: this.passwordGenerateConfig,
            passwordGenerateType: this.passwordGenerateType,
            taskScheduleConfig: this.taskScheduleConfig,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosPasswordTaskPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosPasswordTaskHostAccountAttachment`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-passwordtaskhostaccountattachment
 */
export interface RosPasswordTaskHostAccountAttachmentProps {

    /**
     * @Property hostAccountIds: The IDs of the host accounts to be attached to the password task.
     */
    readonly hostAccountIds: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property instanceId: The ID of the bastion host instance.
     */
    readonly instanceId: string | ros.IResolvable;

    /**
     * @Property taskId: The ID of the password task.
     */
    readonly taskId: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosPasswordTaskHostAccountAttachmentProps`
 *
 * @param properties - the TypeScript properties of a `RosPasswordTaskHostAccountAttachmentProps`
 *
 * @returns the result of the validation.
 */
function RosPasswordTaskHostAccountAttachmentPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('taskId', ros.requiredValidator)(properties.taskId));
    errors.collect(ros.propertyValidator('taskId', ros.validateString)(properties.taskId));
    errors.collect(ros.propertyValidator('instanceId', ros.requiredValidator)(properties.instanceId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    errors.collect(ros.propertyValidator('hostAccountIds', ros.requiredValidator)(properties.hostAccountIds));
    errors.collect(ros.propertyValidator('hostAccountIds', ros.listValidator(ros.validateString))(properties.hostAccountIds));
    return errors.wrap('supplied properties not correct for "RosPasswordTaskHostAccountAttachmentProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::BastionHost::PasswordTaskHostAccountAttachment` resource
 *
 * @param properties - the TypeScript properties of a `RosPasswordTaskHostAccountAttachmentProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::BastionHost::PasswordTaskHostAccountAttachment` resource.
 */
// @ts-ignore TS6133
function rosPasswordTaskHostAccountAttachmentPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosPasswordTaskHostAccountAttachmentPropsValidator(properties).assertSuccess();
    }
    return {
      'HostAccountIds': ros.listMapper(ros.stringToRosTemplate)(properties.hostAccountIds),
      'InstanceId': ros.stringToRosTemplate(properties.instanceId),
      'TaskId': ros.stringToRosTemplate(properties.taskId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::BastionHost::PasswordTaskHostAccountAttachment`.
 * @Note This class does not contain additional functions, so it is recommended to use the `PasswordTaskHostAccountAttachment` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-passwordtaskhostaccountattachment
 */
export class RosPasswordTaskHostAccountAttachment extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::BastionHost::PasswordTaskHostAccountAttachment";

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property hostAccountIds: The IDs of the host accounts to be attached to the password task.
     */
    public hostAccountIds: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property instanceId: The ID of the bastion host instance.
     */
    public instanceId: string | ros.IResolvable;

    /**
     * @Property taskId: The ID of the password task.
     */
    public taskId: string | ros.IResolvable;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosPasswordTaskHostAccountAttachmentProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosPasswordTaskHostAccountAttachment.ROS_RESOURCE_TYPE_NAME, properties: props });

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.hostAccountIds = props.hostAccountIds;
        this.instanceId = props.instanceId;
        this.taskId = props.taskId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            hostAccountIds: this.hostAccountIds,
            instanceId: this.instanceId,
            taskId: this.taskId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosPasswordTaskHostAccountAttachmentPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosUserGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-usergroup
 */
export interface RosUserGroupProps {

    /**
     * @Property instanceId: The ID of the BastionHost instance.
     */
    readonly instanceId: string | ros.IResolvable;

    /**
     * @Property userGroupName: The name of the user group.
     */
    readonly userGroupName: string | ros.IResolvable;

    /**
     * @Property comment: The comment of the user group.
     */
    readonly comment?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosUserGroupProps`
 *
 * @param properties - the TypeScript properties of a `RosUserGroupProps`
 *
 * @returns the result of the validation.
 */
function RosUserGroupPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('comment', ros.validateString)(properties.comment));
    errors.collect(ros.propertyValidator('instanceId', ros.requiredValidator)(properties.instanceId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    errors.collect(ros.propertyValidator('userGroupName', ros.requiredValidator)(properties.userGroupName));
    errors.collect(ros.propertyValidator('userGroupName', ros.validateString)(properties.userGroupName));
    return errors.wrap('supplied properties not correct for "RosUserGroupProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::BastionHost::UserGroup` resource
 *
 * @param properties - the TypeScript properties of a `RosUserGroupProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::BastionHost::UserGroup` resource.
 */
// @ts-ignore TS6133
function rosUserGroupPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosUserGroupPropsValidator(properties).assertSuccess();
    }
    return {
      'InstanceId': ros.stringToRosTemplate(properties.instanceId),
      'UserGroupName': ros.stringToRosTemplate(properties.userGroupName),
      'Comment': ros.stringToRosTemplate(properties.comment),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::BastionHost::UserGroup`.
 * @Note This class does not contain additional functions, so it is recommended to use the `UserGroup` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-usergroup
 */
export class RosUserGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::BastionHost::UserGroup";

    /**
     * @Attribute UserGroupId: The ID of the user group.
     */
    public readonly attrUserGroupId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property instanceId: The ID of the BastionHost instance.
     */
    public instanceId: string | ros.IResolvable;

    /**
     * @Property userGroupName: The name of the user group.
     */
    public userGroupName: string | ros.IResolvable;

    /**
     * @Property comment: The comment of the user group.
     */
    public comment: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosUserGroupProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosUserGroup.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrUserGroupId = this.getAtt('UserGroupId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.instanceId = props.instanceId;
        this.userGroupName = props.userGroupName;
        this.comment = props.comment;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            instanceId: this.instanceId,
            userGroupName: this.userGroupName,
            comment: this.comment,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosUserGroupPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
