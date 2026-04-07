package alicloudroscdkthreatdetection

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkthreatdetection/internal"
)

// Represents a `ClientFileProtect`.
type IClientFileProtect interface {
	alicloudroscdkcore.IResource
	// Attribute AlertLevel: The severity of alerts.
	AttrAlertLevel() interface{}
	// Attribute FileOps: The operations that you want to perform on the files.
	AttrFileOps() interface{}
	// Attribute FilePaths: The paths to the monitored files.
	//
	// Wildcard characters are supported.
	AttrFilePaths() interface{}
	// Attribute Platform: The type of the operating system.
	AttrPlatform() interface{}
	// Attribute ProcPaths: The paths to the monitored processes.
	AttrProcPaths() interface{}
	// Attribute RuleAction: The handling method of the rule.
	AttrRuleAction() interface{}
	// Attribute RuleId: The ID of the rule.
	AttrRuleId() interface{}
	// Attribute RuleName: The name of the rule.
	AttrRuleName() interface{}
	// Attribute SwitchId: The switch ID of the rule.
	AttrSwitchId() interface{}
	Props() *ClientFileProtectProps
}

// The jsii proxy for IClientFileProtect
type jsiiProxy_IClientFileProtect struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IClientFileProtect) AttrAlertLevel() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAlertLevel",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IClientFileProtect) AttrFileOps() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrFileOps",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IClientFileProtect) AttrFilePaths() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrFilePaths",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IClientFileProtect) AttrPlatform() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPlatform",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IClientFileProtect) AttrProcPaths() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrProcPaths",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IClientFileProtect) AttrRuleAction() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRuleAction",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IClientFileProtect) AttrRuleId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRuleId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IClientFileProtect) AttrRuleName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRuleName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IClientFileProtect) AttrSwitchId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSwitchId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IClientFileProtect) Props() *ClientFileProtectProps {
	var returns *ClientFileProtectProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

