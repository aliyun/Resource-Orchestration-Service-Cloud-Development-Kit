package alicloudroscdkesa

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkesa/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkesa/internal"
	"github.com/aws/constructs-go/constructs/v3"
)

// This class is a base encapsulation around the ROS resource type `ALIYUN::ESA::OriginRule`.
type RosOriginRule interface {
	alicloudroscdkcore.RosResource
	AttrConfigId() alicloudroscdkcore.IResolvable
	AttrConfigType() alicloudroscdkcore.IResolvable
	AttrDnsRecord() alicloudroscdkcore.IResolvable
	AttrFollow302Enable() alicloudroscdkcore.IResolvable
	AttrFollow302MaxTries() alicloudroscdkcore.IResolvable
	AttrFollow302RetainArgs() alicloudroscdkcore.IResolvable
	AttrFollow302RetainHeader() alicloudroscdkcore.IResolvable
	AttrFollow302TargetHost() alicloudroscdkcore.IResolvable
	AttrOriginHost() alicloudroscdkcore.IResolvable
	AttrOriginHttpPort() alicloudroscdkcore.IResolvable
	AttrOriginHttpsPort() alicloudroscdkcore.IResolvable
	AttrOriginMtls() alicloudroscdkcore.IResolvable
	AttrOriginReadTimeout() alicloudroscdkcore.IResolvable
	AttrOriginScheme() alicloudroscdkcore.IResolvable
	AttrOriginSni() alicloudroscdkcore.IResolvable
	AttrOriginVerify() alicloudroscdkcore.IResolvable
	AttrRange() alicloudroscdkcore.IResolvable
	AttrRangeChunkSize() alicloudroscdkcore.IResolvable
	AttrRule() alicloudroscdkcore.IResolvable
	AttrRuleEnable() alicloudroscdkcore.IResolvable
	AttrRuleName() alicloudroscdkcore.IResolvable
	AttrSequence() alicloudroscdkcore.IResolvable
	AttrSiteVersion() alicloudroscdkcore.IResolvable
	// Returns: the stack trace of the point where this Resource was created from, sourced
	// from the +metadata+ entry typed +aliyun:ros:logicalId+, and with the bottom-most
	// node +internal+ entries filtered.
	CreationStack() *[]*string
	DnsRecord() interface{}
	SetDnsRecord(val interface{})
	EnableResourcePropertyConstraint() *bool
	SetEnableResourcePropertyConstraint(val *bool)
	Follow302Enable() interface{}
	SetFollow302Enable(val interface{})
	Follow302MaxTries() interface{}
	SetFollow302MaxTries(val interface{})
	Follow302RetainArgs() interface{}
	SetFollow302RetainArgs(val interface{})
	Follow302RetainHeader() interface{}
	SetFollow302RetainHeader(val interface{})
	Follow302TargetHost() interface{}
	SetFollow302TargetHost(val interface{})
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
	OriginHost() interface{}
	SetOriginHost(val interface{})
	OriginHttpPort() interface{}
	SetOriginHttpPort(val interface{})
	OriginHttpsPort() interface{}
	SetOriginHttpsPort(val interface{})
	OriginMtls() interface{}
	SetOriginMtls(val interface{})
	OriginReadTimeout() interface{}
	SetOriginReadTimeout(val interface{})
	OriginScheme() interface{}
	SetOriginScheme(val interface{})
	OriginSni() interface{}
	SetOriginSni(val interface{})
	OriginVerify() interface{}
	SetOriginVerify(val interface{})
	Range() interface{}
	SetRange(val interface{})
	RangeChunkSize() interface{}
	SetRangeChunkSize(val interface{})
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
	Rule() interface{}
	SetRule(val interface{})
	RuleEnable() interface{}
	SetRuleEnable(val interface{})
	RuleName() interface{}
	SetRuleName(val interface{})
	Sequence() interface{}
	SetSequence(val interface{})
	SiteId() interface{}
	SetSiteId(val interface{})
	SiteVersion() interface{}
	SetSiteVersion(val interface{})
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

// The jsii proxy struct for RosOriginRule
type jsiiProxy_RosOriginRule struct {
	internal.Type__alicloudroscdkcoreRosResource
}

func (j *jsiiProxy_RosOriginRule) AttrConfigId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrConfigId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOriginRule) AttrConfigType() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrConfigType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOriginRule) AttrDnsRecord() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDnsRecord",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOriginRule) AttrFollow302Enable() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrFollow302Enable",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOriginRule) AttrFollow302MaxTries() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrFollow302MaxTries",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOriginRule) AttrFollow302RetainArgs() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrFollow302RetainArgs",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOriginRule) AttrFollow302RetainHeader() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrFollow302RetainHeader",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOriginRule) AttrFollow302TargetHost() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrFollow302TargetHost",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOriginRule) AttrOriginHost() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrOriginHost",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOriginRule) AttrOriginHttpPort() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrOriginHttpPort",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOriginRule) AttrOriginHttpsPort() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrOriginHttpsPort",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOriginRule) AttrOriginMtls() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrOriginMtls",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOriginRule) AttrOriginReadTimeout() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrOriginReadTimeout",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOriginRule) AttrOriginScheme() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrOriginScheme",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOriginRule) AttrOriginSni() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrOriginSni",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOriginRule) AttrOriginVerify() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrOriginVerify",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOriginRule) AttrRange() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrRange",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOriginRule) AttrRangeChunkSize() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrRangeChunkSize",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOriginRule) AttrRule() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrRule",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOriginRule) AttrRuleEnable() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrRuleEnable",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOriginRule) AttrRuleName() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrRuleName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOriginRule) AttrSequence() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrSequence",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOriginRule) AttrSiteVersion() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrSiteVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOriginRule) CreationStack() *[]*string {
	var returns *[]*string
	_jsii_.Get(
		j,
		"creationStack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOriginRule) DnsRecord() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"dnsRecord",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOriginRule) EnableResourcePropertyConstraint() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"enableResourcePropertyConstraint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOriginRule) Follow302Enable() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"follow302Enable",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOriginRule) Follow302MaxTries() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"follow302MaxTries",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOriginRule) Follow302RetainArgs() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"follow302RetainArgs",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOriginRule) Follow302RetainHeader() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"follow302RetainHeader",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOriginRule) Follow302TargetHost() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"follow302TargetHost",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOriginRule) LogicalId() *string {
	var returns *string
	_jsii_.Get(
		j,
		"logicalId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOriginRule) Node() alicloudroscdkcore.ConstructNode {
	var returns alicloudroscdkcore.ConstructNode
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOriginRule) OriginHost() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"originHost",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOriginRule) OriginHttpPort() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"originHttpPort",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOriginRule) OriginHttpsPort() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"originHttpsPort",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOriginRule) OriginMtls() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"originMtls",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOriginRule) OriginReadTimeout() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"originReadTimeout",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOriginRule) OriginScheme() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"originScheme",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOriginRule) OriginSni() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"originSni",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOriginRule) OriginVerify() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"originVerify",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOriginRule) Range() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"range",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOriginRule) RangeChunkSize() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"rangeChunkSize",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOriginRule) Ref() *string {
	var returns *string
	_jsii_.Get(
		j,
		"ref",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOriginRule) RosOptions() alicloudroscdkcore.IRosResourceOptions {
	var returns alicloudroscdkcore.IRosResourceOptions
	_jsii_.Get(
		j,
		"rosOptions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOriginRule) RosProperties() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"rosProperties",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOriginRule) RosResourceType() *string {
	var returns *string
	_jsii_.Get(
		j,
		"rosResourceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOriginRule) Rule() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"rule",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOriginRule) RuleEnable() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"ruleEnable",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOriginRule) RuleName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"ruleName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOriginRule) Sequence() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"sequence",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOriginRule) SiteId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"siteId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOriginRule) SiteVersion() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"siteVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOriginRule) Stack() alicloudroscdkcore.Stack {
	var returns alicloudroscdkcore.Stack
	_jsii_.Get(
		j,
		"stack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOriginRule) UpdatedProperites() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"updatedProperites",
		&returns,
	)
	return returns
}


func NewRosOriginRule(scope alicloudroscdkcore.Construct, id *string, props *RosOriginRuleProps, enableResourcePropertyConstraint *bool) RosOriginRule {
	_init_.Initialize()

	if err := validateNewRosOriginRuleParameters(scope, id, props, enableResourcePropertyConstraint); err != nil {
		panic(err)
	}
	j := jsiiProxy_RosOriginRule{}

	_jsii_.Create(
		"@alicloud/ros-cdk-esa.RosOriginRule",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		&j,
	)

	return &j
}

func NewRosOriginRule_Override(r RosOriginRule, scope alicloudroscdkcore.Construct, id *string, props *RosOriginRuleProps, enableResourcePropertyConstraint *bool) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-esa.RosOriginRule",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		r,
	)
}

func (j *jsiiProxy_RosOriginRule)SetDnsRecord(val interface{}) {
	if err := j.validateSetDnsRecordParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"dnsRecord",
		val,
	)
}

func (j *jsiiProxy_RosOriginRule)SetEnableResourcePropertyConstraint(val *bool) {
	if err := j.validateSetEnableResourcePropertyConstraintParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableResourcePropertyConstraint",
		val,
	)
}

func (j *jsiiProxy_RosOriginRule)SetFollow302Enable(val interface{}) {
	if err := j.validateSetFollow302EnableParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"follow302Enable",
		val,
	)
}

func (j *jsiiProxy_RosOriginRule)SetFollow302MaxTries(val interface{}) {
	if err := j.validateSetFollow302MaxTriesParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"follow302MaxTries",
		val,
	)
}

func (j *jsiiProxy_RosOriginRule)SetFollow302RetainArgs(val interface{}) {
	if err := j.validateSetFollow302RetainArgsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"follow302RetainArgs",
		val,
	)
}

func (j *jsiiProxy_RosOriginRule)SetFollow302RetainHeader(val interface{}) {
	if err := j.validateSetFollow302RetainHeaderParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"follow302RetainHeader",
		val,
	)
}

func (j *jsiiProxy_RosOriginRule)SetFollow302TargetHost(val interface{}) {
	if err := j.validateSetFollow302TargetHostParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"follow302TargetHost",
		val,
	)
}

func (j *jsiiProxy_RosOriginRule)SetOriginHost(val interface{}) {
	if err := j.validateSetOriginHostParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"originHost",
		val,
	)
}

func (j *jsiiProxy_RosOriginRule)SetOriginHttpPort(val interface{}) {
	if err := j.validateSetOriginHttpPortParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"originHttpPort",
		val,
	)
}

func (j *jsiiProxy_RosOriginRule)SetOriginHttpsPort(val interface{}) {
	if err := j.validateSetOriginHttpsPortParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"originHttpsPort",
		val,
	)
}

func (j *jsiiProxy_RosOriginRule)SetOriginMtls(val interface{}) {
	if err := j.validateSetOriginMtlsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"originMtls",
		val,
	)
}

func (j *jsiiProxy_RosOriginRule)SetOriginReadTimeout(val interface{}) {
	if err := j.validateSetOriginReadTimeoutParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"originReadTimeout",
		val,
	)
}

func (j *jsiiProxy_RosOriginRule)SetOriginScheme(val interface{}) {
	if err := j.validateSetOriginSchemeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"originScheme",
		val,
	)
}

func (j *jsiiProxy_RosOriginRule)SetOriginSni(val interface{}) {
	if err := j.validateSetOriginSniParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"originSni",
		val,
	)
}

func (j *jsiiProxy_RosOriginRule)SetOriginVerify(val interface{}) {
	if err := j.validateSetOriginVerifyParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"originVerify",
		val,
	)
}

func (j *jsiiProxy_RosOriginRule)SetRange(val interface{}) {
	if err := j.validateSetRangeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"range",
		val,
	)
}

func (j *jsiiProxy_RosOriginRule)SetRangeChunkSize(val interface{}) {
	if err := j.validateSetRangeChunkSizeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"rangeChunkSize",
		val,
	)
}

func (j *jsiiProxy_RosOriginRule)SetRule(val interface{}) {
	if err := j.validateSetRuleParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"rule",
		val,
	)
}

func (j *jsiiProxy_RosOriginRule)SetRuleEnable(val interface{}) {
	if err := j.validateSetRuleEnableParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"ruleEnable",
		val,
	)
}

func (j *jsiiProxy_RosOriginRule)SetRuleName(val interface{}) {
	if err := j.validateSetRuleNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"ruleName",
		val,
	)
}

func (j *jsiiProxy_RosOriginRule)SetSequence(val interface{}) {
	if err := j.validateSetSequenceParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"sequence",
		val,
	)
}

func (j *jsiiProxy_RosOriginRule)SetSiteId(val interface{}) {
	if err := j.validateSetSiteIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"siteId",
		val,
	)
}

func (j *jsiiProxy_RosOriginRule)SetSiteVersion(val interface{}) {
	if err := j.validateSetSiteVersionParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"siteVersion",
		val,
	)
}

// Return whether the given object is a Construct.
func RosOriginRule_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosOriginRule_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-esa.RosOriginRule",
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
func RosOriginRule_IsRosElement(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosOriginRule_IsRosElementParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-esa.RosOriginRule",
		"isRosElement",
		[]interface{}{x},
		&returns,
	)

	return returns
}

// Check whether the given construct is a RosResource.
func RosOriginRule_IsRosResource(construct alicloudroscdkcore.IConstruct) *bool {
	_init_.Initialize()

	if err := validateRosOriginRule_IsRosResourceParameters(construct); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-esa.RosOriginRule",
		"isRosResource",
		[]interface{}{construct},
		&returns,
	)

	return returns
}

func RosOriginRule_ROS_RESOURCE_TYPE_NAME() *string {
	_init_.Initialize()
	var returns *string
	_jsii_.StaticGet(
		"@alicloud/ros-cdk-esa.RosOriginRule",
		"ROS_RESOURCE_TYPE_NAME",
		&returns,
	)
	return returns
}

func (r *jsiiProxy_RosOriginRule) AddCondition(con alicloudroscdkcore.RosCondition) {
	if err := r.validateAddConditionParameters(con); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCondition",
		[]interface{}{con},
	)
}

func (r *jsiiProxy_RosOriginRule) AddCount(count interface{}) {
	if err := r.validateAddCountParameters(count); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCount",
		[]interface{}{count},
	)
}

func (r *jsiiProxy_RosOriginRule) AddDeletionOverride(path *string) {
	if err := r.validateAddDeletionOverrideParameters(path); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDeletionOverride",
		[]interface{}{path},
	)
}

func (r *jsiiProxy_RosOriginRule) AddDependsOn(target alicloudroscdkcore.RosResource) {
	if err := r.validateAddDependsOnParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDependsOn",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosOriginRule) AddDesc(desc *string) {
	if err := r.validateAddDescParameters(desc); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDesc",
		[]interface{}{desc},
	)
}

func (r *jsiiProxy_RosOriginRule) AddMetaData(key *string, value interface{}) {
	if err := r.validateAddMetaDataParameters(key, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addMetaData",
		[]interface{}{key, value},
	)
}

func (r *jsiiProxy_RosOriginRule) AddOverride(path *string, value interface{}) {
	if err := r.validateAddOverrideParameters(path, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addOverride",
		[]interface{}{path, value},
	)
}

func (r *jsiiProxy_RosOriginRule) AddPropertyDeletionOverride(propertyPath *string) {
	if err := r.validateAddPropertyDeletionOverrideParameters(propertyPath); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyDeletionOverride",
		[]interface{}{propertyPath},
	)
}

func (r *jsiiProxy_RosOriginRule) AddPropertyOverride(propertyPath *string, value interface{}) {
	if err := r.validateAddPropertyOverrideParameters(propertyPath, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyOverride",
		[]interface{}{propertyPath, value},
	)
}

func (r *jsiiProxy_RosOriginRule) AddRosDependency(target *string) {
	if err := r.validateAddRosDependencyParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addRosDependency",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosOriginRule) ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy, options *alicloudroscdkcore.RemovalPolicyOptions) {
	if err := r.validateApplyRemovalPolicyParameters(options); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"applyRemovalPolicy",
		[]interface{}{policy, options},
	)
}

func (r *jsiiProxy_RosOriginRule) FetchCondition() alicloudroscdkcore.RosCondition {
	var returns alicloudroscdkcore.RosCondition

	_jsii_.Invoke(
		r,
		"fetchCondition",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosOriginRule) FetchDesc() *string {
	var returns *string

	_jsii_.Invoke(
		r,
		"fetchDesc",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosOriginRule) FetchRosDependency() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"fetchRosDependency",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosOriginRule) GetAtt(attributeName *string) alicloudroscdkcore.Reference {
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

func (r *jsiiProxy_RosOriginRule) OnPrepare() {
	_jsii_.InvokeVoid(
		r,
		"onPrepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosOriginRule) OnSynthesize(session constructs.ISynthesisSession) {
	if err := r.validateOnSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"onSynthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosOriginRule) OnValidate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"onValidate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosOriginRule) OverrideLogicalId(newLogicalId *string) {
	if err := r.validateOverrideLogicalIdParameters(newLogicalId); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"overrideLogicalId",
		[]interface{}{newLogicalId},
	)
}

func (r *jsiiProxy_RosOriginRule) Prepare() {
	_jsii_.InvokeVoid(
		r,
		"prepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosOriginRule) RenderProperties(props *map[string]interface{}) *map[string]interface{} {
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

func (r *jsiiProxy_RosOriginRule) Synthesize(session alicloudroscdkcore.ISynthesisSession) {
	if err := r.validateSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"synthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosOriginRule) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		r,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosOriginRule) Validate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"validate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosOriginRule) ValidateProperties(_properties interface{}) {
	if err := r.validateValidatePropertiesParameters(_properties); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"validateProperties",
		[]interface{}{_properties},
	)
}

