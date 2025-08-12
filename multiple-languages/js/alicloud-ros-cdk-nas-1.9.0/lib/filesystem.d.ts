import * as ros from '@alicloud/ros-cdk-core';
import { RosFileSystem } from './nas.generated';
export { RosFileSystem as FileSystemProperty };
/**
 * Properties for defining a `FileSystem`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nas-filesystem
 */
export interface FileSystemProps {
    /**
     * Property protocolType: Type of protocol used. Valid values: NFS, SMB, cpfs.
     */
    readonly protocolType: string | ros.IResolvable;
    /**
     * Property storageType: The storage type of the file System.
     * Valid values:
     * Performance、Capacity、Premium(Available when the file_system_type is standard)
     * standard、advance(Available when the file_system_type is extreme)
     * advance_100、advance_200(Available when the file_system_type is cpfs)
     *
     */
    readonly storageType: string | ros.IResolvable;
    /**
     * Property bandwidth: Maximum file system throughput, unit is MB\/s. Required and valid only when FileSystemType=cpfs.
     */
    readonly bandwidth?: number | ros.IResolvable;
    /**
     * Property capacity: File system capacity, the unit is GB. Required and valid when FileSystemType=extreme or cpfs.
     */
    readonly capacity?: number | ros.IResolvable;
    /**
     * Property chargeType: Type of payment:
     * PayAsYouGo (pay as you go)
     * Subscription
     */
    readonly chargeType?: string | ros.IResolvable;
    /**
     * Property deletionForce: Whether delete all mount targets on the file system and then delete file system. Default is false
     */
    readonly deletionForce?: boolean | ros.IResolvable;
    /**
     * Property description: File system description (space characters are not allowed)
     */
    readonly description?: string | ros.IResolvable;
    /**
     * Property duration: The period of subscription in months. Required and valid when ChargeType is Subscription.
     * When the annual and monthly subscription instance expires without renewal, the instance will automatically expire and be released.
     */
    readonly duration?: number | ros.IResolvable;
    /**
     * Property encryptType: Specifies whether to encrypt data. You can use keys that are hosted by Key Management Service (KMS) to encrypt data stored on a file system. Data is automatically decrypted when you access encrypted data. Valid values:
     * 0: specifies that no encryption is applied to data on the file system.
     * 1: specifies that encryption is applied to data on the file system.
     */
    readonly encryptType?: number | ros.IResolvable;
    /**
     * Property fileSystemType: File system type. Allowed values: standard(default), extreme, cpfs
     */
    readonly fileSystemType?: string | ros.IResolvable;
    /**
     * Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * Property snapshotId: Snapshot ID.
     */
    readonly snapshotId?: string | ros.IResolvable;
    /**
     * Property tags: Tags to attach to filesystem. Max support 20 tags to add during create filesystem. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosFileSystem.TagsProperty[];
    /**
     * Property vpcId: Vpc ID.
     */
    readonly vpcId?: string | ros.IResolvable;
    /**
     * Property vSwitchId: VSwitch ID.
     */
    readonly vSwitchId?: string | ros.IResolvable;
    /**
     * Property zoneId: Zone ID.
     */
    readonly zoneId?: string | ros.IResolvable;
}
/**
 * Represents a `FileSystem`.
 */
export interface IFileSystem extends ros.IResource {
    readonly props: FileSystemProps;
    /**
     * Attribute FileSystemId: ID of the file system created
     */
    readonly attrFileSystemId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::NAS::FileSystem`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosFileSystem`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nas-filesystem
 */
export declare class FileSystem extends ros.Resource implements IFileSystem {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: FileSystemProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute FileSystemId: ID of the file system created
     */
    readonly attrFileSystemId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: FileSystemProps, enableResourcePropertyConstraint?: boolean);
}
