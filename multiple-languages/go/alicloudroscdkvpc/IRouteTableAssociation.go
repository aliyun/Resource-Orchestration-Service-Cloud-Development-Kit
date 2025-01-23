package alicloudroscdkvpc

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkvpc/internal"
)

// Represents a `RouteTableAssociation`.
type IRouteTableAssociation interface {
	alicloudroscdkcore.IResource
	// Attribute RouteTableId: The ID of the route table.
	AttrRouteTableId() interface{}
	// Attribute VSwitchId: The VSwitch ID which the route table associated with.
	AttrVSwitchId() interface{}
	Props() *RouteTableAssociationProps
}

// The jsii proxy for IRouteTableAssociation
type jsiiProxy_IRouteTableAssociation struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IRouteTableAssociation) AttrRouteTableId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRouteTableId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRouteTableAssociation) AttrVSwitchId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVSwitchId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRouteTableAssociation) Props() *RouteTableAssociationProps {
	var returns *RouteTableAssociationProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

