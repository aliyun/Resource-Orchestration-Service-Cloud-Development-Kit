package alicloudroscdkacs

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkacs/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `VirtualCapacityReservation`.
type IVirtualCapacityReservation interface {
	alicloudroscdkcore.IResource
	Props() *VirtualCapacityReservationProps
}

// The jsii proxy for IVirtualCapacityReservation
type jsiiProxy_IVirtualCapacityReservation struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IVirtualCapacityReservation) Props() *VirtualCapacityReservationProps {
	var returns *VirtualCapacityReservationProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

