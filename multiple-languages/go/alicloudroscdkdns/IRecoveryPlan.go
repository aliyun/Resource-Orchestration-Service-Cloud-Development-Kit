package alicloudroscdkdns

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkdns/internal"
)

// Represents a `RecoveryPlan`.
type IRecoveryPlan interface {
	alicloudroscdkcore.IResource
	// Attribute RecoveryPlanId: The ID of the recovery plan.
	AttrRecoveryPlanId() interface{}
	Props() *RecoveryPlanProps
}

// The jsii proxy for IRecoveryPlan
type jsiiProxy_IRecoveryPlan struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IRecoveryPlan) AttrRecoveryPlanId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRecoveryPlanId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRecoveryPlan) Props() *RecoveryPlanProps {
	var returns *RecoveryPlanProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

