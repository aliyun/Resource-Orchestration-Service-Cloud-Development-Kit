// Aliyun SDK Copyright (C) Alibaba Cloud Computing All rights reserved. http://www.aliyun.com
package alicloudroscdkmse

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkmse/internal"
)

// Represents a `GatewayDomain`.
type IGatewayDomain interface {
	alicloudroscdkcore.IResource
	// Attribute DomainId: The ID of the domain.
	AttrDomainId() interface{}
	Props() *GatewayDomainProps
}

// The jsii proxy for IGatewayDomain
type jsiiProxy_IGatewayDomain struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IGatewayDomain) AttrDomainId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDomainId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IGatewayDomain) Props() *GatewayDomainProps {
	var returns *GatewayDomainProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

