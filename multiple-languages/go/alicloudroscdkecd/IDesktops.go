package alicloudroscdkecd

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkecd/internal"
)

// Represents a `Desktops`.
type IDesktops interface {
	alicloudroscdkcore.IResource
	// Attribute DesktopId: The ID of the cloud desktop.
	//
	// If multiple cloud desktops are created in a call, the
	// IDs of the cloud desktops are returned.
	AttrDesktopId() interface{}
	// Attribute OrderId: The ID of the order.
	//
	// Note This parameter is returned only when the ChargeType parameter is set to PrePaid.
	AttrOrderId() interface{}
	Props() *DesktopsProps
}

// The jsii proxy for IDesktops
type jsiiProxy_IDesktops struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IDesktops) AttrDesktopId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDesktopId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDesktops) AttrOrderId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrOrderId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDesktops) Props() *DesktopsProps {
	var returns *DesktopsProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

