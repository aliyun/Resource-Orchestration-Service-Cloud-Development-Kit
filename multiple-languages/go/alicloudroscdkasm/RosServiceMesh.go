package alicloudroscdkasm

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkasm/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkasm/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/aws/constructs-go/constructs/v3"
)

// This class is a base encapsulation around the ROS resource type `ALIYUN::ASM::ServiceMesh`.
type RosServiceMesh interface {
	alicloudroscdkcore.RosResource
	AccessLogEnabled() interface{}
	SetAccessLogEnabled(val interface{})
	AccessLogFile() interface{}
	SetAccessLogFile(val interface{})
	AccessLogFormat() interface{}
	SetAccessLogFormat(val interface{})
	AccessLogProject() interface{}
	SetAccessLogProject(val interface{})
	AccessLogServiceEnabled() interface{}
	SetAccessLogServiceEnabled(val interface{})
	AccessLogServiceHost() interface{}
	SetAccessLogServiceHost(val interface{})
	AccessLogServicePort() interface{}
	SetAccessLogServicePort(val interface{})
	ApiServerLoadBalancerSpec() interface{}
	SetApiServerLoadBalancerSpec(val interface{})
	ApiServerPublicEip() interface{}
	SetApiServerPublicEip(val interface{})
	AttrServiceMeshId() alicloudroscdkcore.IResolvable
	AuditProject() interface{}
	SetAuditProject(val interface{})
	AutoRenew() interface{}
	SetAutoRenew(val interface{})
	AutoRenewPeriod() interface{}
	SetAutoRenewPeriod(val interface{})
	CertChain() interface{}
	SetCertChain(val interface{})
	ChargeType() interface{}
	SetChargeType(val interface{})
	ClusterSpec() interface{}
	SetClusterSpec(val interface{})
	ConfigSourceEnabled() interface{}
	SetConfigSourceEnabled(val interface{})
	ConfigSourceNacosId() interface{}
	SetConfigSourceNacosId(val interface{})
	ControlPlaneLogEnabled() interface{}
	SetControlPlaneLogEnabled(val interface{})
	ControlPlaneLogProject() interface{}
	SetControlPlaneLogProject(val interface{})
	CrAggregationEnabled() interface{}
	SetCrAggregationEnabled(val interface{})
	// Returns: the stack trace of the point where this Resource was created from, sourced
	// from the +metadata+ entry typed +aliyun:ros:logicalId+, and with the bottom-most
	// node +internal+ entries filtered.
	CreationStack() *[]*string
	CustomizedPrometheus() interface{}
	SetCustomizedPrometheus(val interface{})
	CustomizedZipkin() interface{}
	SetCustomizedZipkin(val interface{})
	DnsProxyingEnabled() interface{}
	SetDnsProxyingEnabled(val interface{})
	DubboFilterEnabled() interface{}
	SetDubboFilterEnabled(val interface{})
	Edition() interface{}
	SetEdition(val interface{})
	EnableAcmg() interface{}
	SetEnableAcmg(val interface{})
	EnableAmbient() interface{}
	SetEnableAmbient(val interface{})
	EnableAudit() interface{}
	SetEnableAudit(val interface{})
	EnableCrHistory() interface{}
	SetEnableCrHistory(val interface{})
	EnableResourcePropertyConstraint() *bool
	SetEnableResourcePropertyConstraint(val *bool)
	EnableSdsServer() interface{}
	SetEnableSdsServer(val interface{})
	ExcludeInboundPorts() interface{}
	SetExcludeInboundPorts(val interface{})
	ExcludeIpRanges() interface{}
	SetExcludeIpRanges(val interface{})
	ExcludeOutboundPorts() interface{}
	SetExcludeOutboundPorts(val interface{})
	ExistingCaCert() interface{}
	SetExistingCaCert(val interface{})
	ExistingCaKey() interface{}
	SetExistingCaKey(val interface{})
	ExistingCaType() interface{}
	SetExistingCaType(val interface{})
	ExistingRootCaCert() interface{}
	SetExistingRootCaCert(val interface{})
	ExistingRootCaKey() interface{}
	SetExistingRootCaKey(val interface{})
	FilterGatewayClusterConfig() interface{}
	SetFilterGatewayClusterConfig(val interface{})
	GatewayApiEnabled() interface{}
	SetGatewayApiEnabled(val interface{})
	GuestCluster() interface{}
	SetGuestCluster(val interface{})
	IncludeIpRanges() interface{}
	SetIncludeIpRanges(val interface{})
	IstioVersion() interface{}
	SetIstioVersion(val interface{})
	KialiEnabled() interface{}
	SetKialiEnabled(val interface{})
	LocalityLbConf() interface{}
	SetLocalityLbConf(val interface{})
	LocalityLoadBalancing() interface{}
	SetLocalityLoadBalancing(val interface{})
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
	MseEnabled() interface{}
	SetMseEnabled(val interface{})
	MultiBufferEnabled() interface{}
	SetMultiBufferEnabled(val interface{})
	MultiBufferPollDelay() interface{}
	SetMultiBufferPollDelay(val interface{})
	MysqlFilterEnabled() interface{}
	SetMysqlFilterEnabled(val interface{})
	Name() interface{}
	SetName(val interface{})
	// The construct tree node associated with this construct.
	Node() alicloudroscdkcore.ConstructNode
	Opa() interface{}
	SetOpa(val interface{})
	OpaEnabled() interface{}
	SetOpaEnabled(val interface{})
	OutboundTrafficPolicy() interface{}
	SetOutboundTrafficPolicy(val interface{})
	Period() interface{}
	SetPeriod(val interface{})
	PilotLoadBalancerSpec() interface{}
	SetPilotLoadBalancerSpec(val interface{})
	PilotPublicEip() interface{}
	SetPilotPublicEip(val interface{})
	PlaygroundScene() interface{}
	SetPlaygroundScene(val interface{})
	PrometheusUrl() interface{}
	SetPrometheusUrl(val interface{})
	Proxy() interface{}
	SetProxy(val interface{})
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
	Telemetry() interface{}
	SetTelemetry(val interface{})
	TraceSampling() interface{}
	SetTraceSampling(val interface{})
	Tracing() interface{}
	SetTracing(val interface{})
	// Return properties modified after initiation.
	//
	// Resources that expose mutable properties should override this function to
	// collect and return the properties object for this resource.
	UpdatedProperites() *map[string]interface{}
	UseExistingCa() interface{}
	SetUseExistingCa(val interface{})
	VpcId() interface{}
	SetVpcId(val interface{})
	VSwitches() interface{}
	SetVSwitches(val interface{})
	WebAssemblyFilterEnabled() interface{}
	SetWebAssemblyFilterEnabled(val interface{})
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

// The jsii proxy struct for RosServiceMesh
type jsiiProxy_RosServiceMesh struct {
	internal.Type__alicloudroscdkcoreRosResource
}

func (j *jsiiProxy_RosServiceMesh) AccessLogEnabled() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"accessLogEnabled",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceMesh) AccessLogFile() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"accessLogFile",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceMesh) AccessLogFormat() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"accessLogFormat",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceMesh) AccessLogProject() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"accessLogProject",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceMesh) AccessLogServiceEnabled() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"accessLogServiceEnabled",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceMesh) AccessLogServiceHost() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"accessLogServiceHost",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceMesh) AccessLogServicePort() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"accessLogServicePort",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceMesh) ApiServerLoadBalancerSpec() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"apiServerLoadBalancerSpec",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceMesh) ApiServerPublicEip() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"apiServerPublicEip",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceMesh) AttrServiceMeshId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrServiceMeshId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceMesh) AuditProject() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"auditProject",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceMesh) AutoRenew() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"autoRenew",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceMesh) AutoRenewPeriod() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"autoRenewPeriod",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceMesh) CertChain() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"certChain",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceMesh) ChargeType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"chargeType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceMesh) ClusterSpec() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"clusterSpec",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceMesh) ConfigSourceEnabled() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"configSourceEnabled",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceMesh) ConfigSourceNacosId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"configSourceNacosId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceMesh) ControlPlaneLogEnabled() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"controlPlaneLogEnabled",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceMesh) ControlPlaneLogProject() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"controlPlaneLogProject",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceMesh) CrAggregationEnabled() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"crAggregationEnabled",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceMesh) CreationStack() *[]*string {
	var returns *[]*string
	_jsii_.Get(
		j,
		"creationStack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceMesh) CustomizedPrometheus() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"customizedPrometheus",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceMesh) CustomizedZipkin() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"customizedZipkin",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceMesh) DnsProxyingEnabled() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"dnsProxyingEnabled",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceMesh) DubboFilterEnabled() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"dubboFilterEnabled",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceMesh) Edition() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"edition",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceMesh) EnableAcmg() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"enableAcmg",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceMesh) EnableAmbient() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"enableAmbient",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceMesh) EnableAudit() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"enableAudit",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceMesh) EnableCrHistory() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"enableCrHistory",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceMesh) EnableResourcePropertyConstraint() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"enableResourcePropertyConstraint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceMesh) EnableSdsServer() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"enableSdsServer",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceMesh) ExcludeInboundPorts() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"excludeInboundPorts",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceMesh) ExcludeIpRanges() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"excludeIpRanges",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceMesh) ExcludeOutboundPorts() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"excludeOutboundPorts",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceMesh) ExistingCaCert() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"existingCaCert",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceMesh) ExistingCaKey() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"existingCaKey",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceMesh) ExistingCaType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"existingCaType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceMesh) ExistingRootCaCert() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"existingRootCaCert",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceMesh) ExistingRootCaKey() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"existingRootCaKey",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceMesh) FilterGatewayClusterConfig() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"filterGatewayClusterConfig",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceMesh) GatewayApiEnabled() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"gatewayApiEnabled",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceMesh) GuestCluster() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"guestCluster",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceMesh) IncludeIpRanges() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"includeIpRanges",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceMesh) IstioVersion() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"istioVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceMesh) KialiEnabled() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"kialiEnabled",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceMesh) LocalityLbConf() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"localityLbConf",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceMesh) LocalityLoadBalancing() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"localityLoadBalancing",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceMesh) LogicalId() *string {
	var returns *string
	_jsii_.Get(
		j,
		"logicalId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceMesh) MseEnabled() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"mseEnabled",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceMesh) MultiBufferEnabled() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"multiBufferEnabled",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceMesh) MultiBufferPollDelay() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"multiBufferPollDelay",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceMesh) MysqlFilterEnabled() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"mysqlFilterEnabled",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceMesh) Name() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"name",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceMesh) Node() alicloudroscdkcore.ConstructNode {
	var returns alicloudroscdkcore.ConstructNode
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceMesh) Opa() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"opa",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceMesh) OpaEnabled() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"opaEnabled",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceMesh) OutboundTrafficPolicy() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"outboundTrafficPolicy",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceMesh) Period() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"period",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceMesh) PilotLoadBalancerSpec() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"pilotLoadBalancerSpec",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceMesh) PilotPublicEip() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"pilotPublicEip",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceMesh) PlaygroundScene() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"playgroundScene",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceMesh) PrometheusUrl() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"prometheusUrl",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceMesh) Proxy() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"proxy",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceMesh) Ref() *string {
	var returns *string
	_jsii_.Get(
		j,
		"ref",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceMesh) RosOptions() alicloudroscdkcore.IRosResourceOptions {
	var returns alicloudroscdkcore.IRosResourceOptions
	_jsii_.Get(
		j,
		"rosOptions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceMesh) RosProperties() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"rosProperties",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceMesh) RosResourceType() *string {
	var returns *string
	_jsii_.Get(
		j,
		"rosResourceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceMesh) Stack() alicloudroscdkcore.Stack {
	var returns alicloudroscdkcore.Stack
	_jsii_.Get(
		j,
		"stack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceMesh) Telemetry() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"telemetry",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceMesh) TraceSampling() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"traceSampling",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceMesh) Tracing() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"tracing",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceMesh) UpdatedProperites() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"updatedProperites",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceMesh) UseExistingCa() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"useExistingCa",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceMesh) VpcId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"vpcId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceMesh) VSwitches() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"vSwitches",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceMesh) WebAssemblyFilterEnabled() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"webAssemblyFilterEnabled",
		&returns,
	)
	return returns
}


func NewRosServiceMesh(scope alicloudroscdkcore.Construct, id *string, props *RosServiceMeshProps, enableResourcePropertyConstraint *bool) RosServiceMesh {
	_init_.Initialize()

	if err := validateNewRosServiceMeshParameters(scope, id, props, enableResourcePropertyConstraint); err != nil {
		panic(err)
	}
	j := jsiiProxy_RosServiceMesh{}

	_jsii_.Create(
		"@alicloud/ros-cdk-asm.RosServiceMesh",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		&j,
	)

	return &j
}

func NewRosServiceMesh_Override(r RosServiceMesh, scope alicloudroscdkcore.Construct, id *string, props *RosServiceMeshProps, enableResourcePropertyConstraint *bool) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-asm.RosServiceMesh",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		r,
	)
}

func (j *jsiiProxy_RosServiceMesh)SetAccessLogEnabled(val interface{}) {
	if err := j.validateSetAccessLogEnabledParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"accessLogEnabled",
		val,
	)
}

func (j *jsiiProxy_RosServiceMesh)SetAccessLogFile(val interface{}) {
	if err := j.validateSetAccessLogFileParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"accessLogFile",
		val,
	)
}

func (j *jsiiProxy_RosServiceMesh)SetAccessLogFormat(val interface{}) {
	if err := j.validateSetAccessLogFormatParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"accessLogFormat",
		val,
	)
}

func (j *jsiiProxy_RosServiceMesh)SetAccessLogProject(val interface{}) {
	if err := j.validateSetAccessLogProjectParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"accessLogProject",
		val,
	)
}

func (j *jsiiProxy_RosServiceMesh)SetAccessLogServiceEnabled(val interface{}) {
	if err := j.validateSetAccessLogServiceEnabledParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"accessLogServiceEnabled",
		val,
	)
}

func (j *jsiiProxy_RosServiceMesh)SetAccessLogServiceHost(val interface{}) {
	if err := j.validateSetAccessLogServiceHostParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"accessLogServiceHost",
		val,
	)
}

func (j *jsiiProxy_RosServiceMesh)SetAccessLogServicePort(val interface{}) {
	if err := j.validateSetAccessLogServicePortParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"accessLogServicePort",
		val,
	)
}

func (j *jsiiProxy_RosServiceMesh)SetApiServerLoadBalancerSpec(val interface{}) {
	if err := j.validateSetApiServerLoadBalancerSpecParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"apiServerLoadBalancerSpec",
		val,
	)
}

func (j *jsiiProxy_RosServiceMesh)SetApiServerPublicEip(val interface{}) {
	if err := j.validateSetApiServerPublicEipParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"apiServerPublicEip",
		val,
	)
}

func (j *jsiiProxy_RosServiceMesh)SetAuditProject(val interface{}) {
	if err := j.validateSetAuditProjectParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"auditProject",
		val,
	)
}

func (j *jsiiProxy_RosServiceMesh)SetAutoRenew(val interface{}) {
	if err := j.validateSetAutoRenewParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"autoRenew",
		val,
	)
}

func (j *jsiiProxy_RosServiceMesh)SetAutoRenewPeriod(val interface{}) {
	if err := j.validateSetAutoRenewPeriodParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"autoRenewPeriod",
		val,
	)
}

func (j *jsiiProxy_RosServiceMesh)SetCertChain(val interface{}) {
	if err := j.validateSetCertChainParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"certChain",
		val,
	)
}

func (j *jsiiProxy_RosServiceMesh)SetChargeType(val interface{}) {
	if err := j.validateSetChargeTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"chargeType",
		val,
	)
}

func (j *jsiiProxy_RosServiceMesh)SetClusterSpec(val interface{}) {
	if err := j.validateSetClusterSpecParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"clusterSpec",
		val,
	)
}

func (j *jsiiProxy_RosServiceMesh)SetConfigSourceEnabled(val interface{}) {
	if err := j.validateSetConfigSourceEnabledParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"configSourceEnabled",
		val,
	)
}

func (j *jsiiProxy_RosServiceMesh)SetConfigSourceNacosId(val interface{}) {
	if err := j.validateSetConfigSourceNacosIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"configSourceNacosId",
		val,
	)
}

func (j *jsiiProxy_RosServiceMesh)SetControlPlaneLogEnabled(val interface{}) {
	if err := j.validateSetControlPlaneLogEnabledParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"controlPlaneLogEnabled",
		val,
	)
}

func (j *jsiiProxy_RosServiceMesh)SetControlPlaneLogProject(val interface{}) {
	if err := j.validateSetControlPlaneLogProjectParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"controlPlaneLogProject",
		val,
	)
}

func (j *jsiiProxy_RosServiceMesh)SetCrAggregationEnabled(val interface{}) {
	if err := j.validateSetCrAggregationEnabledParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"crAggregationEnabled",
		val,
	)
}

func (j *jsiiProxy_RosServiceMesh)SetCustomizedPrometheus(val interface{}) {
	if err := j.validateSetCustomizedPrometheusParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"customizedPrometheus",
		val,
	)
}

func (j *jsiiProxy_RosServiceMesh)SetCustomizedZipkin(val interface{}) {
	if err := j.validateSetCustomizedZipkinParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"customizedZipkin",
		val,
	)
}

func (j *jsiiProxy_RosServiceMesh)SetDnsProxyingEnabled(val interface{}) {
	if err := j.validateSetDnsProxyingEnabledParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"dnsProxyingEnabled",
		val,
	)
}

func (j *jsiiProxy_RosServiceMesh)SetDubboFilterEnabled(val interface{}) {
	if err := j.validateSetDubboFilterEnabledParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"dubboFilterEnabled",
		val,
	)
}

func (j *jsiiProxy_RosServiceMesh)SetEdition(val interface{}) {
	if err := j.validateSetEditionParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"edition",
		val,
	)
}

func (j *jsiiProxy_RosServiceMesh)SetEnableAcmg(val interface{}) {
	if err := j.validateSetEnableAcmgParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableAcmg",
		val,
	)
}

func (j *jsiiProxy_RosServiceMesh)SetEnableAmbient(val interface{}) {
	if err := j.validateSetEnableAmbientParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableAmbient",
		val,
	)
}

func (j *jsiiProxy_RosServiceMesh)SetEnableAudit(val interface{}) {
	if err := j.validateSetEnableAuditParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableAudit",
		val,
	)
}

func (j *jsiiProxy_RosServiceMesh)SetEnableCrHistory(val interface{}) {
	if err := j.validateSetEnableCrHistoryParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableCrHistory",
		val,
	)
}

func (j *jsiiProxy_RosServiceMesh)SetEnableResourcePropertyConstraint(val *bool) {
	if err := j.validateSetEnableResourcePropertyConstraintParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableResourcePropertyConstraint",
		val,
	)
}

func (j *jsiiProxy_RosServiceMesh)SetEnableSdsServer(val interface{}) {
	if err := j.validateSetEnableSdsServerParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableSdsServer",
		val,
	)
}

func (j *jsiiProxy_RosServiceMesh)SetExcludeInboundPorts(val interface{}) {
	if err := j.validateSetExcludeInboundPortsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"excludeInboundPorts",
		val,
	)
}

func (j *jsiiProxy_RosServiceMesh)SetExcludeIpRanges(val interface{}) {
	if err := j.validateSetExcludeIpRangesParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"excludeIpRanges",
		val,
	)
}

func (j *jsiiProxy_RosServiceMesh)SetExcludeOutboundPorts(val interface{}) {
	if err := j.validateSetExcludeOutboundPortsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"excludeOutboundPorts",
		val,
	)
}

func (j *jsiiProxy_RosServiceMesh)SetExistingCaCert(val interface{}) {
	if err := j.validateSetExistingCaCertParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"existingCaCert",
		val,
	)
}

func (j *jsiiProxy_RosServiceMesh)SetExistingCaKey(val interface{}) {
	if err := j.validateSetExistingCaKeyParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"existingCaKey",
		val,
	)
}

func (j *jsiiProxy_RosServiceMesh)SetExistingCaType(val interface{}) {
	if err := j.validateSetExistingCaTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"existingCaType",
		val,
	)
}

func (j *jsiiProxy_RosServiceMesh)SetExistingRootCaCert(val interface{}) {
	if err := j.validateSetExistingRootCaCertParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"existingRootCaCert",
		val,
	)
}

func (j *jsiiProxy_RosServiceMesh)SetExistingRootCaKey(val interface{}) {
	if err := j.validateSetExistingRootCaKeyParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"existingRootCaKey",
		val,
	)
}

func (j *jsiiProxy_RosServiceMesh)SetFilterGatewayClusterConfig(val interface{}) {
	if err := j.validateSetFilterGatewayClusterConfigParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"filterGatewayClusterConfig",
		val,
	)
}

func (j *jsiiProxy_RosServiceMesh)SetGatewayApiEnabled(val interface{}) {
	if err := j.validateSetGatewayApiEnabledParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"gatewayApiEnabled",
		val,
	)
}

func (j *jsiiProxy_RosServiceMesh)SetGuestCluster(val interface{}) {
	if err := j.validateSetGuestClusterParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"guestCluster",
		val,
	)
}

func (j *jsiiProxy_RosServiceMesh)SetIncludeIpRanges(val interface{}) {
	if err := j.validateSetIncludeIpRangesParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"includeIpRanges",
		val,
	)
}

func (j *jsiiProxy_RosServiceMesh)SetIstioVersion(val interface{}) {
	if err := j.validateSetIstioVersionParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"istioVersion",
		val,
	)
}

func (j *jsiiProxy_RosServiceMesh)SetKialiEnabled(val interface{}) {
	if err := j.validateSetKialiEnabledParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"kialiEnabled",
		val,
	)
}

func (j *jsiiProxy_RosServiceMesh)SetLocalityLbConf(val interface{}) {
	if err := j.validateSetLocalityLbConfParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"localityLbConf",
		val,
	)
}

func (j *jsiiProxy_RosServiceMesh)SetLocalityLoadBalancing(val interface{}) {
	if err := j.validateSetLocalityLoadBalancingParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"localityLoadBalancing",
		val,
	)
}

func (j *jsiiProxy_RosServiceMesh)SetMseEnabled(val interface{}) {
	if err := j.validateSetMseEnabledParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"mseEnabled",
		val,
	)
}

func (j *jsiiProxy_RosServiceMesh)SetMultiBufferEnabled(val interface{}) {
	if err := j.validateSetMultiBufferEnabledParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"multiBufferEnabled",
		val,
	)
}

func (j *jsiiProxy_RosServiceMesh)SetMultiBufferPollDelay(val interface{}) {
	if err := j.validateSetMultiBufferPollDelayParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"multiBufferPollDelay",
		val,
	)
}

func (j *jsiiProxy_RosServiceMesh)SetMysqlFilterEnabled(val interface{}) {
	if err := j.validateSetMysqlFilterEnabledParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"mysqlFilterEnabled",
		val,
	)
}

func (j *jsiiProxy_RosServiceMesh)SetName(val interface{}) {
	if err := j.validateSetNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"name",
		val,
	)
}

func (j *jsiiProxy_RosServiceMesh)SetOpa(val interface{}) {
	if err := j.validateSetOpaParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"opa",
		val,
	)
}

func (j *jsiiProxy_RosServiceMesh)SetOpaEnabled(val interface{}) {
	if err := j.validateSetOpaEnabledParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"opaEnabled",
		val,
	)
}

func (j *jsiiProxy_RosServiceMesh)SetOutboundTrafficPolicy(val interface{}) {
	if err := j.validateSetOutboundTrafficPolicyParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"outboundTrafficPolicy",
		val,
	)
}

func (j *jsiiProxy_RosServiceMesh)SetPeriod(val interface{}) {
	if err := j.validateSetPeriodParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"period",
		val,
	)
}

func (j *jsiiProxy_RosServiceMesh)SetPilotLoadBalancerSpec(val interface{}) {
	if err := j.validateSetPilotLoadBalancerSpecParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"pilotLoadBalancerSpec",
		val,
	)
}

func (j *jsiiProxy_RosServiceMesh)SetPilotPublicEip(val interface{}) {
	if err := j.validateSetPilotPublicEipParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"pilotPublicEip",
		val,
	)
}

func (j *jsiiProxy_RosServiceMesh)SetPlaygroundScene(val interface{}) {
	if err := j.validateSetPlaygroundSceneParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"playgroundScene",
		val,
	)
}

func (j *jsiiProxy_RosServiceMesh)SetPrometheusUrl(val interface{}) {
	if err := j.validateSetPrometheusUrlParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"prometheusUrl",
		val,
	)
}

func (j *jsiiProxy_RosServiceMesh)SetProxy(val interface{}) {
	if err := j.validateSetProxyParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"proxy",
		val,
	)
}

func (j *jsiiProxy_RosServiceMesh)SetTelemetry(val interface{}) {
	if err := j.validateSetTelemetryParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"telemetry",
		val,
	)
}

func (j *jsiiProxy_RosServiceMesh)SetTraceSampling(val interface{}) {
	if err := j.validateSetTraceSamplingParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"traceSampling",
		val,
	)
}

func (j *jsiiProxy_RosServiceMesh)SetTracing(val interface{}) {
	if err := j.validateSetTracingParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"tracing",
		val,
	)
}

func (j *jsiiProxy_RosServiceMesh)SetUseExistingCa(val interface{}) {
	if err := j.validateSetUseExistingCaParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"useExistingCa",
		val,
	)
}

func (j *jsiiProxy_RosServiceMesh)SetVpcId(val interface{}) {
	if err := j.validateSetVpcIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"vpcId",
		val,
	)
}

func (j *jsiiProxy_RosServiceMesh)SetVSwitches(val interface{}) {
	if err := j.validateSetVSwitchesParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"vSwitches",
		val,
	)
}

func (j *jsiiProxy_RosServiceMesh)SetWebAssemblyFilterEnabled(val interface{}) {
	if err := j.validateSetWebAssemblyFilterEnabledParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"webAssemblyFilterEnabled",
		val,
	)
}

// Return whether the given object is a Construct.
func RosServiceMesh_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosServiceMesh_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-asm.RosServiceMesh",
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
func RosServiceMesh_IsRosElement(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosServiceMesh_IsRosElementParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-asm.RosServiceMesh",
		"isRosElement",
		[]interface{}{x},
		&returns,
	)

	return returns
}

// Check whether the given construct is a RosResource.
func RosServiceMesh_IsRosResource(construct alicloudroscdkcore.IConstruct) *bool {
	_init_.Initialize()

	if err := validateRosServiceMesh_IsRosResourceParameters(construct); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-asm.RosServiceMesh",
		"isRosResource",
		[]interface{}{construct},
		&returns,
	)

	return returns
}

func RosServiceMesh_ROS_RESOURCE_TYPE_NAME() *string {
	_init_.Initialize()
	var returns *string
	_jsii_.StaticGet(
		"@alicloud/ros-cdk-asm.RosServiceMesh",
		"ROS_RESOURCE_TYPE_NAME",
		&returns,
	)
	return returns
}

func (r *jsiiProxy_RosServiceMesh) AddCondition(con alicloudroscdkcore.RosCondition) {
	if err := r.validateAddConditionParameters(con); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCondition",
		[]interface{}{con},
	)
}

func (r *jsiiProxy_RosServiceMesh) AddCount(count interface{}) {
	if err := r.validateAddCountParameters(count); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCount",
		[]interface{}{count},
	)
}

func (r *jsiiProxy_RosServiceMesh) AddDeletionOverride(path *string) {
	if err := r.validateAddDeletionOverrideParameters(path); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDeletionOverride",
		[]interface{}{path},
	)
}

func (r *jsiiProxy_RosServiceMesh) AddDependsOn(target alicloudroscdkcore.RosResource) {
	if err := r.validateAddDependsOnParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDependsOn",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosServiceMesh) AddDesc(desc *string) {
	if err := r.validateAddDescParameters(desc); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDesc",
		[]interface{}{desc},
	)
}

func (r *jsiiProxy_RosServiceMesh) AddMetaData(key *string, value interface{}) {
	if err := r.validateAddMetaDataParameters(key, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addMetaData",
		[]interface{}{key, value},
	)
}

func (r *jsiiProxy_RosServiceMesh) AddOverride(path *string, value interface{}) {
	if err := r.validateAddOverrideParameters(path, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addOverride",
		[]interface{}{path, value},
	)
}

func (r *jsiiProxy_RosServiceMesh) AddPropertyDeletionOverride(propertyPath *string) {
	if err := r.validateAddPropertyDeletionOverrideParameters(propertyPath); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyDeletionOverride",
		[]interface{}{propertyPath},
	)
}

func (r *jsiiProxy_RosServiceMesh) AddPropertyOverride(propertyPath *string, value interface{}) {
	if err := r.validateAddPropertyOverrideParameters(propertyPath, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyOverride",
		[]interface{}{propertyPath, value},
	)
}

func (r *jsiiProxy_RosServiceMesh) AddRosDependency(target *string) {
	if err := r.validateAddRosDependencyParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addRosDependency",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosServiceMesh) ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy, options *alicloudroscdkcore.RemovalPolicyOptions) {
	if err := r.validateApplyRemovalPolicyParameters(options); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"applyRemovalPolicy",
		[]interface{}{policy, options},
	)
}

func (r *jsiiProxy_RosServiceMesh) FetchCondition() alicloudroscdkcore.RosCondition {
	var returns alicloudroscdkcore.RosCondition

	_jsii_.Invoke(
		r,
		"fetchCondition",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosServiceMesh) FetchDesc() *string {
	var returns *string

	_jsii_.Invoke(
		r,
		"fetchDesc",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosServiceMesh) FetchRosDependency() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"fetchRosDependency",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosServiceMesh) GetAtt(attributeName *string) alicloudroscdkcore.Reference {
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

func (r *jsiiProxy_RosServiceMesh) OnPrepare() {
	_jsii_.InvokeVoid(
		r,
		"onPrepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosServiceMesh) OnSynthesize(session constructs.ISynthesisSession) {
	if err := r.validateOnSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"onSynthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosServiceMesh) OnValidate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"onValidate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosServiceMesh) OverrideLogicalId(newLogicalId *string) {
	if err := r.validateOverrideLogicalIdParameters(newLogicalId); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"overrideLogicalId",
		[]interface{}{newLogicalId},
	)
}

func (r *jsiiProxy_RosServiceMesh) Prepare() {
	_jsii_.InvokeVoid(
		r,
		"prepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosServiceMesh) RenderProperties(props *map[string]interface{}) *map[string]interface{} {
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

func (r *jsiiProxy_RosServiceMesh) Synthesize(session alicloudroscdkcore.ISynthesisSession) {
	if err := r.validateSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"synthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosServiceMesh) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		r,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosServiceMesh) Validate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"validate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosServiceMesh) ValidateProperties(_properties interface{}) {
	if err := r.validateValidatePropertiesParameters(_properties); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"validateProperties",
		[]interface{}{_properties},
	)
}

