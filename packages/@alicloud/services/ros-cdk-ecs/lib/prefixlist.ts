import * as ros from '@alicloud/ros-cdk-core';
import { RosPrefixList } from './ecs.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosPrefixList as PrefixListProperty };

/**
 * Properties for defining a `ALIYUN::ECS::PrefixList`
 */
export interface PrefixListProps {

    /**
     * Property addressFamily: The IP address family. Valid values: IPv4 IPv6
     */
    readonly addressFamily: string | ros.IResolvable;

    /**
     * Property maxEntries: The maximum number of entries that the prefix list can contain. Valid values: 1 to 200.
     */
    readonly maxEntries: number | ros.IResolvable;

    /**
     * Property prefixListName: The name of the prefix. The name must be 2 to 128 characters in length. It must start with a letter and cannot start with http://, https://, com.aliyun, or com.alibabacloud. It can contain letters, digits, colons (:), underscores (_), periods (.), and hyphens (-).
     */
    readonly prefixListName: string | ros.IResolvable;

    /**
     * Property description: The description of the prefix list. The description must be 2 to 256 characters in length and cannot start with http:// or https://.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * Property entries:
     */
    readonly entries?: Array<RosPrefixList.EntriesProperty | ros.IResolvable> | ros.IResolvable;
}

/**
 * A ROS resource type:  `ALIYUN::ECS::PrefixList`
 */
export class PrefixList extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute PrefixListId: The ID of the prefix list.
     */
    public readonly attrPrefixListId: ros.IResolvable;

    /**
     * Create a new `ALIYUN::ECS::PrefixList`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: PrefixListProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosPrefixList = new RosPrefixList(this, id,  {
            maxEntries: props.maxEntries,
            description: props.description,
            prefixListName: props.prefixListName,
            entries: props.entries,
            addressFamily: props.addressFamily,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosPrefixList;
        this.attrPrefixListId = rosPrefixList.attrPrefixListId;
    }
}
