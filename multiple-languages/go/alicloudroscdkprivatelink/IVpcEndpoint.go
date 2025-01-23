package alicloudroscdkprivatelink

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkprivatelink/internal"
)

// Represents a `VpcEndpoint`.
type IVpcEndpoint interface {
	alicloudroscdkcore.IResource
	// Attribute Bandwidth: The bandwidth of the endpoint.
	AttrBandwidth() interface{}
	// Attribute EndpointDomain: The domain name of the endpoint.
	AttrEndpointDomain() interface{}
	// Attribute EndpointId: The ID of the endpoint.
	AttrEndpointId() interface{}
	// Attribute EndpointName: The name of the endpoint.
	AttrEndpointName() interface{}
	// Attribute ServiceId: The ID of endpoint service that is associated with the endpoint.
	AttrServiceId() interface{}
	// Attribute ServiceName: The name of endpoint service that is associated with the endpoint.
	AttrServiceName() interface{}
	// Attribute VpcId: The vpc ID of endpoint.
	AttrVpcId() interface{}
	// Attribute ZoneDomains: The zone domains.
	AttrZoneDomains() interface{}
	Props() *VpcEndpointProps
}

// The jsii proxy for IVpcEndpoint
type jsiiProxy_IVpcEndpoint struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IVpcEndpoint) AttrBandwidth() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrBandwidth",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVpcEndpoint) AttrEndpointDomain() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEndpointDomain",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVpcEndpoint) AttrEndpointId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEndpointId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVpcEndpoint) AttrEndpointName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEndpointName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVpcEndpoint) AttrServiceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrServiceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVpcEndpoint) AttrServiceName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrServiceName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVpcEndpoint) AttrVpcId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVpcId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVpcEndpoint) AttrZoneDomains() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrZoneDomains",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVpcEndpoint) Props() *VpcEndpointProps {
	var returns *VpcEndpointProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

