package alicloudroscdkconfig

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkconfig/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `Aggregator`.
type IAggregator interface {
	alicloudroscdkcore.IResource
	// Attribute AggregatorId: The ID of the aggregator.
	AttrAggregatorId() interface{}
	Props() *AggregatorProps
}

// The jsii proxy for IAggregator
type jsiiProxy_IAggregator struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IAggregator) AttrAggregatorId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAggregatorId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAggregator) Props() *AggregatorProps {
	var returns *AggregatorProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

