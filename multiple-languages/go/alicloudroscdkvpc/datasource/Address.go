package datasource

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkvpc/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkvpc/datasource/internal"
	"github.com/aws/constructs-go/constructs/v3"
)

// This class encapsulates and extends the ROS resource type `DATASOURCE::EIP::Address`, which is used to query the information about a created elastic IP address (EIP).
type Address interface {
	alicloudroscdkcore.Resource
	// Attribute AddressName: The name of the EIP.
	AttrAddressName() alicloudroscdkcore.IResolvable
	// Attribute AllocationId: The ID of the EIP instance.
	AttrAllocationId() alicloudroscdkcore.IResolvable
	// Attribute Bandwidth: The peak bandwidth of the EIP.
	//
	// Unit: Mbps.
	AttrBandwidth() alicloudroscdkcore.IResolvable
	// Attribute BandwidthPackageBandwidth: The bandwidth value of the Internet shared bandwidth added to the EIP.
	//
	// The unit is Mbps.
	AttrBandwidthPackageBandwidth() alicloudroscdkcore.IResolvable
	// Attribute BandwidthPackageId: The ID of the added shared bandwidth.
	AttrBandwidthPackageId() alicloudroscdkcore.IResolvable
	// Attribute BandwidthPackageType: The type of bandwidth.
	//
	// Only **CommonBandwidthPackage** (shared bandwidth) is supported.
	AttrBandwidthPackageType() alicloudroscdkcore.IResolvable
	// Attribute BusinessStatus: The business status of the EIP instance.
	AttrBusinessStatus() alicloudroscdkcore.IResolvable
	// Attribute CreateTime: The time when the EIP was created.
	AttrCreateTime() alicloudroscdkcore.IResolvable
	// Attribute DeletionProtection: Whether the delete protection function is turned on.
	AttrDeletionProtection() alicloudroscdkcore.IResolvable
	// Attribute Description: The description of the EIP instance.
	AttrDescription() alicloudroscdkcore.IResolvable
	// Attribute EipBandwidth: AN EIP is added to an Internet shared bandwidth before or exit purchase an Internet shared bandwidth instance after the bandwidth Mbps Set for the bandwidth.
	AttrEipBandwidth() alicloudroscdkcore.IResolvable
	// Attribute ExpiredTime: Expiration time, format' YYYY-MM-DDThh:mm:ssZ '.
	AttrExpiredTime() alicloudroscdkcore.IResolvable
	// Attribute HasReservationData: Whether there is renewal data.
	AttrHasReservationData() alicloudroscdkcore.IResolvable
	// Attribute HdMonitorStatus: Whether the second-level monitoring is enabled for the EIP.
	AttrHdMonitorStatus() alicloudroscdkcore.IResolvable
	// Attribute InstanceId: The ID of the current bound instance.
	AttrInstanceId() alicloudroscdkcore.IResolvable
	// Attribute InstanceRegionId: The region ID of the currently bound resource.
	AttrInstanceRegionId() alicloudroscdkcore.IResolvable
	// Attribute InstanceType: The type of the current bound instance.
	AttrInstanceType() alicloudroscdkcore.IResolvable
	// Attribute IpAddress: The IP address of the EIP.
	AttrIpAddress() alicloudroscdkcore.IResolvable
	// Attribute Isp: Service providers.
	AttrIsp() alicloudroscdkcore.IResolvable
	// Attribute Netmode: Network type.
	AttrNetmode() alicloudroscdkcore.IResolvable
	// Attribute OperationLocks: Lock details.
	AttrOperationLocks() alicloudroscdkcore.IResolvable
	// Attribute PaymentType: The billing method of the EIP.
	AttrPaymentType() alicloudroscdkcore.IResolvable
	// Attribute PublicIpAddressPoolId: The ID of the IP address pool to which the EIP belongs.
	AttrPublicIpAddressPoolId() alicloudroscdkcore.IResolvable
	// Attribute ReservationActiveTime: The effective time of the renewal fee, in the format of 'YYYY-MM-DDThh:mm:ssZ'.
	AttrReservationActiveTime() alicloudroscdkcore.IResolvable
	// Attribute ReservationBandwidth: Renewal bandwidth, in Mbps.
	AttrReservationBandwidth() alicloudroscdkcore.IResolvable
	// Attribute ReservationInternetChargeType: Renewal Payment type.
	AttrReservationInternetChargeType() alicloudroscdkcore.IResolvable
	// Attribute ReservationOrderType: Renewal order type.
	AttrReservationOrderType() alicloudroscdkcore.IResolvable
	// Attribute ResourceGroupId: The ID of the resource group.
	AttrResourceGroupId() alicloudroscdkcore.IResolvable
	// Attribute SecondLimited: Whether a secondary speed limit is configured.
	AttrSecondLimited() alicloudroscdkcore.IResolvable
	// Attribute SecurityProtectionTypes: Security protection level.
	AttrSecurityProtectionTypes() alicloudroscdkcore.IResolvable
	// Attribute SegmentInstanceId: The ID of the consecutive EIPs.
	AttrSegmentInstanceId() alicloudroscdkcore.IResolvable
	// Attribute ServiceManaged: Indicates the resource created for the service account.
	AttrServiceManaged() alicloudroscdkcore.IResolvable
	// Attribute Tags: The tag of the resource.
	AttrTags() alicloudroscdkcore.IResolvable
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
	Props() *AddressProps
	SetProps(val *AddressProps)
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

// The jsii proxy struct for Address
type jsiiProxy_Address struct {
	internal.Type__alicloudroscdkcoreResource
}

func (j *jsiiProxy_Address) AttrAddressName() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrAddressName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Address) AttrAllocationId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrAllocationId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Address) AttrBandwidth() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrBandwidth",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Address) AttrBandwidthPackageBandwidth() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrBandwidthPackageBandwidth",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Address) AttrBandwidthPackageId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrBandwidthPackageId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Address) AttrBandwidthPackageType() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrBandwidthPackageType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Address) AttrBusinessStatus() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrBusinessStatus",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Address) AttrCreateTime() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Address) AttrDeletionProtection() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDeletionProtection",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Address) AttrDescription() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Address) AttrEipBandwidth() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrEipBandwidth",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Address) AttrExpiredTime() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrExpiredTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Address) AttrHasReservationData() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrHasReservationData",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Address) AttrHdMonitorStatus() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrHdMonitorStatus",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Address) AttrInstanceId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Address) AttrInstanceRegionId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrInstanceRegionId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Address) AttrInstanceType() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrInstanceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Address) AttrIpAddress() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrIpAddress",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Address) AttrIsp() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrIsp",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Address) AttrNetmode() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrNetmode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Address) AttrOperationLocks() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrOperationLocks",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Address) AttrPaymentType() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrPaymentType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Address) AttrPublicIpAddressPoolId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrPublicIpAddressPoolId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Address) AttrReservationActiveTime() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrReservationActiveTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Address) AttrReservationBandwidth() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrReservationBandwidth",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Address) AttrReservationInternetChargeType() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrReservationInternetChargeType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Address) AttrReservationOrderType() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrReservationOrderType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Address) AttrResourceGroupId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrResourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Address) AttrSecondLimited() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrSecondLimited",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Address) AttrSecurityProtectionTypes() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrSecurityProtectionTypes",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Address) AttrSegmentInstanceId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrSegmentInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Address) AttrServiceManaged() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrServiceManaged",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Address) AttrTags() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrTags",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Address) EnableResourcePropertyConstraint() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"enableResourcePropertyConstraint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Address) Id() *string {
	var returns *string
	_jsii_.Get(
		j,
		"id",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Address) Node() alicloudroscdkcore.ConstructNode {
	var returns alicloudroscdkcore.ConstructNode
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Address) PhysicalName() *string {
	var returns *string
	_jsii_.Get(
		j,
		"physicalName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Address) Props() *AddressProps {
	var returns *AddressProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Address) Ref() *string {
	var returns *string
	_jsii_.Get(
		j,
		"ref",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Address) Resource() alicloudroscdkcore.RosResource {
	var returns alicloudroscdkcore.RosResource
	_jsii_.Get(
		j,
		"resource",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Address) Scope() alicloudroscdkcore.Construct {
	var returns alicloudroscdkcore.Construct
	_jsii_.Get(
		j,
		"scope",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Address) Stack() alicloudroscdkcore.Stack {
	var returns alicloudroscdkcore.Stack
	_jsii_.Get(
		j,
		"stack",
		&returns,
	)
	return returns
}


// Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
func NewAddress(scope alicloudroscdkcore.Construct, id *string, props *AddressProps, enableResourcePropertyConstraint *bool) Address {
	_init_.Initialize()

	if err := validateNewAddressParameters(scope, id, props); err != nil {
		panic(err)
	}
	j := jsiiProxy_Address{}

	_jsii_.Create(
		"@alicloud/ros-cdk-vpc.datasource.Address",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		&j,
	)

	return &j
}

// Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
func NewAddress_Override(a Address, scope alicloudroscdkcore.Construct, id *string, props *AddressProps, enableResourcePropertyConstraint *bool) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-vpc.datasource.Address",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		a,
	)
}

func (j *jsiiProxy_Address)SetEnableResourcePropertyConstraint(val *bool) {
	if err := j.validateSetEnableResourcePropertyConstraintParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableResourcePropertyConstraint",
		val,
	)
}

func (j *jsiiProxy_Address)SetId(val *string) {
	if err := j.validateSetIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"id",
		val,
	)
}

func (j *jsiiProxy_Address)SetProps(val *AddressProps) {
	if err := j.validateSetPropsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"props",
		val,
	)
}

func (j *jsiiProxy_Address)SetResource(val alicloudroscdkcore.RosResource) {
	_jsii_.Set(
		j,
		"resource",
		val,
	)
}

func (j *jsiiProxy_Address)SetScope(val alicloudroscdkcore.Construct) {
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
func Address_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateAddress_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-vpc.datasource.Address",
		"isConstruct",
		[]interface{}{x},
		&returns,
	)

	return returns
}

func (a *jsiiProxy_Address) AddCondition(condition alicloudroscdkcore.RosCondition) {
	if err := a.validateAddConditionParameters(condition); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		a,
		"addCondition",
		[]interface{}{condition},
	)
}

func (a *jsiiProxy_Address) AddCount(count interface{}) {
	if err := a.validateAddCountParameters(count); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		a,
		"addCount",
		[]interface{}{count},
	)
}

func (a *jsiiProxy_Address) AddDependency(resource alicloudroscdkcore.Resource) {
	if err := a.validateAddDependencyParameters(resource); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		a,
		"addDependency",
		[]interface{}{resource},
	)
}

func (a *jsiiProxy_Address) AddResourceDesc(desc *string) {
	if err := a.validateAddResourceDescParameters(desc); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		a,
		"addResourceDesc",
		[]interface{}{desc},
	)
}

func (a *jsiiProxy_Address) ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy) {
	if err := a.validateApplyRemovalPolicyParameters(policy); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		a,
		"applyRemovalPolicy",
		[]interface{}{policy},
	)
}

func (a *jsiiProxy_Address) GeneratePhysicalName() *string {
	var returns *string

	_jsii_.Invoke(
		a,
		"generatePhysicalName",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (a *jsiiProxy_Address) GetAtt(name *string) alicloudroscdkcore.IResolvable {
	if err := a.validateGetAttParameters(name); err != nil {
		panic(err)
	}
	var returns alicloudroscdkcore.IResolvable

	_jsii_.Invoke(
		a,
		"getAtt",
		[]interface{}{name},
		&returns,
	)

	return returns
}

func (a *jsiiProxy_Address) OnPrepare() {
	_jsii_.InvokeVoid(
		a,
		"onPrepare",
		nil, // no parameters
	)
}

func (a *jsiiProxy_Address) OnSynthesize(session constructs.ISynthesisSession) {
	if err := a.validateOnSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		a,
		"onSynthesize",
		[]interface{}{session},
	)
}

func (a *jsiiProxy_Address) OnValidate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		a,
		"onValidate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (a *jsiiProxy_Address) Prepare() {
	_jsii_.InvokeVoid(
		a,
		"prepare",
		nil, // no parameters
	)
}

func (a *jsiiProxy_Address) SetMetadata(key *string, value interface{}) {
	if err := a.validateSetMetadataParameters(key, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		a,
		"setMetadata",
		[]interface{}{key, value},
	)
}

func (a *jsiiProxy_Address) Synthesize(session alicloudroscdkcore.ISynthesisSession) {
	if err := a.validateSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		a,
		"synthesize",
		[]interface{}{session},
	)
}

func (a *jsiiProxy_Address) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		a,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (a *jsiiProxy_Address) Validate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		a,
		"validate",
		nil, // no parameters
		&returns,
	)

	return returns
}

