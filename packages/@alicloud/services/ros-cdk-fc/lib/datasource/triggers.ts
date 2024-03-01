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
}

/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::FC::Triggers`, which is used to query triggers.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosTriggers`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-fc-triggers
 */
export class Triggers extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: TriggersProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute TriggerNames: The list of trigger names.
     */
    public readonly attrTriggerNames: ros.IResolvable;

    /**
     * Attribute Triggers: The list of triggers.
     */
    public readonly attrTriggers: ros.IResolvable;

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
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosTriggers;
        this.attrTriggerNames = rosTriggers.attrTriggerNames;
        this.attrTriggers = rosTriggers.attrTriggers;
    }
}
