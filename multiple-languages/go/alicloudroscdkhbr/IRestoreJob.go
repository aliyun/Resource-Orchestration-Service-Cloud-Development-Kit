package alicloudroscdkhbr

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkhbr/internal"
)

// Represents a `RestoreJob`.
type IRestoreJob interface {
	alicloudroscdkcore.IResource
	// Attribute ErrorMessage: Error message of restore job.
	AttrErrorMessage() interface{}
	// Attribute RestoreId: Restore job ID.
	AttrRestoreId() interface{}
	// Attribute RestoreType: Restore type.
	AttrRestoreType() interface{}
	// Attribute SourceType: Source type.
	AttrSourceType() interface{}
	// Attribute Status: Restore job status.
	AttrStatus() interface{}
	Props() *RestoreJobProps
}

// The jsii proxy for IRestoreJob
type jsiiProxy_IRestoreJob struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IRestoreJob) AttrErrorMessage() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrErrorMessage",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRestoreJob) AttrRestoreId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRestoreId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRestoreJob) AttrRestoreType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRestoreType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRestoreJob) AttrSourceType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSourceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRestoreJob) AttrStatus() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrStatus",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRestoreJob) Props() *RestoreJobProps {
	var returns *RestoreJobProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

