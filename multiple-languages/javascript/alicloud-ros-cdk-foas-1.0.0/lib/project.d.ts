import * as ros from '@alicloud/ros-cdk-core';
import { RosProject } from './foas.generated';
export { RosProject as ProjectProperty };
/**
 * Properties for defining a `ALIYUN::FOAS::Project`
 */
export interface ProjectProps {
    /**
     * @Property deployType: Cluster type:
     * Exclusive cluster: cell
     * Shared cluster: public
     */
    readonly deployType: string;
    /**
     * @Property managerIds: Comma delimited account Id list of managers.
     */
    readonly managerIds: string;
    /**
     * @Property name: Project name. It begins with a letter, and contains only lowercase English letters, numbers, underscores (_), and is limited to 3-64 characters.
     */
    readonly name: string;
    /**
     * @Property clusterId: Cluster ID.
     */
    readonly clusterId?: string;
    /**
     * @Property description: Project description.
     */
    readonly description?: string;
    /**
     * @Property orderId: Order Id of Shared cluster.
     */
    readonly orderId?: string;
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
     * @Attribute State: Project state.
     */
    readonly attrState: any;
    /**
     * Create a new `ALIYUN::FOAS::Project`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ProjectProps, enableResourcePropertyConstraint?: boolean);
}
