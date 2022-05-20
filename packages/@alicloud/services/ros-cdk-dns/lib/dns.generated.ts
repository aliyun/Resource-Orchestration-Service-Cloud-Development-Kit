// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `ALIYUN::DNS::Domain`
 */
export interface RosDomainProps {

    /**
     * @Property domainName: Domain name
     */
    readonly domainName: string | ros.IResolvable;

    /**
     * @Property groupId: Domain name grouping, the default is the "default grouping" GroupId
     */
    readonly groupId?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosDomain.TagsProperty[];
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
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('domainName', ros.requiredValidator)(properties.domainName));
    errors.collect(ros.propertyValidator('domainName', ros.validateString)(properties.domainName));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosDomain_TagsPropertyValidator))(properties.tags));
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
      ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
      Tags: ros.listMapper(rosDomainTagsPropertyToRosTemplate)(properties.tags),
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
    public readonly attrDnsServers: ros.IResolvable;

    /**
     * @Attribute DomainId: Domain ID
     */
    public readonly attrDomainId: ros.IResolvable;

    /**
     * @Attribute DomainName: Domain name
     */
    public readonly attrDomainName: ros.IResolvable;

    /**
     * @Attribute GroupId: Domain name group ID
     */
    public readonly attrGroupId: ros.IResolvable;

    /**
     * @Attribute GroupName: The name of the domain name group
     */
    public readonly attrGroupName: ros.IResolvable;

    /**
     * @Attribute PunyCode: punycode returned only for a Chinese domain name
     */
    public readonly attrPunyCode: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property domainName: Domain name
     */
    public domainName: string | ros.IResolvable;

    /**
     * @Property groupId: Domain name grouping, the default is the "default grouping" GroupId
     */
    public groupId: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: Resource group id.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    public tags: RosDomain.TagsProperty[] | undefined;

    /**
     * Create a new `ALIYUN::DNS::Domain`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDomainProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDomain.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDnsServers = this.getAtt('DnsServers');
        this.attrDomainId = this.getAtt('DomainId');
        this.attrDomainName = this.getAtt('DomainName');
        this.attrGroupId = this.getAtt('GroupId');
        this.attrGroupName = this.getAtt('GroupName');
        this.attrPunyCode = this.getAtt('PunyCode');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.domainName = props.domainName;
        this.groupId = props.groupId;
        this.resourceGroupId = props.resourceGroupId;
        this.tags = props.tags;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            domainName: this.domainName,
            groupId: this.groupId,
            resourceGroupId: this.resourceGroupId,
            tags: this.tags,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDomainPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosDomain {
    /**
     * @stability external
     */
    export interface TagsProperty {
        /**
         * @Property value: undefined
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: undefined
         */
        readonly key: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `TagsProperty`
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the result of the validation.
 */
function RosDomain_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DNS::Domain.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DNS::Domain.Tags` resource.
 */
// @ts-ignore TS6133
function rosDomainTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosDomain_TagsPropertyValidator(properties).assertSuccess();
    return {
      Value: ros.stringToRosTemplate(properties.value),
      Key: ros.stringToRosTemplate(properties.key),
    };
}

/**
 * Properties for defining a `ALIYUN::DNS::DomainGroup`
 */
export interface RosDomainGroupProps {

    /**
     * @Property groupName: Domain name group name
     */
    readonly groupName: string | ros.IResolvable;
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
    public readonly attrGroupId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property groupName: Domain name group name
     */
    public groupName: string | ros.IResolvable;

    /**
     * Create a new `ALIYUN::DNS::DomainGroup`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDomainGroupProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDomainGroup.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrGroupId = this.getAtt('GroupId');

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
    readonly domainName: string | ros.IResolvable;

    /**
     * @Property rr: Host record, if you want to resolve @.exmaple.com, the host record should fill in "@" instead of empty
     */
    readonly rr: string | ros.IResolvable;

    /**
     * @Property type: Parse record type, see parsing record type format
     */
    readonly type: string | ros.IResolvable;

    /**
     * @Property value: Record value
     */
    readonly value: string | ros.IResolvable;

    /**
     * @Property line: Parse the line, the default is default. See parsing line enumeration
     */
    readonly line?: string | ros.IResolvable;

    /**
     * @Property priority: The priority of the MX record, the value range [1,10], when the record type is MX record, this parameter must be
     */
    readonly priority?: number | ros.IResolvable;

    /**
     * @Property ttl: The resolution time is valid. The default is 600 seconds (10 minutes). See the TTL definition.
     */
    readonly ttl?: number | ros.IResolvable;
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
    public readonly attrRecordId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property domainName: Domain name
     */
    public domainName: string | ros.IResolvable;

    /**
     * @Property rr: Host record, if you want to resolve @.exmaple.com, the host record should fill in "@" instead of empty
     */
    public rr: string | ros.IResolvable;

    /**
     * @Property type: Parse record type, see parsing record type format
     */
    public type: string | ros.IResolvable;

    /**
     * @Property value: Record value
     */
    public value: string | ros.IResolvable;

    /**
     * @Property line: Parse the line, the default is default. See parsing line enumeration
     */
    public line: string | ros.IResolvable | undefined;

    /**
     * @Property priority: The priority of the MX record, the value range [1,10], when the record type is MX record, this parameter must be
     */
    public priority: number | ros.IResolvable | undefined;

    /**
     * @Property ttl: The resolution time is valid. The default is 600 seconds (10 minutes). See the TTL definition.
     */
    public ttl: number | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::DNS::DomainRecord`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDomainRecordProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDomainRecord.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrRecordId = this.getAtt('RecordId');

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
