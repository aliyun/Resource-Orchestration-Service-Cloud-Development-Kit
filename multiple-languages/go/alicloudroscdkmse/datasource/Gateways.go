package datasource

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkmse/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkmse/datasource/internal"
	"github.com/aws/constructs-go/constructs/v3"
)

// This class encapsulates and extends the ROS resource type `DATASOURCE::MSE::Gateways`, which is used to query the information about gateways.
type Gateways interface {
	alicloudroscdkcore.Resource
	IGateways
	// Attribute GatewayIds: The list of gateway IDs.
	AttrGatewayIds() interface{}
	// Attribute Gateways: The list of gateways.
	AttrGateways() interface{}
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
	Props() *GatewaysProps
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

// The jsii proxy struct for Gateways
type jsiiProxy_Gateways struct {
	internal.Type__alicloudroscdkcoreResource
	jsiiProxy_IGateways
}

func (j *jsiiProxy_Gateways) AttrGatewayIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrGatewayIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Gateways) AttrGateways() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrGateways",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Gateways) EnableResourcePropertyConstraint() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"enableResourcePropertyConstraint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Gateways) Env() alicloudroscdkcore.IResourceEnvironment {
	var returns alicloudroscdkcore.IResourceEnvironment
	_jsii_.Get(
		j,
		"env",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Gateways) Id() *string {
	var returns *string
	_jsii_.Get(
		j,
		"id",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Gateways) Node() alicloudroscdkcore.ConstructNode {
	var returns alicloudroscdkcore.ConstructNode
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Gateways) PhysicalName() *string {
	var returns *string
	_jsii_.Get(
		j,
		"physicalName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Gateways) Props() *GatewaysProps {
	var returns *GatewaysProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Gateways) Ref() *string {
	var returns *string
	_jsii_.Get(
		j,
		"ref",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Gateways) Resource() alicloudroscdkcore.RosResource {
	var returns alicloudroscdkcore.RosResource
	_jsii_.Get(
		j,
		"resource",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Gateways) Scope() alicloudroscdkcore.Construct {
	var returns alicloudroscdkcore.Construct
	_jsii_.Get(
		j,
		"scope",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Gateways) Stack() alicloudroscdkcore.Stack {
	var returns alicloudroscdkcore.Stack
	_jsii_.Get(
		j,
		"stack",
		&returns,
	)
	return returns
}


// Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
func NewGateways(scope alicloudroscdkcore.Construct, id *string, props *GatewaysProps, enableResourcePropertyConstraint *bool) Gateways {
	_init_.Initialize()

	if err := validateNewGatewaysParameters(scope, id, props); err != nil {
		panic(err)
	}
	j := jsiiProxy_Gateways{}

	_jsii_.Create(
		"@alicloud/ros-cdk-mse.datasource.Gateways",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		&j,
	)

	return &j
}

// Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
func NewGateways_Override(g Gateways, scope alicloudroscdkcore.Construct, id *string, props *GatewaysProps, enableResourcePropertyConstraint *bool) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-mse.datasource.Gateways",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		g,
	)
}

func (j *jsiiProxy_Gateways)SetEnableResourcePropertyConstraint(val *bool) {
	if err := j.validateSetEnableResourcePropertyConstraintParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableResourcePropertyConstraint",
		val,
	)
}

func (j *jsiiProxy_Gateways)SetId(val *string) {
	if err := j.validateSetIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"id",
		val,
	)
}

func (j *jsiiProxy_Gateways)SetResource(val alicloudroscdkcore.RosResource) {
	_jsii_.Set(
		j,
		"resource",
		val,
	)
}

func (j *jsiiProxy_Gateways)SetScope(val alicloudroscdkcore.Construct) {
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
func Gateways_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateGateways_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-mse.datasource.Gateways",
		"isConstruct",
		[]interface{}{x},
		&returns,
	)

	return returns
}

func (g *jsiiProxy_Gateways) AddCondition(condition alicloudroscdkcore.RosCondition) {
	if err := g.validateAddConditionParameters(condition); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		g,
		"addCondition",
		[]interface{}{condition},
	)
}

func (g *jsiiProxy_Gateways) AddCount(count interface{}) {
	if err := g.validateAddCountParameters(count); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		g,
		"addCount",
		[]interface{}{count},
	)
}

func (g *jsiiProxy_Gateways) AddDependency(resource alicloudroscdkcore.Resource) {
	if err := g.validateAddDependencyParameters(resource); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		g,
		"addDependency",
		[]interface{}{resource},
	)
}

func (g *jsiiProxy_Gateways) AddResourceDesc(desc *string) {
	if err := g.validateAddResourceDescParameters(desc); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		g,
		"addResourceDesc",
		[]interface{}{desc},
	)
}

func (g *jsiiProxy_Gateways) ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy) {
	if err := g.validateApplyRemovalPolicyParameters(policy); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		g,
		"applyRemovalPolicy",
		[]interface{}{policy},
	)
}

func (g *jsiiProxy_Gateways) FetchCondition() alicloudroscdkcore.RosCondition {
	var returns alicloudroscdkcore.RosCondition

	_jsii_.Invoke(
		g,
		"fetchCondition",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (g *jsiiProxy_Gateways) FetchDependency() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		g,
		"fetchDependency",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (g *jsiiProxy_Gateways) FetchResourceDesc() *string {
	var returns *string

	_jsii_.Invoke(
		g,
		"fetchResourceDesc",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (g *jsiiProxy_Gateways) GeneratePhysicalName() *string {
	var returns *string

	_jsii_.Invoke(
		g,
		"generatePhysicalName",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (g *jsiiProxy_Gateways) GetAtt(name *string) alicloudroscdkcore.IResolvable {
	if err := g.validateGetAttParameters(name); err != nil {
		panic(err)
	}
	var returns alicloudroscdkcore.IResolvable

	_jsii_.Invoke(
		g,
		"getAtt",
		[]interface{}{name},
		&returns,
	)

	return returns
}

func (g *jsiiProxy_Gateways) OnPrepare() {
	_jsii_.InvokeVoid(
		g,
		"onPrepare",
		nil, // no parameters
	)
}

func (g *jsiiProxy_Gateways) OnSynthesize(session constructs.ISynthesisSession) {
	if err := g.validateOnSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		g,
		"onSynthesize",
		[]interface{}{session},
	)
}

func (g *jsiiProxy_Gateways) OnValidate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		g,
		"onValidate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (g *jsiiProxy_Gateways) Prepare() {
	_jsii_.InvokeVoid(
		g,
		"prepare",
		nil, // no parameters
	)
}

func (g *jsiiProxy_Gateways) SetMetadata(key *string, value interface{}) {
	if err := g.validateSetMetadataParameters(key, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		g,
		"setMetadata",
		[]interface{}{key, value},
	)
}

func (g *jsiiProxy_Gateways) Synthesize(session alicloudroscdkcore.ISynthesisSession) {
	if err := g.validateSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		g,
		"synthesize",
		[]interface{}{session},
	)
}

func (g *jsiiProxy_Gateways) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		g,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (g *jsiiProxy_Gateways) Validate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		g,
		"validate",
		nil, // no parameters
		&returns,
	)

	return returns
}

