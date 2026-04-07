package alicloudroscdkesa

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkesa/internal"
)

// Represents a `CustomResponseCodeRule`.
type ICustomResponseCodeRule interface {
	alicloudroscdkcore.IResource
	// Attribute ConfigId: Config Id.
	AttrConfigId() interface{}
	// Attribute ConfigType: The configuration type.
	//
	// You can use this parameter to check the global configuration or rule configuration.
	AttrConfigType() interface{}
	// Attribute PageId: The custom response page.
	AttrPageId() interface{}
	// Attribute ReturnCode: The custom response code.
	AttrReturnCode() interface{}
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
	Props() *CustomResponseCodeRuleProps
}

// The jsii proxy for ICustomResponseCodeRule
type jsiiProxy_ICustomResponseCodeRule struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ICustomResponseCodeRule) AttrConfigId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrConfigId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICustomResponseCodeRule) AttrConfigType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrConfigType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICustomResponseCodeRule) AttrPageId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPageId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICustomResponseCodeRule) AttrReturnCode() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrReturnCode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICustomResponseCodeRule) AttrRule() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRule",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICustomResponseCodeRule) AttrRuleEnable() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRuleEnable",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICustomResponseCodeRule) AttrRuleName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRuleName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICustomResponseCodeRule) AttrSequence() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSequence",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICustomResponseCodeRule) AttrSiteVersion() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSiteVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICustomResponseCodeRule) Props() *CustomResponseCodeRuleProps {
	var returns *CustomResponseCodeRuleProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

