package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkecs/datasource/internal"
)

// Represents a `Disk`.
type IDisk interface {
	alicloudroscdkcore.IResource
	// Attribute AttachedTime: The attached time.
	AttrAttachedTime() interface{}
	// Attribute AutoSnapshotPolicyId: Automatic snapshot policy ID.
	AttrAutoSnapshotPolicyId() interface{}
	// Attribute BurstingEnabled: Does the data disk turn on Burst (performance Burst).
	AttrBurstingEnabled() interface{}
	// Attribute Category: Disk type.
	AttrCategory() interface{}
	// Attribute CreateTime: The creation time.
	AttrCreateTime() interface{}
	// Attribute DeleteAutoSnapshot: Whether to delete automatic snapshots at the same time.
	AttrDeleteAutoSnapshot() interface{}
	// Attribute DeleteWithInstance: Whether to release with the instance.
	AttrDeleteWithInstance() interface{}
	// Attribute Description: The description.
	AttrDescription() interface{}
	// Attribute DetachedTime: Unloading time.
	AttrDetachedTime() interface{}
	// Attribute Device: Cloud disk or the device name of the mounted instance on the site.
	AttrDevice() interface{}
	// Attribute DiskId: The disk id.
	AttrDiskId() interface{}
	// Attribute DiskName: The disk name.
	AttrDiskName() interface{}
	// Attribute EnableAutomatedSnapshotPolicy: Whether the disk implements an automatic snapshot policy.
	AttrEnableAutomatedSnapshotPolicy() interface{}
	// Attribute EnableAutoSnapshot: Whether the disk implements an automatic snapshot policy.
	AttrEnableAutoSnapshot() interface{}
	// Attribute Encrypted: Whether the disk is encrypted.
	AttrEncrypted() interface{}
	// Attribute ExpiredTime: The expiration time of a monthly disk.
	AttrExpiredTime() interface{}
	// Attribute ImageId: The image id.
	AttrImageId() interface{}
	// Attribute InstanceId: The instance id.
	AttrInstanceId() interface{}
	// Attribute Iops: Number of read/write (I/O) operations per second.
	AttrIops() interface{}
	// Attribute IopsRead: Number of reads per second.
	AttrIopsRead() interface{}
	// Attribute IopsWrite: Number of writes per second.
	AttrIopsWrite() interface{}
	// Attribute KmsKeyId: The KMS keyId.
	AttrKmsKeyId() interface{}
	// Attribute MountInstanceNum: Number of instances mounted on shared storage.
	AttrMountInstanceNum() interface{}
	// Attribute MountInstances: Disk mount instances.
	AttrMountInstances() interface{}
	// Attribute MultiAttach: Whether to enable the multi-Mount feature.
	AttrMultiAttach() interface{}
	// Attribute OperationLocks: Resource locking information.
	AttrOperationLocks() interface{}
	// Attribute PaymentType: Payment method for disk.
	AttrPaymentType() interface{}
	// Attribute PerformanceLevel: Performance levels of ESSD cloud disk.
	AttrPerformanceLevel() interface{}
	// Attribute Portable: Whether the disk is unmountable.
	AttrPortable() interface{}
	// Attribute ProductCode: The product logo of the cloud market.
	AttrProductCode() interface{}
	// Attribute ProvisionedIops: The preconfigured read and write IOPS of the ESSD AutoPL cloud disk.
	//
	// Possible values: 0 ~ min{50,000, 1000 * capacity-baseline performance}.
	AttrProvisionedIops() interface{}
	// Attribute ResourceGroupId: The resource group id.
	AttrResourceGroupId() interface{}
	// Attribute Size: Disk size.
	AttrSize() interface{}
	// Attribute SnapshotId: The source snapshot id.
	AttrSnapshotId() interface{}
	// Attribute StorageClusterId: The ID of the dedicated block storage cluster.
	//
	// If you need to create a cloud disk in the specified dedicated block storage cluster, specify this parameter.
	AttrStorageClusterId() interface{}
	// Attribute StorageSetId: The ID of the Save set.
	AttrStorageSetId() interface{}
	// Attribute StorageSetPartitionNumber: Number of Save set partitions.
	//
	// Value range: greater than or equal to 2. The maximum value cannot exceed the equity quota limit displayed after calling.
	AttrStorageSetPartitionNumber() interface{}
	// Attribute Tags: The tags.
	AttrTags() interface{}
	// Attribute ZoneId: ID of the free zone to which the disk belongs.
	AttrZoneId() interface{}
	Props() *DiskProps
}

// The jsii proxy for IDisk
type jsiiProxy_IDisk struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IDisk) AttrAttachedTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAttachedTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDisk) AttrAutoSnapshotPolicyId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAutoSnapshotPolicyId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDisk) AttrBurstingEnabled() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrBurstingEnabled",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDisk) AttrCategory() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCategory",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDisk) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDisk) AttrDeleteAutoSnapshot() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDeleteAutoSnapshot",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDisk) AttrDeleteWithInstance() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDeleteWithInstance",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDisk) AttrDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDisk) AttrDetachedTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDetachedTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDisk) AttrDevice() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDevice",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDisk) AttrDiskId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDiskId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDisk) AttrDiskName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDiskName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDisk) AttrEnableAutomatedSnapshotPolicy() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEnableAutomatedSnapshotPolicy",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDisk) AttrEnableAutoSnapshot() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEnableAutoSnapshot",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDisk) AttrEncrypted() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEncrypted",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDisk) AttrExpiredTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrExpiredTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDisk) AttrImageId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrImageId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDisk) AttrInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDisk) AttrIops() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIops",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDisk) AttrIopsRead() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIopsRead",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDisk) AttrIopsWrite() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIopsWrite",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDisk) AttrKmsKeyId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrKmsKeyId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDisk) AttrMountInstanceNum() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMountInstanceNum",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDisk) AttrMountInstances() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMountInstances",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDisk) AttrMultiAttach() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMultiAttach",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDisk) AttrOperationLocks() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrOperationLocks",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDisk) AttrPaymentType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPaymentType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDisk) AttrPerformanceLevel() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPerformanceLevel",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDisk) AttrPortable() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPortable",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDisk) AttrProductCode() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrProductCode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDisk) AttrProvisionedIops() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrProvisionedIops",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDisk) AttrResourceGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDisk) AttrSize() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSize",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDisk) AttrSnapshotId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSnapshotId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDisk) AttrStorageClusterId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrStorageClusterId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDisk) AttrStorageSetId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrStorageSetId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDisk) AttrStorageSetPartitionNumber() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrStorageSetPartitionNumber",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDisk) AttrTags() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTags",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDisk) AttrZoneId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrZoneId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDisk) Props() *DiskProps {
	var returns *DiskProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

