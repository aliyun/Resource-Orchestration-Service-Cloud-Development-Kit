package alicloudroscdkactiontrail

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkactiontrail/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `AdvancedQueryTemplate`.
type IAdvancedQueryTemplate interface {
	alicloudroscdkcore.IResource
	// Attribute TemplateId: The ID of the advanced query template.
	AttrTemplateId() interface{}
	Props() *AdvancedQueryTemplateProps
}

// The jsii proxy for IAdvancedQueryTemplate
type jsiiProxy_IAdvancedQueryTemplate struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IAdvancedQueryTemplate) AttrTemplateId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTemplateId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAdvancedQueryTemplate) Props() *AdvancedQueryTemplateProps {
	var returns *AdvancedQueryTemplateProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

