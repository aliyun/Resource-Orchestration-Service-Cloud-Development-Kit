package alicloudroscdkmongodb

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkmongodb/internal"
)

// Represents a `AuditPolicy`.
type IAuditPolicy interface {
	alicloudroscdkcore.IResource
	// Attribute AuditStatus: Audit state, Valid values: `enable`, `disabled`.
	AttrAuditStatus() interface{}
	Props() *AuditPolicyProps
}

// The jsii proxy for IAuditPolicy
type jsiiProxy_IAuditPolicy struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IAuditPolicy) AttrAuditStatus() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAuditStatus",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAuditPolicy) Props() *AuditPolicyProps {
	var returns *AuditPolicyProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

