package alicloudroscdkredis


// Properties for defining a `AuditLogConfig`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-redis-auditlogconfig
type AuditLogConfigProps struct {
	// Property instanceId: The ID of the instance.
	//
	// You can call the DescribeInstances operation to query the ID of the instance.
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	// Property retention: The retention period of audit logs.
	//
	// Valid values: 1 to 365. Unit: days.
	// Note: The value of this parameter takes effect for all ApsaraDB for Redis instances in the current region.
	Retention interface{} `field:"required" json:"retention" yaml:"retention"`
}

