import * as ros from '@alicloud/ros-cdk-core';
import { RosXTraceApp } from './arms.generated';
export { RosXTraceApp as XTraceAppProperty };
/**
 * Properties for defining a `XTraceApp`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-xtraceapp
 */
export interface XTraceAppProps {
    /**
     * Property xTraceAppName: The name of the resource.
     */
    readonly xTraceAppName: string | ros.IResolvable;
    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * Property tags: Tags of The tags of the resource..
     */
    readonly tags?: RosXTraceApp.TagsProperty[];
}
/**
 * Represents a `XTraceApp`.
 */
export interface IXTraceApp extends ros.IResource {
    readonly props: XTraceAppProps;
    /**
     * Attribute CreateTime: The creation time of the resource.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute Pid: the identify of application.
     */
    readonly attrPid: ros.IResolvable | string;
    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable | string;
    /**
     * Attribute Tags: The tags of the resource.
     */
    readonly attrTags: ros.IResolvable | string;
    /**
     * Attribute XTraceAppName: The name of the resource.
     */
    readonly attrXTraceAppName: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ARMS::XTraceApp`, which is used to create an application monitoring task.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosXTraceApp`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-xtraceapp
 */
export declare class XTraceApp extends ros.Resource implements IXTraceApp {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: XTraceAppProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute CreateTime: The creation time of the resource.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute Pid: the identify of application.
     */
    readonly attrPid: ros.IResolvable | string;
    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable | string;
    /**
     * Attribute Tags: The tags of the resource.
     */
    readonly attrTags: ros.IResolvable | string;
    /**
     * Attribute XTraceAppName: The name of the resource.
     */
    readonly attrXTraceAppName: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: XTraceAppProps, enableResourcePropertyConstraint?: boolean);
}
