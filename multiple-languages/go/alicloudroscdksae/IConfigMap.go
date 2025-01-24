package alicloudroscdksae

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdksae/internal"
)

// Represents a `ConfigMap`.
type IConfigMap interface {
	alicloudroscdkcore.IResource
	// Attribute ConfigMapId: The ID of the config map.
	AttrConfigMapId() interface{}
	// Attribute NamespaceId: The ID of the namespace to which this config map instance belongs.
	AttrNamespaceId() interface{}
	Props() *ConfigMapProps
}

// The jsii proxy for IConfigMap
type jsiiProxy_IConfigMap struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IConfigMap) AttrConfigMapId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrConfigMapId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IConfigMap) AttrNamespaceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNamespaceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IConfigMap) Props() *ConfigMapProps {
	var returns *ConfigMapProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

