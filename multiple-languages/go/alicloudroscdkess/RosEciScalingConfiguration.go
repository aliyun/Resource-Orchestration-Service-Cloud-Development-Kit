package alicloudroscdkess

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkess/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkess/internal"
	"github.com/aws/constructs-go/constructs/v3"
)

// This class is a base encapsulation around the ROS resource type `ALIYUN::ESS::EciScalingConfiguration`.
type RosEciScalingConfiguration interface {
	alicloudroscdkcore.RosResource
	AcrRegistryInfos() interface{}
	SetAcrRegistryInfos(val interface{})
	ActiveDeadlineSeconds() interface{}
	SetActiveDeadlineSeconds(val interface{})
	AttrScalingConfigurationId() alicloudroscdkcore.IResolvable
	AutoCreateEip() interface{}
	SetAutoCreateEip(val interface{})
	AutoMatchImageCache() interface{}
	SetAutoMatchImageCache(val interface{})
	ContainerGroupName() interface{}
	SetContainerGroupName(val interface{})
	Containers() interface{}
	SetContainers(val interface{})
	CostOptimization() interface{}
	SetCostOptimization(val interface{})
	Cpu() interface{}
	SetCpu(val interface{})
	CpuOptionsCore() interface{}
	SetCpuOptionsCore(val interface{})
	CpuOptionsThreadsPerCore() interface{}
	SetCpuOptionsThreadsPerCore(val interface{})
	// Returns: the stack trace of the point where this Resource was created from, sourced
	// from the +metadata+ entry typed +aliyun:ros:logicalId+, and with the bottom-most
	// node +internal+ entries filtered.
	CreationStack() *[]*string
	DataCacheBucket() interface{}
	SetDataCacheBucket(val interface{})
	DataCacheBurstingEnabled() interface{}
	SetDataCacheBurstingEnabled(val interface{})
	DataCachePl() interface{}
	SetDataCachePl(val interface{})
	DataCacheProvisionedIops() interface{}
	SetDataCacheProvisionedIops(val interface{})
	DnsConfigNameServers() interface{}
	SetDnsConfigNameServers(val interface{})
	DnsConfigOptions() interface{}
	SetDnsConfigOptions(val interface{})
	DnsConfigSearches() interface{}
	SetDnsConfigSearches(val interface{})
	DnsPolicy() interface{}
	SetDnsPolicy(val interface{})
	EgressBandwidth() interface{}
	SetEgressBandwidth(val interface{})
	EipBandwidth() interface{}
	SetEipBandwidth(val interface{})
	EnableResourcePropertyConstraint() *bool
	SetEnableResourcePropertyConstraint(val *bool)
	EphemeralStorage() interface{}
	SetEphemeralStorage(val interface{})
	HostAliases() interface{}
	SetHostAliases(val interface{})
	HostName() interface{}
	SetHostName(val interface{})
	ImageRegistryCredentials() interface{}
	SetImageRegistryCredentials(val interface{})
	ImageSnapshotId() interface{}
	SetImageSnapshotId(val interface{})
	IngressBandwidth() interface{}
	SetIngressBandwidth(val interface{})
	InitContainers() interface{}
	SetInitContainers(val interface{})
	InstanceFamilyLevel() interface{}
	SetInstanceFamilyLevel(val interface{})
	InstanceTypes() interface{}
	SetInstanceTypes(val interface{})
	Ipv6AddressCount() interface{}
	SetIpv6AddressCount(val interface{})
	LoadBalancerWeight() interface{}
	SetLoadBalancerWeight(val interface{})
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
	Memory() interface{}
	SetMemory(val interface{})
	// The construct tree node associated with this construct.
	Node() alicloudroscdkcore.ConstructNode
	NtpServers() interface{}
	SetNtpServers(val interface{})
	RamRoleName() interface{}
	SetRamRoleName(val interface{})
	// Return a string that will be resolved to a RosTemplate `{ Ref }` for this element.
	//
	// If, by any chance, the intrinsic reference of a resource is not a string, you could
	// coerce it to an IResolvable through `Lazy.any({ produce: resource.ref })`.
	Ref() *string
	ResourceGroupId() interface{}
	SetResourceGroupId(val interface{})
	RestartPolicy() interface{}
	SetRestartPolicy(val interface{})
	// Options for this resource, such as condition, update policy etc.
	RosOptions() alicloudroscdkcore.IRosResourceOptions
	RosProperties() *map[string]interface{}
	// ROS resource type.
	RosResourceType() *string
	ScalingConfigurationName() interface{}
	SetScalingConfigurationName(val interface{})
	ScalingGroupId() interface{}
	SetScalingGroupId(val interface{})
	SecurityContextSysctls() interface{}
	SetSecurityContextSysctls(val interface{})
	SecurityGroupId() interface{}
	SetSecurityGroupId(val interface{})
	SpotPriceLimit() interface{}
	SetSpotPriceLimit(val interface{})
	SpotStrategy() interface{}
	SetSpotStrategy(val interface{})
	// The stack in which this element is defined.
	//
	// RosElements must be defined within a stack scope (directly or indirectly).
	Stack() alicloudroscdkcore.Stack
	Tags() *[]*RosEciScalingConfiguration_TagsProperty
	SetTags(val *[]*RosEciScalingConfiguration_TagsProperty)
	TerminationGracePeriodSeconds() interface{}
	SetTerminationGracePeriodSeconds(val interface{})
	// Return properties modified after initiation.
	//
	// Resources that expose mutable properties should override this function to
	// collect and return the properties object for this resource.
	UpdatedProperites() *map[string]interface{}
	Volumes() interface{}
	SetVolumes(val interface{})
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

// The jsii proxy struct for RosEciScalingConfiguration
type jsiiProxy_RosEciScalingConfiguration struct {
	internal.Type__alicloudroscdkcoreRosResource
}

func (j *jsiiProxy_RosEciScalingConfiguration) AcrRegistryInfos() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"acrRegistryInfos",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEciScalingConfiguration) ActiveDeadlineSeconds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"activeDeadlineSeconds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEciScalingConfiguration) AttrScalingConfigurationId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrScalingConfigurationId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEciScalingConfiguration) AutoCreateEip() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"autoCreateEip",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEciScalingConfiguration) AutoMatchImageCache() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"autoMatchImageCache",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEciScalingConfiguration) ContainerGroupName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"containerGroupName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEciScalingConfiguration) Containers() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"containers",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEciScalingConfiguration) CostOptimization() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"costOptimization",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEciScalingConfiguration) Cpu() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"cpu",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEciScalingConfiguration) CpuOptionsCore() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"cpuOptionsCore",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEciScalingConfiguration) CpuOptionsThreadsPerCore() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"cpuOptionsThreadsPerCore",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEciScalingConfiguration) CreationStack() *[]*string {
	var returns *[]*string
	_jsii_.Get(
		j,
		"creationStack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEciScalingConfiguration) DataCacheBucket() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"dataCacheBucket",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEciScalingConfiguration) DataCacheBurstingEnabled() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"dataCacheBurstingEnabled",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEciScalingConfiguration) DataCachePl() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"dataCachePl",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEciScalingConfiguration) DataCacheProvisionedIops() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"dataCacheProvisionedIops",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEciScalingConfiguration) DnsConfigNameServers() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"dnsConfigNameServers",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEciScalingConfiguration) DnsConfigOptions() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"dnsConfigOptions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEciScalingConfiguration) DnsConfigSearches() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"dnsConfigSearches",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEciScalingConfiguration) DnsPolicy() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"dnsPolicy",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEciScalingConfiguration) EgressBandwidth() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"egressBandwidth",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEciScalingConfiguration) EipBandwidth() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"eipBandwidth",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEciScalingConfiguration) EnableResourcePropertyConstraint() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"enableResourcePropertyConstraint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEciScalingConfiguration) EphemeralStorage() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"ephemeralStorage",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEciScalingConfiguration) HostAliases() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"hostAliases",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEciScalingConfiguration) HostName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"hostName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEciScalingConfiguration) ImageRegistryCredentials() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"imageRegistryCredentials",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEciScalingConfiguration) ImageSnapshotId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"imageSnapshotId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEciScalingConfiguration) IngressBandwidth() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"ingressBandwidth",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEciScalingConfiguration) InitContainers() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"initContainers",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEciScalingConfiguration) InstanceFamilyLevel() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"instanceFamilyLevel",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEciScalingConfiguration) InstanceTypes() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"instanceTypes",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEciScalingConfiguration) Ipv6AddressCount() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"ipv6AddressCount",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEciScalingConfiguration) LoadBalancerWeight() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"loadBalancerWeight",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEciScalingConfiguration) LogicalId() *string {
	var returns *string
	_jsii_.Get(
		j,
		"logicalId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEciScalingConfiguration) Memory() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"memory",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEciScalingConfiguration) Node() alicloudroscdkcore.ConstructNode {
	var returns alicloudroscdkcore.ConstructNode
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEciScalingConfiguration) NtpServers() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"ntpServers",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEciScalingConfiguration) RamRoleName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"ramRoleName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEciScalingConfiguration) Ref() *string {
	var returns *string
	_jsii_.Get(
		j,
		"ref",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEciScalingConfiguration) ResourceGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"resourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEciScalingConfiguration) RestartPolicy() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"restartPolicy",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEciScalingConfiguration) RosOptions() alicloudroscdkcore.IRosResourceOptions {
	var returns alicloudroscdkcore.IRosResourceOptions
	_jsii_.Get(
		j,
		"rosOptions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEciScalingConfiguration) RosProperties() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"rosProperties",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEciScalingConfiguration) RosResourceType() *string {
	var returns *string
	_jsii_.Get(
		j,
		"rosResourceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEciScalingConfiguration) ScalingConfigurationName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"scalingConfigurationName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEciScalingConfiguration) ScalingGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"scalingGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEciScalingConfiguration) SecurityContextSysctls() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"securityContextSysctls",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEciScalingConfiguration) SecurityGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"securityGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEciScalingConfiguration) SpotPriceLimit() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"spotPriceLimit",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEciScalingConfiguration) SpotStrategy() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"spotStrategy",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEciScalingConfiguration) Stack() alicloudroscdkcore.Stack {
	var returns alicloudroscdkcore.Stack
	_jsii_.Get(
		j,
		"stack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEciScalingConfiguration) Tags() *[]*RosEciScalingConfiguration_TagsProperty {
	var returns *[]*RosEciScalingConfiguration_TagsProperty
	_jsii_.Get(
		j,
		"tags",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEciScalingConfiguration) TerminationGracePeriodSeconds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"terminationGracePeriodSeconds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEciScalingConfiguration) UpdatedProperites() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"updatedProperites",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEciScalingConfiguration) Volumes() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"volumes",
		&returns,
	)
	return returns
}


func NewRosEciScalingConfiguration(scope alicloudroscdkcore.Construct, id *string, props *RosEciScalingConfigurationProps, enableResourcePropertyConstraint *bool) RosEciScalingConfiguration {
	_init_.Initialize()

	if err := validateNewRosEciScalingConfigurationParameters(scope, id, props, enableResourcePropertyConstraint); err != nil {
		panic(err)
	}
	j := jsiiProxy_RosEciScalingConfiguration{}

	_jsii_.Create(
		"@alicloud/ros-cdk-ess.RosEciScalingConfiguration",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		&j,
	)

	return &j
}

func NewRosEciScalingConfiguration_Override(r RosEciScalingConfiguration, scope alicloudroscdkcore.Construct, id *string, props *RosEciScalingConfigurationProps, enableResourcePropertyConstraint *bool) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-ess.RosEciScalingConfiguration",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		r,
	)
}

func (j *jsiiProxy_RosEciScalingConfiguration)SetAcrRegistryInfos(val interface{}) {
	if err := j.validateSetAcrRegistryInfosParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"acrRegistryInfos",
		val,
	)
}

func (j *jsiiProxy_RosEciScalingConfiguration)SetActiveDeadlineSeconds(val interface{}) {
	if err := j.validateSetActiveDeadlineSecondsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"activeDeadlineSeconds",
		val,
	)
}

func (j *jsiiProxy_RosEciScalingConfiguration)SetAutoCreateEip(val interface{}) {
	if err := j.validateSetAutoCreateEipParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"autoCreateEip",
		val,
	)
}

func (j *jsiiProxy_RosEciScalingConfiguration)SetAutoMatchImageCache(val interface{}) {
	if err := j.validateSetAutoMatchImageCacheParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"autoMatchImageCache",
		val,
	)
}

func (j *jsiiProxy_RosEciScalingConfiguration)SetContainerGroupName(val interface{}) {
	if err := j.validateSetContainerGroupNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"containerGroupName",
		val,
	)
}

func (j *jsiiProxy_RosEciScalingConfiguration)SetContainers(val interface{}) {
	if err := j.validateSetContainersParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"containers",
		val,
	)
}

func (j *jsiiProxy_RosEciScalingConfiguration)SetCostOptimization(val interface{}) {
	if err := j.validateSetCostOptimizationParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"costOptimization",
		val,
	)
}

func (j *jsiiProxy_RosEciScalingConfiguration)SetCpu(val interface{}) {
	if err := j.validateSetCpuParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"cpu",
		val,
	)
}

func (j *jsiiProxy_RosEciScalingConfiguration)SetCpuOptionsCore(val interface{}) {
	if err := j.validateSetCpuOptionsCoreParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"cpuOptionsCore",
		val,
	)
}

func (j *jsiiProxy_RosEciScalingConfiguration)SetCpuOptionsThreadsPerCore(val interface{}) {
	if err := j.validateSetCpuOptionsThreadsPerCoreParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"cpuOptionsThreadsPerCore",
		val,
	)
}

func (j *jsiiProxy_RosEciScalingConfiguration)SetDataCacheBucket(val interface{}) {
	if err := j.validateSetDataCacheBucketParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"dataCacheBucket",
		val,
	)
}

func (j *jsiiProxy_RosEciScalingConfiguration)SetDataCacheBurstingEnabled(val interface{}) {
	if err := j.validateSetDataCacheBurstingEnabledParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"dataCacheBurstingEnabled",
		val,
	)
}

func (j *jsiiProxy_RosEciScalingConfiguration)SetDataCachePl(val interface{}) {
	if err := j.validateSetDataCachePlParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"dataCachePl",
		val,
	)
}

func (j *jsiiProxy_RosEciScalingConfiguration)SetDataCacheProvisionedIops(val interface{}) {
	if err := j.validateSetDataCacheProvisionedIopsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"dataCacheProvisionedIops",
		val,
	)
}

func (j *jsiiProxy_RosEciScalingConfiguration)SetDnsConfigNameServers(val interface{}) {
	if err := j.validateSetDnsConfigNameServersParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"dnsConfigNameServers",
		val,
	)
}

func (j *jsiiProxy_RosEciScalingConfiguration)SetDnsConfigOptions(val interface{}) {
	if err := j.validateSetDnsConfigOptionsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"dnsConfigOptions",
		val,
	)
}

func (j *jsiiProxy_RosEciScalingConfiguration)SetDnsConfigSearches(val interface{}) {
	if err := j.validateSetDnsConfigSearchesParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"dnsConfigSearches",
		val,
	)
}

func (j *jsiiProxy_RosEciScalingConfiguration)SetDnsPolicy(val interface{}) {
	if err := j.validateSetDnsPolicyParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"dnsPolicy",
		val,
	)
}

func (j *jsiiProxy_RosEciScalingConfiguration)SetEgressBandwidth(val interface{}) {
	if err := j.validateSetEgressBandwidthParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"egressBandwidth",
		val,
	)
}

func (j *jsiiProxy_RosEciScalingConfiguration)SetEipBandwidth(val interface{}) {
	if err := j.validateSetEipBandwidthParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"eipBandwidth",
		val,
	)
}

func (j *jsiiProxy_RosEciScalingConfiguration)SetEnableResourcePropertyConstraint(val *bool) {
	if err := j.validateSetEnableResourcePropertyConstraintParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableResourcePropertyConstraint",
		val,
	)
}

func (j *jsiiProxy_RosEciScalingConfiguration)SetEphemeralStorage(val interface{}) {
	if err := j.validateSetEphemeralStorageParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"ephemeralStorage",
		val,
	)
}

func (j *jsiiProxy_RosEciScalingConfiguration)SetHostAliases(val interface{}) {
	if err := j.validateSetHostAliasesParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"hostAliases",
		val,
	)
}

func (j *jsiiProxy_RosEciScalingConfiguration)SetHostName(val interface{}) {
	if err := j.validateSetHostNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"hostName",
		val,
	)
}

func (j *jsiiProxy_RosEciScalingConfiguration)SetImageRegistryCredentials(val interface{}) {
	if err := j.validateSetImageRegistryCredentialsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"imageRegistryCredentials",
		val,
	)
}

func (j *jsiiProxy_RosEciScalingConfiguration)SetImageSnapshotId(val interface{}) {
	if err := j.validateSetImageSnapshotIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"imageSnapshotId",
		val,
	)
}

func (j *jsiiProxy_RosEciScalingConfiguration)SetIngressBandwidth(val interface{}) {
	if err := j.validateSetIngressBandwidthParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"ingressBandwidth",
		val,
	)
}

func (j *jsiiProxy_RosEciScalingConfiguration)SetInitContainers(val interface{}) {
	if err := j.validateSetInitContainersParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"initContainers",
		val,
	)
}

func (j *jsiiProxy_RosEciScalingConfiguration)SetInstanceFamilyLevel(val interface{}) {
	if err := j.validateSetInstanceFamilyLevelParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"instanceFamilyLevel",
		val,
	)
}

func (j *jsiiProxy_RosEciScalingConfiguration)SetInstanceTypes(val interface{}) {
	if err := j.validateSetInstanceTypesParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"instanceTypes",
		val,
	)
}

func (j *jsiiProxy_RosEciScalingConfiguration)SetIpv6AddressCount(val interface{}) {
	if err := j.validateSetIpv6AddressCountParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"ipv6AddressCount",
		val,
	)
}

func (j *jsiiProxy_RosEciScalingConfiguration)SetLoadBalancerWeight(val interface{}) {
	if err := j.validateSetLoadBalancerWeightParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"loadBalancerWeight",
		val,
	)
}

func (j *jsiiProxy_RosEciScalingConfiguration)SetMemory(val interface{}) {
	if err := j.validateSetMemoryParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"memory",
		val,
	)
}

func (j *jsiiProxy_RosEciScalingConfiguration)SetNtpServers(val interface{}) {
	if err := j.validateSetNtpServersParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"ntpServers",
		val,
	)
}

func (j *jsiiProxy_RosEciScalingConfiguration)SetRamRoleName(val interface{}) {
	if err := j.validateSetRamRoleNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"ramRoleName",
		val,
	)
}

func (j *jsiiProxy_RosEciScalingConfiguration)SetResourceGroupId(val interface{}) {
	if err := j.validateSetResourceGroupIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"resourceGroupId",
		val,
	)
}

func (j *jsiiProxy_RosEciScalingConfiguration)SetRestartPolicy(val interface{}) {
	if err := j.validateSetRestartPolicyParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"restartPolicy",
		val,
	)
}

func (j *jsiiProxy_RosEciScalingConfiguration)SetScalingConfigurationName(val interface{}) {
	if err := j.validateSetScalingConfigurationNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"scalingConfigurationName",
		val,
	)
}

func (j *jsiiProxy_RosEciScalingConfiguration)SetScalingGroupId(val interface{}) {
	if err := j.validateSetScalingGroupIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"scalingGroupId",
		val,
	)
}

func (j *jsiiProxy_RosEciScalingConfiguration)SetSecurityContextSysctls(val interface{}) {
	if err := j.validateSetSecurityContextSysctlsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"securityContextSysctls",
		val,
	)
}

func (j *jsiiProxy_RosEciScalingConfiguration)SetSecurityGroupId(val interface{}) {
	if err := j.validateSetSecurityGroupIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"securityGroupId",
		val,
	)
}

func (j *jsiiProxy_RosEciScalingConfiguration)SetSpotPriceLimit(val interface{}) {
	if err := j.validateSetSpotPriceLimitParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"spotPriceLimit",
		val,
	)
}

func (j *jsiiProxy_RosEciScalingConfiguration)SetSpotStrategy(val interface{}) {
	if err := j.validateSetSpotStrategyParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"spotStrategy",
		val,
	)
}

func (j *jsiiProxy_RosEciScalingConfiguration)SetTags(val *[]*RosEciScalingConfiguration_TagsProperty) {
	if err := j.validateSetTagsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"tags",
		val,
	)
}

func (j *jsiiProxy_RosEciScalingConfiguration)SetTerminationGracePeriodSeconds(val interface{}) {
	if err := j.validateSetTerminationGracePeriodSecondsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"terminationGracePeriodSeconds",
		val,
	)
}

func (j *jsiiProxy_RosEciScalingConfiguration)SetVolumes(val interface{}) {
	if err := j.validateSetVolumesParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"volumes",
		val,
	)
}

// Return whether the given object is a Construct.
func RosEciScalingConfiguration_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosEciScalingConfiguration_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-ess.RosEciScalingConfiguration",
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
func RosEciScalingConfiguration_IsRosElement(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosEciScalingConfiguration_IsRosElementParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-ess.RosEciScalingConfiguration",
		"isRosElement",
		[]interface{}{x},
		&returns,
	)

	return returns
}

// Check whether the given construct is a RosResource.
func RosEciScalingConfiguration_IsRosResource(construct alicloudroscdkcore.IConstruct) *bool {
	_init_.Initialize()

	if err := validateRosEciScalingConfiguration_IsRosResourceParameters(construct); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-ess.RosEciScalingConfiguration",
		"isRosResource",
		[]interface{}{construct},
		&returns,
	)

	return returns
}

func RosEciScalingConfiguration_ROS_RESOURCE_TYPE_NAME() *string {
	_init_.Initialize()
	var returns *string
	_jsii_.StaticGet(
		"@alicloud/ros-cdk-ess.RosEciScalingConfiguration",
		"ROS_RESOURCE_TYPE_NAME",
		&returns,
	)
	return returns
}

func (r *jsiiProxy_RosEciScalingConfiguration) AddCondition(con alicloudroscdkcore.RosCondition) {
	if err := r.validateAddConditionParameters(con); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCondition",
		[]interface{}{con},
	)
}

func (r *jsiiProxy_RosEciScalingConfiguration) AddCount(count interface{}) {
	if err := r.validateAddCountParameters(count); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCount",
		[]interface{}{count},
	)
}

func (r *jsiiProxy_RosEciScalingConfiguration) AddDeletionOverride(path *string) {
	if err := r.validateAddDeletionOverrideParameters(path); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDeletionOverride",
		[]interface{}{path},
	)
}

func (r *jsiiProxy_RosEciScalingConfiguration) AddDependsOn(target alicloudroscdkcore.RosResource) {
	if err := r.validateAddDependsOnParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDependsOn",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosEciScalingConfiguration) AddDesc(desc *string) {
	if err := r.validateAddDescParameters(desc); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDesc",
		[]interface{}{desc},
	)
}

func (r *jsiiProxy_RosEciScalingConfiguration) AddMetaData(key *string, value interface{}) {
	if err := r.validateAddMetaDataParameters(key, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addMetaData",
		[]interface{}{key, value},
	)
}

func (r *jsiiProxy_RosEciScalingConfiguration) AddOverride(path *string, value interface{}) {
	if err := r.validateAddOverrideParameters(path, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addOverride",
		[]interface{}{path, value},
	)
}

func (r *jsiiProxy_RosEciScalingConfiguration) AddPropertyDeletionOverride(propertyPath *string) {
	if err := r.validateAddPropertyDeletionOverrideParameters(propertyPath); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyDeletionOverride",
		[]interface{}{propertyPath},
	)
}

func (r *jsiiProxy_RosEciScalingConfiguration) AddPropertyOverride(propertyPath *string, value interface{}) {
	if err := r.validateAddPropertyOverrideParameters(propertyPath, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyOverride",
		[]interface{}{propertyPath, value},
	)
}

func (r *jsiiProxy_RosEciScalingConfiguration) AddRosDependency(target *string) {
	if err := r.validateAddRosDependencyParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addRosDependency",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosEciScalingConfiguration) ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy, options *alicloudroscdkcore.RemovalPolicyOptions) {
	if err := r.validateApplyRemovalPolicyParameters(options); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"applyRemovalPolicy",
		[]interface{}{policy, options},
	)
}

func (r *jsiiProxy_RosEciScalingConfiguration) GetAtt(attributeName *string) alicloudroscdkcore.Reference {
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

func (r *jsiiProxy_RosEciScalingConfiguration) OnPrepare() {
	_jsii_.InvokeVoid(
		r,
		"onPrepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosEciScalingConfiguration) OnSynthesize(session constructs.ISynthesisSession) {
	if err := r.validateOnSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"onSynthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosEciScalingConfiguration) OnValidate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"onValidate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosEciScalingConfiguration) OverrideLogicalId(newLogicalId *string) {
	if err := r.validateOverrideLogicalIdParameters(newLogicalId); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"overrideLogicalId",
		[]interface{}{newLogicalId},
	)
}

func (r *jsiiProxy_RosEciScalingConfiguration) Prepare() {
	_jsii_.InvokeVoid(
		r,
		"prepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosEciScalingConfiguration) RenderProperties(props *map[string]interface{}) *map[string]interface{} {
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

func (r *jsiiProxy_RosEciScalingConfiguration) Synthesize(session alicloudroscdkcore.ISynthesisSession) {
	if err := r.validateSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"synthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosEciScalingConfiguration) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		r,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosEciScalingConfiguration) Validate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"validate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosEciScalingConfiguration) ValidateProperties(_properties interface{}) {
	if err := r.validateValidatePropertiesParameters(_properties); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"validateProperties",
		[]interface{}{_properties},
	)
}

