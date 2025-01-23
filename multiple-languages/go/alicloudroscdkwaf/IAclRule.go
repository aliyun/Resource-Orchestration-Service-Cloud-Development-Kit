package alicloudroscdkwaf

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkwaf/internal"
)

// Represents a `AclRule`.
type IAclRule interface {
	alicloudroscdkcore.IResource
	Props() *AclRuleProps
}

// The jsii proxy for IAclRule
type jsiiProxy_IAclRule struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IAclRule) Props() *AclRuleProps {
	var returns *AclRuleProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

