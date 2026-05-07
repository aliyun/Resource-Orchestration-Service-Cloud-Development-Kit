package alicloudroscdkcms2

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkcms2/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcms2/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/aws/constructs-go/constructs/v3"
)

// This class is a base encapsulation around the ROS resource type `ALIYUN::CMS2::PrometheusInstance`.
type RosPrometheusInstance interface {
	alicloudroscdkcore.RosResource
	ArchiveDuration() interface{}
	SetArchiveDuration(val interface{})
	AttrHttpApiInterUrl() alicloudroscdkcore.IResolvable
	AttrHttpApiIntraUrl() alicloudroscdkcore.IResolvable
	AttrPrometheusInstanceId() alicloudroscdkcore.IResolvable
	AttrPushGatewayInterUrl() alicloudroscdkcore.IResolvable
	AttrPushGatewayIntraUrl() alicloudroscdkcore.IResolvable
	AttrRemoteReadInterUrl() alicloudroscdkcore.IResolvable
	AttrRemoteReadIntraUrl() alicloudroscdkcore.IResolvable
	AttrRemoteWriteInterUrl() alicloudroscdkcore.IResolvable
	AttrRemoteWriteIntraUrl() alicloudroscdkcore.IResolvable
	AuthFreeReadPolicy() interface{}
	SetAuthFreeReadPolicy(val interface{})
	AuthFreeWritePolicy() interface{}
	SetAuthFreeWritePolicy(val interface{})
	BasicMetricQueryLimit() interface{}
	SetBasicMetricQueryLimit(val interface{})
	// Returns: the stack trace of the point where this Resource was created from, sourced
	// from the +metadata+ entry typed +aliyun:ros:logicalId+, and with the bottom-most
	// node +internal+ entries filtered.
	CreationStack() *[]*string
	EnableAuthFreeRead() interface{}
	SetEnableAuthFreeRead(val interface{})
	EnableAuthFreeWrite() interface{}
	SetEnableAuthFreeWrite(val interface{})
	EnableAuthToken() interface{}
	SetEnableAuthToken(val interface{})
	EnableResourcePropertyConstraint() *bool
	SetEnableResourcePropertyConstraint(val *bool)
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
	PaymentType() interface{}
	SetPaymentType(val interface{})
	PrometheusInstanceName() interface{}
	SetPrometheusInstanceName(val interface{})
	// Return a string that will be resolved to a RosTemplate `{ Ref }` for this element.
	//
	// If, by any chance, the intrinsic reference of a resource is not a string, you could
	// coerce it to an IResolvable through `Lazy.any({ produce: resource.ref })`.
	Ref() *string
	ResourceGroupId() interface{}
	SetResourceGroupId(val interface{})
	// Options for this resource, such as condition, update policy etc.
	RosOptions() alicloudroscdkcore.IRosResourceOptions
	RosProperties() *map[string]interface{}
	// ROS resource type.
	RosResourceType() *string
	// The stack in which this element is defined.
	//
	// RosElements must be defined within a stack scope (directly or indirectly).
	Stack() alicloudroscdkcore.Stack
	Status() interface{}
	SetStatus(val interface{})
	StorageDuration() interface{}
	SetStorageDuration(val interface{})
	// Return properties modified after initiation.
	//
	// Resources that expose mutable properties should override this function to
	// collect and return the properties object for this resource.
	UpdatedProperites() *map[string]interface{}
	Workspace() interface{}
	SetWorkspace(val interface{})
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

// The jsii proxy struct for RosPrometheusInstance
type jsiiProxy_RosPrometheusInstance struct {
	internal.Type__alicloudroscdkcoreRosResource
}

func (j *jsiiProxy_RosPrometheusInstance) ArchiveDuration() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"archiveDuration",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosPrometheusInstance) AttrHttpApiInterUrl() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrHttpApiInterUrl",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosPrometheusInstance) AttrHttpApiIntraUrl() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrHttpApiIntraUrl",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosPrometheusInstance) AttrPrometheusInstanceId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrPrometheusInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosPrometheusInstance) AttrPushGatewayInterUrl() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrPushGatewayInterUrl",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosPrometheusInstance) AttrPushGatewayIntraUrl() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrPushGatewayIntraUrl",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosPrometheusInstance) AttrRemoteReadInterUrl() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrRemoteReadInterUrl",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosPrometheusInstance) AttrRemoteReadIntraUrl() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrRemoteReadIntraUrl",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosPrometheusInstance) AttrRemoteWriteInterUrl() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrRemoteWriteInterUrl",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosPrometheusInstance) AttrRemoteWriteIntraUrl() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrRemoteWriteIntraUrl",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosPrometheusInstance) AuthFreeReadPolicy() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"authFreeReadPolicy",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosPrometheusInstance) AuthFreeWritePolicy() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"authFreeWritePolicy",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosPrometheusInstance) BasicMetricQueryLimit() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"basicMetricQueryLimit",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosPrometheusInstance) CreationStack() *[]*string {
	var returns *[]*string
	_jsii_.Get(
		j,
		"creationStack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosPrometheusInstance) EnableAuthFreeRead() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"enableAuthFreeRead",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosPrometheusInstance) EnableAuthFreeWrite() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"enableAuthFreeWrite",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosPrometheusInstance) EnableAuthToken() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"enableAuthToken",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosPrometheusInstance) EnableResourcePropertyConstraint() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"enableResourcePropertyConstraint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosPrometheusInstance) LogicalId() *string {
	var returns *string
	_jsii_.Get(
		j,
		"logicalId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosPrometheusInstance) Node() alicloudroscdkcore.ConstructNode {
	var returns alicloudroscdkcore.ConstructNode
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosPrometheusInstance) PaymentType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"paymentType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosPrometheusInstance) PrometheusInstanceName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"prometheusInstanceName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosPrometheusInstance) Ref() *string {
	var returns *string
	_jsii_.Get(
		j,
		"ref",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosPrometheusInstance) ResourceGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"resourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosPrometheusInstance) RosOptions() alicloudroscdkcore.IRosResourceOptions {
	var returns alicloudroscdkcore.IRosResourceOptions
	_jsii_.Get(
		j,
		"rosOptions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosPrometheusInstance) RosProperties() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"rosProperties",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosPrometheusInstance) RosResourceType() *string {
	var returns *string
	_jsii_.Get(
		j,
		"rosResourceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosPrometheusInstance) Stack() alicloudroscdkcore.Stack {
	var returns alicloudroscdkcore.Stack
	_jsii_.Get(
		j,
		"stack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosPrometheusInstance) Status() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"status",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosPrometheusInstance) StorageDuration() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"storageDuration",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosPrometheusInstance) UpdatedProperites() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"updatedProperites",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosPrometheusInstance) Workspace() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"workspace",
		&returns,
	)
	return returns
}


func NewRosPrometheusInstance(scope alicloudroscdkcore.Construct, id *string, props *RosPrometheusInstanceProps, enableResourcePropertyConstraint *bool) RosPrometheusInstance {
	_init_.Initialize()

	if err := validateNewRosPrometheusInstanceParameters(scope, id, props, enableResourcePropertyConstraint); err != nil {
		panic(err)
	}
	j := jsiiProxy_RosPrometheusInstance{}

	_jsii_.Create(
		"@alicloud/ros-cdk-cms2.RosPrometheusInstance",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		&j,
	)

	return &j
}

func NewRosPrometheusInstance_Override(r RosPrometheusInstance, scope alicloudroscdkcore.Construct, id *string, props *RosPrometheusInstanceProps, enableResourcePropertyConstraint *bool) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-cms2.RosPrometheusInstance",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		r,
	)
}

func (j *jsiiProxy_RosPrometheusInstance)SetArchiveDuration(val interface{}) {
	if err := j.validateSetArchiveDurationParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"archiveDuration",
		val,
	)
}

func (j *jsiiProxy_RosPrometheusInstance)SetAuthFreeReadPolicy(val interface{}) {
	if err := j.validateSetAuthFreeReadPolicyParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"authFreeReadPolicy",
		val,
	)
}

func (j *jsiiProxy_RosPrometheusInstance)SetAuthFreeWritePolicy(val interface{}) {
	if err := j.validateSetAuthFreeWritePolicyParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"authFreeWritePolicy",
		val,
	)
}

func (j *jsiiProxy_RosPrometheusInstance)SetBasicMetricQueryLimit(val interface{}) {
	if err := j.validateSetBasicMetricQueryLimitParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"basicMetricQueryLimit",
		val,
	)
}

func (j *jsiiProxy_RosPrometheusInstance)SetEnableAuthFreeRead(val interface{}) {
	if err := j.validateSetEnableAuthFreeReadParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableAuthFreeRead",
		val,
	)
}

func (j *jsiiProxy_RosPrometheusInstance)SetEnableAuthFreeWrite(val interface{}) {
	if err := j.validateSetEnableAuthFreeWriteParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableAuthFreeWrite",
		val,
	)
}

func (j *jsiiProxy_RosPrometheusInstance)SetEnableAuthToken(val interface{}) {
	if err := j.validateSetEnableAuthTokenParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableAuthToken",
		val,
	)
}

func (j *jsiiProxy_RosPrometheusInstance)SetEnableResourcePropertyConstraint(val *bool) {
	if err := j.validateSetEnableResourcePropertyConstraintParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableResourcePropertyConstraint",
		val,
	)
}

func (j *jsiiProxy_RosPrometheusInstance)SetPaymentType(val interface{}) {
	if err := j.validateSetPaymentTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"paymentType",
		val,
	)
}

func (j *jsiiProxy_RosPrometheusInstance)SetPrometheusInstanceName(val interface{}) {
	if err := j.validateSetPrometheusInstanceNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"prometheusInstanceName",
		val,
	)
}

func (j *jsiiProxy_RosPrometheusInstance)SetResourceGroupId(val interface{}) {
	if err := j.validateSetResourceGroupIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"resourceGroupId",
		val,
	)
}

func (j *jsiiProxy_RosPrometheusInstance)SetStatus(val interface{}) {
	if err := j.validateSetStatusParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"status",
		val,
	)
}

func (j *jsiiProxy_RosPrometheusInstance)SetStorageDuration(val interface{}) {
	if err := j.validateSetStorageDurationParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"storageDuration",
		val,
	)
}

func (j *jsiiProxy_RosPrometheusInstance)SetWorkspace(val interface{}) {
	if err := j.validateSetWorkspaceParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"workspace",
		val,
	)
}

// Return whether the given object is a Construct.
func RosPrometheusInstance_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosPrometheusInstance_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-cms2.RosPrometheusInstance",
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
func RosPrometheusInstance_IsRosElement(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosPrometheusInstance_IsRosElementParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-cms2.RosPrometheusInstance",
		"isRosElement",
		[]interface{}{x},
		&returns,
	)

	return returns
}

// Check whether the given construct is a RosResource.
func RosPrometheusInstance_IsRosResource(construct alicloudroscdkcore.IConstruct) *bool {
	_init_.Initialize()

	if err := validateRosPrometheusInstance_IsRosResourceParameters(construct); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-cms2.RosPrometheusInstance",
		"isRosResource",
		[]interface{}{construct},
		&returns,
	)

	return returns
}

func RosPrometheusInstance_ROS_RESOURCE_TYPE_NAME() *string {
	_init_.Initialize()
	var returns *string
	_jsii_.StaticGet(
		"@alicloud/ros-cdk-cms2.RosPrometheusInstance",
		"ROS_RESOURCE_TYPE_NAME",
		&returns,
	)
	return returns
}

func (r *jsiiProxy_RosPrometheusInstance) AddCondition(con alicloudroscdkcore.RosCondition) {
	if err := r.validateAddConditionParameters(con); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCondition",
		[]interface{}{con},
	)
}

func (r *jsiiProxy_RosPrometheusInstance) AddCount(count interface{}) {
	if err := r.validateAddCountParameters(count); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCount",
		[]interface{}{count},
	)
}

func (r *jsiiProxy_RosPrometheusInstance) AddDeletionOverride(path *string) {
	if err := r.validateAddDeletionOverrideParameters(path); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDeletionOverride",
		[]interface{}{path},
	)
}

func (r *jsiiProxy_RosPrometheusInstance) AddDependsOn(target alicloudroscdkcore.RosResource) {
	if err := r.validateAddDependsOnParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDependsOn",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosPrometheusInstance) AddDesc(desc *string) {
	if err := r.validateAddDescParameters(desc); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDesc",
		[]interface{}{desc},
	)
}

func (r *jsiiProxy_RosPrometheusInstance) AddMetaData(key *string, value interface{}) {
	if err := r.validateAddMetaDataParameters(key, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addMetaData",
		[]interface{}{key, value},
	)
}

func (r *jsiiProxy_RosPrometheusInstance) AddOverride(path *string, value interface{}) {
	if err := r.validateAddOverrideParameters(path, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addOverride",
		[]interface{}{path, value},
	)
}

func (r *jsiiProxy_RosPrometheusInstance) AddPropertyDeletionOverride(propertyPath *string) {
	if err := r.validateAddPropertyDeletionOverrideParameters(propertyPath); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyDeletionOverride",
		[]interface{}{propertyPath},
	)
}

func (r *jsiiProxy_RosPrometheusInstance) AddPropertyOverride(propertyPath *string, value interface{}) {
	if err := r.validateAddPropertyOverrideParameters(propertyPath, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyOverride",
		[]interface{}{propertyPath, value},
	)
}

func (r *jsiiProxy_RosPrometheusInstance) AddRosDependency(target *string) {
	if err := r.validateAddRosDependencyParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addRosDependency",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosPrometheusInstance) ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy, options *alicloudroscdkcore.RemovalPolicyOptions) {
	if err := r.validateApplyRemovalPolicyParameters(options); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"applyRemovalPolicy",
		[]interface{}{policy, options},
	)
}

func (r *jsiiProxy_RosPrometheusInstance) FetchCondition() alicloudroscdkcore.RosCondition {
	var returns alicloudroscdkcore.RosCondition

	_jsii_.Invoke(
		r,
		"fetchCondition",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosPrometheusInstance) FetchDesc() *string {
	var returns *string

	_jsii_.Invoke(
		r,
		"fetchDesc",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosPrometheusInstance) FetchRosDependency() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"fetchRosDependency",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosPrometheusInstance) GetAtt(attributeName *string) alicloudroscdkcore.Reference {
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

func (r *jsiiProxy_RosPrometheusInstance) OnPrepare() {
	_jsii_.InvokeVoid(
		r,
		"onPrepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosPrometheusInstance) OnSynthesize(session constructs.ISynthesisSession) {
	if err := r.validateOnSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"onSynthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosPrometheusInstance) OnValidate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"onValidate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosPrometheusInstance) OverrideLogicalId(newLogicalId *string) {
	if err := r.validateOverrideLogicalIdParameters(newLogicalId); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"overrideLogicalId",
		[]interface{}{newLogicalId},
	)
}

func (r *jsiiProxy_RosPrometheusInstance) Prepare() {
	_jsii_.InvokeVoid(
		r,
		"prepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosPrometheusInstance) RenderProperties(props *map[string]interface{}) *map[string]interface{} {
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

func (r *jsiiProxy_RosPrometheusInstance) Synthesize(session alicloudroscdkcore.ISynthesisSession) {
	if err := r.validateSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"synthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosPrometheusInstance) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		r,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosPrometheusInstance) Validate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"validate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosPrometheusInstance) ValidateProperties(_properties interface{}) {
	if err := r.validateValidatePropertiesParameters(_properties); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"validateProperties",
		[]interface{}{_properties},
	)
}

