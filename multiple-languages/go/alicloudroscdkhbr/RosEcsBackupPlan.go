package alicloudroscdkhbr

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkhbr/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkhbr/internal"
	"github.com/aws/constructs-go/constructs/v3"
)

// This class is a base encapsulation around the ROS resource type `ALIYUN::HBR::EcsBackupPlan`.
type RosEcsBackupPlan interface {
	alicloudroscdkcore.RosResource
	AttrPlanId() alicloudroscdkcore.IResolvable
	BackupType() interface{}
	SetBackupType(val interface{})
	// Returns: the stack trace of the point where this Resource was created from, sourced
	// from the +metadata+ entry typed +aliyun:ros:logicalId+, and with the bottom-most
	// node +internal+ entries filtered.
	CreationStack() *[]*string
	CrossAccountRoleName() interface{}
	SetCrossAccountRoleName(val interface{})
	CrossAccountType() interface{}
	SetCrossAccountType(val interface{})
	CrossAccountUserId() interface{}
	SetCrossAccountUserId(val interface{})
	Detail() interface{}
	SetDetail(val interface{})
	Disabled() interface{}
	SetDisabled(val interface{})
	EnableResourcePropertyConstraint() *bool
	SetEnableResourcePropertyConstraint(val *bool)
	Exclude() interface{}
	SetExclude(val interface{})
	Include() interface{}
	SetInclude(val interface{})
	InstanceId() interface{}
	SetInstanceId(val interface{})
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
	Node() alicloudroscdkcore.ConstructNode
	Options() interface{}
	SetOptions(val interface{})
	Paths() interface{}
	SetPaths(val interface{})
	PlanName() interface{}
	SetPlanName(val interface{})
	// Return a string that will be resolved to a RosTemplate `{ Ref }` for this element.
	//
	// If, by any chance, the intrinsic reference of a resource is not a string, you could
	// coerce it to an IResolvable through `Lazy.any({ produce: resource.ref })`.
	Ref() *string
	Retention() interface{}
	SetRetention(val interface{})
	// Options for this resource, such as condition, update policy etc.
	RosOptions() alicloudroscdkcore.IRosResourceOptions
	RosProperties() *map[string]interface{}
	// ROS resource type.
	RosResourceType() *string
	Schedule() interface{}
	SetSchedule(val interface{})
	SpeedLimit() interface{}
	SetSpeedLimit(val interface{})
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

// The jsii proxy struct for RosEcsBackupPlan
type jsiiProxy_RosEcsBackupPlan struct {
	internal.Type__alicloudroscdkcoreRosResource
}

func (j *jsiiProxy_RosEcsBackupPlan) AttrPlanId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrPlanId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEcsBackupPlan) BackupType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"backupType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEcsBackupPlan) CreationStack() *[]*string {
	var returns *[]*string
	_jsii_.Get(
		j,
		"creationStack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEcsBackupPlan) CrossAccountRoleName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"crossAccountRoleName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEcsBackupPlan) CrossAccountType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"crossAccountType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEcsBackupPlan) CrossAccountUserId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"crossAccountUserId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEcsBackupPlan) Detail() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"detail",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEcsBackupPlan) Disabled() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"disabled",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEcsBackupPlan) EnableResourcePropertyConstraint() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"enableResourcePropertyConstraint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEcsBackupPlan) Exclude() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"exclude",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEcsBackupPlan) Include() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"include",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEcsBackupPlan) InstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"instanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEcsBackupPlan) LogicalId() *string {
	var returns *string
	_jsii_.Get(
		j,
		"logicalId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEcsBackupPlan) Node() alicloudroscdkcore.ConstructNode {
	var returns alicloudroscdkcore.ConstructNode
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEcsBackupPlan) Options() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"options",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEcsBackupPlan) Paths() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"paths",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEcsBackupPlan) PlanName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"planName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEcsBackupPlan) Ref() *string {
	var returns *string
	_jsii_.Get(
		j,
		"ref",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEcsBackupPlan) Retention() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"retention",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEcsBackupPlan) RosOptions() alicloudroscdkcore.IRosResourceOptions {
	var returns alicloudroscdkcore.IRosResourceOptions
	_jsii_.Get(
		j,
		"rosOptions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEcsBackupPlan) RosProperties() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"rosProperties",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEcsBackupPlan) RosResourceType() *string {
	var returns *string
	_jsii_.Get(
		j,
		"rosResourceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEcsBackupPlan) Schedule() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"schedule",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEcsBackupPlan) SpeedLimit() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"speedLimit",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEcsBackupPlan) Stack() alicloudroscdkcore.Stack {
	var returns alicloudroscdkcore.Stack
	_jsii_.Get(
		j,
		"stack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEcsBackupPlan) UpdatedProperites() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"updatedProperites",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEcsBackupPlan) VaultId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"vaultId",
		&returns,
	)
	return returns
}


func NewRosEcsBackupPlan(scope alicloudroscdkcore.Construct, id *string, props *RosEcsBackupPlanProps, enableResourcePropertyConstraint *bool) RosEcsBackupPlan {
	_init_.Initialize()

	if err := validateNewRosEcsBackupPlanParameters(scope, id, props, enableResourcePropertyConstraint); err != nil {
		panic(err)
	}
	j := jsiiProxy_RosEcsBackupPlan{}

	_jsii_.Create(
		"@alicloud/ros-cdk-hbr.RosEcsBackupPlan",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		&j,
	)

	return &j
}

func NewRosEcsBackupPlan_Override(r RosEcsBackupPlan, scope alicloudroscdkcore.Construct, id *string, props *RosEcsBackupPlanProps, enableResourcePropertyConstraint *bool) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-hbr.RosEcsBackupPlan",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		r,
	)
}

func (j *jsiiProxy_RosEcsBackupPlan)SetBackupType(val interface{}) {
	if err := j.validateSetBackupTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"backupType",
		val,
	)
}

func (j *jsiiProxy_RosEcsBackupPlan)SetCrossAccountRoleName(val interface{}) {
	if err := j.validateSetCrossAccountRoleNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"crossAccountRoleName",
		val,
	)
}

func (j *jsiiProxy_RosEcsBackupPlan)SetCrossAccountType(val interface{}) {
	if err := j.validateSetCrossAccountTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"crossAccountType",
		val,
	)
}

func (j *jsiiProxy_RosEcsBackupPlan)SetCrossAccountUserId(val interface{}) {
	if err := j.validateSetCrossAccountUserIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"crossAccountUserId",
		val,
	)
}

func (j *jsiiProxy_RosEcsBackupPlan)SetDetail(val interface{}) {
	if err := j.validateSetDetailParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"detail",
		val,
	)
}

func (j *jsiiProxy_RosEcsBackupPlan)SetDisabled(val interface{}) {
	if err := j.validateSetDisabledParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"disabled",
		val,
	)
}

func (j *jsiiProxy_RosEcsBackupPlan)SetEnableResourcePropertyConstraint(val *bool) {
	if err := j.validateSetEnableResourcePropertyConstraintParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableResourcePropertyConstraint",
		val,
	)
}

func (j *jsiiProxy_RosEcsBackupPlan)SetExclude(val interface{}) {
	if err := j.validateSetExcludeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"exclude",
		val,
	)
}

func (j *jsiiProxy_RosEcsBackupPlan)SetInclude(val interface{}) {
	if err := j.validateSetIncludeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"include",
		val,
	)
}

func (j *jsiiProxy_RosEcsBackupPlan)SetInstanceId(val interface{}) {
	if err := j.validateSetInstanceIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"instanceId",
		val,
	)
}

func (j *jsiiProxy_RosEcsBackupPlan)SetOptions(val interface{}) {
	if err := j.validateSetOptionsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"options",
		val,
	)
}

func (j *jsiiProxy_RosEcsBackupPlan)SetPaths(val interface{}) {
	if err := j.validateSetPathsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"paths",
		val,
	)
}

func (j *jsiiProxy_RosEcsBackupPlan)SetPlanName(val interface{}) {
	if err := j.validateSetPlanNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"planName",
		val,
	)
}

func (j *jsiiProxy_RosEcsBackupPlan)SetRetention(val interface{}) {
	if err := j.validateSetRetentionParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"retention",
		val,
	)
}

func (j *jsiiProxy_RosEcsBackupPlan)SetSchedule(val interface{}) {
	if err := j.validateSetScheduleParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"schedule",
		val,
	)
}

func (j *jsiiProxy_RosEcsBackupPlan)SetSpeedLimit(val interface{}) {
	if err := j.validateSetSpeedLimitParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"speedLimit",
		val,
	)
}

func (j *jsiiProxy_RosEcsBackupPlan)SetVaultId(val interface{}) {
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
func RosEcsBackupPlan_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosEcsBackupPlan_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-hbr.RosEcsBackupPlan",
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
func RosEcsBackupPlan_IsRosElement(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosEcsBackupPlan_IsRosElementParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-hbr.RosEcsBackupPlan",
		"isRosElement",
		[]interface{}{x},
		&returns,
	)

	return returns
}

// Check whether the given construct is a RosResource.
func RosEcsBackupPlan_IsRosResource(construct alicloudroscdkcore.IConstruct) *bool {
	_init_.Initialize()

	if err := validateRosEcsBackupPlan_IsRosResourceParameters(construct); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-hbr.RosEcsBackupPlan",
		"isRosResource",
		[]interface{}{construct},
		&returns,
	)

	return returns
}

func RosEcsBackupPlan_ROS_RESOURCE_TYPE_NAME() *string {
	_init_.Initialize()
	var returns *string
	_jsii_.StaticGet(
		"@alicloud/ros-cdk-hbr.RosEcsBackupPlan",
		"ROS_RESOURCE_TYPE_NAME",
		&returns,
	)
	return returns
}

func (r *jsiiProxy_RosEcsBackupPlan) AddCondition(con alicloudroscdkcore.RosCondition) {
	if err := r.validateAddConditionParameters(con); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCondition",
		[]interface{}{con},
	)
}

func (r *jsiiProxy_RosEcsBackupPlan) AddCount(count interface{}) {
	if err := r.validateAddCountParameters(count); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCount",
		[]interface{}{count},
	)
}

func (r *jsiiProxy_RosEcsBackupPlan) AddDeletionOverride(path *string) {
	if err := r.validateAddDeletionOverrideParameters(path); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDeletionOverride",
		[]interface{}{path},
	)
}

func (r *jsiiProxy_RosEcsBackupPlan) AddDependsOn(target alicloudroscdkcore.RosResource) {
	if err := r.validateAddDependsOnParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDependsOn",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosEcsBackupPlan) AddDesc(desc *string) {
	if err := r.validateAddDescParameters(desc); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDesc",
		[]interface{}{desc},
	)
}

func (r *jsiiProxy_RosEcsBackupPlan) AddMetaData(key *string, value interface{}) {
	if err := r.validateAddMetaDataParameters(key, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addMetaData",
		[]interface{}{key, value},
	)
}

func (r *jsiiProxy_RosEcsBackupPlan) AddOverride(path *string, value interface{}) {
	if err := r.validateAddOverrideParameters(path, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addOverride",
		[]interface{}{path, value},
	)
}

func (r *jsiiProxy_RosEcsBackupPlan) AddPropertyDeletionOverride(propertyPath *string) {
	if err := r.validateAddPropertyDeletionOverrideParameters(propertyPath); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyDeletionOverride",
		[]interface{}{propertyPath},
	)
}

func (r *jsiiProxy_RosEcsBackupPlan) AddPropertyOverride(propertyPath *string, value interface{}) {
	if err := r.validateAddPropertyOverrideParameters(propertyPath, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyOverride",
		[]interface{}{propertyPath, value},
	)
}

func (r *jsiiProxy_RosEcsBackupPlan) AddRosDependency(target *string) {
	if err := r.validateAddRosDependencyParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addRosDependency",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosEcsBackupPlan) ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy, options *alicloudroscdkcore.RemovalPolicyOptions) {
	if err := r.validateApplyRemovalPolicyParameters(options); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"applyRemovalPolicy",
		[]interface{}{policy, options},
	)
}

func (r *jsiiProxy_RosEcsBackupPlan) FetchCondition() alicloudroscdkcore.RosCondition {
	var returns alicloudroscdkcore.RosCondition

	_jsii_.Invoke(
		r,
		"fetchCondition",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosEcsBackupPlan) FetchDesc() *string {
	var returns *string

	_jsii_.Invoke(
		r,
		"fetchDesc",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosEcsBackupPlan) FetchRosDependency() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"fetchRosDependency",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosEcsBackupPlan) GetAtt(attributeName *string) alicloudroscdkcore.Reference {
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

func (r *jsiiProxy_RosEcsBackupPlan) OnPrepare() {
	_jsii_.InvokeVoid(
		r,
		"onPrepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosEcsBackupPlan) OnSynthesize(session constructs.ISynthesisSession) {
	if err := r.validateOnSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"onSynthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosEcsBackupPlan) OnValidate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"onValidate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosEcsBackupPlan) OverrideLogicalId(newLogicalId *string) {
	if err := r.validateOverrideLogicalIdParameters(newLogicalId); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"overrideLogicalId",
		[]interface{}{newLogicalId},
	)
}

func (r *jsiiProxy_RosEcsBackupPlan) Prepare() {
	_jsii_.InvokeVoid(
		r,
		"prepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosEcsBackupPlan) RenderProperties(props *map[string]interface{}) *map[string]interface{} {
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

func (r *jsiiProxy_RosEcsBackupPlan) Synthesize(session alicloudroscdkcore.ISynthesisSession) {
	if err := r.validateSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"synthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosEcsBackupPlan) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		r,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosEcsBackupPlan) Validate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"validate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosEcsBackupPlan) ValidateProperties(_properties interface{}) {
	if err := r.validateValidatePropertiesParameters(_properties); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"validateProperties",
		[]interface{}{_properties},
	)
}

