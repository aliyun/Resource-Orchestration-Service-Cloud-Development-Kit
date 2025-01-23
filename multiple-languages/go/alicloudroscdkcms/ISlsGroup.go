package alicloudroscdkcms

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcms/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `SlsGroup`.
type ISlsGroup interface {
	alicloudroscdkcore.IResource
	// Attribute CreateTime: The creation time of the Logstore group.
	AttrCreateTime() interface{}
	// Attribute SlsGroupConfig: The configurations of the Logstore group.
	AttrSlsGroupConfig() interface{}
	// Attribute SlsGroupDescription: The description of the Logstore group.
	AttrSlsGroupDescription() interface{}
	// Attribute SlsGroupName: The name of the Logstore group.
	AttrSlsGroupName() interface{}
	Props() *SlsGroupProps
}

// The jsii proxy for ISlsGroup
type jsiiProxy_ISlsGroup struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ISlsGroup) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISlsGroup) AttrSlsGroupConfig() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSlsGroupConfig",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISlsGroup) AttrSlsGroupDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSlsGroupDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISlsGroup) AttrSlsGroupName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSlsGroupName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISlsGroup) Props() *SlsGroupProps {
	var returns *SlsGroupProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

