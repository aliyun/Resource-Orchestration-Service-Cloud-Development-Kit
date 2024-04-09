import * as ros from '@alicloud/ros-cdk-core';
import { RosDisk } from './ecs.generated';
export { RosDisk as DiskProperty };
/**
 * Properties for defining a `Disk`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-disk
 */
export interface DiskProps {
    /**
     * Property diskId: The disk id.
     */
    readonly diskId: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ECS::Disk`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDisk`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-disk
 */
export declare class Disk extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: DiskProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute AttachedTime: The attached time.
     */
    readonly attrAttachedTime: ros.IResolvable;
    /**
     * Attribute AutoSnapshotPolicyId: Automatic snapshot policy ID.
     */
    readonly attrAutoSnapshotPolicyId: ros.IResolvable;
    /**
     * Attribute BurstingEnabled: Does the data disk turn on Burst (performance Burst).
     */
    readonly attrBurstingEnabled: ros.IResolvable;
    /**
     * Attribute Category: Disk type.
     */
    readonly attrCategory: ros.IResolvable;
    /**
     * Attribute CreateTime: The creation time.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * Attribute DeleteAutoSnapshot: Whether to delete automatic snapshots at the same time.
     */
    readonly attrDeleteAutoSnapshot: ros.IResolvable;
    /**
     * Attribute DeleteWithInstance: Whether to release with the instance.
     */
    readonly attrDeleteWithInstance: ros.IResolvable;
    /**
     * Attribute Description: The description.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * Attribute DetachedTime: Unloading time.
     */
    readonly attrDetachedTime: ros.IResolvable;
    /**
     * Attribute Device: Cloud disk or the device name of the mounted instance on the site.
     */
    readonly attrDevice: ros.IResolvable;
    /**
     * Attribute DiskId: The disk id.
     */
    readonly attrDiskId: ros.IResolvable;
    /**
     * Attribute DiskName: The disk name.
     */
    readonly attrDiskName: ros.IResolvable;
    /**
     * Attribute EnableAutoSnapshot: Whether the disk implements an automatic snapshot policy.
     */
    readonly attrEnableAutoSnapshot: ros.IResolvable;
    /**
     * Attribute EnableAutomatedSnapshotPolicy: Whether the disk implements an automatic snapshot policy.
     */
    readonly attrEnableAutomatedSnapshotPolicy: ros.IResolvable;
    /**
     * Attribute Encrypted: Whether the disk is encrypted.
     */
    readonly attrEncrypted: ros.IResolvable;
    /**
     * Attribute ExpiredTime: The expiration time of a monthly disk.
     */
    readonly attrExpiredTime: ros.IResolvable;
    /**
     * Attribute ImageId: The image id.
     */
    readonly attrImageId: ros.IResolvable;
    /**
     * Attribute InstanceId: The instance id.
     */
    readonly attrInstanceId: ros.IResolvable;
    /**
     * Attribute Iops: Number of read/write (I/O) operations per second.
     */
    readonly attrIops: ros.IResolvable;
    /**
     * Attribute IopsRead: Number of reads per second.
     */
    readonly attrIopsRead: ros.IResolvable;
    /**
     * Attribute IopsWrite: Number of writes per second.
     */
    readonly attrIopsWrite: ros.IResolvable;
    /**
     * Attribute KmsKeyId: The KMS keyId.
     */
    readonly attrKmsKeyId: ros.IResolvable;
    /**
     * Attribute MountInstanceNum: Number of instances mounted on shared storage.
     */
    readonly attrMountInstanceNum: ros.IResolvable;
    /**
     * Attribute MountInstances: Disk mount instances.
     */
    readonly attrMountInstances: ros.IResolvable;
    /**
     * Attribute MultiAttach: Whether to enable the multi-Mount feature.
     */
    readonly attrMultiAttach: ros.IResolvable;
    /**
     * Attribute OperationLocks: Resource locking information.
     */
    readonly attrOperationLocks: ros.IResolvable;
    /**
     * Attribute PaymentType: Payment method for disk.
     */
    readonly attrPaymentType: ros.IResolvable;
    /**
     * Attribute PerformanceLevel: Performance levels of ESSD cloud disk.
     */
    readonly attrPerformanceLevel: ros.IResolvable;
    /**
     * Attribute Portable: Whether the disk is unmountable.
     */
    readonly attrPortable: ros.IResolvable;
    /**
     * Attribute ProductCode: The product logo of the cloud market.
     */
    readonly attrProductCode: ros.IResolvable;
    /**
     * Attribute ProvisionedIops: The preconfigured read and write IOPS of the ESSD AutoPL cloud disk. Possible values: 0 ~ min{50,000, 1000 * capacity-baseline performance}.
     */
    readonly attrProvisionedIops: ros.IResolvable;
    /**
     * Attribute ResourceGroupId: The resource group id.
     */
    readonly attrResourceGroupId: ros.IResolvable;
    /**
     * Attribute Size: Disk size.
     */
    readonly attrSize: ros.IResolvable;
    /**
     * Attribute SnapshotId: The source snapshot id.
     */
    readonly attrSnapshotId: ros.IResolvable;
    /**
     * Attribute StorageClusterId: The ID of the dedicated block storage cluster. If you need to create a cloud disk in the specified dedicated block storage cluster, specify this parameter.
     */
    readonly attrStorageClusterId: ros.IResolvable;
    /**
     * Attribute StorageSetId: The ID of the Save set.
     */
    readonly attrStorageSetId: ros.IResolvable;
    /**
     * Attribute StorageSetPartitionNumber: Number of Save set partitions. Value range: greater than or equal to 2. The maximum value cannot exceed the equity quota limit displayed after calling.
     */
    readonly attrStorageSetPartitionNumber: ros.IResolvable;
    /**
     * Attribute Tags: The tags.
     */
    readonly attrTags: ros.IResolvable;
    /**
     * Attribute ZoneId: ID of the free zone to which the disk belongs.
     */
    readonly attrZoneId: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DiskProps, enableResourcePropertyConstraint?: boolean);
}
