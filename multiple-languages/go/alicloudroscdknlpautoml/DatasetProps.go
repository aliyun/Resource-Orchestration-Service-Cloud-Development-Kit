package alicloudroscdknlpautoml


// Properties for defining a `Dataset`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nlpautoml-dataset
type DatasetProps struct {
	// Property datasetName: The name of dataset.
	//
	// Cannot start with numbers and symbols, and the length cannot be greater than 32 characters.
	DatasetName interface{} `field:"required" json:"datasetName" yaml:"datasetName"`
	// Property projectId: The ID of project.
	//
	// To create a dataset under a certain project, fill in the target project ID.
	ProjectId interface{} `field:"required" json:"projectId" yaml:"projectId"`
	// Property datasetRecord: Upload labeled data to the dataset.
	DatasetRecord interface{} `field:"optional" json:"datasetRecord" yaml:"datasetRecord"`
}

