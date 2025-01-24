package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcs/datasource/internal"
)

// Represents a `ClusterNodePools`.
type IClusterNodePools interface {
	alicloudroscdkcore.IResource
	// Attribute NodePoolIds: The list of node_pool IDs.
	AttrNodePoolIds() interface{}
	// Attribute NodePools: The list of node_pools.
	AttrNodePools() interface{}
	Props() *ClusterNodePoolsProps
}

// The jsii proxy for IClusterNodePools
type jsiiProxy_IClusterNodePools struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IClusterNodePools) AttrNodePoolIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNodePoolIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IClusterNodePools) AttrNodePools() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNodePools",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IClusterNodePools) Props() *ClusterNodePoolsProps {
	var returns *ClusterNodePoolsProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

