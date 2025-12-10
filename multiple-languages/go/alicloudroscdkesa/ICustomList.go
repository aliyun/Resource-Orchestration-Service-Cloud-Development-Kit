package alicloudroscdkesa

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkesa/internal"
)

// Represents a `CustomList`.
type ICustomList interface {
	alicloudroscdkcore.IResource
	// Attribute Description: The description of the custom list.
	AttrDescription() interface{}
	// Attribute Items: The items in the custom list, which are displayed as an array.
	AttrItems() interface{}
	// Attribute Kind: The type of the custom list.
	AttrKind() interface{}
	// Attribute ListId: The id of the custom list .
	AttrListId() interface{}
	// Attribute ListName: The name of the custom list.
	AttrListName() interface{}
	// Attribute UpdateTime: The time when the custom list was last modified.
	AttrUpdateTime() interface{}
	Props() *CustomListProps
}

// The jsii proxy for ICustomList
type jsiiProxy_ICustomList struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ICustomList) AttrDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICustomList) AttrItems() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrItems",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICustomList) AttrKind() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrKind",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICustomList) AttrListId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrListId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICustomList) AttrListName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrListName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICustomList) AttrUpdateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrUpdateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICustomList) Props() *CustomListProps {
	var returns *CustomListProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

