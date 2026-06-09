package alicloudroscdkeflo

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkeflo/internal"
)

// Represents a `Vpd`.
type IVpd interface {
	alicloudroscdkcore.IResource
	// Attribute Cidr: The CIDR block of the VPD.
	//
	// * We recommend that you use an RFC private endpoint as the Lingjun CIDR block, such as 10.0.0.0/8,172.16.0.0/12,192.168.0.0/16. In scenarios where the Doringjun CIDR block is connected to each other or where the Lingjun CIDR block is connected to a VPC, make sure that the addresses do not conflict with each other. * You can also use a custom CIDR block other than 100.64.0.0/10, 224.0.0.0/4, 127.0.0.0/8, or 169.254.0.0/16 and their subnets as the primary IPv4 CIDR block of the VPD.
	AttrCidr() interface{}
	// Attribute CreateTime: The creation time of the resource.
	AttrCreateTime() interface{}
	// Attribute GmtModified: Modification time.
	AttrGmtModified() interface{}
	// Attribute ResourceGroupId: System-defined parameter.
	//
	// Value: **ChangeResourceGroup**.
	AttrResourceGroupId() interface{}
	// Attribute SecondaryCidrBlocks: List of additional network segment information.
	AttrSecondaryCidrBlocks() interface{}
	// Attribute Tags: The tag of the resource.
	AttrTags() interface{}
	// Attribute VpdId: The ID of the VPD.
	AttrVpdId() interface{}
	// Attribute VpdName: Lingjun CIDR block instance name.
	AttrVpdName() interface{}
	Props() *VpdProps
}

// The jsii proxy for IVpd
type jsiiProxy_IVpd struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IVpd) AttrCidr() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCidr",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVpd) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVpd) AttrGmtModified() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrGmtModified",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVpd) AttrResourceGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVpd) AttrSecondaryCidrBlocks() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSecondaryCidrBlocks",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVpd) AttrTags() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTags",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVpd) AttrVpdId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVpdId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVpd) AttrVpdName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVpdName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVpd) Props() *VpdProps {
	var returns *VpdProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

