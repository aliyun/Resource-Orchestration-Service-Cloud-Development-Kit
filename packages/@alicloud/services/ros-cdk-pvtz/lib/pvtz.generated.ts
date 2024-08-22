// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosRule`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pvtz-rule
 */
export interface RosRuleProps {

    /**
     * @Property endpointId: The ID of the endpoint.
     */
    readonly endpointId: string | ros.IResolvable;

    /**
     * @Property forwardIp: The destination external server.
     */
    readonly forwardIp: Array<RosRule.ForwardIpProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property ruleName: The name of the forwarding rule.
     */
    readonly ruleName: string | ros.IResolvable;

    /**
     * @Property type: The type of the forwarding rule. Valid value:
     * OUTBOUND: forwards Domain Name System (DNS) traffic to one or more external IP addresses.
     */
    readonly type: string | ros.IResolvable;

    /**
     * @Property zoneName: The domain name that requires DNS traffic forwarding.
     */
    readonly zoneName: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosRuleProps`
 *
 * @param properties - the TypeScript properties of a `RosRuleProps`
 *
 * @returns the result of the validation.
 */
function RosRulePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('forwardIp', ros.requiredValidator)(properties.forwardIp));
    errors.collect(ros.propertyValidator('forwardIp', ros.listValidator(RosRule_ForwardIpPropertyValidator))(properties.forwardIp));
    errors.collect(ros.propertyValidator('zoneName', ros.requiredValidator)(properties.zoneName));
    errors.collect(ros.propertyValidator('zoneName', ros.validateString)(properties.zoneName));
    errors.collect(ros.propertyValidator('type', ros.requiredValidator)(properties.type));
    if(properties.type && (typeof properties.type) !== 'object') {
        errors.collect(ros.propertyValidator('type', ros.validateAllowedValues)({
          data: properties.type,
          allowedValues: ["OUTBOUND"],
        }));
    }
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('endpointId', ros.requiredValidator)(properties.endpointId));
    errors.collect(ros.propertyValidator('endpointId', ros.validateString)(properties.endpointId));
    errors.collect(ros.propertyValidator('ruleName', ros.requiredValidator)(properties.ruleName));
    errors.collect(ros.propertyValidator('ruleName', ros.validateString)(properties.ruleName));
    return errors.wrap('supplied properties not correct for "RosRuleProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::PVTZ::Rule` resource
 *
 * @param properties - the TypeScript properties of a `RosRuleProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::PVTZ::Rule` resource.
 */
// @ts-ignore TS6133
function rosRulePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosRulePropsValidator(properties).assertSuccess();
    }
    return {
      'EndpointId': ros.stringToRosTemplate(properties.endpointId),
      'ForwardIp': ros.listMapper(rosRuleForwardIpPropertyToRosTemplate)(properties.forwardIp),
      'RuleName': ros.stringToRosTemplate(properties.ruleName),
      'Type': ros.stringToRosTemplate(properties.type),
      'ZoneName': ros.stringToRosTemplate(properties.zoneName),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::PVTZ::Rule`, which is used to add a forwarding rule.
 * @Note This class does not contain additional functions, so it is recommended to use the `Rule` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pvtz-rule
 */
export class RosRule extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::PVTZ::Rule";

    /**
     * @Attribute CreateTime: The timestamp when the forwarding rule was created.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute EndpointId: The ID of the endpoint.
     */
    public readonly attrEndpointId: ros.IResolvable;

    /**
     * @Attribute EndpointName: The name of the endpoint.
     */
    public readonly attrEndpointName: ros.IResolvable;

    /**
     * @Attribute ForwardIp: The information about each destination external server.
     */
    public readonly attrForwardIp: ros.IResolvable;

    /**
     * @Attribute RuleName: The name of the forwarding rule.
     */
    public readonly attrRuleName: ros.IResolvable;

    /**
     * @Attribute Type: The type of the forwarding rule.
     */
    public readonly attrType: ros.IResolvable;

    /**
     * @Attribute Vpcs: The information about each virtual private cloud (VPC) that is associated with the forwarding rule.
     */
    public readonly attrVpcs: ros.IResolvable;

    /**
     * @Attribute ZoneName: The domain name that requires Domain Name System (DNS) traffic forwarding.
     */
    public readonly attrZoneName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property endpointId: The ID of the endpoint.
     */
    public endpointId: string | ros.IResolvable;

    /**
     * @Property forwardIp: The destination external server.
     */
    public forwardIp: Array<RosRule.ForwardIpProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property ruleName: The name of the forwarding rule.
     */
    public ruleName: string | ros.IResolvable;

    /**
     * @Property type: The type of the forwarding rule. Valid value:
     * OUTBOUND: forwards Domain Name System (DNS) traffic to one or more external IP addresses.
     */
    public type: string | ros.IResolvable;

    /**
     * @Property zoneName: The domain name that requires DNS traffic forwarding.
     */
    public zoneName: string | ros.IResolvable;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosRuleProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosRule.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrEndpointId = this.getAtt('EndpointId');
        this.attrEndpointName = this.getAtt('EndpointName');
        this.attrForwardIp = this.getAtt('ForwardIp');
        this.attrRuleName = this.getAtt('RuleName');
        this.attrType = this.getAtt('Type');
        this.attrVpcs = this.getAtt('Vpcs');
        this.attrZoneName = this.getAtt('ZoneName');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.endpointId = props.endpointId;
        this.forwardIp = props.forwardIp;
        this.ruleName = props.ruleName;
        this.type = props.type;
        this.zoneName = props.zoneName;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            endpointId: this.endpointId,
            forwardIp: this.forwardIp,
            ruleName: this.ruleName,
            type: this.type,
            zoneName: this.zoneName,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosRulePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosRule {
    /**
     * @stability external
     */
    export interface ForwardIpProperty {
        /**
         * @Property ip: The IP address of the destination external server.
         */
        readonly ip: string | ros.IResolvable;
        /**
         * @Property port: The port number of the destination external server.
         */
        readonly port: number | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `ForwardIpProperty`
 *
 * @param properties - the TypeScript properties of a `ForwardIpProperty`
 *
 * @returns the result of the validation.
 */
function RosRule_ForwardIpPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('ip', ros.requiredValidator)(properties.ip));
    errors.collect(ros.propertyValidator('ip', ros.validateString)(properties.ip));
    errors.collect(ros.propertyValidator('port', ros.requiredValidator)(properties.port));
    errors.collect(ros.propertyValidator('port', ros.validateNumber)(properties.port));
    return errors.wrap('supplied properties not correct for "ForwardIpProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::PVTZ::Rule.ForwardIp` resource
 *
 * @param properties - the TypeScript properties of a `ForwardIpProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::PVTZ::Rule.ForwardIp` resource.
 */
// @ts-ignore TS6133
function rosRuleForwardIpPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosRule_ForwardIpPropertyValidator(properties).assertSuccess();
    return {
      'Ip': ros.stringToRosTemplate(properties.ip),
      'Port': ros.numberToRosTemplate(properties.port),
    };
}

/**
 * Properties for defining a `RosUserVpcAuthorization`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pvtz-uservpcauthorization
 */
export interface RosUserVpcAuthorizationProps {

    /**
     * @Property authorizedUserId: The account ID of the user who authorizes the resource.
     */
    readonly authorizedUserId: string | ros.IResolvable;

    /**
     * @Property authChannel: Authorization channel. Valid values:
     * AUTH_CODE: Verification code authorization, to verify whether the verification code passed in by AuthCode is correct.
     * RESOURCE_DIRECTORY: Resource directory authorization, verify whether the AuthorizedUserId and the current account have resource directory credit.When it is empty, it is the same as AUTH_CODE, that is, verification code authorization.
     */
    readonly authChannel?: string | ros.IResolvable;

    /**
     * @Property authCode: Verification code, if AuthChannel takes "AUTH_CODE" or is empty, it is mandatory.
     */
    readonly authCode?: string | ros.IResolvable;

    /**
     * @Property authType: Authorization type.
     */
    readonly authType?: string | ros.IResolvable;

    /**
     * @Property ignoreDeletionForbidden: Whether to ignore following deletion forbidden errors when deleting:- UserAuth.DeleteForbidden.ZoneVpcExists
     */
    readonly ignoreDeletionForbidden?: boolean | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosUserVpcAuthorizationProps`
 *
 * @param properties - the TypeScript properties of a `RosUserVpcAuthorizationProps`
 *
 * @returns the result of the validation.
 */
function RosUserVpcAuthorizationPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('authCode', ros.validateString)(properties.authCode));
    errors.collect(ros.propertyValidator('authChannel', ros.validateString)(properties.authChannel));
    errors.collect(ros.propertyValidator('authorizedUserId', ros.requiredValidator)(properties.authorizedUserId));
    errors.collect(ros.propertyValidator('authorizedUserId', ros.validateString)(properties.authorizedUserId));
    errors.collect(ros.propertyValidator('authType', ros.validateString)(properties.authType));
    errors.collect(ros.propertyValidator('ignoreDeletionForbidden', ros.validateBoolean)(properties.ignoreDeletionForbidden));
    return errors.wrap('supplied properties not correct for "RosUserVpcAuthorizationProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::PVTZ::UserVpcAuthorization` resource
 *
 * @param properties - the TypeScript properties of a `RosUserVpcAuthorizationProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::PVTZ::UserVpcAuthorization` resource.
 */
// @ts-ignore TS6133
function rosUserVpcAuthorizationPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosUserVpcAuthorizationPropsValidator(properties).assertSuccess();
    }
    return {
      'AuthorizedUserId': ros.stringToRosTemplate(properties.authorizedUserId),
      'AuthChannel': ros.stringToRosTemplate(properties.authChannel),
      'AuthCode': ros.stringToRosTemplate(properties.authCode),
      'AuthType': ros.stringToRosTemplate(properties.authType),
      'IgnoreDeletionForbidden': ros.booleanToRosTemplate(properties.ignoreDeletionForbidden),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::PVTZ::UserVpcAuthorization`, which is used to associate virtual private clouds (VPCs) across accounts.
 * @Note This class does not contain additional functions, so it is recommended to use the `UserVpcAuthorization` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pvtz-uservpcauthorization
 */
export class RosUserVpcAuthorization extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::PVTZ::UserVpcAuthorization";

    /**
     * @Attribute AuthType: Authorization type.
     */
    public readonly attrAuthType: ros.IResolvable;

    /**
     * @Attribute AuthorizedUserId: The account ID of the user who authorizes the resource.
     */
    public readonly attrAuthorizedUserId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property authorizedUserId: The account ID of the user who authorizes the resource.
     */
    public authorizedUserId: string | ros.IResolvable;

    /**
     * @Property authChannel: Authorization channel. Valid values:
     * AUTH_CODE: Verification code authorization, to verify whether the verification code passed in by AuthCode is correct.
     * RESOURCE_DIRECTORY: Resource directory authorization, verify whether the AuthorizedUserId and the current account have resource directory credit.When it is empty, it is the same as AUTH_CODE, that is, verification code authorization.
     */
    public authChannel: string | ros.IResolvable | undefined;

    /**
     * @Property authCode: Verification code, if AuthChannel takes "AUTH_CODE" or is empty, it is mandatory.
     */
    public authCode: string | ros.IResolvable | undefined;

    /**
     * @Property authType: Authorization type.
     */
    public authType: string | ros.IResolvable | undefined;

    /**
     * @Property ignoreDeletionForbidden: Whether to ignore following deletion forbidden errors when deleting:- UserAuth.DeleteForbidden.ZoneVpcExists
     */
    public ignoreDeletionForbidden: boolean | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosUserVpcAuthorizationProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosUserVpcAuthorization.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAuthType = this.getAtt('AuthType');
        this.attrAuthorizedUserId = this.getAtt('AuthorizedUserId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.authorizedUserId = props.authorizedUserId;
        this.authChannel = props.authChannel;
        this.authCode = props.authCode;
        this.authType = props.authType;
        this.ignoreDeletionForbidden = props.ignoreDeletionForbidden;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            authorizedUserId: this.authorizedUserId,
            authChannel: this.authChannel,
            authCode: this.authCode,
            authType: this.authType,
            ignoreDeletionForbidden: this.ignoreDeletionForbidden,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosUserVpcAuthorizationPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosZone`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pvtz-zone
 */
export interface RosZoneProps {

    /**
     * @Property zoneName: Zone name
     */
    readonly zoneName: string | ros.IResolvable;

    /**
     * @Property ignoredStackTagKeys: Stack tag keys to ignore
     */
    readonly ignoredStackTagKeys?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property proxyPattern: ZONE: completely hijack the entire zone.
     * RECORD: Incomplete hijacking, recursive resolution agent.
     * Default to ZONE.
     */
    readonly proxyPattern?: string | ros.IResolvable;

    /**
     * @Property remark: 50 characters at most. It can only contain numbers, Chinese, English and special characters: "_-,.，。".
     */
    readonly remark?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosZone.TagsProperty[];

    /**
     * @Property zoneTag: Zone label. It will be ignored when ZoneType is AUTH_ZONE.
     */
    readonly zoneTag?: string | ros.IResolvable;

    /**
     * @Property zoneType: Zone type. For instance: AUTH_ZONE, CLOUD_PRODUCT_ZONE.
     */
    readonly zoneType?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosZoneProps`
 *
 * @param properties - the TypeScript properties of a `RosZoneProps`
 *
 * @returns the result of the validation.
 */
function RosZonePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('zoneName', ros.requiredValidator)(properties.zoneName));
    errors.collect(ros.propertyValidator('zoneName', ros.validateString)(properties.zoneName));
    if(properties.ignoredStackTagKeys && (Array.isArray(properties.ignoredStackTagKeys) || (typeof properties.ignoredStackTagKeys) === 'string')) {
        errors.collect(ros.propertyValidator('ignoredStackTagKeys', ros.validateLength)({
            data: properties.ignoredStackTagKeys.length,
            min: 0,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('ignoredStackTagKeys', ros.listValidator(ros.validateString))(properties.ignoredStackTagKeys));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    if(properties.proxyPattern && (typeof properties.proxyPattern) !== 'object') {
        errors.collect(ros.propertyValidator('proxyPattern', ros.validateAllowedValues)({
          data: properties.proxyPattern,
          allowedValues: ["RECORD","ZONE"],
        }));
    }
    errors.collect(ros.propertyValidator('proxyPattern', ros.validateString)(properties.proxyPattern));
    errors.collect(ros.propertyValidator('zoneTag', ros.validateString)(properties.zoneTag));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosZone_TagsPropertyValidator))(properties.tags));
    if(properties.remark && (Array.isArray(properties.remark) || (typeof properties.remark) === 'string')) {
        errors.collect(ros.propertyValidator('remark', ros.validateLength)({
            data: properties.remark.length,
            min: undefined,
            max: 50,
          }));
    }
    if(properties.remark && (typeof properties.remark) !== 'object') {
        errors.collect(ros.propertyValidator('remark', ros.validateAllowedPattern)({
          data: properties.remark,
          reg: /^[-_,.\uff0c\u3002a-zA-Z0-9\u4e00-\u9fa5]{0,50}$/
        }));
    }
    errors.collect(ros.propertyValidator('remark', ros.validateString)(properties.remark));
    errors.collect(ros.propertyValidator('zoneType', ros.validateString)(properties.zoneType));
    return errors.wrap('supplied properties not correct for "RosZoneProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::PVTZ::Zone` resource
 *
 * @param properties - the TypeScript properties of a `RosZoneProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::PVTZ::Zone` resource.
 */
// @ts-ignore TS6133
function rosZonePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosZonePropsValidator(properties).assertSuccess();
    }
    return {
      'ZoneName': ros.stringToRosTemplate(properties.zoneName),
      'IgnoredStackTagKeys': ros.listMapper(ros.stringToRosTemplate)(properties.ignoredStackTagKeys),
      'ProxyPattern': ros.stringToRosTemplate(properties.proxyPattern),
      'Remark': ros.stringToRosTemplate(properties.remark),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
      'Tags': ros.listMapper(rosZoneTagsPropertyToRosTemplate)(properties.tags),
      'ZoneTag': ros.stringToRosTemplate(properties.zoneTag),
      'ZoneType': ros.stringToRosTemplate(properties.zoneType),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::PVTZ::Zone`, which is used to create a private zone.
 * @Note This class does not contain additional functions, so it is recommended to use the `Zone` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pvtz-zone
 */
export class RosZone extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::PVTZ::Zone";

    /**
     * @Attribute ZoneId: Zone ID.
     */
    public readonly attrZoneId: ros.IResolvable;

    /**
     * @Attribute ZoneName: Zone name.
     */
    public readonly attrZoneName: ros.IResolvable;

    /**
     * @Attribute ZoneTag: Zone label.
     */
    public readonly attrZoneTag: ros.IResolvable;

    /**
     * @Attribute ZoneType: Zone type.
     */
    public readonly attrZoneType: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property zoneName: Zone name
     */
    public zoneName: string | ros.IResolvable;

    /**
     * @Property ignoredStackTagKeys: Stack tag keys to ignore
     */
    public ignoredStackTagKeys: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property proxyPattern: ZONE: completely hijack the entire zone.
     * RECORD: Incomplete hijacking, recursive resolution agent.
     * Default to ZONE.
     */
    public proxyPattern: string | ros.IResolvable | undefined;

    /**
     * @Property remark: 50 characters at most. It can only contain numbers, Chinese, English and special characters: "_-,.，。".
     */
    public remark: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: Resource group id.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    public tags: RosZone.TagsProperty[] | undefined;

    /**
     * @Property zoneTag: Zone label. It will be ignored when ZoneType is AUTH_ZONE.
     */
    public zoneTag: string | ros.IResolvable | undefined;

    /**
     * @Property zoneType: Zone type. For instance: AUTH_ZONE, CLOUD_PRODUCT_ZONE.
     */
    public zoneType: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosZoneProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosZone.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrZoneId = this.getAtt('ZoneId');
        this.attrZoneName = this.getAtt('ZoneName');
        this.attrZoneTag = this.getAtt('ZoneTag');
        this.attrZoneType = this.getAtt('ZoneType');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.zoneName = props.zoneName;
        this.ignoredStackTagKeys = props.ignoredStackTagKeys;
        this.proxyPattern = props.proxyPattern;
        this.remark = props.remark;
        this.resourceGroupId = props.resourceGroupId;
        this.tags = props.tags;
        this.zoneTag = props.zoneTag;
        this.zoneType = props.zoneType;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            zoneName: this.zoneName,
            ignoredStackTagKeys: this.ignoredStackTagKeys,
            proxyPattern: this.proxyPattern,
            remark: this.remark,
            resourceGroupId: this.resourceGroupId,
            tags: this.tags,
            zoneTag: this.zoneTag,
            zoneType: this.zoneType,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosZonePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosZone {
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
function RosZone_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::PVTZ::Zone.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::PVTZ::Zone.Tags` resource.
 */
// @ts-ignore TS6133
function rosZoneTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosZone_TagsPropertyValidator(properties).assertSuccess();
    return {
      'Value': ros.stringToRosTemplate(properties.value),
      'Key': ros.stringToRosTemplate(properties.key),
    };
}

/**
 * Properties for defining a `RosZoneRecord`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pvtz-zonerecord
 */
export interface RosZoneRecordProps {

    /**
     * @Property rr: Host record, if you want to resolve @.exmaple.com, the host record should fill in "@" instead of empty
     */
    readonly rr: string | ros.IResolvable;

    /**
     * @Property status: Allowed values: [ENABLE, DISABLE]
     */
    readonly status: string | ros.IResolvable;

    /**
     * @Property type: Analyze record type, currently only supports A, AAAA, CNAME, TXT, MX, PTR, SRV
     */
    readonly type: string | ros.IResolvable;

    /**
     * @Property value: Record value
     */
    readonly value: string | ros.IResolvable;

    /**
     * @Property zoneId: Zone Id
     */
    readonly zoneId: string | ros.IResolvable;

    /**
     * @Property priority: MX record priority, value range [1,99]. Default to 10.
     */
    readonly priority?: number | ros.IResolvable;

    /**
     * @Property ttl: Survival time, default is 60
     */
    readonly ttl?: number | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosZoneRecordProps`
 *
 * @param properties - the TypeScript properties of a `RosZoneRecordProps`
 *
 * @returns the result of the validation.
 */
function RosZoneRecordPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('status', ros.requiredValidator)(properties.status));
    if(properties.status && (typeof properties.status) !== 'object') {
        errors.collect(ros.propertyValidator('status', ros.validateAllowedValues)({
          data: properties.status,
          allowedValues: ["DISABLE","ENABLE"],
        }));
    }
    errors.collect(ros.propertyValidator('status', ros.validateString)(properties.status));
    errors.collect(ros.propertyValidator('rr', ros.requiredValidator)(properties.rr));
    errors.collect(ros.propertyValidator('rr', ros.validateString)(properties.rr));
    errors.collect(ros.propertyValidator('type', ros.requiredValidator)(properties.type));
    if(properties.type && (typeof properties.type) !== 'object') {
        errors.collect(ros.propertyValidator('type', ros.validateAllowedValues)({
          data: properties.type,
          allowedValues: ["A","AAAA","CNAME","TXT","MX","PTR","SRV"],
        }));
    }
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('zoneId', ros.requiredValidator)(properties.zoneId));
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
    if(properties.priority && (typeof properties.priority) !== 'object') {
        errors.collect(ros.propertyValidator('priority', ros.validateRange)({
            data: properties.priority,
            min: 1,
            max: 99,
          }));
    }
    errors.collect(ros.propertyValidator('priority', ros.validateNumber)(properties.priority));
    errors.collect(ros.propertyValidator('value', ros.requiredValidator)(properties.value));
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('ttl', ros.validateNumber)(properties.ttl));
    return errors.wrap('supplied properties not correct for "RosZoneRecordProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::PVTZ::ZoneRecord` resource
 *
 * @param properties - the TypeScript properties of a `RosZoneRecordProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::PVTZ::ZoneRecord` resource.
 */
// @ts-ignore TS6133
function rosZoneRecordPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosZoneRecordPropsValidator(properties).assertSuccess();
    }
    return {
      'Rr': ros.stringToRosTemplate(properties.rr),
      'Status': ros.stringToRosTemplate(properties.status),
      'Type': ros.stringToRosTemplate(properties.type),
      'Value': ros.stringToRosTemplate(properties.value),
      'ZoneId': ros.stringToRosTemplate(properties.zoneId),
      'Priority': ros.numberToRosTemplate(properties.priority),
      'Ttl': ros.numberToRosTemplate(properties.ttl),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::PVTZ::ZoneRecord`, which is used to add a Domain Name Service (DNS) record to a private zone.
 * @Note This class does not contain additional functions, so it is recommended to use the `ZoneRecord` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pvtz-zonerecord
 */
export class RosZoneRecord extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::PVTZ::ZoneRecord";

    /**
     * @Attribute Record: Record data.
     */
    public readonly attrRecord: ros.IResolvable;

    /**
     * @Attribute RecordId: Parsing record Id
     */
    public readonly attrRecordId: ros.IResolvable;

    /**
     * @Attribute ZoneId: Zone ID.
     */
    public readonly attrZoneId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property rr: Host record, if you want to resolve @.exmaple.com, the host record should fill in "@" instead of empty
     */
    public rr: string | ros.IResolvable;

    /**
     * @Property status: Allowed values: [ENABLE, DISABLE]
     */
    public status: string | ros.IResolvable;

    /**
     * @Property type: Analyze record type, currently only supports A, AAAA, CNAME, TXT, MX, PTR, SRV
     */
    public type: string | ros.IResolvable;

    /**
     * @Property value: Record value
     */
    public value: string | ros.IResolvable;

    /**
     * @Property zoneId: Zone Id
     */
    public zoneId: string | ros.IResolvable;

    /**
     * @Property priority: MX record priority, value range [1,99]. Default to 10.
     */
    public priority: number | ros.IResolvable | undefined;

    /**
     * @Property ttl: Survival time, default is 60
     */
    public ttl: number | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosZoneRecordProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosZoneRecord.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrRecord = this.getAtt('Record');
        this.attrRecordId = this.getAtt('RecordId');
        this.attrZoneId = this.getAtt('ZoneId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.rr = props.rr;
        this.status = props.status;
        this.type = props.type;
        this.value = props.value;
        this.zoneId = props.zoneId;
        this.priority = props.priority;
        this.ttl = props.ttl;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            rr: this.rr,
            status: this.status,
            type: this.type,
            value: this.value,
            zoneId: this.zoneId,
            priority: this.priority,
            ttl: this.ttl,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosZoneRecordPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosZoneVpcBinder`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pvtz-zonevpcbinder
 */
export interface RosZoneVpcBinderProps {

    /**
     * @Property vpcs:
     */
    readonly vpcs: Array<RosZoneVpcBinder.VpcsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property zoneId: Zone Id
     */
    readonly zoneId: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosZoneVpcBinderProps`
 *
 * @param properties - the TypeScript properties of a `RosZoneVpcBinderProps`
 *
 * @returns the result of the validation.
 */
function RosZoneVpcBinderPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('vpcs', ros.requiredValidator)(properties.vpcs));
    if(properties.vpcs && (Array.isArray(properties.vpcs) || (typeof properties.vpcs) === 'string')) {
        errors.collect(ros.propertyValidator('vpcs', ros.validateLength)({
            data: properties.vpcs.length,
            min: 0,
            max: 10,
          }));
    }
    errors.collect(ros.propertyValidator('vpcs', ros.listValidator(RosZoneVpcBinder_VpcsPropertyValidator))(properties.vpcs));
    errors.collect(ros.propertyValidator('zoneId', ros.requiredValidator)(properties.zoneId));
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
    return errors.wrap('supplied properties not correct for "RosZoneVpcBinderProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::PVTZ::ZoneVpcBinder` resource
 *
 * @param properties - the TypeScript properties of a `RosZoneVpcBinderProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::PVTZ::ZoneVpcBinder` resource.
 */
// @ts-ignore TS6133
function rosZoneVpcBinderPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosZoneVpcBinderPropsValidator(properties).assertSuccess();
    }
    return {
      'Vpcs': ros.listMapper(rosZoneVpcBinderVpcsPropertyToRosTemplate)(properties.vpcs),
      'ZoneId': ros.stringToRosTemplate(properties.zoneId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::PVTZ::ZoneVpcBinder`, which is used to bind a private zone to or unbind a private zone from a virtual private cloud (VPC).
 * @Note This class does not contain additional functions, so it is recommended to use the `ZoneVpcBinder` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pvtz-zonevpcbinder
 */
export class RosZoneVpcBinder extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::PVTZ::ZoneVpcBinder";

    /**
     * @Attribute Vpcs: Vpc list
     */
    public readonly attrVpcs: ros.IResolvable;

    /**
     * @Attribute ZoneId: Zone Id
     */
    public readonly attrZoneId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property vpcs:
     */
    public vpcs: Array<RosZoneVpcBinder.VpcsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property zoneId: Zone Id
     */
    public zoneId: string | ros.IResolvable;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosZoneVpcBinderProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosZoneVpcBinder.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrVpcs = this.getAtt('Vpcs');
        this.attrZoneId = this.getAtt('ZoneId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.vpcs = props.vpcs;
        this.zoneId = props.zoneId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            vpcs: this.vpcs,
            zoneId: this.zoneId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosZoneVpcBinderPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosZoneVpcBinder {
    /**
     * @stability external
     */
    export interface VpcsProperty {
        /**
         * @Property vpcId: Vpcs attribute, vpc Id
         */
        readonly vpcId: string | ros.IResolvable;
        /**
         * @Property regionId: Vpcs attribute, region Id
         */
        readonly regionId: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `VpcsProperty`
 *
 * @param properties - the TypeScript properties of a `VpcsProperty`
 *
 * @returns the result of the validation.
 */
function RosZoneVpcBinder_VpcsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('vpcId', ros.requiredValidator)(properties.vpcId));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('regionId', ros.requiredValidator)(properties.regionId));
    errors.collect(ros.propertyValidator('regionId', ros.validateString)(properties.regionId));
    return errors.wrap('supplied properties not correct for "VpcsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::PVTZ::ZoneVpcBinder.Vpcs` resource
 *
 * @param properties - the TypeScript properties of a `VpcsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::PVTZ::ZoneVpcBinder.Vpcs` resource.
 */
// @ts-ignore TS6133
function rosZoneVpcBinderVpcsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosZoneVpcBinder_VpcsPropertyValidator(properties).assertSuccess();
    return {
      'VpcId': ros.stringToRosTemplate(properties.vpcId),
      'RegionId': ros.stringToRosTemplate(properties.regionId),
    };
}
