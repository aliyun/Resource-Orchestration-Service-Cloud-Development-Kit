package datasource

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkvpc/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkvpc/datasource/internal"
	"github.com/aws/constructs-go/constructs/v3"
)

// This class encapsulates and extends the ROS resource type `DATASOURCE::VPC::CommonBandwidthPackage`.
type CommonBandwidthPackage interface {
	alicloudroscdkcore.Resource
	// Attribute Bandwidth: The maximum bandwidth of the Internet Shared Bandwidth instance.
	//
	// Unit: Mbit/s.
	AttrBandwidth() alicloudroscdkcore.IResolvable
	// Attribute BusinessStatus: The service status of the Internet Shared Bandwidth instance.
	//
	// Valid values:
	// Normal: The Internet Shared Bandwidth instance runs as expected.
	// FinancialLocked: An overdue payment occurs in the Internet Shared Bandwidth instance
	// Unactivated: The Internet Shared Bandwidth instance is not activated.
	AttrBusinessStatus() alicloudroscdkcore.IResolvable
	// Attribute CommonBandwidthPackageId: The ID of the Internet shared bandwidth.
	AttrCommonBandwidthPackageId() alicloudroscdkcore.IResolvable
	// Attribute CommonBandwidthPackageName: The name of the Internet Shared Bandwidth instance.
	AttrCommonBandwidthPackageName() alicloudroscdkcore.IResolvable
	// Attribute CreationTime: The time when the Internet Shared Bandwidth instance was created.
	//
	// The time is displayed in the YYYY-MM-DDThh:mm:ssZ format.
	AttrCreationTime() alicloudroscdkcore.IResolvable
	// Attribute DeletionProtection: Indicates whether deletion protection is enabled.
	//
	// Valid values:
	// false
	// true.
	AttrDeletionProtection() alicloudroscdkcore.IResolvable
	// Attribute Description: The description of the Internet Shared Bandwidth instance.
	AttrDescription() alicloudroscdkcore.IResolvable
	// Attribute ExpiredTime: The time when the Internet Shared Bandwidth instance expired.
	//
	// The time is displayed in the YYYY-MM-DDThh:mm:ssZ format.
	AttrExpiredTime() alicloudroscdkcore.IResolvable
	// Attribute HasReservationData: Indicates whether the information about pending orders is returned.
	//
	// Valid values:
	// false
	// true.
	AttrHasReservationData() alicloudroscdkcore.IResolvable
	// Attribute InstanceChargeType: The billing method of the Internet Shared Bandwidth instance.
	//
	// Valid value:
	// PostPaid: pay-as-you-go
	// PrePaid: subscription.
	AttrInstanceChargeType() alicloudroscdkcore.IResolvable
	// Attribute InternetChargeType: The metering method of the Internet Shared Bandwidth instance.
	//
	// Valid value:
	// PayBy95: Charged by Enhanced 95th Percentile.
	// PayByBandwidth: Charged by Bandwidth.
	// PayByDominantTraffic: Charged by Dominant Traffic.
	AttrInternetChargeType() alicloudroscdkcore.IResolvable
	// Attribute Isp: The line type.
	//
	// Valid values:
	// BGP (default): BGP (Multi-ISP) lines.
	// BGP_PRO: BGP (Multi-ISP) Pro lines.
	// Valid values if you are allowed to use single-ISP bandwidth:
	// ChinaTelecom
	// ChinaUnicom
	// ChinaMobile
	// ChinaTelecom_L2
	// ChinaUnicom_L2
	// ChinaMobile_L2.
	AttrIsp() alicloudroscdkcore.IResolvable
	// Attribute PublicIpAddresses: The elastic IP addresses (EIPs) that are associated with the Internet Shared Bandwidth instance.
	AttrPublicIpAddresses() alicloudroscdkcore.IResolvable
	// Attribute Ratio: The percentage of the minimum bandwidth commitment.
	//
	// Only 20 is returned.
	AttrRatio() alicloudroscdkcore.IResolvable
	// Attribute ReservationActiveTime: The time when the renewal took effect.
	//
	// The time is displayed in the YYYY-MM-DDThh:mm:ssZ format.
	AttrReservationActiveTime() alicloudroscdkcore.IResolvable
	// Attribute ReservationBandwidth: The new maximum bandwidth after the configurations are changed.
	//
	// Unit: Mbit/s.
	AttrReservationBandwidth() alicloudroscdkcore.IResolvable
	// Attribute ReservationInternetChargeType: The metering method after the configurations are changed.
	//
	// Valid value:
	// PayBy95: Charged by Enhanced 95th Percentile.
	// PayByBandwidth: Charged by Bandwidth.
	// PayByDominantTraffic: Charged by Dominant Traffic.
	AttrReservationInternetChargeType() alicloudroscdkcore.IResolvable
	// Attribute ReservationOrderType: The renewal method.
	//
	// Valid values:
	// RENEWCHANGE: renewal with a specification change
	// TEMP_UPGRADE: renewal with a temporary upgrade
	// UPGRADE: renewal with an upgrade.
	AttrReservationOrderType() alicloudroscdkcore.IResolvable
	// Attribute ResourceGroupId: The ID of the resource group.
	AttrResourceGroupId() alicloudroscdkcore.IResolvable
	// Attribute ServiceManaged: Indicates whether the resource is created by the service account.
	//
	// Valid values:
	// 0: The resource is not created by the service account.
	// 1: The resource is created by the service account.
	AttrServiceManaged() alicloudroscdkcore.IResolvable
	// Attribute Status: The status of the Internet Shared Bandwidth instance.
	//
	// Valid values:
	// Available: The Internet Shared Bandwidth instance is available.
	// Modifying: The Internet Shared Bandwidth instance is being modified.
	AttrStatus() alicloudroscdkcore.IResolvable
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
	Props() *CommonBandwidthPackageProps
	SetProps(val *CommonBandwidthPackageProps)
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

// The jsii proxy struct for CommonBandwidthPackage
type jsiiProxy_CommonBandwidthPackage struct {
	internal.Type__alicloudroscdkcoreResource
}

func (j *jsiiProxy_CommonBandwidthPackage) AttrBandwidth() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrBandwidth",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_CommonBandwidthPackage) AttrBusinessStatus() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrBusinessStatus",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_CommonBandwidthPackage) AttrCommonBandwidthPackageId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrCommonBandwidthPackageId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_CommonBandwidthPackage) AttrCommonBandwidthPackageName() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrCommonBandwidthPackageName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_CommonBandwidthPackage) AttrCreationTime() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrCreationTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_CommonBandwidthPackage) AttrDeletionProtection() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDeletionProtection",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_CommonBandwidthPackage) AttrDescription() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_CommonBandwidthPackage) AttrExpiredTime() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrExpiredTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_CommonBandwidthPackage) AttrHasReservationData() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrHasReservationData",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_CommonBandwidthPackage) AttrInstanceChargeType() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrInstanceChargeType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_CommonBandwidthPackage) AttrInternetChargeType() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrInternetChargeType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_CommonBandwidthPackage) AttrIsp() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrIsp",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_CommonBandwidthPackage) AttrPublicIpAddresses() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrPublicIpAddresses",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_CommonBandwidthPackage) AttrRatio() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrRatio",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_CommonBandwidthPackage) AttrReservationActiveTime() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrReservationActiveTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_CommonBandwidthPackage) AttrReservationBandwidth() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrReservationBandwidth",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_CommonBandwidthPackage) AttrReservationInternetChargeType() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrReservationInternetChargeType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_CommonBandwidthPackage) AttrReservationOrderType() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrReservationOrderType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_CommonBandwidthPackage) AttrResourceGroupId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrResourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_CommonBandwidthPackage) AttrServiceManaged() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrServiceManaged",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_CommonBandwidthPackage) AttrStatus() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrStatus",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_CommonBandwidthPackage) EnableResourcePropertyConstraint() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"enableResourcePropertyConstraint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_CommonBandwidthPackage) Id() *string {
	var returns *string
	_jsii_.Get(
		j,
		"id",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_CommonBandwidthPackage) Node() alicloudroscdkcore.ConstructNode {
	var returns alicloudroscdkcore.ConstructNode
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_CommonBandwidthPackage) PhysicalName() *string {
	var returns *string
	_jsii_.Get(
		j,
		"physicalName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_CommonBandwidthPackage) Props() *CommonBandwidthPackageProps {
	var returns *CommonBandwidthPackageProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_CommonBandwidthPackage) Ref() *string {
	var returns *string
	_jsii_.Get(
		j,
		"ref",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_CommonBandwidthPackage) Resource() alicloudroscdkcore.RosResource {
	var returns alicloudroscdkcore.RosResource
	_jsii_.Get(
		j,
		"resource",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_CommonBandwidthPackage) Scope() alicloudroscdkcore.Construct {
	var returns alicloudroscdkcore.Construct
	_jsii_.Get(
		j,
		"scope",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_CommonBandwidthPackage) Stack() alicloudroscdkcore.Stack {
	var returns alicloudroscdkcore.Stack
	_jsii_.Get(
		j,
		"stack",
		&returns,
	)
	return returns
}


// Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
func NewCommonBandwidthPackage(scope alicloudroscdkcore.Construct, id *string, props *CommonBandwidthPackageProps, enableResourcePropertyConstraint *bool) CommonBandwidthPackage {
	_init_.Initialize()

	if err := validateNewCommonBandwidthPackageParameters(scope, id, props); err != nil {
		panic(err)
	}
	j := jsiiProxy_CommonBandwidthPackage{}

	_jsii_.Create(
		"@alicloud/ros-cdk-vpc.datasource.CommonBandwidthPackage",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		&j,
	)

	return &j
}

// Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
func NewCommonBandwidthPackage_Override(c CommonBandwidthPackage, scope alicloudroscdkcore.Construct, id *string, props *CommonBandwidthPackageProps, enableResourcePropertyConstraint *bool) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-vpc.datasource.CommonBandwidthPackage",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		c,
	)
}

func (j *jsiiProxy_CommonBandwidthPackage)SetEnableResourcePropertyConstraint(val *bool) {
	if err := j.validateSetEnableResourcePropertyConstraintParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableResourcePropertyConstraint",
		val,
	)
}

func (j *jsiiProxy_CommonBandwidthPackage)SetId(val *string) {
	if err := j.validateSetIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"id",
		val,
	)
}

func (j *jsiiProxy_CommonBandwidthPackage)SetProps(val *CommonBandwidthPackageProps) {
	if err := j.validateSetPropsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"props",
		val,
	)
}

func (j *jsiiProxy_CommonBandwidthPackage)SetResource(val alicloudroscdkcore.RosResource) {
	_jsii_.Set(
		j,
		"resource",
		val,
	)
}

func (j *jsiiProxy_CommonBandwidthPackage)SetScope(val alicloudroscdkcore.Construct) {
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
func CommonBandwidthPackage_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateCommonBandwidthPackage_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-vpc.datasource.CommonBandwidthPackage",
		"isConstruct",
		[]interface{}{x},
		&returns,
	)

	return returns
}

func (c *jsiiProxy_CommonBandwidthPackage) AddCondition(condition alicloudroscdkcore.RosCondition) {
	if err := c.validateAddConditionParameters(condition); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		c,
		"addCondition",
		[]interface{}{condition},
	)
}

func (c *jsiiProxy_CommonBandwidthPackage) AddCount(count interface{}) {
	if err := c.validateAddCountParameters(count); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		c,
		"addCount",
		[]interface{}{count},
	)
}

func (c *jsiiProxy_CommonBandwidthPackage) AddDependency(resource alicloudroscdkcore.Resource) {
	if err := c.validateAddDependencyParameters(resource); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		c,
		"addDependency",
		[]interface{}{resource},
	)
}

func (c *jsiiProxy_CommonBandwidthPackage) AddResourceDesc(desc *string) {
	if err := c.validateAddResourceDescParameters(desc); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		c,
		"addResourceDesc",
		[]interface{}{desc},
	)
}

func (c *jsiiProxy_CommonBandwidthPackage) ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy) {
	if err := c.validateApplyRemovalPolicyParameters(policy); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		c,
		"applyRemovalPolicy",
		[]interface{}{policy},
	)
}

func (c *jsiiProxy_CommonBandwidthPackage) GeneratePhysicalName() *string {
	var returns *string

	_jsii_.Invoke(
		c,
		"generatePhysicalName",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (c *jsiiProxy_CommonBandwidthPackage) GetAtt(name *string) alicloudroscdkcore.IResolvable {
	if err := c.validateGetAttParameters(name); err != nil {
		panic(err)
	}
	var returns alicloudroscdkcore.IResolvable

	_jsii_.Invoke(
		c,
		"getAtt",
		[]interface{}{name},
		&returns,
	)

	return returns
}

func (c *jsiiProxy_CommonBandwidthPackage) OnPrepare() {
	_jsii_.InvokeVoid(
		c,
		"onPrepare",
		nil, // no parameters
	)
}

func (c *jsiiProxy_CommonBandwidthPackage) OnSynthesize(session constructs.ISynthesisSession) {
	if err := c.validateOnSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		c,
		"onSynthesize",
		[]interface{}{session},
	)
}

func (c *jsiiProxy_CommonBandwidthPackage) OnValidate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		c,
		"onValidate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (c *jsiiProxy_CommonBandwidthPackage) Prepare() {
	_jsii_.InvokeVoid(
		c,
		"prepare",
		nil, // no parameters
	)
}

func (c *jsiiProxy_CommonBandwidthPackage) SetMetadata(key *string, value interface{}) {
	if err := c.validateSetMetadataParameters(key, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		c,
		"setMetadata",
		[]interface{}{key, value},
	)
}

func (c *jsiiProxy_CommonBandwidthPackage) Synthesize(session alicloudroscdkcore.ISynthesisSession) {
	if err := c.validateSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		c,
		"synthesize",
		[]interface{}{session},
	)
}

func (c *jsiiProxy_CommonBandwidthPackage) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		c,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (c *jsiiProxy_CommonBandwidthPackage) Validate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		c,
		"validate",
		nil, // no parameters
		&returns,
	)

	return returns
}

