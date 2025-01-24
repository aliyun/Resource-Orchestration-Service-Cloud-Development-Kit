package alicloudroscdkbss

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkbss/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `ResourcePackage`.
type IResourcePackage interface {
	alicloudroscdkcore.IResource
	// Attribute InstanceId: The ID of the specified instance.
	AttrInstanceId() interface{}
	// Attribute OrderId: The ID of the specified order.
	AttrOrderId() interface{}
	Props() *ResourcePackageProps
}

// The jsii proxy for IResourcePackage
type jsiiProxy_IResourcePackage struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IResourcePackage) AttrInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IResourcePackage) AttrOrderId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrOrderId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IResourcePackage) Props() *ResourcePackageProps {
	var returns *ResourcePackageProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

