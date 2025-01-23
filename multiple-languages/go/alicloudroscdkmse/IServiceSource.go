package alicloudroscdkmse

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkmse/internal"
)

// Represents a `ServiceSource`.
type IServiceSource interface {
	alicloudroscdkcore.IResource
	// Attribute Address: Registration Address.
	//
	// If not specified, it will be automatically generated based on the selected instance.
	AttrAddress() interface{}
	// Attribute GatewayUniqueId: The unique ID of the gateway.
	AttrGatewayUniqueId() interface{}
	// Attribute Id: The ID of service source.
	AttrId() interface{}
	// Attribute Name: The name.
	//
	// If Type is set to K8S, this parameter specifies the name of the ACK cluster.
	// If Type is set to NACOS, this parameter specifies the ID of the Nacos instance.
	AttrName() interface{}
	Props() *ServiceSourceProps
}

// The jsii proxy for IServiceSource
type jsiiProxy_IServiceSource struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IServiceSource) AttrAddress() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAddress",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IServiceSource) AttrGatewayUniqueId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrGatewayUniqueId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IServiceSource) AttrId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IServiceSource) AttrName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IServiceSource) Props() *ServiceSourceProps {
	var returns *ServiceSourceProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

