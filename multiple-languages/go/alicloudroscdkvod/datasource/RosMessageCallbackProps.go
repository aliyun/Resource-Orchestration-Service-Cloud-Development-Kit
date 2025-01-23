package datasource


// Properties for defining a `RosMessageCallback`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vod-messagecallback
type RosMessageCallbackProps struct {
	AppId interface{} `field:"required" json:"appId" yaml:"appId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

