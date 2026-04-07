package alicloudroscdkhbr

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkhbr/internal"
)

// Represents a `NasBackupPlan`.
type INasBackupPlan interface {
	alicloudroscdkcore.IResource
	// Attribute PlanId: The ID of the backup plan.
	AttrPlanId() interface{}
	Props() *NasBackupPlanProps
}

// The jsii proxy for INasBackupPlan
type jsiiProxy_INasBackupPlan struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_INasBackupPlan) AttrPlanId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPlanId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_INasBackupPlan) Props() *NasBackupPlanProps {
	var returns *NasBackupPlanProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

