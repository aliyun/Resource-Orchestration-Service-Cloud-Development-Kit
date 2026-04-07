// Aliyun SDK Copyright (C) Alibaba Cloud Computing All rights reserved. http://www.aliyun.com
package alicloudroscdkdns

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkdns/internal"
)

// Represents a `CacheDomain`.
type ICacheDomain interface {
	alicloudroscdkcore.IResource
	// Attribute DomainName: The domain name of the DNS cache.
	AttrDomainName() interface{}
	Props() *CacheDomainProps
}

// The jsii proxy for ICacheDomain
type jsiiProxy_ICacheDomain struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ICacheDomain) AttrDomainName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDomainName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICacheDomain) Props() *CacheDomainProps {
	var returns *CacheDomainProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

