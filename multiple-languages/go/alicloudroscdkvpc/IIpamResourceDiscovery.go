package alicloudroscdkvpc

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkvpc/internal"
)

// Represents a `IpamResourceDiscovery`.
type IIpamResourceDiscovery interface {
	alicloudroscdkcore.IResource
	// Attribute CreateTime: The time when the resource discovery was created.
	AttrCreateTime() interface{}
	// Attribute IpamResourceDiscoveryDescription: The description of the resource discovery.
	AttrIpamResourceDiscoveryDescription() interface{}
	// Attribute IpamResourceDiscoveryId: The ID of the resource discovery instance.
	AttrIpamResourceDiscoveryId() interface{}
	// Attribute IpamResourceDiscoveryName: The name of the resource discovery.
	AttrIpamResourceDiscoveryName() interface{}
	// Attribute OperatingRegionList: The list of regions where the resource discovery is effective.
	AttrOperatingRegionList() interface{}
	// Attribute ResourceGroupId: The ID of the resource group.
	AttrResourceGroupId() interface{}
	// Attribute Tags: The tag of the discovery instance.
	AttrTags() interface{}
	// Attribute Type: The type of resource discovery.
	AttrType() interface{}
	Props() *IpamResourceDiscoveryProps
}

// The jsii proxy for IIpamResourceDiscovery
type jsiiProxy_IIpamResourceDiscovery struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IIpamResourceDiscovery) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IIpamResourceDiscovery) AttrIpamResourceDiscoveryDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIpamResourceDiscoveryDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IIpamResourceDiscovery) AttrIpamResourceDiscoveryId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIpamResourceDiscoveryId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IIpamResourceDiscovery) AttrIpamResourceDiscoveryName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIpamResourceDiscoveryName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IIpamResourceDiscovery) AttrOperatingRegionList() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrOperatingRegionList",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IIpamResourceDiscovery) AttrResourceGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IIpamResourceDiscovery) AttrTags() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTags",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IIpamResourceDiscovery) AttrType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IIpamResourceDiscovery) Props() *IpamResourceDiscoveryProps {
	var returns *IpamResourceDiscoveryProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

