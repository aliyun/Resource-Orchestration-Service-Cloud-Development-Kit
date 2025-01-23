package alicloudroscdkcms

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcms/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `DynamicTagGroup`.
type IDynamicTagGroup interface {
	alicloudroscdkcore.IResource
	// Attribute DynamicTagRuleId: Dynamic tag rule ID.
	AttrDynamicTagRuleId() interface{}
	// Attribute TagKey: Tag key.
	AttrTagKey() interface{}
	Props() *DynamicTagGroupProps
}

// The jsii proxy for IDynamicTagGroup
type jsiiProxy_IDynamicTagGroup struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IDynamicTagGroup) AttrDynamicTagRuleId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDynamicTagRuleId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDynamicTagGroup) AttrTagKey() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTagKey",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDynamicTagGroup) Props() *DynamicTagGroupProps {
	var returns *DynamicTagGroupProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

