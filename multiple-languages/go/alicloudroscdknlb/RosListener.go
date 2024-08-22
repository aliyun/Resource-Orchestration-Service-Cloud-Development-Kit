package alicloudroscdknlb

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdknlb/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdknlb/internal"
	"github.com/aws/constructs-go/constructs/v3"
)

// This class is a base encapsulation around the ROS resource type `ALIYUN::NLB::Listener`, which is used to create a listener.
type RosListener interface {
	alicloudroscdkcore.RosResource
	AlpnEnabled() interface{}
	SetAlpnEnabled(val interface{})
	AlpnPolicy() interface{}
	SetAlpnPolicy(val interface{})
	AttrListenerId() alicloudroscdkcore.IResolvable
	AttrListenerPort() alicloudroscdkcore.IResolvable
	CaCertificateIds() interface{}
	SetCaCertificateIds(val interface{})
	CaEnabled() interface{}
	SetCaEnabled(val interface{})
	CertificateIds() interface{}
	SetCertificateIds(val interface{})
	Cps() interface{}
	SetCps(val interface{})
	// Returns: the stack trace of the point where this Resource was created from, sourced
	// from the +metadata+ entry typed +aliyun:ros:logicalId+, and with the bottom-most
	// node +internal+ entries filtered.
	CreationStack() *[]*string
	Enable() interface{}
	SetEnable(val interface{})
	EnableResourcePropertyConstraint() *bool
	SetEnableResourcePropertyConstraint(val *bool)
	EndPort() interface{}
	SetEndPort(val interface{})
	IdleTimeout() interface{}
	SetIdleTimeout(val interface{})
	ListenerDescription() interface{}
	SetListenerDescription(val interface{})
	ListenerPort() interface{}
	SetListenerPort(val interface{})
	ListenerProtocol() interface{}
	SetListenerProtocol(val interface{})
	LoadBalancerId() interface{}
	SetLoadBalancerId(val interface{})
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
	Mss() interface{}
	SetMss(val interface{})
	// The construct tree node associated with this construct.
	Node() alicloudroscdkcore.ConstructNode
	ProxyProtocolEnabled() interface{}
	SetProxyProtocolEnabled(val interface{})
	ProxyProtocolV2Config() interface{}
	SetProxyProtocolV2Config(val interface{})
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
	SecSensorEnabled() interface{}
	SetSecSensorEnabled(val interface{})
	SecurityPolicyId() interface{}
	SetSecurityPolicyId(val interface{})
	ServerGroupId() interface{}
	SetServerGroupId(val interface{})
	// The stack in which this element is defined.
	//
	// RosElements must be defined within a stack scope (directly or indirectly).
	Stack() alicloudroscdkcore.Stack
	StartPort() interface{}
	SetStartPort(val interface{})
	Tags() *[]*RosListener_TagsProperty
	SetTags(val *[]*RosListener_TagsProperty)
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

// The jsii proxy struct for RosListener
type jsiiProxy_RosListener struct {
	internal.Type__alicloudroscdkcoreRosResource
}

func (j *jsiiProxy_RosListener) AlpnEnabled() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"alpnEnabled",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosListener) AlpnPolicy() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"alpnPolicy",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosListener) AttrListenerId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrListenerId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosListener) AttrListenerPort() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrListenerPort",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosListener) CaCertificateIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"caCertificateIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosListener) CaEnabled() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"caEnabled",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosListener) CertificateIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"certificateIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosListener) Cps() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"cps",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosListener) CreationStack() *[]*string {
	var returns *[]*string
	_jsii_.Get(
		j,
		"creationStack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosListener) Enable() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"enable",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosListener) EnableResourcePropertyConstraint() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"enableResourcePropertyConstraint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosListener) EndPort() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"endPort",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosListener) IdleTimeout() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"idleTimeout",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosListener) ListenerDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"listenerDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosListener) ListenerPort() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"listenerPort",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosListener) ListenerProtocol() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"listenerProtocol",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosListener) LoadBalancerId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"loadBalancerId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosListener) LogicalId() *string {
	var returns *string
	_jsii_.Get(
		j,
		"logicalId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosListener) Mss() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"mss",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosListener) Node() alicloudroscdkcore.ConstructNode {
	var returns alicloudroscdkcore.ConstructNode
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosListener) ProxyProtocolEnabled() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"proxyProtocolEnabled",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosListener) ProxyProtocolV2Config() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"proxyProtocolV2Config",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosListener) Ref() *string {
	var returns *string
	_jsii_.Get(
		j,
		"ref",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosListener) RosOptions() alicloudroscdkcore.IRosResourceOptions {
	var returns alicloudroscdkcore.IRosResourceOptions
	_jsii_.Get(
		j,
		"rosOptions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosListener) RosProperties() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"rosProperties",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosListener) RosResourceType() *string {
	var returns *string
	_jsii_.Get(
		j,
		"rosResourceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosListener) SecSensorEnabled() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"secSensorEnabled",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosListener) SecurityPolicyId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"securityPolicyId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosListener) ServerGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"serverGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosListener) Stack() alicloudroscdkcore.Stack {
	var returns alicloudroscdkcore.Stack
	_jsii_.Get(
		j,
		"stack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosListener) StartPort() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"startPort",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosListener) Tags() *[]*RosListener_TagsProperty {
	var returns *[]*RosListener_TagsProperty
	_jsii_.Get(
		j,
		"tags",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosListener) UpdatedProperites() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"updatedProperites",
		&returns,
	)
	return returns
}


func NewRosListener(scope alicloudroscdkcore.Construct, id *string, props *RosListenerProps, enableResourcePropertyConstraint *bool) RosListener {
	_init_.Initialize()

	if err := validateNewRosListenerParameters(scope, id, props, enableResourcePropertyConstraint); err != nil {
		panic(err)
	}
	j := jsiiProxy_RosListener{}

	_jsii_.Create(
		"@alicloud/ros-cdk-nlb.RosListener",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		&j,
	)

	return &j
}

func NewRosListener_Override(r RosListener, scope alicloudroscdkcore.Construct, id *string, props *RosListenerProps, enableResourcePropertyConstraint *bool) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-nlb.RosListener",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		r,
	)
}

func (j *jsiiProxy_RosListener)SetAlpnEnabled(val interface{}) {
	if err := j.validateSetAlpnEnabledParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"alpnEnabled",
		val,
	)
}

func (j *jsiiProxy_RosListener)SetAlpnPolicy(val interface{}) {
	if err := j.validateSetAlpnPolicyParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"alpnPolicy",
		val,
	)
}

func (j *jsiiProxy_RosListener)SetCaCertificateIds(val interface{}) {
	if err := j.validateSetCaCertificateIdsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"caCertificateIds",
		val,
	)
}

func (j *jsiiProxy_RosListener)SetCaEnabled(val interface{}) {
	if err := j.validateSetCaEnabledParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"caEnabled",
		val,
	)
}

func (j *jsiiProxy_RosListener)SetCertificateIds(val interface{}) {
	if err := j.validateSetCertificateIdsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"certificateIds",
		val,
	)
}

func (j *jsiiProxy_RosListener)SetCps(val interface{}) {
	if err := j.validateSetCpsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"cps",
		val,
	)
}

func (j *jsiiProxy_RosListener)SetEnable(val interface{}) {
	if err := j.validateSetEnableParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enable",
		val,
	)
}

func (j *jsiiProxy_RosListener)SetEnableResourcePropertyConstraint(val *bool) {
	if err := j.validateSetEnableResourcePropertyConstraintParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableResourcePropertyConstraint",
		val,
	)
}

func (j *jsiiProxy_RosListener)SetEndPort(val interface{}) {
	if err := j.validateSetEndPortParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"endPort",
		val,
	)
}

func (j *jsiiProxy_RosListener)SetIdleTimeout(val interface{}) {
	if err := j.validateSetIdleTimeoutParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"idleTimeout",
		val,
	)
}

func (j *jsiiProxy_RosListener)SetListenerDescription(val interface{}) {
	if err := j.validateSetListenerDescriptionParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"listenerDescription",
		val,
	)
}

func (j *jsiiProxy_RosListener)SetListenerPort(val interface{}) {
	if err := j.validateSetListenerPortParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"listenerPort",
		val,
	)
}

func (j *jsiiProxy_RosListener)SetListenerProtocol(val interface{}) {
	if err := j.validateSetListenerProtocolParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"listenerProtocol",
		val,
	)
}

func (j *jsiiProxy_RosListener)SetLoadBalancerId(val interface{}) {
	if err := j.validateSetLoadBalancerIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"loadBalancerId",
		val,
	)
}

func (j *jsiiProxy_RosListener)SetMss(val interface{}) {
	if err := j.validateSetMssParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"mss",
		val,
	)
}

func (j *jsiiProxy_RosListener)SetProxyProtocolEnabled(val interface{}) {
	if err := j.validateSetProxyProtocolEnabledParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"proxyProtocolEnabled",
		val,
	)
}

func (j *jsiiProxy_RosListener)SetProxyProtocolV2Config(val interface{}) {
	if err := j.validateSetProxyProtocolV2ConfigParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"proxyProtocolV2Config",
		val,
	)
}

func (j *jsiiProxy_RosListener)SetSecSensorEnabled(val interface{}) {
	if err := j.validateSetSecSensorEnabledParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"secSensorEnabled",
		val,
	)
}

func (j *jsiiProxy_RosListener)SetSecurityPolicyId(val interface{}) {
	if err := j.validateSetSecurityPolicyIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"securityPolicyId",
		val,
	)
}

func (j *jsiiProxy_RosListener)SetServerGroupId(val interface{}) {
	if err := j.validateSetServerGroupIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"serverGroupId",
		val,
	)
}

func (j *jsiiProxy_RosListener)SetStartPort(val interface{}) {
	if err := j.validateSetStartPortParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"startPort",
		val,
	)
}

func (j *jsiiProxy_RosListener)SetTags(val *[]*RosListener_TagsProperty) {
	if err := j.validateSetTagsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"tags",
		val,
	)
}

// Return whether the given object is a Construct.
func RosListener_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosListener_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-nlb.RosListener",
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
func RosListener_IsRosElement(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosListener_IsRosElementParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-nlb.RosListener",
		"isRosElement",
		[]interface{}{x},
		&returns,
	)

	return returns
}

// Check whether the given construct is a RosResource.
func RosListener_IsRosResource(construct alicloudroscdkcore.IConstruct) *bool {
	_init_.Initialize()

	if err := validateRosListener_IsRosResourceParameters(construct); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-nlb.RosListener",
		"isRosResource",
		[]interface{}{construct},
		&returns,
	)

	return returns
}

func RosListener_ROS_RESOURCE_TYPE_NAME() *string {
	_init_.Initialize()
	var returns *string
	_jsii_.StaticGet(
		"@alicloud/ros-cdk-nlb.RosListener",
		"ROS_RESOURCE_TYPE_NAME",
		&returns,
	)
	return returns
}

func (r *jsiiProxy_RosListener) AddCondition(con alicloudroscdkcore.RosCondition) {
	if err := r.validateAddConditionParameters(con); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCondition",
		[]interface{}{con},
	)
}

func (r *jsiiProxy_RosListener) AddCount(count interface{}) {
	if err := r.validateAddCountParameters(count); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCount",
		[]interface{}{count},
	)
}

func (r *jsiiProxy_RosListener) AddDeletionOverride(path *string) {
	if err := r.validateAddDeletionOverrideParameters(path); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDeletionOverride",
		[]interface{}{path},
	)
}

func (r *jsiiProxy_RosListener) AddDependsOn(target alicloudroscdkcore.RosResource) {
	if err := r.validateAddDependsOnParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDependsOn",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosListener) AddDesc(desc *string) {
	if err := r.validateAddDescParameters(desc); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDesc",
		[]interface{}{desc},
	)
}

func (r *jsiiProxy_RosListener) AddMetaData(key *string, value interface{}) {
	if err := r.validateAddMetaDataParameters(key, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addMetaData",
		[]interface{}{key, value},
	)
}

func (r *jsiiProxy_RosListener) AddOverride(path *string, value interface{}) {
	if err := r.validateAddOverrideParameters(path, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addOverride",
		[]interface{}{path, value},
	)
}

func (r *jsiiProxy_RosListener) AddPropertyDeletionOverride(propertyPath *string) {
	if err := r.validateAddPropertyDeletionOverrideParameters(propertyPath); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyDeletionOverride",
		[]interface{}{propertyPath},
	)
}

func (r *jsiiProxy_RosListener) AddPropertyOverride(propertyPath *string, value interface{}) {
	if err := r.validateAddPropertyOverrideParameters(propertyPath, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyOverride",
		[]interface{}{propertyPath, value},
	)
}

func (r *jsiiProxy_RosListener) AddRosDependency(target *string) {
	if err := r.validateAddRosDependencyParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addRosDependency",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosListener) ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy, options *alicloudroscdkcore.RemovalPolicyOptions) {
	if err := r.validateApplyRemovalPolicyParameters(options); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"applyRemovalPolicy",
		[]interface{}{policy, options},
	)
}

func (r *jsiiProxy_RosListener) GetAtt(attributeName *string) alicloudroscdkcore.Reference {
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

func (r *jsiiProxy_RosListener) OnPrepare() {
	_jsii_.InvokeVoid(
		r,
		"onPrepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosListener) OnSynthesize(session constructs.ISynthesisSession) {
	if err := r.validateOnSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"onSynthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosListener) OnValidate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"onValidate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosListener) OverrideLogicalId(newLogicalId *string) {
	if err := r.validateOverrideLogicalIdParameters(newLogicalId); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"overrideLogicalId",
		[]interface{}{newLogicalId},
	)
}

func (r *jsiiProxy_RosListener) Prepare() {
	_jsii_.InvokeVoid(
		r,
		"prepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosListener) RenderProperties(props *map[string]interface{}) *map[string]interface{} {
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

func (r *jsiiProxy_RosListener) Synthesize(session alicloudroscdkcore.ISynthesisSession) {
	if err := r.validateSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"synthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosListener) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		r,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosListener) Validate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"validate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosListener) ValidateProperties(_properties interface{}) {
	if err := r.validateValidatePropertiesParameters(_properties); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"validateProperties",
		[]interface{}{_properties},
	)
}

