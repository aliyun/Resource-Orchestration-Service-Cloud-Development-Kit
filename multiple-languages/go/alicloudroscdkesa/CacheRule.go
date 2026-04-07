package alicloudroscdkesa

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkesa/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkesa/internal"
	"github.com/aws/constructs-go/constructs/v3"
)

// This class encapsulates and extends the ROS resource type `ALIYUN::ESA::CacheRule`.
type CacheRule interface {
	alicloudroscdkcore.Resource
	ICacheRule
	// Attribute AdditionalCacheablePorts: Enable caching on specified ports.
	AttrAdditionalCacheablePorts() interface{}
	// Attribute BrowserCacheMode: Browser cache mode.
	AttrBrowserCacheMode() interface{}
	// Attribute BrowserCacheTtl: Browser cache expiration time in seconds.
	AttrBrowserCacheTtl() interface{}
	// Attribute BypassCache: Set the bypass cache mode.
	AttrBypassCache() interface{}
	// Attribute CacheDeceptionArmor: Cache deception protection.
	//
	// Used to defend against web cache deception attacks, only the cache content that passes the validation will be cached.
	AttrCacheDeceptionArmor() interface{}
	// Attribute CacheReserveEligibility: Cache retention eligibility.
	//
	// Used to control whether user requests bypass the cache retention node when returning to the origin.
	AttrCacheReserveEligibility() interface{}
	// Attribute CacheRuleId: Cache Rule Id.
	AttrCacheRuleId() interface{}
	// Attribute CheckPresenceCookie: When generating the cache key, check if the cookie exists.
	//
	// If it does, add the cookie name (case-insensitive) to the cache key. Multiple cookie names are supported, separated by spaces.
	AttrCheckPresenceCookie() interface{}
	// Attribute CheckPresenceHeader: When generating the cache key, check if the header exists.
	//
	// If it does, add the header name (case-insensitive) to the cache key. Multiple header names are supported, separated by spaces.
	AttrCheckPresenceHeader() interface{}
	// Attribute ConfigType: Configuration type, which can be used to query global or rule-based configurations.
	AttrConfigType() interface{}
	// Attribute EdgeCacheMode: Edge cache mode.
	AttrEdgeCacheMode() interface{}
	// Attribute EdgeCacheTtl: Edge cache expiration time in seconds.
	AttrEdgeCacheTtl() interface{}
	// Attribute EdgeStatusCodeCacheTtl: Status code cache expiration time in seconds.
	AttrEdgeStatusCodeCacheTtl() interface{}
	// Attribute IncludeCookie: When generating the cache key, add the specified cookie names and their values.
	//
	// Multiple values are supported, separated by spaces.
	AttrIncludeCookie() interface{}
	// Attribute IncludeHeader: When generating the cache key, add the specified header names and their values.
	//
	// Multiple values are supported, separated by spaces.
	AttrIncludeHeader() interface{}
	// Attribute QueryString: Query strings to be reserved or excluded.
	//
	// Multiple values are supported, separated by spaces.
	AttrQueryString() interface{}
	// Attribute QueryStringMode: The processing mode for query strings when generating the cache key.
	AttrQueryStringMode() interface{}
	// Attribute Rule: Rule content, using conditional expressions to match user requests.
	//
	// When adding global configuration, this parameter does not need to be set.
	AttrRule() interface{}
	// Attribute RuleEnable: Rule switch.
	//
	// When adding global configuration, this parameter does not need to be set.
	AttrRuleEnable() interface{}
	// Attribute RuleName: Rule name.
	//
	// When adding global configuration, this parameter does not need to be set.
	AttrRuleName() interface{}
	// Attribute Sequence: Order of rule execution.
	//
	// The smaller the value, the higher the priority for execution.
	AttrSequence() interface{}
	// Attribute ServeStale: Serve stale cache.
	//
	// When enabled, the node can still respond to user requests with expired cached files when the origin server is unavailable.
	AttrServeStale() interface{}
	// Attribute SiteVersion: The version number of the site configuration.
	//
	// For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
	AttrSiteVersion() interface{}
	// Attribute SortQueryStringForCache: Query string sorting, disabled by default.
	AttrSortQueryStringForCache() interface{}
	// Attribute UserDeviceType: When generating the cache key, add the client device type.
	AttrUserDeviceType() interface{}
	// Attribute UserGeo: When generating the cache key, add the client's geographic location.
	AttrUserGeo() interface{}
	// Attribute UserLanguage: When generating cache keys, include the client's language type.
	AttrUserLanguage() interface{}
	EnableResourcePropertyConstraint() *bool
	SetEnableResourcePropertyConstraint(val *bool)
	// The environment this resource belongs to.
	//
	// For resources that are created and managed by the CDK
	// (generally, those created by creating new class instances like Role, Bucket, etc.),
	// this is always the same as the environment of the stack they belong to;
	// however, for imported resources
	// (those obtained from static methods like fromRoleArn, fromBucketName, etc.),
	// that might be different than the stack they were imported into.
	Env() alicloudroscdkcore.IResourceEnvironment
	Id() *string
	SetId(val *string)
	// The construct tree node associated with this construct.
	Node() alicloudroscdkcore.ConstructNode
	// Returns a string-encoded token that resolves to the physical name that should be passed to the ROS resource.
	//
	// This value will resolve to one of the following:
	// - a concrete value (e.g. `"my-awesome-bucket"`)
	// - `undefined`, when a name should be generated by ROS
	// - a concrete name generated automatically during synthesis, in
	//    cross-environment scenarios.
	// Experimental.
	PhysicalName() *string
	Props() *CacheRuleProps
	Ref() *string
	Resource() alicloudroscdkcore.RosResource
	SetResource(val alicloudroscdkcore.RosResource)
	Scope() alicloudroscdkcore.Construct
	SetScope(val alicloudroscdkcore.Construct)
	// The stack in which this resource is defined.
	Stack() alicloudroscdkcore.Stack
	AddCondition(condition alicloudroscdkcore.RosCondition)
	AddCount(count interface{})
	AddDependency(resource alicloudroscdkcore.Resource)
	AddResourceDesc(desc *string)
	ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy)
	FetchCondition() alicloudroscdkcore.RosCondition
	FetchDependency() *[]*string
	FetchResourceDesc() *string
	GeneratePhysicalName() *string
	GetAtt(name *string) alicloudroscdkcore.IResolvable
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
	// Perform final modifications before synthesis.
	//
	// This method can be implemented by derived constructs in order to perform
	// final changes before synthesis. prepare() will be called after child
	// constructs have been prepared.
	//
	// This is an advanced framework feature. Only use this if you
	// understand the implications.
	Prepare()
	SetMetadata(key *string, value interface{})
	// Allows this construct to emit artifacts into the cloud assembly during synthesis.
	//
	// This method is usually implemented by framework-level constructs such as `Stack` and `Asset`
	// as they participate in synthesizing the cloud assembly.
	Synthesize(session alicloudroscdkcore.ISynthesisSession)
	// Returns a string representation of this construct.
	ToString() *string
	// Validate the current construct.
	//
	// This method can be implemented by derived constructs in order to perform
	// validation logic. It is called on all constructs before synthesis.
	//
	// Returns: An array of validation error messages, or an empty array if the construct is valid.
	Validate() *[]*string
}

// The jsii proxy struct for CacheRule
type jsiiProxy_CacheRule struct {
	internal.Type__alicloudroscdkcoreResource
	jsiiProxy_ICacheRule
}

func (j *jsiiProxy_CacheRule) AttrAdditionalCacheablePorts() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAdditionalCacheablePorts",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_CacheRule) AttrBrowserCacheMode() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrBrowserCacheMode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_CacheRule) AttrBrowserCacheTtl() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrBrowserCacheTtl",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_CacheRule) AttrBypassCache() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrBypassCache",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_CacheRule) AttrCacheDeceptionArmor() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCacheDeceptionArmor",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_CacheRule) AttrCacheReserveEligibility() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCacheReserveEligibility",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_CacheRule) AttrCacheRuleId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCacheRuleId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_CacheRule) AttrCheckPresenceCookie() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCheckPresenceCookie",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_CacheRule) AttrCheckPresenceHeader() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCheckPresenceHeader",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_CacheRule) AttrConfigType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrConfigType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_CacheRule) AttrEdgeCacheMode() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEdgeCacheMode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_CacheRule) AttrEdgeCacheTtl() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEdgeCacheTtl",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_CacheRule) AttrEdgeStatusCodeCacheTtl() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEdgeStatusCodeCacheTtl",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_CacheRule) AttrIncludeCookie() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIncludeCookie",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_CacheRule) AttrIncludeHeader() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIncludeHeader",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_CacheRule) AttrQueryString() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrQueryString",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_CacheRule) AttrQueryStringMode() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrQueryStringMode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_CacheRule) AttrRule() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRule",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_CacheRule) AttrRuleEnable() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRuleEnable",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_CacheRule) AttrRuleName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRuleName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_CacheRule) AttrSequence() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSequence",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_CacheRule) AttrServeStale() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrServeStale",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_CacheRule) AttrSiteVersion() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSiteVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_CacheRule) AttrSortQueryStringForCache() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSortQueryStringForCache",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_CacheRule) AttrUserDeviceType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrUserDeviceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_CacheRule) AttrUserGeo() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrUserGeo",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_CacheRule) AttrUserLanguage() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrUserLanguage",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_CacheRule) EnableResourcePropertyConstraint() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"enableResourcePropertyConstraint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_CacheRule) Env() alicloudroscdkcore.IResourceEnvironment {
	var returns alicloudroscdkcore.IResourceEnvironment
	_jsii_.Get(
		j,
		"env",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_CacheRule) Id() *string {
	var returns *string
	_jsii_.Get(
		j,
		"id",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_CacheRule) Node() alicloudroscdkcore.ConstructNode {
	var returns alicloudroscdkcore.ConstructNode
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_CacheRule) PhysicalName() *string {
	var returns *string
	_jsii_.Get(
		j,
		"physicalName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_CacheRule) Props() *CacheRuleProps {
	var returns *CacheRuleProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_CacheRule) Ref() *string {
	var returns *string
	_jsii_.Get(
		j,
		"ref",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_CacheRule) Resource() alicloudroscdkcore.RosResource {
	var returns alicloudroscdkcore.RosResource
	_jsii_.Get(
		j,
		"resource",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_CacheRule) Scope() alicloudroscdkcore.Construct {
	var returns alicloudroscdkcore.Construct
	_jsii_.Get(
		j,
		"scope",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_CacheRule) Stack() alicloudroscdkcore.Stack {
	var returns alicloudroscdkcore.Stack
	_jsii_.Get(
		j,
		"stack",
		&returns,
	)
	return returns
}


// Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
func NewCacheRule(scope alicloudroscdkcore.Construct, id *string, props *CacheRuleProps, enableResourcePropertyConstraint *bool) CacheRule {
	_init_.Initialize()

	if err := validateNewCacheRuleParameters(scope, id, props); err != nil {
		panic(err)
	}
	j := jsiiProxy_CacheRule{}

	_jsii_.Create(
		"@alicloud/ros-cdk-esa.CacheRule",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		&j,
	)

	return &j
}

// Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
func NewCacheRule_Override(c CacheRule, scope alicloudroscdkcore.Construct, id *string, props *CacheRuleProps, enableResourcePropertyConstraint *bool) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-esa.CacheRule",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		c,
	)
}

func (j *jsiiProxy_CacheRule)SetEnableResourcePropertyConstraint(val *bool) {
	if err := j.validateSetEnableResourcePropertyConstraintParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableResourcePropertyConstraint",
		val,
	)
}

func (j *jsiiProxy_CacheRule)SetId(val *string) {
	if err := j.validateSetIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"id",
		val,
	)
}

func (j *jsiiProxy_CacheRule)SetResource(val alicloudroscdkcore.RosResource) {
	_jsii_.Set(
		j,
		"resource",
		val,
	)
}

func (j *jsiiProxy_CacheRule)SetScope(val alicloudroscdkcore.Construct) {
	if err := j.validateSetScopeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"scope",
		val,
	)
}

// Return whether the given object is a Construct.
func CacheRule_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateCacheRule_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-esa.CacheRule",
		"isConstruct",
		[]interface{}{x},
		&returns,
	)

	return returns
}

func (c *jsiiProxy_CacheRule) AddCondition(condition alicloudroscdkcore.RosCondition) {
	if err := c.validateAddConditionParameters(condition); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		c,
		"addCondition",
		[]interface{}{condition},
	)
}

func (c *jsiiProxy_CacheRule) AddCount(count interface{}) {
	if err := c.validateAddCountParameters(count); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		c,
		"addCount",
		[]interface{}{count},
	)
}

func (c *jsiiProxy_CacheRule) AddDependency(resource alicloudroscdkcore.Resource) {
	if err := c.validateAddDependencyParameters(resource); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		c,
		"addDependency",
		[]interface{}{resource},
	)
}

func (c *jsiiProxy_CacheRule) AddResourceDesc(desc *string) {
	if err := c.validateAddResourceDescParameters(desc); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		c,
		"addResourceDesc",
		[]interface{}{desc},
	)
}

func (c *jsiiProxy_CacheRule) ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy) {
	if err := c.validateApplyRemovalPolicyParameters(policy); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		c,
		"applyRemovalPolicy",
		[]interface{}{policy},
	)
}

func (c *jsiiProxy_CacheRule) FetchCondition() alicloudroscdkcore.RosCondition {
	var returns alicloudroscdkcore.RosCondition

	_jsii_.Invoke(
		c,
		"fetchCondition",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (c *jsiiProxy_CacheRule) FetchDependency() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		c,
		"fetchDependency",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (c *jsiiProxy_CacheRule) FetchResourceDesc() *string {
	var returns *string

	_jsii_.Invoke(
		c,
		"fetchResourceDesc",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (c *jsiiProxy_CacheRule) GeneratePhysicalName() *string {
	var returns *string

	_jsii_.Invoke(
		c,
		"generatePhysicalName",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (c *jsiiProxy_CacheRule) GetAtt(name *string) alicloudroscdkcore.IResolvable {
	if err := c.validateGetAttParameters(name); err != nil {
		panic(err)
	}
	var returns alicloudroscdkcore.IResolvable

	_jsii_.Invoke(
		c,
		"getAtt",
		[]interface{}{name},
		&returns,
	)

	return returns
}

func (c *jsiiProxy_CacheRule) OnPrepare() {
	_jsii_.InvokeVoid(
		c,
		"onPrepare",
		nil, // no parameters
	)
}

func (c *jsiiProxy_CacheRule) OnSynthesize(session constructs.ISynthesisSession) {
	if err := c.validateOnSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		c,
		"onSynthesize",
		[]interface{}{session},
	)
}

func (c *jsiiProxy_CacheRule) OnValidate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		c,
		"onValidate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (c *jsiiProxy_CacheRule) Prepare() {
	_jsii_.InvokeVoid(
		c,
		"prepare",
		nil, // no parameters
	)
}

func (c *jsiiProxy_CacheRule) SetMetadata(key *string, value interface{}) {
	if err := c.validateSetMetadataParameters(key, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		c,
		"setMetadata",
		[]interface{}{key, value},
	)
}

func (c *jsiiProxy_CacheRule) Synthesize(session alicloudroscdkcore.ISynthesisSession) {
	if err := c.validateSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		c,
		"synthesize",
		[]interface{}{session},
	)
}

func (c *jsiiProxy_CacheRule) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		c,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (c *jsiiProxy_CacheRule) Validate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		c,
		"validate",
		nil, // no parameters
		&returns,
	)

	return returns
}

