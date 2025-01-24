package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkecs/datasource/internal"
)

// Represents a `DedicatedHostClusters`.
type IDedicatedHostClusters interface {
	alicloudroscdkcore.IResource
	// Attribute DedicatedHostClusterIds: The list of dedicated host cluster IDs.
	AttrDedicatedHostClusterIds() interface{}
	// Attribute DedicatedHostClusters: The list of dedicated host clusters.
	AttrDedicatedHostClusters() interface{}
	Props() *DedicatedHostClustersProps
}

// The jsii proxy for IDedicatedHostClusters
type jsiiProxy_IDedicatedHostClusters struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IDedicatedHostClusters) AttrDedicatedHostClusterIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDedicatedHostClusterIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDedicatedHostClusters) AttrDedicatedHostClusters() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDedicatedHostClusters",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDedicatedHostClusters) Props() *DedicatedHostClustersProps {
	var returns *DedicatedHostClustersProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

