package alicloudroscdkcs

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcs/internal"
)

// Represents a `ClusterNodePool`.
type IClusterNodePool interface {
	alicloudroscdkcore.IResource
	// Attribute NodePoolId: Cluster node pool ID.
	AttrNodePoolId() interface{}
	Props() *ClusterNodePoolProps
}

// The jsii proxy for IClusterNodePool
type jsiiProxy_IClusterNodePool struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IClusterNodePool) AttrNodePoolId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNodePoolId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IClusterNodePool) Props() *ClusterNodePoolProps {
	var returns *ClusterNodePoolProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

