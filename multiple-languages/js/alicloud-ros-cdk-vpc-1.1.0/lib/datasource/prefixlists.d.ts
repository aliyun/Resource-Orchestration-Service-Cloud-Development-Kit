import * as ros from '@alicloud/ros-cdk-core';
import { RosPrefixLists } from './vpc.generated';
export { RosPrefixLists as PrefixListsProperty };
/**
 * Properties for defining a `PrefixLists`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-prefixlists
 */
export interface PrefixListsProps {
    /**
     * Property prefixListName: The name of the prefix list.
     */
    readonly prefixListName?: string | ros.IResolvable;
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
    /**
     * Property resourceGroupId: The ID of the resource group to which the VPC belongs.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::VPC::PrefixLists`, which is used to query the details of prefix lists.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosPrefixLists`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-prefixlists
 */
export declare class PrefixLists extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: PrefixListsProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute PrefixListIds: The list of prefix list IDs.
     */
    readonly attrPrefixListIds: ros.IResolvable;
    /**
     * Attribute PrefixLists: The list of prefix lists.
     */
    readonly attrPrefixLists: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: PrefixListsProps, enableResourcePropertyConstraint?: boolean);
}
