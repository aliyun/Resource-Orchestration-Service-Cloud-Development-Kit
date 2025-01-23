package alicloudroscdkalb

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkalb/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `Acl`.
type IAcl interface {
	alicloudroscdkcore.IResource
	// Attribute AclId: The ID of the ACL.
	AttrAclId() interface{}
	Props() *AclProps
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

func (j *jsiiProxy_IAcl) Props() *AclProps {
	var returns *AclProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

