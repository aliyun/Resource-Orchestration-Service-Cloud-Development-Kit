package alicloudroscdkcore

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/aws/constructs-go/constructs/v3"
)

type NestedStack interface {
	Stack
	// The ALIYUN account into which this stack will be deployed.
	//
	// This value is resolved according to the following rules:
	//
	// 1. The value provided to `env.account` when the stack is defined. This can
	//     either be a concrete account or the `ALIYUN.ACCOUNT_ID` token.
	// 2. `ALIYUN.ACCOUNT_ID`, which represents the ROS intrinsic reference
	//     `{ "Ref": "ALIYUN::AccountId" }` encoded as a string token.
	//
	// Preferably, you should use the return value as an opaque string and not
	// attempt to parse it to implement your logic. If you do, you must first
	// check that it is a concrete value an not an unresolved token. If this
	// value is an unresolved token (`Token.isUnresolved(stack.account)` returns
	// `true`), this implies that the user wishes that this stack will synthesize
	// into a **account-agnostic template**. In this case, your code should either
	// fail (throw an error, emit a synth error using `Annotations.of(construct).addError()`) or
	// implement some other region-agnostic behavior.
	Account() *string
	// The ID of the cloud assembly artifact for this stack.
	ArtifactId() *string
	// Indicates whether the stack requires bundling or not.
	BundlingRequired() *bool
	// Return the stacks this stack depends on.
	Dependencies() *[]Stack
	EnableResourcePropertyConstraint() *bool
	// Indicates if this is a nested stack, in which case `parentStack` will include a reference to it's parent.
	Nested() *bool
	// If this is a nested stack, returns it's parent stack.
	NestedStackParent() Stack
	// If this is a nested stack, this represents its `ALIYUN::ROS::Stack` resource.
	//
	// `undefined` for top-level (non-nested) stacks.
	// Experimental.
	NestedStackResource() RosResource
	// The construct tree node associated with this construct.
	Node() ConstructNode
	// Returns the parent of a nested stack.
	// Deprecated: use `nestedStackParent`.
	ParentStack() Stack
	// The ALIYUN region into which this stack will be deployed (e.g. `cn-beijing`).
	//
	// This value is resolved according to the following rules:
	//
	// 1. The value provided to `env.region` when the stack is defined. This can
	//     either be a concrete region or the `ALIYUN.REGION` token.
	// 2. `ALIYUN.REGION`, which is represents the ROS intrinsic reference
	//     `{ "Ref": "ALIYUN::Region" }` encoded as a string token.
	//
	// Preferably, you should use the return value as an opaque string and not
	// attempt to parse it to implement your logic. If you do, you must first
	// check that it is a concrete value an not an unresolved token. If this
	// value is an unresolved token (`Token.isUnresolved(stack.region)` returns
	// `true`), this implies that the user wishes that this stack will synthesize
	// into a **region-agnostic template**. In this case, your code should either
	// fail (throw an error, emit a synth error using `Annotations.of(construct).addError()`) or
	// implement some other region-agnostic behavior.
	Region() *string
	Roles() *RamRoles
	SetRoles(val *RamRoles)
	// The ID of the stack.
	StackId() *string
	// The concrete ROS physical stack name.
	//
	// This is either the name defined explicitly in the `stackName` prop or
	// allocated based on the stack's location in the construct tree. Stacks that
	// are directly defined under the app use their construct `id` as their stack
	// name. Stacks that are defined deeper within the tree will use a hashed naming
	// scheme based on the construct path to ensure uniqueness.
	StackName() *string
	// Synthesis method for this stack.
	// Experimental.
	Synthesizer() IStackSynthesizer
	// Tags to be applied to the stack.
	Tags() TagManager
	// The name of the ROS template file emitted to the output directory during synthesis.
	//
	// Example:
	//   MyStack.template.json
	//
	TemplateFile() *string
	// Options for ROS template (like version, description).
	TemplateOptions() ITemplateOptions
	// Add a dependency between this stack and another stack.
	//
	// This can be used to define dependencies between any two stacks within an
	// app, and also supports nested stacks.
	AddDependency(target Stack, reason *string)
	// Returns the naming scheme used to allocate logical IDs.
	//
	// By default, uses
	// the `HashedAddressingScheme` but this method can be overridden to customize
	// this behavior.
	//
	// In order to make sure logical IDs are unique and stable, we hash the resource
	// construct tree path (i.e. toplevel/secondlevel/.../myresource) and add it as
	// a suffix to the path components joined without a separator (ROS
	// IDs only allow alphanumeric characters).
	//
	// The result will be:
	//
	//    <path.join('')><md5(path.join('/')>
	//      "human"      "hash"
	//
	// If the "human" part of the ID exceeds 240 characters, we simply trim it so
	// the total ID doesn't exceed 255 character limit.
	//
	// We only take 8 characters from the md5 hash (0.000005 chance of collision).
	//
	// Special cases:
	//
	// - If the path only contains a single component (i.e. it's a top-level
	//    resource), we won't add the hash to it. The hash is not needed for
	//    disamiguation and also, it allows for a more straightforward migration an
	//    existing ROS template to a CDK stack without logical ID changes
	//    (or renames).
	// - For aesthetic reasons, if the last components of the path are the same
	//    (i.e. `L1/L2/Pipeline/Pipeline`), they will be de-duplicated to make the
	//    resulting human portion of the ID more pleasing: `L1L2Pipeline<HASH>`
	//    instead of `L1L2PipelinePipeline<HASH>`
	// - If a component is named "Default" it will be omitted from the path. This
	//    allows refactoring higher level abstractions around constructs without affecting
	//    the IDs of already deployed resources.
	// - If a component is named "Resource" it will be omitted from the user-visible
	//    path, but included in the hash. This reduces visual noise in the human readable
	//    part of the identifier.
	AllocateLogicalId(rosElement RosElement) *string
	GetAtt(attributeName *string) *string
	// Allocates a stack-unique logical identity for a specific resource.
	//
	// This method is called when a `RosElement` is created and used to render the
	// initial logical identity of resources. Logical ID renames are applied at
	// this stage.
	//
	// This method uses the protected method `allocateLogicalId` to render the
	// logical ID for an element. To modify the naming scheme, extend the `Stack`
	// class and override this method.
	GetLogicalId(element RosElement) *string
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
	// Deprecated.
	//
	// Returns: reference itself without any change.
	// Deprecated: cross reference handling has been moved to `App.prepare()`.
	PrepareCrossReference(_sourceStack Stack, reference Reference) IResolvable
	// Rename a generated logical identities.
	//
	// To modify the naming scheme strategy, extend the `Stack` class and
	// override the `allocateLogicalId` method.
	RenameLogicalId(oldId *string, newId *string)
	// Resolve a tokenized value in the context of the current stack.
	Resolve(obj interface{}) interface{}
	SetParameter(name *string, value interface{})
	// Allows this construct to emit artifacts into the cloud assembly during synthesis.
	//
	// This method is usually implemented by framework-level constructs such as `Stack` and `Asset`
	// as they participate in synthesizing the cloud assembly.
	Synthesize(session ISynthesisSession)
	// Convert an object, potentially containing tokens, to a JSON string.
	ToJsonString(obj interface{}, space *float64) *string
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

// The jsii proxy struct for NestedStack
type jsiiProxy_NestedStack struct {
	jsiiProxy_Stack
}

func (j *jsiiProxy_NestedStack) Account() *string {
	var returns *string
	_jsii_.Get(
		j,
		"account",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_NestedStack) ArtifactId() *string {
	var returns *string
	_jsii_.Get(
		j,
		"artifactId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_NestedStack) BundlingRequired() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"bundlingRequired",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_NestedStack) Dependencies() *[]Stack {
	var returns *[]Stack
	_jsii_.Get(
		j,
		"dependencies",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_NestedStack) EnableResourcePropertyConstraint() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"enableResourcePropertyConstraint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_NestedStack) Nested() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"nested",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_NestedStack) NestedStackParent() Stack {
	var returns Stack
	_jsii_.Get(
		j,
		"nestedStackParent",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_NestedStack) NestedStackResource() RosResource {
	var returns RosResource
	_jsii_.Get(
		j,
		"nestedStackResource",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_NestedStack) Node() ConstructNode {
	var returns ConstructNode
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_NestedStack) ParentStack() Stack {
	var returns Stack
	_jsii_.Get(
		j,
		"parentStack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_NestedStack) Region() *string {
	var returns *string
	_jsii_.Get(
		j,
		"region",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_NestedStack) Roles() *RamRoles {
	var returns *RamRoles
	_jsii_.Get(
		j,
		"roles",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_NestedStack) StackId() *string {
	var returns *string
	_jsii_.Get(
		j,
		"stackId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_NestedStack) StackName() *string {
	var returns *string
	_jsii_.Get(
		j,
		"stackName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_NestedStack) Synthesizer() IStackSynthesizer {
	var returns IStackSynthesizer
	_jsii_.Get(
		j,
		"synthesizer",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_NestedStack) Tags() TagManager {
	var returns TagManager
	_jsii_.Get(
		j,
		"tags",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_NestedStack) TemplateFile() *string {
	var returns *string
	_jsii_.Get(
		j,
		"templateFile",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_NestedStack) TemplateOptions() ITemplateOptions {
	var returns ITemplateOptions
	_jsii_.Get(
		j,
		"templateOptions",
		&returns,
	)
	return returns
}


func NewNestedStack(scope Construct, id *string, props *NestedStackProps) NestedStack {
	_init_.Initialize()

	if err := validateNewNestedStackParameters(scope, id, props); err != nil {
		panic(err)
	}
	j := jsiiProxy_NestedStack{}

	_jsii_.Create(
		"@alicloud/ros-cdk-core.NestedStack",
		[]interface{}{scope, id, props},
		&j,
	)

	return &j
}

func NewNestedStack_Override(n NestedStack, scope Construct, id *string, props *NestedStackProps) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-core.NestedStack",
		[]interface{}{scope, id, props},
		n,
	)
}

func (j *jsiiProxy_NestedStack)SetRoles(val *RamRoles) {
	if err := j.validateSetRolesParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"roles",
		val,
	)
}

// Return whether the given object is a Construct.
func NestedStack_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateNestedStack_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-core.NestedStack",
		"isConstruct",
		[]interface{}{x},
		&returns,
	)

	return returns
}

func NestedStack_IsNestedStack(x interface{}) *bool {
	_init_.Initialize()

	if err := validateNestedStack_IsNestedStackParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-core.NestedStack",
		"isNestedStack",
		[]interface{}{x},
		&returns,
	)

	return returns
}

// Return whether the given object is a Stack.
//
// We do attribute detection since we can't reliably use 'instanceof'.
func NestedStack_IsStack(x interface{}) *bool {
	_init_.Initialize()

	if err := validateNestedStack_IsStackParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-core.NestedStack",
		"isStack",
		[]interface{}{x},
		&returns,
	)

	return returns
}

// Looks up the first stack scope in which `construct` is defined.
//
// Fails if there is no stack up the tree.
func NestedStack_Of(construct IConstruct) Stack {
	_init_.Initialize()

	if err := validateNestedStack_OfParameters(construct); err != nil {
		panic(err)
	}
	var returns Stack

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-core.NestedStack",
		"of",
		[]interface{}{construct},
		&returns,
	)

	return returns
}

func (n *jsiiProxy_NestedStack) AddDependency(target Stack, reason *string) {
	if err := n.validateAddDependencyParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		n,
		"addDependency",
		[]interface{}{target, reason},
	)
}

func (n *jsiiProxy_NestedStack) AllocateLogicalId(rosElement RosElement) *string {
	if err := n.validateAllocateLogicalIdParameters(rosElement); err != nil {
		panic(err)
	}
	var returns *string

	_jsii_.Invoke(
		n,
		"allocateLogicalId",
		[]interface{}{rosElement},
		&returns,
	)

	return returns
}

func (n *jsiiProxy_NestedStack) GetAtt(attributeName *string) *string {
	if err := n.validateGetAttParameters(attributeName); err != nil {
		panic(err)
	}
	var returns *string

	_jsii_.Invoke(
		n,
		"getAtt",
		[]interface{}{attributeName},
		&returns,
	)

	return returns
}

func (n *jsiiProxy_NestedStack) GetLogicalId(element RosElement) *string {
	if err := n.validateGetLogicalIdParameters(element); err != nil {
		panic(err)
	}
	var returns *string

	_jsii_.Invoke(
		n,
		"getLogicalId",
		[]interface{}{element},
		&returns,
	)

	return returns
}

func (n *jsiiProxy_NestedStack) OnPrepare() {
	_jsii_.InvokeVoid(
		n,
		"onPrepare",
		nil, // no parameters
	)
}

func (n *jsiiProxy_NestedStack) OnSynthesize(session constructs.ISynthesisSession) {
	if err := n.validateOnSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		n,
		"onSynthesize",
		[]interface{}{session},
	)
}

func (n *jsiiProxy_NestedStack) OnValidate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		n,
		"onValidate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (n *jsiiProxy_NestedStack) Prepare() {
	_jsii_.InvokeVoid(
		n,
		"prepare",
		nil, // no parameters
	)
}

func (n *jsiiProxy_NestedStack) PrepareCrossReference(_sourceStack Stack, reference Reference) IResolvable {
	if err := n.validatePrepareCrossReferenceParameters(_sourceStack, reference); err != nil {
		panic(err)
	}
	var returns IResolvable

	_jsii_.Invoke(
		n,
		"prepareCrossReference",
		[]interface{}{_sourceStack, reference},
		&returns,
	)

	return returns
}

func (n *jsiiProxy_NestedStack) RenameLogicalId(oldId *string, newId *string) {
	if err := n.validateRenameLogicalIdParameters(oldId, newId); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		n,
		"renameLogicalId",
		[]interface{}{oldId, newId},
	)
}

func (n *jsiiProxy_NestedStack) Resolve(obj interface{}) interface{} {
	if err := n.validateResolveParameters(obj); err != nil {
		panic(err)
	}
	var returns interface{}

	_jsii_.Invoke(
		n,
		"resolve",
		[]interface{}{obj},
		&returns,
	)

	return returns
}

func (n *jsiiProxy_NestedStack) SetParameter(name *string, value interface{}) {
	if err := n.validateSetParameterParameters(name, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		n,
		"setParameter",
		[]interface{}{name, value},
	)
}

func (n *jsiiProxy_NestedStack) Synthesize(session ISynthesisSession) {
	if err := n.validateSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		n,
		"synthesize",
		[]interface{}{session},
	)
}

func (n *jsiiProxy_NestedStack) ToJsonString(obj interface{}, space *float64) *string {
	if err := n.validateToJsonStringParameters(obj); err != nil {
		panic(err)
	}
	var returns *string

	_jsii_.Invoke(
		n,
		"toJsonString",
		[]interface{}{obj, space},
		&returns,
	)

	return returns
}

func (n *jsiiProxy_NestedStack) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		n,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (n *jsiiProxy_NestedStack) Validate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		n,
		"validate",
		nil, // no parameters
		&returns,
	)

	return returns
}

