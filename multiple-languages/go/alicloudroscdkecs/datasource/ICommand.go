package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkecs/datasource/internal"
)

// Represents a `Command`.
type ICommand interface {
	alicloudroscdkcore.IResource
	// Attribute CommandContent: Command content, encoded in Base64 and transmitted.
	AttrCommandContent() interface{}
	// Attribute CommandId: Command ID.
	AttrCommandId() interface{}
	// Attribute CommandName: Command name.
	AttrCommandName() interface{}
	// Attribute CreateTime: Command creation time.
	AttrCreateTime() interface{}
	// Attribute Description: Command description.
	AttrDescription() interface{}
	// Attribute EnableParameter: Whether to use parameters.
	AttrEnableParameter() interface{}
	// Attribute ParameterNames: Parameter name.
	AttrParameterNames() interface{}
	// Attribute Tags: The label information of the command.
	AttrTags() interface{}
	// Attribute Timeout: Timeout.
	AttrTimeout() interface{}
	// Attribute Type: Command type.
	AttrType() interface{}
	// Attribute WorkingDir: Execution path.
	AttrWorkingDir() interface{}
	Props() *CommandProps
}

// The jsii proxy for ICommand
type jsiiProxy_ICommand struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ICommand) AttrCommandContent() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCommandContent",
		&returns,
	)
	return returns
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

func (j *jsiiProxy_ICommand) AttrCommandName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCommandName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICommand) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICommand) AttrDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICommand) AttrEnableParameter() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEnableParameter",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICommand) AttrParameterNames() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrParameterNames",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICommand) AttrTags() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTags",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICommand) AttrTimeout() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTimeout",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICommand) AttrType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICommand) AttrWorkingDir() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrWorkingDir",
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

