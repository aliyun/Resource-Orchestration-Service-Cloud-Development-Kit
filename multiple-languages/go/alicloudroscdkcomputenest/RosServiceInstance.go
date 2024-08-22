package alicloudroscdkcomputenest

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkcomputenest/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcomputenest/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/aws/constructs-go/constructs/v3"
)

// This class is a base encapsulation around the ROS resource type `ALIYUN::ComputeNest::ServiceInstance`, which is used to create and deploy a service instance.
type RosServiceInstance interface {
	alicloudroscdkcore.RosResource
	AttrComponents() alicloudroscdkcore.IResolvable
	AttrCreateTime() alicloudroscdkcore.IResolvable
	AttrEnableInstanceOps() alicloudroscdkcore.IResolvable
	AttrEnableUserPrometheus() alicloudroscdkcore.IResolvable
	AttrIsOperated() alicloudroscdkcore.IResolvable
	AttrLicenseEndTime() alicloudroscdkcore.IResolvable
	AttrName() alicloudroscdkcore.IResolvable
	AttrNetworkConfig() alicloudroscdkcore.IResolvable
	AttrOutputs() alicloudroscdkcore.IResolvable
	AttrParameters() alicloudroscdkcore.IResolvable
	AttrPredefinedParameterName() alicloudroscdkcore.IResolvable
	AttrProgress() alicloudroscdkcore.IResolvable
	AttrResourceGroupId() alicloudroscdkcore.IResolvable
	AttrService() alicloudroscdkcore.IResolvable
	AttrServiceInstanceId() alicloudroscdkcore.IResolvable
	AttrServiceType() alicloudroscdkcore.IResolvable
	AttrSource() alicloudroscdkcore.IResolvable
	AttrStatusDetail() alicloudroscdkcore.IResolvable
	AttrSupplierUid() alicloudroscdkcore.IResolvable
	AttrTags() alicloudroscdkcore.IResolvable
	AttrTemplateName() alicloudroscdkcore.IResolvable
	AttrUpdateTime() alicloudroscdkcore.IResolvable
	AttrUserId() alicloudroscdkcore.IResolvable
	Commodity() interface{}
	SetCommodity(val interface{})
	ContactGroup() interface{}
	SetContactGroup(val interface{})
	// Returns: the stack trace of the point where this Resource was created from, sourced
	// from the +metadata+ entry typed +aliyun:ros:logicalId+, and with the bottom-most
	// node +internal+ entries filtered.
	CreationStack() *[]*string
	EnableInstanceOps() interface{}
	SetEnableInstanceOps(val interface{})
	EnableResourcePropertyConstraint() *bool
	SetEnableResourcePropertyConstraint(val *bool)
	EnableUserPrometheus() interface{}
	SetEnableUserPrometheus(val interface{})
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
	MarketInstanceId() interface{}
	SetMarketInstanceId(val interface{})
	Name() interface{}
	SetName(val interface{})
	// The construct tree node associated with this construct.
	Node() alicloudroscdkcore.ConstructNode
	OperationName() interface{}
	SetOperationName(val interface{})
	Parameters() interface{}
	SetParameters(val interface{})
	PredefinedParameterName() interface{}
	SetPredefinedParameterName(val interface{})
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
	Service() interface{}
	SetService(val interface{})
	SpecificationCode() interface{}
	SetSpecificationCode(val interface{})
	// The stack in which this element is defined.
	//
	// RosElements must be defined within a stack scope (directly or indirectly).
	Stack() alicloudroscdkcore.Stack
	Tags() *[]*RosServiceInstance_TagsProperty
	SetTags(val *[]*RosServiceInstance_TagsProperty)
	TemplateName() interface{}
	SetTemplateName(val interface{})
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

// The jsii proxy struct for RosServiceInstance
type jsiiProxy_RosServiceInstance struct {
	internal.Type__alicloudroscdkcoreRosResource
}

func (j *jsiiProxy_RosServiceInstance) AttrComponents() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrComponents",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceInstance) AttrCreateTime() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceInstance) AttrEnableInstanceOps() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrEnableInstanceOps",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceInstance) AttrEnableUserPrometheus() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrEnableUserPrometheus",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceInstance) AttrIsOperated() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrIsOperated",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceInstance) AttrLicenseEndTime() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrLicenseEndTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceInstance) AttrName() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceInstance) AttrNetworkConfig() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrNetworkConfig",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceInstance) AttrOutputs() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrOutputs",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceInstance) AttrParameters() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrParameters",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceInstance) AttrPredefinedParameterName() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrPredefinedParameterName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceInstance) AttrProgress() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrProgress",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceInstance) AttrResourceGroupId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrResourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceInstance) AttrService() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrService",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceInstance) AttrServiceInstanceId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrServiceInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceInstance) AttrServiceType() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrServiceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceInstance) AttrSource() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrSource",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceInstance) AttrStatusDetail() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrStatusDetail",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceInstance) AttrSupplierUid() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrSupplierUid",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceInstance) AttrTags() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrTags",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceInstance) AttrTemplateName() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrTemplateName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceInstance) AttrUpdateTime() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrUpdateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceInstance) AttrUserId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrUserId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceInstance) Commodity() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"commodity",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceInstance) ContactGroup() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"contactGroup",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceInstance) CreationStack() *[]*string {
	var returns *[]*string
	_jsii_.Get(
		j,
		"creationStack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceInstance) EnableInstanceOps() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"enableInstanceOps",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceInstance) EnableResourcePropertyConstraint() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"enableResourcePropertyConstraint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceInstance) EnableUserPrometheus() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"enableUserPrometheus",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceInstance) LogicalId() *string {
	var returns *string
	_jsii_.Get(
		j,
		"logicalId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceInstance) MarketInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"marketInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceInstance) Name() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"name",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceInstance) Node() alicloudroscdkcore.ConstructNode {
	var returns alicloudroscdkcore.ConstructNode
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceInstance) OperationName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"operationName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceInstance) Parameters() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"parameters",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceInstance) PredefinedParameterName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"predefinedParameterName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceInstance) Ref() *string {
	var returns *string
	_jsii_.Get(
		j,
		"ref",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceInstance) ResourceGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"resourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceInstance) RosOptions() alicloudroscdkcore.IRosResourceOptions {
	var returns alicloudroscdkcore.IRosResourceOptions
	_jsii_.Get(
		j,
		"rosOptions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceInstance) RosProperties() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"rosProperties",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceInstance) RosResourceType() *string {
	var returns *string
	_jsii_.Get(
		j,
		"rosResourceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceInstance) Service() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"service",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceInstance) SpecificationCode() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"specificationCode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceInstance) Stack() alicloudroscdkcore.Stack {
	var returns alicloudroscdkcore.Stack
	_jsii_.Get(
		j,
		"stack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceInstance) Tags() *[]*RosServiceInstance_TagsProperty {
	var returns *[]*RosServiceInstance_TagsProperty
	_jsii_.Get(
		j,
		"tags",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceInstance) TemplateName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"templateName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosServiceInstance) UpdatedProperites() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"updatedProperites",
		&returns,
	)
	return returns
}


func NewRosServiceInstance(scope alicloudroscdkcore.Construct, id *string, props *RosServiceInstanceProps, enableResourcePropertyConstraint *bool) RosServiceInstance {
	_init_.Initialize()

	if err := validateNewRosServiceInstanceParameters(scope, id, props, enableResourcePropertyConstraint); err != nil {
		panic(err)
	}
	j := jsiiProxy_RosServiceInstance{}

	_jsii_.Create(
		"@alicloud/ros-cdk-computenest.RosServiceInstance",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		&j,
	)

	return &j
}

func NewRosServiceInstance_Override(r RosServiceInstance, scope alicloudroscdkcore.Construct, id *string, props *RosServiceInstanceProps, enableResourcePropertyConstraint *bool) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-computenest.RosServiceInstance",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		r,
	)
}

func (j *jsiiProxy_RosServiceInstance)SetCommodity(val interface{}) {
	if err := j.validateSetCommodityParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"commodity",
		val,
	)
}

func (j *jsiiProxy_RosServiceInstance)SetContactGroup(val interface{}) {
	if err := j.validateSetContactGroupParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"contactGroup",
		val,
	)
}

func (j *jsiiProxy_RosServiceInstance)SetEnableInstanceOps(val interface{}) {
	if err := j.validateSetEnableInstanceOpsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableInstanceOps",
		val,
	)
}

func (j *jsiiProxy_RosServiceInstance)SetEnableResourcePropertyConstraint(val *bool) {
	if err := j.validateSetEnableResourcePropertyConstraintParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableResourcePropertyConstraint",
		val,
	)
}

func (j *jsiiProxy_RosServiceInstance)SetEnableUserPrometheus(val interface{}) {
	if err := j.validateSetEnableUserPrometheusParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableUserPrometheus",
		val,
	)
}

func (j *jsiiProxy_RosServiceInstance)SetMarketInstanceId(val interface{}) {
	if err := j.validateSetMarketInstanceIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"marketInstanceId",
		val,
	)
}

func (j *jsiiProxy_RosServiceInstance)SetName(val interface{}) {
	if err := j.validateSetNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"name",
		val,
	)
}

func (j *jsiiProxy_RosServiceInstance)SetOperationName(val interface{}) {
	if err := j.validateSetOperationNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"operationName",
		val,
	)
}

func (j *jsiiProxy_RosServiceInstance)SetParameters(val interface{}) {
	if err := j.validateSetParametersParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"parameters",
		val,
	)
}

func (j *jsiiProxy_RosServiceInstance)SetPredefinedParameterName(val interface{}) {
	if err := j.validateSetPredefinedParameterNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"predefinedParameterName",
		val,
	)
}

func (j *jsiiProxy_RosServiceInstance)SetResourceGroupId(val interface{}) {
	if err := j.validateSetResourceGroupIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"resourceGroupId",
		val,
	)
}

func (j *jsiiProxy_RosServiceInstance)SetService(val interface{}) {
	if err := j.validateSetServiceParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"service",
		val,
	)
}

func (j *jsiiProxy_RosServiceInstance)SetSpecificationCode(val interface{}) {
	if err := j.validateSetSpecificationCodeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"specificationCode",
		val,
	)
}

func (j *jsiiProxy_RosServiceInstance)SetTags(val *[]*RosServiceInstance_TagsProperty) {
	if err := j.validateSetTagsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"tags",
		val,
	)
}

func (j *jsiiProxy_RosServiceInstance)SetTemplateName(val interface{}) {
	if err := j.validateSetTemplateNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"templateName",
		val,
	)
}

// Return whether the given object is a Construct.
func RosServiceInstance_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosServiceInstance_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-computenest.RosServiceInstance",
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
func RosServiceInstance_IsRosElement(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosServiceInstance_IsRosElementParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-computenest.RosServiceInstance",
		"isRosElement",
		[]interface{}{x},
		&returns,
	)

	return returns
}

// Check whether the given construct is a RosResource.
func RosServiceInstance_IsRosResource(construct alicloudroscdkcore.IConstruct) *bool {
	_init_.Initialize()

	if err := validateRosServiceInstance_IsRosResourceParameters(construct); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-computenest.RosServiceInstance",
		"isRosResource",
		[]interface{}{construct},
		&returns,
	)

	return returns
}

func RosServiceInstance_ROS_RESOURCE_TYPE_NAME() *string {
	_init_.Initialize()
	var returns *string
	_jsii_.StaticGet(
		"@alicloud/ros-cdk-computenest.RosServiceInstance",
		"ROS_RESOURCE_TYPE_NAME",
		&returns,
	)
	return returns
}

func (r *jsiiProxy_RosServiceInstance) AddCondition(con alicloudroscdkcore.RosCondition) {
	if err := r.validateAddConditionParameters(con); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCondition",
		[]interface{}{con},
	)
}

func (r *jsiiProxy_RosServiceInstance) AddCount(count interface{}) {
	if err := r.validateAddCountParameters(count); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCount",
		[]interface{}{count},
	)
}

func (r *jsiiProxy_RosServiceInstance) AddDeletionOverride(path *string) {
	if err := r.validateAddDeletionOverrideParameters(path); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDeletionOverride",
		[]interface{}{path},
	)
}

func (r *jsiiProxy_RosServiceInstance) AddDependsOn(target alicloudroscdkcore.RosResource) {
	if err := r.validateAddDependsOnParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDependsOn",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosServiceInstance) AddDesc(desc *string) {
	if err := r.validateAddDescParameters(desc); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDesc",
		[]interface{}{desc},
	)
}

func (r *jsiiProxy_RosServiceInstance) AddMetaData(key *string, value interface{}) {
	if err := r.validateAddMetaDataParameters(key, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addMetaData",
		[]interface{}{key, value},
	)
}

func (r *jsiiProxy_RosServiceInstance) AddOverride(path *string, value interface{}) {
	if err := r.validateAddOverrideParameters(path, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addOverride",
		[]interface{}{path, value},
	)
}

func (r *jsiiProxy_RosServiceInstance) AddPropertyDeletionOverride(propertyPath *string) {
	if err := r.validateAddPropertyDeletionOverrideParameters(propertyPath); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyDeletionOverride",
		[]interface{}{propertyPath},
	)
}

func (r *jsiiProxy_RosServiceInstance) AddPropertyOverride(propertyPath *string, value interface{}) {
	if err := r.validateAddPropertyOverrideParameters(propertyPath, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyOverride",
		[]interface{}{propertyPath, value},
	)
}

func (r *jsiiProxy_RosServiceInstance) AddRosDependency(target *string) {
	if err := r.validateAddRosDependencyParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addRosDependency",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosServiceInstance) ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy, options *alicloudroscdkcore.RemovalPolicyOptions) {
	if err := r.validateApplyRemovalPolicyParameters(options); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"applyRemovalPolicy",
		[]interface{}{policy, options},
	)
}

func (r *jsiiProxy_RosServiceInstance) GetAtt(attributeName *string) alicloudroscdkcore.Reference {
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

func (r *jsiiProxy_RosServiceInstance) OnPrepare() {
	_jsii_.InvokeVoid(
		r,
		"onPrepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosServiceInstance) OnSynthesize(session constructs.ISynthesisSession) {
	if err := r.validateOnSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"onSynthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosServiceInstance) OnValidate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"onValidate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosServiceInstance) OverrideLogicalId(newLogicalId *string) {
	if err := r.validateOverrideLogicalIdParameters(newLogicalId); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"overrideLogicalId",
		[]interface{}{newLogicalId},
	)
}

func (r *jsiiProxy_RosServiceInstance) Prepare() {
	_jsii_.InvokeVoid(
		r,
		"prepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosServiceInstance) RenderProperties(props *map[string]interface{}) *map[string]interface{} {
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

func (r *jsiiProxy_RosServiceInstance) Synthesize(session alicloudroscdkcore.ISynthesisSession) {
	if err := r.validateSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"synthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosServiceInstance) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		r,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosServiceInstance) Validate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"validate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosServiceInstance) ValidateProperties(_properties interface{}) {
	if err := r.validateValidatePropertiesParameters(_properties); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"validateProperties",
		[]interface{}{_properties},
	)
}

