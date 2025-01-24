package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcs/datasource/internal"
)

// Represents a `ClusterApplicationResources`.
type IClusterApplicationResources interface {
	alicloudroscdkcore.IResource
	// Attribute Response: Query result of kubernetes resource(s).
	AttrResponse() interface{}
	Props() *ClusterApplicationResourcesProps
}

// The jsii proxy for IClusterApplicationResources
type jsiiProxy_IClusterApplicationResources struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IClusterApplicationResources) AttrResponse() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResponse",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IClusterApplicationResources) Props() *ClusterApplicationResourcesProps {
	var returns *ClusterApplicationResourcesProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

