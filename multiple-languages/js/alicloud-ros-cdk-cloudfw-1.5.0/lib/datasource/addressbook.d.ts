import * as ros from '@alicloud/ros-cdk-core';
import { RosAddressBook } from './cloudfw.generated';
export { RosAddressBook as AddressBookProperty };
/**
 * Properties for defining a `AddressBook`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cloudfw-addressbook
 */
export interface AddressBookProps {
    /**
     * Property groupUuid: The UUID of the address book.
     */
    readonly groupUuid: string | ros.IResolvable;
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::CLOUDFW::AddressBook`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAddressBook`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cloudfw-addressbook
 */
export declare class AddressBook extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: AddressBookProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute AddressList: The addresses in the address book.
     */
    readonly attrAddressList: ros.IResolvable;
    /**
     * Attribute AddressListCount: The number of addresses in the address book.
     */
    readonly attrAddressListCount: ros.IResolvable;
    /**
     * Attribute AutoAddTagEcs: Indicates whether the public IP addresses of ECS instances are automatically added to the address book if the instances match the specified tags.
     */
    readonly attrAutoAddTagEcs: ros.IResolvable;
    /**
     * Attribute Description: The description of the address book.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * Attribute GroupName: The name of the address book.
     */
    readonly attrGroupName: ros.IResolvable;
    /**
     * Attribute GroupType: The type of the address book.
     */
    readonly attrGroupType: ros.IResolvable;
    /**
     * Attribute GroupUuid: The UUID of the address book.
     */
    readonly attrGroupUuid: ros.IResolvable;
    /**
     * Attribute ReferenceCount: The number of times that the address book is referenced.
     */
    readonly attrReferenceCount: ros.IResolvable;
    /**
     * Attribute TagRelation: The logical relationship among ECS tags.
     */
    readonly attrTagRelation: ros.IResolvable;
    /**
     * Attribute Tags: The details about the ECS tags that can be automatically added to the address book.
     */
    readonly attrTags: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AddressBookProps, enableResourcePropertyConstraint?: boolean);
}
