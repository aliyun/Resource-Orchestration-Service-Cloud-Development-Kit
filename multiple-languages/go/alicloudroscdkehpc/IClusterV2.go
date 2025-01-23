package alicloudroscdkehpc

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkehpc/internal"
)

// Represents a `ClusterV2`.
type IClusterV2 interface {
	alicloudroscdkcore.IResource
	// Attribute ClusterId: Cluster Id.
	AttrClusterId() interface{}
	Props() *ClusterV2Props
}

// The jsii proxy for IClusterV2
type jsiiProxy_IClusterV2 struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IClusterV2) AttrClusterId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrClusterId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IClusterV2) Props() *ClusterV2Props {
	var returns *ClusterV2Props
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

