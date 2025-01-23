package alicloudroscdkkafka

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkkafka/internal"
)

// Represents a `Acl`.
type IAcl interface {
	alicloudroscdkcore.IResource
	// Attribute AclResourceType: The resource type.
	AttrAclResourceType() interface{}
	// Attribute InstanceId: The instance ID.
	AttrInstanceId() interface{}
	// Attribute Username: The username.
	AttrUsername() interface{}
	Props() *AclProps
}

// The jsii proxy for IAcl
type jsiiProxy_IAcl struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IAcl) AttrAclResourceType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAclResourceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAcl) AttrInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAcl) AttrUsername() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrUsername",
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

