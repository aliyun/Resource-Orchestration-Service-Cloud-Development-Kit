package alicloudroscdkecs

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkecs/internal"
)

// Represents a `SecurityGroupEgress`.
type ISecurityGroupEgress interface {
	alicloudroscdkcore.IResource
	Props() *SecurityGroupEgressProps
}

// The jsii proxy for ISecurityGroupEgress
type jsiiProxy_ISecurityGroupEgress struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ISecurityGroupEgress) Props() *SecurityGroupEgressProps {
	var returns *SecurityGroupEgressProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

