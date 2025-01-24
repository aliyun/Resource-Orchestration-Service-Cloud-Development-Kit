package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkecs/datasource/internal"
)

// Represents a `Snapshot`.
type ISnapshot interface {
	alicloudroscdkcore.IResource
	// Attribute CreateTime: The create time.
	AttrCreateTime() interface{}
	// Attribute Description: The description.
	AttrDescription() interface{}
	// Attribute DiskId: The source disk id.
	AttrDiskId() interface{}
	// Attribute Encrypted: Whether the snapshot is encrypted.
	AttrEncrypted() interface{}
	// Attribute InstantAccess: Whether snapshot speed availability is enabled.
	AttrInstantAccess() interface{}
	// Attribute InstantAccessRetentionDays: InstantAccessRetentionDays.
	AttrInstantAccessRetentionDays() interface{}
	// Attribute ProductCode: The product number inherited from the mirror market.
	AttrProductCode() interface{}
	// Attribute Progress: Snapshot creation progress, in percentage.
	AttrProgress() interface{}
	// Attribute RemainTime: Remaining completion time for the snapshot being created.
	AttrRemainTime() interface{}
	// Attribute ResourceGroupId: The resource group id.
	AttrResourceGroupId() interface{}
	// Attribute RetentionDays: Automatic snapshot retention days.
	AttrRetentionDays() interface{}
	// Attribute SnapshotId: The snapshot id.
	AttrSnapshotId() interface{}
	// Attribute SnapshotName: Snapshot Display Name.
	AttrSnapshotName() interface{}
	// Attribute SnapshotSN: Snapshot serial number.
	AttrSnapshotSn() interface{}
	// Attribute SnapshotType: Snapshot creation type.
	AttrSnapshotType() interface{}
	// Attribute SourceDiskSize: Source disk capacity.
	AttrSourceDiskSize() interface{}
	// Attribute SourceDiskType: Source disk attributes.
	AttrSourceDiskType() interface{}
	// Attribute SourceStorageType: Original disk type.
	AttrSourceStorageType() interface{}
	// Attribute Tags: The tags.
	AttrTags() interface{}
	// Attribute Usage: A resource type that has a reference relationship.
	AttrUsage() interface{}
	Props() *SnapshotProps
}

// The jsii proxy for ISnapshot
type jsiiProxy_ISnapshot struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ISnapshot) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISnapshot) AttrDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISnapshot) AttrDiskId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDiskId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISnapshot) AttrEncrypted() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEncrypted",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISnapshot) AttrInstantAccess() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstantAccess",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISnapshot) AttrInstantAccessRetentionDays() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstantAccessRetentionDays",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISnapshot) AttrProductCode() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrProductCode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISnapshot) AttrProgress() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrProgress",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISnapshot) AttrRemainTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRemainTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISnapshot) AttrResourceGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISnapshot) AttrRetentionDays() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRetentionDays",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISnapshot) AttrSnapshotId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSnapshotId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISnapshot) AttrSnapshotName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSnapshotName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISnapshot) AttrSnapshotSn() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSnapshotSn",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISnapshot) AttrSnapshotType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSnapshotType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISnapshot) AttrSourceDiskSize() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSourceDiskSize",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISnapshot) AttrSourceDiskType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSourceDiskType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISnapshot) AttrSourceStorageType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSourceStorageType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISnapshot) AttrTags() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTags",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISnapshot) AttrUsage() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrUsage",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISnapshot) Props() *SnapshotProps {
	var returns *SnapshotProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

