package alicloudroscdksls


// Properties for defining a `Index`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-index
type IndexProps struct {
	// Property fullTextIndex: Full-text indexing configuration.
	//
	// Full-text indexing and key indexing must have at least one enabled.
	FullTextIndex interface{} `field:"required" json:"fullTextIndex" yaml:"fullTextIndex"`
	// Property logstoreName: Logstore name: 1.
	//
	// Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
	// 2. Must start and end with lowercase letters and numbers.
	// 3. The name length is 3-63 characters.
	LogstoreName interface{} `field:"required" json:"logstoreName" yaml:"logstoreName"`
	// Property projectName: Project name: 1.
	//
	// Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
	// 2. Must start and end with lowercase letters and numbers.
	// 3. The name length is 3-63 characters.
	ProjectName interface{} `field:"required" json:"projectName" yaml:"projectName"`
	// Property keyIndices: Key index configurations.
	//
	// Full-text indexing and key indexing must have at least one enabled.
	KeyIndices interface{} `field:"optional" json:"keyIndices" yaml:"keyIndices"`
	// Property logReduce: Whether to enable log reduce.
	//
	// Default to false.
	LogReduce interface{} `field:"optional" json:"logReduce" yaml:"logReduce"`
}

