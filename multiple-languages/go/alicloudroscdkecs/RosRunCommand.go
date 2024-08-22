package alicloudroscdkecs

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkecs/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkecs/internal"
	"github.com/aws/constructs-go/constructs/v3"
)

// This class is a base encapsulation around the ROS resource type `ALIYUN::ECS::RunCommand`, which is used to run a shell, PowerShell, or batch command on Elastic Compute Service (ECS) instances.
type RosRunCommand interface {
	alicloudroscdkcore.RosResource
	AttrCommandId() alicloudroscdkcore.IResolvable
	AttrInvokeId() alicloudroscdkcore.IResolvable
	AttrInvokeInstances() alicloudroscdkcore.IResolvable
	AttrInvokeResults() alicloudroscdkcore.IResolvable
	CommandContent() interface{}
	SetCommandContent(val interface{})
	ContainerId() interface{}
	SetContainerId(val interface{})
	ContainerName() interface{}
	SetContainerName(val interface{})
	ContentEncoding() interface{}
	SetContentEncoding(val interface{})
	// Returns: the stack trace of the point where this Resource was created from, sourced
	// from the +metadata+ entry typed +aliyun:ros:logicalId+, and with the bottom-most
	// node +internal+ entries filtered.
	CreationStack() *[]*string
	Description() interface{}
	SetDescription(val interface{})
	EnableParameter() interface{}
	SetEnableParameter(val interface{})
	EnableResourcePropertyConstraint() *bool
	SetEnableResourcePropertyConstraint(val *bool)
	Frequency() interface{}
	SetFrequency(val interface{})
	InstanceIds() interface{}
	SetInstanceIds(val interface{})
	KeepCommand() interface{}
	SetKeepCommand(val interface{})
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
	Parameters() interface{}
	SetParameters(val interface{})
	// Return a string that will be resolved to a RosTemplate `{ Ref }` for this element.
	//
	// If, by any chance, the intrinsic reference of a resource is not a string, you could
	// coerce it to an IResolvable through `Lazy.any({ produce: resource.ref })`.
	Ref() *string
	RepeatMode() interface{}
	SetRepeatMode(val interface{})
	ResourceGroupId() interface{}
	SetResourceGroupId(val interface{})
	// Options for this resource, such as condition, update policy etc.
	RosOptions() alicloudroscdkcore.IRosResourceOptions
	RosProperties() *map[string]interface{}
	// ROS resource type.
	RosResourceType() *string
	RunAgainOn() interface{}
	SetRunAgainOn(val interface{})
	// The stack in which this element is defined.
	//
	// RosElements must be defined within a stack scope (directly or indirectly).
	Stack() alicloudroscdkcore.Stack
	Sync() interface{}
	SetSync(val interface{})
	Tags() *[]*RosRunCommand_TagsProperty
	SetTags(val *[]*RosRunCommand_TagsProperty)
	Timeout() interface{}
	SetTimeout(val interface{})
	Type() interface{}
	SetType(val interface{})
	// Return properties modified after initiation.
	//
	// Resources that expose mutable properties should override this function to
	// collect and return the properties object for this resource.
	UpdatedProperites() *map[string]interface{}
	Username() interface{}
	SetUsername(val interface{})
	WindowsPasswordName() interface{}
	SetWindowsPasswordName(val interface{})
	WorkingDir() interface{}
	SetWorkingDir(val interface{})
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

// The jsii proxy struct for RosRunCommand
type jsiiProxy_RosRunCommand struct {
	internal.Type__alicloudroscdkcoreRosResource
}

func (j *jsiiProxy_RosRunCommand) AttrCommandId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrCommandId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosRunCommand) AttrInvokeId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrInvokeId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosRunCommand) AttrInvokeInstances() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrInvokeInstances",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosRunCommand) AttrInvokeResults() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrInvokeResults",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosRunCommand) CommandContent() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"commandContent",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosRunCommand) ContainerId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"containerId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosRunCommand) ContainerName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"containerName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosRunCommand) ContentEncoding() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"contentEncoding",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosRunCommand) CreationStack() *[]*string {
	var returns *[]*string
	_jsii_.Get(
		j,
		"creationStack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosRunCommand) Description() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"description",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosRunCommand) EnableParameter() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"enableParameter",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosRunCommand) EnableResourcePropertyConstraint() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"enableResourcePropertyConstraint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosRunCommand) Frequency() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"frequency",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosRunCommand) InstanceIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"instanceIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosRunCommand) KeepCommand() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"keepCommand",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosRunCommand) LogicalId() *string {
	var returns *string
	_jsii_.Get(
		j,
		"logicalId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosRunCommand) Name() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"name",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosRunCommand) Node() alicloudroscdkcore.ConstructNode {
	var returns alicloudroscdkcore.ConstructNode
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosRunCommand) Parameters() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"parameters",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosRunCommand) Ref() *string {
	var returns *string
	_jsii_.Get(
		j,
		"ref",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosRunCommand) RepeatMode() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"repeatMode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosRunCommand) ResourceGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"resourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosRunCommand) RosOptions() alicloudroscdkcore.IRosResourceOptions {
	var returns alicloudroscdkcore.IRosResourceOptions
	_jsii_.Get(
		j,
		"rosOptions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosRunCommand) RosProperties() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"rosProperties",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosRunCommand) RosResourceType() *string {
	var returns *string
	_jsii_.Get(
		j,
		"rosResourceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosRunCommand) RunAgainOn() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"runAgainOn",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosRunCommand) Stack() alicloudroscdkcore.Stack {
	var returns alicloudroscdkcore.Stack
	_jsii_.Get(
		j,
		"stack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosRunCommand) Sync() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"sync",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosRunCommand) Tags() *[]*RosRunCommand_TagsProperty {
	var returns *[]*RosRunCommand_TagsProperty
	_jsii_.Get(
		j,
		"tags",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosRunCommand) Timeout() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"timeout",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosRunCommand) Type() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"type",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosRunCommand) UpdatedProperites() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"updatedProperites",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosRunCommand) Username() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"username",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosRunCommand) WindowsPasswordName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"windowsPasswordName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosRunCommand) WorkingDir() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"workingDir",
		&returns,
	)
	return returns
}


func NewRosRunCommand(scope alicloudroscdkcore.Construct, id *string, props *RosRunCommandProps, enableResourcePropertyConstraint *bool) RosRunCommand {
	_init_.Initialize()

	if err := validateNewRosRunCommandParameters(scope, id, props, enableResourcePropertyConstraint); err != nil {
		panic(err)
	}
	j := jsiiProxy_RosRunCommand{}

	_jsii_.Create(
		"@alicloud/ros-cdk-ecs.RosRunCommand",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		&j,
	)

	return &j
}

func NewRosRunCommand_Override(r RosRunCommand, scope alicloudroscdkcore.Construct, id *string, props *RosRunCommandProps, enableResourcePropertyConstraint *bool) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-ecs.RosRunCommand",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		r,
	)
}

func (j *jsiiProxy_RosRunCommand)SetCommandContent(val interface{}) {
	if err := j.validateSetCommandContentParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"commandContent",
		val,
	)
}

func (j *jsiiProxy_RosRunCommand)SetContainerId(val interface{}) {
	if err := j.validateSetContainerIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"containerId",
		val,
	)
}

func (j *jsiiProxy_RosRunCommand)SetContainerName(val interface{}) {
	if err := j.validateSetContainerNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"containerName",
		val,
	)
}

func (j *jsiiProxy_RosRunCommand)SetContentEncoding(val interface{}) {
	if err := j.validateSetContentEncodingParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"contentEncoding",
		val,
	)
}

func (j *jsiiProxy_RosRunCommand)SetDescription(val interface{}) {
	if err := j.validateSetDescriptionParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"description",
		val,
	)
}

func (j *jsiiProxy_RosRunCommand)SetEnableParameter(val interface{}) {
	if err := j.validateSetEnableParameterParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableParameter",
		val,
	)
}

func (j *jsiiProxy_RosRunCommand)SetEnableResourcePropertyConstraint(val *bool) {
	if err := j.validateSetEnableResourcePropertyConstraintParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableResourcePropertyConstraint",
		val,
	)
}

func (j *jsiiProxy_RosRunCommand)SetFrequency(val interface{}) {
	if err := j.validateSetFrequencyParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"frequency",
		val,
	)
}

func (j *jsiiProxy_RosRunCommand)SetInstanceIds(val interface{}) {
	if err := j.validateSetInstanceIdsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"instanceIds",
		val,
	)
}

func (j *jsiiProxy_RosRunCommand)SetKeepCommand(val interface{}) {
	if err := j.validateSetKeepCommandParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"keepCommand",
		val,
	)
}

func (j *jsiiProxy_RosRunCommand)SetName(val interface{}) {
	if err := j.validateSetNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"name",
		val,
	)
}

func (j *jsiiProxy_RosRunCommand)SetParameters(val interface{}) {
	if err := j.validateSetParametersParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"parameters",
		val,
	)
}

func (j *jsiiProxy_RosRunCommand)SetRepeatMode(val interface{}) {
	if err := j.validateSetRepeatModeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"repeatMode",
		val,
	)
}

func (j *jsiiProxy_RosRunCommand)SetResourceGroupId(val interface{}) {
	if err := j.validateSetResourceGroupIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"resourceGroupId",
		val,
	)
}

func (j *jsiiProxy_RosRunCommand)SetRunAgainOn(val interface{}) {
	if err := j.validateSetRunAgainOnParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"runAgainOn",
		val,
	)
}

func (j *jsiiProxy_RosRunCommand)SetSync(val interface{}) {
	if err := j.validateSetSyncParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"sync",
		val,
	)
}

func (j *jsiiProxy_RosRunCommand)SetTags(val *[]*RosRunCommand_TagsProperty) {
	if err := j.validateSetTagsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"tags",
		val,
	)
}

func (j *jsiiProxy_RosRunCommand)SetTimeout(val interface{}) {
	if err := j.validateSetTimeoutParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"timeout",
		val,
	)
}

func (j *jsiiProxy_RosRunCommand)SetType(val interface{}) {
	if err := j.validateSetTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"type",
		val,
	)
}

func (j *jsiiProxy_RosRunCommand)SetUsername(val interface{}) {
	if err := j.validateSetUsernameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"username",
		val,
	)
}

func (j *jsiiProxy_RosRunCommand)SetWindowsPasswordName(val interface{}) {
	if err := j.validateSetWindowsPasswordNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"windowsPasswordName",
		val,
	)
}

func (j *jsiiProxy_RosRunCommand)SetWorkingDir(val interface{}) {
	if err := j.validateSetWorkingDirParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"workingDir",
		val,
	)
}

// Return whether the given object is a Construct.
func RosRunCommand_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosRunCommand_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-ecs.RosRunCommand",
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
func RosRunCommand_IsRosElement(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosRunCommand_IsRosElementParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-ecs.RosRunCommand",
		"isRosElement",
		[]interface{}{x},
		&returns,
	)

	return returns
}

// Check whether the given construct is a RosResource.
func RosRunCommand_IsRosResource(construct alicloudroscdkcore.IConstruct) *bool {
	_init_.Initialize()

	if err := validateRosRunCommand_IsRosResourceParameters(construct); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-ecs.RosRunCommand",
		"isRosResource",
		[]interface{}{construct},
		&returns,
	)

	return returns
}

func RosRunCommand_ROS_RESOURCE_TYPE_NAME() *string {
	_init_.Initialize()
	var returns *string
	_jsii_.StaticGet(
		"@alicloud/ros-cdk-ecs.RosRunCommand",
		"ROS_RESOURCE_TYPE_NAME",
		&returns,
	)
	return returns
}

func (r *jsiiProxy_RosRunCommand) AddCondition(con alicloudroscdkcore.RosCondition) {
	if err := r.validateAddConditionParameters(con); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCondition",
		[]interface{}{con},
	)
}

func (r *jsiiProxy_RosRunCommand) AddCount(count interface{}) {
	if err := r.validateAddCountParameters(count); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCount",
		[]interface{}{count},
	)
}

func (r *jsiiProxy_RosRunCommand) AddDeletionOverride(path *string) {
	if err := r.validateAddDeletionOverrideParameters(path); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDeletionOverride",
		[]interface{}{path},
	)
}

func (r *jsiiProxy_RosRunCommand) AddDependsOn(target alicloudroscdkcore.RosResource) {
	if err := r.validateAddDependsOnParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDependsOn",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosRunCommand) AddDesc(desc *string) {
	if err := r.validateAddDescParameters(desc); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDesc",
		[]interface{}{desc},
	)
}

func (r *jsiiProxy_RosRunCommand) AddMetaData(key *string, value interface{}) {
	if err := r.validateAddMetaDataParameters(key, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addMetaData",
		[]interface{}{key, value},
	)
}

func (r *jsiiProxy_RosRunCommand) AddOverride(path *string, value interface{}) {
	if err := r.validateAddOverrideParameters(path, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addOverride",
		[]interface{}{path, value},
	)
}

func (r *jsiiProxy_RosRunCommand) AddPropertyDeletionOverride(propertyPath *string) {
	if err := r.validateAddPropertyDeletionOverrideParameters(propertyPath); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyDeletionOverride",
		[]interface{}{propertyPath},
	)
}

func (r *jsiiProxy_RosRunCommand) AddPropertyOverride(propertyPath *string, value interface{}) {
	if err := r.validateAddPropertyOverrideParameters(propertyPath, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyOverride",
		[]interface{}{propertyPath, value},
	)
}

func (r *jsiiProxy_RosRunCommand) AddRosDependency(target *string) {
	if err := r.validateAddRosDependencyParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addRosDependency",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosRunCommand) ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy, options *alicloudroscdkcore.RemovalPolicyOptions) {
	if err := r.validateApplyRemovalPolicyParameters(options); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"applyRemovalPolicy",
		[]interface{}{policy, options},
	)
}

func (r *jsiiProxy_RosRunCommand) GetAtt(attributeName *string) alicloudroscdkcore.Reference {
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

func (r *jsiiProxy_RosRunCommand) OnPrepare() {
	_jsii_.InvokeVoid(
		r,
		"onPrepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosRunCommand) OnSynthesize(session constructs.ISynthesisSession) {
	if err := r.validateOnSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"onSynthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosRunCommand) OnValidate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"onValidate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosRunCommand) OverrideLogicalId(newLogicalId *string) {
	if err := r.validateOverrideLogicalIdParameters(newLogicalId); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"overrideLogicalId",
		[]interface{}{newLogicalId},
	)
}

func (r *jsiiProxy_RosRunCommand) Prepare() {
	_jsii_.InvokeVoid(
		r,
		"prepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosRunCommand) RenderProperties(props *map[string]interface{}) *map[string]interface{} {
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

func (r *jsiiProxy_RosRunCommand) Synthesize(session alicloudroscdkcore.ISynthesisSession) {
	if err := r.validateSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"synthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosRunCommand) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		r,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosRunCommand) Validate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"validate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosRunCommand) ValidateProperties(_properties interface{}) {
	if err := r.validateValidatePropertiesParameters(_properties); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"validateProperties",
		[]interface{}{_properties},
	)
}

