package alicloudroscdkoss

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkoss/internal"
)

// Represents a `ObjectAcl`.
type IObjectAcl interface {
	alicloudroscdkcore.IResource
	Props() *ObjectAclProps
}

// The jsii proxy for IObjectAcl
type jsiiProxy_IObjectAcl struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IObjectAcl) Props() *ObjectAclProps {
	var returns *ObjectAclProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

