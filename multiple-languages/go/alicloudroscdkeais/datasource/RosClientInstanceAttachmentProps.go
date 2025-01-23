package datasource


// Properties for defining a `RosClientInstanceAttachment`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-eais-clientinstanceattachment
type RosClientInstanceAttachmentProps struct {
	ClientInstanceAttachmentId interface{} `field:"required" json:"clientInstanceAttachmentId" yaml:"clientInstanceAttachmentId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

