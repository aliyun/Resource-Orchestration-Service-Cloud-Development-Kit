package alicloudroscdkcloudfw


// Properties for defining a `VpcFirewallControlPolicy`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-vpcfirewallcontrolpolicy
type VpcFirewallControlPolicyProps struct {
	// Property aclAction: The action that Cloud Firewall performs on the traffic.
	//
	// Valid values:
	// accept: allows the traffic.
	// drop: denies the traffic.
	// log: monitors the traffic.
	AclAction interface{} `field:"required" json:"aclAction" yaml:"aclAction"`
	// Property applicationName: The application type that the access control policy supports.
	//
	// Valid values:
	// ANY (indicates that all application types are supported)
	// FTP
	// HTTP
	// HTTPS
	// MySQL
	// SMTP
	// SMTPS
	// RDP
	// VNC
	// SSH
	// Redis
	// MQTT
	// MongoDB
	// Memcache
	// SSL.
	ApplicationName interface{} `field:"required" json:"applicationName" yaml:"applicationName"`
	// Property description: The description of the access control policy.
	Description interface{} `field:"required" json:"description" yaml:"description"`
	// Property destination: The destination address in the access control policy.
	//
	// Set this parameter in the following way:
	// If the DestinationType parameter is set to net, set the value to a Classless Inter-Domain Routing (CIDR) block.
	// Example: 10.2.3.0\/24.
	// If the DestinationType parameter is set to group, set the value to the name of an address book.
	// Example: db_group.
	// If the DestinationType parameter is set to domain, set the value to a domain name.
	// Example: *.aliyuncs.com.
	Destination interface{} `field:"required" json:"destination" yaml:"destination"`
	// Property destinationType: The type of the destination address in the access control policy.
	//
	// Valid values:
	// net: CIDR block
	// group: address book
	// domain: domain name.
	DestinationType interface{} `field:"required" json:"destinationType" yaml:"destinationType"`
	// Property newOrder: The priority of the access control policy.
	//
	// The priority value starts from 1. A smaller priority value indicates a higher priority.
	// Note The value of -1 indicates the lowest priority.
	NewOrder interface{} `field:"required" json:"newOrder" yaml:"newOrder"`
	// Property proto: The type of the security protocol in the access control policy.
	Proto interface{} `field:"required" json:"proto" yaml:"proto"`
	// Property source: The source address in the access control policy.
	//
	// If the SourceType parameter is set to net, set the value to a CIDR block. Example: 10.2.3.0\/24.
	// If the SourceType parameter is set to group, set the value to the name of an address book. Example: db_group.
	Source interface{} `field:"required" json:"source" yaml:"source"`
	// Property sourceType: The type of the source address in the access control policy.
	//
	// Valid values:
	// net: CIDR block
	// group: address book.
	SourceType interface{} `field:"required" json:"sourceType" yaml:"sourceType"`
	// Property vpcFirewallId: The ID of the policy group to which you want to add the access control policy.
	//
	// If the VPC firewall is used to protect CEN, set the value to the ID of the CEN instance
	// that the VPC firewall protects. Example: cen-ervw5jbw1234*****.
	// If the VPC firewall is used to protect Express Connect, set the value to the ID of
	// the VPC firewall instance. Example: vfw-a42bbb748c91234*****.
	// Note You can call the DescribeVpcFirewallAclGroupList operation to query the ID of the policy group.
	VpcFirewallId interface{} `field:"required" json:"vpcFirewallId" yaml:"vpcFirewallId"`
	// Property destPort: The destination port in the access control policy.
	//
	// Note This parameter must be specified if the DestPortType parameter is set to port.
	DestPort interface{} `field:"optional" json:"destPort" yaml:"destPort"`
	// Property destPortGroup: The address book of destination ports in the access control policy.
	//
	// Note This parameter must be specified if the DestPortType parameter is set to group.
	DestPortGroup interface{} `field:"optional" json:"destPortGroup" yaml:"destPortGroup"`
	// Property destPortType: The type of the destination port in the access control policy.
	//
	// Valid values:
	// port: port
	// group: address book.
	DestPortType interface{} `field:"optional" json:"destPortType" yaml:"destPortType"`
	// Property lang: The natural language of the request and response.
	//
	// Valid values:
	// zh: Chinese
	// en: English.
	Lang interface{} `field:"optional" json:"lang" yaml:"lang"`
	// Property regionId: Region ID.
	//
	// Default to cn-hangzhou.
	RegionId interface{} `field:"optional" json:"regionId" yaml:"regionId"`
}

