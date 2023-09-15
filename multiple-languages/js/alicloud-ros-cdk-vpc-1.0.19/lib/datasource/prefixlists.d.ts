import * as ros from '@alicloud/ros-cdk-core';
import { RosPrefixLists } from './vpc.generated';
export { RosPrefixLists as PrefixListsProperty };
/**
 * Properties for defining a `DATASOURCE::VPC::PrefixLists`
 */
export interface PrefixListsProps {
    /**
     * Property prefixListName: The name of the prefix list.
     */
    readonly prefixListName?: string | ros.IResolvable;
    /**
     * Property resourceGroupId: The ID of the resource group to which the VPC belongs.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `DATASOURCE::VPC::PrefixLists`
 */
export declare class PrefixLists extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute PrefixListIds: The list of prefix list IDs.
     */
    readonly attrPrefixListIds: ros.IResolvable;
    /**
     * Attribute PrefixLists: The list of prefix lists.
     */
    readonly attrPrefixLists: ros.IResolvable;
    /**
     * Create a new `DATASOURCE::VPC::PrefixLists`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: PrefixListsProps, enableResourcePropertyConstraint?: boolean);
}
