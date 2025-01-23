package alicloudroscdkarms

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkarms/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `EnvironmentFeature`.
type IEnvironmentFeature interface {
	alicloudroscdkcore.IResource
	// Attribute EnvironmentId: The environment ID.
	AttrEnvironmentId() interface{}
	// Attribute Feature: The installation information of the feature.
	AttrFeature() interface{}
	// Attribute FeatureName: The name of the feature.
	AttrFeatureName() interface{}
	// Attribute FeatureStatus: The status of the feature.
	AttrFeatureStatus() interface{}
	Props() *EnvironmentFeatureProps
}

// The jsii proxy for IEnvironmentFeature
type jsiiProxy_IEnvironmentFeature struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IEnvironmentFeature) AttrEnvironmentId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEnvironmentId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEnvironmentFeature) AttrFeature() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrFeature",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEnvironmentFeature) AttrFeatureName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrFeatureName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEnvironmentFeature) AttrFeatureStatus() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrFeatureStatus",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEnvironmentFeature) Props() *EnvironmentFeatureProps {
	var returns *EnvironmentFeatureProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

