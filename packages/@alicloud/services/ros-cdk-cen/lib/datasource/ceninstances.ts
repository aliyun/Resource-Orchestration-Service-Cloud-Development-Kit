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
}

/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::CEN::CenInstances`, which is used to query the details of Cloud Enterprise Network (CEN) instances within the current Alibaba Cloud account.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosCenInstances`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cen-ceninstances
 */
export class CenInstances extends ros.Resource {

    /**
     * Attribute CenIds: The list of The Cen instance ids.
     */
    public readonly attrCenIds: ros.IResolvable;

    /**
     * Attribute Cens: The information about Cens.
     */
    public readonly attrCens: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: CenInstancesProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosCenInstances = new RosCenInstances(this, id,  {
            filter: props.filter,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosCenInstances;
        this.attrCenIds = rosCenInstances.attrCenIds;
        this.attrCens = rosCenInstances.attrCens;
    }
}
