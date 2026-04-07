package alicloudroscdkactiontrail

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkactiontrail/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `HistoryDeliveryJob`.
type IHistoryDeliveryJob interface {
	alicloudroscdkcore.IResource
	// Attribute JobId: The ID of the delivery history job.
	AttrJobId() interface{}
	Props() *HistoryDeliveryJobProps
}

// The jsii proxy for IHistoryDeliveryJob
type jsiiProxy_IHistoryDeliveryJob struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IHistoryDeliveryJob) AttrJobId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrJobId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHistoryDeliveryJob) Props() *HistoryDeliveryJobProps {
	var returns *HistoryDeliveryJobProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

