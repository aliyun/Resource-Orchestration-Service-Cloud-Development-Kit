package datasource

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkslb/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkslb/datasource/internal"
	"github.com/aws/constructs-go/constructs/v3"
)

// This class encapsulates and extends the ROS resource type `DATASOURCE::SLB::LoadBalancerTCPListener`.
type LoadBalancerTCPListener interface {
	alicloudroscdkcore.Resource
	ILoadBalancerTCPListener
	// Attribute AclId: The ID of the network ACL that is associated with the listener.
	AttrAclId() interface{}
	// Attribute AclIds: The ID list of the network ACL that is associated with the listener.
	AttrAclIds() interface{}
	// Attribute AclStatus: Indicates whether access control is enabled.
	AttrAclStatus() interface{}
	// Attribute AclType: The type of the ACL.
	AttrAclType() interface{}
	// Attribute BackendServerPort: The backend port used by the CLB instance.
	AttrBackendServerPort() interface{}
	// Attribute Bandwidth: The maximum bandwidth of the listener.
	//
	// Unit: Mbit/s.
	AttrBandwidth() interface{}
	// Attribute ConnectionDrain: Indicates whether connection draining is enabled.
	//
	// If ConnectionDrain is set to on, the parameter is returned.
	AttrConnectionDrain() interface{}
	// Attribute ConnectionDrainTimeout: The timeout period of connection draining.
	//
	// If ConnectionDrain is set to on, the parameter is returned.
	AttrConnectionDrainTimeout() interface{}
	// Attribute Description: The description of the listener.
	AttrDescription() interface{}
	// Attribute EstablishedTimeout: The timeout period of a connection.
	AttrEstablishedTimeout() interface{}
	// Attribute HealthCheck: Indicates whether the health check feature is enabled.
	AttrHealthCheck() interface{}
	// Attribute HealthCheckConnectPort: The port that is used for health checks.
	AttrHealthCheckConnectPort() interface{}
	// Attribute HealthCheckConnectTimeout: The timeout period.
	//
	// Unit: seconds.
	AttrHealthCheckConnectTimeout() interface{}
	// Attribute HealthCheckDomain: The domain name that is used for health checks.
	AttrHealthCheckDomain() interface{}
	// Attribute HealthCheckHttpCode: The HTTP status code for a successful health check.
	AttrHealthCheckHttpCode() interface{}
	// Attribute HealthCheckInterval: The interval between two consecutive health checks.
	//
	// Valid values: 1 to 50. Unit: seconds.
	AttrHealthCheckInterval() interface{}
	// Attribute HealthCheckMethod: The health check method.
	AttrHealthCheckMethod() interface{}
	// Attribute HealthCheckType: The health check method that is used by the TCP listener.
	AttrHealthCheckType() interface{}
	// Attribute HealthCheckUri: The URL that is used for health checks.
	AttrHealthCheckUri() interface{}
	// Attribute HealthyThreshold: The healthy threshold.
	//
	// The number of times that an unhealthy backend server must consecutively pass health checks before it is declared healthy. In this case, the health status is changed from fail to success. Valid values: 2 to 10.
	AttrHealthyThreshold() interface{}
	// Attribute ListenerPort: The frontend port used by the CLB instance.
	AttrListenerPort() interface{}
	// Attribute LoadBalancerId: The ID of the CLB instance.
	AttrLoadBalancerId() interface{}
	// Attribute MasterSlaveServerGroupId: The ID of the primary/secondary server group that is associated with the listener.
	AttrMasterSlaveServerGroupId() interface{}
	// Attribute PersistenceTimeout: The timeout period of session persistence.
	AttrPersistenceTimeout() interface{}
	// Attribute ProxyProtocolV2Enabled: Indicates whether the Proxy protocol is used to pass client IP addresses to backend servers.
	AttrProxyProtocolV2Enabled() interface{}
	// Attribute Scheduler: The scheduling algorithm.
	AttrScheduler() interface{}
	// Attribute SynProxy: Indicates whether the SynProxy feature of CLB is enabled for protection.
	AttrSynProxy() interface{}
	// Attribute UnhealthyThreshold: The unhealthy threshold.
	//
	// The number of times that a healthy backend server must consecutively fail health checks before it is declared unhealthy. In this case, the health status is changed from success to fail. Valid values: 2 to 10.
	AttrUnhealthyThreshold() interface{}
	// Attribute VServerGroupId: The ID of the associated server group.
	AttrVServerGroupId() interface{}
	EnableResourcePropertyConstraint() *bool
	SetEnableResourcePropertyConstraint(val *bool)
	// The environment this resource belongs to.
	//
	// For resources that are created and managed by the CDK
	// (generally, those created by creating new class instances like Role, Bucket, etc.),
	// this is always the same as the environment of the stack they belong to;
	// however, for imported resources
	// (those obtained from static methods like fromRoleArn, fromBucketName, etc.),
	// that might be different than the stack they were imported into.
	Env() *alicloudroscdkcore.ResourceEnvironment
	Id() *string
	SetId(val *string)
	// The construct tree node associated with this construct.
	Node() alicloudroscdkcore.ConstructNode
	// Returns a string-encoded token that resolves to the physical name that should be passed to the ROS resource.
	//
	// This value will resolve to one of the following:
	// - a concrete value (e.g. `"my-awesome-bucket"`)
	// - `undefined`, when a name should be generated by ROS
	// - a concrete name generated automatically during synthesis, in
	//    cross-environment scenarios.
	// Experimental.
	PhysicalName() *string
	Props() *LoadBalancerTCPListenerProps
	Ref() *string
	Resource() alicloudroscdkcore.RosResource
	SetResource(val alicloudroscdkcore.RosResource)
	Scope() alicloudroscdkcore.Construct
	SetScope(val alicloudroscdkcore.Construct)
	// The stack in which this resource is defined.
	Stack() alicloudroscdkcore.Stack
	AddCondition(condition alicloudroscdkcore.RosCondition)
	AddCount(count interface{})
	AddDependency(resource alicloudroscdkcore.Resource)
	AddResourceDesc(desc *string)
	ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy)
	FetchCondition() alicloudroscdkcore.RosCondition
	FetchDependency() *[]*string
	FetchResourceDesc() *string
	GeneratePhysicalName() *string
	GetAtt(name *string) alicloudroscdkcore.IResolvable
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
	// Perform final modifications before synthesis.
	//
	// This method can be implemented by derived constructs in order to perform
	// final changes before synthesis. prepare() will be called after child
	// constructs have been prepared.
	//
	// This is an advanced framework feature. Only use this if you
	// understand the implications.
	Prepare()
	SetMetadata(key *string, value interface{})
	// Allows this construct to emit artifacts into the cloud assembly during synthesis.
	//
	// This method is usually implemented by framework-level constructs such as `Stack` and `Asset`
	// as they participate in synthesizing the cloud assembly.
	Synthesize(session alicloudroscdkcore.ISynthesisSession)
	// Returns a string representation of this construct.
	ToString() *string
	// Validate the current construct.
	//
	// This method can be implemented by derived constructs in order to perform
	// validation logic. It is called on all constructs before synthesis.
	//
	// Returns: An array of validation error messages, or an empty array if the construct is valid.
	Validate() *[]*string
}

// The jsii proxy struct for LoadBalancerTCPListener
type jsiiProxy_LoadBalancerTCPListener struct {
	internal.Type__alicloudroscdkcoreResource
	jsiiProxy_ILoadBalancerTCPListener
}

func (j *jsiiProxy_LoadBalancerTCPListener) AttrAclId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAclId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LoadBalancerTCPListener) AttrAclIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAclIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LoadBalancerTCPListener) AttrAclStatus() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAclStatus",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LoadBalancerTCPListener) AttrAclType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAclType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LoadBalancerTCPListener) AttrBackendServerPort() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrBackendServerPort",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LoadBalancerTCPListener) AttrBandwidth() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrBandwidth",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LoadBalancerTCPListener) AttrConnectionDrain() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrConnectionDrain",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LoadBalancerTCPListener) AttrConnectionDrainTimeout() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrConnectionDrainTimeout",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LoadBalancerTCPListener) AttrDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LoadBalancerTCPListener) AttrEstablishedTimeout() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEstablishedTimeout",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LoadBalancerTCPListener) AttrHealthCheck() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHealthCheck",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LoadBalancerTCPListener) AttrHealthCheckConnectPort() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHealthCheckConnectPort",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LoadBalancerTCPListener) AttrHealthCheckConnectTimeout() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHealthCheckConnectTimeout",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LoadBalancerTCPListener) AttrHealthCheckDomain() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHealthCheckDomain",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LoadBalancerTCPListener) AttrHealthCheckHttpCode() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHealthCheckHttpCode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LoadBalancerTCPListener) AttrHealthCheckInterval() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHealthCheckInterval",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LoadBalancerTCPListener) AttrHealthCheckMethod() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHealthCheckMethod",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LoadBalancerTCPListener) AttrHealthCheckType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHealthCheckType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LoadBalancerTCPListener) AttrHealthCheckUri() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHealthCheckUri",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LoadBalancerTCPListener) AttrHealthyThreshold() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHealthyThreshold",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LoadBalancerTCPListener) AttrListenerPort() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrListenerPort",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LoadBalancerTCPListener) AttrLoadBalancerId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLoadBalancerId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LoadBalancerTCPListener) AttrMasterSlaveServerGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMasterSlaveServerGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LoadBalancerTCPListener) AttrPersistenceTimeout() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPersistenceTimeout",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LoadBalancerTCPListener) AttrProxyProtocolV2Enabled() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrProxyProtocolV2Enabled",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LoadBalancerTCPListener) AttrScheduler() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrScheduler",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LoadBalancerTCPListener) AttrSynProxy() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSynProxy",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LoadBalancerTCPListener) AttrUnhealthyThreshold() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrUnhealthyThreshold",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LoadBalancerTCPListener) AttrVServerGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVServerGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LoadBalancerTCPListener) EnableResourcePropertyConstraint() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"enableResourcePropertyConstraint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LoadBalancerTCPListener) Env() *alicloudroscdkcore.ResourceEnvironment {
	var returns *alicloudroscdkcore.ResourceEnvironment
	_jsii_.Get(
		j,
		"env",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LoadBalancerTCPListener) Id() *string {
	var returns *string
	_jsii_.Get(
		j,
		"id",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LoadBalancerTCPListener) Node() alicloudroscdkcore.ConstructNode {
	var returns alicloudroscdkcore.ConstructNode
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LoadBalancerTCPListener) PhysicalName() *string {
	var returns *string
	_jsii_.Get(
		j,
		"physicalName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LoadBalancerTCPListener) Props() *LoadBalancerTCPListenerProps {
	var returns *LoadBalancerTCPListenerProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LoadBalancerTCPListener) Ref() *string {
	var returns *string
	_jsii_.Get(
		j,
		"ref",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LoadBalancerTCPListener) Resource() alicloudroscdkcore.RosResource {
	var returns alicloudroscdkcore.RosResource
	_jsii_.Get(
		j,
		"resource",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LoadBalancerTCPListener) Scope() alicloudroscdkcore.Construct {
	var returns alicloudroscdkcore.Construct
	_jsii_.Get(
		j,
		"scope",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LoadBalancerTCPListener) Stack() alicloudroscdkcore.Stack {
	var returns alicloudroscdkcore.Stack
	_jsii_.Get(
		j,
		"stack",
		&returns,
	)
	return returns
}


// Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
func NewLoadBalancerTCPListener(scope alicloudroscdkcore.Construct, id *string, props *LoadBalancerTCPListenerProps, enableResourcePropertyConstraint *bool) LoadBalancerTCPListener {
	_init_.Initialize()

	if err := validateNewLoadBalancerTCPListenerParameters(scope, id, props); err != nil {
		panic(err)
	}
	j := jsiiProxy_LoadBalancerTCPListener{}

	_jsii_.Create(
		"@alicloud/ros-cdk-slb.datasource.LoadBalancerTCPListener",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		&j,
	)

	return &j
}

// Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
func NewLoadBalancerTCPListener_Override(l LoadBalancerTCPListener, scope alicloudroscdkcore.Construct, id *string, props *LoadBalancerTCPListenerProps, enableResourcePropertyConstraint *bool) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-slb.datasource.LoadBalancerTCPListener",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		l,
	)
}

func (j *jsiiProxy_LoadBalancerTCPListener)SetEnableResourcePropertyConstraint(val *bool) {
	if err := j.validateSetEnableResourcePropertyConstraintParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableResourcePropertyConstraint",
		val,
	)
}

func (j *jsiiProxy_LoadBalancerTCPListener)SetId(val *string) {
	if err := j.validateSetIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"id",
		val,
	)
}

func (j *jsiiProxy_LoadBalancerTCPListener)SetResource(val alicloudroscdkcore.RosResource) {
	_jsii_.Set(
		j,
		"resource",
		val,
	)
}

func (j *jsiiProxy_LoadBalancerTCPListener)SetScope(val alicloudroscdkcore.Construct) {
	if err := j.validateSetScopeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"scope",
		val,
	)
}

// Return whether the given object is a Construct.
func LoadBalancerTCPListener_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateLoadBalancerTCPListener_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-slb.datasource.LoadBalancerTCPListener",
		"isConstruct",
		[]interface{}{x},
		&returns,
	)

	return returns
}

func (l *jsiiProxy_LoadBalancerTCPListener) AddCondition(condition alicloudroscdkcore.RosCondition) {
	if err := l.validateAddConditionParameters(condition); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		l,
		"addCondition",
		[]interface{}{condition},
	)
}

func (l *jsiiProxy_LoadBalancerTCPListener) AddCount(count interface{}) {
	if err := l.validateAddCountParameters(count); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		l,
		"addCount",
		[]interface{}{count},
	)
}

func (l *jsiiProxy_LoadBalancerTCPListener) AddDependency(resource alicloudroscdkcore.Resource) {
	if err := l.validateAddDependencyParameters(resource); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		l,
		"addDependency",
		[]interface{}{resource},
	)
}

func (l *jsiiProxy_LoadBalancerTCPListener) AddResourceDesc(desc *string) {
	if err := l.validateAddResourceDescParameters(desc); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		l,
		"addResourceDesc",
		[]interface{}{desc},
	)
}

func (l *jsiiProxy_LoadBalancerTCPListener) ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy) {
	if err := l.validateApplyRemovalPolicyParameters(policy); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		l,
		"applyRemovalPolicy",
		[]interface{}{policy},
	)
}

func (l *jsiiProxy_LoadBalancerTCPListener) FetchCondition() alicloudroscdkcore.RosCondition {
	var returns alicloudroscdkcore.RosCondition

	_jsii_.Invoke(
		l,
		"fetchCondition",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (l *jsiiProxy_LoadBalancerTCPListener) FetchDependency() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		l,
		"fetchDependency",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (l *jsiiProxy_LoadBalancerTCPListener) FetchResourceDesc() *string {
	var returns *string

	_jsii_.Invoke(
		l,
		"fetchResourceDesc",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (l *jsiiProxy_LoadBalancerTCPListener) GeneratePhysicalName() *string {
	var returns *string

	_jsii_.Invoke(
		l,
		"generatePhysicalName",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (l *jsiiProxy_LoadBalancerTCPListener) GetAtt(name *string) alicloudroscdkcore.IResolvable {
	if err := l.validateGetAttParameters(name); err != nil {
		panic(err)
	}
	var returns alicloudroscdkcore.IResolvable

	_jsii_.Invoke(
		l,
		"getAtt",
		[]interface{}{name},
		&returns,
	)

	return returns
}

func (l *jsiiProxy_LoadBalancerTCPListener) OnPrepare() {
	_jsii_.InvokeVoid(
		l,
		"onPrepare",
		nil, // no parameters
	)
}

func (l *jsiiProxy_LoadBalancerTCPListener) OnSynthesize(session constructs.ISynthesisSession) {
	if err := l.validateOnSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		l,
		"onSynthesize",
		[]interface{}{session},
	)
}

func (l *jsiiProxy_LoadBalancerTCPListener) OnValidate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		l,
		"onValidate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (l *jsiiProxy_LoadBalancerTCPListener) Prepare() {
	_jsii_.InvokeVoid(
		l,
		"prepare",
		nil, // no parameters
	)
}

func (l *jsiiProxy_LoadBalancerTCPListener) SetMetadata(key *string, value interface{}) {
	if err := l.validateSetMetadataParameters(key, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		l,
		"setMetadata",
		[]interface{}{key, value},
	)
}

func (l *jsiiProxy_LoadBalancerTCPListener) Synthesize(session alicloudroscdkcore.ISynthesisSession) {
	if err := l.validateSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		l,
		"synthesize",
		[]interface{}{session},
	)
}

func (l *jsiiProxy_LoadBalancerTCPListener) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		l,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (l *jsiiProxy_LoadBalancerTCPListener) Validate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		l,
		"validate",
		nil, // no parameters
		&returns,
	)

	return returns
}

