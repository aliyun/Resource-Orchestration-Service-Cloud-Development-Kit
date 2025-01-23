package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkvpc/datasource/internal"
)

// Represents a `PublicIpAddressPool`.
type IPublicIpAddressPool interface {
	alicloudroscdkcore.IResource
	// Attribute CreateTime: The creation time of the resource.
	AttrCreateTime() interface{}
	// Attribute Description: Description.
	AttrDescription() interface{}
	// Attribute IpAddressRemaining: Whether there is a free IP address.
	AttrIpAddressRemaining() interface{}
	// Attribute Isp: Service providers.
	AttrIsp() interface{}
	// Attribute PublicIpAddressPoolId: The first ID of the resource.
	AttrPublicIpAddressPoolId() interface{}
	// Attribute PublicIpAddressPoolName: The name of the resource.
	AttrPublicIpAddressPoolName() interface{}
	// Attribute ResourceGroupId: The ID of the resource group to which the VPC belongs.
	AttrResourceGroupId() interface{}
	// Attribute Tags: The tags of PrefixList.
	AttrTags() interface{}
	// Attribute TotalIpNum: Total ip number of PublicIpAddressPool.
	AttrTotalIpNum() interface{}
	// Attribute UsedIpNum: Used ip number of PublicIpAddressPool.
	AttrUsedIpNum() interface{}
	Props() *PublicIpAddressPoolProps
}

// The jsii proxy for IPublicIpAddressPool
type jsiiProxy_IPublicIpAddressPool struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IPublicIpAddressPool) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPublicIpAddressPool) AttrDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPublicIpAddressPool) AttrIpAddressRemaining() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIpAddressRemaining",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPublicIpAddressPool) AttrIsp() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIsp",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPublicIpAddressPool) AttrPublicIpAddressPoolId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPublicIpAddressPoolId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPublicIpAddressPool) AttrPublicIpAddressPoolName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPublicIpAddressPoolName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPublicIpAddressPool) AttrResourceGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPublicIpAddressPool) AttrTags() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTags",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPublicIpAddressPool) AttrTotalIpNum() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTotalIpNum",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPublicIpAddressPool) AttrUsedIpNum() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrUsedIpNum",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPublicIpAddressPool) Props() *PublicIpAddressPoolProps {
	var returns *PublicIpAddressPoolProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

