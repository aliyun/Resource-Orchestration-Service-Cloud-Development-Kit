// Aliyun SDK Copyright (C) Alibaba Cloud Computing All rights reserved. http://www.aliyun.com
package alicloudroscdkfc

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkfc/internal"
)

// Represents a `CustomDomain`.
type ICustomDomain interface {
	alicloudroscdkcore.IResource
	// Attribute Domain: The domain with protocol.
	AttrDomain() interface{}
	// Attribute DomainName: The domain name.
	AttrDomainName() interface{}
	Props() *CustomDomainProps
}

// The jsii proxy for ICustomDomain
type jsiiProxy_ICustomDomain struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ICustomDomain) AttrDomain() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDomain",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICustomDomain) AttrDomainName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDomainName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICustomDomain) Props() *CustomDomainProps {
	var returns *CustomDomainProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

