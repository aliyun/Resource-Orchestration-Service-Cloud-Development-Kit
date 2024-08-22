package alicloudroscdkram


// Properties for defining a `AccessKey`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-accesskey
type AccessKeyProps struct {
	// Property userName: Specifies the user name, containing up to 64 characters.
	UserName interface{} `field:"required" json:"userName" yaml:"userName"`
}

