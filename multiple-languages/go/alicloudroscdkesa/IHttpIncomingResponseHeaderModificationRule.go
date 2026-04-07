package alicloudroscdkesa

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkesa/internal"
)

// Represents a `HttpIncomingResponseHeaderModificationRule`.
type IHttpIncomingResponseHeaderModificationRule interface {
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
	Props() *HttpIncomingResponseHeaderModificationRuleProps
}

// The jsii proxy for IHttpIncomingResponseHeaderModificationRule
type jsiiProxy_IHttpIncomingResponseHeaderModificationRule struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IHttpIncomingResponseHeaderModificationRule) AttrConfigId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrConfigId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHttpIncomingResponseHeaderModificationRule) AttrConfigType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrConfigType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHttpIncomingResponseHeaderModificationRule) AttrResponseHeaderModification() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResponseHeaderModification",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHttpIncomingResponseHeaderModificationRule) AttrRule() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRule",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHttpIncomingResponseHeaderModificationRule) AttrRuleEnable() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRuleEnable",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHttpIncomingResponseHeaderModificationRule) AttrRuleName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRuleName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHttpIncomingResponseHeaderModificationRule) AttrSequence() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSequence",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHttpIncomingResponseHeaderModificationRule) AttrSiteVersion() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSiteVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHttpIncomingResponseHeaderModificationRule) Props() *HttpIncomingResponseHeaderModificationRuleProps {
	var returns *HttpIncomingResponseHeaderModificationRuleProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

