package alicloudroscdkasm

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkasm/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkasm/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/aws/constructs-go/constructs/v3"
)

// This class is a base encapsulation around the ROS resource type `ALIYUN::ASM::ServiceMesh`, which is used to create an Alibaba Cloud Service Mesh (ASM) instance.
type RosServiceMesh interface {
	alicloudroscdkcore.RosResource
	ApiServerPublicEip() interface{}
	SetApiServerPublicEip(val interface{})
	AttrServiceMeshId() alicloudroscdkcore.IResolvable
	AuditProject() interface{}
	SetAuditProject(val interface{})
	// Returns: the stack trace of the point where this Resource was created from, sourced
	// from the +metadata+ entry typed +aliyun:ros:logicalId+, and with the bottom-most
	// node +internal+ entries filtered.
	CreationStack() *[]*string
	CustomizedZipkin() interface{}
	SetCustomizedZipkin(val interface{})
	EnableAudit() interface{}
	SetEnableAudit(val interface{})
	EnableResourcePropertyConstraint() *bool
	SetEnableResourcePropertyConstraint(val *bool)
	IncludeIpRanges() interface{}
	SetIncludeIpRanges(val interface{})
	IstioVersion() interface{}
	SetIstioVersion(val interface{})
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
	Name() interface{}
	SetName(val interface{})
	// The construct tree node associated with this construct.
	Node() alicloudroscdkcore.ConstructNode
	Opa() interface{}
	SetOpa(val interface{})
	OutboundTrafficPolicy() interface{}
	SetOutboundTrafficPolicy(val interface{})
	PilotPublicEip() interface{}
	SetPilotPublicEip(val interface{})
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
	VpcId() interface{}
	SetVpcId(val interface{})
	VSwitches() interface{}
	SetVSwitches(val interface{})
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

// The jsii proxy struct for RosServiceMesh
type jsiiProxy_RosServiceMesh struct {
	internal.Type__alicloudroscdkcoreRosResource
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

func (j *jsiiProxy_RosServiceMesh) CreationStack() *[]*string {
	var returns *[]*string
	_jsii_.Get(
		j,
		"creationStack",
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

func (j *jsiiProxy_RosServiceMesh) EnableAudit() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"enableAudit",
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

func (j *jsiiProxy_RosServiceMesh) OutboundTrafficPolicy() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"outboundTrafficPolicy",
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

