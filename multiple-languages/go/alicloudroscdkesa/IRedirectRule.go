package alicloudroscdkesa

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkesa/internal"
)

// Represents a `RedirectRule`.
type IRedirectRule interface {
	alicloudroscdkcore.IResource
	// Attribute ConfigId: Config Id.
	AttrConfigId() interface{}
	// Attribute ConfigType: The type of the configuration.
	AttrConfigType() interface{}
	// Attribute ReserveQueryString: Indicates whether the feature of retaining the query string is enabled.
	AttrReserveQueryString() interface{}
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
	// Attribute SiteVersion: The version number of the site configuration.
	//
	// For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
	AttrSiteVersion() interface{}
	// Attribute StatusCode: The response code that you want to use to indicate URL redirection.
	AttrStatusCode() interface{}
	// Attribute TargetUrl: The destination URL to which requests are redirected.
	AttrTargetUrl() interface{}
	// Attribute Type: The redirect type.
	AttrType() interface{}
	Props() *RedirectRuleProps
}

// The jsii proxy for IRedirectRule
type jsiiProxy_IRedirectRule struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IRedirectRule) AttrConfigId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrConfigId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRedirectRule) AttrConfigType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrConfigType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRedirectRule) AttrReserveQueryString() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrReserveQueryString",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRedirectRule) AttrRule() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRule",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRedirectRule) AttrRuleEnable() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRuleEnable",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRedirectRule) AttrRuleName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRuleName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRedirectRule) AttrSequence() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSequence",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRedirectRule) AttrSiteVersion() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSiteVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRedirectRule) AttrStatusCode() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrStatusCode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRedirectRule) AttrTargetUrl() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTargetUrl",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRedirectRule) AttrType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRedirectRule) Props() *RedirectRuleProps {
	var returns *RedirectRuleProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

