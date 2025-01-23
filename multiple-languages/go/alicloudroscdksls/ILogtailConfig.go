package alicloudroscdksls

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdksls/internal"
)

// Represents a `LogtailConfig`.
type ILogtailConfig interface {
	alicloudroscdkcore.IResource
	// Attribute AppliedMachineGroups: Applied machine groups.
	AttrAppliedMachineGroups() interface{}
	// Attribute Endpoint: Endpoint address.
	AttrEndpoint() interface{}
	// Attribute LogtailConfigName: Logtail config name.
	AttrLogtailConfigName() interface{}
	Props() *LogtailConfigProps
}

// The jsii proxy for ILogtailConfig
type jsiiProxy_ILogtailConfig struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ILogtailConfig) AttrAppliedMachineGroups() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAppliedMachineGroups",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILogtailConfig) AttrEndpoint() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEndpoint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILogtailConfig) AttrLogtailConfigName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLogtailConfigName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILogtailConfig) Props() *LogtailConfigProps {
	var returns *LogtailConfigProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

