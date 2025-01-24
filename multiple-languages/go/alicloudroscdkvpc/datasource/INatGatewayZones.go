package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkvpc/datasource/internal"
)

// Represents a `NatGatewayZones`.
type INatGatewayZones interface {
	alicloudroscdkcore.IResource
	// Attribute ZoneIds: The list of The Zone Ids.
	AttrZoneIds() interface{}
	Props() *NatGatewayZonesProps
}

// The jsii proxy for INatGatewayZones
type jsiiProxy_INatGatewayZones struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_INatGatewayZones) AttrZoneIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrZoneIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_INatGatewayZones) Props() *NatGatewayZonesProps {
	var returns *NatGatewayZonesProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

