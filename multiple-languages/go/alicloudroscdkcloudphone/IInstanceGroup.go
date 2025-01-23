package alicloudroscdkcloudphone

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcloudphone/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `InstanceGroup`.
type IInstanceGroup interface {
	alicloudroscdkcore.IResource
	// Attribute InstanceIds: instance ids.
	AttrInstanceIds() interface{}
	// Attribute OrderId: oder id.
	AttrOrderId() interface{}
	// Attribute PrivateIps: Private IP address list of created cloud phone instances.
	//
	// Only for VPC instance.
	AttrPrivateIps() interface{}
	// Attribute TradePrice: price.
	AttrTradePrice() interface{}
	Props() *InstanceGroupProps
}

// The jsii proxy for IInstanceGroup
type jsiiProxy_IInstanceGroup struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IInstanceGroup) AttrInstanceIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstanceGroup) AttrOrderId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrOrderId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstanceGroup) AttrPrivateIps() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPrivateIps",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstanceGroup) AttrTradePrice() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTradePrice",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstanceGroup) Props() *InstanceGroupProps {
	var returns *InstanceGroupProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

