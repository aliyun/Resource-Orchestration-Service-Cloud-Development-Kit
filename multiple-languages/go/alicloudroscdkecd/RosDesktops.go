package alicloudroscdkecd

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkecd/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkecd/internal"
	"github.com/aws/constructs-go/constructs/v3"
)

// This class is a base encapsulation around the ROS resource type `ALIYUN::ECD::Desktops`, which is used to create one or more cloud desktops.
type RosDesktops interface {
	alicloudroscdkcore.RosResource
	Amount() interface{}
	SetAmount(val interface{})
	AttrDesktopId() alicloudroscdkcore.IResolvable
	AttrOrderId() alicloudroscdkcore.IResolvable
	AutoPay() interface{}
	SetAutoPay(val interface{})
	AutoRenew() interface{}
	SetAutoRenew(val interface{})
	BundleId() interface{}
	SetBundleId(val interface{})
	ChargeType() interface{}
	SetChargeType(val interface{})
	// Returns: the stack trace of the point where this Resource was created from, sourced
	// from the +metadata+ entry typed +aliyun:ros:logicalId+, and with the bottom-most
	// node +internal+ entries filtered.
	CreationStack() *[]*string
	DesktopName() interface{}
	SetDesktopName(val interface{})
	DesktopNameSuffix() interface{}
	SetDesktopNameSuffix(val interface{})
	DirectoryId() interface{}
	SetDirectoryId(val interface{})
	EnableResourcePropertyConstraint() *bool
	SetEnableResourcePropertyConstraint(val *bool)
	EndUserId() interface{}
	SetEndUserId(val interface{})
	GroupId() interface{}
	SetGroupId(val interface{})
	Hostname() interface{}
	SetHostname(val interface{})
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
	OfficeSiteId() interface{}
	SetOfficeSiteId(val interface{})
	Period() interface{}
	SetPeriod(val interface{})
	PeriodUnit() interface{}
	SetPeriodUnit(val interface{})
	PolicyGroupId() interface{}
	SetPolicyGroupId(val interface{})
	PromotionId() interface{}
	SetPromotionId(val interface{})
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
	Tags() *[]*RosDesktops_TagsProperty
	SetTags(val *[]*RosDesktops_TagsProperty)
	// Return properties modified after initiation.
	//
	// Resources that expose mutable properties should override this function to
	// collect and return the properties object for this resource.
	UpdatedProperites() *map[string]interface{}
	UserAssignMode() interface{}
	SetUserAssignMode(val interface{})
	UserName() interface{}
	SetUserName(val interface{})
	VolumeEncryptionEnabled() interface{}
	SetVolumeEncryptionEnabled(val interface{})
	VolumeEncryptionKey() interface{}
	SetVolumeEncryptionKey(val interface{})
	VpcId() interface{}
	SetVpcId(val interface{})
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

// The jsii proxy struct for RosDesktops
type jsiiProxy_RosDesktops struct {
	internal.Type__alicloudroscdkcoreRosResource
}

func (j *jsiiProxy_RosDesktops) Amount() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"amount",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDesktops) AttrDesktopId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDesktopId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDesktops) AttrOrderId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrOrderId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDesktops) AutoPay() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"autoPay",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDesktops) AutoRenew() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"autoRenew",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDesktops) BundleId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"bundleId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDesktops) ChargeType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"chargeType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDesktops) CreationStack() *[]*string {
	var returns *[]*string
	_jsii_.Get(
		j,
		"creationStack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDesktops) DesktopName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"desktopName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDesktops) DesktopNameSuffix() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"desktopNameSuffix",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDesktops) DirectoryId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"directoryId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDesktops) EnableResourcePropertyConstraint() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"enableResourcePropertyConstraint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDesktops) EndUserId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"endUserId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDesktops) GroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"groupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDesktops) Hostname() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"hostname",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDesktops) LogicalId() *string {
	var returns *string
	_jsii_.Get(
		j,
		"logicalId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDesktops) Node() alicloudroscdkcore.ConstructNode {
	var returns alicloudroscdkcore.ConstructNode
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDesktops) OfficeSiteId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"officeSiteId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDesktops) Period() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"period",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDesktops) PeriodUnit() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"periodUnit",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDesktops) PolicyGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"policyGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDesktops) PromotionId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"promotionId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDesktops) Ref() *string {
	var returns *string
	_jsii_.Get(
		j,
		"ref",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDesktops) RosOptions() alicloudroscdkcore.IRosResourceOptions {
	var returns alicloudroscdkcore.IRosResourceOptions
	_jsii_.Get(
		j,
		"rosOptions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDesktops) RosProperties() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"rosProperties",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDesktops) RosResourceType() *string {
	var returns *string
	_jsii_.Get(
		j,
		"rosResourceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDesktops) Stack() alicloudroscdkcore.Stack {
	var returns alicloudroscdkcore.Stack
	_jsii_.Get(
		j,
		"stack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDesktops) Tags() *[]*RosDesktops_TagsProperty {
	var returns *[]*RosDesktops_TagsProperty
	_jsii_.Get(
		j,
		"tags",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDesktops) UpdatedProperites() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"updatedProperites",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDesktops) UserAssignMode() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"userAssignMode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDesktops) UserName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"userName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDesktops) VolumeEncryptionEnabled() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"volumeEncryptionEnabled",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDesktops) VolumeEncryptionKey() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"volumeEncryptionKey",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDesktops) VpcId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"vpcId",
		&returns,
	)
	return returns
}


func NewRosDesktops(scope alicloudroscdkcore.Construct, id *string, props *RosDesktopsProps, enableResourcePropertyConstraint *bool) RosDesktops {
	_init_.Initialize()

	if err := validateNewRosDesktopsParameters(scope, id, props, enableResourcePropertyConstraint); err != nil {
		panic(err)
	}
	j := jsiiProxy_RosDesktops{}

	_jsii_.Create(
		"@alicloud/ros-cdk-ecd.RosDesktops",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		&j,
	)

	return &j
}

func NewRosDesktops_Override(r RosDesktops, scope alicloudroscdkcore.Construct, id *string, props *RosDesktopsProps, enableResourcePropertyConstraint *bool) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-ecd.RosDesktops",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		r,
	)
}

func (j *jsiiProxy_RosDesktops)SetAmount(val interface{}) {
	if err := j.validateSetAmountParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"amount",
		val,
	)
}

func (j *jsiiProxy_RosDesktops)SetAutoPay(val interface{}) {
	if err := j.validateSetAutoPayParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"autoPay",
		val,
	)
}

func (j *jsiiProxy_RosDesktops)SetAutoRenew(val interface{}) {
	if err := j.validateSetAutoRenewParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"autoRenew",
		val,
	)
}

func (j *jsiiProxy_RosDesktops)SetBundleId(val interface{}) {
	if err := j.validateSetBundleIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"bundleId",
		val,
	)
}

func (j *jsiiProxy_RosDesktops)SetChargeType(val interface{}) {
	if err := j.validateSetChargeTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"chargeType",
		val,
	)
}

func (j *jsiiProxy_RosDesktops)SetDesktopName(val interface{}) {
	if err := j.validateSetDesktopNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"desktopName",
		val,
	)
}

func (j *jsiiProxy_RosDesktops)SetDesktopNameSuffix(val interface{}) {
	if err := j.validateSetDesktopNameSuffixParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"desktopNameSuffix",
		val,
	)
}

func (j *jsiiProxy_RosDesktops)SetDirectoryId(val interface{}) {
	if err := j.validateSetDirectoryIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"directoryId",
		val,
	)
}

func (j *jsiiProxy_RosDesktops)SetEnableResourcePropertyConstraint(val *bool) {
	if err := j.validateSetEnableResourcePropertyConstraintParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableResourcePropertyConstraint",
		val,
	)
}

func (j *jsiiProxy_RosDesktops)SetEndUserId(val interface{}) {
	if err := j.validateSetEndUserIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"endUserId",
		val,
	)
}

func (j *jsiiProxy_RosDesktops)SetGroupId(val interface{}) {
	if err := j.validateSetGroupIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"groupId",
		val,
	)
}

func (j *jsiiProxy_RosDesktops)SetHostname(val interface{}) {
	if err := j.validateSetHostnameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"hostname",
		val,
	)
}

func (j *jsiiProxy_RosDesktops)SetOfficeSiteId(val interface{}) {
	if err := j.validateSetOfficeSiteIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"officeSiteId",
		val,
	)
}

func (j *jsiiProxy_RosDesktops)SetPeriod(val interface{}) {
	if err := j.validateSetPeriodParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"period",
		val,
	)
}

func (j *jsiiProxy_RosDesktops)SetPeriodUnit(val interface{}) {
	if err := j.validateSetPeriodUnitParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"periodUnit",
		val,
	)
}

func (j *jsiiProxy_RosDesktops)SetPolicyGroupId(val interface{}) {
	if err := j.validateSetPolicyGroupIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"policyGroupId",
		val,
	)
}

func (j *jsiiProxy_RosDesktops)SetPromotionId(val interface{}) {
	if err := j.validateSetPromotionIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"promotionId",
		val,
	)
}

func (j *jsiiProxy_RosDesktops)SetTags(val *[]*RosDesktops_TagsProperty) {
	if err := j.validateSetTagsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"tags",
		val,
	)
}

func (j *jsiiProxy_RosDesktops)SetUserAssignMode(val interface{}) {
	if err := j.validateSetUserAssignModeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"userAssignMode",
		val,
	)
}

func (j *jsiiProxy_RosDesktops)SetUserName(val interface{}) {
	if err := j.validateSetUserNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"userName",
		val,
	)
}

func (j *jsiiProxy_RosDesktops)SetVolumeEncryptionEnabled(val interface{}) {
	if err := j.validateSetVolumeEncryptionEnabledParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"volumeEncryptionEnabled",
		val,
	)
}

func (j *jsiiProxy_RosDesktops)SetVolumeEncryptionKey(val interface{}) {
	if err := j.validateSetVolumeEncryptionKeyParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"volumeEncryptionKey",
		val,
	)
}

func (j *jsiiProxy_RosDesktops)SetVpcId(val interface{}) {
	if err := j.validateSetVpcIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"vpcId",
		val,
	)
}

// Return whether the given object is a Construct.
func RosDesktops_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosDesktops_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-ecd.RosDesktops",
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
func RosDesktops_IsRosElement(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosDesktops_IsRosElementParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-ecd.RosDesktops",
		"isRosElement",
		[]interface{}{x},
		&returns,
	)

	return returns
}

// Check whether the given construct is a RosResource.
func RosDesktops_IsRosResource(construct alicloudroscdkcore.IConstruct) *bool {
	_init_.Initialize()

	if err := validateRosDesktops_IsRosResourceParameters(construct); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-ecd.RosDesktops",
		"isRosResource",
		[]interface{}{construct},
		&returns,
	)

	return returns
}

func RosDesktops_ROS_RESOURCE_TYPE_NAME() *string {
	_init_.Initialize()
	var returns *string
	_jsii_.StaticGet(
		"@alicloud/ros-cdk-ecd.RosDesktops",
		"ROS_RESOURCE_TYPE_NAME",
		&returns,
	)
	return returns
}

func (r *jsiiProxy_RosDesktops) AddCondition(con alicloudroscdkcore.RosCondition) {
	if err := r.validateAddConditionParameters(con); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCondition",
		[]interface{}{con},
	)
}

func (r *jsiiProxy_RosDesktops) AddCount(count interface{}) {
	if err := r.validateAddCountParameters(count); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCount",
		[]interface{}{count},
	)
}

func (r *jsiiProxy_RosDesktops) AddDeletionOverride(path *string) {
	if err := r.validateAddDeletionOverrideParameters(path); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDeletionOverride",
		[]interface{}{path},
	)
}

func (r *jsiiProxy_RosDesktops) AddDependsOn(target alicloudroscdkcore.RosResource) {
	if err := r.validateAddDependsOnParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDependsOn",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosDesktops) AddDesc(desc *string) {
	if err := r.validateAddDescParameters(desc); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDesc",
		[]interface{}{desc},
	)
}

func (r *jsiiProxy_RosDesktops) AddMetaData(key *string, value interface{}) {
	if err := r.validateAddMetaDataParameters(key, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addMetaData",
		[]interface{}{key, value},
	)
}

func (r *jsiiProxy_RosDesktops) AddOverride(path *string, value interface{}) {
	if err := r.validateAddOverrideParameters(path, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addOverride",
		[]interface{}{path, value},
	)
}

func (r *jsiiProxy_RosDesktops) AddPropertyDeletionOverride(propertyPath *string) {
	if err := r.validateAddPropertyDeletionOverrideParameters(propertyPath); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyDeletionOverride",
		[]interface{}{propertyPath},
	)
}

func (r *jsiiProxy_RosDesktops) AddPropertyOverride(propertyPath *string, value interface{}) {
	if err := r.validateAddPropertyOverrideParameters(propertyPath, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyOverride",
		[]interface{}{propertyPath, value},
	)
}

func (r *jsiiProxy_RosDesktops) AddRosDependency(target *string) {
	if err := r.validateAddRosDependencyParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addRosDependency",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosDesktops) ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy, options *alicloudroscdkcore.RemovalPolicyOptions) {
	if err := r.validateApplyRemovalPolicyParameters(options); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"applyRemovalPolicy",
		[]interface{}{policy, options},
	)
}

func (r *jsiiProxy_RosDesktops) GetAtt(attributeName *string) alicloudroscdkcore.Reference {
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

func (r *jsiiProxy_RosDesktops) OnPrepare() {
	_jsii_.InvokeVoid(
		r,
		"onPrepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosDesktops) OnSynthesize(session constructs.ISynthesisSession) {
	if err := r.validateOnSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"onSynthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosDesktops) OnValidate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"onValidate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosDesktops) OverrideLogicalId(newLogicalId *string) {
	if err := r.validateOverrideLogicalIdParameters(newLogicalId); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"overrideLogicalId",
		[]interface{}{newLogicalId},
	)
}

func (r *jsiiProxy_RosDesktops) Prepare() {
	_jsii_.InvokeVoid(
		r,
		"prepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosDesktops) RenderProperties(props *map[string]interface{}) *map[string]interface{} {
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

func (r *jsiiProxy_RosDesktops) Synthesize(session alicloudroscdkcore.ISynthesisSession) {
	if err := r.validateSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"synthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosDesktops) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		r,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosDesktops) Validate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"validate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosDesktops) ValidateProperties(_properties interface{}) {
	if err := r.validateValidatePropertiesParameters(_properties); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"validateProperties",
		[]interface{}{_properties},
	)
}

