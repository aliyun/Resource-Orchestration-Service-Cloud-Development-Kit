package alicloudroscdkros

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkros/internal"
)

// Represents a `WaitConditionHandle`.
type IWaitConditionHandle interface {
	alicloudroscdkcore.IResource
	// Attribute CurlCli: Convenience attribute, provides curl CLI command prefix, which can be used for signalling handle completion or failure.
	//
	// You can signal success by adding --data-binary '{"status": "SUCCESS"}' , or signal failure by adding --data-binary '{"status": "FAILURE"}'.
	AttrCurlCli() interface{}
	// Attribute Headers: HTTP POST Headers used for signalling handle completion or failure.
	AttrHeaders() interface{}
	// Attribute PowerShellCurlCli: Convenience attribute, provides curl CLI command prefix for PowerShell, which can be used for signalling handle completion or failure.
	//
	// As this cmdlet was introduced in PowerShell 3.0, ensure the version of PowerShell satisfies the constraint. (Show the version via $PSVersionTable.PSVersion.) You can signal success by adding -Body '{"status": "SUCCESS"}' , or signal failure by adding -Body '{"status": "FAILURE"}'
	AttrPowerShellCurlCli() interface{}
	// Attribute URL: HTTP POST URL used for signalling handle completion or failure.
	AttrUrl() interface{}
	// Attribute WindowsCurlCli: Convenience attribute, provides curl CLI command prefix for Windows, which can be used for signalling handle completion or failure.
	//
	// As Windows does not support curl command, you need to install curl.exe and add it to PATH first. You can signal success by adding --data-binary "{\"status\": \"SUCCESS\"}" , or signal failure by adding --data-binary "{\"status\": \"FAILURE\"}"
	AttrWindowsCurlCli() interface{}
	Props() *WaitConditionHandleProps
}

// The jsii proxy for IWaitConditionHandle
type jsiiProxy_IWaitConditionHandle struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IWaitConditionHandle) AttrCurlCli() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCurlCli",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IWaitConditionHandle) AttrHeaders() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHeaders",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IWaitConditionHandle) AttrPowerShellCurlCli() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPowerShellCurlCli",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IWaitConditionHandle) AttrUrl() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrUrl",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IWaitConditionHandle) AttrWindowsCurlCli() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrWindowsCurlCli",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IWaitConditionHandle) Props() *WaitConditionHandleProps {
	var returns *WaitConditionHandleProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

