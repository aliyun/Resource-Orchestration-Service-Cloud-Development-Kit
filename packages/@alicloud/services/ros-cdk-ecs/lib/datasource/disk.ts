import * as ros from '@alicloud/ros-cdk-core';
import { RosDisk } from './ecs.generated';
// Generated from the AliCloud ROS Resource Specification
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
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ECS::Disk`, which is used to query the information about a cloud disk.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDisk`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-disk
 */
export class Disk extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: DiskProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute AttachedTime: The attached time.
     */
    public readonly attrAttachedTime: ros.IResolvable;

    /**
     * Attribute AutoSnapshotPolicyId: Automatic snapshot policy ID.
     */
    public readonly attrAutoSnapshotPolicyId: ros.IResolvable;

    /**
     * Attribute BurstingEnabled: Does the data disk turn on Burst (performance Burst).
     */
    public readonly attrBurstingEnabled: ros.IResolvable;

    /**
     * Attribute Category: Disk type.
     */
    public readonly attrCategory: ros.IResolvable;

    /**
     * Attribute CreateTime: The creation time.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * Attribute DeleteAutoSnapshot: Whether to delete automatic snapshots at the same time.
     */
    public readonly attrDeleteAutoSnapshot: ros.IResolvable;

    /**
     * Attribute DeleteWithInstance: Whether to release with the instance.
     */
    public readonly attrDeleteWithInstance: ros.IResolvable;

    /**
     * Attribute Description: The description.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * Attribute DetachedTime: Unloading time.
     */
    public readonly attrDetachedTime: ros.IResolvable;

    /**
     * Attribute Device: Cloud disk or the device name of the mounted instance on the site.
     */
    public readonly attrDevice: ros.IResolvable;

    /**
     * Attribute DiskId: The disk id.
     */
    public readonly attrDiskId: ros.IResolvable;

    /**
     * Attribute DiskName: The disk name.
     */
    public readonly attrDiskName: ros.IResolvable;

    /**
     * Attribute EnableAutoSnapshot: Whether the disk implements an automatic snapshot policy.
     */
    public readonly attrEnableAutoSnapshot: ros.IResolvable;

    /**
     * Attribute EnableAutomatedSnapshotPolicy: Whether the disk implements an automatic snapshot policy.
     */
    public readonly attrEnableAutomatedSnapshotPolicy: ros.IResolvable;

    /**
     * Attribute Encrypted: Whether the disk is encrypted.
     */
    public readonly attrEncrypted: ros.IResolvable;

    /**
     * Attribute ExpiredTime: The expiration time of a monthly disk.
     */
    public readonly attrExpiredTime: ros.IResolvable;

    /**
     * Attribute ImageId: The image id.
     */
    public readonly attrImageId: ros.IResolvable;

    /**
     * Attribute InstanceId: The instance id.
     */
    public readonly attrInstanceId: ros.IResolvable;

    /**
     * Attribute Iops: Number of read/write (I/O) operations per second.
     */
    public readonly attrIops: ros.IResolvable;

    /**
     * Attribute IopsRead: Number of reads per second.
     */
    public readonly attrIopsRead: ros.IResolvable;

    /**
     * Attribute IopsWrite: Number of writes per second.
     */
    public readonly attrIopsWrite: ros.IResolvable;

    /**
     * Attribute KmsKeyId: The KMS keyId.
     */
    public readonly attrKmsKeyId: ros.IResolvable;

    /**
     * Attribute MountInstanceNum: Number of instances mounted on shared storage.
     */
    public readonly attrMountInstanceNum: ros.IResolvable;

    /**
     * Attribute MountInstances: Disk mount instances.
     */
    public readonly attrMountInstances: ros.IResolvable;

    /**
     * Attribute MultiAttach: Whether to enable the multi-Mount feature.
     */
    public readonly attrMultiAttach: ros.IResolvable;

    /**
     * Attribute OperationLocks: Resource locking information.
     */
    public readonly attrOperationLocks: ros.IResolvable;

    /**
     * Attribute PaymentType: Payment method for disk.
     */
    public readonly attrPaymentType: ros.IResolvable;

    /**
     * Attribute PerformanceLevel: Performance levels of ESSD cloud disk.
     */
    public readonly attrPerformanceLevel: ros.IResolvable;

    /**
     * Attribute Portable: Whether the disk is unmountable.
     */
    public readonly attrPortable: ros.IResolvable;

    /**
     * Attribute ProductCode: The product logo of the cloud market.
     */
    public readonly attrProductCode: ros.IResolvable;

    /**
     * Attribute ProvisionedIops: The preconfigured read and write IOPS of the ESSD AutoPL cloud disk. Possible values: 0 ~ min{50,000, 1000 * capacity-baseline performance}.
     */
    public readonly attrProvisionedIops: ros.IResolvable;

    /**
     * Attribute ResourceGroupId: The resource group id.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * Attribute Size: Disk size.
     */
    public readonly attrSize: ros.IResolvable;

    /**
     * Attribute SnapshotId: The source snapshot id.
     */
    public readonly attrSnapshotId: ros.IResolvable;

    /**
     * Attribute StorageClusterId: The ID of the dedicated block storage cluster. If you need to create a cloud disk in the specified dedicated block storage cluster, specify this parameter.
     */
    public readonly attrStorageClusterId: ros.IResolvable;

    /**
     * Attribute StorageSetId: The ID of the Save set.
     */
    public readonly attrStorageSetId: ros.IResolvable;

    /**
     * Attribute StorageSetPartitionNumber: Number of Save set partitions. Value range: greater than or equal to 2. The maximum value cannot exceed the equity quota limit displayed after calling.
     */
    public readonly attrStorageSetPartitionNumber: ros.IResolvable;

    /**
     * Attribute Tags: The tags.
     */
    public readonly attrTags: ros.IResolvable;

    /**
     * Attribute ZoneId: ID of the free zone to which the disk belongs.
     */
    public readonly attrZoneId: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DiskProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosDisk = new RosDisk(this, id,  {
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
            diskId: props.diskId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDisk;
        this.attrAttachedTime = rosDisk.attrAttachedTime;
        this.attrAutoSnapshotPolicyId = rosDisk.attrAutoSnapshotPolicyId;
        this.attrBurstingEnabled = rosDisk.attrBurstingEnabled;
        this.attrCategory = rosDisk.attrCategory;
        this.attrCreateTime = rosDisk.attrCreateTime;
        this.attrDeleteAutoSnapshot = rosDisk.attrDeleteAutoSnapshot;
        this.attrDeleteWithInstance = rosDisk.attrDeleteWithInstance;
        this.attrDescription = rosDisk.attrDescription;
        this.attrDetachedTime = rosDisk.attrDetachedTime;
        this.attrDevice = rosDisk.attrDevice;
        this.attrDiskId = rosDisk.attrDiskId;
        this.attrDiskName = rosDisk.attrDiskName;
        this.attrEnableAutoSnapshot = rosDisk.attrEnableAutoSnapshot;
        this.attrEnableAutomatedSnapshotPolicy = rosDisk.attrEnableAutomatedSnapshotPolicy;
        this.attrEncrypted = rosDisk.attrEncrypted;
        this.attrExpiredTime = rosDisk.attrExpiredTime;
        this.attrImageId = rosDisk.attrImageId;
        this.attrInstanceId = rosDisk.attrInstanceId;
        this.attrIops = rosDisk.attrIops;
        this.attrIopsRead = rosDisk.attrIopsRead;
        this.attrIopsWrite = rosDisk.attrIopsWrite;
        this.attrKmsKeyId = rosDisk.attrKmsKeyId;
        this.attrMountInstanceNum = rosDisk.attrMountInstanceNum;
        this.attrMountInstances = rosDisk.attrMountInstances;
        this.attrMultiAttach = rosDisk.attrMultiAttach;
        this.attrOperationLocks = rosDisk.attrOperationLocks;
        this.attrPaymentType = rosDisk.attrPaymentType;
        this.attrPerformanceLevel = rosDisk.attrPerformanceLevel;
        this.attrPortable = rosDisk.attrPortable;
        this.attrProductCode = rosDisk.attrProductCode;
        this.attrProvisionedIops = rosDisk.attrProvisionedIops;
        this.attrResourceGroupId = rosDisk.attrResourceGroupId;
        this.attrSize = rosDisk.attrSize;
        this.attrSnapshotId = rosDisk.attrSnapshotId;
        this.attrStorageClusterId = rosDisk.attrStorageClusterId;
        this.attrStorageSetId = rosDisk.attrStorageSetId;
        this.attrStorageSetPartitionNumber = rosDisk.attrStorageSetPartitionNumber;
        this.attrTags = rosDisk.attrTags;
        this.attrZoneId = rosDisk.attrZoneId;
    }
}
