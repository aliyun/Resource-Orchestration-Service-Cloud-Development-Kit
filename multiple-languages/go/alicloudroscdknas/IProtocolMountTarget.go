package alicloudroscdknas

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdknas/internal"
)

// Represents a `ProtocolMountTarget`.
type IProtocolMountTarget interface {
	alicloudroscdkcore.IResource
	// Attribute ExportId: The protocol service exports directory ID.
	AttrExportId() interface{}
	// Attribute FileSystemId: File system ID.
	AttrFileSystemId() interface{}
	// Attribute ProtocolMountTargetDomain: The protocol mount target domain.
	AttrProtocolMountTargetDomain() interface{}
	// Attribute ProtocolServiceId: Protocol service ID.
	AttrProtocolServiceId() interface{}
	Props() *ProtocolMountTargetProps
}

// The jsii proxy for IProtocolMountTarget
type jsiiProxy_IProtocolMountTarget struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IProtocolMountTarget) AttrExportId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrExportId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IProtocolMountTarget) AttrFileSystemId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrFileSystemId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IProtocolMountTarget) AttrProtocolMountTargetDomain() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrProtocolMountTargetDomain",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IProtocolMountTarget) AttrProtocolServiceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrProtocolServiceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IProtocolMountTarget) Props() *ProtocolMountTargetProps {
	var returns *ProtocolMountTargetProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

