package alicloudroscdkvpc

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkvpc/internal"
)

// Represents a `AnycastEIP`.
type IAnycastEIP interface {
	alicloudroscdkcore.IResource
	// Attribute AnycastId: Anycast EIP instance ID.
	AttrAnycastId() interface{}
	// Attribute IpAddress: Anycase IP address.
	AttrIpAddress() interface{}
	// Attribute Name: Anycast EIP instance name.
	AttrName() interface{}
	// Attribute OrderId: Order ID.
	AttrOrderId() interface{}
	Props() *AnycastEIPProps
}

// The jsii proxy for IAnycastEIP
type jsiiProxy_IAnycastEIP struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IAnycastEIP) AttrAnycastId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAnycastId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAnycastEIP) AttrIpAddress() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIpAddress",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAnycastEIP) AttrName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAnycastEIP) AttrOrderId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrOrderId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAnycastEIP) Props() *AnycastEIPProps {
	var returns *AnycastEIPProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

