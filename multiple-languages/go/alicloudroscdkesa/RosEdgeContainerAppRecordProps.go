package alicloudroscdkesa


// Properties for defining a `RosEdgeContainerAppRecord`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-edgecontainerapprecord
type RosEdgeContainerAppRecordProps struct {
	AppId interface{} `field:"required" json:"appId" yaml:"appId"`
	RecordName interface{} `field:"required" json:"recordName" yaml:"recordName"`
	SiteId interface{} `field:"required" json:"siteId" yaml:"siteId"`
}

