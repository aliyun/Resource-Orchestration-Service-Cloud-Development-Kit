package alicloudroscdkthreatdetection

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkthreatdetection/internal"
)

// Represents a `AntiBruteForceRule`.
type IAntiBruteForceRule interface {
	alicloudroscdkcore.IResource
	// Attribute AntiBruteForceRuleId: The ID of the defense rule.
	AttrAntiBruteForceRuleId() interface{}
	// Attribute AntiBruteForceRuleName: The name of the defense rule.
	AttrAntiBruteForceRuleName() interface{}
	// Attribute DefaultRule: Specifies whether to set the defense rule as the default rule.
	//
	// Valid values:
	// - true: yes
	// - false: no.
	AttrDefaultRule() interface{}
	// Attribute FailCount: The threshold for the number of failed user logins when the brute-force defense rule takes effect.
	AttrFailCount() interface{}
	// Attribute ForbiddenTime: The period of time during which logons from an account are not allowed.
	//
	// Unit: minutes.
	AttrForbiddenTime() interface{}
	// Attribute Span: The period of time during which logon failures from an account are measured.
	//
	// Unit: minutes. If Span is set to 10, the defense rule takes effect when the logon failures measured within 10 minutes reaches the specified threshold. The IP addresses of attackers cannot be used to log on to the server within the specified period of time.
	AttrSpan() interface{}
	// Attribute UuidList: The UUIDs of the server to which the defense rule is applied.
	AttrUuidList() interface{}
	Props() *AntiBruteForceRuleProps
}

// The jsii proxy for IAntiBruteForceRule
type jsiiProxy_IAntiBruteForceRule struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IAntiBruteForceRule) AttrAntiBruteForceRuleId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAntiBruteForceRuleId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAntiBruteForceRule) AttrAntiBruteForceRuleName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAntiBruteForceRuleName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAntiBruteForceRule) AttrDefaultRule() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDefaultRule",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAntiBruteForceRule) AttrFailCount() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrFailCount",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAntiBruteForceRule) AttrForbiddenTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrForbiddenTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAntiBruteForceRule) AttrSpan() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSpan",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAntiBruteForceRule) AttrUuidList() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrUuidList",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAntiBruteForceRule) Props() *AntiBruteForceRuleProps {
	var returns *AntiBruteForceRuleProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

