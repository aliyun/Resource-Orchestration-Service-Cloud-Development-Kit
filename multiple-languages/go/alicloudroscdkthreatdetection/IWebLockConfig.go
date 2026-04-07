package alicloudroscdkthreatdetection

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkthreatdetection/internal"
)

// Represents a `WebLockConfig`.
type IWebLockConfig interface {
	alicloudroscdkcore.IResource
	// Attribute ConfigId: The configuration ID of the protected directory.
	AttrConfigId() interface{}
	// Attribute DefenceMode: The prevention mode.
	AttrDefenceMode() interface{}
	// Attribute Dir: The directory for which you want to enable web tamper proofing.
	AttrDir() interface{}
	// Attribute ExclusiveDir: The directory for which you want to disable web tamper proofing.
	AttrExclusiveDir() interface{}
	// Attribute ExclusiveFile: The file for which you want to disable web tamper proofing.
	AttrExclusiveFile() interface{}
	// Attribute ExclusiveFileType: The type of file for which you want to disable web tamper proofing.
	//
	// Separate multiple types with semicolons (;).
	AttrExclusiveFileType() interface{}
	// Attribute InclusiveFile: The file that has web tamper proofing enabled.
	AttrInclusiveFile() interface{}
	// Attribute InclusiveFileType: The type of file for which you want to enable web tamper proofing.
	//
	// Separate multiple types with semicolons (;).
	AttrInclusiveFileType() interface{}
	// Attribute LocalBackupDir: The local path to the backup files of the protected directory.
	AttrLocalBackupDir() interface{}
	// Attribute Mode: The protection mode of web tamper proofing.
	AttrMode() interface{}
	// Attribute Uuid: The UUID of the server for which you want to add a directory to protect.
	AttrUuid() interface{}
	Props() *WebLockConfigProps
}

// The jsii proxy for IWebLockConfig
type jsiiProxy_IWebLockConfig struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IWebLockConfig) AttrConfigId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrConfigId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IWebLockConfig) AttrDefenceMode() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDefenceMode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IWebLockConfig) AttrDir() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDir",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IWebLockConfig) AttrExclusiveDir() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrExclusiveDir",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IWebLockConfig) AttrExclusiveFile() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrExclusiveFile",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IWebLockConfig) AttrExclusiveFileType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrExclusiveFileType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IWebLockConfig) AttrInclusiveFile() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInclusiveFile",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IWebLockConfig) AttrInclusiveFileType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInclusiveFileType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IWebLockConfig) AttrLocalBackupDir() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLocalBackupDir",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IWebLockConfig) AttrMode() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IWebLockConfig) AttrUuid() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrUuid",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IWebLockConfig) Props() *WebLockConfigProps {
	var returns *WebLockConfigProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

