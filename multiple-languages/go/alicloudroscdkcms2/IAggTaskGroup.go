package alicloudroscdkcms2

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcms2/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `AggTaskGroup`.
type IAggTaskGroup interface {
	alicloudroscdkcore.IResource
	// Attribute AggTaskGroupConfigHash: The config hash of the agg task group.
	AttrAggTaskGroupConfigHash() interface{}
	// Attribute AggTaskGroupId: The ID of the agg task group.
	AttrAggTaskGroupId() interface{}
	// Attribute AggTaskGroupName: The name of the agg task group.
	AttrAggTaskGroupName() interface{}
	// Attribute SourcePrometheusId: The ID of the source Prometheus instance of the agg task group.
	AttrSourcePrometheusId() interface{}
	// Attribute Status: The current status of the agg task group.
	AttrStatus() interface{}
	Props() *AggTaskGroupProps
}

// The jsii proxy for IAggTaskGroup
type jsiiProxy_IAggTaskGroup struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IAggTaskGroup) AttrAggTaskGroupConfigHash() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAggTaskGroupConfigHash",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAggTaskGroup) AttrAggTaskGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAggTaskGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAggTaskGroup) AttrAggTaskGroupName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAggTaskGroupName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAggTaskGroup) AttrSourcePrometheusId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSourcePrometheusId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAggTaskGroup) AttrStatus() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrStatus",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAggTaskGroup) Props() *AggTaskGroupProps {
	var returns *AggTaskGroupProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

