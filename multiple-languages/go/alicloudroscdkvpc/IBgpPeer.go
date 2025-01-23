package alicloudroscdkvpc

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkvpc/internal"
)

// Represents a `BgpPeer`.
type IBgpPeer interface {
	alicloudroscdkcore.IResource
	// Attribute BgpPeerId: The ID of the BGP peer.
	AttrBgpPeerId() interface{}
	Props() *BgpPeerProps
}

// The jsii proxy for IBgpPeer
type jsiiProxy_IBgpPeer struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IBgpPeer) AttrBgpPeerId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrBgpPeerId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBgpPeer) Props() *BgpPeerProps {
	var returns *BgpPeerProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

