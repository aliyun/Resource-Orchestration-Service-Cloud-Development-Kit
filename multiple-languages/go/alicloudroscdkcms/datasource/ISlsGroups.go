package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcms/datasource/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `SlsGroups`.
type ISlsGroups interface {
	alicloudroscdkcore.IResource
	// Attribute SlsGroupNames: The list of sls group names.
	AttrSlsGroupNames() interface{}
	// Attribute SlsGroups: The list of sls groups.
	AttrSlsGroups() interface{}
	Props() *SlsGroupsProps
}

// The jsii proxy for ISlsGroups
type jsiiProxy_ISlsGroups struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ISlsGroups) AttrSlsGroupNames() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSlsGroupNames",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISlsGroups) AttrSlsGroups() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSlsGroups",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISlsGroups) Props() *SlsGroupsProps {
	var returns *SlsGroupsProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

