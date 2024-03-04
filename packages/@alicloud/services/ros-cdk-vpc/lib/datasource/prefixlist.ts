import * as ros from '@alicloud/ros-cdk-core';
import { RosPrefixList } from './vpc.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosPrefixList as PrefixListProperty };

/**
 * Properties for defining a `PrefixList`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-prefixlist
 */
export interface PrefixListProps {

    /**
     * Property prefixListId: The ID of the query Prefix List.
     */
    readonly prefixListId: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::VPC::PrefixList`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosPrefixList`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-prefixlist
 */
export class PrefixList extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: PrefixListProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute CreateTime: The time when the prefix list was created.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * Attribute Entries: The CIDR address block list of the prefix list.
     */
    public readonly attrEntries: ros.IResolvable;

    /**
     * Attribute IpVersion: The IP version of the prefix list.
     */
    public readonly attrIpVersion: ros.IResolvable;

    /**
     * Attribute MaxEntries: The maximum number of entries for CIDR address blocks in the prefix list.
     */
    public readonly attrMaxEntries: ros.IResolvable;

    /**
     * Attribute OwnerId: The Alibaba Cloud account (primary account) to which the prefix list belongs.
     */
    public readonly attrOwnerId: ros.IResolvable;

    /**
     * Attribute PrefixListDescription: The description of the prefix list.
     */
    public readonly attrPrefixListDescription: ros.IResolvable;

    /**
     * Attribute PrefixListId: The ID of the query Prefix List.
     */
    public readonly attrPrefixListId: ros.IResolvable;

    /**
     * Attribute PrefixListName: The name of the prefix list.
     */
    public readonly attrPrefixListName: ros.IResolvable;

    /**
     * Attribute ResourceGroupId: The ID of the resource group to which the VPC belongs.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * Attribute ShareType: The share type of the prefix list.
     */
    public readonly attrShareType: ros.IResolvable;

    /**
     * Attribute Tags: The tags of PrefixList.
     */
    public readonly attrTags: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: PrefixListProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosPrefixList = new RosPrefixList(this, id,  {
            prefixListId: props.prefixListId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosPrefixList;
        this.attrCreateTime = rosPrefixList.attrCreateTime;
        this.attrEntries = rosPrefixList.attrEntries;
        this.attrIpVersion = rosPrefixList.attrIpVersion;
        this.attrMaxEntries = rosPrefixList.attrMaxEntries;
        this.attrOwnerId = rosPrefixList.attrOwnerId;
        this.attrPrefixListDescription = rosPrefixList.attrPrefixListDescription;
        this.attrPrefixListId = rosPrefixList.attrPrefixListId;
        this.attrPrefixListName = rosPrefixList.attrPrefixListName;
        this.attrResourceGroupId = rosPrefixList.attrResourceGroupId;
        this.attrShareType = rosPrefixList.attrShareType;
        this.attrTags = rosPrefixList.attrTags;
    }
}
