import * as ros from '@alicloud/ros-cdk-core';
import { RosDeliverTask } from './cdn.generated';
export { RosDeliverTask as DeliverTaskProperty };
/**
 * Properties for defining a `DeliverTask`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cdn-delivertask
 */
export interface DeliverTaskProps {
    /**
     * Property deliver: The deliver of the CDN deliver task.
     */
    readonly deliver: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * Property name: The name of the CDN deliver task.
     */
    readonly name: string | ros.IResolvable;
    /**
     * Property reports: The reports of the CDN deliver task.
     */
    readonly reports: Array<any | ros.IResolvable> | ros.IResolvable;
    /**
     * Property schedule: The schedule of the CDN deliver task.
     */
    readonly schedule: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * Property domainNames: The domain name of the CDN deliver task.
     */
    readonly domainNames?: Array<string | ros.IResolvable> | ros.IResolvable;
}
/**
 * Represents a `DeliverTask`.
 */
export interface IDeliverTask extends ros.IResource {
    readonly props: DeliverTaskProps;
    /**
     * Attribute DeliverId: The deliver ID of the CDN deliver task.
     */
    readonly attrDeliverId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CDN::DeliverTask`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDeliverTask`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cdn-delivertask
 */
export declare class DeliverTask extends ros.Resource implements IDeliverTask {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: DeliverTaskProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute DeliverId: The deliver ID of the CDN deliver task.
     */
    readonly attrDeliverId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DeliverTaskProps, enableResourcePropertyConstraint?: boolean);
}
