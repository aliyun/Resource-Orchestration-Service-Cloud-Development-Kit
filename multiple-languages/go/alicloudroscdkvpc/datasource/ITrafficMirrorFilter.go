package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkvpc/datasource/internal"
)

// Represents a `TrafficMirrorFilter`.
type ITrafficMirrorFilter interface {
	alicloudroscdkcore.IResource
	// Attribute EgressRules: EgressRules.
	AttrEgressRules() interface{}
	// Attribute IngressRules: IngressRules.
	AttrIngressRules() interface{}
	// Attribute TrafficMirrorFilterDescription: The description of the TrafficMirrorFilter.
	AttrTrafficMirrorFilterDescription() interface{}
	// Attribute TrafficMirrorFilterId: The first ID of the resource.
	AttrTrafficMirrorFilterId() interface{}
	// Attribute TrafficMirrorFilterName: The name of the TrafficMirrorFilter.
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

