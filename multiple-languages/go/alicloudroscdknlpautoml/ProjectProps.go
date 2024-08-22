package alicloudroscdknlpautoml


// Properties for defining a `Project`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nlpautoml-project
type ProjectProps struct {
	// Property projectDescription: The description of project.Cannot start with numbers and symbols, and the length cannot be greater than 256 characters.
	ProjectDescription interface{} `field:"required" json:"projectDescription" yaml:"projectDescription"`
	// Property projectName: The name of project.
	//
	// Cannot start with numbers and symbols, and the length cannot be greater than 32 characters.
	ProjectName interface{} `field:"required" json:"projectName" yaml:"projectName"`
	// Property projectType: The type of nlp project.
	//
	// The following value is allowed: ner, textCategorybaseRelation, textMatching, sentimentAnalysis, resumeExtract, reviewAnalysis.
	ProjectType interface{} `field:"required" json:"projectType" yaml:"projectType"`
}

