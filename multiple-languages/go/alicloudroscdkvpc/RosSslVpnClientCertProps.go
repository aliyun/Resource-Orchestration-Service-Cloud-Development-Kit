package alicloudroscdkvpc


// Properties for defining a `RosSslVpnClientCert`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-sslvpnclientcert
type RosSslVpnClientCertProps struct {
	SslVpnServerId interface{} `field:"required" json:"sslVpnServerId" yaml:"sslVpnServerId"`
	Name interface{} `field:"optional" json:"name" yaml:"name"`
}

