package alicloudroscdkcas

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcas/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `SslCertificate`.
type ISslCertificate interface {
	alicloudroscdkcore.IResource
	// Attribute CertificateId: The ID of the certificate issued to you.
	AttrCertificateId() interface{}
	// Attribute OrderId: The ID of the certificate order.
	AttrOrderId() interface{}
	Props() *SslCertificateProps
}

// The jsii proxy for ISslCertificate
type jsiiProxy_ISslCertificate struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ISslCertificate) AttrCertificateId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCertificateId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISslCertificate) AttrOrderId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrOrderId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISslCertificate) Props() *SslCertificateProps {
	var returns *SslCertificateProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

