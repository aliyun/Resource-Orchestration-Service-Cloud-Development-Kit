package alicloudroscdkiot


// Properties for defining a `ProductTopic`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-iot-producttopic
type ProductTopicProps struct {
	// Property operation: Operation permissions of devices on the topic category.
	//
	// Value options:
	// SUB: Subscribe. Devices can subscribe to the topics of this category.
	// PUB: Publish. Devices can publish messages using the topics of this category.
	// ALL: Subscribe and publish. Devices can subscribe to and publish messages to the topics of this category.
	Operation interface{} `field:"required" json:"operation" yaml:"operation"`
	// Property productKey: The unique identifier of the product for which you want to create a topic category.
	ProductKey interface{} `field:"required" json:"productKey" yaml:"productKey"`
	// Property topicShortName: The custom category hierarchy in the topic category.
	//
	// By default, a topic category contains two system defined category hierarchies: productKey and ${deviceName}. Forward slashes (\/) are used to delimit the topic hierarchies. The format of a topic category is productKey\/${deviceName}\/topicShortName.
	// Note The name of each category hierarchy can contain English letters, digits, and underscores (_), and cannot be empty.
	TopicShortName interface{} `field:"required" json:"topicShortName" yaml:"topicShortName"`
	// Property desc: The description of the topic category.
	//
	// You can enter a description with up to 100 characters.
	Desc interface{} `field:"optional" json:"desc" yaml:"desc"`
	// Property iotInstanceId: Instance ID you purchased.
	//
	// Public instances do not need pass this property.
	IotInstanceId interface{} `field:"optional" json:"iotInstanceId" yaml:"iotInstanceId"`
}

