package alicloudroscdkesa


// Properties for defining a `UrlObservation`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-urlobservation
type UrlObservationProps struct {
	// Property sdkType: SDK integration mode.
	//
	// Value:
	// - **automatic**: automatic integration.
	// - **manual**: manual integration.
	SdkType interface{} `field:"required" json:"sdkType" yaml:"sdkType"`
	// Property siteId: The site ID.
	SiteId interface{} `field:"required" json:"siteId" yaml:"siteId"`
	// Property url: The URL of the page to monitor.
	Url interface{} `field:"required" json:"url" yaml:"url"`
}

