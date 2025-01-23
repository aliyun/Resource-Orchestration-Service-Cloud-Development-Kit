package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkecs/datasource/internal"
)

// Represents a `HpcClusters`.
type IHpcClusters interface {
	alicloudroscdkcore.IResource
	// Attribute HpcClusterIds: the list of hpc cluster ids.
	AttrHpcClusterIds() interface{}
	// Attribute HpcClusters: The list of hpc clusters.
	AttrHpcClusters() interface{}
	Props() *HpcClustersProps
}

// The jsii proxy for IHpcClusters
type jsiiProxy_IHpcClusters struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IHpcClusters) AttrHpcClusterIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHpcClusterIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHpcClusters) AttrHpcClusters() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHpcClusters",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHpcClusters) Props() *HpcClustersProps {
	var returns *HpcClustersProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

