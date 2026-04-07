package alicloudroscdkdns

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkdns/internal"
)

// Represents a `AddressPool`.
type IAddressPool interface {
	alicloudroscdkcore.IResource
	// Attribute AddrPoolId: The ID of the address pool.
	AttrAddrPoolId() interface{}
	Props() *AddressPoolProps
}

// The jsii proxy for IAddressPool
type jsiiProxy_IAddressPool struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IAddressPool) AttrAddrPoolId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAddrPoolId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAddressPool) Props() *AddressPoolProps {
	var returns *AddressPoolProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

