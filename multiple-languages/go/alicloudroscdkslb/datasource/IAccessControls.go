package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkslb/datasource/internal"
)

// Represents a `AccessControls`.
type IAccessControls interface {
	alicloudroscdkcore.IResource
	// Attribute AccessControls: The list of access controls.
	AttrAccessControls() interface{}
	// Attribute AclIds: The list of acl IDs.
	AttrAclIds() interface{}
	Props() *AccessControlsProps
}

// The jsii proxy for IAccessControls
type jsiiProxy_IAccessControls struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IAccessControls) AttrAccessControls() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAccessControls",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAccessControls) AttrAclIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAclIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAccessControls) Props() *AccessControlsProps {
	var returns *AccessControlsProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

