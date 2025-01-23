package alicloudroscdkcs

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcs/internal"
)

// Represents a `ManagedKubernetesCluster`.
type IManagedKubernetesCluster interface {
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
	Props() *ManagedKubernetesClusterProps
}

// The jsii proxy for IManagedKubernetesCluster
type jsiiProxy_IManagedKubernetesCluster struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IManagedKubernetesCluster) AttrApiServerSlbId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrApiServerSlbId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IManagedKubernetesCluster) AttrClusterId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrClusterId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IManagedKubernetesCluster) AttrDefaultUserKubeConfig() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDefaultUserKubeConfig",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IManagedKubernetesCluster) AttrIngressSlbId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIngressSlbId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IManagedKubernetesCluster) AttrNodes() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNodes",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IManagedKubernetesCluster) AttrPrivateUserKubConfig() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPrivateUserKubConfig",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IManagedKubernetesCluster) AttrScalingConfigurationId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrScalingConfigurationId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IManagedKubernetesCluster) AttrScalingGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrScalingGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IManagedKubernetesCluster) AttrScalingRuleId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrScalingRuleId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IManagedKubernetesCluster) AttrTaskId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTaskId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IManagedKubernetesCluster) AttrWorkerRamRoleName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrWorkerRamRoleName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IManagedKubernetesCluster) Props() *ManagedKubernetesClusterProps {
	var returns *ManagedKubernetesClusterProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

