package alicloudroscdkvpc


// Properties for defining a `NetworkAcl`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-networkacl
type NetworkAclProps struct {
	// Property vpcId: The ID of the virtual private cloud (VPC) to which the network ACL belongs.
	//
	// If the VPC contains Elastic Compute Service (ECS) instances of the following
	// instance families, you must upgrade the ECS instances or release the ECS
	// instances. Otherwise, you cannot create a network ACL for the VPC.
	// ecs.c1, ecs.c2, ecs.c4, ecs.c5, ecs.ce4, ecs.cm4, ecs.d1, ecs.e3, ecs.e4,
	// ecs.ga1, ecs.gn4, ecs.gn5, ecs.i1, ecs.m1, ecs.m2, ecs.mn4, ecs.n1, ecs.n2,
	// ecs.n4, ecs.s1, ecs.s2, ecs.s3, ecs.se1, ecs.sn1, ecs.sn2, ecs.t1, and ecs.xn4.
	// >  If the VPC contains an ECS instance that does not support network ACLs,
	// upgrade the ECS instance.
	VpcId interface{} `field:"required" json:"vpcId" yaml:"vpcId"`
	// Property description: The description of the network ACL.
	//
	// The description must be 1 to 256 characters in length, and cannot start with
	// `http:\/\/` or `https:\/\/`.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property egressAclEntries: The list of egress network ACL entries.
	EgressAclEntries interface{} `field:"optional" json:"egressAclEntries" yaml:"egressAclEntries"`
	// Property ingressAclEntries: The list of ingress network ACL entries.
	IngressAclEntries interface{} `field:"optional" json:"ingressAclEntries" yaml:"ingressAclEntries"`
	// Property networkAclName: The name of the network ACL.
	//
	// The name must be 1 to 128 characters in length, and cannot start with `http:\/\/`
	// or `https:\/\/`.
	NetworkAclName interface{} `field:"optional" json:"networkAclName" yaml:"networkAclName"`
}

