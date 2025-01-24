package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkarms/datasource/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `Prometheis`.
type IPrometheis interface {
	alicloudroscdkcore.IResource
	// Attribute ClusterIds: The list of cluster IDs.
	AttrClusterIds() interface{}
	// Attribute Prometheis: The list of Prometheis.
	AttrPrometheis() interface{}
	Props() *PrometheisProps
}

// The jsii proxy for IPrometheis
type jsiiProxy_IPrometheis struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IPrometheis) AttrClusterIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrClusterIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPrometheis) AttrPrometheis() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPrometheis",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPrometheis) Props() *PrometheisProps {
	var returns *PrometheisProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

