package alicloudroscdkice


// Properties for defining a `RosInsertMediaToSearchLib`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ice-insertmediatosearchlib
type RosInsertMediaToSearchLibProps struct {
	Input interface{} `field:"required" json:"input" yaml:"input"`
	MediaId interface{} `field:"optional" json:"mediaId" yaml:"mediaId"`
	MediaType interface{} `field:"optional" json:"mediaType" yaml:"mediaType"`
	MsgBody interface{} `field:"optional" json:"msgBody" yaml:"msgBody"`
	SearchLibName interface{} `field:"optional" json:"searchLibName" yaml:"searchLibName"`
}

