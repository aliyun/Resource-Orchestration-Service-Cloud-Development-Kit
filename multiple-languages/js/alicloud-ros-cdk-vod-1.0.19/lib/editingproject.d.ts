import * as ros from '@alicloud/ros-cdk-core';
import { RosEditingProject } from './vod.generated';
export { RosEditingProject as EditingProjectProperty };
/**
 * Properties for defining a `ALIYUN::VOD::EditingProject`
 */
export interface EditingProjectProps {
    /**
     * Property title: The title of the online editing project.
     */
    readonly title: string | ros.IResolvable;
    /**
     * Property editingProjectName: The name of the online editing project.
     */
    readonly editingProjectName?: string | ros.IResolvable;
    /**
     * Property timeline: The timeline of the online editing project, in JSON format.
     * If you do not specify this parameter, an empty timeline is created and the duration of the online editing project is zero.
     */
    readonly timeline?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::VOD::EditingProject`
 */
export declare class EditingProject extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute CreateTime: The time when the online editing project was created.
The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * Attribute EditingProjectId: The ID of the online editing project.
     */
    readonly attrEditingProjectId: ros.IResolvable;
    /**
     * Attribute EditingProjectName: The name of the online editing project.
     */
    readonly attrEditingProjectName: ros.IResolvable;
    /**
     * Attribute ModifiedTime: The last time when the online editing project was modified.
The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
     */
    readonly attrModifiedTime: ros.IResolvable;
    /**
     * Attribute Timeline: The timeline of the online editing project.
     */
    readonly attrTimeline: ros.IResolvable;
    /**
     * Attribute Title: The title of the online editing project.
     */
    readonly attrTitle: ros.IResolvable;
    /**
     * Create a new `ALIYUN::VOD::EditingProject`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: EditingProjectProps, enableResourcePropertyConstraint?: boolean);
}
