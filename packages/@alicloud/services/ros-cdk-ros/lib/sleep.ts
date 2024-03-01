import * as ros from '@alicloud/ros-cdk-core';
import { RosSleep } from './ros.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosSleep as SleepProperty };

/**
 * Properties for defining a `Sleep`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ros-sleep
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
    readonly triggers?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

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
 * This class encapsulates and extends the ROS resource type `ALIYUN::ROS::Sleep`, which is used to delay the creation, deletion, update, and rollback of other resources.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosSleep`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ros-sleep
 */
export class Sleep extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: SleepProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SleepProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosSleep = new RosSleep(this, id,  {
            deleteDuration: props.deleteDuration,
            updateRollbackDuration: props.updateRollbackDuration,
            updateDuration: props.updateDuration,
            createDuration: props.createDuration,
            triggers: props.triggers,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosSleep;
    }
}
