import * as ros from '@alicloud/ros-cdk-core';
import { RosFlowProjects } from './emr.generated';
export { RosFlowProjects as FlowProjectsProperty };
/**
 * Properties for defining a `DATASOURCE::EMR::FlowProjects`
 */
export interface FlowProjectsProps {
    /**
     * Property flowProjectId: The first ID of the resource
     */
    readonly flowProjectId?: string | ros.IResolvable;
    /**
     * Property flowProjectName: Project name.
     */
    readonly flowProjectName?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `DATASOURCE::EMR::FlowProjects`
 */
export declare class FlowProjects extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute FlowProjectIds: The list of flow project IDs.
     */
    readonly attrFlowProjectIds: ros.IResolvable;
    /**
     * Attribute FlowProjects: The list of flow projects.
     */
    readonly attrFlowProjects: ros.IResolvable;
    /**
     * Create a new `DATASOURCE::EMR::FlowProjects`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: FlowProjectsProps, enableResourcePropertyConstraint?: boolean);
}
