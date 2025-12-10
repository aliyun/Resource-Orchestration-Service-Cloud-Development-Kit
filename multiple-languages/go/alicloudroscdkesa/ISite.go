package alicloudroscdkesa

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkesa/internal"
)

// Represents a `Site`.
type ISite interface {
	alicloudroscdkcore.IResource
	// Attribute AccessType: Site Access Type.
	AttrAccessType() interface{}
	// Attribute Coverage: Acceleration area.
	AttrCoverage() interface{}
	// Attribute CreateTime: Creation time.
	AttrCreateTime() interface{}
	// Attribute InstanceId: The ID of the associated package instance.
	AttrInstanceId() interface{}
	// Attribute ModifyTime: Modification time.
	AttrModifyTime() interface{}
	// Attribute NameServerList: Site Resolution Name Server List.
	AttrNameServerList() interface{}
	// Attribute ResourceGroupId: The ID of the resource group.
	AttrResourceGroupId() interface{}
	// Attribute SiteId: The ID of the Site.
	AttrSiteId() interface{}
	// Attribute SiteName: The name of the Site.
	AttrSiteName() interface{}
	// Attribute Tags: The tags of the Site.
	AttrTags() interface{}
	Props() *SiteProps
}

// The jsii proxy for ISite
type jsiiProxy_ISite struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ISite) AttrAccessType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAccessType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISite) AttrCoverage() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCoverage",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISite) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISite) AttrInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISite) AttrModifyTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrModifyTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISite) AttrNameServerList() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNameServerList",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISite) AttrResourceGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISite) AttrSiteId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSiteId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISite) AttrSiteName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSiteName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISite) AttrTags() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTags",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISite) Props() *SiteProps {
	var returns *SiteProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

