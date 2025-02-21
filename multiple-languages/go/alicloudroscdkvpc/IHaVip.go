package alicloudroscdkvpc

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkvpc/internal"
)

// Represents a `HaVip`.
type IHaVip interface {
	alicloudroscdkcore.IResource
	// Attribute Arn: The Alibaba Cloud Resource Name (ARN).
	AttrArn() interface{}
	// Attribute HaVipId: Assigned HaVip ID.
	AttrHaVipId() interface{}
	// Attribute IpAddress: The IP address of the HAVIP.
	AttrIpAddress() interface{}
	Props() *HaVipProps
}

// The jsii proxy for IHaVip
type jsiiProxy_IHaVip struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IHaVip) AttrArn() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrArn",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHaVip) AttrHaVipId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHaVipId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHaVip) AttrIpAddress() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIpAddress",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHaVip) Props() *HaVipProps {
	var returns *HaVipProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

