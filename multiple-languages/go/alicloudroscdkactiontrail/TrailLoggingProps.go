package alicloudroscdkactiontrail


// Properties for defining a `TrailLogging`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-actiontrail-traillogging
type TrailLoggingProps struct {
	// Property enable: Whether to enable the trail logging.
	Enable interface{} `field:"required" json:"enable" yaml:"enable"`
	// Property name: The name of the trail.\ The name must be 6 to 36 characters in length and can contain lowercase letters, digits, hyphens (-), and underscores (_). It must start with a lowercase letter. >  The name must be unique within an account.
	Name interface{} `field:"required" json:"name" yaml:"name"`
}

