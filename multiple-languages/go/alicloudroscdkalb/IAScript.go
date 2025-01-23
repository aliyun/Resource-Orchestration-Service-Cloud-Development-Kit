package alicloudroscdkalb

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkalb/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `AScript`.
type IAScript interface {
	alicloudroscdkcore.IResource
	// Attribute AScriptId: The AScript rule ID.
	AttrAScriptId() interface{}
	Props() *AScriptProps
}

// The jsii proxy for IAScript
type jsiiProxy_IAScript struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IAScript) AttrAScriptId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAScriptId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAScript) Props() *AScriptProps {
	var returns *AScriptProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

