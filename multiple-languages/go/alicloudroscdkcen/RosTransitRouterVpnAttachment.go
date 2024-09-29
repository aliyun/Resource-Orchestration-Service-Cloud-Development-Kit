package alicloudroscdkcen

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkcen/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcen/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/aws/constructs-go/constructs/v3"
)

// This class is a base encapsulation around the ROS resource type `ALIYUN::CEN::TransitRouterVpnAttachment`, which is used to create a VPN connection.
type RosTransitRouterVpnAttachment interface {
	alicloudroscdkcore.RosResource
	AttrTransitRouterAttachmentId() alicloudroscdkcore.IResolvable
	AutoPublishRouteEnabled() interface{}
	SetAutoPublishRouteEnabled(val interface{})
	CenId() interface{}
	SetCenId(val interface{})
	// Returns: the stack trace of the point where this Resource was created from, sourced
	// from the +metadata+ entry typed +aliyun:ros:logicalId+, and with the bottom-most
	// node +internal+ entries filtered.
	CreationStack() *[]*string
	DeletionForce() interface{}
	SetDeletionForce(val interface{})
	EnableResourcePropertyConstraint() *bool
	SetEnableResourcePropertyConstraint(val *bool)
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
	// Options for this resource, such as condition, update policy etc.
	RosOptions() alicloudroscdkcore.IRosResourceOptions
	RosProperties() *map[string]interface{}
	// ROS resource type.
	RosResourceType() *string
	RouteTableAssociationEnabled() interface{}
	SetRouteTableAssociationEnabled(val interface{})
	RouteTablePropagationEnabled() interface{}
	SetRouteTablePropagationEnabled(val interface{})
	// The stack in which this element is defined.
	//
	// RosElements must be defined within a stack scope (directly or indirectly).
	Stack() alicloudroscdkcore.Stack
	Tags() *[]*RosTransitRouterVpnAttachment_TagsProperty
	SetTags(val *[]*RosTransitRouterVpnAttachment_TagsProperty)
	TransitRouterAttachmentDescription() interface{}
	SetTransitRouterAttachmentDescription(val interface{})
	TransitRouterAttachmentName() interface{}
	SetTransitRouterAttachmentName(val interface{})
	TransitRouterId() interface{}
	SetTransitRouterId(val interface{})
	// Return properties modified after initiation.
	//
	// Resources that expose mutable properties should override this function to
	// collect and return the properties object for this resource.
	UpdatedProperites() *map[string]interface{}
	VpnId() interface{}
	SetVpnId(val interface{})
	VpnOwnerId() interface{}
	SetVpnOwnerId(val interface{})
	ZoneId() interface{}
	SetZoneId(val interface{})
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

// The jsii proxy struct for RosTransitRouterVpnAttachment
type jsiiProxy_RosTransitRouterVpnAttachment struct {
	internal.Type__alicloudroscdkcoreRosResource
}

func (j *jsiiProxy_RosTransitRouterVpnAttachment) AttrTransitRouterAttachmentId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrTransitRouterAttachmentId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTransitRouterVpnAttachment) AutoPublishRouteEnabled() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"autoPublishRouteEnabled",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTransitRouterVpnAttachment) CenId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"cenId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTransitRouterVpnAttachment) CreationStack() *[]*string {
	var returns *[]*string
	_jsii_.Get(
		j,
		"creationStack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTransitRouterVpnAttachment) DeletionForce() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"deletionForce",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTransitRouterVpnAttachment) EnableResourcePropertyConstraint() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"enableResourcePropertyConstraint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTransitRouterVpnAttachment) LogicalId() *string {
	var returns *string
	_jsii_.Get(
		j,
		"logicalId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTransitRouterVpnAttachment) Node() alicloudroscdkcore.ConstructNode {
	var returns alicloudroscdkcore.ConstructNode
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTransitRouterVpnAttachment) Ref() *string {
	var returns *string
	_jsii_.Get(
		j,
		"ref",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTransitRouterVpnAttachment) RosOptions() alicloudroscdkcore.IRosResourceOptions {
	var returns alicloudroscdkcore.IRosResourceOptions
	_jsii_.Get(
		j,
		"rosOptions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTransitRouterVpnAttachment) RosProperties() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"rosProperties",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTransitRouterVpnAttachment) RosResourceType() *string {
	var returns *string
	_jsii_.Get(
		j,
		"rosResourceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTransitRouterVpnAttachment) RouteTableAssociationEnabled() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"routeTableAssociationEnabled",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTransitRouterVpnAttachment) RouteTablePropagationEnabled() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"routeTablePropagationEnabled",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTransitRouterVpnAttachment) Stack() alicloudroscdkcore.Stack {
	var returns alicloudroscdkcore.Stack
	_jsii_.Get(
		j,
		"stack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTransitRouterVpnAttachment) Tags() *[]*RosTransitRouterVpnAttachment_TagsProperty {
	var returns *[]*RosTransitRouterVpnAttachment_TagsProperty
	_jsii_.Get(
		j,
		"tags",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTransitRouterVpnAttachment) TransitRouterAttachmentDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"transitRouterAttachmentDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTransitRouterVpnAttachment) TransitRouterAttachmentName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"transitRouterAttachmentName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTransitRouterVpnAttachment) TransitRouterId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"transitRouterId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTransitRouterVpnAttachment) UpdatedProperites() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"updatedProperites",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTransitRouterVpnAttachment) VpnId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"vpnId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTransitRouterVpnAttachment) VpnOwnerId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"vpnOwnerId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTransitRouterVpnAttachment) ZoneId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"zoneId",
		&returns,
	)
	return returns
}


func NewRosTransitRouterVpnAttachment(scope alicloudroscdkcore.Construct, id *string, props *RosTransitRouterVpnAttachmentProps, enableResourcePropertyConstraint *bool) RosTransitRouterVpnAttachment {
	_init_.Initialize()

	if err := validateNewRosTransitRouterVpnAttachmentParameters(scope, id, props, enableResourcePropertyConstraint); err != nil {
		panic(err)
	}
	j := jsiiProxy_RosTransitRouterVpnAttachment{}

	_jsii_.Create(
		"@alicloud/ros-cdk-cen.RosTransitRouterVpnAttachment",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		&j,
	)

	return &j
}

func NewRosTransitRouterVpnAttachment_Override(r RosTransitRouterVpnAttachment, scope alicloudroscdkcore.Construct, id *string, props *RosTransitRouterVpnAttachmentProps, enableResourcePropertyConstraint *bool) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-cen.RosTransitRouterVpnAttachment",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		r,
	)
}

func (j *jsiiProxy_RosTransitRouterVpnAttachment)SetAutoPublishRouteEnabled(val interface{}) {
	if err := j.validateSetAutoPublishRouteEnabledParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"autoPublishRouteEnabled",
		val,
	)
}

func (j *jsiiProxy_RosTransitRouterVpnAttachment)SetCenId(val interface{}) {
	if err := j.validateSetCenIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"cenId",
		val,
	)
}

func (j *jsiiProxy_RosTransitRouterVpnAttachment)SetDeletionForce(val interface{}) {
	if err := j.validateSetDeletionForceParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"deletionForce",
		val,
	)
}

func (j *jsiiProxy_RosTransitRouterVpnAttachment)SetEnableResourcePropertyConstraint(val *bool) {
	if err := j.validateSetEnableResourcePropertyConstraintParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableResourcePropertyConstraint",
		val,
	)
}

func (j *jsiiProxy_RosTransitRouterVpnAttachment)SetRouteTableAssociationEnabled(val interface{}) {
	if err := j.validateSetRouteTableAssociationEnabledParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"routeTableAssociationEnabled",
		val,
	)
}

func (j *jsiiProxy_RosTransitRouterVpnAttachment)SetRouteTablePropagationEnabled(val interface{}) {
	if err := j.validateSetRouteTablePropagationEnabledParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"routeTablePropagationEnabled",
		val,
	)
}

func (j *jsiiProxy_RosTransitRouterVpnAttachment)SetTags(val *[]*RosTransitRouterVpnAttachment_TagsProperty) {
	if err := j.validateSetTagsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"tags",
		val,
	)
}

func (j *jsiiProxy_RosTransitRouterVpnAttachment)SetTransitRouterAttachmentDescription(val interface{}) {
	if err := j.validateSetTransitRouterAttachmentDescriptionParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"transitRouterAttachmentDescription",
		val,
	)
}

func (j *jsiiProxy_RosTransitRouterVpnAttachment)SetTransitRouterAttachmentName(val interface{}) {
	if err := j.validateSetTransitRouterAttachmentNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"transitRouterAttachmentName",
		val,
	)
}

func (j *jsiiProxy_RosTransitRouterVpnAttachment)SetTransitRouterId(val interface{}) {
	if err := j.validateSetTransitRouterIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"transitRouterId",
		val,
	)
}

func (j *jsiiProxy_RosTransitRouterVpnAttachment)SetVpnId(val interface{}) {
	if err := j.validateSetVpnIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"vpnId",
		val,
	)
}

func (j *jsiiProxy_RosTransitRouterVpnAttachment)SetVpnOwnerId(val interface{}) {
	if err := j.validateSetVpnOwnerIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"vpnOwnerId",
		val,
	)
}

func (j *jsiiProxy_RosTransitRouterVpnAttachment)SetZoneId(val interface{}) {
	if err := j.validateSetZoneIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"zoneId",
		val,
	)
}

// Return whether the given object is a Construct.
func RosTransitRouterVpnAttachment_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosTransitRouterVpnAttachment_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-cen.RosTransitRouterVpnAttachment",
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
func RosTransitRouterVpnAttachment_IsRosElement(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosTransitRouterVpnAttachment_IsRosElementParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-cen.RosTransitRouterVpnAttachment",
		"isRosElement",
		[]interface{}{x},
		&returns,
	)

	return returns
}

// Check whether the given construct is a RosResource.
func RosTransitRouterVpnAttachment_IsRosResource(construct alicloudroscdkcore.IConstruct) *bool {
	_init_.Initialize()

	if err := validateRosTransitRouterVpnAttachment_IsRosResourceParameters(construct); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-cen.RosTransitRouterVpnAttachment",
		"isRosResource",
		[]interface{}{construct},
		&returns,
	)

	return returns
}

func RosTransitRouterVpnAttachment_ROS_RESOURCE_TYPE_NAME() *string {
	_init_.Initialize()
	var returns *string
	_jsii_.StaticGet(
		"@alicloud/ros-cdk-cen.RosTransitRouterVpnAttachment",
		"ROS_RESOURCE_TYPE_NAME",
		&returns,
	)
	return returns
}

func (r *jsiiProxy_RosTransitRouterVpnAttachment) AddCondition(con alicloudroscdkcore.RosCondition) {
	if err := r.validateAddConditionParameters(con); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCondition",
		[]interface{}{con},
	)
}

func (r *jsiiProxy_RosTransitRouterVpnAttachment) AddCount(count interface{}) {
	if err := r.validateAddCountParameters(count); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCount",
		[]interface{}{count},
	)
}

func (r *jsiiProxy_RosTransitRouterVpnAttachment) AddDeletionOverride(path *string) {
	if err := r.validateAddDeletionOverrideParameters(path); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDeletionOverride",
		[]interface{}{path},
	)
}

func (r *jsiiProxy_RosTransitRouterVpnAttachment) AddDependsOn(target alicloudroscdkcore.RosResource) {
	if err := r.validateAddDependsOnParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDependsOn",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosTransitRouterVpnAttachment) AddDesc(desc *string) {
	if err := r.validateAddDescParameters(desc); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDesc",
		[]interface{}{desc},
	)
}

func (r *jsiiProxy_RosTransitRouterVpnAttachment) AddMetaData(key *string, value interface{}) {
	if err := r.validateAddMetaDataParameters(key, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addMetaData",
		[]interface{}{key, value},
	)
}

func (r *jsiiProxy_RosTransitRouterVpnAttachment) AddOverride(path *string, value interface{}) {
	if err := r.validateAddOverrideParameters(path, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addOverride",
		[]interface{}{path, value},
	)
}

func (r *jsiiProxy_RosTransitRouterVpnAttachment) AddPropertyDeletionOverride(propertyPath *string) {
	if err := r.validateAddPropertyDeletionOverrideParameters(propertyPath); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyDeletionOverride",
		[]interface{}{propertyPath},
	)
}

func (r *jsiiProxy_RosTransitRouterVpnAttachment) AddPropertyOverride(propertyPath *string, value interface{}) {
	if err := r.validateAddPropertyOverrideParameters(propertyPath, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyOverride",
		[]interface{}{propertyPath, value},
	)
}

func (r *jsiiProxy_RosTransitRouterVpnAttachment) AddRosDependency(target *string) {
	if err := r.validateAddRosDependencyParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addRosDependency",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosTransitRouterVpnAttachment) ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy, options *alicloudroscdkcore.RemovalPolicyOptions) {
	if err := r.validateApplyRemovalPolicyParameters(options); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"applyRemovalPolicy",
		[]interface{}{policy, options},
	)
}

func (r *jsiiProxy_RosTransitRouterVpnAttachment) GetAtt(attributeName *string) alicloudroscdkcore.Reference {
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

func (r *jsiiProxy_RosTransitRouterVpnAttachment) OnPrepare() {
	_jsii_.InvokeVoid(
		r,
		"onPrepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosTransitRouterVpnAttachment) OnSynthesize(session constructs.ISynthesisSession) {
	if err := r.validateOnSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"onSynthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosTransitRouterVpnAttachment) OnValidate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"onValidate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosTransitRouterVpnAttachment) OverrideLogicalId(newLogicalId *string) {
	if err := r.validateOverrideLogicalIdParameters(newLogicalId); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"overrideLogicalId",
		[]interface{}{newLogicalId},
	)
}

func (r *jsiiProxy_RosTransitRouterVpnAttachment) Prepare() {
	_jsii_.InvokeVoid(
		r,
		"prepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosTransitRouterVpnAttachment) RenderProperties(props *map[string]interface{}) *map[string]interface{} {
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

func (r *jsiiProxy_RosTransitRouterVpnAttachment) Synthesize(session alicloudroscdkcore.ISynthesisSession) {
	if err := r.validateSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"synthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosTransitRouterVpnAttachment) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		r,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosTransitRouterVpnAttachment) Validate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"validate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosTransitRouterVpnAttachment) ValidateProperties(_properties interface{}) {
	if err := r.validateValidatePropertiesParameters(_properties); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"validateProperties",
		[]interface{}{_properties},
	)
}

