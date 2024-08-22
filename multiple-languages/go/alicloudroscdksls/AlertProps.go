package alicloudroscdksls


// Properties for defining a `Alert`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-alert
type AlertProps struct {
	// Property detail:.
	Detail interface{} `field:"required" json:"detail" yaml:"detail"`
	// Property project: Project name: 1.
	//
	// Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
	// 2. Must start and end with lowercase letters and numbers.
	// 3. The name length is 3-63 characters.
	Project interface{} `field:"required" json:"project" yaml:"project"`
}

