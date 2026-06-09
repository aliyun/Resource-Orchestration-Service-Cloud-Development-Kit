package alicloudroscdkcms2

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcms2/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `AddonRelease`.
type IAddonRelease interface {
	alicloudroscdkcore.IResource
	// Attribute ReleaseName: The name of the add-on release.
	AttrReleaseName() interface{}
	Props() *AddonReleaseProps
}

// The jsii proxy for IAddonRelease
type jsiiProxy_IAddonRelease struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IAddonRelease) AttrReleaseName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrReleaseName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAddonRelease) Props() *AddonReleaseProps {
	var returns *AddonReleaseProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

