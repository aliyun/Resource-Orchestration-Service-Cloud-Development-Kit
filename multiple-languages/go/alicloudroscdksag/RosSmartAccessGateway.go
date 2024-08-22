package alicloudroscdksag

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdksag/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdksag/internal"
	"github.com/aws/constructs-go/constructs/v3"
)

// This class is a base encapsulation around the ROS resource type `ALIYUN::SAG::SmartAccessGateway`, which is used to create a Smart Access Gateway (SAG) instance.
type RosSmartAccessGateway interface {
	alicloudroscdkcore.RosResource
	Activate() interface{}
	SetActivate(val interface{})
	AlreadyHaveSag() interface{}
	SetAlreadyHaveSag(val interface{})
	AttrOrderId() alicloudroscdkcore.IResolvable
	AttrSmartAgId() alicloudroscdkcore.IResolvable
	AutoPay() interface{}
	SetAutoPay(val interface{})
	BuyerMessage() interface{}
	SetBuyerMessage(val interface{})
	ChargeType() interface{}
	SetChargeType(val interface{})
	CidrBlock() interface{}
	SetCidrBlock(val interface{})
	// Returns: the stack trace of the point where this Resource was created from, sourced
	// from the +metadata+ entry typed +aliyun:ros:logicalId+, and with the bottom-most
	// node +internal+ entries filtered.
	CreationStack() *[]*string
	Description() interface{}
	SetDescription(val interface{})
	EnableResourcePropertyConstraint() *bool
	SetEnableResourcePropertyConstraint(val *bool)
	HardWareSpec() interface{}
	SetHardWareSpec(val interface{})
	HaType() interface{}
	SetHaType(val interface{})
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
	MaxBandWidth() interface{}
	SetMaxBandWidth(val interface{})
	Name() interface{}
	SetName(val interface{})
	// The construct tree node associated with this construct.
	Node() alicloudroscdkcore.ConstructNode
	Period() interface{}
	SetPeriod(val interface{})
	ReceiverAddress() interface{}
	SetReceiverAddress(val interface{})
	ReceiverCity() interface{}
	SetReceiverCity(val interface{})
	ReceiverCountry() interface{}
	SetReceiverCountry(val interface{})
	ReceiverDistrict() interface{}
	SetReceiverDistrict(val interface{})
	ReceiverEmail() interface{}
	SetReceiverEmail(val interface{})
	ReceiverMobile() interface{}
	SetReceiverMobile(val interface{})
	ReceiverName() interface{}
	SetReceiverName(val interface{})
	ReceiverPhone() interface{}
	SetReceiverPhone(val interface{})
	ReceiverState() interface{}
	SetReceiverState(val interface{})
	ReceiverTown() interface{}
	SetReceiverTown(val interface{})
	ReceiverZip() interface{}
	SetReceiverZip(val interface{})
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
	RoutingStrategy() interface{}
	SetRoutingStrategy(val interface{})
	SecurityLockThreshold() interface{}
	SetSecurityLockThreshold(val interface{})
	// The stack in which this element is defined.
	//
	// RosElements must be defined within a stack scope (directly or indirectly).
	Stack() alicloudroscdkcore.Stack
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

// The jsii proxy struct for RosSmartAccessGateway
type jsiiProxy_RosSmartAccessGateway struct {
	internal.Type__alicloudroscdkcoreRosResource
}

func (j *jsiiProxy_RosSmartAccessGateway) Activate() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"activate",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSmartAccessGateway) AlreadyHaveSag() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"alreadyHaveSag",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSmartAccessGateway) AttrOrderId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrOrderId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSmartAccessGateway) AttrSmartAgId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrSmartAgId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSmartAccessGateway) AutoPay() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"autoPay",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSmartAccessGateway) BuyerMessage() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"buyerMessage",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSmartAccessGateway) ChargeType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"chargeType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSmartAccessGateway) CidrBlock() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"cidrBlock",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSmartAccessGateway) CreationStack() *[]*string {
	var returns *[]*string
	_jsii_.Get(
		j,
		"creationStack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSmartAccessGateway) Description() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"description",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSmartAccessGateway) EnableResourcePropertyConstraint() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"enableResourcePropertyConstraint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSmartAccessGateway) HardWareSpec() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"hardWareSpec",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSmartAccessGateway) HaType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"haType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSmartAccessGateway) LogicalId() *string {
	var returns *string
	_jsii_.Get(
		j,
		"logicalId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSmartAccessGateway) MaxBandWidth() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"maxBandWidth",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSmartAccessGateway) Name() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"name",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSmartAccessGateway) Node() alicloudroscdkcore.ConstructNode {
	var returns alicloudroscdkcore.ConstructNode
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSmartAccessGateway) Period() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"period",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSmartAccessGateway) ReceiverAddress() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"receiverAddress",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSmartAccessGateway) ReceiverCity() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"receiverCity",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSmartAccessGateway) ReceiverCountry() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"receiverCountry",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSmartAccessGateway) ReceiverDistrict() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"receiverDistrict",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSmartAccessGateway) ReceiverEmail() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"receiverEmail",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSmartAccessGateway) ReceiverMobile() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"receiverMobile",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSmartAccessGateway) ReceiverName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"receiverName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSmartAccessGateway) ReceiverPhone() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"receiverPhone",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSmartAccessGateway) ReceiverState() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"receiverState",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSmartAccessGateway) ReceiverTown() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"receiverTown",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSmartAccessGateway) ReceiverZip() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"receiverZip",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSmartAccessGateway) Ref() *string {
	var returns *string
	_jsii_.Get(
		j,
		"ref",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSmartAccessGateway) RosOptions() alicloudroscdkcore.IRosResourceOptions {
	var returns alicloudroscdkcore.IRosResourceOptions
	_jsii_.Get(
		j,
		"rosOptions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSmartAccessGateway) RosProperties() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"rosProperties",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSmartAccessGateway) RosResourceType() *string {
	var returns *string
	_jsii_.Get(
		j,
		"rosResourceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSmartAccessGateway) RoutingStrategy() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"routingStrategy",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSmartAccessGateway) SecurityLockThreshold() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"securityLockThreshold",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSmartAccessGateway) Stack() alicloudroscdkcore.Stack {
	var returns alicloudroscdkcore.Stack
	_jsii_.Get(
		j,
		"stack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSmartAccessGateway) UpdatedProperites() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"updatedProperites",
		&returns,
	)
	return returns
}


func NewRosSmartAccessGateway(scope alicloudroscdkcore.Construct, id *string, props *RosSmartAccessGatewayProps, enableResourcePropertyConstraint *bool) RosSmartAccessGateway {
	_init_.Initialize()

	if err := validateNewRosSmartAccessGatewayParameters(scope, id, props, enableResourcePropertyConstraint); err != nil {
		panic(err)
	}
	j := jsiiProxy_RosSmartAccessGateway{}

	_jsii_.Create(
		"@alicloud/ros-cdk-sag.RosSmartAccessGateway",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		&j,
	)

	return &j
}

func NewRosSmartAccessGateway_Override(r RosSmartAccessGateway, scope alicloudroscdkcore.Construct, id *string, props *RosSmartAccessGatewayProps, enableResourcePropertyConstraint *bool) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-sag.RosSmartAccessGateway",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		r,
	)
}

func (j *jsiiProxy_RosSmartAccessGateway)SetActivate(val interface{}) {
	if err := j.validateSetActivateParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"activate",
		val,
	)
}

func (j *jsiiProxy_RosSmartAccessGateway)SetAlreadyHaveSag(val interface{}) {
	if err := j.validateSetAlreadyHaveSagParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"alreadyHaveSag",
		val,
	)
}

func (j *jsiiProxy_RosSmartAccessGateway)SetAutoPay(val interface{}) {
	if err := j.validateSetAutoPayParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"autoPay",
		val,
	)
}

func (j *jsiiProxy_RosSmartAccessGateway)SetBuyerMessage(val interface{}) {
	if err := j.validateSetBuyerMessageParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"buyerMessage",
		val,
	)
}

func (j *jsiiProxy_RosSmartAccessGateway)SetChargeType(val interface{}) {
	if err := j.validateSetChargeTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"chargeType",
		val,
	)
}

func (j *jsiiProxy_RosSmartAccessGateway)SetCidrBlock(val interface{}) {
	if err := j.validateSetCidrBlockParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"cidrBlock",
		val,
	)
}

func (j *jsiiProxy_RosSmartAccessGateway)SetDescription(val interface{}) {
	if err := j.validateSetDescriptionParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"description",
		val,
	)
}

func (j *jsiiProxy_RosSmartAccessGateway)SetEnableResourcePropertyConstraint(val *bool) {
	if err := j.validateSetEnableResourcePropertyConstraintParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableResourcePropertyConstraint",
		val,
	)
}

func (j *jsiiProxy_RosSmartAccessGateway)SetHardWareSpec(val interface{}) {
	if err := j.validateSetHardWareSpecParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"hardWareSpec",
		val,
	)
}

func (j *jsiiProxy_RosSmartAccessGateway)SetHaType(val interface{}) {
	if err := j.validateSetHaTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"haType",
		val,
	)
}

func (j *jsiiProxy_RosSmartAccessGateway)SetMaxBandWidth(val interface{}) {
	if err := j.validateSetMaxBandWidthParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"maxBandWidth",
		val,
	)
}

func (j *jsiiProxy_RosSmartAccessGateway)SetName(val interface{}) {
	if err := j.validateSetNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"name",
		val,
	)
}

func (j *jsiiProxy_RosSmartAccessGateway)SetPeriod(val interface{}) {
	if err := j.validateSetPeriodParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"period",
		val,
	)
}

func (j *jsiiProxy_RosSmartAccessGateway)SetReceiverAddress(val interface{}) {
	if err := j.validateSetReceiverAddressParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"receiverAddress",
		val,
	)
}

func (j *jsiiProxy_RosSmartAccessGateway)SetReceiverCity(val interface{}) {
	if err := j.validateSetReceiverCityParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"receiverCity",
		val,
	)
}

func (j *jsiiProxy_RosSmartAccessGateway)SetReceiverCountry(val interface{}) {
	if err := j.validateSetReceiverCountryParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"receiverCountry",
		val,
	)
}

func (j *jsiiProxy_RosSmartAccessGateway)SetReceiverDistrict(val interface{}) {
	if err := j.validateSetReceiverDistrictParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"receiverDistrict",
		val,
	)
}

func (j *jsiiProxy_RosSmartAccessGateway)SetReceiverEmail(val interface{}) {
	if err := j.validateSetReceiverEmailParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"receiverEmail",
		val,
	)
}

func (j *jsiiProxy_RosSmartAccessGateway)SetReceiverMobile(val interface{}) {
	if err := j.validateSetReceiverMobileParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"receiverMobile",
		val,
	)
}

func (j *jsiiProxy_RosSmartAccessGateway)SetReceiverName(val interface{}) {
	if err := j.validateSetReceiverNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"receiverName",
		val,
	)
}

func (j *jsiiProxy_RosSmartAccessGateway)SetReceiverPhone(val interface{}) {
	if err := j.validateSetReceiverPhoneParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"receiverPhone",
		val,
	)
}

func (j *jsiiProxy_RosSmartAccessGateway)SetReceiverState(val interface{}) {
	if err := j.validateSetReceiverStateParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"receiverState",
		val,
	)
}

func (j *jsiiProxy_RosSmartAccessGateway)SetReceiverTown(val interface{}) {
	if err := j.validateSetReceiverTownParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"receiverTown",
		val,
	)
}

func (j *jsiiProxy_RosSmartAccessGateway)SetReceiverZip(val interface{}) {
	if err := j.validateSetReceiverZipParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"receiverZip",
		val,
	)
}

func (j *jsiiProxy_RosSmartAccessGateway)SetRoutingStrategy(val interface{}) {
	if err := j.validateSetRoutingStrategyParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"routingStrategy",
		val,
	)
}

func (j *jsiiProxy_RosSmartAccessGateway)SetSecurityLockThreshold(val interface{}) {
	if err := j.validateSetSecurityLockThresholdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"securityLockThreshold",
		val,
	)
}

// Return whether the given object is a Construct.
func RosSmartAccessGateway_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosSmartAccessGateway_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-sag.RosSmartAccessGateway",
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
func RosSmartAccessGateway_IsRosElement(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosSmartAccessGateway_IsRosElementParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-sag.RosSmartAccessGateway",
		"isRosElement",
		[]interface{}{x},
		&returns,
	)

	return returns
}

// Check whether the given construct is a RosResource.
func RosSmartAccessGateway_IsRosResource(construct alicloudroscdkcore.IConstruct) *bool {
	_init_.Initialize()

	if err := validateRosSmartAccessGateway_IsRosResourceParameters(construct); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-sag.RosSmartAccessGateway",
		"isRosResource",
		[]interface{}{construct},
		&returns,
	)

	return returns
}

func RosSmartAccessGateway_ROS_RESOURCE_TYPE_NAME() *string {
	_init_.Initialize()
	var returns *string
	_jsii_.StaticGet(
		"@alicloud/ros-cdk-sag.RosSmartAccessGateway",
		"ROS_RESOURCE_TYPE_NAME",
		&returns,
	)
	return returns
}

func (r *jsiiProxy_RosSmartAccessGateway) AddCondition(con alicloudroscdkcore.RosCondition) {
	if err := r.validateAddConditionParameters(con); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCondition",
		[]interface{}{con},
	)
}

func (r *jsiiProxy_RosSmartAccessGateway) AddCount(count interface{}) {
	if err := r.validateAddCountParameters(count); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCount",
		[]interface{}{count},
	)
}

func (r *jsiiProxy_RosSmartAccessGateway) AddDeletionOverride(path *string) {
	if err := r.validateAddDeletionOverrideParameters(path); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDeletionOverride",
		[]interface{}{path},
	)
}

func (r *jsiiProxy_RosSmartAccessGateway) AddDependsOn(target alicloudroscdkcore.RosResource) {
	if err := r.validateAddDependsOnParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDependsOn",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosSmartAccessGateway) AddDesc(desc *string) {
	if err := r.validateAddDescParameters(desc); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDesc",
		[]interface{}{desc},
	)
}

func (r *jsiiProxy_RosSmartAccessGateway) AddMetaData(key *string, value interface{}) {
	if err := r.validateAddMetaDataParameters(key, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addMetaData",
		[]interface{}{key, value},
	)
}

func (r *jsiiProxy_RosSmartAccessGateway) AddOverride(path *string, value interface{}) {
	if err := r.validateAddOverrideParameters(path, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addOverride",
		[]interface{}{path, value},
	)
}

func (r *jsiiProxy_RosSmartAccessGateway) AddPropertyDeletionOverride(propertyPath *string) {
	if err := r.validateAddPropertyDeletionOverrideParameters(propertyPath); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyDeletionOverride",
		[]interface{}{propertyPath},
	)
}

func (r *jsiiProxy_RosSmartAccessGateway) AddPropertyOverride(propertyPath *string, value interface{}) {
	if err := r.validateAddPropertyOverrideParameters(propertyPath, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyOverride",
		[]interface{}{propertyPath, value},
	)
}

func (r *jsiiProxy_RosSmartAccessGateway) AddRosDependency(target *string) {
	if err := r.validateAddRosDependencyParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addRosDependency",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosSmartAccessGateway) ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy, options *alicloudroscdkcore.RemovalPolicyOptions) {
	if err := r.validateApplyRemovalPolicyParameters(options); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"applyRemovalPolicy",
		[]interface{}{policy, options},
	)
}

func (r *jsiiProxy_RosSmartAccessGateway) GetAtt(attributeName *string) alicloudroscdkcore.Reference {
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

func (r *jsiiProxy_RosSmartAccessGateway) OnPrepare() {
	_jsii_.InvokeVoid(
		r,
		"onPrepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosSmartAccessGateway) OnSynthesize(session constructs.ISynthesisSession) {
	if err := r.validateOnSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"onSynthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosSmartAccessGateway) OnValidate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"onValidate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosSmartAccessGateway) OverrideLogicalId(newLogicalId *string) {
	if err := r.validateOverrideLogicalIdParameters(newLogicalId); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"overrideLogicalId",
		[]interface{}{newLogicalId},
	)
}

func (r *jsiiProxy_RosSmartAccessGateway) Prepare() {
	_jsii_.InvokeVoid(
		r,
		"prepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosSmartAccessGateway) RenderProperties(props *map[string]interface{}) *map[string]interface{} {
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

func (r *jsiiProxy_RosSmartAccessGateway) Synthesize(session alicloudroscdkcore.ISynthesisSession) {
	if err := r.validateSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"synthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosSmartAccessGateway) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		r,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosSmartAccessGateway) Validate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"validate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosSmartAccessGateway) ValidateProperties(_properties interface{}) {
	if err := r.validateValidatePropertiesParameters(_properties); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"validateProperties",
		[]interface{}{_properties},
	)
}

