package alicloudroscdkwaf


// Properties for defining a `RosDomain`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-waf-domain
type RosDomainProps struct {
	DomainName interface{} `field:"required" json:"domainName" yaml:"domainName"`
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	IsAccessProduct interface{} `field:"required" json:"isAccessProduct" yaml:"isAccessProduct"`
	SourceIps interface{} `field:"required" json:"sourceIps" yaml:"sourceIps"`
	ClusterType interface{} `field:"optional" json:"clusterType" yaml:"clusterType"`
	ConnectionTime interface{} `field:"optional" json:"connectionTime" yaml:"connectionTime"`
	Http2Port interface{} `field:"optional" json:"http2Port" yaml:"http2Port"`
	HttpPort interface{} `field:"optional" json:"httpPort" yaml:"httpPort"`
	HttpsPort interface{} `field:"optional" json:"httpsPort" yaml:"httpsPort"`
	HttpsRedirect interface{} `field:"optional" json:"httpsRedirect" yaml:"httpsRedirect"`
	HttpToUserIp interface{} `field:"optional" json:"httpToUserIp" yaml:"httpToUserIp"`
	LoadBalancing interface{} `field:"optional" json:"loadBalancing" yaml:"loadBalancing"`
	LogHeaders interface{} `field:"optional" json:"logHeaders" yaml:"logHeaders"`
	ReadTime interface{} `field:"optional" json:"readTime" yaml:"readTime"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	WriteTime interface{} `field:"optional" json:"writeTime" yaml:"writeTime"`
}

