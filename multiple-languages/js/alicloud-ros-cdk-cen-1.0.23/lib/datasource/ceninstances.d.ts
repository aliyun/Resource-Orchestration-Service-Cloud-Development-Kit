import * as ros from '@alicloud/ros-cdk-core';
import { RosCenInstances } from './cen.generated';
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
export declare class CenInstances extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: CenInstancesProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute CenIds: The list of The Cen instance ids.
     */
    readonly attrCenIds: ros.IResolvable;
    /**
     * Attribute Cens: The information about Cens.
     */
    readonly attrCens: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: CenInstancesProps, enableResourcePropertyConstraint?: boolean);
}
