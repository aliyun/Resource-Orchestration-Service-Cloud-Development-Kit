package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcen/datasource/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `CenBandwidthPackages`.
type ICenBandwidthPackages interface {
	alicloudroscdkcore.IResource
	// Attribute CenBandwidthPackageIds: The list of The Cen bandwidth ids.
	AttrCenBandwidthPackageIds() interface{}
	// Attribute CenBandwidthPackages: The information about CenBandwidthPackages.
	AttrCenBandwidthPackages() interface{}
	Props() *CenBandwidthPackagesProps
}

// The jsii proxy for ICenBandwidthPackages
type jsiiProxy_ICenBandwidthPackages struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ICenBandwidthPackages) AttrCenBandwidthPackageIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCenBandwidthPackageIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICenBandwidthPackages) AttrCenBandwidthPackages() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCenBandwidthPackages",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICenBandwidthPackages) Props() *CenBandwidthPackagesProps {
	var returns *CenBandwidthPackagesProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

