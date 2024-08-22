package alicloudroscdkalb

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkalb/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkalb/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/aws/constructs-go/constructs/v3"
)

// This class is a base encapsulation around the ROS resource type `ALIYUN::ALB::Listener`, which is used to create an HTTP, HTTPS, or Quick UDP Internet Connections (QUIC) listener.
type RosListener interface {
	alicloudroscdkcore.RosResource
	AttrListenerId() alicloudroscdkcore.IResolvable
	CaCertificates() interface{}
	SetCaCertificates(val interface{})
	CaEnabled() interface{}
	SetCaEnabled(val interface{})
	Certificates() interface{}
	SetCertificates(val interface{})
	// Returns: the stack trace of the point where this Resource was created from, sourced
	// from the +metadata+ entry typed +aliyun:ros:logicalId+, and with the bottom-most
	// node +internal+ entries filtered.
	CreationStack() *[]*string
	DefaultActions() interface{}
	SetDefaultActions(val interface{})
	EnableResourcePropertyConstraint() *bool
	SetEnableResourcePropertyConstraint(val *bool)
	GzipEnabled() interface{}
	SetGzipEnabled(val interface{})
	Http2Enabled() interface{}
	SetHttp2Enabled(val interface{})
	IdleTimeout() interface{}
	SetIdleTimeout(val interface{})
	ListenerDescription() interface{}
	SetListenerDescription(val interface{})
	ListenerPort() interface{}
	SetListenerPort(val interface{})
	ListenerProtocol() interface{}
	SetListenerProtocol(val interface{})
	ListenerStatus() interface{}
	SetListenerStatus(val interface{})
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
	// The construct tree node associated with this construct.
	Node() alicloudroscdkcore.ConstructNode
	QuicConfig() interface{}
	SetQuicConfig(val interface{})
	// Return a string that will be resolved to a RosTemplate `{ Ref }` for this element.
	//
	// If, by any chance, the intrinsic reference of a resource is not a string, you could
	// coerce it to an IResolvable through `Lazy.any({ produce: resource.ref })`.
	Ref() *string
	RequestTimeout() interface{}
	SetRequestTimeout(val interface{})
	// Options for this resource, such as condition, update policy etc.
	RosOptions() alicloudroscdkcore.IRosResourceOptions
	RosProperties() *map[string]interface{}
	// ROS resource type.
	RosResourceType() *string
	SecurityPolicyId() interface{}
	SetSecurityPolicyId(val interface{})
	// The stack in which this element is defined.
	//
	// RosElements must be defined within a stack scope (directly or indirectly).
	Stack() alicloudroscdkcore.Stack
	// Return properties modified after initiation.
	//
	// Resources that expose mutable properties should override this function to
	// collect and return the properties object for this resource.
	UpdatedProperites() *map[string]interface{}
	XForwardedForConfig() interface{}
	SetXForwardedForConfig(val interface{})
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

func (j *jsiiProxy_RosListener) AttrListenerId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrListenerId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosListener) CaCertificates() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"caCertificates",
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

func (j *jsiiProxy_RosListener) Certificates() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"certificates",
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

func (j *jsiiProxy_RosListener) DefaultActions() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"defaultActions",
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

func (j *jsiiProxy_RosListener) GzipEnabled() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"gzipEnabled",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosListener) Http2Enabled() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"http2Enabled",
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

func (j *jsiiProxy_RosListener) ListenerStatus() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"listenerStatus",
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

func (j *jsiiProxy_RosListener) Node() alicloudroscdkcore.ConstructNode {
	var returns alicloudroscdkcore.ConstructNode
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosListener) QuicConfig() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"quicConfig",
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

func (j *jsiiProxy_RosListener) RequestTimeout() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"requestTimeout",
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

func (j *jsiiProxy_RosListener) SecurityPolicyId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"securityPolicyId",
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

func (j *jsiiProxy_RosListener) UpdatedProperites() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"updatedProperites",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosListener) XForwardedForConfig() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"xForwardedForConfig",
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
		"@alicloud/ros-cdk-alb.RosListener",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		&j,
	)

	return &j
}

func NewRosListener_Override(r RosListener, scope alicloudroscdkcore.Construct, id *string, props *RosListenerProps, enableResourcePropertyConstraint *bool) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-alb.RosListener",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		r,
	)
}

func (j *jsiiProxy_RosListener)SetCaCertificates(val interface{}) {
	if err := j.validateSetCaCertificatesParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"caCertificates",
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

func (j *jsiiProxy_RosListener)SetCertificates(val interface{}) {
	if err := j.validateSetCertificatesParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"certificates",
		val,
	)
}

func (j *jsiiProxy_RosListener)SetDefaultActions(val interface{}) {
	if err := j.validateSetDefaultActionsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"defaultActions",
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

func (j *jsiiProxy_RosListener)SetGzipEnabled(val interface{}) {
	if err := j.validateSetGzipEnabledParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"gzipEnabled",
		val,
	)
}

func (j *jsiiProxy_RosListener)SetHttp2Enabled(val interface{}) {
	if err := j.validateSetHttp2EnabledParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"http2Enabled",
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

func (j *jsiiProxy_RosListener)SetListenerStatus(val interface{}) {
	if err := j.validateSetListenerStatusParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"listenerStatus",
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

func (j *jsiiProxy_RosListener)SetQuicConfig(val interface{}) {
	if err := j.validateSetQuicConfigParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"quicConfig",
		val,
	)
}

func (j *jsiiProxy_RosListener)SetRequestTimeout(val interface{}) {
	if err := j.validateSetRequestTimeoutParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"requestTimeout",
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

func (j *jsiiProxy_RosListener)SetXForwardedForConfig(val interface{}) {
	if err := j.validateSetXForwardedForConfigParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"xForwardedForConfig",
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
		"@alicloud/ros-cdk-alb.RosListener",
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
		"@alicloud/ros-cdk-alb.RosListener",
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
		"@alicloud/ros-cdk-alb.RosListener",
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
		"@alicloud/ros-cdk-alb.RosListener",
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

