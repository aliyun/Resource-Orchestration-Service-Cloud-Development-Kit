package alicloudroscdkdns

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkdns/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkdns/internal"
	"github.com/aws/constructs-go/constructs/v3"
)

// This class is a base encapsulation around the ROS resource type `ALIYUN::DNS::AccessStrategy`.
type RosAccessStrategy interface {
	alicloudroscdkcore.RosResource
	AccessMode() interface{}
	SetAccessMode(val interface{})
	AttrStrategyId() alicloudroscdkcore.IResolvable
	// Returns: the stack trace of the point where this Resource was created from, sourced
	// from the +metadata+ entry typed +aliyun:ros:logicalId+, and with the bottom-most
	// node +internal+ entries filtered.
	CreationStack() *[]*string
	DefaultAddrPool() interface{}
	SetDefaultAddrPool(val interface{})
	DefaultAddrPoolType() interface{}
	SetDefaultAddrPoolType(val interface{})
	DefaultLatencyOptimization() interface{}
	SetDefaultLatencyOptimization(val interface{})
	DefaultLbaStrategy() interface{}
	SetDefaultLbaStrategy(val interface{})
	DefaultMaxReturnAddrNum() interface{}
	SetDefaultMaxReturnAddrNum(val interface{})
	DefaultMinAvailableAddrNum() interface{}
	SetDefaultMinAvailableAddrNum(val interface{})
	EnableResourcePropertyConstraint() *bool
	SetEnableResourcePropertyConstraint(val *bool)
	FailoverAddrPool() interface{}
	SetFailoverAddrPool(val interface{})
	FailoverAddrPoolType() interface{}
	SetFailoverAddrPoolType(val interface{})
	FailoverLatencyOptimization() interface{}
	SetFailoverLatencyOptimization(val interface{})
	FailoverLbaStrategy() interface{}
	SetFailoverLbaStrategy(val interface{})
	FailoverMaxReturnAddrNum() interface{}
	SetFailoverMaxReturnAddrNum(val interface{})
	FailoverMinAvailableAddrNum() interface{}
	SetFailoverMinAvailableAddrNum(val interface{})
	InstanceId() interface{}
	SetInstanceId(val interface{})
	Lines() interface{}
	SetLines(val interface{})
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
	// The stack in which this element is defined.
	//
	// RosElements must be defined within a stack scope (directly or indirectly).
	Stack() alicloudroscdkcore.Stack
	StrategyMode() interface{}
	SetStrategyMode(val interface{})
	StrategyName() interface{}
	SetStrategyName(val interface{})
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

// The jsii proxy struct for RosAccessStrategy
type jsiiProxy_RosAccessStrategy struct {
	internal.Type__alicloudroscdkcoreRosResource
}

func (j *jsiiProxy_RosAccessStrategy) AccessMode() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"accessMode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosAccessStrategy) AttrStrategyId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrStrategyId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosAccessStrategy) CreationStack() *[]*string {
	var returns *[]*string
	_jsii_.Get(
		j,
		"creationStack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosAccessStrategy) DefaultAddrPool() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"defaultAddrPool",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosAccessStrategy) DefaultAddrPoolType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"defaultAddrPoolType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosAccessStrategy) DefaultLatencyOptimization() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"defaultLatencyOptimization",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosAccessStrategy) DefaultLbaStrategy() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"defaultLbaStrategy",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosAccessStrategy) DefaultMaxReturnAddrNum() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"defaultMaxReturnAddrNum",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosAccessStrategy) DefaultMinAvailableAddrNum() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"defaultMinAvailableAddrNum",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosAccessStrategy) EnableResourcePropertyConstraint() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"enableResourcePropertyConstraint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosAccessStrategy) FailoverAddrPool() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"failoverAddrPool",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosAccessStrategy) FailoverAddrPoolType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"failoverAddrPoolType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosAccessStrategy) FailoverLatencyOptimization() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"failoverLatencyOptimization",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosAccessStrategy) FailoverLbaStrategy() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"failoverLbaStrategy",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosAccessStrategy) FailoverMaxReturnAddrNum() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"failoverMaxReturnAddrNum",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosAccessStrategy) FailoverMinAvailableAddrNum() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"failoverMinAvailableAddrNum",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosAccessStrategy) InstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"instanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosAccessStrategy) Lines() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"lines",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosAccessStrategy) LogicalId() *string {
	var returns *string
	_jsii_.Get(
		j,
		"logicalId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosAccessStrategy) Node() alicloudroscdkcore.ConstructNode {
	var returns alicloudroscdkcore.ConstructNode
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosAccessStrategy) Ref() *string {
	var returns *string
	_jsii_.Get(
		j,
		"ref",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosAccessStrategy) RosOptions() alicloudroscdkcore.IRosResourceOptions {
	var returns alicloudroscdkcore.IRosResourceOptions
	_jsii_.Get(
		j,
		"rosOptions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosAccessStrategy) RosProperties() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"rosProperties",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosAccessStrategy) RosResourceType() *string {
	var returns *string
	_jsii_.Get(
		j,
		"rosResourceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosAccessStrategy) Stack() alicloudroscdkcore.Stack {
	var returns alicloudroscdkcore.Stack
	_jsii_.Get(
		j,
		"stack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosAccessStrategy) StrategyMode() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"strategyMode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosAccessStrategy) StrategyName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"strategyName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosAccessStrategy) UpdatedProperites() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"updatedProperites",
		&returns,
	)
	return returns
}


func NewRosAccessStrategy(scope alicloudroscdkcore.Construct, id *string, props *RosAccessStrategyProps, enableResourcePropertyConstraint *bool) RosAccessStrategy {
	_init_.Initialize()

	if err := validateNewRosAccessStrategyParameters(scope, id, props, enableResourcePropertyConstraint); err != nil {
		panic(err)
	}
	j := jsiiProxy_RosAccessStrategy{}

	_jsii_.Create(
		"@alicloud/ros-cdk-dns.RosAccessStrategy",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		&j,
	)

	return &j
}

func NewRosAccessStrategy_Override(r RosAccessStrategy, scope alicloudroscdkcore.Construct, id *string, props *RosAccessStrategyProps, enableResourcePropertyConstraint *bool) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-dns.RosAccessStrategy",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		r,
	)
}

func (j *jsiiProxy_RosAccessStrategy)SetAccessMode(val interface{}) {
	if err := j.validateSetAccessModeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"accessMode",
		val,
	)
}

func (j *jsiiProxy_RosAccessStrategy)SetDefaultAddrPool(val interface{}) {
	if err := j.validateSetDefaultAddrPoolParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"defaultAddrPool",
		val,
	)
}

func (j *jsiiProxy_RosAccessStrategy)SetDefaultAddrPoolType(val interface{}) {
	if err := j.validateSetDefaultAddrPoolTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"defaultAddrPoolType",
		val,
	)
}

func (j *jsiiProxy_RosAccessStrategy)SetDefaultLatencyOptimization(val interface{}) {
	if err := j.validateSetDefaultLatencyOptimizationParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"defaultLatencyOptimization",
		val,
	)
}

func (j *jsiiProxy_RosAccessStrategy)SetDefaultLbaStrategy(val interface{}) {
	if err := j.validateSetDefaultLbaStrategyParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"defaultLbaStrategy",
		val,
	)
}

func (j *jsiiProxy_RosAccessStrategy)SetDefaultMaxReturnAddrNum(val interface{}) {
	if err := j.validateSetDefaultMaxReturnAddrNumParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"defaultMaxReturnAddrNum",
		val,
	)
}

func (j *jsiiProxy_RosAccessStrategy)SetDefaultMinAvailableAddrNum(val interface{}) {
	if err := j.validateSetDefaultMinAvailableAddrNumParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"defaultMinAvailableAddrNum",
		val,
	)
}

func (j *jsiiProxy_RosAccessStrategy)SetEnableResourcePropertyConstraint(val *bool) {
	if err := j.validateSetEnableResourcePropertyConstraintParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableResourcePropertyConstraint",
		val,
	)
}

func (j *jsiiProxy_RosAccessStrategy)SetFailoverAddrPool(val interface{}) {
	if err := j.validateSetFailoverAddrPoolParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"failoverAddrPool",
		val,
	)
}

func (j *jsiiProxy_RosAccessStrategy)SetFailoverAddrPoolType(val interface{}) {
	if err := j.validateSetFailoverAddrPoolTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"failoverAddrPoolType",
		val,
	)
}

func (j *jsiiProxy_RosAccessStrategy)SetFailoverLatencyOptimization(val interface{}) {
	if err := j.validateSetFailoverLatencyOptimizationParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"failoverLatencyOptimization",
		val,
	)
}

func (j *jsiiProxy_RosAccessStrategy)SetFailoverLbaStrategy(val interface{}) {
	if err := j.validateSetFailoverLbaStrategyParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"failoverLbaStrategy",
		val,
	)
}

func (j *jsiiProxy_RosAccessStrategy)SetFailoverMaxReturnAddrNum(val interface{}) {
	if err := j.validateSetFailoverMaxReturnAddrNumParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"failoverMaxReturnAddrNum",
		val,
	)
}

func (j *jsiiProxy_RosAccessStrategy)SetFailoverMinAvailableAddrNum(val interface{}) {
	if err := j.validateSetFailoverMinAvailableAddrNumParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"failoverMinAvailableAddrNum",
		val,
	)
}

func (j *jsiiProxy_RosAccessStrategy)SetInstanceId(val interface{}) {
	if err := j.validateSetInstanceIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"instanceId",
		val,
	)
}

func (j *jsiiProxy_RosAccessStrategy)SetLines(val interface{}) {
	if err := j.validateSetLinesParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"lines",
		val,
	)
}

func (j *jsiiProxy_RosAccessStrategy)SetStrategyMode(val interface{}) {
	if err := j.validateSetStrategyModeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"strategyMode",
		val,
	)
}

func (j *jsiiProxy_RosAccessStrategy)SetStrategyName(val interface{}) {
	if err := j.validateSetStrategyNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"strategyName",
		val,
	)
}

// Return whether the given object is a Construct.
func RosAccessStrategy_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosAccessStrategy_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-dns.RosAccessStrategy",
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
func RosAccessStrategy_IsRosElement(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosAccessStrategy_IsRosElementParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-dns.RosAccessStrategy",
		"isRosElement",
		[]interface{}{x},
		&returns,
	)

	return returns
}

// Check whether the given construct is a RosResource.
func RosAccessStrategy_IsRosResource(construct alicloudroscdkcore.IConstruct) *bool {
	_init_.Initialize()

	if err := validateRosAccessStrategy_IsRosResourceParameters(construct); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-dns.RosAccessStrategy",
		"isRosResource",
		[]interface{}{construct},
		&returns,
	)

	return returns
}

func RosAccessStrategy_ROS_RESOURCE_TYPE_NAME() *string {
	_init_.Initialize()
	var returns *string
	_jsii_.StaticGet(
		"@alicloud/ros-cdk-dns.RosAccessStrategy",
		"ROS_RESOURCE_TYPE_NAME",
		&returns,
	)
	return returns
}

func (r *jsiiProxy_RosAccessStrategy) AddCondition(con alicloudroscdkcore.RosCondition) {
	if err := r.validateAddConditionParameters(con); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCondition",
		[]interface{}{con},
	)
}

func (r *jsiiProxy_RosAccessStrategy) AddCount(count interface{}) {
	if err := r.validateAddCountParameters(count); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCount",
		[]interface{}{count},
	)
}

func (r *jsiiProxy_RosAccessStrategy) AddDeletionOverride(path *string) {
	if err := r.validateAddDeletionOverrideParameters(path); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDeletionOverride",
		[]interface{}{path},
	)
}

func (r *jsiiProxy_RosAccessStrategy) AddDependsOn(target alicloudroscdkcore.RosResource) {
	if err := r.validateAddDependsOnParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDependsOn",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosAccessStrategy) AddDesc(desc *string) {
	if err := r.validateAddDescParameters(desc); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDesc",
		[]interface{}{desc},
	)
}

func (r *jsiiProxy_RosAccessStrategy) AddMetaData(key *string, value interface{}) {
	if err := r.validateAddMetaDataParameters(key, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addMetaData",
		[]interface{}{key, value},
	)
}

func (r *jsiiProxy_RosAccessStrategy) AddOverride(path *string, value interface{}) {
	if err := r.validateAddOverrideParameters(path, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addOverride",
		[]interface{}{path, value},
	)
}

func (r *jsiiProxy_RosAccessStrategy) AddPropertyDeletionOverride(propertyPath *string) {
	if err := r.validateAddPropertyDeletionOverrideParameters(propertyPath); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyDeletionOverride",
		[]interface{}{propertyPath},
	)
}

func (r *jsiiProxy_RosAccessStrategy) AddPropertyOverride(propertyPath *string, value interface{}) {
	if err := r.validateAddPropertyOverrideParameters(propertyPath, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyOverride",
		[]interface{}{propertyPath, value},
	)
}

func (r *jsiiProxy_RosAccessStrategy) AddRosDependency(target *string) {
	if err := r.validateAddRosDependencyParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addRosDependency",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosAccessStrategy) ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy, options *alicloudroscdkcore.RemovalPolicyOptions) {
	if err := r.validateApplyRemovalPolicyParameters(options); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"applyRemovalPolicy",
		[]interface{}{policy, options},
	)
}

func (r *jsiiProxy_RosAccessStrategy) FetchCondition() alicloudroscdkcore.RosCondition {
	var returns alicloudroscdkcore.RosCondition

	_jsii_.Invoke(
		r,
		"fetchCondition",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosAccessStrategy) FetchDesc() *string {
	var returns *string

	_jsii_.Invoke(
		r,
		"fetchDesc",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosAccessStrategy) FetchRosDependency() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"fetchRosDependency",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosAccessStrategy) GetAtt(attributeName *string) alicloudroscdkcore.Reference {
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

func (r *jsiiProxy_RosAccessStrategy) OnPrepare() {
	_jsii_.InvokeVoid(
		r,
		"onPrepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosAccessStrategy) OnSynthesize(session constructs.ISynthesisSession) {
	if err := r.validateOnSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"onSynthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosAccessStrategy) OnValidate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"onValidate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosAccessStrategy) OverrideLogicalId(newLogicalId *string) {
	if err := r.validateOverrideLogicalIdParameters(newLogicalId); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"overrideLogicalId",
		[]interface{}{newLogicalId},
	)
}

func (r *jsiiProxy_RosAccessStrategy) Prepare() {
	_jsii_.InvokeVoid(
		r,
		"prepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosAccessStrategy) RenderProperties(props *map[string]interface{}) *map[string]interface{} {
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

func (r *jsiiProxy_RosAccessStrategy) Synthesize(session alicloudroscdkcore.ISynthesisSession) {
	if err := r.validateSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"synthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosAccessStrategy) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		r,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosAccessStrategy) Validate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"validate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosAccessStrategy) ValidateProperties(_properties interface{}) {
	if err := r.validateValidatePropertiesParameters(_properties); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"validateProperties",
		[]interface{}{_properties},
	)
}

