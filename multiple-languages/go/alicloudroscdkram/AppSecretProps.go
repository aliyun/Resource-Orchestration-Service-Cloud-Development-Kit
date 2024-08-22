package alicloudroscdkram


// Properties for defining a `AppSecret`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-appsecret
type AppSecretProps struct {
	// Property appId: The ID of the application.
	AppId interface{} `field:"required" json:"appId" yaml:"appId"`
}

