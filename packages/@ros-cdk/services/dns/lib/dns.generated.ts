// Generated from the AliCloud ROS Resource Specification

import * as ros from '@ros-cdk/core';

/**
 * Properties for defining a `ALIYUN::DNS::Domain`
 */
export interface RosDomainProps {

    /**
     * @Property domainName: Domain name
     */
    readonly domainName: string;

    /**
     * @Property groupId: Domain name grouping, the default is the "default grouping" GroupId
     */
    readonly groupId?: string;
}

/**
 * Determine whether the given properties match those of a `RosDomainProps`
 *
 * @param properties - the TypeScript properties of a `RosDomainProps`
 *
 * @returns the result of the validation.
 */
function RosDomainPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('domainName', ros.requiredValidator)(properties.domainName));
    errors.collect(ros.propertyValidator('domainName', ros.validateString)(properties.domainName));
    errors.collect(ros.propertyValidator('groupId', ros.validateString)(properties.groupId));
    return errors.wrap('supplied properties not correct for "RosDomainProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DNS::Domain` resource
 *
 * @param properties - the TypeScript properties of a `RosDomainProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DNS::Domain` resource.
 */
// @ts-ignore TS6133
function rosDomainPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDomainPropsValidator(properties).assertSuccess();
    }
    return {
      DomainName: ros.stringToRosTemplate(properties.domainName),
      GroupId: ros.stringToRosTemplate(properties.groupId),
    };
}

/**
 * A ROS template type:  `ALIYUN::DNS::Domain`
 */
export class RosDomain extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DNS::Domain";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute DnsServers: The DNS list for the domain name under resolution
     */
    public readonly attrDnsServers: any;

    /**
     * @Attribute DomainId: Domain ID
     */
    public readonly attrDomainId: any;

    /**
     * @Attribute DomainName: Domain name
     */
    public readonly attrDomainName: any;

    /**
     * @Attribute GroupId: Domain name group ID
     */
    public readonly attrGroupId: any;

    /**
     * @Attribute GroupName: The name of the domain name group
     */
    public readonly attrGroupName: any;

    /**
     * @Attribute PunyCode: punycode returned only for a Chinese domain name
     */
    public readonly attrPunyCode: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property domainName: Domain name
     */
    public domainName: string;

    /**
     * @Property groupId: Domain name grouping, the default is the "default grouping" GroupId
     */
    public groupId: string | undefined;

    /**
     * Create a new `ALIYUN::DNS::Domain`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDomainProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDomain.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDnsServers = ros.Token.asString(this.getAtt('DnsServers'));
        this.attrDomainId = ros.Token.asString(this.getAtt('DomainId'));
        this.attrDomainName = ros.Token.asString(this.getAtt('DomainName'));
        this.attrGroupId = ros.Token.asString(this.getAtt('GroupId'));
        this.attrGroupName = ros.Token.asString(this.getAtt('GroupName'));
        this.attrPunyCode = ros.Token.asString(this.getAtt('PunyCode'));

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.domainName = props.domainName;
        this.groupId = props.groupId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            domainName: this.domainName,
            groupId: this.groupId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDomainPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::DNS::DomainGroup`
 */
export interface RosDomainGroupProps {

    /**
     * @Property groupName: Domain name group name
     */
    readonly groupName: string;
}

/**
 * Determine whether the given properties match those of a `RosDomainGroupProps`
 *
 * @param properties - the TypeScript properties of a `RosDomainGroupProps`
 *
 * @returns the result of the validation.
 */
function RosDomainGroupPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('groupName', ros.requiredValidator)(properties.groupName));
    errors.collect(ros.propertyValidator('groupName', ros.validateString)(properties.groupName));
    return errors.wrap('supplied properties not correct for "RosDomainGroupProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DNS::DomainGroup` resource
 *
 * @param properties - the TypeScript properties of a `RosDomainGroupProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DNS::DomainGroup` resource.
 */
// @ts-ignore TS6133
function rosDomainGroupPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDomainGroupPropsValidator(properties).assertSuccess();
    }
    return {
      GroupName: ros.stringToRosTemplate(properties.groupName),
    };
}

/**
 * A ROS template type:  `ALIYUN::DNS::DomainGroup`
 */
export class RosDomainGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DNS::DomainGroup";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute GroupId: Domain name group ID
     */
    public readonly attrGroupId: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property groupName: Domain name group name
     */
    public groupName: string;

    /**
     * Create a new `ALIYUN::DNS::DomainGroup`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDomainGroupProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDomainGroup.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrGroupId = ros.Token.asString(this.getAtt('GroupId'));

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.groupName = props.groupName;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            groupName: this.groupName,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDomainGroupPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::DNS::DomainRecord`
 */
export interface RosDomainRecordProps {

    /**
     * @Property domainName: Domain name
     */
    readonly domainName: string;

    /**
     * @Property rr: Host record, if you want to resolve @.exmaple.com, the host record should fill in "@" instead of empty
     */
    readonly rr: string;

    /**
     * @Property type: Parse record type, see parsing record type format
     */
    readonly type: string;

    /**
     * @Property value: Record value
     */
    readonly value: string;

    /**
     * @Property line: Parse the line, the default is default. See parsing line enumeration
     */
    readonly line?: string;

    /**
     * @Property priority: The priority of the MX record, the value range [1,10], when the record type is MX record, this parameter must be
     */
    readonly priority?: number;

    /**
     * @Property ttl: The resolution time is valid. The default is 600 seconds (10 minutes). See the TTL definition.
     */
    readonly ttl?: number;
}

/**
 * Determine whether the given properties match those of a `RosDomainRecordProps`
 *
 * @param properties - the TypeScript properties of a `RosDomainRecordProps`
 *
 * @returns the result of the validation.
 */
function RosDomainRecordPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('rr', ros.requiredValidator)(properties.rr));
    errors.collect(ros.propertyValidator('rr', ros.validateString)(properties.rr));
    errors.collect(ros.propertyValidator('line', ros.validateString)(properties.line));
    errors.collect(ros.propertyValidator('type', ros.requiredValidator)(properties.type));
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('domainName', ros.requiredValidator)(properties.domainName));
    errors.collect(ros.propertyValidator('domainName', ros.validateString)(properties.domainName));
    if(properties.priority && (typeof properties.priority) !== 'object') {
        errors.collect(ros.propertyValidator('priority', ros.validateRange)({
            data: properties.priority,
            min: 1,
            max: 10,
          }));
    }
    errors.collect(ros.propertyValidator('priority', ros.validateNumber)(properties.priority));
    errors.collect(ros.propertyValidator('value', ros.requiredValidator)(properties.value));
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('ttl', ros.validateNumber)(properties.ttl));
    return errors.wrap('supplied properties not correct for "RosDomainRecordProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DNS::DomainRecord` resource
 *
 * @param properties - the TypeScript properties of a `RosDomainRecordProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DNS::DomainRecord` resource.
 */
// @ts-ignore TS6133
function rosDomainRecordPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDomainRecordPropsValidator(properties).assertSuccess();
    }
    return {
      DomainName: ros.stringToRosTemplate(properties.domainName),
      RR: ros.stringToRosTemplate(properties.rr),
      Type: ros.stringToRosTemplate(properties.type),
      Value: ros.stringToRosTemplate(properties.value),
      Line: ros.stringToRosTemplate(properties.line),
      Priority: ros.numberToRosTemplate(properties.priority),
      TTL: ros.numberToRosTemplate(properties.ttl),
    };
}

/**
 * A ROS template type:  `ALIYUN::DNS::DomainRecord`
 */
export class RosDomainRecord extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DNS::DomainRecord";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute RecordId: Parse the ID of the record
     */
    public readonly attrRecordId: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property domainName: Domain name
     */
    public domainName: string;

    /**
     * @Property rr: Host record, if you want to resolve @.exmaple.com, the host record should fill in "@" instead of empty
     */
    public rr: string;

    /**
     * @Property type: Parse record type, see parsing record type format
     */
    public type: string;

    /**
     * @Property value: Record value
     */
    public value: string;

    /**
     * @Property line: Parse the line, the default is default. See parsing line enumeration
     */
    public line: string | undefined;

    /**
     * @Property priority: The priority of the MX record, the value range [1,10], when the record type is MX record, this parameter must be
     */
    public priority: number | undefined;

    /**
     * @Property ttl: The resolution time is valid. The default is 600 seconds (10 minutes). See the TTL definition.
     */
    public ttl: number | undefined;

    /**
     * Create a new `ALIYUN::DNS::DomainRecord`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDomainRecordProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDomainRecord.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrRecordId = ros.Token.asString(this.getAtt('RecordId'));

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.domainName = props.domainName;
        this.rr = props.rr;
        this.type = props.type;
        this.value = props.value;
        this.line = props.line;
        this.priority = props.priority;
        this.ttl = props.ttl;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            domainName: this.domainName,
            rr: this.rr,
            type: this.type,
            value: this.value,
            line: this.line,
            priority: this.priority,
            ttl: this.ttl,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDomainRecordPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
