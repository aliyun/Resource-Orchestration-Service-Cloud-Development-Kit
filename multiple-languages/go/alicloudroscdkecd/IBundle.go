package alicloudroscdkecd

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkecd/internal"
)

// Represents a `Bundle`.
type IBundle interface {
	alicloudroscdkcore.IResource
	// Attribute BundleId: Desktop bundle ID.
	AttrBundleId() interface{}
	Props() *BundleProps
}

// The jsii proxy for IBundle
type jsiiProxy_IBundle struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IBundle) AttrBundleId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrBundleId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBundle) Props() *BundleProps {
	var returns *BundleProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

