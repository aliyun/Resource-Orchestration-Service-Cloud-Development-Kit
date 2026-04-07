package alicloudroscdkcr

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcr/internal"
)

// Represents a `ScanRule`.
type IScanRule interface {
	alicloudroscdkcore.IResource
	// Attribute CreateTime: Creation time of the scan rule.
	AttrCreateTime() interface{}
	// Attribute InstanceId: ACR Instance ID.
	AttrInstanceId() interface{}
	// Attribute Namespaces: The list of namespaces.
	AttrNamespaces() interface{}
	// Attribute RepoNames: The list of repositories.
	AttrRepoNames() interface{}
	// Attribute RepoTagFilterPattern: The tag that triggers the scan matches the regular expression.
	AttrRepoTagFilterPattern() interface{}
	// Attribute RuleName: The scan rule name.
	AttrRuleName() interface{}
	// Attribute ScanRuleId: The ID of the scan rule.
	AttrScanRuleId() interface{}
	// Attribute ScanScope: The scan scope.
	AttrScanScope() interface{}
	// Attribute ScanType: The scan type.
	AttrScanType() interface{}
	// Attribute TriggerType: Trigger type.
	AttrTriggerType() interface{}
	// Attribute UpdateTime: Change time of the scan rule.
	AttrUpdateTime() interface{}
	Props() *ScanRuleProps
}

// The jsii proxy for IScanRule
type jsiiProxy_IScanRule struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IScanRule) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IScanRule) AttrInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IScanRule) AttrNamespaces() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNamespaces",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IScanRule) AttrRepoNames() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRepoNames",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IScanRule) AttrRepoTagFilterPattern() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRepoTagFilterPattern",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IScanRule) AttrRuleName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRuleName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IScanRule) AttrScanRuleId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrScanRuleId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IScanRule) AttrScanScope() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrScanScope",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IScanRule) AttrScanType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrScanType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IScanRule) AttrTriggerType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTriggerType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IScanRule) AttrUpdateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrUpdateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IScanRule) Props() *ScanRuleProps {
	var returns *ScanRuleProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

