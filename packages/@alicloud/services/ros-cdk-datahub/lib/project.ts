import * as ros from '@alicloud/ros-cdk-core';
import { RosProject } from './datahub.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosProject as ProjectProperty };

/**
 * Properties for defining a `Project`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-datahub-project
 */
export interface ProjectProps {

    /**
     * Property comment: The comment of project.
     */
    readonly comment: string | ros.IResolvable;

    /**
     * Property projectName: The name of the project. Length [3, 32]. Beginning with characters, only characters, numbers and _ are allowed.
     */
    readonly projectName: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::DATAHUB::Project`, which is used to create a DataHub project.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosProject`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-datahub-project
 */
export class Project extends ros.Resource {

    /**
     * Attribute ProjectName: Project name
     */
    public readonly attrProjectName: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ProjectProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosProject = new RosProject(this, id,  {
            comment: props.comment,
            projectName: props.projectName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosProject;
        this.attrProjectName = rosProject.attrProjectName;
    }
}
