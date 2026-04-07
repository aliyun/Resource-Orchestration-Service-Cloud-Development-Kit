package alicloudroscdkesa

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkesa/internal"
)

// Represents a `RewriteUrlRule`.
type IRewriteUrlRule interface {
	alicloudroscdkcore.IResource
	// Attribute ConfigId: The configuration ID.
	AttrConfigId() interface{}
	// Attribute ConfigType: Configuration type.
	//
	// This parameter determines whether to query global configurations or feature-specific configurations. Note: This logic only takes effect if the functionName parameter is also provided.
	AttrConfigType() interface{}
	// Attribute QueryString: The desired query string to which you want to rewrite the query string in the original request.
	AttrQueryString() interface{}
	// Attribute RewriteQueryStringType: Query string rewrite type.
	AttrRewriteQueryStringType() interface{}
	// Attribute RewriteUriType: URI rewrite type.
	AttrRewriteUriType() interface{}
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
	// Attribute Sequence: Rule execution order.
	//
	// The smaller the value, the higher the priority of execution.
	AttrSequence() interface{}
	// Attribute SiteVersion: Version number of the site configuration.
	//
	// For a site with configuration version management enabled, you can use this parameter to specify the site version in which the configuration takes effect. The default version is 0.
	AttrSiteVersion() interface{}
	// Attribute Uri: The desired URI to which you want to rewrite the path in the original request.
	AttrUri() interface{}
	Props() *RewriteUrlRuleProps
}

// The jsii proxy for IRewriteUrlRule
type jsiiProxy_IRewriteUrlRule struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IRewriteUrlRule) AttrConfigId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrConfigId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRewriteUrlRule) AttrConfigType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrConfigType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRewriteUrlRule) AttrQueryString() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrQueryString",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRewriteUrlRule) AttrRewriteQueryStringType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRewriteQueryStringType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRewriteUrlRule) AttrRewriteUriType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRewriteUriType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRewriteUrlRule) AttrRule() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRule",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRewriteUrlRule) AttrRuleEnable() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRuleEnable",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRewriteUrlRule) AttrRuleName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRuleName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRewriteUrlRule) AttrSequence() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSequence",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRewriteUrlRule) AttrSiteVersion() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSiteVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRewriteUrlRule) AttrUri() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrUri",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRewriteUrlRule) Props() *RewriteUrlRuleProps {
	var returns *RewriteUrlRuleProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

