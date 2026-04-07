package alicloudroscdkmongodb


// Properties for defining a `RosAuditPolicy`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mongodb-auditpolicy
type RosAuditPolicyProps struct {
	AuditStatus interface{} `field:"required" json:"auditStatus" yaml:"auditStatus"`
	DbInstanceId interface{} `field:"required" json:"dbInstanceId" yaml:"dbInstanceId"`
	StoragePeriod interface{} `field:"optional" json:"storagePeriod" yaml:"storagePeriod"`
}

