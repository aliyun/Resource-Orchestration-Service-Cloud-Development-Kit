package alicloudroscdkdfs

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkdfs/internal"
)

// Represents a `AccessRule`.
type IAccessRule interface {
	alicloudroscdkcore.IResource
	// Attribute AccessRuleId: The ID of the access_rule.
	AttrAccessRuleId() interface{}
	Props() *AccessRuleProps
}

// The jsii proxy for IAccessRule
type jsiiProxy_IAccessRule struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IAccessRule) AttrAccessRuleId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAccessRuleId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAccessRule) Props() *AccessRuleProps {
	var returns *AccessRuleProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

