package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkecs/datasource/internal"
)

// Represents a `DiskCategories`.
type IDiskCategories interface {
	alicloudroscdkcore.IResource
	// Attribute DiskCategories: The list of disk categories.
	AttrDiskCategories() interface{}
	// Attribute DiskCategoryIds: The list of disk category IDs.
	AttrDiskCategoryIds() interface{}
	Props() *DiskCategoriesProps
}

// The jsii proxy for IDiskCategories
type jsiiProxy_IDiskCategories struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IDiskCategories) AttrDiskCategories() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDiskCategories",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDiskCategories) AttrDiskCategoryIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDiskCategoryIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDiskCategories) Props() *DiskCategoriesProps {
	var returns *DiskCategoriesProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

