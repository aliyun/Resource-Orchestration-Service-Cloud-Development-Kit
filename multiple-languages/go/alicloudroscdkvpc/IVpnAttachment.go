package alicloudroscdkvpc

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkvpc/internal"
)

// Represents a `VpnAttachment`.
type IVpnAttachment interface {
	alicloudroscdkcore.IResource
	// Attribute InternetIp: The gateway IP address of the IPsec connection.
	AttrInternetIp() interface{}
	// Attribute PeerVpnAttachmentConfig: Peer vpc Attachment config.
	AttrPeerVpnAttachmentConfig() interface{}
	// Attribute VpnAttachmentId: ID of the IPsec attachment.
	AttrVpnAttachmentId() interface{}
	Props() *VpnAttachmentProps
}

// The jsii proxy for IVpnAttachment
type jsiiProxy_IVpnAttachment struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IVpnAttachment) AttrInternetIp() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInternetIp",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVpnAttachment) AttrPeerVpnAttachmentConfig() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPeerVpnAttachmentConfig",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVpnAttachment) AttrVpnAttachmentId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVpnAttachmentId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVpnAttachment) Props() *VpnAttachmentProps {
	var returns *VpnAttachmentProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

