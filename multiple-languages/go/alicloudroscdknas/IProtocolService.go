package alicloudroscdknas

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdknas/internal"
)

// Represents a `ProtocolService`.
type IProtocolService interface {
	alicloudroscdkcore.IResource
	// Attribute FileSystemId: File system ID.
	AttrFileSystemId() interface{}
	// Attribute ProtocolServiceId: Agreement cluster group ID.
	AttrProtocolServiceId() interface{}
	Props() *ProtocolServiceProps
}

// The jsii proxy for IProtocolService
type jsiiProxy_IProtocolService struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IProtocolService) AttrFileSystemId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrFileSystemId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IProtocolService) AttrProtocolServiceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrProtocolServiceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IProtocolService) Props() *ProtocolServiceProps {
	var returns *ProtocolServiceProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

