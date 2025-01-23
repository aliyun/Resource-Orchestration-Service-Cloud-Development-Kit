package alicloudroscdkecs

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkecs/internal"
)

// Represents a `ForwardEntry`.
type IForwardEntry interface {
	alicloudroscdkcore.IResource
	// Attribute ForwardEntryId: The id of created forward entry.
	AttrForwardEntryId() interface{}
	Props() *ForwardEntryProps
}

// The jsii proxy for IForwardEntry
type jsiiProxy_IForwardEntry struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IForwardEntry) AttrForwardEntryId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrForwardEntryId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IForwardEntry) Props() *ForwardEntryProps {
	var returns *ForwardEntryProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

