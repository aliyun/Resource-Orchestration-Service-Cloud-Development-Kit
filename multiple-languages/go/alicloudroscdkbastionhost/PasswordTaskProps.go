package alicloudroscdkbastionhost


// Properties for defining a `PasswordTask`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-passwordtask
type PasswordTaskProps struct {
	// Property instanceId: The ID of the BastionHost instance.
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	// Property name: The name of the password task.
	Name interface{} `field:"required" json:"name" yaml:"name"`
	// Property taskScheduleType: The schedule type of the password task.
	TaskScheduleType interface{} `field:"required" json:"taskScheduleType" yaml:"taskScheduleType"`
	// Property comment: The comment of the password task.
	Comment interface{} `field:"optional" json:"comment" yaml:"comment"`
	// Property credentialType: The credential type of the password task.
	CredentialType interface{} `field:"optional" json:"credentialType" yaml:"credentialType"`
	// Property keyPairGenerateConfig: The key pair generate config of the password task.
	KeyPairGenerateConfig interface{} `field:"optional" json:"keyPairGenerateConfig" yaml:"keyPairGenerateConfig"`
	// Property passwordGenerateConfig: The password generate config of the password task.
	PasswordGenerateConfig interface{} `field:"optional" json:"passwordGenerateConfig" yaml:"passwordGenerateConfig"`
	// Property passwordGenerateType: The password generate type of the password task.
	PasswordGenerateType interface{} `field:"optional" json:"passwordGenerateType" yaml:"passwordGenerateType"`
	// Property taskScheduleConfig: The schedule config of the password task.
	TaskScheduleConfig interface{} `field:"optional" json:"taskScheduleConfig" yaml:"taskScheduleConfig"`
}

