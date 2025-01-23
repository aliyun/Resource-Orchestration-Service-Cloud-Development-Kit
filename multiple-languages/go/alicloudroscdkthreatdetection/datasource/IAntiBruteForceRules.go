package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkthreatdetection/datasource/internal"
)

// Represents a `AntiBruteForceRules`.
type IAntiBruteForceRules interface {
	alicloudroscdkcore.IResource
	// Attribute AntiBruteForceRuleIds: The list of anti brute force rule IDs.
	AttrAntiBruteForceRuleIds() interface{}
	// Attribute AntiBruteForceRules: The list of anti brute force rules.
	AttrAntiBruteForceRules() interface{}
	Props() *AntiBruteForceRulesProps
}

// The jsii proxy for IAntiBruteForceRules
type jsiiProxy_IAntiBruteForceRules struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IAntiBruteForceRules) AttrAntiBruteForceRuleIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAntiBruteForceRuleIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAntiBruteForceRules) AttrAntiBruteForceRules() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAntiBruteForceRules",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAntiBruteForceRules) Props() *AntiBruteForceRulesProps {
	var returns *AntiBruteForceRulesProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

