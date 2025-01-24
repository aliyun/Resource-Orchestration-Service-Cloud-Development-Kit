package alicloudroscdkecs

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkecs/internal"
)

// Represents a `VPC`.
type IVpc interface {
	alicloudroscdkcore.IResource
	// Attribute RouteTableId: The router table id of created VPC.
	AttrRouteTableId() interface{}
	// Attribute VpcId: Id of created VPC.
	AttrVpcId() interface{}
	// Attribute VpcName: The name of VPC.
	AttrVpcName() interface{}
	// Attribute VRouterId: Router id of created VPC.
	AttrVRouterId() interface{}
	Props() *VPCProps
}

// The jsii proxy for IVpc
type jsiiProxy_IVpc struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IVpc) AttrRouteTableId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRouteTableId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVpc) AttrVpcId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVpcId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVpc) AttrVpcName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVpcName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVpc) AttrVRouterId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVRouterId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVpc) Props() *VPCProps {
	var returns *VPCProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

