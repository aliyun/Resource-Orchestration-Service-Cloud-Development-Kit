package alicloudroscdkkafka

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkkafka/internal"
)

// Represents a `SaslUser`.
type ISaslUser interface {
	alicloudroscdkcore.IResource
	// Attribute InstanceId: The instance ID.
	AttrInstanceId() interface{}
	// Attribute Username: The user name of the instance.
	AttrUsername() interface{}
	Props() *SaslUserProps
}

// The jsii proxy for ISaslUser
type jsiiProxy_ISaslUser struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ISaslUser) AttrInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISaslUser) AttrUsername() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrUsername",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISaslUser) Props() *SaslUserProps {
	var returns *SaslUserProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

