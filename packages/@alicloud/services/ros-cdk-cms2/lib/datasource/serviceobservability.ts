import * as ros from '@alicloud/ros-cdk-core';
import { RosServiceObservability } from './cms2.generated';
// Generated from the AliCloud ROS Resource Specification
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
export class ServiceObservability extends ros.Resource implements IServiceObservability {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: ServiceObservabilityProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute EntryPointInfo: The entry point info of service observability.
     */
    public readonly attrEntryPointInfo: ros.IResolvable | string;

    /**
     * Attribute FeeType: The fee type of service observability.
     */
    public readonly attrFeeType: ros.IResolvable | string;

    /**
     * Attribute Quotas: The quotas of service observability.
     */
    public readonly attrQuotas: ros.IResolvable | string;

    /**
     * Attribute Settings: The settings of service observability.
     */
    public readonly attrSettings: ros.IResolvable | string;

    /**
     * Attribute Status: The status of service observability.
     */
    public readonly attrStatus: ros.IResolvable | string;

    /**
     * Attribute Type: The type of service observability.
     */
    public readonly attrType: ros.IResolvable | string;

    /**
     * Attribute Workspace: The name of workspace.
     */
    public readonly attrWorkspace: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ServiceObservabilityProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosServiceObservability = new RosServiceObservability(this, id,  {
            type: props.type,
            workspace: props.workspace,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosServiceObservability;
        this.attrEntryPointInfo = rosServiceObservability.attrEntryPointInfo;
        this.attrFeeType = rosServiceObservability.attrFeeType;
        this.attrQuotas = rosServiceObservability.attrQuotas;
        this.attrSettings = rosServiceObservability.attrSettings;
        this.attrStatus = rosServiceObservability.attrStatus;
        this.attrType = rosServiceObservability.attrType;
        this.attrWorkspace = rosServiceObservability.attrWorkspace;
    }
}
