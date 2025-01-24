package alicloudroscdkeci

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkeci/internal"
)

// Represents a `ContainerGroup`.
type IContainerGroup interface {
	alicloudroscdkcore.IResource
	// Attribute ContainerGroupId: The ID of the container group.
	AttrContainerGroupId() interface{}
	// Attribute ContainerGroupName: The name of the container group.
	AttrContainerGroupName() interface{}
	// Attribute EniInstanceId: ENI instance ID.
	AttrEniInstanceId() interface{}
	// Attribute InternetIp: Internet IP.
	AttrInternetIp() interface{}
	// Attribute IntranetIp: Intranet IP.
	AttrIntranetIp() interface{}
	// Attribute Ipv6Address: Ipv6 address.
	AttrIpv6Address() interface{}
	// Attribute RegionId: The ID of the region in which the instance resides.
	AttrRegionId() interface{}
	// Attribute SecurityGroupId: The ID of the security group to which the instance belongs.
	//
	// Instances in the same security group can access one another.
	AttrSecurityGroupId() interface{}
	// Attribute VSwitchId: The ID of the VSwitch.
	//
	// Currently, ECI instances can only be deployed in VPCs.
	AttrVSwitchId() interface{}
	// Attribute ZoneId: The ID of the zone in which the instance resides.
	//
	// If you leave the parameter blank, the system assigns a zone for you. The default value is blank.
	AttrZoneId() interface{}
	Props() *ContainerGroupProps
}

// The jsii proxy for IContainerGroup
type jsiiProxy_IContainerGroup struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IContainerGroup) AttrContainerGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrContainerGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IContainerGroup) AttrContainerGroupName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrContainerGroupName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IContainerGroup) AttrEniInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEniInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IContainerGroup) AttrInternetIp() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInternetIp",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IContainerGroup) AttrIntranetIp() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIntranetIp",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IContainerGroup) AttrIpv6Address() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIpv6Address",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IContainerGroup) AttrRegionId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRegionId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IContainerGroup) AttrSecurityGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSecurityGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IContainerGroup) AttrVSwitchId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVSwitchId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IContainerGroup) AttrZoneId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrZoneId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IContainerGroup) Props() *ContainerGroupProps {
	var returns *ContainerGroupProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

