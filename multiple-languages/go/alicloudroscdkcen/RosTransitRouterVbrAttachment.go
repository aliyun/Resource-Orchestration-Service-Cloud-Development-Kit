package alicloudroscdkcen

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkcen/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcen/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/aws/constructs-go/constructs/v3"
)

// This class is a base encapsulation around the ROS resource type `ALIYUN::CEN::TransitRouterVbrAttachment`, which is used to create a virtual border router (VBR) connection on an Enterprise Edition transit router.
type RosTransitRouterVbrAttachment interface {
	alicloudroscdkcore.RosResource
	AttrAutoPublishRouteEnabled() alicloudroscdkcore.IResolvable
	AttrCenId() alicloudroscdkcore.IResolvable
	AttrClientToken() alicloudroscdkcore.IResolvable
	AttrResourceType() alicloudroscdkcore.IResolvable
	AttrTransitRouterAttachmentDescription() alicloudroscdkcore.IResolvable
	AttrTransitRouterAttachmentId() alicloudroscdkcore.IResolvable
	AttrTransitRouterAttachmentName() alicloudroscdkcore.IResolvable
	AttrTransitRouterId() alicloudroscdkcore.IResolvable
	AttrVbrId() alicloudroscdkcore.IResolvable
	AttrVbrOwnerId() alicloudroscdkcore.IResolvable
	AutoPublishRouteEnabled() interface{}
	SetAutoPublishRouteEnabled(val interface{})
	CenId() interface{}
	SetCenId(val interface{})
	// Returns: the stack trace of the point where this Resource was created from, sourced
	// from the +metadata+ entry typed +aliyun:ros:logicalId+, and with the bottom-most
	// node +internal+ entries filtered.
	CreationStack() *[]*string
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
	VbrId() interface{}
	SetVbrId(val interface{})
	VbrOwnerId() interface{}
	SetVbrOwnerId(val interface{})
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

// The jsii proxy struct for RosTransitRouterVbrAttachment
type jsiiProxy_RosTransitRouterVbrAttachment struct {
	internal.Type__alicloudroscdkcoreRosResource
}

func (j *jsiiProxy_RosTransitRouterVbrAttachment) AttrAutoPublishRouteEnabled() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrAutoPublishRouteEnabled",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTransitRouterVbrAttachment) AttrCenId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrCenId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTransitRouterVbrAttachment) AttrClientToken() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrClientToken",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTransitRouterVbrAttachment) AttrResourceType() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrResourceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTransitRouterVbrAttachment) AttrTransitRouterAttachmentDescription() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrTransitRouterAttachmentDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTransitRouterVbrAttachment) AttrTransitRouterAttachmentId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrTransitRouterAttachmentId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTransitRouterVbrAttachment) AttrTransitRouterAttachmentName() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrTransitRouterAttachmentName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTransitRouterVbrAttachment) AttrTransitRouterId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrTransitRouterId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTransitRouterVbrAttachment) AttrVbrId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrVbrId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTransitRouterVbrAttachment) AttrVbrOwnerId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrVbrOwnerId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTransitRouterVbrAttachment) AutoPublishRouteEnabled() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"autoPublishRouteEnabled",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTransitRouterVbrAttachment) CenId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"cenId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTransitRouterVbrAttachment) CreationStack() *[]*string {
	var returns *[]*string
	_jsii_.Get(
		j,
		"creationStack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTransitRouterVbrAttachment) EnableResourcePropertyConstraint() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"enableResourcePropertyConstraint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTransitRouterVbrAttachment) LogicalId() *string {
	var returns *string
	_jsii_.Get(
		j,
		"logicalId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTransitRouterVbrAttachment) Node() alicloudroscdkcore.ConstructNode {
	var returns alicloudroscdkcore.ConstructNode
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTransitRouterVbrAttachment) Ref() *string {
	var returns *string
	_jsii_.Get(
		j,
		"ref",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTransitRouterVbrAttachment) RosOptions() alicloudroscdkcore.IRosResourceOptions {
	var returns alicloudroscdkcore.IRosResourceOptions
	_jsii_.Get(
		j,
		"rosOptions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTransitRouterVbrAttachment) RosProperties() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"rosProperties",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTransitRouterVbrAttachment) RosResourceType() *string {
	var returns *string
	_jsii_.Get(
		j,
		"rosResourceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTransitRouterVbrAttachment) Stack() alicloudroscdkcore.Stack {
	var returns alicloudroscdkcore.Stack
	_jsii_.Get(
		j,
		"stack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTransitRouterVbrAttachment) TransitRouterAttachmentDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"transitRouterAttachmentDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTransitRouterVbrAttachment) TransitRouterAttachmentName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"transitRouterAttachmentName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTransitRouterVbrAttachment) TransitRouterId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"transitRouterId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTransitRouterVbrAttachment) UpdatedProperites() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"updatedProperites",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTransitRouterVbrAttachment) VbrId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"vbrId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTransitRouterVbrAttachment) VbrOwnerId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"vbrOwnerId",
		&returns,
	)
	return returns
}


func NewRosTransitRouterVbrAttachment(scope alicloudroscdkcore.Construct, id *string, props *RosTransitRouterVbrAttachmentProps, enableResourcePropertyConstraint *bool) RosTransitRouterVbrAttachment {
	_init_.Initialize()

	if err := validateNewRosTransitRouterVbrAttachmentParameters(scope, id, props, enableResourcePropertyConstraint); err != nil {
		panic(err)
	}
	j := jsiiProxy_RosTransitRouterVbrAttachment{}

	_jsii_.Create(
		"@alicloud/ros-cdk-cen.RosTransitRouterVbrAttachment",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		&j,
	)

	return &j
}

func NewRosTransitRouterVbrAttachment_Override(r RosTransitRouterVbrAttachment, scope alicloudroscdkcore.Construct, id *string, props *RosTransitRouterVbrAttachmentProps, enableResourcePropertyConstraint *bool) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-cen.RosTransitRouterVbrAttachment",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		r,
	)
}

func (j *jsiiProxy_RosTransitRouterVbrAttachment)SetAutoPublishRouteEnabled(val interface{}) {
	if err := j.validateSetAutoPublishRouteEnabledParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"autoPublishRouteEnabled",
		val,
	)
}

func (j *jsiiProxy_RosTransitRouterVbrAttachment)SetCenId(val interface{}) {
	if err := j.validateSetCenIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"cenId",
		val,
	)
}

func (j *jsiiProxy_RosTransitRouterVbrAttachment)SetEnableResourcePropertyConstraint(val *bool) {
	if err := j.validateSetEnableResourcePropertyConstraintParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableResourcePropertyConstraint",
		val,
	)
}

func (j *jsiiProxy_RosTransitRouterVbrAttachment)SetTransitRouterAttachmentDescription(val interface{}) {
	if err := j.validateSetTransitRouterAttachmentDescriptionParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"transitRouterAttachmentDescription",
		val,
	)
}

func (j *jsiiProxy_RosTransitRouterVbrAttachment)SetTransitRouterAttachmentName(val interface{}) {
	if err := j.validateSetTransitRouterAttachmentNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"transitRouterAttachmentName",
		val,
	)
}

func (j *jsiiProxy_RosTransitRouterVbrAttachment)SetTransitRouterId(val interface{}) {
	if err := j.validateSetTransitRouterIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"transitRouterId",
		val,
	)
}

func (j *jsiiProxy_RosTransitRouterVbrAttachment)SetVbrId(val interface{}) {
	if err := j.validateSetVbrIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"vbrId",
		val,
	)
}

func (j *jsiiProxy_RosTransitRouterVbrAttachment)SetVbrOwnerId(val interface{}) {
	if err := j.validateSetVbrOwnerIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"vbrOwnerId",
		val,
	)
}

// Return whether the given object is a Construct.
func RosTransitRouterVbrAttachment_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosTransitRouterVbrAttachment_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-cen.RosTransitRouterVbrAttachment",
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
func RosTransitRouterVbrAttachment_IsRosElement(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosTransitRouterVbrAttachment_IsRosElementParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-cen.RosTransitRouterVbrAttachment",
		"isRosElement",
		[]interface{}{x},
		&returns,
	)

	return returns
}

// Check whether the given construct is a RosResource.
func RosTransitRouterVbrAttachment_IsRosResource(construct alicloudroscdkcore.IConstruct) *bool {
	_init_.Initialize()

	if err := validateRosTransitRouterVbrAttachment_IsRosResourceParameters(construct); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-cen.RosTransitRouterVbrAttachment",
		"isRosResource",
		[]interface{}{construct},
		&returns,
	)

	return returns
}

func RosTransitRouterVbrAttachment_ROS_RESOURCE_TYPE_NAME() *string {
	_init_.Initialize()
	var returns *string
	_jsii_.StaticGet(
		"@alicloud/ros-cdk-cen.RosTransitRouterVbrAttachment",
		"ROS_RESOURCE_TYPE_NAME",
		&returns,
	)
	return returns
}

func (r *jsiiProxy_RosTransitRouterVbrAttachment) AddCondition(con alicloudroscdkcore.RosCondition) {
	if err := r.validateAddConditionParameters(con); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCondition",
		[]interface{}{con},
	)
}

func (r *jsiiProxy_RosTransitRouterVbrAttachment) AddCount(count interface{}) {
	if err := r.validateAddCountParameters(count); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCount",
		[]interface{}{count},
	)
}

func (r *jsiiProxy_RosTransitRouterVbrAttachment) AddDeletionOverride(path *string) {
	if err := r.validateAddDeletionOverrideParameters(path); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDeletionOverride",
		[]interface{}{path},
	)
}

func (r *jsiiProxy_RosTransitRouterVbrAttachment) AddDependsOn(target alicloudroscdkcore.RosResource) {
	if err := r.validateAddDependsOnParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDependsOn",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosTransitRouterVbrAttachment) AddDesc(desc *string) {
	if err := r.validateAddDescParameters(desc); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDesc",
		[]interface{}{desc},
	)
}

func (r *jsiiProxy_RosTransitRouterVbrAttachment) AddMetaData(key *string, value interface{}) {
	if err := r.validateAddMetaDataParameters(key, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addMetaData",
		[]interface{}{key, value},
	)
}

func (r *jsiiProxy_RosTransitRouterVbrAttachment) AddOverride(path *string, value interface{}) {
	if err := r.validateAddOverrideParameters(path, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addOverride",
		[]interface{}{path, value},
	)
}

func (r *jsiiProxy_RosTransitRouterVbrAttachment) AddPropertyDeletionOverride(propertyPath *string) {
	if err := r.validateAddPropertyDeletionOverrideParameters(propertyPath); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyDeletionOverride",
		[]interface{}{propertyPath},
	)
}

func (r *jsiiProxy_RosTransitRouterVbrAttachment) AddPropertyOverride(propertyPath *string, value interface{}) {
	if err := r.validateAddPropertyOverrideParameters(propertyPath, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyOverride",
		[]interface{}{propertyPath, value},
	)
}

func (r *jsiiProxy_RosTransitRouterVbrAttachment) AddRosDependency(target *string) {
	if err := r.validateAddRosDependencyParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addRosDependency",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosTransitRouterVbrAttachment) ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy, options *alicloudroscdkcore.RemovalPolicyOptions) {
	if err := r.validateApplyRemovalPolicyParameters(options); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"applyRemovalPolicy",
		[]interface{}{policy, options},
	)
}

func (r *jsiiProxy_RosTransitRouterVbrAttachment) GetAtt(attributeName *string) alicloudroscdkcore.Reference {
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

func (r *jsiiProxy_RosTransitRouterVbrAttachment) OnPrepare() {
	_jsii_.InvokeVoid(
		r,
		"onPrepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosTransitRouterVbrAttachment) OnSynthesize(session constructs.ISynthesisSession) {
	if err := r.validateOnSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"onSynthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosTransitRouterVbrAttachment) OnValidate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"onValidate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosTransitRouterVbrAttachment) OverrideLogicalId(newLogicalId *string) {
	if err := r.validateOverrideLogicalIdParameters(newLogicalId); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"overrideLogicalId",
		[]interface{}{newLogicalId},
	)
}

func (r *jsiiProxy_RosTransitRouterVbrAttachment) Prepare() {
	_jsii_.InvokeVoid(
		r,
		"prepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosTransitRouterVbrAttachment) RenderProperties(props *map[string]interface{}) *map[string]interface{} {
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

func (r *jsiiProxy_RosTransitRouterVbrAttachment) Synthesize(session alicloudroscdkcore.ISynthesisSession) {
	if err := r.validateSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"synthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosTransitRouterVbrAttachment) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		r,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosTransitRouterVbrAttachment) Validate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"validate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosTransitRouterVbrAttachment) ValidateProperties(_properties interface{}) {
	if err := r.validateValidatePropertiesParameters(_properties); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"validateProperties",
		[]interface{}{_properties},
	)
}

