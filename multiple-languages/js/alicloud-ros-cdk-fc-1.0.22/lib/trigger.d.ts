import * as ros from '@alicloud/ros-cdk-core';
import { RosTrigger } from './fc.generated';
export { RosTrigger as TriggerProperty };
/**
 * Properties for defining a `Trigger`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc-trigger
 */
export interface TriggerProps {
    /**
     * Property functionName: Function name.
     */
    readonly functionName: string | ros.IResolvable;
    /**
     * Property serviceName: Service name.
     */
    readonly serviceName: string | ros.IResolvable;
    /**
     * Property triggerConfig: Event source specific trigger configuration. The value is different according to trigger type.
     */
    readonly triggerConfig: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * Property triggerName: Trigger name.
     * Example : "image_resize"
     */
    readonly triggerName: string | ros.IResolvable;
    /**
     * Property triggerType: Trigger type, e.g. oss, timer, logs. This determines how the trigger config is interpreted.
     * Example : "oss"
     */
    readonly triggerType: string | ros.IResolvable;
    /**
     * Property invocationRole: The role grants event source the permission to run function on behalf of user. This is optional for some triggers.
     * Example : "acs:ram::1234567890:role\/fc-test"
     */
    readonly invocationRole?: string | ros.IResolvable;
    /**
     * Property qualifier: service version or alias.
     * Example : "LATEST"
     */
    readonly qualifier?: string | ros.IResolvable;
    /**
     * Property sourceArn: The Aliyun Resource Name (ARN) of event source. This is optional for some triggers.
     * Example : "acs:oss:cn-shanghai:12345:mybucket"
     */
    readonly sourceArn?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::FC::Trigger`, which is used to trigger the invocation of a function.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosTrigger`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc-trigger
 */
export declare class Trigger extends ros.Resource {
    /**
     * Attribute FunctionName: Function name.
     */
    readonly attrFunctionName: ros.IResolvable;
    /**
     * Attribute ServiceName: Service name.
     */
    readonly attrServiceName: ros.IResolvable;
    /**
     * Attribute TriggerId: The trigger ID.
     */
    readonly attrTriggerId: ros.IResolvable;
    /**
     * Attribute TriggerName: Trigger name.
     */
    readonly attrTriggerName: ros.IResolvable;
    /**
     * Attribute UrlInternet: The public domain address. You can access HTTP triggers over the Internet by using HTTP or HTTPS.
     */
    readonly attrUrlInternet: ros.IResolvable;
    /**
     * Attribute UrlIntranet: The private endpoint. In a VPC, you can access HTTP triggers by using HTTP or HTTPS.
     */
    readonly attrUrlIntranet: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: TriggerProps, enableResourcePropertyConstraint?: boolean);
}
