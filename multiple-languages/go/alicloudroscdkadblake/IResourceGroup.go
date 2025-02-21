package alicloudroscdkadblake

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkadblake/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `ResourceGroup`.
type IResourceGroup interface {
	alicloudroscdkcore.IResource
	// Attribute GroupName: The name of the resource group.
	AttrGroupName() interface{}
	// Attribute GroupType: The type of the resource group.
	AttrGroupType() interface{}
	// Attribute GroupUsers: The list of users in the resource group.
	AttrGroupUsers() interface{}
	Props() *ResourceGroupProps
}

// The jsii proxy for IResourceGroup
type jsiiProxy_IResourceGroup struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IResourceGroup) AttrGroupName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrGroupName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IResourceGroup) AttrGroupType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrGroupType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IResourceGroup) AttrGroupUsers() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrGroupUsers",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IResourceGroup) Props() *ResourceGroupProps {
	var returns *ResourceGroupProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

