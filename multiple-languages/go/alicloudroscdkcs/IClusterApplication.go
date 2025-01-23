package alicloudroscdkcs

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcs/internal"
)

// Represents a `ClusterApplication`.
type IClusterApplication interface {
	alicloudroscdkcore.IResource
	// Attribute ClusterId: The ID of the cluster.
	AttrClusterId() interface{}
	// Attribute WaitUntilData: A list of values for each JsonPath in WaitUntil.
	AttrWaitUntilData() interface{}
	Props() *ClusterApplicationProps
}

// The jsii proxy for IClusterApplication
type jsiiProxy_IClusterApplication struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IClusterApplication) AttrClusterId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrClusterId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IClusterApplication) AttrWaitUntilData() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrWaitUntilData",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IClusterApplication) Props() *ClusterApplicationProps {
	var returns *ClusterApplicationProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

