package alicloudroscdkemr

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkemr/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkemr/internal"
	"github.com/aws/constructs-go/constructs/v3"
)

// This class is a base encapsulation around the ROS resource type `ALIYUN::EMR::LivyCompute`.
type RosLivyCompute interface {
	alicloudroscdkcore.RosResource
	AttrEndpoint() alicloudroscdkcore.IResolvable
	AttrEndpointInner() alicloudroscdkcore.IResolvable
	AttrLivyComputeId() alicloudroscdkcore.IResolvable
	AttrStatus() alicloudroscdkcore.IResolvable
	AuthType() interface{}
	SetAuthType(val interface{})
	AutoStartConfiguration() interface{}
	SetAutoStartConfiguration(val interface{})
	AutoStopConfiguration() interface{}
	SetAutoStopConfiguration(val interface{})
	CpuLimit() interface{}
	SetCpuLimit(val interface{})
	// Returns: the stack trace of the point where this Resource was created from, sourced
	// from the +metadata+ entry typed +aliyun:ros:logicalId+, and with the bottom-most
	// node +internal+ entries filtered.
	CreationStack() *[]*string
	DisplayReleaseVersion() interface{}
	SetDisplayReleaseVersion(val interface{})
	EnablePublic() interface{}
	SetEnablePublic(val interface{})
	EnableResourcePropertyConstraint() *bool
	SetEnableResourcePropertyConstraint(val *bool)
	EnvironmentId() interface{}
	SetEnvironmentId(val interface{})
	Fusion() interface{}
	SetFusion(val interface{})
	LivyServerConf() interface{}
	SetLivyServerConf(val interface{})
	LivyVersion() interface{}
	SetLivyVersion(val interface{})
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
	MemoryLimit() interface{}
	SetMemoryLimit(val interface{})
	Name() interface{}
	SetName(val interface{})
	NetworkName() interface{}
	SetNetworkName(val interface{})
	// The construct tree node associated with this construct.
	Node() alicloudroscdkcore.ConstructNode
	QueueName() interface{}
	SetQueueName(val interface{})
	// Return a string that will be resolved to a RosTemplate `{ Ref }` for this element.
	//
	// If, by any chance, the intrinsic reference of a resource is not a string, you could
	// coerce it to an IResolvable through `Lazy.any({ produce: resource.ref })`.
	Ref() *string
	ReleaseVersion() interface{}
	SetReleaseVersion(val interface{})
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
	WorkspaceBizId() interface{}
	SetWorkspaceBizId(val interface{})
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

// The jsii proxy struct for RosLivyCompute
type jsiiProxy_RosLivyCompute struct {
	internal.Type__alicloudroscdkcoreRosResource
}

func (j *jsiiProxy_RosLivyCompute) AttrEndpoint() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrEndpoint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLivyCompute) AttrEndpointInner() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrEndpointInner",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLivyCompute) AttrLivyComputeId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrLivyComputeId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLivyCompute) AttrStatus() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrStatus",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLivyCompute) AuthType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"authType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLivyCompute) AutoStartConfiguration() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"autoStartConfiguration",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLivyCompute) AutoStopConfiguration() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"autoStopConfiguration",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLivyCompute) CpuLimit() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"cpuLimit",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLivyCompute) CreationStack() *[]*string {
	var returns *[]*string
	_jsii_.Get(
		j,
		"creationStack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLivyCompute) DisplayReleaseVersion() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"displayReleaseVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLivyCompute) EnablePublic() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"enablePublic",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLivyCompute) EnableResourcePropertyConstraint() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"enableResourcePropertyConstraint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLivyCompute) EnvironmentId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"environmentId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLivyCompute) Fusion() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"fusion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLivyCompute) LivyServerConf() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"livyServerConf",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLivyCompute) LivyVersion() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"livyVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLivyCompute) LogicalId() *string {
	var returns *string
	_jsii_.Get(
		j,
		"logicalId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLivyCompute) MemoryLimit() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"memoryLimit",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLivyCompute) Name() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"name",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLivyCompute) NetworkName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"networkName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLivyCompute) Node() alicloudroscdkcore.ConstructNode {
	var returns alicloudroscdkcore.ConstructNode
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLivyCompute) QueueName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"queueName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLivyCompute) Ref() *string {
	var returns *string
	_jsii_.Get(
		j,
		"ref",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLivyCompute) ReleaseVersion() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"releaseVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLivyCompute) RosOptions() alicloudroscdkcore.IRosResourceOptions {
	var returns alicloudroscdkcore.IRosResourceOptions
	_jsii_.Get(
		j,
		"rosOptions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLivyCompute) RosProperties() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"rosProperties",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLivyCompute) RosResourceType() *string {
	var returns *string
	_jsii_.Get(
		j,
		"rosResourceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLivyCompute) Stack() alicloudroscdkcore.Stack {
	var returns alicloudroscdkcore.Stack
	_jsii_.Get(
		j,
		"stack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLivyCompute) UpdatedProperites() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"updatedProperites",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLivyCompute) WorkspaceBizId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"workspaceBizId",
		&returns,
	)
	return returns
}


func NewRosLivyCompute(scope alicloudroscdkcore.Construct, id *string, props *RosLivyComputeProps, enableResourcePropertyConstraint *bool) RosLivyCompute {
	_init_.Initialize()

	if err := validateNewRosLivyComputeParameters(scope, id, props, enableResourcePropertyConstraint); err != nil {
		panic(err)
	}
	j := jsiiProxy_RosLivyCompute{}

	_jsii_.Create(
		"@alicloud/ros-cdk-emr.RosLivyCompute",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		&j,
	)

	return &j
}

func NewRosLivyCompute_Override(r RosLivyCompute, scope alicloudroscdkcore.Construct, id *string, props *RosLivyComputeProps, enableResourcePropertyConstraint *bool) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-emr.RosLivyCompute",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		r,
	)
}

func (j *jsiiProxy_RosLivyCompute)SetAuthType(val interface{}) {
	if err := j.validateSetAuthTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"authType",
		val,
	)
}

func (j *jsiiProxy_RosLivyCompute)SetAutoStartConfiguration(val interface{}) {
	if err := j.validateSetAutoStartConfigurationParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"autoStartConfiguration",
		val,
	)
}

func (j *jsiiProxy_RosLivyCompute)SetAutoStopConfiguration(val interface{}) {
	if err := j.validateSetAutoStopConfigurationParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"autoStopConfiguration",
		val,
	)
}

func (j *jsiiProxy_RosLivyCompute)SetCpuLimit(val interface{}) {
	if err := j.validateSetCpuLimitParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"cpuLimit",
		val,
	)
}

func (j *jsiiProxy_RosLivyCompute)SetDisplayReleaseVersion(val interface{}) {
	if err := j.validateSetDisplayReleaseVersionParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"displayReleaseVersion",
		val,
	)
}

func (j *jsiiProxy_RosLivyCompute)SetEnablePublic(val interface{}) {
	if err := j.validateSetEnablePublicParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enablePublic",
		val,
	)
}

func (j *jsiiProxy_RosLivyCompute)SetEnableResourcePropertyConstraint(val *bool) {
	if err := j.validateSetEnableResourcePropertyConstraintParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableResourcePropertyConstraint",
		val,
	)
}

func (j *jsiiProxy_RosLivyCompute)SetEnvironmentId(val interface{}) {
	if err := j.validateSetEnvironmentIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"environmentId",
		val,
	)
}

func (j *jsiiProxy_RosLivyCompute)SetFusion(val interface{}) {
	if err := j.validateSetFusionParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"fusion",
		val,
	)
}

func (j *jsiiProxy_RosLivyCompute)SetLivyServerConf(val interface{}) {
	if err := j.validateSetLivyServerConfParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"livyServerConf",
		val,
	)
}

func (j *jsiiProxy_RosLivyCompute)SetLivyVersion(val interface{}) {
	if err := j.validateSetLivyVersionParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"livyVersion",
		val,
	)
}

func (j *jsiiProxy_RosLivyCompute)SetMemoryLimit(val interface{}) {
	if err := j.validateSetMemoryLimitParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"memoryLimit",
		val,
	)
}

func (j *jsiiProxy_RosLivyCompute)SetName(val interface{}) {
	if err := j.validateSetNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"name",
		val,
	)
}

func (j *jsiiProxy_RosLivyCompute)SetNetworkName(val interface{}) {
	if err := j.validateSetNetworkNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"networkName",
		val,
	)
}

func (j *jsiiProxy_RosLivyCompute)SetQueueName(val interface{}) {
	if err := j.validateSetQueueNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"queueName",
		val,
	)
}

func (j *jsiiProxy_RosLivyCompute)SetReleaseVersion(val interface{}) {
	if err := j.validateSetReleaseVersionParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"releaseVersion",
		val,
	)
}

func (j *jsiiProxy_RosLivyCompute)SetWorkspaceBizId(val interface{}) {
	if err := j.validateSetWorkspaceBizIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"workspaceBizId",
		val,
	)
}

// Return whether the given object is a Construct.
func RosLivyCompute_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosLivyCompute_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-emr.RosLivyCompute",
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
func RosLivyCompute_IsRosElement(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosLivyCompute_IsRosElementParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-emr.RosLivyCompute",
		"isRosElement",
		[]interface{}{x},
		&returns,
	)

	return returns
}

// Check whether the given construct is a RosResource.
func RosLivyCompute_IsRosResource(construct alicloudroscdkcore.IConstruct) *bool {
	_init_.Initialize()

	if err := validateRosLivyCompute_IsRosResourceParameters(construct); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-emr.RosLivyCompute",
		"isRosResource",
		[]interface{}{construct},
		&returns,
	)

	return returns
}

func RosLivyCompute_ROS_RESOURCE_TYPE_NAME() *string {
	_init_.Initialize()
	var returns *string
	_jsii_.StaticGet(
		"@alicloud/ros-cdk-emr.RosLivyCompute",
		"ROS_RESOURCE_TYPE_NAME",
		&returns,
	)
	return returns
}

func (r *jsiiProxy_RosLivyCompute) AddCondition(con alicloudroscdkcore.RosCondition) {
	if err := r.validateAddConditionParameters(con); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCondition",
		[]interface{}{con},
	)
}

func (r *jsiiProxy_RosLivyCompute) AddCount(count interface{}) {
	if err := r.validateAddCountParameters(count); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCount",
		[]interface{}{count},
	)
}

func (r *jsiiProxy_RosLivyCompute) AddDeletionOverride(path *string) {
	if err := r.validateAddDeletionOverrideParameters(path); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDeletionOverride",
		[]interface{}{path},
	)
}

func (r *jsiiProxy_RosLivyCompute) AddDependsOn(target alicloudroscdkcore.RosResource) {
	if err := r.validateAddDependsOnParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDependsOn",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosLivyCompute) AddDesc(desc *string) {
	if err := r.validateAddDescParameters(desc); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDesc",
		[]interface{}{desc},
	)
}

func (r *jsiiProxy_RosLivyCompute) AddMetaData(key *string, value interface{}) {
	if err := r.validateAddMetaDataParameters(key, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addMetaData",
		[]interface{}{key, value},
	)
}

func (r *jsiiProxy_RosLivyCompute) AddOverride(path *string, value interface{}) {
	if err := r.validateAddOverrideParameters(path, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addOverride",
		[]interface{}{path, value},
	)
}

func (r *jsiiProxy_RosLivyCompute) AddPropertyDeletionOverride(propertyPath *string) {
	if err := r.validateAddPropertyDeletionOverrideParameters(propertyPath); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyDeletionOverride",
		[]interface{}{propertyPath},
	)
}

func (r *jsiiProxy_RosLivyCompute) AddPropertyOverride(propertyPath *string, value interface{}) {
	if err := r.validateAddPropertyOverrideParameters(propertyPath, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyOverride",
		[]interface{}{propertyPath, value},
	)
}

func (r *jsiiProxy_RosLivyCompute) AddRosDependency(target *string) {
	if err := r.validateAddRosDependencyParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addRosDependency",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosLivyCompute) ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy, options *alicloudroscdkcore.RemovalPolicyOptions) {
	if err := r.validateApplyRemovalPolicyParameters(options); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"applyRemovalPolicy",
		[]interface{}{policy, options},
	)
}

func (r *jsiiProxy_RosLivyCompute) FetchCondition() alicloudroscdkcore.RosCondition {
	var returns alicloudroscdkcore.RosCondition

	_jsii_.Invoke(
		r,
		"fetchCondition",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosLivyCompute) FetchDesc() *string {
	var returns *string

	_jsii_.Invoke(
		r,
		"fetchDesc",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosLivyCompute) FetchRosDependency() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"fetchRosDependency",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosLivyCompute) GetAtt(attributeName *string) alicloudroscdkcore.Reference {
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

func (r *jsiiProxy_RosLivyCompute) OnPrepare() {
	_jsii_.InvokeVoid(
		r,
		"onPrepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosLivyCompute) OnSynthesize(session constructs.ISynthesisSession) {
	if err := r.validateOnSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"onSynthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosLivyCompute) OnValidate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"onValidate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosLivyCompute) OverrideLogicalId(newLogicalId *string) {
	if err := r.validateOverrideLogicalIdParameters(newLogicalId); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"overrideLogicalId",
		[]interface{}{newLogicalId},
	)
}

func (r *jsiiProxy_RosLivyCompute) Prepare() {
	_jsii_.InvokeVoid(
		r,
		"prepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosLivyCompute) RenderProperties(props *map[string]interface{}) *map[string]interface{} {
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

func (r *jsiiProxy_RosLivyCompute) Synthesize(session alicloudroscdkcore.ISynthesisSession) {
	if err := r.validateSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"synthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosLivyCompute) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		r,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosLivyCompute) Validate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"validate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosLivyCompute) ValidateProperties(_properties interface{}) {
	if err := r.validateValidatePropertiesParameters(_properties); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"validateProperties",
		[]interface{}{_properties},
	)
}

