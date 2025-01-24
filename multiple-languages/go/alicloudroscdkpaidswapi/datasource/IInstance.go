package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkpaidswapi/datasource/internal"
)

// Represents a `Instance`.
type IInstance interface {
	alicloudroscdkcore.IResource
	// Attribute Accessibility: Whether the workspace is visible to others.
	AttrAccessibility() interface{}
	// Attribute Datasets: A collection of datasets.
	AttrDatasets() interface{}
	// Attribute EcsSpec: The ECS specification of the instance.
	AttrEcsSpec() interface{}
	// Attribute ImageUrl: The mirror address.
	AttrImageUrl() interface{}
	// Attribute InstanceId: The ID of the resource.
	AttrInstanceId() interface{}
	// Attribute InstanceName: The instance name.
	AttrInstanceName() interface{}
	// Attribute Labels: User-defined labels.
	AttrLabels() interface{}
	// Attribute PaymentType: The payment type of the resource.
	AttrPaymentType() interface{}
	// Attribute WorkspaceId: The Id of the workspace.
	AttrWorkspaceId() interface{}
	Props() *InstanceProps
}

// The jsii proxy for IInstance
type jsiiProxy_IInstance struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IInstance) AttrAccessibility() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAccessibility",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrDatasets() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDatasets",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrEcsSpec() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEcsSpec",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrImageUrl() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrImageUrl",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrInstanceName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrLabels() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLabels",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrPaymentType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPaymentType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrWorkspaceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrWorkspaceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) Props() *InstanceProps {
	var returns *InstanceProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

