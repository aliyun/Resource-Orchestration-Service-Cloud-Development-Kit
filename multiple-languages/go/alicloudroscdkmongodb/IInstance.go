package alicloudroscdkmongodb

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkmongodb/internal"
)

// Represents a `Instance`.
type IInstance interface {
	alicloudroscdkcore.IResource
	// Attribute Arn: The Alibaba Cloud Resource Name (ARN).
	AttrArn() interface{}
	// Attribute ConnectionURI: Connection uri.
	AttrConnectionUri() interface{}
	// Attribute DBInstanceId: The instance id of created mongodb instance.
	AttrDbInstanceId() interface{}
	// Attribute DBInstanceStatus: Status of mongodb instance.
	AttrDbInstanceStatus() interface{}
	// Attribute OrderId: Order Id of created instance.
	AttrOrderId() interface{}
	// Attribute ReplicaSetName: Name of replica set.
	AttrReplicaSetName() interface{}
	Props() *InstanceProps
}

// The jsii proxy for IInstance
type jsiiProxy_IInstance struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IInstance) AttrArn() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrArn",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrConnectionUri() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrConnectionUri",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrDbInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrDbInstanceStatus() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbInstanceStatus",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrOrderId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrOrderId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrReplicaSetName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrReplicaSetName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) Props() *InstanceProps {
	var returns *InstanceProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

