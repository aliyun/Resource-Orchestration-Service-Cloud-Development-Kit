package alicloudroscdksae

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdksae/internal"
)

// Represents a `Ingress`.
type IIngress interface {
	alicloudroscdkcore.IResource
	// Attribute IngressId: The ID of the routing rule.
	AttrIngressId() interface{}
	Props() *IngressProps
}

// The jsii proxy for IIngress
type jsiiProxy_IIngress struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IIngress) AttrIngressId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIngressId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IIngress) Props() *IngressProps {
	var returns *IngressProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

