package alicloudroscdkalb

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkalb/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `AdditionalCertificateAssociation`.
type IAdditionalCertificateAssociation interface {
	alicloudroscdkcore.IResource
	// Attribute ListenerId: The ID of the listener.
	AttrListenerId() interface{}
	Props() *AdditionalCertificateAssociationProps
}

// The jsii proxy for IAdditionalCertificateAssociation
type jsiiProxy_IAdditionalCertificateAssociation struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IAdditionalCertificateAssociation) AttrListenerId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrListenerId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAdditionalCertificateAssociation) Props() *AdditionalCertificateAssociationProps {
	var returns *AdditionalCertificateAssociationProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

