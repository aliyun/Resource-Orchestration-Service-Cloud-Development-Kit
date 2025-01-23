package alicloudroscdkcen

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcen/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `CenBandwidthPackageAssociation`.
type ICenBandwidthPackageAssociation interface {
	alicloudroscdkcore.IResource
	Props() *CenBandwidthPackageAssociationProps
}

// The jsii proxy for ICenBandwidthPackageAssociation
type jsiiProxy_ICenBandwidthPackageAssociation struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ICenBandwidthPackageAssociation) Props() *CenBandwidthPackageAssociationProps {
	var returns *CenBandwidthPackageAssociationProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

