import * as ros from '@alicloud/ros-cdk-core';
import { RosXTraceApps } from './arms.generated';
export { RosXTraceApps as XTraceAppsProperty };
/**
 * Properties for defining a `XTraceApps`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-arms-xtraceapps
 */
export interface XTraceAppsProps {
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}
/**
 * Represents a `XTraceApps`.
 */
export interface IXTraceApps extends ros.IResource {
    readonly props: XTraceAppsProps;
    /**
     * Attribute Pids: The list of Pids.
     */
    readonly attrPids: ros.IResolvable | string;
    /**
     * Attribute XTraceApps: The list of Application Monitoring tasks.
     */
    readonly attrXTraceApps: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ARMS::XTraceApps`, which is used to query all the application monitoring tasks in a region.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosXTraceApps`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-arms-xtraceapps
 */
export declare class XTraceApps extends ros.Resource implements IXTraceApps {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: XTraceAppsProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute Pids: The list of Pids.
     */
    readonly attrPids: ros.IResolvable | string;
    /**
     * Attribute XTraceApps: The list of Application Monitoring tasks.
     */
    readonly attrXTraceApps: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: XTraceAppsProps, enableResourcePropertyConstraint?: boolean);
}
