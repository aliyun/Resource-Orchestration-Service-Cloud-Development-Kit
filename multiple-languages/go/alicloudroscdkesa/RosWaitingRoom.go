package alicloudroscdkesa

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkesa/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkesa/internal"
	"github.com/aws/constructs-go/constructs/v3"
)

// This class is a base encapsulation around the ROS resource type `ALIYUN::ESA::WaitingRoom`.
type RosWaitingRoom interface {
	alicloudroscdkcore.RosResource
	AttrCookieName() alicloudroscdkcore.IResolvable
	AttrCustomPageHtml() alicloudroscdkcore.IResolvable
	AttrDescription() alicloudroscdkcore.IResolvable
	AttrDisableSessionRenewalEnable() alicloudroscdkcore.IResolvable
	AttrHostNameAndPath() alicloudroscdkcore.IResolvable
	AttrJsonResponseEnable() alicloudroscdkcore.IResolvable
	AttrLanguage() alicloudroscdkcore.IResolvable
	AttrNewUsersPerMinute() alicloudroscdkcore.IResolvable
	AttrQueueAllEnable() alicloudroscdkcore.IResolvable
	AttrQueuingMethod() alicloudroscdkcore.IResolvable
	AttrQueuingStatusCode() alicloudroscdkcore.IResolvable
	AttrSessionDuration() alicloudroscdkcore.IResolvable
	AttrTotalActiveUsers() alicloudroscdkcore.IResolvable
	AttrWaitingRoomId() alicloudroscdkcore.IResolvable
	AttrWaitingRoomName() alicloudroscdkcore.IResolvable
	AttrWaitingRoomType() alicloudroscdkcore.IResolvable
	CookieName() interface{}
	SetCookieName(val interface{})
	// Returns: the stack trace of the point where this Resource was created from, sourced
	// from the +metadata+ entry typed +aliyun:ros:logicalId+, and with the bottom-most
	// node +internal+ entries filtered.
	CreationStack() *[]*string
	CustomPageHtml() interface{}
	SetCustomPageHtml(val interface{})
	Description() interface{}
	SetDescription(val interface{})
	DisableSessionRenewalEnable() interface{}
	SetDisableSessionRenewalEnable(val interface{})
	EnableResourcePropertyConstraint() *bool
	SetEnableResourcePropertyConstraint(val *bool)
	HostNameAndPath() interface{}
	SetHostNameAndPath(val interface{})
	JsonResponseEnable() interface{}
	SetJsonResponseEnable(val interface{})
	Language() interface{}
	SetLanguage(val interface{})
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
	NewUsersPerMinute() interface{}
	SetNewUsersPerMinute(val interface{})
	// The construct tree node associated with this construct.
	Node() alicloudroscdkcore.ConstructNode
	QueueAllEnable() interface{}
	SetQueueAllEnable(val interface{})
	QueuingMethod() interface{}
	SetQueuingMethod(val interface{})
	QueuingStatusCode() interface{}
	SetQueuingStatusCode(val interface{})
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
	SessionDuration() interface{}
	SetSessionDuration(val interface{})
	SiteId() interface{}
	SetSiteId(val interface{})
	// The stack in which this element is defined.
	//
	// RosElements must be defined within a stack scope (directly or indirectly).
	Stack() alicloudroscdkcore.Stack
	Status() interface{}
	SetStatus(val interface{})
	TotalActiveUsers() interface{}
	SetTotalActiveUsers(val interface{})
	// Return properties modified after initiation.
	//
	// Resources that expose mutable properties should override this function to
	// collect and return the properties object for this resource.
	UpdatedProperites() *map[string]interface{}
	WaitingRoomName() interface{}
	SetWaitingRoomName(val interface{})
	WaitingRoomType() interface{}
	SetWaitingRoomType(val interface{})
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

// The jsii proxy struct for RosWaitingRoom
type jsiiProxy_RosWaitingRoom struct {
	internal.Type__alicloudroscdkcoreRosResource
}

func (j *jsiiProxy_RosWaitingRoom) AttrCookieName() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrCookieName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosWaitingRoom) AttrCustomPageHtml() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrCustomPageHtml",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosWaitingRoom) AttrDescription() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosWaitingRoom) AttrDisableSessionRenewalEnable() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDisableSessionRenewalEnable",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosWaitingRoom) AttrHostNameAndPath() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrHostNameAndPath",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosWaitingRoom) AttrJsonResponseEnable() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrJsonResponseEnable",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosWaitingRoom) AttrLanguage() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrLanguage",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosWaitingRoom) AttrNewUsersPerMinute() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrNewUsersPerMinute",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosWaitingRoom) AttrQueueAllEnable() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrQueueAllEnable",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosWaitingRoom) AttrQueuingMethod() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrQueuingMethod",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosWaitingRoom) AttrQueuingStatusCode() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrQueuingStatusCode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosWaitingRoom) AttrSessionDuration() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrSessionDuration",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosWaitingRoom) AttrTotalActiveUsers() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrTotalActiveUsers",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosWaitingRoom) AttrWaitingRoomId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrWaitingRoomId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosWaitingRoom) AttrWaitingRoomName() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrWaitingRoomName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosWaitingRoom) AttrWaitingRoomType() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrWaitingRoomType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosWaitingRoom) CookieName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"cookieName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosWaitingRoom) CreationStack() *[]*string {
	var returns *[]*string
	_jsii_.Get(
		j,
		"creationStack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosWaitingRoom) CustomPageHtml() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"customPageHtml",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosWaitingRoom) Description() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"description",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosWaitingRoom) DisableSessionRenewalEnable() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"disableSessionRenewalEnable",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosWaitingRoom) EnableResourcePropertyConstraint() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"enableResourcePropertyConstraint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosWaitingRoom) HostNameAndPath() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"hostNameAndPath",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosWaitingRoom) JsonResponseEnable() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"jsonResponseEnable",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosWaitingRoom) Language() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"language",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosWaitingRoom) LogicalId() *string {
	var returns *string
	_jsii_.Get(
		j,
		"logicalId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosWaitingRoom) NewUsersPerMinute() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"newUsersPerMinute",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosWaitingRoom) Node() alicloudroscdkcore.ConstructNode {
	var returns alicloudroscdkcore.ConstructNode
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosWaitingRoom) QueueAllEnable() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"queueAllEnable",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosWaitingRoom) QueuingMethod() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"queuingMethod",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosWaitingRoom) QueuingStatusCode() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"queuingStatusCode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosWaitingRoom) Ref() *string {
	var returns *string
	_jsii_.Get(
		j,
		"ref",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosWaitingRoom) RosOptions() alicloudroscdkcore.IRosResourceOptions {
	var returns alicloudroscdkcore.IRosResourceOptions
	_jsii_.Get(
		j,
		"rosOptions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosWaitingRoom) RosProperties() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"rosProperties",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosWaitingRoom) RosResourceType() *string {
	var returns *string
	_jsii_.Get(
		j,
		"rosResourceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosWaitingRoom) SessionDuration() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"sessionDuration",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosWaitingRoom) SiteId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"siteId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosWaitingRoom) Stack() alicloudroscdkcore.Stack {
	var returns alicloudroscdkcore.Stack
	_jsii_.Get(
		j,
		"stack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosWaitingRoom) Status() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"status",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosWaitingRoom) TotalActiveUsers() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"totalActiveUsers",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosWaitingRoom) UpdatedProperites() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"updatedProperites",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosWaitingRoom) WaitingRoomName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"waitingRoomName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosWaitingRoom) WaitingRoomType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"waitingRoomType",
		&returns,
	)
	return returns
}


func NewRosWaitingRoom(scope alicloudroscdkcore.Construct, id *string, props *RosWaitingRoomProps, enableResourcePropertyConstraint *bool) RosWaitingRoom {
	_init_.Initialize()

	if err := validateNewRosWaitingRoomParameters(scope, id, props, enableResourcePropertyConstraint); err != nil {
		panic(err)
	}
	j := jsiiProxy_RosWaitingRoom{}

	_jsii_.Create(
		"@alicloud/ros-cdk-esa.RosWaitingRoom",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		&j,
	)

	return &j
}

func NewRosWaitingRoom_Override(r RosWaitingRoom, scope alicloudroscdkcore.Construct, id *string, props *RosWaitingRoomProps, enableResourcePropertyConstraint *bool) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-esa.RosWaitingRoom",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		r,
	)
}

func (j *jsiiProxy_RosWaitingRoom)SetCookieName(val interface{}) {
	if err := j.validateSetCookieNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"cookieName",
		val,
	)
}

func (j *jsiiProxy_RosWaitingRoom)SetCustomPageHtml(val interface{}) {
	if err := j.validateSetCustomPageHtmlParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"customPageHtml",
		val,
	)
}

func (j *jsiiProxy_RosWaitingRoom)SetDescription(val interface{}) {
	if err := j.validateSetDescriptionParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"description",
		val,
	)
}

func (j *jsiiProxy_RosWaitingRoom)SetDisableSessionRenewalEnable(val interface{}) {
	if err := j.validateSetDisableSessionRenewalEnableParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"disableSessionRenewalEnable",
		val,
	)
}

func (j *jsiiProxy_RosWaitingRoom)SetEnableResourcePropertyConstraint(val *bool) {
	if err := j.validateSetEnableResourcePropertyConstraintParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableResourcePropertyConstraint",
		val,
	)
}

func (j *jsiiProxy_RosWaitingRoom)SetHostNameAndPath(val interface{}) {
	if err := j.validateSetHostNameAndPathParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"hostNameAndPath",
		val,
	)
}

func (j *jsiiProxy_RosWaitingRoom)SetJsonResponseEnable(val interface{}) {
	if err := j.validateSetJsonResponseEnableParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"jsonResponseEnable",
		val,
	)
}

func (j *jsiiProxy_RosWaitingRoom)SetLanguage(val interface{}) {
	if err := j.validateSetLanguageParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"language",
		val,
	)
}

func (j *jsiiProxy_RosWaitingRoom)SetNewUsersPerMinute(val interface{}) {
	if err := j.validateSetNewUsersPerMinuteParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"newUsersPerMinute",
		val,
	)
}

func (j *jsiiProxy_RosWaitingRoom)SetQueueAllEnable(val interface{}) {
	if err := j.validateSetQueueAllEnableParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"queueAllEnable",
		val,
	)
}

func (j *jsiiProxy_RosWaitingRoom)SetQueuingMethod(val interface{}) {
	if err := j.validateSetQueuingMethodParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"queuingMethod",
		val,
	)
}

func (j *jsiiProxy_RosWaitingRoom)SetQueuingStatusCode(val interface{}) {
	if err := j.validateSetQueuingStatusCodeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"queuingStatusCode",
		val,
	)
}

func (j *jsiiProxy_RosWaitingRoom)SetSessionDuration(val interface{}) {
	if err := j.validateSetSessionDurationParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"sessionDuration",
		val,
	)
}

func (j *jsiiProxy_RosWaitingRoom)SetSiteId(val interface{}) {
	if err := j.validateSetSiteIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"siteId",
		val,
	)
}

func (j *jsiiProxy_RosWaitingRoom)SetStatus(val interface{}) {
	if err := j.validateSetStatusParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"status",
		val,
	)
}

func (j *jsiiProxy_RosWaitingRoom)SetTotalActiveUsers(val interface{}) {
	if err := j.validateSetTotalActiveUsersParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"totalActiveUsers",
		val,
	)
}

func (j *jsiiProxy_RosWaitingRoom)SetWaitingRoomName(val interface{}) {
	if err := j.validateSetWaitingRoomNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"waitingRoomName",
		val,
	)
}

func (j *jsiiProxy_RosWaitingRoom)SetWaitingRoomType(val interface{}) {
	if err := j.validateSetWaitingRoomTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"waitingRoomType",
		val,
	)
}

// Return whether the given object is a Construct.
func RosWaitingRoom_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosWaitingRoom_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-esa.RosWaitingRoom",
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
func RosWaitingRoom_IsRosElement(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosWaitingRoom_IsRosElementParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-esa.RosWaitingRoom",
		"isRosElement",
		[]interface{}{x},
		&returns,
	)

	return returns
}

// Check whether the given construct is a RosResource.
func RosWaitingRoom_IsRosResource(construct alicloudroscdkcore.IConstruct) *bool {
	_init_.Initialize()

	if err := validateRosWaitingRoom_IsRosResourceParameters(construct); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-esa.RosWaitingRoom",
		"isRosResource",
		[]interface{}{construct},
		&returns,
	)

	return returns
}

func RosWaitingRoom_ROS_RESOURCE_TYPE_NAME() *string {
	_init_.Initialize()
	var returns *string
	_jsii_.StaticGet(
		"@alicloud/ros-cdk-esa.RosWaitingRoom",
		"ROS_RESOURCE_TYPE_NAME",
		&returns,
	)
	return returns
}

func (r *jsiiProxy_RosWaitingRoom) AddCondition(con alicloudroscdkcore.RosCondition) {
	if err := r.validateAddConditionParameters(con); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCondition",
		[]interface{}{con},
	)
}

func (r *jsiiProxy_RosWaitingRoom) AddCount(count interface{}) {
	if err := r.validateAddCountParameters(count); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCount",
		[]interface{}{count},
	)
}

func (r *jsiiProxy_RosWaitingRoom) AddDeletionOverride(path *string) {
	if err := r.validateAddDeletionOverrideParameters(path); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDeletionOverride",
		[]interface{}{path},
	)
}

func (r *jsiiProxy_RosWaitingRoom) AddDependsOn(target alicloudroscdkcore.RosResource) {
	if err := r.validateAddDependsOnParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDependsOn",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosWaitingRoom) AddDesc(desc *string) {
	if err := r.validateAddDescParameters(desc); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDesc",
		[]interface{}{desc},
	)
}

func (r *jsiiProxy_RosWaitingRoom) AddMetaData(key *string, value interface{}) {
	if err := r.validateAddMetaDataParameters(key, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addMetaData",
		[]interface{}{key, value},
	)
}

func (r *jsiiProxy_RosWaitingRoom) AddOverride(path *string, value interface{}) {
	if err := r.validateAddOverrideParameters(path, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addOverride",
		[]interface{}{path, value},
	)
}

func (r *jsiiProxy_RosWaitingRoom) AddPropertyDeletionOverride(propertyPath *string) {
	if err := r.validateAddPropertyDeletionOverrideParameters(propertyPath); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyDeletionOverride",
		[]interface{}{propertyPath},
	)
}

func (r *jsiiProxy_RosWaitingRoom) AddPropertyOverride(propertyPath *string, value interface{}) {
	if err := r.validateAddPropertyOverrideParameters(propertyPath, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyOverride",
		[]interface{}{propertyPath, value},
	)
}

func (r *jsiiProxy_RosWaitingRoom) AddRosDependency(target *string) {
	if err := r.validateAddRosDependencyParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addRosDependency",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosWaitingRoom) ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy, options *alicloudroscdkcore.RemovalPolicyOptions) {
	if err := r.validateApplyRemovalPolicyParameters(options); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"applyRemovalPolicy",
		[]interface{}{policy, options},
	)
}

func (r *jsiiProxy_RosWaitingRoom) FetchCondition() alicloudroscdkcore.RosCondition {
	var returns alicloudroscdkcore.RosCondition

	_jsii_.Invoke(
		r,
		"fetchCondition",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosWaitingRoom) FetchDesc() *string {
	var returns *string

	_jsii_.Invoke(
		r,
		"fetchDesc",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosWaitingRoom) FetchRosDependency() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"fetchRosDependency",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosWaitingRoom) GetAtt(attributeName *string) alicloudroscdkcore.Reference {
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

func (r *jsiiProxy_RosWaitingRoom) OnPrepare() {
	_jsii_.InvokeVoid(
		r,
		"onPrepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosWaitingRoom) OnSynthesize(session constructs.ISynthesisSession) {
	if err := r.validateOnSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"onSynthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosWaitingRoom) OnValidate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"onValidate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosWaitingRoom) OverrideLogicalId(newLogicalId *string) {
	if err := r.validateOverrideLogicalIdParameters(newLogicalId); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"overrideLogicalId",
		[]interface{}{newLogicalId},
	)
}

func (r *jsiiProxy_RosWaitingRoom) Prepare() {
	_jsii_.InvokeVoid(
		r,
		"prepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosWaitingRoom) RenderProperties(props *map[string]interface{}) *map[string]interface{} {
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

func (r *jsiiProxy_RosWaitingRoom) Synthesize(session alicloudroscdkcore.ISynthesisSession) {
	if err := r.validateSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"synthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosWaitingRoom) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		r,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosWaitingRoom) Validate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"validate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosWaitingRoom) ValidateProperties(_properties interface{}) {
	if err := r.validateValidatePropertiesParameters(_properties); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"validateProperties",
		[]interface{}{_properties},
	)
}

