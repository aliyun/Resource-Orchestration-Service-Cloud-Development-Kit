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
     * @Property sourceCidrIp: Address or address segment
     */
    readonly sourceCidrIp: string | ros.IResolvable;
    /**
     * @Property priority: Priority level. Range: 1-100. Default value: 1
     */
    readonly priority?: number | ros.IResolvable;
    /**
     * @Property rwAccessType: Read-write permission type: RDWR (default), RDONLY
     */
    readonly rwAccessType?: string | ros.IResolvable;
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
     * @Property sourceCidrIp: Address or address segment
     */
    sourceCidrIp: string | ros.IResolvable;
    /**
     * @Property priority: Priority level. Range: 1-100. Default value: 1
     */
    priority: number | ros.IResolvable | undefined;
    /**
     * @Property rwAccessType: Read-write permission type: RDWR (default), RDONLY
     */
    rwAccessType: string | ros.IResolvable | undefined;
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
 * Properties for defining a `ALIYUN::NAS::FileSystem`
 */
export interface RosFileSystemProps {
    /**
     * @Property protocolType: Type of protocol used. Currently includes the NFS type and the SMB type
     */
    readonly protocolType: string | ros.IResolvable;
    /**
     * @Property storageType: The file system type. Currently includes the Performance type and the Capacity type
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
     * @Property fileSystemType: File system type. Allowed values: standard, extreme, cpfs
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
     * @Property protocolType: Type of protocol used. Currently includes the NFS type and the SMB type
     */
    protocolType: string | ros.IResolvable;
    /**
     * @Property storageType: The file system type. Currently includes the Performance type and the Capacity type
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
     * @Property fileSystemType: File system type. Allowed values: standard, extreme, cpfs
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
//# sourceMappingURL=nas.generated.d.ts.map