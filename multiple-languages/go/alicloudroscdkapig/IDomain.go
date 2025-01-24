// Aliyun SDK Copyright (C) Alibaba Cloud Computing All rights reserved. http://www.aliyun.com
package alicloudroscdkapig

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkapig/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `Domain`.
type IDomain interface {
	alicloudroscdkcore.IResource
	// Attribute DomainId: The ID of the Domain.
	AttrDomainId() interface{}
	// Attribute DomainName: The name of the Domain.
	AttrDomainName() interface{}
	// Attribute Protocol: The types of protocols.
	AttrProtocol() interface{}
	Props() *DomainProps
}

// The jsii proxy for IDomain
type jsiiProxy_IDomain struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IDomain) AttrDomainId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDomainId",
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

func (j *jsiiProxy_IDomain) AttrProtocol() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrProtocol",
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

