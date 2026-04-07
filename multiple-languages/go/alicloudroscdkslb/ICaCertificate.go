package alicloudroscdkslb

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkslb/internal"
)

// Represents a `CaCertificate`.
type ICaCertificate interface {
	alicloudroscdkcore.IResource
	// Attribute CaCertificateId: The ID of the CA certificate.
	AttrCaCertificateId() interface{}
	// Attribute CaCertificateName: The CA certificate name.
	AttrCaCertificateName() interface{}
	// Attribute CommonName: The domain name on the CA certificate.
	AttrCommonName() interface{}
	// Attribute CreatedTimestamp: The create time stamp of the CA certificate.
	AttrCreatedTimestamp() interface{}
	// Attribute CreateTime: The time when the CA certificate was created.
	AttrCreateTime() interface{}
	// Attribute ExpiredTime: The time when the CA certificate expires.
	AttrExpiredTime() interface{}
	// Attribute ExpiredTimestamp: The expiration time stamp of the CA certificate.
	AttrExpiredTimestamp() interface{}
	// Attribute Fingerprint: The fingerprint of the server certificate.
	AttrFingerprint() interface{}
	// Attribute ResourceGroupId: The ID of the resource group.
	AttrResourceGroupId() interface{}
	// Attribute Tags: The tags of ca certificate.
	AttrTags() interface{}
	Props() *CaCertificateProps
}

// The jsii proxy for ICaCertificate
type jsiiProxy_ICaCertificate struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ICaCertificate) AttrCaCertificateId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCaCertificateId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICaCertificate) AttrCaCertificateName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCaCertificateName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICaCertificate) AttrCommonName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCommonName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICaCertificate) AttrCreatedTimestamp() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreatedTimestamp",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICaCertificate) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICaCertificate) AttrExpiredTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrExpiredTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICaCertificate) AttrExpiredTimestamp() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrExpiredTimestamp",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICaCertificate) AttrFingerprint() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrFingerprint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICaCertificate) AttrResourceGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICaCertificate) AttrTags() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTags",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICaCertificate) Props() *CaCertificateProps {
	var returns *CaCertificateProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

