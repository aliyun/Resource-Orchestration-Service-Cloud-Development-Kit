package alicloudroscdkebs

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkebs/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkebs/internal"
	"github.com/aws/constructs-go/constructs/v3"
)

// This class is a base encapsulation around the ROS resource type `ALIYUN::EBS::DiskReplicaPair`, which is used to create a replication pair.
type RosDiskReplicaPair interface {
	alicloudroscdkcore.RosResource
	AttrBandwidth() alicloudroscdkcore.IResolvable
	AttrCreateTime() alicloudroscdkcore.IResolvable
	AttrDescription() alicloudroscdkcore.IResolvable
	AttrDestinationDiskId() alicloudroscdkcore.IResolvable
	AttrDestinationRegionId() alicloudroscdkcore.IResolvable
	AttrDestinationZoneId() alicloudroscdkcore.IResolvable
	AttrDiskId() alicloudroscdkcore.IResolvable
	AttrDiskReplicaPairName() alicloudroscdkcore.IResolvable
	AttrPaymentType() alicloudroscdkcore.IResolvable
	AttrReplicaPairId() alicloudroscdkcore.IResolvable
	AttrResourceGroupId() alicloudroscdkcore.IResolvable
	AttrRpo() alicloudroscdkcore.IResolvable
	AttrSourceZoneId() alicloudroscdkcore.IResolvable
	AttrTags() alicloudroscdkcore.IResolvable
	Bandwidth() interface{}
	SetBandwidth(val interface{})
	// Returns: the stack trace of the point where this Resource was created from, sourced
	// from the +metadata+ entry typed +aliyun:ros:logicalId+, and with the bottom-most
	// node +internal+ entries filtered.
	CreationStack() *[]*string
	Description() interface{}
	SetDescription(val interface{})
	DestinationDiskId() interface{}
	SetDestinationDiskId(val interface{})
	DestinationRegionId() interface{}
	SetDestinationRegionId(val interface{})
	DestinationZoneId() interface{}
	SetDestinationZoneId(val interface{})
	DiskId() interface{}
	SetDiskId(val interface{})
	DiskReplicaPairName() interface{}
	SetDiskReplicaPairName(val interface{})
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
	PaymentType() interface{}
	SetPaymentType(val interface{})
	Period() interface{}
	SetPeriod(val interface{})
	PeriodUnit() interface{}
	SetPeriodUnit(val interface{})
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
	Rpo() interface{}
	SetRpo(val interface{})
	SourceZoneId() interface{}
	SetSourceZoneId(val interface{})
	// The stack in which this element is defined.
	//
	// RosElements must be defined within a stack scope (directly or indirectly).
	Stack() alicloudroscdkcore.Stack
	Tags() *[]*RosDiskReplicaPair_TagsProperty
	SetTags(val *[]*RosDiskReplicaPair_TagsProperty)
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

// The jsii proxy struct for RosDiskReplicaPair
type jsiiProxy_RosDiskReplicaPair struct {
	internal.Type__alicloudroscdkcoreRosResource
}

func (j *jsiiProxy_RosDiskReplicaPair) AttrBandwidth() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrBandwidth",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDiskReplicaPair) AttrCreateTime() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDiskReplicaPair) AttrDescription() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDiskReplicaPair) AttrDestinationDiskId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDestinationDiskId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDiskReplicaPair) AttrDestinationRegionId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDestinationRegionId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDiskReplicaPair) AttrDestinationZoneId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDestinationZoneId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDiskReplicaPair) AttrDiskId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDiskId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDiskReplicaPair) AttrDiskReplicaPairName() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDiskReplicaPairName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDiskReplicaPair) AttrPaymentType() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrPaymentType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDiskReplicaPair) AttrReplicaPairId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrReplicaPairId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDiskReplicaPair) AttrResourceGroupId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrResourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDiskReplicaPair) AttrRpo() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrRpo",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDiskReplicaPair) AttrSourceZoneId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrSourceZoneId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDiskReplicaPair) AttrTags() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrTags",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDiskReplicaPair) Bandwidth() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"bandwidth",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDiskReplicaPair) CreationStack() *[]*string {
	var returns *[]*string
	_jsii_.Get(
		j,
		"creationStack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDiskReplicaPair) Description() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"description",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDiskReplicaPair) DestinationDiskId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"destinationDiskId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDiskReplicaPair) DestinationRegionId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"destinationRegionId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDiskReplicaPair) DestinationZoneId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"destinationZoneId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDiskReplicaPair) DiskId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"diskId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDiskReplicaPair) DiskReplicaPairName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"diskReplicaPairName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDiskReplicaPair) EnableResourcePropertyConstraint() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"enableResourcePropertyConstraint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDiskReplicaPair) LogicalId() *string {
	var returns *string
	_jsii_.Get(
		j,
		"logicalId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDiskReplicaPair) Node() alicloudroscdkcore.ConstructNode {
	var returns alicloudroscdkcore.ConstructNode
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDiskReplicaPair) PaymentType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"paymentType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDiskReplicaPair) Period() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"period",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDiskReplicaPair) PeriodUnit() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"periodUnit",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDiskReplicaPair) Ref() *string {
	var returns *string
	_jsii_.Get(
		j,
		"ref",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDiskReplicaPair) ResourceGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"resourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDiskReplicaPair) RosOptions() alicloudroscdkcore.IRosResourceOptions {
	var returns alicloudroscdkcore.IRosResourceOptions
	_jsii_.Get(
		j,
		"rosOptions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDiskReplicaPair) RosProperties() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"rosProperties",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDiskReplicaPair) RosResourceType() *string {
	var returns *string
	_jsii_.Get(
		j,
		"rosResourceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDiskReplicaPair) Rpo() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"rpo",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDiskReplicaPair) SourceZoneId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"sourceZoneId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDiskReplicaPair) Stack() alicloudroscdkcore.Stack {
	var returns alicloudroscdkcore.Stack
	_jsii_.Get(
		j,
		"stack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDiskReplicaPair) Tags() *[]*RosDiskReplicaPair_TagsProperty {
	var returns *[]*RosDiskReplicaPair_TagsProperty
	_jsii_.Get(
		j,
		"tags",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDiskReplicaPair) UpdatedProperites() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"updatedProperites",
		&returns,
	)
	return returns
}


func NewRosDiskReplicaPair(scope alicloudroscdkcore.Construct, id *string, props *RosDiskReplicaPairProps, enableResourcePropertyConstraint *bool) RosDiskReplicaPair {
	_init_.Initialize()

	if err := validateNewRosDiskReplicaPairParameters(scope, id, props, enableResourcePropertyConstraint); err != nil {
		panic(err)
	}
	j := jsiiProxy_RosDiskReplicaPair{}

	_jsii_.Create(
		"@alicloud/ros-cdk-ebs.RosDiskReplicaPair",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		&j,
	)

	return &j
}

func NewRosDiskReplicaPair_Override(r RosDiskReplicaPair, scope alicloudroscdkcore.Construct, id *string, props *RosDiskReplicaPairProps, enableResourcePropertyConstraint *bool) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-ebs.RosDiskReplicaPair",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		r,
	)
}

func (j *jsiiProxy_RosDiskReplicaPair)SetBandwidth(val interface{}) {
	if err := j.validateSetBandwidthParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"bandwidth",
		val,
	)
}

func (j *jsiiProxy_RosDiskReplicaPair)SetDescription(val interface{}) {
	if err := j.validateSetDescriptionParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"description",
		val,
	)
}

func (j *jsiiProxy_RosDiskReplicaPair)SetDestinationDiskId(val interface{}) {
	if err := j.validateSetDestinationDiskIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"destinationDiskId",
		val,
	)
}

func (j *jsiiProxy_RosDiskReplicaPair)SetDestinationRegionId(val interface{}) {
	if err := j.validateSetDestinationRegionIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"destinationRegionId",
		val,
	)
}

func (j *jsiiProxy_RosDiskReplicaPair)SetDestinationZoneId(val interface{}) {
	if err := j.validateSetDestinationZoneIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"destinationZoneId",
		val,
	)
}

func (j *jsiiProxy_RosDiskReplicaPair)SetDiskId(val interface{}) {
	if err := j.validateSetDiskIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"diskId",
		val,
	)
}

func (j *jsiiProxy_RosDiskReplicaPair)SetDiskReplicaPairName(val interface{}) {
	if err := j.validateSetDiskReplicaPairNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"diskReplicaPairName",
		val,
	)
}

func (j *jsiiProxy_RosDiskReplicaPair)SetEnableResourcePropertyConstraint(val *bool) {
	if err := j.validateSetEnableResourcePropertyConstraintParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableResourcePropertyConstraint",
		val,
	)
}

func (j *jsiiProxy_RosDiskReplicaPair)SetPaymentType(val interface{}) {
	if err := j.validateSetPaymentTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"paymentType",
		val,
	)
}

func (j *jsiiProxy_RosDiskReplicaPair)SetPeriod(val interface{}) {
	if err := j.validateSetPeriodParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"period",
		val,
	)
}

func (j *jsiiProxy_RosDiskReplicaPair)SetPeriodUnit(val interface{}) {
	if err := j.validateSetPeriodUnitParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"periodUnit",
		val,
	)
}

func (j *jsiiProxy_RosDiskReplicaPair)SetResourceGroupId(val interface{}) {
	if err := j.validateSetResourceGroupIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"resourceGroupId",
		val,
	)
}

func (j *jsiiProxy_RosDiskReplicaPair)SetRpo(val interface{}) {
	if err := j.validateSetRpoParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"rpo",
		val,
	)
}

func (j *jsiiProxy_RosDiskReplicaPair)SetSourceZoneId(val interface{}) {
	if err := j.validateSetSourceZoneIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"sourceZoneId",
		val,
	)
}

func (j *jsiiProxy_RosDiskReplicaPair)SetTags(val *[]*RosDiskReplicaPair_TagsProperty) {
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
func RosDiskReplicaPair_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosDiskReplicaPair_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-ebs.RosDiskReplicaPair",
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
func RosDiskReplicaPair_IsRosElement(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosDiskReplicaPair_IsRosElementParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-ebs.RosDiskReplicaPair",
		"isRosElement",
		[]interface{}{x},
		&returns,
	)

	return returns
}

// Check whether the given construct is a RosResource.
func RosDiskReplicaPair_IsRosResource(construct alicloudroscdkcore.IConstruct) *bool {
	_init_.Initialize()

	if err := validateRosDiskReplicaPair_IsRosResourceParameters(construct); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-ebs.RosDiskReplicaPair",
		"isRosResource",
		[]interface{}{construct},
		&returns,
	)

	return returns
}

func RosDiskReplicaPair_ROS_RESOURCE_TYPE_NAME() *string {
	_init_.Initialize()
	var returns *string
	_jsii_.StaticGet(
		"@alicloud/ros-cdk-ebs.RosDiskReplicaPair",
		"ROS_RESOURCE_TYPE_NAME",
		&returns,
	)
	return returns
}

func (r *jsiiProxy_RosDiskReplicaPair) AddCondition(con alicloudroscdkcore.RosCondition) {
	if err := r.validateAddConditionParameters(con); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCondition",
		[]interface{}{con},
	)
}

func (r *jsiiProxy_RosDiskReplicaPair) AddCount(count interface{}) {
	if err := r.validateAddCountParameters(count); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCount",
		[]interface{}{count},
	)
}

func (r *jsiiProxy_RosDiskReplicaPair) AddDeletionOverride(path *string) {
	if err := r.validateAddDeletionOverrideParameters(path); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDeletionOverride",
		[]interface{}{path},
	)
}

func (r *jsiiProxy_RosDiskReplicaPair) AddDependsOn(target alicloudroscdkcore.RosResource) {
	if err := r.validateAddDependsOnParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDependsOn",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosDiskReplicaPair) AddDesc(desc *string) {
	if err := r.validateAddDescParameters(desc); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDesc",
		[]interface{}{desc},
	)
}

func (r *jsiiProxy_RosDiskReplicaPair) AddMetaData(key *string, value interface{}) {
	if err := r.validateAddMetaDataParameters(key, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addMetaData",
		[]interface{}{key, value},
	)
}

func (r *jsiiProxy_RosDiskReplicaPair) AddOverride(path *string, value interface{}) {
	if err := r.validateAddOverrideParameters(path, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addOverride",
		[]interface{}{path, value},
	)
}

func (r *jsiiProxy_RosDiskReplicaPair) AddPropertyDeletionOverride(propertyPath *string) {
	if err := r.validateAddPropertyDeletionOverrideParameters(propertyPath); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyDeletionOverride",
		[]interface{}{propertyPath},
	)
}

func (r *jsiiProxy_RosDiskReplicaPair) AddPropertyOverride(propertyPath *string, value interface{}) {
	if err := r.validateAddPropertyOverrideParameters(propertyPath, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyOverride",
		[]interface{}{propertyPath, value},
	)
}

func (r *jsiiProxy_RosDiskReplicaPair) AddRosDependency(target *string) {
	if err := r.validateAddRosDependencyParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addRosDependency",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosDiskReplicaPair) ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy, options *alicloudroscdkcore.RemovalPolicyOptions) {
	if err := r.validateApplyRemovalPolicyParameters(options); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"applyRemovalPolicy",
		[]interface{}{policy, options},
	)
}

func (r *jsiiProxy_RosDiskReplicaPair) GetAtt(attributeName *string) alicloudroscdkcore.Reference {
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

func (r *jsiiProxy_RosDiskReplicaPair) OnPrepare() {
	_jsii_.InvokeVoid(
		r,
		"onPrepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosDiskReplicaPair) OnSynthesize(session constructs.ISynthesisSession) {
	if err := r.validateOnSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"onSynthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosDiskReplicaPair) OnValidate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"onValidate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosDiskReplicaPair) OverrideLogicalId(newLogicalId *string) {
	if err := r.validateOverrideLogicalIdParameters(newLogicalId); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"overrideLogicalId",
		[]interface{}{newLogicalId},
	)
}

func (r *jsiiProxy_RosDiskReplicaPair) Prepare() {
	_jsii_.InvokeVoid(
		r,
		"prepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosDiskReplicaPair) RenderProperties(props *map[string]interface{}) *map[string]interface{} {
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

func (r *jsiiProxy_RosDiskReplicaPair) Synthesize(session alicloudroscdkcore.ISynthesisSession) {
	if err := r.validateSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"synthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosDiskReplicaPair) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		r,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosDiskReplicaPair) Validate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"validate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosDiskReplicaPair) ValidateProperties(_properties interface{}) {
	if err := r.validateValidatePropertiesParameters(_properties); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"validateProperties",
		[]interface{}{_properties},
	)
}

