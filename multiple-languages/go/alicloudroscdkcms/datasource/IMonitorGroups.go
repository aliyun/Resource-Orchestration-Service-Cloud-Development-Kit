package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcms/datasource/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `MonitorGroups`.
type IMonitorGroups interface {
	alicloudroscdkcore.IResource
	// Attribute GroupIds: The list of group IDs.
	AttrGroupIds() interface{}
	// Attribute MonitorGroups: The list of monitor groups.
	AttrMonitorGroups() interface{}
	Props() *MonitorGroupsProps
}

// The jsii proxy for IMonitorGroups
type jsiiProxy_IMonitorGroups struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IMonitorGroups) AttrGroupIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrGroupIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IMonitorGroups) AttrMonitorGroups() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMonitorGroups",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IMonitorGroups) Props() *MonitorGroupsProps {
	var returns *MonitorGroupsProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

