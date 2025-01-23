package alicloudroscdkconfig

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkconfig/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `Rule`.
type IRule interface {
	alicloudroscdkcore.IResource
	// Attribute ConfigRuleArn: config rule arn.
	AttrConfigRuleArn() interface{}
	// Attribute ConfigRuleId: The ID of the rule.
	AttrConfigRuleId() interface{}
	// Attribute ConfigRuleTriggerTypes: The trigger type of the rule.
	//
	// Valid values:  ConfigurationItemChangeNotification: The rule is triggered upon configuration changes. ScheduledNotification: The rule is triggered as scheduled.
	AttrConfigRuleTriggerTypes() interface{}
	// Attribute Description: The description of the rule.
	AttrDescription() interface{}
	// Attribute EventSource: The event source of the rule.
	AttrEventSource() interface{}
	// Attribute ExcludeResourceIdsScope: The rule monitors excluded resource IDs, multiple of which are separated by commas, only applies to rules created based on managed rules, , custom rule this field is empty.
	AttrExcludeResourceIdsScope() interface{}
	// Attribute InputParameters: The settings of the input parameters for the rule.
	AttrInputParameters() interface{}
	// Attribute MaximumExecutionFrequency: The frequency of the compliance evaluations.
	//
	// Valid values:  One_Hour Three_Hours Six_Hours Twelve_Hours TwentyFour_Hours.
	AttrMaximumExecutionFrequency() interface{}
	// Attribute RegionIdsScope: The rule monitors region IDs, separated by commas, only applies to rules created based on managed rules.
	AttrRegionIdsScope() interface{}
	// Attribute ResourceGroupIdsScope: The rule monitors resource group IDs, separated by commas, only applies to rules created based on managed rules.
	AttrResourceGroupIdsScope() interface{}
	// Attribute ResourceTypesScope: The types of the resources to be evaluated against the rule.
	AttrResourceTypesScope() interface{}
	// Attribute RiskLevel: The risk level of the resources that are not compliant with the rule.
	//
	// Valid values:  1: critical 2: warning 3: info.
	AttrRiskLevel() interface{}
	// Attribute RuleName: The name of the rule.
	AttrRuleName() interface{}
	// Attribute SourceIdentifier: The identifier of the rule.
	//
	// For a managed rule, the value is the name of the managed rule. For a custom rule, the value is the ARN of the custom rule
	AttrSourceIdentifier() interface{}
	// Attribute SourceOwner: Specifies whether you or Alibaba Cloud owns and manages the rule.
	//
	// Valid values:  CUSTOM_FC: The rule is a custom rule and you own the rule. ALIYUN: The rule is a managed rule and Alibaba Cloud owns the rule
	AttrSourceOwner() interface{}
	// Attribute TagKeyScope: The rule monitors the tag key, only applies to rules created based on managed rules.
	AttrTagKeyScope() interface{}
	// Attribute TagValueScope: The rule monitors the tag value, only applies to rules created based on managed rules.
	AttrTagValueScope() interface{}
	Props() *RuleProps
}

// The jsii proxy for IRule
type jsiiProxy_IRule struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IRule) AttrConfigRuleArn() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrConfigRuleArn",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRule) AttrConfigRuleId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrConfigRuleId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRule) AttrConfigRuleTriggerTypes() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrConfigRuleTriggerTypes",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRule) AttrDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRule) AttrEventSource() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEventSource",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRule) AttrExcludeResourceIdsScope() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrExcludeResourceIdsScope",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRule) AttrInputParameters() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInputParameters",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRule) AttrMaximumExecutionFrequency() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMaximumExecutionFrequency",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRule) AttrRegionIdsScope() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRegionIdsScope",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRule) AttrResourceGroupIdsScope() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResourceGroupIdsScope",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRule) AttrResourceTypesScope() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResourceTypesScope",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRule) AttrRiskLevel() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRiskLevel",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRule) AttrRuleName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRuleName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRule) AttrSourceIdentifier() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSourceIdentifier",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRule) AttrSourceOwner() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSourceOwner",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRule) AttrTagKeyScope() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTagKeyScope",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRule) AttrTagValueScope() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTagValueScope",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRule) Props() *RuleProps {
	var returns *RuleProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

