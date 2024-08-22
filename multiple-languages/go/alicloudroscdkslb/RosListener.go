package alicloudroscdkslb

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkslb/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkslb/internal"
	"github.com/aws/constructs-go/constructs/v3"
)

// This class is a base encapsulation around the ROS resource type `ALIYUN::SLB::Listener`, which is used to create a Server Load Balancer (SLB) listener.
type RosListener interface {
	alicloudroscdkcore.RosResource
	AclId() interface{}
	SetAclId(val interface{})
	AclIds() interface{}
	SetAclIds(val interface{})
	AclStatus() interface{}
	SetAclStatus(val interface{})
	AclType() interface{}
	SetAclType(val interface{})
	AttrListenerPortsAndProtocol() alicloudroscdkcore.IResolvable
	AttrLoadBalancerId() alicloudroscdkcore.IResolvable
	BackendServerPort() interface{}
	SetBackendServerPort(val interface{})
	Bandwidth() interface{}
	SetBandwidth(val interface{})
	CaCertificateId() interface{}
	SetCaCertificateId(val interface{})
	ConnectionDrain() interface{}
	SetConnectionDrain(val interface{})
	ConnectionDrainTimeout() interface{}
	SetConnectionDrainTimeout(val interface{})
	// Returns: the stack trace of the point where this Resource was created from, sourced
	// from the +metadata+ entry typed +aliyun:ros:logicalId+, and with the bottom-most
	// node +internal+ entries filtered.
	CreationStack() *[]*string
	Description() interface{}
	SetDescription(val interface{})
	EnableHttp2() interface{}
	SetEnableHttp2(val interface{})
	EnableResourcePropertyConstraint() *bool
	SetEnableResourcePropertyConstraint(val *bool)
	Gzip() interface{}
	SetGzip(val interface{})
	HealthCheck() interface{}
	SetHealthCheck(val interface{})
	HttpConfig() interface{}
	SetHttpConfig(val interface{})
	IdleTimeout() interface{}
	SetIdleTimeout(val interface{})
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
	MasterSlaveServerGroupId() interface{}
	SetMasterSlaveServerGroupId(val interface{})
	// The construct tree node associated with this construct.
	Node() alicloudroscdkcore.ConstructNode
	Persistence() interface{}
	SetPersistence(val interface{})
	PortRange() interface{}
	SetPortRange(val interface{})
	Protocol() interface{}
	SetProtocol(val interface{})
	ProxyProtocolV2Enabled() interface{}
	SetProxyProtocolV2Enabled(val interface{})
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
	Scheduler() interface{}
	SetScheduler(val interface{})
	ServerCertificateId() interface{}
	SetServerCertificateId(val interface{})
	// The stack in which this element is defined.
	//
	// RosElements must be defined within a stack scope (directly or indirectly).
	Stack() alicloudroscdkcore.Stack
	StartListener() interface{}
	SetStartListener(val interface{})
	Tags() *[]*RosListener_TagsProperty
	SetTags(val *[]*RosListener_TagsProperty)
	TlsCipherPolicy() interface{}
	SetTlsCipherPolicy(val interface{})
	// Return properties modified after initiation.
	//
	// Resources that expose mutable properties should override this function to
	// collect and return the properties object for this resource.
	UpdatedProperites() *map[string]interface{}
	VServerGroupId() interface{}
	SetVServerGroupId(val interface{})
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

func (j *jsiiProxy_RosListener) AclId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"aclId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosListener) AclIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"aclIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosListener) AclStatus() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"aclStatus",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosListener) AclType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"aclType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosListener) AttrListenerPortsAndProtocol() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrListenerPortsAndProtocol",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosListener) AttrLoadBalancerId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrLoadBalancerId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosListener) BackendServerPort() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"backendServerPort",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosListener) Bandwidth() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"bandwidth",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosListener) CaCertificateId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"caCertificateId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosListener) ConnectionDrain() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"connectionDrain",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosListener) ConnectionDrainTimeout() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"connectionDrainTimeout",
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

func (j *jsiiProxy_RosListener) Description() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"description",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosListener) EnableHttp2() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"enableHttp2",
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

func (j *jsiiProxy_RosListener) Gzip() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"gzip",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosListener) HealthCheck() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"healthCheck",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosListener) HttpConfig() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"httpConfig",
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

func (j *jsiiProxy_RosListener) ListenerPort() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"listenerPort",
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

func (j *jsiiProxy_RosListener) MasterSlaveServerGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"masterSlaveServerGroupId",
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

func (j *jsiiProxy_RosListener) Persistence() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"persistence",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosListener) PortRange() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"portRange",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosListener) Protocol() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"protocol",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosListener) ProxyProtocolV2Enabled() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"proxyProtocolV2Enabled",
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

func (j *jsiiProxy_RosListener) Scheduler() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"scheduler",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosListener) ServerCertificateId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"serverCertificateId",
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

func (j *jsiiProxy_RosListener) StartListener() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"startListener",
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

func (j *jsiiProxy_RosListener) TlsCipherPolicy() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"tlsCipherPolicy",
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

func (j *jsiiProxy_RosListener) VServerGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"vServerGroupId",
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
		"@alicloud/ros-cdk-slb.RosListener",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		&j,
	)

	return &j
}

func NewRosListener_Override(r RosListener, scope alicloudroscdkcore.Construct, id *string, props *RosListenerProps, enableResourcePropertyConstraint *bool) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-slb.RosListener",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		r,
	)
}

func (j *jsiiProxy_RosListener)SetAclId(val interface{}) {
	if err := j.validateSetAclIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"aclId",
		val,
	)
}

func (j *jsiiProxy_RosListener)SetAclIds(val interface{}) {
	if err := j.validateSetAclIdsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"aclIds",
		val,
	)
}

func (j *jsiiProxy_RosListener)SetAclStatus(val interface{}) {
	if err := j.validateSetAclStatusParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"aclStatus",
		val,
	)
}

func (j *jsiiProxy_RosListener)SetAclType(val interface{}) {
	if err := j.validateSetAclTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"aclType",
		val,
	)
}

func (j *jsiiProxy_RosListener)SetBackendServerPort(val interface{}) {
	if err := j.validateSetBackendServerPortParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"backendServerPort",
		val,
	)
}

func (j *jsiiProxy_RosListener)SetBandwidth(val interface{}) {
	if err := j.validateSetBandwidthParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"bandwidth",
		val,
	)
}

func (j *jsiiProxy_RosListener)SetCaCertificateId(val interface{}) {
	if err := j.validateSetCaCertificateIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"caCertificateId",
		val,
	)
}

func (j *jsiiProxy_RosListener)SetConnectionDrain(val interface{}) {
	if err := j.validateSetConnectionDrainParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"connectionDrain",
		val,
	)
}

func (j *jsiiProxy_RosListener)SetConnectionDrainTimeout(val interface{}) {
	if err := j.validateSetConnectionDrainTimeoutParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"connectionDrainTimeout",
		val,
	)
}

func (j *jsiiProxy_RosListener)SetDescription(val interface{}) {
	if err := j.validateSetDescriptionParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"description",
		val,
	)
}

func (j *jsiiProxy_RosListener)SetEnableHttp2(val interface{}) {
	if err := j.validateSetEnableHttp2Parameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableHttp2",
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

func (j *jsiiProxy_RosListener)SetGzip(val interface{}) {
	if err := j.validateSetGzipParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"gzip",
		val,
	)
}

func (j *jsiiProxy_RosListener)SetHealthCheck(val interface{}) {
	if err := j.validateSetHealthCheckParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"healthCheck",
		val,
	)
}

func (j *jsiiProxy_RosListener)SetHttpConfig(val interface{}) {
	if err := j.validateSetHttpConfigParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"httpConfig",
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

func (j *jsiiProxy_RosListener)SetMasterSlaveServerGroupId(val interface{}) {
	if err := j.validateSetMasterSlaveServerGroupIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"masterSlaveServerGroupId",
		val,
	)
}

func (j *jsiiProxy_RosListener)SetPersistence(val interface{}) {
	if err := j.validateSetPersistenceParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"persistence",
		val,
	)
}

func (j *jsiiProxy_RosListener)SetPortRange(val interface{}) {
	if err := j.validateSetPortRangeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"portRange",
		val,
	)
}

func (j *jsiiProxy_RosListener)SetProtocol(val interface{}) {
	if err := j.validateSetProtocolParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"protocol",
		val,
	)
}

func (j *jsiiProxy_RosListener)SetProxyProtocolV2Enabled(val interface{}) {
	if err := j.validateSetProxyProtocolV2EnabledParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"proxyProtocolV2Enabled",
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

func (j *jsiiProxy_RosListener)SetScheduler(val interface{}) {
	if err := j.validateSetSchedulerParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"scheduler",
		val,
	)
}

func (j *jsiiProxy_RosListener)SetServerCertificateId(val interface{}) {
	if err := j.validateSetServerCertificateIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"serverCertificateId",
		val,
	)
}

func (j *jsiiProxy_RosListener)SetStartListener(val interface{}) {
	if err := j.validateSetStartListenerParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"startListener",
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

func (j *jsiiProxy_RosListener)SetTlsCipherPolicy(val interface{}) {
	if err := j.validateSetTlsCipherPolicyParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"tlsCipherPolicy",
		val,
	)
}

func (j *jsiiProxy_RosListener)SetVServerGroupId(val interface{}) {
	if err := j.validateSetVServerGroupIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"vServerGroupId",
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
		"@alicloud/ros-cdk-slb.RosListener",
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
		"@alicloud/ros-cdk-slb.RosListener",
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
		"@alicloud/ros-cdk-slb.RosListener",
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
		"@alicloud/ros-cdk-slb.RosListener",
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

