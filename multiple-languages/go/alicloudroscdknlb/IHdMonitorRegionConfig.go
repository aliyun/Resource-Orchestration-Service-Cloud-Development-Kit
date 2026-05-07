package alicloudroscdknlb

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdknlb/internal"
)

// Represents a `HdMonitorRegionConfig`.
type IHdMonitorRegionConfig interface {
	alicloudroscdkcore.IResource
	// Attribute LogProject: The name of the LogProject.
	AttrLogProject() interface{}
	// Attribute MetricStore: The name of the MetricStore.
	AttrMetricStore() interface{}
	Props() *HdMonitorRegionConfigProps
}

// The jsii proxy for IHdMonitorRegionConfig
type jsiiProxy_IHdMonitorRegionConfig struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IHdMonitorRegionConfig) AttrLogProject() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLogProject",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHdMonitorRegionConfig) AttrMetricStore() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMetricStore",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHdMonitorRegionConfig) Props() *HdMonitorRegionConfigProps {
	var returns *HdMonitorRegionConfigProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

