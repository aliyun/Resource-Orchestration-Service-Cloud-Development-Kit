package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkresourcemanager/datasource/internal"
)

// Represents a `ResourceGroups`.
type IResourceGroups interface {
	alicloudroscdkcore.IResource
	// Attribute ResourceGroupIds: The IDs of the resource groups.
	AttrResourceGroupIds() interface{}
	// Attribute ResourceGroups: The list of the resource groups.
	AttrResourceGroups() interface{}
	Props() *ResourceGroupsProps
}

// The jsii proxy for IResourceGroups
type jsiiProxy_IResourceGroups struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IResourceGroups) AttrResourceGroupIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResourceGroupIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IResourceGroups) AttrResourceGroups() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResourceGroups",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IResourceGroups) Props() *ResourceGroupsProps {
	var returns *ResourceGroupsProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

