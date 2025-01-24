import * as ros from '@alicloud/ros-cdk-core';
import { RosStack } from './ros.generated';
export { RosStack as StackProperty };
/**
 * Properties for defining a `Stack`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ros-stack
 */
export interface StackProps {
    /**
     * Property parameters: The set of parameters passed to this nested stack.
     */
    readonly parameters?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * Property resourceGroupId: Resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * Property tags: The tags of nested stack. If it is specified, it will be passed to all tag-supported resources in the nested stack.
     */
    readonly tags?: RosStack.TagsProperty[];
    /**
     * Property templateBody: Structure containing the template body.
     * It is just to facilitate the passing of template. It is raw content.Functions in TemplateBody will not be resolved in parent stack.
     * You must specify either the TemplateBody or the TemplateURL property. If both are specified, TemplateBody will be used.
     */
    readonly templateBody?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * Property templateId: Template ID of template containing the template body.
     */
    readonly templateId?: string | ros.IResolvable;
    /**
     * Property templateUrl: Location of file containing the template body. The URL must point to a template (max size: 524288 bytes) that is located in a http web server(http, https), or an Aliyun OSS bucket(Such as oss:\/\/ros-template\/demo?RegionId=cn-hangzhou, oss:\/\/ros-template\/demo. RegionId is default to the value of RegionId Parameter of the request.).
     * You must specify either the TemplateBody or the TemplateURL property. If both are specified, TemplateBody will be used.
     */
    readonly templateUrl?: string | ros.IResolvable;
    /**
     * Property templateVersion: Template version of template containing the template body.
     */
    readonly templateVersion?: string | ros.IResolvable;
    /**
     * Property timeoutMins: The length of time, in minutes, to wait for the nested stack creation or update. Default to 60 minutes.
     */
    readonly timeoutMins?: number | ros.IResolvable;
}
/**
 * Represents a `Stack`.
 */
export interface IStack extends ros.IResource {
    readonly props: StackProps;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ROS::Stack`, which is used to create a nested stack. You can nest stacks up to five levels of depth.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosStack`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ros-stack
 */
export declare class Stack extends ros.Resource implements IStack {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: StackProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: StackProps, enableResourcePropertyConstraint?: boolean);
}
