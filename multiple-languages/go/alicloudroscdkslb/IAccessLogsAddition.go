package alicloudroscdkslb

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkslb/internal"
)

// Represents a `AccessLogsAddition`.
type IAccessLogsAddition interface {
	alicloudroscdkcore.IResource
	Props() *AccessLogsAdditionProps
}

// The jsii proxy for IAccessLogsAddition
type jsiiProxy_IAccessLogsAddition struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IAccessLogsAddition) Props() *AccessLogsAdditionProps {
	var returns *AccessLogsAdditionProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

