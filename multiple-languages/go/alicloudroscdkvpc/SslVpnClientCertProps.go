package alicloudroscdkvpc


// Properties for defining a `SslVpnClientCert`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-sslvpnclientcert
type SslVpnClientCertProps struct {
	// Property sslVpnServerId: ID of the SSL-VPN server.
	SslVpnServerId interface{} `field:"required" json:"sslVpnServerId" yaml:"sslVpnServerId"`
	// Property name: The name of the client certificate.
	//
	// The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_), and dashes (-). But it can't start with http:\/\/ or https:\/\/.
	Name interface{} `field:"optional" json:"name" yaml:"name"`
}

