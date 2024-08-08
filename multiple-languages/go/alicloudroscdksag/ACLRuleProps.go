package alicloudroscdksag


// Properties for defining a `ACLRule`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-aclrule
type ACLRuleProps struct {
	// Property aclId: Access control ID.
	AclId interface{} `field:"required" json:"aclId" yaml:"aclId"`
	// Property destCidr: Destination address, CIDR format and IP address range in IPv4 format.
	DestCidr interface{} `field:"required" json:"destCidr" yaml:"destCidr"`
	// Property destPortRange: Destination port range, 80\/80.
	DestPortRange interface{} `field:"required" json:"destPortRange" yaml:"destPortRange"`
	// Property direction: Regular direction.
	//
	// Value: in|out.
	Direction interface{} `field:"required" json:"direction" yaml:"direction"`
	// Property ipProtocol: Protocol, not case sensitive.
	IpProtocol interface{} `field:"required" json:"ipProtocol" yaml:"ipProtocol"`
	// Property policy: Access: accept|drop.
	Policy interface{} `field:"required" json:"policy" yaml:"policy"`
	// Property sourceCidr: Source address, CIDR format and IP address range in IPv4 format.
	SourceCidr interface{} `field:"required" json:"sourceCidr" yaml:"sourceCidr"`
	// Property sourcePortRange: Source port range, 80\/80.
	SourcePortRange interface{} `field:"required" json:"sourcePortRange" yaml:"sourcePortRange"`
	// Property description: Rule description information, ranging from 1 to 512 characters.
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
	// Property name: The name of the ACL rule.
	//
	// The name must be 2 to 100 characters in length, and can contain digits, underscores
	// (_), and hyphens (-). It must start with a letter.
	Name interface{} `field:"optional" json:"name" yaml:"name"`
	// Property priority: Priority, ranging from 1 to 100.
	//
	// Default: 1.
	Priority interface{} `field:"optional" json:"priority" yaml:"priority"`
	// Property type: The type of the ACL rule: Valid values: LAN: The ACL rule controls traffic of private IP addresses.
	//
	// This is the default value.
	// WAN: The ACL rule controls traffic of public IP addresses.
	Type interface{} `field:"optional" json:"type" yaml:"type"`
}

