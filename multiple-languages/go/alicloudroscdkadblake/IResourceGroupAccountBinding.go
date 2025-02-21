package alicloudroscdkadblake

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkadblake/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `ResourceGroupAccountBinding`.
type IResourceGroupAccountBinding interface {
	alicloudroscdkcore.IResource
	// Attribute GroupName: The name of the resource group.
	AttrGroupName() interface{}
	Props() *ResourceGroupAccountBindingProps
}

// The jsii proxy for IResourceGroupAccountBinding
type jsiiProxy_IResourceGroupAccountBinding struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IResourceGroupAccountBinding) AttrGroupName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrGroupName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IResourceGroupAccountBinding) Props() *ResourceGroupAccountBindingProps {
	var returns *ResourceGroupAccountBindingProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

