package alicloudroscdkesa

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkesa/internal"
)

// Represents a `UrlObservation`.
type IUrlObservation interface {
	alicloudroscdkcore.IResource
	// Attribute ConfigId: Config Id.
	AttrConfigId() interface{}
	// Attribute SdkType: SDK integration mode.
	AttrSdkType() interface{}
	// Attribute Url: The URL of the page to monitor.
	AttrUrl() interface{}
	Props() *UrlObservationProps
}

// The jsii proxy for IUrlObservation
type jsiiProxy_IUrlObservation struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IUrlObservation) AttrConfigId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrConfigId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IUrlObservation) AttrSdkType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSdkType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IUrlObservation) AttrUrl() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrUrl",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IUrlObservation) Props() *UrlObservationProps {
	var returns *UrlObservationProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

