package alicloudroscdkmilvus


// Properties for defining a `Instance`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-milvus-instance
type InstanceProps struct {
	// Property components: The component specifications of the instance.
	Components interface{} `field:"required" json:"components" yaml:"components"`
	// Property dbAdminPassword: The database administrator password.
	//
	// The password must be 8 to 30 characters in length and contain at least one uppercase letter, lowercase letter, digit, and special character from @#$%^*_+-.
	DbAdminPassword interface{} `field:"required" json:"dbAdminPassword" yaml:"dbAdminPassword"`
	// Property dbVersion: The database engine version.
	DbVersion interface{} `field:"required" json:"dbVersion" yaml:"dbVersion"`
	// Property instanceName: The name of the instance.
	InstanceName interface{} `field:"required" json:"instanceName" yaml:"instanceName"`
	// Property paymentType: The billing method of the instance.
	PaymentType interface{} `field:"required" json:"paymentType" yaml:"paymentType"`
	// Property vpcId: The VPC ID.
	VpcId interface{} `field:"required" json:"vpcId" yaml:"vpcId"`
	// Property vSwitchIds: The vSwitch configurations.
	VSwitchIds interface{} `field:"required" json:"vSwitchIds" yaml:"vSwitchIds"`
	// Property zoneId: The primary zone ID of the instance.
	ZoneId interface{} `field:"required" json:"zoneId" yaml:"zoneId"`
	// Property aiFunction: Whether the AI function is enabled.
	AiFunction interface{} `field:"optional" json:"aiFunction" yaml:"aiFunction"`
	// Property autoBackup: Whether automatic backup is enabled.
	AutoBackup interface{} `field:"optional" json:"autoBackup" yaml:"autoBackup"`
	// Property autoPay: Whether the order is automatically paid.
	AutoPay interface{} `field:"optional" json:"autoPay" yaml:"autoPay"`
	// Property autoRenew: Whether the subscription is automatically renewed.
	AutoRenew interface{} `field:"optional" json:"autoRenew" yaml:"autoRenew"`
	// Property backupRestoreInfo: The backup restore information.
	BackupRestoreInfo interface{} `field:"optional" json:"backupRestoreInfo" yaml:"backupRestoreInfo"`
	// Property configuration: The instance configuration in YAML format.
	Configuration interface{} `field:"optional" json:"configuration" yaml:"configuration"`
	// Property encrypted: Whether OSS encryption is enabled.
	Encrypted interface{} `field:"optional" json:"encrypted" yaml:"encrypted"`
	// Property ha: Whether high availability is enabled.
	Ha interface{} `field:"optional" json:"ha" yaml:"ha"`
	// Property isMultiAzStorage: Whether multi-zone storage is enabled.
	IsMultiAzStorage interface{} `field:"optional" json:"isMultiAzStorage" yaml:"isMultiAzStorage"`
	// Property kmsKeyId: The ID of the KMS key used for encryption.
	KmsKeyId interface{} `field:"optional" json:"kmsKeyId" yaml:"kmsKeyId"`
	// Property loadReplicas: The number of load replicas.
	LoadReplicas interface{} `field:"optional" json:"loadReplicas" yaml:"loadReplicas"`
	// Property multiZoneMode: The multi-zone deployment mode.
	MultiZoneMode interface{} `field:"optional" json:"multiZoneMode" yaml:"multiZoneMode"`
	// Property paymentDuration: The subscription duration.
	PaymentDuration interface{} `field:"optional" json:"paymentDuration" yaml:"paymentDuration"`
	// Property paymentDurationUnit: The unit of the subscription duration.
	PaymentDurationUnit interface{} `field:"optional" json:"paymentDurationUnit" yaml:"paymentDurationUnit"`
	// Property promotionNo: The promotion number.
	PromotionNo interface{} `field:"optional" json:"promotionNo" yaml:"promotionNo"`
	// Property resourceGroupId: The resource group ID.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property tags: Tags to attach to Milvus instance.
	//
	// Max support 20 tags to add during create Milvus instance. Each tag with two properties Key and Value, and Key is required.
	Tags *[]*RosInstance_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

