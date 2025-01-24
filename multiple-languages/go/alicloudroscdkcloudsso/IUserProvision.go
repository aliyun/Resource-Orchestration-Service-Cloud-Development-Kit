package alicloudroscdkcloudsso

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcloudsso/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `UserProvision`.
type IUserProvision interface {
	alicloudroscdkcore.IResource
	// Attribute UserProvisionId: The ID of the user provisioning.
	AttrUserProvisionId() interface{}
	Props() *UserProvisionProps
}

// The jsii proxy for IUserProvision
type jsiiProxy_IUserProvision struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IUserProvision) AttrUserProvisionId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrUserProvisionId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IUserProvision) Props() *UserProvisionProps {
	var returns *UserProvisionProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

