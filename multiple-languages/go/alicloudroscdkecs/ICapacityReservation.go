package alicloudroscdkecs

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkecs/internal"
)

// Represents a `CapacityReservation`.
type ICapacityReservation interface {
	alicloudroscdkcore.IResource
	// Attribute PrivatePoolOptionsId: The ID of the capacity reservation.
	AttrPrivatePoolOptionsId() interface{}
	Props() *CapacityReservationProps
}

// The jsii proxy for ICapacityReservation
type jsiiProxy_ICapacityReservation struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ICapacityReservation) AttrPrivatePoolOptionsId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPrivatePoolOptionsId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICapacityReservation) Props() *CapacityReservationProps {
	var returns *CapacityReservationProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

