package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcms2/datasource/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `ServiceObservability`.
type IServiceObservability interface {
	alicloudroscdkcore.IResource
	// Attribute EntryPointInfo: The entry point info of service observability.
	AttrEntryPointInfo() interface{}
	// Attribute FeeType: The fee type of service observability.
	AttrFeeType() interface{}
	// Attribute Quotas: The quotas of service observability.
	AttrQuotas() interface{}
	// Attribute Settings: The settings of service observability.
	AttrSettings() interface{}
	// Attribute Status: The status of service observability.
	AttrStatus() interface{}
	// Attribute Type: The type of service observability.
	AttrType() interface{}
	// Attribute Workspace: The name of workspace.
	AttrWorkspace() interface{}
	Props() *ServiceObservabilityProps
}

// The jsii proxy for IServiceObservability
type jsiiProxy_IServiceObservability struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IServiceObservability) AttrEntryPointInfo() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEntryPointInfo",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IServiceObservability) AttrFeeType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrFeeType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IServiceObservability) AttrQuotas() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrQuotas",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IServiceObservability) AttrSettings() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSettings",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IServiceObservability) AttrStatus() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrStatus",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IServiceObservability) AttrType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IServiceObservability) AttrWorkspace() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrWorkspace",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IServiceObservability) Props() *ServiceObservabilityProps {
	var returns *ServiceObservabilityProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

