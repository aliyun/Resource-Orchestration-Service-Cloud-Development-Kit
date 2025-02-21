package alicloudroscdkprivatelink

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkprivatelink/internal"
)

// Represents a `VpcEndpointService`.
type IVpcEndpointService interface {
	alicloudroscdkcore.IResource
	// Attribute Arn: The Alibaba Cloud Resource Name (ARN).
	AttrArn() interface{}
	// Attribute MaxBandwidth: The maximum bandwidth of the endpoint connection.
	AttrMaxBandwidth() interface{}
	// Attribute MinBandwidth: The minimum bandwidth of the endpoint connection.
	AttrMinBandwidth() interface{}
	// Attribute ServiceDescription: The description of the endpoint service.
	AttrServiceDescription() interface{}
	// Attribute ServiceDomain: The domain name of the endpoint service.
	AttrServiceDomain() interface{}
	// Attribute ServiceId: The ID of the endpoint service.
	AttrServiceId() interface{}
	// Attribute ServiceName: The name of the endpoint service.
	AttrServiceName() interface{}
	Props() *VpcEndpointServiceProps
}

// The jsii proxy for IVpcEndpointService
type jsiiProxy_IVpcEndpointService struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IVpcEndpointService) AttrArn() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrArn",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVpcEndpointService) AttrMaxBandwidth() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMaxBandwidth",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVpcEndpointService) AttrMinBandwidth() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMinBandwidth",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVpcEndpointService) AttrServiceDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrServiceDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVpcEndpointService) AttrServiceDomain() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrServiceDomain",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVpcEndpointService) AttrServiceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrServiceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVpcEndpointService) AttrServiceName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrServiceName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVpcEndpointService) Props() *VpcEndpointServiceProps {
	var returns *VpcEndpointServiceProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

