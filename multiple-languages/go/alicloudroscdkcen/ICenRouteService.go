package alicloudroscdkcen

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcen/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `CenRouteService`.
type ICenRouteService interface {
	alicloudroscdkcore.IResource
	// Attribute Id: The ID of the cloud service.
	//
	// It is formatted to {CenId}/{HostRegionId}/{Host}/{AccessRegionId}.
	AttrId() interface{}
	Props() *CenRouteServiceProps
}

// The jsii proxy for ICenRouteService
type jsiiProxy_ICenRouteService struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ICenRouteService) AttrId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICenRouteService) Props() *CenRouteServiceProps {
	var returns *CenRouteServiceProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

