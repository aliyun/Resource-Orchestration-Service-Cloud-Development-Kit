import * as ros from '@alicloud/ros-cdk-core';
import { RosPrefixList } from './ecs.generated';
export { RosPrefixList as PrefixListProperty };
/**
 * Properties for defining a `PrefixList`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-prefixlist
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
     * Property prefixListName: The name of the prefix. The name must be 2 to 128 characters in length. It must start with a letter and cannot start with http:\/\/, https:\/\/, com.aliyun, or com.alibabacloud. It can contain letters, digits, colons (:), underscores (_), periods (.), and hyphens (-).
     */
    readonly prefixListName: string | ros.IResolvable;
    /**
     * Property description: The description of the prefix list. The description must be 2 to 256 characters in length and cannot start with http:\/\/ or https:\/\/.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * Property entries:
     */
    readonly entries?: Array<RosPrefixList.EntriesProperty | ros.IResolvable> | ros.IResolvable;
}
/**
 * Represents a `PrefixList`.
 */
export interface IPrefixList extends ros.IResource {
    readonly props: PrefixListProps;
    /**
     * Attribute PrefixListId: The ID of the prefix list.
     */
    readonly attrPrefixListId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ECS::PrefixList`, which is used to create a prefix list.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosPrefixList`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-prefixlist
 */
export declare class PrefixList extends ros.Resource implements IPrefixList {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: PrefixListProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute PrefixListId: The ID of the prefix list.
     */
    readonly attrPrefixListId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: PrefixListProps, enableResourcePropertyConstraint?: boolean);
}
