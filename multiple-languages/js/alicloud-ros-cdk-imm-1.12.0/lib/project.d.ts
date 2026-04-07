import * as ros from '@alicloud/ros-cdk-core';
import { RosProject } from './imm.generated';
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
 * Represents a `Project`.
 */
export interface IProject extends ros.IResource {
    readonly props: ProjectProps;
    /**
     * Attribute Project: The name of project.
     */
    readonly attrProject: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::IMM::Project`, which is used to create an Intelligent Media Management (IMM) project.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosProject`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-imm-project
 */
export declare class Project extends ros.Resource implements IProject {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: ProjectProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute Project: The name of project.
     */
    readonly attrProject: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ProjectProps, enableResourcePropertyConstraint?: boolean);
}
