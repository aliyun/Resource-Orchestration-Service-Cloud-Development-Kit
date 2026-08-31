package alicloudroscdkecs


// Properties for defining a `SecurityGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-securitygroup
type SecurityGroupProps struct {
	// Property description: The description of the security group.
	//
	// The description must be 2 to 256
	// characters in length. It cannot start with `http:\/\/` or `https:\/\/`.
	// By default, this parameter is left empty.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property resourceGroupId: Resource group id.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property securityGroupEgress: egress rules for the security group.
	SecurityGroupEgress interface{} `field:"optional" json:"securityGroupEgress" yaml:"securityGroupEgress"`
	// Property securityGroupIngress: Ingress rules for the security group.
	SecurityGroupIngress interface{} `field:"optional" json:"securityGroupIngress" yaml:"securityGroupIngress"`
	// Property securityGroupName: The name of the security group.
	//
	// The name must be 2 to 128 characters in length.
	// The name must start with a letter and cannot start with `http:\/\/` or `https:\/\/`.
	// The name can contain letters, digits, colons (:), underscores (_), periods (.),
	// and hyphens (-).
	SecurityGroupName interface{} `field:"optional" json:"securityGroupName" yaml:"securityGroupName"`
	// Property securityGroupType: The type of the security group.
	//
	// Valid values:
	// - normal: basic security group
	// - enterprise: advanced security group
	// Default value: normal.
	SecurityGroupType interface{} `field:"optional" json:"securityGroupType" yaml:"securityGroupType"`
	// Property tags: Tags to attach to security group.
	//
	// Max support 20 tags to add during create security group. Each tag with two properties Key and Value, and Key is required.
	Tags *[]*RosSecurityGroup_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	// Property vpcId: The ID of the VPC in which you want to create the security group.
	//
	// > The VpcId parameter is required only if you want to create security groups of
	// the VPC type.
	VpcId interface{} `field:"optional" json:"vpcId" yaml:"vpcId"`
}

