package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkehpc/datasource/internal"
)

// Represents a `Nodes`.
type INodes interface {
	alicloudroscdkcore.IResource
	// Attribute NodeIds: The list of node IDs.
	AttrNodeIds() interface{}
	// Attribute Nodes: The list of nodes.
	AttrNodes() interface{}
	Props() *NodesProps
}

// The jsii proxy for INodes
type jsiiProxy_INodes struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_INodes) AttrNodeIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNodeIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_INodes) AttrNodes() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNodes",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_INodes) Props() *NodesProps {
	var returns *NodesProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

