package alicloudroscdkcore

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/aws/constructs-go/constructs/v3"
)

type RosInfo interface {
	RosElement
	// Returns: the stack trace of the point where this Resource was created from, sourced
	// from the +metadata+ entry typed +aliyun:ros:logicalId+, and with the bottom-most
	// node +internal+ entries filtered.
	CreationStack() *[]*string
	// The logical ID for this stack element.
	//
	// The logical ID of the element
	// is calculated from the path of the resource node in the construct tree.
	//
	// To override this value, use `overrideLogicalId(newLogicalId)`.
	//
	// Returns: the logical ID as a stringified token. This value will only get
	// resolved during synthesis.
	LogicalId() *string
	// The construct tree node associated with this construct.
	Node() ConstructNode
	// The stack in which this element is defined.
	//
	// RosElements must be defined within a stack scope (directly or indirectly).
	Stack() Stack
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
	// Overrides the auto-generated logical ID with a specific ID.
	OverrideLogicalId(newLogicalId *string)
	// Perform final modifications before synthesis.
	//
	// This method can be implemented by derived constructs in order to perform
	// final changes before synthesis. prepare() will be called after child
	// constructs have been prepared.
	//
	// This is an advanced framework feature. Only use this if you
	// understand the implications.
	Prepare()
	// Allows this construct to emit artifacts into the cloud assembly during synthesis.
	//
	// This method is usually implemented by framework-level constructs such as `Stack` and `Asset`
	// as they participate in synthesizing the cloud assembly.
	Synthesize(session ISynthesisSession)
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

// The jsii proxy struct for RosInfo
type jsiiProxy_RosInfo struct {
	jsiiProxy_RosElement
}

func (j *jsiiProxy_RosInfo) CreationStack() *[]*string {
	var returns *[]*string
	_jsii_.Get(
		j,
		"creationStack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInfo) LogicalId() *string {
	var returns *string
	_jsii_.Get(
		j,
		"logicalId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInfo) Node() ConstructNode {
	var returns ConstructNode
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInfo) Stack() Stack {
	var returns Stack
	_jsii_.Get(
		j,
		"stack",
		&returns,
	)
	return returns
}


// Creates properties for this stack.
func NewRosInfo(scope Construct, id *string, info interface{}) RosInfo {
	_init_.Initialize()

	if err := validateNewRosInfoParameters(scope, id, info); err != nil {
		panic(err)
	}
	j := jsiiProxy_RosInfo{}

	_jsii_.Create(
		"@alicloud/ros-cdk-core.RosInfo",
		[]interface{}{scope, id, info},
		&j,
	)

	return &j
}

// Creates properties for this stack.
func NewRosInfo_Override(r RosInfo, scope Construct, id *string, info interface{}) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-core.RosInfo",
		[]interface{}{scope, id, info},
		r,
	)
}

// Return whether the given object is a Construct.
func RosInfo_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosInfo_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-core.RosInfo",
		"isConstruct",
		[]interface{}{x},
		&returns,
	)

	return returns
}

// Returns `true` if a construct is a stack element (i.e. part of the synthesized template).
//
// Uses duck-typing instead of `instanceof` to allow stack elements from different
// versions of this library to be included in the same stack.
//
// Returns: The construct as a stack element or undefined if it is not a stack element.
func RosInfo_IsRosElement(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosInfo_IsRosElementParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-core.RosInfo",
		"isRosElement",
		[]interface{}{x},
		&returns,
	)

	return returns
}

func RosInfo_Description() *string {
	_init_.Initialize()
	var returns *string
	_jsii_.StaticGet(
		"@alicloud/ros-cdk-core.RosInfo",
		"description",
		&returns,
	)
	return returns
}

func RosInfo_SetDescription(val *string) {
	_init_.Initialize()
	if err := validateRosInfo_SetDescriptionParameters(val); err != nil {
		panic(err)
	}
	_jsii_.StaticSet(
		"@alicloud/ros-cdk-core.RosInfo",
		"description",
		val,
	)
}

func RosInfo_FormatVersion() *string {
	_init_.Initialize()
	var returns *string
	_jsii_.StaticGet(
		"@alicloud/ros-cdk-core.RosInfo",
		"formatVersion",
		&returns,
	)
	return returns
}

func RosInfo_SetFormatVersion(val *string) {
	_init_.Initialize()
	if err := validateRosInfo_SetFormatVersionParameters(val); err != nil {
		panic(err)
	}
	_jsii_.StaticSet(
		"@alicloud/ros-cdk-core.RosInfo",
		"formatVersion",
		val,
	)
}

func RosInfo_Metadata() *string {
	_init_.Initialize()
	var returns *string
	_jsii_.StaticGet(
		"@alicloud/ros-cdk-core.RosInfo",
		"metadata",
		&returns,
	)
	return returns
}

func RosInfo_SetMetadata(val *string) {
	_init_.Initialize()
	if err := validateRosInfo_SetMetadataParameters(val); err != nil {
		panic(err)
	}
	_jsii_.StaticSet(
		"@alicloud/ros-cdk-core.RosInfo",
		"metadata",
		val,
	)
}

func RosInfo_V20150901() *string {
	_init_.Initialize()
	var returns *string
	_jsii_.StaticGet(
		"@alicloud/ros-cdk-core.RosInfo",
		"v20150901",
		&returns,
	)
	return returns
}

func RosInfo_SetV20150901(val *string) {
	_init_.Initialize()
	if err := validateRosInfo_SetV20150901Parameters(val); err != nil {
		panic(err)
	}
	_jsii_.StaticSet(
		"@alicloud/ros-cdk-core.RosInfo",
		"v20150901",
		val,
	)
}

func (r *jsiiProxy_RosInfo) OnPrepare() {
	_jsii_.InvokeVoid(
		r,
		"onPrepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosInfo) OnSynthesize(session constructs.ISynthesisSession) {
	if err := r.validateOnSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"onSynthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosInfo) OnValidate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"onValidate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosInfo) OverrideLogicalId(newLogicalId *string) {
	if err := r.validateOverrideLogicalIdParameters(newLogicalId); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"overrideLogicalId",
		[]interface{}{newLogicalId},
	)
}

func (r *jsiiProxy_RosInfo) Prepare() {
	_jsii_.InvokeVoid(
		r,
		"prepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosInfo) Synthesize(session ISynthesisSession) {
	if err := r.validateSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"synthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosInfo) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		r,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosInfo) Validate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"validate",
		nil, // no parameters
		&returns,
	)

	return returns
}

