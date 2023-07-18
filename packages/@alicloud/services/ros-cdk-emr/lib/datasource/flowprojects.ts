import * as ros from '@alicloud/ros-cdk-core';
import { RosFlowProjects } from './emr.generated';
// Generated from the AliCloud ROS Resource Specification
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
export class FlowProjects extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute FlowProjectIds: The list of flow project IDs.
     */
    public readonly attrFlowProjectIds: ros.IResolvable;

    /**
     * Attribute FlowProjects: The list of flow projects.
     */
    public readonly attrFlowProjects: ros.IResolvable;

    /**
     * Create a new `DATASOURCE::EMR::FlowProjects`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: FlowProjectsProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosFlowProjects = new RosFlowProjects(this, id,  {
            flowProjectName: props.flowProjectName,
            flowProjectId: props.flowProjectId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosFlowProjects;
        this.attrFlowProjectIds = rosFlowProjects.attrFlowProjectIds;
        this.attrFlowProjects = rosFlowProjects.attrFlowProjects;
    }
}
