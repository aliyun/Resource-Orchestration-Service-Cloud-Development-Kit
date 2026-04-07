package alicloudroscdkmongodb


// Properties for defining a `AuditPolicy`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mongodb-auditpolicy
type AuditPolicyProps struct {
	// Property auditStatus: Audit state, Valid values: `enable`, `disabled`.
	AuditStatus interface{} `field:"required" json:"auditStatus" yaml:"auditStatus"`
	// Property dbInstanceId: Database Instance Id.
	DbInstanceId interface{} `field:"required" json:"dbInstanceId" yaml:"dbInstanceId"`
	// Property storagePeriod: Audit log retention duration.
	//
	// The value range is 1 to 365 days. The default value is 30 days.
	StoragePeriod interface{} `field:"optional" json:"storagePeriod" yaml:"storagePeriod"`
}

