package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkga/datasource/internal"
)

// Represents a `BandwidthPackages`.
type IBandwidthPackages interface {
	alicloudroscdkcore.IResource
	// Attribute BandwidthPackageIds: The list of bandwidth package IDs.
	AttrBandwidthPackageIds() interface{}
	// Attribute BandwidthPackages: The list of bandwidth packages.
	AttrBandwidthPackages() interface{}
	Props() *BandwidthPackagesProps
}

// The jsii proxy for IBandwidthPackages
type jsiiProxy_IBandwidthPackages struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IBandwidthPackages) AttrBandwidthPackageIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrBandwidthPackageIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBandwidthPackages) AttrBandwidthPackages() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrBandwidthPackages",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBandwidthPackages) Props() *BandwidthPackagesProps {
	var returns *BandwidthPackagesProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

