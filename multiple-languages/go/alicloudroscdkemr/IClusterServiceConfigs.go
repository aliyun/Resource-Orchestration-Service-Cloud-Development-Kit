package alicloudroscdkemr

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkemr/internal"
)

// Represents a `ClusterServiceConfigs`.
type IClusterServiceConfigs interface {
	alicloudroscdkcore.IResource
	// Attribute ClusterId: The ID of the cluster.
	AttrClusterId() interface{}
	Props() *ClusterServiceConfigsProps
}

// The jsii proxy for IClusterServiceConfigs
type jsiiProxy_IClusterServiceConfigs struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IClusterServiceConfigs) AttrClusterId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrClusterId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IClusterServiceConfigs) Props() *ClusterServiceConfigsProps {
	var returns *ClusterServiceConfigsProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

