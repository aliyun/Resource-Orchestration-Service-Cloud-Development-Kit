import * as ros from '@alicloud/ros-cdk-core';
import { RosProject } from './imm.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosProject as ProjectProperty };

/**
 * Properties for defining a `Project`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-imm-project
 */
export interface ProjectProps {

    /**
     * Property project: The name of project.
     */
    readonly project: string | ros.IResolvable;

    /**
     * Property serviceRole: Service role, which grants the IMM service the right to access other cloud resources (such as OSS). The default value is AliyunIMMDefaultRole.
     */
    readonly serviceRole?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::IMM::Project`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosProject`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-imm-project
 */
export class Project extends ros.Resource {

    /**
     * Attribute Project: The name of project.
     */
    public readonly attrProject: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ProjectProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosProject = new RosProject(this, id,  {
            project: props.project,
            serviceRole: props.serviceRole,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosProject;
        this.attrProject = rosProject.attrProject;
    }
}
