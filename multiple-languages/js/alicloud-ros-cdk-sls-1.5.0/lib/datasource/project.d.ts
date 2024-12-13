import * as ros from '@alicloud/ros-cdk-core';
import { RosProject } from './sls.generated';
export { RosProject as ProjectProperty };
/**
 * Properties for defining a `Project`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-sls-project
 */
export interface ProjectProps {
    /**
     * Property projectName: The name of the project.
     */
    readonly projectName: string | ros.IResolvable;
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::SLS::Project`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosProject`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-sls-project
 */
export declare class Project extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: ProjectProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute CreateTime: The time at which the project was created.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * Attribute DataRedundancyType: Data redundancy type.
     */
    readonly attrDataRedundancyType: ros.IResolvable;
    /**
     * Attribute Description: The description of the project.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * Attribute LastModifyTime: The time at which the project was last modified.
     */
    readonly attrLastModifyTime: ros.IResolvable;
    /**
     * Attribute Owner: The ID of the Alibaba Cloud account that is used to create the project.
     */
    readonly attrOwner: ros.IResolvable;
    /**
     * Attribute ProjectName: The name of the project.
     */
    readonly attrProjectName: ros.IResolvable;
    /**
     * Attribute Quota: Project quota.
     */
    readonly attrQuota: ros.IResolvable;
    /**
     * Attribute Region: The region to which the project belongs.
     */
    readonly attrRegion: ros.IResolvable;
    /**
     * Attribute ResourceGroupId: The ID of the resource group to which the project belongs.
     */
    readonly attrResourceGroupId: ros.IResolvable;
    /**
     * Attribute Status: The status of the project.
     */
    readonly attrStatus: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ProjectProps, enableResourcePropertyConstraint?: boolean);
}
