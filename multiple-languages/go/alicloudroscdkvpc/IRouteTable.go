package alicloudroscdkvpc

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkvpc/internal"
)

// Represents a `RouteTable`.
type IRouteTable interface {
	alicloudroscdkcore.IResource
	// Attribute RouteTableId: The ID of the route table.
	AttrRouteTableId() interface{}
	// Attribute RouteTableName: The name of the route table.
	AttrRouteTableName() interface{}
	// Attribute RouteTableType: The type of the route table.
	AttrRouteTableType() interface{}
	// Attribute VpcId: The ID of the VRouter to which the route table belongs.
	AttrVpcId() interface{}
	// Attribute VSwitchIds: A list of VSwitches under the VPC.
	AttrVSwitchIds() interface{}
	Props() *RouteTableProps
}

// The jsii proxy for IRouteTable
type jsiiProxy_IRouteTable struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IRouteTable) AttrRouteTableId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRouteTableId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRouteTable) AttrRouteTableName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRouteTableName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRouteTable) AttrRouteTableType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRouteTableType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRouteTable) AttrVpcId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVpcId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRouteTable) AttrVSwitchIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVSwitchIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRouteTable) Props() *RouteTableProps {
	var returns *RouteTableProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

