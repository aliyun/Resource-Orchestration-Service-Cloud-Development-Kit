package alicloudroscdkmongodb

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkmongodb/internal"
)

// Represents a `ShardingNetworkPrivateAddress`.
type IShardingNetworkPrivateAddress interface {
	alicloudroscdkcore.IResource
	// Attribute CompatibleConnections: The list of connection addresses of the DynamoDB protocol instance.
	AttrCompatibleConnections() interface{}
	// Attribute NetworkAddresses: A list of connection addresses of an instance of the MongoDB protocol type.
	AttrNetworkAddresses() interface{}
	Props() *ShardingNetworkPrivateAddressProps
}

// The jsii proxy for IShardingNetworkPrivateAddress
type jsiiProxy_IShardingNetworkPrivateAddress struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IShardingNetworkPrivateAddress) AttrCompatibleConnections() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCompatibleConnections",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IShardingNetworkPrivateAddress) AttrNetworkAddresses() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNetworkAddresses",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IShardingNetworkPrivateAddress) Props() *ShardingNetworkPrivateAddressProps {
	var returns *ShardingNetworkPrivateAddressProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

