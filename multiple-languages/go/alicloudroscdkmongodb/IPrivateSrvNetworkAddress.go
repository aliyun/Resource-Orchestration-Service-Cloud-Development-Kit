package alicloudroscdkmongodb

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkmongodb/internal"
)

// Represents a `PrivateSrvNetworkAddress`.
type IPrivateSrvNetworkAddress interface {
	alicloudroscdkcore.IResource
	// Attribute PrivateSrvConnectionStringUri: Private network SRV highly available connection address.
	AttrPrivateSrvConnectionStringUri() interface{}
	Props() *PrivateSrvNetworkAddressProps
}

// The jsii proxy for IPrivateSrvNetworkAddress
type jsiiProxy_IPrivateSrvNetworkAddress struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IPrivateSrvNetworkAddress) AttrPrivateSrvConnectionStringUri() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPrivateSrvConnectionStringUri",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPrivateSrvNetworkAddress) Props() *PrivateSrvNetworkAddressProps {
	var returns *PrivateSrvNetworkAddressProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

