import * as ros from '@alicloud/ros-cdk-core';
import { RosFileSystem } from './nas.generated';
export { RosFileSystem as FileSystemProperty };
/**
 * Properties for defining a `ALIYUN::NAS::FileSystem`
 */
export interface FileSystemProps {
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
 * A ROS resource type:  `ALIYUN::NAS::FileSystem`
 */
export declare class FileSystem extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * @Attribute FileSystemId: ID of the file system created
     */
    readonly attrFileSystemId: any;
    /**
     * Create a new `ALIYUN::NAS::FileSystem`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: FileSystemProps, enableResourcePropertyConstraint?: boolean);
}
