package alicloudroscdkpvtz

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkpvtz/internal"
)

// Represents a `UserVpcAuthorization`.
type IUserVpcAuthorization interface {
	alicloudroscdkcore.IResource
	// Attribute AuthorizedUserId: The account ID of the user who authorizes the resource.
	AttrAuthorizedUserId() interface{}
	// Attribute AuthType: Authorization type.
	AttrAuthType() interface{}
	Props() *UserVpcAuthorizationProps
}

// The jsii proxy for IUserVpcAuthorization
type jsiiProxy_IUserVpcAuthorization struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IUserVpcAuthorization) AttrAuthorizedUserId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAuthorizedUserId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IUserVpcAuthorization) AttrAuthType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAuthType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IUserVpcAuthorization) Props() *UserVpcAuthorizationProps {
	var returns *UserVpcAuthorizationProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

