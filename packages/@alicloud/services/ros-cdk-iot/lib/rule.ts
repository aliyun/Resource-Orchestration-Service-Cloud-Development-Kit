import * as ros from '@alicloud/ros-cdk-core';
import { RosRule } from './iot.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosRule as RuleProperty };

/**
 * Properties for defining a `ALIYUN::IOT::Rule`
 */
export interface RuleProps {

    /**
     * Property name: The name of the rule. The name must be 1 to 30 characters in length and can contain English letters, digits, underscores (_), and hyphens (-). Chinese language is also supported. Each Chinese symbol occupies 2 characters.
     */
    readonly name: string;

    /**
     * Property dataType: The format of the data to be processed by the rule. You must specify the format of device data to be processed for this parameter. Valid values:  JSON: JSON data BINARY: binary data
     */
    readonly dataType?: string;

    /**
     * Property iotInstanceId: The ID of the instance. This parameter is not required for public instances. However, the parameter is required for the instances that you have purchased.
     */
    readonly iotInstanceId?: string;

    /**
     * Property productKey: The ProductKey of the product to which the rule applies.
     */
    readonly productKey?: string;

    /**
     * Property resourceGroupId: The ID of the resource group to which the rule is assigned. You can view the resource group information in the Resource Management console.  If you do not specify this parameter, the rule is assigned to the default resource group.
     */
    readonly resourceGroupId?: string;

    /**
     * Property ruleDesc: The description of the rule. The description can be up to 100 characters in length. Each Chinese symbol occupies 1 characters.
     */
    readonly ruleDesc?: string;

    /**
     * Property select: The SQL SELECT statement that you want to execute. For more information, seeSQL expressions.
     */
    readonly select?: string;

    /**
     * Property shortTopic: The topic to which this rule is applied. Syntax: ${deviceName}/topicShortName. ${deviceName}specifies the name of the device, and topicShortNamespecifies the custom name of the topic.  Basic communication topics or Thing Specification Language (TSL)-based communication topics. Syntax: ${deviceName}/topicShortName. You can replace ${deviceName} with the + wildcard. The wildcard indicates that the topic applies to all devices under the product. Valid values of topicShortName: /thing/event/property/post: submits the property data of a device. /thing/event/${tsl.event.identifier}/post: submits the event data of a device.${tsl.event.identifier} specifies the identifier of an event in the TSL. /thing/lifecycle: submits device lifecycle changes. /thing/downlink/reply/message: sends a response to a request from IoT Platform. /thing/list/found: submits the data when a gateway detects a new sub-device. /thing/topo/lifecycle: submits device topology changes. /thing/event/property/history/post: submits historical property data of a device. /thing/event/${tsl.event.identifier}/post: submits the historical event data of a device.${tsl.event.identifier}specifies the identifier of an event in the TSL. /ota/upgrade: submits OTA update status. /ota/version/post: submits OTA module versions. /thing/deviceinfo/update: submits device tag changes. /edge/driver/${driver_id}/point_post: submits pass-through data from Link IoT Edge.${driver_id} specifies the ID of the driver that a device uses to access Link IoT Edge.  ${packageId}/${jobId}/ota/job/status: submits the status of OTA update batches. This topic is a basic communication topic. ${packageId}specifies the ID of the firmware. ${jobId}specifies the ID of the update batch.  Custom topics. Example:${deviceName}/user/get.  You can call theQueryProductTopicoperation to view all custom topics of the product.  When you specify a custom topic, you can use the + and # wildcards.  You can replace ${deviceName} with the+ wildcard. The wildcard indicates that the topic applies to all devices under the product. You can replace the fields that follow ${deviceName} with /user/#. The # wildcard indicates that the topic applies whatever values are specified for the fields that follow/user.  For more information about how to use wildcards, see Wildcards in topics.  Topic that is used to submit device status changes: ${deviceName}.  You can use the+wildcard. In this case, the status changes of all devices under the product are submitted.
     */
    readonly shortTopic?: string;

    /**
     * Property topicType: 0: The topic is a basic communication topic or TSL-based communication topic. 1: The topic is a custom topic. 2: The topic is used to submit device status changes. Syntax: /as/mqtt/status/${productKey}/${deviceName}.
     */
    readonly topicType?: number;

    /**
     * Property where: The condition that is used to trigger the rule. For more information, seeSQL expressions.
     */
    readonly where?: string;
}

/**
 * A ROS resource type:  `ALIYUN::IOT::Rule`
 */
export class Rule extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute DataType: The format of the data to be processed by the rule. You must specify the format of device data to be processed for this parameter. Valid values:  JSON: JSON data BINARY: binary data
     */
    public readonly attrDataType: any;

    /**
     * Attribute IotInstanceId: The ID of the instance. This parameter is not required for public instances. However, the parameter is required for the instances that you have purchased.
     */
    public readonly attrIotInstanceId: any;

    /**
     * Attribute Name: The name of the rule. The name must be 1 to 30 characters in length and can contain English letters, digits, underscores (_), and hyphens (-). Chinese language is also supported. Each Chinese symbol occupies 2 characters.
     */
    public readonly attrName: any;

    /**
     * Attribute ProductKey: The ProductKey of the product to which the rule applies.
     */
    public readonly attrProductKey: any;

    /**
     * Attribute ResourceGroupId: The ID of the resource group to which the rule is assigned. You can view the resource group information in the Resource Management console.  If you do not specify this parameter, the rule is assigned to the default resource group.
     */
    public readonly attrResourceGroupId: any;

    /**
     * Attribute RuleDesc: The description of the rule. The description can be up to 100 characters in length. Each Chinese symbol occupies 1 characters.
     */
    public readonly attrRuleDesc: any;

    /**
     * Attribute RuleId: The ID of the rule. The rule ID is generated by the rules engine if the call was successful.
     */
    public readonly attrRuleId: any;

    /**
     * Attribute Select: The SQL SELECT statement that you want to execute. For more information, seeSQL expressions.
     */
    public readonly attrSelect: any;

    /**
     * Attribute ShortTopic: The topic to which this rule is applied. Syntax: ${deviceName}/topicShortName. ${deviceName}specifies the name of the device, and topicShortNamespecifies the custom name of the topic.  Basic communication topics or Thing Specification Language (TSL)-based communication topics. Syntax: ${deviceName}/topicShortName. You can replace ${deviceName} with the + wildcard. The wildcard indicates that the topic applies to all devices under the product. Valid values of topicShortName: /thing/event/property/post: submits the property data of a device. /thing/event/${tsl.event.identifier}/post: submits the event data of a device.${tsl.event.identifier} specifies the identifier of an event in the TSL. /thing/lifecycle: submits device lifecycle changes. /thing/downlink/reply/message: sends a response to a request from IoT Platform. /thing/list/found: submits the data when a gateway detects a new sub-device. /thing/topo/lifecycle: submits device topology changes. /thing/event/property/history/post: submits historical property data of a device. /thing/event/${tsl.event.identifier}/post: submits the historical event data of a device.${tsl.event.identifier}specifies the identifier of an event in the TSL. /ota/upgrade: submits OTA update status. /ota/version/post: submits OTA module versions. /thing/deviceinfo/update: submits device tag changes. /edge/driver/${driver_id}/point_post: submits pass-through data from Link IoT Edge.${driver_id} specifies the ID of the driver that a device uses to access Link IoT Edge.  ${packageId}/${jobId}/ota/job/status: submits the status of OTA update batches. This topic is a basic communication topic. ${packageId}specifies the ID of the firmware. ${jobId}specifies the ID of the update batch.  Custom topics. Example:${deviceName}/user/get.  You can call theQueryProductTopicoperation to view all custom topics of the product.  When you specify a custom topic, you can use the + and # wildcards.  You can replace ${deviceName} with the+ wildcard. The wildcard indicates that the topic applies to all devices under the product. You can replace the fields that follow ${deviceName} with /user/#. The # wildcard indicates that the topic applies whatever values are specified for the fields that follow/user.  For more information about how to use wildcards, see Wildcards in topics.  Topic that is used to submit device status changes: ${deviceName}.  You can use the+wildcard. In this case, the status changes of all devices under the product are submitted.
     */
    public readonly attrShortTopic: any;

    /**
     * Attribute TopicType: 0: The topic is a basic communication topic or TSL-based communication topic. 1: The topic is a custom topic. 2: The topic is used to submit device status changes. Syntax: /as/mqtt/status/${productKey}/${deviceName}.
     */
    public readonly attrTopicType: any;

    /**
     * Attribute Where: The condition that is used to trigger the rule. For more information, seeSQL expressions.
     */
    public readonly attrWhere: any;

    /**
     * Create a new `ALIYUN::IOT::Rule`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RuleProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosRule = new RosRule(this, id,  {
            topicType: props.topicType,
            iotInstanceId: props.iotInstanceId,
            resourceGroupId: props.resourceGroupId,
            shortTopic: props.shortTopic,
            select: props.select,
            dataType: props.dataType,
            ruleDesc: props.ruleDesc,
            where: props.where,
            productKey: props.productKey,
            name: props.name,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosRule;
        this.attrDataType = rosRule.attrDataType;
        this.attrIotInstanceId = rosRule.attrIotInstanceId;
        this.attrName = rosRule.attrName;
        this.attrProductKey = rosRule.attrProductKey;
        this.attrResourceGroupId = rosRule.attrResourceGroupId;
        this.attrRuleDesc = rosRule.attrRuleDesc;
        this.attrRuleId = rosRule.attrRuleId;
        this.attrSelect = rosRule.attrSelect;
        this.attrShortTopic = rosRule.attrShortTopic;
        this.attrTopicType = rosRule.attrTopicType;
        this.attrWhere = rosRule.attrWhere;
    }
}
