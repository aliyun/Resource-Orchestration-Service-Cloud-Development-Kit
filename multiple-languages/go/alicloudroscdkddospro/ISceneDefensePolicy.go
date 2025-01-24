package alicloudroscdkddospro

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkddospro/internal"
)

// Represents a `SceneDefensePolicy`.
type ISceneDefensePolicy interface {
	alicloudroscdkcore.IResource
	// Attribute Name: The name of the policy.
	AttrName() interface{}
	Props() *SceneDefensePolicyProps
}

// The jsii proxy for ISceneDefensePolicy
type jsiiProxy_ISceneDefensePolicy struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ISceneDefensePolicy) AttrName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISceneDefensePolicy) Props() *SceneDefensePolicyProps {
	var returns *SceneDefensePolicyProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

