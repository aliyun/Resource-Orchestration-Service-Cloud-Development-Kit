package alicloudroscdkclickhouse

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkclickhouse/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkclickhouse/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/aws/constructs-go/constructs/v3"
)

// This class is a base encapsulation around the ROS resource type `ALIYUN::ClickHouse::SynDb`, which is used to create a synchronization task for an ApsaraDB for ClickHouse Community-compatible Edition cluster.
type RosSynDb interface {
	alicloudroscdkcore.RosResource
	AttrDbClusterId() alicloudroscdkcore.IResolvable
	AttrRdsId() alicloudroscdkcore.IResolvable
	AttrSynDbs() alicloudroscdkcore.IResolvable
	CkPassword() interface{}
	SetCkPassword(val interface{})
	CkUserName() interface{}
	SetCkUserName(val interface{})
	ClickhousePort() interface{}
	SetClickhousePort(val interface{})
	// Returns: the stack trace of the point where this Resource was created from, sourced
	// from the +metadata+ entry typed +aliyun:ros:logicalId+, and with the bottom-most
	// node +internal+ entries filtered.
	CreationStack() *[]*string
	DbClusterId() interface{}
	SetDbClusterId(val interface{})
	EnableResourcePropertyConstraint() *bool
	SetEnableResourcePropertyConstraint(val *bool)
	LimitUpper() interface{}
	SetLimitUpper(val interface{})
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
	RdsId() interface{}
	SetRdsId(val interface{})
	RdsPassword() interface{}
	SetRdsPassword(val interface{})
	RdsPort() interface{}
	SetRdsPort(val interface{})
	RdsUserName() interface{}
	SetRdsUserName(val interface{})
	RdsVpcId() interface{}
	SetRdsVpcId(val interface{})
	RdsVpcUrl() interface{}
	SetRdsVpcUrl(val interface{})
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
	SkipUnsupported() interface{}
	SetSkipUnsupported(val interface{})
	// The stack in which this element is defined.
	//
	// RosElements must be defined within a stack scope (directly or indirectly).
	Stack() alicloudroscdkcore.Stack
	SynDbTables() interface{}
	SetSynDbTables(val interface{})
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

// The jsii proxy struct for RosSynDb
type jsiiProxy_RosSynDb struct {
	internal.Type__alicloudroscdkcoreRosResource
}

func (j *jsiiProxy_RosSynDb) AttrDbClusterId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDbClusterId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSynDb) AttrRdsId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrRdsId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSynDb) AttrSynDbs() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrSynDbs",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSynDb) CkPassword() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"ckPassword",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSynDb) CkUserName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"ckUserName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSynDb) ClickhousePort() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"clickhousePort",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSynDb) CreationStack() *[]*string {
	var returns *[]*string
	_jsii_.Get(
		j,
		"creationStack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSynDb) DbClusterId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"dbClusterId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSynDb) EnableResourcePropertyConstraint() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"enableResourcePropertyConstraint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSynDb) LimitUpper() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"limitUpper",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSynDb) LogicalId() *string {
	var returns *string
	_jsii_.Get(
		j,
		"logicalId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSynDb) Node() alicloudroscdkcore.ConstructNode {
	var returns alicloudroscdkcore.ConstructNode
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSynDb) RdsId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"rdsId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSynDb) RdsPassword() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"rdsPassword",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSynDb) RdsPort() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"rdsPort",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSynDb) RdsUserName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"rdsUserName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSynDb) RdsVpcId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"rdsVpcId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSynDb) RdsVpcUrl() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"rdsVpcUrl",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSynDb) Ref() *string {
	var returns *string
	_jsii_.Get(
		j,
		"ref",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSynDb) RosOptions() alicloudroscdkcore.IRosResourceOptions {
	var returns alicloudroscdkcore.IRosResourceOptions
	_jsii_.Get(
		j,
		"rosOptions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSynDb) RosProperties() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"rosProperties",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSynDb) RosResourceType() *string {
	var returns *string
	_jsii_.Get(
		j,
		"rosResourceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSynDb) SkipUnsupported() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"skipUnsupported",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSynDb) Stack() alicloudroscdkcore.Stack {
	var returns alicloudroscdkcore.Stack
	_jsii_.Get(
		j,
		"stack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSynDb) SynDbTables() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"synDbTables",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSynDb) UpdatedProperites() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"updatedProperites",
		&returns,
	)
	return returns
}


func NewRosSynDb(scope alicloudroscdkcore.Construct, id *string, props *RosSynDbProps, enableResourcePropertyConstraint *bool) RosSynDb {
	_init_.Initialize()

	if err := validateNewRosSynDbParameters(scope, id, props, enableResourcePropertyConstraint); err != nil {
		panic(err)
	}
	j := jsiiProxy_RosSynDb{}

	_jsii_.Create(
		"@alicloud/ros-cdk-clickhouse.RosSynDb",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		&j,
	)

	return &j
}

func NewRosSynDb_Override(r RosSynDb, scope alicloudroscdkcore.Construct, id *string, props *RosSynDbProps, enableResourcePropertyConstraint *bool) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-clickhouse.RosSynDb",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		r,
	)
}

func (j *jsiiProxy_RosSynDb)SetCkPassword(val interface{}) {
	if err := j.validateSetCkPasswordParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"ckPassword",
		val,
	)
}

func (j *jsiiProxy_RosSynDb)SetCkUserName(val interface{}) {
	if err := j.validateSetCkUserNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"ckUserName",
		val,
	)
}

func (j *jsiiProxy_RosSynDb)SetClickhousePort(val interface{}) {
	if err := j.validateSetClickhousePortParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"clickhousePort",
		val,
	)
}

func (j *jsiiProxy_RosSynDb)SetDbClusterId(val interface{}) {
	if err := j.validateSetDbClusterIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"dbClusterId",
		val,
	)
}

func (j *jsiiProxy_RosSynDb)SetEnableResourcePropertyConstraint(val *bool) {
	if err := j.validateSetEnableResourcePropertyConstraintParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableResourcePropertyConstraint",
		val,
	)
}

func (j *jsiiProxy_RosSynDb)SetLimitUpper(val interface{}) {
	if err := j.validateSetLimitUpperParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"limitUpper",
		val,
	)
}

func (j *jsiiProxy_RosSynDb)SetRdsId(val interface{}) {
	if err := j.validateSetRdsIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"rdsId",
		val,
	)
}

func (j *jsiiProxy_RosSynDb)SetRdsPassword(val interface{}) {
	if err := j.validateSetRdsPasswordParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"rdsPassword",
		val,
	)
}

func (j *jsiiProxy_RosSynDb)SetRdsPort(val interface{}) {
	if err := j.validateSetRdsPortParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"rdsPort",
		val,
	)
}

func (j *jsiiProxy_RosSynDb)SetRdsUserName(val interface{}) {
	if err := j.validateSetRdsUserNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"rdsUserName",
		val,
	)
}

func (j *jsiiProxy_RosSynDb)SetRdsVpcId(val interface{}) {
	if err := j.validateSetRdsVpcIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"rdsVpcId",
		val,
	)
}

func (j *jsiiProxy_RosSynDb)SetRdsVpcUrl(val interface{}) {
	if err := j.validateSetRdsVpcUrlParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"rdsVpcUrl",
		val,
	)
}

func (j *jsiiProxy_RosSynDb)SetSkipUnsupported(val interface{}) {
	if err := j.validateSetSkipUnsupportedParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"skipUnsupported",
		val,
	)
}

func (j *jsiiProxy_RosSynDb)SetSynDbTables(val interface{}) {
	if err := j.validateSetSynDbTablesParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"synDbTables",
		val,
	)
}

// Return whether the given object is a Construct.
func RosSynDb_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosSynDb_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-clickhouse.RosSynDb",
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
func RosSynDb_IsRosElement(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosSynDb_IsRosElementParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-clickhouse.RosSynDb",
		"isRosElement",
		[]interface{}{x},
		&returns,
	)

	return returns
}

// Check whether the given construct is a RosResource.
func RosSynDb_IsRosResource(construct alicloudroscdkcore.IConstruct) *bool {
	_init_.Initialize()

	if err := validateRosSynDb_IsRosResourceParameters(construct); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-clickhouse.RosSynDb",
		"isRosResource",
		[]interface{}{construct},
		&returns,
	)

	return returns
}

func RosSynDb_ROS_RESOURCE_TYPE_NAME() *string {
	_init_.Initialize()
	var returns *string
	_jsii_.StaticGet(
		"@alicloud/ros-cdk-clickhouse.RosSynDb",
		"ROS_RESOURCE_TYPE_NAME",
		&returns,
	)
	return returns
}

func (r *jsiiProxy_RosSynDb) AddCondition(con alicloudroscdkcore.RosCondition) {
	if err := r.validateAddConditionParameters(con); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCondition",
		[]interface{}{con},
	)
}

func (r *jsiiProxy_RosSynDb) AddCount(count interface{}) {
	if err := r.validateAddCountParameters(count); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCount",
		[]interface{}{count},
	)
}

func (r *jsiiProxy_RosSynDb) AddDeletionOverride(path *string) {
	if err := r.validateAddDeletionOverrideParameters(path); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDeletionOverride",
		[]interface{}{path},
	)
}

func (r *jsiiProxy_RosSynDb) AddDependsOn(target alicloudroscdkcore.RosResource) {
	if err := r.validateAddDependsOnParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDependsOn",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosSynDb) AddDesc(desc *string) {
	if err := r.validateAddDescParameters(desc); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDesc",
		[]interface{}{desc},
	)
}

func (r *jsiiProxy_RosSynDb) AddMetaData(key *string, value interface{}) {
	if err := r.validateAddMetaDataParameters(key, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addMetaData",
		[]interface{}{key, value},
	)
}

func (r *jsiiProxy_RosSynDb) AddOverride(path *string, value interface{}) {
	if err := r.validateAddOverrideParameters(path, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addOverride",
		[]interface{}{path, value},
	)
}

func (r *jsiiProxy_RosSynDb) AddPropertyDeletionOverride(propertyPath *string) {
	if err := r.validateAddPropertyDeletionOverrideParameters(propertyPath); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyDeletionOverride",
		[]interface{}{propertyPath},
	)
}

func (r *jsiiProxy_RosSynDb) AddPropertyOverride(propertyPath *string, value interface{}) {
	if err := r.validateAddPropertyOverrideParameters(propertyPath, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyOverride",
		[]interface{}{propertyPath, value},
	)
}

func (r *jsiiProxy_RosSynDb) AddRosDependency(target *string) {
	if err := r.validateAddRosDependencyParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addRosDependency",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosSynDb) ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy, options *alicloudroscdkcore.RemovalPolicyOptions) {
	if err := r.validateApplyRemovalPolicyParameters(options); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"applyRemovalPolicy",
		[]interface{}{policy, options},
	)
}

func (r *jsiiProxy_RosSynDb) GetAtt(attributeName *string) alicloudroscdkcore.Reference {
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

func (r *jsiiProxy_RosSynDb) OnPrepare() {
	_jsii_.InvokeVoid(
		r,
		"onPrepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosSynDb) OnSynthesize(session constructs.ISynthesisSession) {
	if err := r.validateOnSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"onSynthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosSynDb) OnValidate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"onValidate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosSynDb) OverrideLogicalId(newLogicalId *string) {
	if err := r.validateOverrideLogicalIdParameters(newLogicalId); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"overrideLogicalId",
		[]interface{}{newLogicalId},
	)
}

func (r *jsiiProxy_RosSynDb) Prepare() {
	_jsii_.InvokeVoid(
		r,
		"prepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosSynDb) RenderProperties(props *map[string]interface{}) *map[string]interface{} {
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

func (r *jsiiProxy_RosSynDb) Synthesize(session alicloudroscdkcore.ISynthesisSession) {
	if err := r.validateSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"synthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosSynDb) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		r,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosSynDb) Validate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"validate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosSynDb) ValidateProperties(_properties interface{}) {
	if err := r.validateValidatePropertiesParameters(_properties); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"validateProperties",
		[]interface{}{_properties},
	)
}

