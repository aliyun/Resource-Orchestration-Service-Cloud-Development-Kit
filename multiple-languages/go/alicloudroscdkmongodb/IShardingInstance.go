package alicloudroscdkmongodb

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkmongodb/internal"
)

// Represents a `ShardingInstance`.
type IShardingInstance interface {
	alicloudroscdkcore.IResource
	// Attribute Arn: The Alibaba Cloud Resource Name (ARN).
	AttrArn() interface{}
	// Attribute DBInstanceId: The instance id of created mongodb instance.
	AttrDbInstanceId() interface{}
	// Attribute DBInstanceStatus: Status of mongodb instance.
	AttrDbInstanceStatus() interface{}
	// Attribute OrderId: Order Id of created instance.
	AttrOrderId() interface{}
	Props() *ShardingInstanceProps
}

// The jsii proxy for IShardingInstance
type jsiiProxy_IShardingInstance struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IShardingInstance) AttrArn() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrArn",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IShardingInstance) AttrDbInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IShardingInstance) AttrDbInstanceStatus() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbInstanceStatus",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IShardingInstance) AttrOrderId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrOrderId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IShardingInstance) Props() *ShardingInstanceProps {
	var returns *ShardingInstanceProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

