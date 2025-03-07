package alicloudroscdkcloudfw

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkcloudfw/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcloudfw/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/aws/constructs-go/constructs/v3"
)

// This class is a base encapsulation around the ROS resource type `ALIYUN::CLOUDFW::NatFirewallControlPolicy`, which is used to add an access control policy for a NAT firewall.
type RosNatFirewallControlPolicy interface {
	alicloudroscdkcore.RosResource
	AclAction() interface{}
	SetAclAction(val interface{})
	ApplicationNameList() interface{}
	SetApplicationNameList(val interface{})
	AttrAclUuid() alicloudroscdkcore.IResolvable
	AttrDirection() alicloudroscdkcore.IResolvable
	AttrNatGatewayId() alicloudroscdkcore.IResolvable
	// Returns: the stack trace of the point where this Resource was created from, sourced
	// from the +metadata+ entry typed +aliyun:ros:logicalId+, and with the bottom-most
	// node +internal+ entries filtered.
	CreationStack() *[]*string
	Description() interface{}
	SetDescription(val interface{})
	Destination() interface{}
	SetDestination(val interface{})
	DestinationType() interface{}
	SetDestinationType(val interface{})
	DestPort() interface{}
	SetDestPort(val interface{})
	DestPortGroup() interface{}
	SetDestPortGroup(val interface{})
	DestPortType() interface{}
	SetDestPortType(val interface{})
	Direction() interface{}
	SetDirection(val interface{})
	DomainResolveType() interface{}
	SetDomainResolveType(val interface{})
	EnableResourcePropertyConstraint() *bool
	SetEnableResourcePropertyConstraint(val *bool)
	EndTime() interface{}
	SetEndTime(val interface{})
	IpVersion() interface{}
	SetIpVersion(val interface{})
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
	NatGatewayId() interface{}
	SetNatGatewayId(val interface{})
	NewOrder() interface{}
	SetNewOrder(val interface{})
	// The construct tree node associated with this construct.
	Node() alicloudroscdkcore.ConstructNode
	Proto() interface{}
	SetProto(val interface{})
	// Return a string that will be resolved to a RosTemplate `{ Ref }` for this element.
	//
	// If, by any chance, the intrinsic reference of a resource is not a string, you could
	// coerce it to an IResolvable through `Lazy.any({ produce: resource.ref })`.
	Ref() *string
	Release() interface{}
	SetRelease(val interface{})
	RepeatDays() interface{}
	SetRepeatDays(val interface{})
	RepeatEndTime() interface{}
	SetRepeatEndTime(val interface{})
	RepeatStartTime() interface{}
	SetRepeatStartTime(val interface{})
	RepeatType() interface{}
	SetRepeatType(val interface{})
	// Options for this resource, such as condition, update policy etc.
	RosOptions() alicloudroscdkcore.IRosResourceOptions
	RosProperties() *map[string]interface{}
	// ROS resource type.
	RosResourceType() *string
	Source() interface{}
	SetSource(val interface{})
	SourceType() interface{}
	SetSourceType(val interface{})
	// The stack in which this element is defined.
	//
	// RosElements must be defined within a stack scope (directly or indirectly).
	Stack() alicloudroscdkcore.Stack
	StartTime() interface{}
	SetStartTime(val interface{})
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

// The jsii proxy struct for RosNatFirewallControlPolicy
type jsiiProxy_RosNatFirewallControlPolicy struct {
	internal.Type__alicloudroscdkcoreRosResource
}

func (j *jsiiProxy_RosNatFirewallControlPolicy) AclAction() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"aclAction",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosNatFirewallControlPolicy) ApplicationNameList() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"applicationNameList",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosNatFirewallControlPolicy) AttrAclUuid() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrAclUuid",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosNatFirewallControlPolicy) AttrDirection() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDirection",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosNatFirewallControlPolicy) AttrNatGatewayId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrNatGatewayId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosNatFirewallControlPolicy) CreationStack() *[]*string {
	var returns *[]*string
	_jsii_.Get(
		j,
		"creationStack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosNatFirewallControlPolicy) Description() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"description",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosNatFirewallControlPolicy) Destination() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"destination",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosNatFirewallControlPolicy) DestinationType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"destinationType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosNatFirewallControlPolicy) DestPort() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"destPort",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosNatFirewallControlPolicy) DestPortGroup() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"destPortGroup",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosNatFirewallControlPolicy) DestPortType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"destPortType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosNatFirewallControlPolicy) Direction() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"direction",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosNatFirewallControlPolicy) DomainResolveType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"domainResolveType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosNatFirewallControlPolicy) EnableResourcePropertyConstraint() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"enableResourcePropertyConstraint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosNatFirewallControlPolicy) EndTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"endTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosNatFirewallControlPolicy) IpVersion() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"ipVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosNatFirewallControlPolicy) LogicalId() *string {
	var returns *string
	_jsii_.Get(
		j,
		"logicalId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosNatFirewallControlPolicy) NatGatewayId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"natGatewayId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosNatFirewallControlPolicy) NewOrder() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"newOrder",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosNatFirewallControlPolicy) Node() alicloudroscdkcore.ConstructNode {
	var returns alicloudroscdkcore.ConstructNode
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosNatFirewallControlPolicy) Proto() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"proto",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosNatFirewallControlPolicy) Ref() *string {
	var returns *string
	_jsii_.Get(
		j,
		"ref",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosNatFirewallControlPolicy) Release() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"release",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosNatFirewallControlPolicy) RepeatDays() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"repeatDays",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosNatFirewallControlPolicy) RepeatEndTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"repeatEndTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosNatFirewallControlPolicy) RepeatStartTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"repeatStartTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosNatFirewallControlPolicy) RepeatType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"repeatType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosNatFirewallControlPolicy) RosOptions() alicloudroscdkcore.IRosResourceOptions {
	var returns alicloudroscdkcore.IRosResourceOptions
	_jsii_.Get(
		j,
		"rosOptions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosNatFirewallControlPolicy) RosProperties() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"rosProperties",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosNatFirewallControlPolicy) RosResourceType() *string {
	var returns *string
	_jsii_.Get(
		j,
		"rosResourceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosNatFirewallControlPolicy) Source() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"source",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosNatFirewallControlPolicy) SourceType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"sourceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosNatFirewallControlPolicy) Stack() alicloudroscdkcore.Stack {
	var returns alicloudroscdkcore.Stack
	_jsii_.Get(
		j,
		"stack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosNatFirewallControlPolicy) StartTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"startTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosNatFirewallControlPolicy) UpdatedProperites() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"updatedProperites",
		&returns,
	)
	return returns
}


func NewRosNatFirewallControlPolicy(scope alicloudroscdkcore.Construct, id *string, props *RosNatFirewallControlPolicyProps, enableResourcePropertyConstraint *bool) RosNatFirewallControlPolicy {
	_init_.Initialize()

	if err := validateNewRosNatFirewallControlPolicyParameters(scope, id, props, enableResourcePropertyConstraint); err != nil {
		panic(err)
	}
	j := jsiiProxy_RosNatFirewallControlPolicy{}

	_jsii_.Create(
		"@alicloud/ros-cdk-cloudfw.RosNatFirewallControlPolicy",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		&j,
	)

	return &j
}

func NewRosNatFirewallControlPolicy_Override(r RosNatFirewallControlPolicy, scope alicloudroscdkcore.Construct, id *string, props *RosNatFirewallControlPolicyProps, enableResourcePropertyConstraint *bool) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-cloudfw.RosNatFirewallControlPolicy",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		r,
	)
}

func (j *jsiiProxy_RosNatFirewallControlPolicy)SetAclAction(val interface{}) {
	if err := j.validateSetAclActionParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"aclAction",
		val,
	)
}

func (j *jsiiProxy_RosNatFirewallControlPolicy)SetApplicationNameList(val interface{}) {
	if err := j.validateSetApplicationNameListParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"applicationNameList",
		val,
	)
}

func (j *jsiiProxy_RosNatFirewallControlPolicy)SetDescription(val interface{}) {
	if err := j.validateSetDescriptionParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"description",
		val,
	)
}

func (j *jsiiProxy_RosNatFirewallControlPolicy)SetDestination(val interface{}) {
	if err := j.validateSetDestinationParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"destination",
		val,
	)
}

func (j *jsiiProxy_RosNatFirewallControlPolicy)SetDestinationType(val interface{}) {
	if err := j.validateSetDestinationTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"destinationType",
		val,
	)
}

func (j *jsiiProxy_RosNatFirewallControlPolicy)SetDestPort(val interface{}) {
	if err := j.validateSetDestPortParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"destPort",
		val,
	)
}

func (j *jsiiProxy_RosNatFirewallControlPolicy)SetDestPortGroup(val interface{}) {
	if err := j.validateSetDestPortGroupParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"destPortGroup",
		val,
	)
}

func (j *jsiiProxy_RosNatFirewallControlPolicy)SetDestPortType(val interface{}) {
	if err := j.validateSetDestPortTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"destPortType",
		val,
	)
}

func (j *jsiiProxy_RosNatFirewallControlPolicy)SetDirection(val interface{}) {
	if err := j.validateSetDirectionParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"direction",
		val,
	)
}

func (j *jsiiProxy_RosNatFirewallControlPolicy)SetDomainResolveType(val interface{}) {
	if err := j.validateSetDomainResolveTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"domainResolveType",
		val,
	)
}

func (j *jsiiProxy_RosNatFirewallControlPolicy)SetEnableResourcePropertyConstraint(val *bool) {
	if err := j.validateSetEnableResourcePropertyConstraintParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableResourcePropertyConstraint",
		val,
	)
}

func (j *jsiiProxy_RosNatFirewallControlPolicy)SetEndTime(val interface{}) {
	if err := j.validateSetEndTimeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"endTime",
		val,
	)
}

func (j *jsiiProxy_RosNatFirewallControlPolicy)SetIpVersion(val interface{}) {
	if err := j.validateSetIpVersionParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"ipVersion",
		val,
	)
}

func (j *jsiiProxy_RosNatFirewallControlPolicy)SetNatGatewayId(val interface{}) {
	if err := j.validateSetNatGatewayIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"natGatewayId",
		val,
	)
}

func (j *jsiiProxy_RosNatFirewallControlPolicy)SetNewOrder(val interface{}) {
	if err := j.validateSetNewOrderParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"newOrder",
		val,
	)
}

func (j *jsiiProxy_RosNatFirewallControlPolicy)SetProto(val interface{}) {
	if err := j.validateSetProtoParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"proto",
		val,
	)
}

func (j *jsiiProxy_RosNatFirewallControlPolicy)SetRelease(val interface{}) {
	if err := j.validateSetReleaseParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"release",
		val,
	)
}

func (j *jsiiProxy_RosNatFirewallControlPolicy)SetRepeatDays(val interface{}) {
	if err := j.validateSetRepeatDaysParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"repeatDays",
		val,
	)
}

func (j *jsiiProxy_RosNatFirewallControlPolicy)SetRepeatEndTime(val interface{}) {
	if err := j.validateSetRepeatEndTimeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"repeatEndTime",
		val,
	)
}

func (j *jsiiProxy_RosNatFirewallControlPolicy)SetRepeatStartTime(val interface{}) {
	if err := j.validateSetRepeatStartTimeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"repeatStartTime",
		val,
	)
}

func (j *jsiiProxy_RosNatFirewallControlPolicy)SetRepeatType(val interface{}) {
	if err := j.validateSetRepeatTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"repeatType",
		val,
	)
}

func (j *jsiiProxy_RosNatFirewallControlPolicy)SetSource(val interface{}) {
	if err := j.validateSetSourceParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"source",
		val,
	)
}

func (j *jsiiProxy_RosNatFirewallControlPolicy)SetSourceType(val interface{}) {
	if err := j.validateSetSourceTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"sourceType",
		val,
	)
}

func (j *jsiiProxy_RosNatFirewallControlPolicy)SetStartTime(val interface{}) {
	if err := j.validateSetStartTimeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"startTime",
		val,
	)
}

// Return whether the given object is a Construct.
func RosNatFirewallControlPolicy_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosNatFirewallControlPolicy_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-cloudfw.RosNatFirewallControlPolicy",
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
func RosNatFirewallControlPolicy_IsRosElement(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosNatFirewallControlPolicy_IsRosElementParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-cloudfw.RosNatFirewallControlPolicy",
		"isRosElement",
		[]interface{}{x},
		&returns,
	)

	return returns
}

// Check whether the given construct is a RosResource.
func RosNatFirewallControlPolicy_IsRosResource(construct alicloudroscdkcore.IConstruct) *bool {
	_init_.Initialize()

	if err := validateRosNatFirewallControlPolicy_IsRosResourceParameters(construct); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-cloudfw.RosNatFirewallControlPolicy",
		"isRosResource",
		[]interface{}{construct},
		&returns,
	)

	return returns
}

func RosNatFirewallControlPolicy_ROS_RESOURCE_TYPE_NAME() *string {
	_init_.Initialize()
	var returns *string
	_jsii_.StaticGet(
		"@alicloud/ros-cdk-cloudfw.RosNatFirewallControlPolicy",
		"ROS_RESOURCE_TYPE_NAME",
		&returns,
	)
	return returns
}

func (r *jsiiProxy_RosNatFirewallControlPolicy) AddCondition(con alicloudroscdkcore.RosCondition) {
	if err := r.validateAddConditionParameters(con); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCondition",
		[]interface{}{con},
	)
}

func (r *jsiiProxy_RosNatFirewallControlPolicy) AddCount(count interface{}) {
	if err := r.validateAddCountParameters(count); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCount",
		[]interface{}{count},
	)
}

func (r *jsiiProxy_RosNatFirewallControlPolicy) AddDeletionOverride(path *string) {
	if err := r.validateAddDeletionOverrideParameters(path); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDeletionOverride",
		[]interface{}{path},
	)
}

func (r *jsiiProxy_RosNatFirewallControlPolicy) AddDependsOn(target alicloudroscdkcore.RosResource) {
	if err := r.validateAddDependsOnParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDependsOn",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosNatFirewallControlPolicy) AddDesc(desc *string) {
	if err := r.validateAddDescParameters(desc); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDesc",
		[]interface{}{desc},
	)
}

func (r *jsiiProxy_RosNatFirewallControlPolicy) AddMetaData(key *string, value interface{}) {
	if err := r.validateAddMetaDataParameters(key, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addMetaData",
		[]interface{}{key, value},
	)
}

func (r *jsiiProxy_RosNatFirewallControlPolicy) AddOverride(path *string, value interface{}) {
	if err := r.validateAddOverrideParameters(path, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addOverride",
		[]interface{}{path, value},
	)
}

func (r *jsiiProxy_RosNatFirewallControlPolicy) AddPropertyDeletionOverride(propertyPath *string) {
	if err := r.validateAddPropertyDeletionOverrideParameters(propertyPath); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyDeletionOverride",
		[]interface{}{propertyPath},
	)
}

func (r *jsiiProxy_RosNatFirewallControlPolicy) AddPropertyOverride(propertyPath *string, value interface{}) {
	if err := r.validateAddPropertyOverrideParameters(propertyPath, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyOverride",
		[]interface{}{propertyPath, value},
	)
}

func (r *jsiiProxy_RosNatFirewallControlPolicy) AddRosDependency(target *string) {
	if err := r.validateAddRosDependencyParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addRosDependency",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosNatFirewallControlPolicy) ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy, options *alicloudroscdkcore.RemovalPolicyOptions) {
	if err := r.validateApplyRemovalPolicyParameters(options); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"applyRemovalPolicy",
		[]interface{}{policy, options},
	)
}

func (r *jsiiProxy_RosNatFirewallControlPolicy) FetchCondition() alicloudroscdkcore.RosCondition {
	var returns alicloudroscdkcore.RosCondition

	_jsii_.Invoke(
		r,
		"fetchCondition",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosNatFirewallControlPolicy) FetchDesc() *string {
	var returns *string

	_jsii_.Invoke(
		r,
		"fetchDesc",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosNatFirewallControlPolicy) FetchRosDependency() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"fetchRosDependency",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosNatFirewallControlPolicy) GetAtt(attributeName *string) alicloudroscdkcore.Reference {
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

func (r *jsiiProxy_RosNatFirewallControlPolicy) OnPrepare() {
	_jsii_.InvokeVoid(
		r,
		"onPrepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosNatFirewallControlPolicy) OnSynthesize(session constructs.ISynthesisSession) {
	if err := r.validateOnSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"onSynthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosNatFirewallControlPolicy) OnValidate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"onValidate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosNatFirewallControlPolicy) OverrideLogicalId(newLogicalId *string) {
	if err := r.validateOverrideLogicalIdParameters(newLogicalId); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"overrideLogicalId",
		[]interface{}{newLogicalId},
	)
}

func (r *jsiiProxy_RosNatFirewallControlPolicy) Prepare() {
	_jsii_.InvokeVoid(
		r,
		"prepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosNatFirewallControlPolicy) RenderProperties(props *map[string]interface{}) *map[string]interface{} {
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

func (r *jsiiProxy_RosNatFirewallControlPolicy) Synthesize(session alicloudroscdkcore.ISynthesisSession) {
	if err := r.validateSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"synthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosNatFirewallControlPolicy) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		r,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosNatFirewallControlPolicy) Validate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"validate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosNatFirewallControlPolicy) ValidateProperties(_properties interface{}) {
	if err := r.validateValidatePropertiesParameters(_properties); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"validateProperties",
		[]interface{}{_properties},
	)
}

