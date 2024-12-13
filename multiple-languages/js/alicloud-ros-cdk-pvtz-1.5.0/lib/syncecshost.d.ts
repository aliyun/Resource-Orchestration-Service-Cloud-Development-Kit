import * as ros from '@alicloud/ros-cdk-core';
import { RosSyncEcsHost } from './pvtz.generated';
export { RosSyncEcsHost as SyncEcsHostProperty };
/**
 * Properties for defining a `SyncEcsHost`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pvtz-syncecshost
 */
export interface SyncEcsHostProps {
    /**
     * Property regions: A list of region information to be synchronized.
     */
    readonly regions: Array<RosSyncEcsHost.RegionsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property status: The host synchronizes the task state. Valid values: ON, OFF.
     */
    readonly status: string | ros.IResolvable;
    /**
     * Property zoneId: Zone ID, a unique identifier for the Zone.
     */
    readonly zoneId: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::PVTZ::SyncEcsHost`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosSyncEcsHost`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pvtz-syncecshost
 */
export declare class SyncEcsHost extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: SyncEcsHostProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SyncEcsHostProps, enableResourcePropertyConstraint?: boolean);
}
