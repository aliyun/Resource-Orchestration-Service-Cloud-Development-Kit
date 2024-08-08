package alicloudroscdksls


// Properties for defining a `RosIndex`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-index
type RosIndexProps struct {
	FullTextIndex interface{} `field:"required" json:"fullTextIndex" yaml:"fullTextIndex"`
	LogstoreName interface{} `field:"required" json:"logstoreName" yaml:"logstoreName"`
	ProjectName interface{} `field:"required" json:"projectName" yaml:"projectName"`
	KeyIndices interface{} `field:"optional" json:"keyIndices" yaml:"keyIndices"`
	LogReduce interface{} `field:"optional" json:"logReduce" yaml:"logReduce"`
}

