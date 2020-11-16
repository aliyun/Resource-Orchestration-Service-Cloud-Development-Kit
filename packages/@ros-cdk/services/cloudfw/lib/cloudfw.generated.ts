// Generated from the AliCloud ROS Resource Specification

import * as ros from '@ros-cdk/core';

/**
 * Properties for defining a `ALIYUN::CLOUDFW::AddressBook`
 */
export interface RosAddressBookProps {

    /**
     * @Property description: Address book description.
     */
    readonly description: string;

    /**
     * @Property groupName: Name Address book.
     */
    readonly groupName: string;

    /**
     * @Property groupType: Type the address book, the optional values ​​are:
     * ip: IP Address Book
     * domain: domain name address book
     * port: Port Address Book
     * tag: ECS label address book
     */
    readonly groupType: string;

    /**
     * @Property addressList: Address list of the address book, between multiple addresses separated by commas.
     * Note: When GroupType ip, it must be set to port or domain.
     * When GroupType as ip, address list, fill in the IP address. For example: 1.2.3.4/32, 1.2.3.0/24
     * When GroupType for the port, the address list to fill in ports or port ranges. For example: 80, 100/200
     * When GroupType for the domain, the domain name to fill in the address list. For example: demo1.aliyun.com, demo2.aliyun.com
     */
    readonly addressList?: string;

    /**
     * @Property autoAddTagEcs: Whether to automatically add new ECS public network IP matching tags to the address book. Default to false.
     */
    readonly autoAddTagEcs?: boolean | ros.IResolvable;

    /**
     * @Property regionId: Region ID. Default to cn-hangzhou.
     */
    readonly regionId?: string;

    /**
     * @Property tagList:
     */
    readonly tagList?: Array<RosAddressBook.TagListProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property tagRelation: The relationship between the labels to be matched more ECS.
     * and: the relationship between multiple labels "and" that matches both ECS IP public network more tags will be added to the address book.
     * or: a plurality of inter-labeled "or" relationship, i.e., as long as a matching tag ECS ​​public IP address book will be added.
     */
    readonly tagRelation?: string;
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
      Description: ros.stringToRosTemplate(properties.description),
      GroupName: ros.stringToRosTemplate(properties.groupName),
      GroupType: ros.stringToRosTemplate(properties.groupType),
      AddressList: ros.stringToRosTemplate(properties.addressList),
      AutoAddTagEcs: ros.booleanToRosTemplate(properties.autoAddTagEcs),
      RegionId: ros.stringToRosTemplate(properties.regionId),
      TagList: ros.listMapper(rosAddressBookTagListPropertyToRosTemplate)(properties.tagList),
      TagRelation: ros.stringToRosTemplate(properties.tagRelation),
    };
}

/**
 * A ROS template type:  `ALIYUN::CLOUDFW::AddressBook`
 */
export class RosAddressBook extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CLOUDFW::AddressBook";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute GroupUuid: After a successful return to the address book to add unique identification ID.
     */
    public readonly attrGroupUuid: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property description: Address book description.
     */
    public description: string;

    /**
     * @Property groupName: Name Address book.
     */
    public groupName: string;

    /**
     * @Property groupType: Type the address book, the optional values ​​are:
     * ip: IP Address Book
     * domain: domain name address book
     * port: Port Address Book
     * tag: ECS label address book
     */
    public groupType: string;

    /**
     * @Property addressList: Address list of the address book, between multiple addresses separated by commas.
     * Note: When GroupType ip, it must be set to port or domain.
     * When GroupType as ip, address list, fill in the IP address. For example: 1.2.3.4/32, 1.2.3.0/24
     * When GroupType for the port, the address list to fill in ports or port ranges. For example: 80, 100/200
     * When GroupType for the domain, the domain name to fill in the address list. For example: demo1.aliyun.com, demo2.aliyun.com
     */
    public addressList: string | undefined;

    /**
     * @Property autoAddTagEcs: Whether to automatically add new ECS public network IP matching tags to the address book. Default to false.
     */
    public autoAddTagEcs: boolean | ros.IResolvable | undefined;

    /**
     * @Property regionId: Region ID. Default to cn-hangzhou.
     */
    public regionId: string | undefined;

    /**
     * @Property tagList:
     */
    public tagList: Array<RosAddressBook.TagListProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property tagRelation: The relationship between the labels to be matched more ECS.
     * and: the relationship between multiple labels "and" that matches both ECS IP public network more tags will be added to the address book.
     * or: a plurality of inter-labeled "or" relationship, i.e., as long as a matching tag ECS ​​public IP address book will be added.
     */
    public tagRelation: string | undefined;

    /**
     * Create a new `ALIYUN::CLOUDFW::AddressBook`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAddressBookProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosAddressBook.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrGroupUuid = ros.Token.asString(this.getAtt('GroupUuid'));

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
        readonly tagKey?: string;
        /**
         * @Property tagValue: ECS tag value to be matched.
         */
        readonly tagValue?: string;
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
      TagKey: ros.stringToRosTemplate(properties.tagKey),
      TagValue: ros.stringToRosTemplate(properties.tagValue),
    };
}

/**
 * Properties for defining a `ALIYUN::CLOUDFW::ControlPolicy`
 */
export interface RosControlPolicyProps {

    /**
     * @Property aclAction: Traffic access control policy set by the cloud of a firewall.
     * accept: Release
     * drop: rejected
     * log: Observation
     */
    readonly aclAction: string;

    /**
     * @Property applicationName: Application types supported by the security policy.
     * The following types of applications are supported: ANY, HTTP, HTTPS, MySQL, SMTP, SMTPS, RDP, VNC, SSH, Redis, MQTT, MongoDB, Memcache, SSL
     * NOTE ANY indicates that the policy is applied to all types of applications.
     */
    readonly applicationName: string;

    /**
     * @Property description: Security access control policy description information.
     */
    readonly description: string;

    /**
     * @Property destination: Security Access Control destination address policy.
     * When DestinationType is net, Destination purpose CIDR. For example: 1.2.3.4/24
     * When DestinationType as a group, Destination for the purpose of the address book name. For example: db_group
     * When DestinationType for the domain, Destination for the purpose of a domain name. For example:. * Aliyuncs.com
     * When DestinationType as location, Destination area for the purpose (see below position encoding specific regions). For example: [ "BJ11", "ZB"]
     */
    readonly destination: string;

    /**
     * @Property destinationType: Security Access Control destination address type of policy.
     * net: Destination network segment (CIDR)
     * group: destination address book
     * domain: The purpose domain
     * location: The purpose area
     */
    readonly destinationType: string;

    /**
     * @Property direction: Security access control traffic direction policies.
     * in: internal and external traffic access control
     * out: within the flow of external access control
     */
    readonly direction: string;

    /**
     * @Property newOrder: Security access control priority policy in force. Priority number increments sequentially from 1, lower the priority number, the higher the priority.
     * Description -1 indicates the lowest priority.
     */
    readonly newOrder: number;

    /**
     * @Property proto: The type of security protocol for traffic access in the security access control policy. Can be set to ANY when you are not sure of the specific protocol type.
     * Allowed values: ANY, TCP, UDP, ICMP
     */
    readonly proto: string;

    /**
     * @Property source: Security access control source address policy.
     * When SourceType for the net, Source is the source CIDR. For example: 1.2.3.0/24
     * When SourceType as a group, Source name for the source address book. For example: db_group
     * When SourceType as location, Source source region (specific region position encoder see below). For example, [ "BJ11", "ZB"]
     */
    readonly source: string;

    /**
     * @Property sourceType: Security access control source address type of policy.
     * net: Source segment (CIDR)
     * group: source address book
     * location: the source area
     */
    readonly sourceType: string;

    /**
     * @Property destPort: Security access control policy access traffic destination port.
     * Note When DestPortType to port, set the item.
     */
    readonly destPort?: string;

    /**
     * @Property destPortGroup: Security access control policy access traffic destination port address book name.
     * Description DestPortType is group, set the item.
     */
    readonly destPortGroup?: string;

    /**
     * @Property destPortType: Security access control policy access destination port traffic type.
     * port: Port
     * group: port address book
     */
    readonly destPortType?: string;

    /**
     * @Property regionId: Region ID. Default to cn-hangzhou.
     */
    readonly regionId?: string;
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
      AclAction: ros.stringToRosTemplate(properties.aclAction),
      ApplicationName: ros.stringToRosTemplate(properties.applicationName),
      Description: ros.stringToRosTemplate(properties.description),
      Destination: ros.stringToRosTemplate(properties.destination),
      DestinationType: ros.stringToRosTemplate(properties.destinationType),
      Direction: ros.stringToRosTemplate(properties.direction),
      NewOrder: ros.numberToRosTemplate(properties.newOrder),
      Proto: ros.stringToRosTemplate(properties.proto),
      Source: ros.stringToRosTemplate(properties.source),
      SourceType: ros.stringToRosTemplate(properties.sourceType),
      DestPort: ros.stringToRosTemplate(properties.destPort),
      DestPortGroup: ros.stringToRosTemplate(properties.destPortGroup),
      DestPortType: ros.stringToRosTemplate(properties.destPortType),
      RegionId: ros.stringToRosTemplate(properties.regionId),
    };
}

/**
 * A ROS template type:  `ALIYUN::CLOUDFW::ControlPolicy`
 */
export class RosControlPolicy extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CLOUDFW::ControlPolicy";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute AclUuid: Security access control ID that uniquely identifies the policy.
     */
    public readonly attrAclUuid: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property aclAction: Traffic access control policy set by the cloud of a firewall.
     * accept: Release
     * drop: rejected
     * log: Observation
     */
    public aclAction: string;

    /**
     * @Property applicationName: Application types supported by the security policy.
     * The following types of applications are supported: ANY, HTTP, HTTPS, MySQL, SMTP, SMTPS, RDP, VNC, SSH, Redis, MQTT, MongoDB, Memcache, SSL
     * NOTE ANY indicates that the policy is applied to all types of applications.
     */
    public applicationName: string;

    /**
     * @Property description: Security access control policy description information.
     */
    public description: string;

    /**
     * @Property destination: Security Access Control destination address policy.
     * When DestinationType is net, Destination purpose CIDR. For example: 1.2.3.4/24
     * When DestinationType as a group, Destination for the purpose of the address book name. For example: db_group
     * When DestinationType for the domain, Destination for the purpose of a domain name. For example:. * Aliyuncs.com
     * When DestinationType as location, Destination area for the purpose (see below position encoding specific regions). For example: [ "BJ11", "ZB"]
     */
    public destination: string;

    /**
     * @Property destinationType: Security Access Control destination address type of policy.
     * net: Destination network segment (CIDR)
     * group: destination address book
     * domain: The purpose domain
     * location: The purpose area
     */
    public destinationType: string;

    /**
     * @Property direction: Security access control traffic direction policies.
     * in: internal and external traffic access control
     * out: within the flow of external access control
     */
    public direction: string;

    /**
     * @Property newOrder: Security access control priority policy in force. Priority number increments sequentially from 1, lower the priority number, the higher the priority.
     * Description -1 indicates the lowest priority.
     */
    public newOrder: number;

    /**
     * @Property proto: The type of security protocol for traffic access in the security access control policy. Can be set to ANY when you are not sure of the specific protocol type.
     * Allowed values: ANY, TCP, UDP, ICMP
     */
    public proto: string;

    /**
     * @Property source: Security access control source address policy.
     * When SourceType for the net, Source is the source CIDR. For example: 1.2.3.0/24
     * When SourceType as a group, Source name for the source address book. For example: db_group
     * When SourceType as location, Source source region (specific region position encoder see below). For example, [ "BJ11", "ZB"]
     */
    public source: string;

    /**
     * @Property sourceType: Security access control source address type of policy.
     * net: Source segment (CIDR)
     * group: source address book
     * location: the source area
     */
    public sourceType: string;

    /**
     * @Property destPort: Security access control policy access traffic destination port.
     * Note When DestPortType to port, set the item.
     */
    public destPort: string | undefined;

    /**
     * @Property destPortGroup: Security access control policy access traffic destination port address book name.
     * Description DestPortType is group, set the item.
     */
    public destPortGroup: string | undefined;

    /**
     * @Property destPortType: Security access control policy access destination port traffic type.
     * port: Port
     * group: port address book
     */
    public destPortType: string | undefined;

    /**
     * @Property regionId: Region ID. Default to cn-hangzhou.
     */
    public regionId: string | undefined;

    /**
     * Create a new `ALIYUN::CLOUDFW::ControlPolicy`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosControlPolicyProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosControlPolicy.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAclUuid = ros.Token.asString(this.getAtt('AclUuid'));

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
