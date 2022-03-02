import * as ros from '@alicloud/ros-cdk-core';
import { RosSleep } from './ros.generated';
export { RosSleep as SleepProperty };
/**
 * Properties for defining a `ALIYUN::ROS::Sleep`
 */
export interface SleepProps {
    /**
     * Property createDuration: The number of seconds to wait before resource creation.
     */
    readonly createDuration?: number | ros.IResolvable;
    /**
     * Property deleteDuration: The number of seconds to wait before resource deletion.
     */
    readonly deleteDuration?: number | ros.IResolvable;
    /**
     * Property triggers: Arbitrary map of values that, when changed, will run update or update rollback delays again.
     */
    readonly triggers?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * Property updateDuration: The number of seconds to wait before resource update. It only triggers when the property Triggers change and the status of stack is UPDATE_IN_PROGRESS.
     */
    readonly updateDuration?: number | ros.IResolvable;
    /**
     * Property updateRollbackDuration: The number of seconds to wait before resource update rollback. It only triggers when stack update failed and resource was updated.
     */
    readonly updateRollbackDuration?: number | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::ROS::Sleep`
 */
export declare class Sleep extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Create a new `ALIYUN::ROS::Sleep`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: SleepProps, enableResourcePropertyConstraint?: boolean);
}
