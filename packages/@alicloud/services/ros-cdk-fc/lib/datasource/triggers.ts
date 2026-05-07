import * as ros from '@alicloud/ros-cdk-core';
import { RosTriggers } from './fc.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosTriggers as TriggersProperty };

/**
 * Properties for defining a `Triggers`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-fc-triggers
 */
export interface TriggersProps {

    /**
     * Property functionName: Function name.
     */
    readonly functionName: string | ros.IResolvable;

    /**
     * Property serviceName: Service name.
     */
    readonly serviceName: string | ros.IResolvable;

    /**
     * Property prefix: Qualified returned trigger names must be prefixed with Prefix. For example, if the Prefix is "a", the returned trigger names should be started with "a".
     */
    readonly prefix?: string | ros.IResolvable;

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Represents a `Triggers`.
 */
export interface ITriggers extends ros.IResource {
    readonly props: TriggersProps;

    /**
     * Attribute TriggerNames: The list of trigger names.
     */
    readonly attrTriggerNames: ros.IResolvable | string;

    /**
     * Attribute Triggers: The list of triggers.
     */
    readonly attrTriggers: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::FC::Triggers`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosTriggers`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-fc-triggers
 */
export class Triggers extends ros.Resource implements ITriggers {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: TriggersProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute TriggerNames: The list of trigger names.
     */
    public readonly attrTriggerNames: ros.IResolvable | string;

    /**
     * Attribute Triggers: The list of triggers.
     */
    public readonly attrTriggers: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: TriggersProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosTriggers = new RosTriggers(this, id,  {
            functionName: props.functionName,
            serviceName: props.serviceName,
            prefix: props.prefix,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosTriggers;
        this.attrTriggerNames = rosTriggers.attrTriggerNames;
        this.attrTriggers = rosTriggers.attrTriggers;
    }
}
