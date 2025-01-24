package alicloudroscdkcs

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcs/internal"
)

// Represents a `ManagedEdgeKubernetesCluster`.
type IManagedEdgeKubernetesCluster interface {
	alicloudroscdkcore.IResource
	// Attribute APIServerSLBId: The id of API server SLB.
	AttrApiServerSlbId() interface{}
	// Attribute ClusterId: Cluster instance ID.
	AttrClusterId() interface{}
	// Attribute DefaultUserKubeConfig: Default user kubernetes config which is used for configuring cluster credentials.
	AttrDefaultUserKubeConfig() interface{}
	// Attribute IngressSLBId: The id of ingress SLB.
	AttrIngressSlbId() interface{}
	// Attribute Nodes: The list of cluster nodes.
	AttrNodes() interface{}
	// Attribute PrivateUserKubConfig: Private user kubernetes config which is used for configuring cluster credentials.
	AttrPrivateUserKubConfig() interface{}
	// Attribute ScalingConfigurationId: Scaling configuration id.
	AttrScalingConfigurationId() interface{}
	// Attribute ScalingGroupId: Scaling group id.
	AttrScalingGroupId() interface{}
	// Attribute ScalingRuleId: Scaling rule id.
	AttrScalingRuleId() interface{}
	// Attribute TaskId: Task ID.
	//
	// Automatically assigned by the system, the user queries the task status.
	AttrTaskId() interface{}
	// Attribute WorkerRamRoleName: Worker ram role name.
	AttrWorkerRamRoleName() interface{}
	Props() *ManagedEdgeKubernetesClusterProps
}

// The jsii proxy for IManagedEdgeKubernetesCluster
type jsiiProxy_IManagedEdgeKubernetesCluster struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IManagedEdgeKubernetesCluster) AttrApiServerSlbId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrApiServerSlbId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IManagedEdgeKubernetesCluster) AttrClusterId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrClusterId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IManagedEdgeKubernetesCluster) AttrDefaultUserKubeConfig() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDefaultUserKubeConfig",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IManagedEdgeKubernetesCluster) AttrIngressSlbId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIngressSlbId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IManagedEdgeKubernetesCluster) AttrNodes() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNodes",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IManagedEdgeKubernetesCluster) AttrPrivateUserKubConfig() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPrivateUserKubConfig",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IManagedEdgeKubernetesCluster) AttrScalingConfigurationId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrScalingConfigurationId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IManagedEdgeKubernetesCluster) AttrScalingGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrScalingGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IManagedEdgeKubernetesCluster) AttrScalingRuleId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrScalingRuleId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IManagedEdgeKubernetesCluster) AttrTaskId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTaskId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IManagedEdgeKubernetesCluster) AttrWorkerRamRoleName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrWorkerRamRoleName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IManagedEdgeKubernetesCluster) Props() *ManagedEdgeKubernetesClusterProps {
	var returns *ManagedEdgeKubernetesClusterProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

