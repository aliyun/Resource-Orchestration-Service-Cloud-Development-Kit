package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcs/datasource/internal"
)

// Represents a `KubernetesClusters`.
type IKubernetesClusters interface {
	alicloudroscdkcore.IResource
	// Attribute ClusterIds: The list of cluster IDs.
	AttrClusterIds() interface{}
	// Attribute Clusters: The list of clusters.
	AttrClusters() interface{}
	Props() *KubernetesClustersProps
}

// The jsii proxy for IKubernetesClusters
type jsiiProxy_IKubernetesClusters struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IKubernetesClusters) AttrClusterIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrClusterIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IKubernetesClusters) AttrClusters() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrClusters",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IKubernetesClusters) Props() *KubernetesClustersProps {
	var returns *KubernetesClustersProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

