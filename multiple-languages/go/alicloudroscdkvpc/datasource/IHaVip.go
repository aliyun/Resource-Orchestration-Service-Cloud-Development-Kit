package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkvpc/datasource/internal"
)

// Represents a `HaVip`.
type IHaVip interface {
	alicloudroscdkcore.IResource
	// Attribute AssociatedEipAddresses: EIP bound to HaVip.
	AttrAssociatedEipAddresses() interface{}
	// Attribute AssociatedInstances: An ECS instance that is bound to HaVip.
	AttrAssociatedInstances() interface{}
	// Attribute AssociatedInstanceType: The type of the instance that is bound to the VIIP.
	AttrAssociatedInstanceType() interface{}
	// Attribute CreateTime: The creation time of the  resource.
	AttrCreateTime() interface{}
	// Attribute Description: Dependence of a HaVip instance.
	AttrDescription() interface{}
	// Attribute HaVipId: The  ID of the resource.
	AttrHaVipId() interface{}
	// Attribute HaVipName: The name of the HaVip instance.
	AttrHaVipName() interface{}
	// Attribute IpAddress: IP address of private network.
	AttrIpAddress() interface{}
	// Attribute MasterInstanceId: The primary instance ID bound to HaVip.
	AttrMasterInstanceId() interface{}
	// Attribute VpcId: The VPC ID to which the HaVip instance belongs.
	AttrVpcId() interface{}
	// Attribute VSwitchId: The switch ID to which the HaVip instance belongs.
	AttrVSwitchId() interface{}
	Props() *HaVipProps
}

// The jsii proxy for IHaVip
type jsiiProxy_IHaVip struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IHaVip) AttrAssociatedEipAddresses() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAssociatedEipAddresses",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHaVip) AttrAssociatedInstances() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAssociatedInstances",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHaVip) AttrAssociatedInstanceType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAssociatedInstanceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHaVip) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHaVip) AttrDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHaVip) AttrHaVipId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHaVipId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHaVip) AttrHaVipName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHaVipName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHaVip) AttrIpAddress() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIpAddress",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHaVip) AttrMasterInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMasterInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHaVip) AttrVpcId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVpcId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHaVip) AttrVSwitchId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVSwitchId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHaVip) Props() *HaVipProps {
	var returns *HaVipProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

