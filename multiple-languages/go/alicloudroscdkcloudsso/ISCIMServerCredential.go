package alicloudroscdkcloudsso

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcloudsso/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `SCIMServerCredential`.
type ISCIMServerCredential interface {
	alicloudroscdkcore.IResource
	// Attribute CredentialId: The ID of the SCIM credential.
	AttrCredentialId() interface{}
	// Attribute CredentialSecret: The secret of the SCIM credential.
	AttrCredentialSecret() interface{}
	Props() *SCIMServerCredentialProps
}

// The jsii proxy for ISCIMServerCredential
type jsiiProxy_ISCIMServerCredential struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ISCIMServerCredential) AttrCredentialId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCredentialId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISCIMServerCredential) AttrCredentialSecret() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCredentialSecret",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISCIMServerCredential) Props() *SCIMServerCredentialProps {
	var returns *SCIMServerCredentialProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

