package alicloudroscdkcloudfw

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkcloudfw/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcloudfw/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/aws/constructs-go/constructs/v3"
)

// This class is a base encapsulation around the ROS resource type `ALIYUN::CLOUDFW::TrFirewall`, which is used to create a virtual private cloud (VPC) firewall for a transit router.
type RosTrFirewall interface {
	alicloudroscdkcore.RosResource
	AttrFirewallId() alicloudroscdkcore.IResolvable
	CenId() interface{}
	SetCenId(val interface{})
	// Returns: the stack trace of the point where this Resource was created from, sourced
	// from the +metadata+ entry typed +aliyun:ros:logicalId+, and with the bottom-most
	// node +internal+ entries filtered.
	CreationStack() *[]*string
	EnableResourcePropertyConstraint() *bool
	SetEnableResourcePropertyConstraint(val *bool)
	FirewallDescription() interface{}
	SetFirewallDescription(val interface{})
	FirewallName() interface{}
	SetFirewallName(val interface{})
	FirewallSubnetCidr() interface{}
	SetFirewallSubnetCidr(val interface{})
	FirewallVpcCidr() interface{}
	SetFirewallVpcCidr(val interface{})
	FirewallVpcId() interface{}
	SetFirewallVpcId(val interface{})
	FirewallVswitchId() interface{}
	SetFirewallVswitchId(val interface{})
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
	RegionNo() interface{}
	SetRegionNo(val interface{})
	// Options for this resource, such as condition, update policy etc.
	RosOptions() alicloudroscdkcore.IRosResourceOptions
	RosProperties() *map[string]interface{}
	// ROS resource type.
	RosResourceType() *string
	RouteMode() interface{}
	SetRouteMode(val interface{})
	// The stack in which this element is defined.
	//
	// RosElements must be defined within a stack scope (directly or indirectly).
	Stack() alicloudroscdkcore.Stack
	TransitRouterId() interface{}
	SetTransitRouterId(val interface{})
	TrAttachmentMasterCidr() interface{}
	SetTrAttachmentMasterCidr(val interface{})
	TrAttachmentMasterZone() interface{}
	SetTrAttachmentMasterZone(val interface{})
	TrAttachmentSlaveCidr() interface{}
	SetTrAttachmentSlaveCidr(val interface{})
	TrAttachmentSlaveZone() interface{}
	SetTrAttachmentSlaveZone(val interface{})
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

// The jsii proxy struct for RosTrFirewall
type jsiiProxy_RosTrFirewall struct {
	internal.Type__alicloudroscdkcoreRosResource
}

func (j *jsiiProxy_RosTrFirewall) AttrFirewallId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrFirewallId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTrFirewall) CenId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"cenId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTrFirewall) CreationStack() *[]*string {
	var returns *[]*string
	_jsii_.Get(
		j,
		"creationStack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTrFirewall) EnableResourcePropertyConstraint() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"enableResourcePropertyConstraint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTrFirewall) FirewallDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"firewallDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTrFirewall) FirewallName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"firewallName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTrFirewall) FirewallSubnetCidr() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"firewallSubnetCidr",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTrFirewall) FirewallVpcCidr() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"firewallVpcCidr",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTrFirewall) FirewallVpcId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"firewallVpcId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTrFirewall) FirewallVswitchId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"firewallVswitchId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTrFirewall) LogicalId() *string {
	var returns *string
	_jsii_.Get(
		j,
		"logicalId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTrFirewall) Node() alicloudroscdkcore.ConstructNode {
	var returns alicloudroscdkcore.ConstructNode
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTrFirewall) Ref() *string {
	var returns *string
	_jsii_.Get(
		j,
		"ref",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTrFirewall) RegionNo() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"regionNo",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTrFirewall) RosOptions() alicloudroscdkcore.IRosResourceOptions {
	var returns alicloudroscdkcore.IRosResourceOptions
	_jsii_.Get(
		j,
		"rosOptions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTrFirewall) RosProperties() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"rosProperties",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTrFirewall) RosResourceType() *string {
	var returns *string
	_jsii_.Get(
		j,
		"rosResourceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTrFirewall) RouteMode() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"routeMode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTrFirewall) Stack() alicloudroscdkcore.Stack {
	var returns alicloudroscdkcore.Stack
	_jsii_.Get(
		j,
		"stack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTrFirewall) TransitRouterId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"transitRouterId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTrFirewall) TrAttachmentMasterCidr() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"trAttachmentMasterCidr",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTrFirewall) TrAttachmentMasterZone() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"trAttachmentMasterZone",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTrFirewall) TrAttachmentSlaveCidr() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"trAttachmentSlaveCidr",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTrFirewall) TrAttachmentSlaveZone() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"trAttachmentSlaveZone",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTrFirewall) UpdatedProperites() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"updatedProperites",
		&returns,
	)
	return returns
}


func NewRosTrFirewall(scope alicloudroscdkcore.Construct, id *string, props *RosTrFirewallProps, enableResourcePropertyConstraint *bool) RosTrFirewall {
	_init_.Initialize()

	if err := validateNewRosTrFirewallParameters(scope, id, props, enableResourcePropertyConstraint); err != nil {
		panic(err)
	}
	j := jsiiProxy_RosTrFirewall{}

	_jsii_.Create(
		"@alicloud/ros-cdk-cloudfw.RosTrFirewall",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		&j,
	)

	return &j
}

func NewRosTrFirewall_Override(r RosTrFirewall, scope alicloudroscdkcore.Construct, id *string, props *RosTrFirewallProps, enableResourcePropertyConstraint *bool) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-cloudfw.RosTrFirewall",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		r,
	)
}

func (j *jsiiProxy_RosTrFirewall)SetCenId(val interface{}) {
	if err := j.validateSetCenIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"cenId",
		val,
	)
}

func (j *jsiiProxy_RosTrFirewall)SetEnableResourcePropertyConstraint(val *bool) {
	if err := j.validateSetEnableResourcePropertyConstraintParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableResourcePropertyConstraint",
		val,
	)
}

func (j *jsiiProxy_RosTrFirewall)SetFirewallDescription(val interface{}) {
	if err := j.validateSetFirewallDescriptionParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"firewallDescription",
		val,
	)
}

func (j *jsiiProxy_RosTrFirewall)SetFirewallName(val interface{}) {
	if err := j.validateSetFirewallNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"firewallName",
		val,
	)
}

func (j *jsiiProxy_RosTrFirewall)SetFirewallSubnetCidr(val interface{}) {
	if err := j.validateSetFirewallSubnetCidrParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"firewallSubnetCidr",
		val,
	)
}

func (j *jsiiProxy_RosTrFirewall)SetFirewallVpcCidr(val interface{}) {
	if err := j.validateSetFirewallVpcCidrParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"firewallVpcCidr",
		val,
	)
}

func (j *jsiiProxy_RosTrFirewall)SetFirewallVpcId(val interface{}) {
	if err := j.validateSetFirewallVpcIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"firewallVpcId",
		val,
	)
}

func (j *jsiiProxy_RosTrFirewall)SetFirewallVswitchId(val interface{}) {
	if err := j.validateSetFirewallVswitchIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"firewallVswitchId",
		val,
	)
}

func (j *jsiiProxy_RosTrFirewall)SetRegionNo(val interface{}) {
	if err := j.validateSetRegionNoParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"regionNo",
		val,
	)
}

func (j *jsiiProxy_RosTrFirewall)SetRouteMode(val interface{}) {
	if err := j.validateSetRouteModeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"routeMode",
		val,
	)
}

func (j *jsiiProxy_RosTrFirewall)SetTransitRouterId(val interface{}) {
	if err := j.validateSetTransitRouterIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"transitRouterId",
		val,
	)
}

func (j *jsiiProxy_RosTrFirewall)SetTrAttachmentMasterCidr(val interface{}) {
	if err := j.validateSetTrAttachmentMasterCidrParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"trAttachmentMasterCidr",
		val,
	)
}

func (j *jsiiProxy_RosTrFirewall)SetTrAttachmentMasterZone(val interface{}) {
	if err := j.validateSetTrAttachmentMasterZoneParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"trAttachmentMasterZone",
		val,
	)
}

func (j *jsiiProxy_RosTrFirewall)SetTrAttachmentSlaveCidr(val interface{}) {
	if err := j.validateSetTrAttachmentSlaveCidrParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"trAttachmentSlaveCidr",
		val,
	)
}

func (j *jsiiProxy_RosTrFirewall)SetTrAttachmentSlaveZone(val interface{}) {
	if err := j.validateSetTrAttachmentSlaveZoneParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"trAttachmentSlaveZone",
		val,
	)
}

// Return whether the given object is a Construct.
func RosTrFirewall_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosTrFirewall_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-cloudfw.RosTrFirewall",
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
func RosTrFirewall_IsRosElement(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosTrFirewall_IsRosElementParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-cloudfw.RosTrFirewall",
		"isRosElement",
		[]interface{}{x},
		&returns,
	)

	return returns
}

// Check whether the given construct is a RosResource.
func RosTrFirewall_IsRosResource(construct alicloudroscdkcore.IConstruct) *bool {
	_init_.Initialize()

	if err := validateRosTrFirewall_IsRosResourceParameters(construct); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-cloudfw.RosTrFirewall",
		"isRosResource",
		[]interface{}{construct},
		&returns,
	)

	return returns
}

func RosTrFirewall_ROS_RESOURCE_TYPE_NAME() *string {
	_init_.Initialize()
	var returns *string
	_jsii_.StaticGet(
		"@alicloud/ros-cdk-cloudfw.RosTrFirewall",
		"ROS_RESOURCE_TYPE_NAME",
		&returns,
	)
	return returns
}

func (r *jsiiProxy_RosTrFirewall) AddCondition(con alicloudroscdkcore.RosCondition) {
	if err := r.validateAddConditionParameters(con); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCondition",
		[]interface{}{con},
	)
}

func (r *jsiiProxy_RosTrFirewall) AddCount(count interface{}) {
	if err := r.validateAddCountParameters(count); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCount",
		[]interface{}{count},
	)
}

func (r *jsiiProxy_RosTrFirewall) AddDeletionOverride(path *string) {
	if err := r.validateAddDeletionOverrideParameters(path); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDeletionOverride",
		[]interface{}{path},
	)
}

func (r *jsiiProxy_RosTrFirewall) AddDependsOn(target alicloudroscdkcore.RosResource) {
	if err := r.validateAddDependsOnParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDependsOn",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosTrFirewall) AddDesc(desc *string) {
	if err := r.validateAddDescParameters(desc); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDesc",
		[]interface{}{desc},
	)
}

func (r *jsiiProxy_RosTrFirewall) AddMetaData(key *string, value interface{}) {
	if err := r.validateAddMetaDataParameters(key, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addMetaData",
		[]interface{}{key, value},
	)
}

func (r *jsiiProxy_RosTrFirewall) AddOverride(path *string, value interface{}) {
	if err := r.validateAddOverrideParameters(path, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addOverride",
		[]interface{}{path, value},
	)
}

func (r *jsiiProxy_RosTrFirewall) AddPropertyDeletionOverride(propertyPath *string) {
	if err := r.validateAddPropertyDeletionOverrideParameters(propertyPath); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyDeletionOverride",
		[]interface{}{propertyPath},
	)
}

func (r *jsiiProxy_RosTrFirewall) AddPropertyOverride(propertyPath *string, value interface{}) {
	if err := r.validateAddPropertyOverrideParameters(propertyPath, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyOverride",
		[]interface{}{propertyPath, value},
	)
}

func (r *jsiiProxy_RosTrFirewall) AddRosDependency(target *string) {
	if err := r.validateAddRosDependencyParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addRosDependency",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosTrFirewall) ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy, options *alicloudroscdkcore.RemovalPolicyOptions) {
	if err := r.validateApplyRemovalPolicyParameters(options); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"applyRemovalPolicy",
		[]interface{}{policy, options},
	)
}

func (r *jsiiProxy_RosTrFirewall) FetchCondition() alicloudroscdkcore.RosCondition {
	var returns alicloudroscdkcore.RosCondition

	_jsii_.Invoke(
		r,
		"fetchCondition",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosTrFirewall) FetchDesc() *string {
	var returns *string

	_jsii_.Invoke(
		r,
		"fetchDesc",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosTrFirewall) FetchRosDependency() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"fetchRosDependency",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosTrFirewall) GetAtt(attributeName *string) alicloudroscdkcore.Reference {
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

func (r *jsiiProxy_RosTrFirewall) OnPrepare() {
	_jsii_.InvokeVoid(
		r,
		"onPrepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosTrFirewall) OnSynthesize(session constructs.ISynthesisSession) {
	if err := r.validateOnSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"onSynthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosTrFirewall) OnValidate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"onValidate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosTrFirewall) OverrideLogicalId(newLogicalId *string) {
	if err := r.validateOverrideLogicalIdParameters(newLogicalId); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"overrideLogicalId",
		[]interface{}{newLogicalId},
	)
}

func (r *jsiiProxy_RosTrFirewall) Prepare() {
	_jsii_.InvokeVoid(
		r,
		"prepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosTrFirewall) RenderProperties(props *map[string]interface{}) *map[string]interface{} {
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

func (r *jsiiProxy_RosTrFirewall) Synthesize(session alicloudroscdkcore.ISynthesisSession) {
	if err := r.validateSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"synthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosTrFirewall) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		r,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosTrFirewall) Validate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"validate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosTrFirewall) ValidateProperties(_properties interface{}) {
	if err := r.validateValidatePropertiesParameters(_properties); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"validateProperties",
		[]interface{}{_properties},
	)
}

