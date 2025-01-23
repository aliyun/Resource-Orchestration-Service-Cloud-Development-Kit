package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkecs/datasource/internal"
)

// Represents a `Commands`.
type ICommands interface {
	alicloudroscdkcore.IResource
	// Attribute CommandIds: The list of command IDs.
	AttrCommandIds() interface{}
	// Attribute Commands: The list of commands.
	AttrCommands() interface{}
	Props() *CommandsProps
}

// The jsii proxy for ICommands
type jsiiProxy_ICommands struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ICommands) AttrCommandIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCommandIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICommands) AttrCommands() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCommands",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICommands) Props() *CommandsProps {
	var returns *CommandsProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

