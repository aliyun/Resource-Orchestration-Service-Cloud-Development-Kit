package alicloudroscdkecs

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkecs/internal"
)

// Represents a `Command`.
type ICommand interface {
	alicloudroscdkcore.IResource
	// Attribute CommandId: The id of command created.
	AttrCommandId() interface{}
	Props() *CommandProps
}

// The jsii proxy for ICommand
type jsiiProxy_ICommand struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ICommand) AttrCommandId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCommandId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICommand) Props() *CommandProps {
	var returns *CommandProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

