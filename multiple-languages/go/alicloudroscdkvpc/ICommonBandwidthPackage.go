package alicloudroscdkvpc

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkvpc/internal"
)

// Represents a `CommonBandwidthPackage`.
type ICommonBandwidthPackage interface {
	alicloudroscdkcore.IResource
	// Attribute Arn: The Alibaba Cloud Resource Name (ARN).
	AttrArn() interface{}
	// Attribute BandwidthPackageId: The ID of the Internet Shared Bandwidth instance.
	AttrBandwidthPackageId() interface{}
	Props() *CommonBandwidthPackageProps
}

// The jsii proxy for ICommonBandwidthPackage
type jsiiProxy_ICommonBandwidthPackage struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ICommonBandwidthPackage) AttrArn() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrArn",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICommonBandwidthPackage) AttrBandwidthPackageId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrBandwidthPackageId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICommonBandwidthPackage) Props() *CommonBandwidthPackageProps {
	var returns *CommonBandwidthPackageProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

