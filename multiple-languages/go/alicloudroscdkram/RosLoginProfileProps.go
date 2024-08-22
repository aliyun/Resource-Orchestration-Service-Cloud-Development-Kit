package alicloudroscdkram


// Properties for defining a `RosLoginProfile`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-loginprofile
type RosLoginProfileProps struct {
	UserPrincipalName interface{} `field:"required" json:"userPrincipalName" yaml:"userPrincipalName"`
	GenerateRandomPassword interface{} `field:"optional" json:"generateRandomPassword" yaml:"generateRandomPassword"`
	MfaBindRequired interface{} `field:"optional" json:"mfaBindRequired" yaml:"mfaBindRequired"`
	Password interface{} `field:"optional" json:"password" yaml:"password"`
	PasswordResetRequired interface{} `field:"optional" json:"passwordResetRequired" yaml:"passwordResetRequired"`
	Status interface{} `field:"optional" json:"status" yaml:"status"`
}

