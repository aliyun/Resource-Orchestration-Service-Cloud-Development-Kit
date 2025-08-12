import * as ros from '@alicloud/ros-cdk-core';
import { RosProject } from './nls.generated';
export { RosProject as ProjectProperty };
/**
 * Properties for defining a `Project`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nls-project
 */
export interface ProjectProps {
    /**
     * Property name: Name of the project.
     */
    readonly name: string | ros.IResolvable;
    /**
     * Property description: Description of the project.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * Property projectType: Type of the project.
     */
    readonly projectType?: string | ros.IResolvable;
    /**
     * Property sdkType: Type of the SDK.
     */
    readonly sdkType?: string | ros.IResolvable;
}
/**
 * Represents a `Project`.
 */
export interface IProject extends ros.IResource {
    readonly props: ProjectProps;
    /**
     * Attribute AppKey: The app key of the project.
     */
    readonly attrAppKey: ros.IResolvable | string;
    /**
     * Attribute ProjectId: The ID of the project.
     */
    readonly attrProjectId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::NLS::Project`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosProject`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nls-project
 */
export declare class Project extends ros.Resource implements IProject {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: ProjectProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute AppKey: The app key of the project.
     */
    readonly attrAppKey: ros.IResolvable | string;
    /**
     * Attribute ProjectId: The ID of the project.
     */
    readonly attrProjectId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ProjectProps, enableResourcePropertyConstraint?: boolean);
}
