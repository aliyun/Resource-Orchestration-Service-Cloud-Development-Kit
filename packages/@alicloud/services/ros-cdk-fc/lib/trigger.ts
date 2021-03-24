import * as ros from '@alicloud/ros-cdk-core';
import { RosTrigger } from './fc.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosTrigger as TriggerProperty };

/**
 * Properties for defining a `ALIYUN::FC::Trigger`
 */
export interface TriggerProps {

    /**
     * Property functionName: Function name.
     */
    readonly functionName: string;

    /**
     * Property serviceName: Service name.
     */
    readonly serviceName: string;

    /**
     * Property triggerConfig: Event source specific trigger configuration. The value is different according to trigger type.
     */
    readonly triggerConfig: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * Property triggerName: Trigger name.
     * Example : "image_resize"
     */
    readonly triggerName: string;

    /**
     * Property triggerType: Trigger type, e.g. oss, timer, logs. This determines how the trigger config is interpreted.
     * Example : "oss"
     */
    readonly triggerType: string;

    /**
     * Property invocationRole: The role grants event source the permission to run function on behalf of user. This is optional for some triggers.
     * Example : "acs:ram::1234567890:role/fc-test"
     */
    readonly invocationRole?: string;

    /**
     * Property qualifier: service version or alias.
     * Example : "LATEST"
     */
    readonly qualifier?: string;

    /**
     * Property sourceArn: The Aliyun Resource Name (ARN) of event source. This is optional for some triggers.
     * Example : "acs:oss:cn-shanghai:12345:mybucket"
     */
    readonly sourceArn?: string;
}

/**
 * A ROS resource type:  `ALIYUN::FC::Trigger`
 */
export class Trigger extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute FunctionName: Function name.
     */
    public readonly attrFunctionName: any;

    /**
     * Attribute ServiceName: Service name.
     */
    public readonly attrServiceName: any;

    /**
     * Attribute TriggerId: The trigger ID.
     */
    public readonly attrTriggerId: any;

    /**
     * Attribute TriggerName: Trigger name.
     */
    public readonly attrTriggerName: any;

    /**
     * Create a new `ALIYUN::FC::Trigger`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: TriggerProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosTrigger = new RosTrigger(this, id,  {
            functionName: props.functionName,
            triggerType: props.triggerType,
            triggerName: props.triggerName,
            sourceArn: props.sourceArn,
            serviceName: props.serviceName,
            triggerConfig: props.triggerConfig,
            invocationRole: props.invocationRole,
            qualifier: props.qualifier,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosTrigger;
        this.attrFunctionName = rosTrigger.attrFunctionName;
        this.attrServiceName = rosTrigger.attrServiceName;
        this.attrTriggerId = rosTrigger.attrTriggerId;
        this.attrTriggerName = rosTrigger.attrTriggerName;
    }
}
