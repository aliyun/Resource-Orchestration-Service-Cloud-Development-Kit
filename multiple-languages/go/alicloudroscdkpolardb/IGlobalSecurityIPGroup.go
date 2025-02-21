package alicloudroscdkpolardb

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkpolardb/internal"
)

// Represents a `GlobalSecurityIPGroup`.
type IGlobalSecurityIPGroup interface {
	alicloudroscdkcore.IResource
	// Attribute GlobalSecurityGroupId: The ID of the IP whitelist template.
	AttrGlobalSecurityGroupId() interface{}
	Props() *GlobalSecurityIPGroupProps
}

// The jsii proxy for IGlobalSecurityIPGroup
type jsiiProxy_IGlobalSecurityIPGroup struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IGlobalSecurityIPGroup) AttrGlobalSecurityGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrGlobalSecurityGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IGlobalSecurityIPGroup) Props() *GlobalSecurityIPGroupProps {
	var returns *GlobalSecurityIPGroupProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

