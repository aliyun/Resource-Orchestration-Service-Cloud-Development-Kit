package alicloudroscdknas

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdknas/internal"
)

// Represents a `DataFlow`.
type IDataFlow interface {
	alicloudroscdkcore.IResource
	// Attribute DataFlowId: Data flow ID.
	AttrDataFlowId() interface{}
	// Attribute FileSystemId: File system ID.
	AttrFileSystemId() interface{}
	Props() *DataFlowProps
}

// The jsii proxy for IDataFlow
type jsiiProxy_IDataFlow struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IDataFlow) AttrDataFlowId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDataFlowId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDataFlow) AttrFileSystemId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrFileSystemId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDataFlow) Props() *DataFlowProps {
	var returns *DataFlowProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

