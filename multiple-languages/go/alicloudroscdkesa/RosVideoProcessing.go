package alicloudroscdkesa

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkesa/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkesa/internal"
	"github.com/aws/constructs-go/constructs/v3"
)

// This class is a base encapsulation around the ROS resource type `ALIYUN::ESA::VideoProcessing`.
type RosVideoProcessing interface {
	alicloudroscdkcore.RosResource
	AttrConfigId() alicloudroscdkcore.IResolvable
	AttrConfigType() alicloudroscdkcore.IResolvable
	AttrFlvSeekEnd() alicloudroscdkcore.IResolvable
	AttrFlvSeekStart() alicloudroscdkcore.IResolvable
	AttrFlvVideoSeekMode() alicloudroscdkcore.IResolvable
	AttrMp4SeekEnd() alicloudroscdkcore.IResolvable
	AttrMp4SeekStart() alicloudroscdkcore.IResolvable
	AttrRule() alicloudroscdkcore.IResolvable
	AttrRuleEnable() alicloudroscdkcore.IResolvable
	AttrRuleName() alicloudroscdkcore.IResolvable
	AttrSequence() alicloudroscdkcore.IResolvable
	AttrSiteVersion() alicloudroscdkcore.IResolvable
	AttrVideoSeekEnable() alicloudroscdkcore.IResolvable
	// Returns: the stack trace of the point where this Resource was created from, sourced
	// from the +metadata+ entry typed +aliyun:ros:logicalId+, and with the bottom-most
	// node +internal+ entries filtered.
	CreationStack() *[]*string
	EnableResourcePropertyConstraint() *bool
	SetEnableResourcePropertyConstraint(val *bool)
	FlvSeekEnd() interface{}
	SetFlvSeekEnd(val interface{})
	FlvSeekStart() interface{}
	SetFlvSeekStart(val interface{})
	FlvVideoSeekMode() interface{}
	SetFlvVideoSeekMode(val interface{})
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
	Mp4SeekEnd() interface{}
	SetMp4SeekEnd(val interface{})
	Mp4SeekStart() interface{}
	SetMp4SeekStart(val interface{})
	// The construct tree node associated with this construct.
	Node() alicloudroscdkcore.ConstructNode
	// Return a string that will be resolved to a RosTemplate `{ Ref }` for this element.
	//
	// If, by any chance, the intrinsic reference of a resource is not a string, you could
	// coerce it to an IResolvable through `Lazy.any({ produce: resource.ref })`.
	Ref() *string
	// Options for this resource, such as condition, update policy etc.
	RosOptions() alicloudroscdkcore.IRosResourceOptions
	RosProperties() *map[string]interface{}
	// ROS resource type.
	RosResourceType() *string
	Rule() interface{}
	SetRule(val interface{})
	RuleEnable() interface{}
	SetRuleEnable(val interface{})
	RuleName() interface{}
	SetRuleName(val interface{})
	Sequence() interface{}
	SetSequence(val interface{})
	SiteId() interface{}
	SetSiteId(val interface{})
	SiteVersion() interface{}
	SetSiteVersion(val interface{})
	// The stack in which this element is defined.
	//
	// RosElements must be defined within a stack scope (directly or indirectly).
	Stack() alicloudroscdkcore.Stack
	// Return properties modified after initiation.
	//
	// Resources that expose mutable properties should override this function to
	// collect and return the properties object for this resource.
	UpdatedProperites() *map[string]interface{}
	VideoSeekEnable() interface{}
	SetVideoSeekEnable(val interface{})
	AddCondition(con alicloudroscdkcore.RosCondition)
	AddCount(count interface{})
	// Syntactic sugar for `addOverride(path, undefined)`.
	AddDeletionOverride(path *string)
	// Indicates that this resource depends on another resource and cannot be provisioned unless the other resource has been successfully provisioned.
	//
	// This can be used for resources across stacks (or nested stack) boundaries
	// and the dependency will automatically be transferred to the relevant scope.
	AddDependsOn(target alicloudroscdkcore.RosResource)
	AddDesc(desc *string)
	AddMetaData(key *string, value interface{})
	// Adds an override to the synthesized ROS resource.
	//
	// To add a
	// property override, either use `addPropertyOverride` or prefix `path` with
	// "Properties." (i.e. `Properties.TopicName`).
	//
	// If the override is nested, separate each nested level using a dot (.) in the path parameter.
	// If there is an array as part of the nesting, specify the index in the path.
	//
	// For example,
	// ```typescript
	// addOverride('Properties.GlobalSecondaryIndexes.0.Projection.NonKeyAttributes', ['myattribute'])
	// addOverride('Properties.GlobalSecondaryIndexes.1.ProjectionType', 'INCLUDE')
	// ```
	// would add the overrides
	// ```json
	// "Properties": {
	//    "GlobalSecondaryIndexes": [
	//      {
	//        "Projection": {
	//          "NonKeyAttributes": [ "myattribute" ]
	//          ...
	//        }
	//        ...
	//      },
	//      {
	//        "ProjectionType": "INCLUDE"
	//        ...
	//      },
	//    ]
	//    ...
	// }
	// ```.
	AddOverride(path *string, value interface{})
	// Adds an override that deletes the value of a property from the resource definition.
	AddPropertyDeletionOverride(propertyPath *string)
	// Adds an override to a resource property.
	//
	// Syntactic sugar for `addOverride("Properties.<...>", value)`.
	AddPropertyOverride(propertyPath *string, value interface{})
	AddRosDependency(target *string)
	// Sets the deletion policy of the resource based on the removal policy specified.
	ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy, options *alicloudroscdkcore.RemovalPolicyOptions)
	FetchCondition() alicloudroscdkcore.RosCondition
	FetchDesc() *string
	FetchRosDependency() *[]*string
	// Returns a token for an runtime attribute of this resource.
	//
	// Ideally, use generated attribute accessors (e.g. `resource.arn`), but this can be used for future compatibility
	// in case there is no generated attribute.
	GetAtt(attributeName *string) alicloudroscdkcore.Reference
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
	RenderProperties(props *map[string]interface{}) *map[string]interface{}
	// Allows this construct to emit artifacts into the cloud assembly during synthesis.
	//
	// This method is usually implemented by framework-level constructs such as `Stack` and `Asset`
	// as they participate in synthesizing the cloud assembly.
	Synthesize(session alicloudroscdkcore.ISynthesisSession)
	// Returns a string representation of this construct.
	//
	// Returns: a string representation of this resource.
	ToString() *string
	// Validate the current construct.
	//
	// This method can be implemented by derived constructs in order to perform
	// validation logic. It is called on all constructs before synthesis.
	//
	// Returns: An array of validation error messages, or an empty array if the construct is valid.
	Validate() *[]*string
	ValidateProperties(_properties interface{})
}

// The jsii proxy struct for RosVideoProcessing
type jsiiProxy_RosVideoProcessing struct {
	internal.Type__alicloudroscdkcoreRosResource
}

func (j *jsiiProxy_RosVideoProcessing) AttrConfigId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrConfigId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosVideoProcessing) AttrConfigType() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrConfigType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosVideoProcessing) AttrFlvSeekEnd() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrFlvSeekEnd",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosVideoProcessing) AttrFlvSeekStart() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrFlvSeekStart",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosVideoProcessing) AttrFlvVideoSeekMode() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrFlvVideoSeekMode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosVideoProcessing) AttrMp4SeekEnd() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrMp4SeekEnd",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosVideoProcessing) AttrMp4SeekStart() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrMp4SeekStart",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosVideoProcessing) AttrRule() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrRule",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosVideoProcessing) AttrRuleEnable() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrRuleEnable",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosVideoProcessing) AttrRuleName() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrRuleName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosVideoProcessing) AttrSequence() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrSequence",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosVideoProcessing) AttrSiteVersion() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrSiteVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosVideoProcessing) AttrVideoSeekEnable() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrVideoSeekEnable",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosVideoProcessing) CreationStack() *[]*string {
	var returns *[]*string
	_jsii_.Get(
		j,
		"creationStack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosVideoProcessing) EnableResourcePropertyConstraint() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"enableResourcePropertyConstraint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosVideoProcessing) FlvSeekEnd() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"flvSeekEnd",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosVideoProcessing) FlvSeekStart() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"flvSeekStart",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosVideoProcessing) FlvVideoSeekMode() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"flvVideoSeekMode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosVideoProcessing) LogicalId() *string {
	var returns *string
	_jsii_.Get(
		j,
		"logicalId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosVideoProcessing) Mp4SeekEnd() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"mp4SeekEnd",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosVideoProcessing) Mp4SeekStart() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"mp4SeekStart",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosVideoProcessing) Node() alicloudroscdkcore.ConstructNode {
	var returns alicloudroscdkcore.ConstructNode
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosVideoProcessing) Ref() *string {
	var returns *string
	_jsii_.Get(
		j,
		"ref",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosVideoProcessing) RosOptions() alicloudroscdkcore.IRosResourceOptions {
	var returns alicloudroscdkcore.IRosResourceOptions
	_jsii_.Get(
		j,
		"rosOptions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosVideoProcessing) RosProperties() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"rosProperties",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosVideoProcessing) RosResourceType() *string {
	var returns *string
	_jsii_.Get(
		j,
		"rosResourceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosVideoProcessing) Rule() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"rule",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosVideoProcessing) RuleEnable() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"ruleEnable",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosVideoProcessing) RuleName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"ruleName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosVideoProcessing) Sequence() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"sequence",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosVideoProcessing) SiteId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"siteId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosVideoProcessing) SiteVersion() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"siteVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosVideoProcessing) Stack() alicloudroscdkcore.Stack {
	var returns alicloudroscdkcore.Stack
	_jsii_.Get(
		j,
		"stack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosVideoProcessing) UpdatedProperites() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"updatedProperites",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosVideoProcessing) VideoSeekEnable() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"videoSeekEnable",
		&returns,
	)
	return returns
}


func NewRosVideoProcessing(scope alicloudroscdkcore.Construct, id *string, props *RosVideoProcessingProps, enableResourcePropertyConstraint *bool) RosVideoProcessing {
	_init_.Initialize()

	if err := validateNewRosVideoProcessingParameters(scope, id, props, enableResourcePropertyConstraint); err != nil {
		panic(err)
	}
	j := jsiiProxy_RosVideoProcessing{}

	_jsii_.Create(
		"@alicloud/ros-cdk-esa.RosVideoProcessing",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		&j,
	)

	return &j
}

func NewRosVideoProcessing_Override(r RosVideoProcessing, scope alicloudroscdkcore.Construct, id *string, props *RosVideoProcessingProps, enableResourcePropertyConstraint *bool) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-esa.RosVideoProcessing",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		r,
	)
}

func (j *jsiiProxy_RosVideoProcessing)SetEnableResourcePropertyConstraint(val *bool) {
	if err := j.validateSetEnableResourcePropertyConstraintParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableResourcePropertyConstraint",
		val,
	)
}

func (j *jsiiProxy_RosVideoProcessing)SetFlvSeekEnd(val interface{}) {
	if err := j.validateSetFlvSeekEndParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"flvSeekEnd",
		val,
	)
}

func (j *jsiiProxy_RosVideoProcessing)SetFlvSeekStart(val interface{}) {
	if err := j.validateSetFlvSeekStartParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"flvSeekStart",
		val,
	)
}

func (j *jsiiProxy_RosVideoProcessing)SetFlvVideoSeekMode(val interface{}) {
	if err := j.validateSetFlvVideoSeekModeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"flvVideoSeekMode",
		val,
	)
}

func (j *jsiiProxy_RosVideoProcessing)SetMp4SeekEnd(val interface{}) {
	if err := j.validateSetMp4SeekEndParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"mp4SeekEnd",
		val,
	)
}

func (j *jsiiProxy_RosVideoProcessing)SetMp4SeekStart(val interface{}) {
	if err := j.validateSetMp4SeekStartParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"mp4SeekStart",
		val,
	)
}

func (j *jsiiProxy_RosVideoProcessing)SetRule(val interface{}) {
	if err := j.validateSetRuleParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"rule",
		val,
	)
}

func (j *jsiiProxy_RosVideoProcessing)SetRuleEnable(val interface{}) {
	if err := j.validateSetRuleEnableParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"ruleEnable",
		val,
	)
}

func (j *jsiiProxy_RosVideoProcessing)SetRuleName(val interface{}) {
	if err := j.validateSetRuleNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"ruleName",
		val,
	)
}

func (j *jsiiProxy_RosVideoProcessing)SetSequence(val interface{}) {
	if err := j.validateSetSequenceParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"sequence",
		val,
	)
}

func (j *jsiiProxy_RosVideoProcessing)SetSiteId(val interface{}) {
	if err := j.validateSetSiteIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"siteId",
		val,
	)
}

func (j *jsiiProxy_RosVideoProcessing)SetSiteVersion(val interface{}) {
	if err := j.validateSetSiteVersionParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"siteVersion",
		val,
	)
}

func (j *jsiiProxy_RosVideoProcessing)SetVideoSeekEnable(val interface{}) {
	if err := j.validateSetVideoSeekEnableParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"videoSeekEnable",
		val,
	)
}

// Return whether the given object is a Construct.
func RosVideoProcessing_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosVideoProcessing_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-esa.RosVideoProcessing",
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
func RosVideoProcessing_IsRosElement(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosVideoProcessing_IsRosElementParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-esa.RosVideoProcessing",
		"isRosElement",
		[]interface{}{x},
		&returns,
	)

	return returns
}

// Check whether the given construct is a RosResource.
func RosVideoProcessing_IsRosResource(construct alicloudroscdkcore.IConstruct) *bool {
	_init_.Initialize()

	if err := validateRosVideoProcessing_IsRosResourceParameters(construct); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-esa.RosVideoProcessing",
		"isRosResource",
		[]interface{}{construct},
		&returns,
	)

	return returns
}

func RosVideoProcessing_ROS_RESOURCE_TYPE_NAME() *string {
	_init_.Initialize()
	var returns *string
	_jsii_.StaticGet(
		"@alicloud/ros-cdk-esa.RosVideoProcessing",
		"ROS_RESOURCE_TYPE_NAME",
		&returns,
	)
	return returns
}

func (r *jsiiProxy_RosVideoProcessing) AddCondition(con alicloudroscdkcore.RosCondition) {
	if err := r.validateAddConditionParameters(con); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCondition",
		[]interface{}{con},
	)
}

func (r *jsiiProxy_RosVideoProcessing) AddCount(count interface{}) {
	if err := r.validateAddCountParameters(count); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCount",
		[]interface{}{count},
	)
}

func (r *jsiiProxy_RosVideoProcessing) AddDeletionOverride(path *string) {
	if err := r.validateAddDeletionOverrideParameters(path); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDeletionOverride",
		[]interface{}{path},
	)
}

func (r *jsiiProxy_RosVideoProcessing) AddDependsOn(target alicloudroscdkcore.RosResource) {
	if err := r.validateAddDependsOnParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDependsOn",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosVideoProcessing) AddDesc(desc *string) {
	if err := r.validateAddDescParameters(desc); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDesc",
		[]interface{}{desc},
	)
}

func (r *jsiiProxy_RosVideoProcessing) AddMetaData(key *string, value interface{}) {
	if err := r.validateAddMetaDataParameters(key, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addMetaData",
		[]interface{}{key, value},
	)
}

func (r *jsiiProxy_RosVideoProcessing) AddOverride(path *string, value interface{}) {
	if err := r.validateAddOverrideParameters(path, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addOverride",
		[]interface{}{path, value},
	)
}

func (r *jsiiProxy_RosVideoProcessing) AddPropertyDeletionOverride(propertyPath *string) {
	if err := r.validateAddPropertyDeletionOverrideParameters(propertyPath); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyDeletionOverride",
		[]interface{}{propertyPath},
	)
}

func (r *jsiiProxy_RosVideoProcessing) AddPropertyOverride(propertyPath *string, value interface{}) {
	if err := r.validateAddPropertyOverrideParameters(propertyPath, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyOverride",
		[]interface{}{propertyPath, value},
	)
}

func (r *jsiiProxy_RosVideoProcessing) AddRosDependency(target *string) {
	if err := r.validateAddRosDependencyParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addRosDependency",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosVideoProcessing) ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy, options *alicloudroscdkcore.RemovalPolicyOptions) {
	if err := r.validateApplyRemovalPolicyParameters(options); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"applyRemovalPolicy",
		[]interface{}{policy, options},
	)
}

func (r *jsiiProxy_RosVideoProcessing) FetchCondition() alicloudroscdkcore.RosCondition {
	var returns alicloudroscdkcore.RosCondition

	_jsii_.Invoke(
		r,
		"fetchCondition",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosVideoProcessing) FetchDesc() *string {
	var returns *string

	_jsii_.Invoke(
		r,
		"fetchDesc",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosVideoProcessing) FetchRosDependency() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"fetchRosDependency",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosVideoProcessing) GetAtt(attributeName *string) alicloudroscdkcore.Reference {
	if err := r.validateGetAttParameters(attributeName); err != nil {
		panic(err)
	}
	var returns alicloudroscdkcore.Reference

	_jsii_.Invoke(
		r,
		"getAtt",
		[]interface{}{attributeName},
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosVideoProcessing) OnPrepare() {
	_jsii_.InvokeVoid(
		r,
		"onPrepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosVideoProcessing) OnSynthesize(session constructs.ISynthesisSession) {
	if err := r.validateOnSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"onSynthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosVideoProcessing) OnValidate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"onValidate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosVideoProcessing) OverrideLogicalId(newLogicalId *string) {
	if err := r.validateOverrideLogicalIdParameters(newLogicalId); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"overrideLogicalId",
		[]interface{}{newLogicalId},
	)
}

func (r *jsiiProxy_RosVideoProcessing) Prepare() {
	_jsii_.InvokeVoid(
		r,
		"prepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosVideoProcessing) RenderProperties(props *map[string]interface{}) *map[string]interface{} {
	if err := r.validateRenderPropertiesParameters(props); err != nil {
		panic(err)
	}
	var returns *map[string]interface{}

	_jsii_.Invoke(
		r,
		"renderProperties",
		[]interface{}{props},
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosVideoProcessing) Synthesize(session alicloudroscdkcore.ISynthesisSession) {
	if err := r.validateSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"synthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosVideoProcessing) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		r,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosVideoProcessing) Validate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"validate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosVideoProcessing) ValidateProperties(_properties interface{}) {
	if err := r.validateValidatePropertiesParameters(_properties); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"validateProperties",
		[]interface{}{_properties},
	)
}

