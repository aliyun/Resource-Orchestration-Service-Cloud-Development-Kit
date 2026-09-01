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
     * Property reportIds: The IDs of the metrics that you want to include in the report. Separate multiple
     * IDs with commas (,). Valid values:
     * - 1: frequently requested URLs (ranked by the number of requests)
     * - 3: frequently requested URLs (ranked by the amount of network traffic)
     * - 5: frequently used Referer headers (ranked by the number of requests)
     * - 7: frequently used Referer headers (ranked by the amount of network traffic)
     * - 9: frequently requested URLs that are redirected to the origin (ranked by the
     * number of requests)
     * - 11: frequently requested URLs that are redirected to the origin (ranked by the
     * amount of network traffic)
     * - 13: top client IP addresses (ranked by the number of requests)
     * - 15: top client IP addresses (ranked by the amount of network traffic)
     * - 17: domain names ranked by the amount of network traffic
     * - 19: page views and unique visitors
     * - 21: regions from which requests are initiated
     * - 23: Internet service providers (ISPs)
     */
    readonly reportIds: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property domainName: The domain names to be tracked. Separate multiple domain names with commas (,).
     * You can specify up to 500 domain names. If you want to specify more than 500
     * domain names, submit a ticket.
     * > If you do not specify a domain name, the custom operations report is created
     * for all domain names that belong to your account.
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
