// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosAddressBook`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-addressbook
 */
export interface RosAddressBookProps {

    /**
     * @Property description: Address book description.
     */
    readonly description: string | ros.IResolvable;

    /**
     * @Property groupName: Name Address book.
     */
    readonly groupName: string | ros.IResolvable;

    /**
     * @Property groupType: Type the address book, the optional values ​​are:
     * ip: IP Address Book
     * domain: domain name address book
     * port: Port Address Book
     * tag: ECS label address book
     */
    readonly groupType: string | ros.IResolvable;

    /**
     * @Property addressList: Address list of the address book, between multiple addresses separated by commas.
     * Note: When GroupType ip, it must be set to port or domain.
     * When GroupType as ip, address list, fill in the IP address. For example: 1.2.3.4\/32, 1.2.3.0\/24
     * When GroupType for the port, the address list to fill in ports or port ranges. For example: 80, 100\/200
     * When GroupType for the domain, the domain name to fill in the address list. For example: demo1.aliyun.com, demo2.aliyun.com
     */
    readonly addressList?: string | ros.IResolvable;

    /**
     * @Property autoAddTagEcs: Whether to automatically add new ECS public network IP matching tags to the address book. Default to false.
     */
    readonly autoAddTagEcs?: boolean | ros.IResolvable;

    /**
     * @Property regionId: Region ID. Default to cn-hangzhou.
     */
    readonly regionId?: string | ros.IResolvable;

    /**
     * @Property tagList:
     */
    readonly tagList?: Array<RosAddressBook.TagListProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property tagRelation: The relationship between the labels to be matched more ECS.
     * and: the relationship between multiple labels "and" that matches both ECS IP public network more tags will be added to the address book.
     * or: a plurality of inter-labeled "or" relationship, i.e., as long as a matching tag ECS ​​public IP address book will be added.
     */
    readonly tagRelation?: string | ros.IResolvable;
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
    errors.collect(ros.propertyValidator('groupName', ros.requiredValidator)(properties.groupName));
    errors.collect(ros.propertyValidator('groupName', ros.validateString)(properties.groupName));
    errors.collect(ros.propertyValidator('description', ros.requiredValidator)(properties.description));
    if(properties.description && (Array.isArray(properties.description) || (typeof properties.description) === 'string')) {
        errors.collect(ros.propertyValidator('description', ros.validateLength)({
            data: properties.description.length,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    if(properties.tagRelation && (typeof properties.tagRelation) !== 'object') {
        errors.collect(ros.propertyValidator('tagRelation', ros.validateAllowedValues)({
          data: properties.tagRelation,
          allowedValues: ["and","or"],
        }));
    }
    errors.collect(ros.propertyValidator('tagRelation', ros.validateString)(properties.tagRelation));
    errors.collect(ros.propertyValidator('groupType', ros.requiredValidator)(properties.groupType));
    if(properties.groupType && (typeof properties.groupType) !== 'object') {
        errors.collect(ros.propertyValidator('groupType', ros.validateAllowedValues)({
          data: properties.groupType,
          allowedValues: ["domain","ip","port","tag"],
        }));
    }
    errors.collect(ros.propertyValidator('groupType', ros.validateString)(properties.groupType));
    if(properties.tagList && (Array.isArray(properties.tagList) || (typeof properties.tagList) === 'string')) {
        errors.collect(ros.propertyValidator('tagList', ros.validateLength)({
            data: properties.tagList.length,
            min: undefined,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('tagList', ros.listValidator(RosAddressBook_TagListPropertyValidator))(properties.tagList));
    if(properties.regionId && (typeof properties.regionId) !== 'object') {
        errors.collect(ros.propertyValidator('regionId', ros.validateAllowedValues)({
          data: properties.regionId,
          allowedValues: ["cn-hangzhou","ap-southeast-1"],
        }));
    }
    errors.collect(ros.propertyValidator('regionId', ros.validateString)(properties.regionId));
    errors.collect(ros.propertyValidator('autoAddTagEcs', ros.validateBoolean)(properties.autoAddTagEcs));
    errors.collect(ros.propertyValidator('addressList', ros.validateString)(properties.addressList));
    return errors.wrap('supplied properties not correct for "RosAddressBookProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CLOUDFW::AddressBook` resource
 *
 * @param properties - the TypeScript properties of a `RosAddressBookProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CLOUDFW::AddressBook` resource.
 */
// @ts-ignore TS6133
function rosAddressBookPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosAddressBookPropsValidator(properties).assertSuccess();
    }
    return {
      'Description': ros.stringToRosTemplate(properties.description),
      'GroupName': ros.stringToRosTemplate(properties.groupName),
      'GroupType': ros.stringToRosTemplate(properties.groupType),
      'AddressList': ros.stringToRosTemplate(properties.addressList),
      'AutoAddTagEcs': ros.booleanToRosTemplate(properties.autoAddTagEcs),
      'RegionId': ros.stringToRosTemplate(properties.regionId),
      'TagList': ros.listMapper(rosAddressBookTagListPropertyToRosTemplate)(properties.tagList),
      'TagRelation': ros.stringToRosTemplate(properties.tagRelation),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CLOUDFW::AddressBook`, which is used to create access control address books. Access control address books include IP address books, Elastic Compute Service (ECS) tag address books, port address books, and domain address books.
 * @Note This class does not contain additional functions, so it is recommended to use the `AddressBook` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-addressbook
 */
export class RosAddressBook extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CLOUDFW::AddressBook";

    /**
     * @Attribute GroupUuid: After a successful return to the address book to add unique identification ID.
     */
    public readonly attrGroupUuid: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property description: Address book description.
     */
    public description: string | ros.IResolvable;

    /**
     * @Property groupName: Name Address book.
     */
    public groupName: string | ros.IResolvable;

    /**
     * @Property groupType: Type the address book, the optional values ​​are:
     * ip: IP Address Book
     * domain: domain name address book
     * port: Port Address Book
     * tag: ECS label address book
     */
    public groupType: string | ros.IResolvable;

    /**
     * @Property addressList: Address list of the address book, between multiple addresses separated by commas.
     * Note: When GroupType ip, it must be set to port or domain.
     * When GroupType as ip, address list, fill in the IP address. For example: 1.2.3.4\/32, 1.2.3.0\/24
     * When GroupType for the port, the address list to fill in ports or port ranges. For example: 80, 100\/200
     * When GroupType for the domain, the domain name to fill in the address list. For example: demo1.aliyun.com, demo2.aliyun.com
     */
    public addressList: string | ros.IResolvable | undefined;

    /**
     * @Property autoAddTagEcs: Whether to automatically add new ECS public network IP matching tags to the address book. Default to false.
     */
    public autoAddTagEcs: boolean | ros.IResolvable | undefined;

    /**
     * @Property regionId: Region ID. Default to cn-hangzhou.
     */
    public regionId: string | ros.IResolvable | undefined;

    /**
     * @Property tagList:
     */
    public tagList: Array<RosAddressBook.TagListProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property tagRelation: The relationship between the labels to be matched more ECS.
     * and: the relationship between multiple labels "and" that matches both ECS IP public network more tags will be added to the address book.
     * or: a plurality of inter-labeled "or" relationship, i.e., as long as a matching tag ECS ​​public IP address book will be added.
     */
    public tagRelation: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAddressBookProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosAddressBook.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrGroupUuid = this.getAtt('GroupUuid');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.description = props.description;
        this.groupName = props.groupName;
        this.groupType = props.groupType;
        this.addressList = props.addressList;
        this.autoAddTagEcs = props.autoAddTagEcs;
        this.regionId = props.regionId;
        this.tagList = props.tagList;
        this.tagRelation = props.tagRelation;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            description: this.description,
            groupName: this.groupName,
            groupType: this.groupType,
            addressList: this.addressList,
            autoAddTagEcs: this.autoAddTagEcs,
            regionId: this.regionId,
            tagList: this.tagList,
            tagRelation: this.tagRelation,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAddressBookPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosAddressBook {
    /**
     * @stability external
     */
    export interface TagListProperty {
        /**
         * @Property tagKey: ECS labels to be matched Key.
         */
        readonly tagKey?: string | ros.IResolvable;
        /**
         * @Property tagValue: ECS tag value to be matched.
         */
        readonly tagValue?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `TagListProperty`
 *
 * @param properties - the TypeScript properties of a `TagListProperty`
 *
 * @returns the result of the validation.
 */
function RosAddressBook_TagListPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('tagKey', ros.validateString)(properties.tagKey));
    errors.collect(ros.propertyValidator('tagValue', ros.validateString)(properties.tagValue));
    return errors.wrap('supplied properties not correct for "TagListProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CLOUDFW::AddressBook.TagList` resource
 *
 * @param properties - the TypeScript properties of a `TagListProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CLOUDFW::AddressBook.TagList` resource.
 */
// @ts-ignore TS6133
function rosAddressBookTagListPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosAddressBook_TagListPropertyValidator(properties).assertSuccess();
    return {
      'TagKey': ros.stringToRosTemplate(properties.tagKey),
      'TagValue': ros.stringToRosTemplate(properties.tagValue),
    };
}

/**
 * Properties for defining a `RosAllFwSwitch`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-allfwswitch
 */
export interface RosAllFwSwitchProps {

    /**
     * @Property instanceId: The ID of the cloud firewall instance.
     */
    readonly instanceId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosAllFwSwitchProps`
 *
 * @param properties - the TypeScript properties of a `RosAllFwSwitchProps`
 *
 * @returns the result of the validation.
 */
function RosAllFwSwitchPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    return errors.wrap('supplied properties not correct for "RosAllFwSwitchProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CLOUDFW::AllFwSwitch` resource
 *
 * @param properties - the TypeScript properties of a `RosAllFwSwitchProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CLOUDFW::AllFwSwitch` resource.
 */
// @ts-ignore TS6133
function rosAllFwSwitchPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosAllFwSwitchPropsValidator(properties).assertSuccess();
    }
    return {
      'InstanceId': ros.stringToRosTemplate(properties.instanceId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CLOUDFW::AllFwSwitch`, which is used to enable all firewalls.
 * @Note This class does not contain additional functions, so it is recommended to use the `AllFwSwitch` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-allfwswitch
 */
export class RosAllFwSwitch extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CLOUDFW::AllFwSwitch";

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property instanceId: The ID of the cloud firewall instance.
     */
    public instanceId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAllFwSwitchProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosAllFwSwitch.ROS_RESOURCE_TYPE_NAME, properties: props });

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.instanceId = props.instanceId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            instanceId: this.instanceId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAllFwSwitchPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosControlPolicy`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-controlpolicy
 */
export interface RosControlPolicyProps {

    /**
     * @Property aclAction: Traffic access control policy set by the cloud of a firewall.
     * accept: Release
     * drop: rejected
     * log: Observation
     */
    readonly aclAction: string | ros.IResolvable;

    /**
     * @Property applicationName: Application types supported by the security policy.
     * The following types of applications are supported: ANY, HTTP, HTTPS, MySQL, SMTP, SMTPS, RDP, VNC, SSH, Redis, MQTT, MongoDB, Memcache, SSL
     * NOTE ANY indicates that the policy is applied to all types of applications.
     */
    readonly applicationName: string | ros.IResolvable;

    /**
     * @Property description: Security access control policy description information.
     */
    readonly description: string | ros.IResolvable;

    /**
     * @Property destination: Security Access Control destination address policy.
     * When DestinationType is net, Destination purpose CIDR. For example: 1.2.3.4\/24
     * When DestinationType as a group, Destination for the purpose of the address book name. For example: db_group
     * When DestinationType for the domain, Destination for the purpose of a domain name. For example:. * Aliyuncs.com
     * When DestinationType as location, Destination area for the purpose (see below position encoding specific regions). For example: [ "BJ11", "ZB"]
     */
    readonly destination: string | ros.IResolvable;

    /**
     * @Property destinationType: Security Access Control destination address type of policy.
     * net: Destination network segment (CIDR)
     * group: destination address book
     * domain: The purpose domain
     * location: The purpose area
     */
    readonly destinationType: string | ros.IResolvable;

    /**
     * @Property direction: Security access control traffic direction policies.
     * in: internal and external traffic access control
     * out: within the flow of external access control
     */
    readonly direction: string | ros.IResolvable;

    /**
     * @Property newOrder: Security access control priority policy in force. Priority number increments sequentially from 1, lower the priority number, the higher the priority.
     * Description -1 indicates the lowest priority.
     */
    readonly newOrder: number | ros.IResolvable;

    /**
     * @Property proto: The type of security protocol for traffic access in the security access control policy. Can be set to ANY when you are not sure of the specific protocol type.
     * Allowed values: ANY, TCP, UDP, ICMP
     */
    readonly proto: string | ros.IResolvable;

    /**
     * @Property source: Security access control source address policy.
     * When SourceType for the net, Source is the source CIDR. For example: 1.2.3.0\/24
     * When SourceType as a group, Source name for the source address book. For example: db_group
     * When SourceType as location, Source source region (specific region position encoder see below). For example, [ "BJ11", "ZB"]
     */
    readonly source: string | ros.IResolvable;

    /**
     * @Property sourceType: Security access control source address type of policy.
     * net: Source segment (CIDR)
     * group: source address book
     * location: the source area
     */
    readonly sourceType: string | ros.IResolvable;

    /**
     * @Property destPort: Security access control policy access traffic destination port.
     * Note When DestPortType to port, set the item.
     */
    readonly destPort?: string | ros.IResolvable;

    /**
     * @Property destPortGroup: Security access control policy access traffic destination port address book name.
     * Description DestPortType is group, set the item.
     */
    readonly destPortGroup?: string | ros.IResolvable;

    /**
     * @Property destPortType: Security access control policy access destination port traffic type.
     * port: Port
     * group: port address book
     */
    readonly destPortType?: string | ros.IResolvable;

    /**
     * @Property regionId: Region ID. Default to cn-hangzhou.
     */
    readonly regionId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosControlPolicyProps`
 *
 * @param properties - the TypeScript properties of a `RosControlPolicyProps`
 *
 * @returns the result of the validation.
 */
function RosControlPolicyPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('destination', ros.requiredValidator)(properties.destination));
    if(properties.destination && (Array.isArray(properties.destination) || (typeof properties.destination) === 'string')) {
        errors.collect(ros.propertyValidator('destination', ros.validateLength)({
            data: properties.destination.length,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('destination', ros.validateString)(properties.destination));
    errors.collect(ros.propertyValidator('applicationName', ros.requiredValidator)(properties.applicationName));
    if(properties.applicationName && (typeof properties.applicationName) !== 'object') {
        errors.collect(ros.propertyValidator('applicationName', ros.validateAllowedValues)({
          data: properties.applicationName,
          allowedValues: ["ANY","HTTP","HTTPS","MQTT","Memcache","MongoDB","MySQL","RDP","Redis","SMTP","SMTPS","SSH","SSL","VNC"],
        }));
    }
    errors.collect(ros.propertyValidator('applicationName', ros.validateString)(properties.applicationName));
    errors.collect(ros.propertyValidator('description', ros.requiredValidator)(properties.description));
    if(properties.description && (Array.isArray(properties.description) || (typeof properties.description) === 'string')) {
        errors.collect(ros.propertyValidator('description', ros.validateLength)({
            data: properties.description.length,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('sourceType', ros.requiredValidator)(properties.sourceType));
    if(properties.sourceType && (typeof properties.sourceType) !== 'object') {
        errors.collect(ros.propertyValidator('sourceType', ros.validateAllowedValues)({
          data: properties.sourceType,
          allowedValues: ["group","location","net"],
        }));
    }
    errors.collect(ros.propertyValidator('sourceType', ros.validateString)(properties.sourceType));
    errors.collect(ros.propertyValidator('destPort', ros.validateString)(properties.destPort));
    errors.collect(ros.propertyValidator('aclAction', ros.requiredValidator)(properties.aclAction));
    if(properties.aclAction && (typeof properties.aclAction) !== 'object') {
        errors.collect(ros.propertyValidator('aclAction', ros.validateAllowedValues)({
          data: properties.aclAction,
          allowedValues: ["accept","drop","log"],
        }));
    }
    errors.collect(ros.propertyValidator('aclAction', ros.validateString)(properties.aclAction));
    errors.collect(ros.propertyValidator('destinationType', ros.requiredValidator)(properties.destinationType));
    if(properties.destinationType && (typeof properties.destinationType) !== 'object') {
        errors.collect(ros.propertyValidator('destinationType', ros.validateAllowedValues)({
          data: properties.destinationType,
          allowedValues: ["domain","group","location","net"],
        }));
    }
    errors.collect(ros.propertyValidator('destinationType', ros.validateString)(properties.destinationType));
    errors.collect(ros.propertyValidator('direction', ros.requiredValidator)(properties.direction));
    if(properties.direction && (typeof properties.direction) !== 'object') {
        errors.collect(ros.propertyValidator('direction', ros.validateAllowedValues)({
          data: properties.direction,
          allowedValues: ["in","out"],
        }));
    }
    errors.collect(ros.propertyValidator('direction', ros.validateString)(properties.direction));
    errors.collect(ros.propertyValidator('source', ros.requiredValidator)(properties.source));
    if(properties.source && (Array.isArray(properties.source) || (typeof properties.source) === 'string')) {
        errors.collect(ros.propertyValidator('source', ros.validateLength)({
            data: properties.source.length,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('source', ros.validateString)(properties.source));
    if(properties.destPortType && (typeof properties.destPortType) !== 'object') {
        errors.collect(ros.propertyValidator('destPortType', ros.validateAllowedValues)({
          data: properties.destPortType,
          allowedValues: ["group","port"],
        }));
    }
    errors.collect(ros.propertyValidator('destPortType', ros.validateString)(properties.destPortType));
    errors.collect(ros.propertyValidator('proto', ros.requiredValidator)(properties.proto));
    if(properties.proto && (typeof properties.proto) !== 'object') {
        errors.collect(ros.propertyValidator('proto', ros.validateAllowedValues)({
          data: properties.proto,
          allowedValues: ["ANY","ICMP","TCP","UDP"],
        }));
    }
    errors.collect(ros.propertyValidator('proto', ros.validateString)(properties.proto));
    if(properties.regionId && (typeof properties.regionId) !== 'object') {
        errors.collect(ros.propertyValidator('regionId', ros.validateAllowedValues)({
          data: properties.regionId,
          allowedValues: ["cn-hangzhou","ap-southeast-1"],
        }));
    }
    errors.collect(ros.propertyValidator('regionId', ros.validateString)(properties.regionId));
    errors.collect(ros.propertyValidator('newOrder', ros.requiredValidator)(properties.newOrder));
    if(properties.newOrder && (typeof properties.newOrder) !== 'object') {
        errors.collect(ros.propertyValidator('newOrder', ros.validateRange)({
            data: properties.newOrder,
            min: -1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('newOrder', ros.validateNumber)(properties.newOrder));
    errors.collect(ros.propertyValidator('destPortGroup', ros.validateString)(properties.destPortGroup));
    return errors.wrap('supplied properties not correct for "RosControlPolicyProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CLOUDFW::ControlPolicy` resource
 *
 * @param properties - the TypeScript properties of a `RosControlPolicyProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CLOUDFW::ControlPolicy` resource.
 */
// @ts-ignore TS6133
function rosControlPolicyPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosControlPolicyPropsValidator(properties).assertSuccess();
    }
    return {
      'AclAction': ros.stringToRosTemplate(properties.aclAction),
      'ApplicationName': ros.stringToRosTemplate(properties.applicationName),
      'Description': ros.stringToRosTemplate(properties.description),
      'Destination': ros.stringToRosTemplate(properties.destination),
      'DestinationType': ros.stringToRosTemplate(properties.destinationType),
      'Direction': ros.stringToRosTemplate(properties.direction),
      'NewOrder': ros.numberToRosTemplate(properties.newOrder),
      'Proto': ros.stringToRosTemplate(properties.proto),
      'Source': ros.stringToRosTemplate(properties.source),
      'SourceType': ros.stringToRosTemplate(properties.sourceType),
      'DestPort': ros.stringToRosTemplate(properties.destPort),
      'DestPortGroup': ros.stringToRosTemplate(properties.destPortGroup),
      'DestPortType': ros.stringToRosTemplate(properties.destPortType),
      'RegionId': ros.stringToRosTemplate(properties.regionId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CLOUDFW::ControlPolicy`, which is used to add an access control policy.
 * @Note This class does not contain additional functions, so it is recommended to use the `ControlPolicy` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-controlpolicy
 */
export class RosControlPolicy extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CLOUDFW::ControlPolicy";

    /**
     * @Attribute AclUuid: Security access control ID that uniquely identifies the policy.
     */
    public readonly attrAclUuid: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property aclAction: Traffic access control policy set by the cloud of a firewall.
     * accept: Release
     * drop: rejected
     * log: Observation
     */
    public aclAction: string | ros.IResolvable;

    /**
     * @Property applicationName: Application types supported by the security policy.
     * The following types of applications are supported: ANY, HTTP, HTTPS, MySQL, SMTP, SMTPS, RDP, VNC, SSH, Redis, MQTT, MongoDB, Memcache, SSL
     * NOTE ANY indicates that the policy is applied to all types of applications.
     */
    public applicationName: string | ros.IResolvable;

    /**
     * @Property description: Security access control policy description information.
     */
    public description: string | ros.IResolvable;

    /**
     * @Property destination: Security Access Control destination address policy.
     * When DestinationType is net, Destination purpose CIDR. For example: 1.2.3.4\/24
     * When DestinationType as a group, Destination for the purpose of the address book name. For example: db_group
     * When DestinationType for the domain, Destination for the purpose of a domain name. For example:. * Aliyuncs.com
     * When DestinationType as location, Destination area for the purpose (see below position encoding specific regions). For example: [ "BJ11", "ZB"]
     */
    public destination: string | ros.IResolvable;

    /**
     * @Property destinationType: Security Access Control destination address type of policy.
     * net: Destination network segment (CIDR)
     * group: destination address book
     * domain: The purpose domain
     * location: The purpose area
     */
    public destinationType: string | ros.IResolvable;

    /**
     * @Property direction: Security access control traffic direction policies.
     * in: internal and external traffic access control
     * out: within the flow of external access control
     */
    public direction: string | ros.IResolvable;

    /**
     * @Property newOrder: Security access control priority policy in force. Priority number increments sequentially from 1, lower the priority number, the higher the priority.
     * Description -1 indicates the lowest priority.
     */
    public newOrder: number | ros.IResolvable;

    /**
     * @Property proto: The type of security protocol for traffic access in the security access control policy. Can be set to ANY when you are not sure of the specific protocol type.
     * Allowed values: ANY, TCP, UDP, ICMP
     */
    public proto: string | ros.IResolvable;

    /**
     * @Property source: Security access control source address policy.
     * When SourceType for the net, Source is the source CIDR. For example: 1.2.3.0\/24
     * When SourceType as a group, Source name for the source address book. For example: db_group
     * When SourceType as location, Source source region (specific region position encoder see below). For example, [ "BJ11", "ZB"]
     */
    public source: string | ros.IResolvable;

    /**
     * @Property sourceType: Security access control source address type of policy.
     * net: Source segment (CIDR)
     * group: source address book
     * location: the source area
     */
    public sourceType: string | ros.IResolvable;

    /**
     * @Property destPort: Security access control policy access traffic destination port.
     * Note When DestPortType to port, set the item.
     */
    public destPort: string | ros.IResolvable | undefined;

    /**
     * @Property destPortGroup: Security access control policy access traffic destination port address book name.
     * Description DestPortType is group, set the item.
     */
    public destPortGroup: string | ros.IResolvable | undefined;

    /**
     * @Property destPortType: Security access control policy access destination port traffic type.
     * port: Port
     * group: port address book
     */
    public destPortType: string | ros.IResolvable | undefined;

    /**
     * @Property regionId: Region ID. Default to cn-hangzhou.
     */
    public regionId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosControlPolicyProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosControlPolicy.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAclUuid = this.getAtt('AclUuid');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.aclAction = props.aclAction;
        this.applicationName = props.applicationName;
        this.description = props.description;
        this.destination = props.destination;
        this.destinationType = props.destinationType;
        this.direction = props.direction;
        this.newOrder = props.newOrder;
        this.proto = props.proto;
        this.source = props.source;
        this.sourceType = props.sourceType;
        this.destPort = props.destPort;
        this.destPortGroup = props.destPortGroup;
        this.destPortType = props.destPortType;
        this.regionId = props.regionId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            aclAction: this.aclAction,
            applicationName: this.applicationName,
            description: this.description,
            destination: this.destination,
            destinationType: this.destinationType,
            direction: this.direction,
            newOrder: this.newOrder,
            proto: this.proto,
            source: this.source,
            sourceType: this.sourceType,
            destPort: this.destPort,
            destPortGroup: this.destPortGroup,
            destPortType: this.destPortType,
            regionId: this.regionId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosControlPolicyPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosFwSwitch`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-fwswitch
 */
export interface RosFwSwitchProps {

    /**
     * @Property ipaddrList: The IP address list.
     * **Note**: The IpaddrList, RegionList, and ResourceTypeList arguments are not allowed to be empty at the same time. A value must be set for one of the three arguments.
     */
    readonly ipaddrList?: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property regionList: The region list.
     * **Note**: The IpaddrList, RegionList, and ResourceTypeList arguments are not allowed to be empty at the same time. A value must be set for one of the three arguments.
     */
    readonly regionList?: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property resourceTypeList: The asset type list. Valid values:
     * - BastionHostIP: Bastion machine exit IP.
     * - BastionHostIngressIP: The entrance IP of the fortress machine.
     * - EcsEIP: ECS EIP.
     * - EcsPublicIP: ECS public network IP.
     * - EIP: Elastic Public IP.
     * - EniEIP: Elastic Network card EIP.
     * - NatEIP: NAT EIP.
     * - SlbEIP: SLB EIP.
     * - SlbPublicIP: SLB public network IP.
     * - NatPublicIP: NAT public IP
     * - HAVIP: High Availability Virtual IP.
     * **Note**: The IpaddrList, RegionList, and ResourceTypeList arguments are not allowed to be empty at the same time. A value must be set for one of the three arguments.
     */
    readonly resourceTypeList?: Array<any | ros.IResolvable> | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosFwSwitchProps`
 *
 * @param properties - the TypeScript properties of a `RosFwSwitchProps`
 *
 * @returns the result of the validation.
 */
function RosFwSwitchPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.ipaddrList && (Array.isArray(properties.ipaddrList) || (typeof properties.ipaddrList) === 'string')) {
        errors.collect(ros.propertyValidator('ipaddrList', ros.validateLength)({
            data: properties.ipaddrList.length,
            min: undefined,
            max: 200,
          }));
    }
    errors.collect(ros.propertyValidator('ipaddrList', ros.listValidator(ros.validateAny))(properties.ipaddrList));
    if(properties.resourceTypeList && (Array.isArray(properties.resourceTypeList) || (typeof properties.resourceTypeList) === 'string')) {
        errors.collect(ros.propertyValidator('resourceTypeList', ros.validateLength)({
            data: properties.resourceTypeList.length,
            min: undefined,
            max: 200,
          }));
    }
    errors.collect(ros.propertyValidator('resourceTypeList', ros.listValidator(ros.validateAny))(properties.resourceTypeList));
    if(properties.regionList && (Array.isArray(properties.regionList) || (typeof properties.regionList) === 'string')) {
        errors.collect(ros.propertyValidator('regionList', ros.validateLength)({
            data: properties.regionList.length,
            min: undefined,
            max: 200,
          }));
    }
    errors.collect(ros.propertyValidator('regionList', ros.listValidator(ros.validateAny))(properties.regionList));
    return errors.wrap('supplied properties not correct for "RosFwSwitchProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CLOUDFW::FwSwitch` resource
 *
 * @param properties - the TypeScript properties of a `RosFwSwitchProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CLOUDFW::FwSwitch` resource.
 */
// @ts-ignore TS6133
function rosFwSwitchPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosFwSwitchPropsValidator(properties).assertSuccess();
    }
    return {
      'IpaddrList': ros.listMapper(ros.objectToRosTemplate)(properties.ipaddrList),
      'RegionList': ros.listMapper(ros.objectToRosTemplate)(properties.regionList),
      'ResourceTypeList': ros.listMapper(ros.objectToRosTemplate)(properties.resourceTypeList),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CLOUDFW::FwSwitch`, which is used to enable a firewall.
 * @Note This class does not contain additional functions, so it is recommended to use the `FwSwitch` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-fwswitch
 */
export class RosFwSwitch extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CLOUDFW::FwSwitch";

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property ipaddrList: The IP address list.
     * **Note**: The IpaddrList, RegionList, and ResourceTypeList arguments are not allowed to be empty at the same time. A value must be set for one of the three arguments.
     */
    public ipaddrList: Array<any | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property regionList: The region list.
     * **Note**: The IpaddrList, RegionList, and ResourceTypeList arguments are not allowed to be empty at the same time. A value must be set for one of the three arguments.
     */
    public regionList: Array<any | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property resourceTypeList: The asset type list. Valid values:
     * - BastionHostIP: Bastion machine exit IP.
     * - BastionHostIngressIP: The entrance IP of the fortress machine.
     * - EcsEIP: ECS EIP.
     * - EcsPublicIP: ECS public network IP.
     * - EIP: Elastic Public IP.
     * - EniEIP: Elastic Network card EIP.
     * - NatEIP: NAT EIP.
     * - SlbEIP: SLB EIP.
     * - SlbPublicIP: SLB public network IP.
     * - NatPublicIP: NAT public IP
     * - HAVIP: High Availability Virtual IP.
     * **Note**: The IpaddrList, RegionList, and ResourceTypeList arguments are not allowed to be empty at the same time. A value must be set for one of the three arguments.
     */
    public resourceTypeList: Array<any | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosFwSwitchProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosFwSwitch.ROS_RESOURCE_TYPE_NAME, properties: props });

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.ipaddrList = props.ipaddrList;
        this.regionList = props.regionList;
        this.resourceTypeList = props.resourceTypeList;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            ipaddrList: this.ipaddrList,
            regionList: this.regionList,
            resourceTypeList: this.resourceTypeList,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosFwSwitchPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-instance
 */
export interface RosInstanceProps {

    /**
     * @Property payType: The billing method of the firewall instance. Valid values:
     * PayAsYouGo: pay-as-you-go
     * Subscription: subscription
     */
    readonly payType: string | ros.IResolvable;

    /**
     * @Property accountNum: The number of multi-account management and control is the number of member accounts that you need to uniformly control.
     */
    readonly accountNum?: number | ros.IResolvable;

    /**
     * @Property aclExtension: When the default access control authorization specifications of your version are not enough, you can purchase global extension specifications of access control. This extension supports shared occupancy with Internet and VPC boundary ACL specifications.
     */
    readonly aclExtension?: number | ros.IResolvable;

    /**
     * @Property autoPay: Whether to auto pay the bill.
     */
    readonly autoPay?: boolean | ros.IResolvable;

    /**
     * @Property autoRenew: Whether to auto renew the prepay instance.
     */
    readonly autoRenew?: boolean | ros.IResolvable;

    /**
     * @Property bandwidth: Public network processing capability. Valid values: 10 to 15000. Unit: Mbps.
     */
    readonly bandwidth?: number | ros.IResolvable;

    /**
     * @Property ignoreExisting: Whether to ignore existing cloud firewall instance
     * False: ROS will perform a uniqueness check.If the cloud firewall instance exists, an error will be reported when creating it.
     * True: ROS will not check the uniqueness.If the cloud firewall instance exists, the creation process will be ignored.
     * If the cloud firewall instance is not created by ROS, it will be ignored during update and delete stage.
     */
    readonly ignoreExisting?: boolean | ros.IResolvable;

    /**
     * @Property ipNum: The number of public IPs that can be protected. Valid values: 20 to 4000.PremiumVersion: [20, 1000]
     */
    readonly ipNum?: number | ros.IResolvable;

    /**
     * @Property logAnalysis: The cloud firewall includes 7 days of free log storage and auditing by default. If you need longer storage time or meet the requirements for equal protection, it is recommended to purchase the log analysis service.
     */
    readonly logAnalysis?: boolean | ros.IResolvable;

    /**
     * @Property logStorage: Reference for purchasing storage capacity: 10M public network bandwidth, 6 months of log storage, recommended purchase of 1000GB log storage capacity
     */
    readonly logStorage?: number | ros.IResolvable;

    /**
     * @Property multiAccountManagement: Multiple accounts on the enterprise cloud can be managed centrally on the cloud firewall, including asset inventory, ACL policies, attack protection, log reports, etc. After the member account is managed by the current account, there will be no need to purchase it separately.
     */
    readonly multiAccountManagement?: boolean | ros.IResolvable;

    /**
     * @Property natBandwidth: The bandwidth of private network traffic processed by the NAT firewall. The premium version does not include it by default, the enterprise version has 10Mbps by default, and the ultimate version has 20Mbps by default.
     */
    readonly natBandwidth?: number | ros.IResolvable;

    /**
     * @Property natFirewallNum: The number of NAT gateway instances of the NAT firewall you need to enable. Each NAT gateway instance corresponds to one NAT firewall instance. The premium version does not include it by default, the enterprise version comes with 1 specification by default,and the ultimate version comes with 2 specifications by default.
     */
    readonly natFirewallNum?: number | ros.IResolvable;

    /**
     * @Property period: The subscription period of the firewallIf PeriodUnit is month, the valid range is 1, 3, 6
     * If periodUnit is year, the valid range is 1, 2, 3
     */
    readonly period?: number | ros.IResolvable;

    /**
     * @Property periodUnit: The unit of the subscription duration. Valid values:
     * Month
     * Year
     * Default value: Month.
     */
    readonly periodUnit?: string | ros.IResolvable;

    /**
     * @Property spec: The version of Cloud Firewall.
     */
    readonly spec?: string | ros.IResolvable;

    /**
     * @Property vpcBandwidth: VPC network processing capability. Valid values: 1000 to 15000. Unit: Mbps.
     */
    readonly vpcBandwidth?: number | ros.IResolvable;

    /**
     * @Property vpcFirewallNum: The number of protected VPCs. It will be ignored when spec = "premium_version". Valid values between 2 and 500.
     */
    readonly vpcFirewallNum?: number | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosInstanceProps`
 *
 * @param properties - the TypeScript properties of a `RosInstanceProps`
 *
 * @returns the result of the validation.
 */
function RosInstancePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('ignoreExisting', ros.validateBoolean)(properties.ignoreExisting));
    if(properties.vpcBandwidth && (typeof properties.vpcBandwidth) !== 'object') {
        errors.collect(ros.propertyValidator('vpcBandwidth', ros.validateRange)({
            data: properties.vpcBandwidth,
            min: 1000,
            max: 15000,
          }));
    }
    errors.collect(ros.propertyValidator('vpcBandwidth', ros.validateNumber)(properties.vpcBandwidth));
    if(properties.aclExtension && (typeof properties.aclExtension) !== 'object') {
        errors.collect(ros.propertyValidator('aclExtension', ros.validateRange)({
            data: properties.aclExtension,
            min: 0,
            max: 50000,
          }));
    }
    errors.collect(ros.propertyValidator('aclExtension', ros.validateNumber)(properties.aclExtension));
    if(properties.natFirewallNum && (typeof properties.natFirewallNum) !== 'object') {
        errors.collect(ros.propertyValidator('natFirewallNum', ros.validateRange)({
            data: properties.natFirewallNum,
            min: 0,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('natFirewallNum', ros.validateNumber)(properties.natFirewallNum));
    if(properties.natBandwidth && (typeof properties.natBandwidth) !== 'object') {
        errors.collect(ros.propertyValidator('natBandwidth', ros.validateRange)({
            data: properties.natBandwidth,
            min: 0,
            max: 1000,
          }));
    }
    errors.collect(ros.propertyValidator('natBandwidth', ros.validateNumber)(properties.natBandwidth));
    if(properties.ipNum && (typeof properties.ipNum) !== 'object') {
        errors.collect(ros.propertyValidator('ipNum', ros.validateRange)({
            data: properties.ipNum,
            min: 20,
            max: 4000,
          }));
    }
    errors.collect(ros.propertyValidator('ipNum', ros.validateNumber)(properties.ipNum));
    errors.collect(ros.propertyValidator('autoRenew', ros.validateBoolean)(properties.autoRenew));
    if(properties.period && (typeof properties.period) !== 'object') {
        errors.collect(ros.propertyValidator('period', ros.validateAllowedValues)({
          data: properties.period,
          allowedValues: [1,2,3,6],
        }));
    }
    errors.collect(ros.propertyValidator('period', ros.validateNumber)(properties.period));
    errors.collect(ros.propertyValidator('payType', ros.requiredValidator)(properties.payType));
    if(properties.payType && (typeof properties.payType) !== 'object') {
        errors.collect(ros.propertyValidator('payType', ros.validateAllowedValues)({
          data: properties.payType,
          allowedValues: ["PayAsYouGo","PostPaid","PayOnDemand","Postpaid","PostPay","Postpay","POSTPAY","POST","Subscription","PrePaid","Prepaid","PrePay","Prepay","PREPAY","PRE"],
        }));
    }
    errors.collect(ros.propertyValidator('payType', ros.validateString)(properties.payType));
    errors.collect(ros.propertyValidator('autoPay', ros.validateBoolean)(properties.autoPay));
    if(properties.logStorage && (typeof properties.logStorage) !== 'object') {
        errors.collect(ros.propertyValidator('logStorage', ros.validateRange)({
            data: properties.logStorage,
            min: 1000,
            max: 500000,
          }));
    }
    errors.collect(ros.propertyValidator('logStorage', ros.validateNumber)(properties.logStorage));
    errors.collect(ros.propertyValidator('logAnalysis', ros.validateBoolean)(properties.logAnalysis));
    if(properties.vpcFirewallNum && (typeof properties.vpcFirewallNum) !== 'object') {
        errors.collect(ros.propertyValidator('vpcFirewallNum', ros.validateRange)({
            data: properties.vpcFirewallNum,
            min: 2,
            max: 500,
          }));
    }
    errors.collect(ros.propertyValidator('vpcFirewallNum', ros.validateNumber)(properties.vpcFirewallNum));
    errors.collect(ros.propertyValidator('accountNum', ros.validateNumber)(properties.accountNum));
    errors.collect(ros.propertyValidator('multiAccountManagement', ros.validateBoolean)(properties.multiAccountManagement));
    if(properties.bandwidth && (typeof properties.bandwidth) !== 'object') {
        errors.collect(ros.propertyValidator('bandwidth', ros.validateRange)({
            data: properties.bandwidth,
            min: 10,
            max: 15000,
          }));
    }
    errors.collect(ros.propertyValidator('bandwidth', ros.validateNumber)(properties.bandwidth));
    if(properties.spec && (typeof properties.spec) !== 'object') {
        errors.collect(ros.propertyValidator('spec', ros.validateAllowedValues)({
          data: properties.spec,
          allowedValues: ["PremiumVersion","EnterpriseVersion","UltimateVersion"],
        }));
    }
    errors.collect(ros.propertyValidator('spec', ros.validateString)(properties.spec));
    if(properties.periodUnit && (typeof properties.periodUnit) !== 'object') {
        errors.collect(ros.propertyValidator('periodUnit', ros.validateAllowedValues)({
          data: properties.periodUnit,
          allowedValues: ["Month","Year"],
        }));
    }
    errors.collect(ros.propertyValidator('periodUnit', ros.validateString)(properties.periodUnit));
    return errors.wrap('supplied properties not correct for "RosInstanceProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CLOUDFW::Instance` resource
 *
 * @param properties - the TypeScript properties of a `RosInstanceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CLOUDFW::Instance` resource.
 */
// @ts-ignore TS6133
function rosInstancePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosInstancePropsValidator(properties).assertSuccess();
    }
    return {
      'PayType': ros.stringToRosTemplate(properties.payType),
      'AccountNum': ros.numberToRosTemplate(properties.accountNum),
      'AclExtension': ros.numberToRosTemplate(properties.aclExtension),
      'AutoPay': ros.booleanToRosTemplate(properties.autoPay),
      'AutoRenew': ros.booleanToRosTemplate(properties.autoRenew),
      'Bandwidth': ros.numberToRosTemplate(properties.bandwidth),
      'IgnoreExisting': ros.booleanToRosTemplate(properties.ignoreExisting),
      'IpNum': ros.numberToRosTemplate(properties.ipNum),
      'LogAnalysis': ros.booleanToRosTemplate(properties.logAnalysis),
      'LogStorage': ros.numberToRosTemplate(properties.logStorage),
      'MultiAccountManagement': ros.booleanToRosTemplate(properties.multiAccountManagement),
      'NatBandwidth': ros.numberToRosTemplate(properties.natBandwidth),
      'NatFirewallNum': ros.numberToRosTemplate(properties.natFirewallNum),
      'Period': ros.numberToRosTemplate(properties.period),
      'PeriodUnit': ros.stringToRosTemplate(properties.periodUnit),
      'Spec': ros.stringToRosTemplate(properties.spec),
      'VpcBandwidth': ros.numberToRosTemplate(properties.vpcBandwidth),
      'VpcFirewallNum': ros.numberToRosTemplate(properties.vpcFirewallNum),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CLOUDFW::Instance`, which is used to create an instance of Cloud Firewall.
 * @Note This class does not contain additional functions, so it is recommended to use the `Instance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-instance
 */
export class RosInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CLOUDFW::Instance";

    /**
     * @Attribute InstanceId: Instance Id.
     */
    public readonly attrInstanceId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property payType: The billing method of the firewall instance. Valid values:
     * PayAsYouGo: pay-as-you-go
     * Subscription: subscription
     */
    public payType: string | ros.IResolvable;

    /**
     * @Property accountNum: The number of multi-account management and control is the number of member accounts that you need to uniformly control.
     */
    public accountNum: number | ros.IResolvable | undefined;

    /**
     * @Property aclExtension: When the default access control authorization specifications of your version are not enough, you can purchase global extension specifications of access control. This extension supports shared occupancy with Internet and VPC boundary ACL specifications.
     */
    public aclExtension: number | ros.IResolvable | undefined;

    /**
     * @Property autoPay: Whether to auto pay the bill.
     */
    public autoPay: boolean | ros.IResolvable | undefined;

    /**
     * @Property autoRenew: Whether to auto renew the prepay instance.
     */
    public autoRenew: boolean | ros.IResolvable | undefined;

    /**
     * @Property bandwidth: Public network processing capability. Valid values: 10 to 15000. Unit: Mbps.
     */
    public bandwidth: number | ros.IResolvable | undefined;

    /**
     * @Property ignoreExisting: Whether to ignore existing cloud firewall instance
     * False: ROS will perform a uniqueness check.If the cloud firewall instance exists, an error will be reported when creating it.
     * True: ROS will not check the uniqueness.If the cloud firewall instance exists, the creation process will be ignored.
     * If the cloud firewall instance is not created by ROS, it will be ignored during update and delete stage.
     */
    public ignoreExisting: boolean | ros.IResolvable | undefined;

    /**
     * @Property ipNum: The number of public IPs that can be protected. Valid values: 20 to 4000.PremiumVersion: [20, 1000]
     */
    public ipNum: number | ros.IResolvable | undefined;

    /**
     * @Property logAnalysis: The cloud firewall includes 7 days of free log storage and auditing by default. If you need longer storage time or meet the requirements for equal protection, it is recommended to purchase the log analysis service.
     */
    public logAnalysis: boolean | ros.IResolvable | undefined;

    /**
     * @Property logStorage: Reference for purchasing storage capacity: 10M public network bandwidth, 6 months of log storage, recommended purchase of 1000GB log storage capacity
     */
    public logStorage: number | ros.IResolvable | undefined;

    /**
     * @Property multiAccountManagement: Multiple accounts on the enterprise cloud can be managed centrally on the cloud firewall, including asset inventory, ACL policies, attack protection, log reports, etc. After the member account is managed by the current account, there will be no need to purchase it separately.
     */
    public multiAccountManagement: boolean | ros.IResolvable | undefined;

    /**
     * @Property natBandwidth: The bandwidth of private network traffic processed by the NAT firewall. The premium version does not include it by default, the enterprise version has 10Mbps by default, and the ultimate version has 20Mbps by default.
     */
    public natBandwidth: number | ros.IResolvable | undefined;

    /**
     * @Property natFirewallNum: The number of NAT gateway instances of the NAT firewall you need to enable. Each NAT gateway instance corresponds to one NAT firewall instance. The premium version does not include it by default, the enterprise version comes with 1 specification by default,and the ultimate version comes with 2 specifications by default.
     */
    public natFirewallNum: number | ros.IResolvable | undefined;

    /**
     * @Property period: The subscription period of the firewallIf PeriodUnit is month, the valid range is 1, 3, 6
     * If periodUnit is year, the valid range is 1, 2, 3
     */
    public period: number | ros.IResolvable | undefined;

    /**
     * @Property periodUnit: The unit of the subscription duration. Valid values:
     * Month
     * Year
     * Default value: Month.
     */
    public periodUnit: string | ros.IResolvable | undefined;

    /**
     * @Property spec: The version of Cloud Firewall.
     */
    public spec: string | ros.IResolvable | undefined;

    /**
     * @Property vpcBandwidth: VPC network processing capability. Valid values: 1000 to 15000. Unit: Mbps.
     */
    public vpcBandwidth: number | ros.IResolvable | undefined;

    /**
     * @Property vpcFirewallNum: The number of protected VPCs. It will be ignored when spec = "premium_version". Valid values between 2 and 500.
     */
    public vpcFirewallNum: number | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstanceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosInstance.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrInstanceId = this.getAtt('InstanceId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.payType = props.payType;
        this.accountNum = props.accountNum;
        this.aclExtension = props.aclExtension;
        this.autoPay = props.autoPay;
        this.autoRenew = props.autoRenew;
        this.bandwidth = props.bandwidth;
        this.ignoreExisting = props.ignoreExisting;
        this.ipNum = props.ipNum;
        this.logAnalysis = props.logAnalysis;
        this.logStorage = props.logStorage;
        this.multiAccountManagement = props.multiAccountManagement;
        this.natBandwidth = props.natBandwidth;
        this.natFirewallNum = props.natFirewallNum;
        this.period = props.period;
        this.periodUnit = props.periodUnit;
        this.spec = props.spec;
        this.vpcBandwidth = props.vpcBandwidth;
        this.vpcFirewallNum = props.vpcFirewallNum;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            payType: this.payType,
            accountNum: this.accountNum,
            aclExtension: this.aclExtension,
            autoPay: this.autoPay,
            autoRenew: this.autoRenew,
            bandwidth: this.bandwidth,
            ignoreExisting: this.ignoreExisting,
            ipNum: this.ipNum,
            logAnalysis: this.logAnalysis,
            logStorage: this.logStorage,
            multiAccountManagement: this.multiAccountManagement,
            natBandwidth: this.natBandwidth,
            natFirewallNum: this.natFirewallNum,
            period: this.period,
            periodUnit: this.periodUnit,
            spec: this.spec,
            vpcBandwidth: this.vpcBandwidth,
            vpcFirewallNum: this.vpcFirewallNum,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosInstancePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosNatFirewallControlPolicy`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-natfirewallcontrolpolicy
 */
export interface RosNatFirewallControlPolicyProps {

    /**
     * @Property aclAction: The action that Cloud Firewall performs on the traffic.Valid values:
     * accept: allows the traffic.
     * drop: denies the traffic.
     * log: monitors the traffic.
     */
    readonly aclAction: string | ros.IResolvable;

    /**
     * @Property applicationNameList: The application types supported by the access control policy.
     */
    readonly applicationNameList: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property description: The description of the access control policy.
     */
    readonly description: string | ros.IResolvable;

    /**
     * @Property destination: The destination address in the access control policy.
     * Valid values:
     * If DestinationType is set to net, the value of this parameter is a CIDR block.
     * Example: 1.2.XX.XX\/24
     * If DestinationType is set to group, the value of this parameter is an address book.
     * Example: db_group
     * If DestinationType is set to domain, the value of this parameter is a domain name.
     * Example: *.aliyuncs.com
     * DestinationType is set to location, the value of this parameter is a location.
     * Example: ["BJ11", "ZB"]
     */
    readonly destination: string | ros.IResolvable;

    /**
     * @Property destinationType: The type of the destination address in the access control policy. Valid values:
     * net: CIDR block
     * group: address book
     * domain: domain name
     */
    readonly destinationType: string | ros.IResolvable;

    /**
     * @Property direction: The direction of the traffic to which the access control policy applies. Valid values:
     * out: outbound traffic
     */
    readonly direction: string | ros.IResolvable;

    /**
     * @Property natGatewayId: The ID of the NAT gateway.
     */
    readonly natGatewayId: string | ros.IResolvable;

    /**
     * @Property newOrder: The priority of the access control policy. The priority value starts from 1. A small priority value indicates a high priority.
     */
    readonly newOrder: number | ros.IResolvable;

    /**
     * @Property proto: The protocol type in the access control policy.Valid values:
     * ANY: all types of protocols
     * TCP
     * UDP
     * ICMP
     */
    readonly proto: string | ros.IResolvable;

    /**
     * @Property source: The source address in the access control policy.Valid values:
     * If SourceType is set to net, the value of Source is a CIDR block.Example: 10.2.4.0\/24
     * If SourceType is set to group, the value of this parameter must be an address book name.Example: db_group
     */
    readonly source: string | ros.IResolvable;

    /**
     * @Property sourceType: The type of the source address in the access control policy.Valid values:
     * net: source CIDR block
     * group: source address book
     */
    readonly sourceType: string | ros.IResolvable;

    /**
     * @Property destPort: The destination port in the access control policy. Valid values:
     * If Proto is set to ICMP, DestPort is automatically left empty.
     * If Proto is set to TCP, UDP, or ANY and DestPortType is set to group, DestPort is empty.
     * If Proto is set to TCP, UDP, or ANY and DestPortType is set to port, the value of DestPort is the destination port number.
     */
    readonly destPort?: number | ros.IResolvable;

    /**
     * @Property destPortGroup: The name of the destination port address book in the access control policy.
     */
    readonly destPortGroup?: string | ros.IResolvable;

    /**
     * @Property destPortType: The type of the destination port in the access control policy. Valid values:
     * net: source CIDR block
     * group: source address book
     */
    readonly destPortType?: string | ros.IResolvable;

    /**
     * @Property domainResolveType: The domain name resolution method of the access control policy. Valid values:
     * 0: fully qualified domain name (FQDN)-based resolution
     * 1: Domain Name System (DNS)-based dynamic resolution
     * 2: FQDN and DNS-based dynamic resolution
     */
    readonly domainResolveType?: number | ros.IResolvable;

    /**
     * @Property endTime: The time when the access control policy stops taking effect. The value is a UNIX timestamp. Unit: seconds. The value must be on the hour or on the half hour, and at least 30 minutes later than the value of StartTime.
     */
    readonly endTime?: string | ros.IResolvable;

    /**
     * @Property ipVersion: The IP version supported by the access control policy. Valid values:
     * 4: IPv4 (default)
     */
    readonly ipVersion?: number | ros.IResolvable;

    /**
     * @Property release: Specifies whether to enable the access control policy. By default, an access control policy is enabled after it is created. Valid values:
     * true
     * false
     */
    readonly release?: boolean | ros.IResolvable;

    /**
     * @Property repeatDays: The days of a week or of a month on which the access control policy takes effect.
     * If RepeatType is set to Permanent, None, or Daily, RepeatDays is left empty. Example: [].
     * If RepeatType is set to Weekly, RepeatDays must be specified. Example: [0, 6].
     * If RepeatType is set to Monthly, RepeatDays must be specified. Example: [1, 31].
     */
    readonly repeatDays?: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property repeatEndTime: The point in time when the recurrence ends. Example: 23:30. The value must be on the hour or on the half hour, and at least 30 minutes later than the value of RepeatStartTime.
     */
    readonly repeatEndTime?: string | ros.IResolvable;

    /**
     * @Property repeatStartTime: The point in time when the recurrence starts. Example: 08:00. The value must be on the hour or on the half hour, and at least 30 minutes earlier than the value of RepeatEndTime.
     */
    readonly repeatStartTime?: string | ros.IResolvable;

    /**
     * @Property repeatType: The recurrence type for the access control policy to take effect. Valid values:
     * Permanent (default): The policy always takes effect.
     * None: The policy takes effect for only once.
     * Daily: The policy takes effect on a daily basis.
     * Weekly: The policy takes effect on a weekly basis.
     * Monthly: The policy takes effect on a monthly basis.
     */
    readonly repeatType?: string | ros.IResolvable;

    /**
     * @Property startTime: The time when the access control policy starts to take effect. The value is a UNIX timestamp. Unit: seconds. The value must be on the hour or on the half hour, and at least 30 minutes earlier than the value of EndTime.
     */
    readonly startTime?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosNatFirewallControlPolicyProps`
 *
 * @param properties - the TypeScript properties of a `RosNatFirewallControlPolicyProps`
 *
 * @returns the result of the validation.
 */
function RosNatFirewallControlPolicyPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('destination', ros.requiredValidator)(properties.destination));
    errors.collect(ros.propertyValidator('destination', ros.validateString)(properties.destination));
    errors.collect(ros.propertyValidator('description', ros.requiredValidator)(properties.description));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('endTime', ros.validateString)(properties.endTime));
    errors.collect(ros.propertyValidator('ipVersion', ros.validateNumber)(properties.ipVersion));
    errors.collect(ros.propertyValidator('sourceType', ros.requiredValidator)(properties.sourceType));
    if(properties.sourceType && (typeof properties.sourceType) !== 'object') {
        errors.collect(ros.propertyValidator('sourceType', ros.validateAllowedValues)({
          data: properties.sourceType,
          allowedValues: ["net","group"],
        }));
    }
    errors.collect(ros.propertyValidator('sourceType', ros.validateString)(properties.sourceType));
    errors.collect(ros.propertyValidator('destPort', ros.validateNumber)(properties.destPort));
    errors.collect(ros.propertyValidator('applicationNameList', ros.requiredValidator)(properties.applicationNameList));
    if(properties.applicationNameList && (Array.isArray(properties.applicationNameList) || (typeof properties.applicationNameList) === 'string')) {
        errors.collect(ros.propertyValidator('applicationNameList', ros.validateLength)({
            data: properties.applicationNameList.length,
            min: 1,
            max: 5,
          }));
    }
    errors.collect(ros.propertyValidator('applicationNameList', ros.listValidator(ros.validateString))(properties.applicationNameList));
    errors.collect(ros.propertyValidator('startTime', ros.validateString)(properties.startTime));
    errors.collect(ros.propertyValidator('aclAction', ros.requiredValidator)(properties.aclAction));
    if(properties.aclAction && (typeof properties.aclAction) !== 'object') {
        errors.collect(ros.propertyValidator('aclAction', ros.validateAllowedValues)({
          data: properties.aclAction,
          allowedValues: ["accept","drop","log"],
        }));
    }
    errors.collect(ros.propertyValidator('aclAction', ros.validateString)(properties.aclAction));
    errors.collect(ros.propertyValidator('destinationType', ros.requiredValidator)(properties.destinationType));
    if(properties.destinationType && (typeof properties.destinationType) !== 'object') {
        errors.collect(ros.propertyValidator('destinationType', ros.validateAllowedValues)({
          data: properties.destinationType,
          allowedValues: ["net","group","domain"],
        }));
    }
    errors.collect(ros.propertyValidator('destinationType', ros.validateString)(properties.destinationType));
    errors.collect(ros.propertyValidator('direction', ros.requiredValidator)(properties.direction));
    if(properties.direction && (typeof properties.direction) !== 'object') {
        errors.collect(ros.propertyValidator('direction', ros.validateAllowedValues)({
          data: properties.direction,
          allowedValues: ["out"],
        }));
    }
    errors.collect(ros.propertyValidator('direction', ros.validateString)(properties.direction));
    errors.collect(ros.propertyValidator('source', ros.requiredValidator)(properties.source));
    errors.collect(ros.propertyValidator('source', ros.validateString)(properties.source));
    if(properties.destPortType && (typeof properties.destPortType) !== 'object') {
        errors.collect(ros.propertyValidator('destPortType', ros.validateAllowedValues)({
          data: properties.destPortType,
          allowedValues: ["net","group"],
        }));
    }
    errors.collect(ros.propertyValidator('destPortType', ros.validateString)(properties.destPortType));
    errors.collect(ros.propertyValidator('proto', ros.requiredValidator)(properties.proto));
    if(properties.proto && (typeof properties.proto) !== 'object') {
        errors.collect(ros.propertyValidator('proto', ros.validateAllowedValues)({
          data: properties.proto,
          allowedValues: ["ANY","TCP","UDP","ICMP"],
        }));
    }
    errors.collect(ros.propertyValidator('proto', ros.validateString)(properties.proto));
    errors.collect(ros.propertyValidator('repeatEndTime', ros.validateString)(properties.repeatEndTime));
    if(properties.domainResolveType && (typeof properties.domainResolveType) !== 'object') {
        errors.collect(ros.propertyValidator('domainResolveType', ros.validateAllowedValues)({
          data: properties.domainResolveType,
          allowedValues: [0,1,2],
        }));
    }
    errors.collect(ros.propertyValidator('domainResolveType', ros.validateNumber)(properties.domainResolveType));
    errors.collect(ros.propertyValidator('repeatDays', ros.listValidator(ros.validateAny))(properties.repeatDays));
    if(properties.repeatType && (typeof properties.repeatType) !== 'object') {
        errors.collect(ros.propertyValidator('repeatType', ros.validateAllowedValues)({
          data: properties.repeatType,
          allowedValues: ["Permanent","None","Daily","Weekly","Monthly"],
        }));
    }
    errors.collect(ros.propertyValidator('repeatType', ros.validateString)(properties.repeatType));
    errors.collect(ros.propertyValidator('repeatStartTime', ros.validateString)(properties.repeatStartTime));
    errors.collect(ros.propertyValidator('natGatewayId', ros.requiredValidator)(properties.natGatewayId));
    errors.collect(ros.propertyValidator('natGatewayId', ros.validateString)(properties.natGatewayId));
    errors.collect(ros.propertyValidator('release', ros.validateBoolean)(properties.release));
    errors.collect(ros.propertyValidator('newOrder', ros.requiredValidator)(properties.newOrder));
    errors.collect(ros.propertyValidator('newOrder', ros.validateNumber)(properties.newOrder));
    errors.collect(ros.propertyValidator('destPortGroup', ros.validateString)(properties.destPortGroup));
    return errors.wrap('supplied properties not correct for "RosNatFirewallControlPolicyProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CLOUDFW::NatFirewallControlPolicy` resource
 *
 * @param properties - the TypeScript properties of a `RosNatFirewallControlPolicyProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CLOUDFW::NatFirewallControlPolicy` resource.
 */
// @ts-ignore TS6133
function rosNatFirewallControlPolicyPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosNatFirewallControlPolicyPropsValidator(properties).assertSuccess();
    }
    return {
      'AclAction': ros.stringToRosTemplate(properties.aclAction),
      'ApplicationNameList': ros.listMapper(ros.stringToRosTemplate)(properties.applicationNameList),
      'Description': ros.stringToRosTemplate(properties.description),
      'Destination': ros.stringToRosTemplate(properties.destination),
      'DestinationType': ros.stringToRosTemplate(properties.destinationType),
      'Direction': ros.stringToRosTemplate(properties.direction),
      'NatGatewayId': ros.stringToRosTemplate(properties.natGatewayId),
      'NewOrder': ros.numberToRosTemplate(properties.newOrder),
      'Proto': ros.stringToRosTemplate(properties.proto),
      'Source': ros.stringToRosTemplate(properties.source),
      'SourceType': ros.stringToRosTemplate(properties.sourceType),
      'DestPort': ros.numberToRosTemplate(properties.destPort),
      'DestPortGroup': ros.stringToRosTemplate(properties.destPortGroup),
      'DestPortType': ros.stringToRosTemplate(properties.destPortType),
      'DomainResolveType': ros.numberToRosTemplate(properties.domainResolveType),
      'EndTime': ros.stringToRosTemplate(properties.endTime),
      'IpVersion': ros.numberToRosTemplate(properties.ipVersion),
      'Release': ros.booleanToRosTemplate(properties.release),
      'RepeatDays': ros.listMapper(ros.objectToRosTemplate)(properties.repeatDays),
      'RepeatEndTime': ros.stringToRosTemplate(properties.repeatEndTime),
      'RepeatStartTime': ros.stringToRosTemplate(properties.repeatStartTime),
      'RepeatType': ros.stringToRosTemplate(properties.repeatType),
      'StartTime': ros.stringToRosTemplate(properties.startTime),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CLOUDFW::NatFirewallControlPolicy`.
 * @Note This class does not contain additional functions, so it is recommended to use the `NatFirewallControlPolicy` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-natfirewallcontrolpolicy
 */
export class RosNatFirewallControlPolicy extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CLOUDFW::NatFirewallControlPolicy";

    /**
     * @Attribute AclUuid: The unique ID of the access control policy.
     */
    public readonly attrAclUuid: ros.IResolvable;

    /**
     * @Attribute Direction: The direction of the traffic to which the access control policy applies.
     */
    public readonly attrDirection: ros.IResolvable;

    /**
     * @Attribute NatGatewayId: The ID of the NAT gateway.
     */
    public readonly attrNatGatewayId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property aclAction: The action that Cloud Firewall performs on the traffic.Valid values:
     * accept: allows the traffic.
     * drop: denies the traffic.
     * log: monitors the traffic.
     */
    public aclAction: string | ros.IResolvable;

    /**
     * @Property applicationNameList: The application types supported by the access control policy.
     */
    public applicationNameList: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property description: The description of the access control policy.
     */
    public description: string | ros.IResolvable;

    /**
     * @Property destination: The destination address in the access control policy.
     * Valid values:
     * If DestinationType is set to net, the value of this parameter is a CIDR block.
     * Example: 1.2.XX.XX\/24
     * If DestinationType is set to group, the value of this parameter is an address book.
     * Example: db_group
     * If DestinationType is set to domain, the value of this parameter is a domain name.
     * Example: *.aliyuncs.com
     * DestinationType is set to location, the value of this parameter is a location.
     * Example: ["BJ11", "ZB"]
     */
    public destination: string | ros.IResolvable;

    /**
     * @Property destinationType: The type of the destination address in the access control policy. Valid values:
     * net: CIDR block
     * group: address book
     * domain: domain name
     */
    public destinationType: string | ros.IResolvable;

    /**
     * @Property direction: The direction of the traffic to which the access control policy applies. Valid values:
     * out: outbound traffic
     */
    public direction: string | ros.IResolvable;

    /**
     * @Property natGatewayId: The ID of the NAT gateway.
     */
    public natGatewayId: string | ros.IResolvable;

    /**
     * @Property newOrder: The priority of the access control policy. The priority value starts from 1. A small priority value indicates a high priority.
     */
    public newOrder: number | ros.IResolvable;

    /**
     * @Property proto: The protocol type in the access control policy.Valid values:
     * ANY: all types of protocols
     * TCP
     * UDP
     * ICMP
     */
    public proto: string | ros.IResolvable;

    /**
     * @Property source: The source address in the access control policy.Valid values:
     * If SourceType is set to net, the value of Source is a CIDR block.Example: 10.2.4.0\/24
     * If SourceType is set to group, the value of this parameter must be an address book name.Example: db_group
     */
    public source: string | ros.IResolvable;

    /**
     * @Property sourceType: The type of the source address in the access control policy.Valid values:
     * net: source CIDR block
     * group: source address book
     */
    public sourceType: string | ros.IResolvable;

    /**
     * @Property destPort: The destination port in the access control policy. Valid values:
     * If Proto is set to ICMP, DestPort is automatically left empty.
     * If Proto is set to TCP, UDP, or ANY and DestPortType is set to group, DestPort is empty.
     * If Proto is set to TCP, UDP, or ANY and DestPortType is set to port, the value of DestPort is the destination port number.
     */
    public destPort: number | ros.IResolvable | undefined;

    /**
     * @Property destPortGroup: The name of the destination port address book in the access control policy.
     */
    public destPortGroup: string | ros.IResolvable | undefined;

    /**
     * @Property destPortType: The type of the destination port in the access control policy. Valid values:
     * net: source CIDR block
     * group: source address book
     */
    public destPortType: string | ros.IResolvable | undefined;

    /**
     * @Property domainResolveType: The domain name resolution method of the access control policy. Valid values:
     * 0: fully qualified domain name (FQDN)-based resolution
     * 1: Domain Name System (DNS)-based dynamic resolution
     * 2: FQDN and DNS-based dynamic resolution
     */
    public domainResolveType: number | ros.IResolvable | undefined;

    /**
     * @Property endTime: The time when the access control policy stops taking effect. The value is a UNIX timestamp. Unit: seconds. The value must be on the hour or on the half hour, and at least 30 minutes later than the value of StartTime.
     */
    public endTime: string | ros.IResolvable | undefined;

    /**
     * @Property ipVersion: The IP version supported by the access control policy. Valid values:
     * 4: IPv4 (default)
     */
    public ipVersion: number | ros.IResolvable | undefined;

    /**
     * @Property release: Specifies whether to enable the access control policy. By default, an access control policy is enabled after it is created. Valid values:
     * true
     * false
     */
    public release: boolean | ros.IResolvable | undefined;

    /**
     * @Property repeatDays: The days of a week or of a month on which the access control policy takes effect.
     * If RepeatType is set to Permanent, None, or Daily, RepeatDays is left empty. Example: [].
     * If RepeatType is set to Weekly, RepeatDays must be specified. Example: [0, 6].
     * If RepeatType is set to Monthly, RepeatDays must be specified. Example: [1, 31].
     */
    public repeatDays: Array<any | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property repeatEndTime: The point in time when the recurrence ends. Example: 23:30. The value must be on the hour or on the half hour, and at least 30 minutes later than the value of RepeatStartTime.
     */
    public repeatEndTime: string | ros.IResolvable | undefined;

    /**
     * @Property repeatStartTime: The point in time when the recurrence starts. Example: 08:00. The value must be on the hour or on the half hour, and at least 30 minutes earlier than the value of RepeatEndTime.
     */
    public repeatStartTime: string | ros.IResolvable | undefined;

    /**
     * @Property repeatType: The recurrence type for the access control policy to take effect. Valid values:
     * Permanent (default): The policy always takes effect.
     * None: The policy takes effect for only once.
     * Daily: The policy takes effect on a daily basis.
     * Weekly: The policy takes effect on a weekly basis.
     * Monthly: The policy takes effect on a monthly basis.
     */
    public repeatType: string | ros.IResolvable | undefined;

    /**
     * @Property startTime: The time when the access control policy starts to take effect. The value is a UNIX timestamp. Unit: seconds. The value must be on the hour or on the half hour, and at least 30 minutes earlier than the value of EndTime.
     */
    public startTime: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosNatFirewallControlPolicyProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosNatFirewallControlPolicy.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAclUuid = this.getAtt('AclUuid');
        this.attrDirection = this.getAtt('Direction');
        this.attrNatGatewayId = this.getAtt('NatGatewayId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.aclAction = props.aclAction;
        this.applicationNameList = props.applicationNameList;
        this.description = props.description;
        this.destination = props.destination;
        this.destinationType = props.destinationType;
        this.direction = props.direction;
        this.natGatewayId = props.natGatewayId;
        this.newOrder = props.newOrder;
        this.proto = props.proto;
        this.source = props.source;
        this.sourceType = props.sourceType;
        this.destPort = props.destPort;
        this.destPortGroup = props.destPortGroup;
        this.destPortType = props.destPortType;
        this.domainResolveType = props.domainResolveType;
        this.endTime = props.endTime;
        this.ipVersion = props.ipVersion;
        this.release = props.release;
        this.repeatDays = props.repeatDays;
        this.repeatEndTime = props.repeatEndTime;
        this.repeatStartTime = props.repeatStartTime;
        this.repeatType = props.repeatType;
        this.startTime = props.startTime;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            aclAction: this.aclAction,
            applicationNameList: this.applicationNameList,
            description: this.description,
            destination: this.destination,
            destinationType: this.destinationType,
            direction: this.direction,
            natGatewayId: this.natGatewayId,
            newOrder: this.newOrder,
            proto: this.proto,
            source: this.source,
            sourceType: this.sourceType,
            destPort: this.destPort,
            destPortGroup: this.destPortGroup,
            destPortType: this.destPortType,
            domainResolveType: this.domainResolveType,
            endTime: this.endTime,
            ipVersion: this.ipVersion,
            release: this.release,
            repeatDays: this.repeatDays,
            repeatEndTime: this.repeatEndTime,
            repeatStartTime: this.repeatStartTime,
            repeatType: this.repeatType,
            startTime: this.startTime,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosNatFirewallControlPolicyPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosVpcFirewallControlPolicy`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-vpcfirewallcontrolpolicy
 */
export interface RosVpcFirewallControlPolicyProps {

    /**
     * @Property aclAction: The action that Cloud Firewall performs on the traffic. Valid values:
     * accept: allows the traffic.
     * drop: denies the traffic.
     * log: monitors the traffic.
     */
    readonly aclAction: string | ros.IResolvable;

    /**
     * @Property applicationName: The application type that the access control policy supports.
     * Valid values: 
     * ANY (indicates that all application types are supported) 
     * FTP 
     * HTTP 
     * HTTPS 
     * MySQL 
     * SMTP 
     * SMTPS 
     * RDP 
     * VNC 
     * SSH 
     * Redis 
     * MQTT 
     * MongoDB 
     * Memcache 
     * SSL
     */
    readonly applicationName: string | ros.IResolvable;

    /**
     * @Property description: The description of the access control policy.
     */
    readonly description: string | ros.IResolvable;

    /**
     * @Property destination: The destination address in the access control policy.
     * Set this parameter in the following way:
     * If the DestinationType parameter is set to net, set the value to a Classless Inter-Domain Routing (CIDR) block.
     * Example: 10.2.3.0\/24.
     * If the DestinationType parameter is set to group, set the value to the name of an address book.
     * Example: db_group.
     * If the DestinationType parameter is set to domain, set the value to a domain name.
     * Example: *.aliyuncs.com.
     */
    readonly destination: string | ros.IResolvable;

    /**
     * @Property destinationType: The type of the destination address in the access control policy. Valid values:
     * net: CIDR block
     * group: address book
     * domain: domain name
     */
    readonly destinationType: string | ros.IResolvable;

    /**
     * @Property newOrder: The priority of the access control policy.
     * The priority value starts from 1. A smaller priority value indicates a higher priority.
     * Note The value of -1 indicates the lowest priority.
     */
    readonly newOrder: string | ros.IResolvable;

    /**
     * @Property proto: The type of the security protocol in the access control policy.
     */
    readonly proto: string | ros.IResolvable;

    /**
     * @Property source: The source address in the access control policy.
     * If the SourceType parameter is set to net, set the value to a CIDR block. Example: 10.2.3.0\/24.
     * If the SourceType parameter is set to group, set the value to the name of an address book. Example: db_group.
     */
    readonly source: string | ros.IResolvable;

    /**
     * @Property sourceType: The type of the source address in the access control policy. Valid values:
     * net: CIDR block
     * group: address book
     */
    readonly sourceType: string | ros.IResolvable;

    /**
     * @Property vpcFirewallId: The ID of the policy group to which you want to add the access control policy.
     * If the VPC firewall is used to protect CEN, set the value to the ID of the CEN instance
     * that the VPC firewall protects. Example: cen-ervw5jbw1234*****.
     * If the VPC firewall is used to protect Express Connect, set the value to the ID of
     * the VPC firewall instance. Example: vfw-a42bbb748c91234*****.
     * Note You can call the DescribeVpcFirewallAclGroupList operation to query the ID of the policy group.
     */
    readonly vpcFirewallId: string | ros.IResolvable;

    /**
     * @Property destPort: The destination port in the access control policy.
     * Note This parameter must be specified if the DestPortType parameter is set to port.
     */
    readonly destPort?: string | ros.IResolvable;

    /**
     * @Property destPortGroup: The address book of destination ports in the access control policy.
     * Note This parameter must be specified if the DestPortType parameter is set to group.
     */
    readonly destPortGroup?: string | ros.IResolvable;

    /**
     * @Property destPortType: The type of the destination port in the access control policy. Valid values:
     * port: port
     * group: address book
     */
    readonly destPortType?: string | ros.IResolvable;

    /**
     * @Property lang: The natural language of the request and response. Valid values:
     * zh: Chinese
     * en: English
     */
    readonly lang?: string | ros.IResolvable;

    /**
     * @Property regionId: Region ID. Default to cn-hangzhou.
     */
    readonly regionId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosVpcFirewallControlPolicyProps`
 *
 * @param properties - the TypeScript properties of a `RosVpcFirewallControlPolicyProps`
 *
 * @returns the result of the validation.
 */
function RosVpcFirewallControlPolicyPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('destination', ros.requiredValidator)(properties.destination));
    errors.collect(ros.propertyValidator('destination', ros.validateString)(properties.destination));
    errors.collect(ros.propertyValidator('applicationName', ros.requiredValidator)(properties.applicationName));
    if(properties.applicationName && (typeof properties.applicationName) !== 'object') {
        errors.collect(ros.propertyValidator('applicationName', ros.validateAllowedValues)({
          data: properties.applicationName,
          allowedValues: ["ANY","FTP","HTTP","HTTPS","MySQL","SMTP","SMTPS","RDP","VNC","SSH","Redis","MQTT","MongoDB","Memcache","SSL"],
        }));
    }
    errors.collect(ros.propertyValidator('applicationName', ros.validateString)(properties.applicationName));
    errors.collect(ros.propertyValidator('description', ros.requiredValidator)(properties.description));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('sourceType', ros.requiredValidator)(properties.sourceType));
    if(properties.sourceType && (typeof properties.sourceType) !== 'object') {
        errors.collect(ros.propertyValidator('sourceType', ros.validateAllowedValues)({
          data: properties.sourceType,
          allowedValues: ["group","net"],
        }));
    }
    errors.collect(ros.propertyValidator('sourceType', ros.validateString)(properties.sourceType));
    errors.collect(ros.propertyValidator('destPort', ros.validateString)(properties.destPort));
    errors.collect(ros.propertyValidator('aclAction', ros.requiredValidator)(properties.aclAction));
    if(properties.aclAction && (typeof properties.aclAction) !== 'object') {
        errors.collect(ros.propertyValidator('aclAction', ros.validateAllowedValues)({
          data: properties.aclAction,
          allowedValues: ["accept","drop","log"],
        }));
    }
    errors.collect(ros.propertyValidator('aclAction', ros.validateString)(properties.aclAction));
    if(properties.lang && (typeof properties.lang) !== 'object') {
        errors.collect(ros.propertyValidator('lang', ros.validateAllowedValues)({
          data: properties.lang,
          allowedValues: ["en","zh"],
        }));
    }
    errors.collect(ros.propertyValidator('lang', ros.validateString)(properties.lang));
    errors.collect(ros.propertyValidator('destinationType', ros.requiredValidator)(properties.destinationType));
    if(properties.destinationType && (typeof properties.destinationType) !== 'object') {
        errors.collect(ros.propertyValidator('destinationType', ros.validateAllowedValues)({
          data: properties.destinationType,
          allowedValues: ["domain","group","net"],
        }));
    }
    errors.collect(ros.propertyValidator('destinationType', ros.validateString)(properties.destinationType));
    errors.collect(ros.propertyValidator('vpcFirewallId', ros.requiredValidator)(properties.vpcFirewallId));
    errors.collect(ros.propertyValidator('vpcFirewallId', ros.validateString)(properties.vpcFirewallId));
    errors.collect(ros.propertyValidator('source', ros.requiredValidator)(properties.source));
    errors.collect(ros.propertyValidator('source', ros.validateString)(properties.source));
    if(properties.destPortType && (typeof properties.destPortType) !== 'object') {
        errors.collect(ros.propertyValidator('destPortType', ros.validateAllowedValues)({
          data: properties.destPortType,
          allowedValues: ["group","port"],
        }));
    }
    errors.collect(ros.propertyValidator('destPortType', ros.validateString)(properties.destPortType));
    errors.collect(ros.propertyValidator('proto', ros.requiredValidator)(properties.proto));
    if(properties.proto && (typeof properties.proto) !== 'object') {
        errors.collect(ros.propertyValidator('proto', ros.validateAllowedValues)({
          data: properties.proto,
          allowedValues: ["ANY","TCP","UDP","ICMP"],
        }));
    }
    errors.collect(ros.propertyValidator('proto', ros.validateString)(properties.proto));
    if(properties.regionId && (typeof properties.regionId) !== 'object') {
        errors.collect(ros.propertyValidator('regionId', ros.validateAllowedValues)({
          data: properties.regionId,
          allowedValues: ["cn-hangzhou","ap-southeast-1"],
        }));
    }
    errors.collect(ros.propertyValidator('regionId', ros.validateString)(properties.regionId));
    errors.collect(ros.propertyValidator('newOrder', ros.requiredValidator)(properties.newOrder));
    errors.collect(ros.propertyValidator('newOrder', ros.validateString)(properties.newOrder));
    errors.collect(ros.propertyValidator('destPortGroup', ros.validateString)(properties.destPortGroup));
    return errors.wrap('supplied properties not correct for "RosVpcFirewallControlPolicyProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CLOUDFW::VpcFirewallControlPolicy` resource
 *
 * @param properties - the TypeScript properties of a `RosVpcFirewallControlPolicyProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CLOUDFW::VpcFirewallControlPolicy` resource.
 */
// @ts-ignore TS6133
function rosVpcFirewallControlPolicyPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosVpcFirewallControlPolicyPropsValidator(properties).assertSuccess();
    }
    return {
      'AclAction': ros.stringToRosTemplate(properties.aclAction),
      'ApplicationName': ros.stringToRosTemplate(properties.applicationName),
      'Description': ros.stringToRosTemplate(properties.description),
      'Destination': ros.stringToRosTemplate(properties.destination),
      'DestinationType': ros.stringToRosTemplate(properties.destinationType),
      'NewOrder': ros.stringToRosTemplate(properties.newOrder),
      'Proto': ros.stringToRosTemplate(properties.proto),
      'Source': ros.stringToRosTemplate(properties.source),
      'SourceType': ros.stringToRosTemplate(properties.sourceType),
      'VpcFirewallId': ros.stringToRosTemplate(properties.vpcFirewallId),
      'DestPort': ros.stringToRosTemplate(properties.destPort),
      'DestPortGroup': ros.stringToRosTemplate(properties.destPortGroup),
      'DestPortType': ros.stringToRosTemplate(properties.destPortType),
      'Lang': ros.stringToRosTemplate(properties.lang),
      'RegionId': ros.stringToRosTemplate(properties.regionId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CLOUDFW::VpcFirewallControlPolicy`, which is used to add an access control policy to a specified policy group for a Virtual Private Cloud (VPC) firewall.
 * @Note This class does not contain additional functions, so it is recommended to use the `VpcFirewallControlPolicy` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-vpcfirewallcontrolpolicy
 */
export class RosVpcFirewallControlPolicy extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CLOUDFW::VpcFirewallControlPolicy";

    /**
     * @Attribute AclUuid: The unique ID of the access control policy.
     */
    public readonly attrAclUuid: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property aclAction: The action that Cloud Firewall performs on the traffic. Valid values:
     * accept: allows the traffic.
     * drop: denies the traffic.
     * log: monitors the traffic.
     */
    public aclAction: string | ros.IResolvable;

    /**
     * @Property applicationName: The application type that the access control policy supports.
     * Valid values: 
     * ANY (indicates that all application types are supported) 
     * FTP 
     * HTTP 
     * HTTPS 
     * MySQL 
     * SMTP 
     * SMTPS 
     * RDP 
     * VNC 
     * SSH 
     * Redis 
     * MQTT 
     * MongoDB 
     * Memcache 
     * SSL
     */
    public applicationName: string | ros.IResolvable;

    /**
     * @Property description: The description of the access control policy.
     */
    public description: string | ros.IResolvable;

    /**
     * @Property destination: The destination address in the access control policy.
     * Set this parameter in the following way:
     * If the DestinationType parameter is set to net, set the value to a Classless Inter-Domain Routing (CIDR) block.
     * Example: 10.2.3.0\/24.
     * If the DestinationType parameter is set to group, set the value to the name of an address book.
     * Example: db_group.
     * If the DestinationType parameter is set to domain, set the value to a domain name.
     * Example: *.aliyuncs.com.
     */
    public destination: string | ros.IResolvable;

    /**
     * @Property destinationType: The type of the destination address in the access control policy. Valid values:
     * net: CIDR block
     * group: address book
     * domain: domain name
     */
    public destinationType: string | ros.IResolvable;

    /**
     * @Property newOrder: The priority of the access control policy.
     * The priority value starts from 1. A smaller priority value indicates a higher priority.
     * Note The value of -1 indicates the lowest priority.
     */
    public newOrder: string | ros.IResolvable;

    /**
     * @Property proto: The type of the security protocol in the access control policy.
     */
    public proto: string | ros.IResolvable;

    /**
     * @Property source: The source address in the access control policy.
     * If the SourceType parameter is set to net, set the value to a CIDR block. Example: 10.2.3.0\/24.
     * If the SourceType parameter is set to group, set the value to the name of an address book. Example: db_group.
     */
    public source: string | ros.IResolvable;

    /**
     * @Property sourceType: The type of the source address in the access control policy. Valid values:
     * net: CIDR block
     * group: address book
     */
    public sourceType: string | ros.IResolvable;

    /**
     * @Property vpcFirewallId: The ID of the policy group to which you want to add the access control policy.
     * If the VPC firewall is used to protect CEN, set the value to the ID of the CEN instance
     * that the VPC firewall protects. Example: cen-ervw5jbw1234*****.
     * If the VPC firewall is used to protect Express Connect, set the value to the ID of
     * the VPC firewall instance. Example: vfw-a42bbb748c91234*****.
     * Note You can call the DescribeVpcFirewallAclGroupList operation to query the ID of the policy group.
     */
    public vpcFirewallId: string | ros.IResolvable;

    /**
     * @Property destPort: The destination port in the access control policy.
     * Note This parameter must be specified if the DestPortType parameter is set to port.
     */
    public destPort: string | ros.IResolvable | undefined;

    /**
     * @Property destPortGroup: The address book of destination ports in the access control policy.
     * Note This parameter must be specified if the DestPortType parameter is set to group.
     */
    public destPortGroup: string | ros.IResolvable | undefined;

    /**
     * @Property destPortType: The type of the destination port in the access control policy. Valid values:
     * port: port
     * group: address book
     */
    public destPortType: string | ros.IResolvable | undefined;

    /**
     * @Property lang: The natural language of the request and response. Valid values:
     * zh: Chinese
     * en: English
     */
    public lang: string | ros.IResolvable | undefined;

    /**
     * @Property regionId: Region ID. Default to cn-hangzhou.
     */
    public regionId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosVpcFirewallControlPolicyProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosVpcFirewallControlPolicy.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAclUuid = this.getAtt('AclUuid');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.aclAction = props.aclAction;
        this.applicationName = props.applicationName;
        this.description = props.description;
        this.destination = props.destination;
        this.destinationType = props.destinationType;
        this.newOrder = props.newOrder;
        this.proto = props.proto;
        this.source = props.source;
        this.sourceType = props.sourceType;
        this.vpcFirewallId = props.vpcFirewallId;
        this.destPort = props.destPort;
        this.destPortGroup = props.destPortGroup;
        this.destPortType = props.destPortType;
        this.lang = props.lang;
        this.regionId = props.regionId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            aclAction: this.aclAction,
            applicationName: this.applicationName,
            description: this.description,
            destination: this.destination,
            destinationType: this.destinationType,
            newOrder: this.newOrder,
            proto: this.proto,
            source: this.source,
            sourceType: this.sourceType,
            vpcFirewallId: this.vpcFirewallId,
            destPort: this.destPort,
            destPortGroup: this.destPortGroup,
            destPortType: this.destPortType,
            lang: this.lang,
            regionId: this.regionId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosVpcFirewallControlPolicyPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
