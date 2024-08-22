package alicloudroscdkros

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkros/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkros/internal"
	"github.com/aws/constructs-go/constructs/v3"
)

// This class is a base encapsulation around the ROS resource type `ALIYUN::ROS::ResourceCleaner`, which is used to create a resource cleaner.
type RosResourceCleaner interface {
	alicloudroscdkcore.RosResource
	Action() interface{}
	SetAction(val interface{})
	AttrCleanResult() alicloudroscdkcore.IResolvable
	AttrNoCleanupResourceDetails() alicloudroscdkcore.IResolvable
	AttrNoCleanupResourcePartialDetails() alicloudroscdkcore.IResolvable
	AttrResourceDetails() alicloudroscdkcore.IResolvable
	AttrResourcePartialDetails() alicloudroscdkcore.IResolvable
	AttrResourceSummary() alicloudroscdkcore.IResolvable
	AttrScanErrors() alicloudroscdkcore.IResolvable
	CleanUpAlgorithm() interface{}
	SetCleanUpAlgorithm(val interface{})
	CleanUpRetryCount() interface{}
	SetCleanUpRetryCount(val interface{})
	CleanUpTimeout() interface{}
	SetCleanUpTimeout(val interface{})
	// Returns: the stack trace of the point where this Resource was created from, sourced
	// from the +metadata+ entry typed +aliyun:ros:logicalId+, and with the bottom-most
	// node +internal+ entries filtered.
	CreationStack() *[]*string
	DisabledSideEffects() interface{}
	SetDisabledSideEffects(val interface{})
	EnableResourcePropertyConstraint() *bool
	SetEnableResourcePropertyConstraint(val *bool)
	ExcludedResources() interface{}
	SetExcludedResources(val interface{})
	FailureOption() interface{}
	SetFailureOption(val interface{})
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
	Mode() interface{}
	SetMode(val interface{})
	// The construct tree node associated with this construct.
	Node() alicloudroscdkcore.ConstructNode
	// Return a string that will be resolved to a RosTemplate `{ Ref }` for this element.
	//
	// If, by any chance, the intrinsic reference of a resource is not a string, you could
	// coerce it to an IResolvable through `Lazy.any({ produce: resource.ref })`.
	Ref() *string
	ResourceFilters() interface{}
	SetResourceFilters(val interface{})
	Resources() interface{}
	SetResources(val interface{})
	ResourceTypeOrder() interface{}
	SetResourceTypeOrder(val interface{})
	// Options for this resource, such as condition, update policy etc.
	RosOptions() alicloudroscdkcore.IRosResourceOptions
	RosProperties() *map[string]interface{}
	// ROS resource type.
	RosResourceType() *string
	// The stack in which this element is defined.
	//
	// RosElements must be defined within a stack scope (directly or indirectly).
	Stack() alicloudroscdkcore.Stack
	// Return properties modified after initiation.
	//
	// Resources that expose mutable properties should override this function to
	// collect and return the properties object for this resource.
	UpdatedProperites() *map[string]interface{}
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

// The jsii proxy struct for RosResourceCleaner
type jsiiProxy_RosResourceCleaner struct {
	internal.Type__alicloudroscdkcoreRosResource
}

func (j *jsiiProxy_RosResourceCleaner) Action() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"action",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosResourceCleaner) AttrCleanResult() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrCleanResult",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosResourceCleaner) AttrNoCleanupResourceDetails() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrNoCleanupResourceDetails",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosResourceCleaner) AttrNoCleanupResourcePartialDetails() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrNoCleanupResourcePartialDetails",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosResourceCleaner) AttrResourceDetails() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrResourceDetails",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosResourceCleaner) AttrResourcePartialDetails() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrResourcePartialDetails",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosResourceCleaner) AttrResourceSummary() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrResourceSummary",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosResourceCleaner) AttrScanErrors() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrScanErrors",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosResourceCleaner) CleanUpAlgorithm() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"cleanUpAlgorithm",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosResourceCleaner) CleanUpRetryCount() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"cleanUpRetryCount",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosResourceCleaner) CleanUpTimeout() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"cleanUpTimeout",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosResourceCleaner) CreationStack() *[]*string {
	var returns *[]*string
	_jsii_.Get(
		j,
		"creationStack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosResourceCleaner) DisabledSideEffects() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"disabledSideEffects",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosResourceCleaner) EnableResourcePropertyConstraint() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"enableResourcePropertyConstraint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosResourceCleaner) ExcludedResources() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"excludedResources",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosResourceCleaner) FailureOption() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"failureOption",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosResourceCleaner) LogicalId() *string {
	var returns *string
	_jsii_.Get(
		j,
		"logicalId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosResourceCleaner) Mode() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"mode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosResourceCleaner) Node() alicloudroscdkcore.ConstructNode {
	var returns alicloudroscdkcore.ConstructNode
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosResourceCleaner) Ref() *string {
	var returns *string
	_jsii_.Get(
		j,
		"ref",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosResourceCleaner) ResourceFilters() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"resourceFilters",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosResourceCleaner) Resources() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"resources",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosResourceCleaner) ResourceTypeOrder() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"resourceTypeOrder",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosResourceCleaner) RosOptions() alicloudroscdkcore.IRosResourceOptions {
	var returns alicloudroscdkcore.IRosResourceOptions
	_jsii_.Get(
		j,
		"rosOptions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosResourceCleaner) RosProperties() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"rosProperties",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosResourceCleaner) RosResourceType() *string {
	var returns *string
	_jsii_.Get(
		j,
		"rosResourceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosResourceCleaner) Stack() alicloudroscdkcore.Stack {
	var returns alicloudroscdkcore.Stack
	_jsii_.Get(
		j,
		"stack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosResourceCleaner) UpdatedProperites() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"updatedProperites",
		&returns,
	)
	return returns
}


func NewRosResourceCleaner(scope alicloudroscdkcore.Construct, id *string, props *RosResourceCleanerProps, enableResourcePropertyConstraint *bool) RosResourceCleaner {
	_init_.Initialize()

	if err := validateNewRosResourceCleanerParameters(scope, id, props, enableResourcePropertyConstraint); err != nil {
		panic(err)
	}
	j := jsiiProxy_RosResourceCleaner{}

	_jsii_.Create(
		"@alicloud/ros-cdk-ros.RosResourceCleaner",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		&j,
	)

	return &j
}

func NewRosResourceCleaner_Override(r RosResourceCleaner, scope alicloudroscdkcore.Construct, id *string, props *RosResourceCleanerProps, enableResourcePropertyConstraint *bool) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-ros.RosResourceCleaner",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		r,
	)
}

func (j *jsiiProxy_RosResourceCleaner)SetAction(val interface{}) {
	if err := j.validateSetActionParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"action",
		val,
	)
}

func (j *jsiiProxy_RosResourceCleaner)SetCleanUpAlgorithm(val interface{}) {
	if err := j.validateSetCleanUpAlgorithmParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"cleanUpAlgorithm",
		val,
	)
}

func (j *jsiiProxy_RosResourceCleaner)SetCleanUpRetryCount(val interface{}) {
	if err := j.validateSetCleanUpRetryCountParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"cleanUpRetryCount",
		val,
	)
}

func (j *jsiiProxy_RosResourceCleaner)SetCleanUpTimeout(val interface{}) {
	if err := j.validateSetCleanUpTimeoutParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"cleanUpTimeout",
		val,
	)
}

func (j *jsiiProxy_RosResourceCleaner)SetDisabledSideEffects(val interface{}) {
	if err := j.validateSetDisabledSideEffectsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"disabledSideEffects",
		val,
	)
}

func (j *jsiiProxy_RosResourceCleaner)SetEnableResourcePropertyConstraint(val *bool) {
	if err := j.validateSetEnableResourcePropertyConstraintParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableResourcePropertyConstraint",
		val,
	)
}

func (j *jsiiProxy_RosResourceCleaner)SetExcludedResources(val interface{}) {
	if err := j.validateSetExcludedResourcesParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"excludedResources",
		val,
	)
}

func (j *jsiiProxy_RosResourceCleaner)SetFailureOption(val interface{}) {
	if err := j.validateSetFailureOptionParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"failureOption",
		val,
	)
}

func (j *jsiiProxy_RosResourceCleaner)SetMode(val interface{}) {
	if err := j.validateSetModeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"mode",
		val,
	)
}

func (j *jsiiProxy_RosResourceCleaner)SetResourceFilters(val interface{}) {
	if err := j.validateSetResourceFiltersParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"resourceFilters",
		val,
	)
}

func (j *jsiiProxy_RosResourceCleaner)SetResources(val interface{}) {
	if err := j.validateSetResourcesParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"resources",
		val,
	)
}

func (j *jsiiProxy_RosResourceCleaner)SetResourceTypeOrder(val interface{}) {
	if err := j.validateSetResourceTypeOrderParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"resourceTypeOrder",
		val,
	)
}

// Return whether the given object is a Construct.
func RosResourceCleaner_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosResourceCleaner_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-ros.RosResourceCleaner",
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
func RosResourceCleaner_IsRosElement(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosResourceCleaner_IsRosElementParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-ros.RosResourceCleaner",
		"isRosElement",
		[]interface{}{x},
		&returns,
	)

	return returns
}

// Check whether the given construct is a RosResource.
func RosResourceCleaner_IsRosResource(construct alicloudroscdkcore.IConstruct) *bool {
	_init_.Initialize()

	if err := validateRosResourceCleaner_IsRosResourceParameters(construct); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-ros.RosResourceCleaner",
		"isRosResource",
		[]interface{}{construct},
		&returns,
	)

	return returns
}

func RosResourceCleaner_ROS_RESOURCE_TYPE_NAME() *string {
	_init_.Initialize()
	var returns *string
	_jsii_.StaticGet(
		"@alicloud/ros-cdk-ros.RosResourceCleaner",
		"ROS_RESOURCE_TYPE_NAME",
		&returns,
	)
	return returns
}

func (r *jsiiProxy_RosResourceCleaner) AddCondition(con alicloudroscdkcore.RosCondition) {
	if err := r.validateAddConditionParameters(con); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCondition",
		[]interface{}{con},
	)
}

func (r *jsiiProxy_RosResourceCleaner) AddCount(count interface{}) {
	if err := r.validateAddCountParameters(count); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCount",
		[]interface{}{count},
	)
}

func (r *jsiiProxy_RosResourceCleaner) AddDeletionOverride(path *string) {
	if err := r.validateAddDeletionOverrideParameters(path); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDeletionOverride",
		[]interface{}{path},
	)
}

func (r *jsiiProxy_RosResourceCleaner) AddDependsOn(target alicloudroscdkcore.RosResource) {
	if err := r.validateAddDependsOnParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDependsOn",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosResourceCleaner) AddDesc(desc *string) {
	if err := r.validateAddDescParameters(desc); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDesc",
		[]interface{}{desc},
	)
}

func (r *jsiiProxy_RosResourceCleaner) AddMetaData(key *string, value interface{}) {
	if err := r.validateAddMetaDataParameters(key, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addMetaData",
		[]interface{}{key, value},
	)
}

func (r *jsiiProxy_RosResourceCleaner) AddOverride(path *string, value interface{}) {
	if err := r.validateAddOverrideParameters(path, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addOverride",
		[]interface{}{path, value},
	)
}

func (r *jsiiProxy_RosResourceCleaner) AddPropertyDeletionOverride(propertyPath *string) {
	if err := r.validateAddPropertyDeletionOverrideParameters(propertyPath); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyDeletionOverride",
		[]interface{}{propertyPath},
	)
}

func (r *jsiiProxy_RosResourceCleaner) AddPropertyOverride(propertyPath *string, value interface{}) {
	if err := r.validateAddPropertyOverrideParameters(propertyPath, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyOverride",
		[]interface{}{propertyPath, value},
	)
}

func (r *jsiiProxy_RosResourceCleaner) AddRosDependency(target *string) {
	if err := r.validateAddRosDependencyParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addRosDependency",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosResourceCleaner) ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy, options *alicloudroscdkcore.RemovalPolicyOptions) {
	if err := r.validateApplyRemovalPolicyParameters(options); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"applyRemovalPolicy",
		[]interface{}{policy, options},
	)
}

func (r *jsiiProxy_RosResourceCleaner) GetAtt(attributeName *string) alicloudroscdkcore.Reference {
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

func (r *jsiiProxy_RosResourceCleaner) OnPrepare() {
	_jsii_.InvokeVoid(
		r,
		"onPrepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosResourceCleaner) OnSynthesize(session constructs.ISynthesisSession) {
	if err := r.validateOnSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"onSynthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosResourceCleaner) OnValidate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"onValidate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosResourceCleaner) OverrideLogicalId(newLogicalId *string) {
	if err := r.validateOverrideLogicalIdParameters(newLogicalId); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"overrideLogicalId",
		[]interface{}{newLogicalId},
	)
}

func (r *jsiiProxy_RosResourceCleaner) Prepare() {
	_jsii_.InvokeVoid(
		r,
		"prepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosResourceCleaner) RenderProperties(props *map[string]interface{}) *map[string]interface{} {
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

func (r *jsiiProxy_RosResourceCleaner) Synthesize(session alicloudroscdkcore.ISynthesisSession) {
	if err := r.validateSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"synthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosResourceCleaner) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		r,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosResourceCleaner) Validate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"validate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosResourceCleaner) ValidateProperties(_properties interface{}) {
	if err := r.validateValidatePropertiesParameters(_properties); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"validateProperties",
		[]interface{}{_properties},
	)
}

