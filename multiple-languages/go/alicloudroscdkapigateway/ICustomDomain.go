// Aliyun SDK Copyright (C) Alibaba Cloud Computing All rights reserved. http://www.aliyun.com
package alicloudroscdkapigateway

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkapigateway/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `CustomDomain`.
type ICustomDomain interface {
	alicloudroscdkcore.IResource
	// Attribute CertificateId: The id of the certificate.
	AttrCertificateId() interface{}
	Props() *CustomDomainProps
}

// The jsii proxy for ICustomDomain
type jsiiProxy_ICustomDomain struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ICustomDomain) AttrCertificateId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCertificateId",
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

