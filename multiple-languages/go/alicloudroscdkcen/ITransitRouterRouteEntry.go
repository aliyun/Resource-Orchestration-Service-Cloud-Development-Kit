package alicloudroscdkcen

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcen/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `TransitRouterRouteEntry`.
type ITransitRouterRouteEntry interface {
	alicloudroscdkcore.IResource
	// Attribute TransitRouterRouteEntryDescription: TransitRouterRouteEntryDescription.
	AttrTransitRouterRouteEntryDescription() interface{}
	// Attribute TransitRouterRouteEntryDestinationCidrBlock: TransitRouterRouteEntryDestinationCidrBlock.
	AttrTransitRouterRouteEntryDestinationCidrBlock() interface{}
	// Attribute TransitRouterRouteEntryId: The first ID of the resource.
	AttrTransitRouterRouteEntryId() interface{}
	// Attribute TransitRouterRouteEntryName: TransitRouterRouteEntryName.
	AttrTransitRouterRouteEntryName() interface{}
	// Attribute TransitRouterRouteEntryNextHopId: TransitRouterRouteEntryNextHopId.
	AttrTransitRouterRouteEntryNextHopId() interface{}
	// Attribute TransitRouterRouteEntryNextHopType: TransitRouterRouteEntryNextHopType.
	AttrTransitRouterRouteEntryNextHopType() interface{}
	// Attribute TransitRouterRouteEntryType: TransitRouterRouteEntryType.
	AttrTransitRouterRouteEntryType() interface{}
	// Attribute TransitRouterRouteTableId: TransitRouterRouteTableId.
	AttrTransitRouterRouteTableId() interface{}
	Props() *TransitRouterRouteEntryProps
}

// The jsii proxy for ITransitRouterRouteEntry
type jsiiProxy_ITransitRouterRouteEntry struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ITransitRouterRouteEntry) AttrTransitRouterRouteEntryDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTransitRouterRouteEntryDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITransitRouterRouteEntry) AttrTransitRouterRouteEntryDestinationCidrBlock() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTransitRouterRouteEntryDestinationCidrBlock",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITransitRouterRouteEntry) AttrTransitRouterRouteEntryId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTransitRouterRouteEntryId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITransitRouterRouteEntry) AttrTransitRouterRouteEntryName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTransitRouterRouteEntryName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITransitRouterRouteEntry) AttrTransitRouterRouteEntryNextHopId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTransitRouterRouteEntryNextHopId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITransitRouterRouteEntry) AttrTransitRouterRouteEntryNextHopType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTransitRouterRouteEntryNextHopType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITransitRouterRouteEntry) AttrTransitRouterRouteEntryType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTransitRouterRouteEntryType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITransitRouterRouteEntry) AttrTransitRouterRouteTableId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTransitRouterRouteTableId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITransitRouterRouteEntry) Props() *TransitRouterRouteEntryProps {
	var returns *TransitRouterRouteEntryProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

