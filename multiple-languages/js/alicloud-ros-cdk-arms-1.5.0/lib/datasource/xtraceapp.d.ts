import * as ros from '@alicloud/ros-cdk-core';
import { RosXTraceApp } from './arms.generated';
export { RosXTraceApp as XTraceAppProperty };
/**
 * Properties for defining a `XTraceApp`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-arms-xtraceapp
 */
export interface XTraceAppProps {
    /**
     * Property pid: The process identifier (PID) of the application.
     */
    readonly pid: string | ros.IResolvable;
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ARMS::XTraceApp`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosXTraceApp`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-arms-xtraceapp
 */
export declare class XTraceApp extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: XTraceAppProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute CreateTime: The timestamp generated when the task was created.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * Attribute Pid: The process identifier (PID) of the application.
     */
    readonly attrPid: ros.IResolvable;
    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable;
    /**
     * Attribute Tags: The tags of the application.
     */
    readonly attrTags: ros.IResolvable;
    /**
     * Attribute XTraceAppName: The name of the application.
     */
    readonly attrXTraceAppName: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: XTraceAppProps, enableResourcePropertyConstraint?: boolean);
}
