package alicloudroscdkpaiplugin


// Properties for defining a `Campaign`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paiplugin-campaign
type CampaignProps struct {
	// Property name: The name of the campaign.
	Name interface{} `field:"required" json:"name" yaml:"name"`
	// Property remark: The remark of the campaign.
	Remark interface{} `field:"optional" json:"remark" yaml:"remark"`
}

