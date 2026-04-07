package alicloudroscdkmongodb


type RosInstance_AuditPolicyOptionsProperty struct {
	AuditStatus interface{} `field:"required" json:"auditStatus" yaml:"auditStatus"`
	AuditLogSwitchSource interface{} `field:"optional" json:"auditLogSwitchSource" yaml:"auditLogSwitchSource"`
	ServiceType interface{} `field:"optional" json:"serviceType" yaml:"serviceType"`
	StoragePeriod interface{} `field:"optional" json:"storagePeriod" yaml:"storagePeriod"`
}

