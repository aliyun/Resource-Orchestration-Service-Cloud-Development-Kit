package alicloudroscdkecd

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkecd/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkecd/internal"
	"github.com/aws/constructs-go/constructs/v3"
)

// This class encapsulates and extends the ROS resource type `ALIYUN::ECD::NetworkPackage`, which is used to create a premium bandwidth plan for an office network.
type NetworkPackage interface {
	alicloudroscdkcore.Resource
	INetworkPackage
	// Attribute NetworkPackageId: The ID of the Internet access package.
	AttrNetworkPackageId() interface{}
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
	Props() *NetworkPackageProps
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

// The jsii proxy struct for NetworkPackage
type jsiiProxy_NetworkPackage struct {
	internal.Type__alicloudroscdkcoreResource
	jsiiProxy_INetworkPackage
}

func (j *jsiiProxy_NetworkPackage) AttrNetworkPackageId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNetworkPackageId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_NetworkPackage) EnableResourcePropertyConstraint() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"enableResourcePropertyConstraint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_NetworkPackage) Env() alicloudroscdkcore.IResourceEnvironment {
	var returns alicloudroscdkcore.IResourceEnvironment
	_jsii_.Get(
		j,
		"env",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_NetworkPackage) Id() *string {
	var returns *string
	_jsii_.Get(
		j,
		"id",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_NetworkPackage) Node() alicloudroscdkcore.ConstructNode {
	var returns alicloudroscdkcore.ConstructNode
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_NetworkPackage) PhysicalName() *string {
	var returns *string
	_jsii_.Get(
		j,
		"physicalName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_NetworkPackage) Props() *NetworkPackageProps {
	var returns *NetworkPackageProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_NetworkPackage) Ref() *string {
	var returns *string
	_jsii_.Get(
		j,
		"ref",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_NetworkPackage) Resource() alicloudroscdkcore.RosResource {
	var returns alicloudroscdkcore.RosResource
	_jsii_.Get(
		j,
		"resource",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_NetworkPackage) Scope() alicloudroscdkcore.Construct {
	var returns alicloudroscdkcore.Construct
	_jsii_.Get(
		j,
		"scope",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_NetworkPackage) Stack() alicloudroscdkcore.Stack {
	var returns alicloudroscdkcore.Stack
	_jsii_.Get(
		j,
		"stack",
		&returns,
	)
	return returns
}


// Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
func NewNetworkPackage(scope alicloudroscdkcore.Construct, id *string, props *NetworkPackageProps, enableResourcePropertyConstraint *bool) NetworkPackage {
	_init_.Initialize()

	if err := validateNewNetworkPackageParameters(scope, id, props); err != nil {
		panic(err)
	}
	j := jsiiProxy_NetworkPackage{}

	_jsii_.Create(
		"@alicloud/ros-cdk-ecd.NetworkPackage",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		&j,
	)

	return &j
}

// Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
func NewNetworkPackage_Override(n NetworkPackage, scope alicloudroscdkcore.Construct, id *string, props *NetworkPackageProps, enableResourcePropertyConstraint *bool) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-ecd.NetworkPackage",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		n,
	)
}

func (j *jsiiProxy_NetworkPackage)SetEnableResourcePropertyConstraint(val *bool) {
	if err := j.validateSetEnableResourcePropertyConstraintParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableResourcePropertyConstraint",
		val,
	)
}

func (j *jsiiProxy_NetworkPackage)SetId(val *string) {
	if err := j.validateSetIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"id",
		val,
	)
}

func (j *jsiiProxy_NetworkPackage)SetResource(val alicloudroscdkcore.RosResource) {
	_jsii_.Set(
		j,
		"resource",
		val,
	)
}

func (j *jsiiProxy_NetworkPackage)SetScope(val alicloudroscdkcore.Construct) {
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
func NetworkPackage_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateNetworkPackage_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-ecd.NetworkPackage",
		"isConstruct",
		[]interface{}{x},
		&returns,
	)

	return returns
}

func (n *jsiiProxy_NetworkPackage) AddCondition(condition alicloudroscdkcore.RosCondition) {
	if err := n.validateAddConditionParameters(condition); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		n,
		"addCondition",
		[]interface{}{condition},
	)
}

func (n *jsiiProxy_NetworkPackage) AddCount(count interface{}) {
	if err := n.validateAddCountParameters(count); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		n,
		"addCount",
		[]interface{}{count},
	)
}

func (n *jsiiProxy_NetworkPackage) AddDependency(resource alicloudroscdkcore.Resource) {
	if err := n.validateAddDependencyParameters(resource); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		n,
		"addDependency",
		[]interface{}{resource},
	)
}

func (n *jsiiProxy_NetworkPackage) AddResourceDesc(desc *string) {
	if err := n.validateAddResourceDescParameters(desc); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		n,
		"addResourceDesc",
		[]interface{}{desc},
	)
}

func (n *jsiiProxy_NetworkPackage) ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy) {
	if err := n.validateApplyRemovalPolicyParameters(policy); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		n,
		"applyRemovalPolicy",
		[]interface{}{policy},
	)
}

func (n *jsiiProxy_NetworkPackage) FetchCondition() alicloudroscdkcore.RosCondition {
	var returns alicloudroscdkcore.RosCondition

	_jsii_.Invoke(
		n,
		"fetchCondition",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (n *jsiiProxy_NetworkPackage) FetchDependency() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		n,
		"fetchDependency",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (n *jsiiProxy_NetworkPackage) FetchResourceDesc() *string {
	var returns *string

	_jsii_.Invoke(
		n,
		"fetchResourceDesc",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (n *jsiiProxy_NetworkPackage) GeneratePhysicalName() *string {
	var returns *string

	_jsii_.Invoke(
		n,
		"generatePhysicalName",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (n *jsiiProxy_NetworkPackage) GetAtt(name *string) alicloudroscdkcore.IResolvable {
	if err := n.validateGetAttParameters(name); err != nil {
		panic(err)
	}
	var returns alicloudroscdkcore.IResolvable

	_jsii_.Invoke(
		n,
		"getAtt",
		[]interface{}{name},
		&returns,
	)

	return returns
}

func (n *jsiiProxy_NetworkPackage) OnPrepare() {
	_jsii_.InvokeVoid(
		n,
		"onPrepare",
		nil, // no parameters
	)
}

func (n *jsiiProxy_NetworkPackage) OnSynthesize(session constructs.ISynthesisSession) {
	if err := n.validateOnSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		n,
		"onSynthesize",
		[]interface{}{session},
	)
}

func (n *jsiiProxy_NetworkPackage) OnValidate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		n,
		"onValidate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (n *jsiiProxy_NetworkPackage) Prepare() {
	_jsii_.InvokeVoid(
		n,
		"prepare",
		nil, // no parameters
	)
}

func (n *jsiiProxy_NetworkPackage) SetMetadata(key *string, value interface{}) {
	if err := n.validateSetMetadataParameters(key, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		n,
		"setMetadata",
		[]interface{}{key, value},
	)
}

func (n *jsiiProxy_NetworkPackage) Synthesize(session alicloudroscdkcore.ISynthesisSession) {
	if err := n.validateSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		n,
		"synthesize",
		[]interface{}{session},
	)
}

func (n *jsiiProxy_NetworkPackage) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		n,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (n *jsiiProxy_NetworkPackage) Validate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		n,
		"validate",
		nil, // no parameters
		&returns,
	)

	return returns
}

