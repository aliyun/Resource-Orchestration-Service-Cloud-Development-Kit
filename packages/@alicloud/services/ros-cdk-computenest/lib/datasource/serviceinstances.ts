import * as ros from '@alicloud/ros-cdk-core';
import { RosServiceInstances } from './computenest.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosServiceInstances as ServiceInstancesProperty };

/**
 * Properties for defining a `ServiceInstances`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-computenest-serviceinstances
 */
export interface ServiceInstancesProps {

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
 * Represents a `ServiceInstances`.
 */
export interface IServiceInstances extends ros.IResource {
    readonly props: ServiceInstancesProps;

    /**
     * Attribute ServiceInstanceIds: The list of service instance IDs.
     */
    readonly attrServiceInstanceIds: ros.IResolvable | string;

    /**
     * Attribute ServiceInstances: The list of service instances.
     */
    readonly attrServiceInstances: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ComputeNest::ServiceInstances`, which is used to query the information about service instances.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosServiceInstances`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-computenest-serviceinstances
 */
export class ServiceInstances extends ros.Resource implements IServiceInstances {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: ServiceInstancesProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute ServiceInstanceIds: The list of service instance IDs.
     */
    public readonly attrServiceInstanceIds: ros.IResolvable | string;

    /**
     * Attribute ServiceInstances: The list of service instances.
     */
    public readonly attrServiceInstances: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ServiceInstancesProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosServiceInstances = new RosServiceInstances(this, id,  {
            resourceGroupId: props.resourceGroupId,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosServiceInstances;
        this.attrServiceInstanceIds = rosServiceInstances.attrServiceInstanceIds;
        this.attrServiceInstances = rosServiceInstances.attrServiceInstances;
    }
}
