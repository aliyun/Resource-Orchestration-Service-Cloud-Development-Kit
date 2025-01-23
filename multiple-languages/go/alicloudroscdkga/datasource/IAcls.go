package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkga/datasource/internal"
)

// Represents a `Acls`.
type IAcls interface {
	alicloudroscdkcore.IResource
	// Attribute AclIds: The list of acl IDs.
	AttrAclIds() interface{}
	// Attribute Acls: The list of acls.
	AttrAcls() interface{}
	Props() *AclsProps
}

// The jsii proxy for IAcls
type jsiiProxy_IAcls struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IAcls) AttrAclIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAclIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAcls) AttrAcls() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAcls",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAcls) Props() *AclsProps {
	var returns *AclsProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

