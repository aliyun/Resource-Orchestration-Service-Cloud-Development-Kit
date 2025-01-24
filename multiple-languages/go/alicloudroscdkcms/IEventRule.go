package alicloudroscdkcms

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcms/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `EventRule`.
type IEventRule interface {
	alicloudroscdkcore.IResource
	// Attribute Data: Number of rows affected.
	AttrData() interface{}
	Props() *EventRuleProps
}

// The jsii proxy for IEventRule
type jsiiProxy_IEventRule struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IEventRule) AttrData() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrData",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEventRule) Props() *EventRuleProps {
	var returns *EventRuleProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

