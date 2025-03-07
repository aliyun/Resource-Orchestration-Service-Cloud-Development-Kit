import * as ros from '@alicloud/ros-cdk-core';
import { RosInstances } from './ots.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosInstances as InstancesProperty };

/**
 * Properties for defining a `Instances`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ots-instances
 */
export interface InstancesProps {

    /**
     * Property instanceName: The name of instance.
     */
    readonly instanceName?: string | ros.IResolvable;

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

    /**
     * Property status: The status of instance.
     */
    readonly status?: string | ros.IResolvable;
}

/**
 * Represents a `Instances`.
 */
export interface IInstances extends ros.IResource {
    readonly props: InstancesProps;

    /**
     * Attribute InstanceNames: The list of instance names.
     */
    readonly attrInstanceNames: ros.IResolvable | string;

    /**
     * Attribute Instances: The list of instances.
     */
    readonly attrInstances: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::OTS::Instances`, which is used to query Tablestore instances.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosInstances`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ots-instances
 */
export class Instances extends ros.Resource implements IInstances {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: InstancesProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute InstanceNames: The list of instance names.
     */
    public readonly attrInstanceNames: ros.IResolvable | string;

    /**
     * Attribute Instances: The list of instances.
     */
    public readonly attrInstances: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: InstancesProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosInstances = new RosInstances(this, id,  {
            status: props.status,
            instanceName: props.instanceName,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosInstances;
        this.attrInstanceNames = rosInstances.attrInstanceNames;
        this.attrInstances = rosInstances.attrInstances;
    }
}
