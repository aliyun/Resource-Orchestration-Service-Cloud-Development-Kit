package datasource

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkvpc/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkvpc/datasource/internal"
	"github.com/aws/constructs-go/constructs/v3"
)

// This class encapsulates and extends the ROS resource type `DATASOURCE::VPC::Vpc`, which is used to query the information about a virtual private cloud (VPC).
type Vpc interface {
	alicloudroscdkcore.Resource
	// Attribute CidrBlock: The IPv4 CIDR block of the VPC.
	AttrCidrBlock() alicloudroscdkcore.IResolvable
	// Attribute ClassicLinkEnabled: status of vpc  ClassicLink..
	AttrClassicLinkEnabled() alicloudroscdkcore.IResolvable
	// Attribute CreateTime: The time at which the VPC was created.
	AttrCreateTime() alicloudroscdkcore.IResolvable
	// Attribute Description: The description of the VPC.
	AttrDescription() alicloudroscdkcore.IResolvable
	// Attribute DhcpOptionsSetId: The ID of the DHCP option set.
	AttrDhcpOptionsSetId() alicloudroscdkcore.IResolvable
	// Attribute Ipv6CidrBlock: The ipv6 cidr block of vpc.
	AttrIpv6CidrBlock() alicloudroscdkcore.IResolvable
	// Attribute Ipv6CidrBlocks: The IPv6 network segment of the VPC.
	AttrIpv6CidrBlocks() alicloudroscdkcore.IResolvable
	// Attribute IsDefault: Indicates whether to query the default VPC in the specified region.
	//
	// Valid values:
	// - true (default): All VPCs in the specified region are queried.
	// - false: The default VPC is not queried.
	AttrIsDefault() alicloudroscdkcore.IResolvable
	// Attribute ResourceGroupId: The ID of the resource group to which the VPC belongs.
	AttrResourceGroupId() alicloudroscdkcore.IResolvable
	// Attribute RouterId: The ID of the VRouter.
	AttrRouterId() alicloudroscdkcore.IResolvable
	// Attribute SecondaryCidrBlocks: Additional network segment information.
	AttrSecondaryCidrBlocks() alicloudroscdkcore.IResolvable
	// Attribute Tags: The tags of Vpc.
	AttrTags() alicloudroscdkcore.IResolvable
	// Attribute UserCidrs: A list of user CIDRs.
	AttrUserCidrs() alicloudroscdkcore.IResolvable
	// Attribute VpcId: The ID of the VPC.
	AttrVpcId() alicloudroscdkcore.IResolvable
	// Attribute VpcName: The name of the VPC.
	AttrVpcName() alicloudroscdkcore.IResolvable
	// Attribute VSwitchIds: A list of VSwitches in the VPC.
	AttrVSwitchIds() alicloudroscdkcore.IResolvable
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
	Props() *VpcProps
	SetProps(val *VpcProps)
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

// The jsii proxy struct for Vpc
type jsiiProxy_Vpc struct {
	internal.Type__alicloudroscdkcoreResource
}

func (j *jsiiProxy_Vpc) AttrCidrBlock() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrCidrBlock",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Vpc) AttrClassicLinkEnabled() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrClassicLinkEnabled",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Vpc) AttrCreateTime() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Vpc) AttrDescription() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Vpc) AttrDhcpOptionsSetId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDhcpOptionsSetId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Vpc) AttrIpv6CidrBlock() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrIpv6CidrBlock",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Vpc) AttrIpv6CidrBlocks() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrIpv6CidrBlocks",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Vpc) AttrIsDefault() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrIsDefault",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Vpc) AttrResourceGroupId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrResourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Vpc) AttrRouterId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrRouterId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Vpc) AttrSecondaryCidrBlocks() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrSecondaryCidrBlocks",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Vpc) AttrTags() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrTags",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Vpc) AttrUserCidrs() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrUserCidrs",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Vpc) AttrVpcId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrVpcId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Vpc) AttrVpcName() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrVpcName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Vpc) AttrVSwitchIds() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrVSwitchIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Vpc) EnableResourcePropertyConstraint() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"enableResourcePropertyConstraint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Vpc) Id() *string {
	var returns *string
	_jsii_.Get(
		j,
		"id",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Vpc) Node() alicloudroscdkcore.ConstructNode {
	var returns alicloudroscdkcore.ConstructNode
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Vpc) PhysicalName() *string {
	var returns *string
	_jsii_.Get(
		j,
		"physicalName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Vpc) Props() *VpcProps {
	var returns *VpcProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Vpc) Ref() *string {
	var returns *string
	_jsii_.Get(
		j,
		"ref",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Vpc) Resource() alicloudroscdkcore.RosResource {
	var returns alicloudroscdkcore.RosResource
	_jsii_.Get(
		j,
		"resource",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Vpc) Scope() alicloudroscdkcore.Construct {
	var returns alicloudroscdkcore.Construct
	_jsii_.Get(
		j,
		"scope",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Vpc) Stack() alicloudroscdkcore.Stack {
	var returns alicloudroscdkcore.Stack
	_jsii_.Get(
		j,
		"stack",
		&returns,
	)
	return returns
}


// Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
func NewVpc(scope alicloudroscdkcore.Construct, id *string, props *VpcProps, enableResourcePropertyConstraint *bool) Vpc {
	_init_.Initialize()

	if err := validateNewVpcParameters(scope, id, props); err != nil {
		panic(err)
	}
	j := jsiiProxy_Vpc{}

	_jsii_.Create(
		"@alicloud/ros-cdk-vpc.datasource.Vpc",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		&j,
	)

	return &j
}

// Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
func NewVpc_Override(v Vpc, scope alicloudroscdkcore.Construct, id *string, props *VpcProps, enableResourcePropertyConstraint *bool) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-vpc.datasource.Vpc",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		v,
	)
}

func (j *jsiiProxy_Vpc)SetEnableResourcePropertyConstraint(val *bool) {
	if err := j.validateSetEnableResourcePropertyConstraintParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableResourcePropertyConstraint",
		val,
	)
}

func (j *jsiiProxy_Vpc)SetId(val *string) {
	if err := j.validateSetIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"id",
		val,
	)
}

func (j *jsiiProxy_Vpc)SetProps(val *VpcProps) {
	if err := j.validateSetPropsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"props",
		val,
	)
}

func (j *jsiiProxy_Vpc)SetResource(val alicloudroscdkcore.RosResource) {
	_jsii_.Set(
		j,
		"resource",
		val,
	)
}

func (j *jsiiProxy_Vpc)SetScope(val alicloudroscdkcore.Construct) {
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
func Vpc_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateVpc_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-vpc.datasource.Vpc",
		"isConstruct",
		[]interface{}{x},
		&returns,
	)

	return returns
}

func (v *jsiiProxy_Vpc) AddCondition(condition alicloudroscdkcore.RosCondition) {
	if err := v.validateAddConditionParameters(condition); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		v,
		"addCondition",
		[]interface{}{condition},
	)
}

func (v *jsiiProxy_Vpc) AddCount(count interface{}) {
	if err := v.validateAddCountParameters(count); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		v,
		"addCount",
		[]interface{}{count},
	)
}

func (v *jsiiProxy_Vpc) AddDependency(resource alicloudroscdkcore.Resource) {
	if err := v.validateAddDependencyParameters(resource); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		v,
		"addDependency",
		[]interface{}{resource},
	)
}

func (v *jsiiProxy_Vpc) AddResourceDesc(desc *string) {
	if err := v.validateAddResourceDescParameters(desc); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		v,
		"addResourceDesc",
		[]interface{}{desc},
	)
}

func (v *jsiiProxy_Vpc) ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy) {
	if err := v.validateApplyRemovalPolicyParameters(policy); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		v,
		"applyRemovalPolicy",
		[]interface{}{policy},
	)
}

func (v *jsiiProxy_Vpc) GeneratePhysicalName() *string {
	var returns *string

	_jsii_.Invoke(
		v,
		"generatePhysicalName",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (v *jsiiProxy_Vpc) GetAtt(name *string) alicloudroscdkcore.IResolvable {
	if err := v.validateGetAttParameters(name); err != nil {
		panic(err)
	}
	var returns alicloudroscdkcore.IResolvable

	_jsii_.Invoke(
		v,
		"getAtt",
		[]interface{}{name},
		&returns,
	)

	return returns
}

func (v *jsiiProxy_Vpc) OnPrepare() {
	_jsii_.InvokeVoid(
		v,
		"onPrepare",
		nil, // no parameters
	)
}

func (v *jsiiProxy_Vpc) OnSynthesize(session constructs.ISynthesisSession) {
	if err := v.validateOnSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		v,
		"onSynthesize",
		[]interface{}{session},
	)
}

func (v *jsiiProxy_Vpc) OnValidate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		v,
		"onValidate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (v *jsiiProxy_Vpc) Prepare() {
	_jsii_.InvokeVoid(
		v,
		"prepare",
		nil, // no parameters
	)
}

func (v *jsiiProxy_Vpc) SetMetadata(key *string, value interface{}) {
	if err := v.validateSetMetadataParameters(key, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		v,
		"setMetadata",
		[]interface{}{key, value},
	)
}

func (v *jsiiProxy_Vpc) Synthesize(session alicloudroscdkcore.ISynthesisSession) {
	if err := v.validateSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		v,
		"synthesize",
		[]interface{}{session},
	)
}

func (v *jsiiProxy_Vpc) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		v,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (v *jsiiProxy_Vpc) Validate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		v,
		"validate",
		nil, // no parameters
		&returns,
	)

	return returns
}

