package alicloudroscdkadblake

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkadblake/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkadblake/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/aws/constructs-go/constructs/v3"
)

// This class is a base encapsulation around the ROS resource type `ALIYUN::ADBLake::ResourceGroup`.
type RosResourceGroup interface {
	alicloudroscdkcore.RosResource
	AttrGroupName() alicloudroscdkcore.IResolvable
	AttrGroupType() alicloudroscdkcore.IResolvable
	AttrGroupUsers() alicloudroscdkcore.IResolvable
	AutoStopInterval() interface{}
	SetAutoStopInterval(val interface{})
	ClusterMode() interface{}
	SetClusterMode(val interface{})
	ClusterSizeResource() interface{}
	SetClusterSizeResource(val interface{})
	// Returns: the stack trace of the point where this Resource was created from, sourced
	// from the +metadata+ entry typed +aliyun:ros:logicalId+, and with the bottom-most
	// node +internal+ entries filtered.
	CreationStack() *[]*string
	DbClusterId() interface{}
	SetDbClusterId(val interface{})
	EnableResourcePropertyConstraint() *bool
	SetEnableResourcePropertyConstraint(val *bool)
	EnableSpot() interface{}
	SetEnableSpot(val interface{})
	Engine() interface{}
	SetEngine(val interface{})
	EngineParams() interface{}
	SetEngineParams(val interface{})
	GroupName() interface{}
	SetGroupName(val interface{})
	GroupType() interface{}
	SetGroupType(val interface{})
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
	MaxClusterCount() interface{}
	SetMaxClusterCount(val interface{})
	MaxComputeResource() interface{}
	SetMaxComputeResource(val interface{})
	MinClusterCount() interface{}
	SetMinClusterCount(val interface{})
	MinComputeResource() interface{}
	SetMinComputeResource(val interface{})
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
	Rules() interface{}
	SetRules(val interface{})
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

// The jsii proxy struct for RosResourceGroup
type jsiiProxy_RosResourceGroup struct {
	internal.Type__alicloudroscdkcoreRosResource
}

func (j *jsiiProxy_RosResourceGroup) AttrGroupName() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrGroupName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosResourceGroup) AttrGroupType() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrGroupType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosResourceGroup) AttrGroupUsers() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrGroupUsers",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosResourceGroup) AutoStopInterval() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"autoStopInterval",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosResourceGroup) ClusterMode() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"clusterMode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosResourceGroup) ClusterSizeResource() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"clusterSizeResource",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosResourceGroup) CreationStack() *[]*string {
	var returns *[]*string
	_jsii_.Get(
		j,
		"creationStack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosResourceGroup) DbClusterId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"dbClusterId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosResourceGroup) EnableResourcePropertyConstraint() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"enableResourcePropertyConstraint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosResourceGroup) EnableSpot() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"enableSpot",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosResourceGroup) Engine() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"engine",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosResourceGroup) EngineParams() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"engineParams",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosResourceGroup) GroupName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"groupName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosResourceGroup) GroupType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"groupType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosResourceGroup) LogicalId() *string {
	var returns *string
	_jsii_.Get(
		j,
		"logicalId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosResourceGroup) MaxClusterCount() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"maxClusterCount",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosResourceGroup) MaxComputeResource() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"maxComputeResource",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosResourceGroup) MinClusterCount() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"minClusterCount",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosResourceGroup) MinComputeResource() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"minComputeResource",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosResourceGroup) Node() alicloudroscdkcore.ConstructNode {
	var returns alicloudroscdkcore.ConstructNode
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosResourceGroup) Ref() *string {
	var returns *string
	_jsii_.Get(
		j,
		"ref",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosResourceGroup) RosOptions() alicloudroscdkcore.IRosResourceOptions {
	var returns alicloudroscdkcore.IRosResourceOptions
	_jsii_.Get(
		j,
		"rosOptions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosResourceGroup) RosProperties() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"rosProperties",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosResourceGroup) RosResourceType() *string {
	var returns *string
	_jsii_.Get(
		j,
		"rosResourceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosResourceGroup) Rules() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"rules",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosResourceGroup) Stack() alicloudroscdkcore.Stack {
	var returns alicloudroscdkcore.Stack
	_jsii_.Get(
		j,
		"stack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosResourceGroup) UpdatedProperites() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"updatedProperites",
		&returns,
	)
	return returns
}


func NewRosResourceGroup(scope alicloudroscdkcore.Construct, id *string, props *RosResourceGroupProps, enableResourcePropertyConstraint *bool) RosResourceGroup {
	_init_.Initialize()

	if err := validateNewRosResourceGroupParameters(scope, id, props, enableResourcePropertyConstraint); err != nil {
		panic(err)
	}
	j := jsiiProxy_RosResourceGroup{}

	_jsii_.Create(
		"@alicloud/ros-cdk-adblake.RosResourceGroup",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		&j,
	)

	return &j
}

func NewRosResourceGroup_Override(r RosResourceGroup, scope alicloudroscdkcore.Construct, id *string, props *RosResourceGroupProps, enableResourcePropertyConstraint *bool) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-adblake.RosResourceGroup",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		r,
	)
}

func (j *jsiiProxy_RosResourceGroup)SetAutoStopInterval(val interface{}) {
	if err := j.validateSetAutoStopIntervalParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"autoStopInterval",
		val,
	)
}

func (j *jsiiProxy_RosResourceGroup)SetClusterMode(val interface{}) {
	if err := j.validateSetClusterModeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"clusterMode",
		val,
	)
}

func (j *jsiiProxy_RosResourceGroup)SetClusterSizeResource(val interface{}) {
	if err := j.validateSetClusterSizeResourceParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"clusterSizeResource",
		val,
	)
}

func (j *jsiiProxy_RosResourceGroup)SetDbClusterId(val interface{}) {
	if err := j.validateSetDbClusterIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"dbClusterId",
		val,
	)
}

func (j *jsiiProxy_RosResourceGroup)SetEnableResourcePropertyConstraint(val *bool) {
	if err := j.validateSetEnableResourcePropertyConstraintParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableResourcePropertyConstraint",
		val,
	)
}

func (j *jsiiProxy_RosResourceGroup)SetEnableSpot(val interface{}) {
	if err := j.validateSetEnableSpotParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableSpot",
		val,
	)
}

func (j *jsiiProxy_RosResourceGroup)SetEngine(val interface{}) {
	if err := j.validateSetEngineParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"engine",
		val,
	)
}

func (j *jsiiProxy_RosResourceGroup)SetEngineParams(val interface{}) {
	if err := j.validateSetEngineParamsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"engineParams",
		val,
	)
}

func (j *jsiiProxy_RosResourceGroup)SetGroupName(val interface{}) {
	if err := j.validateSetGroupNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"groupName",
		val,
	)
}

func (j *jsiiProxy_RosResourceGroup)SetGroupType(val interface{}) {
	if err := j.validateSetGroupTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"groupType",
		val,
	)
}

func (j *jsiiProxy_RosResourceGroup)SetMaxClusterCount(val interface{}) {
	if err := j.validateSetMaxClusterCountParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"maxClusterCount",
		val,
	)
}

func (j *jsiiProxy_RosResourceGroup)SetMaxComputeResource(val interface{}) {
	if err := j.validateSetMaxComputeResourceParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"maxComputeResource",
		val,
	)
}

func (j *jsiiProxy_RosResourceGroup)SetMinClusterCount(val interface{}) {
	if err := j.validateSetMinClusterCountParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"minClusterCount",
		val,
	)
}

func (j *jsiiProxy_RosResourceGroup)SetMinComputeResource(val interface{}) {
	if err := j.validateSetMinComputeResourceParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"minComputeResource",
		val,
	)
}

func (j *jsiiProxy_RosResourceGroup)SetRules(val interface{}) {
	if err := j.validateSetRulesParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"rules",
		val,
	)
}

// Return whether the given object is a Construct.
func RosResourceGroup_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosResourceGroup_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-adblake.RosResourceGroup",
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
func RosResourceGroup_IsRosElement(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosResourceGroup_IsRosElementParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-adblake.RosResourceGroup",
		"isRosElement",
		[]interface{}{x},
		&returns,
	)

	return returns
}

// Check whether the given construct is a RosResource.
func RosResourceGroup_IsRosResource(construct alicloudroscdkcore.IConstruct) *bool {
	_init_.Initialize()

	if err := validateRosResourceGroup_IsRosResourceParameters(construct); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-adblake.RosResourceGroup",
		"isRosResource",
		[]interface{}{construct},
		&returns,
	)

	return returns
}

func RosResourceGroup_ROS_RESOURCE_TYPE_NAME() *string {
	_init_.Initialize()
	var returns *string
	_jsii_.StaticGet(
		"@alicloud/ros-cdk-adblake.RosResourceGroup",
		"ROS_RESOURCE_TYPE_NAME",
		&returns,
	)
	return returns
}

func (r *jsiiProxy_RosResourceGroup) AddCondition(con alicloudroscdkcore.RosCondition) {
	if err := r.validateAddConditionParameters(con); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCondition",
		[]interface{}{con},
	)
}

func (r *jsiiProxy_RosResourceGroup) AddCount(count interface{}) {
	if err := r.validateAddCountParameters(count); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCount",
		[]interface{}{count},
	)
}

func (r *jsiiProxy_RosResourceGroup) AddDeletionOverride(path *string) {
	if err := r.validateAddDeletionOverrideParameters(path); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDeletionOverride",
		[]interface{}{path},
	)
}

func (r *jsiiProxy_RosResourceGroup) AddDependsOn(target alicloudroscdkcore.RosResource) {
	if err := r.validateAddDependsOnParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDependsOn",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosResourceGroup) AddDesc(desc *string) {
	if err := r.validateAddDescParameters(desc); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDesc",
		[]interface{}{desc},
	)
}

func (r *jsiiProxy_RosResourceGroup) AddMetaData(key *string, value interface{}) {
	if err := r.validateAddMetaDataParameters(key, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addMetaData",
		[]interface{}{key, value},
	)
}

func (r *jsiiProxy_RosResourceGroup) AddOverride(path *string, value interface{}) {
	if err := r.validateAddOverrideParameters(path, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addOverride",
		[]interface{}{path, value},
	)
}

func (r *jsiiProxy_RosResourceGroup) AddPropertyDeletionOverride(propertyPath *string) {
	if err := r.validateAddPropertyDeletionOverrideParameters(propertyPath); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyDeletionOverride",
		[]interface{}{propertyPath},
	)
}

func (r *jsiiProxy_RosResourceGroup) AddPropertyOverride(propertyPath *string, value interface{}) {
	if err := r.validateAddPropertyOverrideParameters(propertyPath, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyOverride",
		[]interface{}{propertyPath, value},
	)
}

func (r *jsiiProxy_RosResourceGroup) AddRosDependency(target *string) {
	if err := r.validateAddRosDependencyParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addRosDependency",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosResourceGroup) ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy, options *alicloudroscdkcore.RemovalPolicyOptions) {
	if err := r.validateApplyRemovalPolicyParameters(options); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"applyRemovalPolicy",
		[]interface{}{policy, options},
	)
}

func (r *jsiiProxy_RosResourceGroup) FetchCondition() alicloudroscdkcore.RosCondition {
	var returns alicloudroscdkcore.RosCondition

	_jsii_.Invoke(
		r,
		"fetchCondition",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosResourceGroup) FetchDesc() *string {
	var returns *string

	_jsii_.Invoke(
		r,
		"fetchDesc",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosResourceGroup) FetchRosDependency() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"fetchRosDependency",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosResourceGroup) GetAtt(attributeName *string) alicloudroscdkcore.Reference {
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

func (r *jsiiProxy_RosResourceGroup) OnPrepare() {
	_jsii_.InvokeVoid(
		r,
		"onPrepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosResourceGroup) OnSynthesize(session constructs.ISynthesisSession) {
	if err := r.validateOnSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"onSynthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosResourceGroup) OnValidate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"onValidate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosResourceGroup) OverrideLogicalId(newLogicalId *string) {
	if err := r.validateOverrideLogicalIdParameters(newLogicalId); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"overrideLogicalId",
		[]interface{}{newLogicalId},
	)
}

func (r *jsiiProxy_RosResourceGroup) Prepare() {
	_jsii_.InvokeVoid(
		r,
		"prepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosResourceGroup) RenderProperties(props *map[string]interface{}) *map[string]interface{} {
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

func (r *jsiiProxy_RosResourceGroup) Synthesize(session alicloudroscdkcore.ISynthesisSession) {
	if err := r.validateSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"synthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosResourceGroup) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		r,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosResourceGroup) Validate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"validate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosResourceGroup) ValidateProperties(_properties interface{}) {
	if err := r.validateValidatePropertiesParameters(_properties); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"validateProperties",
		[]interface{}{_properties},
	)
}

