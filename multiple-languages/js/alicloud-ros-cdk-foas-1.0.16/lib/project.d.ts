import * as ros from '@alicloud/ros-cdk-core';
import { RosProject } from './foas.generated';
export { RosProject as ProjectProperty };
/**
 * Properties for defining a `ALIYUN::FOAS::Project`
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
 * A ROS resource type:  `ALIYUN::FOAS::Project`
 */
export declare class Project extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute State: Project state.
     */
    readonly attrState: ros.IResolvable;
    /**
     * Create a new `ALIYUN::FOAS::Project`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ProjectProps, enableResourcePropertyConstraint?: boolean);
}
