package alicloudroscdksls

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdksls/internal"
)

// Represents a `MetricStore`.
type IMetricStore interface {
	alicloudroscdkcore.IResource
	// Attribute LogstoreName: Metric store name.
	AttrLogstoreName() interface{}
	Props() *MetricStoreProps
}

// The jsii proxy for IMetricStore
type jsiiProxy_IMetricStore struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IMetricStore) AttrLogstoreName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLogstoreName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IMetricStore) Props() *MetricStoreProps {
	var returns *MetricStoreProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

