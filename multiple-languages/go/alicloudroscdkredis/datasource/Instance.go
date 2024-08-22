package datasource

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkredis/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkredis/datasource/internal"
	"github.com/aws/constructs-go/constructs/v3"
)

// This class encapsulates and extends the ROS resource type `DATASOURCE::REDIS::Instance`.
type Instance interface {
	alicloudroscdkcore.Resource
	// Attribute ArchitectureType: Architecture type.
	AttrArchitectureType() alicloudroscdkcore.IResolvable
	// Attribute Bandwidth: Bandwidth.
	AttrBandwidth() alicloudroscdkcore.IResolvable
	// Attribute Capacity: Capacity.
	AttrCapacity() alicloudroscdkcore.IResolvable
	// Attribute CloudType: Cloud category.
	AttrCloudType() alicloudroscdkcore.IResolvable
	// Attribute Config: Config.
	AttrConfig() alicloudroscdkcore.IResolvable
	// Attribute ConnectionDomain: Connection domain.
	AttrConnectionDomain() alicloudroscdkcore.IResolvable
	// Attribute CreateTime: Create time.
	AttrCreateTime() alicloudroscdkcore.IResolvable
	// Attribute DBInstanceId: Database instance id.
	AttrDbInstanceId() alicloudroscdkcore.IResolvable
	// Attribute DBInstanceName: Instance name.
	AttrDbInstanceName() alicloudroscdkcore.IResolvable
	// Attribute EndTime: End time.
	AttrEndTime() alicloudroscdkcore.IResolvable
	// Attribute EngineVersion: Engine version.
	AttrEngineVersion() alicloudroscdkcore.IResolvable
	// Attribute HasRenewChangeOrder: Has renew change order.
	AttrHasRenewChangeOrder() alicloudroscdkcore.IResolvable
	// Attribute InstanceClass: Instance class.
	AttrInstanceClass() alicloudroscdkcore.IResolvable
	// Attribute InstanceReleaseProtection: Instance release protection.
	AttrInstanceReleaseProtection() alicloudroscdkcore.IResolvable
	// Attribute InstanceType: Instance type.
	AttrInstanceType() alicloudroscdkcore.IResolvable
	// Attribute IsRds: is RDS.
	AttrIsRds() alicloudroscdkcore.IResolvable
	// Attribute MaintainEndTime: Maintain end time.
	AttrMaintainEndTime() alicloudroscdkcore.IResolvable
	// Attribute MaintainStartTime: Maintain start time.
	AttrMaintainStartTime() alicloudroscdkcore.IResolvable
	// Attribute NetworkType: Network type.
	AttrNetworkType() alicloudroscdkcore.IResolvable
	// Attribute PackageType: Package type.
	AttrPackageType() alicloudroscdkcore.IResolvable
	// Attribute PaymentType: Payment type.
	AttrPaymentType() alicloudroscdkcore.IResolvable
	// Attribute Port: Port.
	AttrPort() alicloudroscdkcore.IResolvable
	// Attribute PrivateIp: Private IP.
	AttrPrivateIp() alicloudroscdkcore.IResolvable
	// Attribute Qps: QPS.
	AttrQps() alicloudroscdkcore.IResolvable
	// Attribute ReadOnlyCount: The number of read-only nodes.
	//
	// This parameter is only applicable to the creation of read-write splitting instances in the cloud disk version. You can use this parameter to customize the number of read-only nodes. Valid values: 1 to 5.
	AttrReadOnlyCount() alicloudroscdkcore.IResolvable
	// Attribute ReplacateId: Replacate id.
	AttrReplacateId() alicloudroscdkcore.IResolvable
	// Attribute ResourceGroupId: Resource group id.
	AttrResourceGroupId() alicloudroscdkcore.IResolvable
	// Attribute SecondaryZoneId: The ID of the standby zone.
	//
	// You can call the [DescribeZones](~~ 94527 ~~) operation.
	AttrSecondaryZoneId() alicloudroscdkcore.IResolvable
	// Attribute SecurityGroupId: Security group id.
	AttrSecurityGroupId() alicloudroscdkcore.IResolvable
	// Attribute SecurityIpGroupAttribute: Security IP group attribute.
	AttrSecurityIpGroupAttribute() alicloudroscdkcore.IResolvable
	// Attribute SecurityIpGroupName: Security IP group name.
	AttrSecurityIpGroupName() alicloudroscdkcore.IResolvable
	// Attribute SecurityIps: Security IPs.
	AttrSecurityIps() alicloudroscdkcore.IResolvable
	// Attribute ShardCount: The number of slices.
	//
	// This parameter is only applicable to creating a cloud disk cluster architecture instance. You can use this parameter to customize the number of slices.
	AttrShardCount() alicloudroscdkcore.IResolvable
	// Attribute Tags: Tags.
	AttrTags() alicloudroscdkcore.IResolvable
	// Attribute VpcAuthMode: Vpc auth mode.
	AttrVpcAuthMode() alicloudroscdkcore.IResolvable
	// Attribute VpcCloudInstanceId: Vpc cloud instance id.
	AttrVpcCloudInstanceId() alicloudroscdkcore.IResolvable
	// Attribute VpcId: Vpc id.
	AttrVpcId() alicloudroscdkcore.IResolvable
	// Attribute VSwitchId: Vswitch id.
	AttrVSwitchId() alicloudroscdkcore.IResolvable
	// Attribute ZoneId: Zone id.
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
	Props() *InstanceProps
	SetProps(val *InstanceProps)
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

// The jsii proxy struct for Instance
type jsiiProxy_Instance struct {
	internal.Type__alicloudroscdkcoreResource
}

func (j *jsiiProxy_Instance) AttrArchitectureType() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrArchitectureType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrBandwidth() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrBandwidth",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrCapacity() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrCapacity",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrCloudType() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrCloudType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrConfig() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrConfig",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrConnectionDomain() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrConnectionDomain",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrCreateTime() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrDbInstanceId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDbInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrDbInstanceName() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDbInstanceName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrEndTime() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrEndTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrEngineVersion() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrEngineVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrHasRenewChangeOrder() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrHasRenewChangeOrder",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrInstanceClass() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrInstanceClass",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrInstanceReleaseProtection() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrInstanceReleaseProtection",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrInstanceType() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrInstanceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrIsRds() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrIsRds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrMaintainEndTime() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrMaintainEndTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrMaintainStartTime() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrMaintainStartTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrNetworkType() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrNetworkType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrPackageType() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrPackageType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrPaymentType() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrPaymentType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrPort() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrPort",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrPrivateIp() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrPrivateIp",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrQps() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrQps",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrReadOnlyCount() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrReadOnlyCount",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrReplacateId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrReplacateId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrResourceGroupId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrResourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrSecondaryZoneId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrSecondaryZoneId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrSecurityGroupId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrSecurityGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrSecurityIpGroupAttribute() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrSecurityIpGroupAttribute",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrSecurityIpGroupName() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrSecurityIpGroupName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrSecurityIps() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrSecurityIps",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrShardCount() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrShardCount",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrTags() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrTags",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrVpcAuthMode() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrVpcAuthMode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrVpcCloudInstanceId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrVpcCloudInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrVpcId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrVpcId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrVSwitchId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrVSwitchId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrZoneId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrZoneId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) EnableResourcePropertyConstraint() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"enableResourcePropertyConstraint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) Id() *string {
	var returns *string
	_jsii_.Get(
		j,
		"id",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) Node() alicloudroscdkcore.ConstructNode {
	var returns alicloudroscdkcore.ConstructNode
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) PhysicalName() *string {
	var returns *string
	_jsii_.Get(
		j,
		"physicalName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) Props() *InstanceProps {
	var returns *InstanceProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) Ref() *string {
	var returns *string
	_jsii_.Get(
		j,
		"ref",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) Resource() alicloudroscdkcore.RosResource {
	var returns alicloudroscdkcore.RosResource
	_jsii_.Get(
		j,
		"resource",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) Scope() alicloudroscdkcore.Construct {
	var returns alicloudroscdkcore.Construct
	_jsii_.Get(
		j,
		"scope",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) Stack() alicloudroscdkcore.Stack {
	var returns alicloudroscdkcore.Stack
	_jsii_.Get(
		j,
		"stack",
		&returns,
	)
	return returns
}


// Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
func NewInstance(scope alicloudroscdkcore.Construct, id *string, props *InstanceProps, enableResourcePropertyConstraint *bool) Instance {
	_init_.Initialize()

	if err := validateNewInstanceParameters(scope, id, props); err != nil {
		panic(err)
	}
	j := jsiiProxy_Instance{}

	_jsii_.Create(
		"@alicloud/ros-cdk-redis.datasource.Instance",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		&j,
	)

	return &j
}

// Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
func NewInstance_Override(i Instance, scope alicloudroscdkcore.Construct, id *string, props *InstanceProps, enableResourcePropertyConstraint *bool) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-redis.datasource.Instance",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		i,
	)
}

func (j *jsiiProxy_Instance)SetEnableResourcePropertyConstraint(val *bool) {
	if err := j.validateSetEnableResourcePropertyConstraintParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableResourcePropertyConstraint",
		val,
	)
}

func (j *jsiiProxy_Instance)SetId(val *string) {
	if err := j.validateSetIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"id",
		val,
	)
}

func (j *jsiiProxy_Instance)SetProps(val *InstanceProps) {
	if err := j.validateSetPropsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"props",
		val,
	)
}

func (j *jsiiProxy_Instance)SetResource(val alicloudroscdkcore.RosResource) {
	_jsii_.Set(
		j,
		"resource",
		val,
	)
}

func (j *jsiiProxy_Instance)SetScope(val alicloudroscdkcore.Construct) {
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
func Instance_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateInstance_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-redis.datasource.Instance",
		"isConstruct",
		[]interface{}{x},
		&returns,
	)

	return returns
}

func (i *jsiiProxy_Instance) AddCondition(condition alicloudroscdkcore.RosCondition) {
	if err := i.validateAddConditionParameters(condition); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		i,
		"addCondition",
		[]interface{}{condition},
	)
}

func (i *jsiiProxy_Instance) AddCount(count interface{}) {
	if err := i.validateAddCountParameters(count); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		i,
		"addCount",
		[]interface{}{count},
	)
}

func (i *jsiiProxy_Instance) AddDependency(resource alicloudroscdkcore.Resource) {
	if err := i.validateAddDependencyParameters(resource); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		i,
		"addDependency",
		[]interface{}{resource},
	)
}

func (i *jsiiProxy_Instance) AddResourceDesc(desc *string) {
	if err := i.validateAddResourceDescParameters(desc); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		i,
		"addResourceDesc",
		[]interface{}{desc},
	)
}

func (i *jsiiProxy_Instance) ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy) {
	if err := i.validateApplyRemovalPolicyParameters(policy); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		i,
		"applyRemovalPolicy",
		[]interface{}{policy},
	)
}

func (i *jsiiProxy_Instance) GeneratePhysicalName() *string {
	var returns *string

	_jsii_.Invoke(
		i,
		"generatePhysicalName",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (i *jsiiProxy_Instance) GetAtt(name *string) alicloudroscdkcore.IResolvable {
	if err := i.validateGetAttParameters(name); err != nil {
		panic(err)
	}
	var returns alicloudroscdkcore.IResolvable

	_jsii_.Invoke(
		i,
		"getAtt",
		[]interface{}{name},
		&returns,
	)

	return returns
}

func (i *jsiiProxy_Instance) OnPrepare() {
	_jsii_.InvokeVoid(
		i,
		"onPrepare",
		nil, // no parameters
	)
}

func (i *jsiiProxy_Instance) OnSynthesize(session constructs.ISynthesisSession) {
	if err := i.validateOnSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		i,
		"onSynthesize",
		[]interface{}{session},
	)
}

func (i *jsiiProxy_Instance) OnValidate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		i,
		"onValidate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (i *jsiiProxy_Instance) Prepare() {
	_jsii_.InvokeVoid(
		i,
		"prepare",
		nil, // no parameters
	)
}

func (i *jsiiProxy_Instance) SetMetadata(key *string, value interface{}) {
	if err := i.validateSetMetadataParameters(key, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		i,
		"setMetadata",
		[]interface{}{key, value},
	)
}

func (i *jsiiProxy_Instance) Synthesize(session alicloudroscdkcore.ISynthesisSession) {
	if err := i.validateSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		i,
		"synthesize",
		[]interface{}{session},
	)
}

func (i *jsiiProxy_Instance) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		i,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (i *jsiiProxy_Instance) Validate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		i,
		"validate",
		nil, // no parameters
		&returns,
	)

	return returns
}

