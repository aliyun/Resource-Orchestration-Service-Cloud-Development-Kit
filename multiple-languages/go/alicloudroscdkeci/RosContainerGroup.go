package alicloudroscdkeci

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkeci/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkeci/internal"
	"github.com/aws/constructs-go/constructs/v3"
)

// This class is a base encapsulation around the ROS resource type `ALIYUN::ECI::ContainerGroup`, which is used to create a container group.
//
// A container group is an elastic container instance.
type RosContainerGroup interface {
	alicloudroscdkcore.RosResource
	AcrRegistryInfo() interface{}
	SetAcrRegistryInfo(val interface{})
	ActiveDeadlineSeconds() interface{}
	SetActiveDeadlineSeconds(val interface{})
	AttrContainerGroupId() alicloudroscdkcore.IResolvable
	AttrContainerGroupName() alicloudroscdkcore.IResolvable
	AttrEniInstanceId() alicloudroscdkcore.IResolvable
	AttrInternetIp() alicloudroscdkcore.IResolvable
	AttrIntranetIp() alicloudroscdkcore.IResolvable
	AttrIpv6Address() alicloudroscdkcore.IResolvable
	AttrRegionId() alicloudroscdkcore.IResolvable
	AttrSecurityGroupId() alicloudroscdkcore.IResolvable
	AttrVSwitchId() alicloudroscdkcore.IResolvable
	AttrZoneId() alicloudroscdkcore.IResolvable
	AutoMatchImageCache() interface{}
	SetAutoMatchImageCache(val interface{})
	Container() interface{}
	SetContainer(val interface{})
	ContainerGroupName() interface{}
	SetContainerGroupName(val interface{})
	Cpu() interface{}
	SetCpu(val interface{})
	// Returns: the stack trace of the point where this Resource was created from, sourced
	// from the +metadata+ entry typed +aliyun:ros:logicalId+, and with the bottom-most
	// node +internal+ entries filtered.
	CreationStack() *[]*string
	DnsConfig() interface{}
	SetDnsConfig(val interface{})
	EipInstanceId() interface{}
	SetEipInstanceId(val interface{})
	EnableResourcePropertyConstraint() *bool
	SetEnableResourcePropertyConstraint(val *bool)
	HostAliase() interface{}
	SetHostAliase(val interface{})
	ImageRegistryCredential() interface{}
	SetImageRegistryCredential(val interface{})
	ImageSnapshotId() interface{}
	SetImageSnapshotId(val interface{})
	InitContainer() interface{}
	SetInitContainer(val interface{})
	InstanceType() interface{}
	SetInstanceType(val interface{})
	Ipv6AddressCount() interface{}
	SetIpv6AddressCount(val interface{})
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
	SecurityContextSysctl() interface{}
	SetSecurityContextSysctl(val interface{})
	SecurityGroupId() interface{}
	SetSecurityGroupId(val interface{})
	SlsEnable() interface{}
	SetSlsEnable(val interface{})
	SpotPriceLimit() interface{}
	SetSpotPriceLimit(val interface{})
	SpotStrategy() interface{}
	SetSpotStrategy(val interface{})
	// The stack in which this element is defined.
	//
	// RosElements must be defined within a stack scope (directly or indirectly).
	Stack() alicloudroscdkcore.Stack
	Tag() interface{}
	SetTag(val interface{})
	TerminationGracePeriodSeconds() interface{}
	SetTerminationGracePeriodSeconds(val interface{})
	// Return properties modified after initiation.
	//
	// Resources that expose mutable properties should override this function to
	// collect and return the properties object for this resource.
	UpdatedProperites() *map[string]interface{}
	Volume() interface{}
	SetVolume(val interface{})
	VSwitchId() interface{}
	SetVSwitchId(val interface{})
	ZoneId() interface{}
	SetZoneId(val interface{})
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

// The jsii proxy struct for RosContainerGroup
type jsiiProxy_RosContainerGroup struct {
	internal.Type__alicloudroscdkcoreRosResource
}

func (j *jsiiProxy_RosContainerGroup) AcrRegistryInfo() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"acrRegistryInfo",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosContainerGroup) ActiveDeadlineSeconds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"activeDeadlineSeconds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosContainerGroup) AttrContainerGroupId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrContainerGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosContainerGroup) AttrContainerGroupName() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrContainerGroupName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosContainerGroup) AttrEniInstanceId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrEniInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosContainerGroup) AttrInternetIp() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrInternetIp",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosContainerGroup) AttrIntranetIp() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrIntranetIp",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosContainerGroup) AttrIpv6Address() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrIpv6Address",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosContainerGroup) AttrRegionId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrRegionId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosContainerGroup) AttrSecurityGroupId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrSecurityGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosContainerGroup) AttrVSwitchId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrVSwitchId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosContainerGroup) AttrZoneId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrZoneId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosContainerGroup) AutoMatchImageCache() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"autoMatchImageCache",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosContainerGroup) Container() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"container",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosContainerGroup) ContainerGroupName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"containerGroupName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosContainerGroup) Cpu() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"cpu",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosContainerGroup) CreationStack() *[]*string {
	var returns *[]*string
	_jsii_.Get(
		j,
		"creationStack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosContainerGroup) DnsConfig() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"dnsConfig",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosContainerGroup) EipInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"eipInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosContainerGroup) EnableResourcePropertyConstraint() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"enableResourcePropertyConstraint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosContainerGroup) HostAliase() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"hostAliase",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosContainerGroup) ImageRegistryCredential() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"imageRegistryCredential",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosContainerGroup) ImageSnapshotId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"imageSnapshotId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosContainerGroup) InitContainer() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"initContainer",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosContainerGroup) InstanceType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"instanceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosContainerGroup) Ipv6AddressCount() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"ipv6AddressCount",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosContainerGroup) LogicalId() *string {
	var returns *string
	_jsii_.Get(
		j,
		"logicalId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosContainerGroup) Memory() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"memory",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosContainerGroup) Node() alicloudroscdkcore.ConstructNode {
	var returns alicloudroscdkcore.ConstructNode
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosContainerGroup) RamRoleName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"ramRoleName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosContainerGroup) Ref() *string {
	var returns *string
	_jsii_.Get(
		j,
		"ref",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosContainerGroup) ResourceGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"resourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosContainerGroup) RestartPolicy() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"restartPolicy",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosContainerGroup) RosOptions() alicloudroscdkcore.IRosResourceOptions {
	var returns alicloudroscdkcore.IRosResourceOptions
	_jsii_.Get(
		j,
		"rosOptions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosContainerGroup) RosProperties() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"rosProperties",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosContainerGroup) RosResourceType() *string {
	var returns *string
	_jsii_.Get(
		j,
		"rosResourceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosContainerGroup) SecurityContextSysctl() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"securityContextSysctl",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosContainerGroup) SecurityGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"securityGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosContainerGroup) SlsEnable() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"slsEnable",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosContainerGroup) SpotPriceLimit() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"spotPriceLimit",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosContainerGroup) SpotStrategy() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"spotStrategy",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosContainerGroup) Stack() alicloudroscdkcore.Stack {
	var returns alicloudroscdkcore.Stack
	_jsii_.Get(
		j,
		"stack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosContainerGroup) Tag() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"tag",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosContainerGroup) TerminationGracePeriodSeconds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"terminationGracePeriodSeconds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosContainerGroup) UpdatedProperites() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"updatedProperites",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosContainerGroup) Volume() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"volume",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosContainerGroup) VSwitchId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"vSwitchId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosContainerGroup) ZoneId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"zoneId",
		&returns,
	)
	return returns
}


func NewRosContainerGroup(scope alicloudroscdkcore.Construct, id *string, props *RosContainerGroupProps, enableResourcePropertyConstraint *bool) RosContainerGroup {
	_init_.Initialize()

	if err := validateNewRosContainerGroupParameters(scope, id, props, enableResourcePropertyConstraint); err != nil {
		panic(err)
	}
	j := jsiiProxy_RosContainerGroup{}

	_jsii_.Create(
		"@alicloud/ros-cdk-eci.RosContainerGroup",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		&j,
	)

	return &j
}

func NewRosContainerGroup_Override(r RosContainerGroup, scope alicloudroscdkcore.Construct, id *string, props *RosContainerGroupProps, enableResourcePropertyConstraint *bool) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-eci.RosContainerGroup",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		r,
	)
}

func (j *jsiiProxy_RosContainerGroup)SetAcrRegistryInfo(val interface{}) {
	if err := j.validateSetAcrRegistryInfoParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"acrRegistryInfo",
		val,
	)
}

func (j *jsiiProxy_RosContainerGroup)SetActiveDeadlineSeconds(val interface{}) {
	if err := j.validateSetActiveDeadlineSecondsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"activeDeadlineSeconds",
		val,
	)
}

func (j *jsiiProxy_RosContainerGroup)SetAutoMatchImageCache(val interface{}) {
	if err := j.validateSetAutoMatchImageCacheParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"autoMatchImageCache",
		val,
	)
}

func (j *jsiiProxy_RosContainerGroup)SetContainer(val interface{}) {
	if err := j.validateSetContainerParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"container",
		val,
	)
}

func (j *jsiiProxy_RosContainerGroup)SetContainerGroupName(val interface{}) {
	if err := j.validateSetContainerGroupNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"containerGroupName",
		val,
	)
}

func (j *jsiiProxy_RosContainerGroup)SetCpu(val interface{}) {
	if err := j.validateSetCpuParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"cpu",
		val,
	)
}

func (j *jsiiProxy_RosContainerGroup)SetDnsConfig(val interface{}) {
	if err := j.validateSetDnsConfigParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"dnsConfig",
		val,
	)
}

func (j *jsiiProxy_RosContainerGroup)SetEipInstanceId(val interface{}) {
	if err := j.validateSetEipInstanceIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"eipInstanceId",
		val,
	)
}

func (j *jsiiProxy_RosContainerGroup)SetEnableResourcePropertyConstraint(val *bool) {
	if err := j.validateSetEnableResourcePropertyConstraintParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableResourcePropertyConstraint",
		val,
	)
}

func (j *jsiiProxy_RosContainerGroup)SetHostAliase(val interface{}) {
	if err := j.validateSetHostAliaseParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"hostAliase",
		val,
	)
}

func (j *jsiiProxy_RosContainerGroup)SetImageRegistryCredential(val interface{}) {
	if err := j.validateSetImageRegistryCredentialParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"imageRegistryCredential",
		val,
	)
}

func (j *jsiiProxy_RosContainerGroup)SetImageSnapshotId(val interface{}) {
	if err := j.validateSetImageSnapshotIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"imageSnapshotId",
		val,
	)
}

func (j *jsiiProxy_RosContainerGroup)SetInitContainer(val interface{}) {
	if err := j.validateSetInitContainerParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"initContainer",
		val,
	)
}

func (j *jsiiProxy_RosContainerGroup)SetInstanceType(val interface{}) {
	if err := j.validateSetInstanceTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"instanceType",
		val,
	)
}

func (j *jsiiProxy_RosContainerGroup)SetIpv6AddressCount(val interface{}) {
	if err := j.validateSetIpv6AddressCountParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"ipv6AddressCount",
		val,
	)
}

func (j *jsiiProxy_RosContainerGroup)SetMemory(val interface{}) {
	if err := j.validateSetMemoryParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"memory",
		val,
	)
}

func (j *jsiiProxy_RosContainerGroup)SetRamRoleName(val interface{}) {
	if err := j.validateSetRamRoleNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"ramRoleName",
		val,
	)
}

func (j *jsiiProxy_RosContainerGroup)SetResourceGroupId(val interface{}) {
	if err := j.validateSetResourceGroupIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"resourceGroupId",
		val,
	)
}

func (j *jsiiProxy_RosContainerGroup)SetRestartPolicy(val interface{}) {
	if err := j.validateSetRestartPolicyParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"restartPolicy",
		val,
	)
}

func (j *jsiiProxy_RosContainerGroup)SetSecurityContextSysctl(val interface{}) {
	if err := j.validateSetSecurityContextSysctlParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"securityContextSysctl",
		val,
	)
}

func (j *jsiiProxy_RosContainerGroup)SetSecurityGroupId(val interface{}) {
	if err := j.validateSetSecurityGroupIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"securityGroupId",
		val,
	)
}

func (j *jsiiProxy_RosContainerGroup)SetSlsEnable(val interface{}) {
	if err := j.validateSetSlsEnableParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"slsEnable",
		val,
	)
}

func (j *jsiiProxy_RosContainerGroup)SetSpotPriceLimit(val interface{}) {
	if err := j.validateSetSpotPriceLimitParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"spotPriceLimit",
		val,
	)
}

func (j *jsiiProxy_RosContainerGroup)SetSpotStrategy(val interface{}) {
	if err := j.validateSetSpotStrategyParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"spotStrategy",
		val,
	)
}

func (j *jsiiProxy_RosContainerGroup)SetTag(val interface{}) {
	if err := j.validateSetTagParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"tag",
		val,
	)
}

func (j *jsiiProxy_RosContainerGroup)SetTerminationGracePeriodSeconds(val interface{}) {
	if err := j.validateSetTerminationGracePeriodSecondsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"terminationGracePeriodSeconds",
		val,
	)
}

func (j *jsiiProxy_RosContainerGroup)SetVolume(val interface{}) {
	if err := j.validateSetVolumeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"volume",
		val,
	)
}

func (j *jsiiProxy_RosContainerGroup)SetVSwitchId(val interface{}) {
	if err := j.validateSetVSwitchIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"vSwitchId",
		val,
	)
}

func (j *jsiiProxy_RosContainerGroup)SetZoneId(val interface{}) {
	if err := j.validateSetZoneIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"zoneId",
		val,
	)
}

// Return whether the given object is a Construct.
func RosContainerGroup_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosContainerGroup_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-eci.RosContainerGroup",
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
func RosContainerGroup_IsRosElement(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosContainerGroup_IsRosElementParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-eci.RosContainerGroup",
		"isRosElement",
		[]interface{}{x},
		&returns,
	)

	return returns
}

// Check whether the given construct is a RosResource.
func RosContainerGroup_IsRosResource(construct alicloudroscdkcore.IConstruct) *bool {
	_init_.Initialize()

	if err := validateRosContainerGroup_IsRosResourceParameters(construct); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-eci.RosContainerGroup",
		"isRosResource",
		[]interface{}{construct},
		&returns,
	)

	return returns
}

func RosContainerGroup_ROS_RESOURCE_TYPE_NAME() *string {
	_init_.Initialize()
	var returns *string
	_jsii_.StaticGet(
		"@alicloud/ros-cdk-eci.RosContainerGroup",
		"ROS_RESOURCE_TYPE_NAME",
		&returns,
	)
	return returns
}

func (r *jsiiProxy_RosContainerGroup) AddCondition(con alicloudroscdkcore.RosCondition) {
	if err := r.validateAddConditionParameters(con); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCondition",
		[]interface{}{con},
	)
}

func (r *jsiiProxy_RosContainerGroup) AddCount(count interface{}) {
	if err := r.validateAddCountParameters(count); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCount",
		[]interface{}{count},
	)
}

func (r *jsiiProxy_RosContainerGroup) AddDeletionOverride(path *string) {
	if err := r.validateAddDeletionOverrideParameters(path); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDeletionOverride",
		[]interface{}{path},
	)
}

func (r *jsiiProxy_RosContainerGroup) AddDependsOn(target alicloudroscdkcore.RosResource) {
	if err := r.validateAddDependsOnParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDependsOn",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosContainerGroup) AddDesc(desc *string) {
	if err := r.validateAddDescParameters(desc); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDesc",
		[]interface{}{desc},
	)
}

func (r *jsiiProxy_RosContainerGroup) AddMetaData(key *string, value interface{}) {
	if err := r.validateAddMetaDataParameters(key, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addMetaData",
		[]interface{}{key, value},
	)
}

func (r *jsiiProxy_RosContainerGroup) AddOverride(path *string, value interface{}) {
	if err := r.validateAddOverrideParameters(path, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addOverride",
		[]interface{}{path, value},
	)
}

func (r *jsiiProxy_RosContainerGroup) AddPropertyDeletionOverride(propertyPath *string) {
	if err := r.validateAddPropertyDeletionOverrideParameters(propertyPath); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyDeletionOverride",
		[]interface{}{propertyPath},
	)
}

func (r *jsiiProxy_RosContainerGroup) AddPropertyOverride(propertyPath *string, value interface{}) {
	if err := r.validateAddPropertyOverrideParameters(propertyPath, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyOverride",
		[]interface{}{propertyPath, value},
	)
}

func (r *jsiiProxy_RosContainerGroup) AddRosDependency(target *string) {
	if err := r.validateAddRosDependencyParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addRosDependency",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosContainerGroup) ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy, options *alicloudroscdkcore.RemovalPolicyOptions) {
	if err := r.validateApplyRemovalPolicyParameters(options); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"applyRemovalPolicy",
		[]interface{}{policy, options},
	)
}

func (r *jsiiProxy_RosContainerGroup) GetAtt(attributeName *string) alicloudroscdkcore.Reference {
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

func (r *jsiiProxy_RosContainerGroup) OnPrepare() {
	_jsii_.InvokeVoid(
		r,
		"onPrepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosContainerGroup) OnSynthesize(session constructs.ISynthesisSession) {
	if err := r.validateOnSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"onSynthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosContainerGroup) OnValidate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"onValidate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosContainerGroup) OverrideLogicalId(newLogicalId *string) {
	if err := r.validateOverrideLogicalIdParameters(newLogicalId); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"overrideLogicalId",
		[]interface{}{newLogicalId},
	)
}

func (r *jsiiProxy_RosContainerGroup) Prepare() {
	_jsii_.InvokeVoid(
		r,
		"prepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosContainerGroup) RenderProperties(props *map[string]interface{}) *map[string]interface{} {
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

func (r *jsiiProxy_RosContainerGroup) Synthesize(session alicloudroscdkcore.ISynthesisSession) {
	if err := r.validateSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"synthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosContainerGroup) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		r,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosContainerGroup) Validate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"validate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosContainerGroup) ValidateProperties(_properties interface{}) {
	if err := r.validateValidatePropertiesParameters(_properties); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"validateProperties",
		[]interface{}{_properties},
	)
}

