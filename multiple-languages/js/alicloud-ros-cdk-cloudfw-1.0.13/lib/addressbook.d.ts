import * as ros from '@alicloud/ros-cdk-core';
import { RosAddressBook } from './cloudfw.generated';
export { RosAddressBook as AddressBookProperty };
/**
 * Properties for defining a `ALIYUN::CLOUDFW::AddressBook`
 */
export interface AddressBookProps {
    /**
     * Property description: Address book description.
     */
    readonly description: string | ros.IResolvable;
    /**
     * Property groupName: Name Address book.
     */
    readonly groupName: string | ros.IResolvable;
    /**
     * Property groupType: Type the address book, the optional values ​​are:
     * ip: IP Address Book
     * domain: domain name address book
     * port: Port Address Book
     * tag: ECS label address book
     */
    readonly groupType: string | ros.IResolvable;
    /**
     * Property addressList: Address list of the address book, between multiple addresses separated by commas.
     * Note: When GroupType ip, it must be set to port or domain.
     * When GroupType as ip, address list, fill in the IP address. For example: 1.2.3.4/32, 1.2.3.0/24
     * When GroupType for the port, the address list to fill in ports or port ranges. For example: 80, 100/200
     * When GroupType for the domain, the domain name to fill in the address list. For example: demo1.aliyun.com, demo2.aliyun.com
     */
    readonly addressList?: string | ros.IResolvable;
    /**
     * Property autoAddTagEcs: Whether to automatically add new ECS public network IP matching tags to the address book. Default to false.
     */
    readonly autoAddTagEcs?: boolean | ros.IResolvable;
    /**
     * Property regionId: Region ID. Default to cn-hangzhou.
     */
    readonly regionId?: string | ros.IResolvable;
    /**
     * Property tagList:
     */
    readonly tagList?: Array<RosAddressBook.TagListProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property tagRelation: The relationship between the labels to be matched more ECS.
     * and: the relationship between multiple labels "and" that matches both ECS IP public network more tags will be added to the address book.
     * or: a plurality of inter-labeled "or" relationship, i.e., as long as a matching tag ECS ​​public IP address book will be added.
     */
    readonly tagRelation?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::CLOUDFW::AddressBook`
 */
export declare class AddressBook extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute GroupUuid: After a successful return to the address book to add unique identification ID.
     */
    readonly attrGroupUuid: ros.IResolvable;
    /**
     * Create a new `ALIYUN::CLOUDFW::AddressBook`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AddressBookProps, enableResourcePropertyConstraint?: boolean);
}
