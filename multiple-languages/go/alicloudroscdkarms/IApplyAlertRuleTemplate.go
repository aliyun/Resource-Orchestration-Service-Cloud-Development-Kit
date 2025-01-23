package alicloudroscdkarms

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkarms/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `ApplyAlertRuleTemplate`.
type IApplyAlertRuleTemplate interface {
	alicloudroscdkcore.IResource
	Props() *ApplyAlertRuleTemplateProps
}

// The jsii proxy for IApplyAlertRuleTemplate
type jsiiProxy_IApplyAlertRuleTemplate struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IApplyAlertRuleTemplate) Props() *ApplyAlertRuleTemplateProps {
	var returns *ApplyAlertRuleTemplateProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

