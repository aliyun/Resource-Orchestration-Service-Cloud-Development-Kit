package alicloudroscdksls

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdksls/internal"
)

// Represents a `Savedsearch`.
type ISavedsearch interface {
	alicloudroscdkcore.IResource
	// Attribute SavedsearchName: Savedsearch name.
	AttrSavedsearchName() interface{}
	Props() *SavedsearchProps
}

// The jsii proxy for ISavedsearch
type jsiiProxy_ISavedsearch struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ISavedsearch) AttrSavedsearchName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSavedsearchName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISavedsearch) Props() *SavedsearchProps {
	var returns *SavedsearchProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

