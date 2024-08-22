package alicloudroscdkecs


type RosAutoProvisioningGroup_LaunchConfigurationProperty struct {
	ImageId interface{} `field:"required" json:"imageId" yaml:"imageId"`
	SecurityGroupId interface{} `field:"required" json:"securityGroupId" yaml:"securityGroupId"`
	CreditSpecification interface{} `field:"optional" json:"creditSpecification" yaml:"creditSpecification"`
	DataDisk interface{} `field:"optional" json:"dataDisk" yaml:"dataDisk"`
	HostName interface{} `field:"optional" json:"hostName" yaml:"hostName"`
	InstanceDescription interface{} `field:"optional" json:"instanceDescription" yaml:"instanceDescription"`
	InstanceName interface{} `field:"optional" json:"instanceName" yaml:"instanceName"`
	InternetChargeType interface{} `field:"optional" json:"internetChargeType" yaml:"internetChargeType"`
	InternetMaxBandwidthOut interface{} `field:"optional" json:"internetMaxBandwidthOut" yaml:"internetMaxBandwidthOut"`
	IoOptimized interface{} `field:"optional" json:"ioOptimized" yaml:"ioOptimized"`
	KeyPairName interface{} `field:"optional" json:"keyPairName" yaml:"keyPairName"`
	PasswordInherit interface{} `field:"optional" json:"passwordInherit" yaml:"passwordInherit"`
	RamRoleName interface{} `field:"optional" json:"ramRoleName" yaml:"ramRoleName"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	SecurityEnhancementStrategy interface{} `field:"optional" json:"securityEnhancementStrategy" yaml:"securityEnhancementStrategy"`
	SystemDiskCategory interface{} `field:"optional" json:"systemDiskCategory" yaml:"systemDiskCategory"`
	SystemDiskDescription interface{} `field:"optional" json:"systemDiskDescription" yaml:"systemDiskDescription"`
	SystemDiskName interface{} `field:"optional" json:"systemDiskName" yaml:"systemDiskName"`
	SystemDiskPerformanceLevel interface{} `field:"optional" json:"systemDiskPerformanceLevel" yaml:"systemDiskPerformanceLevel"`
	SystemDiskSize interface{} `field:"optional" json:"systemDiskSize" yaml:"systemDiskSize"`
	Tag interface{} `field:"optional" json:"tag" yaml:"tag"`
	UserData interface{} `field:"optional" json:"userData" yaml:"userData"`
}

