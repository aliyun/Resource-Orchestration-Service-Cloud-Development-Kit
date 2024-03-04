import * as ros from '@alicloud/ros-cdk-core';
import { RosPrefixLists } from './vpc.generated';
// Generated from the AliCloud ROS Resource Specification
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
     * Property resourceGroupId: The ID of the resource group to which the VPC belongs.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::VPC::PrefixLists`, which is used to query the details of prefix lists.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosPrefixLists`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-prefixlists
 */
export class PrefixLists extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: PrefixListsProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute PrefixListIds: The list of prefix list IDs.
     */
    public readonly attrPrefixListIds: ros.IResolvable;

    /**
     * Attribute PrefixLists: The list of prefix lists.
     */
    public readonly attrPrefixLists: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: PrefixListsProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosPrefixLists = new RosPrefixLists(this, id,  {
            resourceGroupId: props.resourceGroupId,
            prefixListName: props.prefixListName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosPrefixLists;
        this.attrPrefixListIds = rosPrefixLists.attrPrefixListIds;
        this.attrPrefixLists = rosPrefixLists.attrPrefixLists;
    }
}
