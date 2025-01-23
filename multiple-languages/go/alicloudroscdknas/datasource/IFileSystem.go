package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdknas/datasource/internal"
)

// Represents a `FileSystem`.
type IFileSystem interface {
	alicloudroscdkcore.IResource
	// Attribute Bandwidth: Maximum file system throughput.
	AttrBandwidth() interface{}
	// Attribute Capacity: File system capacity.
	AttrCapacity() interface{}
	// Attribute CreateTime: CreateTime.
	AttrCreateTime() interface{}
	// Attribute Description: File system description.
	AttrDescription() interface{}
	// Attribute EncryptType: Whether the file system is encrypted.
	AttrEncryptType() interface{}
	// Attribute ExpiredTime: ExpiredTime.
	AttrExpiredTime() interface{}
	// Attribute FileSystemId: The ID of the file system to be created.
	AttrFileSystemId() interface{}
	// Attribute FileSystemType: File system type.
	AttrFileSystemType() interface{}
	// Attribute KmsKeyId: The ID of the KMS key.
	AttrKmsKeyId() interface{}
	// Attribute Ldap: Ldap.
	AttrLdap() interface{}
	// Attribute MeteredSize: MeteredSize.
	AttrMeteredSize() interface{}
	// Attribute PaymentType: ChargeType.
	AttrPaymentType() interface{}
	// Attribute ProtocolType: File transfer protocol type.
	AttrProtocolType() interface{}
	// Attribute StorageType: Storage type.
	AttrStorageType() interface{}
	// Attribute Tags: Tags.
	AttrTags() interface{}
	// Attribute ZoneId: The zone ID.
	AttrZoneId() interface{}
	Props() *FileSystemProps
}

// The jsii proxy for IFileSystem
type jsiiProxy_IFileSystem struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IFileSystem) AttrBandwidth() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrBandwidth",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IFileSystem) AttrCapacity() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCapacity",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IFileSystem) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IFileSystem) AttrDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IFileSystem) AttrEncryptType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEncryptType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IFileSystem) AttrExpiredTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrExpiredTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IFileSystem) AttrFileSystemId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrFileSystemId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IFileSystem) AttrFileSystemType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrFileSystemType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IFileSystem) AttrKmsKeyId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrKmsKeyId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IFileSystem) AttrLdap() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLdap",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IFileSystem) AttrMeteredSize() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMeteredSize",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IFileSystem) AttrPaymentType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPaymentType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IFileSystem) AttrProtocolType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrProtocolType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IFileSystem) AttrStorageType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrStorageType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IFileSystem) AttrTags() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTags",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IFileSystem) AttrZoneId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrZoneId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IFileSystem) Props() *FileSystemProps {
	var returns *FileSystemProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

