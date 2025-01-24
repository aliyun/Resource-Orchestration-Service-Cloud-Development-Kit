package alicloudroscdkcs

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcs/internal"
)

// Represents a `ClusterAddons`.
type IClusterAddons interface {
	alicloudroscdkcore.IResource
	// Attribute ClusterId: The ID of the cluster.
	AttrClusterId() interface{}
	// Attribute WaitUntilData: A list of values for each JsonPath in WaitUntil.
	AttrWaitUntilData() interface{}
	Props() *ClusterAddonsProps
}

// The jsii proxy for IClusterAddons
type jsiiProxy_IClusterAddons struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IClusterAddons) AttrClusterId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrClusterId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IClusterAddons) AttrWaitUntilData() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrWaitUntilData",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IClusterAddons) Props() *ClusterAddonsProps {
	var returns *ClusterAddonsProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

