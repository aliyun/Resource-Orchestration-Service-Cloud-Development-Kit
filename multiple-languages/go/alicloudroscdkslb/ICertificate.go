package alicloudroscdkslb

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkslb/internal"
)

// Represents a `Certificate`.
type ICertificate interface {
	alicloudroscdkcore.IResource
	// Attribute CertificateId: The ID of the certificate.
	AttrCertificateId() interface{}
	// Attribute Fingerprint: The fingerprint of the certificate.
	AttrFingerprint() interface{}
	Props() *CertificateProps
}

// The jsii proxy for ICertificate
type jsiiProxy_ICertificate struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ICertificate) AttrCertificateId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCertificateId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICertificate) AttrFingerprint() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrFingerprint",
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

