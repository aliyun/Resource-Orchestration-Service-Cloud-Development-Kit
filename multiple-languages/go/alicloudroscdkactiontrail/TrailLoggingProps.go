package alicloudroscdkactiontrail


// Properties for defining a `TrailLogging`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-actiontrail-traillogging
type TrailLoggingProps struct {
	// Property enable: Whether to enable the trail logging.
	Enable interface{} `field:"required" json:"enable" yaml:"enable"`
	// Property name: The name of the trail to be enabled.
	Name interface{} `field:"required" json:"name" yaml:"name"`
}

