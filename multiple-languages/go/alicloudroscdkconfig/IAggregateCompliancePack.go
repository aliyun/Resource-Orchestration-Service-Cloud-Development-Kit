package alicloudroscdkconfig

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkconfig/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `AggregateCompliancePack`.
type IAggregateCompliancePack interface {
	alicloudroscdkcore.IResource
	// Attribute CompliancePackId: The ID of the compliance pack id.
	AttrCompliancePackId() interface{}
	Props() *AggregateCompliancePackProps
}

// The jsii proxy for IAggregateCompliancePack
type jsiiProxy_IAggregateCompliancePack struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IAggregateCompliancePack) AttrCompliancePackId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCompliancePackId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAggregateCompliancePack) Props() *AggregateCompliancePackProps {
	var returns *AggregateCompliancePackProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

