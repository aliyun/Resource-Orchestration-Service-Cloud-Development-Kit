package alicloudroscdkice

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkice/internal"
)

// Represents a `Category`.
type ICategory interface {
	alicloudroscdkcore.IResource
	// Attribute CateId: The ID of the category.
	AttrCateId() interface{}
	// Attribute Level: The level of the category.
	//
	// The primary classification level is 0, the secondary classification level is 1, and the tertiary classification level is 2.
	AttrLevel() interface{}
	// Attribute ParentId: The ID of the parent category.
	AttrParentId() interface{}
	Props() *CategoryProps
}

// The jsii proxy for ICategory
type jsiiProxy_ICategory struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ICategory) AttrCateId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCateId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICategory) AttrLevel() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLevel",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICategory) AttrParentId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrParentId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICategory) Props() *CategoryProps {
	var returns *CategoryProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

