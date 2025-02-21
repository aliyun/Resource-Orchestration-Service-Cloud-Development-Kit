package alicloudroscdkslb

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkslb/internal"
)

// Represents a `AccessControl`.
type IAccessControl interface {
	alicloudroscdkcore.IResource
	// Attribute AclId: The ID of the access control list.
	AttrAclId() interface{}
	// Attribute Arn: The Alibaba Cloud Resource Name (ARN).
	AttrArn() interface{}
	Props() *AccessControlProps
}

// The jsii proxy for IAccessControl
type jsiiProxy_IAccessControl struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IAccessControl) AttrAclId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAclId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAccessControl) AttrArn() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrArn",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAccessControl) Props() *AccessControlProps {
	var returns *AccessControlProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

