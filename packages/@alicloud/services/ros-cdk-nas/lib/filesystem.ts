import * as ros from '@alicloud/ros-cdk-core';
import { RosFileSystem } from './nas.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosFileSystem as FileSystemProperty };

/**
 * Properties for defining a `ALIYUN::NAS::FileSystem`
 */
export interface FileSystemProps {

    /**
     * Property protocolType: Type of protocol used. Valid values: NFS, SMB, cpfs.
     */
    readonly protocolType: string | ros.IResolvable;

    /**
     * Property storageType: The storage type of the file System.
     * Valid values:
     * Performance、Capacity(Available when the file_system_type is standard)
     * standard、advance(Available when the file_system_type is extreme)
     * advance_100、advance_200(Available when the file_system_type is cpfs)
     *
     */
    readonly storageType: string | ros.IResolvable;

    /**
     * Property bandwidth: Maximum file system throughput, unit is MB/s. Required and valid only when FileSystemType=cpfs.
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
 * A ROS resource type:  `ALIYUN::NAS::FileSystem`
 */
export class FileSystem extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute FileSystemId: ID of the file system created
     */
    public readonly attrFileSystemId: ros.IResolvable;

    /**
     * Create a new `ALIYUN::NAS::FileSystem`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: FileSystemProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosFileSystem = new RosFileSystem(this, id,  {
            description: props.description,
            storageType: props.storageType,
            zoneId: props.zoneId,
            vSwitchId: props.vSwitchId,
            duration: props.duration,
            snapshotId: props.snapshotId,
            deletionForce: props.deletionForce === undefined || props.deletionForce === null ? false : props.deletionForce,
            encryptType: props.encryptType,
            vpcId: props.vpcId,
            capacity: props.capacity,
            protocolType: props.protocolType,
            chargeType: props.chargeType,
            fileSystemType: props.fileSystemType === undefined || props.fileSystemType === null ? 'standard' : props.fileSystemType,
            bandwidth: props.bandwidth,
            tags: props.tags,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosFileSystem;
        this.attrFileSystemId = rosFileSystem.attrFileSystemId;
    }
}
