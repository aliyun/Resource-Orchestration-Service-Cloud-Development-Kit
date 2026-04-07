package alicloudroscdkadb

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkadb/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `BackupPolicy`.
type IBackupPolicy interface {
	alicloudroscdkcore.IResource
	Props() *BackupPolicyProps
}

// The jsii proxy for IBackupPolicy
type jsiiProxy_IBackupPolicy struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IBackupPolicy) Props() *BackupPolicyProps {
	var returns *BackupPolicyProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

