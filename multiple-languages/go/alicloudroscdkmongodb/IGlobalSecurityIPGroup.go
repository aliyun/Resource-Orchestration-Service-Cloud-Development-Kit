package alicloudroscdkmongodb

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkmongodb/internal"
)

// Represents a `GlobalSecurityIPGroup`.
type IGlobalSecurityIPGroup interface {
	alicloudroscdkcore.IResource
	// Attribute GlobalIgName: The name of the IP whitelist template.
	AttrGlobalIgName() interface{}
	// Attribute GlobalSecurityGroupId: The ID of the IP whitelist template.
	AttrGlobalSecurityGroupId() interface{}
	// Attribute GlobalSecurityIpList: The IP address in the whitelist template.
	AttrGlobalSecurityIpList() interface{}
	Props() *GlobalSecurityIPGroupProps
}

// The jsii proxy for IGlobalSecurityIPGroup
type jsiiProxy_IGlobalSecurityIPGroup struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IGlobalSecurityIPGroup) AttrGlobalIgName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrGlobalIgName",
		&returns,
	)
	return returns
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

func (j *jsiiProxy_IGlobalSecurityIPGroup) AttrGlobalSecurityIpList() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrGlobalSecurityIpList",
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

