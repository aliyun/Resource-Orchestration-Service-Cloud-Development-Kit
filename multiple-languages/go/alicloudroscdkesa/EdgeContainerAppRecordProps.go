package alicloudroscdkesa


// Properties for defining a `EdgeContainerAppRecord`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-edgecontainerapprecord
type EdgeContainerAppRecordProps struct {
	// Property appId: The application ID.
	AppId interface{} `field:"required" json:"appId" yaml:"appId"`
	// Property recordName: The associated domain name.
	RecordName interface{} `field:"required" json:"recordName" yaml:"recordName"`
	// Property siteId: The website ID.
	SiteId interface{} `field:"required" json:"siteId" yaml:"siteId"`
}

