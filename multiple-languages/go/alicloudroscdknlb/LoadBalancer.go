package alicloudroscdknlb

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdknlb/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdknlb/internal"
	"github.com/aws/constructs-go/constructs/v3"
)

// This class encapsulates and extends the ROS resource type `ALIYUN::NLB::LoadBalancer`, which is used to create a Network Load Balancer (NLB) instance.
type LoadBalancer interface {
	alicloudroscdkcore.Resource
	ILoadBalancer
	// Attribute AddressIpVersion: The version of IP address that the NLB instance uses to provide services.
	AttrAddressIpVersion() interface{}
	// Attribute AddressType: The type of IP address that the NLB instance uses to provide services.
	AttrAddressType() interface{}
	// Attribute Arn: The Alibaba Cloud Resource Name (ARN).
	AttrArn() interface{}
	// Attribute DNSName: The domain name of the NLB instance.
	AttrDnsName() interface{}
	// Attribute LoadBalancerId: The ID of the NLB instance.
	AttrLoadBalancerId() interface{}
	// Attribute LoadBalancerType: The type of the NLB instance.
	AttrLoadBalancerType() interface{}
	// Attribute VpcId: The ID of the virtual private cloud (VPC) where the NLB instance is deployed.
	AttrVpcId() interface{}
	// Attribute ZoneMappings: The zones, vSwitches and addresses which are mapped to the zones.
	AttrZoneMappings() interface{}
	EnableResourcePropertyConstraint() *bool
	SetEnableResourcePropertyConstraint(val *bool)
	// The environment this resource belongs to.
	//
	// For resources that are created and managed by the CDK
	// (generally, those created by creating new class instances like Role, Bucket, etc.),
	// this is always the same as the environment of the stack they belong to;
	// however, for imported resources
	// (those obtained from static methods like fromRoleArn, fromBucketName, etc.),
	// that might be different than the stack they were imported into.
	Env() alicloudroscdkcore.IResourceEnvironment
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
	FetchCondition() alicloudroscdkcore.RosCondition
	FetchDependency() *[]*string
	FetchResourceDesc() *string
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
	jsiiProxy_ILoadBalancer
}

func (j *jsiiProxy_LoadBalancer) AttrAddressIpVersion() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAddressIpVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LoadBalancer) AttrAddressType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAddressType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LoadBalancer) AttrArn() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrArn",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LoadBalancer) AttrDnsName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDnsName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LoadBalancer) AttrLoadBalancerId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLoadBalancerId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LoadBalancer) AttrLoadBalancerType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLoadBalancerType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LoadBalancer) AttrVpcId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVpcId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LoadBalancer) AttrZoneMappings() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrZoneMappings",
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

func (j *jsiiProxy_LoadBalancer) Env() alicloudroscdkcore.IResourceEnvironment {
	var returns alicloudroscdkcore.IResourceEnvironment
	_jsii_.Get(
		j,
		"env",
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
		"@alicloud/ros-cdk-nlb.LoadBalancer",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		&j,
	)

	return &j
}

// Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
func NewLoadBalancer_Override(l LoadBalancer, scope alicloudroscdkcore.Construct, id *string, props *LoadBalancerProps, enableResourcePropertyConstraint *bool) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-nlb.LoadBalancer",
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
		"@alicloud/ros-cdk-nlb.LoadBalancer",
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

func (l *jsiiProxy_LoadBalancer) FetchCondition() alicloudroscdkcore.RosCondition {
	var returns alicloudroscdkcore.RosCondition

	_jsii_.Invoke(
		l,
		"fetchCondition",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (l *jsiiProxy_LoadBalancer) FetchDependency() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		l,
		"fetchDependency",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (l *jsiiProxy_LoadBalancer) FetchResourceDesc() *string {
	var returns *string

	_jsii_.Invoke(
		l,
		"fetchResourceDesc",
		nil, // no parameters
		&returns,
	)

	return returns
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

