package alicloudroscdkpolardb

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkpolardb/internal"
)

// Represents a `AITask`.
type IAITask interface {
	alicloudroscdkcore.IResource
	// Attribute DBClusterId: The ID of the DB cluster.
	AttrDbClusterId() interface{}
	Props() *AITaskProps
}

// The jsii proxy for IAITask
type jsiiProxy_IAITask struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IAITask) AttrDbClusterId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbClusterId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAITask) Props() *AITaskProps {
	var returns *AITaskProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

