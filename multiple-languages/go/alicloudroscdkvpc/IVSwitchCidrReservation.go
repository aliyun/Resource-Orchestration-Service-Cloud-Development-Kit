package alicloudroscdkvpc

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkvpc/internal"
)

// Represents a `VSwitchCidrReservation`.
type IVSwitchCidrReservation interface {
	alicloudroscdkcore.IResource
	// Attribute VSwitchCidrReservationId: The ID of the reserved CIDR block.
	AttrVSwitchCidrReservationId() interface{}
	Props() *VSwitchCidrReservationProps
}

// The jsii proxy for IVSwitchCidrReservation
type jsiiProxy_IVSwitchCidrReservation struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IVSwitchCidrReservation) AttrVSwitchCidrReservationId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVSwitchCidrReservationId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVSwitchCidrReservation) Props() *VSwitchCidrReservationProps {
	var returns *VSwitchCidrReservationProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

