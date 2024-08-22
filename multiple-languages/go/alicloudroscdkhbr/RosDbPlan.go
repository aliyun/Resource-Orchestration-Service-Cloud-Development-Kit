package alicloudroscdkhbr

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkhbr/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkhbr/internal"
	"github.com/aws/constructs-go/constructs/v3"
)

// This class is a base encapsulation around the ROS resource type `ALIYUN::HBR::DbPlan`, which is used to create a backup plan.
type RosDbPlan interface {
	alicloudroscdkcore.RosResource
	AttrContinuousPlan() alicloudroscdkcore.IResolvable
	AttrContinuousUuid() alicloudroscdkcore.IResolvable
	AttrCumulativePlan() alicloudroscdkcore.IResolvable
	AttrCumulativeUuid() alicloudroscdkcore.IResolvable
	AttrDbPlanName() alicloudroscdkcore.IResolvable
	AttrFullPlan() alicloudroscdkcore.IResolvable
	AttrFullUuid() alicloudroscdkcore.IResolvable
	AttrHostUuid() alicloudroscdkcore.IResolvable
	AttrIncPlan() alicloudroscdkcore.IResolvable
	AttrIncUuid() alicloudroscdkcore.IResolvable
	AttrInstanceUuid() alicloudroscdkcore.IResolvable
	AttrLogPlan() alicloudroscdkcore.IResolvable
	AttrLogUuid() alicloudroscdkcore.IResolvable
	AttrMaxRateLimit() alicloudroscdkcore.IResolvable
	AttrMaxRetrySeconds() alicloudroscdkcore.IResolvable
	AttrOptions() alicloudroscdkcore.IResolvable
	AttrPlanId() alicloudroscdkcore.IResolvable
	AttrSourceType() alicloudroscdkcore.IResolvable
	AttrTarget() alicloudroscdkcore.IResolvable
	AttrVaultId() alicloudroscdkcore.IResolvable
	ContinuousPlan() interface{}
	SetContinuousPlan(val interface{})
	// Returns: the stack trace of the point where this Resource was created from, sourced
	// from the +metadata+ entry typed +aliyun:ros:logicalId+, and with the bottom-most
	// node +internal+ entries filtered.
	CreationStack() *[]*string
	CumulativePlan() interface{}
	SetCumulativePlan(val interface{})
	DbPlanName() interface{}
	SetDbPlanName(val interface{})
	EnableResourcePropertyConstraint() *bool
	SetEnableResourcePropertyConstraint(val *bool)
	FullPlan() interface{}
	SetFullPlan(val interface{})
	HostUuid() interface{}
	SetHostUuid(val interface{})
	IncPlan() interface{}
	SetIncPlan(val interface{})
	InstanceUuid() interface{}
	SetInstanceUuid(val interface{})
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
	LogPlan() interface{}
	SetLogPlan(val interface{})
	MaxRateLimit() interface{}
	SetMaxRateLimit(val interface{})
	MaxRetrySeconds() interface{}
	SetMaxRetrySeconds(val interface{})
	// The construct tree node associated with this construct.
	Node() alicloudroscdkcore.ConstructNode
	Options() interface{}
	SetOptions(val interface{})
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
	Source() interface{}
	SetSource(val interface{})
	SourceType() interface{}
	SetSourceType(val interface{})
	// The stack in which this element is defined.
	//
	// RosElements must be defined within a stack scope (directly or indirectly).
	Stack() alicloudroscdkcore.Stack
	// Return properties modified after initiation.
	//
	// Resources that expose mutable properties should override this function to
	// collect and return the properties object for this resource.
	UpdatedProperites() *map[string]interface{}
	VaultId() interface{}
	SetVaultId(val interface{})
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

// The jsii proxy struct for RosDbPlan
type jsiiProxy_RosDbPlan struct {
	internal.Type__alicloudroscdkcoreRosResource
}

func (j *jsiiProxy_RosDbPlan) AttrContinuousPlan() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrContinuousPlan",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDbPlan) AttrContinuousUuid() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrContinuousUuid",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDbPlan) AttrCumulativePlan() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrCumulativePlan",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDbPlan) AttrCumulativeUuid() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrCumulativeUuid",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDbPlan) AttrDbPlanName() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDbPlanName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDbPlan) AttrFullPlan() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrFullPlan",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDbPlan) AttrFullUuid() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrFullUuid",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDbPlan) AttrHostUuid() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrHostUuid",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDbPlan) AttrIncPlan() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrIncPlan",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDbPlan) AttrIncUuid() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrIncUuid",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDbPlan) AttrInstanceUuid() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrInstanceUuid",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDbPlan) AttrLogPlan() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrLogPlan",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDbPlan) AttrLogUuid() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrLogUuid",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDbPlan) AttrMaxRateLimit() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrMaxRateLimit",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDbPlan) AttrMaxRetrySeconds() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrMaxRetrySeconds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDbPlan) AttrOptions() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrOptions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDbPlan) AttrPlanId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrPlanId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDbPlan) AttrSourceType() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrSourceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDbPlan) AttrTarget() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrTarget",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDbPlan) AttrVaultId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrVaultId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDbPlan) ContinuousPlan() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"continuousPlan",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDbPlan) CreationStack() *[]*string {
	var returns *[]*string
	_jsii_.Get(
		j,
		"creationStack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDbPlan) CumulativePlan() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"cumulativePlan",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDbPlan) DbPlanName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"dbPlanName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDbPlan) EnableResourcePropertyConstraint() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"enableResourcePropertyConstraint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDbPlan) FullPlan() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"fullPlan",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDbPlan) HostUuid() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"hostUuid",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDbPlan) IncPlan() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"incPlan",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDbPlan) InstanceUuid() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"instanceUuid",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDbPlan) LogicalId() *string {
	var returns *string
	_jsii_.Get(
		j,
		"logicalId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDbPlan) LogPlan() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"logPlan",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDbPlan) MaxRateLimit() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"maxRateLimit",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDbPlan) MaxRetrySeconds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"maxRetrySeconds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDbPlan) Node() alicloudroscdkcore.ConstructNode {
	var returns alicloudroscdkcore.ConstructNode
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDbPlan) Options() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"options",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDbPlan) Ref() *string {
	var returns *string
	_jsii_.Get(
		j,
		"ref",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDbPlan) RosOptions() alicloudroscdkcore.IRosResourceOptions {
	var returns alicloudroscdkcore.IRosResourceOptions
	_jsii_.Get(
		j,
		"rosOptions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDbPlan) RosProperties() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"rosProperties",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDbPlan) RosResourceType() *string {
	var returns *string
	_jsii_.Get(
		j,
		"rosResourceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDbPlan) Source() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"source",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDbPlan) SourceType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"sourceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDbPlan) Stack() alicloudroscdkcore.Stack {
	var returns alicloudroscdkcore.Stack
	_jsii_.Get(
		j,
		"stack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDbPlan) UpdatedProperites() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"updatedProperites",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDbPlan) VaultId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"vaultId",
		&returns,
	)
	return returns
}


func NewRosDbPlan(scope alicloudroscdkcore.Construct, id *string, props *RosDbPlanProps, enableResourcePropertyConstraint *bool) RosDbPlan {
	_init_.Initialize()

	if err := validateNewRosDbPlanParameters(scope, id, props, enableResourcePropertyConstraint); err != nil {
		panic(err)
	}
	j := jsiiProxy_RosDbPlan{}

	_jsii_.Create(
		"@alicloud/ros-cdk-hbr.RosDbPlan",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		&j,
	)

	return &j
}

func NewRosDbPlan_Override(r RosDbPlan, scope alicloudroscdkcore.Construct, id *string, props *RosDbPlanProps, enableResourcePropertyConstraint *bool) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-hbr.RosDbPlan",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		r,
	)
}

func (j *jsiiProxy_RosDbPlan)SetContinuousPlan(val interface{}) {
	if err := j.validateSetContinuousPlanParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"continuousPlan",
		val,
	)
}

func (j *jsiiProxy_RosDbPlan)SetCumulativePlan(val interface{}) {
	if err := j.validateSetCumulativePlanParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"cumulativePlan",
		val,
	)
}

func (j *jsiiProxy_RosDbPlan)SetDbPlanName(val interface{}) {
	if err := j.validateSetDbPlanNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"dbPlanName",
		val,
	)
}

func (j *jsiiProxy_RosDbPlan)SetEnableResourcePropertyConstraint(val *bool) {
	if err := j.validateSetEnableResourcePropertyConstraintParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableResourcePropertyConstraint",
		val,
	)
}

func (j *jsiiProxy_RosDbPlan)SetFullPlan(val interface{}) {
	if err := j.validateSetFullPlanParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"fullPlan",
		val,
	)
}

func (j *jsiiProxy_RosDbPlan)SetHostUuid(val interface{}) {
	if err := j.validateSetHostUuidParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"hostUuid",
		val,
	)
}

func (j *jsiiProxy_RosDbPlan)SetIncPlan(val interface{}) {
	if err := j.validateSetIncPlanParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"incPlan",
		val,
	)
}

func (j *jsiiProxy_RosDbPlan)SetInstanceUuid(val interface{}) {
	if err := j.validateSetInstanceUuidParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"instanceUuid",
		val,
	)
}

func (j *jsiiProxy_RosDbPlan)SetLogPlan(val interface{}) {
	if err := j.validateSetLogPlanParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"logPlan",
		val,
	)
}

func (j *jsiiProxy_RosDbPlan)SetMaxRateLimit(val interface{}) {
	if err := j.validateSetMaxRateLimitParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"maxRateLimit",
		val,
	)
}

func (j *jsiiProxy_RosDbPlan)SetMaxRetrySeconds(val interface{}) {
	if err := j.validateSetMaxRetrySecondsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"maxRetrySeconds",
		val,
	)
}

func (j *jsiiProxy_RosDbPlan)SetOptions(val interface{}) {
	if err := j.validateSetOptionsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"options",
		val,
	)
}

func (j *jsiiProxy_RosDbPlan)SetSource(val interface{}) {
	if err := j.validateSetSourceParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"source",
		val,
	)
}

func (j *jsiiProxy_RosDbPlan)SetSourceType(val interface{}) {
	if err := j.validateSetSourceTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"sourceType",
		val,
	)
}

func (j *jsiiProxy_RosDbPlan)SetVaultId(val interface{}) {
	if err := j.validateSetVaultIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"vaultId",
		val,
	)
}

// Return whether the given object is a Construct.
func RosDbPlan_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosDbPlan_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-hbr.RosDbPlan",
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
func RosDbPlan_IsRosElement(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosDbPlan_IsRosElementParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-hbr.RosDbPlan",
		"isRosElement",
		[]interface{}{x},
		&returns,
	)

	return returns
}

// Check whether the given construct is a RosResource.
func RosDbPlan_IsRosResource(construct alicloudroscdkcore.IConstruct) *bool {
	_init_.Initialize()

	if err := validateRosDbPlan_IsRosResourceParameters(construct); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-hbr.RosDbPlan",
		"isRosResource",
		[]interface{}{construct},
		&returns,
	)

	return returns
}

func RosDbPlan_ROS_RESOURCE_TYPE_NAME() *string {
	_init_.Initialize()
	var returns *string
	_jsii_.StaticGet(
		"@alicloud/ros-cdk-hbr.RosDbPlan",
		"ROS_RESOURCE_TYPE_NAME",
		&returns,
	)
	return returns
}

func (r *jsiiProxy_RosDbPlan) AddCondition(con alicloudroscdkcore.RosCondition) {
	if err := r.validateAddConditionParameters(con); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCondition",
		[]interface{}{con},
	)
}

func (r *jsiiProxy_RosDbPlan) AddCount(count interface{}) {
	if err := r.validateAddCountParameters(count); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCount",
		[]interface{}{count},
	)
}

func (r *jsiiProxy_RosDbPlan) AddDeletionOverride(path *string) {
	if err := r.validateAddDeletionOverrideParameters(path); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDeletionOverride",
		[]interface{}{path},
	)
}

func (r *jsiiProxy_RosDbPlan) AddDependsOn(target alicloudroscdkcore.RosResource) {
	if err := r.validateAddDependsOnParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDependsOn",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosDbPlan) AddDesc(desc *string) {
	if err := r.validateAddDescParameters(desc); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDesc",
		[]interface{}{desc},
	)
}

func (r *jsiiProxy_RosDbPlan) AddMetaData(key *string, value interface{}) {
	if err := r.validateAddMetaDataParameters(key, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addMetaData",
		[]interface{}{key, value},
	)
}

func (r *jsiiProxy_RosDbPlan) AddOverride(path *string, value interface{}) {
	if err := r.validateAddOverrideParameters(path, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addOverride",
		[]interface{}{path, value},
	)
}

func (r *jsiiProxy_RosDbPlan) AddPropertyDeletionOverride(propertyPath *string) {
	if err := r.validateAddPropertyDeletionOverrideParameters(propertyPath); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyDeletionOverride",
		[]interface{}{propertyPath},
	)
}

func (r *jsiiProxy_RosDbPlan) AddPropertyOverride(propertyPath *string, value interface{}) {
	if err := r.validateAddPropertyOverrideParameters(propertyPath, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyOverride",
		[]interface{}{propertyPath, value},
	)
}

func (r *jsiiProxy_RosDbPlan) AddRosDependency(target *string) {
	if err := r.validateAddRosDependencyParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addRosDependency",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosDbPlan) ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy, options *alicloudroscdkcore.RemovalPolicyOptions) {
	if err := r.validateApplyRemovalPolicyParameters(options); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"applyRemovalPolicy",
		[]interface{}{policy, options},
	)
}

func (r *jsiiProxy_RosDbPlan) GetAtt(attributeName *string) alicloudroscdkcore.Reference {
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

func (r *jsiiProxy_RosDbPlan) OnPrepare() {
	_jsii_.InvokeVoid(
		r,
		"onPrepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosDbPlan) OnSynthesize(session constructs.ISynthesisSession) {
	if err := r.validateOnSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"onSynthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosDbPlan) OnValidate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"onValidate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosDbPlan) OverrideLogicalId(newLogicalId *string) {
	if err := r.validateOverrideLogicalIdParameters(newLogicalId); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"overrideLogicalId",
		[]interface{}{newLogicalId},
	)
}

func (r *jsiiProxy_RosDbPlan) Prepare() {
	_jsii_.InvokeVoid(
		r,
		"prepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosDbPlan) RenderProperties(props *map[string]interface{}) *map[string]interface{} {
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

func (r *jsiiProxy_RosDbPlan) Synthesize(session alicloudroscdkcore.ISynthesisSession) {
	if err := r.validateSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"synthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosDbPlan) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		r,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosDbPlan) Validate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"validate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosDbPlan) ValidateProperties(_properties interface{}) {
	if err := r.validateValidatePropertiesParameters(_properties); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"validateProperties",
		[]interface{}{_properties},
	)
}

