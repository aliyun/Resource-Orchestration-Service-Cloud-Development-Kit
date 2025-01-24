package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkfc/datasource/internal"
)

// Represents a `Triggers`.
type ITriggers interface {
	alicloudroscdkcore.IResource
	// Attribute TriggerNames: The list of trigger names.
	AttrTriggerNames() interface{}
	// Attribute Triggers: The list of triggers.
	AttrTriggers() interface{}
	Props() *TriggersProps
}

// The jsii proxy for ITriggers
type jsiiProxy_ITriggers struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ITriggers) AttrTriggerNames() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTriggerNames",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITriggers) AttrTriggers() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTriggers",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITriggers) Props() *TriggersProps {
	var returns *TriggersProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

