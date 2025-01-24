package alicloudroscdkmse

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkmse/internal"
)

// Represents a `EngineNamespace`.
type IEngineNamespace interface {
	alicloudroscdkcore.IResource
	// Attribute NamespaceId: The ID of the namespace.
	AttrNamespaceId() interface{}
	Props() *EngineNamespaceProps
}

// The jsii proxy for IEngineNamespace
type jsiiProxy_IEngineNamespace struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IEngineNamespace) AttrNamespaceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNamespaceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEngineNamespace) Props() *EngineNamespaceProps {
	var returns *EngineNamespaceProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

