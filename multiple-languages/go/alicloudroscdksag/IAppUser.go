package alicloudroscdksag

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdksag/internal"
)

// Represents a `AppUser`.
type IAppUser interface {
	alicloudroscdkcore.IResource
	// Attribute SmartAGId: The ID of the SAG APP instance.
	AttrSmartAgId() interface{}
	// Attribute UserName: <heat.engine.properties.Schema object at 0x7fa3e6637c50>.
	AttrUserName() interface{}
	Props() *AppUserProps
}

// The jsii proxy for IAppUser
type jsiiProxy_IAppUser struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IAppUser) AttrSmartAgId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSmartAgId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAppUser) AttrUserName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrUserName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAppUser) Props() *AppUserProps {
	var returns *AppUserProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

