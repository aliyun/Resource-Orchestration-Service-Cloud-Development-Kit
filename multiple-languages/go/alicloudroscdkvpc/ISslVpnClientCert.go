package alicloudroscdkvpc

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkvpc/internal"
)

// Represents a `SslVpnClientCert`.
type ISslVpnClientCert interface {
	alicloudroscdkcore.IResource
	// Attribute SslVpnClientCertId: The ID of the client certificate.
	AttrSslVpnClientCertId() interface{}
	Props() *SslVpnClientCertProps
}

// The jsii proxy for ISslVpnClientCert
type jsiiProxy_ISslVpnClientCert struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ISslVpnClientCert) AttrSslVpnClientCertId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSslVpnClientCertId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISslVpnClientCert) Props() *SslVpnClientCertProps {
	var returns *SslVpnClientCertProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

