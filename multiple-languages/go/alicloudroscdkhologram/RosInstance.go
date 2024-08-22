package alicloudroscdkhologram

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkhologram/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkhologram/internal"
	"github.com/aws/constructs-go/constructs/v3"
)

// This class is a base encapsulation around the ROS resource type `ALIYUN::Hologram::Instance`, which is used to create a Hologres instance.
type RosInstance interface {
	alicloudroscdkcore.RosResource
	AttrAutoRenewal() alicloudroscdkcore.IResolvable
	AttrColdStorageSize() alicloudroscdkcore.IResolvable
	AttrCommodityCode() alicloudroscdkcore.IResolvable
	AttrComputeNodeCount() alicloudroscdkcore.IResolvable
	AttrCpu() alicloudroscdkcore.IResolvable
	AttrCreateTime() alicloudroscdkcore.IResolvable
	AttrEnableHiveAccess() alicloudroscdkcore.IResolvable
	AttrEndpoints() alicloudroscdkcore.IResolvable
	AttrExpirationTime() alicloudroscdkcore.IResolvable
	AttrGatewayCount() alicloudroscdkcore.IResolvable
	AttrGatewayCpu() alicloudroscdkcore.IResolvable
	AttrGatewayMemory() alicloudroscdkcore.IResolvable
	AttrInstanceId() alicloudroscdkcore.IResolvable
	AttrInstanceName() alicloudroscdkcore.IResolvable
	AttrInstanceOwner() alicloudroscdkcore.IResolvable
	AttrInstanceType() alicloudroscdkcore.IResolvable
	AttrMemory() alicloudroscdkcore.IResolvable
	AttrPaymentType() alicloudroscdkcore.IResolvable
	AttrResourceGroupId() alicloudroscdkcore.IResolvable
	AttrStorageSize() alicloudroscdkcore.IResolvable
	AttrSuspendReason() alicloudroscdkcore.IResolvable
	AttrTags() alicloudroscdkcore.IResolvable
	AttrVersion() alicloudroscdkcore.IResolvable
	AttrZoneId() alicloudroscdkcore.IResolvable
	AutoPay() interface{}
	SetAutoPay(val interface{})
	ColdStorageSize() interface{}
	SetColdStorageSize(val interface{})
	Cpu() interface{}
	SetCpu(val interface{})
	// Returns: the stack trace of the point where this Resource was created from, sourced
	// from the +metadata+ entry typed +aliyun:ros:logicalId+, and with the bottom-most
	// node +internal+ entries filtered.
	CreationStack() *[]*string
	Duration() interface{}
	SetDuration(val interface{})
	EnableResourcePropertyConstraint() *bool
	SetEnableResourcePropertyConstraint(val *bool)
	Endpoints() interface{}
	SetEndpoints(val interface{})
	GatewayCount() interface{}
	SetGatewayCount(val interface{})
	InitialDatabases() interface{}
	SetInitialDatabases(val interface{})
	InstanceName() interface{}
	SetInstanceName(val interface{})
	InstanceType() interface{}
	SetInstanceType(val interface{})
	LeaderInstanceId() interface{}
	SetLeaderInstanceId(val interface{})
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
	PricingCycle() interface{}
	SetPricingCycle(val interface{})
	ProductCode() interface{}
	SetProductCode(val interface{})
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
	ScaleType() interface{}
	SetScaleType(val interface{})
	// The stack in which this element is defined.
	//
	// RosElements must be defined within a stack scope (directly or indirectly).
	Stack() alicloudroscdkcore.Stack
	StorageSize() interface{}
	SetStorageSize(val interface{})
	Tags() *[]*RosInstance_TagsProperty
	SetTags(val *[]*RosInstance_TagsProperty)
	// Return properties modified after initiation.
	//
	// Resources that expose mutable properties should override this function to
	// collect and return the properties object for this resource.
	UpdatedProperites() *map[string]interface{}
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

// The jsii proxy struct for RosInstance
type jsiiProxy_RosInstance struct {
	internal.Type__alicloudroscdkcoreRosResource
}

func (j *jsiiProxy_RosInstance) AttrAutoRenewal() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrAutoRenewal",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) AttrColdStorageSize() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrColdStorageSize",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) AttrCommodityCode() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrCommodityCode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) AttrComputeNodeCount() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrComputeNodeCount",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) AttrCpu() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrCpu",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) AttrCreateTime() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) AttrEnableHiveAccess() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrEnableHiveAccess",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) AttrEndpoints() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrEndpoints",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) AttrExpirationTime() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrExpirationTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) AttrGatewayCount() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrGatewayCount",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) AttrGatewayCpu() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrGatewayCpu",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) AttrGatewayMemory() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrGatewayMemory",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) AttrInstanceId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) AttrInstanceName() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrInstanceName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) AttrInstanceOwner() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrInstanceOwner",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) AttrInstanceType() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrInstanceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) AttrMemory() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrMemory",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) AttrPaymentType() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrPaymentType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) AttrResourceGroupId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrResourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) AttrStorageSize() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrStorageSize",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) AttrSuspendReason() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrSuspendReason",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) AttrTags() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrTags",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) AttrVersion() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) AttrZoneId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrZoneId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) AutoPay() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"autoPay",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) ColdStorageSize() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"coldStorageSize",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) Cpu() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"cpu",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) CreationStack() *[]*string {
	var returns *[]*string
	_jsii_.Get(
		j,
		"creationStack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) Duration() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"duration",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) EnableResourcePropertyConstraint() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"enableResourcePropertyConstraint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) Endpoints() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"endpoints",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) GatewayCount() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"gatewayCount",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) InitialDatabases() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"initialDatabases",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) InstanceName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"instanceName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) InstanceType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"instanceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) LeaderInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"leaderInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) LogicalId() *string {
	var returns *string
	_jsii_.Get(
		j,
		"logicalId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) Node() alicloudroscdkcore.ConstructNode {
	var returns alicloudroscdkcore.ConstructNode
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) PaymentType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"paymentType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) PricingCycle() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"pricingCycle",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) ProductCode() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"productCode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) Ref() *string {
	var returns *string
	_jsii_.Get(
		j,
		"ref",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) ResourceGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"resourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) RosOptions() alicloudroscdkcore.IRosResourceOptions {
	var returns alicloudroscdkcore.IRosResourceOptions
	_jsii_.Get(
		j,
		"rosOptions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) RosProperties() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"rosProperties",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) RosResourceType() *string {
	var returns *string
	_jsii_.Get(
		j,
		"rosResourceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) ScaleType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"scaleType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) Stack() alicloudroscdkcore.Stack {
	var returns alicloudroscdkcore.Stack
	_jsii_.Get(
		j,
		"stack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) StorageSize() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"storageSize",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) Tags() *[]*RosInstance_TagsProperty {
	var returns *[]*RosInstance_TagsProperty
	_jsii_.Get(
		j,
		"tags",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) UpdatedProperites() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"updatedProperites",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) ZoneId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"zoneId",
		&returns,
	)
	return returns
}


func NewRosInstance(scope alicloudroscdkcore.Construct, id *string, props *RosInstanceProps, enableResourcePropertyConstraint *bool) RosInstance {
	_init_.Initialize()

	if err := validateNewRosInstanceParameters(scope, id, props, enableResourcePropertyConstraint); err != nil {
		panic(err)
	}
	j := jsiiProxy_RosInstance{}

	_jsii_.Create(
		"@alicloud/ros-cdk-hologram.RosInstance",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		&j,
	)

	return &j
}

func NewRosInstance_Override(r RosInstance, scope alicloudroscdkcore.Construct, id *string, props *RosInstanceProps, enableResourcePropertyConstraint *bool) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-hologram.RosInstance",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		r,
	)
}

func (j *jsiiProxy_RosInstance)SetAutoPay(val interface{}) {
	if err := j.validateSetAutoPayParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"autoPay",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetColdStorageSize(val interface{}) {
	if err := j.validateSetColdStorageSizeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"coldStorageSize",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetCpu(val interface{}) {
	if err := j.validateSetCpuParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"cpu",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetDuration(val interface{}) {
	if err := j.validateSetDurationParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"duration",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetEnableResourcePropertyConstraint(val *bool) {
	if err := j.validateSetEnableResourcePropertyConstraintParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableResourcePropertyConstraint",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetEndpoints(val interface{}) {
	if err := j.validateSetEndpointsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"endpoints",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetGatewayCount(val interface{}) {
	if err := j.validateSetGatewayCountParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"gatewayCount",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetInitialDatabases(val interface{}) {
	if err := j.validateSetInitialDatabasesParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"initialDatabases",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetInstanceName(val interface{}) {
	if err := j.validateSetInstanceNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"instanceName",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetInstanceType(val interface{}) {
	if err := j.validateSetInstanceTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"instanceType",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetLeaderInstanceId(val interface{}) {
	if err := j.validateSetLeaderInstanceIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"leaderInstanceId",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetPaymentType(val interface{}) {
	if err := j.validateSetPaymentTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"paymentType",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetPricingCycle(val interface{}) {
	if err := j.validateSetPricingCycleParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"pricingCycle",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetProductCode(val interface{}) {
	if err := j.validateSetProductCodeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"productCode",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetResourceGroupId(val interface{}) {
	if err := j.validateSetResourceGroupIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"resourceGroupId",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetScaleType(val interface{}) {
	if err := j.validateSetScaleTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"scaleType",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetStorageSize(val interface{}) {
	if err := j.validateSetStorageSizeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"storageSize",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetTags(val *[]*RosInstance_TagsProperty) {
	if err := j.validateSetTagsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"tags",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetZoneId(val interface{}) {
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
func RosInstance_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosInstance_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-hologram.RosInstance",
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
func RosInstance_IsRosElement(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosInstance_IsRosElementParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-hologram.RosInstance",
		"isRosElement",
		[]interface{}{x},
		&returns,
	)

	return returns
}

// Check whether the given construct is a RosResource.
func RosInstance_IsRosResource(construct alicloudroscdkcore.IConstruct) *bool {
	_init_.Initialize()

	if err := validateRosInstance_IsRosResourceParameters(construct); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-hologram.RosInstance",
		"isRosResource",
		[]interface{}{construct},
		&returns,
	)

	return returns
}

func RosInstance_ROS_RESOURCE_TYPE_NAME() *string {
	_init_.Initialize()
	var returns *string
	_jsii_.StaticGet(
		"@alicloud/ros-cdk-hologram.RosInstance",
		"ROS_RESOURCE_TYPE_NAME",
		&returns,
	)
	return returns
}

func (r *jsiiProxy_RosInstance) AddCondition(con alicloudroscdkcore.RosCondition) {
	if err := r.validateAddConditionParameters(con); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCondition",
		[]interface{}{con},
	)
}

func (r *jsiiProxy_RosInstance) AddCount(count interface{}) {
	if err := r.validateAddCountParameters(count); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCount",
		[]interface{}{count},
	)
}

func (r *jsiiProxy_RosInstance) AddDeletionOverride(path *string) {
	if err := r.validateAddDeletionOverrideParameters(path); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDeletionOverride",
		[]interface{}{path},
	)
}

func (r *jsiiProxy_RosInstance) AddDependsOn(target alicloudroscdkcore.RosResource) {
	if err := r.validateAddDependsOnParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDependsOn",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosInstance) AddDesc(desc *string) {
	if err := r.validateAddDescParameters(desc); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDesc",
		[]interface{}{desc},
	)
}

func (r *jsiiProxy_RosInstance) AddMetaData(key *string, value interface{}) {
	if err := r.validateAddMetaDataParameters(key, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addMetaData",
		[]interface{}{key, value},
	)
}

func (r *jsiiProxy_RosInstance) AddOverride(path *string, value interface{}) {
	if err := r.validateAddOverrideParameters(path, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addOverride",
		[]interface{}{path, value},
	)
}

func (r *jsiiProxy_RosInstance) AddPropertyDeletionOverride(propertyPath *string) {
	if err := r.validateAddPropertyDeletionOverrideParameters(propertyPath); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyDeletionOverride",
		[]interface{}{propertyPath},
	)
}

func (r *jsiiProxy_RosInstance) AddPropertyOverride(propertyPath *string, value interface{}) {
	if err := r.validateAddPropertyOverrideParameters(propertyPath, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyOverride",
		[]interface{}{propertyPath, value},
	)
}

func (r *jsiiProxy_RosInstance) AddRosDependency(target *string) {
	if err := r.validateAddRosDependencyParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addRosDependency",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosInstance) ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy, options *alicloudroscdkcore.RemovalPolicyOptions) {
	if err := r.validateApplyRemovalPolicyParameters(options); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"applyRemovalPolicy",
		[]interface{}{policy, options},
	)
}

func (r *jsiiProxy_RosInstance) GetAtt(attributeName *string) alicloudroscdkcore.Reference {
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

func (r *jsiiProxy_RosInstance) OnPrepare() {
	_jsii_.InvokeVoid(
		r,
		"onPrepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosInstance) OnSynthesize(session constructs.ISynthesisSession) {
	if err := r.validateOnSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"onSynthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosInstance) OnValidate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"onValidate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosInstance) OverrideLogicalId(newLogicalId *string) {
	if err := r.validateOverrideLogicalIdParameters(newLogicalId); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"overrideLogicalId",
		[]interface{}{newLogicalId},
	)
}

func (r *jsiiProxy_RosInstance) Prepare() {
	_jsii_.InvokeVoid(
		r,
		"prepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosInstance) RenderProperties(props *map[string]interface{}) *map[string]interface{} {
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

func (r *jsiiProxy_RosInstance) Synthesize(session alicloudroscdkcore.ISynthesisSession) {
	if err := r.validateSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"synthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosInstance) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		r,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosInstance) Validate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"validate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosInstance) ValidateProperties(_properties interface{}) {
	if err := r.validateValidatePropertiesParameters(_properties); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"validateProperties",
		[]interface{}{_properties},
	)
}

