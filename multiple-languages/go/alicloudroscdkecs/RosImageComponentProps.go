package alicloudroscdkecs


// Properties for defining a `RosImageComponent`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-imagecomponent
type RosImageComponentProps struct {
	Content interface{} `field:"required" json:"content" yaml:"content"`
	ComponentType interface{} `field:"optional" json:"componentType" yaml:"componentType"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	Name interface{} `field:"optional" json:"name" yaml:"name"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	SystemType interface{} `field:"optional" json:"systemType" yaml:"systemType"`
	Tags *[]*RosImageComponent_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

