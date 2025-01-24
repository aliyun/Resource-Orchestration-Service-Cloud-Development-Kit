package alicloudroscdkarms

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkarms/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `Environment`.
type IEnvironment interface {
	alicloudroscdkcore.IResource
	// Attribute EnvironmentId: The id of the environment.
	AttrEnvironmentId() interface{}
	// Attribute EnvironmentName: The name of the environment.
	AttrEnvironmentName() interface{}
	// Attribute EnvironmentSubType: The subtype of the environment.
	AttrEnvironmentSubType() interface{}
	// Attribute EnvironmentType: The type of the environment.
	AttrEnvironmentType() interface{}
	// Attribute FeePackage: The payable resource plan.
	AttrFeePackage() interface{}
	// Attribute GrafanaWorkspaceId: The ID of the grafana workspace bound to the environment.
	AttrGrafanaWorkspaceId() interface{}
	// Attribute ManagedType: Specifies whether agents or exporters are managed.
	AttrManagedType() interface{}
	// Attribute PrometheusInstanceId: The ID of the Prometheus instance.
	AttrPrometheusInstanceId() interface{}
	// Attribute ResourceGroupId: The ID of the resource group.
	AttrResourceGroupId() interface{}
	Props() *EnvironmentProps
}

// The jsii proxy for IEnvironment
type jsiiProxy_IEnvironment struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IEnvironment) AttrEnvironmentId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEnvironmentId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEnvironment) AttrEnvironmentName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEnvironmentName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEnvironment) AttrEnvironmentSubType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEnvironmentSubType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEnvironment) AttrEnvironmentType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEnvironmentType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEnvironment) AttrFeePackage() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrFeePackage",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEnvironment) AttrGrafanaWorkspaceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrGrafanaWorkspaceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEnvironment) AttrManagedType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrManagedType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEnvironment) AttrPrometheusInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPrometheusInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEnvironment) AttrResourceGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEnvironment) Props() *EnvironmentProps {
	var returns *EnvironmentProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

