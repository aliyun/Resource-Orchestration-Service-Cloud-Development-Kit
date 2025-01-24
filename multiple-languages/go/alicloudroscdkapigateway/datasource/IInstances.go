package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkapigateway/datasource/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `Instances`.
type IInstances interface {
	alicloudroscdkcore.IResource
	// Attribute ApiGatewayInstanceIds: The list of The ApiGateway group ids.
	AttrApiGatewayInstanceIds() interface{}
	// Attribute ApiGatewayInstances: The information about ApiGateway groups.
	AttrApiGatewayInstances() interface{}
	Props() *InstancesProps
}

// The jsii proxy for IInstances
type jsiiProxy_IInstances struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IInstances) AttrApiGatewayInstanceIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrApiGatewayInstanceIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstances) AttrApiGatewayInstances() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrApiGatewayInstances",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstances) Props() *InstancesProps {
	var returns *InstancesProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

