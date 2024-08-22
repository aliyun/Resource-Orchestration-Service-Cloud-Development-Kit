package alicloudroscdkens


// Properties for defining a `SecurityGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-securitygroup
type SecurityGroupProps struct {
	// Property description: The description of the security group.
	//
	// The description must be 2 to 256 characters in length. It must start with a letter but cannot start with http:\/\/ or https:\/\/.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property securityGroupEgress: egress rules for the security group.
	SecurityGroupEgress interface{} `field:"optional" json:"securityGroupEgress" yaml:"securityGroupEgress"`
	// Property securityGroupIngress: Ingress rules for the security group.
	SecurityGroupIngress interface{} `field:"optional" json:"securityGroupIngress" yaml:"securityGroupIngress"`
	// Property securityGroupName: The name of the security group.
	//
	// The name must be 2 to 128 characters in length. The name must start with a letter and cannot start with http:\/\/ or https:\/\/. It can contain letters, digits, colons (:), underscores (_), and hyphens (-). By default, this parameter is empty.
	SecurityGroupName interface{} `field:"optional" json:"securityGroupName" yaml:"securityGroupName"`
}

