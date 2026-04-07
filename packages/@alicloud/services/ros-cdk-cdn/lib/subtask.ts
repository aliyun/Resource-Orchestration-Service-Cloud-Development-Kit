import * as ros from '@alicloud/ros-cdk-core';
import { RosSubTask } from './cdn.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosSubTask as SubTaskProperty };

/**
 * Properties for defining a `SubTask`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cdn-subtask
 */
export interface SubTaskProps {

    /**
     * Property reportIds: The report IDs.
     * The value can be up to 128 bytes in length.
     */
    readonly reportIds: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property domainName: The domain name.
     */
    readonly domainName?: string | ros.IResolvable;
}

/**
 * Represents a `SubTask`.
 */
export interface ISubTask extends ros.IResource {
    readonly props: SubTaskProps;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CDN::SubTask`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosSubTask`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cdn-subtask
 */
export class SubTask extends ros.Resource implements ISubTask {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: SubTaskProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SubTaskProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosSubTask = new RosSubTask(this, id,  {
            domainName: props.domainName,
            reportIds: props.reportIds,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosSubTask;
    }
}
