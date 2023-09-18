import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `DATASOURCE::EMR::FlowProjects`
 */
export interface RosFlowProjectsProps {
    /**
     * @Property flowProjectId: The first ID of the resource
     */
    readonly flowProjectId?: string | ros.IResolvable;
    /**
     * @Property flowProjectName: Project name.
     */
    readonly flowProjectName?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `DATASOURCE::EMR::FlowProjects`
 */
export declare class RosFlowProjects extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::EMR::FlowProjects";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute FlowProjectIds: The list of flow project IDs.
     */
    readonly attrFlowProjectIds: ros.IResolvable;
    /**
     * @Attribute FlowProjects: The list of flow projects.
     */
    readonly attrFlowProjects: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property flowProjectId: The first ID of the resource
     */
    flowProjectId: string | ros.IResolvable | undefined;
    /**
     * @Property flowProjectName: Project name.
     */
    flowProjectName: string | ros.IResolvable | undefined;
    /**
     * Create a new `DATASOURCE::EMR::FlowProjects`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosFlowProjectsProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
