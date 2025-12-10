package alicloudroscdkesa

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkesa/internal"
)

// Represents a `Page`.
type IPage interface {
	alicloudroscdkcore.IResource
	// Attribute Content: The Base64-encoded content of the error page.
	//
	// The content type is specified by the Content-Type field.
	AttrContent() interface{}
	// Attribute ContentType: The Content-Type field in the HTTP header.
	AttrContentType() interface{}
	// Attribute Description: The description of the custom error page.
	AttrDescription() interface{}
	// Attribute Kind: The type of the custom response page.
	AttrKind() interface{}
	// Attribute PageId: The ID of the custom error page.
	AttrPageId() interface{}
	// Attribute PageName: The name of the custom response page.
	AttrPageName() interface{}
	// Attribute UpdateTime: The time when the custom error page was last modified.
	AttrUpdateTime() interface{}
	Props() *PageProps
}

// The jsii proxy for IPage
type jsiiProxy_IPage struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IPage) AttrContent() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrContent",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPage) AttrContentType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrContentType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPage) AttrDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPage) AttrKind() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrKind",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPage) AttrPageId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPageId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPage) AttrPageName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPageName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPage) AttrUpdateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrUpdateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPage) Props() *PageProps {
	var returns *PageProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

