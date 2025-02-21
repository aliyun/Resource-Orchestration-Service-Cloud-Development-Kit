package alicloudroscdkcen

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcen/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `CenBandwidthPackage`.
type ICenBandwidthPackage interface {
	alicloudroscdkcore.IResource
	// Attribute Arn: The Alibaba Cloud Resource Name (ARN).
	AttrArn() interface{}
	// Attribute CenBandwidthPackageId: The ID of the bandwidth package.
	AttrCenBandwidthPackageId() interface{}
	Props() *CenBandwidthPackageProps
}

// The jsii proxy for ICenBandwidthPackage
type jsiiProxy_ICenBandwidthPackage struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ICenBandwidthPackage) AttrArn() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrArn",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICenBandwidthPackage) AttrCenBandwidthPackageId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCenBandwidthPackageId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICenBandwidthPackage) Props() *CenBandwidthPackageProps {
	var returns *CenBandwidthPackageProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

