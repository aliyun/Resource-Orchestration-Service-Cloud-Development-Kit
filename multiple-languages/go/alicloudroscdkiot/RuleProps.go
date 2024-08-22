package alicloudroscdkiot


// Properties for defining a `Rule`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-iot-rule
type RuleProps struct {
	// Property name: The name of the rule.
	//
	// The name must be 1 to 30 characters in length and can contain
	// English letters, digits, underscores (_), and hyphens (-). Chinese language is also
	// supported. Each Chinese symbol occupies 2 characters.
	Name interface{} `field:"required" json:"name" yaml:"name"`
	// Property dataType: The format of the data to be processed by the rule.
	//
	// You must specify the format of
	// device data to be processed for this parameter. Valid values:
	// JSON: JSON data
	// BINARY: binary data
	// Note If you specifyBINARY, you cannot set the TopicType parameter to 0 and forward data to Table Store, Time Series Database (TSDB), or ApsaradDB
	// for RDS.
	// Default value: JSON.
	DataType interface{} `field:"optional" json:"dataType" yaml:"dataType"`
	// Property iotInstanceId: The ID of the instance.
	//
	// This parameter is not required for public instances. However,
	// the parameter is required for the instances that you have purchased.
	IotInstanceId interface{} `field:"optional" json:"iotInstanceId" yaml:"iotInstanceId"`
	// Property productKey: The ProductKey of the product to which the rule applies.
	ProductKey interface{} `field:"optional" json:"productKey" yaml:"productKey"`
	// Property resourceGroupId: The ID of the resource group to which the rule is assigned.
	//
	// You can view the resource
	// group information in the Resource Management console.
	// If you do not specify this parameter, the rule is assigned to the default resource
	// group.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property ruleAction:.
	RuleAction interface{} `field:"optional" json:"ruleAction" yaml:"ruleAction"`
	// Property ruleDesc: The description of the rule.
	//
	// The description can be up to 100 characters in length.
	// Each Chinese symbol occupies 1 characters.
	RuleDesc interface{} `field:"optional" json:"ruleDesc" yaml:"ruleDesc"`
	// Property select: The SQL SELECT statement that you want to execute.
	//
	// For more information, seeSQL expressions.
	// Note Specify the fields that follow the Select keyword for this parameter. For example, if the Select statement is Select a,b,c, specify a,b,c for this parameter.
	Select interface{} `field:"optional" json:"select" yaml:"select"`
	// Property shortTopic: The topic to which this rule is applied.
	//
	// Syntax: ${deviceName}\/topicShortName. ${deviceName}specifies the name of the device, and topicShortNamespecifies the custom name of the topic.
	// Basic communication topics or Thing Specification Language (TSL)-based communication
	// topics. Syntax: ${deviceName}\/topicShortName. You can replace ${deviceName} with the + wildcard. The wildcard indicates that the topic applies to all devices under the
	// product. Valid values of topicShortName:
	// \/thing\/event\/property\/post: submits the property data of a device.
	// \/thing\/event\/${tsl.event.identifier}\/post: submits the event data of a device.${tsl.event.identifier} specifies the identifier of an event in the TSL.
	// \/thing\/lifecycle: submits device lifecycle changes.
	// \/thing\/downlink\/reply\/message: sends a response to a request from IoT Platform.
	// \/thing\/list\/found: submits the data when a gateway detects a new sub-device.
	// \/thing\/topo\/lifecycle: submits device topology changes.
	// \/thing\/event\/property\/history\/post: submits historical property data of a device.
	// \/thing\/event\/${tsl.event.identifier}\/post: submits the historical event data of a device.${tsl.event.identifier}specifies the identifier of an event in the TSL.
	// \/ota\/upgrade: submits OTA update status.
	// \/ota\/version\/post: submits OTA module versions.
	// \/thing\/deviceinfo\/update: submits device tag changes.
	// \/edge\/driver\/${driver_id}\/point_post: submits pass-through data from Link IoT Edge.${driver_id} specifies the ID of the driver that a device uses to access Link IoT Edge.
	// ${packageId}\/${jobId}\/ota\/job\/status: submits the status of OTA update batches. This topic is a basic communication topic.
	// ${packageId}specifies the ID of the firmware. ${jobId}specifies the ID of the update batch.
	// Custom topics. Example:${deviceName}\/user\/get.
	// You can call theQueryProductTopicoperation to view all custom topics of the product.
	// When you specify a custom topic, you can use the + and # wildcards.
	// You can replace ${deviceName} with the+ wildcard. The wildcard indicates that the topic applies to all devices under the
	// product.
	// You can replace the fields that follow ${deviceName} with \/user\/#. The # wildcard indicates that the topic applies whatever values are specified for the fields that
	// follow\/user.
	// For more information about how to use wildcards, see Wildcards in topics.
	// Topic that is used to submit device status changes: ${deviceName}.
	// You can use the+wildcard. In this case, the status changes of all devices under the product are submitted.
	ShortTopic interface{} `field:"optional" json:"shortTopic" yaml:"shortTopic"`
	// Property startRule: Start the rule.
	//
	// The rule at least contains one rule action with normal data forward.
	StartRule interface{} `field:"optional" json:"startRule" yaml:"startRule"`
	// Property topicType: 0: The topic is a basic communication topic or TSL-based communication topic.
	//
	// 1: The topic is a custom topic.
	// 2: The topic is used to submit device status changes. Syntax: \/as\/mqtt\/status\/${productKey}\/${deviceName}.
	TopicType interface{} `field:"optional" json:"topicType" yaml:"topicType"`
	// Property where: The condition that is used to trigger the rule.
	//
	// For more information, seeSQL expressions.
	// Note Specify the fields that follow theWherekeyword for this parameter. For example, if the Where statement is Where a>10, specify a>10 for this parameter.
	Where interface{} `field:"optional" json:"where" yaml:"where"`
}

