package alicloudroscdksag


// Properties for defining a `QosPolicy`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-qospolicy
type QosPolicyProps struct {
	// Property destCidr: The range of the destination IP addresses.
	//
	// Specify the value of this parameter in CIDR notation. Example: 192.168.10.0\/24.
	DestCidr interface{} `field:"required" json:"destCidr" yaml:"destCidr"`
	// Property destPortRange: The range of destination ports.
	//
	// Valid values: 1 to 65535 and -1.
	// Set this parameter in one of the following formats:
	// 1\/200: a port range from 1 to 200
	// 80\/80: port 80
	// -1\/-1: all ports.
	DestPortRange interface{} `field:"required" json:"destPortRange" yaml:"destPortRange"`
	// Property ipProtocol: The type of the protocol that applies to the traffic classification rule.
	//
	// The supported protocols provided in this topic are for reference only. The actual
	// protocols in the console shall prevail.
	IpProtocol interface{} `field:"required" json:"ipProtocol" yaml:"ipProtocol"`
	// Property priority: The priority of the traffic throttling policy to which the traffic classification rule belongs.
	Priority interface{} `field:"required" json:"priority" yaml:"priority"`
	// Property qosId: The ID of the QoS policy.
	QosId interface{} `field:"required" json:"qosId" yaml:"qosId"`
	// Property sourceCidr: The range of the source IP addresses.
	//
	// Specify the value of this parameter in CIDR notation. Example: 192.168.1.0\/24.
	SourceCidr interface{} `field:"required" json:"sourceCidr" yaml:"sourceCidr"`
	// Property sourcePortRange: The range of source ports.
	//
	// Valid values: 1 to 65535 and -1.
	// Set this parameter in one of the following formats:
	// 1\/200: a port range from 1 to 200
	// 80\/80: port 80
	// -1\/-1: all ports.
	SourcePortRange interface{} `field:"required" json:"sourcePortRange" yaml:"sourcePortRange"`
	// Property description: The description of the traffic classification rule.
	//
	// The description must be 1 to 512 characters in length and can contain letters, digits,
	// underscores (_), and hyphens (-). It must start with a letter.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property dpiGroupIds: The ID of the application group.
	//
	// You can enter at most 100 application group IDs at a time.
	// You can call the ListDpiGroups operation to query application group IDs and information about the applications.
	DpiGroupIds interface{} `field:"optional" json:"dpiGroupIds" yaml:"dpiGroupIds"`
	// Property dpiSignatureIds: The ID of the application.
	//
	// You can enter at most 100 application IDs at a time.
	// You can call the ListDpiSignatures operation to query application IDs and information about the applications.
	DpiSignatureIds interface{} `field:"optional" json:"dpiSignatureIds" yaml:"dpiSignatureIds"`
	// Property endTime: The time when the traffic classification rule becomes invalid.
	//
	// Specify the time in the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss+0800 format.
	// The time must be in UTC+8.
	EndTime interface{} `field:"optional" json:"endTime" yaml:"endTime"`
	// Property name: The name of the traffic classification rule.
	//
	// The name must be 2 to 100 characters in length, and can contain digits, underscores
	// (_), and hyphens (-). It must start with a letter.
	Name interface{} `field:"optional" json:"name" yaml:"name"`
	// Property startTime: The time when the traffic classification rule takes effect.
	//
	// Specify the time in the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss+0800 format.
	// The time must be in UTC+8.
	StartTime interface{} `field:"optional" json:"startTime" yaml:"startTime"`
}

