package alicloudroscdkpai

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkpai/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkpai/internal"
	"github.com/aws/constructs-go/constructs/v3"
)

// This class is a base encapsulation around the ROS resource type `ALIYUN::PAI::ModelVersion`.
type RosModelVersion interface {
	alicloudroscdkcore.RosResource
	ApprovalStatus() interface{}
	SetApprovalStatus(val interface{})
	AttrApprovalStatus() alicloudroscdkcore.IResolvable
	AttrExtraInfo() alicloudroscdkcore.IResolvable
	AttrFormatType() alicloudroscdkcore.IResolvable
	AttrFrameworkType() alicloudroscdkcore.IResolvable
	AttrGmtCreateTime() alicloudroscdkcore.IResolvable
	AttrGmtModifiedTime() alicloudroscdkcore.IResolvable
	AttrInferenceSpec() alicloudroscdkcore.IResolvable
	AttrLabels() alicloudroscdkcore.IResolvable
	AttrMetrics() alicloudroscdkcore.IResolvable
	AttrOptions() alicloudroscdkcore.IResolvable
	AttrOwnerId() alicloudroscdkcore.IResolvable
	AttrSourceId() alicloudroscdkcore.IResolvable
	AttrSourceType() alicloudroscdkcore.IResolvable
	AttrTrainingSpec() alicloudroscdkcore.IResolvable
	AttrUri() alicloudroscdkcore.IResolvable
	AttrUserId() alicloudroscdkcore.IResolvable
	AttrVersionDescription() alicloudroscdkcore.IResolvable
	AttrVersionName() alicloudroscdkcore.IResolvable
	// Returns: the stack trace of the point where this Resource was created from, sourced
	// from the +metadata+ entry typed +aliyun:ros:logicalId+, and with the bottom-most
	// node +internal+ entries filtered.
	CreationStack() *[]*string
	EnableResourcePropertyConstraint() *bool
	SetEnableResourcePropertyConstraint(val *bool)
	ExtraInfo() interface{}
	SetExtraInfo(val interface{})
	FormatType() interface{}
	SetFormatType(val interface{})
	FrameworkType() interface{}
	SetFrameworkType(val interface{})
	InferenceSpec() interface{}
	SetInferenceSpec(val interface{})
	Labels() interface{}
	SetLabels(val interface{})
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
	Metrics() interface{}
	SetMetrics(val interface{})
	ModelId() interface{}
	SetModelId(val interface{})
	// The construct tree node associated with this construct.
	Node() alicloudroscdkcore.ConstructNode
	Options() interface{}
	SetOptions(val interface{})
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
	SourceId() interface{}
	SetSourceId(val interface{})
	SourceType() interface{}
	SetSourceType(val interface{})
	// The stack in which this element is defined.
	//
	// RosElements must be defined within a stack scope (directly or indirectly).
	Stack() alicloudroscdkcore.Stack
	TrainingSpec() interface{}
	SetTrainingSpec(val interface{})
	// Return properties modified after initiation.
	//
	// Resources that expose mutable properties should override this function to
	// collect and return the properties object for this resource.
	UpdatedProperites() *map[string]interface{}
	Uri() interface{}
	SetUri(val interface{})
	VersionDescription() interface{}
	SetVersionDescription(val interface{})
	VersionName() interface{}
	SetVersionName(val interface{})
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

// The jsii proxy struct for RosModelVersion
type jsiiProxy_RosModelVersion struct {
	internal.Type__alicloudroscdkcoreRosResource
}

func (j *jsiiProxy_RosModelVersion) ApprovalStatus() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"approvalStatus",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosModelVersion) AttrApprovalStatus() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrApprovalStatus",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosModelVersion) AttrExtraInfo() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrExtraInfo",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosModelVersion) AttrFormatType() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrFormatType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosModelVersion) AttrFrameworkType() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrFrameworkType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosModelVersion) AttrGmtCreateTime() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrGmtCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosModelVersion) AttrGmtModifiedTime() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrGmtModifiedTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosModelVersion) AttrInferenceSpec() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrInferenceSpec",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosModelVersion) AttrLabels() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrLabels",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosModelVersion) AttrMetrics() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrMetrics",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosModelVersion) AttrOptions() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrOptions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosModelVersion) AttrOwnerId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrOwnerId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosModelVersion) AttrSourceId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrSourceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosModelVersion) AttrSourceType() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrSourceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosModelVersion) AttrTrainingSpec() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrTrainingSpec",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosModelVersion) AttrUri() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrUri",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosModelVersion) AttrUserId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrUserId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosModelVersion) AttrVersionDescription() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrVersionDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosModelVersion) AttrVersionName() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrVersionName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosModelVersion) CreationStack() *[]*string {
	var returns *[]*string
	_jsii_.Get(
		j,
		"creationStack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosModelVersion) EnableResourcePropertyConstraint() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"enableResourcePropertyConstraint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosModelVersion) ExtraInfo() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"extraInfo",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosModelVersion) FormatType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"formatType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosModelVersion) FrameworkType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"frameworkType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosModelVersion) InferenceSpec() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"inferenceSpec",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosModelVersion) Labels() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"labels",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosModelVersion) LogicalId() *string {
	var returns *string
	_jsii_.Get(
		j,
		"logicalId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosModelVersion) Metrics() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"metrics",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosModelVersion) ModelId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"modelId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosModelVersion) Node() alicloudroscdkcore.ConstructNode {
	var returns alicloudroscdkcore.ConstructNode
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosModelVersion) Options() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"options",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosModelVersion) Ref() *string {
	var returns *string
	_jsii_.Get(
		j,
		"ref",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosModelVersion) RosOptions() alicloudroscdkcore.IRosResourceOptions {
	var returns alicloudroscdkcore.IRosResourceOptions
	_jsii_.Get(
		j,
		"rosOptions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosModelVersion) RosProperties() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"rosProperties",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosModelVersion) RosResourceType() *string {
	var returns *string
	_jsii_.Get(
		j,
		"rosResourceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosModelVersion) SourceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"sourceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosModelVersion) SourceType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"sourceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosModelVersion) Stack() alicloudroscdkcore.Stack {
	var returns alicloudroscdkcore.Stack
	_jsii_.Get(
		j,
		"stack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosModelVersion) TrainingSpec() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"trainingSpec",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosModelVersion) UpdatedProperites() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"updatedProperites",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosModelVersion) Uri() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"uri",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosModelVersion) VersionDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"versionDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosModelVersion) VersionName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"versionName",
		&returns,
	)
	return returns
}


func NewRosModelVersion(scope alicloudroscdkcore.Construct, id *string, props *RosModelVersionProps, enableResourcePropertyConstraint *bool) RosModelVersion {
	_init_.Initialize()

	if err := validateNewRosModelVersionParameters(scope, id, props, enableResourcePropertyConstraint); err != nil {
		panic(err)
	}
	j := jsiiProxy_RosModelVersion{}

	_jsii_.Create(
		"@alicloud/ros-cdk-pai.RosModelVersion",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		&j,
	)

	return &j
}

func NewRosModelVersion_Override(r RosModelVersion, scope alicloudroscdkcore.Construct, id *string, props *RosModelVersionProps, enableResourcePropertyConstraint *bool) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-pai.RosModelVersion",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		r,
	)
}

func (j *jsiiProxy_RosModelVersion)SetApprovalStatus(val interface{}) {
	if err := j.validateSetApprovalStatusParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"approvalStatus",
		val,
	)
}

func (j *jsiiProxy_RosModelVersion)SetEnableResourcePropertyConstraint(val *bool) {
	if err := j.validateSetEnableResourcePropertyConstraintParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableResourcePropertyConstraint",
		val,
	)
}

func (j *jsiiProxy_RosModelVersion)SetExtraInfo(val interface{}) {
	if err := j.validateSetExtraInfoParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"extraInfo",
		val,
	)
}

func (j *jsiiProxy_RosModelVersion)SetFormatType(val interface{}) {
	if err := j.validateSetFormatTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"formatType",
		val,
	)
}

func (j *jsiiProxy_RosModelVersion)SetFrameworkType(val interface{}) {
	if err := j.validateSetFrameworkTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"frameworkType",
		val,
	)
}

func (j *jsiiProxy_RosModelVersion)SetInferenceSpec(val interface{}) {
	if err := j.validateSetInferenceSpecParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"inferenceSpec",
		val,
	)
}

func (j *jsiiProxy_RosModelVersion)SetLabels(val interface{}) {
	if err := j.validateSetLabelsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"labels",
		val,
	)
}

func (j *jsiiProxy_RosModelVersion)SetMetrics(val interface{}) {
	if err := j.validateSetMetricsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"metrics",
		val,
	)
}

func (j *jsiiProxy_RosModelVersion)SetModelId(val interface{}) {
	if err := j.validateSetModelIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"modelId",
		val,
	)
}

func (j *jsiiProxy_RosModelVersion)SetOptions(val interface{}) {
	if err := j.validateSetOptionsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"options",
		val,
	)
}

func (j *jsiiProxy_RosModelVersion)SetSourceId(val interface{}) {
	if err := j.validateSetSourceIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"sourceId",
		val,
	)
}

func (j *jsiiProxy_RosModelVersion)SetSourceType(val interface{}) {
	if err := j.validateSetSourceTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"sourceType",
		val,
	)
}

func (j *jsiiProxy_RosModelVersion)SetTrainingSpec(val interface{}) {
	if err := j.validateSetTrainingSpecParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"trainingSpec",
		val,
	)
}

func (j *jsiiProxy_RosModelVersion)SetUri(val interface{}) {
	if err := j.validateSetUriParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"uri",
		val,
	)
}

func (j *jsiiProxy_RosModelVersion)SetVersionDescription(val interface{}) {
	if err := j.validateSetVersionDescriptionParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"versionDescription",
		val,
	)
}

func (j *jsiiProxy_RosModelVersion)SetVersionName(val interface{}) {
	if err := j.validateSetVersionNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"versionName",
		val,
	)
}

// Return whether the given object is a Construct.
func RosModelVersion_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosModelVersion_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-pai.RosModelVersion",
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
func RosModelVersion_IsRosElement(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosModelVersion_IsRosElementParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-pai.RosModelVersion",
		"isRosElement",
		[]interface{}{x},
		&returns,
	)

	return returns
}

// Check whether the given construct is a RosResource.
func RosModelVersion_IsRosResource(construct alicloudroscdkcore.IConstruct) *bool {
	_init_.Initialize()

	if err := validateRosModelVersion_IsRosResourceParameters(construct); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-pai.RosModelVersion",
		"isRosResource",
		[]interface{}{construct},
		&returns,
	)

	return returns
}

func RosModelVersion_ROS_RESOURCE_TYPE_NAME() *string {
	_init_.Initialize()
	var returns *string
	_jsii_.StaticGet(
		"@alicloud/ros-cdk-pai.RosModelVersion",
		"ROS_RESOURCE_TYPE_NAME",
		&returns,
	)
	return returns
}

func (r *jsiiProxy_RosModelVersion) AddCondition(con alicloudroscdkcore.RosCondition) {
	if err := r.validateAddConditionParameters(con); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCondition",
		[]interface{}{con},
	)
}

func (r *jsiiProxy_RosModelVersion) AddCount(count interface{}) {
	if err := r.validateAddCountParameters(count); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCount",
		[]interface{}{count},
	)
}

func (r *jsiiProxy_RosModelVersion) AddDeletionOverride(path *string) {
	if err := r.validateAddDeletionOverrideParameters(path); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDeletionOverride",
		[]interface{}{path},
	)
}

func (r *jsiiProxy_RosModelVersion) AddDependsOn(target alicloudroscdkcore.RosResource) {
	if err := r.validateAddDependsOnParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDependsOn",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosModelVersion) AddDesc(desc *string) {
	if err := r.validateAddDescParameters(desc); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDesc",
		[]interface{}{desc},
	)
}

func (r *jsiiProxy_RosModelVersion) AddMetaData(key *string, value interface{}) {
	if err := r.validateAddMetaDataParameters(key, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addMetaData",
		[]interface{}{key, value},
	)
}

func (r *jsiiProxy_RosModelVersion) AddOverride(path *string, value interface{}) {
	if err := r.validateAddOverrideParameters(path, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addOverride",
		[]interface{}{path, value},
	)
}

func (r *jsiiProxy_RosModelVersion) AddPropertyDeletionOverride(propertyPath *string) {
	if err := r.validateAddPropertyDeletionOverrideParameters(propertyPath); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyDeletionOverride",
		[]interface{}{propertyPath},
	)
}

func (r *jsiiProxy_RosModelVersion) AddPropertyOverride(propertyPath *string, value interface{}) {
	if err := r.validateAddPropertyOverrideParameters(propertyPath, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyOverride",
		[]interface{}{propertyPath, value},
	)
}

func (r *jsiiProxy_RosModelVersion) AddRosDependency(target *string) {
	if err := r.validateAddRosDependencyParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addRosDependency",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosModelVersion) ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy, options *alicloudroscdkcore.RemovalPolicyOptions) {
	if err := r.validateApplyRemovalPolicyParameters(options); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"applyRemovalPolicy",
		[]interface{}{policy, options},
	)
}

func (r *jsiiProxy_RosModelVersion) FetchCondition() alicloudroscdkcore.RosCondition {
	var returns alicloudroscdkcore.RosCondition

	_jsii_.Invoke(
		r,
		"fetchCondition",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosModelVersion) FetchDesc() *string {
	var returns *string

	_jsii_.Invoke(
		r,
		"fetchDesc",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosModelVersion) FetchRosDependency() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"fetchRosDependency",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosModelVersion) GetAtt(attributeName *string) alicloudroscdkcore.Reference {
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

func (r *jsiiProxy_RosModelVersion) OnPrepare() {
	_jsii_.InvokeVoid(
		r,
		"onPrepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosModelVersion) OnSynthesize(session constructs.ISynthesisSession) {
	if err := r.validateOnSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"onSynthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosModelVersion) OnValidate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"onValidate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosModelVersion) OverrideLogicalId(newLogicalId *string) {
	if err := r.validateOverrideLogicalIdParameters(newLogicalId); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"overrideLogicalId",
		[]interface{}{newLogicalId},
	)
}

func (r *jsiiProxy_RosModelVersion) Prepare() {
	_jsii_.InvokeVoid(
		r,
		"prepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosModelVersion) RenderProperties(props *map[string]interface{}) *map[string]interface{} {
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

func (r *jsiiProxy_RosModelVersion) Synthesize(session alicloudroscdkcore.ISynthesisSession) {
	if err := r.validateSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"synthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosModelVersion) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		r,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosModelVersion) Validate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"validate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosModelVersion) ValidateProperties(_properties interface{}) {
	if err := r.validateValidatePropertiesParameters(_properties); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"validateProperties",
		[]interface{}{_properties},
	)
}

