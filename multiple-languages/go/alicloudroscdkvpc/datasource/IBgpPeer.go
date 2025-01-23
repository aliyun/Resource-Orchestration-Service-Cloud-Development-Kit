package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkvpc/datasource/internal"
)

// Represents a `BgpPeer`.
type IBgpPeer interface {
	alicloudroscdkcore.IResource
	// Attribute AdvertisedRouteCount: The number of advertised routes.
	AttrAdvertisedRouteCount() interface{}
	// Attribute AuthKey: The authentication key of the BGP group.
	AttrAuthKey() interface{}
	// Attribute BfdMultiHop: The Bidirectional Forwarding Detection (BFD) hop count.
	AttrBfdMultiHop() interface{}
	// Attribute BgpGroupId: The ID of the BGP group.
	AttrBgpGroupId() interface{}
	// Attribute BgpPeerId: The ID of the BGP peer.
	AttrBgpPeerId() interface{}
	// Attribute BgpStatus: The status of the BGP connection.
	//
	// Valid values:
	// Idle: The BGP connection is not used.
	// Connect: The BGP connection is used.
	// Active: The BGP connection is available.
	// Established: The BGP connection is established.
	// Down: The BGP connection is unavailable.
	AttrBgpStatus() interface{}
	// Attribute Description: The description of the BGP group.
	AttrDescription() interface{}
	// Attribute EnableBfd: Indicates whether BFD is enabled.
	//
	// Valid values:
	// false
	// true.
	AttrEnableBfd() interface{}
	// Attribute GmtModified: The time when the BGP peer is modified.
	AttrGmtModified() interface{}
	// Attribute Hold: The hold time.
	AttrHold() interface{}
	// Attribute IpVersion: The version of the IP address.
	AttrIpVersion() interface{}
	// Attribute IsFake: Indicates whether a fake autonomous system number (ASN) is used.
	//
	// Valid values:
	// false
	// true.
	AttrIsFake() interface{}
	// Attribute Keepalive: The Keepalive interval.
	AttrKeepalive() interface{}
	// Attribute LocalAsn: The ASN of the device on the Alibaba Cloud side.
	AttrLocalAsn() interface{}
	// Attribute Name: The name of the BGP peer.
	AttrName() interface{}
	// Attribute PeerAsn: The autonomous system number (ASN)of the BGP peer.
	AttrPeerAsn() interface{}
	// Attribute PeerIpAddress: The IP address of the BGP peer.
	AttrPeerIpAddress() interface{}
	// Attribute ReceivedRouteCount: The number of received routes.
	AttrReceivedRouteCount() interface{}
	// Attribute RouteLimit: The maximum number of routes.
	AttrRouteLimit() interface{}
	// Attribute RouterId: The Router ID.
	AttrRouterId() interface{}
	// Attribute Status: The status of the BGP peer.
	//
	// Valid values:
	// Pending
	// Available
	// Modifying
	// Deleting
	// Deleted.
	AttrStatus() interface{}
	Props() *BgpPeerProps
}

// The jsii proxy for IBgpPeer
type jsiiProxy_IBgpPeer struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IBgpPeer) AttrAdvertisedRouteCount() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAdvertisedRouteCount",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBgpPeer) AttrAuthKey() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAuthKey",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBgpPeer) AttrBfdMultiHop() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrBfdMultiHop",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBgpPeer) AttrBgpGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrBgpGroupId",
		&returns,
	)
	return returns
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

func (j *jsiiProxy_IBgpPeer) AttrBgpStatus() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrBgpStatus",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBgpPeer) AttrDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBgpPeer) AttrEnableBfd() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEnableBfd",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBgpPeer) AttrGmtModified() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrGmtModified",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBgpPeer) AttrHold() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHold",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBgpPeer) AttrIpVersion() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIpVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBgpPeer) AttrIsFake() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIsFake",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBgpPeer) AttrKeepalive() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrKeepalive",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBgpPeer) AttrLocalAsn() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLocalAsn",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBgpPeer) AttrName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBgpPeer) AttrPeerAsn() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPeerAsn",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBgpPeer) AttrPeerIpAddress() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPeerIpAddress",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBgpPeer) AttrReceivedRouteCount() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrReceivedRouteCount",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBgpPeer) AttrRouteLimit() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRouteLimit",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBgpPeer) AttrRouterId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRouterId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBgpPeer) AttrStatus() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrStatus",
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

