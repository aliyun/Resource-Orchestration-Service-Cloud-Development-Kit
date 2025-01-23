package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkslb/datasource/internal"
)

// Represents a `VServerGroups`.
type IVServerGroups interface {
	alicloudroscdkcore.IResource
	// Attribute VServerGroupIds: The list of VServer group IDs.
	AttrVServerGroupIds() interface{}
	// Attribute VServerGroups: The list of VServer groups.
	AttrVServerGroups() interface{}
	Props() *VServerGroupsProps
}

// The jsii proxy for IVServerGroups
type jsiiProxy_IVServerGroups struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IVServerGroups) AttrVServerGroupIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVServerGroupIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVServerGroups) AttrVServerGroups() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVServerGroups",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVServerGroups) Props() *VServerGroupsProps {
	var returns *VServerGroupsProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

