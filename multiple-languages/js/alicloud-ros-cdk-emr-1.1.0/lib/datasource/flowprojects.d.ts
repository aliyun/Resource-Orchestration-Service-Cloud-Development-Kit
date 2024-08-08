import * as ros from '@alicloud/ros-cdk-core';
import { RosFlowProjects } from './emr.generated';
export { RosFlowProjects as FlowProjectsProperty };
/**
 * Properties for defining a `FlowProjects`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-emr-flowprojects
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
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::EMR::FlowProjects`, which is used to query projects.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosFlowProjects`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-emr-flowprojects
 */
export declare class FlowProjects extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: FlowProjectsProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute FlowProjectIds: The list of flow project IDs.
     */
    readonly attrFlowProjectIds: ros.IResolvable;
    /**
     * Attribute FlowProjects: The list of flow projects.
     */
    readonly attrFlowProjects: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: FlowProjectsProps, enableResourcePropertyConstraint?: boolean);
}
