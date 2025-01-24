package alicloudroscdkresourcemanager

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkresourcemanager/internal"
)

// Represents a `ResourceShare`.
type IResourceShare interface {
	alicloudroscdkcore.IResource
	// Attribute ResourceShareId: The ID of the resource share.
	AttrResourceShareId() interface{}
	Props() *ResourceShareProps
}

// The jsii proxy for IResourceShare
type jsiiProxy_IResourceShare struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IResourceShare) AttrResourceShareId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResourceShareId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IResourceShare) Props() *ResourceShareProps {
	var returns *ResourceShareProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

