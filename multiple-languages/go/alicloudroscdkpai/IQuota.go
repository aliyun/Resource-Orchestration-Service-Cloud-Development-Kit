package alicloudroscdkpai

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkpai/internal"
)

// Represents a `Quota`.
type IQuota interface {
	alicloudroscdkcore.IResource
	// Attribute QuotaId: The ID of the quota.
	AttrQuotaId() interface{}
	Props() *QuotaProps
}

// The jsii proxy for IQuota
type jsiiProxy_IQuota struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IQuota) AttrQuotaId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrQuotaId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IQuota) Props() *QuotaProps {
	var returns *QuotaProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

