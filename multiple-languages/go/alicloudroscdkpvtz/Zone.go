package alicloudroscdkpvtz

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkpvtz/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkpvtz/internal"
	"github.com/aws/constructs-go/constructs/v3"
)

// This class encapsulates and extends the ROS resource type `ALIYUN::PVTZ::Zone`.
type Zone interface {
	alicloudroscdkcore.Resource
	IZone
	// Attribute Arn: The Alibaba Cloud Resource Name (ARN).
	AttrArn() interface{}
	// Attribute ZoneId: Zone ID.
	AttrZoneId() interface{}
	// Attribute ZoneName: Zone name.
	AttrZoneName() interface{}
	// Attribute ZoneTag: Zone label.
	AttrZoneTag() interface{}
	// Attribute ZoneType: Zone type.
	AttrZoneType() interface{}
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
	Props() *ZoneProps
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

// The jsii proxy struct for Zone
type jsiiProxy_Zone struct {
	internal.Type__alicloudroscdkcoreResource
	jsiiProxy_IZone
}

func (j *jsiiProxy_Zone) AttrArn() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrArn",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Zone) AttrZoneId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrZoneId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Zone) AttrZoneName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrZoneName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Zone) AttrZoneTag() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrZoneTag",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Zone) AttrZoneType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrZoneType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Zone) EnableResourcePropertyConstraint() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"enableResourcePropertyConstraint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Zone) Env() alicloudroscdkcore.IResourceEnvironment {
	var returns alicloudroscdkcore.IResourceEnvironment
	_jsii_.Get(
		j,
		"env",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Zone) Id() *string {
	var returns *string
	_jsii_.Get(
		j,
		"id",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Zone) Node() alicloudroscdkcore.ConstructNode {
	var returns alicloudroscdkcore.ConstructNode
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Zone) PhysicalName() *string {
	var returns *string
	_jsii_.Get(
		j,
		"physicalName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Zone) Props() *ZoneProps {
	var returns *ZoneProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Zone) Ref() *string {
	var returns *string
	_jsii_.Get(
		j,
		"ref",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Zone) Resource() alicloudroscdkcore.RosResource {
	var returns alicloudroscdkcore.RosResource
	_jsii_.Get(
		j,
		"resource",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Zone) Scope() alicloudroscdkcore.Construct {
	var returns alicloudroscdkcore.Construct
	_jsii_.Get(
		j,
		"scope",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Zone) Stack() alicloudroscdkcore.Stack {
	var returns alicloudroscdkcore.Stack
	_jsii_.Get(
		j,
		"stack",
		&returns,
	)
	return returns
}


// Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
func NewZone(scope alicloudroscdkcore.Construct, id *string, props *ZoneProps, enableResourcePropertyConstraint *bool) Zone {
	_init_.Initialize()

	if err := validateNewZoneParameters(scope, id, props); err != nil {
		panic(err)
	}
	j := jsiiProxy_Zone{}

	_jsii_.Create(
		"@alicloud/ros-cdk-pvtz.Zone",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		&j,
	)

	return &j
}

// Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
func NewZone_Override(z Zone, scope alicloudroscdkcore.Construct, id *string, props *ZoneProps, enableResourcePropertyConstraint *bool) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-pvtz.Zone",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		z,
	)
}

func (j *jsiiProxy_Zone)SetEnableResourcePropertyConstraint(val *bool) {
	if err := j.validateSetEnableResourcePropertyConstraintParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableResourcePropertyConstraint",
		val,
	)
}

func (j *jsiiProxy_Zone)SetId(val *string) {
	if err := j.validateSetIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"id",
		val,
	)
}

func (j *jsiiProxy_Zone)SetResource(val alicloudroscdkcore.RosResource) {
	_jsii_.Set(
		j,
		"resource",
		val,
	)
}

func (j *jsiiProxy_Zone)SetScope(val alicloudroscdkcore.Construct) {
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
func Zone_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateZone_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-pvtz.Zone",
		"isConstruct",
		[]interface{}{x},
		&returns,
	)

	return returns
}

func (z *jsiiProxy_Zone) AddCondition(condition alicloudroscdkcore.RosCondition) {
	if err := z.validateAddConditionParameters(condition); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		z,
		"addCondition",
		[]interface{}{condition},
	)
}

func (z *jsiiProxy_Zone) AddCount(count interface{}) {
	if err := z.validateAddCountParameters(count); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		z,
		"addCount",
		[]interface{}{count},
	)
}

func (z *jsiiProxy_Zone) AddDependency(resource alicloudroscdkcore.Resource) {
	if err := z.validateAddDependencyParameters(resource); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		z,
		"addDependency",
		[]interface{}{resource},
	)
}

func (z *jsiiProxy_Zone) AddResourceDesc(desc *string) {
	if err := z.validateAddResourceDescParameters(desc); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		z,
		"addResourceDesc",
		[]interface{}{desc},
	)
}

func (z *jsiiProxy_Zone) ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy) {
	if err := z.validateApplyRemovalPolicyParameters(policy); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		z,
		"applyRemovalPolicy",
		[]interface{}{policy},
	)
}

func (z *jsiiProxy_Zone) FetchCondition() alicloudroscdkcore.RosCondition {
	var returns alicloudroscdkcore.RosCondition

	_jsii_.Invoke(
		z,
		"fetchCondition",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (z *jsiiProxy_Zone) FetchDependency() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		z,
		"fetchDependency",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (z *jsiiProxy_Zone) FetchResourceDesc() *string {
	var returns *string

	_jsii_.Invoke(
		z,
		"fetchResourceDesc",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (z *jsiiProxy_Zone) GeneratePhysicalName() *string {
	var returns *string

	_jsii_.Invoke(
		z,
		"generatePhysicalName",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (z *jsiiProxy_Zone) GetAtt(name *string) alicloudroscdkcore.IResolvable {
	if err := z.validateGetAttParameters(name); err != nil {
		panic(err)
	}
	var returns alicloudroscdkcore.IResolvable

	_jsii_.Invoke(
		z,
		"getAtt",
		[]interface{}{name},
		&returns,
	)

	return returns
}

func (z *jsiiProxy_Zone) OnPrepare() {
	_jsii_.InvokeVoid(
		z,
		"onPrepare",
		nil, // no parameters
	)
}

func (z *jsiiProxy_Zone) OnSynthesize(session constructs.ISynthesisSession) {
	if err := z.validateOnSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		z,
		"onSynthesize",
		[]interface{}{session},
	)
}

func (z *jsiiProxy_Zone) OnValidate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		z,
		"onValidate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (z *jsiiProxy_Zone) Prepare() {
	_jsii_.InvokeVoid(
		z,
		"prepare",
		nil, // no parameters
	)
}

func (z *jsiiProxy_Zone) SetMetadata(key *string, value interface{}) {
	if err := z.validateSetMetadataParameters(key, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		z,
		"setMetadata",
		[]interface{}{key, value},
	)
}

func (z *jsiiProxy_Zone) Synthesize(session alicloudroscdkcore.ISynthesisSession) {
	if err := z.validateSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		z,
		"synthesize",
		[]interface{}{session},
	)
}

func (z *jsiiProxy_Zone) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		z,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (z *jsiiProxy_Zone) Validate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		z,
		"validate",
		nil, // no parameters
		&returns,
	)

	return returns
}

