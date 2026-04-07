package alicloudroscdkvpc

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkvpc/internal"
)

// Represents a `IpamPool`.
type IIpamPool interface {
	alicloudroscdkcore.IResource
	// Attribute IpamPoolId: The ID of the IPAM pool.
	AttrIpamPoolId() interface{}
	Props() *IpamPoolProps
}

// The jsii proxy for IIpamPool
type jsiiProxy_IIpamPool struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IIpamPool) AttrIpamPoolId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIpamPoolId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IIpamPool) Props() *IpamPoolProps {
	var returns *IpamPoolProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

