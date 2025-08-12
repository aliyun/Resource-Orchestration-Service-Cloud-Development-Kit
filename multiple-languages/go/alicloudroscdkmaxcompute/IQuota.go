package alicloudroscdkmaxcompute

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkmaxcompute/internal"
)

// Represents a `Quota`.
type IQuota interface {
	alicloudroscdkcore.IResource
	// Attribute DefaultSubQuotaNickname: The default sub quota nickname of the odps quota instance.
	AttrDefaultSubQuotaNickname() interface{}
	// Attribute Nickname: The nickname of the odps quota instance.
	AttrNickname() interface{}
	Props() *QuotaProps
}

// The jsii proxy for IQuota
type jsiiProxy_IQuota struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IQuota) AttrDefaultSubQuotaNickname() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDefaultSubQuotaNickname",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IQuota) AttrNickname() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNickname",
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

