package alicloudroscdkcloudfw


// Properties for defining a `ControlPolicy`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-controlpolicy
type ControlPolicyProps struct {
	// Property aclAction: Traffic access control policy set by the cloud of a firewall.
	//
	// accept: Release
	// drop: rejected
	// log: Observation.
	AclAction interface{} `field:"required" json:"aclAction" yaml:"aclAction"`
	// Property description: Security access control policy description information.
	Description interface{} `field:"required" json:"description" yaml:"description"`
	// Property destination: Security Access Control destination address policy.
	//
	// When DestinationType is net, Destination purpose CIDR. For example: 1.2.3.4\/24
	// When DestinationType as a group, Destination for the purpose of the address book name. For example: db_group
	// When DestinationType for the domain, Destination for the purpose of a domain name. For example:. * Aliyuncs.com
	// When DestinationType as location, Destination area for the purpose (see below position encoding specific regions). For example: [ "BJ11", "ZB"]
	Destination interface{} `field:"required" json:"destination" yaml:"destination"`
	// Property destinationType: Security Access Control destination address type of policy.
	//
	// net: Destination network segment (CIDR)
	// group: destination address book
	// domain: The purpose domain
	// location: The purpose area.
	DestinationType interface{} `field:"required" json:"destinationType" yaml:"destinationType"`
	// Property direction: Security access control traffic direction policies.
	//
	// in: internal and external traffic access control
	// out: within the flow of external access control.
	Direction interface{} `field:"required" json:"direction" yaml:"direction"`
	// Property newOrder: Security access control priority policy in force.
	//
	// Priority number increments sequentially from 1, lower the priority number, the higher the priority.
	// Description -1 indicates the lowest priority.
	NewOrder interface{} `field:"required" json:"newOrder" yaml:"newOrder"`
	// Property proto: The protocol type of the traffic in the access control policy.
	//
	// Valid values:
	// - ANY (any protocol)
	// - TCP
	// - UDP
	// - ICMP
	// > If the traffic direction is \`out\` and the destination is a domain-based
	// threat intelligence or cloud service address book, you can set the protocol only
	// to \`TCP\`. The supported applications are HTTP, HTTPS, SMTP, SMTPS, and SSL.
	Proto interface{} `field:"required" json:"proto" yaml:"proto"`
	// Property source: Security access control source address policy.
	//
	// When SourceType for the net, Source is the source CIDR. For example: 1.2.3.0\/24
	// When SourceType as a group, Source name for the source address book. For example: db_group
	// When SourceType as location, Source source region (specific region position encoder see below). For example, [ "BJ11", "ZB"]
	Source interface{} `field:"required" json:"source" yaml:"source"`
	// Property sourceType: Security access control source address type of policy.
	//
	// net: Source segment (CIDR)
	// group: source address book
	// location: the source area.
	SourceType interface{} `field:"required" json:"sourceType" yaml:"sourceType"`
	// Property applicationName: The application type that the access control policy supports.
	//
	// Valid values:
	// - FTP
	// - HTTP
	// - HTTPS
	// - Memcache
	// - MongoDB
	// - MQTT
	// - MySQL
	// - RDP
	// - Redis
	// - SMTP
	// - SMTPS
	// - SSH
	// - SSL_No_Cert
	// - SSL
	// - VNC
	// - ANY (all application types)
	// > The available application types depend on the protocol type (\`Proto\`). If you
	// set \`Proto\` to \`TCP\`, you can set \`ApplicationName\` to any of the listed
	// application types. If you set \`Proto\` to \`UDP\`, \`ICMP\`, or \`ANY\`, you can
	// set \`ApplicationName\` only to \`ANY\`. Specify either \`ApplicationNameList\`
	// or \`ApplicationName\`.
	ApplicationName interface{} `field:"optional" json:"applicationName" yaml:"applicationName"`
	// Property applicationNameList: List of application types supported by the access control policy.
	ApplicationNameList interface{} `field:"optional" json:"applicationNameList" yaml:"applicationNameList"`
	// Property destPort: The destination port in the access control policy.
	//
	// Valid values:
	// - If \`Proto\` is \`ICMP\`, leave this parameter empty.
	// > If the protocol type is ICMP, you cannot control access based on the
	// destination port.
	// - If \`Proto\` is \`TCP\`, \`UDP\`, or \`ANY\`, and \`DestPortType\` is
	// \`group\`, leave this parameter empty.
	// > If you set \`DestPortType\` to \`group\` (port address book), you do not need
	// to specify a destination port number. The port address book contains all the
	// destination ports that the policy manages.
	// - If \`Proto\` is \`TCP\`, \`UDP\`, or \`ANY\`, and \`DestPortType\` is \`port\`,
	// set this parameter to the destination port number.
	DestPort interface{} `field:"optional" json:"destPort" yaml:"destPort"`
	// Property destPortGroup: Security access control policy access traffic destination port address book name.
	//
	// Description DestPortType is group, set the item.
	DestPortGroup interface{} `field:"optional" json:"destPortGroup" yaml:"destPortGroup"`
	// Property destPortType: Security access control policy access destination port traffic type.
	//
	// port: Port
	// group: port address book.
	DestPortType interface{} `field:"optional" json:"destPortType" yaml:"destPortType"`
	// Property domainResolveType: The domain name resolution method of the access control policy.
	//
	// Value:
	// - FQDN: Based on FQDN
	// - DNS: Based on DNS dynamic resolution
	// - FQDN_AND_DNS: Based on FQDN and DNS dynamic resolution.
	DomainResolveType interface{} `field:"optional" json:"domainResolveType" yaml:"domainResolveType"`
	// Property endTime: The end time of the policy validity period for an access control policy.
	//
	// It is represented in a second-level timestamp format. It must be the whole hour or half hour, and at least half an hour greater than the start time.
	// Notes: When RepeatType is Permanent, EndTime is empty. When RepeatType is None, Daily, Weekly, Monthly, EndTime must havea value, and you need to set the end time.
	EndTime interface{} `field:"optional" json:"endTime" yaml:"endTime"`
	// Property ipVersion: IP version.
	//
	// Valid values:
	// - 4: IPv4
	// - 6: IPv6.
	IpVersion interface{} `field:"optional" json:"ipVersion" yaml:"ipVersion"`
	// Property regionId: Region ID.
	//
	// Default to cn-hangzhou.
	RegionId interface{} `field:"optional" json:"regionId" yaml:"regionId"`
	// Property release: The enabled state of the access control policy.
	//
	// This policy is enabled by default when it is created. Valid values:
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

