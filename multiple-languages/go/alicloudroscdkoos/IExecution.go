package alicloudroscdkoos

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkoos/internal"
)

// Represents a `Execution`.
type IExecution interface {
	alicloudroscdkcore.IResource
	// Attribute Counters: Task statistics: FailedTasks, SuccessTasks, TotalTasks.
	AttrCounters() interface{}
	// Attribute CurlCli: Convenience attribute, provides curl CLI command prefix, which can be used to notify oos execution instead of OOS API NotifyExecution.
	//
	// You can notify approve to oos execution by adding --data-binary '{"data": {"NotifyType": "Approve"}}'
	// For more parameters in data, refer to https://help.aliyun.com/document_detail/120777.html.
	// You can also notify execution via ROS API SignalResource. API parameters Status and UniqueId are ignored. Use API parameter Data to pass data.
	AttrCurlCli() interface{}
	// Attribute ExecutionId: Execution ID.
	AttrExecutionId() interface{}
	// Attribute Outputs: Execution output.
	AttrOutputs() interface{}
	// Attribute PowerShellCurlCli: Convenience attribute, provides curl CLI command prefix for PowerShell, which can be used to notify oos execution instead of OOS API NotifyExecution.
	//
	// You can notify approve to oos execution by adding -Body '{"data": {"NotifyType": "Approve"}}'
	// For more parameters in data, refer to https://help.aliyun.com/document_detail/120777.html.You can also notify execution via ROS API SignalResource. API parameters Status and UniqueId are ignored. Use API parameter Data to pass data.
	AttrPowerShellCurlCli() interface{}
	// Attribute Status: Execution status.
	AttrStatus() interface{}
	// Attribute StatusMessage: Execution status information.
	AttrStatusMessage() interface{}
	// Attribute WindowsCurlCli: Convenience attribute, provides curl CLI command prefix for Windows, which can be used to notify oos execution instead of OOS API NotifyExecution.
	//
	// You can notify approve to oos execution by adding --data-binary "{\"data\": {\"NotifyType\": \"Approve\"}}"
	// For more parameters in data, refer to https://help.aliyun.com/document_detail/120777.html.You can also notify execution via ROS API SignalResource. API parameters Status and UniqueId are ignored. Use API parameter Data to pass data.
	AttrWindowsCurlCli() interface{}
	Props() *ExecutionProps
}

// The jsii proxy for IExecution
type jsiiProxy_IExecution struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IExecution) AttrCounters() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCounters",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IExecution) AttrCurlCli() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCurlCli",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IExecution) AttrExecutionId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrExecutionId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IExecution) AttrOutputs() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrOutputs",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IExecution) AttrPowerShellCurlCli() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPowerShellCurlCli",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IExecution) AttrStatus() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrStatus",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IExecution) AttrStatusMessage() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrStatusMessage",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IExecution) AttrWindowsCurlCli() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrWindowsCurlCli",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IExecution) Props() *ExecutionProps {
	var returns *ExecutionProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

