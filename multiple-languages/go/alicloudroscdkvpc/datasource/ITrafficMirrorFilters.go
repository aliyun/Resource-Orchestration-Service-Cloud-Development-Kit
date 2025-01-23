package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkvpc/datasource/internal"
)

// Represents a `TrafficMirrorFilters`.
type ITrafficMirrorFilters interface {
	alicloudroscdkcore.IResource
	// Attribute TrafficMirrorFilterIds: The list of traffic mirror filter IDs.
	AttrTrafficMirrorFilterIds() interface{}
	// Attribute TrafficMirrorFilters: The list of traffic mirror filters.
	AttrTrafficMirrorFilters() interface{}
	Props() *TrafficMirrorFiltersProps
}

// The jsii proxy for ITrafficMirrorFilters
type jsiiProxy_ITrafficMirrorFilters struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ITrafficMirrorFilters) AttrTrafficMirrorFilterIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTrafficMirrorFilterIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITrafficMirrorFilters) AttrTrafficMirrorFilters() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTrafficMirrorFilters",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITrafficMirrorFilters) Props() *TrafficMirrorFiltersProps {
	var returns *TrafficMirrorFiltersProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

