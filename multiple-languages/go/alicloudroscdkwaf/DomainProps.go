package alicloudroscdkwaf


// Properties for defining a `Domain`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-waf-domain
type DomainProps struct {
	// Property domainName: Domain name.
	DomainName interface{} `field:"required" json:"domainName" yaml:"domainName"`
	// Property instanceId: Instance id.
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	// Property isAccessProduct: Is there a seven-layer agency before WAF.
	IsAccessProduct interface{} `field:"required" json:"isAccessProduct" yaml:"isAccessProduct"`
	// Property sourceIps: Back to source IP configuration.
	SourceIps interface{} `field:"required" json:"sourceIps" yaml:"sourceIps"`
	// Property clusterType: Cluster type.
	ClusterType interface{} `field:"optional" json:"clusterType" yaml:"clusterType"`
	// Property connectionTime: Connection timeout.
	ConnectionTime interface{} `field:"optional" json:"connectionTime" yaml:"connectionTime"`
	// Property http2Port: Http2 port configuration.
	Http2Port interface{} `field:"optional" json:"http2Port" yaml:"http2Port"`
	// Property httpPort: Http port configuration.
	HttpPort interface{} `field:"optional" json:"httpPort" yaml:"httpPort"`
	// Property httpsPort: Https port configuration.
	HttpsPort interface{} `field:"optional" json:"httpsPort" yaml:"httpsPort"`
	// Property httpsRedirect: Https forced redirect configuration.
	HttpsRedirect interface{} `field:"optional" json:"httpsRedirect" yaml:"httpsRedirect"`
	// Property httpToUserIp: Http back to source.
	HttpToUserIp interface{} `field:"optional" json:"httpToUserIp" yaml:"httpToUserIp"`
	// Property loadBalancing: Load balancing configuration.
	LoadBalancing interface{} `field:"optional" json:"loadBalancing" yaml:"loadBalancing"`
	// Property logHeaders: Domain traffic tagging.
	LogHeaders interface{} `field:"optional" json:"logHeaders" yaml:"logHeaders"`
	// Property readTime: Read connection timeout period.
	ReadTime interface{} `field:"optional" json:"readTime" yaml:"readTime"`
	// Property resourceGroupId: Resource group Id.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property writeTime: Write connection timeout period.
	WriteTime interface{} `field:"optional" json:"writeTime" yaml:"writeTime"`
}

