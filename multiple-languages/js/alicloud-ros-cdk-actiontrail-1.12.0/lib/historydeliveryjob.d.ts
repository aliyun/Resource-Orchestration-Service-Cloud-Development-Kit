import * as ros from '@alicloud/ros-cdk-core';
import { RosHistoryDeliveryJob } from './actiontrail.generated';
export { RosHistoryDeliveryJob as HistoryDeliveryJobProperty };
/**
 * Properties for defining a `HistoryDeliveryJob`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-actiontrail-historydeliveryjob
 */
export interface HistoryDeliveryJobProps {
    /**
     * Property trailName: The name of the trail.
     */
    readonly trailName: string | ros.IResolvable;
}
/**
 * Represents a `HistoryDeliveryJob`.
 */
export interface IHistoryDeliveryJob extends ros.IResource {
    readonly props: HistoryDeliveryJobProps;
    /**
     * Attribute JobId: The ID of the delivery history job.
     */
    readonly attrJobId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ACTIONTRAIL::HistoryDeliveryJob`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosHistoryDeliveryJob`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-actiontrail-historydeliveryjob
 */
export declare class HistoryDeliveryJob extends ros.Resource implements IHistoryDeliveryJob {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: HistoryDeliveryJobProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute JobId: The ID of the delivery history job.
     */
    readonly attrJobId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: HistoryDeliveryJobProps, enableResourcePropertyConstraint?: boolean);
}
