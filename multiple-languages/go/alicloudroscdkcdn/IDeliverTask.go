package alicloudroscdkcdn

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcdn/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `DeliverTask`.
type IDeliverTask interface {
	alicloudroscdkcore.IResource
	// Attribute DeliverId: The deliver ID of the CDN deliver task.
	AttrDeliverId() interface{}
	Props() *DeliverTaskProps
}

// The jsii proxy for IDeliverTask
type jsiiProxy_IDeliverTask struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IDeliverTask) AttrDeliverId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDeliverId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDeliverTask) Props() *DeliverTaskProps {
	var returns *DeliverTaskProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

