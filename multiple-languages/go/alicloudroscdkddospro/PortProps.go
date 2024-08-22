package alicloudroscdkddospro


// Properties for defining a `Port`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ddospro-port
type PortProps struct {
	// Property frontendProtocol: The type of the protocol.
	//
	// Valid values:
	// tcp
	// udp.
	FrontendProtocol interface{} `field:"required" json:"frontendProtocol" yaml:"frontendProtocol"`
	// Property instanceId: The ID of the Anti-DDoS Pro or Anti-DDoS Premium instance to which the port forwarding rule belongs.
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	// Property realServers: An array that consists of the IP addresses of origin servers.
	RealServers interface{} `field:"required" json:"realServers" yaml:"realServers"`
	// Property backendPort: The port of the origin server.
	//
	// Valid values: 0 to 65535.
	BackendPort interface{} `field:"optional" json:"backendPort" yaml:"backendPort"`
	// Property frontendPort: The forwarding port.
	//
	// Valid values: 0 to 65535.
	FrontendPort interface{} `field:"optional" json:"frontendPort" yaml:"frontendPort"`
}

