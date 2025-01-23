package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcs/datasource/internal"
)

// Represents a `KubernetesCluster`.
type IKubernetesCluster interface {
	alicloudroscdkcore.IResource
	// Attribute ClusterId: Cluster instance ID.
	AttrClusterId() interface{}
	// Attribute ClusterSpec: The type of the managed Kubernetes cluster.
	//
	// This parameter is returned for a managed Kubernetes cluster. Valid values:
	// - ack.pro.small: professional managed Kubernetes cluster.
	// - ack.standard: standard managed Kubernetes cluster.
	AttrClusterSpec() interface{}
	// Attribute ClusterType: The type of the cluster.
	//
	// Valid values:
	// - Kubernetes: dedicated Kubernetes cluster
	// - ManagedKubernetes: managed Kubernetes cluster
	// - Ask: ASK cluster
	// - ExternalKubernetes: registered external Kubernetes cluster.
	AttrClusterType() interface{}
	// Attribute Created: The time when the cluster was created.
	AttrCreated() interface{}
	// Attribute CurrentVersion: The current Kubernetes version of the cluster.
	//
	// For more information about the Kubernetes versions supported by ACK, see Release notes for Kubernetes versions.
	AttrCurrentVersion() interface{}
	// Attribute DeletionProtection: Indicates whether deletion protection is enabled.
	//
	// If deletion protection is enabled, the cluster cannot be deleted in the ACK console or by calling the API. Valid values:
	// - true: Deletion protection is enabled. You cannot delete the cluster in the ACK console or by calling the API.
	// - false: Deletion protection is not enabled. You can delete the cluster in the ACK console or by calling the API.
	AttrDeletionProtection() interface{}
	// Attribute DockerVersion: The Docker version that is used by the cluster.
	AttrDockerVersion() interface{}
	// Attribute ExternalLoadbalancerId: The ID of the Server Load Balancer (SLB) instance that is used for the Ingress of the cluster.
	AttrExternalLoadbalancerId() interface{}
	// Attribute InitVersion: The Kubernetes version that is initially used by the cluster.
	AttrInitVersion() interface{}
	// Attribute MaintenanceWindow: The maintenance window of the cluster.
	//
	// This feature is available in only professional managed Kubernetes clusters.
	AttrMaintenanceWindow() interface{}
	// Attribute MasterUrl: The address of the cluster.
	//
	// It includes an internal endpoint and a public endpoint.
	AttrMasterUrl() interface{}
	// Attribute MetaData: The metadata of the cluster.
	AttrMetaData() interface{}
	// Attribute Name: The name of the cluster.
	//
	// The name must be 1 to 63 characters in length, and can contain digits, letters, and hyphens (-). It cannot start with a hyphen (-).
	AttrName() interface{}
	// Attribute NetworkMode: The network mode of the cluster.
	//
	// Valid values:
	// - classic: the classic network
	// - vpc: virtual private cloud (VPC)
	// - overlay: overlay network
	// - calico: network powered by Calico
	// Default value: vpc.
	AttrNetworkMode() interface{}
	// Attribute NextVersion: The Kubernetes version to which the cluster can be upgraded.
	AttrNextVersion() interface{}
	// Attribute Parameters: A collection of cluster ROS parameters.
	AttrParameters() interface{}
	// Attribute PrivateZone: Indicates whether Alibaba Cloud DNS PrivateZone is enabled.
	//
	// - true: indicates that Alibaba Cloud DNS PrivateZone is enabled.- false: indicates that Alibaba Cloud DNS PrivateZone is not enabled.
	AttrPrivateZone() interface{}
	// Attribute Profile: Indicates the scenario in which the cluster is used.
	//
	// Valid values:
	// - Default: indicates that the cluster is used in non-edge computing scenarios.
	// - Edge: indicates that the ACK cluster is used in edge computing scenarios.
	AttrProfile() interface{}
	// Attribute RegionId: The ID of the region where the cluster is deployed.
	AttrRegionId() interface{}
	// Attribute ResourceGroupId: The ID of the resource group to which the cluster belongs.
	AttrResourceGroupId() interface{}
	// Attribute SecurityGroupId: The ID of the security group to which the instances of the cluster belong.
	AttrSecurityGroupId() interface{}
	// Attribute ServiceCidr: The cluster service cidr.
	AttrServiceCidr() interface{}
	// Attribute Size: The number of nodes in the cluster.
	//
	// Master nodes and worker nodes are included.
	AttrSize() interface{}
	// Attribute State: The state of the cluster.
	//
	// Valid values:
	// - initial: The cluster is being created.
	// - failed: The cluster failed to be created.
	// - running: The cluster is running.
	// - updating: The cluster is being upgraded.
	// - updating_failed: The cluster failed to be upgraded.
	// - scaling: The cluster is being scaled.
	// - waiting: The registered cluster is waiting for connecting.
	// - disconnected: The registeredcluster is disconnected.
	// - stopped: The cluster is stopped.
	// - deleting: The cluster is being deleted.
	// - deleted: The cluster is deleted.
	// - delete_failed: The cluster failed to be deleted.
	AttrState() interface{}
	// Attribute SubnetCidr: The pod CIDR block.
	//
	// It must be a valid and private CIDR block, and must be one of the following CIDR blocks or their subnets:
	// - 10.0.0.0/8
	// - 172.16-31.0.0/12-16
	// - 192.168.0.0/16
	// The pod CIDR block cannot overlap with that of the VPC or those of the ACK clusters that are deployed in the VPC. For more information about the network segmentation of ACK clusters, see Plan CIDR blocks for ACK clusters in a VPC.
	AttrSubnetCidr() interface{}
	// Attribute Tags: The labels of the cluster.
	AttrTags() interface{}
	// Attribute Updated: The time when the cluster was updated.
	AttrUpdated() interface{}
	// Attribute VpcId: The ID of the VPC where the cluster is deployed.
	//
	// This parameter is required when you create an ACK cluster.
	AttrVpcId() interface{}
	// Attribute VSwitchId: The IDs of the vSwitches.
	//
	// You can select one to three vSwitches when you create an ACK cluster. vSwitches in different zones are recommended to ensure high availability.
	AttrVSwitchId() interface{}
	// Attribute VSwitchIds: The list of cluster control plane VSwitch ID.
	AttrVSwitchIds() interface{}
	// Attribute WorkerRamRoleName: The name of the worker RAM role.
	//
	// The RAM role is assigned to the worker nodes of the cluster and allows the worker nodes to manage Elastic Compute Service (ECS) instances.
	AttrWorkerRamRoleName() interface{}
	// Attribute ZoneId: The ID of the zone where the cluster is deployed.
	AttrZoneId() interface{}
	Props() *KubernetesClusterProps
}

// The jsii proxy for IKubernetesCluster
type jsiiProxy_IKubernetesCluster struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IKubernetesCluster) AttrClusterId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrClusterId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IKubernetesCluster) AttrClusterSpec() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrClusterSpec",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IKubernetesCluster) AttrClusterType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrClusterType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IKubernetesCluster) AttrCreated() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreated",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IKubernetesCluster) AttrCurrentVersion() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCurrentVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IKubernetesCluster) AttrDeletionProtection() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDeletionProtection",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IKubernetesCluster) AttrDockerVersion() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDockerVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IKubernetesCluster) AttrExternalLoadbalancerId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrExternalLoadbalancerId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IKubernetesCluster) AttrInitVersion() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInitVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IKubernetesCluster) AttrMaintenanceWindow() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMaintenanceWindow",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IKubernetesCluster) AttrMasterUrl() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMasterUrl",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IKubernetesCluster) AttrMetaData() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMetaData",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IKubernetesCluster) AttrName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IKubernetesCluster) AttrNetworkMode() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNetworkMode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IKubernetesCluster) AttrNextVersion() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNextVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IKubernetesCluster) AttrParameters() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrParameters",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IKubernetesCluster) AttrPrivateZone() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPrivateZone",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IKubernetesCluster) AttrProfile() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrProfile",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IKubernetesCluster) AttrRegionId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRegionId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IKubernetesCluster) AttrResourceGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IKubernetesCluster) AttrSecurityGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSecurityGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IKubernetesCluster) AttrServiceCidr() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrServiceCidr",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IKubernetesCluster) AttrSize() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSize",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IKubernetesCluster) AttrState() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrState",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IKubernetesCluster) AttrSubnetCidr() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSubnetCidr",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IKubernetesCluster) AttrTags() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTags",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IKubernetesCluster) AttrUpdated() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrUpdated",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IKubernetesCluster) AttrVpcId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVpcId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IKubernetesCluster) AttrVSwitchId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVSwitchId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IKubernetesCluster) AttrVSwitchIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVSwitchIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IKubernetesCluster) AttrWorkerRamRoleName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrWorkerRamRoleName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IKubernetesCluster) AttrZoneId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrZoneId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IKubernetesCluster) Props() *KubernetesClusterProps {
	var returns *KubernetesClusterProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

