package alicloudroscdkkafka


// Properties for defining a `Acl`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kafka-acl
type AclProps struct {
	// Property aclOperationTypes: The types of operations allowed by the ACL.
	AclOperationTypes interface{} `field:"required" json:"aclOperationTypes" yaml:"aclOperationTypes"`
	// Property aclResourceName: The resource name.
	//
	// The value can be a topic name, a group ID, a cluster name, or a transaction ID.
	// You can use an asterisk (*) to specify the names of all resources of the specified type.
	// Note You can use an asterisk (*) to query the resources on which permissions are granted only after you grant the user the required permissions on all resources.
	AclResourceName interface{} `field:"required" json:"aclResourceName" yaml:"aclResourceName"`
	// Property aclResourcePatternType: The matching mode.
	//
	// Valid values:
	// LITERAL: exact match
	// PREFIXED: prefix match.
	AclResourcePatternType interface{} `field:"required" json:"aclResourcePatternType" yaml:"aclResourcePatternType"`
	// Property aclResourceType: The resource type.
	//
	// Valid values:
	// Topic
	// Group
	// Cluster
	// TransactionalId: transactional ID.
	AclResourceType interface{} `field:"required" json:"aclResourceType" yaml:"aclResourceType"`
	// Property instanceId: The instance ID.
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	// Property username: The username.
	//
	// You can use an asterisk (*) to specify all usernames.
	// Note You can use an asterisk (*) to query the authorized users only after you grant the required permissions to all users.
	Username interface{} `field:"required" json:"username" yaml:"username"`
	// Property aclPermissionType: The authorization method.
	//
	// Valid values:
	// DENY
	// ALLOW
	// Note This parameter is available only for ApsaraMQ for Kafka V3 serverless instances.
	AclPermissionType interface{} `field:"optional" json:"aclPermissionType" yaml:"aclPermissionType"`
	// Property host: The source IP address.
	//
	// Note
	// You can specify only a specific IP address or use the asterisk (*) wildcard character to specify all IP addresses. CIDR blocks are not supported.
	// This parameter is available only for ApsaraMQ for Kafka V3 serverless instances.
	Host interface{} `field:"optional" json:"host" yaml:"host"`
}

