// Aliyun SDK Copyright (C) Alibaba Cloud Computing All rights reserved. http://www.aliyun.com
package alicloudroscdkwaf

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkwaf/internal"
)

// Represents a `Domain`.
type IDomain interface {
	alicloudroscdkcore.IResource
	// Attribute ClusterType: Cluster type.
	AttrClusterType() interface{}
	// Attribute Cname: CNAME assigned by WAF instance.
	AttrCname() interface{}
	// Attribute DomainName: Domain name.
	AttrDomainName() interface{}
	// Attribute Http2Port: Http2 port configuration.
	AttrHttp2Port() interface{}
	// Attribute HttpPort: Http port configuration.
	AttrHttpPort() interface{}
	// Attribute HttpsPort: Https port configuration.
	AttrHttpsPort() interface{}
	// Attribute HttpsRedirect: Https forced redirect configuration.
	AttrHttpsRedirect() interface{}
	// Attribute HttpToUserIp: Http back to source.
	AttrHttpToUserIp() interface{}
	// Attribute InstanceId: Instance id.
	AttrInstanceId() interface{}
	// Attribute IsAccessProduct: Is there a seven-layer agency before WAF.
	AttrIsAccessProduct() interface{}
	// Attribute LoadBalancing: Load balancing configuration.
	AttrLoadBalancing() interface{}
	// Attribute LogHeaders: Domain traffic tagging.
	AttrLogHeaders() interface{}
	// Attribute ResourceGroupId: Resource group Id.
	AttrResourceGroupId() interface{}
	// Attribute SourceIps: Back to source IP configuration.
	AttrSourceIps() interface{}
	// Attribute Version: Optimistic lock version.
	AttrVersion() interface{}
	Props() *DomainProps
}

// The jsii proxy for IDomain
type jsiiProxy_IDomain struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IDomain) AttrClusterType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrClusterType",
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

func (j *jsiiProxy_IDomain) AttrHttp2Port() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHttp2Port",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDomain) AttrHttpPort() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHttpPort",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDomain) AttrHttpsPort() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHttpsPort",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDomain) AttrHttpsRedirect() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHttpsRedirect",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDomain) AttrHttpToUserIp() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHttpToUserIp",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDomain) AttrInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDomain) AttrIsAccessProduct() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIsAccessProduct",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDomain) AttrLoadBalancing() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLoadBalancing",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDomain) AttrLogHeaders() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLogHeaders",
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

func (j *jsiiProxy_IDomain) AttrSourceIps() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSourceIps",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDomain) AttrVersion() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVersion",
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

