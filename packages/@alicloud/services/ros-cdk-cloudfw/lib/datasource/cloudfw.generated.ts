// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

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
      GroupType: ros.stringToRosTemplate(properties.groupType),
      Lang: ros.stringToRosTemplate(properties.lang),
      RefreshOptions: ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::CLOUDFW::AddressBooks`, which is used to query the information about address books that are used for access control in Cloud Firewall (CFW).
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
