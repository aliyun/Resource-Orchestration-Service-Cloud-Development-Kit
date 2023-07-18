// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `DATASOURCE::DNS::DomainGroups`
 */
export interface RosDomainGroupsProps {

    /**
     * @Property keyWord: The keyword for searches in "%KeyWord%" mode. The value is not case-sensitive.
     */
    readonly keyWord?: string | ros.IResolvable;

    /**
     * @Property lang: The language type.
     */
    readonly lang?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosDomainGroupsProps`
 *
 * @param properties - the TypeScript properties of a `RosDomainGroupsProps`
 *
 * @returns the result of the validation.
 */
function RosDomainGroupsPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('keyWord', ros.validateString)(properties.keyWord));
    errors.collect(ros.propertyValidator('lang', ros.validateString)(properties.lang));
    return errors.wrap('supplied properties not correct for "RosDomainGroupsProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::DNS::DomainGroups` resource
 *
 * @param properties - the TypeScript properties of a `RosDomainGroupsProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::DNS::DomainGroups` resource.
 */
// @ts-ignore TS6133
function rosDomainGroupsPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDomainGroupsPropsValidator(properties).assertSuccess();
    }
    return {
      KeyWord: ros.stringToRosTemplate(properties.keyWord),
      Lang: ros.stringToRosTemplate(properties.lang),
    };
}

/**
 * A ROS template type:  `DATASOURCE::DNS::DomainGroups`
 */
export class RosDomainGroups extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::DNS::DomainGroups";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute DomainGroupIds: The list of The DNS domain group ids.
     */
    public readonly attrDomainGroupIds: ros.IResolvable;

    /**
     * @Attribute DomainGroups: The information about DNS domain groups.
     */
    public readonly attrDomainGroups: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property keyWord: The keyword for searches in "%KeyWord%" mode. The value is not case-sensitive.
     */
    public keyWord: string | ros.IResolvable | undefined;

    /**
     * @Property lang: The language type.
     */
    public lang: string | ros.IResolvable | undefined;

    /**
     * Create a new `DATASOURCE::DNS::DomainGroups`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDomainGroupsProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDomainGroups.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDomainGroupIds = this.getAtt('DomainGroupIds');
        this.attrDomainGroups = this.getAtt('DomainGroups');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.keyWord = props.keyWord;
        this.lang = props.lang;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            keyWord: this.keyWord,
            lang: this.lang,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDomainGroupsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `DATASOURCE::DNS::DomainRecords`
 */
export interface RosDomainRecordsProps {

    /**
     * @Property domainName: The domain name for which you want to query DNS records.
     */
    readonly domainName: string | ros.IResolvable;

    /**
     * @Property direction: The order in which the returned DNS records are sorted.
     */
    readonly direction?: string | ros.IResolvable;

    /**
     * @Property groupId: The ID of the domain name group.
     */
    readonly groupId?: string | ros.IResolvable;

    /**
     * @Property keyWord: The keyword for searches in "%KeyWord%" mode. The value is not case-sensitive.
     */
    readonly keyWord?: string | ros.IResolvable;

    /**
     * @Property lang: The language type.
     */
    readonly lang?: string | ros.IResolvable;

    /**
     * @Property line: The line based on which the system queries DNS records.
     */
    readonly line?: string | ros.IResolvable;

    /**
     * @Property orderBy: The method that is used to sort the returned DNS records.
     */
    readonly orderBy?: string | ros.IResolvable;

    /**
     * @Property rrKeyWord: The resource record (RR) keyword based on which the system queries DNS records.
     */
    readonly rrKeyWord?: string | ros.IResolvable;

    /**
     * @Property searchMode: The search mode.
     */
    readonly searchMode?: string | ros.IResolvable;

    /**
     * @Property status: The status of the DNS records to query.
     */
    readonly status?: string | ros.IResolvable;

    /**
     * @Property type: The type of the DNS records to query.
     */
    readonly type?: string | ros.IResolvable;

    /**
     * @Property typeKeyWord: The type keyword based on which the system queries DNS records.
     */
    readonly typeKeyWord?: string | ros.IResolvable;

    /**
     * @Property valueKeyWord: The record value keyword based on which the system queries DNS records.
     */
    readonly valueKeyWord?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosDomainRecordsProps`
 *
 * @param properties - the TypeScript properties of a `RosDomainRecordsProps`
 *
 * @returns the result of the validation.
 */
function RosDomainRecordsPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.status && (typeof properties.status) !== 'object') {
        errors.collect(ros.propertyValidator('status', ros.validateAllowedValues)({
          data: properties.status,
          allowedValues: ["Enable","Disable"],
        }));
    }
    errors.collect(ros.propertyValidator('status', ros.validateString)(properties.status));
    errors.collect(ros.propertyValidator('orderBy', ros.validateString)(properties.orderBy));
    errors.collect(ros.propertyValidator('rrKeyWord', ros.validateString)(properties.rrKeyWord));
    errors.collect(ros.propertyValidator('domainName', ros.requiredValidator)(properties.domainName));
    errors.collect(ros.propertyValidator('domainName', ros.validateString)(properties.domainName));
    errors.collect(ros.propertyValidator('typeKeyWord', ros.validateString)(properties.typeKeyWord));
    errors.collect(ros.propertyValidator('lang', ros.validateString)(properties.lang));
    errors.collect(ros.propertyValidator('direction', ros.validateString)(properties.direction));
    errors.collect(ros.propertyValidator('groupId', ros.validateString)(properties.groupId));
    errors.collect(ros.propertyValidator('line', ros.validateString)(properties.line));
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('valueKeyWord', ros.validateString)(properties.valueKeyWord));
    errors.collect(ros.propertyValidator('keyWord', ros.validateString)(properties.keyWord));
    if(properties.searchMode && (typeof properties.searchMode) !== 'object') {
        errors.collect(ros.propertyValidator('searchMode', ros.validateAllowedValues)({
          data: properties.searchMode,
          allowedValues: ["LIKE","EXACT","ADVANCED"],
        }));
    }
    errors.collect(ros.propertyValidator('searchMode', ros.validateString)(properties.searchMode));
    return errors.wrap('supplied properties not correct for "RosDomainRecordsProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::DNS::DomainRecords` resource
 *
 * @param properties - the TypeScript properties of a `RosDomainRecordsProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::DNS::DomainRecords` resource.
 */
// @ts-ignore TS6133
function rosDomainRecordsPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDomainRecordsPropsValidator(properties).assertSuccess();
    }
    return {
      DomainName: ros.stringToRosTemplate(properties.domainName),
      Direction: ros.stringToRosTemplate(properties.direction),
      GroupId: ros.stringToRosTemplate(properties.groupId),
      KeyWord: ros.stringToRosTemplate(properties.keyWord),
      Lang: ros.stringToRosTemplate(properties.lang),
      Line: ros.stringToRosTemplate(properties.line),
      OrderBy: ros.stringToRosTemplate(properties.orderBy),
      RRKeyWord: ros.stringToRosTemplate(properties.rrKeyWord),
      SearchMode: ros.stringToRosTemplate(properties.searchMode),
      Status: ros.stringToRosTemplate(properties.status),
      Type: ros.stringToRosTemplate(properties.type),
      TypeKeyWord: ros.stringToRosTemplate(properties.typeKeyWord),
      ValueKeyWord: ros.stringToRosTemplate(properties.valueKeyWord),
    };
}

/**
 * A ROS template type:  `DATASOURCE::DNS::DomainRecords`
 */
export class RosDomainRecords extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::DNS::DomainRecords";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute DomainRecordIds: The list of The DNS domain record ids.
     */
    public readonly attrDomainRecordIds: ros.IResolvable;

    /**
     * @Attribute DomainRecords: The information about DNS records.
     */
    public readonly attrDomainRecords: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property domainName: The domain name for which you want to query DNS records.
     */
    public domainName: string | ros.IResolvable;

    /**
     * @Property direction: The order in which the returned DNS records are sorted.
     */
    public direction: string | ros.IResolvable | undefined;

    /**
     * @Property groupId: The ID of the domain name group.
     */
    public groupId: string | ros.IResolvable | undefined;

    /**
     * @Property keyWord: The keyword for searches in "%KeyWord%" mode. The value is not case-sensitive.
     */
    public keyWord: string | ros.IResolvable | undefined;

    /**
     * @Property lang: The language type.
     */
    public lang: string | ros.IResolvable | undefined;

    /**
     * @Property line: The line based on which the system queries DNS records.
     */
    public line: string | ros.IResolvable | undefined;

    /**
     * @Property orderBy: The method that is used to sort the returned DNS records.
     */
    public orderBy: string | ros.IResolvable | undefined;

    /**
     * @Property rrKeyWord: The resource record (RR) keyword based on which the system queries DNS records.
     */
    public rrKeyWord: string | ros.IResolvable | undefined;

    /**
     * @Property searchMode: The search mode.
     */
    public searchMode: string | ros.IResolvable | undefined;

    /**
     * @Property status: The status of the DNS records to query.
     */
    public status: string | ros.IResolvable | undefined;

    /**
     * @Property type: The type of the DNS records to query.
     */
    public type: string | ros.IResolvable | undefined;

    /**
     * @Property typeKeyWord: The type keyword based on which the system queries DNS records.
     */
    public typeKeyWord: string | ros.IResolvable | undefined;

    /**
     * @Property valueKeyWord: The record value keyword based on which the system queries DNS records.
     */
    public valueKeyWord: string | ros.IResolvable | undefined;

    /**
     * Create a new `DATASOURCE::DNS::DomainRecords`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDomainRecordsProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDomainRecords.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDomainRecordIds = this.getAtt('DomainRecordIds');
        this.attrDomainRecords = this.getAtt('DomainRecords');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.domainName = props.domainName;
        this.direction = props.direction;
        this.groupId = props.groupId;
        this.keyWord = props.keyWord;
        this.lang = props.lang;
        this.line = props.line;
        this.orderBy = props.orderBy;
        this.rrKeyWord = props.rrKeyWord;
        this.searchMode = props.searchMode;
        this.status = props.status;
        this.type = props.type;
        this.typeKeyWord = props.typeKeyWord;
        this.valueKeyWord = props.valueKeyWord;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            domainName: this.domainName,
            direction: this.direction,
            groupId: this.groupId,
            keyWord: this.keyWord,
            lang: this.lang,
            line: this.line,
            orderBy: this.orderBy,
            rrKeyWord: this.rrKeyWord,
            searchMode: this.searchMode,
            status: this.status,
            type: this.type,
            typeKeyWord: this.typeKeyWord,
            valueKeyWord: this.valueKeyWord,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDomainRecordsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `DATASOURCE::DNS::Domains`
 */
export interface RosDomainsProps {

    /**
     * @Property groupId: The ID of the domain name group. If you do not specify this parameter, all domain names are queried by default.
     */
    readonly groupId?: string | ros.IResolvable;

    /**
     * @Property keyWord: The keyword for searches in "%KeyWord%" mode. The value is not case-sensitive.
     */
    readonly keyWord?: string | ros.IResolvable;

    /**
     * @Property lang: The language type.
     */
    readonly lang?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property searchMode: The search mode.
     */
    readonly searchMode?: string | ros.IResolvable;

    /**
     * @Property starmark: Specifies whether to query the starmark of the domain name.
     */
    readonly starmark?: boolean | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosDomainsProps`
 *
 * @param properties - the TypeScript properties of a `RosDomainsProps`
 *
 * @returns the result of the validation.
 */
function RosDomainsPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('keyWord', ros.validateString)(properties.keyWord));
    errors.collect(ros.propertyValidator('lang', ros.validateString)(properties.lang));
    errors.collect(ros.propertyValidator('starmark', ros.validateBoolean)(properties.starmark));
    if(properties.searchMode && (typeof properties.searchMode) !== 'object') {
        errors.collect(ros.propertyValidator('searchMode', ros.validateAllowedValues)({
          data: properties.searchMode,
          allowedValues: ["LIKE","EXACT"],
        }));
    }
    errors.collect(ros.propertyValidator('searchMode', ros.validateString)(properties.searchMode));
    errors.collect(ros.propertyValidator('groupId', ros.validateString)(properties.groupId));
    return errors.wrap('supplied properties not correct for "RosDomainsProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::DNS::Domains` resource
 *
 * @param properties - the TypeScript properties of a `RosDomainsProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::DNS::Domains` resource.
 */
// @ts-ignore TS6133
function rosDomainsPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDomainsPropsValidator(properties).assertSuccess();
    }
    return {
      GroupId: ros.stringToRosTemplate(properties.groupId),
      KeyWord: ros.stringToRosTemplate(properties.keyWord),
      Lang: ros.stringToRosTemplate(properties.lang),
      ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
      SearchMode: ros.stringToRosTemplate(properties.searchMode),
      Starmark: ros.booleanToRosTemplate(properties.starmark),
    };
}

/**
 * A ROS template type:  `DATASOURCE::DNS::Domains`
 */
export class RosDomains extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::DNS::Domains";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute DomainIds: The list of The DNS domain ids.
     */
    public readonly attrDomainIds: ros.IResolvable;

    /**
     * @Attribute Domains: The information about DNS domains.
     */
    public readonly attrDomains: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property groupId: The ID of the domain name group. If you do not specify this parameter, all domain names are queried by default.
     */
    public groupId: string | ros.IResolvable | undefined;

    /**
     * @Property keyWord: The keyword for searches in "%KeyWord%" mode. The value is not case-sensitive.
     */
    public keyWord: string | ros.IResolvable | undefined;

    /**
     * @Property lang: The language type.
     */
    public lang: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property searchMode: The search mode.
     */
    public searchMode: string | ros.IResolvable | undefined;

    /**
     * @Property starmark: Specifies whether to query the starmark of the domain name.
     */
    public starmark: boolean | ros.IResolvable | undefined;

    /**
     * Create a new `DATASOURCE::DNS::Domains`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDomainsProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDomains.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDomainIds = this.getAtt('DomainIds');
        this.attrDomains = this.getAtt('Domains');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.groupId = props.groupId;
        this.keyWord = props.keyWord;
        this.lang = props.lang;
        this.resourceGroupId = props.resourceGroupId;
        this.searchMode = props.searchMode;
        this.starmark = props.starmark;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            groupId: this.groupId,
            keyWord: this.keyWord,
            lang: this.lang,
            resourceGroupId: this.resourceGroupId,
            searchMode: this.searchMode,
            starmark: this.starmark,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDomainsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
