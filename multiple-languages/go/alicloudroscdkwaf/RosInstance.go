package alicloudroscdkwaf

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkwaf/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkwaf/internal"
	"github.com/aws/constructs-go/constructs/v3"
)

// This class is a base encapsulation around the ROS resource type `ALIYUN::WAF::Instance`, which is used to create a Web Application Firewall (WAF) instance 2.0.
type RosInstance interface {
	alicloudroscdkcore.RosResource
	AttrEndDate() alicloudroscdkcore.IResolvable
	AttrInDebt() alicloudroscdkcore.IResolvable
	AttrInstanceId() alicloudroscdkcore.IResolvable
	AttrRemainDay() alicloudroscdkcore.IResolvable
	AttrSubscriptionType() alicloudroscdkcore.IResolvable
	AttrTrial() alicloudroscdkcore.IResolvable
	BigScreen() interface{}
	SetBigScreen(val interface{})
	// Returns: the stack trace of the point where this Resource was created from, sourced
	// from the +metadata+ entry typed +aliyun:ros:logicalId+, and with the bottom-most
	// node +internal+ entries filtered.
	CreationStack() *[]*string
	EnableResourcePropertyConstraint() *bool
	SetEnableResourcePropertyConstraint(val *bool)
	ExclusiveIpPackage() interface{}
	SetExclusiveIpPackage(val interface{})
	ExtBandwidth() interface{}
	SetExtBandwidth(val interface{})
	ExtDomainPackage() interface{}
	SetExtDomainPackage(val interface{})
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
	LogStorage() interface{}
	SetLogStorage(val interface{})
	LogTime() interface{}
	SetLogTime(val interface{})
	// The construct tree node associated with this construct.
	Node() alicloudroscdkcore.ConstructNode
	PackageCode() interface{}
	SetPackageCode(val interface{})
	Period() interface{}
	SetPeriod(val interface{})
	PrefessionalService() interface{}
	SetPrefessionalService(val interface{})
	// Return a string that will be resolved to a RosTemplate `{ Ref }` for this element.
	//
	// If, by any chance, the intrinsic reference of a resource is not a string, you could
	// coerce it to an IResolvable through `Lazy.any({ produce: resource.ref })`.
	Ref() *string
	RenewalStatus() interface{}
	SetRenewalStatus(val interface{})
	RenewPeriod() interface{}
	SetRenewPeriod(val interface{})
	// Options for this resource, such as condition, update policy etc.
	RosOptions() alicloudroscdkcore.IRosResourceOptions
	RosProperties() *map[string]interface{}
	// ROS resource type.
	RosResourceType() *string
	// The stack in which this element is defined.
	//
	// RosElements must be defined within a stack scope (directly or indirectly).
	Stack() alicloudroscdkcore.Stack
	SubscriptionType() interface{}
	SetSubscriptionType(val interface{})
	// Return properties modified after initiation.
	//
	// Resources that expose mutable properties should override this function to
	// collect and return the properties object for this resource.
	UpdatedProperites() *map[string]interface{}
	WafLog() interface{}
	SetWafLog(val interface{})
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

// The jsii proxy struct for RosInstance
type jsiiProxy_RosInstance struct {
	internal.Type__alicloudroscdkcoreRosResource
}

func (j *jsiiProxy_RosInstance) AttrEndDate() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrEndDate",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) AttrInDebt() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrInDebt",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) AttrInstanceId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) AttrRemainDay() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrRemainDay",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) AttrSubscriptionType() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrSubscriptionType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) AttrTrial() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrTrial",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) BigScreen() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"bigScreen",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) CreationStack() *[]*string {
	var returns *[]*string
	_jsii_.Get(
		j,
		"creationStack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) EnableResourcePropertyConstraint() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"enableResourcePropertyConstraint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) ExclusiveIpPackage() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"exclusiveIpPackage",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) ExtBandwidth() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"extBandwidth",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) ExtDomainPackage() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"extDomainPackage",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) LogicalId() *string {
	var returns *string
	_jsii_.Get(
		j,
		"logicalId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) LogStorage() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"logStorage",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) LogTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"logTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) Node() alicloudroscdkcore.ConstructNode {
	var returns alicloudroscdkcore.ConstructNode
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) PackageCode() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"packageCode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) Period() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"period",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) PrefessionalService() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"prefessionalService",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) Ref() *string {
	var returns *string
	_jsii_.Get(
		j,
		"ref",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) RenewalStatus() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"renewalStatus",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) RenewPeriod() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"renewPeriod",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) RosOptions() alicloudroscdkcore.IRosResourceOptions {
	var returns alicloudroscdkcore.IRosResourceOptions
	_jsii_.Get(
		j,
		"rosOptions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) RosProperties() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"rosProperties",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) RosResourceType() *string {
	var returns *string
	_jsii_.Get(
		j,
		"rosResourceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) Stack() alicloudroscdkcore.Stack {
	var returns alicloudroscdkcore.Stack
	_jsii_.Get(
		j,
		"stack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) SubscriptionType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"subscriptionType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) UpdatedProperites() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"updatedProperites",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) WafLog() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"wafLog",
		&returns,
	)
	return returns
}


func NewRosInstance(scope alicloudroscdkcore.Construct, id *string, props *RosInstanceProps, enableResourcePropertyConstraint *bool) RosInstance {
	_init_.Initialize()

	if err := validateNewRosInstanceParameters(scope, id, props, enableResourcePropertyConstraint); err != nil {
		panic(err)
	}
	j := jsiiProxy_RosInstance{}

	_jsii_.Create(
		"@alicloud/ros-cdk-waf.RosInstance",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		&j,
	)

	return &j
}

func NewRosInstance_Override(r RosInstance, scope alicloudroscdkcore.Construct, id *string, props *RosInstanceProps, enableResourcePropertyConstraint *bool) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-waf.RosInstance",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		r,
	)
}

func (j *jsiiProxy_RosInstance)SetBigScreen(val interface{}) {
	if err := j.validateSetBigScreenParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"bigScreen",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetEnableResourcePropertyConstraint(val *bool) {
	if err := j.validateSetEnableResourcePropertyConstraintParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableResourcePropertyConstraint",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetExclusiveIpPackage(val interface{}) {
	if err := j.validateSetExclusiveIpPackageParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"exclusiveIpPackage",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetExtBandwidth(val interface{}) {
	if err := j.validateSetExtBandwidthParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"extBandwidth",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetExtDomainPackage(val interface{}) {
	if err := j.validateSetExtDomainPackageParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"extDomainPackage",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetLogStorage(val interface{}) {
	if err := j.validateSetLogStorageParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"logStorage",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetLogTime(val interface{}) {
	if err := j.validateSetLogTimeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"logTime",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetPackageCode(val interface{}) {
	if err := j.validateSetPackageCodeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"packageCode",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetPeriod(val interface{}) {
	if err := j.validateSetPeriodParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"period",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetPrefessionalService(val interface{}) {
	if err := j.validateSetPrefessionalServiceParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"prefessionalService",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetRenewalStatus(val interface{}) {
	if err := j.validateSetRenewalStatusParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"renewalStatus",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetRenewPeriod(val interface{}) {
	if err := j.validateSetRenewPeriodParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"renewPeriod",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetSubscriptionType(val interface{}) {
	if err := j.validateSetSubscriptionTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"subscriptionType",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetWafLog(val interface{}) {
	if err := j.validateSetWafLogParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"wafLog",
		val,
	)
}

// Return whether the given object is a Construct.
func RosInstance_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosInstance_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-waf.RosInstance",
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
func RosInstance_IsRosElement(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosInstance_IsRosElementParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-waf.RosInstance",
		"isRosElement",
		[]interface{}{x},
		&returns,
	)

	return returns
}

// Check whether the given construct is a RosResource.
func RosInstance_IsRosResource(construct alicloudroscdkcore.IConstruct) *bool {
	_init_.Initialize()

	if err := validateRosInstance_IsRosResourceParameters(construct); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-waf.RosInstance",
		"isRosResource",
		[]interface{}{construct},
		&returns,
	)

	return returns
}

func RosInstance_ROS_RESOURCE_TYPE_NAME() *string {
	_init_.Initialize()
	var returns *string
	_jsii_.StaticGet(
		"@alicloud/ros-cdk-waf.RosInstance",
		"ROS_RESOURCE_TYPE_NAME",
		&returns,
	)
	return returns
}

func (r *jsiiProxy_RosInstance) AddCondition(con alicloudroscdkcore.RosCondition) {
	if err := r.validateAddConditionParameters(con); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCondition",
		[]interface{}{con},
	)
}

func (r *jsiiProxy_RosInstance) AddCount(count interface{}) {
	if err := r.validateAddCountParameters(count); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCount",
		[]interface{}{count},
	)
}

func (r *jsiiProxy_RosInstance) AddDeletionOverride(path *string) {
	if err := r.validateAddDeletionOverrideParameters(path); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDeletionOverride",
		[]interface{}{path},
	)
}

func (r *jsiiProxy_RosInstance) AddDependsOn(target alicloudroscdkcore.RosResource) {
	if err := r.validateAddDependsOnParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDependsOn",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosInstance) AddDesc(desc *string) {
	if err := r.validateAddDescParameters(desc); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDesc",
		[]interface{}{desc},
	)
}

func (r *jsiiProxy_RosInstance) AddMetaData(key *string, value interface{}) {
	if err := r.validateAddMetaDataParameters(key, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addMetaData",
		[]interface{}{key, value},
	)
}

func (r *jsiiProxy_RosInstance) AddOverride(path *string, value interface{}) {
	if err := r.validateAddOverrideParameters(path, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addOverride",
		[]interface{}{path, value},
	)
}

func (r *jsiiProxy_RosInstance) AddPropertyDeletionOverride(propertyPath *string) {
	if err := r.validateAddPropertyDeletionOverrideParameters(propertyPath); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyDeletionOverride",
		[]interface{}{propertyPath},
	)
}

func (r *jsiiProxy_RosInstance) AddPropertyOverride(propertyPath *string, value interface{}) {
	if err := r.validateAddPropertyOverrideParameters(propertyPath, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyOverride",
		[]interface{}{propertyPath, value},
	)
}

func (r *jsiiProxy_RosInstance) AddRosDependency(target *string) {
	if err := r.validateAddRosDependencyParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addRosDependency",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosInstance) ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy, options *alicloudroscdkcore.RemovalPolicyOptions) {
	if err := r.validateApplyRemovalPolicyParameters(options); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"applyRemovalPolicy",
		[]interface{}{policy, options},
	)
}

func (r *jsiiProxy_RosInstance) GetAtt(attributeName *string) alicloudroscdkcore.Reference {
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

func (r *jsiiProxy_RosInstance) OnPrepare() {
	_jsii_.InvokeVoid(
		r,
		"onPrepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosInstance) OnSynthesize(session constructs.ISynthesisSession) {
	if err := r.validateOnSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"onSynthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosInstance) OnValidate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"onValidate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosInstance) OverrideLogicalId(newLogicalId *string) {
	if err := r.validateOverrideLogicalIdParameters(newLogicalId); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"overrideLogicalId",
		[]interface{}{newLogicalId},
	)
}

func (r *jsiiProxy_RosInstance) Prepare() {
	_jsii_.InvokeVoid(
		r,
		"prepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosInstance) RenderProperties(props *map[string]interface{}) *map[string]interface{} {
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

func (r *jsiiProxy_RosInstance) Synthesize(session alicloudroscdkcore.ISynthesisSession) {
	if err := r.validateSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"synthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosInstance) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		r,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosInstance) Validate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"validate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosInstance) ValidateProperties(_properties interface{}) {
	if err := r.validateValidatePropertiesParameters(_properties); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"validateProperties",
		[]interface{}{_properties},
	)
}

