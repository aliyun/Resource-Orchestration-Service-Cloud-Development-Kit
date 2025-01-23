package alicloudroscdkalb

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkalb/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `HealthCheckTemplate`.
type IHealthCheckTemplate interface {
	alicloudroscdkcore.IResource
	// Attribute HealthCheckTemplateId: The ID of the health check template.
	AttrHealthCheckTemplateId() interface{}
	Props() *HealthCheckTemplateProps
}

// The jsii proxy for IHealthCheckTemplate
type jsiiProxy_IHealthCheckTemplate struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IHealthCheckTemplate) AttrHealthCheckTemplateId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHealthCheckTemplateId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHealthCheckTemplate) Props() *HealthCheckTemplateProps {
	var returns *HealthCheckTemplateProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

