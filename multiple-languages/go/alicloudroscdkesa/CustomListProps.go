package alicloudroscdkesa


// Properties for defining a `CustomList`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-customlist
type CustomListProps struct {
	// Property items: The items in the custom list, which are displayed as an array.
	Items interface{} `field:"required" json:"items" yaml:"items"`
	// Property kind: The type of the custom list.
	Kind interface{} `field:"required" json:"kind" yaml:"kind"`
	// Property listName: The name of the custom list.
	ListName interface{} `field:"required" json:"listName" yaml:"listName"`
	// Property description: The description of the custom list.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
}

