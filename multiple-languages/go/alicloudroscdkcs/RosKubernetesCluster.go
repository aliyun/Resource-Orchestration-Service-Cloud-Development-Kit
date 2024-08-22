package alicloudroscdkcs

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkcs/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcs/internal"
	"github.com/aws/constructs-go/constructs/v3"
)

// This class is a base encapsulation around the ROS resource type `ALIYUN::CS::KubernetesCluster`, which is used to create a Container Service for Kubernetes (ACK) dedicated cluster.
type RosKubernetesCluster interface {
	alicloudroscdkcore.RosResource
	Addons() interface{}
	SetAddons(val interface{})
	AttrApiServerSlbId() alicloudroscdkcore.IResolvable
	AttrClusterId() alicloudroscdkcore.IResolvable
	AttrDefaultUserKubeConfig() alicloudroscdkcore.IResolvable
	AttrIngressSlbId() alicloudroscdkcore.IResolvable
	AttrNodes() alicloudroscdkcore.IResolvable
	AttrPrivateUserKubConfig() alicloudroscdkcore.IResolvable
	AttrScalingConfigurationId() alicloudroscdkcore.IResolvable
	AttrScalingGroupId() alicloudroscdkcore.IResolvable
	AttrScalingRuleId() alicloudroscdkcore.IResolvable
	AttrTaskId() alicloudroscdkcore.IResolvable
	AttrWorkerRamRoleName() alicloudroscdkcore.IResolvable
	AutoRenew() interface{}
	SetAutoRenew(val interface{})
	AutoRenewPeriod() interface{}
	SetAutoRenewPeriod(val interface{})
	ChargeType() interface{}
	SetChargeType(val interface{})
	CloudMonitorFlags() interface{}
	SetCloudMonitorFlags(val interface{})
	ContainerCidr() interface{}
	SetContainerCidr(val interface{})
	CpuPolicy() interface{}
	SetCpuPolicy(val interface{})
	// Returns: the stack trace of the point where this Resource was created from, sourced
	// from the +metadata+ entry typed +aliyun:ros:logicalId+, and with the bottom-most
	// node +internal+ entries filtered.
	CreationStack() *[]*string
	DeleteOptions() interface{}
	SetDeleteOptions(val interface{})
	DeletionProtection() interface{}
	SetDeletionProtection(val interface{})
	DisableRollback() interface{}
	SetDisableRollback(val interface{})
	EnableResourcePropertyConstraint() *bool
	SetEnableResourcePropertyConstraint(val *bool)
	EndpointPublicAccess() interface{}
	SetEndpointPublicAccess(val interface{})
	FormatDisk() interface{}
	SetFormatDisk(val interface{})
	IsEnterpriseSecurityGroup() interface{}
	SetIsEnterpriseSecurityGroup(val interface{})
	KeepInstanceName() interface{}
	SetKeepInstanceName(val interface{})
	KeyPair() interface{}
	SetKeyPair(val interface{})
	KubernetesVersion() interface{}
	SetKubernetesVersion(val interface{})
	LoadBalancerSpec() interface{}
	SetLoadBalancerSpec(val interface{})
	// The logical ID for this stack element.
	//
	// The logical ID of the element
	// is calculated from the path of the resource node in the construct tree.
	//
	// To override this value, use `overrideLogicalId(newLogicalId)`.
	//
	// Returns: the logical ID as a stringified token. This value will only get
	// resolved during synthesis.
	LogicalId() *string
	LoginPassword() interface{}
	SetLoginPassword(val interface{})
	MasterCount() interface{}
	SetMasterCount(val interface{})
	MasterDataDisk() interface{}
	SetMasterDataDisk(val interface{})
	MasterDataDisks() interface{}
	SetMasterDataDisks(val interface{})
	MasterInstanceTypes() interface{}
	SetMasterInstanceTypes(val interface{})
	MasterSystemDiskCategory() interface{}
	SetMasterSystemDiskCategory(val interface{})
	MasterSystemDiskPerformanceLevel() interface{}
	SetMasterSystemDiskPerformanceLevel(val interface{})
	MasterSystemDiskSize() interface{}
	SetMasterSystemDiskSize(val interface{})
	MasterSystemDiskSnapshotPolicyId() interface{}
	SetMasterSystemDiskSnapshotPolicyId(val interface{})
	MasterVSwitchIds() interface{}
	SetMasterVSwitchIds(val interface{})
	MasterZoneIds() interface{}
	SetMasterZoneIds(val interface{})
	Name() interface{}
	SetName(val interface{})
	// The construct tree node associated with this construct.
	Node() alicloudroscdkcore.ConstructNode
	NodeCidrMask() interface{}
	SetNodeCidrMask(val interface{})
	NodeNameMode() interface{}
	SetNodeNameMode(val interface{})
	NodePools() interface{}
	SetNodePools(val interface{})
	NodePortRange() interface{}
	SetNodePortRange(val interface{})
	NumOfNodes() interface{}
	SetNumOfNodes(val interface{})
	OsType() interface{}
	SetOsType(val interface{})
	Period() interface{}
	SetPeriod(val interface{})
	PeriodUnit() interface{}
	SetPeriodUnit(val interface{})
	Platform() interface{}
	SetPlatform(val interface{})
	PodVswitchIds() interface{}
	SetPodVswitchIds(val interface{})
	ProxyMode() interface{}
	SetProxyMode(val interface{})
	// Return a string that will be resolved to a RosTemplate `{ Ref }` for this element.
	//
	// If, by any chance, the intrinsic reference of a resource is not a string, you could
	// coerce it to an IResolvable through `Lazy.any({ produce: resource.ref })`.
	Ref() *string
	ResourceGroupId() interface{}
	SetResourceGroupId(val interface{})
	// Options for this resource, such as condition, update policy etc.
	RosOptions() alicloudroscdkcore.IRosResourceOptions
	RosProperties() *map[string]interface{}
	// ROS resource type.
	RosResourceType() *string
	Runtime() interface{}
	SetRuntime(val interface{})
	SecurityGroupId() interface{}
	SetSecurityGroupId(val interface{})
	SecurityHardeningOs() interface{}
	SetSecurityHardeningOs(val interface{})
	ServiceCidr() interface{}
	SetServiceCidr(val interface{})
	SnatEntry() interface{}
	SetSnatEntry(val interface{})
	SocEnabled() interface{}
	SetSocEnabled(val interface{})
	SshFlags() interface{}
	SetSshFlags(val interface{})
	// The stack in which this element is defined.
	//
	// RosElements must be defined within a stack scope (directly or indirectly).
	Stack() alicloudroscdkcore.Stack
	Tags() *[]*RosKubernetesCluster_TagsProperty
	SetTags(val *[]*RosKubernetesCluster_TagsProperty)
	Taint() interface{}
	SetTaint(val interface{})
	TimeoutMins() interface{}
	SetTimeoutMins(val interface{})
	TimeZone() interface{}
	SetTimeZone(val interface{})
	// Return properties modified after initiation.
	//
	// Resources that expose mutable properties should override this function to
	// collect and return the properties object for this resource.
	UpdatedProperites() *map[string]interface{}
	UserCa() interface{}
	SetUserCa(val interface{})
	UserData() interface{}
	SetUserData(val interface{})
	VpcId() interface{}
	SetVpcId(val interface{})
	WorkerDataDisk() interface{}
	SetWorkerDataDisk(val interface{})
	WorkerDataDisks() interface{}
	SetWorkerDataDisks(val interface{})
	WorkerInstanceTypes() interface{}
	SetWorkerInstanceTypes(val interface{})
	WorkerSystemDiskCategory() interface{}
	SetWorkerSystemDiskCategory(val interface{})
	WorkerSystemDiskSize() interface{}
	SetWorkerSystemDiskSize(val interface{})
	WorkerSystemDiskSnapshotPolicyId() interface{}
	SetWorkerSystemDiskSnapshotPolicyId(val interface{})
	WorkerVSwitchIds() interface{}
	SetWorkerVSwitchIds(val interface{})
	WorkerZoneIds() interface{}
	SetWorkerZoneIds(val interface{})
	AddCondition(con alicloudroscdkcore.RosCondition)
	AddCount(count interface{})
	// Syntactic sugar for `addOverride(path, undefined)`.
	AddDeletionOverride(path *string)
	// Indicates that this resource depends on another resource and cannot be provisioned unless the other resource has been successfully provisioned.
	//
	// This can be used for resources across stacks (or nested stack) boundaries
	// and the dependency will automatically be transferred to the relevant scope.
	AddDependsOn(target alicloudroscdkcore.RosResource)
	AddDesc(desc *string)
	AddMetaData(key *string, value interface{})
	// Adds an override to the synthesized ROS resource.
	//
	// To add a
	// property override, either use `addPropertyOverride` or prefix `path` with
	// "Properties." (i.e. `Properties.TopicName`).
	//
	// If the override is nested, separate each nested level using a dot (.) in the path parameter.
	// If there is an array as part of the nesting, specify the index in the path.
	//
	// For example,
	// ```typescript
	// addOverride('Properties.GlobalSecondaryIndexes.0.Projection.NonKeyAttributes', ['myattribute'])
	// addOverride('Properties.GlobalSecondaryIndexes.1.ProjectionType', 'INCLUDE')
	// ```
	// would add the overrides
	// ```json
	// "Properties": {
	//    "GlobalSecondaryIndexes": [
	//      {
	//        "Projection": {
	//          "NonKeyAttributes": [ "myattribute" ]
	//          ...
	//        }
	//        ...
	//      },
	//      {
	//        "ProjectionType": "INCLUDE"
	//        ...
	//      },
	//    ]
	//    ...
	// }
	// ```.
	AddOverride(path *string, value interface{})
	// Adds an override that deletes the value of a property from the resource definition.
	AddPropertyDeletionOverride(propertyPath *string)
	// Adds an override to a resource property.
	//
	// Syntactic sugar for `addOverride("Properties.<...>", value)`.
	AddPropertyOverride(propertyPath *string, value interface{})
	AddRosDependency(target *string)
	// Sets the deletion policy of the resource based on the removal policy specified.
	ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy, options *alicloudroscdkcore.RemovalPolicyOptions)
	// Returns a token for an runtime attribute of this resource.
	//
	// Ideally, use generated attribute accessors (e.g. `resource.arn`), but this can be used for future compatibility
	// in case there is no generated attribute.
	GetAtt(attributeName *string) alicloudroscdkcore.Reference
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
	// Overrides the auto-generated logical ID with a specific ID.
	OverrideLogicalId(newLogicalId *string)
	// Perform final modifications before synthesis.
	//
	// This method can be implemented by derived constructs in order to perform
	// final changes before synthesis. prepare() will be called after child
	// constructs have been prepared.
	//
	// This is an advanced framework feature. Only use this if you
	// understand the implications.
	Prepare()
	RenderProperties(props *map[string]interface{}) *map[string]interface{}
	// Allows this construct to emit artifacts into the cloud assembly during synthesis.
	//
	// This method is usually implemented by framework-level constructs such as `Stack` and `Asset`
	// as they participate in synthesizing the cloud assembly.
	Synthesize(session alicloudroscdkcore.ISynthesisSession)
	// Returns a string representation of this construct.
	//
	// Returns: a string representation of this resource.
	ToString() *string
	// Validate the current construct.
	//
	// This method can be implemented by derived constructs in order to perform
	// validation logic. It is called on all constructs before synthesis.
	//
	// Returns: An array of validation error messages, or an empty array if the construct is valid.
	Validate() *[]*string
	ValidateProperties(_properties interface{})
}

// The jsii proxy struct for RosKubernetesCluster
type jsiiProxy_RosKubernetesCluster struct {
	internal.Type__alicloudroscdkcoreRosResource
}

func (j *jsiiProxy_RosKubernetesCluster) Addons() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"addons",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosKubernetesCluster) AttrApiServerSlbId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrApiServerSlbId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosKubernetesCluster) AttrClusterId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrClusterId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosKubernetesCluster) AttrDefaultUserKubeConfig() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDefaultUserKubeConfig",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosKubernetesCluster) AttrIngressSlbId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrIngressSlbId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosKubernetesCluster) AttrNodes() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrNodes",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosKubernetesCluster) AttrPrivateUserKubConfig() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrPrivateUserKubConfig",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosKubernetesCluster) AttrScalingConfigurationId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrScalingConfigurationId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosKubernetesCluster) AttrScalingGroupId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrScalingGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosKubernetesCluster) AttrScalingRuleId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrScalingRuleId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosKubernetesCluster) AttrTaskId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrTaskId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosKubernetesCluster) AttrWorkerRamRoleName() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrWorkerRamRoleName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosKubernetesCluster) AutoRenew() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"autoRenew",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosKubernetesCluster) AutoRenewPeriod() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"autoRenewPeriod",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosKubernetesCluster) ChargeType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"chargeType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosKubernetesCluster) CloudMonitorFlags() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"cloudMonitorFlags",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosKubernetesCluster) ContainerCidr() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"containerCidr",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosKubernetesCluster) CpuPolicy() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"cpuPolicy",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosKubernetesCluster) CreationStack() *[]*string {
	var returns *[]*string
	_jsii_.Get(
		j,
		"creationStack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosKubernetesCluster) DeleteOptions() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"deleteOptions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosKubernetesCluster) DeletionProtection() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"deletionProtection",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosKubernetesCluster) DisableRollback() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"disableRollback",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosKubernetesCluster) EnableResourcePropertyConstraint() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"enableResourcePropertyConstraint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosKubernetesCluster) EndpointPublicAccess() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"endpointPublicAccess",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosKubernetesCluster) FormatDisk() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"formatDisk",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosKubernetesCluster) IsEnterpriseSecurityGroup() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"isEnterpriseSecurityGroup",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosKubernetesCluster) KeepInstanceName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"keepInstanceName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosKubernetesCluster) KeyPair() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"keyPair",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosKubernetesCluster) KubernetesVersion() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"kubernetesVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosKubernetesCluster) LoadBalancerSpec() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"loadBalancerSpec",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosKubernetesCluster) LogicalId() *string {
	var returns *string
	_jsii_.Get(
		j,
		"logicalId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosKubernetesCluster) LoginPassword() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"loginPassword",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosKubernetesCluster) MasterCount() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"masterCount",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosKubernetesCluster) MasterDataDisk() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"masterDataDisk",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosKubernetesCluster) MasterDataDisks() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"masterDataDisks",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosKubernetesCluster) MasterInstanceTypes() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"masterInstanceTypes",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosKubernetesCluster) MasterSystemDiskCategory() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"masterSystemDiskCategory",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosKubernetesCluster) MasterSystemDiskPerformanceLevel() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"masterSystemDiskPerformanceLevel",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosKubernetesCluster) MasterSystemDiskSize() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"masterSystemDiskSize",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosKubernetesCluster) MasterSystemDiskSnapshotPolicyId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"masterSystemDiskSnapshotPolicyId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosKubernetesCluster) MasterVSwitchIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"masterVSwitchIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosKubernetesCluster) MasterZoneIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"masterZoneIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosKubernetesCluster) Name() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"name",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosKubernetesCluster) Node() alicloudroscdkcore.ConstructNode {
	var returns alicloudroscdkcore.ConstructNode
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosKubernetesCluster) NodeCidrMask() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"nodeCidrMask",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosKubernetesCluster) NodeNameMode() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"nodeNameMode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosKubernetesCluster) NodePools() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"nodePools",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosKubernetesCluster) NodePortRange() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"nodePortRange",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosKubernetesCluster) NumOfNodes() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"numOfNodes",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosKubernetesCluster) OsType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"osType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosKubernetesCluster) Period() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"period",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosKubernetesCluster) PeriodUnit() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"periodUnit",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosKubernetesCluster) Platform() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"platform",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosKubernetesCluster) PodVswitchIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"podVswitchIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosKubernetesCluster) ProxyMode() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"proxyMode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosKubernetesCluster) Ref() *string {
	var returns *string
	_jsii_.Get(
		j,
		"ref",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosKubernetesCluster) ResourceGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"resourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosKubernetesCluster) RosOptions() alicloudroscdkcore.IRosResourceOptions {
	var returns alicloudroscdkcore.IRosResourceOptions
	_jsii_.Get(
		j,
		"rosOptions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosKubernetesCluster) RosProperties() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"rosProperties",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosKubernetesCluster) RosResourceType() *string {
	var returns *string
	_jsii_.Get(
		j,
		"rosResourceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosKubernetesCluster) Runtime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"runtime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosKubernetesCluster) SecurityGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"securityGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosKubernetesCluster) SecurityHardeningOs() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"securityHardeningOs",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosKubernetesCluster) ServiceCidr() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"serviceCidr",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosKubernetesCluster) SnatEntry() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"snatEntry",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosKubernetesCluster) SocEnabled() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"socEnabled",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosKubernetesCluster) SshFlags() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"sshFlags",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosKubernetesCluster) Stack() alicloudroscdkcore.Stack {
	var returns alicloudroscdkcore.Stack
	_jsii_.Get(
		j,
		"stack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosKubernetesCluster) Tags() *[]*RosKubernetesCluster_TagsProperty {
	var returns *[]*RosKubernetesCluster_TagsProperty
	_jsii_.Get(
		j,
		"tags",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosKubernetesCluster) Taint() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"taint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosKubernetesCluster) TimeoutMins() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"timeoutMins",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosKubernetesCluster) TimeZone() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"timeZone",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosKubernetesCluster) UpdatedProperites() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"updatedProperites",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosKubernetesCluster) UserCa() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"userCa",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosKubernetesCluster) UserData() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"userData",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosKubernetesCluster) VpcId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"vpcId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosKubernetesCluster) WorkerDataDisk() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"workerDataDisk",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosKubernetesCluster) WorkerDataDisks() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"workerDataDisks",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosKubernetesCluster) WorkerInstanceTypes() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"workerInstanceTypes",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosKubernetesCluster) WorkerSystemDiskCategory() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"workerSystemDiskCategory",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosKubernetesCluster) WorkerSystemDiskSize() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"workerSystemDiskSize",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosKubernetesCluster) WorkerSystemDiskSnapshotPolicyId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"workerSystemDiskSnapshotPolicyId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosKubernetesCluster) WorkerVSwitchIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"workerVSwitchIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosKubernetesCluster) WorkerZoneIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"workerZoneIds",
		&returns,
	)
	return returns
}


func NewRosKubernetesCluster(scope alicloudroscdkcore.Construct, id *string, props *RosKubernetesClusterProps, enableResourcePropertyConstraint *bool) RosKubernetesCluster {
	_init_.Initialize()

	if err := validateNewRosKubernetesClusterParameters(scope, id, props, enableResourcePropertyConstraint); err != nil {
		panic(err)
	}
	j := jsiiProxy_RosKubernetesCluster{}

	_jsii_.Create(
		"@alicloud/ros-cdk-cs.RosKubernetesCluster",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		&j,
	)

	return &j
}

func NewRosKubernetesCluster_Override(r RosKubernetesCluster, scope alicloudroscdkcore.Construct, id *string, props *RosKubernetesClusterProps, enableResourcePropertyConstraint *bool) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-cs.RosKubernetesCluster",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		r,
	)
}

func (j *jsiiProxy_RosKubernetesCluster)SetAddons(val interface{}) {
	if err := j.validateSetAddonsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"addons",
		val,
	)
}

func (j *jsiiProxy_RosKubernetesCluster)SetAutoRenew(val interface{}) {
	if err := j.validateSetAutoRenewParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"autoRenew",
		val,
	)
}

func (j *jsiiProxy_RosKubernetesCluster)SetAutoRenewPeriod(val interface{}) {
	if err := j.validateSetAutoRenewPeriodParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"autoRenewPeriod",
		val,
	)
}

func (j *jsiiProxy_RosKubernetesCluster)SetChargeType(val interface{}) {
	if err := j.validateSetChargeTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"chargeType",
		val,
	)
}

func (j *jsiiProxy_RosKubernetesCluster)SetCloudMonitorFlags(val interface{}) {
	if err := j.validateSetCloudMonitorFlagsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"cloudMonitorFlags",
		val,
	)
}

func (j *jsiiProxy_RosKubernetesCluster)SetContainerCidr(val interface{}) {
	if err := j.validateSetContainerCidrParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"containerCidr",
		val,
	)
}

func (j *jsiiProxy_RosKubernetesCluster)SetCpuPolicy(val interface{}) {
	if err := j.validateSetCpuPolicyParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"cpuPolicy",
		val,
	)
}

func (j *jsiiProxy_RosKubernetesCluster)SetDeleteOptions(val interface{}) {
	if err := j.validateSetDeleteOptionsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"deleteOptions",
		val,
	)
}

func (j *jsiiProxy_RosKubernetesCluster)SetDeletionProtection(val interface{}) {
	if err := j.validateSetDeletionProtectionParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"deletionProtection",
		val,
	)
}

func (j *jsiiProxy_RosKubernetesCluster)SetDisableRollback(val interface{}) {
	if err := j.validateSetDisableRollbackParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"disableRollback",
		val,
	)
}

func (j *jsiiProxy_RosKubernetesCluster)SetEnableResourcePropertyConstraint(val *bool) {
	if err := j.validateSetEnableResourcePropertyConstraintParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableResourcePropertyConstraint",
		val,
	)
}

func (j *jsiiProxy_RosKubernetesCluster)SetEndpointPublicAccess(val interface{}) {
	if err := j.validateSetEndpointPublicAccessParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"endpointPublicAccess",
		val,
	)
}

func (j *jsiiProxy_RosKubernetesCluster)SetFormatDisk(val interface{}) {
	if err := j.validateSetFormatDiskParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"formatDisk",
		val,
	)
}

func (j *jsiiProxy_RosKubernetesCluster)SetIsEnterpriseSecurityGroup(val interface{}) {
	if err := j.validateSetIsEnterpriseSecurityGroupParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"isEnterpriseSecurityGroup",
		val,
	)
}

func (j *jsiiProxy_RosKubernetesCluster)SetKeepInstanceName(val interface{}) {
	if err := j.validateSetKeepInstanceNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"keepInstanceName",
		val,
	)
}

func (j *jsiiProxy_RosKubernetesCluster)SetKeyPair(val interface{}) {
	if err := j.validateSetKeyPairParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"keyPair",
		val,
	)
}

func (j *jsiiProxy_RosKubernetesCluster)SetKubernetesVersion(val interface{}) {
	if err := j.validateSetKubernetesVersionParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"kubernetesVersion",
		val,
	)
}

func (j *jsiiProxy_RosKubernetesCluster)SetLoadBalancerSpec(val interface{}) {
	if err := j.validateSetLoadBalancerSpecParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"loadBalancerSpec",
		val,
	)
}

func (j *jsiiProxy_RosKubernetesCluster)SetLoginPassword(val interface{}) {
	if err := j.validateSetLoginPasswordParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"loginPassword",
		val,
	)
}

func (j *jsiiProxy_RosKubernetesCluster)SetMasterCount(val interface{}) {
	if err := j.validateSetMasterCountParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"masterCount",
		val,
	)
}

func (j *jsiiProxy_RosKubernetesCluster)SetMasterDataDisk(val interface{}) {
	if err := j.validateSetMasterDataDiskParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"masterDataDisk",
		val,
	)
}

func (j *jsiiProxy_RosKubernetesCluster)SetMasterDataDisks(val interface{}) {
	if err := j.validateSetMasterDataDisksParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"masterDataDisks",
		val,
	)
}

func (j *jsiiProxy_RosKubernetesCluster)SetMasterInstanceTypes(val interface{}) {
	if err := j.validateSetMasterInstanceTypesParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"masterInstanceTypes",
		val,
	)
}

func (j *jsiiProxy_RosKubernetesCluster)SetMasterSystemDiskCategory(val interface{}) {
	if err := j.validateSetMasterSystemDiskCategoryParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"masterSystemDiskCategory",
		val,
	)
}

func (j *jsiiProxy_RosKubernetesCluster)SetMasterSystemDiskPerformanceLevel(val interface{}) {
	if err := j.validateSetMasterSystemDiskPerformanceLevelParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"masterSystemDiskPerformanceLevel",
		val,
	)
}

func (j *jsiiProxy_RosKubernetesCluster)SetMasterSystemDiskSize(val interface{}) {
	if err := j.validateSetMasterSystemDiskSizeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"masterSystemDiskSize",
		val,
	)
}

func (j *jsiiProxy_RosKubernetesCluster)SetMasterSystemDiskSnapshotPolicyId(val interface{}) {
	if err := j.validateSetMasterSystemDiskSnapshotPolicyIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"masterSystemDiskSnapshotPolicyId",
		val,
	)
}

func (j *jsiiProxy_RosKubernetesCluster)SetMasterVSwitchIds(val interface{}) {
	if err := j.validateSetMasterVSwitchIdsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"masterVSwitchIds",
		val,
	)
}

func (j *jsiiProxy_RosKubernetesCluster)SetMasterZoneIds(val interface{}) {
	if err := j.validateSetMasterZoneIdsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"masterZoneIds",
		val,
	)
}

func (j *jsiiProxy_RosKubernetesCluster)SetName(val interface{}) {
	if err := j.validateSetNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"name",
		val,
	)
}

func (j *jsiiProxy_RosKubernetesCluster)SetNodeCidrMask(val interface{}) {
	if err := j.validateSetNodeCidrMaskParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"nodeCidrMask",
		val,
	)
}

func (j *jsiiProxy_RosKubernetesCluster)SetNodeNameMode(val interface{}) {
	if err := j.validateSetNodeNameModeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"nodeNameMode",
		val,
	)
}

func (j *jsiiProxy_RosKubernetesCluster)SetNodePools(val interface{}) {
	if err := j.validateSetNodePoolsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"nodePools",
		val,
	)
}

func (j *jsiiProxy_RosKubernetesCluster)SetNodePortRange(val interface{}) {
	if err := j.validateSetNodePortRangeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"nodePortRange",
		val,
	)
}

func (j *jsiiProxy_RosKubernetesCluster)SetNumOfNodes(val interface{}) {
	if err := j.validateSetNumOfNodesParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"numOfNodes",
		val,
	)
}

func (j *jsiiProxy_RosKubernetesCluster)SetOsType(val interface{}) {
	if err := j.validateSetOsTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"osType",
		val,
	)
}

func (j *jsiiProxy_RosKubernetesCluster)SetPeriod(val interface{}) {
	if err := j.validateSetPeriodParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"period",
		val,
	)
}

func (j *jsiiProxy_RosKubernetesCluster)SetPeriodUnit(val interface{}) {
	if err := j.validateSetPeriodUnitParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"periodUnit",
		val,
	)
}

func (j *jsiiProxy_RosKubernetesCluster)SetPlatform(val interface{}) {
	if err := j.validateSetPlatformParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"platform",
		val,
	)
}

func (j *jsiiProxy_RosKubernetesCluster)SetPodVswitchIds(val interface{}) {
	if err := j.validateSetPodVswitchIdsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"podVswitchIds",
		val,
	)
}

func (j *jsiiProxy_RosKubernetesCluster)SetProxyMode(val interface{}) {
	if err := j.validateSetProxyModeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"proxyMode",
		val,
	)
}

func (j *jsiiProxy_RosKubernetesCluster)SetResourceGroupId(val interface{}) {
	if err := j.validateSetResourceGroupIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"resourceGroupId",
		val,
	)
}

func (j *jsiiProxy_RosKubernetesCluster)SetRuntime(val interface{}) {
	if err := j.validateSetRuntimeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"runtime",
		val,
	)
}

func (j *jsiiProxy_RosKubernetesCluster)SetSecurityGroupId(val interface{}) {
	if err := j.validateSetSecurityGroupIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"securityGroupId",
		val,
	)
}

func (j *jsiiProxy_RosKubernetesCluster)SetSecurityHardeningOs(val interface{}) {
	if err := j.validateSetSecurityHardeningOsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"securityHardeningOs",
		val,
	)
}

func (j *jsiiProxy_RosKubernetesCluster)SetServiceCidr(val interface{}) {
	if err := j.validateSetServiceCidrParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"serviceCidr",
		val,
	)
}

func (j *jsiiProxy_RosKubernetesCluster)SetSnatEntry(val interface{}) {
	if err := j.validateSetSnatEntryParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"snatEntry",
		val,
	)
}

func (j *jsiiProxy_RosKubernetesCluster)SetSocEnabled(val interface{}) {
	if err := j.validateSetSocEnabledParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"socEnabled",
		val,
	)
}

func (j *jsiiProxy_RosKubernetesCluster)SetSshFlags(val interface{}) {
	if err := j.validateSetSshFlagsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"sshFlags",
		val,
	)
}

func (j *jsiiProxy_RosKubernetesCluster)SetTags(val *[]*RosKubernetesCluster_TagsProperty) {
	if err := j.validateSetTagsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"tags",
		val,
	)
}

func (j *jsiiProxy_RosKubernetesCluster)SetTaint(val interface{}) {
	if err := j.validateSetTaintParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"taint",
		val,
	)
}

func (j *jsiiProxy_RosKubernetesCluster)SetTimeoutMins(val interface{}) {
	if err := j.validateSetTimeoutMinsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"timeoutMins",
		val,
	)
}

func (j *jsiiProxy_RosKubernetesCluster)SetTimeZone(val interface{}) {
	if err := j.validateSetTimeZoneParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"timeZone",
		val,
	)
}

func (j *jsiiProxy_RosKubernetesCluster)SetUserCa(val interface{}) {
	if err := j.validateSetUserCaParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"userCa",
		val,
	)
}

func (j *jsiiProxy_RosKubernetesCluster)SetUserData(val interface{}) {
	if err := j.validateSetUserDataParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"userData",
		val,
	)
}

func (j *jsiiProxy_RosKubernetesCluster)SetVpcId(val interface{}) {
	if err := j.validateSetVpcIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"vpcId",
		val,
	)
}

func (j *jsiiProxy_RosKubernetesCluster)SetWorkerDataDisk(val interface{}) {
	if err := j.validateSetWorkerDataDiskParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"workerDataDisk",
		val,
	)
}

func (j *jsiiProxy_RosKubernetesCluster)SetWorkerDataDisks(val interface{}) {
	if err := j.validateSetWorkerDataDisksParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"workerDataDisks",
		val,
	)
}

func (j *jsiiProxy_RosKubernetesCluster)SetWorkerInstanceTypes(val interface{}) {
	if err := j.validateSetWorkerInstanceTypesParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"workerInstanceTypes",
		val,
	)
}

func (j *jsiiProxy_RosKubernetesCluster)SetWorkerSystemDiskCategory(val interface{}) {
	if err := j.validateSetWorkerSystemDiskCategoryParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"workerSystemDiskCategory",
		val,
	)
}

func (j *jsiiProxy_RosKubernetesCluster)SetWorkerSystemDiskSize(val interface{}) {
	if err := j.validateSetWorkerSystemDiskSizeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"workerSystemDiskSize",
		val,
	)
}

func (j *jsiiProxy_RosKubernetesCluster)SetWorkerSystemDiskSnapshotPolicyId(val interface{}) {
	if err := j.validateSetWorkerSystemDiskSnapshotPolicyIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"workerSystemDiskSnapshotPolicyId",
		val,
	)
}

func (j *jsiiProxy_RosKubernetesCluster)SetWorkerVSwitchIds(val interface{}) {
	if err := j.validateSetWorkerVSwitchIdsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"workerVSwitchIds",
		val,
	)
}

func (j *jsiiProxy_RosKubernetesCluster)SetWorkerZoneIds(val interface{}) {
	if err := j.validateSetWorkerZoneIdsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"workerZoneIds",
		val,
	)
}

// Return whether the given object is a Construct.
func RosKubernetesCluster_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosKubernetesCluster_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-cs.RosKubernetesCluster",
		"isConstruct",
		[]interface{}{x},
		&returns,
	)

	return returns
}

// Returns `true` if a construct is a stack element (i.e. part of the synthesized template).
//
// Uses duck-typing instead of `instanceof` to allow stack elements from different
// versions of this library to be included in the same stack.
//
// Returns: The construct as a stack element or undefined if it is not a stack element.
func RosKubernetesCluster_IsRosElement(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosKubernetesCluster_IsRosElementParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-cs.RosKubernetesCluster",
		"isRosElement",
		[]interface{}{x},
		&returns,
	)

	return returns
}

// Check whether the given construct is a RosResource.
func RosKubernetesCluster_IsRosResource(construct alicloudroscdkcore.IConstruct) *bool {
	_init_.Initialize()

	if err := validateRosKubernetesCluster_IsRosResourceParameters(construct); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-cs.RosKubernetesCluster",
		"isRosResource",
		[]interface{}{construct},
		&returns,
	)

	return returns
}

func RosKubernetesCluster_ROS_RESOURCE_TYPE_NAME() *string {
	_init_.Initialize()
	var returns *string
	_jsii_.StaticGet(
		"@alicloud/ros-cdk-cs.RosKubernetesCluster",
		"ROS_RESOURCE_TYPE_NAME",
		&returns,
	)
	return returns
}

func (r *jsiiProxy_RosKubernetesCluster) AddCondition(con alicloudroscdkcore.RosCondition) {
	if err := r.validateAddConditionParameters(con); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCondition",
		[]interface{}{con},
	)
}

func (r *jsiiProxy_RosKubernetesCluster) AddCount(count interface{}) {
	if err := r.validateAddCountParameters(count); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCount",
		[]interface{}{count},
	)
}

func (r *jsiiProxy_RosKubernetesCluster) AddDeletionOverride(path *string) {
	if err := r.validateAddDeletionOverrideParameters(path); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDeletionOverride",
		[]interface{}{path},
	)
}

func (r *jsiiProxy_RosKubernetesCluster) AddDependsOn(target alicloudroscdkcore.RosResource) {
	if err := r.validateAddDependsOnParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDependsOn",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosKubernetesCluster) AddDesc(desc *string) {
	if err := r.validateAddDescParameters(desc); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDesc",
		[]interface{}{desc},
	)
}

func (r *jsiiProxy_RosKubernetesCluster) AddMetaData(key *string, value interface{}) {
	if err := r.validateAddMetaDataParameters(key, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addMetaData",
		[]interface{}{key, value},
	)
}

func (r *jsiiProxy_RosKubernetesCluster) AddOverride(path *string, value interface{}) {
	if err := r.validateAddOverrideParameters(path, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addOverride",
		[]interface{}{path, value},
	)
}

func (r *jsiiProxy_RosKubernetesCluster) AddPropertyDeletionOverride(propertyPath *string) {
	if err := r.validateAddPropertyDeletionOverrideParameters(propertyPath); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyDeletionOverride",
		[]interface{}{propertyPath},
	)
}

func (r *jsiiProxy_RosKubernetesCluster) AddPropertyOverride(propertyPath *string, value interface{}) {
	if err := r.validateAddPropertyOverrideParameters(propertyPath, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyOverride",
		[]interface{}{propertyPath, value},
	)
}

func (r *jsiiProxy_RosKubernetesCluster) AddRosDependency(target *string) {
	if err := r.validateAddRosDependencyParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addRosDependency",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosKubernetesCluster) ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy, options *alicloudroscdkcore.RemovalPolicyOptions) {
	if err := r.validateApplyRemovalPolicyParameters(options); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"applyRemovalPolicy",
		[]interface{}{policy, options},
	)
}

func (r *jsiiProxy_RosKubernetesCluster) GetAtt(attributeName *string) alicloudroscdkcore.Reference {
	if err := r.validateGetAttParameters(attributeName); err != nil {
		panic(err)
	}
	var returns alicloudroscdkcore.Reference

	_jsii_.Invoke(
		r,
		"getAtt",
		[]interface{}{attributeName},
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosKubernetesCluster) OnPrepare() {
	_jsii_.InvokeVoid(
		r,
		"onPrepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosKubernetesCluster) OnSynthesize(session constructs.ISynthesisSession) {
	if err := r.validateOnSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"onSynthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosKubernetesCluster) OnValidate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"onValidate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosKubernetesCluster) OverrideLogicalId(newLogicalId *string) {
	if err := r.validateOverrideLogicalIdParameters(newLogicalId); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"overrideLogicalId",
		[]interface{}{newLogicalId},
	)
}

func (r *jsiiProxy_RosKubernetesCluster) Prepare() {
	_jsii_.InvokeVoid(
		r,
		"prepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosKubernetesCluster) RenderProperties(props *map[string]interface{}) *map[string]interface{} {
	if err := r.validateRenderPropertiesParameters(props); err != nil {
		panic(err)
	}
	var returns *map[string]interface{}

	_jsii_.Invoke(
		r,
		"renderProperties",
		[]interface{}{props},
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosKubernetesCluster) Synthesize(session alicloudroscdkcore.ISynthesisSession) {
	if err := r.validateSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"synthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosKubernetesCluster) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		r,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosKubernetesCluster) Validate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"validate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosKubernetesCluster) ValidateProperties(_properties interface{}) {
	if err := r.validateValidatePropertiesParameters(_properties); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"validateProperties",
		[]interface{}{_properties},
	)
}

