// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosApis`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apigateway-apis
 */
export interface RosApisProps {

    /**
     * @Property apiId: ID of the specified API.
     */
    readonly apiId?: string | ros.IResolvable;

    /**
     * @Property apiName: API name (fuzzy matching).
     */
    readonly apiName?: string | ros.IResolvable;

    /**
     * @Property catalogId: Catalog number.
     */
    readonly catalogId?: string | ros.IResolvable;

    /**
     * @Property enableTagAuth: Enable label validation.
     */
    readonly enableTagAuth?: boolean | ros.IResolvable;

    /**
     * @Property groupId: ID of the specified group.
     */
    readonly groupId?: string | ros.IResolvable;

    /**
     * @Property visibility: Whether the API is public.
     */
    readonly visibility?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosApisProps`
 *
 * @param properties - the TypeScript properties of a `RosApisProps`
 *
 * @returns the result of the validation.
 */
function RosApisPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('enableTagAuth', ros.validateBoolean)(properties.enableTagAuth));
    errors.collect(ros.propertyValidator('apiName', ros.validateString)(properties.apiName));
    if(properties.visibility && (typeof properties.visibility) !== 'object') {
        errors.collect(ros.propertyValidator('visibility', ros.validateAllowedValues)({
          data: properties.visibility,
          allowedValues: ["PUBLIC","PRIVATE"],
        }));
    }
    errors.collect(ros.propertyValidator('visibility', ros.validateString)(properties.visibility));
    errors.collect(ros.propertyValidator('apiId', ros.validateString)(properties.apiId));
    errors.collect(ros.propertyValidator('catalogId', ros.validateString)(properties.catalogId));
    errors.collect(ros.propertyValidator('groupId', ros.validateString)(properties.groupId));
    return errors.wrap('supplied properties not correct for "RosApisProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::ApiGateway::Apis` resource
 *
 * @param properties - the TypeScript properties of a `RosApisProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::ApiGateway::Apis` resource.
 */
// @ts-ignore TS6133
function rosApisPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosApisPropsValidator(properties).assertSuccess();
    }
    return {
      ApiId: ros.stringToRosTemplate(properties.apiId),
      ApiName: ros.stringToRosTemplate(properties.apiName),
      CatalogId: ros.stringToRosTemplate(properties.catalogId),
      EnableTagAuth: ros.booleanToRosTemplate(properties.enableTagAuth),
      GroupId: ros.stringToRosTemplate(properties.groupId),
      Visibility: ros.stringToRosTemplate(properties.visibility),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ApiGateway::Apis`, which is used to query APIs in API Gateway.
 * @Note This class does not contain additional functions, so it is recommended to use the `Apis` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apigateway-apis
 */
export class RosApis extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ApiGateway::Apis";

    /**
     * @Attribute ApiIds: The list of The ApiGateway api ids.
     */
    public readonly attrApiIds: ros.IResolvable;

    /**
     * @Attribute Apis: The information about ApiGateway apis.
     */
    public readonly attrApis: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property apiId: ID of the specified API.
     */
    public apiId: string | ros.IResolvable | undefined;

    /**
     * @Property apiName: API name (fuzzy matching).
     */
    public apiName: string | ros.IResolvable | undefined;

    /**
     * @Property catalogId: Catalog number.
     */
    public catalogId: string | ros.IResolvable | undefined;

    /**
     * @Property enableTagAuth: Enable label validation.
     */
    public enableTagAuth: boolean | ros.IResolvable | undefined;

    /**
     * @Property groupId: ID of the specified group.
     */
    public groupId: string | ros.IResolvable | undefined;

    /**
     * @Property visibility: Whether the API is public.
     */
    public visibility: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosApisProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosApis.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrApiIds = this.getAtt('ApiIds');
        this.attrApis = this.getAtt('Apis');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.apiId = props.apiId;
        this.apiName = props.apiName;
        this.catalogId = props.catalogId;
        this.enableTagAuth = props.enableTagAuth;
        this.groupId = props.groupId;
        this.visibility = props.visibility;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            apiId: this.apiId,
            apiName: this.apiName,
            catalogId: this.catalogId,
            enableTagAuth: this.enableTagAuth,
            groupId: this.groupId,
            visibility: this.visibility,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosApisPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosApps`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apigateway-apps
 */
export interface RosAppsProps {

    /**
     * @Property appId: Unique ID of the app.
     */
    readonly appId?: string | ros.IResolvable;

    /**
     * @Property appOwner: Alibaba Cloud account ID of the app owner.
     */
    readonly appOwner?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosAppsProps`
 *
 * @param properties - the TypeScript properties of a `RosAppsProps`
 *
 * @returns the result of the validation.
 */
function RosAppsPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('appOwner', ros.validateString)(properties.appOwner));
    errors.collect(ros.propertyValidator('appId', ros.validateString)(properties.appId));
    return errors.wrap('supplied properties not correct for "RosAppsProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::ApiGateway::Apps` resource
 *
 * @param properties - the TypeScript properties of a `RosAppsProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::ApiGateway::Apps` resource.
 */
// @ts-ignore TS6133
function rosAppsPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosAppsPropsValidator(properties).assertSuccess();
    }
    return {
      AppId: ros.stringToRosTemplate(properties.appId),
      AppOwner: ros.stringToRosTemplate(properties.appOwner),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ApiGateway::Apps`, which is used to query applications.
 * @Note This class does not contain additional functions, so it is recommended to use the `Apps` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apigateway-apps
 */
export class RosApps extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ApiGateway::Apps";

    /**
     * @Attribute AppIds: The list of The ApiGateway app ids.
     */
    public readonly attrAppIds: ros.IResolvable;

    /**
     * @Attribute Apps: The information about ApiGateway apps.
     */
    public readonly attrApps: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property appId: Unique ID of the app.
     */
    public appId: string | ros.IResolvable | undefined;

    /**
     * @Property appOwner: Alibaba Cloud account ID of the app owner.
     */
    public appOwner: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAppsProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosApps.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAppIds = this.getAtt('AppIds');
        this.attrApps = this.getAtt('Apps');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.appId = props.appId;
        this.appOwner = props.appOwner;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            appId: this.appId,
            appOwner: this.appOwner,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAppsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosGroups`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apigateway-groups
 */
export interface RosGroupsProps {

    /**
     * @Property groupId: API group ID.
     */
    readonly groupId?: string | ros.IResolvable;

    /**
     * @Property groupName: Specified keyword of the API group name.
     */
    readonly groupName?: string | ros.IResolvable;

    /**
     * @Property instanceId: API Gateway Instance ID.
     */
    readonly instanceId?: string | ros.IResolvable;

    /**
     * @Property sort: Sort.
     */
    readonly sort?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosGroupsProps`
 *
 * @param properties - the TypeScript properties of a `RosGroupsProps`
 *
 * @returns the result of the validation.
 */
function RosGroupsPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('groupName', ros.validateString)(properties.groupName));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    if(properties.sort && (typeof properties.sort) !== 'object') {
        errors.collect(ros.propertyValidator('sort', ros.validateAllowedValues)({
          data: properties.sort,
          allowedValues: ["desc","asc"],
        }));
    }
    errors.collect(ros.propertyValidator('sort', ros.validateString)(properties.sort));
    errors.collect(ros.propertyValidator('groupId', ros.validateString)(properties.groupId));
    return errors.wrap('supplied properties not correct for "RosGroupsProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::ApiGateway::Groups` resource
 *
 * @param properties - the TypeScript properties of a `RosGroupsProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::ApiGateway::Groups` resource.
 */
// @ts-ignore TS6133
function rosGroupsPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosGroupsPropsValidator(properties).assertSuccess();
    }
    return {
      GroupId: ros.stringToRosTemplate(properties.groupId),
      GroupName: ros.stringToRosTemplate(properties.groupName),
      InstanceId: ros.stringToRosTemplate(properties.instanceId),
      Sort: ros.stringToRosTemplate(properties.sort),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ApiGateway::Groups`, which is used to query the details of existing API groups.
 * @Note This class does not contain additional functions, so it is recommended to use the `Groups` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apigateway-groups
 */
export class RosGroups extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ApiGateway::Groups";

    /**
     * @Attribute ApiGroupIds: The list of The ApiGateway group ids.
     */
    public readonly attrApiGroupIds: ros.IResolvable;

    /**
     * @Attribute ApiGroups: The information about ApiGateway groups.
     */
    public readonly attrApiGroups: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property groupId: API group ID.
     */
    public groupId: string | ros.IResolvable | undefined;

    /**
     * @Property groupName: Specified keyword of the API group name.
     */
    public groupName: string | ros.IResolvable | undefined;

    /**
     * @Property instanceId: API Gateway Instance ID.
     */
    public instanceId: string | ros.IResolvable | undefined;

    /**
     * @Property sort: Sort.
     */
    public sort: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosGroupsProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosGroups.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrApiGroupIds = this.getAtt('ApiGroupIds');
        this.attrApiGroups = this.getAtt('ApiGroups');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.groupId = props.groupId;
        this.groupName = props.groupName;
        this.instanceId = props.instanceId;
        this.sort = props.sort;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            groupId: this.groupId,
            groupName: this.groupName,
            instanceId: this.instanceId,
            sort: this.sort,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosGroupsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apigateway-instance
 */
export interface RosInstanceProps {

    /**
     * @Property instanceId: Instance id.
     */
    readonly instanceId: string | ros.IResolvable;
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
    errors.collect(ros.propertyValidator('instanceId', ros.requiredValidator)(properties.instanceId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    return errors.wrap('supplied properties not correct for "RosInstanceProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::ApiGateway::Instance` resource
 *
 * @param properties - the TypeScript properties of a `RosInstanceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::ApiGateway::Instance` resource.
 */
// @ts-ignore TS6133
function rosInstancePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosInstancePropsValidator(properties).assertSuccess();
    }
    return {
      InstanceId: ros.stringToRosTemplate(properties.instanceId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ApiGateway::Instance`, which is used to query the information about an instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `Instance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apigateway-instance
 */
export class RosInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ApiGateway::Instance";

    /**
     * @Attribute AclId: Access control ID.
     */
    public readonly attrAclId: ros.IResolvable;

    /**
     * @Attribute AclName: Access control name.
     */
    public readonly attrAclName: ros.IResolvable;

    /**
     * @Attribute AclStatus: Access control type.
     */
    public readonly attrAclStatus: ros.IResolvable;

    /**
     * @Attribute AclType: Access control type.
     */
    public readonly attrAclType: ros.IResolvable;

    /**
     * @Attribute ClassicEgressAddress: Classic network exit address.
     */
    public readonly attrClassicEgressAddress: ros.IResolvable;

    /**
     * @Attribute CreateTime: Creation time.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute EgressIpv6Enable: Does IPV6 Capability Support.
     */
    public readonly attrEgressIpv6Enable: ros.IResolvable;

    /**
     * @Attribute ExpiredTime: Instance expiration time.
     */
    public readonly attrExpiredTime: ros.IResolvable;

    /**
     * @Attribute HttpsPolicy: Https policy.
     */
    public readonly attrHttpsPolicy: ros.IResolvable;

    /**
     * @Attribute InstanceId: Instance id.
     */
    public readonly attrInstanceId: ros.IResolvable;

    /**
     * @Attribute InstanceName: Instance name.
     */
    public readonly attrInstanceName: ros.IResolvable;

    /**
     * @Attribute InstanceRpsLimit: Instance rps limits.
     */
    public readonly attrInstanceRpsLimit: ros.IResolvable;

    /**
     * @Attribute InstanceSpec: Instance type.
     */
    public readonly attrInstanceSpec: ros.IResolvable;

    /**
     * @Attribute InstanceSpecAttributes: Instance type.
     */
    public readonly attrInstanceSpecAttributes: ros.IResolvable;

    /**
     * @Attribute InstanceType: Instance type.
     */
    public readonly attrInstanceType: ros.IResolvable;

    /**
     * @Attribute InternetEgressAddress: Public network exit address.
     */
    public readonly attrInternetEgressAddress: ros.IResolvable;

    /**
     * @Attribute PaymentType: The payment type of the resource.
     */
    public readonly attrPaymentType: ros.IResolvable;

    /**
     * @Attribute SupportIpv6: Does ipv6 support.
     */
    public readonly attrSupportIpv6: ros.IResolvable;

    /**
     * @Attribute UserVpcId: User's VpcID.
     */
    public readonly attrUserVpcId: ros.IResolvable;

    /**
     * @Attribute UserVswitchId: DescribeInstances.
     */
    public readonly attrUserVswitchId: ros.IResolvable;

    /**
     * @Attribute VipTypeList: Vip type.
     */
    public readonly attrVipTypeList: ros.IResolvable;

    /**
     * @Attribute VpcEgressAddress: Intranet VPC exit network segment.
     */
    public readonly attrVpcEgressAddress: ros.IResolvable;

    /**
     * @Attribute VpcIntranetEnable: Whether Vpc allows authorization.
     */
    public readonly attrVpcIntranetEnable: ros.IResolvable;

    /**
     * @Attribute VpcOwnerId: Vpc licensor ID.
     */
    public readonly attrVpcOwnerId: ros.IResolvable;

    /**
     * @Attribute VpcSlbIntranetEnable: Whether the slb of the Vpc supports.
     */
    public readonly attrVpcSlbIntranetEnable: ros.IResolvable;

    /**
     * @Attribute ZoneId: Zone.
     */
    public readonly attrZoneId: ros.IResolvable;

    /**
     * @Attribute ZoneLocalName: Available area.
     */
    public readonly attrZoneLocalName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property instanceId: Instance id.
     */
    public instanceId: string | ros.IResolvable;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstanceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosInstance.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAclId = this.getAtt('AclId');
        this.attrAclName = this.getAtt('AclName');
        this.attrAclStatus = this.getAtt('AclStatus');
        this.attrAclType = this.getAtt('AclType');
        this.attrClassicEgressAddress = this.getAtt('ClassicEgressAddress');
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrEgressIpv6Enable = this.getAtt('EgressIpv6Enable');
        this.attrExpiredTime = this.getAtt('ExpiredTime');
        this.attrHttpsPolicy = this.getAtt('HttpsPolicy');
        this.attrInstanceId = this.getAtt('InstanceId');
        this.attrInstanceName = this.getAtt('InstanceName');
        this.attrInstanceRpsLimit = this.getAtt('InstanceRpsLimit');
        this.attrInstanceSpec = this.getAtt('InstanceSpec');
        this.attrInstanceSpecAttributes = this.getAtt('InstanceSpecAttributes');
        this.attrInstanceType = this.getAtt('InstanceType');
        this.attrInternetEgressAddress = this.getAtt('InternetEgressAddress');
        this.attrPaymentType = this.getAtt('PaymentType');
        this.attrSupportIpv6 = this.getAtt('SupportIpv6');
        this.attrUserVpcId = this.getAtt('UserVpcId');
        this.attrUserVswitchId = this.getAtt('UserVswitchId');
        this.attrVipTypeList = this.getAtt('VipTypeList');
        this.attrVpcEgressAddress = this.getAtt('VpcEgressAddress');
        this.attrVpcIntranetEnable = this.getAtt('VpcIntranetEnable');
        this.attrVpcOwnerId = this.getAtt('VpcOwnerId');
        this.attrVpcSlbIntranetEnable = this.getAtt('VpcSlbIntranetEnable');
        this.attrZoneId = this.getAtt('ZoneId');
        this.attrZoneLocalName = this.getAtt('ZoneLocalName');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.instanceId = props.instanceId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            instanceId: this.instanceId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosInstancePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosInstances`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apigateway-instances
 */
export interface RosInstancesProps {

    /**
     * @Property instanceId: API Gateway Instance ID.
     */
    readonly instanceId?: string | ros.IResolvable;

    /**
     * @Property language: Language Type.
     */
    readonly language?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosInstancesProps`
 *
 * @param properties - the TypeScript properties of a `RosInstancesProps`
 *
 * @returns the result of the validation.
 */
function RosInstancesPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.language && (typeof properties.language) !== 'object') {
        errors.collect(ros.propertyValidator('language', ros.validateAllowedValues)({
          data: properties.language,
          allowedValues: ["en","zh","ja"],
        }));
    }
    errors.collect(ros.propertyValidator('language', ros.validateString)(properties.language));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    return errors.wrap('supplied properties not correct for "RosInstancesProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::ApiGateway::Instances` resource
 *
 * @param properties - the TypeScript properties of a `RosInstancesProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::ApiGateway::Instances` resource.
 */
// @ts-ignore TS6133
function rosInstancesPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosInstancesPropsValidator(properties).assertSuccess();
    }
    return {
      InstanceId: ros.stringToRosTemplate(properties.instanceId),
      Language: ros.stringToRosTemplate(properties.language),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ApiGateway::Instances`, which is used to query instances.
 * @Note This class does not contain additional functions, so it is recommended to use the `Instances` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apigateway-instances
 */
export class RosInstances extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ApiGateway::Instances";

    /**
     * @Attribute ApiGatewayInstanceIds: The list of The ApiGateway group ids.
     */
    public readonly attrApiGatewayInstanceIds: ros.IResolvable;

    /**
     * @Attribute ApiGatewayInstances: The information about ApiGateway groups.
     */
    public readonly attrApiGatewayInstances: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property instanceId: API Gateway Instance ID.
     */
    public instanceId: string | ros.IResolvable | undefined;

    /**
     * @Property language: Language Type.
     */
    public language: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstancesProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosInstances.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrApiGatewayInstanceIds = this.getAtt('ApiGatewayInstanceIds');
        this.attrApiGatewayInstances = this.getAtt('ApiGatewayInstances');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.instanceId = props.instanceId;
        this.language = props.language;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            instanceId: this.instanceId,
            language: this.language,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosInstancesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
