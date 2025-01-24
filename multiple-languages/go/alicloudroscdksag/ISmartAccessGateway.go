package alicloudroscdksag

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdksag/internal"
)

// Represents a `SmartAccessGateway`.
type ISmartAccessGateway interface {
	alicloudroscdkcore.IResource
	// Attribute OrderId: The ID of the order.
	AttrOrderId() interface{}
	// Attribute SmartAGId: The ID of the SAG instance.
	AttrSmartAgId() interface{}
	Props() *SmartAccessGatewayProps
}

// The jsii proxy for ISmartAccessGateway
type jsiiProxy_ISmartAccessGateway struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ISmartAccessGateway) AttrOrderId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrOrderId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISmartAccessGateway) AttrSmartAgId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSmartAgId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISmartAccessGateway) Props() *SmartAccessGatewayProps {
	var returns *SmartAccessGatewayProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

