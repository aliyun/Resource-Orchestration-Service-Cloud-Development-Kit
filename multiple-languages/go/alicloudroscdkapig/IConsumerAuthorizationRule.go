package alicloudroscdkapig

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkapig/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `ConsumerAuthorizationRule`.
type IConsumerAuthorizationRule interface {
	alicloudroscdkcore.IResource
	// Attribute ConsumerAuthorizationRuleId: The ID of the consumer authorization rule.
	AttrConsumerAuthorizationRuleId() interface{}
	Props() *ConsumerAuthorizationRuleProps
}

// The jsii proxy for IConsumerAuthorizationRule
type jsiiProxy_IConsumerAuthorizationRule struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IConsumerAuthorizationRule) AttrConsumerAuthorizationRuleId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrConsumerAuthorizationRuleId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IConsumerAuthorizationRule) Props() *ConsumerAuthorizationRuleProps {
	var returns *ConsumerAuthorizationRuleProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

