import * as ros from '@alicloud/ros-cdk-core';
import { RosEditingProject } from './vod.generated';
export { RosEditingProject as EditingProjectProperty };
/**
 * Properties for defining a `EditingProject`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vod-editingproject
 */
export interface EditingProjectProps {
    /**
     * Property editingProjectId: The ID of the online editing project.
     */
    readonly editingProjectId: string | ros.IResolvable;
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * Represents a `EditingProject`.
 */
export interface IEditingProject extends ros.IResource {
    readonly props: EditingProjectProps;
    /**
     * Attribute CreateTime: The time when the online editing project was created. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute EditingProjectId: The ID of the online editing project.
     */
    readonly attrEditingProjectId: ros.IResolvable | string;
    /**
     * Attribute EditingProjectName: The name of the online editing project.
     */
    readonly attrEditingProjectName: ros.IResolvable | string;
    /**
     * Attribute ModifiedTime: The last time when the online editing project was modified. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
     */
    readonly attrModifiedTime: ros.IResolvable | string;
    /**
     * Attribute Timeline: The timeline of the online editing project.
     */
    readonly attrTimeline: ros.IResolvable | string;
    /**
     * Attribute Title: The title of the online editing project.
     */
    readonly attrTitle: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::VOD::EditingProject`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosEditingProject`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vod-editingproject
 */
export declare class EditingProject extends ros.Resource implements IEditingProject {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: EditingProjectProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute CreateTime: The time when the online editing project was created. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute EditingProjectId: The ID of the online editing project.
     */
    readonly attrEditingProjectId: ros.IResolvable | string;
    /**
     * Attribute EditingProjectName: The name of the online editing project.
     */
    readonly attrEditingProjectName: ros.IResolvable | string;
    /**
     * Attribute ModifiedTime: The last time when the online editing project was modified. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
     */
    readonly attrModifiedTime: ros.IResolvable | string;
    /**
     * Attribute Timeline: The timeline of the online editing project.
     */
    readonly attrTimeline: ros.IResolvable | string;
    /**
     * Attribute Title: The title of the online editing project.
     */
    readonly attrTitle: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: EditingProjectProps, enableResourcePropertyConstraint?: boolean);
}
