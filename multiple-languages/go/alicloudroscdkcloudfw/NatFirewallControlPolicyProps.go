package alicloudroscdkcloudfw


// Properties for defining a `NatFirewallControlPolicy`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-natfirewallcontrolpolicy
type NatFirewallControlPolicyProps struct {
	// Property aclAction: The action that Cloud Firewall performs on the traffic.Valid values: accept: allows the traffic. drop: denies the traffic. log: monitors the traffic.
	AclAction interface{} `field:"required" json:"aclAction" yaml:"aclAction"`
	// Property applicationNameList: The application types supported by the access control policy.
	ApplicationNameList interface{} `field:"required" json:"applicationNameList" yaml:"applicationNameList"`
	// Property description: The description of the access control policy.
	Description interface{} `field:"required" json:"description" yaml:"description"`
	// Property destination: The destination address in the access control policy.
	//
	// Valid values:
	// If DestinationType is set to net, the value of this parameter is a CIDR block.
	// Example: 1.2.XX.XX\/24
	// If DestinationType is set to group, the value of this parameter is an address book.
	// Example: db_group
	// If DestinationType is set to domain, the value of this parameter is a domain name.
	// Example: *.aliyuncs.com
	// DestinationType is set to location, the value of this parameter is a location.
	// Example: ["BJ11", "ZB"].
	Destination interface{} `field:"required" json:"destination" yaml:"destination"`
	// Property destinationType: The type of the destination address in the access control policy.
	//
	// Valid values:
	// net: CIDR block
	// group: address book
	// domain: domain name.
	DestinationType interface{} `field:"required" json:"destinationType" yaml:"destinationType"`
	// Property direction: The direction of the traffic to which the access control policy applies.
	//
	// Valid values:
	// out: outbound traffic.
	Direction interface{} `field:"required" json:"direction" yaml:"direction"`
	// Property natGatewayId: The ID of the NAT gateway.
	NatGatewayId interface{} `field:"required" json:"natGatewayId" yaml:"natGatewayId"`
	// Property newOrder: The priority of the access control policy.
	//
	// The priority value starts from 1. A small priority value indicates a high priority.
	NewOrder interface{} `field:"required" json:"newOrder" yaml:"newOrder"`
	// Property proto: The protocol type in the access control policy.Valid values: ANY: all types of protocols TCP UDP ICMP.
	Proto interface{} `field:"required" json:"proto" yaml:"proto"`
	// Property source: The source address in the access control policy.Valid values: If SourceType is set to net, the value of Source is a CIDR block.Example: 10.2.4.0\/24 If SourceType is set to group, the value of this parameter must be an address book name.Example: db_group.
	Source interface{} `field:"required" json:"source" yaml:"source"`
	// Property sourceType: The type of the source address in the access control policy.Valid values: net: source CIDR block group: source address book.
	SourceType interface{} `field:"required" json:"sourceType" yaml:"sourceType"`
	// Property destPort: The destination port in the access control policy.
	//
	// Valid values:
	// If Proto is set to ICMP, DestPort is automatically left empty.
	// If Proto is set to TCP, UDP, or ANY and DestPortType is set to group, DestPort is empty.
	// If Proto is set to TCP, UDP, or ANY and DestPortType is set to port, the value of DestPort is the destination port number.
	DestPort interface{} `field:"optional" json:"destPort" yaml:"destPort"`
	// Property destPortGroup: The name of the destination port address book in the access control policy.
	DestPortGroup interface{} `field:"optional" json:"destPortGroup" yaml:"destPortGroup"`
	// Property destPortType: The type of the destination port in the access control policy.
	//
	// Valid values:
	// net: source CIDR block
	// group: source address book.
	DestPortType interface{} `field:"optional" json:"destPortType" yaml:"destPortType"`
	// Property domainResolveType: The domain name resolution method of the access control policy.
	//
	// Valid values:
	// 0: fully qualified domain name (FQDN)-based resolution
	// 1: Domain Name System (DNS)-based dynamic resolution
	// 2: FQDN and DNS-based dynamic resolution.
	DomainResolveType interface{} `field:"optional" json:"domainResolveType" yaml:"domainResolveType"`
	// Property endTime: The time when the access control policy stops taking effect.
	//
	// The value is a UNIX timestamp. Unit: seconds. The value must be on the hour or on the half hour, and at least 30 minutes later than the value of StartTime.
	EndTime interface{} `field:"optional" json:"endTime" yaml:"endTime"`
	// Property ipVersion: The IP version supported by the access control policy.
	//
	// Valid values:
	// 4: IPv4 (default).
	IpVersion interface{} `field:"optional" json:"ipVersion" yaml:"ipVersion"`
	// Property release: Specifies whether to enable the access control policy.
	//
	// By default, an access control policy is enabled after it is created. Valid values:
	// true
	// false.
	Release interface{} `field:"optional" json:"release" yaml:"release"`
	// Property repeatDays: The days of a week or of a month on which the access control policy takes effect.
	//
	// If RepeatType is set to Permanent, None, or Daily, RepeatDays is left empty. Example: [].
	// If RepeatType is set to Weekly, RepeatDays must be specified. Example: [0, 6].
	// If RepeatType is set to Monthly, RepeatDays must be specified. Example: [1, 31].
	RepeatDays interface{} `field:"optional" json:"repeatDays" yaml:"repeatDays"`
	// Property repeatEndTime: The point in time when the recurrence ends.
	//
	// Example: 23:30. The value must be on the hour or on the half hour, and at least 30 minutes later than the value of RepeatStartTime.
	RepeatEndTime interface{} `field:"optional" json:"repeatEndTime" yaml:"repeatEndTime"`
	// Property repeatStartTime: The point in time when the recurrence starts.
	//
	// Example: 08:00. The value must be on the hour or on the half hour, and at least 30 minutes earlier than the value of RepeatEndTime.
	RepeatStartTime interface{} `field:"optional" json:"repeatStartTime" yaml:"repeatStartTime"`
	// Property repeatType: The recurrence type for the access control policy to take effect.
	//
	// Valid values:
	// Permanent (default): The policy always takes effect.
	// None: The policy takes effect for only once.
	// Daily: The policy takes effect on a daily basis.
	// Weekly: The policy takes effect on a weekly basis.
	// Monthly: The policy takes effect on a monthly basis.
	RepeatType interface{} `field:"optional" json:"repeatType" yaml:"repeatType"`
	// Property startTime: The time when the access control policy starts to take effect.
	//
	// The value is a UNIX timestamp. Unit: seconds. The value must be on the hour or on the half hour, and at least 30 minutes earlier than the value of EndTime.
	StartTime interface{} `field:"optional" json:"startTime" yaml:"startTime"`
}

