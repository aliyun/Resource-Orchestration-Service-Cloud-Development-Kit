package alicloudroscdkarms

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkarms/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `AddonRelease`.
type IAddonRelease interface {
	alicloudroscdkcore.IResource
	// Attribute Config: AddonRelease configuration information.
	AttrConfig() interface{}
	// Attribute EnvironmentId: The environment ID.
	AttrEnvironmentId() interface{}
	// Attribute Release: Release information.
	AttrRelease() interface{}
	// Attribute ReleaseName: The name of the add-on.
	AttrReleaseName() interface{}
	Props() *AddonReleaseProps
}

// The jsii proxy for IAddonRelease
type jsiiProxy_IAddonRelease struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IAddonRelease) AttrConfig() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrConfig",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAddonRelease) AttrEnvironmentId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEnvironmentId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAddonRelease) AttrRelease() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRelease",
		&returns,
	)
	return returns
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

