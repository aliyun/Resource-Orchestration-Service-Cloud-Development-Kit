package alicloudroscdkdts

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkdts/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkdts/internal"
	"github.com/aws/constructs-go/constructs/v3"
)

// This class is a base encapsulation around the ROS resource type `ALIYUN::DTS::SynchronizationJob2`, which is used to configure a data synchronization task.
type RosSynchronizationJob2 interface {
	alicloudroscdkcore.RosResource
	AttrDtsInstanceId() alicloudroscdkcore.IResolvable
	AttrDtsJobId() alicloudroscdkcore.IResolvable
	AttrDtsJobName() alicloudroscdkcore.IResolvable
	Checkpoint() interface{}
	SetCheckpoint(val interface{})
	// Returns: the stack trace of the point where this Resource was created from, sourced
	// from the +metadata+ entry typed +aliyun:ros:logicalId+, and with the bottom-most
	// node +internal+ entries filtered.
	CreationStack() *[]*string
	DataCheckConfigure() interface{}
	SetDataCheckConfigure(val interface{})
	DataInitialization() interface{}
	SetDataInitialization(val interface{})
	DataSynchronization() interface{}
	SetDataSynchronization(val interface{})
	DbList() interface{}
	SetDbList(val interface{})
	DedicatedClusterId() interface{}
	SetDedicatedClusterId(val interface{})
	DelayNotice() interface{}
	SetDelayNotice(val interface{})
	DelayPhone() interface{}
	SetDelayPhone(val interface{})
	DelayRuleTime() interface{}
	SetDelayRuleTime(val interface{})
	DestinationEndpoint() interface{}
	SetDestinationEndpoint(val interface{})
	DisasterRecoveryJob() interface{}
	SetDisasterRecoveryJob(val interface{})
	DtsBisLabel() interface{}
	SetDtsBisLabel(val interface{})
	DtsInstanceId() interface{}
	SetDtsInstanceId(val interface{})
	DtsJobId() interface{}
	SetDtsJobId(val interface{})
	DtsJobName() interface{}
	SetDtsJobName(val interface{})
	EnableResourcePropertyConstraint() *bool
	SetEnableResourcePropertyConstraint(val *bool)
	ErrorNotice() interface{}
	SetErrorNotice(val interface{})
	ErrorPhone() interface{}
	SetErrorPhone(val interface{})
	FileOssUrl() interface{}
	SetFileOssUrl(val interface{})
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
	Reserve() interface{}
	SetReserve(val interface{})
	// Options for this resource, such as condition, update policy etc.
	RosOptions() alicloudroscdkcore.IRosResourceOptions
	RosProperties() *map[string]interface{}
	// ROS resource type.
	RosResourceType() *string
	SourceEndpoint() interface{}
	SetSourceEndpoint(val interface{})
	// The stack in which this element is defined.
	//
	// RosElements must be defined within a stack scope (directly or indirectly).
	Stack() alicloudroscdkcore.Stack
	Status() interface{}
	SetStatus(val interface{})
	StructureInitialization() interface{}
	SetStructureInitialization(val interface{})
	SynchronizationDirection() interface{}
	SetSynchronizationDirection(val interface{})
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

// The jsii proxy struct for RosSynchronizationJob2
type jsiiProxy_RosSynchronizationJob2 struct {
	internal.Type__alicloudroscdkcoreRosResource
}

func (j *jsiiProxy_RosSynchronizationJob2) AttrDtsInstanceId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDtsInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSynchronizationJob2) AttrDtsJobId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDtsJobId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSynchronizationJob2) AttrDtsJobName() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDtsJobName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSynchronizationJob2) Checkpoint() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"checkpoint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSynchronizationJob2) CreationStack() *[]*string {
	var returns *[]*string
	_jsii_.Get(
		j,
		"creationStack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSynchronizationJob2) DataCheckConfigure() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"dataCheckConfigure",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSynchronizationJob2) DataInitialization() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"dataInitialization",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSynchronizationJob2) DataSynchronization() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"dataSynchronization",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSynchronizationJob2) DbList() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"dbList",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSynchronizationJob2) DedicatedClusterId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"dedicatedClusterId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSynchronizationJob2) DelayNotice() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"delayNotice",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSynchronizationJob2) DelayPhone() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"delayPhone",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSynchronizationJob2) DelayRuleTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"delayRuleTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSynchronizationJob2) DestinationEndpoint() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"destinationEndpoint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSynchronizationJob2) DisasterRecoveryJob() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"disasterRecoveryJob",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSynchronizationJob2) DtsBisLabel() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"dtsBisLabel",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSynchronizationJob2) DtsInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"dtsInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSynchronizationJob2) DtsJobId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"dtsJobId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSynchronizationJob2) DtsJobName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"dtsJobName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSynchronizationJob2) EnableResourcePropertyConstraint() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"enableResourcePropertyConstraint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSynchronizationJob2) ErrorNotice() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"errorNotice",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSynchronizationJob2) ErrorPhone() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"errorPhone",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSynchronizationJob2) FileOssUrl() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"fileOssUrl",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSynchronizationJob2) LogicalId() *string {
	var returns *string
	_jsii_.Get(
		j,
		"logicalId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSynchronizationJob2) Node() alicloudroscdkcore.ConstructNode {
	var returns alicloudroscdkcore.ConstructNode
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSynchronizationJob2) Ref() *string {
	var returns *string
	_jsii_.Get(
		j,
		"ref",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSynchronizationJob2) Reserve() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"reserve",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSynchronizationJob2) RosOptions() alicloudroscdkcore.IRosResourceOptions {
	var returns alicloudroscdkcore.IRosResourceOptions
	_jsii_.Get(
		j,
		"rosOptions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSynchronizationJob2) RosProperties() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"rosProperties",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSynchronizationJob2) RosResourceType() *string {
	var returns *string
	_jsii_.Get(
		j,
		"rosResourceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSynchronizationJob2) SourceEndpoint() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"sourceEndpoint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSynchronizationJob2) Stack() alicloudroscdkcore.Stack {
	var returns alicloudroscdkcore.Stack
	_jsii_.Get(
		j,
		"stack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSynchronizationJob2) Status() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"status",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSynchronizationJob2) StructureInitialization() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"structureInitialization",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSynchronizationJob2) SynchronizationDirection() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"synchronizationDirection",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSynchronizationJob2) UpdatedProperites() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"updatedProperites",
		&returns,
	)
	return returns
}


func NewRosSynchronizationJob2(scope alicloudroscdkcore.Construct, id *string, props *RosSynchronizationJob2Props, enableResourcePropertyConstraint *bool) RosSynchronizationJob2 {
	_init_.Initialize()

	if err := validateNewRosSynchronizationJob2Parameters(scope, id, props, enableResourcePropertyConstraint); err != nil {
		panic(err)
	}
	j := jsiiProxy_RosSynchronizationJob2{}

	_jsii_.Create(
		"@alicloud/ros-cdk-dts.RosSynchronizationJob2",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		&j,
	)

	return &j
}

func NewRosSynchronizationJob2_Override(r RosSynchronizationJob2, scope alicloudroscdkcore.Construct, id *string, props *RosSynchronizationJob2Props, enableResourcePropertyConstraint *bool) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-dts.RosSynchronizationJob2",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		r,
	)
}

func (j *jsiiProxy_RosSynchronizationJob2)SetCheckpoint(val interface{}) {
	if err := j.validateSetCheckpointParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"checkpoint",
		val,
	)
}

func (j *jsiiProxy_RosSynchronizationJob2)SetDataCheckConfigure(val interface{}) {
	if err := j.validateSetDataCheckConfigureParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"dataCheckConfigure",
		val,
	)
}

func (j *jsiiProxy_RosSynchronizationJob2)SetDataInitialization(val interface{}) {
	if err := j.validateSetDataInitializationParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"dataInitialization",
		val,
	)
}

func (j *jsiiProxy_RosSynchronizationJob2)SetDataSynchronization(val interface{}) {
	if err := j.validateSetDataSynchronizationParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"dataSynchronization",
		val,
	)
}

func (j *jsiiProxy_RosSynchronizationJob2)SetDbList(val interface{}) {
	if err := j.validateSetDbListParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"dbList",
		val,
	)
}

func (j *jsiiProxy_RosSynchronizationJob2)SetDedicatedClusterId(val interface{}) {
	if err := j.validateSetDedicatedClusterIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"dedicatedClusterId",
		val,
	)
}

func (j *jsiiProxy_RosSynchronizationJob2)SetDelayNotice(val interface{}) {
	if err := j.validateSetDelayNoticeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"delayNotice",
		val,
	)
}

func (j *jsiiProxy_RosSynchronizationJob2)SetDelayPhone(val interface{}) {
	if err := j.validateSetDelayPhoneParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"delayPhone",
		val,
	)
}

func (j *jsiiProxy_RosSynchronizationJob2)SetDelayRuleTime(val interface{}) {
	if err := j.validateSetDelayRuleTimeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"delayRuleTime",
		val,
	)
}

func (j *jsiiProxy_RosSynchronizationJob2)SetDestinationEndpoint(val interface{}) {
	if err := j.validateSetDestinationEndpointParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"destinationEndpoint",
		val,
	)
}

func (j *jsiiProxy_RosSynchronizationJob2)SetDisasterRecoveryJob(val interface{}) {
	if err := j.validateSetDisasterRecoveryJobParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"disasterRecoveryJob",
		val,
	)
}

func (j *jsiiProxy_RosSynchronizationJob2)SetDtsBisLabel(val interface{}) {
	if err := j.validateSetDtsBisLabelParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"dtsBisLabel",
		val,
	)
}

func (j *jsiiProxy_RosSynchronizationJob2)SetDtsInstanceId(val interface{}) {
	if err := j.validateSetDtsInstanceIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"dtsInstanceId",
		val,
	)
}

func (j *jsiiProxy_RosSynchronizationJob2)SetDtsJobId(val interface{}) {
	if err := j.validateSetDtsJobIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"dtsJobId",
		val,
	)
}

func (j *jsiiProxy_RosSynchronizationJob2)SetDtsJobName(val interface{}) {
	if err := j.validateSetDtsJobNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"dtsJobName",
		val,
	)
}

func (j *jsiiProxy_RosSynchronizationJob2)SetEnableResourcePropertyConstraint(val *bool) {
	if err := j.validateSetEnableResourcePropertyConstraintParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableResourcePropertyConstraint",
		val,
	)
}

func (j *jsiiProxy_RosSynchronizationJob2)SetErrorNotice(val interface{}) {
	if err := j.validateSetErrorNoticeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"errorNotice",
		val,
	)
}

func (j *jsiiProxy_RosSynchronizationJob2)SetErrorPhone(val interface{}) {
	if err := j.validateSetErrorPhoneParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"errorPhone",
		val,
	)
}

func (j *jsiiProxy_RosSynchronizationJob2)SetFileOssUrl(val interface{}) {
	if err := j.validateSetFileOssUrlParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"fileOssUrl",
		val,
	)
}

func (j *jsiiProxy_RosSynchronizationJob2)SetReserve(val interface{}) {
	if err := j.validateSetReserveParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"reserve",
		val,
	)
}

func (j *jsiiProxy_RosSynchronizationJob2)SetSourceEndpoint(val interface{}) {
	if err := j.validateSetSourceEndpointParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"sourceEndpoint",
		val,
	)
}

func (j *jsiiProxy_RosSynchronizationJob2)SetStatus(val interface{}) {
	if err := j.validateSetStatusParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"status",
		val,
	)
}

func (j *jsiiProxy_RosSynchronizationJob2)SetStructureInitialization(val interface{}) {
	if err := j.validateSetStructureInitializationParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"structureInitialization",
		val,
	)
}

func (j *jsiiProxy_RosSynchronizationJob2)SetSynchronizationDirection(val interface{}) {
	if err := j.validateSetSynchronizationDirectionParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"synchronizationDirection",
		val,
	)
}

// Return whether the given object is a Construct.
func RosSynchronizationJob2_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosSynchronizationJob2_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-dts.RosSynchronizationJob2",
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
func RosSynchronizationJob2_IsRosElement(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosSynchronizationJob2_IsRosElementParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-dts.RosSynchronizationJob2",
		"isRosElement",
		[]interface{}{x},
		&returns,
	)

	return returns
}

// Check whether the given construct is a RosResource.
func RosSynchronizationJob2_IsRosResource(construct alicloudroscdkcore.IConstruct) *bool {
	_init_.Initialize()

	if err := validateRosSynchronizationJob2_IsRosResourceParameters(construct); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-dts.RosSynchronizationJob2",
		"isRosResource",
		[]interface{}{construct},
		&returns,
	)

	return returns
}

func RosSynchronizationJob2_ROS_RESOURCE_TYPE_NAME() *string {
	_init_.Initialize()
	var returns *string
	_jsii_.StaticGet(
		"@alicloud/ros-cdk-dts.RosSynchronizationJob2",
		"ROS_RESOURCE_TYPE_NAME",
		&returns,
	)
	return returns
}

func (r *jsiiProxy_RosSynchronizationJob2) AddCondition(con alicloudroscdkcore.RosCondition) {
	if err := r.validateAddConditionParameters(con); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCondition",
		[]interface{}{con},
	)
}

func (r *jsiiProxy_RosSynchronizationJob2) AddCount(count interface{}) {
	if err := r.validateAddCountParameters(count); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCount",
		[]interface{}{count},
	)
}

func (r *jsiiProxy_RosSynchronizationJob2) AddDeletionOverride(path *string) {
	if err := r.validateAddDeletionOverrideParameters(path); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDeletionOverride",
		[]interface{}{path},
	)
}

func (r *jsiiProxy_RosSynchronizationJob2) AddDependsOn(target alicloudroscdkcore.RosResource) {
	if err := r.validateAddDependsOnParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDependsOn",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosSynchronizationJob2) AddDesc(desc *string) {
	if err := r.validateAddDescParameters(desc); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDesc",
		[]interface{}{desc},
	)
}

func (r *jsiiProxy_RosSynchronizationJob2) AddMetaData(key *string, value interface{}) {
	if err := r.validateAddMetaDataParameters(key, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addMetaData",
		[]interface{}{key, value},
	)
}

func (r *jsiiProxy_RosSynchronizationJob2) AddOverride(path *string, value interface{}) {
	if err := r.validateAddOverrideParameters(path, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addOverride",
		[]interface{}{path, value},
	)
}

func (r *jsiiProxy_RosSynchronizationJob2) AddPropertyDeletionOverride(propertyPath *string) {
	if err := r.validateAddPropertyDeletionOverrideParameters(propertyPath); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyDeletionOverride",
		[]interface{}{propertyPath},
	)
}

func (r *jsiiProxy_RosSynchronizationJob2) AddPropertyOverride(propertyPath *string, value interface{}) {
	if err := r.validateAddPropertyOverrideParameters(propertyPath, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyOverride",
		[]interface{}{propertyPath, value},
	)
}

func (r *jsiiProxy_RosSynchronizationJob2) AddRosDependency(target *string) {
	if err := r.validateAddRosDependencyParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addRosDependency",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosSynchronizationJob2) ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy, options *alicloudroscdkcore.RemovalPolicyOptions) {
	if err := r.validateApplyRemovalPolicyParameters(options); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"applyRemovalPolicy",
		[]interface{}{policy, options},
	)
}

func (r *jsiiProxy_RosSynchronizationJob2) GetAtt(attributeName *string) alicloudroscdkcore.Reference {
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

func (r *jsiiProxy_RosSynchronizationJob2) OnPrepare() {
	_jsii_.InvokeVoid(
		r,
		"onPrepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosSynchronizationJob2) OnSynthesize(session constructs.ISynthesisSession) {
	if err := r.validateOnSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"onSynthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosSynchronizationJob2) OnValidate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"onValidate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosSynchronizationJob2) OverrideLogicalId(newLogicalId *string) {
	if err := r.validateOverrideLogicalIdParameters(newLogicalId); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"overrideLogicalId",
		[]interface{}{newLogicalId},
	)
}

func (r *jsiiProxy_RosSynchronizationJob2) Prepare() {
	_jsii_.InvokeVoid(
		r,
		"prepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosSynchronizationJob2) RenderProperties(props *map[string]interface{}) *map[string]interface{} {
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

func (r *jsiiProxy_RosSynchronizationJob2) Synthesize(session alicloudroscdkcore.ISynthesisSession) {
	if err := r.validateSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"synthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosSynchronizationJob2) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		r,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosSynchronizationJob2) Validate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"validate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosSynchronizationJob2) ValidateProperties(_properties interface{}) {
	if err := r.validateValidatePropertiesParameters(_properties); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"validateProperties",
		[]interface{}{_properties},
	)
}

