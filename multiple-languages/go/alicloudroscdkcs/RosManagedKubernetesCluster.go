package alicloudroscdkcs

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkcs/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcs/internal"
	"github.com/aws/constructs-go/constructs/v3"
)

// This class is a base encapsulation around the ROS resource type `ALIYUN::CS::ManagedKubernetesCluster`, which is used to create a Container Service for Kubernetes (ACK) managed cluster.
type RosManagedKubernetesCluster interface {
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
	ClusterSpec() interface{}
	SetClusterSpec(val interface{})
	ContainerCidr() interface{}
	SetContainerCidr(val interface{})
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
	EncryptionProviderKey() interface{}
	SetEncryptionProviderKey(val interface{})
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
	// The stack in which this element is defined.
	//
	// RosElements must be defined within a stack scope (directly or indirectly).
	Stack() alicloudroscdkcore.Stack
	Tags() *[]*RosManagedKubernetesCluster_TagsProperty
	SetTags(val *[]*RosManagedKubernetesCluster_TagsProperty)
	Taint() interface{}
	SetTaint(val interface{})
	TimeoutMins() interface{}
	SetTimeoutMins(val interface{})
	// Return properties modified after initiation.
	//
	// Resources that expose mutable properties should override this function to
	// collect and return the properties object for this resource.
	UpdatedProperites() *map[string]interface{}
	UserData() interface{}
	SetUserData(val interface{})
	VpcId() interface{}
	SetVpcId(val interface{})
	VSwitchIds() interface{}
	SetVSwitchIds(val interface{})
	WorkerDataDisk() interface{}
	SetWorkerDataDisk(val interface{})
	WorkerDataDisks() interface{}
	SetWorkerDataDisks(val interface{})
	WorkerInstanceTypes() interface{}
	SetWorkerInstanceTypes(val interface{})
	WorkerSystemDiskCategory() interface{}
	SetWorkerSystemDiskCategory(val interface{})
	WorkerSystemDiskPerformanceLevel() interface{}
	SetWorkerSystemDiskPerformanceLevel(val interface{})
	WorkerSystemDiskSize() interface{}
	SetWorkerSystemDiskSize(val interface{})
	ZoneIds() interface{}
	SetZoneIds(val interface{})
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

// The jsii proxy struct for RosManagedKubernetesCluster
type jsiiProxy_RosManagedKubernetesCluster struct {
	internal.Type__alicloudroscdkcoreRosResource
}

func (j *jsiiProxy_RosManagedKubernetesCluster) Addons() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"addons",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosManagedKubernetesCluster) AttrApiServerSlbId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrApiServerSlbId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosManagedKubernetesCluster) AttrClusterId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrClusterId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosManagedKubernetesCluster) AttrDefaultUserKubeConfig() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDefaultUserKubeConfig",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosManagedKubernetesCluster) AttrIngressSlbId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrIngressSlbId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosManagedKubernetesCluster) AttrNodes() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrNodes",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosManagedKubernetesCluster) AttrPrivateUserKubConfig() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrPrivateUserKubConfig",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosManagedKubernetesCluster) AttrScalingConfigurationId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrScalingConfigurationId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosManagedKubernetesCluster) AttrScalingGroupId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrScalingGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosManagedKubernetesCluster) AttrScalingRuleId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrScalingRuleId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosManagedKubernetesCluster) AttrTaskId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrTaskId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosManagedKubernetesCluster) AttrWorkerRamRoleName() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrWorkerRamRoleName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosManagedKubernetesCluster) AutoRenew() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"autoRenew",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosManagedKubernetesCluster) AutoRenewPeriod() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"autoRenewPeriod",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosManagedKubernetesCluster) ChargeType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"chargeType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosManagedKubernetesCluster) CloudMonitorFlags() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"cloudMonitorFlags",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosManagedKubernetesCluster) ClusterSpec() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"clusterSpec",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosManagedKubernetesCluster) ContainerCidr() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"containerCidr",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosManagedKubernetesCluster) CreationStack() *[]*string {
	var returns *[]*string
	_jsii_.Get(
		j,
		"creationStack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosManagedKubernetesCluster) DeleteOptions() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"deleteOptions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosManagedKubernetesCluster) DeletionProtection() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"deletionProtection",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosManagedKubernetesCluster) DisableRollback() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"disableRollback",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosManagedKubernetesCluster) EnableResourcePropertyConstraint() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"enableResourcePropertyConstraint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosManagedKubernetesCluster) EncryptionProviderKey() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"encryptionProviderKey",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosManagedKubernetesCluster) EndpointPublicAccess() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"endpointPublicAccess",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosManagedKubernetesCluster) FormatDisk() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"formatDisk",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosManagedKubernetesCluster) IsEnterpriseSecurityGroup() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"isEnterpriseSecurityGroup",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosManagedKubernetesCluster) KeepInstanceName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"keepInstanceName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosManagedKubernetesCluster) KeyPair() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"keyPair",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosManagedKubernetesCluster) KubernetesVersion() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"kubernetesVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosManagedKubernetesCluster) LoadBalancerSpec() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"loadBalancerSpec",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosManagedKubernetesCluster) LogicalId() *string {
	var returns *string
	_jsii_.Get(
		j,
		"logicalId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosManagedKubernetesCluster) LoginPassword() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"loginPassword",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosManagedKubernetesCluster) Name() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"name",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosManagedKubernetesCluster) Node() alicloudroscdkcore.ConstructNode {
	var returns alicloudroscdkcore.ConstructNode
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosManagedKubernetesCluster) NodeCidrMask() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"nodeCidrMask",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosManagedKubernetesCluster) NodeNameMode() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"nodeNameMode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosManagedKubernetesCluster) NodePools() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"nodePools",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosManagedKubernetesCluster) NumOfNodes() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"numOfNodes",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosManagedKubernetesCluster) OsType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"osType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosManagedKubernetesCluster) Period() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"period",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosManagedKubernetesCluster) PeriodUnit() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"periodUnit",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosManagedKubernetesCluster) Platform() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"platform",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosManagedKubernetesCluster) PodVswitchIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"podVswitchIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosManagedKubernetesCluster) ProxyMode() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"proxyMode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosManagedKubernetesCluster) Ref() *string {
	var returns *string
	_jsii_.Get(
		j,
		"ref",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosManagedKubernetesCluster) ResourceGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"resourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosManagedKubernetesCluster) RosOptions() alicloudroscdkcore.IRosResourceOptions {
	var returns alicloudroscdkcore.IRosResourceOptions
	_jsii_.Get(
		j,
		"rosOptions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosManagedKubernetesCluster) RosProperties() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"rosProperties",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosManagedKubernetesCluster) RosResourceType() *string {
	var returns *string
	_jsii_.Get(
		j,
		"rosResourceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosManagedKubernetesCluster) Runtime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"runtime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosManagedKubernetesCluster) SecurityGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"securityGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosManagedKubernetesCluster) SecurityHardeningOs() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"securityHardeningOs",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosManagedKubernetesCluster) ServiceCidr() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"serviceCidr",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosManagedKubernetesCluster) SnatEntry() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"snatEntry",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosManagedKubernetesCluster) SocEnabled() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"socEnabled",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosManagedKubernetesCluster) Stack() alicloudroscdkcore.Stack {
	var returns alicloudroscdkcore.Stack
	_jsii_.Get(
		j,
		"stack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosManagedKubernetesCluster) Tags() *[]*RosManagedKubernetesCluster_TagsProperty {
	var returns *[]*RosManagedKubernetesCluster_TagsProperty
	_jsii_.Get(
		j,
		"tags",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosManagedKubernetesCluster) Taint() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"taint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosManagedKubernetesCluster) TimeoutMins() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"timeoutMins",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosManagedKubernetesCluster) UpdatedProperites() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"updatedProperites",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosManagedKubernetesCluster) UserData() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"userData",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosManagedKubernetesCluster) VpcId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"vpcId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosManagedKubernetesCluster) VSwitchIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"vSwitchIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosManagedKubernetesCluster) WorkerDataDisk() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"workerDataDisk",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosManagedKubernetesCluster) WorkerDataDisks() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"workerDataDisks",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosManagedKubernetesCluster) WorkerInstanceTypes() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"workerInstanceTypes",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosManagedKubernetesCluster) WorkerSystemDiskCategory() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"workerSystemDiskCategory",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosManagedKubernetesCluster) WorkerSystemDiskPerformanceLevel() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"workerSystemDiskPerformanceLevel",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosManagedKubernetesCluster) WorkerSystemDiskSize() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"workerSystemDiskSize",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosManagedKubernetesCluster) ZoneIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"zoneIds",
		&returns,
	)
	return returns
}


func NewRosManagedKubernetesCluster(scope alicloudroscdkcore.Construct, id *string, props *RosManagedKubernetesClusterProps, enableResourcePropertyConstraint *bool) RosManagedKubernetesCluster {
	_init_.Initialize()

	if err := validateNewRosManagedKubernetesClusterParameters(scope, id, props, enableResourcePropertyConstraint); err != nil {
		panic(err)
	}
	j := jsiiProxy_RosManagedKubernetesCluster{}

	_jsii_.Create(
		"@alicloud/ros-cdk-cs.RosManagedKubernetesCluster",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		&j,
	)

	return &j
}

func NewRosManagedKubernetesCluster_Override(r RosManagedKubernetesCluster, scope alicloudroscdkcore.Construct, id *string, props *RosManagedKubernetesClusterProps, enableResourcePropertyConstraint *bool) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-cs.RosManagedKubernetesCluster",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		r,
	)
}

func (j *jsiiProxy_RosManagedKubernetesCluster)SetAddons(val interface{}) {
	if err := j.validateSetAddonsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"addons",
		val,
	)
}

func (j *jsiiProxy_RosManagedKubernetesCluster)SetAutoRenew(val interface{}) {
	if err := j.validateSetAutoRenewParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"autoRenew",
		val,
	)
}

func (j *jsiiProxy_RosManagedKubernetesCluster)SetAutoRenewPeriod(val interface{}) {
	if err := j.validateSetAutoRenewPeriodParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"autoRenewPeriod",
		val,
	)
}

func (j *jsiiProxy_RosManagedKubernetesCluster)SetChargeType(val interface{}) {
	if err := j.validateSetChargeTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"chargeType",
		val,
	)
}

func (j *jsiiProxy_RosManagedKubernetesCluster)SetCloudMonitorFlags(val interface{}) {
	if err := j.validateSetCloudMonitorFlagsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"cloudMonitorFlags",
		val,
	)
}

func (j *jsiiProxy_RosManagedKubernetesCluster)SetClusterSpec(val interface{}) {
	if err := j.validateSetClusterSpecParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"clusterSpec",
		val,
	)
}

func (j *jsiiProxy_RosManagedKubernetesCluster)SetContainerCidr(val interface{}) {
	if err := j.validateSetContainerCidrParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"containerCidr",
		val,
	)
}

func (j *jsiiProxy_RosManagedKubernetesCluster)SetDeleteOptions(val interface{}) {
	if err := j.validateSetDeleteOptionsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"deleteOptions",
		val,
	)
}

func (j *jsiiProxy_RosManagedKubernetesCluster)SetDeletionProtection(val interface{}) {
	if err := j.validateSetDeletionProtectionParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"deletionProtection",
		val,
	)
}

func (j *jsiiProxy_RosManagedKubernetesCluster)SetDisableRollback(val interface{}) {
	if err := j.validateSetDisableRollbackParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"disableRollback",
		val,
	)
}

func (j *jsiiProxy_RosManagedKubernetesCluster)SetEnableResourcePropertyConstraint(val *bool) {
	if err := j.validateSetEnableResourcePropertyConstraintParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableResourcePropertyConstraint",
		val,
	)
}

func (j *jsiiProxy_RosManagedKubernetesCluster)SetEncryptionProviderKey(val interface{}) {
	if err := j.validateSetEncryptionProviderKeyParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"encryptionProviderKey",
		val,
	)
}

func (j *jsiiProxy_RosManagedKubernetesCluster)SetEndpointPublicAccess(val interface{}) {
	if err := j.validateSetEndpointPublicAccessParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"endpointPublicAccess",
		val,
	)
}

func (j *jsiiProxy_RosManagedKubernetesCluster)SetFormatDisk(val interface{}) {
	if err := j.validateSetFormatDiskParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"formatDisk",
		val,
	)
}

func (j *jsiiProxy_RosManagedKubernetesCluster)SetIsEnterpriseSecurityGroup(val interface{}) {
	if err := j.validateSetIsEnterpriseSecurityGroupParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"isEnterpriseSecurityGroup",
		val,
	)
}

func (j *jsiiProxy_RosManagedKubernetesCluster)SetKeepInstanceName(val interface{}) {
	if err := j.validateSetKeepInstanceNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"keepInstanceName",
		val,
	)
}

func (j *jsiiProxy_RosManagedKubernetesCluster)SetKeyPair(val interface{}) {
	if err := j.validateSetKeyPairParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"keyPair",
		val,
	)
}

func (j *jsiiProxy_RosManagedKubernetesCluster)SetKubernetesVersion(val interface{}) {
	if err := j.validateSetKubernetesVersionParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"kubernetesVersion",
		val,
	)
}

func (j *jsiiProxy_RosManagedKubernetesCluster)SetLoadBalancerSpec(val interface{}) {
	if err := j.validateSetLoadBalancerSpecParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"loadBalancerSpec",
		val,
	)
}

func (j *jsiiProxy_RosManagedKubernetesCluster)SetLoginPassword(val interface{}) {
	if err := j.validateSetLoginPasswordParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"loginPassword",
		val,
	)
}

func (j *jsiiProxy_RosManagedKubernetesCluster)SetName(val interface{}) {
	if err := j.validateSetNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"name",
		val,
	)
}

func (j *jsiiProxy_RosManagedKubernetesCluster)SetNodeCidrMask(val interface{}) {
	if err := j.validateSetNodeCidrMaskParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"nodeCidrMask",
		val,
	)
}

func (j *jsiiProxy_RosManagedKubernetesCluster)SetNodeNameMode(val interface{}) {
	if err := j.validateSetNodeNameModeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"nodeNameMode",
		val,
	)
}

func (j *jsiiProxy_RosManagedKubernetesCluster)SetNodePools(val interface{}) {
	if err := j.validateSetNodePoolsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"nodePools",
		val,
	)
}

func (j *jsiiProxy_RosManagedKubernetesCluster)SetNumOfNodes(val interface{}) {
	if err := j.validateSetNumOfNodesParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"numOfNodes",
		val,
	)
}

func (j *jsiiProxy_RosManagedKubernetesCluster)SetOsType(val interface{}) {
	if err := j.validateSetOsTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"osType",
		val,
	)
}

func (j *jsiiProxy_RosManagedKubernetesCluster)SetPeriod(val interface{}) {
	if err := j.validateSetPeriodParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"period",
		val,
	)
}

func (j *jsiiProxy_RosManagedKubernetesCluster)SetPeriodUnit(val interface{}) {
	if err := j.validateSetPeriodUnitParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"periodUnit",
		val,
	)
}

func (j *jsiiProxy_RosManagedKubernetesCluster)SetPlatform(val interface{}) {
	if err := j.validateSetPlatformParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"platform",
		val,
	)
}

func (j *jsiiProxy_RosManagedKubernetesCluster)SetPodVswitchIds(val interface{}) {
	if err := j.validateSetPodVswitchIdsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"podVswitchIds",
		val,
	)
}

func (j *jsiiProxy_RosManagedKubernetesCluster)SetProxyMode(val interface{}) {
	if err := j.validateSetProxyModeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"proxyMode",
		val,
	)
}

func (j *jsiiProxy_RosManagedKubernetesCluster)SetResourceGroupId(val interface{}) {
	if err := j.validateSetResourceGroupIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"resourceGroupId",
		val,
	)
}

func (j *jsiiProxy_RosManagedKubernetesCluster)SetRuntime(val interface{}) {
	if err := j.validateSetRuntimeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"runtime",
		val,
	)
}

func (j *jsiiProxy_RosManagedKubernetesCluster)SetSecurityGroupId(val interface{}) {
	if err := j.validateSetSecurityGroupIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"securityGroupId",
		val,
	)
}

func (j *jsiiProxy_RosManagedKubernetesCluster)SetSecurityHardeningOs(val interface{}) {
	if err := j.validateSetSecurityHardeningOsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"securityHardeningOs",
		val,
	)
}

func (j *jsiiProxy_RosManagedKubernetesCluster)SetServiceCidr(val interface{}) {
	if err := j.validateSetServiceCidrParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"serviceCidr",
		val,
	)
}

func (j *jsiiProxy_RosManagedKubernetesCluster)SetSnatEntry(val interface{}) {
	if err := j.validateSetSnatEntryParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"snatEntry",
		val,
	)
}

func (j *jsiiProxy_RosManagedKubernetesCluster)SetSocEnabled(val interface{}) {
	if err := j.validateSetSocEnabledParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"socEnabled",
		val,
	)
}

func (j *jsiiProxy_RosManagedKubernetesCluster)SetTags(val *[]*RosManagedKubernetesCluster_TagsProperty) {
	if err := j.validateSetTagsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"tags",
		val,
	)
}

func (j *jsiiProxy_RosManagedKubernetesCluster)SetTaint(val interface{}) {
	if err := j.validateSetTaintParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"taint",
		val,
	)
}

func (j *jsiiProxy_RosManagedKubernetesCluster)SetTimeoutMins(val interface{}) {
	if err := j.validateSetTimeoutMinsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"timeoutMins",
		val,
	)
}

func (j *jsiiProxy_RosManagedKubernetesCluster)SetUserData(val interface{}) {
	if err := j.validateSetUserDataParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"userData",
		val,
	)
}

func (j *jsiiProxy_RosManagedKubernetesCluster)SetVpcId(val interface{}) {
	if err := j.validateSetVpcIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"vpcId",
		val,
	)
}

func (j *jsiiProxy_RosManagedKubernetesCluster)SetVSwitchIds(val interface{}) {
	if err := j.validateSetVSwitchIdsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"vSwitchIds",
		val,
	)
}

func (j *jsiiProxy_RosManagedKubernetesCluster)SetWorkerDataDisk(val interface{}) {
	if err := j.validateSetWorkerDataDiskParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"workerDataDisk",
		val,
	)
}

func (j *jsiiProxy_RosManagedKubernetesCluster)SetWorkerDataDisks(val interface{}) {
	if err := j.validateSetWorkerDataDisksParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"workerDataDisks",
		val,
	)
}

func (j *jsiiProxy_RosManagedKubernetesCluster)SetWorkerInstanceTypes(val interface{}) {
	if err := j.validateSetWorkerInstanceTypesParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"workerInstanceTypes",
		val,
	)
}

func (j *jsiiProxy_RosManagedKubernetesCluster)SetWorkerSystemDiskCategory(val interface{}) {
	if err := j.validateSetWorkerSystemDiskCategoryParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"workerSystemDiskCategory",
		val,
	)
}

func (j *jsiiProxy_RosManagedKubernetesCluster)SetWorkerSystemDiskPerformanceLevel(val interface{}) {
	if err := j.validateSetWorkerSystemDiskPerformanceLevelParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"workerSystemDiskPerformanceLevel",
		val,
	)
}

func (j *jsiiProxy_RosManagedKubernetesCluster)SetWorkerSystemDiskSize(val interface{}) {
	if err := j.validateSetWorkerSystemDiskSizeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"workerSystemDiskSize",
		val,
	)
}

func (j *jsiiProxy_RosManagedKubernetesCluster)SetZoneIds(val interface{}) {
	if err := j.validateSetZoneIdsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"zoneIds",
		val,
	)
}

// Return whether the given object is a Construct.
func RosManagedKubernetesCluster_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosManagedKubernetesCluster_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-cs.RosManagedKubernetesCluster",
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
func RosManagedKubernetesCluster_IsRosElement(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosManagedKubernetesCluster_IsRosElementParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-cs.RosManagedKubernetesCluster",
		"isRosElement",
		[]interface{}{x},
		&returns,
	)

	return returns
}

// Check whether the given construct is a RosResource.
func RosManagedKubernetesCluster_IsRosResource(construct alicloudroscdkcore.IConstruct) *bool {
	_init_.Initialize()

	if err := validateRosManagedKubernetesCluster_IsRosResourceParameters(construct); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-cs.RosManagedKubernetesCluster",
		"isRosResource",
		[]interface{}{construct},
		&returns,
	)

	return returns
}

func RosManagedKubernetesCluster_ROS_RESOURCE_TYPE_NAME() *string {
	_init_.Initialize()
	var returns *string
	_jsii_.StaticGet(
		"@alicloud/ros-cdk-cs.RosManagedKubernetesCluster",
		"ROS_RESOURCE_TYPE_NAME",
		&returns,
	)
	return returns
}

func (r *jsiiProxy_RosManagedKubernetesCluster) AddCondition(con alicloudroscdkcore.RosCondition) {
	if err := r.validateAddConditionParameters(con); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCondition",
		[]interface{}{con},
	)
}

func (r *jsiiProxy_RosManagedKubernetesCluster) AddCount(count interface{}) {
	if err := r.validateAddCountParameters(count); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCount",
		[]interface{}{count},
	)
}

func (r *jsiiProxy_RosManagedKubernetesCluster) AddDeletionOverride(path *string) {
	if err := r.validateAddDeletionOverrideParameters(path); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDeletionOverride",
		[]interface{}{path},
	)
}

func (r *jsiiProxy_RosManagedKubernetesCluster) AddDependsOn(target alicloudroscdkcore.RosResource) {
	if err := r.validateAddDependsOnParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDependsOn",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosManagedKubernetesCluster) AddDesc(desc *string) {
	if err := r.validateAddDescParameters(desc); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDesc",
		[]interface{}{desc},
	)
}

func (r *jsiiProxy_RosManagedKubernetesCluster) AddMetaData(key *string, value interface{}) {
	if err := r.validateAddMetaDataParameters(key, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addMetaData",
		[]interface{}{key, value},
	)
}

func (r *jsiiProxy_RosManagedKubernetesCluster) AddOverride(path *string, value interface{}) {
	if err := r.validateAddOverrideParameters(path, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addOverride",
		[]interface{}{path, value},
	)
}

func (r *jsiiProxy_RosManagedKubernetesCluster) AddPropertyDeletionOverride(propertyPath *string) {
	if err := r.validateAddPropertyDeletionOverrideParameters(propertyPath); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyDeletionOverride",
		[]interface{}{propertyPath},
	)
}

func (r *jsiiProxy_RosManagedKubernetesCluster) AddPropertyOverride(propertyPath *string, value interface{}) {
	if err := r.validateAddPropertyOverrideParameters(propertyPath, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyOverride",
		[]interface{}{propertyPath, value},
	)
}

func (r *jsiiProxy_RosManagedKubernetesCluster) AddRosDependency(target *string) {
	if err := r.validateAddRosDependencyParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addRosDependency",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosManagedKubernetesCluster) ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy, options *alicloudroscdkcore.RemovalPolicyOptions) {
	if err := r.validateApplyRemovalPolicyParameters(options); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"applyRemovalPolicy",
		[]interface{}{policy, options},
	)
}

func (r *jsiiProxy_RosManagedKubernetesCluster) GetAtt(attributeName *string) alicloudroscdkcore.Reference {
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

func (r *jsiiProxy_RosManagedKubernetesCluster) OnPrepare() {
	_jsii_.InvokeVoid(
		r,
		"onPrepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosManagedKubernetesCluster) OnSynthesize(session constructs.ISynthesisSession) {
	if err := r.validateOnSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"onSynthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosManagedKubernetesCluster) OnValidate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"onValidate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosManagedKubernetesCluster) OverrideLogicalId(newLogicalId *string) {
	if err := r.validateOverrideLogicalIdParameters(newLogicalId); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"overrideLogicalId",
		[]interface{}{newLogicalId},
	)
}

func (r *jsiiProxy_RosManagedKubernetesCluster) Prepare() {
	_jsii_.InvokeVoid(
		r,
		"prepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosManagedKubernetesCluster) RenderProperties(props *map[string]interface{}) *map[string]interface{} {
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

func (r *jsiiProxy_RosManagedKubernetesCluster) Synthesize(session alicloudroscdkcore.ISynthesisSession) {
	if err := r.validateSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"synthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosManagedKubernetesCluster) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		r,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosManagedKubernetesCluster) Validate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"validate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosManagedKubernetesCluster) ValidateProperties(_properties interface{}) {
	if err := r.validateValidatePropertiesParameters(_properties); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"validateProperties",
		[]interface{}{_properties},
	)
}

