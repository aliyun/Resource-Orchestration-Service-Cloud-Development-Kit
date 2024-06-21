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
     * @Property network: The public network of the app.
     */
    readonly network?: Array<RosApp.NetworkProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property privateNetwork: The private network of the app.
     */
    readonly privateNetwork?: Array<RosApp.PrivateNetworkProperty | ros.IResolvable> | ros.IResolvable;
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
          allowedValues: ["7.10"],
        }));
    }
    errors.collect(ros.propertyValidator('appVersion', ros.validateString)(properties.appVersion));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('authentication', ros.requiredValidator)(properties.authentication));
    errors.collect(ros.propertyValidator('authentication', RosApp_AuthenticationPropertyValidator)(properties.authentication));
    errors.collect(ros.propertyValidator('quotaInfo', ros.requiredValidator)(properties.quotaInfo));
    errors.collect(ros.propertyValidator('quotaInfo', RosApp_QuotaInfoPropertyValidator)(properties.quotaInfo));
    errors.collect(ros.propertyValidator('network', ros.listValidator(RosApp_NetworkPropertyValidator))(properties.network));
    errors.collect(ros.propertyValidator('privateNetwork', ros.listValidator(RosApp_PrivateNetworkPropertyValidator))(properties.privateNetwork));
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
      AppName: ros.stringToRosTemplate(properties.appName),
      Authentication: rosAppAuthenticationPropertyToRosTemplate(properties.authentication),
      QuotaInfo: rosAppQuotaInfoPropertyToRosTemplate(properties.quotaInfo),
      AppVersion: ros.stringToRosTemplate(properties.appVersion),
      Description: ros.stringToRosTemplate(properties.description),
      Network: ros.listMapper(rosAppNetworkPropertyToRosTemplate)(properties.network),
      PrivateNetwork: ros.listMapper(rosAppPrivateNetworkPropertyToRosTemplate)(properties.privateNetwork),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ElasticSearchServerless::App`.
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
     * @Property network: The public network of the app.
     */
    public network: Array<RosApp.NetworkProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property privateNetwork: The private network of the app.
     */
    public privateNetwork: Array<RosApp.PrivateNetworkProperty | ros.IResolvable> | ros.IResolvable | undefined;

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

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.appName = props.appName;
        this.authentication = props.authentication;
        this.quotaInfo = props.quotaInfo;
        this.appVersion = props.appVersion;
        this.description = props.description;
        this.network = props.network;
        this.privateNetwork = props.privateNetwork;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            appName: this.appName,
            authentication: this.authentication,
            quotaInfo: this.quotaInfo,
            appVersion: this.appVersion,
            description: this.description,
            network: this.network,
            privateNetwork: this.privateNetwork,
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
      BasicAuth: ros.listMapper(rosAppBasicAuthPropertyToRosTemplate)(properties.basicAuth),
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
      Password: ros.stringToRosTemplate(properties.password),
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
      Type: ros.stringToRosTemplate(properties.type),
      Enabled: ros.booleanToRosTemplate(properties.enabled),
      WhiteIpGroup: ros.listMapper(rosAppWhiteIpGroupPropertyToRosTemplate)(properties.whiteIpGroup),
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
      PvlEndpointId: ros.stringToRosTemplate(properties.pvlEndpointId),
      Type: ros.stringToRosTemplate(properties.type),
      VpcId: ros.stringToRosTemplate(properties.vpcId),
      Enabled: ros.booleanToRosTemplate(properties.enabled),
      WhiteIpGroup: ros.listMapper(rosAppPrivateNetworkWhiteIpGroupPropertyToRosTemplate)(properties.whiteIpGroup),
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
      GroupName: ros.stringToRosTemplate(properties.groupName),
      Ips: ros.listMapper(ros.objectToRosTemplate)(properties.ips),
    };
}

export namespace RosApp {
    /**
     * @stability external
     */
    export interface QuotaInfoProperty {
        /**
         * @Property cu: The cu of the app.
         */
        readonly cu: number | ros.IResolvable;
        /**
         * @Property storage: The storage of the app.
         */
        readonly storage: number | ros.IResolvable;
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
    errors.collect(ros.propertyValidator('cu', ros.requiredValidator)(properties.cu));
    errors.collect(ros.propertyValidator('cu', ros.validateNumber)(properties.cu));
    errors.collect(ros.propertyValidator('storage', ros.requiredValidator)(properties.storage));
    errors.collect(ros.propertyValidator('storage', ros.validateNumber)(properties.storage));
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
      Cu: ros.numberToRosTemplate(properties.cu),
      Storage: ros.numberToRosTemplate(properties.storage),
      AppType: ros.stringToRosTemplate(properties.appType),
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
         * @Property ips: The ips ofthe white ip group.
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
      GroupName: ros.stringToRosTemplate(properties.groupName),
      Ips: ros.listMapper(ros.objectToRosTemplate)(properties.ips),
    };
}
