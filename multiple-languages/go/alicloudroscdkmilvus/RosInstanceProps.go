package alicloudroscdkmilvus


// Properties for defining a `RosInstance`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-milvus-instance
type RosInstanceProps struct {
	Components interface{} `field:"required" json:"components" yaml:"components"`
	DbAdminPassword interface{} `field:"required" json:"dbAdminPassword" yaml:"dbAdminPassword"`
	DbVersion interface{} `field:"required" json:"dbVersion" yaml:"dbVersion"`
	InstanceName interface{} `field:"required" json:"instanceName" yaml:"instanceName"`
	PaymentType interface{} `field:"required" json:"paymentType" yaml:"paymentType"`
	VpcId interface{} `field:"required" json:"vpcId" yaml:"vpcId"`
	VSwitchIds interface{} `field:"required" json:"vSwitchIds" yaml:"vSwitchIds"`
	ZoneId interface{} `field:"required" json:"zoneId" yaml:"zoneId"`
	AiFunction interface{} `field:"optional" json:"aiFunction" yaml:"aiFunction"`
	AutoBackup interface{} `field:"optional" json:"autoBackup" yaml:"autoBackup"`
	AutoPay interface{} `field:"optional" json:"autoPay" yaml:"autoPay"`
	AutoRenew interface{} `field:"optional" json:"autoRenew" yaml:"autoRenew"`
	BackupRestoreInfo interface{} `field:"optional" json:"backupRestoreInfo" yaml:"backupRestoreInfo"`
	Configuration interface{} `field:"optional" json:"configuration" yaml:"configuration"`
	Encrypted interface{} `field:"optional" json:"encrypted" yaml:"encrypted"`
	Ha interface{} `field:"optional" json:"ha" yaml:"ha"`
	IsMultiAzStorage interface{} `field:"optional" json:"isMultiAzStorage" yaml:"isMultiAzStorage"`
	KmsKeyId interface{} `field:"optional" json:"kmsKeyId" yaml:"kmsKeyId"`
	LoadReplicas interface{} `field:"optional" json:"loadReplicas" yaml:"loadReplicas"`
	MultiZoneMode interface{} `field:"optional" json:"multiZoneMode" yaml:"multiZoneMode"`
	PaymentDuration interface{} `field:"optional" json:"paymentDuration" yaml:"paymentDuration"`
	PaymentDurationUnit interface{} `field:"optional" json:"paymentDurationUnit" yaml:"paymentDurationUnit"`
	PromotionNo interface{} `field:"optional" json:"promotionNo" yaml:"promotionNo"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	Tags *[]*RosInstance_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

