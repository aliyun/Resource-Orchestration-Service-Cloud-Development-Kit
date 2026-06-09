package alicloudroscdkpai

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkpai/internal"
)

// Represents a `ResourceGroup`.
type IResourceGroup interface {
	alicloudroscdkcore.IResource
	// Attribute ResourceGroupID: The ID of the resource group.
	AttrResourceGroupId() interface{}
	Props() *ResourceGroupProps
}

// The jsii proxy for IResourceGroup
type jsiiProxy_IResourceGroup struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IResourceGroup) AttrResourceGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResourceGroupId",
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

