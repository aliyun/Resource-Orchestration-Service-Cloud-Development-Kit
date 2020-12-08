import * as ros from '@alicloud/ros-cdk-core';
import { RosTrigger } from './fc.generated';
export { RosTrigger as TriggerProperty };
/**
 * Properties for defining a `ALIYUN::FC::Trigger`
 */
export interface TriggerProps {
    /**
     * @Property functionName: Function name.
     */
    readonly functionName: string;
    /**
     * @Property serviceName: Service name.
     */
    readonly serviceName: string;
    /**
     * @Property triggerConfig: Event source specific trigger configuration. The value is different according to trigger type.
     */
    readonly triggerConfig: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property triggerName: Trigger name.
     * Example : "image_resize"
     */
    readonly triggerName: string;
    /**
     * @Property triggerType: Trigger type, e.g. oss, timer, logs. This determines how the trigger config is interpreted.
     * Example : "oss"
     */
    readonly triggerType: string;
    /**
     * @Property invocationRole: The role grants event source the permission to run function on behalf of user. This is optional for some triggers.
     * Example : "acs:ram::1234567890:role/fc-test"
     */
    readonly invocationRole?: string;
    /**
     * @Property qualifier: service version or alias.
     * Example : "LATEST"
     */
    readonly qualifier?: string;
    /**
     * @Property sourceArn: The Aliyun Resource Name (ARN) of event source. This is optional for some triggers.
     * Example : "acs:oss:cn-shanghai:12345:mybucket"
     */
    readonly sourceArn?: string;
}
/**
 * A ROS resource type:  `ALIYUN::FC::Trigger`
 */
export declare class Trigger extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * @Attribute FunctionName: Function name.
     */
    readonly attrFunctionName: any;
    /**
     * @Attribute ServiceName: Service name.
     */
    readonly attrServiceName: any;
    /**
     * @Attribute TriggerId: The trigger ID.
     */
    readonly attrTriggerId: any;
    /**
     * @Attribute TriggerName: Trigger name.
     */
    readonly attrTriggerName: any;
    /**
     * Create a new `ALIYUN::FC::Trigger`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: TriggerProps, enableResourcePropertyConstraint?: boolean);
}
