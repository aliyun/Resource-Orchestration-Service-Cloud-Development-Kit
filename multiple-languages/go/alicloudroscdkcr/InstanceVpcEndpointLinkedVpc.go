package alicloudroscdkcr

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkcr/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcr/internal"
	"github.com/aws/constructs-go/constructs/v3"
)

// This class encapsulates and extends the ROS resource type `ALIYUN::CR::InstanceVpcEndpointLinkedVpc`, which is used to associate a virtual private cloud (VPC) with a Container Registry instance.
type InstanceVpcEndpointLinkedVpc interface {
	alicloudroscdkcore.Resource
	IInstanceVpcEndpointLinkedVpc
	// Attribute InstanceId: The ID of the instance.
	AttrInstanceId() interface{}
	// Attribute VpcId: The ID of the vpc.
	AttrVpcId() interface{}
	// Attribute VswitchId: The ID of the vswitch.
	AttrVswitchId() interface{}
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
	Props() *InstanceVpcEndpointLinkedVpcProps
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

// The jsii proxy struct for InstanceVpcEndpointLinkedVpc
type jsiiProxy_InstanceVpcEndpointLinkedVpc struct {
	internal.Type__alicloudroscdkcoreResource
	jsiiProxy_IInstanceVpcEndpointLinkedVpc
}

func (j *jsiiProxy_InstanceVpcEndpointLinkedVpc) AttrInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_InstanceVpcEndpointLinkedVpc) AttrVpcId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVpcId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_InstanceVpcEndpointLinkedVpc) AttrVswitchId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVswitchId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_InstanceVpcEndpointLinkedVpc) EnableResourcePropertyConstraint() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"enableResourcePropertyConstraint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_InstanceVpcEndpointLinkedVpc) Env() alicloudroscdkcore.IResourceEnvironment {
	var returns alicloudroscdkcore.IResourceEnvironment
	_jsii_.Get(
		j,
		"env",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_InstanceVpcEndpointLinkedVpc) Id() *string {
	var returns *string
	_jsii_.Get(
		j,
		"id",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_InstanceVpcEndpointLinkedVpc) Node() alicloudroscdkcore.ConstructNode {
	var returns alicloudroscdkcore.ConstructNode
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_InstanceVpcEndpointLinkedVpc) PhysicalName() *string {
	var returns *string
	_jsii_.Get(
		j,
		"physicalName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_InstanceVpcEndpointLinkedVpc) Props() *InstanceVpcEndpointLinkedVpcProps {
	var returns *InstanceVpcEndpointLinkedVpcProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_InstanceVpcEndpointLinkedVpc) Ref() *string {
	var returns *string
	_jsii_.Get(
		j,
		"ref",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_InstanceVpcEndpointLinkedVpc) Resource() alicloudroscdkcore.RosResource {
	var returns alicloudroscdkcore.RosResource
	_jsii_.Get(
		j,
		"resource",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_InstanceVpcEndpointLinkedVpc) Scope() alicloudroscdkcore.Construct {
	var returns alicloudroscdkcore.Construct
	_jsii_.Get(
		j,
		"scope",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_InstanceVpcEndpointLinkedVpc) Stack() alicloudroscdkcore.Stack {
	var returns alicloudroscdkcore.Stack
	_jsii_.Get(
		j,
		"stack",
		&returns,
	)
	return returns
}


// Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
func NewInstanceVpcEndpointLinkedVpc(scope alicloudroscdkcore.Construct, id *string, props *InstanceVpcEndpointLinkedVpcProps, enableResourcePropertyConstraint *bool) InstanceVpcEndpointLinkedVpc {
	_init_.Initialize()

	if err := validateNewInstanceVpcEndpointLinkedVpcParameters(scope, id, props); err != nil {
		panic(err)
	}
	j := jsiiProxy_InstanceVpcEndpointLinkedVpc{}

	_jsii_.Create(
		"@alicloud/ros-cdk-cr.InstanceVpcEndpointLinkedVpc",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		&j,
	)

	return &j
}

// Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
func NewInstanceVpcEndpointLinkedVpc_Override(i InstanceVpcEndpointLinkedVpc, scope alicloudroscdkcore.Construct, id *string, props *InstanceVpcEndpointLinkedVpcProps, enableResourcePropertyConstraint *bool) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-cr.InstanceVpcEndpointLinkedVpc",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		i,
	)
}

func (j *jsiiProxy_InstanceVpcEndpointLinkedVpc)SetEnableResourcePropertyConstraint(val *bool) {
	if err := j.validateSetEnableResourcePropertyConstraintParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableResourcePropertyConstraint",
		val,
	)
}

func (j *jsiiProxy_InstanceVpcEndpointLinkedVpc)SetId(val *string) {
	if err := j.validateSetIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"id",
		val,
	)
}

func (j *jsiiProxy_InstanceVpcEndpointLinkedVpc)SetResource(val alicloudroscdkcore.RosResource) {
	_jsii_.Set(
		j,
		"resource",
		val,
	)
}

func (j *jsiiProxy_InstanceVpcEndpointLinkedVpc)SetScope(val alicloudroscdkcore.Construct) {
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
func InstanceVpcEndpointLinkedVpc_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateInstanceVpcEndpointLinkedVpc_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-cr.InstanceVpcEndpointLinkedVpc",
		"isConstruct",
		[]interface{}{x},
		&returns,
	)

	return returns
}

func (i *jsiiProxy_InstanceVpcEndpointLinkedVpc) AddCondition(condition alicloudroscdkcore.RosCondition) {
	if err := i.validateAddConditionParameters(condition); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		i,
		"addCondition",
		[]interface{}{condition},
	)
}

func (i *jsiiProxy_InstanceVpcEndpointLinkedVpc) AddCount(count interface{}) {
	if err := i.validateAddCountParameters(count); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		i,
		"addCount",
		[]interface{}{count},
	)
}

func (i *jsiiProxy_InstanceVpcEndpointLinkedVpc) AddDependency(resource alicloudroscdkcore.Resource) {
	if err := i.validateAddDependencyParameters(resource); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		i,
		"addDependency",
		[]interface{}{resource},
	)
}

func (i *jsiiProxy_InstanceVpcEndpointLinkedVpc) AddResourceDesc(desc *string) {
	if err := i.validateAddResourceDescParameters(desc); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		i,
		"addResourceDesc",
		[]interface{}{desc},
	)
}

func (i *jsiiProxy_InstanceVpcEndpointLinkedVpc) ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy) {
	if err := i.validateApplyRemovalPolicyParameters(policy); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		i,
		"applyRemovalPolicy",
		[]interface{}{policy},
	)
}

func (i *jsiiProxy_InstanceVpcEndpointLinkedVpc) FetchCondition() alicloudroscdkcore.RosCondition {
	var returns alicloudroscdkcore.RosCondition

	_jsii_.Invoke(
		i,
		"fetchCondition",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (i *jsiiProxy_InstanceVpcEndpointLinkedVpc) FetchDependency() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		i,
		"fetchDependency",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (i *jsiiProxy_InstanceVpcEndpointLinkedVpc) FetchResourceDesc() *string {
	var returns *string

	_jsii_.Invoke(
		i,
		"fetchResourceDesc",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (i *jsiiProxy_InstanceVpcEndpointLinkedVpc) GeneratePhysicalName() *string {
	var returns *string

	_jsii_.Invoke(
		i,
		"generatePhysicalName",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (i *jsiiProxy_InstanceVpcEndpointLinkedVpc) GetAtt(name *string) alicloudroscdkcore.IResolvable {
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

func (i *jsiiProxy_InstanceVpcEndpointLinkedVpc) OnPrepare() {
	_jsii_.InvokeVoid(
		i,
		"onPrepare",
		nil, // no parameters
	)
}

func (i *jsiiProxy_InstanceVpcEndpointLinkedVpc) OnSynthesize(session constructs.ISynthesisSession) {
	if err := i.validateOnSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		i,
		"onSynthesize",
		[]interface{}{session},
	)
}

func (i *jsiiProxy_InstanceVpcEndpointLinkedVpc) OnValidate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		i,
		"onValidate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (i *jsiiProxy_InstanceVpcEndpointLinkedVpc) Prepare() {
	_jsii_.InvokeVoid(
		i,
		"prepare",
		nil, // no parameters
	)
}

func (i *jsiiProxy_InstanceVpcEndpointLinkedVpc) SetMetadata(key *string, value interface{}) {
	if err := i.validateSetMetadataParameters(key, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		i,
		"setMetadata",
		[]interface{}{key, value},
	)
}

func (i *jsiiProxy_InstanceVpcEndpointLinkedVpc) Synthesize(session alicloudroscdkcore.ISynthesisSession) {
	if err := i.validateSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		i,
		"synthesize",
		[]interface{}{session},
	)
}

func (i *jsiiProxy_InstanceVpcEndpointLinkedVpc) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		i,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (i *jsiiProxy_InstanceVpcEndpointLinkedVpc) Validate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		i,
		"validate",
		nil, // no parameters
		&returns,
	)

	return returns
}

