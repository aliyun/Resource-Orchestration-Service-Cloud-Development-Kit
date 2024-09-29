package alicloudroscdkcen

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkcen/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcen/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/aws/constructs-go/constructs/v3"
)

// This class is a base encapsulation around the ROS resource type `ALIYUN::CEN::TransitRouterVpcAttachment`, which is used to create a virtual private cloud (VPC) connection on an Enterprise Edition transit router.
type RosTransitRouterVpcAttachment interface {
	alicloudroscdkcore.RosResource
	AttrCenId() alicloudroscdkcore.IResolvable
	AttrClientToken() alicloudroscdkcore.IResolvable
	AttrResourceType() alicloudroscdkcore.IResolvable
	AttrTransitRouterAttachmentDescription() alicloudroscdkcore.IResolvable
	AttrTransitRouterAttachmentId() alicloudroscdkcore.IResolvable
	AttrTransitRouterAttachmentName() alicloudroscdkcore.IResolvable
	AttrTransitRouterId() alicloudroscdkcore.IResolvable
	AttrVpcId() alicloudroscdkcore.IResolvable
	AttrVpcOwnerId() alicloudroscdkcore.IResolvable
	AutoCreateVpcRoute() interface{}
	SetAutoCreateVpcRoute(val interface{})
	CenId() interface{}
	SetCenId(val interface{})
	ChargeType() interface{}
	SetChargeType(val interface{})
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
	VpcId() interface{}
	SetVpcId(val interface{})
	VpcOwnerId() interface{}
	SetVpcOwnerId(val interface{})
	ZoneMappings() interface{}
	SetZoneMappings(val interface{})
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

// The jsii proxy struct for RosTransitRouterVpcAttachment
type jsiiProxy_RosTransitRouterVpcAttachment struct {
	internal.Type__alicloudroscdkcoreRosResource
}

func (j *jsiiProxy_RosTransitRouterVpcAttachment) AttrCenId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrCenId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTransitRouterVpcAttachment) AttrClientToken() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrClientToken",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTransitRouterVpcAttachment) AttrResourceType() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrResourceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTransitRouterVpcAttachment) AttrTransitRouterAttachmentDescription() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrTransitRouterAttachmentDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTransitRouterVpcAttachment) AttrTransitRouterAttachmentId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrTransitRouterAttachmentId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTransitRouterVpcAttachment) AttrTransitRouterAttachmentName() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrTransitRouterAttachmentName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTransitRouterVpcAttachment) AttrTransitRouterId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrTransitRouterId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTransitRouterVpcAttachment) AttrVpcId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrVpcId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTransitRouterVpcAttachment) AttrVpcOwnerId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrVpcOwnerId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTransitRouterVpcAttachment) AutoCreateVpcRoute() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"autoCreateVpcRoute",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTransitRouterVpcAttachment) CenId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"cenId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTransitRouterVpcAttachment) ChargeType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"chargeType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTransitRouterVpcAttachment) CreationStack() *[]*string {
	var returns *[]*string
	_jsii_.Get(
		j,
		"creationStack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTransitRouterVpcAttachment) DeletionForce() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"deletionForce",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTransitRouterVpcAttachment) EnableResourcePropertyConstraint() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"enableResourcePropertyConstraint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTransitRouterVpcAttachment) LogicalId() *string {
	var returns *string
	_jsii_.Get(
		j,
		"logicalId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTransitRouterVpcAttachment) Node() alicloudroscdkcore.ConstructNode {
	var returns alicloudroscdkcore.ConstructNode
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTransitRouterVpcAttachment) Ref() *string {
	var returns *string
	_jsii_.Get(
		j,
		"ref",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTransitRouterVpcAttachment) RosOptions() alicloudroscdkcore.IRosResourceOptions {
	var returns alicloudroscdkcore.IRosResourceOptions
	_jsii_.Get(
		j,
		"rosOptions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTransitRouterVpcAttachment) RosProperties() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"rosProperties",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTransitRouterVpcAttachment) RosResourceType() *string {
	var returns *string
	_jsii_.Get(
		j,
		"rosResourceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTransitRouterVpcAttachment) RouteTableAssociationEnabled() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"routeTableAssociationEnabled",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTransitRouterVpcAttachment) RouteTablePropagationEnabled() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"routeTablePropagationEnabled",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTransitRouterVpcAttachment) Stack() alicloudroscdkcore.Stack {
	var returns alicloudroscdkcore.Stack
	_jsii_.Get(
		j,
		"stack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTransitRouterVpcAttachment) TransitRouterAttachmentDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"transitRouterAttachmentDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTransitRouterVpcAttachment) TransitRouterAttachmentName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"transitRouterAttachmentName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTransitRouterVpcAttachment) TransitRouterId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"transitRouterId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTransitRouterVpcAttachment) UpdatedProperites() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"updatedProperites",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTransitRouterVpcAttachment) VpcId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"vpcId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTransitRouterVpcAttachment) VpcOwnerId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"vpcOwnerId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTransitRouterVpcAttachment) ZoneMappings() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"zoneMappings",
		&returns,
	)
	return returns
}


func NewRosTransitRouterVpcAttachment(scope alicloudroscdkcore.Construct, id *string, props *RosTransitRouterVpcAttachmentProps, enableResourcePropertyConstraint *bool) RosTransitRouterVpcAttachment {
	_init_.Initialize()

	if err := validateNewRosTransitRouterVpcAttachmentParameters(scope, id, props, enableResourcePropertyConstraint); err != nil {
		panic(err)
	}
	j := jsiiProxy_RosTransitRouterVpcAttachment{}

	_jsii_.Create(
		"@alicloud/ros-cdk-cen.RosTransitRouterVpcAttachment",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		&j,
	)

	return &j
}

func NewRosTransitRouterVpcAttachment_Override(r RosTransitRouterVpcAttachment, scope alicloudroscdkcore.Construct, id *string, props *RosTransitRouterVpcAttachmentProps, enableResourcePropertyConstraint *bool) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-cen.RosTransitRouterVpcAttachment",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		r,
	)
}

func (j *jsiiProxy_RosTransitRouterVpcAttachment)SetAutoCreateVpcRoute(val interface{}) {
	if err := j.validateSetAutoCreateVpcRouteParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"autoCreateVpcRoute",
		val,
	)
}

func (j *jsiiProxy_RosTransitRouterVpcAttachment)SetCenId(val interface{}) {
	if err := j.validateSetCenIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"cenId",
		val,
	)
}

func (j *jsiiProxy_RosTransitRouterVpcAttachment)SetChargeType(val interface{}) {
	if err := j.validateSetChargeTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"chargeType",
		val,
	)
}

func (j *jsiiProxy_RosTransitRouterVpcAttachment)SetDeletionForce(val interface{}) {
	if err := j.validateSetDeletionForceParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"deletionForce",
		val,
	)
}

func (j *jsiiProxy_RosTransitRouterVpcAttachment)SetEnableResourcePropertyConstraint(val *bool) {
	if err := j.validateSetEnableResourcePropertyConstraintParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableResourcePropertyConstraint",
		val,
	)
}

func (j *jsiiProxy_RosTransitRouterVpcAttachment)SetRouteTableAssociationEnabled(val interface{}) {
	if err := j.validateSetRouteTableAssociationEnabledParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"routeTableAssociationEnabled",
		val,
	)
}

func (j *jsiiProxy_RosTransitRouterVpcAttachment)SetRouteTablePropagationEnabled(val interface{}) {
	if err := j.validateSetRouteTablePropagationEnabledParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"routeTablePropagationEnabled",
		val,
	)
}

func (j *jsiiProxy_RosTransitRouterVpcAttachment)SetTransitRouterAttachmentDescription(val interface{}) {
	if err := j.validateSetTransitRouterAttachmentDescriptionParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"transitRouterAttachmentDescription",
		val,
	)
}

func (j *jsiiProxy_RosTransitRouterVpcAttachment)SetTransitRouterAttachmentName(val interface{}) {
	if err := j.validateSetTransitRouterAttachmentNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"transitRouterAttachmentName",
		val,
	)
}

func (j *jsiiProxy_RosTransitRouterVpcAttachment)SetTransitRouterId(val interface{}) {
	if err := j.validateSetTransitRouterIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"transitRouterId",
		val,
	)
}

func (j *jsiiProxy_RosTransitRouterVpcAttachment)SetVpcId(val interface{}) {
	if err := j.validateSetVpcIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"vpcId",
		val,
	)
}

func (j *jsiiProxy_RosTransitRouterVpcAttachment)SetVpcOwnerId(val interface{}) {
	if err := j.validateSetVpcOwnerIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"vpcOwnerId",
		val,
	)
}

func (j *jsiiProxy_RosTransitRouterVpcAttachment)SetZoneMappings(val interface{}) {
	if err := j.validateSetZoneMappingsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"zoneMappings",
		val,
	)
}

// Return whether the given object is a Construct.
func RosTransitRouterVpcAttachment_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosTransitRouterVpcAttachment_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-cen.RosTransitRouterVpcAttachment",
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
func RosTransitRouterVpcAttachment_IsRosElement(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosTransitRouterVpcAttachment_IsRosElementParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-cen.RosTransitRouterVpcAttachment",
		"isRosElement",
		[]interface{}{x},
		&returns,
	)

	return returns
}

// Check whether the given construct is a RosResource.
func RosTransitRouterVpcAttachment_IsRosResource(construct alicloudroscdkcore.IConstruct) *bool {
	_init_.Initialize()

	if err := validateRosTransitRouterVpcAttachment_IsRosResourceParameters(construct); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-cen.RosTransitRouterVpcAttachment",
		"isRosResource",
		[]interface{}{construct},
		&returns,
	)

	return returns
}

func RosTransitRouterVpcAttachment_ROS_RESOURCE_TYPE_NAME() *string {
	_init_.Initialize()
	var returns *string
	_jsii_.StaticGet(
		"@alicloud/ros-cdk-cen.RosTransitRouterVpcAttachment",
		"ROS_RESOURCE_TYPE_NAME",
		&returns,
	)
	return returns
}

func (r *jsiiProxy_RosTransitRouterVpcAttachment) AddCondition(con alicloudroscdkcore.RosCondition) {
	if err := r.validateAddConditionParameters(con); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCondition",
		[]interface{}{con},
	)
}

func (r *jsiiProxy_RosTransitRouterVpcAttachment) AddCount(count interface{}) {
	if err := r.validateAddCountParameters(count); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCount",
		[]interface{}{count},
	)
}

func (r *jsiiProxy_RosTransitRouterVpcAttachment) AddDeletionOverride(path *string) {
	if err := r.validateAddDeletionOverrideParameters(path); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDeletionOverride",
		[]interface{}{path},
	)
}

func (r *jsiiProxy_RosTransitRouterVpcAttachment) AddDependsOn(target alicloudroscdkcore.RosResource) {
	if err := r.validateAddDependsOnParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDependsOn",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosTransitRouterVpcAttachment) AddDesc(desc *string) {
	if err := r.validateAddDescParameters(desc); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDesc",
		[]interface{}{desc},
	)
}

func (r *jsiiProxy_RosTransitRouterVpcAttachment) AddMetaData(key *string, value interface{}) {
	if err := r.validateAddMetaDataParameters(key, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addMetaData",
		[]interface{}{key, value},
	)
}

func (r *jsiiProxy_RosTransitRouterVpcAttachment) AddOverride(path *string, value interface{}) {
	if err := r.validateAddOverrideParameters(path, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addOverride",
		[]interface{}{path, value},
	)
}

func (r *jsiiProxy_RosTransitRouterVpcAttachment) AddPropertyDeletionOverride(propertyPath *string) {
	if err := r.validateAddPropertyDeletionOverrideParameters(propertyPath); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyDeletionOverride",
		[]interface{}{propertyPath},
	)
}

func (r *jsiiProxy_RosTransitRouterVpcAttachment) AddPropertyOverride(propertyPath *string, value interface{}) {
	if err := r.validateAddPropertyOverrideParameters(propertyPath, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyOverride",
		[]interface{}{propertyPath, value},
	)
}

func (r *jsiiProxy_RosTransitRouterVpcAttachment) AddRosDependency(target *string) {
	if err := r.validateAddRosDependencyParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addRosDependency",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosTransitRouterVpcAttachment) ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy, options *alicloudroscdkcore.RemovalPolicyOptions) {
	if err := r.validateApplyRemovalPolicyParameters(options); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"applyRemovalPolicy",
		[]interface{}{policy, options},
	)
}

func (r *jsiiProxy_RosTransitRouterVpcAttachment) GetAtt(attributeName *string) alicloudroscdkcore.Reference {
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

func (r *jsiiProxy_RosTransitRouterVpcAttachment) OnPrepare() {
	_jsii_.InvokeVoid(
		r,
		"onPrepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosTransitRouterVpcAttachment) OnSynthesize(session constructs.ISynthesisSession) {
	if err := r.validateOnSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"onSynthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosTransitRouterVpcAttachment) OnValidate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"onValidate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosTransitRouterVpcAttachment) OverrideLogicalId(newLogicalId *string) {
	if err := r.validateOverrideLogicalIdParameters(newLogicalId); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"overrideLogicalId",
		[]interface{}{newLogicalId},
	)
}

func (r *jsiiProxy_RosTransitRouterVpcAttachment) Prepare() {
	_jsii_.InvokeVoid(
		r,
		"prepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosTransitRouterVpcAttachment) RenderProperties(props *map[string]interface{}) *map[string]interface{} {
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

func (r *jsiiProxy_RosTransitRouterVpcAttachment) Synthesize(session alicloudroscdkcore.ISynthesisSession) {
	if err := r.validateSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"synthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosTransitRouterVpcAttachment) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		r,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosTransitRouterVpcAttachment) Validate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"validate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosTransitRouterVpcAttachment) ValidateProperties(_properties interface{}) {
	if err := r.validateValidatePropertiesParameters(_properties); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"validateProperties",
		[]interface{}{_properties},
	)
}

