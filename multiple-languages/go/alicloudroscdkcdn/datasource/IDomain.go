package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcdn/datasource/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `Domain`.
type IDomain interface {
	alicloudroscdkcore.IResource
	// Attribute CdnType: The workload type of the accelerated domain name.
	AttrCdnType() interface{}
	// Attribute CertificateConfig: Certificate configuration.
	AttrCertificateConfig() interface{}
	// Attribute Cname: The CNAME that is assigned to the accelerated domain name.
	AttrCname() interface{}
	// Attribute DomainName: The accelerated domain name.
	AttrDomainName() interface{}
	// Attribute ResourceGroupId: The ID of the resource group.
	AttrResourceGroupId() interface{}
	// Attribute Scope: The acceleration region.
	AttrScope() interface{}
	// Attribute Sources: The information about the origin server.
	AttrSources() interface{}
	// Attribute Tags: The tags of the resource.
	AttrTags() interface{}
	Props() *DomainProps
}

// The jsii proxy for IDomain
type jsiiProxy_IDomain struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IDomain) AttrCdnType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCdnType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDomain) AttrCertificateConfig() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCertificateConfig",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDomain) AttrCname() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCname",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDomain) AttrDomainName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDomainName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDomain) AttrResourceGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDomain) AttrScope() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrScope",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDomain) AttrSources() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSources",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDomain) AttrTags() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTags",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDomain) Props() *DomainProps {
	var returns *DomainProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

