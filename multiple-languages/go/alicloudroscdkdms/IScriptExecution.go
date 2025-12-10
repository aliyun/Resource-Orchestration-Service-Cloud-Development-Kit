package alicloudroscdkdms

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkdms/internal"
)

// Represents a `ScriptExecution`.
type IScriptExecution interface {
	alicloudroscdkcore.IResource
	Props() *ScriptExecutionProps
}

// The jsii proxy for IScriptExecution
type jsiiProxy_IScriptExecution struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IScriptExecution) Props() *ScriptExecutionProps {
	var returns *ScriptExecutionProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

