package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkecs/datasource/internal"
)

// Represents a `HpcCluster`.
type IHpcCluster interface {
	alicloudroscdkcore.IResource
	// Attribute Description: The description of the HPC cluster.
	AttrDescription() interface{}
	// Attribute HpcClusterId: The ID of cluster.
	AttrHpcClusterId() interface{}
	// Attribute HpcClusterName: The name of the HPC cluster.
	AttrHpcClusterName() interface{}
	Props() *HpcClusterProps
}

// The jsii proxy for IHpcCluster
type jsiiProxy_IHpcCluster struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IHpcCluster) AttrDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDescription",
		&returns,
	)
	return returns
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

func (j *jsiiProxy_IHpcCluster) AttrHpcClusterName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHpcClusterName",
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

