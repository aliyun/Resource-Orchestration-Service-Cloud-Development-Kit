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
	// Property applicationName: Application types supported by the security policy.
	//
	// The following types of applications are supported: ANY, HTTP, HTTPS, MySQL, SMTP, SMTPS, RDP, VNC, SSH, Redis, MQTT, MongoDB, Memcache, SSL
	// NOTE ANY indicates that the policy is applied to all types of applications.
	ApplicationName interface{} `field:"required" json:"applicationName" yaml:"applicationName"`
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
	// Property proto: The type of security protocol for traffic access in the security access control policy.
	//
	// Can be set to ANY when you are not sure of the specific protocol type.
	// Allowed values: ANY, TCP, UDP, ICMP.
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
	// Property destPort: Security access control policy access traffic destination port.
	//
	// Note When DestPortType to port, set the item.
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
	// Property regionId: Region ID.
	//
	// Default to cn-hangzhou.
	RegionId interface{} `field:"optional" json:"regionId" yaml:"regionId"`
}

