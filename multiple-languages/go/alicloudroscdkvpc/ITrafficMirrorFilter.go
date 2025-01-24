package alicloudroscdkvpc

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkvpc/internal"
)

// Represents a `TrafficMirrorFilter`.
type ITrafficMirrorFilter interface {
	alicloudroscdkcore.IResource
	// Attribute EgressRules: Egress rules.
	AttrEgressRules() interface{}
	// Attribute IngressRules: Ingress rules.
	AttrIngressRules() interface{}
	// Attribute TrafficMirrorFilterDescription: The description of the filter.
	AttrTrafficMirrorFilterDescription() interface{}
	// Attribute TrafficMirrorFilterId: The ID of the filter.
	AttrTrafficMirrorFilterId() interface{}
	// Attribute TrafficMirrorFilterName: The name of the filter.
	AttrTrafficMirrorFilterName() interface{}
	Props() *TrafficMirrorFilterProps
}

// The jsii proxy for ITrafficMirrorFilter
type jsiiProxy_ITrafficMirrorFilter struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ITrafficMirrorFilter) AttrEgressRules() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEgressRules",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITrafficMirrorFilter) AttrIngressRules() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIngressRules",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITrafficMirrorFilter) AttrTrafficMirrorFilterDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTrafficMirrorFilterDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITrafficMirrorFilter) AttrTrafficMirrorFilterId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTrafficMirrorFilterId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITrafficMirrorFilter) AttrTrafficMirrorFilterName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTrafficMirrorFilterName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITrafficMirrorFilter) Props() *TrafficMirrorFilterProps {
	var returns *TrafficMirrorFilterProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

