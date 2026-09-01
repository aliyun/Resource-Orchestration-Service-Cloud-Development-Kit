package alicloudroscdkemr

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkemr/internal"
)

// Represents a `LivyCompute`.
type ILivyCompute interface {
	alicloudroscdkcore.IResource
	// Attribute Endpoint: The public endpoint of the Livy Gateway.
	AttrEndpoint() interface{}
	// Attribute EndpointInner: The internal endpoint of the Livy Gateway.
	AttrEndpointInner() interface{}
	// Attribute LivyComputeId: The ID of the Livy Gateway.
	AttrLivyComputeId() interface{}
	// Attribute Status: The status of the Livy Gateway.
	AttrStatus() interface{}
	Props() *LivyComputeProps
}

// The jsii proxy for ILivyCompute
type jsiiProxy_ILivyCompute struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ILivyCompute) AttrEndpoint() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEndpoint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILivyCompute) AttrEndpointInner() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEndpointInner",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILivyCompute) AttrLivyComputeId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLivyComputeId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILivyCompute) AttrStatus() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrStatus",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILivyCompute) Props() *LivyComputeProps {
	var returns *LivyComputeProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

