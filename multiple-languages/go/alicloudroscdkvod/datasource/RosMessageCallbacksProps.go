package datasource


// Properties for defining a `RosMessageCallbacks`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vod-messagecallbacks
type RosMessageCallbacksProps struct {
	AppId interface{} `field:"optional" json:"appId" yaml:"appId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

