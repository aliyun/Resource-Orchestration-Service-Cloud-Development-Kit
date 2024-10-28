import * as ros from '@alicloud/ros-cdk-core';
import { RosDeliverTask } from './arms.generated';
export { RosDeliverTask as DeliverTaskProperty };
/**
 * Properties for defining a `DeliverTask`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-delivertask
 */
export interface DeliverTaskProps {
    /**
     * Property targetList: The list of the target.
     */
    readonly targetList: Array<RosDeliverTask.TargetListProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property taskName: The name of the task.
     */
    readonly taskName: string | ros.IResolvable;
    /**
     * Property dataSourceId: The ID of the data source.
     */
    readonly dataSourceId?: string | ros.IResolvable;
    /**
     * Property dataSourceName: The name of the data source.
     */
    readonly dataSourceName?: string | ros.IResolvable;
    /**
     * Property externalLabel: The external label of the task.
     */
    readonly externalLabel?: string | ros.IResolvable;
    /**
     * Property filterList: Set metrics to filter, support for regular expressions, multiple line breaks, and multiple conditions to deliver.
     */
    readonly filterList?: string | ros.IResolvable;
    /**
     * Property filterType: Whether the data filtering adopts the whitelist mechanism. Default value: true.
     */
    readonly filterType?: boolean | ros.IResolvable;
    /**
     * Property taskDescription: The description of the task.
     */
    readonly taskDescription?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ARMS::DeliverTask`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDeliverTask`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-delivertask
 */
export declare class DeliverTask extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: DeliverTaskProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute TaskId: The ID of the task.
     */
    readonly attrTaskId: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DeliverTaskProps, enableResourcePropertyConstraint?: boolean);
}