package alicloudroscdkvpc


// Properties for defining a `TrafficQosRule`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-trafficqosrule
type TrafficQosRuleProps struct {
	// Property priority: The priority of the QoS rule.
	//
	// Valid values: 1 to 9000. A larger value indicates a higher priority. The priority of each QoS rule must be unique in the same QoS policy.
	Priority interface{} `field:"required" json:"priority" yaml:"priority"`
	// Property protocol: QoS rule protocol type, value: - **ALL** - **ICMP(IPv4)** - **ICMPv6(IPv6)* * - **TCP** - **UDP** - **GRE** - **SSH** - **Telnet** - **HTTP** - **HTTPS** - **MS SQL** - **Oracle** - **MySql** - **RDP** - **PostgreSQL** - **Redis**.
	Protocol interface{} `field:"required" json:"protocol" yaml:"protocol"`
	// Property qosId: The QoS policy ID.
	QosId interface{} `field:"required" json:"qosId" yaml:"qosId"`
	// Property queueId: The QoS queue ID.
	QueueId interface{} `field:"required" json:"queueId" yaml:"queueId"`
	// Property dstCidr: The destination IPv4 CIDR block that matches the QoS rule traffic.
	//
	// > If this parameter is not supported, enter **SrcIPv6Cidr** or **DstIPv6Cidr * *.
	DstCidr interface{} `field:"optional" json:"dstCidr" yaml:"dstCidr"`
	// Property dstIpv6Cidr: The QoS rule traffic matches the Destination IPv6 network segment.
	//
	// > If this parameter is not supported, enter **SrcCidr** or **DstCidr * *.
	DstIpv6Cidr interface{} `field:"optional" json:"dstIpv6Cidr" yaml:"dstIpv6Cidr"`
	// Property dstPortRange: QoS rule traffic matches the destination port number range.
	//
	// Value range: **0** to **65535**. If not, the value is -1. Currently, only a single port number is supported, and the start and end of the port number must be the same. The corresponding destination port number range is fixed for different protocol types. The values are as follows:
	// - **ALL**:-1\/-1, not editable.
	// - **ICMP(IPv4)**:-1\/-1, non-editable.
	// - **ICMPv6(IPv6)**:-1\/-1, non-editable.
	// - **TCP**:-1\/-1, editable.
	// - **UDP**:-1\/-1, editable.
	// - **GRE**:-1\/-1, not editable.
	// - **SSH**:22\/22, not editable.
	// - **Telnet**:23\/23, not editable.
	// - **HTTP**:80\/80, non-editable.
	// - **HTTPS**:443\/443, which cannot be edited.
	// - **MS SQL**:1443\/1443, which cannot be edited.
	// - **Oracle**:1521\/1521, non-editable.
	// - **MySql**:3306\/3306, non-editable.
	// - **RDP**:3389\/3389, non-editable.
	// - **PostgreSQL**:5432\/5432, non-editable.
	// - **Redis**:6379\/6379, non-editable.
	DstPortRange interface{} `field:"optional" json:"dstPortRange" yaml:"dstPortRange"`
	// Property matchDscp: The DSCP value that matches the QoS rule traffic.
	//
	// Valid values: 0 to 63. If no value is matched, the value is -1.
	MatchDscp interface{} `field:"optional" json:"matchDscp" yaml:"matchDscp"`
	// Property remarkingDscp: The new DSCP value.
	//
	// Valid values: 0 to 63. If you do not change the value, set the value to -1.
	RemarkingDscp interface{} `field:"optional" json:"remarkingDscp" yaml:"remarkingDscp"`
	// Property ruleDescription: The description of the QoS rule.
	//
	// The length is 0 to 256 characters and cannot start with 'http:\/\/ 'or 'https.
	RuleDescription interface{} `field:"optional" json:"ruleDescription" yaml:"ruleDescription"`
	// Property ruleName: The name of the QoS rule.
	//
	// The length is 0 to 128 characters and cannot start with 'http:\/\/ 'or 'https.
	RuleName interface{} `field:"optional" json:"ruleName" yaml:"ruleName"`
	// Property srcCidr: The source IPv4 CIDR block that matches the QoS rule traffic.
	//
	// > If this parameter is not supported, enter **SrcIPv6Cidr** or **DstIPv6Cidr * *.
	SrcCidr interface{} `field:"optional" json:"srcCidr" yaml:"srcCidr"`
	// Property srcIpv6Cidr: The QoS rule traffic matches the source IPv6 network segment.
	//
	// > If this parameter is not supported, enter **SrcCidr** or **DstCidr * *.
	SrcIpv6Cidr interface{} `field:"optional" json:"srcIpv6Cidr" yaml:"srcIpv6Cidr"`
	// Property srcPortRange: The source port number of the QoS rule traffic matching.
	//
	// The value range is **0** to **65535**. If the traffic does not match, the value is -1. Currently, only a single port number is supported, and the start and end of the port number must be the same.
	SrcPortRange interface{} `field:"optional" json:"srcPortRange" yaml:"srcPortRange"`
}

