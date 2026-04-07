package alicloudroscdkesa


// Properties for defining a `RosUrlObservation`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-urlobservation
type RosUrlObservationProps struct {
	SdkType interface{} `field:"required" json:"sdkType" yaml:"sdkType"`
	SiteId interface{} `field:"required" json:"siteId" yaml:"siteId"`
	Url interface{} `field:"required" json:"url" yaml:"url"`
}

