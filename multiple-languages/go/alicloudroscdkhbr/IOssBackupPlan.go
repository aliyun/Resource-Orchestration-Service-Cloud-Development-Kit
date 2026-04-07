package alicloudroscdkhbr

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkhbr/internal"
)

// Represents a `OssBackupPlan`.
type IOssBackupPlan interface {
	alicloudroscdkcore.IResource
	// Attribute PlanId: The ID of the backup plan.
	AttrPlanId() interface{}
	Props() *OssBackupPlanProps
}

// The jsii proxy for IOssBackupPlan
type jsiiProxy_IOssBackupPlan struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IOssBackupPlan) AttrPlanId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPlanId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOssBackupPlan) Props() *OssBackupPlanProps {
	var returns *OssBackupPlanProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

