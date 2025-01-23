package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkedas/datasource/internal"
)

// Represents a `Clusters`.
type IClusters interface {
	alicloudroscdkcore.IResource
	// Attribute ClusterIds: The list of cluster IDs.
	AttrClusterIds() interface{}
	// Attribute Clusters: The list of clusters.
	AttrClusters() interface{}
	Props() *ClustersProps
}

// The jsii proxy for IClusters
type jsiiProxy_IClusters struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IClusters) AttrClusterIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrClusterIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IClusters) AttrClusters() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrClusters",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IClusters) Props() *ClustersProps {
	var returns *ClustersProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

