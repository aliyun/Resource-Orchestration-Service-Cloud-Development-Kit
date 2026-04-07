package alicloudroscdkresourcemanager


// Properties for defining a `SavedQuery`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-savedquery
type SavedQueryProps struct {
	// Property expression: The expression of the template.
	Expression interface{} `field:"required" json:"expression" yaml:"expression"`
	// Property savedQueryName: The name of the template.
	//
	// * The name must be 1 to 64 characters in length.
	// * The name can contain letters, digits, underscores (_), and hyphens (-).
	// * The template name must be unique.
	SavedQueryName interface{} `field:"required" json:"savedQueryName" yaml:"savedQueryName"`
	// Property description: The description of the template.
	//
	// The description must be 1 to 256 characters in length.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
}

