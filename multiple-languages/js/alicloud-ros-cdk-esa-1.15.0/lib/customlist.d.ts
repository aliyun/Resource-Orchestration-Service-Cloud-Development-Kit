import * as ros from '@alicloud/ros-cdk-core';
import { RosCustomList } from './esa.generated';
export { RosCustomList as CustomListProperty };
/**
 * Properties for defining a `CustomList`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-customlist
 */
export interface CustomListProps {
    /**
     * Property items: The items in the custom list, which are displayed as an array.
     */
    readonly items: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property kind: The type of the custom list.
     */
    readonly kind: string | ros.IResolvable;
    /**
     * Property listName: The name of the custom list.
     */
    readonly listName: string | ros.IResolvable;
    /**
     * Property description: The description of the custom list.
     */
    readonly description?: string | ros.IResolvable;
}
/**
 * Represents a `CustomList`.
 */
export interface ICustomList extends ros.IResource {
    readonly props: CustomListProps;
    /**
     * Attribute Description: The description of the custom list.
     */
    readonly attrDescription: ros.IResolvable | string;
    /**
     * Attribute Items: The items in the custom list, which are displayed as an array.
     */
    readonly attrItems: ros.IResolvable | string;
    /**
     * Attribute Kind: The type of the custom list.
     */
    readonly attrKind: ros.IResolvable | string;
    /**
     * Attribute ListId: The id of the custom list .
     */
    readonly attrListId: ros.IResolvable | string;
    /**
     * Attribute ListName: The name of the custom list.
     */
    readonly attrListName: ros.IResolvable | string;
    /**
     * Attribute UpdateTime: The time when the custom list was last modified.
     */
    readonly attrUpdateTime: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ESA::CustomList`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosCustomList`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-customlist
 */
export declare class CustomList extends ros.Resource implements ICustomList {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: CustomListProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute Description: The description of the custom list.
     */
    readonly attrDescription: ros.IResolvable | string;
    /**
     * Attribute Items: The items in the custom list, which are displayed as an array.
     */
    readonly attrItems: ros.IResolvable | string;
    /**
     * Attribute Kind: The type of the custom list.
     */
    readonly attrKind: ros.IResolvable | string;
    /**
     * Attribute ListId: The id of the custom list .
     */
    readonly attrListId: ros.IResolvable | string;
    /**
     * Attribute ListName: The name of the custom list.
     */
    readonly attrListName: ros.IResolvable | string;
    /**
     * Attribute UpdateTime: The time when the custom list was last modified.
     */
    readonly attrUpdateTime: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: CustomListProps, enableResourcePropertyConstraint?: boolean);
}
