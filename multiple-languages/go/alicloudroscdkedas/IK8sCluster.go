package alicloudroscdkedas

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkedas/internal"
)

// Represents a `K8sCluster`.
type IK8sCluster interface {
	alicloudroscdkcore.IResource
	// Attribute ClusterId: The ID of the cluster.
	AttrClusterId() interface{}
	// Attribute ClusterName: The name of the cluster.
	AttrClusterName() interface{}
	// Attribute ClusterType: The type of the cluster: 2: ECS cluster 5: Container Service K8s cluster or Serverless K8s cluster.
	AttrClusterType() interface{}
	// Attribute CsClusterId: The ID of the K8s cluster.
	AttrCsClusterId() interface{}
	// Attribute NetworkMode: Network node: 1: Classic network 2: VPC.
	AttrNetworkMode() interface{}
	// Attribute NodeNum: Number of nodes.
	AttrNodeNum() interface{}
	// Attribute SubNetCidr: Sub net CIDR.
	AttrSubNetCidr() interface{}
	// Attribute VpcId: The ID of the cluster.
	AttrVpcId() interface{}
	// Attribute VswitchId: The ID of the cluster.
	AttrVswitchId() interface{}
	Props() *K8sClusterProps
}

// The jsii proxy for IK8sCluster
type jsiiProxy_IK8sCluster struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IK8sCluster) AttrClusterId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrClusterId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IK8sCluster) AttrClusterName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrClusterName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IK8sCluster) AttrClusterType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrClusterType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IK8sCluster) AttrCsClusterId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCsClusterId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IK8sCluster) AttrNetworkMode() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNetworkMode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IK8sCluster) AttrNodeNum() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNodeNum",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IK8sCluster) AttrSubNetCidr() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSubNetCidr",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IK8sCluster) AttrVpcId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVpcId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IK8sCluster) AttrVswitchId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVswitchId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IK8sCluster) Props() *K8sClusterProps {
	var returns *K8sClusterProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

