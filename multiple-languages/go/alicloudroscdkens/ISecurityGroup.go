package alicloudroscdkens

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkens/internal"
)

// Represents a `SecurityGroup`.
type ISecurityGroup interface {
	alicloudroscdkcore.IResource
	// Attribute SecurityGroupId: The ID of the security group.
	AttrSecurityGroupId() interface{}
	Props() *SecurityGroupProps
}

// The jsii proxy for ISecurityGroup
type jsiiProxy_ISecurityGroup struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ISecurityGroup) AttrSecurityGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSecurityGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISecurityGroup) Props() *SecurityGroupProps {
	var returns *SecurityGroupProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

