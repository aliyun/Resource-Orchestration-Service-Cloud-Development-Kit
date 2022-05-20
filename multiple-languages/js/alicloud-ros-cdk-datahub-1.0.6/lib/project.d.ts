import * as ros from '@alicloud/ros-cdk-core';
import { RosProject } from './datahub.generated';
export { RosProject as ProjectProperty };
/**
 * Properties for defining a `ALIYUN::DATAHUB::Project`
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
 * A ROS resource type:  `ALIYUN::DATAHUB::Project`
 */
export declare class Project extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute ProjectName: Project name
     */
    readonly attrProjectName: ros.IResolvable;
    /**
     * Create a new `ALIYUN::DATAHUB::Project`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ProjectProps, enableResourcePropertyConstraint?: boolean);
}
//# sourceMappingURL=project.d.ts.map