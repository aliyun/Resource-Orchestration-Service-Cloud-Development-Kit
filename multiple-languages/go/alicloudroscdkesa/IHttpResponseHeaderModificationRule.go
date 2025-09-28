package alicloudroscdkesa

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkesa/internal"
)

// Represents a `HttpResponseHeaderModificationRule`.
type IHttpResponseHeaderModificationRule interface {
	alicloudroscdkcore.IResource
	// Attribute ConfigId: Config Id.
	AttrConfigId() interface{}
	// Attribute ConfigType: The configuration type.
	AttrConfigType() interface{}
	// Attribute ResponseHeaderModification: Modify response headers, supporting add, delete, and modify operations.
	AttrResponseHeaderModification() interface{}
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
	Props() *HttpResponseHeaderModificationRuleProps
}

// The jsii proxy for IHttpResponseHeaderModificationRule
type jsiiProxy_IHttpResponseHeaderModificationRule struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IHttpResponseHeaderModificationRule) AttrConfigId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrConfigId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHttpResponseHeaderModificationRule) AttrConfigType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrConfigType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHttpResponseHeaderModificationRule) AttrResponseHeaderModification() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResponseHeaderModification",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHttpResponseHeaderModificationRule) AttrRule() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRule",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHttpResponseHeaderModificationRule) AttrRuleEnable() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRuleEnable",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHttpResponseHeaderModificationRule) AttrRuleName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRuleName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHttpResponseHeaderModificationRule) AttrSequence() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSequence",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHttpResponseHeaderModificationRule) AttrSiteVersion() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSiteVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHttpResponseHeaderModificationRule) Props() *HttpResponseHeaderModificationRuleProps {
	var returns *HttpResponseHeaderModificationRuleProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

