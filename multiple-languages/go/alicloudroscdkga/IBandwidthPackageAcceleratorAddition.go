package alicloudroscdkga

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkga/internal"
)

// Represents a `BandwidthPackageAcceleratorAddition`.
type IBandwidthPackageAcceleratorAddition interface {
	alicloudroscdkcore.IResource
	// Attribute AcceleratorId: The ID of the Global Accelerator instance.
	AttrAcceleratorId() interface{}
	// Attribute BandwidthPackageId: The ID of the bandwidth package which is associated.
	AttrBandwidthPackageId() interface{}
	Props() *BandwidthPackageAcceleratorAdditionProps
}

// The jsii proxy for IBandwidthPackageAcceleratorAddition
type jsiiProxy_IBandwidthPackageAcceleratorAddition struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IBandwidthPackageAcceleratorAddition) AttrAcceleratorId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAcceleratorId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBandwidthPackageAcceleratorAddition) AttrBandwidthPackageId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrBandwidthPackageId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBandwidthPackageAcceleratorAddition) Props() *BandwidthPackageAcceleratorAdditionProps {
	var returns *BandwidthPackageAcceleratorAdditionProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

