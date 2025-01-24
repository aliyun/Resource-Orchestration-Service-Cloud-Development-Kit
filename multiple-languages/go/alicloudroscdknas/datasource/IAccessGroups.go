package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdknas/datasource/internal"
)

// Represents a `AccessGroups`.
type IAccessGroups interface {
	alicloudroscdkcore.IResource
	// Attribute AccessGroupNames: The list of access group names.
	AttrAccessGroupNames() interface{}
	// Attribute AccessGroups: The list of access groups.
	AttrAccessGroups() interface{}
	Props() *AccessGroupsProps
}

// The jsii proxy for IAccessGroups
type jsiiProxy_IAccessGroups struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IAccessGroups) AttrAccessGroupNames() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAccessGroupNames",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAccessGroups) AttrAccessGroups() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAccessGroups",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAccessGroups) Props() *AccessGroupsProps {
	var returns *AccessGroupsProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

