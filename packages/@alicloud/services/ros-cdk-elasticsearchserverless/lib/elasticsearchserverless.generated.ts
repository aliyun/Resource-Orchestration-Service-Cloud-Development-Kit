// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosApp`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-elasticsearchserverless-app
 */
export interface RosAppProps {

    /**
     * @Property appName: The name of the elastic search serverless version app.
     */
    readonly appName: string | ros.IResolvable;

    /**
     * @Property authentication: The authentication of the app. Currently only supports specifying passwords for initial users
     */
    readonly authentication: RosApp.AuthenticationProperty | ros.IResolvable;

    /**
     * @Property quotaInfo: The quota info of the app.
     */
    readonly quotaInfo: RosApp.QuotaInfoProperty | ros.IResolvable;

    /**
     * @Property appVersion: The version of the app.
     */
    readonly appVersion?: string | ros.IResolvable;

    /**
     * @Property description: The description of the app.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property logProConfiguration: The log pro configuration of the app.
     */
    readonly logProConfiguration?: RosApp.LogProConfigurationProperty | ros.IResolvable;

    /**
     * @Property network: The public network of the app.
     */
    readonly network?: Array<RosApp.NetworkProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property privateNetwork: The private network of the app.
     */
    readonly privateNetwork?: Array<RosApp.PrivateNetworkProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property scenario: The scenario of the app.
     */
    readonly scenario?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosAppProps`
 *
 * @param properties - the TypeScript properties of a `RosAppProps`
 *
 * @returns the result of the validation.
 */
function RosAppPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.appVersion && (typeof properties.appVersion) !== 'object') {
        errors.collect(ros.propertyValidator('appVersion', ros.validateAllowedValues)({
          data: properties.appVersion,
          allowedValues: ["7.10","8.17"],
        }));
    }
    errors.collect(ros.propertyValidator('appVersion', ros.validateString)(properties.appVersion));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('authentication', ros.requiredValidator)(properties.authentication));
    errors.collect(ros.propertyValidator('authentication', RosApp_AuthenticationPropertyValidator)(properties.authentication));
    errors.collect(ros.propertyValidator('quotaInfo', ros.requiredValidator)(properties.quotaInfo));
    errors.collect(ros.propertyValidator('quotaInfo', RosApp_QuotaInfoPropertyValidator)(properties.quotaInfo));
    errors.collect(ros.propertyValidator('network', ros.listValidator(RosApp_NetworkPropertyValidator))(properties.network));
    errors.collect(ros.propertyValidator('logProConfiguration', RosApp_LogProConfigurationPropertyValidator)(properties.logProConfiguration));
    errors.collect(ros.propertyValidator('privateNetwork', ros.listValidator(RosApp_PrivateNetworkPropertyValidator))(properties.privateNetwork));
    if(properties.scenario && (typeof properties.scenario) !== 'object') {
        errors.collect(ros.propertyValidator('scenario', ros.validateAllowedValues)({
          data: properties.scenario,
          allowedValues: ["SEARCH","LOG_PRO","GENERAL"],
        }));
    }
    errors.collect(ros.propertyValidator('scenario', ros.validateString)(properties.scenario));
    errors.collect(ros.propertyValidator('appName', ros.requiredValidator)(properties.appName));
    errors.collect(ros.propertyValidator('appName', ros.validateString)(properties.appName));
    return errors.wrap('supplied properties not correct for "RosAppProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ElasticSearchServerless::App` resource
 *
 * @param properties - the TypeScript properties of a `RosAppProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ElasticSearchServerless::App` resource.
 */
// @ts-ignore TS6133
function rosAppPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosAppPropsValidator(properties).assertSuccess();
    }
    return {
      'AppName': ros.stringToRosTemplate(properties.appName),
      'Authentication': rosAppAuthenticationPropertyToRosTemplate(properties.authentication),
      'QuotaInfo': rosAppQuotaInfoPropertyToRosTemplate(properties.quotaInfo),
      'AppVersion': ros.stringToRosTemplate(properties.appVersion),
      'Description': ros.stringToRosTemplate(properties.description),
      'LogProConfiguration': rosAppLogProConfigurationPropertyToRosTemplate(properties.logProConfiguration),
      'Network': ros.listMapper(rosAppNetworkPropertyToRosTemplate)(properties.network),
      'PrivateNetwork': ros.listMapper(rosAppPrivateNetworkPropertyToRosTemplate)(properties.privateNetwork),
      'Scenario': ros.stringToRosTemplate(properties.scenario),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ElasticSearchServerless::App`, which is used to create an Elasticsearch serverless application.
 * @Note This class does not contain additional functions, so it is recommended to use the `App` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-elasticsearchserverless-app
 */
export class RosApp extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ElasticSearchServerless::App";

    /**
     * @Attribute InstanceId: The Id of the ElasticSearch serverless instance.
     */
    public readonly attrInstanceId: ros.IResolvable;

    /**
     * @Attribute PrivateESDomain: The private network domain of the app.
     */
    public readonly attrPrivateEsDomain: ros.IResolvable;

    /**
     * @Attribute PrivateKibanaDomain: The private network kibana domain of the app.
     */
    public readonly attrPrivateKibanaDomain: ros.IResolvable;

    /**
     * @Attribute PublicESDomain: The public network domain of the app.
     */
    public readonly attrPublicEsDomain: ros.IResolvable;

    /**
     * @Attribute PublicKibanaDomain: The public network kibana domain of the app.
     */
    public readonly attrPublicKibanaDomain: ros.IResolvable;

    /**
     * @Attribute Username: The username of the app.
     */
    public readonly attrUsername: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property appName: The name of the elastic search serverless version app.
     */
    public appName: string | ros.IResolvable;

    /**
     * @Property authentication: The authentication of the app. Currently only supports specifying passwords for initial users
     */
    public authentication: RosApp.AuthenticationProperty | ros.IResolvable;

    /**
     * @Property quotaInfo: The quota info of the app.
     */
    public quotaInfo: RosApp.QuotaInfoProperty | ros.IResolvable;

    /**
     * @Property appVersion: The version of the app.
     */
    public appVersion: string | ros.IResolvable | undefined;

    /**
     * @Property description: The description of the app.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property logProConfiguration: The log pro configuration of the app.
     */
    public logProConfiguration: RosApp.LogProConfigurationProperty | ros.IResolvable | undefined;

    /**
     * @Property network: The public network of the app.
     */
    public network: Array<RosApp.NetworkProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property privateNetwork: The private network of the app.
     */
    public privateNetwork: Array<RosApp.PrivateNetworkProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property scenario: The scenario of the app.
     */
    public scenario: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAppProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosApp.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrInstanceId = this.getAtt('InstanceId');
        this.attrPrivateEsDomain = this.getAtt('PrivateESDomain');
        this.attrPrivateKibanaDomain = this.getAtt('PrivateKibanaDomain');
        this.attrPublicEsDomain = this.getAtt('PublicESDomain');
        this.attrPublicKibanaDomain = this.getAtt('PublicKibanaDomain');
        this.attrUsername = this.getAtt('Username');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.appName = props.appName;
        this.authentication = props.authentication;
        this.quotaInfo = props.quotaInfo;
        this.appVersion = props.appVersion;
        this.description = props.description;
        this.logProConfiguration = props.logProConfiguration;
        this.network = props.network;
        this.privateNetwork = props.privateNetwork;
        this.scenario = props.scenario;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            appName: this.appName,
            authentication: this.authentication,
            quotaInfo: this.quotaInfo,
            appVersion: this.appVersion,
            description: this.description,
            logProConfiguration: this.logProConfiguration,
            network: this.network,
            privateNetwork: this.privateNetwork,
            scenario: this.scenario,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAppPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosApp {
    /**
     * @stability external
     */
    export interface AuthenticationProperty {
        /**
         * @Property basicAuth: The basic authentication of the app.
         */
        readonly basicAuth: Array<RosApp.BasicAuthProperty | ros.IResolvable> | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `AuthenticationProperty`
 *
 * @param properties - the TypeScript properties of a `AuthenticationProperty`
 *
 * @returns the result of the validation.
 */
function RosApp_AuthenticationPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('basicAuth', ros.requiredValidator)(properties.basicAuth));
    errors.collect(ros.propertyValidator('basicAuth', ros.listValidator(RosApp_BasicAuthPropertyValidator))(properties.basicAuth));
    return errors.wrap('supplied properties not correct for "AuthenticationProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ElasticSearchServerless::App.Authentication` resource
 *
 * @param properties - the TypeScript properties of a `AuthenticationProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ElasticSearchServerless::App.Authentication` resource.
 */
// @ts-ignore TS6133
function rosAppAuthenticationPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosApp_AuthenticationPropertyValidator(properties).assertSuccess();
    return {
      'BasicAuth': ros.listMapper(rosAppBasicAuthPropertyToRosTemplate)(properties.basicAuth),
    };
}

export namespace RosApp {
    /**
     * @stability external
     */
    export interface BasicAuthProperty {
        /**
         * @Property password: The password of the user.
         */
        readonly password: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `BasicAuthProperty`
 *
 * @param properties - the TypeScript properties of a `BasicAuthProperty`
 *
 * @returns the result of the validation.
 */
function RosApp_BasicAuthPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('password', ros.requiredValidator)(properties.password));
    errors.collect(ros.propertyValidator('password', ros.validateString)(properties.password));
    return errors.wrap('supplied properties not correct for "BasicAuthProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ElasticSearchServerless::App.BasicAuth` resource
 *
 * @param properties - the TypeScript properties of a `BasicAuthProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ElasticSearchServerless::App.BasicAuth` resource.
 */
// @ts-ignore TS6133
function rosAppBasicAuthPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosApp_BasicAuthPropertyValidator(properties).assertSuccess();
    return {
      'Password': ros.stringToRosTemplate(properties.password),
    };
}

export namespace RosApp {
    /**
     * @stability external
     */
    export interface LogProConfigurationProperty {
        /**
         * @Property autoDataOrganization: Whether to enable auto data organization.
         */
        readonly autoDataOrganization: boolean | ros.IResolvable;
        /**
         * @Property advancedIndexingOptimization: Whether to enable advanced indexing optimization.
         */
        readonly advancedIndexingOptimization: boolean | ros.IResolvable;
        /**
         * @Property writeWithPrimaryKey: Whether to enable write with primary key.
         */
        readonly writeWithPrimaryKey: boolean | ros.IResolvable;
        /**
         * @Property logProDynamicFieldConfigType: The log pro dynamic field config type of the app.
         */
        readonly logProDynamicFieldConfigType: string | ros.IResolvable;
        /**
         * @Property expirationDays: The expiration days of the app.
         */
        readonly expirationDays: number | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `LogProConfigurationProperty`
 *
 * @param properties - the TypeScript properties of a `LogProConfigurationProperty`
 *
 * @returns the result of the validation.
 */
function RosApp_LogProConfigurationPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('autoDataOrganization', ros.requiredValidator)(properties.autoDataOrganization));
    errors.collect(ros.propertyValidator('autoDataOrganization', ros.validateBoolean)(properties.autoDataOrganization));
    errors.collect(ros.propertyValidator('advancedIndexingOptimization', ros.requiredValidator)(properties.advancedIndexingOptimization));
    errors.collect(ros.propertyValidator('advancedIndexingOptimization', ros.validateBoolean)(properties.advancedIndexingOptimization));
    errors.collect(ros.propertyValidator('writeWithPrimaryKey', ros.requiredValidator)(properties.writeWithPrimaryKey));
    errors.collect(ros.propertyValidator('writeWithPrimaryKey', ros.validateBoolean)(properties.writeWithPrimaryKey));
    errors.collect(ros.propertyValidator('logProDynamicFieldConfigType', ros.requiredValidator)(properties.logProDynamicFieldConfigType));
    if(properties.logProDynamicFieldConfigType && (typeof properties.logProDynamicFieldConfigType) !== 'object') {
        errors.collect(ros.propertyValidator('logProDynamicFieldConfigType', ros.validateAllowedValues)({
          data: properties.logProDynamicFieldConfigType,
          allowedValues: ["RECOGNIZE","MERGE","IGNORE","ERROR"],
        }));
    }
    errors.collect(ros.propertyValidator('logProDynamicFieldConfigType', ros.validateString)(properties.logProDynamicFieldConfigType));
    errors.collect(ros.propertyValidator('expirationDays', ros.requiredValidator)(properties.expirationDays));
    if(properties.expirationDays && (typeof properties.expirationDays) !== 'object') {
        errors.collect(ros.propertyValidator('expirationDays', ros.validateRange)({
            data: properties.expirationDays,
            min: -1,
            max: 365,
          }));
    }
    errors.collect(ros.propertyValidator('expirationDays', ros.validateNumber)(properties.expirationDays));
    return errors.wrap('supplied properties not correct for "LogProConfigurationProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ElasticSearchServerless::App.LogProConfiguration` resource
 *
 * @param properties - the TypeScript properties of a `LogProConfigurationProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ElasticSearchServerless::App.LogProConfiguration` resource.
 */
// @ts-ignore TS6133
function rosAppLogProConfigurationPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosApp_LogProConfigurationPropertyValidator(properties).assertSuccess();
    return {
      'AutoDataOrganization': ros.booleanToRosTemplate(properties.autoDataOrganization),
      'AdvancedIndexingOptimization': ros.booleanToRosTemplate(properties.advancedIndexingOptimization),
      'WriteWithPrimaryKey': ros.booleanToRosTemplate(properties.writeWithPrimaryKey),
      'LogProDynamicFieldConfigType': ros.stringToRosTemplate(properties.logProDynamicFieldConfigType),
      'ExpirationDays': ros.numberToRosTemplate(properties.expirationDays),
    };
}

export namespace RosApp {
    /**
     * @stability external
     */
    export interface NetworkProperty {
        /**
         * @Property type: The type of the network.
         */
        readonly type: string | ros.IResolvable;
        /**
         * @Property enabled: Whether to enable public network access.
         */
        readonly enabled: boolean | ros.IResolvable;
        /**
         * @Property whiteIpGroup: The white ip group of the app.
         */
        readonly whiteIpGroup?: Array<RosApp.WhiteIpGroupProperty | ros.IResolvable> | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `NetworkProperty`
 *
 * @param properties - the TypeScript properties of a `NetworkProperty`
 *
 * @returns the result of the validation.
 */
function RosApp_NetworkPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('type', ros.requiredValidator)(properties.type));
    if(properties.type && (typeof properties.type) !== 'object') {
        errors.collect(ros.propertyValidator('type', ros.validateAllowedValues)({
          data: properties.type,
          allowedValues: ["PUBLIC_ES","PUBLIC_KIBANA"],
        }));
    }
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('enabled', ros.requiredValidator)(properties.enabled));
    errors.collect(ros.propertyValidator('enabled', ros.validateBoolean)(properties.enabled));
    errors.collect(ros.propertyValidator('whiteIpGroup', ros.listValidator(RosApp_WhiteIpGroupPropertyValidator))(properties.whiteIpGroup));
    return errors.wrap('supplied properties not correct for "NetworkProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ElasticSearchServerless::App.Network` resource
 *
 * @param properties - the TypeScript properties of a `NetworkProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ElasticSearchServerless::App.Network` resource.
 */
// @ts-ignore TS6133
function rosAppNetworkPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosApp_NetworkPropertyValidator(properties).assertSuccess();
    return {
      'Type': ros.stringToRosTemplate(properties.type),
      'Enabled': ros.booleanToRosTemplate(properties.enabled),
      'WhiteIpGroup': ros.listMapper(rosAppWhiteIpGroupPropertyToRosTemplate)(properties.whiteIpGroup),
    };
}

export namespace RosApp {
    /**
     * @stability external
     */
    export interface PrivateNetworkProperty {
        /**
         * @Property pvlEndpointId: The pvl endpoint id of the app.
         */
        readonly pvlEndpointId: string | ros.IResolvable;
        /**
         * @Property type: The type of the network.
         */
        readonly type: string | ros.IResolvable;
        /**
         * @Property vpcId: The vpc id of the app.
         */
        readonly vpcId: string | ros.IResolvable;
        /**
         * @Property enabled: Whether to enable private network access.
         */
        readonly enabled: boolean | ros.IResolvable;
        /**
         * @Property whiteIpGroup: The white ip group of the app.
         */
        readonly whiteIpGroup?: Array<RosApp.PrivateNetworkWhiteIpGroupProperty | ros.IResolvable> | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `PrivateNetworkProperty`
 *
 * @param properties - the TypeScript properties of a `PrivateNetworkProperty`
 *
 * @returns the result of the validation.
 */
function RosApp_PrivateNetworkPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('pvlEndpointId', ros.requiredValidator)(properties.pvlEndpointId));
    errors.collect(ros.propertyValidator('pvlEndpointId', ros.validateString)(properties.pvlEndpointId));
    errors.collect(ros.propertyValidator('type', ros.requiredValidator)(properties.type));
    if(properties.type && (typeof properties.type) !== 'object') {
        errors.collect(ros.propertyValidator('type', ros.validateAllowedValues)({
          data: properties.type,
          allowedValues: ["PRIVATE_ES","PRIVATE_KIBANA"],
        }));
    }
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('vpcId', ros.requiredValidator)(properties.vpcId));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('enabled', ros.requiredValidator)(properties.enabled));
    errors.collect(ros.propertyValidator('enabled', ros.validateBoolean)(properties.enabled));
    errors.collect(ros.propertyValidator('whiteIpGroup', ros.listValidator(RosApp_PrivateNetworkWhiteIpGroupPropertyValidator))(properties.whiteIpGroup));
    return errors.wrap('supplied properties not correct for "PrivateNetworkProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ElasticSearchServerless::App.PrivateNetwork` resource
 *
 * @param properties - the TypeScript properties of a `PrivateNetworkProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ElasticSearchServerless::App.PrivateNetwork` resource.
 */
// @ts-ignore TS6133
function rosAppPrivateNetworkPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosApp_PrivateNetworkPropertyValidator(properties).assertSuccess();
    return {
      'PvlEndpointId': ros.stringToRosTemplate(properties.pvlEndpointId),
      'Type': ros.stringToRosTemplate(properties.type),
      'VpcId': ros.stringToRosTemplate(properties.vpcId),
      'Enabled': ros.booleanToRosTemplate(properties.enabled),
      'WhiteIpGroup': ros.listMapper(rosAppPrivateNetworkWhiteIpGroupPropertyToRosTemplate)(properties.whiteIpGroup),
    };
}

export namespace RosApp {
    /**
     * @stability external
     */
    export interface PrivateNetworkWhiteIpGroupProperty {
        /**
         * @Property groupName: The name of the white ip group.
         */
        readonly groupName: string | ros.IResolvable;
        /**
         * @Property ips: The ips of the white ip group.
         */
        readonly ips?: Array<any | ros.IResolvable> | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `PrivateNetworkWhiteIpGroupProperty`
 *
 * @param properties - the TypeScript properties of a `PrivateNetworkWhiteIpGroupProperty`
 *
 * @returns the result of the validation.
 */
function RosApp_PrivateNetworkWhiteIpGroupPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('groupName', ros.requiredValidator)(properties.groupName));
    errors.collect(ros.propertyValidator('groupName', ros.validateString)(properties.groupName));
    errors.collect(ros.propertyValidator('ips', ros.listValidator(ros.validateAny))(properties.ips));
    return errors.wrap('supplied properties not correct for "PrivateNetworkWhiteIpGroupProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ElasticSearchServerless::App.PrivateNetworkWhiteIpGroup` resource
 *
 * @param properties - the TypeScript properties of a `PrivateNetworkWhiteIpGroupProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ElasticSearchServerless::App.PrivateNetworkWhiteIpGroup` resource.
 */
// @ts-ignore TS6133
function rosAppPrivateNetworkWhiteIpGroupPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosApp_PrivateNetworkWhiteIpGroupPropertyValidator(properties).assertSuccess();
    return {
      'GroupName': ros.stringToRosTemplate(properties.groupName),
      'Ips': ros.listMapper(ros.objectToRosTemplate)(properties.ips),
    };
}

export namespace RosApp {
    /**
     * @stability external
     */
    export interface QuotaInfoProperty {
        /**
         * @Property readCu: The read cu of the app.
         */
        readonly readCu?: number | ros.IResolvable;
        /**
         * @Property elastic: Whether the app is elastic.
         */
        readonly elastic?: boolean | ros.IResolvable;
        /**
         * @Property writeCu: The write cu of the app.
         */
        readonly writeCu?: number | ros.IResolvable;
        /**
         * @Property minCu: The min cu of the app.
         */
        readonly minCu?: number | ros.IResolvable;
        /**
         * @Property maxCu: The max cu of the app.
         */
        readonly maxCu?: number | ros.IResolvable;
        /**
         * @Property appType: The type of the app.
         */
        readonly appType: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `QuotaInfoProperty`
 *
 * @param properties - the TypeScript properties of a `QuotaInfoProperty`
 *
 * @returns the result of the validation.
 */
function RosApp_QuotaInfoPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('readCu', ros.validateNumber)(properties.readCu));
    errors.collect(ros.propertyValidator('elastic', ros.validateBoolean)(properties.elastic));
    errors.collect(ros.propertyValidator('writeCu', ros.validateNumber)(properties.writeCu));
    errors.collect(ros.propertyValidator('minCu', ros.validateNumber)(properties.minCu));
    errors.collect(ros.propertyValidator('maxCu', ros.validateNumber)(properties.maxCu));
    errors.collect(ros.propertyValidator('appType', ros.requiredValidator)(properties.appType));
    if(properties.appType && (typeof properties.appType) !== 'object') {
        errors.collect(ros.propertyValidator('appType', ros.validateAllowedValues)({
          data: properties.appType,
          allowedValues: ["TRIAL","STANDARD"],
        }));
    }
    errors.collect(ros.propertyValidator('appType', ros.validateString)(properties.appType));
    return errors.wrap('supplied properties not correct for "QuotaInfoProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ElasticSearchServerless::App.QuotaInfo` resource
 *
 * @param properties - the TypeScript properties of a `QuotaInfoProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ElasticSearchServerless::App.QuotaInfo` resource.
 */
// @ts-ignore TS6133
function rosAppQuotaInfoPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosApp_QuotaInfoPropertyValidator(properties).assertSuccess();
    return {
      'ReadCu': ros.numberToRosTemplate(properties.readCu),
      'Elastic': ros.booleanToRosTemplate(properties.elastic),
      'WriteCu': ros.numberToRosTemplate(properties.writeCu),
      'MinCu': ros.numberToRosTemplate(properties.minCu),
      'MaxCu': ros.numberToRosTemplate(properties.maxCu),
      'AppType': ros.stringToRosTemplate(properties.appType),
    };
}

export namespace RosApp {
    /**
     * @stability external
     */
    export interface WhiteIpGroupProperty {
        /**
         * @Property groupName: The name of the white ip group.
         */
        readonly groupName: string | ros.IResolvable;
        /**
         * @Property ips: The ips of the white ip group.
         */
        readonly ips?: Array<any | ros.IResolvable> | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `WhiteIpGroupProperty`
 *
 * @param properties - the TypeScript properties of a `WhiteIpGroupProperty`
 *
 * @returns the result of the validation.
 */
function RosApp_WhiteIpGroupPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('groupName', ros.requiredValidator)(properties.groupName));
    errors.collect(ros.propertyValidator('groupName', ros.validateString)(properties.groupName));
    errors.collect(ros.propertyValidator('ips', ros.listValidator(ros.validateAny))(properties.ips));
    return errors.wrap('supplied properties not correct for "WhiteIpGroupProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ElasticSearchServerless::App.WhiteIpGroup` resource
 *
 * @param properties - the TypeScript properties of a `WhiteIpGroupProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ElasticSearchServerless::App.WhiteIpGroup` resource.
 */
// @ts-ignore TS6133
function rosAppWhiteIpGroupPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosApp_WhiteIpGroupPropertyValidator(properties).assertSuccess();
    return {
      'GroupName': ros.stringToRosTemplate(properties.groupName),
      'Ips': ros.listMapper(ros.objectToRosTemplate)(properties.ips),
    };
}

/**
 * Properties for defining a `RosEndpoint`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-elasticsearchserverless-endpoint
 */
export interface RosEndpointProps {

    /**
     * @Property endpointZones: The zone configurations of the endpoint.
     */
    readonly endpointZones: Array<RosEndpoint.EndpointZonesProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property name: The name of the endpoint.
     */
    readonly name?: string | ros.IResolvable;

    /**
     * @Property type: Endpoint type, default value: VPC.
     */
    readonly type?: string | ros.IResolvable;

    /**
     * @Property vpcId: The vpc id of the endpoint.
     */
    readonly vpcId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosEndpointProps`
 *
 * @param properties - the TypeScript properties of a `RosEndpointProps`
 *
 * @returns the result of the validation.
 */
function RosEndpointPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('endpointZones', ros.requiredValidator)(properties.endpointZones));
    if(properties.endpointZones && (Array.isArray(properties.endpointZones) || (typeof properties.endpointZones) === 'string')) {
        errors.collect(ros.propertyValidator('endpointZones', ros.validateLength)({
            data: properties.endpointZones.length,
            min: 1,
            max: 10,
          }));
    }
    errors.collect(ros.propertyValidator('endpointZones', ros.listValidator(RosEndpoint_EndpointZonesPropertyValidator))(properties.endpointZones));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "RosEndpointProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ElasticSearchServerless::Endpoint` resource
 *
 * @param properties - the TypeScript properties of a `RosEndpointProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ElasticSearchServerless::Endpoint` resource.
 */
// @ts-ignore TS6133
function rosEndpointPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosEndpointPropsValidator(properties).assertSuccess();
    }
    return {
      'EndpointZones': ros.listMapper(rosEndpointEndpointZonesPropertyToRosTemplate)(properties.endpointZones),
      'Name': ros.stringToRosTemplate(properties.name),
      'Type': ros.stringToRosTemplate(properties.type),
      'VpcId': ros.stringToRosTemplate(properties.vpcId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ElasticSearchServerless::Endpoint`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Endpoint` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-elasticsearchserverless-endpoint
 */
export class RosEndpoint extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ElasticSearchServerless::Endpoint";

    /**
     * @Attribute Domain: The domain of the endpoint.
     */
    public readonly attrDomain: ros.IResolvable;

    /**
     * @Attribute EndpointId: The Id of the endpoint.
     */
    public readonly attrEndpointId: ros.IResolvable;

    /**
     * @Attribute PvlEndpointId: The Id of the private link endpoint.
     */
    public readonly attrPvlEndpointId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property endpointZones: The zone configurations of the endpoint.
     */
    public endpointZones: Array<RosEndpoint.EndpointZonesProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property name: The name of the endpoint.
     */
    public name: string | ros.IResolvable | undefined;

    /**
     * @Property type: Endpoint type, default value: VPC.
     */
    public type: string | ros.IResolvable | undefined;

    /**
     * @Property vpcId: The vpc id of the endpoint.
     */
    public vpcId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosEndpointProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosEndpoint.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDomain = this.getAtt('Domain');
        this.attrEndpointId = this.getAtt('EndpointId');
        this.attrPvlEndpointId = this.getAtt('PvlEndpointId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.endpointZones = props.endpointZones;
        this.name = props.name;
        this.type = props.type;
        this.vpcId = props.vpcId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            endpointZones: this.endpointZones,
            name: this.name,
            type: this.type,
            vpcId: this.vpcId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosEndpointPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosEndpoint {
    /**
     * @stability external
     */
    export interface EndpointZonesProperty {
        /**
         * @Property zoneId: Availability zone ID.
         */
        readonly zoneId: string | ros.IResolvable;
        /**
         * @Property vSwitchId: Virtual switch ID.
         */
        readonly vSwitchId: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `EndpointZonesProperty`
 *
 * @param properties - the TypeScript properties of a `EndpointZonesProperty`
 *
 * @returns the result of the validation.
 */
function RosEndpoint_EndpointZonesPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('zoneId', ros.requiredValidator)(properties.zoneId));
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.requiredValidator)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    return errors.wrap('supplied properties not correct for "EndpointZonesProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ElasticSearchServerless::Endpoint.EndpointZones` resource
 *
 * @param properties - the TypeScript properties of a `EndpointZonesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ElasticSearchServerless::Endpoint.EndpointZones` resource.
 */
// @ts-ignore TS6133
function rosEndpointEndpointZonesPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosEndpoint_EndpointZonesPropertyValidator(properties).assertSuccess();
    return {
      'ZoneId': ros.stringToRosTemplate(properties.zoneId),
      'VSwitchId': ros.stringToRosTemplate(properties.vSwitchId),
    };
}
