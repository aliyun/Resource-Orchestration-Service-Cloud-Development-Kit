package alicloudroscdkvpc


// Properties for defining a `SslVpnClientCert`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-sslvpnclientcert
type SslVpnClientCertProps struct {
	// Property sslVpnServerId: ID of the SSL-VPN server.
	SslVpnServerId interface{} `field:"required" json:"sslVpnServerId" yaml:"sslVpnServerId"`
	// Property name: The name of the SSL client certificate.
	//
	// The name must be 1 to 100 characters in length, and cannot start with `http:\/\/`
	// or `https:\/\/`.
	Name interface{} `field:"optional" json:"name" yaml:"name"`
}

