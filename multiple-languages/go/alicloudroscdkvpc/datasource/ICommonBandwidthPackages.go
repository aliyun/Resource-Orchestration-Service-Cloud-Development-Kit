package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkvpc/datasource/internal"
)

// Represents a `CommonBandwidthPackages`.
type ICommonBandwidthPackages interface {
	alicloudroscdkcore.IResource
	// Attribute CommonBandwidthPackageIds: The list of common bandwidth package IDs.
	AttrCommonBandwidthPackageIds() interface{}
	// Attribute CommonBandwidthPackages: The list of common bandwidth packages.
	AttrCommonBandwidthPackages() interface{}
	Props() *CommonBandwidthPackagesProps
}

// The jsii proxy for ICommonBandwidthPackages
type jsiiProxy_ICommonBandwidthPackages struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ICommonBandwidthPackages) AttrCommonBandwidthPackageIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCommonBandwidthPackageIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICommonBandwidthPackages) AttrCommonBandwidthPackages() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCommonBandwidthPackages",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICommonBandwidthPackages) Props() *CommonBandwidthPackagesProps {
	var returns *CommonBandwidthPackagesProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

