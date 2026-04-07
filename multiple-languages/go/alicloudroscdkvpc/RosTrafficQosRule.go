package alicloudroscdkvpc

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkvpc/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkvpc/internal"
	"github.com/aws/constructs-go/constructs/v3"
)

// This class is a base encapsulation around the ROS resource type `ALIYUN::VPC::TrafficQosRule`.
type RosTrafficQosRule interface {
	alicloudroscdkcore.RosResource
	AttrDstCidr() alicloudroscdkcore.IResolvable
	AttrDstIpv6Cidr() alicloudroscdkcore.IResolvable
	AttrDstPortRange() alicloudroscdkcore.IResolvable
	AttrMatchDscp() alicloudroscdkcore.IResolvable
	AttrPriority() alicloudroscdkcore.IResolvable
	AttrProtocol() alicloudroscdkcore.IResolvable
	AttrQosId() alicloudroscdkcore.IResolvable
	AttrQueueId() alicloudroscdkcore.IResolvable
	AttrRemarkingDscp() alicloudroscdkcore.IResolvable
	AttrRuleDescription() alicloudroscdkcore.IResolvable
	AttrRuleId() alicloudroscdkcore.IResolvable
	AttrRuleName() alicloudroscdkcore.IResolvable
	AttrSrcCidr() alicloudroscdkcore.IResolvable
	AttrSrcIpv6Cidr() alicloudroscdkcore.IResolvable
	AttrSrcPortRange() alicloudroscdkcore.IResolvable
	// Returns: the stack trace of the point where this Resource was created from, sourced
	// from the +metadata+ entry typed +aliyun:ros:logicalId+, and with the bottom-most
	// node +internal+ entries filtered.
	CreationStack() *[]*string
	DstCidr() interface{}
	SetDstCidr(val interface{})
	DstIpv6Cidr() interface{}
	SetDstIpv6Cidr(val interface{})
	DstPortRange() interface{}
	SetDstPortRange(val interface{})
	EnableResourcePropertyConstraint() *bool
	SetEnableResourcePropertyConstraint(val *bool)
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
	MatchDscp() interface{}
	SetMatchDscp(val interface{})
	// The construct tree node associated with this construct.
	Node() alicloudroscdkcore.ConstructNode
	Priority() interface{}
	SetPriority(val interface{})
	Protocol() interface{}
	SetProtocol(val interface{})
	QosId() interface{}
	SetQosId(val interface{})
	QueueId() interface{}
	SetQueueId(val interface{})
	// Return a string that will be resolved to a RosTemplate `{ Ref }` for this element.
	//
	// If, by any chance, the intrinsic reference of a resource is not a string, you could
	// coerce it to an IResolvable through `Lazy.any({ produce: resource.ref })`.
	Ref() *string
	RemarkingDscp() interface{}
	SetRemarkingDscp(val interface{})
	// Options for this resource, such as condition, update policy etc.
	RosOptions() alicloudroscdkcore.IRosResourceOptions
	RosProperties() *map[string]interface{}
	// ROS resource type.
	RosResourceType() *string
	RuleDescription() interface{}
	SetRuleDescription(val interface{})
	RuleName() interface{}
	SetRuleName(val interface{})
	SrcCidr() interface{}
	SetSrcCidr(val interface{})
	SrcIpv6Cidr() interface{}
	SetSrcIpv6Cidr(val interface{})
	SrcPortRange() interface{}
	SetSrcPortRange(val interface{})
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

// The jsii proxy struct for RosTrafficQosRule
type jsiiProxy_RosTrafficQosRule struct {
	internal.Type__alicloudroscdkcoreRosResource
}

func (j *jsiiProxy_RosTrafficQosRule) AttrDstCidr() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDstCidr",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTrafficQosRule) AttrDstIpv6Cidr() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDstIpv6Cidr",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTrafficQosRule) AttrDstPortRange() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDstPortRange",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTrafficQosRule) AttrMatchDscp() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrMatchDscp",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTrafficQosRule) AttrPriority() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrPriority",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTrafficQosRule) AttrProtocol() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrProtocol",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTrafficQosRule) AttrQosId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrQosId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTrafficQosRule) AttrQueueId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrQueueId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTrafficQosRule) AttrRemarkingDscp() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrRemarkingDscp",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTrafficQosRule) AttrRuleDescription() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrRuleDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTrafficQosRule) AttrRuleId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrRuleId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTrafficQosRule) AttrRuleName() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrRuleName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTrafficQosRule) AttrSrcCidr() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrSrcCidr",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTrafficQosRule) AttrSrcIpv6Cidr() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrSrcIpv6Cidr",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTrafficQosRule) AttrSrcPortRange() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrSrcPortRange",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTrafficQosRule) CreationStack() *[]*string {
	var returns *[]*string
	_jsii_.Get(
		j,
		"creationStack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTrafficQosRule) DstCidr() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"dstCidr",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTrafficQosRule) DstIpv6Cidr() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"dstIpv6Cidr",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTrafficQosRule) DstPortRange() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"dstPortRange",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTrafficQosRule) EnableResourcePropertyConstraint() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"enableResourcePropertyConstraint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTrafficQosRule) LogicalId() *string {
	var returns *string
	_jsii_.Get(
		j,
		"logicalId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTrafficQosRule) MatchDscp() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"matchDscp",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTrafficQosRule) Node() alicloudroscdkcore.ConstructNode {
	var returns alicloudroscdkcore.ConstructNode
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTrafficQosRule) Priority() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"priority",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTrafficQosRule) Protocol() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"protocol",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTrafficQosRule) QosId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"qosId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTrafficQosRule) QueueId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"queueId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTrafficQosRule) Ref() *string {
	var returns *string
	_jsii_.Get(
		j,
		"ref",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTrafficQosRule) RemarkingDscp() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"remarkingDscp",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTrafficQosRule) RosOptions() alicloudroscdkcore.IRosResourceOptions {
	var returns alicloudroscdkcore.IRosResourceOptions
	_jsii_.Get(
		j,
		"rosOptions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTrafficQosRule) RosProperties() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"rosProperties",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTrafficQosRule) RosResourceType() *string {
	var returns *string
	_jsii_.Get(
		j,
		"rosResourceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTrafficQosRule) RuleDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"ruleDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTrafficQosRule) RuleName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"ruleName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTrafficQosRule) SrcCidr() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"srcCidr",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTrafficQosRule) SrcIpv6Cidr() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"srcIpv6Cidr",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTrafficQosRule) SrcPortRange() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"srcPortRange",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTrafficQosRule) Stack() alicloudroscdkcore.Stack {
	var returns alicloudroscdkcore.Stack
	_jsii_.Get(
		j,
		"stack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosTrafficQosRule) UpdatedProperites() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"updatedProperites",
		&returns,
	)
	return returns
}


func NewRosTrafficQosRule(scope alicloudroscdkcore.Construct, id *string, props *RosTrafficQosRuleProps, enableResourcePropertyConstraint *bool) RosTrafficQosRule {
	_init_.Initialize()

	if err := validateNewRosTrafficQosRuleParameters(scope, id, props, enableResourcePropertyConstraint); err != nil {
		panic(err)
	}
	j := jsiiProxy_RosTrafficQosRule{}

	_jsii_.Create(
		"@alicloud/ros-cdk-vpc.RosTrafficQosRule",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		&j,
	)

	return &j
}

func NewRosTrafficQosRule_Override(r RosTrafficQosRule, scope alicloudroscdkcore.Construct, id *string, props *RosTrafficQosRuleProps, enableResourcePropertyConstraint *bool) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-vpc.RosTrafficQosRule",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		r,
	)
}

func (j *jsiiProxy_RosTrafficQosRule)SetDstCidr(val interface{}) {
	if err := j.validateSetDstCidrParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"dstCidr",
		val,
	)
}

func (j *jsiiProxy_RosTrafficQosRule)SetDstIpv6Cidr(val interface{}) {
	if err := j.validateSetDstIpv6CidrParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"dstIpv6Cidr",
		val,
	)
}

func (j *jsiiProxy_RosTrafficQosRule)SetDstPortRange(val interface{}) {
	if err := j.validateSetDstPortRangeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"dstPortRange",
		val,
	)
}

func (j *jsiiProxy_RosTrafficQosRule)SetEnableResourcePropertyConstraint(val *bool) {
	if err := j.validateSetEnableResourcePropertyConstraintParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableResourcePropertyConstraint",
		val,
	)
}

func (j *jsiiProxy_RosTrafficQosRule)SetMatchDscp(val interface{}) {
	if err := j.validateSetMatchDscpParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"matchDscp",
		val,
	)
}

func (j *jsiiProxy_RosTrafficQosRule)SetPriority(val interface{}) {
	if err := j.validateSetPriorityParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"priority",
		val,
	)
}

func (j *jsiiProxy_RosTrafficQosRule)SetProtocol(val interface{}) {
	if err := j.validateSetProtocolParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"protocol",
		val,
	)
}

func (j *jsiiProxy_RosTrafficQosRule)SetQosId(val interface{}) {
	if err := j.validateSetQosIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"qosId",
		val,
	)
}

func (j *jsiiProxy_RosTrafficQosRule)SetQueueId(val interface{}) {
	if err := j.validateSetQueueIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"queueId",
		val,
	)
}

func (j *jsiiProxy_RosTrafficQosRule)SetRemarkingDscp(val interface{}) {
	if err := j.validateSetRemarkingDscpParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"remarkingDscp",
		val,
	)
}

func (j *jsiiProxy_RosTrafficQosRule)SetRuleDescription(val interface{}) {
	if err := j.validateSetRuleDescriptionParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"ruleDescription",
		val,
	)
}

func (j *jsiiProxy_RosTrafficQosRule)SetRuleName(val interface{}) {
	if err := j.validateSetRuleNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"ruleName",
		val,
	)
}

func (j *jsiiProxy_RosTrafficQosRule)SetSrcCidr(val interface{}) {
	if err := j.validateSetSrcCidrParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"srcCidr",
		val,
	)
}

func (j *jsiiProxy_RosTrafficQosRule)SetSrcIpv6Cidr(val interface{}) {
	if err := j.validateSetSrcIpv6CidrParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"srcIpv6Cidr",
		val,
	)
}

func (j *jsiiProxy_RosTrafficQosRule)SetSrcPortRange(val interface{}) {
	if err := j.validateSetSrcPortRangeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"srcPortRange",
		val,
	)
}

// Return whether the given object is a Construct.
func RosTrafficQosRule_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosTrafficQosRule_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-vpc.RosTrafficQosRule",
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
func RosTrafficQosRule_IsRosElement(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosTrafficQosRule_IsRosElementParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-vpc.RosTrafficQosRule",
		"isRosElement",
		[]interface{}{x},
		&returns,
	)

	return returns
}

// Check whether the given construct is a RosResource.
func RosTrafficQosRule_IsRosResource(construct alicloudroscdkcore.IConstruct) *bool {
	_init_.Initialize()

	if err := validateRosTrafficQosRule_IsRosResourceParameters(construct); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-vpc.RosTrafficQosRule",
		"isRosResource",
		[]interface{}{construct},
		&returns,
	)

	return returns
}

func RosTrafficQosRule_ROS_RESOURCE_TYPE_NAME() *string {
	_init_.Initialize()
	var returns *string
	_jsii_.StaticGet(
		"@alicloud/ros-cdk-vpc.RosTrafficQosRule",
		"ROS_RESOURCE_TYPE_NAME",
		&returns,
	)
	return returns
}

func (r *jsiiProxy_RosTrafficQosRule) AddCondition(con alicloudroscdkcore.RosCondition) {
	if err := r.validateAddConditionParameters(con); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCondition",
		[]interface{}{con},
	)
}

func (r *jsiiProxy_RosTrafficQosRule) AddCount(count interface{}) {
	if err := r.validateAddCountParameters(count); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCount",
		[]interface{}{count},
	)
}

func (r *jsiiProxy_RosTrafficQosRule) AddDeletionOverride(path *string) {
	if err := r.validateAddDeletionOverrideParameters(path); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDeletionOverride",
		[]interface{}{path},
	)
}

func (r *jsiiProxy_RosTrafficQosRule) AddDependsOn(target alicloudroscdkcore.RosResource) {
	if err := r.validateAddDependsOnParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDependsOn",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosTrafficQosRule) AddDesc(desc *string) {
	if err := r.validateAddDescParameters(desc); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDesc",
		[]interface{}{desc},
	)
}

func (r *jsiiProxy_RosTrafficQosRule) AddMetaData(key *string, value interface{}) {
	if err := r.validateAddMetaDataParameters(key, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addMetaData",
		[]interface{}{key, value},
	)
}

func (r *jsiiProxy_RosTrafficQosRule) AddOverride(path *string, value interface{}) {
	if err := r.validateAddOverrideParameters(path, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addOverride",
		[]interface{}{path, value},
	)
}

func (r *jsiiProxy_RosTrafficQosRule) AddPropertyDeletionOverride(propertyPath *string) {
	if err := r.validateAddPropertyDeletionOverrideParameters(propertyPath); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyDeletionOverride",
		[]interface{}{propertyPath},
	)
}

func (r *jsiiProxy_RosTrafficQosRule) AddPropertyOverride(propertyPath *string, value interface{}) {
	if err := r.validateAddPropertyOverrideParameters(propertyPath, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyOverride",
		[]interface{}{propertyPath, value},
	)
}

func (r *jsiiProxy_RosTrafficQosRule) AddRosDependency(target *string) {
	if err := r.validateAddRosDependencyParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addRosDependency",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosTrafficQosRule) ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy, options *alicloudroscdkcore.RemovalPolicyOptions) {
	if err := r.validateApplyRemovalPolicyParameters(options); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"applyRemovalPolicy",
		[]interface{}{policy, options},
	)
}

func (r *jsiiProxy_RosTrafficQosRule) FetchCondition() alicloudroscdkcore.RosCondition {
	var returns alicloudroscdkcore.RosCondition

	_jsii_.Invoke(
		r,
		"fetchCondition",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosTrafficQosRule) FetchDesc() *string {
	var returns *string

	_jsii_.Invoke(
		r,
		"fetchDesc",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosTrafficQosRule) FetchRosDependency() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"fetchRosDependency",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosTrafficQosRule) GetAtt(attributeName *string) alicloudroscdkcore.Reference {
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

func (r *jsiiProxy_RosTrafficQosRule) OnPrepare() {
	_jsii_.InvokeVoid(
		r,
		"onPrepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosTrafficQosRule) OnSynthesize(session constructs.ISynthesisSession) {
	if err := r.validateOnSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"onSynthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosTrafficQosRule) OnValidate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"onValidate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosTrafficQosRule) OverrideLogicalId(newLogicalId *string) {
	if err := r.validateOverrideLogicalIdParameters(newLogicalId); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"overrideLogicalId",
		[]interface{}{newLogicalId},
	)
}

func (r *jsiiProxy_RosTrafficQosRule) Prepare() {
	_jsii_.InvokeVoid(
		r,
		"prepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosTrafficQosRule) RenderProperties(props *map[string]interface{}) *map[string]interface{} {
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

func (r *jsiiProxy_RosTrafficQosRule) Synthesize(session alicloudroscdkcore.ISynthesisSession) {
	if err := r.validateSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"synthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosTrafficQosRule) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		r,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosTrafficQosRule) Validate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"validate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosTrafficQosRule) ValidateProperties(_properties interface{}) {
	if err := r.validateValidatePropertiesParameters(_properties); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"validateProperties",
		[]interface{}{_properties},
	)
}

