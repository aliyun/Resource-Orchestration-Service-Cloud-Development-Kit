import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `ALIYUN::NAS::AccessGroup`
 */
export interface RosAccessGroupProps {
    /**
     * @Property accessGroupName: Permission group name
     */
    readonly accessGroupName: string | ros.IResolvable;
    /**
     * @Property accessGroupType: Permission group type, including the Vpc and Classic types
     */
    readonly accessGroupType: string | ros.IResolvable;
    /**
     * @Property description: Permission group description. It is the same as the permission group name by default.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property fileSystemType: File system type.
     * Values: standard (default), extreme
     */
    readonly fileSystemType?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::NAS::AccessGroup`
 */
export declare class RosAccessGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::NAS::AccessGroup";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute AccessGroupName: Permission group name
     */
    readonly attrAccessGroupName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property accessGroupName: Permission group name
     */
    accessGroupName: string | ros.IResolvable;
    /**
     * @Property accessGroupType: Permission group type, including the Vpc and Classic types
     */
    accessGroupType: string | ros.IResolvable;
    /**
     * @Property description: Permission group description. It is the same as the permission group name by default.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property fileSystemType: File system type.
     * Values: standard (default), extreme
     */
    fileSystemType: string | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::NAS::AccessGroup`.
     *
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
 * Properties for defining a `ALIYUN::NAS::AccessRule`
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
 * A ROS template type:  `ALIYUN::NAS::AccessRule`
 */
export declare class RosAccessRule extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::NAS::AccessRule";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
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
     * Create a new `ALIYUN::NAS::AccessRule`.
     *
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
 * Properties for defining a `ALIYUN::NAS::DataFlow`
 */
export interface RosDataFlowProps {
    /**
     * @Property fileSystemId: File system ID.
     */
    readonly fileSystemId: string | ros.IResolvable;
    /**
     * @Property fsetId: Fileset ID.
     */
    readonly fsetId: string | ros.IResolvable;
    /**
     * @Property sourceStorage: Access path stored at the source.Format: <storage Type>: // <PATH>.
     * in:
     * Storage Type: Currently only supports OSS.
     * PATH: OSS's bucket name.Limit the following.
     * Only support the lowercase letters, numbers and short strokes (-) and must start with a lowercase letter or number.
     * The length is 8 ~ 128 English characters.
     * Use UTF-8 encoding.
     * Can't start with http: // and https: //.
     * Explain that the OSS BUCKET must be the bucket that exists in the region.
     */
    readonly sourceStorage: string | ros.IResolvable;
    /**
     * @Property throughput: The upper limit of transmission bandwidth for data flow, unit: MB/s.
     * Value:
     * 600
     * 1200
     * 1500
     *
     * Explanation The transmission bandwidth of the data flow must be smaller than the IO bandwidth of the file system.
     */
    readonly throughput: number | ros.IResolvable;
    /**
     * @Property autoRefreshInterval: The automatic update interval time, every time the interval, the CPFS checks whether there is a data update in the directory. If there is data update, start the automatic update task, unit: minute.
     * Scope of value: 5 ~ 525600, default value: 10.
     */
    readonly autoRefreshInterval?: number | ros.IResolvable;
    /**
     * @Property autoRefreshPolicy: Automatic update strategy, after the source data is updated, the data update is introduced to the CPFS strategy.
     * None (default): The data update of the source is not automatically imported into CPFS. Users can import data update at the source end of the source through data flow tasks.
     * Importchanged: The data update at the source automatically imports CPFS.
     */
    readonly autoRefreshPolicy?: string | ros.IResolvable;
    /**
     * @Property autoRefreshs:
     */
    readonly autoRefreshs?: Array<RosDataFlow.AutoRefreshsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property description: Description of data flow.
     * limit:
     * The length is 2 to 128 English or Chinese characters.
     * Start with a lowercase letter or Chinese, and you cannot start with http:// and https: //.
     * It can contain numbers, half-horn colon (:), down line (_) or short lines (-).
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
 * A ROS template type:  `ALIYUN::NAS::DataFlow`
 */
export declare class RosDataFlow extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::NAS::DataFlow";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
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
     * @Property fileSystemId: File system ID.
     */
    fileSystemId: string | ros.IResolvable;
    /**
     * @Property fsetId: Fileset ID.
     */
    fsetId: string | ros.IResolvable;
    /**
     * @Property sourceStorage: Access path stored at the source.Format: <storage Type>: // <PATH>.
     * in:
     * Storage Type: Currently only supports OSS.
     * PATH: OSS's bucket name.Limit the following.
     * Only support the lowercase letters, numbers and short strokes (-) and must start with a lowercase letter or number.
     * The length is 8 ~ 128 English characters.
     * Use UTF-8 encoding.
     * Can't start with http: // and https: //.
     * Explain that the OSS BUCKET must be the bucket that exists in the region.
     */
    sourceStorage: string | ros.IResolvable;
    /**
     * @Property throughput: The upper limit of transmission bandwidth for data flow, unit: MB/s.
     * Value:
     * 600
     * 1200
     * 1500
     *
     * Explanation The transmission bandwidth of the data flow must be smaller than the IO bandwidth of the file system.
     */
    throughput: number | ros.IResolvable;
    /**
     * @Property autoRefreshInterval: The automatic update interval time, every time the interval, the CPFS checks whether there is a data update in the directory. If there is data update, start the automatic update task, unit: minute.
     * Scope of value: 5 ~ 525600, default value: 10.
     */
    autoRefreshInterval: number | ros.IResolvable | undefined;
    /**
     * @Property autoRefreshPolicy: Automatic update strategy, after the source data is updated, the data update is introduced to the CPFS strategy.
     * None (default): The data update of the source is not automatically imported into CPFS. Users can import data update at the source end of the source through data flow tasks.
     * Importchanged: The data update at the source automatically imports CPFS.
     */
    autoRefreshPolicy: string | ros.IResolvable | undefined;
    /**
     * @Property autoRefreshs:
     */
    autoRefreshs: Array<RosDataFlow.AutoRefreshsProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property description: Description of data flow.
     * limit:
     * The length is 2 to 128 English or Chinese characters.
     * Start with a lowercase letter or Chinese, and you cannot start with http:// and https: //.
     * It can contain numbers, half-horn colon (:), down line (_) or short lines (-).
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property sourceSecurityType: The type of safety protection types of the source storage. If the source storage must be protected through safety protection, please specify the type of safety protection type storage.Value:
     * No (default value): It means that the source storage does not need to be accessed by safe protection.
     * SSL: Protective access through SSL certificates.
     */
    sourceSecurityType: string | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::NAS::DataFlow`.
     *
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
     * It must start with a positive oblique line (/).
     * This directory must be existing directory on CPFS and must be located in the Fileset directory that flows in the data.
         */
        readonly refreshPath: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `ALIYUN::NAS::FileSystem`
 */
export interface RosFileSystemProps {
    /**
     * @Property protocolType: Type of protocol used. Valid values: NFS, SMB, cpfs.
     */
    readonly protocolType: string | ros.IResolvable;
    /**
     * @Property storageType: The storage type of the file System.
     * Valid values:
     * Performance、Capacity(Available when the file_system_type is standard)
     * standard、advance(Available when the file_system_type is extreme)
     * advance_100、advance_200(Available when the file_system_type is cpfs)
     *
     */
    readonly storageType: string | ros.IResolvable;
    /**
     * @Property bandwidth: Maximum file system throughput, unit is MB/s. Required and valid only when FileSystemType=cpfs.
     */
    readonly bandwidth?: number | ros.IResolvable;
    /**
     * @Property capacity: File system capacity, the unit is GB. Required and valid when FileSystemType=extreme or cpfs.
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
     * @Property description: File system description (space characters are not allowed)
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property duration: The period of subscription in months. Required and valid when ChargeType is Subscription.
     * When the annual and monthly subscription instance expires without renewal, the instance will automatically expire and be released.
     */
    readonly duration?: number | ros.IResolvable;
    /**
     * @Property encryptType: Specifies whether to encrypt data. You can use keys that are hosted by Key Management Service (KMS) to encrypt data stored on a file system. Data is automatically decrypted when you access encrypted data. Valid values:
     * 0: specifies that no encryption is applied to data on the file system.
     * 1: specifies that encryption is applied to data on the file system.
     */
    readonly encryptType?: number | ros.IResolvable;
    /**
     * @Property fileSystemType: File system type. Allowed values: standard(default), extreme, cpfs
     */
    readonly fileSystemType?: string | ros.IResolvable;
    /**
     * @Property snapshotId: Snapshot ID.
     */
    readonly snapshotId?: string | ros.IResolvable;
    /**
     * @Property tags: Tags to attach to filesystem. Max support 20 tags to add during create filesystem. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosFileSystem.TagsProperty[];
    /**
     * @Property vpcId: Vpc ID.
     */
    readonly vpcId?: string | ros.IResolvable;
    /**
     * @Property vSwitchId: VSwitch ID.
     */
    readonly vSwitchId?: string | ros.IResolvable;
    /**
     * @Property zoneId: Zone ID.
     */
    readonly zoneId?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::NAS::FileSystem`
 */
export declare class RosFileSystem extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::NAS::FileSystem";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
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
     * Performance、Capacity(Available when the file_system_type is standard)
     * standard、advance(Available when the file_system_type is extreme)
     * advance_100、advance_200(Available when the file_system_type is cpfs)
     *
     */
    storageType: string | ros.IResolvable;
    /**
     * @Property bandwidth: Maximum file system throughput, unit is MB/s. Required and valid only when FileSystemType=cpfs.
     */
    bandwidth: number | ros.IResolvable | undefined;
    /**
     * @Property capacity: File system capacity, the unit is GB. Required and valid when FileSystemType=extreme or cpfs.
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
     * @Property description: File system description (space characters are not allowed)
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property duration: The period of subscription in months. Required and valid when ChargeType is Subscription.
     * When the annual and monthly subscription instance expires without renewal, the instance will automatically expire and be released.
     */
    duration: number | ros.IResolvable | undefined;
    /**
     * @Property encryptType: Specifies whether to encrypt data. You can use keys that are hosted by Key Management Service (KMS) to encrypt data stored on a file system. Data is automatically decrypted when you access encrypted data. Valid values:
     * 0: specifies that no encryption is applied to data on the file system.
     * 1: specifies that encryption is applied to data on the file system.
     */
    encryptType: number | ros.IResolvable | undefined;
    /**
     * @Property fileSystemType: File system type. Allowed values: standard(default), extreme, cpfs
     */
    fileSystemType: string | ros.IResolvable | undefined;
    /**
     * @Property snapshotId: Snapshot ID.
     */
    snapshotId: string | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags to attach to filesystem. Max support 20 tags to add during create filesystem. Each tag with two properties Key and Value, and Key is required.
     */
    tags: RosFileSystem.TagsProperty[] | undefined;
    /**
     * @Property vpcId: Vpc ID.
     */
    vpcId: string | ros.IResolvable | undefined;
    /**
     * @Property vSwitchId: VSwitch ID.
     */
    vSwitchId: string | ros.IResolvable | undefined;
    /**
     * @Property zoneId: Zone ID.
     */
    zoneId: string | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::NAS::FileSystem`.
     *
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
 * Properties for defining a `ALIYUN::NAS::Fileset`
 */
export interface RosFilesetProps {
    /**
     * @Property fileSystemId: File system ID.
     */
    readonly fileSystemId: string | ros.IResolvable;
    /**
     * @Property fileSystemPath: The absolute path of Fileset to be created.
     * The parent catalog of specified the directory must be a directory in the file system.
     * The length is 2 to 1024 characters.
     * Specify the directory must start with positive (/).
     */
    readonly fileSystemPath: string | ros.IResolvable;
    /**
     * @Property description: Fileset description information.
     * The length is 2 to 128 English or Chinese characters.
     * Start with a lowercase letter or Chinese, and you cannot start with http:// and https: //.
     * It can contain numbers, half-horn colon (:), down line (_) or short lines (-).
     */
    readonly description?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::NAS::Fileset`
 */
export declare class RosFileset extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::NAS::Fileset";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
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
     * @Property fileSystemId: File system ID.
     */
    fileSystemId: string | ros.IResolvable;
    /**
     * @Property fileSystemPath: The absolute path of Fileset to be created.
     * The parent catalog of specified the directory must be a directory in the file system.
     * The length is 2 to 1024 characters.
     * Specify the directory must start with positive (/).
     */
    fileSystemPath: string | ros.IResolvable;
    /**
     * @Property description: Fileset description information.
     * The length is 2 to 128 English or Chinese characters.
     * Start with a lowercase letter or Chinese, and you cannot start with http:// and https: //.
     * It can contain numbers, half-horn colon (:), down line (_) or short lines (-).
     */
    description: string | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::NAS::Fileset`.
     *
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
 * Properties for defining a `ALIYUN::NAS::MountTarget`
 */
export interface RosMountTargetProps {
    /**
     * @Property accessGroupName: Permission group name. Default to DEFAULT_VPC_GROUP_NAME.
     */
    readonly accessGroupName: string | ros.IResolvable;
    /**
     * @Property fileSystemId: File system ID
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
 * A ROS template type:  `ALIYUN::NAS::MountTarget`
 */
export declare class RosMountTarget extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::NAS::MountTarget";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute MountTargetDomain: Mount point domain name
     */
    readonly attrMountTargetDomain: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property accessGroupName: Permission group name. Default to DEFAULT_VPC_GROUP_NAME.
     */
    accessGroupName: string | ros.IResolvable;
    /**
     * @Property fileSystemId: File system ID
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
     * Create a new `ALIYUN::NAS::MountTarget`.
     *
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
 * Properties for defining a `ALIYUN::NAS::ProtocolMountTarget`
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
     * @Property vSwitchId: Switch ID exported by the protocol service.
     */
    readonly vSwitchId: string | ros.IResolvable;
    /**
     * @Property accessGroupName: The name of the permissions group.
     * Default value: DEFAULT_VPC_GROUP_NAME
     */
    readonly accessGroupName?: string | ros.IResolvable;
    /**
     * @Property description: Description of the protocol service to export the directory.The console is displayed as the export directory name.
     * limit:
     * The length is 2 to 128 English or Chinese characters.
     * Start with a lowercase letter or Chinese, and you cannot start with http:// and https: //.
     * It can contain numbers, half-horn colon (:), down line (_) or short lines (-).
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
     * @Property path: The path of the CPFS directory that needs to be exported.
     * limit:
     * This directory must be existing directory on CPFS.
     * The same directory allows only one export.
     * Fileset and Path can only specify one.
     * Format:
     * The length is 1 to 1024 characters.
     * Use UTF-8 encoding.
     * It must start with the positive oblique line (/), and the root directory must be/.
     */
    readonly path?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::NAS::ProtocolMountTarget`
 */
export declare class RosProtocolMountTarget extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::NAS::ProtocolMountTarget";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
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
     * @Property vSwitchId: Switch ID exported by the protocol service.
     */
    vSwitchId: string | ros.IResolvable;
    /**
     * @Property accessGroupName: The name of the permissions group.
     * Default value: DEFAULT_VPC_GROUP_NAME
     */
    accessGroupName: string | ros.IResolvable | undefined;
    /**
     * @Property description: Description of the protocol service to export the directory.The console is displayed as the export directory name.
     * limit:
     * The length is 2 to 128 English or Chinese characters.
     * Start with a lowercase letter or Chinese, and you cannot start with http:// and https: //.
     * It can contain numbers, half-horn colon (:), down line (_) or short lines (-).
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
     * @Property path: The path of the CPFS directory that needs to be exported.
     * limit:
     * This directory must be existing directory on CPFS.
     * The same directory allows only one export.
     * Fileset and Path can only specify one.
     * Format:
     * The length is 1 to 1024 characters.
     * Use UTF-8 encoding.
     * It must start with the positive oblique line (/), and the root directory must be/.
     */
    path: string | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::NAS::ProtocolMountTarget`.
     *
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
 * Properties for defining a `ALIYUN::NAS::ProtocolService`
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
     * @Property protocolType: The protocol type of agreement service.
     * Ranges:
     * NFS: Agreement service supports NFS protocol access.
     * The default value: NFS.
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
     * @Property description: Description of protocol service.The console shows the "protocol service name".
     * limit:
     * The length is 2 to 128 English or Chinese characters.
     * Start with a lowercase letter or Chinese, and you cannot start with http:// and https: //.
     * It can contain numbers, half-horn colon (:), down line (_) or short lines (-).
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property throughput: The bandwidth of the agreement service.
     * Unit: MB/S.
     */
    readonly throughput?: number | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::NAS::ProtocolService`
 */
export declare class RosProtocolService extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::NAS::ProtocolService";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
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
     * @Property protocolType: The protocol type of agreement service.
     * Ranges:
     * NFS: Agreement service supports NFS protocol access.
     * The default value: NFS.
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
     * @Property description: Description of protocol service.The console shows the "protocol service name".
     * limit:
     * The length is 2 to 128 English or Chinese characters.
     * Start with a lowercase letter or Chinese, and you cannot start with http:// and https: //.
     * It can contain numbers, half-horn colon (:), down line (_) or short lines (-).
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property throughput: The bandwidth of the agreement service.
     * Unit: MB/S.
     */
    throughput: number | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::NAS::ProtocolService`.
     *
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
