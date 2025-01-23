package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkecs/datasource/internal"
)

// Represents a `AutoSnapshotPolicy`.
type IAutoSnapshotPolicy interface {
	alicloudroscdkcore.IResource
	// Attribute AutoSnapshotPolicyName: Name of the automatic snapshot policy.
	AttrAutoSnapshotPolicyName() interface{}
	// Attribute CreateTime: The time when the automatic snapshot policy was created.
	//
	// The time follows the ISO 8601 standard in the yyyy-MM-ddThh:mm:ssZ format. The time is displayed in UTC.
	AttrCreateTime() interface{}
	// Attribute DiskNums: Number of cloud disks with this policy enabled.
	AttrDiskNums() interface{}
	// Attribute RepeatWeekdays: The days of the week on which to create automatic snapshots.
	//
	// Valid values: 1 to 7, which correspond to the days of the week. 1 indicates Monday. One or more days can be specified.
	AttrRepeatWeekdays() interface{}
	// Attribute ResourceGroupId: The ID of the resource group.
	AttrResourceGroupId() interface{}
	// Attribute RetentionDays: The retention period of the automatic snapshot.
	//
	// Unit: days. Valid values:
	// - -1: The automatic snapshot is retained until it is deleted.
	// - 1 to 65536: The automatic snapshot is retained for the specified number of days.
	AttrRetentionDays() interface{}
	// Attribute Tags: The tags of the automatic snapshot policy.
	AttrTags() interface{}
	// Attribute TimePoints: The time when the automatic snapshot policy was created.
	//
	// The time follows the ISO 8601 standard in the yyyy-MM-ddThh:mm:ssZ format. The time is displayed in UTC.
	AttrTimePoints() interface{}
	// Attribute VolumeNums: The number of extended volumes to which the automatic snapshot policy is applied.
	AttrVolumeNums() interface{}
	Props() *AutoSnapshotPolicyProps
}

// The jsii proxy for IAutoSnapshotPolicy
type jsiiProxy_IAutoSnapshotPolicy struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IAutoSnapshotPolicy) AttrAutoSnapshotPolicyName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAutoSnapshotPolicyName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAutoSnapshotPolicy) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAutoSnapshotPolicy) AttrDiskNums() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDiskNums",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAutoSnapshotPolicy) AttrRepeatWeekdays() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRepeatWeekdays",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAutoSnapshotPolicy) AttrResourceGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAutoSnapshotPolicy) AttrRetentionDays() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRetentionDays",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAutoSnapshotPolicy) AttrTags() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTags",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAutoSnapshotPolicy) AttrTimePoints() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTimePoints",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAutoSnapshotPolicy) AttrVolumeNums() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVolumeNums",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAutoSnapshotPolicy) Props() *AutoSnapshotPolicyProps {
	var returns *AutoSnapshotPolicyProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

