package alicloudroscdkice


// Properties for defining a `InsertMediaToSearchLib`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ice-insertmediatosearchlib
type InsertMediaToSearchLibProps struct {
	// Property input: The URL of the video, audio, or image file that you want to import to the search library.
	//
	// Note: Make sure that you specify a correct file name and the bucket in which the file resides is in the same region where this operation is called. Otherwise, the file cannot be found or the operation may fail.
	// Specify an Object Storage Service (OSS) URL in the following format: oss:\/\/[Bucket name]\/[File path]. For example, you can specify oss:\/\/[example-bucket-]\/[object_path-].
	// Specify an HTTP URL in the following format: public endpoint. For example, you can specify http:\/\/example-test-****.mp4.
	Input interface{} `field:"required" json:"input" yaml:"input"`
	// Property mediaId: The ID of the media asset.
	//
	// Each media ID is unique. If you leave this parameter empty, a media ID is automatically generated for this parameter.
	MediaId interface{} `field:"optional" json:"mediaId" yaml:"mediaId"`
	// Property mediaType: The type of the media asset.
	//
	// Valid values:
	// video (default)
	// image
	// audio.
	MediaType interface{} `field:"optional" json:"mediaType" yaml:"mediaType"`
	// Property msgBody: The message body.
	MsgBody interface{} `field:"optional" json:"msgBody" yaml:"msgBody"`
	// Property searchLibName: The name of the search library.
	//
	// Default value: ims-default-search-lib.
	SearchLibName interface{} `field:"optional" json:"searchLibName" yaml:"searchLibName"`
}

