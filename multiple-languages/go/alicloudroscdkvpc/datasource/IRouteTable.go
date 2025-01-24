package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkvpc/datasource/internal"
)

// Represents a `RouteTable`.
type IRouteTable interface {
	alicloudroscdkcore.IResource
	// Attribute CreateTime: The creation time of the routing table.
	AttrCreateTime() interface{}
	// Attribute Description: Description of the routing table.
	AttrDescription() interface{}
	// Attribute ResourceGroupId: Resource group ID.
	AttrResourceGroupId() interface{}
	// Attribute RouterId: The router ID to which the routing table belongs.
	AttrRouterId() interface{}
	// Attribute RouterType: The router type to which the routing table belongs.
	AttrRouterType() interface{}
	// Attribute RouteTableId: The ID of the routing table.
	AttrRouteTableId() interface{}
	// Attribute RouteTableName: The name of the routing table.
	AttrRouteTableName() interface{}
	// Attribute RouteTableType: The type of routing table.
	AttrRouteTableType() interface{}
	// Attribute Tags: The tag.
	AttrTags() interface{}
	// Attribute VpcId: The ID of VPC.
	AttrVpcId() interface{}
	// Attribute VSwitchIds: The ID of the switch.
	AttrVSwitchIds() interface{}
	Props() *RouteTableProps
}

// The jsii proxy for IRouteTable
type jsiiProxy_IRouteTable struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IRouteTable) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRouteTable) AttrDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRouteTable) AttrResourceGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRouteTable) AttrRouterId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRouterId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRouteTable) AttrRouterType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRouterType",
		&returns,
	)
	return returns
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

func (j *jsiiProxy_IRouteTable) AttrTags() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTags",
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

