package alicloudroscdkdataworks

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkdataworks/internal"
)

// Represents a `ResourceGroup`.
type IResourceGroup interface {
	alicloudroscdkcore.IResource
	// Attribute Id: Creates a unique identifier for a common resource group.
	AttrId() interface{}
	Props() *ResourceGroupProps
}

// The jsii proxy for IResourceGroup
type jsiiProxy_IResourceGroup struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IResourceGroup) AttrId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrId",
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

