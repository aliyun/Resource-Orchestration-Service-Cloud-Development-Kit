package alicloudroscdkvpc

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkvpc/internal"
)

// Represents a `CommonBandwidthPackageIp`.
type ICommonBandwidthPackageIp interface {
	alicloudroscdkcore.IResource
	// Attribute AllocationIds: All eip allocation ids of common bandwidth package.
	AttrAllocationIds() interface{}
	// Attribute IpAddresses: All eip addresses of common bandwidth package.
	AttrIpAddresses() interface{}
	Props() *CommonBandwidthPackageIpProps
}

// The jsii proxy for ICommonBandwidthPackageIp
type jsiiProxy_ICommonBandwidthPackageIp struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ICommonBandwidthPackageIp) AttrAllocationIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAllocationIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICommonBandwidthPackageIp) AttrIpAddresses() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIpAddresses",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICommonBandwidthPackageIp) Props() *CommonBandwidthPackageIpProps {
	var returns *CommonBandwidthPackageIpProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

