package alicloudroscdkga

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkga/internal"
)

// Represents a `CertificatesListenerAssociation`.
type ICertificatesListenerAssociation interface {
	alicloudroscdkcore.IResource
	// Attribute Certificates: The additional certificates.
	AttrCertificates() interface{}
	// Attribute ListenerId: The ID of the listener.
	AttrListenerId() interface{}
	Props() *CertificatesListenerAssociationProps
}

// The jsii proxy for ICertificatesListenerAssociation
type jsiiProxy_ICertificatesListenerAssociation struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ICertificatesListenerAssociation) AttrCertificates() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCertificates",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICertificatesListenerAssociation) AttrListenerId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrListenerId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICertificatesListenerAssociation) Props() *CertificatesListenerAssociationProps {
	var returns *CertificatesListenerAssociationProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

