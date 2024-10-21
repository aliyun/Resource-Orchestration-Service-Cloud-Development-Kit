package datasource

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkslb/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkslb/datasource/internal"
	"github.com/aws/constructs-go/constructs/v3"
)

// This class encapsulates and extends the ROS resource type `DATASOURCE::SLB::LoadBalancer`.
type LoadBalancer interface {
	alicloudroscdkcore.Resource
	// Attribute Address: The service IP address of the CLB instance.
	AttrAddress() alicloudroscdkcore.IResolvable
	// Attribute AddressIpVersion: The version of the IP address.
	//
	// Valid values: ipv4 and ipv6.
	AttrAddressIpVersion() alicloudroscdkcore.IResolvable
	// Attribute AddressType: The address type of the CLB instance.
	AttrAddressType() alicloudroscdkcore.IResolvable
	// Attribute AutoReleaseTime: The timestamp generated when the CLB instance is released.
	AttrAutoReleaseTime() alicloudroscdkcore.IResolvable
	// Attribute BackendServers: The backend servers of the CLB instance.
	AttrBackendServers() alicloudroscdkcore.IResolvable
	// Attribute Bandwidth: The maximum bandwidth of the Internet-facing CLB instance that is billed on a pay-by-bandwidth basis.
	AttrBandwidth() alicloudroscdkcore.IResolvable
	// Attribute CreateTime: The time when the CLB instance was created.
	AttrCreateTime() alicloudroscdkcore.IResolvable
	// Attribute CreateTimeStamp: The timestamp generated when the CA certificate is uploaded.
	AttrCreateTimeStamp() alicloudroscdkcore.IResolvable
	// Attribute DeleteProtection: Indicates whether deletion protection is enabled for the CLB instance.
	AttrDeleteProtection() alicloudroscdkcore.IResolvable
	// Attribute EndTime: The time when the CLB instance expires.
	AttrEndTime() alicloudroscdkcore.IResolvable
	// Attribute EndTimeStamp: The timestamp that indicates the expiration time of the CLB instance.
	AttrEndTimeStamp() alicloudroscdkcore.IResolvable
	// Attribute InstanceChargeType: Instance billing method.
	AttrInstanceChargeType() alicloudroscdkcore.IResolvable
	// Attribute InternetChargeType: The metering method of the Internet-facing CLB instance.
	AttrInternetChargeType() alicloudroscdkcore.IResolvable
	// Attribute ListenerPortsAndProtocal: The ports or protocols of the listeners.
	AttrListenerPortsAndProtocal() alicloudroscdkcore.IResolvable
	// Attribute ListenerPortsAndProtocol: The ports or protocols of the listeners.
	AttrListenerPortsAndProtocol() alicloudroscdkcore.IResolvable
	// Attribute LoadBalancerId: The CLB instance ID.
	AttrLoadBalancerId() alicloudroscdkcore.IResolvable
	// Attribute LoadBalancerName: The name of the CLB instance.
	AttrLoadBalancerName() alicloudroscdkcore.IResolvable
	// Attribute LoadBalancerSpec: The specification of the CLB instance.
	AttrLoadBalancerSpec() alicloudroscdkcore.IResolvable
	// Attribute MasterZoneId: The ID of the primary zone to which the CLB instance belongs.
	AttrMasterZoneId() alicloudroscdkcore.IResolvable
	// Attribute ModificationProtectionReason: The reason why the configuration read-only mode is enabled.
	AttrModificationProtectionReason() alicloudroscdkcore.IResolvable
	// Attribute ModificationProtectionStatus: Load balancing modifies the protection state.
	AttrModificationProtectionStatus() alicloudroscdkcore.IResolvable
	// Attribute NetworkType: The network type of the CLB instance.
	AttrNetworkType() alicloudroscdkcore.IResolvable
	// Attribute PaymentType: Load balancing instance payment type.
	AttrPaymentType() alicloudroscdkcore.IResolvable
	// Attribute RegionIdAlias: The alias of the region to which the CLB instance belongs.
	AttrRegionIdAlias() alicloudroscdkcore.IResolvable
	// Attribute RenewalCycUnit: The auto-renewal cycle.
	//
	// Valid values: Year and Month. Default value: Month.
	AttrRenewalCycUnit() alicloudroscdkcore.IResolvable
	// Attribute RenewalDuration: The auto-renewal duration.
	//
	// This parameter is valid only if RenewalStatus is set to AutoRenewal.
	AttrRenewalDuration() alicloudroscdkcore.IResolvable
	// Attribute RenewalStatus: Indicates whether auto-renewal is enabled.
	AttrRenewalStatus() alicloudroscdkcore.IResolvable
	// Attribute ResourceGroupId: The resource group ID.
	AttrResourceGroupId() alicloudroscdkcore.IResolvable
	// Attribute SlaveZoneId: The ID of the secondary zone to which the CLB instance belongs.
	AttrSlaveZoneId() alicloudroscdkcore.IResolvable
	// Attribute Tags: The tags of the CLB instance.
	AttrTags() alicloudroscdkcore.IResolvable
	// Attribute VpcId: The ID of the virtual private cloud (VPC) where the internal-facing CLB instance is deployed.
	AttrVpcId() alicloudroscdkcore.IResolvable
	// Attribute VSwitchId: The ID of the vSwitch to which the internal-facing CLB instance belongs.
	AttrVSwitchId() alicloudroscdkcore.IResolvable
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
	Props() *LoadBalancerProps
	SetProps(val *LoadBalancerProps)
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

// The jsii proxy struct for LoadBalancer
type jsiiProxy_LoadBalancer struct {
	internal.Type__alicloudroscdkcoreResource
}

func (j *jsiiProxy_LoadBalancer) AttrAddress() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrAddress",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LoadBalancer) AttrAddressIpVersion() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrAddressIpVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LoadBalancer) AttrAddressType() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrAddressType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LoadBalancer) AttrAutoReleaseTime() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrAutoReleaseTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LoadBalancer) AttrBackendServers() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrBackendServers",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LoadBalancer) AttrBandwidth() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrBandwidth",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LoadBalancer) AttrCreateTime() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LoadBalancer) AttrCreateTimeStamp() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrCreateTimeStamp",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LoadBalancer) AttrDeleteProtection() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDeleteProtection",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LoadBalancer) AttrEndTime() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrEndTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LoadBalancer) AttrEndTimeStamp() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrEndTimeStamp",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LoadBalancer) AttrInstanceChargeType() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrInstanceChargeType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LoadBalancer) AttrInternetChargeType() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrInternetChargeType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LoadBalancer) AttrListenerPortsAndProtocal() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrListenerPortsAndProtocal",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LoadBalancer) AttrListenerPortsAndProtocol() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrListenerPortsAndProtocol",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LoadBalancer) AttrLoadBalancerId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrLoadBalancerId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LoadBalancer) AttrLoadBalancerName() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrLoadBalancerName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LoadBalancer) AttrLoadBalancerSpec() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrLoadBalancerSpec",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LoadBalancer) AttrMasterZoneId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrMasterZoneId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LoadBalancer) AttrModificationProtectionReason() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrModificationProtectionReason",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LoadBalancer) AttrModificationProtectionStatus() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrModificationProtectionStatus",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LoadBalancer) AttrNetworkType() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrNetworkType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LoadBalancer) AttrPaymentType() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrPaymentType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LoadBalancer) AttrRegionIdAlias() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrRegionIdAlias",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LoadBalancer) AttrRenewalCycUnit() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrRenewalCycUnit",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LoadBalancer) AttrRenewalDuration() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrRenewalDuration",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LoadBalancer) AttrRenewalStatus() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrRenewalStatus",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LoadBalancer) AttrResourceGroupId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrResourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LoadBalancer) AttrSlaveZoneId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrSlaveZoneId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LoadBalancer) AttrTags() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrTags",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LoadBalancer) AttrVpcId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrVpcId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LoadBalancer) AttrVSwitchId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrVSwitchId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LoadBalancer) EnableResourcePropertyConstraint() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"enableResourcePropertyConstraint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LoadBalancer) Id() *string {
	var returns *string
	_jsii_.Get(
		j,
		"id",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LoadBalancer) Node() alicloudroscdkcore.ConstructNode {
	var returns alicloudroscdkcore.ConstructNode
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LoadBalancer) PhysicalName() *string {
	var returns *string
	_jsii_.Get(
		j,
		"physicalName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LoadBalancer) Props() *LoadBalancerProps {
	var returns *LoadBalancerProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LoadBalancer) Ref() *string {
	var returns *string
	_jsii_.Get(
		j,
		"ref",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LoadBalancer) Resource() alicloudroscdkcore.RosResource {
	var returns alicloudroscdkcore.RosResource
	_jsii_.Get(
		j,
		"resource",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LoadBalancer) Scope() alicloudroscdkcore.Construct {
	var returns alicloudroscdkcore.Construct
	_jsii_.Get(
		j,
		"scope",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LoadBalancer) Stack() alicloudroscdkcore.Stack {
	var returns alicloudroscdkcore.Stack
	_jsii_.Get(
		j,
		"stack",
		&returns,
	)
	return returns
}


// Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
func NewLoadBalancer(scope alicloudroscdkcore.Construct, id *string, props *LoadBalancerProps, enableResourcePropertyConstraint *bool) LoadBalancer {
	_init_.Initialize()

	if err := validateNewLoadBalancerParameters(scope, id, props); err != nil {
		panic(err)
	}
	j := jsiiProxy_LoadBalancer{}

	_jsii_.Create(
		"@alicloud/ros-cdk-slb.datasource.LoadBalancer",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		&j,
	)

	return &j
}

// Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
func NewLoadBalancer_Override(l LoadBalancer, scope alicloudroscdkcore.Construct, id *string, props *LoadBalancerProps, enableResourcePropertyConstraint *bool) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-slb.datasource.LoadBalancer",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		l,
	)
}

func (j *jsiiProxy_LoadBalancer)SetEnableResourcePropertyConstraint(val *bool) {
	if err := j.validateSetEnableResourcePropertyConstraintParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableResourcePropertyConstraint",
		val,
	)
}

func (j *jsiiProxy_LoadBalancer)SetId(val *string) {
	if err := j.validateSetIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"id",
		val,
	)
}

func (j *jsiiProxy_LoadBalancer)SetProps(val *LoadBalancerProps) {
	if err := j.validateSetPropsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"props",
		val,
	)
}

func (j *jsiiProxy_LoadBalancer)SetResource(val alicloudroscdkcore.RosResource) {
	_jsii_.Set(
		j,
		"resource",
		val,
	)
}

func (j *jsiiProxy_LoadBalancer)SetScope(val alicloudroscdkcore.Construct) {
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
func LoadBalancer_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateLoadBalancer_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-slb.datasource.LoadBalancer",
		"isConstruct",
		[]interface{}{x},
		&returns,
	)

	return returns
}

func (l *jsiiProxy_LoadBalancer) AddCondition(condition alicloudroscdkcore.RosCondition) {
	if err := l.validateAddConditionParameters(condition); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		l,
		"addCondition",
		[]interface{}{condition},
	)
}

func (l *jsiiProxy_LoadBalancer) AddCount(count interface{}) {
	if err := l.validateAddCountParameters(count); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		l,
		"addCount",
		[]interface{}{count},
	)
}

func (l *jsiiProxy_LoadBalancer) AddDependency(resource alicloudroscdkcore.Resource) {
	if err := l.validateAddDependencyParameters(resource); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		l,
		"addDependency",
		[]interface{}{resource},
	)
}

func (l *jsiiProxy_LoadBalancer) AddResourceDesc(desc *string) {
	if err := l.validateAddResourceDescParameters(desc); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		l,
		"addResourceDesc",
		[]interface{}{desc},
	)
}

func (l *jsiiProxy_LoadBalancer) ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy) {
	if err := l.validateApplyRemovalPolicyParameters(policy); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		l,
		"applyRemovalPolicy",
		[]interface{}{policy},
	)
}

func (l *jsiiProxy_LoadBalancer) GeneratePhysicalName() *string {
	var returns *string

	_jsii_.Invoke(
		l,
		"generatePhysicalName",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (l *jsiiProxy_LoadBalancer) GetAtt(name *string) alicloudroscdkcore.IResolvable {
	if err := l.validateGetAttParameters(name); err != nil {
		panic(err)
	}
	var returns alicloudroscdkcore.IResolvable

	_jsii_.Invoke(
		l,
		"getAtt",
		[]interface{}{name},
		&returns,
	)

	return returns
}

func (l *jsiiProxy_LoadBalancer) OnPrepare() {
	_jsii_.InvokeVoid(
		l,
		"onPrepare",
		nil, // no parameters
	)
}

func (l *jsiiProxy_LoadBalancer) OnSynthesize(session constructs.ISynthesisSession) {
	if err := l.validateOnSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		l,
		"onSynthesize",
		[]interface{}{session},
	)
}

func (l *jsiiProxy_LoadBalancer) OnValidate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		l,
		"onValidate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (l *jsiiProxy_LoadBalancer) Prepare() {
	_jsii_.InvokeVoid(
		l,
		"prepare",
		nil, // no parameters
	)
}

func (l *jsiiProxy_LoadBalancer) SetMetadata(key *string, value interface{}) {
	if err := l.validateSetMetadataParameters(key, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		l,
		"setMetadata",
		[]interface{}{key, value},
	)
}

func (l *jsiiProxy_LoadBalancer) Synthesize(session alicloudroscdkcore.ISynthesisSession) {
	if err := l.validateSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		l,
		"synthesize",
		[]interface{}{session},
	)
}

func (l *jsiiProxy_LoadBalancer) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		l,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (l *jsiiProxy_LoadBalancer) Validate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		l,
		"validate",
		nil, // no parameters
		&returns,
	)

	return returns
}

