package alicloudroscdkesa

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkesa/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkesa/internal"
	"github.com/aws/constructs-go/constructs/v3"
)

// This class is a base encapsulation around the ROS resource type `ALIYUN::ESA::SiteDeliveryTask`.
type RosSiteDeliveryTask interface {
	alicloudroscdkcore.RosResource
	AttrBusinessType() alicloudroscdkcore.IResolvable
	AttrDataCenter() alicloudroscdkcore.IResolvable
	AttrDeliveryType() alicloudroscdkcore.IResolvable
	AttrDiscardRate() alicloudroscdkcore.IResolvable
	AttrFieldName() alicloudroscdkcore.IResolvable
	AttrFilterRules() alicloudroscdkcore.IResolvable
	AttrSinkConfig() alicloudroscdkcore.IResolvable
	AttrSiteId() alicloudroscdkcore.IResolvable
	AttrSiteName() alicloudroscdkcore.IResolvable
	AttrTaskName() alicloudroscdkcore.IResolvable
	BusinessType() interface{}
	SetBusinessType(val interface{})
	// Returns: the stack trace of the point where this Resource was created from, sourced
	// from the +metadata+ entry typed +aliyun:ros:logicalId+, and with the bottom-most
	// node +internal+ entries filtered.
	CreationStack() *[]*string
	DataCenter() interface{}
	SetDataCenter(val interface{})
	DeliveryType() interface{}
	SetDeliveryType(val interface{})
	DiscardRate() interface{}
	SetDiscardRate(val interface{})
	EnableResourcePropertyConstraint() *bool
	SetEnableResourcePropertyConstraint(val *bool)
	FieldName() interface{}
	SetFieldName(val interface{})
	HttpDelivery() interface{}
	SetHttpDelivery(val interface{})
	KafkaDelivery() interface{}
	SetKafkaDelivery(val interface{})
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
	OssDelivery() interface{}
	SetOssDelivery(val interface{})
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
	S3Delivery() interface{}
	SetS3Delivery(val interface{})
	SiteId() interface{}
	SetSiteId(val interface{})
	SlsDelivery() interface{}
	SetSlsDelivery(val interface{})
	// The stack in which this element is defined.
	//
	// RosElements must be defined within a stack scope (directly or indirectly).
	Stack() alicloudroscdkcore.Stack
	TaskName() interface{}
	SetTaskName(val interface{})
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

// The jsii proxy struct for RosSiteDeliveryTask
type jsiiProxy_RosSiteDeliveryTask struct {
	internal.Type__alicloudroscdkcoreRosResource
}

func (j *jsiiProxy_RosSiteDeliveryTask) AttrBusinessType() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrBusinessType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSiteDeliveryTask) AttrDataCenter() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDataCenter",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSiteDeliveryTask) AttrDeliveryType() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDeliveryType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSiteDeliveryTask) AttrDiscardRate() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDiscardRate",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSiteDeliveryTask) AttrFieldName() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrFieldName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSiteDeliveryTask) AttrFilterRules() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrFilterRules",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSiteDeliveryTask) AttrSinkConfig() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrSinkConfig",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSiteDeliveryTask) AttrSiteId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrSiteId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSiteDeliveryTask) AttrSiteName() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrSiteName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSiteDeliveryTask) AttrTaskName() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrTaskName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSiteDeliveryTask) BusinessType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"businessType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSiteDeliveryTask) CreationStack() *[]*string {
	var returns *[]*string
	_jsii_.Get(
		j,
		"creationStack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSiteDeliveryTask) DataCenter() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"dataCenter",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSiteDeliveryTask) DeliveryType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"deliveryType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSiteDeliveryTask) DiscardRate() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"discardRate",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSiteDeliveryTask) EnableResourcePropertyConstraint() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"enableResourcePropertyConstraint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSiteDeliveryTask) FieldName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"fieldName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSiteDeliveryTask) HttpDelivery() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"httpDelivery",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSiteDeliveryTask) KafkaDelivery() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"kafkaDelivery",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSiteDeliveryTask) LogicalId() *string {
	var returns *string
	_jsii_.Get(
		j,
		"logicalId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSiteDeliveryTask) Node() alicloudroscdkcore.ConstructNode {
	var returns alicloudroscdkcore.ConstructNode
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSiteDeliveryTask) OssDelivery() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"ossDelivery",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSiteDeliveryTask) Ref() *string {
	var returns *string
	_jsii_.Get(
		j,
		"ref",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSiteDeliveryTask) RosOptions() alicloudroscdkcore.IRosResourceOptions {
	var returns alicloudroscdkcore.IRosResourceOptions
	_jsii_.Get(
		j,
		"rosOptions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSiteDeliveryTask) RosProperties() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"rosProperties",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSiteDeliveryTask) RosResourceType() *string {
	var returns *string
	_jsii_.Get(
		j,
		"rosResourceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSiteDeliveryTask) S3Delivery() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"s3Delivery",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSiteDeliveryTask) SiteId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"siteId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSiteDeliveryTask) SlsDelivery() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"slsDelivery",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSiteDeliveryTask) Stack() alicloudroscdkcore.Stack {
	var returns alicloudroscdkcore.Stack
	_jsii_.Get(
		j,
		"stack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSiteDeliveryTask) TaskName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"taskName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSiteDeliveryTask) UpdatedProperites() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"updatedProperites",
		&returns,
	)
	return returns
}


func NewRosSiteDeliveryTask(scope alicloudroscdkcore.Construct, id *string, props *RosSiteDeliveryTaskProps, enableResourcePropertyConstraint *bool) RosSiteDeliveryTask {
	_init_.Initialize()

	if err := validateNewRosSiteDeliveryTaskParameters(scope, id, props, enableResourcePropertyConstraint); err != nil {
		panic(err)
	}
	j := jsiiProxy_RosSiteDeliveryTask{}

	_jsii_.Create(
		"@alicloud/ros-cdk-esa.RosSiteDeliveryTask",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		&j,
	)

	return &j
}

func NewRosSiteDeliveryTask_Override(r RosSiteDeliveryTask, scope alicloudroscdkcore.Construct, id *string, props *RosSiteDeliveryTaskProps, enableResourcePropertyConstraint *bool) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-esa.RosSiteDeliveryTask",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		r,
	)
}

func (j *jsiiProxy_RosSiteDeliveryTask)SetBusinessType(val interface{}) {
	if err := j.validateSetBusinessTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"businessType",
		val,
	)
}

func (j *jsiiProxy_RosSiteDeliveryTask)SetDataCenter(val interface{}) {
	if err := j.validateSetDataCenterParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"dataCenter",
		val,
	)
}

func (j *jsiiProxy_RosSiteDeliveryTask)SetDeliveryType(val interface{}) {
	if err := j.validateSetDeliveryTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"deliveryType",
		val,
	)
}

func (j *jsiiProxy_RosSiteDeliveryTask)SetDiscardRate(val interface{}) {
	if err := j.validateSetDiscardRateParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"discardRate",
		val,
	)
}

func (j *jsiiProxy_RosSiteDeliveryTask)SetEnableResourcePropertyConstraint(val *bool) {
	if err := j.validateSetEnableResourcePropertyConstraintParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableResourcePropertyConstraint",
		val,
	)
}

func (j *jsiiProxy_RosSiteDeliveryTask)SetFieldName(val interface{}) {
	if err := j.validateSetFieldNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"fieldName",
		val,
	)
}

func (j *jsiiProxy_RosSiteDeliveryTask)SetHttpDelivery(val interface{}) {
	if err := j.validateSetHttpDeliveryParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"httpDelivery",
		val,
	)
}

func (j *jsiiProxy_RosSiteDeliveryTask)SetKafkaDelivery(val interface{}) {
	if err := j.validateSetKafkaDeliveryParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"kafkaDelivery",
		val,
	)
}

func (j *jsiiProxy_RosSiteDeliveryTask)SetOssDelivery(val interface{}) {
	if err := j.validateSetOssDeliveryParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"ossDelivery",
		val,
	)
}

func (j *jsiiProxy_RosSiteDeliveryTask)SetS3Delivery(val interface{}) {
	if err := j.validateSetS3DeliveryParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"s3Delivery",
		val,
	)
}

func (j *jsiiProxy_RosSiteDeliveryTask)SetSiteId(val interface{}) {
	if err := j.validateSetSiteIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"siteId",
		val,
	)
}

func (j *jsiiProxy_RosSiteDeliveryTask)SetSlsDelivery(val interface{}) {
	if err := j.validateSetSlsDeliveryParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"slsDelivery",
		val,
	)
}

func (j *jsiiProxy_RosSiteDeliveryTask)SetTaskName(val interface{}) {
	if err := j.validateSetTaskNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"taskName",
		val,
	)
}

// Return whether the given object is a Construct.
func RosSiteDeliveryTask_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosSiteDeliveryTask_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-esa.RosSiteDeliveryTask",
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
func RosSiteDeliveryTask_IsRosElement(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosSiteDeliveryTask_IsRosElementParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-esa.RosSiteDeliveryTask",
		"isRosElement",
		[]interface{}{x},
		&returns,
	)

	return returns
}

// Check whether the given construct is a RosResource.
func RosSiteDeliveryTask_IsRosResource(construct alicloudroscdkcore.IConstruct) *bool {
	_init_.Initialize()

	if err := validateRosSiteDeliveryTask_IsRosResourceParameters(construct); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-esa.RosSiteDeliveryTask",
		"isRosResource",
		[]interface{}{construct},
		&returns,
	)

	return returns
}

func RosSiteDeliveryTask_ROS_RESOURCE_TYPE_NAME() *string {
	_init_.Initialize()
	var returns *string
	_jsii_.StaticGet(
		"@alicloud/ros-cdk-esa.RosSiteDeliveryTask",
		"ROS_RESOURCE_TYPE_NAME",
		&returns,
	)
	return returns
}

func (r *jsiiProxy_RosSiteDeliveryTask) AddCondition(con alicloudroscdkcore.RosCondition) {
	if err := r.validateAddConditionParameters(con); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCondition",
		[]interface{}{con},
	)
}

func (r *jsiiProxy_RosSiteDeliveryTask) AddCount(count interface{}) {
	if err := r.validateAddCountParameters(count); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCount",
		[]interface{}{count},
	)
}

func (r *jsiiProxy_RosSiteDeliveryTask) AddDeletionOverride(path *string) {
	if err := r.validateAddDeletionOverrideParameters(path); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDeletionOverride",
		[]interface{}{path},
	)
}

func (r *jsiiProxy_RosSiteDeliveryTask) AddDependsOn(target alicloudroscdkcore.RosResource) {
	if err := r.validateAddDependsOnParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDependsOn",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosSiteDeliveryTask) AddDesc(desc *string) {
	if err := r.validateAddDescParameters(desc); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDesc",
		[]interface{}{desc},
	)
}

func (r *jsiiProxy_RosSiteDeliveryTask) AddMetaData(key *string, value interface{}) {
	if err := r.validateAddMetaDataParameters(key, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addMetaData",
		[]interface{}{key, value},
	)
}

func (r *jsiiProxy_RosSiteDeliveryTask) AddOverride(path *string, value interface{}) {
	if err := r.validateAddOverrideParameters(path, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addOverride",
		[]interface{}{path, value},
	)
}

func (r *jsiiProxy_RosSiteDeliveryTask) AddPropertyDeletionOverride(propertyPath *string) {
	if err := r.validateAddPropertyDeletionOverrideParameters(propertyPath); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyDeletionOverride",
		[]interface{}{propertyPath},
	)
}

func (r *jsiiProxy_RosSiteDeliveryTask) AddPropertyOverride(propertyPath *string, value interface{}) {
	if err := r.validateAddPropertyOverrideParameters(propertyPath, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyOverride",
		[]interface{}{propertyPath, value},
	)
}

func (r *jsiiProxy_RosSiteDeliveryTask) AddRosDependency(target *string) {
	if err := r.validateAddRosDependencyParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addRosDependency",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosSiteDeliveryTask) ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy, options *alicloudroscdkcore.RemovalPolicyOptions) {
	if err := r.validateApplyRemovalPolicyParameters(options); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"applyRemovalPolicy",
		[]interface{}{policy, options},
	)
}

func (r *jsiiProxy_RosSiteDeliveryTask) FetchCondition() alicloudroscdkcore.RosCondition {
	var returns alicloudroscdkcore.RosCondition

	_jsii_.Invoke(
		r,
		"fetchCondition",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosSiteDeliveryTask) FetchDesc() *string {
	var returns *string

	_jsii_.Invoke(
		r,
		"fetchDesc",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosSiteDeliveryTask) FetchRosDependency() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"fetchRosDependency",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosSiteDeliveryTask) GetAtt(attributeName *string) alicloudroscdkcore.Reference {
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

func (r *jsiiProxy_RosSiteDeliveryTask) OnPrepare() {
	_jsii_.InvokeVoid(
		r,
		"onPrepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosSiteDeliveryTask) OnSynthesize(session constructs.ISynthesisSession) {
	if err := r.validateOnSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"onSynthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosSiteDeliveryTask) OnValidate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"onValidate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosSiteDeliveryTask) OverrideLogicalId(newLogicalId *string) {
	if err := r.validateOverrideLogicalIdParameters(newLogicalId); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"overrideLogicalId",
		[]interface{}{newLogicalId},
	)
}

func (r *jsiiProxy_RosSiteDeliveryTask) Prepare() {
	_jsii_.InvokeVoid(
		r,
		"prepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosSiteDeliveryTask) RenderProperties(props *map[string]interface{}) *map[string]interface{} {
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

func (r *jsiiProxy_RosSiteDeliveryTask) Synthesize(session alicloudroscdkcore.ISynthesisSession) {
	if err := r.validateSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"synthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosSiteDeliveryTask) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		r,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosSiteDeliveryTask) Validate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"validate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosSiteDeliveryTask) ValidateProperties(_properties interface{}) {
	if err := r.validateValidatePropertiesParameters(_properties); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"validateProperties",
		[]interface{}{_properties},
	)
}

