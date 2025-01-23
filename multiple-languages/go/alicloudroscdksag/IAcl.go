package alicloudroscdksag

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdksag/internal"
)

// Represents a `ACL`.
type IAcl interface {
	alicloudroscdkcore.IResource
	// Attribute AclId: Access control set ID.
	AttrAclId() interface{}
	Props() *ACLProps
}

// The jsii proxy for IAcl
type jsiiProxy_IAcl struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IAcl) AttrAclId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAclId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAcl) Props() *ACLProps {
	var returns *ACLProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

