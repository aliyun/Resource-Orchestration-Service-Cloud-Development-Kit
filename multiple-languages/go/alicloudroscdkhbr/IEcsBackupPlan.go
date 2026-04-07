package alicloudroscdkhbr

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkhbr/internal"
)

// Represents a `EcsBackupPlan`.
type IEcsBackupPlan interface {
	alicloudroscdkcore.IResource
	// Attribute PlanId: The ID of the backup plan.
	AttrPlanId() interface{}
	Props() *EcsBackupPlanProps
}

// The jsii proxy for IEcsBackupPlan
type jsiiProxy_IEcsBackupPlan struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IEcsBackupPlan) AttrPlanId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPlanId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEcsBackupPlan) Props() *EcsBackupPlanProps {
	var returns *EcsBackupPlanProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

