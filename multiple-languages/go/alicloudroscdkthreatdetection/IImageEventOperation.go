package alicloudroscdkthreatdetection

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkthreatdetection/internal"
)

// Represents a `ImageEventOperation`.
type IImageEventOperation interface {
	alicloudroscdkcore.IResource
	// Attribute Conditions: The rule conditions.
	//
	// Specify a value in the JSON format.
	AttrConditions() interface{}
	// Attribute EventKey: Image Event Key.
	AttrEventKey() interface{}
	// Attribute EventName: Image Event Name.
	AttrEventName() interface{}
	// Attribute EventType: Image Event Type.
	AttrEventType() interface{}
	// Attribute ImageEventOperationId: The first ID of the resource.
	AttrImageEventOperationId() interface{}
	// Attribute Note: The remarks.
	AttrNote() interface{}
	// Attribute OperationCode: Event Operation Code.
	AttrOperationCode() interface{}
	// Attribute Scenarios: Event Scenarios.
	AttrScenarios() interface{}
	// Attribute Source: The source of the whitelist.
	AttrSource() interface{}
	Props() *ImageEventOperationProps
}

// The jsii proxy for IImageEventOperation
type jsiiProxy_IImageEventOperation struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IImageEventOperation) AttrConditions() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrConditions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IImageEventOperation) AttrEventKey() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEventKey",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IImageEventOperation) AttrEventName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEventName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IImageEventOperation) AttrEventType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEventType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IImageEventOperation) AttrImageEventOperationId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrImageEventOperationId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IImageEventOperation) AttrNote() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNote",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IImageEventOperation) AttrOperationCode() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrOperationCode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IImageEventOperation) AttrScenarios() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrScenarios",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IImageEventOperation) AttrSource() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSource",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IImageEventOperation) Props() *ImageEventOperationProps {
	var returns *ImageEventOperationProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

