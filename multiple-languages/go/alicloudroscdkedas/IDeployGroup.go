package alicloudroscdkedas

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkedas/internal"
)

// Represents a `DeployGroup`.
type IDeployGroup interface {
	alicloudroscdkcore.IResource
	// Attribute AppId: Application ID.
	AttrAppId() interface{}
	// Attribute GroupName: Deploy group name.
	AttrGroupName() interface{}
	// Attribute Id: Deploy group ID.
	AttrId() interface{}
	Props() *DeployGroupProps
}

// The jsii proxy for IDeployGroup
type jsiiProxy_IDeployGroup struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IDeployGroup) AttrAppId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAppId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDeployGroup) AttrGroupName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrGroupName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDeployGroup) AttrId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDeployGroup) Props() *DeployGroupProps {
	var returns *DeployGroupProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

