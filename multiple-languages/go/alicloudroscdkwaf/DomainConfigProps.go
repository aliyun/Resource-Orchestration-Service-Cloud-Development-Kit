package alicloudroscdkwaf


// Properties for defining a `DomainConfig`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-waf-domainconfig
type DomainConfigProps struct {
	// Property domain: Domain name.
	Domain interface{} `field:"required" json:"domain" yaml:"domain"`
	// Property instanceId: WAF instance ID.
	//
	// Description Interface You can view your current WAF instance ID by calling DescribePayInfo.
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	// Property isAccessProduct: The domain before WAF is configured with seven agents (eg, high defense, CDN, etc.), the value of: 0: none. 1: expressed.
	IsAccessProduct interface{} `field:"required" json:"isAccessProduct" yaml:"isAccessProduct"`
	// Property protocols: The domain supports access protocols, values: http: expressed support for the HTTP protocol.
	//
	// https: support for HTTPS protocol.
	// http, https: supports HTTP, HTTPS protocol.
	Protocols interface{} `field:"required" json:"protocols" yaml:"protocols"`
	// Property httpPort: HTTP protocol configuration port.
	//
	// When specifying a plurality of HTTP port "," separated. Example values: [80].
	// Configure the HTTP protocol, this parameter is required. The default value is 80. HttpPort HttpsPort with at least two parameters need to fill a request.
	HttpPort interface{} `field:"optional" json:"httpPort" yaml:"httpPort"`
	// Property httpsPort: HTTPS protocol configuration port.
	//
	// When specifying a plurality HTTPS port, using the "," separated. Example values: [443].
	// Configure the protocol is HTTPS, this parameter is required. The default value is 443. HttpPort HttpsPort with at least two parameters need to fill a request.
	HttpsPort interface{} `field:"optional" json:"httpsPort" yaml:"httpsPort"`
	// Property httpsRedirect: HTTPS is turned forcefully jump the argument: 0: off (default) 1: Turn Description required to complete the request parameters using only HTTPS access protocol.
	//
	// After opening force will show a jump HTTP request is HTTPS, a default jump to 443.
	HttpsRedirect interface{} `field:"optional" json:"httpsRedirect" yaml:"httpsRedirect"`
	// Property httpToUserIp: Whether to open HTTPS access request is forwarded back to the source station via the HTTP protocol, the value of: 0: off (default) 1: Turn Note If your site does not support HTTPS back to the source, open source HTTP return (default back to the source port is port 80) function key, can be realized by WAF HTTPS access.
	HttpToUserIp interface{} `field:"optional" json:"httpToUserIp" yaml:"httpToUserIp"`
	// Property loadBalancing: Back to the source load balancing policy values: 0: IP Hash way.
	//
	// 1: represents a polling mode.
	LoadBalancing interface{} `field:"optional" json:"loadBalancing" yaml:"loadBalancing"`
	// Property region: Examples of areas where the WAF.
	//
	// Value:
	// cn: China mainland (default)
	// cn-hongkong: China HongKong and other overseas.
	Region interface{} `field:"optional" json:"region" yaml:"region"`
	// Property rsType: Back to the source address type the domain name values: 0: back to the source to IP.
	//
	// 1: Indicates the domain name back to the source.
	RsType interface{} `field:"optional" json:"rsType" yaml:"rsType"`
	// Property sourceIps: Source station IP, supports a plurality of specified IP.
	//
	// Example values: [ "1.1.1.1"].
	SourceIps interface{} `field:"optional" json:"sourceIps" yaml:"sourceIps"`
}

