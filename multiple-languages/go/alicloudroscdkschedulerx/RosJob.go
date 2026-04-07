package alicloudroscdkschedulerx

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkschedulerx/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkschedulerx/internal"
	"github.com/aws/constructs-go/constructs/v3"
)

// This class is a base encapsulation around the ROS resource type `ALIYUN::SchedulerX::Job`.
type RosJob interface {
	alicloudroscdkcore.RosResource
	AttemptInterval() interface{}
	SetAttemptInterval(val interface{})
	AttrJobId() alicloudroscdkcore.IResolvable
	Calendar() interface{}
	SetCalendar(val interface{})
	ClassName() interface{}
	SetClassName(val interface{})
	ConsumerSize() interface{}
	SetConsumerSize(val interface{})
	ContactInfo() interface{}
	SetContactInfo(val interface{})
	Content() interface{}
	SetContent(val interface{})
	// Returns: the stack trace of the point where this Resource was created from, sourced
	// from the +metadata+ entry typed +aliyun:ros:logicalId+, and with the bottom-most
	// node +internal+ entries filtered.
	CreationStack() *[]*string
	DataOffset() interface{}
	SetDataOffset(val interface{})
	Description() interface{}
	SetDescription(val interface{})
	DispatcherSize() interface{}
	SetDispatcherSize(val interface{})
	EnableResourcePropertyConstraint() *bool
	SetEnableResourcePropertyConstraint(val *bool)
	ExecuteMode() interface{}
	SetExecuteMode(val interface{})
	FailEnable() interface{}
	SetFailEnable(val interface{})
	FailTimes() interface{}
	SetFailTimes(val interface{})
	GroupId() interface{}
	SetGroupId(val interface{})
	JobType() interface{}
	SetJobType(val interface{})
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
	MaxAttempt() interface{}
	SetMaxAttempt(val interface{})
	MaxConcurrency() interface{}
	SetMaxConcurrency(val interface{})
	MissWorkerEnable() interface{}
	SetMissWorkerEnable(val interface{})
	Name() interface{}
	SetName(val interface{})
	Namespace() interface{}
	SetNamespace(val interface{})
	NamespaceSource() interface{}
	SetNamespaceSource(val interface{})
	// The construct tree node associated with this construct.
	Node() alicloudroscdkcore.ConstructNode
	PageSize() interface{}
	SetPageSize(val interface{})
	Parameters() interface{}
	SetParameters(val interface{})
	Priority() interface{}
	SetPriority(val interface{})
	QueueSize() interface{}
	SetQueueSize(val interface{})
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
	SendChannel() interface{}
	SetSendChannel(val interface{})
	// The stack in which this element is defined.
	//
	// RosElements must be defined within a stack scope (directly or indirectly).
	Stack() alicloudroscdkcore.Stack
	SuccessNoticeEnable() interface{}
	SetSuccessNoticeEnable(val interface{})
	TaskAttemptInterval() interface{}
	SetTaskAttemptInterval(val interface{})
	TaskMaxAttempt() interface{}
	SetTaskMaxAttempt(val interface{})
	TimeExpression() interface{}
	SetTimeExpression(val interface{})
	Timeout() interface{}
	SetTimeout(val interface{})
	TimeoutEnable() interface{}
	SetTimeoutEnable(val interface{})
	TimeoutKillEnable() interface{}
	SetTimeoutKillEnable(val interface{})
	TimeType() interface{}
	SetTimeType(val interface{})
	Timezone() interface{}
	SetTimezone(val interface{})
	// Return properties modified after initiation.
	//
	// Resources that expose mutable properties should override this function to
	// collect and return the properties object for this resource.
	UpdatedProperites() *map[string]interface{}
	XAttrs() interface{}
	SetXAttrs(val interface{})
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

// The jsii proxy struct for RosJob
type jsiiProxy_RosJob struct {
	internal.Type__alicloudroscdkcoreRosResource
}

func (j *jsiiProxy_RosJob) AttemptInterval() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attemptInterval",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosJob) AttrJobId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrJobId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosJob) Calendar() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"calendar",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosJob) ClassName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"className",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosJob) ConsumerSize() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"consumerSize",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosJob) ContactInfo() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"contactInfo",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosJob) Content() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"content",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosJob) CreationStack() *[]*string {
	var returns *[]*string
	_jsii_.Get(
		j,
		"creationStack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosJob) DataOffset() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"dataOffset",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosJob) Description() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"description",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosJob) DispatcherSize() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"dispatcherSize",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosJob) EnableResourcePropertyConstraint() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"enableResourcePropertyConstraint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosJob) ExecuteMode() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"executeMode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosJob) FailEnable() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"failEnable",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosJob) FailTimes() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"failTimes",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosJob) GroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"groupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosJob) JobType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"jobType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosJob) LogicalId() *string {
	var returns *string
	_jsii_.Get(
		j,
		"logicalId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosJob) MaxAttempt() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"maxAttempt",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosJob) MaxConcurrency() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"maxConcurrency",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosJob) MissWorkerEnable() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"missWorkerEnable",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosJob) Name() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"name",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosJob) Namespace() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"namespace",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosJob) NamespaceSource() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"namespaceSource",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosJob) Node() alicloudroscdkcore.ConstructNode {
	var returns alicloudroscdkcore.ConstructNode
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosJob) PageSize() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"pageSize",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosJob) Parameters() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"parameters",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosJob) Priority() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"priority",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosJob) QueueSize() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"queueSize",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosJob) Ref() *string {
	var returns *string
	_jsii_.Get(
		j,
		"ref",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosJob) RosOptions() alicloudroscdkcore.IRosResourceOptions {
	var returns alicloudroscdkcore.IRosResourceOptions
	_jsii_.Get(
		j,
		"rosOptions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosJob) RosProperties() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"rosProperties",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosJob) RosResourceType() *string {
	var returns *string
	_jsii_.Get(
		j,
		"rosResourceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosJob) SendChannel() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"sendChannel",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosJob) Stack() alicloudroscdkcore.Stack {
	var returns alicloudroscdkcore.Stack
	_jsii_.Get(
		j,
		"stack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosJob) SuccessNoticeEnable() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"successNoticeEnable",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosJob) TaskAttemptInterval() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"taskAttemptInterval",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosJob) TaskMaxAttempt() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"taskMaxAttempt",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosJob) TimeExpression() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"timeExpression",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosJob) Timeout() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"timeout",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosJob) TimeoutEnable() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"timeoutEnable",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosJob) TimeoutKillEnable() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"timeoutKillEnable",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosJob) TimeType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"timeType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosJob) Timezone() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"timezone",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosJob) UpdatedProperites() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"updatedProperites",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosJob) XAttrs() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"xAttrs",
		&returns,
	)
	return returns
}


func NewRosJob(scope alicloudroscdkcore.Construct, id *string, props *RosJobProps, enableResourcePropertyConstraint *bool) RosJob {
	_init_.Initialize()

	if err := validateNewRosJobParameters(scope, id, props, enableResourcePropertyConstraint); err != nil {
		panic(err)
	}
	j := jsiiProxy_RosJob{}

	_jsii_.Create(
		"@alicloud/ros-cdk-schedulerx.RosJob",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		&j,
	)

	return &j
}

func NewRosJob_Override(r RosJob, scope alicloudroscdkcore.Construct, id *string, props *RosJobProps, enableResourcePropertyConstraint *bool) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-schedulerx.RosJob",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		r,
	)
}

func (j *jsiiProxy_RosJob)SetAttemptInterval(val interface{}) {
	if err := j.validateSetAttemptIntervalParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"attemptInterval",
		val,
	)
}

func (j *jsiiProxy_RosJob)SetCalendar(val interface{}) {
	if err := j.validateSetCalendarParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"calendar",
		val,
	)
}

func (j *jsiiProxy_RosJob)SetClassName(val interface{}) {
	if err := j.validateSetClassNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"className",
		val,
	)
}

func (j *jsiiProxy_RosJob)SetConsumerSize(val interface{}) {
	if err := j.validateSetConsumerSizeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"consumerSize",
		val,
	)
}

func (j *jsiiProxy_RosJob)SetContactInfo(val interface{}) {
	if err := j.validateSetContactInfoParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"contactInfo",
		val,
	)
}

func (j *jsiiProxy_RosJob)SetContent(val interface{}) {
	if err := j.validateSetContentParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"content",
		val,
	)
}

func (j *jsiiProxy_RosJob)SetDataOffset(val interface{}) {
	if err := j.validateSetDataOffsetParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"dataOffset",
		val,
	)
}

func (j *jsiiProxy_RosJob)SetDescription(val interface{}) {
	if err := j.validateSetDescriptionParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"description",
		val,
	)
}

func (j *jsiiProxy_RosJob)SetDispatcherSize(val interface{}) {
	if err := j.validateSetDispatcherSizeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"dispatcherSize",
		val,
	)
}

func (j *jsiiProxy_RosJob)SetEnableResourcePropertyConstraint(val *bool) {
	if err := j.validateSetEnableResourcePropertyConstraintParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableResourcePropertyConstraint",
		val,
	)
}

func (j *jsiiProxy_RosJob)SetExecuteMode(val interface{}) {
	if err := j.validateSetExecuteModeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"executeMode",
		val,
	)
}

func (j *jsiiProxy_RosJob)SetFailEnable(val interface{}) {
	if err := j.validateSetFailEnableParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"failEnable",
		val,
	)
}

func (j *jsiiProxy_RosJob)SetFailTimes(val interface{}) {
	if err := j.validateSetFailTimesParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"failTimes",
		val,
	)
}

func (j *jsiiProxy_RosJob)SetGroupId(val interface{}) {
	if err := j.validateSetGroupIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"groupId",
		val,
	)
}

func (j *jsiiProxy_RosJob)SetJobType(val interface{}) {
	if err := j.validateSetJobTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"jobType",
		val,
	)
}

func (j *jsiiProxy_RosJob)SetMaxAttempt(val interface{}) {
	if err := j.validateSetMaxAttemptParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"maxAttempt",
		val,
	)
}

func (j *jsiiProxy_RosJob)SetMaxConcurrency(val interface{}) {
	if err := j.validateSetMaxConcurrencyParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"maxConcurrency",
		val,
	)
}

func (j *jsiiProxy_RosJob)SetMissWorkerEnable(val interface{}) {
	if err := j.validateSetMissWorkerEnableParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"missWorkerEnable",
		val,
	)
}

func (j *jsiiProxy_RosJob)SetName(val interface{}) {
	if err := j.validateSetNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"name",
		val,
	)
}

func (j *jsiiProxy_RosJob)SetNamespace(val interface{}) {
	if err := j.validateSetNamespaceParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"namespace",
		val,
	)
}

func (j *jsiiProxy_RosJob)SetNamespaceSource(val interface{}) {
	if err := j.validateSetNamespaceSourceParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"namespaceSource",
		val,
	)
}

func (j *jsiiProxy_RosJob)SetPageSize(val interface{}) {
	if err := j.validateSetPageSizeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"pageSize",
		val,
	)
}

func (j *jsiiProxy_RosJob)SetParameters(val interface{}) {
	if err := j.validateSetParametersParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"parameters",
		val,
	)
}

func (j *jsiiProxy_RosJob)SetPriority(val interface{}) {
	if err := j.validateSetPriorityParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"priority",
		val,
	)
}

func (j *jsiiProxy_RosJob)SetQueueSize(val interface{}) {
	if err := j.validateSetQueueSizeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"queueSize",
		val,
	)
}

func (j *jsiiProxy_RosJob)SetSendChannel(val interface{}) {
	if err := j.validateSetSendChannelParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"sendChannel",
		val,
	)
}

func (j *jsiiProxy_RosJob)SetSuccessNoticeEnable(val interface{}) {
	if err := j.validateSetSuccessNoticeEnableParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"successNoticeEnable",
		val,
	)
}

func (j *jsiiProxy_RosJob)SetTaskAttemptInterval(val interface{}) {
	if err := j.validateSetTaskAttemptIntervalParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"taskAttemptInterval",
		val,
	)
}

func (j *jsiiProxy_RosJob)SetTaskMaxAttempt(val interface{}) {
	if err := j.validateSetTaskMaxAttemptParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"taskMaxAttempt",
		val,
	)
}

func (j *jsiiProxy_RosJob)SetTimeExpression(val interface{}) {
	if err := j.validateSetTimeExpressionParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"timeExpression",
		val,
	)
}

func (j *jsiiProxy_RosJob)SetTimeout(val interface{}) {
	if err := j.validateSetTimeoutParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"timeout",
		val,
	)
}

func (j *jsiiProxy_RosJob)SetTimeoutEnable(val interface{}) {
	if err := j.validateSetTimeoutEnableParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"timeoutEnable",
		val,
	)
}

func (j *jsiiProxy_RosJob)SetTimeoutKillEnable(val interface{}) {
	if err := j.validateSetTimeoutKillEnableParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"timeoutKillEnable",
		val,
	)
}

func (j *jsiiProxy_RosJob)SetTimeType(val interface{}) {
	if err := j.validateSetTimeTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"timeType",
		val,
	)
}

func (j *jsiiProxy_RosJob)SetTimezone(val interface{}) {
	if err := j.validateSetTimezoneParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"timezone",
		val,
	)
}

func (j *jsiiProxy_RosJob)SetXAttrs(val interface{}) {
	if err := j.validateSetXAttrsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"xAttrs",
		val,
	)
}

// Return whether the given object is a Construct.
func RosJob_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosJob_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-schedulerx.RosJob",
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
func RosJob_IsRosElement(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosJob_IsRosElementParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-schedulerx.RosJob",
		"isRosElement",
		[]interface{}{x},
		&returns,
	)

	return returns
}

// Check whether the given construct is a RosResource.
func RosJob_IsRosResource(construct alicloudroscdkcore.IConstruct) *bool {
	_init_.Initialize()

	if err := validateRosJob_IsRosResourceParameters(construct); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-schedulerx.RosJob",
		"isRosResource",
		[]interface{}{construct},
		&returns,
	)

	return returns
}

func RosJob_ROS_RESOURCE_TYPE_NAME() *string {
	_init_.Initialize()
	var returns *string
	_jsii_.StaticGet(
		"@alicloud/ros-cdk-schedulerx.RosJob",
		"ROS_RESOURCE_TYPE_NAME",
		&returns,
	)
	return returns
}

func (r *jsiiProxy_RosJob) AddCondition(con alicloudroscdkcore.RosCondition) {
	if err := r.validateAddConditionParameters(con); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCondition",
		[]interface{}{con},
	)
}

func (r *jsiiProxy_RosJob) AddCount(count interface{}) {
	if err := r.validateAddCountParameters(count); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCount",
		[]interface{}{count},
	)
}

func (r *jsiiProxy_RosJob) AddDeletionOverride(path *string) {
	if err := r.validateAddDeletionOverrideParameters(path); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDeletionOverride",
		[]interface{}{path},
	)
}

func (r *jsiiProxy_RosJob) AddDependsOn(target alicloudroscdkcore.RosResource) {
	if err := r.validateAddDependsOnParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDependsOn",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosJob) AddDesc(desc *string) {
	if err := r.validateAddDescParameters(desc); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDesc",
		[]interface{}{desc},
	)
}

func (r *jsiiProxy_RosJob) AddMetaData(key *string, value interface{}) {
	if err := r.validateAddMetaDataParameters(key, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addMetaData",
		[]interface{}{key, value},
	)
}

func (r *jsiiProxy_RosJob) AddOverride(path *string, value interface{}) {
	if err := r.validateAddOverrideParameters(path, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addOverride",
		[]interface{}{path, value},
	)
}

func (r *jsiiProxy_RosJob) AddPropertyDeletionOverride(propertyPath *string) {
	if err := r.validateAddPropertyDeletionOverrideParameters(propertyPath); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyDeletionOverride",
		[]interface{}{propertyPath},
	)
}

func (r *jsiiProxy_RosJob) AddPropertyOverride(propertyPath *string, value interface{}) {
	if err := r.validateAddPropertyOverrideParameters(propertyPath, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyOverride",
		[]interface{}{propertyPath, value},
	)
}

func (r *jsiiProxy_RosJob) AddRosDependency(target *string) {
	if err := r.validateAddRosDependencyParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addRosDependency",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosJob) ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy, options *alicloudroscdkcore.RemovalPolicyOptions) {
	if err := r.validateApplyRemovalPolicyParameters(options); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"applyRemovalPolicy",
		[]interface{}{policy, options},
	)
}

func (r *jsiiProxy_RosJob) FetchCondition() alicloudroscdkcore.RosCondition {
	var returns alicloudroscdkcore.RosCondition

	_jsii_.Invoke(
		r,
		"fetchCondition",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosJob) FetchDesc() *string {
	var returns *string

	_jsii_.Invoke(
		r,
		"fetchDesc",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosJob) FetchRosDependency() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"fetchRosDependency",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosJob) GetAtt(attributeName *string) alicloudroscdkcore.Reference {
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

func (r *jsiiProxy_RosJob) OnPrepare() {
	_jsii_.InvokeVoid(
		r,
		"onPrepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosJob) OnSynthesize(session constructs.ISynthesisSession) {
	if err := r.validateOnSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"onSynthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosJob) OnValidate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"onValidate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosJob) OverrideLogicalId(newLogicalId *string) {
	if err := r.validateOverrideLogicalIdParameters(newLogicalId); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"overrideLogicalId",
		[]interface{}{newLogicalId},
	)
}

func (r *jsiiProxy_RosJob) Prepare() {
	_jsii_.InvokeVoid(
		r,
		"prepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosJob) RenderProperties(props *map[string]interface{}) *map[string]interface{} {
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

func (r *jsiiProxy_RosJob) Synthesize(session alicloudroscdkcore.ISynthesisSession) {
	if err := r.validateSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"synthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosJob) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		r,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosJob) Validate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"validate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosJob) ValidateProperties(_properties interface{}) {
	if err := r.validateValidatePropertiesParameters(_properties); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"validateProperties",
		[]interface{}{_properties},
	)
}

