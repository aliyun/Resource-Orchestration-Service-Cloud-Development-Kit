package alicloudroscdkice

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkice/internal"
)

// Represents a `SearchLib`.
type ISearchLib interface {
	alicloudroscdkcore.IResource
	// Attribute SearchLibName: The name of the Search Lib.
	AttrSearchLibName() interface{}
	Props() *SearchLibProps
}

// The jsii proxy for ISearchLib
type jsiiProxy_ISearchLib struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ISearchLib) AttrSearchLibName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSearchLibName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISearchLib) Props() *SearchLibProps {
	var returns *SearchLibProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

