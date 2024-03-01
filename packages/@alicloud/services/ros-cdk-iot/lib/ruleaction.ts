import * as ros from '@alicloud/ros-cdk-core';
import { RosRuleAction } from './iot.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosRuleAction as RuleActionProperty };

/**
 * Properties for defining a `RuleAction`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-iot-ruleaction
 */
export interface RuleActionProps {

    /**
     * Property configuration: The configurations of the rule action. You must specify a JSON string. The configurations
     * for different types of rule actions are different. For more information about required
     * syntax and examples, see the following tables.
     */
    readonly configuration: string | ros.IResolvable;

    /**
     * Property ruleId: The ID of the rule for which you want to create an action. You can use either of the
     * following methods to view the rule ID: 1. Log on to the IoT Platform console and choose Rules>Data Forwarding. 2. Call the ListRule operation.
     */
    readonly ruleId: number | ros.IResolvable;

    /**
     * Property type: The type of the rule action. Valid values:
     * MNS: forwards data in the topics that have been processed by the rule engine to Message
     * Service (MNS) for message transmission.
     * FC: forwards data in the topics that have been processed by the rule engine to Function
     * Compute for event computing.
     * REPUBLISH: forwards data in the topics that have been processed by the rule engine to another
     * IoT Platform topic.
     * AMQP: forwards data to AMQP consumer groups.
     * OTS: forwards data in the topics that have been processed by the rule engine to Table
     * Store for NoSQL data storage.
     * Note
     * Rules of the binary data format (the DataType parameter is set toBINARY) do not support forwarding data to Table Store.
     * Destination Alibaba Cloud services that are supported by the rule engine vary based
     * on regions. For more information about the regions and destination cloud services
     * that are supported by the rule engine, see Regions and zones.
     */
    readonly type: string | ros.IResolvable;

    /**
     * Property errorActionFlag: Indicates whether the rule action forwarded error operation data. Error operation
     * data indicates that the rule engine failed to forward data from the IoT Platform topic
     * to the destination cloud service. A data forwarding failure indicates that forwarding
     * retries also failed. Valid values:
     * true: forwards error operation data.
     * false: forwards normal data instead of error operation data.
     * Default value: false.
     */
    readonly errorActionFlag?: boolean | ros.IResolvable;

    /**
     * Property iotInstanceId: The ID of the instance. This parameter is not required for public instances. However,
     * the parameter is required for the instances that you have purchased.
     */
    readonly iotInstanceId?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::IOT::RuleAction`, which is used to create a rule action for a specified rule.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosRuleAction`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-iot-ruleaction
 */
export class RuleAction extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: RuleActionProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute ActionId: The ID of the rule action.
     */
    public readonly attrActionId: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RuleActionProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosRuleAction = new RosRuleAction(this, id,  {
            errorActionFlag: props.errorActionFlag,
            type: props.type,
            iotInstanceId: props.iotInstanceId,
            configuration: props.configuration,
            ruleId: props.ruleId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosRuleAction;
        this.attrActionId = rosRuleAction.attrActionId;
    }
}
