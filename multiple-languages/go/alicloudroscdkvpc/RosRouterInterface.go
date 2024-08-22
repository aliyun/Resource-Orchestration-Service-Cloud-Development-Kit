package alicloudroscdkvpc

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkvpc/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkvpc/internal"
	"github.com/aws/constructs-go/constructs/v3"
)

// This class is a base encapsulation around the ROS resource type `ALIYUN::VPC::RouterInterface`, which is used to create a router interface.
type RosRouterInterface interface {
	alicloudroscdkcore.RosResource
	AccessPointId() interface{}
	SetAccessPointId(val interface{})
	AttrRouterInterfaceId() alicloudroscdkcore.IResolvable
	AutoPay() interface{}
	SetAutoPay(val interface{})
	// Returns: the stack trace of the point where this Resource was created from, sourced
	// from the +metadata+ entry typed +aliyun:ros:logicalId+, and with the bottom-most
	// node +internal+ entries filtered.
	CreationStack() *[]*string
	Description() interface{}
	SetDescription(val interface{})
	EnableResourcePropertyConstraint() *bool
	SetEnableResourcePropertyConstraint(val *bool)
	HealthCheckSourceIp() interface{}
	SetHealthCheckSourceIp(val interface{})
	HealthCheckTargetIp() interface{}
	SetHealthCheckTargetIp(val interface{})
	InstanceChargeType() interface{}
	SetInstanceChargeType(val interface{})
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
	OppositeAccessPointId() interface{}
	SetOppositeAccessPointId(val interface{})
	OppositeInterfaceId() interface{}
	SetOppositeInterfaceId(val interface{})
	OppositeInterfaceOwnerId() interface{}
	SetOppositeInterfaceOwnerId(val interface{})
	OppositeRegionId() interface{}
	SetOppositeRegionId(val interface{})
	OppositeRouterId() interface{}
	SetOppositeRouterId(val interface{})
	OppositeRouterType() interface{}
	SetOppositeRouterType(val interface{})
	Period() interface{}
	SetPeriod(val interface{})
	PricingCycle() interface{}
	SetPricingCycle(val interface{})
	// Return a string that will be resolved to a RosTemplate `{ Ref }` for this element.
	//
	// If, by any chance, the intrinsic reference of a resource is not a string, you could
	// coerce it to an IResolvable through `Lazy.any({ produce: resource.ref })`.
	Ref() *string
	Role() interface{}
	SetRole(val interface{})
	// Options for this resource, such as condition, update policy etc.
	RosOptions() alicloudroscdkcore.IRosResourceOptions
	RosProperties() *map[string]interface{}
	// ROS resource type.
	RosResourceType() *string
	RouterId() interface{}
	SetRouterId(val interface{})
	RouterType() interface{}
	SetRouterType(val interface{})
	Spec() interface{}
	SetSpec(val interface{})
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

// The jsii proxy struct for RosRouterInterface
type jsiiProxy_RosRouterInterface struct {
	internal.Type__alicloudroscdkcoreRosResource
}

func (j *jsiiProxy_RosRouterInterface) AccessPointId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"accessPointId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosRouterInterface) AttrRouterInterfaceId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrRouterInterfaceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosRouterInterface) AutoPay() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"autoPay",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosRouterInterface) CreationStack() *[]*string {
	var returns *[]*string
	_jsii_.Get(
		j,
		"creationStack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosRouterInterface) Description() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"description",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosRouterInterface) EnableResourcePropertyConstraint() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"enableResourcePropertyConstraint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosRouterInterface) HealthCheckSourceIp() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"healthCheckSourceIp",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosRouterInterface) HealthCheckTargetIp() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"healthCheckTargetIp",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosRouterInterface) InstanceChargeType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"instanceChargeType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosRouterInterface) LogicalId() *string {
	var returns *string
	_jsii_.Get(
		j,
		"logicalId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosRouterInterface) Name() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"name",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosRouterInterface) Node() alicloudroscdkcore.ConstructNode {
	var returns alicloudroscdkcore.ConstructNode
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosRouterInterface) OppositeAccessPointId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"oppositeAccessPointId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosRouterInterface) OppositeInterfaceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"oppositeInterfaceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosRouterInterface) OppositeInterfaceOwnerId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"oppositeInterfaceOwnerId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosRouterInterface) OppositeRegionId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"oppositeRegionId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosRouterInterface) OppositeRouterId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"oppositeRouterId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosRouterInterface) OppositeRouterType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"oppositeRouterType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosRouterInterface) Period() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"period",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosRouterInterface) PricingCycle() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"pricingCycle",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosRouterInterface) Ref() *string {
	var returns *string
	_jsii_.Get(
		j,
		"ref",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosRouterInterface) Role() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"role",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosRouterInterface) RosOptions() alicloudroscdkcore.IRosResourceOptions {
	var returns alicloudroscdkcore.IRosResourceOptions
	_jsii_.Get(
		j,
		"rosOptions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosRouterInterface) RosProperties() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"rosProperties",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosRouterInterface) RosResourceType() *string {
	var returns *string
	_jsii_.Get(
		j,
		"rosResourceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosRouterInterface) RouterId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"routerId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosRouterInterface) RouterType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"routerType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosRouterInterface) Spec() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"spec",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosRouterInterface) Stack() alicloudroscdkcore.Stack {
	var returns alicloudroscdkcore.Stack
	_jsii_.Get(
		j,
		"stack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosRouterInterface) UpdatedProperites() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"updatedProperites",
		&returns,
	)
	return returns
}


func NewRosRouterInterface(scope alicloudroscdkcore.Construct, id *string, props *RosRouterInterfaceProps, enableResourcePropertyConstraint *bool) RosRouterInterface {
	_init_.Initialize()

	if err := validateNewRosRouterInterfaceParameters(scope, id, props, enableResourcePropertyConstraint); err != nil {
		panic(err)
	}
	j := jsiiProxy_RosRouterInterface{}

	_jsii_.Create(
		"@alicloud/ros-cdk-vpc.RosRouterInterface",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		&j,
	)

	return &j
}

func NewRosRouterInterface_Override(r RosRouterInterface, scope alicloudroscdkcore.Construct, id *string, props *RosRouterInterfaceProps, enableResourcePropertyConstraint *bool) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-vpc.RosRouterInterface",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		r,
	)
}

func (j *jsiiProxy_RosRouterInterface)SetAccessPointId(val interface{}) {
	if err := j.validateSetAccessPointIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"accessPointId",
		val,
	)
}

func (j *jsiiProxy_RosRouterInterface)SetAutoPay(val interface{}) {
	if err := j.validateSetAutoPayParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"autoPay",
		val,
	)
}

func (j *jsiiProxy_RosRouterInterface)SetDescription(val interface{}) {
	if err := j.validateSetDescriptionParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"description",
		val,
	)
}

func (j *jsiiProxy_RosRouterInterface)SetEnableResourcePropertyConstraint(val *bool) {
	if err := j.validateSetEnableResourcePropertyConstraintParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableResourcePropertyConstraint",
		val,
	)
}

func (j *jsiiProxy_RosRouterInterface)SetHealthCheckSourceIp(val interface{}) {
	if err := j.validateSetHealthCheckSourceIpParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"healthCheckSourceIp",
		val,
	)
}

func (j *jsiiProxy_RosRouterInterface)SetHealthCheckTargetIp(val interface{}) {
	if err := j.validateSetHealthCheckTargetIpParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"healthCheckTargetIp",
		val,
	)
}

func (j *jsiiProxy_RosRouterInterface)SetInstanceChargeType(val interface{}) {
	if err := j.validateSetInstanceChargeTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"instanceChargeType",
		val,
	)
}

func (j *jsiiProxy_RosRouterInterface)SetName(val interface{}) {
	if err := j.validateSetNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"name",
		val,
	)
}

func (j *jsiiProxy_RosRouterInterface)SetOppositeAccessPointId(val interface{}) {
	if err := j.validateSetOppositeAccessPointIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"oppositeAccessPointId",
		val,
	)
}

func (j *jsiiProxy_RosRouterInterface)SetOppositeInterfaceId(val interface{}) {
	if err := j.validateSetOppositeInterfaceIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"oppositeInterfaceId",
		val,
	)
}

func (j *jsiiProxy_RosRouterInterface)SetOppositeInterfaceOwnerId(val interface{}) {
	if err := j.validateSetOppositeInterfaceOwnerIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"oppositeInterfaceOwnerId",
		val,
	)
}

func (j *jsiiProxy_RosRouterInterface)SetOppositeRegionId(val interface{}) {
	if err := j.validateSetOppositeRegionIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"oppositeRegionId",
		val,
	)
}

func (j *jsiiProxy_RosRouterInterface)SetOppositeRouterId(val interface{}) {
	if err := j.validateSetOppositeRouterIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"oppositeRouterId",
		val,
	)
}

func (j *jsiiProxy_RosRouterInterface)SetOppositeRouterType(val interface{}) {
	if err := j.validateSetOppositeRouterTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"oppositeRouterType",
		val,
	)
}

func (j *jsiiProxy_RosRouterInterface)SetPeriod(val interface{}) {
	if err := j.validateSetPeriodParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"period",
		val,
	)
}

func (j *jsiiProxy_RosRouterInterface)SetPricingCycle(val interface{}) {
	if err := j.validateSetPricingCycleParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"pricingCycle",
		val,
	)
}

func (j *jsiiProxy_RosRouterInterface)SetRole(val interface{}) {
	if err := j.validateSetRoleParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"role",
		val,
	)
}

func (j *jsiiProxy_RosRouterInterface)SetRouterId(val interface{}) {
	if err := j.validateSetRouterIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"routerId",
		val,
	)
}

func (j *jsiiProxy_RosRouterInterface)SetRouterType(val interface{}) {
	if err := j.validateSetRouterTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"routerType",
		val,
	)
}

func (j *jsiiProxy_RosRouterInterface)SetSpec(val interface{}) {
	if err := j.validateSetSpecParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"spec",
		val,
	)
}

// Return whether the given object is a Construct.
func RosRouterInterface_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosRouterInterface_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-vpc.RosRouterInterface",
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
func RosRouterInterface_IsRosElement(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosRouterInterface_IsRosElementParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-vpc.RosRouterInterface",
		"isRosElement",
		[]interface{}{x},
		&returns,
	)

	return returns
}

// Check whether the given construct is a RosResource.
func RosRouterInterface_IsRosResource(construct alicloudroscdkcore.IConstruct) *bool {
	_init_.Initialize()

	if err := validateRosRouterInterface_IsRosResourceParameters(construct); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-vpc.RosRouterInterface",
		"isRosResource",
		[]interface{}{construct},
		&returns,
	)

	return returns
}

func RosRouterInterface_ROS_RESOURCE_TYPE_NAME() *string {
	_init_.Initialize()
	var returns *string
	_jsii_.StaticGet(
		"@alicloud/ros-cdk-vpc.RosRouterInterface",
		"ROS_RESOURCE_TYPE_NAME",
		&returns,
	)
	return returns
}

func (r *jsiiProxy_RosRouterInterface) AddCondition(con alicloudroscdkcore.RosCondition) {
	if err := r.validateAddConditionParameters(con); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCondition",
		[]interface{}{con},
	)
}

func (r *jsiiProxy_RosRouterInterface) AddCount(count interface{}) {
	if err := r.validateAddCountParameters(count); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCount",
		[]interface{}{count},
	)
}

func (r *jsiiProxy_RosRouterInterface) AddDeletionOverride(path *string) {
	if err := r.validateAddDeletionOverrideParameters(path); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDeletionOverride",
		[]interface{}{path},
	)
}

func (r *jsiiProxy_RosRouterInterface) AddDependsOn(target alicloudroscdkcore.RosResource) {
	if err := r.validateAddDependsOnParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDependsOn",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosRouterInterface) AddDesc(desc *string) {
	if err := r.validateAddDescParameters(desc); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDesc",
		[]interface{}{desc},
	)
}

func (r *jsiiProxy_RosRouterInterface) AddMetaData(key *string, value interface{}) {
	if err := r.validateAddMetaDataParameters(key, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addMetaData",
		[]interface{}{key, value},
	)
}

func (r *jsiiProxy_RosRouterInterface) AddOverride(path *string, value interface{}) {
	if err := r.validateAddOverrideParameters(path, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addOverride",
		[]interface{}{path, value},
	)
}

func (r *jsiiProxy_RosRouterInterface) AddPropertyDeletionOverride(propertyPath *string) {
	if err := r.validateAddPropertyDeletionOverrideParameters(propertyPath); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyDeletionOverride",
		[]interface{}{propertyPath},
	)
}

func (r *jsiiProxy_RosRouterInterface) AddPropertyOverride(propertyPath *string, value interface{}) {
	if err := r.validateAddPropertyOverrideParameters(propertyPath, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyOverride",
		[]interface{}{propertyPath, value},
	)
}

func (r *jsiiProxy_RosRouterInterface) AddRosDependency(target *string) {
	if err := r.validateAddRosDependencyParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addRosDependency",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosRouterInterface) ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy, options *alicloudroscdkcore.RemovalPolicyOptions) {
	if err := r.validateApplyRemovalPolicyParameters(options); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"applyRemovalPolicy",
		[]interface{}{policy, options},
	)
}

func (r *jsiiProxy_RosRouterInterface) GetAtt(attributeName *string) alicloudroscdkcore.Reference {
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

func (r *jsiiProxy_RosRouterInterface) OnPrepare() {
	_jsii_.InvokeVoid(
		r,
		"onPrepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosRouterInterface) OnSynthesize(session constructs.ISynthesisSession) {
	if err := r.validateOnSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"onSynthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosRouterInterface) OnValidate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"onValidate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosRouterInterface) OverrideLogicalId(newLogicalId *string) {
	if err := r.validateOverrideLogicalIdParameters(newLogicalId); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"overrideLogicalId",
		[]interface{}{newLogicalId},
	)
}

func (r *jsiiProxy_RosRouterInterface) Prepare() {
	_jsii_.InvokeVoid(
		r,
		"prepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosRouterInterface) RenderProperties(props *map[string]interface{}) *map[string]interface{} {
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

func (r *jsiiProxy_RosRouterInterface) Synthesize(session alicloudroscdkcore.ISynthesisSession) {
	if err := r.validateSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"synthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosRouterInterface) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		r,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosRouterInterface) Validate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"validate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosRouterInterface) ValidateProperties(_properties interface{}) {
	if err := r.validateValidatePropertiesParameters(_properties); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"validateProperties",
		[]interface{}{_properties},
	)
}

