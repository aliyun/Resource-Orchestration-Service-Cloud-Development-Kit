package alicloudroscdkecs

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkecs/internal"
)

// Represents a `HpcCluster`.
type IHpcCluster interface {
	alicloudroscdkcore.IResource
	// Attribute HpcClusterId: The ID of the HPC cluster.
	AttrHpcClusterId() interface{}
	// Attribute Name: The name of the HPC cluster.
	AttrName() interface{}
	Props() *HpcClusterProps
}

// The jsii proxy for IHpcCluster
type jsiiProxy_IHpcCluster struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IHpcCluster) AttrHpcClusterId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHpcClusterId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHpcCluster) AttrName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHpcCluster) Props() *HpcClusterProps {
	var returns *HpcClusterProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

