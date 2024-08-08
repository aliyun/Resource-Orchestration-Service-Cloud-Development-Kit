package alicloudroscdkpaiplugin


// Properties for defining a `RosCampaign`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paiplugin-campaign
type RosCampaignProps struct {
	Name interface{} `field:"required" json:"name" yaml:"name"`
	Remark interface{} `field:"optional" json:"remark" yaml:"remark"`
}

