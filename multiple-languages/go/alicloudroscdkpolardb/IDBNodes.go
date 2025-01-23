package alicloudroscdkpolardb

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkpolardb/internal"
)

// Represents a `DBNodes`.
type IDBNodes interface {
	alicloudroscdkcore.IResource
	// Attribute DBNodeIds: The ID list of added cluster nodes.
	AttrDbNodeIds() interface{}
	// Attribute OrderIds: The order ID list of added cluster nodes.
	AttrOrderIds() interface{}
	Props() *DBNodesProps
}

// The jsii proxy for IDBNodes
type jsiiProxy_IDBNodes struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IDBNodes) AttrDbNodeIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbNodeIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBNodes) AttrOrderIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrOrderIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBNodes) Props() *DBNodesProps {
	var returns *DBNodesProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

