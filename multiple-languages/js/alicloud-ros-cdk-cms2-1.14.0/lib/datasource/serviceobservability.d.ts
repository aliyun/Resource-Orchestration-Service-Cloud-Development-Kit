import * as ros from '@alicloud/ros-cdk-core';
import { RosServiceObservability } from './cms2.generated';
export { RosServiceObservability as ServiceObservabilityProperty };
/**
 * Properties for defining a `ServiceObservability`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cms2-serviceobservability
 */
export interface ServiceObservabilityProps {
    /**
     * Property type: The type of service observability.
     */
    readonly type: string | ros.IResolvable;
    /**
     * Property workspace: The workspace name.
     */
    readonly workspace: string | ros.IResolvable;
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * Represents a `ServiceObservability`.
 */
export interface IServiceObservability extends ros.IResource {
    readonly props: ServiceObservabilityProps;
    /**
     * Attribute EntryPointInfo: The entry point info of service observability.
     */
    readonly attrEntryPointInfo: ros.IResolvable | string;
    /**
     * Attribute FeeType: The fee type of service observability.
     */
    readonly attrFeeType: ros.IResolvable | string;
    /**
     * Attribute Quotas: The quotas of service observability.
     */
    readonly attrQuotas: ros.IResolvable | string;
    /**
     * Attribute Settings: The settings of service observability.
     */
    readonly attrSettings: ros.IResolvable | string;
    /**
     * Attribute Status: The status of service observability.
     */
    readonly attrStatus: ros.IResolvable | string;
    /**
     * Attribute Type: The type of service observability.
     */
    readonly attrType: ros.IResolvable | string;
    /**
     * Attribute Workspace: The name of workspace.
     */
    readonly attrWorkspace: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::CMS2::ServiceObservability`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosServiceObservability`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cms2-serviceobservability
 */
export declare class ServiceObservability extends ros.Resource implements IServiceObservability {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: ServiceObservabilityProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute EntryPointInfo: The entry point info of service observability.
     */
    readonly attrEntryPointInfo: ros.IResolvable | string;
    /**
     * Attribute FeeType: The fee type of service observability.
     */
    readonly attrFeeType: ros.IResolvable | string;
    /**
     * Attribute Quotas: The quotas of service observability.
     */
    readonly attrQuotas: ros.IResolvable | string;
    /**
     * Attribute Settings: The settings of service observability.
     */
    readonly attrSettings: ros.IResolvable | string;
    /**
     * Attribute Status: The status of service observability.
     */
    readonly attrStatus: ros.IResolvable | string;
    /**
     * Attribute Type: The type of service observability.
     */
    readonly attrType: ros.IResolvable | string;
    /**
     * Attribute Workspace: The name of workspace.
     */
    readonly attrWorkspace: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ServiceObservabilityProps, enableResourcePropertyConstraint?: boolean);
}
