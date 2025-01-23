package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkdbs/datasource/internal"
)

// Represents a `BackupPlans`.
type IBackupPlans interface {
	alicloudroscdkcore.IResource
	// Attribute BackupPlanIds: The list of backup plan IDs.
	AttrBackupPlanIds() interface{}
	// Attribute BackupPlans: The list of backup plans.
	AttrBackupPlans() interface{}
	Props() *BackupPlansProps
}

// The jsii proxy for IBackupPlans
type jsiiProxy_IBackupPlans struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IBackupPlans) AttrBackupPlanIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrBackupPlanIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBackupPlans) AttrBackupPlans() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrBackupPlans",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBackupPlans) Props() *BackupPlansProps {
	var returns *BackupPlansProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

