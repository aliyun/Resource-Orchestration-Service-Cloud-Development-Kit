import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosAccessGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nas-accessgroup
 */
export interface RosAccessGroupProps {
    /**
     * @Property accessGroupName: The name of the permission group.
     * Limits:
     * *   The name must be 3 to 64 characters in length.
     * *   The name must start with a letter and can contain letters, digits,
     * underscores (_), and hyphens (-).
     * *   The name must be different from the name of the default permission group.
     * The default permission group for virtual private clouds (VPCs) is named
     * DEFAULT_VPC_GROUP_NAME.
     */
    readonly accessGroupName: string | ros.IResolvable;
    /**
     * @Property accessGroupType: Permission group type, including the Vpc and Classic types
     */
    readonly accessGroupType: string | ros.IResolvable;
    /**
     * @Property description: The description of the permission group.
     * Limits:
     * *   By default, the description of a permission group is the same as the name of
     * the permission group. The description must be 2 to 128 characters in length.
     * *   The name must start with a letter and cannot start with `http:\/\/` or
     * `https:\/\/`.
     * *   The description can contain digits, colons (:), underscores (_), and hyphens
     * (-).
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property fileSystemType: File system type.
     * Values: standard (default), extreme
     */
    readonly fileSystemType?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::NAS::AccessGroup`.
 * @Note This class does not contain additional functions, so it is recommended to use the `AccessGroup` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nas-accessgroup
 */
export declare class RosAccessGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::NAS::AccessGroup";
    /**
     * @Attribute AccessGroupName: Permission group name
     */
    readonly attrAccessGroupName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property accessGroupName: The name of the permission group.
     * Limits:
     * *   The name must be 3 to 64 characters in length.
     * *   The name must start with a letter and can contain letters, digits,
     * underscores (_), and hyphens (-).
     * *   The name must be different from the name of the default permission group.
     * The default permission group for virtual private clouds (VPCs) is named
     * DEFAULT_VPC_GROUP_NAME.
     */
    accessGroupName: string | ros.IResolvable;
    /**
     * @Property accessGroupType: Permission group type, including the Vpc and Classic types
     */
    accessGroupType: string | ros.IResolvable;
    /**
     * @Property description: The description of the permission group.
     * Limits:
     * *   By default, the description of a permission group is the same as the name of
     * the permission group. The description must be 2 to 128 characters in length.
     * *   The name must start with a letter and cannot start with `http:\/\/` or
     * `https:\/\/`.
     * *   The description can contain digits, colons (:), underscores (_), and hyphens
     * (-).
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property fileSystemType: File system type.
     * Values: standard (default), extreme
     */
    fileSystemType: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAccessGroupProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosAccessRule`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nas-accessrule
 */
export interface RosAccessRuleProps {
    /**
     * @Property accessGroupName: Permission group name
     */
    readonly accessGroupName: string | ros.IResolvable;
    /**
     * @Property fileSystemType: The type of file system. Values:
     * standard: the general NAS
     * extreme: the extreme NAS
     */
    readonly fileSystemType?: string | ros.IResolvable;
    /**
     * @Property ipv6SourceCidrIp: Source IPv6 CIDR address segment. IP addresses in CIDR format and IPv6 format are supported.
     * Currently, only the ultra-fast NAS in mainland China supports the IPv6 function, and the file system needs to enable the IPv6 function.
     * Only VPC private network is supported.
     * IPv4 and IPv6 are mutually exclusive, and the types cannot be converted.
     */
    readonly ipv6SourceCidrIp?: string | ros.IResolvable;
    /**
     * @Property priority: Priority level. Range: 1-100. Default value: 1
     */
    readonly priority?: number | ros.IResolvable;
    /**
     * @Property rwAccessType: Read-write permission type: RDWR (default), RDONLY
     */
    readonly rwAccessType?: string | ros.IResolvable;
    /**
     * @Property sourceCidrIp: Address or address segment
     */
    readonly sourceCidrIp?: string | ros.IResolvable;
    /**
     * @Property userAccessType: User permission type: no_squash (default), root_squash, all_squash
     */
    readonly userAccessType?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::NAS::AccessRule`.
 * @Note This class does not contain additional functions, so it is recommended to use the `AccessRule` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nas-accessrule
 */
export declare class RosAccessRule extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::NAS::AccessRule";
    /**
     * @Attribute AccessRuleId: Rule serial number
     */
    readonly attrAccessRuleId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property accessGroupName: Permission group name
     */
    accessGroupName: string | ros.IResolvable;
    /**
     * @Property fileSystemType: The type of file system. Values:
     * standard: the general NAS
     * extreme: the extreme NAS
     */
    fileSystemType: string | ros.IResolvable | undefined;
    /**
     * @Property ipv6SourceCidrIp: Source IPv6 CIDR address segment. IP addresses in CIDR format and IPv6 format are supported.
     * Currently, only the ultra-fast NAS in mainland China supports the IPv6 function, and the file system needs to enable the IPv6 function.
     * Only VPC private network is supported.
     * IPv4 and IPv6 are mutually exclusive, and the types cannot be converted.
     */
    ipv6SourceCidrIp: string | ros.IResolvable | undefined;
    /**
     * @Property priority: Priority level. Range: 1-100. Default value: 1
     */
    priority: number | ros.IResolvable | undefined;
    /**
     * @Property rwAccessType: Read-write permission type: RDWR (default), RDONLY
     */
    rwAccessType: string | ros.IResolvable | undefined;
    /**
     * @Property sourceCidrIp: Address or address segment
     */
    sourceCidrIp: string | ros.IResolvable | undefined;
    /**
     * @Property userAccessType: User permission type: no_squash (default), root_squash, all_squash
     */
    userAccessType: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAccessRuleProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosDataFlow`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nas-dataflow
 */
export interface RosDataFlowProps {
    /**
     * @Property fileSystemId: The ID of the file system.
     * *   The IDs of CPFS file systems must start with `cpfs-`. Example:
     * cpfs-125487\*\*\*\*.
     * *   The IDs of CPFS for Lingjun file systems must start with `bmcpfs-`. Example:
     * bmcpfs-0015\*\*\*\*.
     */
    readonly fileSystemId: string | ros.IResolvable;
    /**
     * @Property fsetId: The fileset ID.
     * >  This parameter is required for CPFS file systems.
     */
    readonly fsetId: string | ros.IResolvable;
    /**
     * @Property sourceStorage: The access path of the source storage. Format: `<storage type>:\/\/[<account
     * id>:]<path>`.
     * Parameters:
     * *   storage type: Only OSS is supported.
     * *   account id (optional): the UID of the account of the source storage. This
     * parameter is required when you use OSS buckets across accounts.
     * *   path: the name of the OSS bucket. Limits:
     * *   The name can contain only lowercase letters, digits, and hyphens (-). The
     * name must start and end with a lowercase letter or digit.
     * *   The name can be up to 128 characters in length.
     * *   The name must be encoded in UTF-8.
     * > *   The OSS bucket must be an existing bucket in the region.
     * > *   Only CPFS for LINGJUN V2.6.0 and later support the account id parameter.
     */
    readonly sourceStorage: string | ros.IResolvable;
    /**
     * @Property throughput: The maximum data flow throughput. Unit: MB\/s. Valid values:
     * *   600
     * *   1200
     * *   1500
     * >  The data flow throughput must be less than the I\/O throughput of the file
     * system. This parameter is required for CPFS file systems.
     */
    readonly throughput: number | ros.IResolvable;
    /**
     * @Property autoRefreshInterval: The automatic update interval time, every time the interval, the CPFS checks whether there is a data update in the directory. If there is data update, start the automatic update task, unit: minute.
     * Scope of value: 5 ~ 525600, default value: 10.
     */
    readonly autoRefreshInterval?: number | ros.IResolvable;
    /**
     * @Property autoRefreshPolicy: The automatic update policy. The updated data in the source storage is imported
     * into the CPFS file system based on the policy.
     * *   None (default): Updated data in the source storage is not automatically
     * imported into the CPFS file system. You can run a data flow task to import the
     * updated data from the source storage.
     * *   ImportChanged: Updated data in the source storage is automatically imported
     * into the CPFS file system.
     * >  This parameter takes effect only for CPFS file systems.
     */
    readonly autoRefreshPolicy?: string | ros.IResolvable;
    /**
     * @Property autoRefreshs:
     */
    readonly autoRefreshs?: Array<RosDataFlow.AutoRefreshsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property description: The description of the dataflow.
     * Limits:
     * *   The description must be 2 to 128 characters in length.
     * *   The description must start with a letter but cannot start with `http:\/\/` or
     * `https:\/\/`.
     * *   The description can contain letters, digits, colons (:), underscores (_), and
     * hyphens (-).
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property sourceSecurityType: The type of safety protection types of the source storage. If the source storage must be protected through safety protection, please specify the type of safety protection type storage.Value:
     * No (default value): It means that the source storage does not need to be accessed by safe protection.
     * SSL: Protective access through SSL certificates.
     */
    readonly sourceSecurityType?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::NAS::DataFlow`Creates a data flow between a Cloud Parallel File Storage (CPFS) file system and an Object Storage Service (OSS) bucket.
 * @Note This class does not contain additional functions, so it is recommended to use the `DataFlow` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nas-dataflow
 */
export declare class RosDataFlow extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::NAS::DataFlow";
    /**
     * @Attribute DataFlowId: Data flow ID.
     */
    readonly attrDataFlowId: ros.IResolvable;
    /**
     * @Attribute FileSystemId: File system ID.
     */
    readonly attrFileSystemId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property fileSystemId: The ID of the file system.
     * *   The IDs of CPFS file systems must start with `cpfs-`. Example:
     * cpfs-125487\*\*\*\*.
     * *   The IDs of CPFS for Lingjun file systems must start with `bmcpfs-`. Example:
     * bmcpfs-0015\*\*\*\*.
     */
    fileSystemId: string | ros.IResolvable;
    /**
     * @Property fsetId: The fileset ID.
     * >  This parameter is required for CPFS file systems.
     */
    fsetId: string | ros.IResolvable;
    /**
     * @Property sourceStorage: The access path of the source storage. Format: `<storage type>:\/\/[<account
     * id>:]<path>`.
     * Parameters:
     * *   storage type: Only OSS is supported.
     * *   account id (optional): the UID of the account of the source storage. This
     * parameter is required when you use OSS buckets across accounts.
     * *   path: the name of the OSS bucket. Limits:
     * *   The name can contain only lowercase letters, digits, and hyphens (-). The
     * name must start and end with a lowercase letter or digit.
     * *   The name can be up to 128 characters in length.
     * *   The name must be encoded in UTF-8.
     * > *   The OSS bucket must be an existing bucket in the region.
     * > *   Only CPFS for LINGJUN V2.6.0 and later support the account id parameter.
     */
    sourceStorage: string | ros.IResolvable;
    /**
     * @Property throughput: The maximum data flow throughput. Unit: MB\/s. Valid values:
     * *   600
     * *   1200
     * *   1500
     * >  The data flow throughput must be less than the I\/O throughput of the file
     * system. This parameter is required for CPFS file systems.
     */
    throughput: number | ros.IResolvable;
    /**
     * @Property autoRefreshInterval: The automatic update interval time, every time the interval, the CPFS checks whether there is a data update in the directory. If there is data update, start the automatic update task, unit: minute.
     * Scope of value: 5 ~ 525600, default value: 10.
     */
    autoRefreshInterval: number | ros.IResolvable | undefined;
    /**
     * @Property autoRefreshPolicy: The automatic update policy. The updated data in the source storage is imported
     * into the CPFS file system based on the policy.
     * *   None (default): Updated data in the source storage is not automatically
     * imported into the CPFS file system. You can run a data flow task to import the
     * updated data from the source storage.
     * *   ImportChanged: Updated data in the source storage is automatically imported
     * into the CPFS file system.
     * >  This parameter takes effect only for CPFS file systems.
     */
    autoRefreshPolicy: string | ros.IResolvable | undefined;
    /**
     * @Property autoRefreshs:
     */
    autoRefreshs: Array<RosDataFlow.AutoRefreshsProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property description: The description of the dataflow.
     * Limits:
     * *   The description must be 2 to 128 characters in length.
     * *   The description must start with a letter but cannot start with `http:\/\/` or
     * `https:\/\/`.
     * *   The description can contain letters, digits, colons (:), underscores (_), and
     * hyphens (-).
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property sourceSecurityType: The type of safety protection types of the source storage. If the source storage must be protected through safety protection, please specify the type of safety protection type storage.Value:
     * No (default value): It means that the source storage does not need to be accessed by safe protection.
     * SSL: Protective access through SSL certificates.
     */
    sourceSecurityType: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDataFlowProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosDataFlow {
    /**
     * @stability external
     */
    interface AutoRefreshsProperty {
        /**
         * @Property refreshPath: Automatic update directory, data modification incident stored at the CPFS registration source end, check whether the source data in the directory is updated and automatically imported the updated data.
     * The default is empty. Any data update stored at the source will not automatically import the CPFS. You need to import and update through manual tasks.
     * limit:
     * The length is 2 to 1024 characters.
     * Use UTF-8 encoding.
     * It must start with a positive oblique line (\/).
     * This directory must be existing directory on CPFS and must be located in the Fileset directory that flows in the data.
         */
        readonly refreshPath: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosFileSystem`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nas-filesystem
 */
export interface RosFileSystemProps {
    /**
     * @Property protocolType: Type of protocol used. Valid values: NFS, SMB, cpfs.
     */
    readonly protocolType: string | ros.IResolvable;
    /**
     * @Property storageType: The storage type of the file System.
     * Valid values:
     * Performance、Capacity、Premium(Available when the file_system_type is standard)
     * standard、advance(Available when the file_system_type is extreme)
     * advance_100、advance_200(Available when the file_system_type is cpfs)
     */
    readonly storageType: string | ros.IResolvable;
    /**
     * @Property bandwidth: Maximum file system throughput, unit is MB\/s. Required and valid only when FileSystemType=cpfs.
     */
    readonly bandwidth?: number | ros.IResolvable;
    /**
     * @Property capacity: Specify the capacity of the file system. Unit: GiB. This parameter is required
     * and valid when FileSystemType is set to extreme, cpfs, or cpfsse.
     * Specify a value based on the specifications on the following buy page:
     * *   Extreme NAS (Pay-as-you-go)
     * *   CPFS (Pay-as-you-go)
     */
    readonly capacity?: number | ros.IResolvable;
    /**
     * @Property chargeType: Type of payment:
     * PayAsYouGo (pay as you go)
     * Subscription
     */
    readonly chargeType?: string | ros.IResolvable;
    /**
     * @Property deletionForce: Whether delete all mount targets on the file system and then delete file system. Default is false
     */
    readonly deletionForce?: boolean | ros.IResolvable;
    /**
     * @Property description: The description of the file system.
     * Limits:
     * *   Must be 2 to 128 characters in length.
     * *   Must start with a letter but cannot start with `http:\/\/` or `https:\/\/`.
     * *   Can contain digits, colons (:), underscores (_), and hyphens (-).
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property duration: The period of subscription in months. Required and valid when ChargeType is Subscription.
     * When the annual and monthly subscription instance expires without renewal, the instance will automatically expire and be released.
     */
    readonly duration?: number | ros.IResolvable;
    /**
     * @Property encryptType: Specifies whether to encrypt data in the file system.
     * You can use the keys that are managed by Key Management Service (KMS) to encrypt
     * data in a file system. When you read and write the encrypted data, the data is
     * automatically decrypted.
     * Valid values:
     * *   0 (default): The data in the file system is not encrypted.
     * *   1: A NAS-managed key is used to encrypt the data in the file system. This
     * value is valid if FileSystemType is set to standard or extreme.
     * *   2: A KMS-managed key is used to encrypt the data in the file system. This
     * value is valid if the FileSystemType parameter is set to standard or extreme.
     * >
     * *   Extreme NAS: All regions except China East 1 Finance support KMS-managed
     * keys.
     * *   General-purpose NAS: All regions support KMS-managed keys.
     */
    readonly encryptType?: number | ros.IResolvable;
    /**
     * @Property fileSystemType: File system type. Allowed values: standard(default), extreme, cpfs
     */
    readonly fileSystemType?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property snapshotId: The snapshot ID.
     * This parameter is available only for advanced Extreme NAS file systems.
     * > You can create a file system from a snapshot. The version of the file system is
     * the same as that of the source file system. For example, the source file system
     * of the snapshot uses version 1. To create a file system of version 2, create File
     * System A from the snapshot and create File System B of version 2. Then copy the
     * data and migrate your business from File System A to File System B.
     */
    readonly snapshotId?: string | ros.IResolvable;
    /**
     * @Property tags: Tags to attach to filesystem. Max support 20 tags to add during create filesystem. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosFileSystem.TagsProperty[];
    /**
     * @Property vpcId: The VPC ID.
     * *   This parameter is required if FileSystemType is set to cpfs or cpfsse.
     * *   This parameter is reserved and not required if FileSystemType is set to
     * standard or extreme.
     */
    readonly vpcId?: string | ros.IResolvable;
    /**
     * @Property vSwitchId: The vSwitch ID.
     * *   This parameter is required if FileSystemType is set to cpfs.
     * *   If FileSystemType is not set to cpfs, this parameter is reserved and not
     * required.
     */
    readonly vSwitchId?: string | ros.IResolvable;
    /**
     * @Property zoneId: The ID of the zone.
     * Each region has multiple isolated locations known as zones. Each zone has its own
     * independent power supply and network.
     * This parameter is not required if FileSystemType is set to standard. By default,
     * a random zone is selected based on the protocol type and storage type.
     * This parameter is required if FileSystemType is set to extreme or cpfs.
     * >
     * *   An Elastic Compute Service (ECS) instance and a file system that reside in
     * different zones of the same region can access each other.
     * *   We recommend that you select the zone where the ECS instance resides. This
     * prevents cross-zone latency between the file system and the ECS instance.
     */
    readonly zoneId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::NAS::FileSystem`.
 * @Note This class does not contain additional functions, so it is recommended to use the `FileSystem` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nas-filesystem
 */
export declare class RosFileSystem extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::NAS::FileSystem";
    /**
     * @Attribute FileSystemId: ID of the file system created
     */
    readonly attrFileSystemId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property protocolType: Type of protocol used. Valid values: NFS, SMB, cpfs.
     */
    protocolType: string | ros.IResolvable;
    /**
     * @Property storageType: The storage type of the file System.
     * Valid values:
     * Performance、Capacity、Premium(Available when the file_system_type is standard)
     * standard、advance(Available when the file_system_type is extreme)
     * advance_100、advance_200(Available when the file_system_type is cpfs)
     */
    storageType: string | ros.IResolvable;
    /**
     * @Property bandwidth: Maximum file system throughput, unit is MB\/s. Required and valid only when FileSystemType=cpfs.
     */
    bandwidth: number | ros.IResolvable | undefined;
    /**
     * @Property capacity: Specify the capacity of the file system. Unit: GiB. This parameter is required
     * and valid when FileSystemType is set to extreme, cpfs, or cpfsse.
     * Specify a value based on the specifications on the following buy page:
     * *   Extreme NAS (Pay-as-you-go)
     * *   CPFS (Pay-as-you-go)
     */
    capacity: number | ros.IResolvable | undefined;
    /**
     * @Property chargeType: Type of payment:
     * PayAsYouGo (pay as you go)
     * Subscription
     */
    chargeType: string | ros.IResolvable | undefined;
    /**
     * @Property deletionForce: Whether delete all mount targets on the file system and then delete file system. Default is false
     */
    deletionForce: boolean | ros.IResolvable | undefined;
    /**
     * @Property description: The description of the file system.
     * Limits:
     * *   Must be 2 to 128 characters in length.
     * *   Must start with a letter but cannot start with `http:\/\/` or `https:\/\/`.
     * *   Can contain digits, colons (:), underscores (_), and hyphens (-).
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property duration: The period of subscription in months. Required and valid when ChargeType is Subscription.
     * When the annual and monthly subscription instance expires without renewal, the instance will automatically expire and be released.
     */
    duration: number | ros.IResolvable | undefined;
    /**
     * @Property encryptType: Specifies whether to encrypt data in the file system.
     * You can use the keys that are managed by Key Management Service (KMS) to encrypt
     * data in a file system. When you read and write the encrypted data, the data is
     * automatically decrypted.
     * Valid values:
     * *   0 (default): The data in the file system is not encrypted.
     * *   1: A NAS-managed key is used to encrypt the data in the file system. This
     * value is valid if FileSystemType is set to standard or extreme.
     * *   2: A KMS-managed key is used to encrypt the data in the file system. This
     * value is valid if the FileSystemType parameter is set to standard or extreme.
     * >
     * *   Extreme NAS: All regions except China East 1 Finance support KMS-managed
     * keys.
     * *   General-purpose NAS: All regions support KMS-managed keys.
     */
    encryptType: number | ros.IResolvable | undefined;
    /**
     * @Property fileSystemType: File system type. Allowed values: standard(default), extreme, cpfs
     */
    fileSystemType: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: Resource group id.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property snapshotId: The snapshot ID.
     * This parameter is available only for advanced Extreme NAS file systems.
     * > You can create a file system from a snapshot. The version of the file system is
     * the same as that of the source file system. For example, the source file system
     * of the snapshot uses version 1. To create a file system of version 2, create File
     * System A from the snapshot and create File System B of version 2. Then copy the
     * data and migrate your business from File System A to File System B.
     */
    snapshotId: string | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags to attach to filesystem. Max support 20 tags to add during create filesystem. Each tag with two properties Key and Value, and Key is required.
     */
    tags: RosFileSystem.TagsProperty[] | undefined;
    /**
     * @Property vpcId: The VPC ID.
     * *   This parameter is required if FileSystemType is set to cpfs or cpfsse.
     * *   This parameter is reserved and not required if FileSystemType is set to
     * standard or extreme.
     */
    vpcId: string | ros.IResolvable | undefined;
    /**
     * @Property vSwitchId: The vSwitch ID.
     * *   This parameter is required if FileSystemType is set to cpfs.
     * *   If FileSystemType is not set to cpfs, this parameter is reserved and not
     * required.
     */
    vSwitchId: string | ros.IResolvable | undefined;
    /**
     * @Property zoneId: The ID of the zone.
     * Each region has multiple isolated locations known as zones. Each zone has its own
     * independent power supply and network.
     * This parameter is not required if FileSystemType is set to standard. By default,
     * a random zone is selected based on the protocol type and storage type.
     * This parameter is required if FileSystemType is set to extreme or cpfs.
     * >
     * *   An Elastic Compute Service (ECS) instance and a file system that reside in
     * different zones of the same region can access each other.
     * *   We recommend that you select the zone where the ECS instance resides. This
     * prevents cross-zone latency between the file system and the ECS instance.
     */
    zoneId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosFileSystemProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosFileSystem {
    /**
     * @stability external
     */
    interface TagsProperty {
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
 * Properties for defining a `RosFileset`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nas-fileset
 */
export interface RosFilesetProps {
    /**
     * @Property fileSystemId: The ID of the file system.
     * *   The IDs of CPFS file systems must start with `cpfs-`. Example:
     * cpfs-099394bd928c\*\*\*\*.
     * *   The IDs of CPFS for Lingjun file systems must start with `bmcpfs-`. Example:
     * bmcpfs-290w65p03ok64ya\*\*\*\*.
     */
    readonly fileSystemId: string | ros.IResolvable;
    /**
     * @Property fileSystemPath: The absolute path of the fileset.
     * *   CPFS path limits.
     * *   The parent directory of the path that you specify must be an existing
     * directory in the file system.
     * *   The path must be 2 to 1024 characters in length.
     * *   The path must start and end with a forward slash (\/).
     * *   Path limit of CPFS for Lingjun
     * *   The path must be 2 to 1024 characters in length.
     * *   The path must start and end with a forward slash (\/).
     * *   The fileset path must be a new path and cannot be an existing path. Fileset
     * paths cannot be renamed and cannot be symbolic links.
     * *   The maximum depth supported by a fileset path is eight levels. The depth of
     * the root directory \/ is 0 levels. For example, the fileset path \/test\/aaa\/ccc\/
     * has three levels.
     * *   If the fileset path is a multi-level path, the parent directory must be an
     * existing directory.
     * *   Nested filesets are not supported. If a fileset is specified as a parent
     * directory, its subdirectory cannot be a fileset. A fileset path supports only one
     * quota.
     * *   The path cannot exceed 990 characters in length.
     */
    readonly fileSystemPath: string | ros.IResolvable;
    /**
     * @Property description: The description of the fileset.
     * *   The description must be 2 to 128 characters in length.
     * *   The name must start with a letter and cannot start with http:\/\/ or https:\/\/.
     * *   The description can contain letters, digits, colons (:), underscores (_),
     * periods (.), and hyphens (-).
     */
    readonly description?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::NAS::Fileset`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Fileset` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nas-fileset
 */
export declare class RosFileset extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::NAS::Fileset";
    /**
     * @Attribute FileSystemId: File system ID.
     */
    readonly attrFileSystemId: ros.IResolvable;
    /**
     * @Attribute FileSystemPath: File system path.
     */
    readonly attrFileSystemPath: ros.IResolvable;
    /**
     * @Attribute FsetId: Fileset ID.
     */
    readonly attrFsetId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property fileSystemId: The ID of the file system.
     * *   The IDs of CPFS file systems must start with `cpfs-`. Example:
     * cpfs-099394bd928c\*\*\*\*.
     * *   The IDs of CPFS for Lingjun file systems must start with `bmcpfs-`. Example:
     * bmcpfs-290w65p03ok64ya\*\*\*\*.
     */
    fileSystemId: string | ros.IResolvable;
    /**
     * @Property fileSystemPath: The absolute path of the fileset.
     * *   CPFS path limits.
     * *   The parent directory of the path that you specify must be an existing
     * directory in the file system.
     * *   The path must be 2 to 1024 characters in length.
     * *   The path must start and end with a forward slash (\/).
     * *   Path limit of CPFS for Lingjun
     * *   The path must be 2 to 1024 characters in length.
     * *   The path must start and end with a forward slash (\/).
     * *   The fileset path must be a new path and cannot be an existing path. Fileset
     * paths cannot be renamed and cannot be symbolic links.
     * *   The maximum depth supported by a fileset path is eight levels. The depth of
     * the root directory \/ is 0 levels. For example, the fileset path \/test\/aaa\/ccc\/
     * has three levels.
     * *   If the fileset path is a multi-level path, the parent directory must be an
     * existing directory.
     * *   Nested filesets are not supported. If a fileset is specified as a parent
     * directory, its subdirectory cannot be a fileset. A fileset path supports only one
     * quota.
     * *   The path cannot exceed 990 characters in length.
     */
    fileSystemPath: string | ros.IResolvable;
    /**
     * @Property description: The description of the fileset.
     * *   The description must be 2 to 128 characters in length.
     * *   The name must start with a letter and cannot start with http:\/\/ or https:\/\/.
     * *   The description can contain letters, digits, colons (:), underscores (_),
     * periods (.), and hyphens (-).
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosFilesetProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosMountTarget`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nas-mounttarget
 */
export interface RosMountTargetProps {
    /**
     * @Property accessGroupName: The name of the permission group.
     * This parameter is required if you create a mount target for a General-purpose NAS
     * file system or an Extreme NAS file system.
     * The default permission group for virtual private clouds (VPCs) is named
     * DEFAULT_VPC_GROUP_NAME.
     */
    readonly accessGroupName: string | ros.IResolvable;
    /**
     * @Property fileSystemId: The ID of the file system.
     * *   Sample ID of a General-purpose NAS file system: 31a8e4\*\*\*\*.
     * *   The IDs of Extreme NAS file systems must start with `extreme-`, for example,
     * extreme-0015\*\*\*\*.
     * *   The IDs of CPFS file systems must start with `cpfs-`. Example:
     * cpfs-125487\*\*\*\*.
     */
    readonly fileSystemId: string | ros.IResolvable;
    /**
     * @Property networkType: Network type, including Vpc and Classic networks.
     */
    readonly networkType: string | ros.IResolvable;
    /**
     * @Property enableIpv6: Whether to create an IPv6 mount point.Value:
     * true: create
     * false (default): do not create
     * Note Currently, only the ultra-fast NAS in mainland China supports the IPv6 function, and the file system needs to enable the IPv6 function.
     */
    readonly enableIpv6?: boolean | ros.IResolvable;
    /**
     * @Property securityGroupId: Security group Id
     */
    readonly securityGroupId?: string | ros.IResolvable;
    /**
     * @Property status: Status, including Active and Inactive
     */
    readonly status?: string | ros.IResolvable;
    /**
     * @Property vpcId: VPC network ID
     */
    readonly vpcId?: string | ros.IResolvable;
    /**
     * @Property vSwitchId: VSwitch ID.
     */
    readonly vSwitchId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::NAS::MountTarget`.
 * @Note This class does not contain additional functions, so it is recommended to use the `MountTarget` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nas-mounttarget
 */
export declare class RosMountTarget extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::NAS::MountTarget";
    /**
     * @Attribute MountTargetDomain: Mount point domain name
     */
    readonly attrMountTargetDomain: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property accessGroupName: The name of the permission group.
     * This parameter is required if you create a mount target for a General-purpose NAS
     * file system or an Extreme NAS file system.
     * The default permission group for virtual private clouds (VPCs) is named
     * DEFAULT_VPC_GROUP_NAME.
     */
    accessGroupName: string | ros.IResolvable;
    /**
     * @Property fileSystemId: The ID of the file system.
     * *   Sample ID of a General-purpose NAS file system: 31a8e4\*\*\*\*.
     * *   The IDs of Extreme NAS file systems must start with `extreme-`, for example,
     * extreme-0015\*\*\*\*.
     * *   The IDs of CPFS file systems must start with `cpfs-`. Example:
     * cpfs-125487\*\*\*\*.
     */
    fileSystemId: string | ros.IResolvable;
    /**
     * @Property networkType: Network type, including Vpc and Classic networks.
     */
    networkType: string | ros.IResolvable;
    /**
     * @Property enableIpv6: Whether to create an IPv6 mount point.Value:
     * true: create
     * false (default): do not create
     * Note Currently, only the ultra-fast NAS in mainland China supports the IPv6 function, and the file system needs to enable the IPv6 function.
     */
    enableIpv6: boolean | ros.IResolvable | undefined;
    /**
     * @Property securityGroupId: Security group Id
     */
    securityGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property status: Status, including Active and Inactive
     */
    status: string | ros.IResolvable | undefined;
    /**
     * @Property vpcId: VPC network ID
     */
    vpcId: string | ros.IResolvable | undefined;
    /**
     * @Property vSwitchId: VSwitch ID.
     */
    vSwitchId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosMountTargetProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosProtocolMountTarget`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nas-protocolmounttarget
 */
export interface RosProtocolMountTargetProps {
    /**
     * @Property fileSystemId: File system ID.
     */
    readonly fileSystemId: string | ros.IResolvable;
    /**
     * @Property protocolServiceId: Agreement service ID.
     */
    readonly protocolServiceId: string | ros.IResolvable;
    /**
     * @Property vpcId: Proper network ID exported by the protocol service.
     */
    readonly vpcId: string | ros.IResolvable;
    /**
     * @Property vSwitchId: The vSwitch ID of the export directory.
     * If the storage redundancy type of the file system is not zone-redundant (ZRS) and
     * the VpcId is set, this field is required.
     */
    readonly vSwitchId: string | ros.IResolvable;
    /**
     * @Property accessGroupName: The name of the permissions group.
     * Default value: DEFAULT_VPC_GROUP_NAME
     */
    readonly accessGroupName?: string | ros.IResolvable;
    /**
     * @Property description: The description of the export directory for the protocol service. The name of the
     * export directory appears in the console.
     * Limits:
     * *   The description must be 2 to 128 characters in length.
     * *   The description must start with a letter but cannot start with `http:\/\/` or
     * `https:\/\/`.
     * *   The description can contain letters, digits, colons (:), underscores (_), and
     * hyphens (-).
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property fsetId: Fileset ID needs to be exported.
     * limit:
     * The Fileset must exist.
     * A Fileset allows only one export directory.
     * Fileset and Path can only specify one.
     */
    readonly fsetId?: string | ros.IResolvable;
    /**
     * @Property path: The path of the CPFS directory that you want to export.
     * Limits:
     * *   The directory already exists in the CPFS file system.
     * *   You can create only one export directory for a directory.
     * *   You can specify either a fileset or a path.
     * Format:
     * *   The path must be 1 to 1,024 characters in length.
     * *   The path must be encoded in UTF-8.
     * *   The path must start and end with a forward slash (\/). The root directory is
     * `\/`.
     */
    readonly path?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::NAS::ProtocolMountTarget`Creates an export directory for a NAS protocol service.
 * @Note This class does not contain additional functions, so it is recommended to use the `ProtocolMountTarget` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nas-protocolmounttarget
 */
export declare class RosProtocolMountTarget extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::NAS::ProtocolMountTarget";
    /**
     * @Attribute ExportId: The protocol service exports directory ID.
     */
    readonly attrExportId: ros.IResolvable;
    /**
     * @Attribute FileSystemId: File system ID.
     */
    readonly attrFileSystemId: ros.IResolvable;
    /**
     * @Attribute ProtocolMountTargetDomain: The protocol mount target domain.
     */
    readonly attrProtocolMountTargetDomain: ros.IResolvable;
    /**
     * @Attribute ProtocolServiceId: Protocol service ID.
     */
    readonly attrProtocolServiceId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property fileSystemId: File system ID.
     */
    fileSystemId: string | ros.IResolvable;
    /**
     * @Property protocolServiceId: Agreement service ID.
     */
    protocolServiceId: string | ros.IResolvable;
    /**
     * @Property vpcId: Proper network ID exported by the protocol service.
     */
    vpcId: string | ros.IResolvable;
    /**
     * @Property vSwitchId: The vSwitch ID of the export directory.
     * If the storage redundancy type of the file system is not zone-redundant (ZRS) and
     * the VpcId is set, this field is required.
     */
    vSwitchId: string | ros.IResolvable;
    /**
     * @Property accessGroupName: The name of the permissions group.
     * Default value: DEFAULT_VPC_GROUP_NAME
     */
    accessGroupName: string | ros.IResolvable | undefined;
    /**
     * @Property description: The description of the export directory for the protocol service. The name of the
     * export directory appears in the console.
     * Limits:
     * *   The description must be 2 to 128 characters in length.
     * *   The description must start with a letter but cannot start with `http:\/\/` or
     * `https:\/\/`.
     * *   The description can contain letters, digits, colons (:), underscores (_), and
     * hyphens (-).
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property fsetId: Fileset ID needs to be exported.
     * limit:
     * The Fileset must exist.
     * A Fileset allows only one export directory.
     * Fileset and Path can only specify one.
     */
    fsetId: string | ros.IResolvable | undefined;
    /**
     * @Property path: The path of the CPFS directory that you want to export.
     * Limits:
     * *   The directory already exists in the CPFS file system.
     * *   You can create only one export directory for a directory.
     * *   You can specify either a fileset or a path.
     * Format:
     * *   The path must be 1 to 1,024 characters in length.
     * *   The path must be encoded in UTF-8.
     * *   The path must start and end with a forward slash (\/). The root directory is
     * `\/`.
     */
    path: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosProtocolMountTargetProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosProtocolService`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nas-protocolservice
 */
export interface RosProtocolServiceProps {
    /**
     * @Property fileSystemId: File system ID.
     */
    readonly fileSystemId: string | ros.IResolvable;
    /**
     * @Property protocolSpec: The spec of protocol service. Default: General. Values: General
     */
    readonly protocolSpec: string | ros.IResolvable;
    /**
     * @Property protocolType: The protocol type of the protocol service.
     * Valid value: NFS (default). Only NFSv3 is supported.
     */
    readonly protocolType: string | ros.IResolvable;
    /**
     * @Property vpcId: The protocol service VPCID needs to be consistent with the file system VPC.
     */
    readonly vpcId: string | ros.IResolvable;
    /**
     * @Property vSwitchId: Agreement service vswitchid.
     */
    readonly vSwitchId: string | ros.IResolvable;
    /**
     * @Property description: The description of the protocol service. The name of the protocol service appears
     * in the console.
     * Limits:
     * *   The description must be 2 to 128 characters in length.
     * *   The description must start with a letter but cannot start with `http:\/\/` or
     * `https:\/\/`.
     * *   The description can contain letters, digits, colons (:), underscores (_), and
     * hyphens (-).
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property throughput: The bandwidth of the agreement service.
     * Unit: MB\/S.
     */
    readonly throughput?: number | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::NAS::ProtocolService`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ProtocolService` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nas-protocolservice
 */
export declare class RosProtocolService extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::NAS::ProtocolService";
    /**
     * @Attribute FileSystemId: File system ID.
     */
    readonly attrFileSystemId: ros.IResolvable;
    /**
     * @Attribute ProtocolServiceId: Agreement cluster group ID.
     */
    readonly attrProtocolServiceId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property fileSystemId: File system ID.
     */
    fileSystemId: string | ros.IResolvable;
    /**
     * @Property protocolSpec: The spec of protocol service. Default: General. Values: General
     */
    protocolSpec: string | ros.IResolvable;
    /**
     * @Property protocolType: The protocol type of the protocol service.
     * Valid value: NFS (default). Only NFSv3 is supported.
     */
    protocolType: string | ros.IResolvable;
    /**
     * @Property vpcId: The protocol service VPCID needs to be consistent with the file system VPC.
     */
    vpcId: string | ros.IResolvable;
    /**
     * @Property vSwitchId: Agreement service vswitchid.
     */
    vSwitchId: string | ros.IResolvable;
    /**
     * @Property description: The description of the protocol service. The name of the protocol service appears
     * in the console.
     * Limits:
     * *   The description must be 2 to 128 characters in length.
     * *   The description must start with a letter but cannot start with `http:\/\/` or
     * `https:\/\/`.
     * *   The description can contain letters, digits, colons (:), underscores (_), and
     * hyphens (-).
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property throughput: The bandwidth of the agreement service.
     * Unit: MB\/S.
     */
    throughput: number | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosProtocolServiceProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
