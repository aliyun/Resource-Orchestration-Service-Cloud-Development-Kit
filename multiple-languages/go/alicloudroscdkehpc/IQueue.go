package alicloudroscdkehpc

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkehpc/internal"
)

// Represents a `Queue`.
type IQueue interface {
	alicloudroscdkcore.IResource
	// Attribute ComputeNodes: The hardware configurations of the compute nodes in the queue.
	AttrComputeNodes() interface{}
	// Attribute CreateTime: Queue creation time.
	AttrCreateTime() interface{}
	// Attribute EnableScaleIn: Specifies whether to enable auto scale-in for the queue.
	AttrEnableScaleIn() interface{}
	// Attribute EnableScaleOut: Specifies whether to enable auto scale-out for the queue.
	AttrEnableScaleOut() interface{}
	// Attribute HostnamePrefix: The hostname prefix of the added compute nodes.
	AttrHostnamePrefix() interface{}
	// Attribute HostnameSuffix: The hostname suffix of the compute nodes in the queue.
	AttrHostnameSuffix() interface{}
	// Attribute InitialCount: The initial number of compute nodes in the queue.
	AttrInitialCount() interface{}
	// Attribute InterConnect: The type of the network for interconnecting compute nodes in the queue.
	AttrInterConnect() interface{}
	// Attribute MaxCount: The maximum number of compute nodes that the queue can contain.
	AttrMaxCount() interface{}
	// Attribute MinCount: The minimum number of compute nodes that the queue must contain.
	AttrMinCount() interface{}
	// Attribute QueueName: The queue name.
	AttrQueueName() interface{}
	// Attribute UpdateTime: Queue update time.
	AttrUpdateTime() interface{}
	// Attribute VSwitchIds: The VSwitches available for use by compute nodes in the queue.
	AttrVSwitchIds() interface{}
	Props() *QueueProps
}

// The jsii proxy for IQueue
type jsiiProxy_IQueue struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IQueue) AttrComputeNodes() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrComputeNodes",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IQueue) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IQueue) AttrEnableScaleIn() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEnableScaleIn",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IQueue) AttrEnableScaleOut() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEnableScaleOut",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IQueue) AttrHostnamePrefix() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHostnamePrefix",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IQueue) AttrHostnameSuffix() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHostnameSuffix",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IQueue) AttrInitialCount() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInitialCount",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IQueue) AttrInterConnect() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInterConnect",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IQueue) AttrMaxCount() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMaxCount",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IQueue) AttrMinCount() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMinCount",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IQueue) AttrQueueName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrQueueName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IQueue) AttrUpdateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrUpdateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IQueue) AttrVSwitchIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVSwitchIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IQueue) Props() *QueueProps {
	var returns *QueueProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

