package alicloudroscdknlb

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdknlb/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdknlb/internal"
	"github.com/aws/constructs-go/constructs/v3"
)

// This class is a base encapsulation around the ROS resource type `ALIYUN::NLB::ServerGroup`, which is used to create a server group for a Network Load Balancer (NLB) instance.
type RosServerGroup interface {
	alicloudroscdkcore.RosResource
	AddressIpVersion() interface{}
	SetAddressIpVersion(val interface{})
	AnyPortEnabled() interface{}
	SetAnyPortEnabled(val interface{})
	AttrServerGroupId() alicloudroscdkcore.IResolvable
	ConnectionDrainEnabled() interface{}
	SetConnectionDrainEnabled(val interface{})
	ConnectionDrainTimeout() interface{}
	SetConnectionDrainTimeout(val interface{})
	// Returns: the stack trace of the point where this Resource was created from, sourced
	// from the +metadata+ entry typed +aliyun:ros:logicalId+, and with the bottom-most
	// node +internal+ entries filtered.
	CreationStack() *[]*string
	EnableResourcePropertyConstraint() *bool
	SetEnableResourcePropertyConstraint(val *bool)
	HealthCheckConfig() interface{}
	SetHealthCheckConfig(val interface{})
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
	PersistenceEnabled() interface{}
	SetPersistenceEnabled(val interface{})
	PersistenceTimeout() interface{}
	SetPersistenceTimeout(val interface{})
	PreserveClientIpEnabled() interface{}
	SetPreserveClientIpEnabled(val interface{})
	Protocol() interface{}
	SetProtocol(val interface{})
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
	Scheduler() interface{}
	SetScheduler(val interface{})
	ServerGroupName() interface{}
	SetServerGroupName(val interface{})
	ServerGroupType() interface{}
	SetServerGroupType(val interface{})
	Servers() interface{}
	SetServers(val interface{})
	// The stack in which this element is defined.
	//
	// RosElements must be defined within a stack scope (directly or indirectly).
	Stack() alicloudroscdkcore.Stack
	Tags() *[]*RosServerGroup_TagsProperty
	SetTags(val *[]*RosServerGroup_TagsProperty)
	// Return properties modified after initiation.
	//
	// Resources that expose mutable properties should override this function to
	// collect and return the properties object for this resource.
	UpdatedProperites() *map[string]interface{}
	VpcId() interface{}
	SetVpcId(val interface{})
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

// The jsii proxy struct for RosServerGroup
type jsiiProxy_RosServerGroup struct {
	internal.Type__alicloudroscdkcoreRosResource
}

func (j *jsiiProxy_RosServerGroup) AddressIpVersion() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"addressIpVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServerGroup) AnyPortEnabled() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"anyPortEnabled",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServerGroup) AttrServerGroupId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrServerGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServerGroup) ConnectionDrainEnabled() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"connectionDrainEnabled",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServerGroup) ConnectionDrainTimeout() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"connectionDrainTimeout",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServerGroup) CreationStack() *[]*string {
	var returns *[]*string
	_jsii_.Get(
		j,
		"creationStack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServerGroup) EnableResourcePropertyConstraint() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"enableResourcePropertyConstraint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServerGroup) HealthCheckConfig() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"healthCheckConfig",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServerGroup) LogicalId() *string {
	var returns *string
	_jsii_.Get(
		j,
		"logicalId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServerGroup) Node() alicloudroscdkcore.ConstructNode {
	var returns alicloudroscdkcore.ConstructNode
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServerGroup) PersistenceEnabled() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"persistenceEnabled",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServerGroup) PersistenceTimeout() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"persistenceTimeout",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServerGroup) PreserveClientIpEnabled() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"preserveClientIpEnabled",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServerGroup) Protocol() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"protocol",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServerGroup) Ref() *string {
	var returns *string
	_jsii_.Get(
		j,
		"ref",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServerGroup) ResourceGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"resourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServerGroup) RosOptions() alicloudroscdkcore.IRosResourceOptions {
	var returns alicloudroscdkcore.IRosResourceOptions
	_jsii_.Get(
		j,
		"rosOptions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServerGroup) RosProperties() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"rosProperties",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServerGroup) RosResourceType() *string {
	var returns *string
	_jsii_.Get(
		j,
		"rosResourceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServerGroup) Scheduler() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"scheduler",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServerGroup) ServerGroupName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"serverGroupName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServerGroup) ServerGroupType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"serverGroupType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServerGroup) Servers() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"servers",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServerGroup) Stack() alicloudroscdkcore.Stack {
	var returns alicloudroscdkcore.Stack
	_jsii_.Get(
		j,
		"stack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServerGroup) Tags() *[]*RosServerGroup_TagsProperty {
	var returns *[]*RosServerGroup_TagsProperty
	_jsii_.Get(
		j,
		"tags",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServerGroup) UpdatedProperites() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"updatedProperites",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServerGroup) VpcId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"vpcId",
		&returns,
	)
	return returns
}


func NewRosServerGroup(scope alicloudroscdkcore.Construct, id *string, props *RosServerGroupProps, enableResourcePropertyConstraint *bool) RosServerGroup {
	_init_.Initialize()

	if err := validateNewRosServerGroupParameters(scope, id, props, enableResourcePropertyConstraint); err != nil {
		panic(err)
	}
	j := jsiiProxy_RosServerGroup{}

	_jsii_.Create(
		"@alicloud/ros-cdk-nlb.RosServerGroup",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		&j,
	)

	return &j
}

func NewRosServerGroup_Override(r RosServerGroup, scope alicloudroscdkcore.Construct, id *string, props *RosServerGroupProps, enableResourcePropertyConstraint *bool) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-nlb.RosServerGroup",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		r,
	)
}

func (j *jsiiProxy_RosServerGroup)SetAddressIpVersion(val interface{}) {
	if err := j.validateSetAddressIpVersionParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"addressIpVersion",
		val,
	)
}

func (j *jsiiProxy_RosServerGroup)SetAnyPortEnabled(val interface{}) {
	if err := j.validateSetAnyPortEnabledParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"anyPortEnabled",
		val,
	)
}

func (j *jsiiProxy_RosServerGroup)SetConnectionDrainEnabled(val interface{}) {
	if err := j.validateSetConnectionDrainEnabledParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"connectionDrainEnabled",
		val,
	)
}

func (j *jsiiProxy_RosServerGroup)SetConnectionDrainTimeout(val interface{}) {
	if err := j.validateSetConnectionDrainTimeoutParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"connectionDrainTimeout",
		val,
	)
}

func (j *jsiiProxy_RosServerGroup)SetEnableResourcePropertyConstraint(val *bool) {
	if err := j.validateSetEnableResourcePropertyConstraintParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableResourcePropertyConstraint",
		val,
	)
}

func (j *jsiiProxy_RosServerGroup)SetHealthCheckConfig(val interface{}) {
	if err := j.validateSetHealthCheckConfigParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"healthCheckConfig",
		val,
	)
}

func (j *jsiiProxy_RosServerGroup)SetPersistenceEnabled(val interface{}) {
	if err := j.validateSetPersistenceEnabledParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"persistenceEnabled",
		val,
	)
}

func (j *jsiiProxy_RosServerGroup)SetPersistenceTimeout(val interface{}) {
	if err := j.validateSetPersistenceTimeoutParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"persistenceTimeout",
		val,
	)
}

func (j *jsiiProxy_RosServerGroup)SetPreserveClientIpEnabled(val interface{}) {
	if err := j.validateSetPreserveClientIpEnabledParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"preserveClientIpEnabled",
		val,
	)
}

func (j *jsiiProxy_RosServerGroup)SetProtocol(val interface{}) {
	if err := j.validateSetProtocolParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"protocol",
		val,
	)
}

func (j *jsiiProxy_RosServerGroup)SetResourceGroupId(val interface{}) {
	if err := j.validateSetResourceGroupIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"resourceGroupId",
		val,
	)
}

func (j *jsiiProxy_RosServerGroup)SetScheduler(val interface{}) {
	if err := j.validateSetSchedulerParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"scheduler",
		val,
	)
}

func (j *jsiiProxy_RosServerGroup)SetServerGroupName(val interface{}) {
	if err := j.validateSetServerGroupNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"serverGroupName",
		val,
	)
}

func (j *jsiiProxy_RosServerGroup)SetServerGroupType(val interface{}) {
	if err := j.validateSetServerGroupTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"serverGroupType",
		val,
	)
}

func (j *jsiiProxy_RosServerGroup)SetServers(val interface{}) {
	if err := j.validateSetServersParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"servers",
		val,
	)
}

func (j *jsiiProxy_RosServerGroup)SetTags(val *[]*RosServerGroup_TagsProperty) {
	if err := j.validateSetTagsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"tags",
		val,
	)
}

func (j *jsiiProxy_RosServerGroup)SetVpcId(val interface{}) {
	if err := j.validateSetVpcIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"vpcId",
		val,
	)
}

// Return whether the given object is a Construct.
func RosServerGroup_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosServerGroup_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-nlb.RosServerGroup",
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
func RosServerGroup_IsRosElement(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosServerGroup_IsRosElementParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-nlb.RosServerGroup",
		"isRosElement",
		[]interface{}{x},
		&returns,
	)

	return returns
}

// Check whether the given construct is a RosResource.
func RosServerGroup_IsRosResource(construct alicloudroscdkcore.IConstruct) *bool {
	_init_.Initialize()

	if err := validateRosServerGroup_IsRosResourceParameters(construct); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-nlb.RosServerGroup",
		"isRosResource",
		[]interface{}{construct},
		&returns,
	)

	return returns
}

func RosServerGroup_ROS_RESOURCE_TYPE_NAME() *string {
	_init_.Initialize()
	var returns *string
	_jsii_.StaticGet(
		"@alicloud/ros-cdk-nlb.RosServerGroup",
		"ROS_RESOURCE_TYPE_NAME",
		&returns,
	)
	return returns
}

func (r *jsiiProxy_RosServerGroup) AddCondition(con alicloudroscdkcore.RosCondition) {
	if err := r.validateAddConditionParameters(con); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCondition",
		[]interface{}{con},
	)
}

func (r *jsiiProxy_RosServerGroup) AddCount(count interface{}) {
	if err := r.validateAddCountParameters(count); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCount",
		[]interface{}{count},
	)
}

func (r *jsiiProxy_RosServerGroup) AddDeletionOverride(path *string) {
	if err := r.validateAddDeletionOverrideParameters(path); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDeletionOverride",
		[]interface{}{path},
	)
}

func (r *jsiiProxy_RosServerGroup) AddDependsOn(target alicloudroscdkcore.RosResource) {
	if err := r.validateAddDependsOnParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDependsOn",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosServerGroup) AddDesc(desc *string) {
	if err := r.validateAddDescParameters(desc); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDesc",
		[]interface{}{desc},
	)
}

func (r *jsiiProxy_RosServerGroup) AddMetaData(key *string, value interface{}) {
	if err := r.validateAddMetaDataParameters(key, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addMetaData",
		[]interface{}{key, value},
	)
}

func (r *jsiiProxy_RosServerGroup) AddOverride(path *string, value interface{}) {
	if err := r.validateAddOverrideParameters(path, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addOverride",
		[]interface{}{path, value},
	)
}

func (r *jsiiProxy_RosServerGroup) AddPropertyDeletionOverride(propertyPath *string) {
	if err := r.validateAddPropertyDeletionOverrideParameters(propertyPath); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyDeletionOverride",
		[]interface{}{propertyPath},
	)
}

func (r *jsiiProxy_RosServerGroup) AddPropertyOverride(propertyPath *string, value interface{}) {
	if err := r.validateAddPropertyOverrideParameters(propertyPath, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyOverride",
		[]interface{}{propertyPath, value},
	)
}

func (r *jsiiProxy_RosServerGroup) AddRosDependency(target *string) {
	if err := r.validateAddRosDependencyParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addRosDependency",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosServerGroup) ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy, options *alicloudroscdkcore.RemovalPolicyOptions) {
	if err := r.validateApplyRemovalPolicyParameters(options); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"applyRemovalPolicy",
		[]interface{}{policy, options},
	)
}

func (r *jsiiProxy_RosServerGroup) GetAtt(attributeName *string) alicloudroscdkcore.Reference {
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

func (r *jsiiProxy_RosServerGroup) OnPrepare() {
	_jsii_.InvokeVoid(
		r,
		"onPrepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosServerGroup) OnSynthesize(session constructs.ISynthesisSession) {
	if err := r.validateOnSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"onSynthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosServerGroup) OnValidate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"onValidate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosServerGroup) OverrideLogicalId(newLogicalId *string) {
	if err := r.validateOverrideLogicalIdParameters(newLogicalId); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"overrideLogicalId",
		[]interface{}{newLogicalId},
	)
}

func (r *jsiiProxy_RosServerGroup) Prepare() {
	_jsii_.InvokeVoid(
		r,
		"prepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosServerGroup) RenderProperties(props *map[string]interface{}) *map[string]interface{} {
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

func (r *jsiiProxy_RosServerGroup) Synthesize(session alicloudroscdkcore.ISynthesisSession) {
	if err := r.validateSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"synthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosServerGroup) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		r,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosServerGroup) Validate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"validate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosServerGroup) ValidateProperties(_properties interface{}) {
	if err := r.validateValidatePropertiesParameters(_properties); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"validateProperties",
		[]interface{}{_properties},
	)
}

