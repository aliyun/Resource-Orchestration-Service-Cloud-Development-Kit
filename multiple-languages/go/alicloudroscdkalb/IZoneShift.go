package alicloudroscdkalb

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkalb/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `ZoneShift`.
type IZoneShift interface {
	alicloudroscdkcore.IResource
	Props() *ZoneShiftProps
}

// The jsii proxy for IZoneShift
type jsiiProxy_IZoneShift struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IZoneShift) Props() *ZoneShiftProps {
	var returns *ZoneShiftProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

