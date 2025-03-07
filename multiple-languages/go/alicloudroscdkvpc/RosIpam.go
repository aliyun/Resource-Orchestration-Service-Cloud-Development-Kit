package alicloudroscdkvpc

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkvpc/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkvpc/internal"
	"github.com/aws/constructs-go/constructs/v3"
)

// This class is a base encapsulation around the ROS resource type `ALIYUN::VPC::Ipam`.
type RosIpam interface {
	alicloudroscdkcore.RosResource
	AttrCreateTime() alicloudroscdkcore.IResolvable
	AttrDefaultResourceDiscoveryAssociationId() alicloudroscdkcore.IResolvable
	AttrDefaultResourceDiscoveryId() alicloudroscdkcore.IResolvable
	AttrIpamDescription() alicloudroscdkcore.IResolvable
	AttrIpamId() alicloudroscdkcore.IResolvable
	AttrIpamName() alicloudroscdkcore.IResolvable
	AttrOperatingRegionList() alicloudroscdkcore.IResolvable
	AttrPrivateDefaultScopeId() alicloudroscdkcore.IResolvable
	AttrPublicDefaultScopeId() alicloudroscdkcore.IResolvable
	AttrResourceDiscoveryAssociationCount() alicloudroscdkcore.IResolvable
	AttrResourceGroupId() alicloudroscdkcore.IResolvable
	AttrTags() alicloudroscdkcore.IResolvable
	// Returns: the stack trace of the point where this Resource was created from, sourced
	// from the +metadata+ entry typed +aliyun:ros:logicalId+, and with the bottom-most
	// node +internal+ entries filtered.
	CreationStack() *[]*string
	EnableResourcePropertyConstraint() *bool
	SetEnableResourcePropertyConstraint(val *bool)
	IpamDescription() interface{}
	SetIpamDescription(val interface{})
	IpamName() interface{}
	SetIpamName(val interface{})
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
	OperatingRegionList() interface{}
	SetOperatingRegionList(val interface{})
	// Return a string that will be resolved to a RosTemplate `{ Ref }` for this element.
	//
	// If, by any chance, the intrinsic reference of a resource is not a string, you could
	// coerce it to an IResolvable through `Lazy.any({ produce: resource.ref })`.
	Ref() *string
	ResourceGroupId() interface{}
	SetResourceGroupId(val interface{})
	// Options for this resource, such as condition, update policy etc.
	RosOptions() alicloudroscdkcore.IRosResourceOptions
	RosProperties() *map[string]interface{}
	// ROS resource type.
	RosResourceType() *string
	// The stack in which this element is defined.
	//
	// RosElements must be defined within a stack scope (directly or indirectly).
	Stack() alicloudroscdkcore.Stack
	Tags() *[]*RosIpam_TagsProperty
	SetTags(val *[]*RosIpam_TagsProperty)
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

// The jsii proxy struct for RosIpam
type jsiiProxy_RosIpam struct {
	internal.Type__alicloudroscdkcoreRosResource
}

func (j *jsiiProxy_RosIpam) AttrCreateTime() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosIpam) AttrDefaultResourceDiscoveryAssociationId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDefaultResourceDiscoveryAssociationId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosIpam) AttrDefaultResourceDiscoveryId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDefaultResourceDiscoveryId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosIpam) AttrIpamDescription() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrIpamDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosIpam) AttrIpamId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrIpamId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosIpam) AttrIpamName() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrIpamName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosIpam) AttrOperatingRegionList() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrOperatingRegionList",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosIpam) AttrPrivateDefaultScopeId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrPrivateDefaultScopeId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosIpam) AttrPublicDefaultScopeId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrPublicDefaultScopeId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosIpam) AttrResourceDiscoveryAssociationCount() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrResourceDiscoveryAssociationCount",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosIpam) AttrResourceGroupId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrResourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosIpam) AttrTags() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrTags",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosIpam) CreationStack() *[]*string {
	var returns *[]*string
	_jsii_.Get(
		j,
		"creationStack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosIpam) EnableResourcePropertyConstraint() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"enableResourcePropertyConstraint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosIpam) IpamDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"ipamDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosIpam) IpamName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"ipamName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosIpam) LogicalId() *string {
	var returns *string
	_jsii_.Get(
		j,
		"logicalId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosIpam) Node() alicloudroscdkcore.ConstructNode {
	var returns alicloudroscdkcore.ConstructNode
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosIpam) OperatingRegionList() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"operatingRegionList",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosIpam) Ref() *string {
	var returns *string
	_jsii_.Get(
		j,
		"ref",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosIpam) ResourceGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"resourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosIpam) RosOptions() alicloudroscdkcore.IRosResourceOptions {
	var returns alicloudroscdkcore.IRosResourceOptions
	_jsii_.Get(
		j,
		"rosOptions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosIpam) RosProperties() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"rosProperties",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosIpam) RosResourceType() *string {
	var returns *string
	_jsii_.Get(
		j,
		"rosResourceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosIpam) Stack() alicloudroscdkcore.Stack {
	var returns alicloudroscdkcore.Stack
	_jsii_.Get(
		j,
		"stack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosIpam) Tags() *[]*RosIpam_TagsProperty {
	var returns *[]*RosIpam_TagsProperty
	_jsii_.Get(
		j,
		"tags",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosIpam) UpdatedProperites() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"updatedProperites",
		&returns,
	)
	return returns
}


func NewRosIpam(scope alicloudroscdkcore.Construct, id *string, props *RosIpamProps, enableResourcePropertyConstraint *bool) RosIpam {
	_init_.Initialize()

	if err := validateNewRosIpamParameters(scope, id, props, enableResourcePropertyConstraint); err != nil {
		panic(err)
	}
	j := jsiiProxy_RosIpam{}

	_jsii_.Create(
		"@alicloud/ros-cdk-vpc.RosIpam",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		&j,
	)

	return &j
}

func NewRosIpam_Override(r RosIpam, scope alicloudroscdkcore.Construct, id *string, props *RosIpamProps, enableResourcePropertyConstraint *bool) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-vpc.RosIpam",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		r,
	)
}

func (j *jsiiProxy_RosIpam)SetEnableResourcePropertyConstraint(val *bool) {
	if err := j.validateSetEnableResourcePropertyConstraintParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableResourcePropertyConstraint",
		val,
	)
}

func (j *jsiiProxy_RosIpam)SetIpamDescription(val interface{}) {
	if err := j.validateSetIpamDescriptionParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"ipamDescription",
		val,
	)
}

func (j *jsiiProxy_RosIpam)SetIpamName(val interface{}) {
	if err := j.validateSetIpamNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"ipamName",
		val,
	)
}

func (j *jsiiProxy_RosIpam)SetOperatingRegionList(val interface{}) {
	if err := j.validateSetOperatingRegionListParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"operatingRegionList",
		val,
	)
}

func (j *jsiiProxy_RosIpam)SetResourceGroupId(val interface{}) {
	if err := j.validateSetResourceGroupIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"resourceGroupId",
		val,
	)
}

func (j *jsiiProxy_RosIpam)SetTags(val *[]*RosIpam_TagsProperty) {
	if err := j.validateSetTagsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"tags",
		val,
	)
}

// Return whether the given object is a Construct.
func RosIpam_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosIpam_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-vpc.RosIpam",
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
func RosIpam_IsRosElement(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosIpam_IsRosElementParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-vpc.RosIpam",
		"isRosElement",
		[]interface{}{x},
		&returns,
	)

	return returns
}

// Check whether the given construct is a RosResource.
func RosIpam_IsRosResource(construct alicloudroscdkcore.IConstruct) *bool {
	_init_.Initialize()

	if err := validateRosIpam_IsRosResourceParameters(construct); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-vpc.RosIpam",
		"isRosResource",
		[]interface{}{construct},
		&returns,
	)

	return returns
}

func RosIpam_ROS_RESOURCE_TYPE_NAME() *string {
	_init_.Initialize()
	var returns *string
	_jsii_.StaticGet(
		"@alicloud/ros-cdk-vpc.RosIpam",
		"ROS_RESOURCE_TYPE_NAME",
		&returns,
	)
	return returns
}

func (r *jsiiProxy_RosIpam) AddCondition(con alicloudroscdkcore.RosCondition) {
	if err := r.validateAddConditionParameters(con); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCondition",
		[]interface{}{con},
	)
}

func (r *jsiiProxy_RosIpam) AddCount(count interface{}) {
	if err := r.validateAddCountParameters(count); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCount",
		[]interface{}{count},
	)
}

func (r *jsiiProxy_RosIpam) AddDeletionOverride(path *string) {
	if err := r.validateAddDeletionOverrideParameters(path); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDeletionOverride",
		[]interface{}{path},
	)
}

func (r *jsiiProxy_RosIpam) AddDependsOn(target alicloudroscdkcore.RosResource) {
	if err := r.validateAddDependsOnParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDependsOn",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosIpam) AddDesc(desc *string) {
	if err := r.validateAddDescParameters(desc); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDesc",
		[]interface{}{desc},
	)
}

func (r *jsiiProxy_RosIpam) AddMetaData(key *string, value interface{}) {
	if err := r.validateAddMetaDataParameters(key, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addMetaData",
		[]interface{}{key, value},
	)
}

func (r *jsiiProxy_RosIpam) AddOverride(path *string, value interface{}) {
	if err := r.validateAddOverrideParameters(path, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addOverride",
		[]interface{}{path, value},
	)
}

func (r *jsiiProxy_RosIpam) AddPropertyDeletionOverride(propertyPath *string) {
	if err := r.validateAddPropertyDeletionOverrideParameters(propertyPath); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyDeletionOverride",
		[]interface{}{propertyPath},
	)
}

func (r *jsiiProxy_RosIpam) AddPropertyOverride(propertyPath *string, value interface{}) {
	if err := r.validateAddPropertyOverrideParameters(propertyPath, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyOverride",
		[]interface{}{propertyPath, value},
	)
}

func (r *jsiiProxy_RosIpam) AddRosDependency(target *string) {
	if err := r.validateAddRosDependencyParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addRosDependency",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosIpam) ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy, options *alicloudroscdkcore.RemovalPolicyOptions) {
	if err := r.validateApplyRemovalPolicyParameters(options); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"applyRemovalPolicy",
		[]interface{}{policy, options},
	)
}

func (r *jsiiProxy_RosIpam) FetchCondition() alicloudroscdkcore.RosCondition {
	var returns alicloudroscdkcore.RosCondition

	_jsii_.Invoke(
		r,
		"fetchCondition",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosIpam) FetchDesc() *string {
	var returns *string

	_jsii_.Invoke(
		r,
		"fetchDesc",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosIpam) FetchRosDependency() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"fetchRosDependency",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosIpam) GetAtt(attributeName *string) alicloudroscdkcore.Reference {
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

func (r *jsiiProxy_RosIpam) OnPrepare() {
	_jsii_.InvokeVoid(
		r,
		"onPrepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosIpam) OnSynthesize(session constructs.ISynthesisSession) {
	if err := r.validateOnSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"onSynthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosIpam) OnValidate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"onValidate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosIpam) OverrideLogicalId(newLogicalId *string) {
	if err := r.validateOverrideLogicalIdParameters(newLogicalId); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"overrideLogicalId",
		[]interface{}{newLogicalId},
	)
}

func (r *jsiiProxy_RosIpam) Prepare() {
	_jsii_.InvokeVoid(
		r,
		"prepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosIpam) RenderProperties(props *map[string]interface{}) *map[string]interface{} {
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

func (r *jsiiProxy_RosIpam) Synthesize(session alicloudroscdkcore.ISynthesisSession) {
	if err := r.validateSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"synthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosIpam) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		r,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosIpam) Validate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"validate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosIpam) ValidateProperties(_properties interface{}) {
	if err := r.validateValidatePropertiesParameters(_properties); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"validateProperties",
		[]interface{}{_properties},
	)
}

