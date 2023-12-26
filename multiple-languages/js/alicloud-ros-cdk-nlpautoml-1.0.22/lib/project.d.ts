import * as ros from '@alicloud/ros-cdk-core';
import { RosProject } from './nlpautoml.generated';
export { RosProject as ProjectProperty };
/**
 * Properties for defining a `Project`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nlpautoml-project
 */
export interface ProjectProps {
    /**
     * Property projectDescription: The description of project.Cannot start with numbers and symbols, and the length cannot be greater than 256 characters.
     */
    readonly projectDescription: string | ros.IResolvable;
    /**
     * Property projectName: The name of project. Cannot start with numbers and symbols, and the length cannot be greater than 32 characters.
     */
    readonly projectName: string | ros.IResolvable;
    /**
     * Property projectType: The type of nlp project. The following value is allowed: ner, textCategorybaseRelation, textMatching, sentimentAnalysis, resumeExtract, reviewAnalysis
     */
    readonly projectType: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::NLPAUTOML::Project`, which is used to create a project.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosProject`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nlpautoml-project
 */
export declare class Project extends ros.Resource {
    /**
     * Attribute ProjectId: The project ID
     */
    readonly attrProjectId: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ProjectProps, enableResourcePropertyConstraint?: boolean);
}
