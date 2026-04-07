package alicloudroscdkhbr

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkhbr/internal"
)

// Represents a `OtsBackupPlan`.
type IOtsBackupPlan interface {
	alicloudroscdkcore.IResource
	// Attribute PlanId: The ID of the backup plan.
	AttrPlanId() interface{}
	Props() *OtsBackupPlanProps
}

// The jsii proxy for IOtsBackupPlan
type jsiiProxy_IOtsBackupPlan struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IOtsBackupPlan) AttrPlanId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPlanId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOtsBackupPlan) Props() *OtsBackupPlanProps {
	var returns *OtsBackupPlanProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

