package alicloudroscdkasm

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkasm/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `ServiceMesh`.
type IServiceMesh interface {
	alicloudroscdkcore.IResource
	// Attribute ServiceMeshId: The ID of the ASM instance.
	AttrServiceMeshId() interface{}
	Props() *ServiceMeshProps
}

// The jsii proxy for IServiceMesh
type jsiiProxy_IServiceMesh struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IServiceMesh) AttrServiceMeshId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrServiceMeshId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IServiceMesh) Props() *ServiceMeshProps {
	var returns *ServiceMeshProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

