package alicloudroscdkfc3

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkfc3/internal"
)

// Represents a `FunctionVersion`.
type IFunctionVersion interface {
	alicloudroscdkcore.IResource
	// Attribute CreateTime: The creation time of the resource.
	AttrCreateTime() interface{}
	// Attribute Description: Description of the function version.
	AttrDescription() interface{}
	// Attribute FunctionName: Function Name.
	AttrFunctionName() interface{}
	// Attribute LastModifiedTime: Update time.
	AttrLastModifiedTime() interface{}
	Props() *FunctionVersionProps
}

// The jsii proxy for IFunctionVersion
type jsiiProxy_IFunctionVersion struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IFunctionVersion) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IFunctionVersion) AttrDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IFunctionVersion) AttrFunctionName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrFunctionName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IFunctionVersion) AttrLastModifiedTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLastModifiedTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IFunctionVersion) Props() *FunctionVersionProps {
	var returns *FunctionVersionProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

