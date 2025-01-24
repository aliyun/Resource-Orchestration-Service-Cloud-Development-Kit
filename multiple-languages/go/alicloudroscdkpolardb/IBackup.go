package alicloudroscdkpolardb

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkpolardb/internal"
)

// Represents a `Backup`.
type IBackup interface {
	alicloudroscdkcore.IResource
	// Attribute BackupJobId: The ID of the backup set.
	AttrBackupJobId() interface{}
	// Attribute DBClusterId: The ID of the cluster.
	AttrDbClusterId() interface{}
	Props() *BackupProps
}

// The jsii proxy for IBackup
type jsiiProxy_IBackup struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IBackup) AttrBackupJobId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrBackupJobId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBackup) AttrDbClusterId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbClusterId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBackup) Props() *BackupProps {
	var returns *BackupProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

