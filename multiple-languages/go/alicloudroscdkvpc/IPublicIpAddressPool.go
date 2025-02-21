package alicloudroscdkvpc

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkvpc/internal"
)

// Represents a `PublicIpAddressPool`.
type IPublicIpAddressPool interface {
	alicloudroscdkcore.IResource
	// Attribute PublicIpAddressPoolId: Example ID of the IP address pool.
	AttrPublicIpAddressPoolId() interface{}
	Props() *PublicIpAddressPoolProps
}

// The jsii proxy for IPublicIpAddressPool
type jsiiProxy_IPublicIpAddressPool struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IPublicIpAddressPool) AttrPublicIpAddressPoolId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPublicIpAddressPoolId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPublicIpAddressPool) Props() *PublicIpAddressPoolProps {
	var returns *PublicIpAddressPoolProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

