package alicloudroscdkfnf

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkfnf/internal"
)

// Represents a `Flow`.
type IFlow interface {
	alicloudroscdkcore.IResource
	// Attribute CreatedTime: Flow creation time.
	AttrCreatedTime() interface{}
	// Attribute Id: The unique ID of the flow.
	AttrId() interface{}
	// Attribute LastModifiedTime: The most recently modified time of the flow.
	AttrLastModifiedTime() interface{}
	// Attribute Name: The name of the flow created.
	AttrName() interface{}
	Props() *FlowProps
}

// The jsii proxy for IFlow
type jsiiProxy_IFlow struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IFlow) AttrCreatedTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreatedTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IFlow) AttrId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IFlow) AttrLastModifiedTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLastModifiedTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IFlow) AttrName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IFlow) Props() *FlowProps {
	var returns *FlowProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

