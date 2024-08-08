package alicloudroscdkslb


// Properties for defining a `Listener`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-listener
type ListenerProps struct {
	// Property bandwidth: The bandwidth of network, unit in Mbps(Million bits per second).
	//
	// If the specified load balancer with "LOAD_BALANCE_ID" is charged by "paybybandwidth" and is created in classic network, each Listener's bandwidth must be greater than 0 and the sum of all of its Listeners' bandwidth can't be greater than the bandwidth of the load balancer.
	Bandwidth interface{} `field:"required" json:"bandwidth" yaml:"bandwidth"`
	// Property listenerPort: Port for front listener.
	//
	// Range from 0 to 65535.
	ListenerPort interface{} `field:"required" json:"listenerPort" yaml:"listenerPort"`
	// Property loadBalancerId: The id of load balancer to create listener.
	LoadBalancerId interface{} `field:"required" json:"loadBalancerId" yaml:"loadBalancerId"`
	// Property protocol: The load balancer transport protocol to use for routing: http, https, tcp, or udp.
	Protocol interface{} `field:"required" json:"protocol" yaml:"protocol"`
	// Property aclId: The ID of the access control associated with the listener to be created.
	//
	// If the value of the AclStatus parameter is on, this parameter is required.
	AclId interface{} `field:"optional" json:"aclId" yaml:"aclId"`
	// Property aclIds: The ID list of the access controls associated with the listener to be created.
	//
	// If the value of the AclStatus parameter is on, this parameter is required.AclIds have higher priority than AclId.
	AclIds interface{} `field:"optional" json:"aclIds" yaml:"aclIds"`
	// Property aclStatus: Indicates whether to enable access control.
	//
	// Valid values: on | off. Default value: off
	AclStatus interface{} `field:"optional" json:"aclStatus" yaml:"aclStatus"`
	// Property aclType: The access control type: * white: Indicates a whitelist.
	//
	// Only requests from IP addresses or CIDR blocks in the selected access control lists are forwarded. This applies to scenarios in which an application only allows access from specific IP addresses.
	// Enabling a whitelist poses some risks to your services.
	// After a whitelist is enabled, only the IP addresses in the list can access the listener.
	// If you enable a whitelist without adding any IP addresses in the list, no requests are forwarded.
	// * black: Indicates a blacklist. Requests from IP addresses or CIDR blocks in the selected access control lists are not forwarded (that is, they are blocked). This applies to scenarios in which an application only denies access from specific IP addresses.
	// If you enable a blacklist without adding any IP addresses in the list, all requests are forwarded.
	//
	// If the value of the AclStatus parameter is on, this parameter is required.
	AclType interface{} `field:"optional" json:"aclType" yaml:"aclType"`
	// Property backendServerPort: Backend server can listen on ports from 1 to 65535.
	BackendServerPort interface{} `field:"optional" json:"backendServerPort" yaml:"backendServerPort"`
	// Property caCertificateId: CA server certificate id, for https listener only.
	CaCertificateId interface{} `field:"optional" json:"caCertificateId" yaml:"caCertificateId"`
	// Property connectionDrain: Whether to enable graceful connection interruption.
	//
	// Value:on: turn on
	// off: Not turned on
	// Note: Only effective TCP listener.
	ConnectionDrain interface{} `field:"optional" json:"connectionDrain" yaml:"connectionDrain"`
	// Property connectionDrainTimeout: Set the connection graceful interruption timeout.
	//
	// Unit: seconds. Value range: 10-900.
	// Note: Only effective for TCP listener. When ConnectionDrain is on, this option is required.
	ConnectionDrainTimeout interface{} `field:"optional" json:"connectionDrainTimeout" yaml:"connectionDrainTimeout"`
	// Property description: The description of the listener.It must be 1 to 80 characters in length and can contain letters, digits, hyphens (-), forward slashes (\/), periods (.), and underscores (_). Chinese characters are supported.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property enableHttp2: Specifies whether to use HTTP\/2.
	//
	// It takes effect when Protocol=https. Valid values:
	// on: yes
	// off: no.
	EnableHttp2 interface{} `field:"optional" json:"enableHttp2" yaml:"enableHttp2"`
	// Property gzip: Specifies whether to enable Gzip compression to compress specific types of files.
	//
	// Valid values:
	// on (default): yes
	// off: no.
	Gzip interface{} `field:"optional" json:"gzip" yaml:"gzip"`
	// Property healthCheck: The properties of health checking setting.
	HealthCheck interface{} `field:"optional" json:"healthCheck" yaml:"healthCheck"`
	// Property httpConfig: Config for http protocol.
	HttpConfig interface{} `field:"optional" json:"httpConfig" yaml:"httpConfig"`
	// Property idleTimeout: Specify the idle connection timeout in seconds.
	//
	// Valid value: 1-60 If no request is received during the specified timeout period, Server Load Balancer will temporarily terminate the connection and restart the connection when the next request comes.
	IdleTimeout interface{} `field:"optional" json:"idleTimeout" yaml:"idleTimeout"`
	// Property masterSlaveServerGroupId: The id of the MasterSlaveServerGroup which use in listener.
	MasterSlaveServerGroupId interface{} `field:"optional" json:"masterSlaveServerGroupId" yaml:"masterSlaveServerGroupId"`
	// Property persistence: The properties of persistence.
	Persistence interface{} `field:"optional" json:"persistence" yaml:"persistence"`
	// Property portRange: Port range, only supports TCP or UDP listener.
	//
	// ListenerPort should be 0 when PortRange is specified.
	PortRange interface{} `field:"optional" json:"portRange" yaml:"portRange"`
	// Property proxyProtocolV2Enabled: Whether to support carrying the client source address to the backend server through the Proxy Protocol.
	//
	// Value:
	// true: Yes
	// false (default): No
	// Note: Only effective TCP or UDP listener.
	ProxyProtocolV2Enabled interface{} `field:"optional" json:"proxyProtocolV2Enabled" yaml:"proxyProtocolV2Enabled"`
	// Property requestTimeout: Specify the request timeout in seconds.
	//
	// Valid value: 1-180 If no response is received from the backend server during the specified timeout period, Server Load Balancer will stop waiting and send an HTTP 504 error to the client.
	RequestTimeout interface{} `field:"optional" json:"requestTimeout" yaml:"requestTimeout"`
	// Property scheduler: The scheduling algorithm.
	//
	// Valid values:
	// wrr: Backend servers that have higher weights receive more requests than those that have lower weights.
	// wlc: Requests are distributed based on the combination of the weights and connections to backend servers. If two backend servers have the same weight, the backend server that has fewer connections receives more requests.
	// rr: Requests are distributed to backend servers in sequence.
	// sch: specifies consistent hashing that is based on source IP addresses. Requests from the same source IP address are distributed to the same backend server.
	// tch: specifies consistent hashing that is based on four factors: source IP address, destination IP address, source port number, and destination port number. Requests that contain the same preceding information are distributed to the same backend server.
	// Default: wrr.
	Scheduler interface{} `field:"optional" json:"scheduler" yaml:"scheduler"`
	// Property serverCertificateId: Server certificate id, for https listener only, this properties is required.
	ServerCertificateId interface{} `field:"optional" json:"serverCertificateId" yaml:"serverCertificateId"`
	// Property startListener: Whether start listener after listener created.
	//
	// Default True.
	StartListener interface{} `field:"optional" json:"startListener" yaml:"startListener"`
	// Property tags: Tags to attach to instance.
	//
	// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
	Tags *[]*RosListener_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	// Property tlsCipherPolicy: The Transport Layer Security (TLS) security policy.
	//
	// Each security policy contains TLS protocol versions and cipher suites available for HTTPS. It takes effect when Protocol=https.
	TlsCipherPolicy interface{} `field:"optional" json:"tlsCipherPolicy" yaml:"tlsCipherPolicy"`
	// Property vServerGroupId: The id of the VServerGroup which use in listener.
	VServerGroupId interface{} `field:"optional" json:"vServerGroupId" yaml:"vServerGroupId"`
}

