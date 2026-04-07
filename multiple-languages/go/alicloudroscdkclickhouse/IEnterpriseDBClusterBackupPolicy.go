package alicloudroscdkclickhouse

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkclickhouse/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `EnterpriseDBClusterBackupPolicy`.
type IEnterpriseDBClusterBackupPolicy interface {
	alicloudroscdkcore.IResource
	// Attribute BackupRetentionPeriod: The number of days for which you can retain the backup data.
	AttrBackupRetentionPeriod() interface{}
	// Attribute BackupState: Backup switch.
	AttrBackupState() interface{}
	// Attribute PreferredBackupPeriod: The backup cycle.
	AttrPreferredBackupPeriod() interface{}
	// Attribute PreferredBackupTime: The backup time window within which the backup task is performed.
	AttrPreferredBackupTime() interface{}
	Props() *EnterpriseDBClusterBackupPolicyProps
}

// The jsii proxy for IEnterpriseDBClusterBackupPolicy
type jsiiProxy_IEnterpriseDBClusterBackupPolicy struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IEnterpriseDBClusterBackupPolicy) AttrBackupRetentionPeriod() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrBackupRetentionPeriod",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEnterpriseDBClusterBackupPolicy) AttrBackupState() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrBackupState",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEnterpriseDBClusterBackupPolicy) AttrPreferredBackupPeriod() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPreferredBackupPeriod",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEnterpriseDBClusterBackupPolicy) AttrPreferredBackupTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPreferredBackupTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEnterpriseDBClusterBackupPolicy) Props() *EnterpriseDBClusterBackupPolicyProps {
	var returns *EnterpriseDBClusterBackupPolicyProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

