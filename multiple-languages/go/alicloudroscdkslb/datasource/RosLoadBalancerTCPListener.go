package datasource

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkslb/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkslb/datasource/internal"
	"github.com/aws/constructs-go/constructs/v3"
)

// This class is a base encapsulation around the ROS resource type `DATASOURCE::SLB::LoadBalancerTCPListener`.
type RosLoadBalancerTCPListener interface {
	alicloudroscdkcore.RosResource
	AttrAclId() alicloudroscdkcore.IResolvable
	AttrAclIds() alicloudroscdkcore.IResolvable
	AttrAclStatus() alicloudroscdkcore.IResolvable
	AttrAclType() alicloudroscdkcore.IResolvable
	AttrBackendServerPort() alicloudroscdkcore.IResolvable
	AttrBandwidth() alicloudroscdkcore.IResolvable
	AttrConnectionDrain() alicloudroscdkcore.IResolvable
	AttrConnectionDrainTimeout() alicloudroscdkcore.IResolvable
	AttrDescription() alicloudroscdkcore.IResolvable
	AttrEstablishedTimeout() alicloudroscdkcore.IResolvable
	AttrHealthCheck() alicloudroscdkcore.IResolvable
	AttrHealthCheckConnectPort() alicloudroscdkcore.IResolvable
	AttrHealthCheckConnectTimeout() alicloudroscdkcore.IResolvable
	AttrHealthCheckDomain() alicloudroscdkcore.IResolvable
	AttrHealthCheckHttpCode() alicloudroscdkcore.IResolvable
	AttrHealthCheckInterval() alicloudroscdkcore.IResolvable
	AttrHealthCheckMethod() alicloudroscdkcore.IResolvable
	AttrHealthCheckType() alicloudroscdkcore.IResolvable
	AttrHealthCheckUri() alicloudroscdkcore.IResolvable
	AttrHealthyThreshold() alicloudroscdkcore.IResolvable
	AttrListenerPort() alicloudroscdkcore.IResolvable
	AttrLoadBalancerId() alicloudroscdkcore.IResolvable
	AttrMasterSlaveServerGroupId() alicloudroscdkcore.IResolvable
	AttrPersistenceTimeout() alicloudroscdkcore.IResolvable
	AttrProxyProtocolV2Enabled() alicloudroscdkcore.IResolvable
	AttrScheduler() alicloudroscdkcore.IResolvable
	AttrSynProxy() alicloudroscdkcore.IResolvable
	AttrUnhealthyThreshold() alicloudroscdkcore.IResolvable
	AttrVServerGroupId() alicloudroscdkcore.IResolvable
	// Returns: the stack trace of the point where this Resource was created from, sourced
	// from the +metadata+ entry typed +aliyun:ros:logicalId+, and with the bottom-most
	// node +internal+ entries filtered.
	CreationStack() *[]*string
	EnableResourcePropertyConstraint() *bool
	SetEnableResourcePropertyConstraint(val *bool)
	ListenerPort() interface{}
	SetListenerPort(val interface{})
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
	// Return a string that will be resolved to a RosTemplate `{ Ref }` for this element.
	//
	// If, by any chance, the intrinsic reference of a resource is not a string, you could
	// coerce it to an IResolvable through `Lazy.any({ produce: resource.ref })`.
	Ref() *string
	RefreshOptions() interface{}
	SetRefreshOptions(val interface{})
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

// The jsii proxy struct for RosLoadBalancerTCPListener
type jsiiProxy_RosLoadBalancerTCPListener struct {
	internal.Type__alicloudroscdkcoreRosResource
}

func (j *jsiiProxy_RosLoadBalancerTCPListener) AttrAclId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrAclId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLoadBalancerTCPListener) AttrAclIds() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrAclIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLoadBalancerTCPListener) AttrAclStatus() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrAclStatus",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLoadBalancerTCPListener) AttrAclType() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrAclType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLoadBalancerTCPListener) AttrBackendServerPort() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrBackendServerPort",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLoadBalancerTCPListener) AttrBandwidth() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrBandwidth",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLoadBalancerTCPListener) AttrConnectionDrain() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrConnectionDrain",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLoadBalancerTCPListener) AttrConnectionDrainTimeout() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrConnectionDrainTimeout",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLoadBalancerTCPListener) AttrDescription() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLoadBalancerTCPListener) AttrEstablishedTimeout() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrEstablishedTimeout",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLoadBalancerTCPListener) AttrHealthCheck() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrHealthCheck",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLoadBalancerTCPListener) AttrHealthCheckConnectPort() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrHealthCheckConnectPort",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLoadBalancerTCPListener) AttrHealthCheckConnectTimeout() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrHealthCheckConnectTimeout",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLoadBalancerTCPListener) AttrHealthCheckDomain() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrHealthCheckDomain",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLoadBalancerTCPListener) AttrHealthCheckHttpCode() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrHealthCheckHttpCode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLoadBalancerTCPListener) AttrHealthCheckInterval() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrHealthCheckInterval",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLoadBalancerTCPListener) AttrHealthCheckMethod() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrHealthCheckMethod",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLoadBalancerTCPListener) AttrHealthCheckType() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrHealthCheckType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLoadBalancerTCPListener) AttrHealthCheckUri() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrHealthCheckUri",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLoadBalancerTCPListener) AttrHealthyThreshold() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrHealthyThreshold",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLoadBalancerTCPListener) AttrListenerPort() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrListenerPort",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLoadBalancerTCPListener) AttrLoadBalancerId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrLoadBalancerId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLoadBalancerTCPListener) AttrMasterSlaveServerGroupId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrMasterSlaveServerGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLoadBalancerTCPListener) AttrPersistenceTimeout() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrPersistenceTimeout",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLoadBalancerTCPListener) AttrProxyProtocolV2Enabled() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrProxyProtocolV2Enabled",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLoadBalancerTCPListener) AttrScheduler() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrScheduler",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLoadBalancerTCPListener) AttrSynProxy() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrSynProxy",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLoadBalancerTCPListener) AttrUnhealthyThreshold() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrUnhealthyThreshold",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLoadBalancerTCPListener) AttrVServerGroupId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrVServerGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLoadBalancerTCPListener) CreationStack() *[]*string {
	var returns *[]*string
	_jsii_.Get(
		j,
		"creationStack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLoadBalancerTCPListener) EnableResourcePropertyConstraint() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"enableResourcePropertyConstraint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLoadBalancerTCPListener) ListenerPort() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"listenerPort",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLoadBalancerTCPListener) LoadBalancerId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"loadBalancerId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLoadBalancerTCPListener) LogicalId() *string {
	var returns *string
	_jsii_.Get(
		j,
		"logicalId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLoadBalancerTCPListener) Node() alicloudroscdkcore.ConstructNode {
	var returns alicloudroscdkcore.ConstructNode
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLoadBalancerTCPListener) Ref() *string {
	var returns *string
	_jsii_.Get(
		j,
		"ref",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLoadBalancerTCPListener) RefreshOptions() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"refreshOptions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLoadBalancerTCPListener) RosOptions() alicloudroscdkcore.IRosResourceOptions {
	var returns alicloudroscdkcore.IRosResourceOptions
	_jsii_.Get(
		j,
		"rosOptions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLoadBalancerTCPListener) RosProperties() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"rosProperties",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLoadBalancerTCPListener) RosResourceType() *string {
	var returns *string
	_jsii_.Get(
		j,
		"rosResourceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLoadBalancerTCPListener) Stack() alicloudroscdkcore.Stack {
	var returns alicloudroscdkcore.Stack
	_jsii_.Get(
		j,
		"stack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLoadBalancerTCPListener) UpdatedProperites() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"updatedProperites",
		&returns,
	)
	return returns
}


func NewRosLoadBalancerTCPListener(scope alicloudroscdkcore.Construct, id *string, props *RosLoadBalancerTCPListenerProps, enableResourcePropertyConstraint *bool) RosLoadBalancerTCPListener {
	_init_.Initialize()

	if err := validateNewRosLoadBalancerTCPListenerParameters(scope, id, props, enableResourcePropertyConstraint); err != nil {
		panic(err)
	}
	j := jsiiProxy_RosLoadBalancerTCPListener{}

	_jsii_.Create(
		"@alicloud/ros-cdk-slb.datasource.RosLoadBalancerTCPListener",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		&j,
	)

	return &j
}

func NewRosLoadBalancerTCPListener_Override(r RosLoadBalancerTCPListener, scope alicloudroscdkcore.Construct, id *string, props *RosLoadBalancerTCPListenerProps, enableResourcePropertyConstraint *bool) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-slb.datasource.RosLoadBalancerTCPListener",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		r,
	)
}

func (j *jsiiProxy_RosLoadBalancerTCPListener)SetEnableResourcePropertyConstraint(val *bool) {
	if err := j.validateSetEnableResourcePropertyConstraintParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableResourcePropertyConstraint",
		val,
	)
}

func (j *jsiiProxy_RosLoadBalancerTCPListener)SetListenerPort(val interface{}) {
	if err := j.validateSetListenerPortParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"listenerPort",
		val,
	)
}

func (j *jsiiProxy_RosLoadBalancerTCPListener)SetLoadBalancerId(val interface{}) {
	if err := j.validateSetLoadBalancerIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"loadBalancerId",
		val,
	)
}

func (j *jsiiProxy_RosLoadBalancerTCPListener)SetRefreshOptions(val interface{}) {
	if err := j.validateSetRefreshOptionsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"refreshOptions",
		val,
	)
}

// Return whether the given object is a Construct.
func RosLoadBalancerTCPListener_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosLoadBalancerTCPListener_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-slb.datasource.RosLoadBalancerTCPListener",
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
func RosLoadBalancerTCPListener_IsRosElement(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosLoadBalancerTCPListener_IsRosElementParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-slb.datasource.RosLoadBalancerTCPListener",
		"isRosElement",
		[]interface{}{x},
		&returns,
	)

	return returns
}

// Check whether the given construct is a RosResource.
func RosLoadBalancerTCPListener_IsRosResource(construct alicloudroscdkcore.IConstruct) *bool {
	_init_.Initialize()

	if err := validateRosLoadBalancerTCPListener_IsRosResourceParameters(construct); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-slb.datasource.RosLoadBalancerTCPListener",
		"isRosResource",
		[]interface{}{construct},
		&returns,
	)

	return returns
}

func RosLoadBalancerTCPListener_ROS_RESOURCE_TYPE_NAME() *string {
	_init_.Initialize()
	var returns *string
	_jsii_.StaticGet(
		"@alicloud/ros-cdk-slb.datasource.RosLoadBalancerTCPListener",
		"ROS_RESOURCE_TYPE_NAME",
		&returns,
	)
	return returns
}

func (r *jsiiProxy_RosLoadBalancerTCPListener) AddCondition(con alicloudroscdkcore.RosCondition) {
	if err := r.validateAddConditionParameters(con); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCondition",
		[]interface{}{con},
	)
}

func (r *jsiiProxy_RosLoadBalancerTCPListener) AddCount(count interface{}) {
	if err := r.validateAddCountParameters(count); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCount",
		[]interface{}{count},
	)
}

func (r *jsiiProxy_RosLoadBalancerTCPListener) AddDeletionOverride(path *string) {
	if err := r.validateAddDeletionOverrideParameters(path); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDeletionOverride",
		[]interface{}{path},
	)
}

func (r *jsiiProxy_RosLoadBalancerTCPListener) AddDependsOn(target alicloudroscdkcore.RosResource) {
	if err := r.validateAddDependsOnParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDependsOn",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosLoadBalancerTCPListener) AddDesc(desc *string) {
	if err := r.validateAddDescParameters(desc); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDesc",
		[]interface{}{desc},
	)
}

func (r *jsiiProxy_RosLoadBalancerTCPListener) AddMetaData(key *string, value interface{}) {
	if err := r.validateAddMetaDataParameters(key, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addMetaData",
		[]interface{}{key, value},
	)
}

func (r *jsiiProxy_RosLoadBalancerTCPListener) AddOverride(path *string, value interface{}) {
	if err := r.validateAddOverrideParameters(path, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addOverride",
		[]interface{}{path, value},
	)
}

func (r *jsiiProxy_RosLoadBalancerTCPListener) AddPropertyDeletionOverride(propertyPath *string) {
	if err := r.validateAddPropertyDeletionOverrideParameters(propertyPath); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyDeletionOverride",
		[]interface{}{propertyPath},
	)
}

func (r *jsiiProxy_RosLoadBalancerTCPListener) AddPropertyOverride(propertyPath *string, value interface{}) {
	if err := r.validateAddPropertyOverrideParameters(propertyPath, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyOverride",
		[]interface{}{propertyPath, value},
	)
}

func (r *jsiiProxy_RosLoadBalancerTCPListener) AddRosDependency(target *string) {
	if err := r.validateAddRosDependencyParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addRosDependency",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosLoadBalancerTCPListener) ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy, options *alicloudroscdkcore.RemovalPolicyOptions) {
	if err := r.validateApplyRemovalPolicyParameters(options); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"applyRemovalPolicy",
		[]interface{}{policy, options},
	)
}

func (r *jsiiProxy_RosLoadBalancerTCPListener) GetAtt(attributeName *string) alicloudroscdkcore.Reference {
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

func (r *jsiiProxy_RosLoadBalancerTCPListener) OnPrepare() {
	_jsii_.InvokeVoid(
		r,
		"onPrepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosLoadBalancerTCPListener) OnSynthesize(session constructs.ISynthesisSession) {
	if err := r.validateOnSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"onSynthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosLoadBalancerTCPListener) OnValidate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"onValidate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosLoadBalancerTCPListener) OverrideLogicalId(newLogicalId *string) {
	if err := r.validateOverrideLogicalIdParameters(newLogicalId); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"overrideLogicalId",
		[]interface{}{newLogicalId},
	)
}

func (r *jsiiProxy_RosLoadBalancerTCPListener) Prepare() {
	_jsii_.InvokeVoid(
		r,
		"prepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosLoadBalancerTCPListener) RenderProperties(props *map[string]interface{}) *map[string]interface{} {
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

func (r *jsiiProxy_RosLoadBalancerTCPListener) Synthesize(session alicloudroscdkcore.ISynthesisSession) {
	if err := r.validateSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"synthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosLoadBalancerTCPListener) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		r,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosLoadBalancerTCPListener) Validate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"validate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosLoadBalancerTCPListener) ValidateProperties(_properties interface{}) {
	if err := r.validateValidatePropertiesParameters(_properties); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"validateProperties",
		[]interface{}{_properties},
	)
}
