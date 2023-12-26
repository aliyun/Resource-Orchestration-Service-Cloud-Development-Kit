import * as ros from '@alicloud/ros-cdk-core';
import { RosNamespaces } from './cms.generated';
export { RosNamespaces as NamespacesProperty };
/**
 * Properties for defining a `Namespaces`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cms-namespaces
 */
export interface NamespacesProps {
    /**
     * Property namespace: Indicator warehouse name.
     */
    readonly namespace?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::CMS::Namespaces`, which is used to query the basic information about namespaces.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosNamespaces`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cms-namespaces
 */
export declare class Namespaces extends ros.Resource {
    /**
     * Attribute Namespaces: The list of namespaces.
     */
    readonly attrNamespaces: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: NamespacesProps, enableResourcePropertyConstraint?: boolean);
}
