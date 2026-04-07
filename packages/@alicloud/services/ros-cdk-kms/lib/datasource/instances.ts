import * as ros from '@alicloud/ros-cdk-core';
import { RosInstances } from './kms.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosInstances as InstancesProperty };

/**
 * Properties for defining a `Instances`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-kms-instances
 */
export interface InstancesProps {

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Represents a `Instances`.
 */
export interface IInstances extends ros.IResource {
    readonly props: InstancesProps;

    /**
     * Attribute InstanceIds: The list of instance IDs.
     */
    readonly attrInstanceIds: ros.IResolvable | string;

    /**
     * Attribute Instances: The list of instances.
     */
    readonly attrInstances: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::KMS::Instances`, which is used to query Key Management Service (KMS) instances that are created within the current account in the current region.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosInstances`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-kms-instances
 */
export class Instances extends ros.Resource implements IInstances {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: InstancesProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute InstanceIds: The list of instance IDs.
     */
    public readonly attrInstanceIds: ros.IResolvable | string;

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
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosInstances;
        this.attrInstanceIds = rosInstances.attrInstanceIds;
        this.attrInstances = rosInstances.attrInstances;
    }
}
