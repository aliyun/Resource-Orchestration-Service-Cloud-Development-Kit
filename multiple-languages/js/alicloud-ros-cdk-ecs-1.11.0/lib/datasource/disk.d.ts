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
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * Represents a `Disk`.
 */
export interface IDisk extends ros.IResource {
    readonly props: DiskProps;
    /**
     * Attribute AttachedTime: The attached time.
     */
    readonly attrAttachedTime: ros.IResolvable | string;
    /**
     * Attribute AutoSnapshotPolicyId: Automatic snapshot policy ID.
     */
    readonly attrAutoSnapshotPolicyId: ros.IResolvable | string;
    /**
     * Attribute BurstingEnabled: Does the data disk turn on Burst (performance Burst).
     */
    readonly attrBurstingEnabled: ros.IResolvable | string;
    /**
     * Attribute Category: Disk type.
     */
    readonly attrCategory: ros.IResolvable | string;
    /**
     * Attribute CreateTime: The creation time.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute DeleteAutoSnapshot: Whether to delete automatic snapshots at the same time.
     */
    readonly attrDeleteAutoSnapshot: ros.IResolvable | string;
    /**
     * Attribute DeleteWithInstance: Whether to release with the instance.
     */
    readonly attrDeleteWithInstance: ros.IResolvable | string;
    /**
     * Attribute Description: The description.
     */
    readonly attrDescription: ros.IResolvable | string;
    /**
     * Attribute DetachedTime: Unloading time.
     */
    readonly attrDetachedTime: ros.IResolvable | string;
    /**
     * Attribute Device: Cloud disk or the device name of the mounted instance on the site.
     */
    readonly attrDevice: ros.IResolvable | string;
    /**
     * Attribute DiskId: The disk id.
     */
    readonly attrDiskId: ros.IResolvable | string;
    /**
     * Attribute DiskName: The disk name.
     */
    readonly attrDiskName: ros.IResolvable | string;
    /**
     * Attribute EnableAutoSnapshot: Whether the disk implements an automatic snapshot policy.
     */
    readonly attrEnableAutoSnapshot: ros.IResolvable | string;
    /**
     * Attribute EnableAutomatedSnapshotPolicy: Whether the disk implements an automatic snapshot policy.
     */
    readonly attrEnableAutomatedSnapshotPolicy: ros.IResolvable | string;
    /**
     * Attribute Encrypted: Whether the disk is encrypted.
     */
    readonly attrEncrypted: ros.IResolvable | string;
    /**
     * Attribute ExpiredTime: The expiration time of a monthly disk.
     */
    readonly attrExpiredTime: ros.IResolvable | string;
    /**
     * Attribute ImageId: The image id.
     */
    readonly attrImageId: ros.IResolvable | string;
    /**
     * Attribute InstanceId: The instance id.
     */
    readonly attrInstanceId: ros.IResolvable | string;
    /**
     * Attribute Iops: Number of read/write (I/O) operations per second.
     */
    readonly attrIops: ros.IResolvable | string;
    /**
     * Attribute IopsRead: Number of reads per second.
     */
    readonly attrIopsRead: ros.IResolvable | string;
    /**
     * Attribute IopsWrite: Number of writes per second.
     */
    readonly attrIopsWrite: ros.IResolvable | string;
    /**
     * Attribute KmsKeyId: The KMS keyId.
     */
    readonly attrKmsKeyId: ros.IResolvable | string;
    /**
     * Attribute MountInstanceNum: Number of instances mounted on shared storage.
     */
    readonly attrMountInstanceNum: ros.IResolvable | string;
    /**
     * Attribute MountInstances: Disk mount instances.
     */
    readonly attrMountInstances: ros.IResolvable | string;
    /**
     * Attribute MultiAttach: Whether to enable the multi-Mount feature.
     */
    readonly attrMultiAttach: ros.IResolvable | string;
    /**
     * Attribute OperationLocks: Resource locking information.
     */
    readonly attrOperationLocks: ros.IResolvable | string;
    /**
     * Attribute PaymentType: Payment method for disk.
     */
    readonly attrPaymentType: ros.IResolvable | string;
    /**
     * Attribute PerformanceLevel: Performance levels of ESSD cloud disk.
     */
    readonly attrPerformanceLevel: ros.IResolvable | string;
    /**
     * Attribute Portable: Whether the disk is unmountable.
     */
    readonly attrPortable: ros.IResolvable | string;
    /**
     * Attribute ProductCode: The product logo of the cloud market.
     */
    readonly attrProductCode: ros.IResolvable | string;
    /**
     * Attribute ProvisionedIops: The preconfigured read and write IOPS of the ESSD AutoPL cloud disk. Possible values: 0 ~ min{50,000, 1000 * capacity-baseline performance}.
     */
    readonly attrProvisionedIops: ros.IResolvable | string;
    /**
     * Attribute ResourceGroupId: The resource group id.
     */
    readonly attrResourceGroupId: ros.IResolvable | string;
    /**
     * Attribute Size: Disk size.
     */
    readonly attrSize: ros.IResolvable | string;
    /**
     * Attribute SnapshotId: The source snapshot id.
     */
    readonly attrSnapshotId: ros.IResolvable | string;
    /**
     * Attribute StorageClusterId: The ID of the dedicated block storage cluster. If you need to create a cloud disk in the specified dedicated block storage cluster, specify this parameter.
     */
    readonly attrStorageClusterId: ros.IResolvable | string;
    /**
     * Attribute StorageSetId: The ID of the Save set.
     */
    readonly attrStorageSetId: ros.IResolvable | string;
    /**
     * Attribute StorageSetPartitionNumber: Number of Save set partitions. Value range: greater than or equal to 2. The maximum value cannot exceed the equity quota limit displayed after calling.
     */
    readonly attrStorageSetPartitionNumber: ros.IResolvable | string;
    /**
     * Attribute Tags: The tags.
     */
    readonly attrTags: ros.IResolvable | string;
    /**
     * Attribute ZoneId: ID of the free zone to which the disk belongs.
     */
    readonly attrZoneId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ECS::Disk`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDisk`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-disk
 */
export declare class Disk extends ros.Resource implements IDisk {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: DiskProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute AttachedTime: The attached time.
     */
    readonly attrAttachedTime: ros.IResolvable | string;
    /**
     * Attribute AutoSnapshotPolicyId: Automatic snapshot policy ID.
     */
    readonly attrAutoSnapshotPolicyId: ros.IResolvable | string;
    /**
     * Attribute BurstingEnabled: Does the data disk turn on Burst (performance Burst).
     */
    readonly attrBurstingEnabled: ros.IResolvable | string;
    /**
     * Attribute Category: Disk type.
     */
    readonly attrCategory: ros.IResolvable | string;
    /**
     * Attribute CreateTime: The creation time.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute DeleteAutoSnapshot: Whether to delete automatic snapshots at the same time.
     */
    readonly attrDeleteAutoSnapshot: ros.IResolvable | string;
    /**
     * Attribute DeleteWithInstance: Whether to release with the instance.
     */
    readonly attrDeleteWithInstance: ros.IResolvable | string;
    /**
     * Attribute Description: The description.
     */
    readonly attrDescription: ros.IResolvable | string;
    /**
     * Attribute DetachedTime: Unloading time.
     */
    readonly attrDetachedTime: ros.IResolvable | string;
    /**
     * Attribute Device: Cloud disk or the device name of the mounted instance on the site.
     */
    readonly attrDevice: ros.IResolvable | string;
    /**
     * Attribute DiskId: The disk id.
     */
    readonly attrDiskId: ros.IResolvable | string;
    /**
     * Attribute DiskName: The disk name.
     */
    readonly attrDiskName: ros.IResolvable | string;
    /**
     * Attribute EnableAutoSnapshot: Whether the disk implements an automatic snapshot policy.
     */
    readonly attrEnableAutoSnapshot: ros.IResolvable | string;
    /**
     * Attribute EnableAutomatedSnapshotPolicy: Whether the disk implements an automatic snapshot policy.
     */
    readonly attrEnableAutomatedSnapshotPolicy: ros.IResolvable | string;
    /**
     * Attribute Encrypted: Whether the disk is encrypted.
     */
    readonly attrEncrypted: ros.IResolvable | string;
    /**
     * Attribute ExpiredTime: The expiration time of a monthly disk.
     */
    readonly attrExpiredTime: ros.IResolvable | string;
    /**
     * Attribute ImageId: The image id.
     */
    readonly attrImageId: ros.IResolvable | string;
    /**
     * Attribute InstanceId: The instance id.
     */
    readonly attrInstanceId: ros.IResolvable | string;
    /**
     * Attribute Iops: Number of read/write (I/O) operations per second.
     */
    readonly attrIops: ros.IResolvable | string;
    /**
     * Attribute IopsRead: Number of reads per second.
     */
    readonly attrIopsRead: ros.IResolvable | string;
    /**
     * Attribute IopsWrite: Number of writes per second.
     */
    readonly attrIopsWrite: ros.IResolvable | string;
    /**
     * Attribute KmsKeyId: The KMS keyId.
     */
    readonly attrKmsKeyId: ros.IResolvable | string;
    /**
     * Attribute MountInstanceNum: Number of instances mounted on shared storage.
     */
    readonly attrMountInstanceNum: ros.IResolvable | string;
    /**
     * Attribute MountInstances: Disk mount instances.
     */
    readonly attrMountInstances: ros.IResolvable | string;
    /**
     * Attribute MultiAttach: Whether to enable the multi-Mount feature.
     */
    readonly attrMultiAttach: ros.IResolvable | string;
    /**
     * Attribute OperationLocks: Resource locking information.
     */
    readonly attrOperationLocks: ros.IResolvable | string;
    /**
     * Attribute PaymentType: Payment method for disk.
     */
    readonly attrPaymentType: ros.IResolvable | string;
    /**
     * Attribute PerformanceLevel: Performance levels of ESSD cloud disk.
     */
    readonly attrPerformanceLevel: ros.IResolvable | string;
    /**
     * Attribute Portable: Whether the disk is unmountable.
     */
    readonly attrPortable: ros.IResolvable | string;
    /**
     * Attribute ProductCode: The product logo of the cloud market.
     */
    readonly attrProductCode: ros.IResolvable | string;
    /**
     * Attribute ProvisionedIops: The preconfigured read and write IOPS of the ESSD AutoPL cloud disk. Possible values: 0 ~ min{50,000, 1000 * capacity-baseline performance}.
     */
    readonly attrProvisionedIops: ros.IResolvable | string;
    /**
     * Attribute ResourceGroupId: The resource group id.
     */
    readonly attrResourceGroupId: ros.IResolvable | string;
    /**
     * Attribute Size: Disk size.
     */
    readonly attrSize: ros.IResolvable | string;
    /**
     * Attribute SnapshotId: The source snapshot id.
     */
    readonly attrSnapshotId: ros.IResolvable | string;
    /**
     * Attribute StorageClusterId: The ID of the dedicated block storage cluster. If you need to create a cloud disk in the specified dedicated block storage cluster, specify this parameter.
     */
    readonly attrStorageClusterId: ros.IResolvable | string;
    /**
     * Attribute StorageSetId: The ID of the Save set.
     */
    readonly attrStorageSetId: ros.IResolvable | string;
    /**
     * Attribute StorageSetPartitionNumber: Number of Save set partitions. Value range: greater than or equal to 2. The maximum value cannot exceed the equity quota limit displayed after calling.
     */
    readonly attrStorageSetPartitionNumber: ros.IResolvable | string;
    /**
     * Attribute Tags: The tags.
     */
    readonly attrTags: ros.IResolvable | string;
    /**
     * Attribute ZoneId: ID of the free zone to which the disk belongs.
     */
    readonly attrZoneId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DiskProps, enableResourcePropertyConstraint?: boolean);
}
