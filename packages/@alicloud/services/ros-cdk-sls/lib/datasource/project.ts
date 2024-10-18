import * as ros from '@alicloud/ros-cdk-core';
import { RosProject } from './sls.generated';
// Generated from the AliCloud ROS Resource Specification
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
export class Project extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: ProjectProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute CreateTime: The time at which the project was created.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * Attribute DataRedundancyType: Data redundancy type.
     */
    public readonly attrDataRedundancyType: ros.IResolvable;

    /**
     * Attribute Description: The description of the project.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * Attribute LastModifyTime: The time at which the project was last modified.
     */
    public readonly attrLastModifyTime: ros.IResolvable;

    /**
     * Attribute Owner: The ID of the Alibaba Cloud account that is used to create the project.
     */
    public readonly attrOwner: ros.IResolvable;

    /**
     * Attribute ProjectName: The name of the project.
     */
    public readonly attrProjectName: ros.IResolvable;

    /**
     * Attribute Quota: Project quota.
     */
    public readonly attrQuota: ros.IResolvable;

    /**
     * Attribute Region: The region to which the project belongs.
     */
    public readonly attrRegion: ros.IResolvable;

    /**
     * Attribute ResourceGroupId: The ID of the resource group to which the project belongs.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * Attribute Status: The status of the project.
     */
    public readonly attrStatus: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ProjectProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosProject = new RosProject(this, id,  {
            projectName: props.projectName,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosProject;
        this.attrCreateTime = rosProject.attrCreateTime;
        this.attrDataRedundancyType = rosProject.attrDataRedundancyType;
        this.attrDescription = rosProject.attrDescription;
        this.attrLastModifyTime = rosProject.attrLastModifyTime;
        this.attrOwner = rosProject.attrOwner;
        this.attrProjectName = rosProject.attrProjectName;
        this.attrQuota = rosProject.attrQuota;
        this.attrRegion = rosProject.attrRegion;
        this.attrResourceGroupId = rosProject.attrResourceGroupId;
        this.attrStatus = rosProject.attrStatus;
    }
}
