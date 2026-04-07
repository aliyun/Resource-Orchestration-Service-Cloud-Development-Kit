package alicloudroscdkmongodb

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkmongodb/internal"
)

// Represents a `ShardingNetworkPublicAddress`.
type IShardingNetworkPublicAddress interface {
	alicloudroscdkcore.IResource
	// Attribute NetworkAddresses: A list of connection addresses of an instance of the MongoDB protocol type.
	AttrNetworkAddresses() interface{}
	Props() *ShardingNetworkPublicAddressProps
}

// The jsii proxy for IShardingNetworkPublicAddress
type jsiiProxy_IShardingNetworkPublicAddress struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IShardingNetworkPublicAddress) AttrNetworkAddresses() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNetworkAddresses",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IShardingNetworkPublicAddress) Props() *ShardingNetworkPublicAddressProps {
	var returns *ShardingNetworkPublicAddressProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

