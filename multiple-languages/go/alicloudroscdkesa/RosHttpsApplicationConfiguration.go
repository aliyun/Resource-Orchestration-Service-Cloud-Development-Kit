package alicloudroscdkesa

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkesa/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkesa/internal"
	"github.com/aws/constructs-go/constructs/v3"
)

// This class is a base encapsulation around the ROS resource type `ALIYUN::ESA::HttpsApplicationConfiguration`.
type RosHttpsApplicationConfiguration interface {
	alicloudroscdkcore.RosResource
	AltSvc() interface{}
	SetAltSvc(val interface{})
	AltSvcClear() interface{}
	SetAltSvcClear(val interface{})
	AltSvcMa() interface{}
	SetAltSvcMa(val interface{})
	AltSvcPersist() interface{}
	SetAltSvcPersist(val interface{})
	AttrAltSvc() alicloudroscdkcore.IResolvable
	AttrAltSvcClear() alicloudroscdkcore.IResolvable
	AttrAltSvcMa() alicloudroscdkcore.IResolvable
	AttrAltSvcPersist() alicloudroscdkcore.IResolvable
	AttrConfigId() alicloudroscdkcore.IResolvable
	AttrConfigType() alicloudroscdkcore.IResolvable
	AttrHsts() alicloudroscdkcore.IResolvable
	AttrHstsIncludeSubdomains() alicloudroscdkcore.IResolvable
	AttrHstsMaxAge() alicloudroscdkcore.IResolvable
	AttrHstsPreload() alicloudroscdkcore.IResolvable
	AttrHttpsForce() alicloudroscdkcore.IResolvable
	AttrHttpsForceCode() alicloudroscdkcore.IResolvable
	AttrHttpsNoSniDeny() alicloudroscdkcore.IResolvable
	AttrHttpsSniVerify() alicloudroscdkcore.IResolvable
	AttrHttpsSniWhitelist() alicloudroscdkcore.IResolvable
	AttrRule() alicloudroscdkcore.IResolvable
	AttrRuleEnable() alicloudroscdkcore.IResolvable
	AttrRuleName() alicloudroscdkcore.IResolvable
	AttrSequence() alicloudroscdkcore.IResolvable
	AttrSiteVersion() alicloudroscdkcore.IResolvable
	// Returns: the stack trace of the point where this Resource was created from, sourced
	// from the +metadata+ entry typed +aliyun:ros:logicalId+, and with the bottom-most
	// node +internal+ entries filtered.
	CreationStack() *[]*string
	EnableResourcePropertyConstraint() *bool
	SetEnableResourcePropertyConstraint(val *bool)
	Hsts() interface{}
	SetHsts(val interface{})
	HstsIncludeSubdomains() interface{}
	SetHstsIncludeSubdomains(val interface{})
	HstsMaxAge() interface{}
	SetHstsMaxAge(val interface{})
	HstsPreload() interface{}
	SetHstsPreload(val interface{})
	HttpsForce() interface{}
	SetHttpsForce(val interface{})
	HttpsForceCode() interface{}
	SetHttpsForceCode(val interface{})
	HttpsNoSniDeny() interface{}
	SetHttpsNoSniDeny(val interface{})
	HttpsSniVerify() interface{}
	SetHttpsSniVerify(val interface{})
	HttpsSniWhitelist() interface{}
	SetHttpsSniWhitelist(val interface{})
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

// The jsii proxy struct for RosHttpsApplicationConfiguration
type jsiiProxy_RosHttpsApplicationConfiguration struct {
	internal.Type__alicloudroscdkcoreRosResource
}

func (j *jsiiProxy_RosHttpsApplicationConfiguration) AltSvc() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"altSvc",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosHttpsApplicationConfiguration) AltSvcClear() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"altSvcClear",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosHttpsApplicationConfiguration) AltSvcMa() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"altSvcMa",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosHttpsApplicationConfiguration) AltSvcPersist() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"altSvcPersist",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosHttpsApplicationConfiguration) AttrAltSvc() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrAltSvc",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosHttpsApplicationConfiguration) AttrAltSvcClear() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrAltSvcClear",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosHttpsApplicationConfiguration) AttrAltSvcMa() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrAltSvcMa",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosHttpsApplicationConfiguration) AttrAltSvcPersist() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrAltSvcPersist",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosHttpsApplicationConfiguration) AttrConfigId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrConfigId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosHttpsApplicationConfiguration) AttrConfigType() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrConfigType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosHttpsApplicationConfiguration) AttrHsts() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrHsts",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosHttpsApplicationConfiguration) AttrHstsIncludeSubdomains() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrHstsIncludeSubdomains",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosHttpsApplicationConfiguration) AttrHstsMaxAge() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrHstsMaxAge",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosHttpsApplicationConfiguration) AttrHstsPreload() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrHstsPreload",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosHttpsApplicationConfiguration) AttrHttpsForce() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrHttpsForce",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosHttpsApplicationConfiguration) AttrHttpsForceCode() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrHttpsForceCode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosHttpsApplicationConfiguration) AttrHttpsNoSniDeny() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrHttpsNoSniDeny",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosHttpsApplicationConfiguration) AttrHttpsSniVerify() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrHttpsSniVerify",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosHttpsApplicationConfiguration) AttrHttpsSniWhitelist() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrHttpsSniWhitelist",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosHttpsApplicationConfiguration) AttrRule() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrRule",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosHttpsApplicationConfiguration) AttrRuleEnable() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrRuleEnable",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosHttpsApplicationConfiguration) AttrRuleName() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrRuleName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosHttpsApplicationConfiguration) AttrSequence() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrSequence",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosHttpsApplicationConfiguration) AttrSiteVersion() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrSiteVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosHttpsApplicationConfiguration) CreationStack() *[]*string {
	var returns *[]*string
	_jsii_.Get(
		j,
		"creationStack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosHttpsApplicationConfiguration) EnableResourcePropertyConstraint() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"enableResourcePropertyConstraint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosHttpsApplicationConfiguration) Hsts() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"hsts",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosHttpsApplicationConfiguration) HstsIncludeSubdomains() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"hstsIncludeSubdomains",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosHttpsApplicationConfiguration) HstsMaxAge() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"hstsMaxAge",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosHttpsApplicationConfiguration) HstsPreload() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"hstsPreload",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosHttpsApplicationConfiguration) HttpsForce() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"httpsForce",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosHttpsApplicationConfiguration) HttpsForceCode() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"httpsForceCode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosHttpsApplicationConfiguration) HttpsNoSniDeny() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"httpsNoSniDeny",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosHttpsApplicationConfiguration) HttpsSniVerify() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"httpsSniVerify",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosHttpsApplicationConfiguration) HttpsSniWhitelist() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"httpsSniWhitelist",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosHttpsApplicationConfiguration) LogicalId() *string {
	var returns *string
	_jsii_.Get(
		j,
		"logicalId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosHttpsApplicationConfiguration) Node() alicloudroscdkcore.ConstructNode {
	var returns alicloudroscdkcore.ConstructNode
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosHttpsApplicationConfiguration) PaymentType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"paymentType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosHttpsApplicationConfiguration) Ref() *string {
	var returns *string
	_jsii_.Get(
		j,
		"ref",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosHttpsApplicationConfiguration) RosOptions() alicloudroscdkcore.IRosResourceOptions {
	var returns alicloudroscdkcore.IRosResourceOptions
	_jsii_.Get(
		j,
		"rosOptions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosHttpsApplicationConfiguration) RosProperties() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"rosProperties",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosHttpsApplicationConfiguration) RosResourceType() *string {
	var returns *string
	_jsii_.Get(
		j,
		"rosResourceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosHttpsApplicationConfiguration) Rule() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"rule",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosHttpsApplicationConfiguration) RuleEnable() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"ruleEnable",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosHttpsApplicationConfiguration) RuleName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"ruleName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosHttpsApplicationConfiguration) Sequence() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"sequence",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosHttpsApplicationConfiguration) SiteId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"siteId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosHttpsApplicationConfiguration) SiteVersion() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"siteVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosHttpsApplicationConfiguration) Stack() alicloudroscdkcore.Stack {
	var returns alicloudroscdkcore.Stack
	_jsii_.Get(
		j,
		"stack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosHttpsApplicationConfiguration) UpdatedProperites() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"updatedProperites",
		&returns,
	)
	return returns
}


func NewRosHttpsApplicationConfiguration(scope alicloudroscdkcore.Construct, id *string, props *RosHttpsApplicationConfigurationProps, enableResourcePropertyConstraint *bool) RosHttpsApplicationConfiguration {
	_init_.Initialize()

	if err := validateNewRosHttpsApplicationConfigurationParameters(scope, id, props, enableResourcePropertyConstraint); err != nil {
		panic(err)
	}
	j := jsiiProxy_RosHttpsApplicationConfiguration{}

	_jsii_.Create(
		"@alicloud/ros-cdk-esa.RosHttpsApplicationConfiguration",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		&j,
	)

	return &j
}

func NewRosHttpsApplicationConfiguration_Override(r RosHttpsApplicationConfiguration, scope alicloudroscdkcore.Construct, id *string, props *RosHttpsApplicationConfigurationProps, enableResourcePropertyConstraint *bool) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-esa.RosHttpsApplicationConfiguration",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		r,
	)
}

func (j *jsiiProxy_RosHttpsApplicationConfiguration)SetAltSvc(val interface{}) {
	if err := j.validateSetAltSvcParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"altSvc",
		val,
	)
}

func (j *jsiiProxy_RosHttpsApplicationConfiguration)SetAltSvcClear(val interface{}) {
	if err := j.validateSetAltSvcClearParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"altSvcClear",
		val,
	)
}

func (j *jsiiProxy_RosHttpsApplicationConfiguration)SetAltSvcMa(val interface{}) {
	if err := j.validateSetAltSvcMaParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"altSvcMa",
		val,
	)
}

func (j *jsiiProxy_RosHttpsApplicationConfiguration)SetAltSvcPersist(val interface{}) {
	if err := j.validateSetAltSvcPersistParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"altSvcPersist",
		val,
	)
}

func (j *jsiiProxy_RosHttpsApplicationConfiguration)SetEnableResourcePropertyConstraint(val *bool) {
	if err := j.validateSetEnableResourcePropertyConstraintParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableResourcePropertyConstraint",
		val,
	)
}

func (j *jsiiProxy_RosHttpsApplicationConfiguration)SetHsts(val interface{}) {
	if err := j.validateSetHstsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"hsts",
		val,
	)
}

func (j *jsiiProxy_RosHttpsApplicationConfiguration)SetHstsIncludeSubdomains(val interface{}) {
	if err := j.validateSetHstsIncludeSubdomainsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"hstsIncludeSubdomains",
		val,
	)
}

func (j *jsiiProxy_RosHttpsApplicationConfiguration)SetHstsMaxAge(val interface{}) {
	if err := j.validateSetHstsMaxAgeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"hstsMaxAge",
		val,
	)
}

func (j *jsiiProxy_RosHttpsApplicationConfiguration)SetHstsPreload(val interface{}) {
	if err := j.validateSetHstsPreloadParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"hstsPreload",
		val,
	)
}

func (j *jsiiProxy_RosHttpsApplicationConfiguration)SetHttpsForce(val interface{}) {
	if err := j.validateSetHttpsForceParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"httpsForce",
		val,
	)
}

func (j *jsiiProxy_RosHttpsApplicationConfiguration)SetHttpsForceCode(val interface{}) {
	if err := j.validateSetHttpsForceCodeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"httpsForceCode",
		val,
	)
}

func (j *jsiiProxy_RosHttpsApplicationConfiguration)SetHttpsNoSniDeny(val interface{}) {
	if err := j.validateSetHttpsNoSniDenyParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"httpsNoSniDeny",
		val,
	)
}

func (j *jsiiProxy_RosHttpsApplicationConfiguration)SetHttpsSniVerify(val interface{}) {
	if err := j.validateSetHttpsSniVerifyParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"httpsSniVerify",
		val,
	)
}

func (j *jsiiProxy_RosHttpsApplicationConfiguration)SetHttpsSniWhitelist(val interface{}) {
	if err := j.validateSetHttpsSniWhitelistParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"httpsSniWhitelist",
		val,
	)
}

func (j *jsiiProxy_RosHttpsApplicationConfiguration)SetPaymentType(val interface{}) {
	if err := j.validateSetPaymentTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"paymentType",
		val,
	)
}

func (j *jsiiProxy_RosHttpsApplicationConfiguration)SetRule(val interface{}) {
	if err := j.validateSetRuleParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"rule",
		val,
	)
}

func (j *jsiiProxy_RosHttpsApplicationConfiguration)SetRuleEnable(val interface{}) {
	if err := j.validateSetRuleEnableParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"ruleEnable",
		val,
	)
}

func (j *jsiiProxy_RosHttpsApplicationConfiguration)SetRuleName(val interface{}) {
	if err := j.validateSetRuleNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"ruleName",
		val,
	)
}

func (j *jsiiProxy_RosHttpsApplicationConfiguration)SetSequence(val interface{}) {
	if err := j.validateSetSequenceParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"sequence",
		val,
	)
}

func (j *jsiiProxy_RosHttpsApplicationConfiguration)SetSiteId(val interface{}) {
	if err := j.validateSetSiteIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"siteId",
		val,
	)
}

func (j *jsiiProxy_RosHttpsApplicationConfiguration)SetSiteVersion(val interface{}) {
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
func RosHttpsApplicationConfiguration_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosHttpsApplicationConfiguration_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-esa.RosHttpsApplicationConfiguration",
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
func RosHttpsApplicationConfiguration_IsRosElement(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosHttpsApplicationConfiguration_IsRosElementParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-esa.RosHttpsApplicationConfiguration",
		"isRosElement",
		[]interface{}{x},
		&returns,
	)

	return returns
}

// Check whether the given construct is a RosResource.
func RosHttpsApplicationConfiguration_IsRosResource(construct alicloudroscdkcore.IConstruct) *bool {
	_init_.Initialize()

	if err := validateRosHttpsApplicationConfiguration_IsRosResourceParameters(construct); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-esa.RosHttpsApplicationConfiguration",
		"isRosResource",
		[]interface{}{construct},
		&returns,
	)

	return returns
}

func RosHttpsApplicationConfiguration_ROS_RESOURCE_TYPE_NAME() *string {
	_init_.Initialize()
	var returns *string
	_jsii_.StaticGet(
		"@alicloud/ros-cdk-esa.RosHttpsApplicationConfiguration",
		"ROS_RESOURCE_TYPE_NAME",
		&returns,
	)
	return returns
}

func (r *jsiiProxy_RosHttpsApplicationConfiguration) AddCondition(con alicloudroscdkcore.RosCondition) {
	if err := r.validateAddConditionParameters(con); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCondition",
		[]interface{}{con},
	)
}

func (r *jsiiProxy_RosHttpsApplicationConfiguration) AddCount(count interface{}) {
	if err := r.validateAddCountParameters(count); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCount",
		[]interface{}{count},
	)
}

func (r *jsiiProxy_RosHttpsApplicationConfiguration) AddDeletionOverride(path *string) {
	if err := r.validateAddDeletionOverrideParameters(path); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDeletionOverride",
		[]interface{}{path},
	)
}

func (r *jsiiProxy_RosHttpsApplicationConfiguration) AddDependsOn(target alicloudroscdkcore.RosResource) {
	if err := r.validateAddDependsOnParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDependsOn",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosHttpsApplicationConfiguration) AddDesc(desc *string) {
	if err := r.validateAddDescParameters(desc); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDesc",
		[]interface{}{desc},
	)
}

func (r *jsiiProxy_RosHttpsApplicationConfiguration) AddMetaData(key *string, value interface{}) {
	if err := r.validateAddMetaDataParameters(key, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addMetaData",
		[]interface{}{key, value},
	)
}

func (r *jsiiProxy_RosHttpsApplicationConfiguration) AddOverride(path *string, value interface{}) {
	if err := r.validateAddOverrideParameters(path, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addOverride",
		[]interface{}{path, value},
	)
}

func (r *jsiiProxy_RosHttpsApplicationConfiguration) AddPropertyDeletionOverride(propertyPath *string) {
	if err := r.validateAddPropertyDeletionOverrideParameters(propertyPath); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyDeletionOverride",
		[]interface{}{propertyPath},
	)
}

func (r *jsiiProxy_RosHttpsApplicationConfiguration) AddPropertyOverride(propertyPath *string, value interface{}) {
	if err := r.validateAddPropertyOverrideParameters(propertyPath, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyOverride",
		[]interface{}{propertyPath, value},
	)
}

func (r *jsiiProxy_RosHttpsApplicationConfiguration) AddRosDependency(target *string) {
	if err := r.validateAddRosDependencyParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addRosDependency",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosHttpsApplicationConfiguration) ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy, options *alicloudroscdkcore.RemovalPolicyOptions) {
	if err := r.validateApplyRemovalPolicyParameters(options); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"applyRemovalPolicy",
		[]interface{}{policy, options},
	)
}

func (r *jsiiProxy_RosHttpsApplicationConfiguration) FetchCondition() alicloudroscdkcore.RosCondition {
	var returns alicloudroscdkcore.RosCondition

	_jsii_.Invoke(
		r,
		"fetchCondition",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosHttpsApplicationConfiguration) FetchDesc() *string {
	var returns *string

	_jsii_.Invoke(
		r,
		"fetchDesc",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosHttpsApplicationConfiguration) FetchRosDependency() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"fetchRosDependency",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosHttpsApplicationConfiguration) GetAtt(attributeName *string) alicloudroscdkcore.Reference {
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

func (r *jsiiProxy_RosHttpsApplicationConfiguration) OnPrepare() {
	_jsii_.InvokeVoid(
		r,
		"onPrepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosHttpsApplicationConfiguration) OnSynthesize(session constructs.ISynthesisSession) {
	if err := r.validateOnSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"onSynthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosHttpsApplicationConfiguration) OnValidate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"onValidate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosHttpsApplicationConfiguration) OverrideLogicalId(newLogicalId *string) {
	if err := r.validateOverrideLogicalIdParameters(newLogicalId); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"overrideLogicalId",
		[]interface{}{newLogicalId},
	)
}

func (r *jsiiProxy_RosHttpsApplicationConfiguration) Prepare() {
	_jsii_.InvokeVoid(
		r,
		"prepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosHttpsApplicationConfiguration) RenderProperties(props *map[string]interface{}) *map[string]interface{} {
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

func (r *jsiiProxy_RosHttpsApplicationConfiguration) Synthesize(session alicloudroscdkcore.ISynthesisSession) {
	if err := r.validateSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"synthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosHttpsApplicationConfiguration) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		r,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosHttpsApplicationConfiguration) Validate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"validate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosHttpsApplicationConfiguration) ValidateProperties(_properties interface{}) {
	if err := r.validateValidatePropertiesParameters(_properties); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"validateProperties",
		[]interface{}{_properties},
	)
}

