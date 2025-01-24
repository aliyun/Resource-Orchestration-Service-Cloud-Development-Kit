package alicloudroscdkcas

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcas/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `Certificate`.
type ICertificate interface {
	alicloudroscdkcore.IResource
	// Attribute CertId: Certificate ID.
	AttrCertId() interface{}
	Props() *CertificateProps
}

// The jsii proxy for ICertificate
type jsiiProxy_ICertificate struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ICertificate) AttrCertId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCertId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICertificate) Props() *CertificateProps {
	var returns *CertificateProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

