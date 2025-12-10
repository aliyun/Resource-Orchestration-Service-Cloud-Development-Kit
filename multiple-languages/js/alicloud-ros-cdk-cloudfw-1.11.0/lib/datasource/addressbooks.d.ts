import * as ros from '@alicloud/ros-cdk-core';
import { RosAddressBooks } from './cloudfw.generated';
export { RosAddressBooks as AddressBooksProperty };
/**
 * Properties for defining a `AddressBooks`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cloudfw-addressbooks
 */
export interface AddressBooksProps {
    /**
     * Property groupType: Address Book, it can be set to include:
     * - **ip**: an IP address book
     * - **domain**: domain name address book
     * - **port**: port Address Book
     * - **tag**:ECS tag address book.
     */
    readonly groupType?: string | ros.IResolvable;
    /**
     * Property lang: The language type of the received message.
     * - **zh** (default): Chinese.
     * - **en**: English.
     */
    readonly lang?: string | ros.IResolvable;
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * Represents a `AddressBooks`.
 */
export interface IAddressBooks extends ros.IResource {
    readonly props: AddressBooksProps;
    /**
     * Attribute AddressBooks: The list of address books.
     */
    readonly attrAddressBooks: ros.IResolvable | string;
    /**
     * Attribute GroupUuids: The list of group uuids.
     */
    readonly attrGroupUuids: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::CLOUDFW::AddressBooks`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAddressBooks`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cloudfw-addressbooks
 */
export declare class AddressBooks extends ros.Resource implements IAddressBooks {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: AddressBooksProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute AddressBooks: The list of address books.
     */
    readonly attrAddressBooks: ros.IResolvable | string;
    /**
     * Attribute GroupUuids: The list of group uuids.
     */
    readonly attrGroupUuids: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: AddressBooksProps, enableResourcePropertyConstraint?: boolean);
}
