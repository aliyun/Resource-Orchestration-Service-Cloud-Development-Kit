package alicloudroscdkvpc

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkvpc/internal"
)

// Represents a `Ipam`.
type IIpam interface {
	alicloudroscdkcore.IResource
	// Attribute CreateTime: The creation time of the IPAM.
	AttrCreateTime() interface{}
	// Attribute DefaultResourceDiscoveryAssociationId: After an IPAM is created, the association between the resource discovery created by the system by default and the IPAM.
	AttrDefaultResourceDiscoveryAssociationId() interface{}
	// Attribute DefaultResourceDiscoveryId: After IPAM is created, the system creates resource discovery by default.
	AttrDefaultResourceDiscoveryId() interface{}
	// Attribute IpamDescription: The description of IPAM.
	AttrIpamDescription() interface{}
	// Attribute IpamId: The first ID of the resource.
	AttrIpamId() interface{}
	// Attribute IpamName: The name of the IPAM.
	AttrIpamName() interface{}
	// Attribute OperatingRegionList: List of IPAM effective regions.
	AttrOperatingRegionList() interface{}
	// Attribute PrivateDefaultScopeId: After an IPAM is created, the scope of the private network IPAM created by the system by default.
	AttrPrivateDefaultScopeId() interface{}
	// Attribute PublicDefaultScopeId: After an IPAM is created, the public network IPAM is created by default.
	AttrPublicDefaultScopeId() interface{}
	// Attribute ResourceDiscoveryAssociationCount: The number of resource discovery objects associated with IPAM.
	AttrResourceDiscoveryAssociationCount() interface{}
	// Attribute ResourceGroupId: The ID of the resource group.
	AttrResourceGroupId() interface{}
	// Attribute Tags: The tag of the IPAM.
	AttrTags() interface{}
	Props() *IpamProps
}

// The jsii proxy for IIpam
type jsiiProxy_IIpam struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IIpam) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IIpam) AttrDefaultResourceDiscoveryAssociationId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDefaultResourceDiscoveryAssociationId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IIpam) AttrDefaultResourceDiscoveryId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDefaultResourceDiscoveryId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IIpam) AttrIpamDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIpamDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IIpam) AttrIpamId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIpamId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IIpam) AttrIpamName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIpamName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IIpam) AttrOperatingRegionList() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrOperatingRegionList",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IIpam) AttrPrivateDefaultScopeId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPrivateDefaultScopeId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IIpam) AttrPublicDefaultScopeId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPublicDefaultScopeId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IIpam) AttrResourceDiscoveryAssociationCount() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResourceDiscoveryAssociationCount",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IIpam) AttrResourceGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IIpam) AttrTags() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTags",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IIpam) Props() *IpamProps {
	var returns *IpamProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

