package alicloudroscdkiot


// Properties for defining a `RuleAction`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-iot-ruleaction
type RuleActionProps struct {
	// Property configuration: The configurations of the rule action.
	//
	// You must specify a JSON string. The configurations
	// for different types of rule actions are different. For more information about required
	// syntax and examples, see the following tables.
	Configuration interface{} `field:"required" json:"configuration" yaml:"configuration"`
	// Property ruleId: The ID of the rule for which you want to create an action.
	//
	// You can use either of the
	// following methods to view the rule ID: 1. Log on to the IoT Platform console and choose Rules>Data Forwarding. 2. Call the ListRule operation.
	RuleId interface{} `field:"required" json:"ruleId" yaml:"ruleId"`
	// Property type: The type of the rule action.
	//
	// Valid values:
	// MNS: forwards data in the topics that have been processed by the rule engine to Message
	// Service (MNS) for message transmission.
	// FC: forwards data in the topics that have been processed by the rule engine to Function
	// Compute for event computing.
	// REPUBLISH: forwards data in the topics that have been processed by the rule engine to another
	// IoT Platform topic.
	// AMQP: forwards data to AMQP consumer groups.
	// OTS: forwards data in the topics that have been processed by the rule engine to Table
	// Store for NoSQL data storage.
	// Note
	// Rules of the binary data format (the DataType parameter is set toBINARY) do not support forwarding data to Table Store.
	// Destination Alibaba Cloud services that are supported by the rule engine vary based
	// on regions. For more information about the regions and destination cloud services
	// that are supported by the rule engine, see Regions and zones.
	Type interface{} `field:"required" json:"type" yaml:"type"`
	// Property errorActionFlag: Indicates whether the rule action forwarded error operation data.
	//
	// Error operation
	// data indicates that the rule engine failed to forward data from the IoT Platform topic
	// to the destination cloud service. A data forwarding failure indicates that forwarding
	// retries also failed. Valid values:
	// true: forwards error operation data.
	// false: forwards normal data instead of error operation data.
	// Default value: false.
	ErrorActionFlag interface{} `field:"optional" json:"errorActionFlag" yaml:"errorActionFlag"`
	// Property iotInstanceId: The ID of the instance.
	//
	// This parameter is not required for public instances. However,
	// the parameter is required for the instances that you have purchased.
	IotInstanceId interface{} `field:"optional" json:"iotInstanceId" yaml:"iotInstanceId"`
}

