package alicloudroscdksls

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdksls/internal"
)

// Represents a `Audit`.
type IAudit interface {
	alicloudroscdkcore.IResource
	// Attribute DisplayName: Name of SLS log audit.
	AttrDisplayName() interface{}
	Props() *AuditProps
}

// The jsii proxy for IAudit
type jsiiProxy_IAudit struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IAudit) AttrDisplayName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDisplayName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAudit) Props() *AuditProps {
	var returns *AuditProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

