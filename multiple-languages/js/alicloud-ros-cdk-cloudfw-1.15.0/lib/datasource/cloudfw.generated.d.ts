import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosAddressBook`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cloudfw-addressbook
 */
export interface RosAddressBookProps {
    /**
     * @Property groupUuid: The UUID of the address book.
     */
    readonly groupUuid: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::CLOUDFW::AddressBook`.
 * @Note This class does not contain additional functions, so it is recommended to use the `AddressBook` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cloudfw-addressbook
 */
export declare class RosAddressBook extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::CLOUDFW::AddressBook";
    /**
     * @Attribute AddressList: The addresses in the address book.
     */
    readonly attrAddressList: ros.IResolvable;
    /**
     * @Attribute AddressListCount: The number of addresses in the address book.
     */
    readonly attrAddressListCount: ros.IResolvable;
    /**
     * @Attribute AutoAddTagEcs: Indicates whether the public IP addresses of ECS instances are automatically added to the address book if the instances match the specified tags.
     */
    readonly attrAutoAddTagEcs: ros.IResolvable;
    /**
     * @Attribute Description: The description of the address book.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * @Attribute GroupName: The name of the address book.
     */
    readonly attrGroupName: ros.IResolvable;
    /**
     * @Attribute GroupType: The type of the address book.
     */
    readonly attrGroupType: ros.IResolvable;
    /**
     * @Attribute GroupUuid: The UUID of the address book.
     */
    readonly attrGroupUuid: ros.IResolvable;
    /**
     * @Attribute ReferenceCount: The number of times that the address book is referenced.
     */
    readonly attrReferenceCount: ros.IResolvable;
    /**
     * @Attribute TagRelation: The logical relationship among ECS tags.
     */
    readonly attrTagRelation: ros.IResolvable;
    /**
     * @Attribute Tags: The details about the ECS tags that can be automatically added to the address book.
     */
    readonly attrTags: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property groupUuid: The UUID of the address book.
     */
    groupUuid: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAddressBookProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `RosAddressBooks`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cloudfw-addressbooks
 */
export interface RosAddressBooksProps {
    /**
     * @Property groupType: Address Book, it can be set to include:
     * - **ip**: an IP address book
     * - **domain**: domain name address book
     * - **port**: port Address Book
     * - **tag**:ECS tag address book.
     */
    readonly groupType?: string | ros.IResolvable;
    /**
     * @Property lang: The language type of the received message.
     * - **zh** (default): Chinese.
     * - **en**: English.
     */
    readonly lang?: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::CLOUDFW::AddressBooks`.
 * @Note This class does not contain additional functions, so it is recommended to use the `AddressBooks` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cloudfw-addressbooks
 */
export declare class RosAddressBooks extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::CLOUDFW::AddressBooks";
    /**
     * @Attribute AddressBooks: The list of address books.
     */
    readonly attrAddressBooks: ros.IResolvable;
    /**
     * @Attribute GroupUuids: The list of group uuids.
     */
    readonly attrGroupUuids: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property groupType: Address Book, it can be set to include:
     * - **ip**: an IP address book
     * - **domain**: domain name address book
     * - **port**: port Address Book
     * - **tag**:ECS tag address book.
     */
    groupType: string | ros.IResolvable | undefined;
    /**
     * @Property lang: The language type of the received message.
     * - **zh** (default): Chinese.
     * - **en**: English.
     */
    lang: string | ros.IResolvable | undefined;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAddressBooksProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
