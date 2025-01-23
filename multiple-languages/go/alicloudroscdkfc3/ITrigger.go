package alicloudroscdkfc3

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkfc3/internal"
)

// Represents a `Trigger`.
type ITrigger interface {
	alicloudroscdkcore.IResource
	// Attribute FunctionName: Function name.
	AttrFunctionName() interface{}
	// Attribute TriggerId: The trigger ID.
	AttrTriggerId() interface{}
	// Attribute TriggerName: Trigger name.
	AttrTriggerName() interface{}
	// Attribute UrlInternet: The public domain address.
	//
	// You can access HTTP triggers over the Internet by using HTTP or HTTPS.
	AttrUrlInternet() interface{}
	// Attribute UrlIntranet: The private endpoint.
	//
	// In a VPC, you can access HTTP triggers by using HTTP or HTTPS.
	AttrUrlIntranet() interface{}
	Props() *TriggerProps
}

// The jsii proxy for ITrigger
type jsiiProxy_ITrigger struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ITrigger) AttrFunctionName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrFunctionName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITrigger) AttrTriggerId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTriggerId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITrigger) AttrTriggerName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTriggerName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITrigger) AttrUrlInternet() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrUrlInternet",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITrigger) AttrUrlIntranet() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrUrlIntranet",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITrigger) Props() *TriggerProps {
	var returns *TriggerProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

