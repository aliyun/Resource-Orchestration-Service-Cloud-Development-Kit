// Generated from the AliCloud ROS Resource Specification

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
 * Determine whether the given properties match those of a `RosAddressBookProps`
 *
 * @param properties - the TypeScript properties of a `RosAddressBookProps`
 *
 * @returns the result of the validation.
 */
function RosAddressBookPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('groupUuid', ros.requiredValidator)(properties.groupUuid));
    errors.collect(ros.propertyValidator('groupUuid', ros.validateString)(properties.groupUuid));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosAddressBookProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::CLOUDFW::AddressBook` resource
 *
 * @param properties - the TypeScript properties of a `RosAddressBookProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::CLOUDFW::AddressBook` resource.
 */
// @ts-ignore TS6133
function rosAddressBookPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosAddressBookPropsValidator(properties).assertSuccess();
    }
    return {
      'GroupUuid': ros.stringToRosTemplate(properties.groupUuid),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::CLOUDFW::AddressBook`, which is used to query the information about an address book for access control in Cloud Firewall.
 * @Note This class does not contain additional functions, so it is recommended to use the `AddressBook` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cloudfw-addressbook
 */
export class RosAddressBook extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::CLOUDFW::AddressBook";

    /**
     * @Attribute AddressList: The addresses in the address book.
     */
    public readonly attrAddressList: ros.IResolvable;

    /**
     * @Attribute AddressListCount: The number of addresses in the address book.
     */
    public readonly attrAddressListCount: ros.IResolvable;

    /**
     * @Attribute AutoAddTagEcs: Indicates whether the public IP addresses of ECS instances are automatically added to the address book if the instances match the specified tags.
     */
    public readonly attrAutoAddTagEcs: ros.IResolvable;

    /**
     * @Attribute Description: The description of the address book.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * @Attribute GroupName: The name of the address book.
     */
    public readonly attrGroupName: ros.IResolvable;

    /**
     * @Attribute GroupType: The type of the address book.
     */
    public readonly attrGroupType: ros.IResolvable;

    /**
     * @Attribute GroupUuid: The UUID of the address book.
     */
    public readonly attrGroupUuid: ros.IResolvable;

    /**
     * @Attribute ReferenceCount: The number of times that the address book is referenced.
     */
    public readonly attrReferenceCount: ros.IResolvable;

    /**
     * @Attribute TagRelation: The logical relationship among ECS tags.
     */
    public readonly attrTagRelation: ros.IResolvable;

    /**
     * @Attribute Tags: The details about the ECS tags that can be automatically added to the address book.
     */
    public readonly attrTags: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property groupUuid: The UUID of the address book.
     */
    public groupUuid: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAddressBookProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosAddressBook.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAddressList = this.getAtt('AddressList');
        this.attrAddressListCount = this.getAtt('AddressListCount');
        this.attrAutoAddTagEcs = this.getAtt('AutoAddTagEcs');
        this.attrDescription = this.getAtt('Description');
        this.attrGroupName = this.getAtt('GroupName');
        this.attrGroupType = this.getAtt('GroupType');
        this.attrGroupUuid = this.getAtt('GroupUuid');
        this.attrReferenceCount = this.getAtt('ReferenceCount');
        this.attrTagRelation = this.getAtt('TagRelation');
        this.attrTags = this.getAtt('Tags');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.groupUuid = props.groupUuid;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            groupUuid: this.groupUuid,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAddressBookPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
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
 * Determine whether the given properties match those of a `RosAddressBooksProps`
 *
 * @param properties - the TypeScript properties of a `RosAddressBooksProps`
 *
 * @returns the result of the validation.
 */
function RosAddressBooksPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.groupType && (typeof properties.groupType) !== 'object') {
        errors.collect(ros.propertyValidator('groupType', ros.validateAllowedValues)({
          data: properties.groupType,
          allowedValues: ["ip","domain","port","tag"],
        }));
    }
    errors.collect(ros.propertyValidator('groupType', ros.validateString)(properties.groupType));
    errors.collect(ros.propertyValidator('lang', ros.validateString)(properties.lang));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosAddressBooksProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::CLOUDFW::AddressBooks` resource
 *
 * @param properties - the TypeScript properties of a `RosAddressBooksProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::CLOUDFW::AddressBooks` resource.
 */
// @ts-ignore TS6133
function rosAddressBooksPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosAddressBooksPropsValidator(properties).assertSuccess();
    }
    return {
      'GroupType': ros.stringToRosTemplate(properties.groupType),
      'Lang': ros.stringToRosTemplate(properties.lang),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::CLOUDFW::AddressBooks`, which is used to query the information about address books for access control in Cloud Firewall.
 * @Note This class does not contain additional functions, so it is recommended to use the `AddressBooks` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cloudfw-addressbooks
 */
export class RosAddressBooks extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::CLOUDFW::AddressBooks";

    /**
     * @Attribute AddressBooks: The list of address books.
     */
    public readonly attrAddressBooks: ros.IResolvable;

    /**
     * @Attribute GroupUuids: The list of group uuids.
     */
    public readonly attrGroupUuids: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property groupType: Address Book, it can be set to include:
     * - **ip**: an IP address book
     * - **domain**: domain name address book
     * - **port**: port Address Book
     * - **tag**:ECS tag address book.
     */
    public groupType: string | ros.IResolvable | undefined;

    /**
     * @Property lang: The language type of the received message.
     * - **zh** (default): Chinese.
     * - **en**: English.
     */
    public lang: string | ros.IResolvable | undefined;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAddressBooksProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosAddressBooks.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAddressBooks = this.getAtt('AddressBooks');
        this.attrGroupUuids = this.getAtt('GroupUuids');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.groupType = props.groupType;
        this.lang = props.lang;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            groupType: this.groupType,
            lang: this.lang,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAddressBooksPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
