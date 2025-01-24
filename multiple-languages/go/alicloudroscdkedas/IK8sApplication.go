package alicloudroscdkedas

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkedas/internal"
)

// Represents a `K8sApplication`.
type IK8sApplication interface {
	alicloudroscdkcore.IResource
	// Attribute AppId: The ID of the application.
	AttrAppId() interface{}
	// Attribute AppName: The name of the application.
	AttrAppName() interface{}
	// Attribute ChangeOrderId: The ID of the change process.
	AttrChangeOrderId() interface{}
	// Attribute ClusterId: The cluster ID of the application.
	AttrClusterId() interface{}
	// Attribute CsClusterId: The K8s cluster ID of the application.
	AttrCsClusterId() interface{}
	Props() *K8sApplicationProps
}

// The jsii proxy for IK8sApplication
type jsiiProxy_IK8sApplication struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IK8sApplication) AttrAppId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAppId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IK8sApplication) AttrAppName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAppName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IK8sApplication) AttrChangeOrderId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrChangeOrderId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IK8sApplication) AttrClusterId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrClusterId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IK8sApplication) AttrCsClusterId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCsClusterId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IK8sApplication) Props() *K8sApplicationProps {
	var returns *K8sApplicationProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

