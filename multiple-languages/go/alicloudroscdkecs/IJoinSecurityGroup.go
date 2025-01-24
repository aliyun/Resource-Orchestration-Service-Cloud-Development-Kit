package alicloudroscdkecs

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkecs/internal"
)

// Represents a `JoinSecurityGroup`.
type IJoinSecurityGroup interface {
	alicloudroscdkcore.IResource
	Props() *JoinSecurityGroupProps
}

// The jsii proxy for IJoinSecurityGroup
type jsiiProxy_IJoinSecurityGroup struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IJoinSecurityGroup) Props() *JoinSecurityGroupProps {
	var returns *JoinSecurityGroupProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

