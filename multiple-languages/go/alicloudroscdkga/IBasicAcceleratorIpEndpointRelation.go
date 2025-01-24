package alicloudroscdkga

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkga/internal"
)

// Represents a `BasicAcceleratorIpEndpointRelation`.
type IBasicAcceleratorIpEndpointRelation interface {
	alicloudroscdkcore.IResource
	// Attribute AccelerateIpId: The ID of the accelerated IP address.
	AttrAccelerateIpId() interface{}
	// Attribute AcceleratorId: The ID of the basic GA instance.
	AttrAcceleratorId() interface{}
	// Attribute EndpointId: The ID of the endpoint.
	AttrEndpointId() interface{}
	Props() *BasicAcceleratorIpEndpointRelationProps
}

// The jsii proxy for IBasicAcceleratorIpEndpointRelation
type jsiiProxy_IBasicAcceleratorIpEndpointRelation struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IBasicAcceleratorIpEndpointRelation) AttrAccelerateIpId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAccelerateIpId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBasicAcceleratorIpEndpointRelation) AttrAcceleratorId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAcceleratorId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBasicAcceleratorIpEndpointRelation) AttrEndpointId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEndpointId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBasicAcceleratorIpEndpointRelation) Props() *BasicAcceleratorIpEndpointRelationProps {
	var returns *BasicAcceleratorIpEndpointRelationProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

