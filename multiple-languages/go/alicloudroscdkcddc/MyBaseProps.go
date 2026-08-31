package alicloudroscdkcddc


// Properties for defining a `MyBase`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cddc-mybase
type MyBaseProps struct {
	// Property ecsClassList: ECS Class List.
	EcsClassList interface{} `field:"required" json:"ecsClassList" yaml:"ecsClassList"`
	// Property engine: The database type.
	//
	// Valid values:
	// - mysql
	// - tair.
	Engine interface{} `field:"required" json:"engine" yaml:"engine"`
	// Property payType: Payment type, currently only supports PrePaid.
	PayType interface{} `field:"required" json:"payType" yaml:"payType"`
	// Property period: The period of the subscription in months.
	Period interface{} `field:"required" json:"period" yaml:"period"`
	// Property securityGroupId: The security group ID.
	//
	// Specify multiple security groups, separated by commas (,).
	// Format: sg-t4neld965n89ocvt,sg-t4neld965n89ocvu.
	SecurityGroupId interface{} `field:"required" json:"securityGroupId" yaml:"securityGroupId"`
	// Property vpcId: The ID of the VPC.
	VpcId interface{} `field:"required" json:"vpcId" yaml:"vpcId"`
	// Property vSwitchId: Virtual switch ID.
	VSwitchId interface{} `field:"required" json:"vSwitchId" yaml:"vSwitchId"`
	// Property zoneId: Availability Zone ID.
	ZoneId interface{} `field:"required" json:"zoneId" yaml:"zoneId"`
	// Property autoRenew: Whether to enable auto renew.
	AutoRenew interface{} `field:"optional" json:"autoRenew" yaml:"autoRenew"`
	// Property dedicatedHostGroupDescription: The name of the dedicated cluster.
	DedicatedHostGroupDescription interface{} `field:"optional" json:"dedicatedHostGroupDescription" yaml:"dedicatedHostGroupDescription"`
	// Property dedicatedHostGroupId: The ID of the dedicated cluster.
	DedicatedHostGroupId interface{} `field:"optional" json:"dedicatedHostGroupId" yaml:"dedicatedHostGroupId"`
	// Property ecsDeploymentSetId: The ID of the deployment set.
	EcsDeploymentSetId interface{} `field:"optional" json:"ecsDeploymentSetId" yaml:"ecsDeploymentSetId"`
	// Property ecsHostName: For Windows operating systems: The host name must be 2 to 15 characters in length and can contain uppercase letters, lowercase letters, and digits.
	//
	// It cannot
	// consist of only digits.
	// For other operating systems (such as Linux): The host name must be 2 to 64
	// characters in length and can contain periods (.) to separate multiple segments.
	// Each segment can contain uppercase letters, lowercase letters, and digits.
	// Consecutive periods (.) are not allowed. The host name cannot start or end with a
	// period (.).
	EcsHostName interface{} `field:"optional" json:"ecsHostName" yaml:"ecsHostName"`
	// Property ecsInstanceName: The instance name.
	//
	// It must be 2 to 128 characters in length. It must start with
	// an uppercase letter, a lowercase letter, or a Chinese character. It cannot start
	// with http\:\/\/ or https\:\/\/. It can contain Chinese characters, English letters,
	// digits, colons (:), underscores (_), periods (.), or hyphens (-). The default
	// value is the instance ID.
	EcsInstanceName interface{} `field:"optional" json:"ecsInstanceName" yaml:"ecsInstanceName"`
	// Property ecsUniqueSuffix: Automatically add a sequential suffix to the HostName and InstanceName when you create multiple instances.
	//
	// The sequential suffix starts from 001 and increments
	// up to 999. Valid values:
	// - true: Add.
	// - false (default): Do not add.
	// If HostName or InstanceName is set in a specific sorting format, and the
	// name_suffix is not set (i.e., the naming format is
	// name_prefix\[begin_number,bits]), UniqueSuffix does not take effect. The names
	// are sorted only in the specified order.
	EcsUniqueSuffix interface{} `field:"optional" json:"ecsUniqueSuffix" yaml:"ecsUniqueSuffix"`
	// Property imageId: The custom image ID.
	//
	// > If you want to use the default image, do not specify this parameter.
	ImageId interface{} `field:"optional" json:"imageId" yaml:"imageId"`
	// Property internetChargeType: The network billing method.
	//
	// Valid values include the following:.
	InternetChargeType interface{} `field:"optional" json:"internetChargeType" yaml:"internetChargeType"`
	// Property internetMaxBandwidthOut: The maximum outbound public bandwidth, in Mbit\/s.
	//
	// Valid values: 0 to 100.
	// Default value: 0. If you set this parameter to a value greater than 0, a public
	// IP address is automatically created.
	InternetMaxBandwidthOut interface{} `field:"optional" json:"internetMaxBandwidthOut" yaml:"internetMaxBandwidthOut"`
	// Property keyPairName: The name of the key pair.
	KeyPairName interface{} `field:"optional" json:"keyPairName" yaml:"keyPairName"`
	// Property osPassword: The logon password for the host.
	//
	// You can set it later. The password must meet the
	// following requirements:
	// - It must be 8 to 30 characters in length.
	// - It must contain at least three of the following character types: uppercase
	// letters, lowercase letters, digits, and special characters.
	// - Special characters: `()\`\~!@#$%^&\*-_+=|{}\[]:;'<>,.?\/\`
	// > * If you want to set the logon password later, leave this parameter empty.
	// >
	// > * If you want to set the logon password, use HTTPS to send requests to prevent
	// password leakage.
	OsPassword interface{} `field:"optional" json:"osPassword" yaml:"osPassword"`
	// Property passwordInherit: Use the default password of the image.
	//
	// - false (default): Do not use.
	// - true: Use.
	// > If you use the default password of the image, do not specify the OSPassword
	// parameter.
	PasswordInherit interface{} `field:"optional" json:"passwordInherit" yaml:"passwordInherit"`
	// Property periodType: Prepaid type, currently only supports Monthly (monthly subscription).
	PeriodType interface{} `field:"optional" json:"periodType" yaml:"periodType"`
	// Property resourceGroupId: Resource group id.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property userData: User-defined script data, the original data is up to 16KB.
	UserData interface{} `field:"optional" json:"userData" yaml:"userData"`
	// Property userDataInBase64: Indicates whether the custom data is Base64-encoded.
	UserDataInBase64 interface{} `field:"optional" json:"userDataInBase64" yaml:"userDataInBase64"`
}

