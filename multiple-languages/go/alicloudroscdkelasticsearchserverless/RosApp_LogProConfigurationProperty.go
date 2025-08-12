package alicloudroscdkelasticsearchserverless


type RosApp_LogProConfigurationProperty struct {
	AdvancedIndexingOptimization interface{} `field:"required" json:"advancedIndexingOptimization" yaml:"advancedIndexingOptimization"`
	AutoDataOrganization interface{} `field:"required" json:"autoDataOrganization" yaml:"autoDataOrganization"`
	ExpirationDays interface{} `field:"required" json:"expirationDays" yaml:"expirationDays"`
	LogProDynamicFieldConfigType interface{} `field:"required" json:"logProDynamicFieldConfigType" yaml:"logProDynamicFieldConfigType"`
	WriteWithPrimaryKey interface{} `field:"required" json:"writeWithPrimaryKey" yaml:"writeWithPrimaryKey"`
}

