package alicloudroscdkresourcemanager

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkresourcemanager/internal"
)

// Represents a `SharedTarget`.
type ISharedTarget interface {
	alicloudroscdkcore.IResource
	// Attribute CreateTime: Create time of the resource share.
	AttrCreateTime() interface{}
	// Attribute ResourceShareId: The ID of the resource share.
	AttrResourceShareId() interface{}
	// Attribute ResourceShareName: The name of the resource share.
	AttrResourceShareName() interface{}
	// Attribute TargetId: The ID of the principal.
	AttrTargetId() interface{}
	// Attribute UpdateTime: Update time of the resource share.
	AttrUpdateTime() interface{}
	Props() *SharedTargetProps
}

// The jsii proxy for ISharedTarget
type jsiiProxy_ISharedTarget struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ISharedTarget) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISharedTarget) AttrResourceShareId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResourceShareId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISharedTarget) AttrResourceShareName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResourceShareName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISharedTarget) AttrTargetId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTargetId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISharedTarget) AttrUpdateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrUpdateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISharedTarget) Props() *SharedTargetProps {
	var returns *SharedTargetProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

