package alicloudroscdkbastionhost


// Properties for defining a `RosPasswordTask`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-passwordtask
type RosPasswordTaskProps struct {
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	Name interface{} `field:"required" json:"name" yaml:"name"`
	TaskScheduleType interface{} `field:"required" json:"taskScheduleType" yaml:"taskScheduleType"`
	Comment interface{} `field:"optional" json:"comment" yaml:"comment"`
	CredentialType interface{} `field:"optional" json:"credentialType" yaml:"credentialType"`
	KeyPairGenerateConfig interface{} `field:"optional" json:"keyPairGenerateConfig" yaml:"keyPairGenerateConfig"`
	PasswordGenerateConfig interface{} `field:"optional" json:"passwordGenerateConfig" yaml:"passwordGenerateConfig"`
	PasswordGenerateType interface{} `field:"optional" json:"passwordGenerateType" yaml:"passwordGenerateType"`
	TaskScheduleConfig interface{} `field:"optional" json:"taskScheduleConfig" yaml:"taskScheduleConfig"`
}

