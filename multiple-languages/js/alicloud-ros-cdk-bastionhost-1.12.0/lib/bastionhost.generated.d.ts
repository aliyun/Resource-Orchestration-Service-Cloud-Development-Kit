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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::BastionHost::ExportConfigJob`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ExportConfigJob` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-exportconfigjob
 */
export declare class RosExportConfigJob extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::BastionHost::ExportConfigJob";
    /**
     * @Attribute DownloadUrl: The download url of the export config job.
     */
    readonly attrDownloadUrl: ros.IResolvable;
    /**
     * @Attribute JobId: The ID of the export config job.
     */
    readonly attrJobId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property instanceId: The ID of the bastion host instance.
     */
    instanceId: string | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosExportConfigJobProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::BastionHost::Host`, which is used to create a host for O&M in a bastion host.
 * @Note This class does not contain additional functions, so it is recommended to use the `Host` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-host
 */
export declare class RosHost extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::BastionHost::Host";
    /**
     * @Attribute HostId: The ID of the host that was created.
     */
    readonly attrHostId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property activeAddressType: The endpoint type of the host that you want to create. Valid values:
     * Public: a public endpoint
     * Private: an internal endpoint
     */
    activeAddressType: string | ros.IResolvable;
    /**
     * @Property hostName: The name of the host that you want to create. The name can be up to 128 characters in length.
     */
    hostName: string | ros.IResolvable;
    /**
     * @Property instanceId: The ID of the Bastionhost instance where you want to create the host.
     * Note: You can call the DescribeInstances operation to query the ID of the Bastionhost instance.
     */
    instanceId: string | ros.IResolvable;
    /**
     * @Property osType: The operating system of the host that you want to create. Valid values:
     * - Linux
     * - Windows
     */
    osType: string | ros.IResolvable;
    /**
     * @Property source: The source of the host that you want to create. Valid values:
     * - Local: an on-premises host
     * - Ecs: an Elastic Compute Service (ECS) instance
     * - Rds: a host in a dedicated cluster
     */
    source: string | ros.IResolvable;
    /**
     * @Property comment: The description of the host that you want to create. The value can be up to 500 characters.
     */
    comment: string | ros.IResolvable | undefined;
    /**
     * @Property hostPrivateAddress: The internal endpoint of the host that you want to create. You can set this parameter to a domain name or an IP address.
     * Note: This parameter is required if the ActiveAddressType parameter is set to Private.
     */
    hostPrivateAddress: string | ros.IResolvable | undefined;
    /**
     * @Property hostPublicAddress: The public endpoint of the host that you want to create. You can set this parameter to a domain name or an IP address.
     * Note: This parameter is required if the ActiveAddressType parameter is set to Public.
     */
    hostPublicAddress: string | ros.IResolvable | undefined;
    /**
     * @Property instanceRegionId: The ID of the region where the ECS instance or dedicated cluster host that you want to create resides.
     * Note: This parameter is required if the Source parameter is set to Ecs or Rds.
     */
    instanceRegionId: string | ros.IResolvable | undefined;
    /**
     * @Property sourceInstanceId: The ID of the ECS instance or dedicated cluster host that you want to create.
     * Note This parameter is required if the Source parameter is set to Ecs or Rds.
     */
    sourceInstanceId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosHostProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::BastionHost::HostAccount`.
 * @Note This class does not contain additional functions, so it is recommended to use the `HostAccount` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-hostaccount
 */
export declare class RosHostAccount extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::BastionHost::HostAccount";
    /**
     * @Attribute HostAccountId: The ID of the host account.
     */
    readonly attrHostAccountId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property hostAccountName: The name of the host account.
     */
    hostAccountName: string | ros.IResolvable;
    /**
     * @Property hostId: The ID of the host.
     */
    hostId: string | ros.IResolvable;
    /**
     * @Property instanceId: The ID of the bastion host instance.
     */
    instanceId: string | ros.IResolvable;
    /**
     * @Property protocolName: The protocol name of the host account. Valid values: SSH, RDP.
     */
    protocolName: string | ros.IResolvable;
    /**
     * @Property hostShareKeyId: The ID of the host share key. This parameter is required when the protocol is SSH.
     */
    hostShareKeyId: string | ros.IResolvable | undefined;
    /**
     * @Property passPhrase: The passphrase of the host account. This parameter is required when the protocol is SSH and the private key is encrypted.
     */
    passPhrase: string | ros.IResolvable | undefined;
    /**
     * @Property password: The password of the host account. This parameter is required when the protocol is SSH or RDP.
     */
    password: string | ros.IResolvable | undefined;
    /**
     * @Property privateKey: The private key of the host account. This parameter is required when the protocol is SSH.
     */
    privateKey: string | ros.IResolvable | undefined;
    /**
     * @Property privilegeType: The privilege type of the host account. Valid values: Normal, Administrator.
     */
    privilegeType: string | ros.IResolvable | undefined;
    /**
     * @Property rotationMode: The rotation mode of the host account. Valid values: Manual, Automatic.
     */
    rotationMode: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosHostAccountProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::BastionHost::HostAccountUserGroupAttachment`.
 * @Note This class does not contain additional functions, so it is recommended to use the `HostAccountUserGroupAttachment` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-hostaccountusergroupattachment
 */
export declare class RosHostAccountUserGroupAttachment extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::BastionHost::HostAccountUserGroupAttachment";
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property hosts: Specify the host IDs and host account IDs that you want to authorize for the user group.
     */
    hosts: Array<RosHostAccountUserGroupAttachment.HostsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property instanceId: The ID of the BastionHost instance.
     */
    instanceId: string | ros.IResolvable;
    /**
     * @Property userGroupId: The ID of the user group.
     */
    userGroupId: string | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosHostAccountUserGroupAttachmentProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosHostAccountUserGroupAttachment {
    /**
     * @stability external
     */
    interface HostsProperty {
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::BastionHost::Instance`, which is used to create a bastion host.
 * @Note This class does not contain additional functions, so it is recommended to use the `Instance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-instance
 */
export declare class RosInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::BastionHost::Instance";
    /**
     * @Attribute InstanceId: Instance Id.
     */
    readonly attrInstanceId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property extendedStoragePlans: If the default storage capacity is insufficient, you can purchase extended storage plans.Unit: TB
     */
    extendedStoragePlans: number | ros.IResolvable;
    /**
     * @Property extraBandwidth: Additional bandwidth is added to the default settings to ensure efficient O&M.Unit: Mbps
     */
    extraBandwidth: number | ros.IResolvable;
    /**
     * @Property plan: The number of asset authorization and concurrency limit.Unit: Asset number
     */
    plan: number | ros.IResolvable;
    /**
     * @Property startInstanceParam: Parameters required to start a bastion host instance.
     */
    startInstanceParam: RosInstance.StartInstanceParamProperty | ros.IResolvable;
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
    version: string | ros.IResolvable;
    /**
     * @Property autoPay: Whether to auto pay the bill.
     */
    autoPay: boolean | ros.IResolvable | undefined;
    /**
     * @Property autoRenew: Whether to auto renew the prepay instance. The auto-renewal period is Monthly.After you enable auto-renewal, the system deducts the renewal fee nine days before the resource expires.If the payment fails, the system does not stop deducting the fee until the deduction is successful or one day before the resource expires.
     */
    autoRenew: boolean | ros.IResolvable | undefined;
    /**
     * @Property period: The subscription period of the bastionhost instanceIf PeriodUnit is month, the valid range is 1, 3, 6
     * If periodUnit is year, the valid range is 1, 2, 3
     */
    period: number | ros.IResolvable | undefined;
    /**
     * @Property periodUnit: The unit of the subscription duration. Valid values:
     * Month
     * Year
     * Default value: Month.
     */
    periodUnit: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: Resource group ID.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstanceProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosInstance {
    /**
     * @stability external
     */
    interface StartInstanceParamProperty {
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
    readonly passwordGenerateConfig?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property passwordGenerateType: The password generate type of the password task.
     */
    readonly passwordGenerateType?: string | ros.IResolvable;
    /**
     * @Property taskScheduleConfig: The schedule config of the password task.
     */
    readonly taskScheduleConfig?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::BastionHost::PasswordTask`.
 * @Note This class does not contain additional functions, so it is recommended to use the `PasswordTask` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-passwordtask
 */
export declare class RosPasswordTask extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::BastionHost::PasswordTask";
    /**
     * @Attribute TaskId: The ID of the password task.
     */
    readonly attrTaskId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property instanceId: The ID of the BastionHost instance.
     */
    instanceId: string | ros.IResolvable;
    /**
     * @Property name: The name of the password task.
     */
    name: string | ros.IResolvable;
    /**
     * @Property taskScheduleType: The schedule type of the password task.
     */
    taskScheduleType: string | ros.IResolvable;
    /**
     * @Property comment: The comment of the password task.
     */
    comment: string | ros.IResolvable | undefined;
    /**
     * @Property credentialType: The credential type of the password task.
     */
    credentialType: string | ros.IResolvable | undefined;
    /**
     * @Property keyPairGenerateConfig: The key pair generate config of the password task.
     */
    keyPairGenerateConfig: string | ros.IResolvable | undefined;
    /**
     * @Property passwordGenerateConfig: The password generate config of the password task.
     */
    passwordGenerateConfig: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable | undefined;
    /**
     * @Property passwordGenerateType: The password generate type of the password task.
     */
    passwordGenerateType: string | ros.IResolvable | undefined;
    /**
     * @Property taskScheduleConfig: The schedule config of the password task.
     */
    taskScheduleConfig: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosPasswordTaskProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::BastionHost::PasswordTaskHostAccountAttachment`.
 * @Note This class does not contain additional functions, so it is recommended to use the `PasswordTaskHostAccountAttachment` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-passwordtaskhostaccountattachment
 */
export declare class RosPasswordTaskHostAccountAttachment extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::BastionHost::PasswordTaskHostAccountAttachment";
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property hostAccountIds: The IDs of the host accounts to be attached to the password task.
     */
    hostAccountIds: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property instanceId: The ID of the bastion host instance.
     */
    instanceId: string | ros.IResolvable;
    /**
     * @Property taskId: The ID of the password task.
     */
    taskId: string | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosPasswordTaskHostAccountAttachmentProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::BastionHost::UserGroup`.
 * @Note This class does not contain additional functions, so it is recommended to use the `UserGroup` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-usergroup
 */
export declare class RosUserGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::BastionHost::UserGroup";
    /**
     * @Attribute UserGroupId: The ID of the user group.
     */
    readonly attrUserGroupId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property instanceId: The ID of the BastionHost instance.
     */
    instanceId: string | ros.IResolvable;
    /**
     * @Property userGroupName: The name of the user group.
     */
    userGroupName: string | ros.IResolvable;
    /**
     * @Property comment: The comment of the user group.
     */
    comment: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosUserGroupProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
