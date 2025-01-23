package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkvpc/datasource/internal"
)

// Represents a `BgpPeers`.
type IBgpPeers interface {
	alicloudroscdkcore.IResource
	// Attribute BgpPeerIds: The list of The BGP peer ids.
	AttrBgpPeerIds() interface{}
	// Attribute BgpPeers: The list of The BGP peers.
	AttrBgpPeers() interface{}
	Props() *BgpPeersProps
}

// The jsii proxy for IBgpPeers
type jsiiProxy_IBgpPeers struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IBgpPeers) AttrBgpPeerIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrBgpPeerIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBgpPeers) AttrBgpPeers() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrBgpPeers",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBgpPeers) Props() *BgpPeersProps {
	var returns *BgpPeersProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

