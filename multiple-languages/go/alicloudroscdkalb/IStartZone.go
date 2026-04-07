package alicloudroscdkalb

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkalb/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `StartZone`.
type IStartZone interface {
	alicloudroscdkcore.IResource
	Props() *StartZoneProps
}

// The jsii proxy for IStartZone
type jsiiProxy_IStartZone struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IStartZone) Props() *StartZoneProps {
	var returns *StartZoneProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

