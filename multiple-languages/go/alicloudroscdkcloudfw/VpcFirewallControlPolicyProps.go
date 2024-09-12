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
	ApplicationName interface{} `field:"optional" json:"applicationName" yaml:"applicationName"`
	// Property applicationNameList: List of application types supported by the access control policy.
	ApplicationNameList interface{} `field:"optional" json:"applicationNameList" yaml:"applicationNameList"`
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
	// Property endTime: The end time of the policy validity period for an access control policy.
	//
	// It is represented in a second-level timestamp format. It must be the whole hour or half hour, and at least half an hour greater than the start time.
	// Notes: When RepeatType is Permanent, EndTime is empty. When RepeatType is None, Daily, Weekly, Monthly, EndTime must havea value, and you need to set the end time.
	EndTime interface{} `field:"optional" json:"endTime" yaml:"endTime"`
	// Property lang: The natural language of the request and response.
	//
	// Valid values:
	// zh: Chinese
	// en: English.
	Lang interface{} `field:"optional" json:"lang" yaml:"lang"`
	// Property memberUid: Member account UID of current Alibaba Cloud account.
	MemberUid interface{} `field:"optional" json:"memberUid" yaml:"memberUid"`
	// Property regionId: Region ID.
	//
	// Default to cn-hangzhou.
	RegionId interface{} `field:"optional" json:"regionId" yaml:"regionId"`
	// Property release: The enabled state of the access control policy.
	//
	// This policy is enabled by default when it is created. Value:
	// - true: Access control policy is enabled
	// - false: Access control policy is not enabled.
	Release interface{} `field:"optional" json:"release" yaml:"release"`
	// Property repeatDays: A collection of repeated dates of policy validity for an access control policy.
	//
	// When RepeatType is Permanent, None, and Daily, RepeatDays is an empty set. For example: []
	// When RepeatType is Weekly, RepeatDays cannot be empty. Example: [0, 6]
	// Notes: When RepeatType is set to Weekly, RepeatDays is not allowed.
	// When RepeatType is Monthly, RepeatDays cannot be empty. Examples: [1, 31]
	// Notes: When RepeatType is set to Monthly, RepeatDays is not allowed to repeat.
	RepeatDays interface{} `field:"optional" json:"repeatDays" yaml:"repeatDays"`
	// Property repeatEndTime: The repeated end time of the policy validity period for an access control policy.
	//
	// For example: 08:00, must be the hour or half time, and less than the repeat start time at least half an hour.
	// Notes: When RepeatType is Permanent and None, RepeatEndTime is empty. When RepeatType is Daily, Weekly, or Monthly, RepeatEndTime musthave a value, and you need to set the repeat end time.
	RepeatEndTime interface{} `field:"optional" json:"repeatEndTime" yaml:"repeatEndTime"`
	// Property repeatStartTime: The repeated start time of the policy validity period for an access control policy.
	//
	// For example: 08:00, must be the hour or half time, and less than the repeat end time at least half an hour.
	// Notes: When RepeatType is Permanent and None, RepeatStartTime is empty. When RepeatType is Daily, Weekly, or Monthly, RepeatStartTime must have a value, and you need to set the repeat start time.
	RepeatStartTime interface{} `field:"optional" json:"repeatStartTime" yaml:"repeatStartTime"`
	// Property repeatType: The repetition type of the policy validity period for an access control policy.
	//
	// Valid values:
	// - Permanent (default)
	// - None
	// - Daily
	// - Weekly
	// - Monthly.
	RepeatType interface{} `field:"optional" json:"repeatType" yaml:"repeatType"`
	// Property startTime: The start time of the policy validity period for an access control policy.
	//
	// It is represented in a second-level timestamp format. It must be the whole hour or half hour, and at least half an hour less than the end time.
	// Notes: When RepeatType is Permanent, StartTime is empty. When RepeatType is None, Daily, Weekly, Monthly, StartTime must have a value, and you need to set the start time.
	StartTime interface{} `field:"optional" json:"startTime" yaml:"startTime"`
}

