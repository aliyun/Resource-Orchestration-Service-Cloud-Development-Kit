import * as ros from '@alicloud/ros-cdk-core';
import { RosProject } from './imm.generated';
export { RosProject as ProjectProperty };
/**
 * Properties for defining a `ALIYUN::IMM::Project`
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
 * A ROS resource type:  `ALIYUN::IMM::Project`
 */
export declare class Project extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute Project: The name of project.
     */
    readonly attrProject: ros.IResolvable;
    /**
     * Create a new `ALIYUN::IMM::Project`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ProjectProps, enableResourcePropertyConstraint?: boolean);
}
//# sourceMappingURL=project.d.ts.map