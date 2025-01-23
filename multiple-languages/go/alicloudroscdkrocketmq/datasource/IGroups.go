package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkrocketmq/datasource/internal"
)

// Represents a `Groups`.
type IGroups interface {
	alicloudroscdkcore.IResource
	// Attribute GroupNames: The list of group names.
	AttrGroupNames() interface{}
	// Attribute Groups: The list of groups.
	AttrGroups() interface{}
	Props() *GroupsProps
}

// The jsii proxy for IGroups
type jsiiProxy_IGroups struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IGroups) AttrGroupNames() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrGroupNames",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IGroups) AttrGroups() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrGroups",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IGroups) Props() *GroupsProps {
	var returns *GroupsProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

