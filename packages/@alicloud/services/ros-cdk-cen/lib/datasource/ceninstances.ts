import * as ros from '@alicloud/ros-cdk-core';
import { RosCenInstances } from './cen.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosCenInstances as CenInstancesProperty };

/**
 * Properties for defining a `CenInstances`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cen-ceninstances
 */
export interface CenInstancesProps {

    /**
     * Property filter: Filter value when querying resources
     */
    readonly filter?: Array<RosCenInstances.FilterProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Represents a `CenInstances`.
 */
export interface ICenInstances extends ros.IResource {
    readonly props: CenInstancesProps;

    /**
     * Attribute CenIds: The list of The Cen instance ids.
     */
    readonly attrCenIds: ros.IResolvable | string;

    /**
     * Attribute Cens: The information about Cens.
     */
    readonly attrCens: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::CEN::CenInstances`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosCenInstances`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cen-ceninstances
 */
export class CenInstances extends ros.Resource implements ICenInstances {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: CenInstancesProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute CenIds: The list of The Cen instance ids.
     */
    public readonly attrCenIds: ros.IResolvable | string;

    /**
     * Attribute Cens: The information about Cens.
     */
    public readonly attrCens: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: CenInstancesProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosCenInstances = new RosCenInstances(this, id,  {
            filter: props.filter,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosCenInstances;
        this.attrCenIds = rosCenInstances.attrCenIds;
        this.attrCens = rosCenInstances.attrCens;
    }
}
