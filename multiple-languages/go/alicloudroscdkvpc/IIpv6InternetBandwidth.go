package alicloudroscdkvpc

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkvpc/internal"
)

// Represents a `Ipv6InternetBandwidth`.
type IIpv6InternetBandwidth interface {
	alicloudroscdkcore.IResource
	// Attribute InternetBandwidthId: Purchase of public network bandwidth.
	AttrInternetBandwidthId() interface{}
	Props() *Ipv6InternetBandwidthProps
}

// The jsii proxy for IIpv6InternetBandwidth
type jsiiProxy_IIpv6InternetBandwidth struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IIpv6InternetBandwidth) AttrInternetBandwidthId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInternetBandwidthId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IIpv6InternetBandwidth) Props() *Ipv6InternetBandwidthProps {
	var returns *Ipv6InternetBandwidthProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

