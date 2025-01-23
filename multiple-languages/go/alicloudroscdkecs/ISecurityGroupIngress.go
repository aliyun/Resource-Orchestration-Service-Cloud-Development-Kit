package alicloudroscdkecs

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkecs/internal"
)

// Represents a `SecurityGroupIngress`.
type ISecurityGroupIngress interface {
	alicloudroscdkcore.IResource
	Props() *SecurityGroupIngressProps
}

// The jsii proxy for ISecurityGroupIngress
type jsiiProxy_ISecurityGroupIngress struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ISecurityGroupIngress) Props() *SecurityGroupIngressProps {
	var returns *SecurityGroupIngressProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

