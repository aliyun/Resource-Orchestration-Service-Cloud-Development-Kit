package alicloudroscdkredis


// Properties for defining a `RosAuditLogConfig`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-redis-auditlogconfig
type RosAuditLogConfigProps struct {
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	Retention interface{} `field:"required" json:"retention" yaml:"retention"`
}

