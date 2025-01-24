package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkemr/datasource/internal"
)

// Represents a `Cluster2`.
type ICluster2 interface {
	alicloudroscdkcore.IResource
	// Attribute ClusterIds: The list of the cluster id.
	AttrClusterIds() interface{}
	// Attribute Clusters: The detail of the cluster.
	AttrClusters() interface{}
	Props() *Cluster2Props
}

// The jsii proxy for ICluster2
type jsiiProxy_ICluster2 struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ICluster2) AttrClusterIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrClusterIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICluster2) AttrClusters() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrClusters",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICluster2) Props() *Cluster2Props {
	var returns *Cluster2Props
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

