package alicloudroscdkoos


// Properties for defining a `RosApplicationConnectionBind`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-applicationconnectionbind
type RosApplicationConnectionBindProps struct {
	ConnectionIds interface{} `field:"required" json:"connectionIds" yaml:"connectionIds"`
	ApplicationGroupName interface{} `field:"optional" json:"applicationGroupName" yaml:"applicationGroupName"`
	ApplicationName interface{} `field:"optional" json:"applicationName" yaml:"applicationName"`
}

