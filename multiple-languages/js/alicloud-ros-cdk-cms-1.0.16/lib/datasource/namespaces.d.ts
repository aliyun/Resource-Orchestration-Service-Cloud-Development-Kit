import * as ros from '@alicloud/ros-cdk-core';
import { RosNamespaces } from './cms.generated';
export { RosNamespaces as NamespacesProperty };
/**
 * Properties for defining a `DATASOURCE::CMS::Namespaces`
 */
export interface NamespacesProps {
    /**
     * Property namespace: Indicator warehouse name.
     */
    readonly namespace?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `DATASOURCE::CMS::Namespaces`
 */
export declare class Namespaces extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute Namespaces: The list of namespaces.
     */
    readonly attrNamespaces: ros.IResolvable;
    /**
     * Create a new `DATASOURCE::CMS::Namespaces`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: NamespacesProps, enableResourcePropertyConstraint?: boolean);
}
