import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `ALIYUN::NAS::AccessGroup`
 */
export interface RosAccessGroupProps {
    /**
     * @Property accessGroupName: Permission group name
     */
    readonly accessGroupName: string;
    /**
     * @Property accessGroupType: Permission group type, including the Vpc and Classic types
     */
    readonly accessGroupType: string;
    /**
     * @Property description: Permission group description. It is the same as the permission group name by default.
     */
    readonly description?: string;
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
    readonly attrAccessGroupName: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property accessGroupName: Permission group name
     */
    accessGroupName: string;
    /**
     * @Property accessGroupType: Permission group type, including the Vpc and Classic types
     */
    accessGroupType: string;
    /**
     * @Property description: Permission group description. It is the same as the permission group name by default.
     */
    description: string | undefined;
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
    readonly accessGroupName: string;
    /**
     * @Property sourceCidrIp: Address or address segment
     */
    readonly sourceCidrIp: string;
    /**
     * @Property priority: Priority level. Range: 1-100. Default value: 1
     */
    readonly priority?: number;
    /**
     * @Property rwAccessType: Read-write permission type: RDWR (default), RDONLY
     */
    readonly rwAccessType?: string;
    /**
     * @Property userAccessType: User permission type: no_squash (default), root_squash, all_squash
     */
    readonly userAccessType?: string;
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
    readonly attrAccessRuleId: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property accessGroupName: Permission group name
     */
    accessGroupName: string;
    /**
     * @Property sourceCidrIp: Address or address segment
     */
    sourceCidrIp: string;
    /**
     * @Property priority: Priority level. Range: 1-100. Default value: 1
     */
    priority: number | undefined;
    /**
     * @Property rwAccessType: Read-write permission type: RDWR (default), RDONLY
     */
    rwAccessType: string | undefined;
    /**
     * @Property userAccessType: User permission type: no_squash (default), root_squash, all_squash
     */
    userAccessType: string | undefined;
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
    readonly protocolType: string;
    /**
     * @Property storageType: The file system type. Currently includes the Performance type and the Capacity type
     */
    readonly storageType: string;
    /**
     * @Property bandwidth: Maximum file system throughput, unit is MB/s. Required and valid only when FileSystemType=cpfs.
     */
    readonly bandwidth?: number;
    /**
     * @Property capacity: File system capacity, the unit is GB. Required and valid when FileSystemType=extreme or cpfs.
     */
    readonly capacity?: number;
    /**
     * @Property chargeType: Type of payment:
     * PayAsYouGo (pay as you go)
     * Subscription
     */
    readonly chargeType?: string;
    /**
     * @Property deletionForce: Whether delete all mount targets on the file system and then delete file system. Default is false
     */
    readonly deletionForce?: boolean | ros.IResolvable;
    /**
     * @Property description: File system description (space characters are not allowed)
     */
    readonly description?: string;
    /**
     * @Property duration: The period of subscription in months. Required and valid when ChargeType is Subscription.
     * When the annual and monthly subscription instance expires without renewal, the instance will automatically expire and be released.
     */
    readonly duration?: number;
    /**
     * @Property encryptType: Specifies whether to encrypt data. You can use keys that are hosted by Key Management Service (KMS) to encrypt data stored on a file system. Data is automatically decrypted when you access encrypted data. Valid values:
     * 0: specifies that no encryption is applied to data on the file system.
     * 1: specifies that encryption is applied to data on the file system.
     */
    readonly encryptType?: number;
    /**
     * @Property fileSystemType: File system type. Allowed values: standard, extreme, cpfs
     */
    readonly fileSystemType?: string;
    /**
     * @Property snapshotId: Snapshot ID.
     */
    readonly snapshotId?: string;
    /**
     * @Property vpcId: Vpc ID.
     */
    readonly vpcId?: string;
    /**
     * @Property vSwitchId: VSwitch ID.
     */
    readonly vSwitchId?: string;
    /**
     * @Property zoneId: Zone ID.
     */
    readonly zoneId?: string;
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
    readonly attrFileSystemId: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property protocolType: Type of protocol used. Currently includes the NFS type and the SMB type
     */
    protocolType: string;
    /**
     * @Property storageType: The file system type. Currently includes the Performance type and the Capacity type
     */
    storageType: string;
    /**
     * @Property bandwidth: Maximum file system throughput, unit is MB/s. Required and valid only when FileSystemType=cpfs.
     */
    bandwidth: number | undefined;
    /**
     * @Property capacity: File system capacity, the unit is GB. Required and valid when FileSystemType=extreme or cpfs.
     */
    capacity: number | undefined;
    /**
     * @Property chargeType: Type of payment:
     * PayAsYouGo (pay as you go)
     * Subscription
     */
    chargeType: string | undefined;
    /**
     * @Property deletionForce: Whether delete all mount targets on the file system and then delete file system. Default is false
     */
    deletionForce: boolean | ros.IResolvable | undefined;
    /**
     * @Property description: File system description (space characters are not allowed)
     */
    description: string | undefined;
    /**
     * @Property duration: The period of subscription in months. Required and valid when ChargeType is Subscription.
     * When the annual and monthly subscription instance expires without renewal, the instance will automatically expire and be released.
     */
    duration: number | undefined;
    /**
     * @Property encryptType: Specifies whether to encrypt data. You can use keys that are hosted by Key Management Service (KMS) to encrypt data stored on a file system. Data is automatically decrypted when you access encrypted data. Valid values:
     * 0: specifies that no encryption is applied to data on the file system.
     * 1: specifies that encryption is applied to data on the file system.
     */
    encryptType: number | undefined;
    /**
     * @Property fileSystemType: File system type. Allowed values: standard, extreme, cpfs
     */
    fileSystemType: string | undefined;
    /**
     * @Property snapshotId: Snapshot ID.
     */
    snapshotId: string | undefined;
    /**
     * @Property vpcId: Vpc ID.
     */
    vpcId: string | undefined;
    /**
     * @Property vSwitchId: VSwitch ID.
     */
    vSwitchId: string | undefined;
    /**
     * @Property zoneId: Zone ID.
     */
    zoneId: string | undefined;
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
/**
 * Properties for defining a `ALIYUN::NAS::MountTarget`
 */
export interface RosMountTargetProps {
    /**
     * @Property accessGroupName: Permission group name. Default to DEFAULT_VPC_GROUP_NAME.
     */
    readonly accessGroupName: string;
    /**
     * @Property fileSystemId: File system ID
     */
    readonly fileSystemId: string;
    /**
     * @Property networkType: Network type, including Vpc and Classic networks.
     */
    readonly networkType: string;
    /**
     * @Property status: Status, including Active and Inactive
     */
    readonly status?: string;
    /**
     * @Property vpcId: VPC network ID
     */
    readonly vpcId?: string;
    /**
     * @Property vSwitchId: VSwitch ID.
     */
    readonly vSwitchId?: string;
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
    readonly attrMountTargetDomain: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property accessGroupName: Permission group name. Default to DEFAULT_VPC_GROUP_NAME.
     */
    accessGroupName: string;
    /**
     * @Property fileSystemId: File system ID
     */
    fileSystemId: string;
    /**
     * @Property networkType: Network type, including Vpc and Classic networks.
     */
    networkType: string;
    /**
     * @Property status: Status, including Active and Inactive
     */
    status: string | undefined;
    /**
     * @Property vpcId: VPC network ID
     */
    vpcId: string | undefined;
    /**
     * @Property vSwitchId: VSwitch ID.
     */
    vSwitchId: string | undefined;
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
