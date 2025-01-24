package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkebs/datasource/internal"
)

// Represents a `DedicatedBlockStorageClusters`.
type IDedicatedBlockStorageClusters interface {
	alicloudroscdkcore.IResource
	// Attribute DedicatedBlockStorageClusterIds: The list of dedicated block storage cluster IDs.
	AttrDedicatedBlockStorageClusterIds() interface{}
	// Attribute DedicatedBlockStorageClusters: The list of dedicated block storage clusters.
	AttrDedicatedBlockStorageClusters() interface{}
	Props() *DedicatedBlockStorageClustersProps
}

// The jsii proxy for IDedicatedBlockStorageClusters
type jsiiProxy_IDedicatedBlockStorageClusters struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IDedicatedBlockStorageClusters) AttrDedicatedBlockStorageClusterIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDedicatedBlockStorageClusterIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDedicatedBlockStorageClusters) AttrDedicatedBlockStorageClusters() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDedicatedBlockStorageClusters",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDedicatedBlockStorageClusters) Props() *DedicatedBlockStorageClustersProps {
	var returns *DedicatedBlockStorageClustersProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

