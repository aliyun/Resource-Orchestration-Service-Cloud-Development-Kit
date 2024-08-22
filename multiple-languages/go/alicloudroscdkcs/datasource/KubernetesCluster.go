package datasource

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkcs/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcs/datasource/internal"
	"github.com/aws/constructs-go/constructs/v3"
)

// This class encapsulates and extends the ROS resource type `DATASOURCE::CS::KubernetesCluster`, which is used to query the information about a Container Service for Kubernetes (ACK) cluster.
type KubernetesCluster interface {
	alicloudroscdkcore.Resource
	// Attribute ClusterId: Cluster instance ID.
	AttrClusterId() alicloudroscdkcore.IResolvable
	// Attribute ClusterSpec: The type of the managed Kubernetes cluster.
	//
	// This parameter is returned for a managed Kubernetes cluster. Valid values:
	// - ack.pro.small: professional managed Kubernetes cluster.
	// - ack.standard: standard managed Kubernetes cluster.
	AttrClusterSpec() alicloudroscdkcore.IResolvable
	// Attribute ClusterType: The type of the cluster.
	//
	// Valid values:
	// - Kubernetes: dedicated Kubernetes cluster
	// - ManagedKubernetes: managed Kubernetes cluster
	// - Ask: ASK cluster
	// - ExternalKubernetes: registered external Kubernetes cluster.
	AttrClusterType() alicloudroscdkcore.IResolvable
	// Attribute Created: The time when the cluster was created.
	AttrCreated() alicloudroscdkcore.IResolvable
	// Attribute CurrentVersion: The current Kubernetes version of the cluster.
	//
	// For more information about the Kubernetes versions supported by ACK, see Release notes for Kubernetes versions.
	AttrCurrentVersion() alicloudroscdkcore.IResolvable
	// Attribute DeletionProtection: Indicates whether deletion protection is enabled.
	//
	// If deletion protection is enabled, the cluster cannot be deleted in the ACK console or by calling the API. Valid values:
	// - true: Deletion protection is enabled. You cannot delete the cluster in the ACK console or by calling the API.
	// - false: Deletion protection is not enabled. You can delete the cluster in the ACK console or by calling the API.
	AttrDeletionProtection() alicloudroscdkcore.IResolvable
	// Attribute DockerVersion: The Docker version that is used by the cluster.
	AttrDockerVersion() alicloudroscdkcore.IResolvable
	// Attribute ExternalLoadbalancerId: The ID of the Server Load Balancer (SLB) instance that is used for the Ingress of the cluster.
	AttrExternalLoadbalancerId() alicloudroscdkcore.IResolvable
	// Attribute InitVersion: The Kubernetes version that is initially used by the cluster.
	AttrInitVersion() alicloudroscdkcore.IResolvable
	// Attribute MaintenanceWindow: The maintenance window of the cluster.
	//
	// This feature is available in only professional managed Kubernetes clusters.
	AttrMaintenanceWindow() alicloudroscdkcore.IResolvable
	// Attribute MasterUrl: The address of the cluster.
	//
	// It includes an internal endpoint and a public endpoint.
	AttrMasterUrl() alicloudroscdkcore.IResolvable
	// Attribute MetaData: The metadata of the cluster.
	AttrMetaData() alicloudroscdkcore.IResolvable
	// Attribute Name: The name of the cluster.
	//
	// The name must be 1 to 63 characters in length, and can contain digits, letters, and hyphens (-). It cannot start with a hyphen (-).
	AttrName() alicloudroscdkcore.IResolvable
	// Attribute NetworkMode: The network mode of the cluster.
	//
	// Valid values:
	// - classic: the classic network
	// - vpc: virtual private cloud (VPC)
	// - overlay: overlay network
	// - calico: network powered by Calico
	// Default value: vpc.
	AttrNetworkMode() alicloudroscdkcore.IResolvable
	// Attribute NextVersion: The Kubernetes version to which the cluster can be upgraded.
	AttrNextVersion() alicloudroscdkcore.IResolvable
	// Attribute Parameters: A collection of cluster ROS parameters.
	AttrParameters() alicloudroscdkcore.IResolvable
	// Attribute PrivateZone: Indicates whether Alibaba Cloud DNS PrivateZone is enabled.
	//
	// - true: indicates that Alibaba Cloud DNS PrivateZone is enabled.- false: indicates that Alibaba Cloud DNS PrivateZone is not enabled.
	AttrPrivateZone() alicloudroscdkcore.IResolvable
	// Attribute Profile: Indicates the scenario in which the cluster is used.
	//
	// Valid values:
	// - Default: indicates that the cluster is used in non-edge computing scenarios.
	// - Edge: indicates that the ACK cluster is used in edge computing scenarios.
	AttrProfile() alicloudroscdkcore.IResolvable
	// Attribute RegionId: The ID of the region where the cluster is deployed.
	AttrRegionId() alicloudroscdkcore.IResolvable
	// Attribute ResourceGroupId: The ID of the resource group to which the cluster belongs.
	AttrResourceGroupId() alicloudroscdkcore.IResolvable
	// Attribute SecurityGroupId: The ID of the security group to which the instances of the cluster belong.
	AttrSecurityGroupId() alicloudroscdkcore.IResolvable
	// Attribute Size: The number of nodes in the cluster.
	//
	// Master nodes and worker nodes are included.
	AttrSize() alicloudroscdkcore.IResolvable
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
	AttrState() alicloudroscdkcore.IResolvable
	// Attribute SubnetCidr: The pod CIDR block.
	//
	// It must be a valid and private CIDR block, and must be one of the following CIDR blocks or their subnets:
	// - 10.0.0.0/8
	// - 172.16-31.0.0/12-16
	// - 192.168.0.0/16
	// The pod CIDR block cannot overlap with that of the VPC or those of the ACK clusters that are deployed in the VPC. For more information about the network segmentation of ACK clusters, see Plan CIDR blocks for ACK clusters in a VPC.
	AttrSubnetCidr() alicloudroscdkcore.IResolvable
	// Attribute Tags: The labels of the cluster.
	AttrTags() alicloudroscdkcore.IResolvable
	// Attribute Updated: The time when the cluster was updated.
	AttrUpdated() alicloudroscdkcore.IResolvable
	// Attribute VpcId: The ID of the VPC where the cluster is deployed.
	//
	// This parameter is required when you create an ACK cluster.
	AttrVpcId() alicloudroscdkcore.IResolvable
	// Attribute VSwitchId: The IDs of the vSwitches.
	//
	// You can select one to three vSwitches when you create an ACK cluster. vSwitches in different zones are recommended to ensure high availability.
	AttrVSwitchId() alicloudroscdkcore.IResolvable
	// Attribute WorkerRamRoleName: The name of the worker RAM role.
	//
	// The RAM role is assigned to the worker nodes of the cluster and allows the worker nodes to manage Elastic Compute Service (ECS) instances.
	AttrWorkerRamRoleName() alicloudroscdkcore.IResolvable
	// Attribute ZoneId: The ID of the zone where the cluster is deployed.
	AttrZoneId() alicloudroscdkcore.IResolvable
	EnableResourcePropertyConstraint() *bool
	SetEnableResourcePropertyConstraint(val *bool)
	Id() *string
	SetId(val *string)
	// The construct tree node associated with this construct.
	Node() alicloudroscdkcore.ConstructNode
	// Returns a string-encoded token that resolves to the physical name that should be passed to the ROS resource.
	//
	// This value will resolve to one of the following:
	// - a concrete value (e.g. `"my-awesome-bucket"`)
	// - `undefined`, when a name should be generated by ROS
	// - a concrete name generated automatically during synthesis, in
	//    cross-environment scenarios.
	// Experimental.
	PhysicalName() *string
	Props() *KubernetesClusterProps
	SetProps(val *KubernetesClusterProps)
	Ref() *string
	Resource() alicloudroscdkcore.RosResource
	SetResource(val alicloudroscdkcore.RosResource)
	Scope() alicloudroscdkcore.Construct
	SetScope(val alicloudroscdkcore.Construct)
	// The stack in which this resource is defined.
	Stack() alicloudroscdkcore.Stack
	AddCondition(condition alicloudroscdkcore.RosCondition)
	AddCount(count interface{})
	AddDependency(resource alicloudroscdkcore.Resource)
	AddResourceDesc(desc *string)
	ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy)
	GeneratePhysicalName() *string
	GetAtt(name *string) alicloudroscdkcore.IResolvable
	// Perform final modifications before synthesis.
	//
	// This method can be implemented by derived constructs in order to perform
	// final changes before synthesis. prepare() will be called after child
	// constructs have been prepared.
	//
	// This is an advanced framework feature. Only use this if you
	// understand the implications.
	OnPrepare()
	// Allows this construct to emit artifacts into the cloud assembly during synthesis.
	//
	// This method is usually implemented by framework-level constructs such as `Stack` and `Asset`
	// as they participate in synthesizing the cloud assembly.
	OnSynthesize(session constructs.ISynthesisSession)
	// Validate the current construct.
	//
	// This method can be implemented by derived constructs in order to perform
	// validation logic. It is called on all constructs before synthesis.
	//
	// Returns: An array of validation error messages, or an empty array if the construct is valid.
	OnValidate() *[]*string
	// Perform final modifications before synthesis.
	//
	// This method can be implemented by derived constructs in order to perform
	// final changes before synthesis. prepare() will be called after child
	// constructs have been prepared.
	//
	// This is an advanced framework feature. Only use this if you
	// understand the implications.
	Prepare()
	SetMetadata(key *string, value interface{})
	// Allows this construct to emit artifacts into the cloud assembly during synthesis.
	//
	// This method is usually implemented by framework-level constructs such as `Stack` and `Asset`
	// as they participate in synthesizing the cloud assembly.
	Synthesize(session alicloudroscdkcore.ISynthesisSession)
	// Returns a string representation of this construct.
	ToString() *string
	// Validate the current construct.
	//
	// This method can be implemented by derived constructs in order to perform
	// validation logic. It is called on all constructs before synthesis.
	//
	// Returns: An array of validation error messages, or an empty array if the construct is valid.
	Validate() *[]*string
}

// The jsii proxy struct for KubernetesCluster
type jsiiProxy_KubernetesCluster struct {
	internal.Type__alicloudroscdkcoreResource
}

func (j *jsiiProxy_KubernetesCluster) AttrClusterId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrClusterId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_KubernetesCluster) AttrClusterSpec() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrClusterSpec",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_KubernetesCluster) AttrClusterType() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrClusterType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_KubernetesCluster) AttrCreated() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrCreated",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_KubernetesCluster) AttrCurrentVersion() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrCurrentVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_KubernetesCluster) AttrDeletionProtection() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDeletionProtection",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_KubernetesCluster) AttrDockerVersion() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDockerVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_KubernetesCluster) AttrExternalLoadbalancerId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrExternalLoadbalancerId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_KubernetesCluster) AttrInitVersion() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrInitVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_KubernetesCluster) AttrMaintenanceWindow() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrMaintenanceWindow",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_KubernetesCluster) AttrMasterUrl() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrMasterUrl",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_KubernetesCluster) AttrMetaData() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrMetaData",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_KubernetesCluster) AttrName() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_KubernetesCluster) AttrNetworkMode() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrNetworkMode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_KubernetesCluster) AttrNextVersion() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrNextVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_KubernetesCluster) AttrParameters() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrParameters",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_KubernetesCluster) AttrPrivateZone() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrPrivateZone",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_KubernetesCluster) AttrProfile() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrProfile",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_KubernetesCluster) AttrRegionId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrRegionId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_KubernetesCluster) AttrResourceGroupId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrResourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_KubernetesCluster) AttrSecurityGroupId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrSecurityGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_KubernetesCluster) AttrSize() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrSize",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_KubernetesCluster) AttrState() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrState",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_KubernetesCluster) AttrSubnetCidr() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrSubnetCidr",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_KubernetesCluster) AttrTags() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrTags",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_KubernetesCluster) AttrUpdated() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrUpdated",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_KubernetesCluster) AttrVpcId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrVpcId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_KubernetesCluster) AttrVSwitchId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrVSwitchId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_KubernetesCluster) AttrWorkerRamRoleName() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrWorkerRamRoleName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_KubernetesCluster) AttrZoneId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrZoneId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_KubernetesCluster) EnableResourcePropertyConstraint() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"enableResourcePropertyConstraint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_KubernetesCluster) Id() *string {
	var returns *string
	_jsii_.Get(
		j,
		"id",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_KubernetesCluster) Node() alicloudroscdkcore.ConstructNode {
	var returns alicloudroscdkcore.ConstructNode
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_KubernetesCluster) PhysicalName() *string {
	var returns *string
	_jsii_.Get(
		j,
		"physicalName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_KubernetesCluster) Props() *KubernetesClusterProps {
	var returns *KubernetesClusterProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_KubernetesCluster) Ref() *string {
	var returns *string
	_jsii_.Get(
		j,
		"ref",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_KubernetesCluster) Resource() alicloudroscdkcore.RosResource {
	var returns alicloudroscdkcore.RosResource
	_jsii_.Get(
		j,
		"resource",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_KubernetesCluster) Scope() alicloudroscdkcore.Construct {
	var returns alicloudroscdkcore.Construct
	_jsii_.Get(
		j,
		"scope",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_KubernetesCluster) Stack() alicloudroscdkcore.Stack {
	var returns alicloudroscdkcore.Stack
	_jsii_.Get(
		j,
		"stack",
		&returns,
	)
	return returns
}


// Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
func NewKubernetesCluster(scope alicloudroscdkcore.Construct, id *string, props *KubernetesClusterProps, enableResourcePropertyConstraint *bool) KubernetesCluster {
	_init_.Initialize()

	if err := validateNewKubernetesClusterParameters(scope, id, props); err != nil {
		panic(err)
	}
	j := jsiiProxy_KubernetesCluster{}

	_jsii_.Create(
		"@alicloud/ros-cdk-cs.datasource.KubernetesCluster",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		&j,
	)

	return &j
}

// Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
func NewKubernetesCluster_Override(k KubernetesCluster, scope alicloudroscdkcore.Construct, id *string, props *KubernetesClusterProps, enableResourcePropertyConstraint *bool) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-cs.datasource.KubernetesCluster",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		k,
	)
}

func (j *jsiiProxy_KubernetesCluster)SetEnableResourcePropertyConstraint(val *bool) {
	if err := j.validateSetEnableResourcePropertyConstraintParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableResourcePropertyConstraint",
		val,
	)
}

func (j *jsiiProxy_KubernetesCluster)SetId(val *string) {
	if err := j.validateSetIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"id",
		val,
	)
}

func (j *jsiiProxy_KubernetesCluster)SetProps(val *KubernetesClusterProps) {
	if err := j.validateSetPropsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"props",
		val,
	)
}

func (j *jsiiProxy_KubernetesCluster)SetResource(val alicloudroscdkcore.RosResource) {
	_jsii_.Set(
		j,
		"resource",
		val,
	)
}

func (j *jsiiProxy_KubernetesCluster)SetScope(val alicloudroscdkcore.Construct) {
	if err := j.validateSetScopeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"scope",
		val,
	)
}

// Return whether the given object is a Construct.
func KubernetesCluster_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateKubernetesCluster_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-cs.datasource.KubernetesCluster",
		"isConstruct",
		[]interface{}{x},
		&returns,
	)

	return returns
}

func (k *jsiiProxy_KubernetesCluster) AddCondition(condition alicloudroscdkcore.RosCondition) {
	if err := k.validateAddConditionParameters(condition); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		k,
		"addCondition",
		[]interface{}{condition},
	)
}

func (k *jsiiProxy_KubernetesCluster) AddCount(count interface{}) {
	if err := k.validateAddCountParameters(count); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		k,
		"addCount",
		[]interface{}{count},
	)
}

func (k *jsiiProxy_KubernetesCluster) AddDependency(resource alicloudroscdkcore.Resource) {
	if err := k.validateAddDependencyParameters(resource); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		k,
		"addDependency",
		[]interface{}{resource},
	)
}

func (k *jsiiProxy_KubernetesCluster) AddResourceDesc(desc *string) {
	if err := k.validateAddResourceDescParameters(desc); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		k,
		"addResourceDesc",
		[]interface{}{desc},
	)
}

func (k *jsiiProxy_KubernetesCluster) ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy) {
	if err := k.validateApplyRemovalPolicyParameters(policy); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		k,
		"applyRemovalPolicy",
		[]interface{}{policy},
	)
}

func (k *jsiiProxy_KubernetesCluster) GeneratePhysicalName() *string {
	var returns *string

	_jsii_.Invoke(
		k,
		"generatePhysicalName",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (k *jsiiProxy_KubernetesCluster) GetAtt(name *string) alicloudroscdkcore.IResolvable {
	if err := k.validateGetAttParameters(name); err != nil {
		panic(err)
	}
	var returns alicloudroscdkcore.IResolvable

	_jsii_.Invoke(
		k,
		"getAtt",
		[]interface{}{name},
		&returns,
	)

	return returns
}

func (k *jsiiProxy_KubernetesCluster) OnPrepare() {
	_jsii_.InvokeVoid(
		k,
		"onPrepare",
		nil, // no parameters
	)
}

func (k *jsiiProxy_KubernetesCluster) OnSynthesize(session constructs.ISynthesisSession) {
	if err := k.validateOnSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		k,
		"onSynthesize",
		[]interface{}{session},
	)
}

func (k *jsiiProxy_KubernetesCluster) OnValidate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		k,
		"onValidate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (k *jsiiProxy_KubernetesCluster) Prepare() {
	_jsii_.InvokeVoid(
		k,
		"prepare",
		nil, // no parameters
	)
}

func (k *jsiiProxy_KubernetesCluster) SetMetadata(key *string, value interface{}) {
	if err := k.validateSetMetadataParameters(key, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		k,
		"setMetadata",
		[]interface{}{key, value},
	)
}

func (k *jsiiProxy_KubernetesCluster) Synthesize(session alicloudroscdkcore.ISynthesisSession) {
	if err := k.validateSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		k,
		"synthesize",
		[]interface{}{session},
	)
}

func (k *jsiiProxy_KubernetesCluster) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		k,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (k *jsiiProxy_KubernetesCluster) Validate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		k,
		"validate",
		nil, // no parameters
		&returns,
	)

	return returns
}

