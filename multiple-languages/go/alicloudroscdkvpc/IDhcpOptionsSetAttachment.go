package alicloudroscdkvpc

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkvpc/internal"
)

// Represents a `DhcpOptionsSetAttachment`.
type IDhcpOptionsSetAttachment interface {
	alicloudroscdkcore.IResource
	// Attribute DhcpOptionsSetId: The ID of the DHCP options set.
	AttrDhcpOptionsSetId() interface{}
	// Attribute VpcId: The ID of the VPC network.
	AttrVpcId() interface{}
	Props() *DhcpOptionsSetAttachmentProps
}

// The jsii proxy for IDhcpOptionsSetAttachment
type jsiiProxy_IDhcpOptionsSetAttachment struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IDhcpOptionsSetAttachment) AttrDhcpOptionsSetId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDhcpOptionsSetId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDhcpOptionsSetAttachment) AttrVpcId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVpcId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDhcpOptionsSetAttachment) Props() *DhcpOptionsSetAttachmentProps {
	var returns *DhcpOptionsSetAttachmentProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

