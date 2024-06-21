import * as ros from '@alicloud/ros-cdk-core';
import { RosProject } from './foas.generated';
export { RosProject as ProjectProperty };
/**
 * Properties for defining a `Project`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-foas-project
 */
export interface ProjectProps {
    /**
     * Property deployType: Cluster type:
     * Exclusive cluster: cell
     * Shared cluster: public
     */
    readonly deployType: string | ros.IResolvable;
    /**
     * Property managerIds: Comma delimited account Id list of managers.
     */
    readonly managerIds: string | ros.IResolvable;
    /**
     * Property name: Project name. It begins with a letter, and contains only lowercase English letters, numbers, underscores (_), and is limited to 3-64 characters.
     */
    readonly name: string | ros.IResolvable;
    /**
     * Property clusterId: Cluster ID.
     */
    readonly clusterId?: string | ros.IResolvable;
    /**
     * Property description: Project description.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * Property orderId: Order Id of Shared cluster.
     */
    readonly orderId?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::FOAS::Project`, which is used to create a project in a Realtime Compute cluster.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosProject`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-foas-project
 */
export declare class Project extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: ProjectProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute State: Project state.
     */
    readonly attrState: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ProjectProps, enableResourcePropertyConstraint?: boolean);
}
