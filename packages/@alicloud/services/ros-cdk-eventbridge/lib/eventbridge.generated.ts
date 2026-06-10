// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosApiDestination`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-eventbridge-apidestination
 */
export interface RosApiDestinationProps {

    /**
     * @Property apiDestinationName: The name of the api. The maximum length is 127 characters. Minimum length 2 characters.
     */
    readonly apiDestinationName: string | ros.IResolvable;

    /**
     * @Property connectionName: The connection configuration name. The maximum length is 127 characters. Minimum length 2 characters.
     * - Tip: You must first call the Connection interface to create a Connection configuration. Enter the name of the existing Connection.
     */
    readonly connectionName: string | ros.IResolvable;

    /**
     * @Property httpApiParameters: Configuration information for API endpoints.
     */
    readonly httpApiParameters: RosApiDestination.HttpApiParametersProperty | ros.IResolvable;

    /**
     * @Property description: The description of the api. It must be no more than 255 characters.
     */
    readonly description?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosApiDestinationProps`
 *
 * @param properties - the TypeScript properties of a `RosApiDestinationProps`
 *
 * @returns the result of the validation.
 */
function RosApiDestinationPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('connectionName', ros.requiredValidator)(properties.connectionName));
    errors.collect(ros.propertyValidator('connectionName', ros.validateString)(properties.connectionName));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('httpApiParameters', ros.requiredValidator)(properties.httpApiParameters));
    errors.collect(ros.propertyValidator('httpApiParameters', RosApiDestination_HttpApiParametersPropertyValidator)(properties.httpApiParameters));
    errors.collect(ros.propertyValidator('apiDestinationName', ros.requiredValidator)(properties.apiDestinationName));
    errors.collect(ros.propertyValidator('apiDestinationName', ros.validateString)(properties.apiDestinationName));
    return errors.wrap('supplied properties not correct for "RosApiDestinationProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EventBridge::ApiDestination` resource
 *
 * @param properties - the TypeScript properties of a `RosApiDestinationProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EventBridge::ApiDestination` resource.
 */
// @ts-ignore TS6133
function rosApiDestinationPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosApiDestinationPropsValidator(properties).assertSuccess();
    }
    return {
      'ApiDestinationName': ros.stringToRosTemplate(properties.apiDestinationName),
      'ConnectionName': ros.stringToRosTemplate(properties.connectionName),
      'HttpApiParameters': rosApiDestinationHttpApiParametersPropertyToRosTemplate(properties.httpApiParameters),
      'Description': ros.stringToRosTemplate(properties.description),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::EventBridge::ApiDestination`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ApiDestination` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-eventbridge-apidestination
 */
export class RosApiDestination extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::EventBridge::ApiDestination";

    /**
     * @Attribute ApiDestinationName: The name of the api. The maximum length is 127 characters. Minimum length 2 characters.
     */
    public readonly attrApiDestinationName: ros.IResolvable;

    /**
     * @Attribute ConnectionName: The connection configuration name. The maximum length is 127 characters. Minimum length 2 characters.
     */
    public readonly attrConnectionName: ros.IResolvable;

    /**
     * @Attribute CreateTime: Creation time.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute Description: The description of the api. It must be no more than 255 characters.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * @Attribute HttpApiParameters: Configuration information for API endpoints.
     */
    public readonly attrHttpApiParameters: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property apiDestinationName: The name of the api. The maximum length is 127 characters. Minimum length 2 characters.
     */
    public apiDestinationName: string | ros.IResolvable;

    /**
     * @Property connectionName: The connection configuration name. The maximum length is 127 characters. Minimum length 2 characters.
     * - Tip: You must first call the Connection interface to create a Connection configuration. Enter the name of the existing Connection.
     */
    public connectionName: string | ros.IResolvable;

    /**
     * @Property httpApiParameters: Configuration information for API endpoints.
     */
    public httpApiParameters: RosApiDestination.HttpApiParametersProperty | ros.IResolvable;

    /**
     * @Property description: The description of the api. It must be no more than 255 characters.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosApiDestinationProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosApiDestination.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrApiDestinationName = this.getAtt('ApiDestinationName');
        this.attrConnectionName = this.getAtt('ConnectionName');
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrDescription = this.getAtt('Description');
        this.attrHttpApiParameters = this.getAtt('HttpApiParameters');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.apiDestinationName = props.apiDestinationName;
        this.connectionName = props.connectionName;
        this.httpApiParameters = props.httpApiParameters;
        this.description = props.description;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            apiDestinationName: this.apiDestinationName,
            connectionName: this.connectionName,
            httpApiParameters: this.httpApiParameters,
            description: this.description,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosApiDestinationPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosApiDestination {
    /**
     * @stability external
     */
    export interface HttpApiParametersProperty {
        /**
         * @Property endpoint: The access point address of the API endpoint. The maximum length is 127 characters.
         */
        readonly endpoint: string | ros.IResolvable;
        /**
         * @Property method: HTTP request method.
     * - GET
     * - POST
     * - HEAD
     * - DELETE
     * - PUT
     * - PATCH.
         */
        readonly method: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `HttpApiParametersProperty`
 *
 * @param properties - the TypeScript properties of a `HttpApiParametersProperty`
 *
 * @returns the result of the validation.
 */
function RosApiDestination_HttpApiParametersPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('endpoint', ros.requiredValidator)(properties.endpoint));
    errors.collect(ros.propertyValidator('endpoint', ros.validateString)(properties.endpoint));
    errors.collect(ros.propertyValidator('method', ros.requiredValidator)(properties.method));
    if(properties.method && (typeof properties.method) !== 'object') {
        errors.collect(ros.propertyValidator('method', ros.validateAllowedValues)({
          data: properties.method,
          allowedValues: ["GET","POST","HEAD","DELETE","PUT","PATCH"],
        }));
    }
    errors.collect(ros.propertyValidator('method', ros.validateString)(properties.method));
    return errors.wrap('supplied properties not correct for "HttpApiParametersProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EventBridge::ApiDestination.HttpApiParameters` resource
 *
 * @param properties - the TypeScript properties of a `HttpApiParametersProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EventBridge::ApiDestination.HttpApiParameters` resource.
 */
// @ts-ignore TS6133
function rosApiDestinationHttpApiParametersPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosApiDestination_HttpApiParametersPropertyValidator(properties).assertSuccess();
    return {
      'Endpoint': ros.stringToRosTemplate(properties.endpoint),
      'Method': ros.stringToRosTemplate(properties.method),
    };
}

/**
 * Properties for defining a `RosConnection`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-eventbridge-connection
 */
export interface RosConnectionProps {

    /**
     * @Property connectionName: The connection configuration name. The maximum length is 127 characters. Minimum length 2 characters.
     */
    readonly connectionName: string | ros.IResolvable;

    /**
     * @Property networkParameters: Network Configuration Data Structure.
     */
    readonly networkParameters: RosConnection.NetworkParametersProperty | ros.IResolvable;

    /**
     * @Property authParameters: Authentication Data Structure.
     */
    readonly authParameters?: RosConnection.AuthParametersProperty | ros.IResolvable;

    /**
     * @Property description: The connection configuration description. The maximum length is 255 characters.
     */
    readonly description?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosConnectionProps`
 *
 * @param properties - the TypeScript properties of a `RosConnectionProps`
 *
 * @returns the result of the validation.
 */
function RosConnectionPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('connectionName', ros.requiredValidator)(properties.connectionName));
    errors.collect(ros.propertyValidator('connectionName', ros.validateString)(properties.connectionName));
    errors.collect(ros.propertyValidator('authParameters', RosConnection_AuthParametersPropertyValidator)(properties.authParameters));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('networkParameters', ros.requiredValidator)(properties.networkParameters));
    errors.collect(ros.propertyValidator('networkParameters', RosConnection_NetworkParametersPropertyValidator)(properties.networkParameters));
    return errors.wrap('supplied properties not correct for "RosConnectionProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EventBridge::Connection` resource
 *
 * @param properties - the TypeScript properties of a `RosConnectionProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EventBridge::Connection` resource.
 */
// @ts-ignore TS6133
function rosConnectionPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosConnectionPropsValidator(properties).assertSuccess();
    }
    return {
      'ConnectionName': ros.stringToRosTemplate(properties.connectionName),
      'NetworkParameters': rosConnectionNetworkParametersPropertyToRosTemplate(properties.networkParameters),
      'AuthParameters': rosConnectionAuthParametersPropertyToRosTemplate(properties.authParameters),
      'Description': ros.stringToRosTemplate(properties.description),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::EventBridge::Connection`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Connection` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-eventbridge-connection
 */
export class RosConnection extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::EventBridge::Connection";

    /**
     * @Attribute AuthParameters: Authentication Data Structure.
     */
    public readonly attrAuthParameters: ros.IResolvable;

    /**
     * @Attribute ConnectionName: The connection configuration name. The maximum length is 127 characters. Minimum length 2 characters.
     */
    public readonly attrConnectionName: ros.IResolvable;

    /**
     * @Attribute CreateTime: The creation time of the resource.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute Description: The connection configuration description. The maximum length is 255 characters.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * @Attribute NetworkParameters: Network Configuration Data Structure.
     */
    public readonly attrNetworkParameters: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property connectionName: The connection configuration name. The maximum length is 127 characters. Minimum length 2 characters.
     */
    public connectionName: string | ros.IResolvable;

    /**
     * @Property networkParameters: Network Configuration Data Structure.
     */
    public networkParameters: RosConnection.NetworkParametersProperty | ros.IResolvable;

    /**
     * @Property authParameters: Authentication Data Structure.
     */
    public authParameters: RosConnection.AuthParametersProperty | ros.IResolvable | undefined;

    /**
     * @Property description: The connection configuration description. The maximum length is 255 characters.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosConnectionProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosConnection.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAuthParameters = this.getAtt('AuthParameters');
        this.attrConnectionName = this.getAtt('ConnectionName');
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrDescription = this.getAtt('Description');
        this.attrNetworkParameters = this.getAtt('NetworkParameters');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.connectionName = props.connectionName;
        this.networkParameters = props.networkParameters;
        this.authParameters = props.authParameters;
        this.description = props.description;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            connectionName: this.connectionName,
            networkParameters: this.networkParameters,
            authParameters: this.authParameters,
            description: this.description,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosConnectionPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosConnection {
    /**
     * @stability external
     */
    export interface ApiKeyAuthParametersProperty {
        /**
         * @Property apiKeyValue: Value of Api key.
         */
        readonly apiKeyValue?: string | ros.IResolvable;
        /**
         * @Property apiKeyName: The key value of Api key.
         */
        readonly apiKeyName?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `ApiKeyAuthParametersProperty`
 *
 * @param properties - the TypeScript properties of a `ApiKeyAuthParametersProperty`
 *
 * @returns the result of the validation.
 */
function RosConnection_ApiKeyAuthParametersPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('apiKeyValue', ros.validateString)(properties.apiKeyValue));
    errors.collect(ros.propertyValidator('apiKeyName', ros.validateString)(properties.apiKeyName));
    return errors.wrap('supplied properties not correct for "ApiKeyAuthParametersProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EventBridge::Connection.ApiKeyAuthParameters` resource
 *
 * @param properties - the TypeScript properties of a `ApiKeyAuthParametersProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EventBridge::Connection.ApiKeyAuthParameters` resource.
 */
// @ts-ignore TS6133
function rosConnectionApiKeyAuthParametersPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosConnection_ApiKeyAuthParametersPropertyValidator(properties).assertSuccess();
    return {
      'ApiKeyValue': ros.stringToRosTemplate(properties.apiKeyValue),
      'ApiKeyName': ros.stringToRosTemplate(properties.apiKeyName),
    };
}

export namespace RosConnection {
    /**
     * @stability external
     */
    export interface AuthParametersProperty {
        /**
         * @Property oauthParameters: OAuth Authentication parameter data structure.
         */
        readonly oauthParameters?: RosConnection.OauthParametersProperty | ros.IResolvable;
        /**
         * @Property basicAuthParameters: Basic authentication data structure.
         */
        readonly basicAuthParameters?: RosConnection.BasicAuthParametersProperty | ros.IResolvable;
        /**
         * @Property apiKeyAuthParameters: API KEY data structure.
         */
        readonly apiKeyAuthParameters?: RosConnection.ApiKeyAuthParametersProperty | ros.IResolvable;
        /**
         * @Property authorizationType: Authentication type:
     * BASIC:BASIC_AUTH
     * Introduction: This authorization method is the basic authorization method implemented by the browser in compliance with the http protocol. In the process of communication with the HTTP protocol, the HTTP protocol defines the method by which the basic authentication allows the HTTP server to carry out user identity cards on the client. In the request header, add Authorization :Basic empty Base64 encryption (user name: password) fixed format.
     * 
     * 1. Username and Password are required
     * API KEY :API_KEY_AUTH
     * Introduction:
     * Fixed format Add Token :Token value in request header
     * - ApiKeyName and ApiKeyValue are required
     * OAUTH :OAUTH_AUTH
     * Introduction:
     * OAuth2.0 is an authorization mechanism. Normally, for systems that do not use authorization mechanisms such as OAuth2.0, the client can directly Access the resources of the Resource Server. In order for users to Access data safely, an Access Token mechanism is added in the middle of the Access. Clients need to carry Access tokens to Access protected resources. Therefore, OAuth2.0 ensures that resources are not accessed by malicious clients, thus improving the security of the system.
     * - AuthorizationEndpoint, oauthttpparameters, and HttpMethod are required.
         */
        readonly authorizationType?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `AuthParametersProperty`
 *
 * @param properties - the TypeScript properties of a `AuthParametersProperty`
 *
 * @returns the result of the validation.
 */
function RosConnection_AuthParametersPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('oauthParameters', RosConnection_OauthParametersPropertyValidator)(properties.oauthParameters));
    errors.collect(ros.propertyValidator('basicAuthParameters', RosConnection_BasicAuthParametersPropertyValidator)(properties.basicAuthParameters));
    errors.collect(ros.propertyValidator('apiKeyAuthParameters', RosConnection_ApiKeyAuthParametersPropertyValidator)(properties.apiKeyAuthParameters));
    if(properties.authorizationType && (typeof properties.authorizationType) !== 'object') {
        errors.collect(ros.propertyValidator('authorizationType', ros.validateAllowedValues)({
          data: properties.authorizationType,
          allowedValues: ["BASIC_AUTH","API_KEY_AUTH","OAUTH_AUTH"],
        }));
    }
    errors.collect(ros.propertyValidator('authorizationType', ros.validateString)(properties.authorizationType));
    return errors.wrap('supplied properties not correct for "AuthParametersProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EventBridge::Connection.AuthParameters` resource
 *
 * @param properties - the TypeScript properties of a `AuthParametersProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EventBridge::Connection.AuthParameters` resource.
 */
// @ts-ignore TS6133
function rosConnectionAuthParametersPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosConnection_AuthParametersPropertyValidator(properties).assertSuccess();
    return {
      'OauthParameters': rosConnectionOauthParametersPropertyToRosTemplate(properties.oauthParameters),
      'BasicAuthParameters': rosConnectionBasicAuthParametersPropertyToRosTemplate(properties.basicAuthParameters),
      'ApiKeyAuthParameters': rosConnectionApiKeyAuthParametersPropertyToRosTemplate(properties.apiKeyAuthParameters),
      'AuthorizationType': ros.stringToRosTemplate(properties.authorizationType),
    };
}

export namespace RosConnection {
    /**
     * @stability external
     */
    export interface BasicAuthParametersProperty {
        /**
         * @Property username: Username for basic authentication.
         */
        readonly username?: string | ros.IResolvable;
        /**
         * @Property password: Password for basic authentication.
         */
        readonly password?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `BasicAuthParametersProperty`
 *
 * @param properties - the TypeScript properties of a `BasicAuthParametersProperty`
 *
 * @returns the result of the validation.
 */
function RosConnection_BasicAuthParametersPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('username', ros.validateString)(properties.username));
    errors.collect(ros.propertyValidator('password', ros.validateString)(properties.password));
    return errors.wrap('supplied properties not correct for "BasicAuthParametersProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EventBridge::Connection.BasicAuthParameters` resource
 *
 * @param properties - the TypeScript properties of a `BasicAuthParametersProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EventBridge::Connection.BasicAuthParameters` resource.
 */
// @ts-ignore TS6133
function rosConnectionBasicAuthParametersPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosConnection_BasicAuthParametersPropertyValidator(properties).assertSuccess();
    return {
      'Username': ros.stringToRosTemplate(properties.username),
      'Password': ros.stringToRosTemplate(properties.password),
    };
}

export namespace RosConnection {
    /**
     * @stability external
     */
    export interface BodyParametersProperty {
        /**
         * @Property isValueSecret: Whether it is Authentication.
         */
        readonly isValueSecret?: boolean | ros.IResolvable;
        /**
         * @Property value: The value of the body request parameter.
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: The key of the body request parameter.
         */
        readonly key?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `BodyParametersProperty`
 *
 * @param properties - the TypeScript properties of a `BodyParametersProperty`
 *
 * @returns the result of the validation.
 */
function RosConnection_BodyParametersPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('isValueSecret', ros.validateBoolean)(properties.isValueSecret));
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "BodyParametersProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EventBridge::Connection.BodyParameters` resource
 *
 * @param properties - the TypeScript properties of a `BodyParametersProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EventBridge::Connection.BodyParameters` resource.
 */
// @ts-ignore TS6133
function rosConnectionBodyParametersPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosConnection_BodyParametersPropertyValidator(properties).assertSuccess();
    return {
      'IsValueSecret': ros.booleanToRosTemplate(properties.isValueSecret),
      'Value': ros.stringToRosTemplate(properties.value),
      'Key': ros.stringToRosTemplate(properties.key),
    };
}

export namespace RosConnection {
    /**
     * @stability external
     */
    export interface ClientParametersProperty {
        /**
         * @Property clientSecret: Application's client key secret.
         */
        readonly clientSecret?: string | ros.IResolvable;
        /**
         * @Property clientId: The ID of the client.
         */
        readonly clientId?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `ClientParametersProperty`
 *
 * @param properties - the TypeScript properties of a `ClientParametersProperty`
 *
 * @returns the result of the validation.
 */
function RosConnection_ClientParametersPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('clientSecret', ros.validateString)(properties.clientSecret));
    errors.collect(ros.propertyValidator('clientId', ros.validateString)(properties.clientId));
    return errors.wrap('supplied properties not correct for "ClientParametersProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EventBridge::Connection.ClientParameters` resource
 *
 * @param properties - the TypeScript properties of a `ClientParametersProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EventBridge::Connection.ClientParameters` resource.
 */
// @ts-ignore TS6133
function rosConnectionClientParametersPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosConnection_ClientParametersPropertyValidator(properties).assertSuccess();
    return {
      'ClientSecret': ros.stringToRosTemplate(properties.clientSecret),
      'ClientId': ros.stringToRosTemplate(properties.clientId),
    };
}

export namespace RosConnection {
    /**
     * @stability external
     */
    export interface HeaderParametersProperty {
        /**
         * @Property isValueSecret: Whether it is Authentication.
         */
        readonly isValueSecret?: boolean | ros.IResolvable;
        /**
         * @Property value: Request header parameter value.
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: The parameter key of the request header.
         */
        readonly key?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `HeaderParametersProperty`
 *
 * @param properties - the TypeScript properties of a `HeaderParametersProperty`
 *
 * @returns the result of the validation.
 */
function RosConnection_HeaderParametersPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('isValueSecret', ros.validateBoolean)(properties.isValueSecret));
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "HeaderParametersProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EventBridge::Connection.HeaderParameters` resource
 *
 * @param properties - the TypeScript properties of a `HeaderParametersProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EventBridge::Connection.HeaderParameters` resource.
 */
// @ts-ignore TS6133
function rosConnectionHeaderParametersPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosConnection_HeaderParametersPropertyValidator(properties).assertSuccess();
    return {
      'IsValueSecret': ros.booleanToRosTemplate(properties.isValueSecret),
      'Value': ros.stringToRosTemplate(properties.value),
      'Key': ros.stringToRosTemplate(properties.key),
    };
}

export namespace RosConnection {
    /**
     * @stability external
     */
    export interface NetworkParametersProperty {
        /**
         * @Property vpcId: The ID of the VPC.
         */
        readonly vpcId?: string | ros.IResolvable;
        /**
         * @Property networkType: Public network: PublicNetwork
     * Private network: PrivateNetwork
     * - Tip: When selecting a VPC, VpcId, VswitcheId, and SecurityGroupId are required.
         */
        readonly networkType: string | ros.IResolvable;
        /**
         * @Property securityGroupId: Security group ID.
         */
        readonly securityGroupId?: string | ros.IResolvable;
        /**
         * @Property vswitcheId: Switch ID.
         */
        readonly vswitcheId?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `NetworkParametersProperty`
 *
 * @param properties - the TypeScript properties of a `NetworkParametersProperty`
 *
 * @returns the result of the validation.
 */
function RosConnection_NetworkParametersPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('networkType', ros.requiredValidator)(properties.networkType));
    errors.collect(ros.propertyValidator('networkType', ros.validateString)(properties.networkType));
    errors.collect(ros.propertyValidator('securityGroupId', ros.validateString)(properties.securityGroupId));
    errors.collect(ros.propertyValidator('vswitcheId', ros.validateString)(properties.vswitcheId));
    return errors.wrap('supplied properties not correct for "NetworkParametersProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EventBridge::Connection.NetworkParameters` resource
 *
 * @param properties - the TypeScript properties of a `NetworkParametersProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EventBridge::Connection.NetworkParameters` resource.
 */
// @ts-ignore TS6133
function rosConnectionNetworkParametersPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosConnection_NetworkParametersPropertyValidator(properties).assertSuccess();
    return {
      'VpcId': ros.stringToRosTemplate(properties.vpcId),
      'NetworkType': ros.stringToRosTemplate(properties.networkType),
      'SecurityGroupId': ros.stringToRosTemplate(properties.securityGroupId),
      'VswitcheId': ros.stringToRosTemplate(properties.vswitcheId),
    };
}

export namespace RosConnection {
    /**
     * @stability external
     */
    export interface OauthHttpParametersProperty {
        /**
         * @Property headerParameters: Parameter list of request header.
         */
        readonly headerParameters?: Array<RosConnection.HeaderParametersProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property queryStringParameters: Data structure of request path parameters.
         */
        readonly queryStringParameters?: Array<RosConnection.QueryStringParametersProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property bodyParameters: Body request parameter data structure List.
         */
        readonly bodyParameters?: Array<RosConnection.BodyParametersProperty | ros.IResolvable> | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `OauthHttpParametersProperty`
 *
 * @param properties - the TypeScript properties of a `OauthHttpParametersProperty`
 *
 * @returns the result of the validation.
 */
function RosConnection_OauthHttpParametersPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.headerParameters && (Array.isArray(properties.headerParameters) || (typeof properties.headerParameters) === 'string')) {
        errors.collect(ros.propertyValidator('headerParameters', ros.validateLength)({
            data: properties.headerParameters.length,
            min: 0,
            max: 50,
          }));
    }
    errors.collect(ros.propertyValidator('headerParameters', ros.listValidator(RosConnection_HeaderParametersPropertyValidator))(properties.headerParameters));
    if(properties.queryStringParameters && (Array.isArray(properties.queryStringParameters) || (typeof properties.queryStringParameters) === 'string')) {
        errors.collect(ros.propertyValidator('queryStringParameters', ros.validateLength)({
            data: properties.queryStringParameters.length,
            min: 0,
            max: 50,
          }));
    }
    errors.collect(ros.propertyValidator('queryStringParameters', ros.listValidator(RosConnection_QueryStringParametersPropertyValidator))(properties.queryStringParameters));
    if(properties.bodyParameters && (Array.isArray(properties.bodyParameters) || (typeof properties.bodyParameters) === 'string')) {
        errors.collect(ros.propertyValidator('bodyParameters', ros.validateLength)({
            data: properties.bodyParameters.length,
            min: 0,
            max: 50,
          }));
    }
    errors.collect(ros.propertyValidator('bodyParameters', ros.listValidator(RosConnection_BodyParametersPropertyValidator))(properties.bodyParameters));
    return errors.wrap('supplied properties not correct for "OauthHttpParametersProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EventBridge::Connection.OauthHttpParameters` resource
 *
 * @param properties - the TypeScript properties of a `OauthHttpParametersProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EventBridge::Connection.OauthHttpParameters` resource.
 */
// @ts-ignore TS6133
function rosConnectionOauthHttpParametersPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosConnection_OauthHttpParametersPropertyValidator(properties).assertSuccess();
    return {
      'HeaderParameters': ros.listMapper(rosConnectionHeaderParametersPropertyToRosTemplate)(properties.headerParameters),
      'QueryStringParameters': ros.listMapper(rosConnectionQueryStringParametersPropertyToRosTemplate)(properties.queryStringParameters),
      'BodyParameters': ros.listMapper(rosConnectionBodyParametersPropertyToRosTemplate)(properties.bodyParameters),
    };
}

export namespace RosConnection {
    /**
     * @stability external
     */
    export interface OauthParametersProperty {
        /**
         * @Property clientParameters: Customer Parameter Data Structure.
         */
        readonly clientParameters?: RosConnection.ClientParametersProperty | ros.IResolvable;
        /**
         * @Property oauthHttpParameters: Request parameters for Oauth Authentication.
         */
        readonly oauthHttpParameters?: RosConnection.OauthHttpParametersProperty | ros.IResolvable;
        /**
         * @Property authorizationEndpoint: Authorized endpoint address. The maximum length is 127 characters.
         */
        readonly authorizationEndpoint?: string | ros.IResolvable;
        /**
         * @Property httpMethod: The method of the probe type. Value:
     * - GET
     * - POST
     * - HEAD
     * - DELETE
     * - PUT
     * - PATCH.
         */
        readonly httpMethod?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `OauthParametersProperty`
 *
 * @param properties - the TypeScript properties of a `OauthParametersProperty`
 *
 * @returns the result of the validation.
 */
function RosConnection_OauthParametersPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('clientParameters', RosConnection_ClientParametersPropertyValidator)(properties.clientParameters));
    errors.collect(ros.propertyValidator('oauthHttpParameters', RosConnection_OauthHttpParametersPropertyValidator)(properties.oauthHttpParameters));
    errors.collect(ros.propertyValidator('authorizationEndpoint', ros.validateString)(properties.authorizationEndpoint));
    if(properties.httpMethod && (typeof properties.httpMethod) !== 'object') {
        errors.collect(ros.propertyValidator('httpMethod', ros.validateAllowedValues)({
          data: properties.httpMethod,
          allowedValues: ["GET","POST","HEAD","DELETE","PUT","PATCH"],
        }));
    }
    errors.collect(ros.propertyValidator('httpMethod', ros.validateString)(properties.httpMethod));
    return errors.wrap('supplied properties not correct for "OauthParametersProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EventBridge::Connection.OauthParameters` resource
 *
 * @param properties - the TypeScript properties of a `OauthParametersProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EventBridge::Connection.OauthParameters` resource.
 */
// @ts-ignore TS6133
function rosConnectionOauthParametersPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosConnection_OauthParametersPropertyValidator(properties).assertSuccess();
    return {
      'ClientParameters': rosConnectionClientParametersPropertyToRosTemplate(properties.clientParameters),
      'OauthHttpParameters': rosConnectionOauthHttpParametersPropertyToRosTemplate(properties.oauthHttpParameters),
      'AuthorizationEndpoint': ros.stringToRosTemplate(properties.authorizationEndpoint),
      'HttpMethod': ros.stringToRosTemplate(properties.httpMethod),
    };
}

export namespace RosConnection {
    /**
     * @stability external
     */
    export interface QueryStringParametersProperty {
        /**
         * @Property isValueSecret: Whether it is Authentication.
         */
        readonly isValueSecret?: boolean | ros.IResolvable;
        /**
         * @Property value: Request path parameter value.
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: Request path parameter key.
         */
        readonly key?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `QueryStringParametersProperty`
 *
 * @param properties - the TypeScript properties of a `QueryStringParametersProperty`
 *
 * @returns the result of the validation.
 */
function RosConnection_QueryStringParametersPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('isValueSecret', ros.validateBoolean)(properties.isValueSecret));
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "QueryStringParametersProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EventBridge::Connection.QueryStringParameters` resource
 *
 * @param properties - the TypeScript properties of a `QueryStringParametersProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EventBridge::Connection.QueryStringParameters` resource.
 */
// @ts-ignore TS6133
function rosConnectionQueryStringParametersPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosConnection_QueryStringParametersPropertyValidator(properties).assertSuccess();
    return {
      'IsValueSecret': ros.booleanToRosTemplate(properties.isValueSecret),
      'Value': ros.stringToRosTemplate(properties.value),
      'Key': ros.stringToRosTemplate(properties.key),
    };
}

/**
 * Properties for defining a `RosRule`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-eventbridge-rule
 */
export interface RosRuleProps {

    /**
     * @Property eventBusName: The name of the event bus.
     */
    readonly eventBusName: string | ros.IResolvable;

    /**
     * @Property filterPattern: The event pattern, in the JSON format.
     */
    readonly filterPattern: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * @Property ruleName: The name of the event rule.
     */
    readonly ruleName: string | ros.IResolvable;

    /**
     * @Property targets: The event target to which events are delivered.
     */
    readonly targets: Array<RosRule.TargetsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property description: The description of the event rule.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property status: The status of the event rule. Valid values:
     * ENABLE: The event rule is enabled. It is the default state of the event rule.
     * DISABLE: The event rule is disabled.
     */
    readonly status?: string | ros.IResolvable;
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
    errors.collect(ros.propertyValidator('eventBusName', ros.requiredValidator)(properties.eventBusName));
    errors.collect(ros.propertyValidator('eventBusName', ros.validateString)(properties.eventBusName));
    errors.collect(ros.propertyValidator('status', ros.validateString)(properties.status));
    errors.collect(ros.propertyValidator('filterPattern', ros.requiredValidator)(properties.filterPattern));
    errors.collect(ros.propertyValidator('filterPattern', ros.hashValidator(ros.validateAny))(properties.filterPattern));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('targets', ros.requiredValidator)(properties.targets));
    if(properties.targets && (Array.isArray(properties.targets) || (typeof properties.targets) === 'string')) {
        errors.collect(ros.propertyValidator('targets', ros.validateLength)({
            data: properties.targets.length,
            min: 1,
            max: 5,
          }));
    }
    errors.collect(ros.propertyValidator('targets', ros.listValidator(RosRule_TargetsPropertyValidator))(properties.targets));
    errors.collect(ros.propertyValidator('ruleName', ros.requiredValidator)(properties.ruleName));
    errors.collect(ros.propertyValidator('ruleName', ros.validateString)(properties.ruleName));
    return errors.wrap('supplied properties not correct for "RosRuleProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EventBridge::Rule` resource
 *
 * @param properties - the TypeScript properties of a `RosRuleProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EventBridge::Rule` resource.
 */
// @ts-ignore TS6133
function rosRulePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosRulePropsValidator(properties).assertSuccess();
    }
    return {
      'EventBusName': ros.stringToRosTemplate(properties.eventBusName),
      'FilterPattern': ros.hashMapper(ros.objectToRosTemplate)(properties.filterPattern),
      'RuleName': ros.stringToRosTemplate(properties.ruleName),
      'Targets': ros.listMapper(rosRuleTargetsPropertyToRosTemplate)(properties.targets),
      'Description': ros.stringToRosTemplate(properties.description),
      'Status': ros.stringToRosTemplate(properties.status),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::EventBridge::Rule`, which is used to create an event rule for an event bus.
 * @Note This class does not contain additional functions, so it is recommended to use the `Rule` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-eventbridge-rule
 */
export class RosRule extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::EventBridge::Rule";

    /**
     * @Attribute EventBusName: The name of the event bus.
     */
    public readonly attrEventBusName: ros.IResolvable;

    /**
     * @Attribute RuleARN: The Alibaba Cloud Resource Name (ARN) of the event rule. The ARN is used for authorization.
     */
    public readonly attrRuleArn: ros.IResolvable;

    /**
     * @Attribute RuleName: The name of the event rule.
     */
    public readonly attrRuleName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property eventBusName: The name of the event bus.
     */
    public eventBusName: string | ros.IResolvable;

    /**
     * @Property filterPattern: The event pattern, in the JSON format.
     */
    public filterPattern: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * @Property ruleName: The name of the event rule.
     */
    public ruleName: string | ros.IResolvable;

    /**
     * @Property targets: The event target to which events are delivered.
     */
    public targets: Array<RosRule.TargetsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property description: The description of the event rule.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property status: The status of the event rule. Valid values:
     * ENABLE: The event rule is enabled. It is the default state of the event rule.
     * DISABLE: The event rule is disabled.
     */
    public status: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosRuleProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosRule.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrEventBusName = this.getAtt('EventBusName');
        this.attrRuleArn = this.getAtt('RuleARN');
        this.attrRuleName = this.getAtt('RuleName');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.eventBusName = props.eventBusName;
        this.filterPattern = props.filterPattern;
        this.ruleName = props.ruleName;
        this.targets = props.targets;
        this.description = props.description;
        this.status = props.status;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            eventBusName: this.eventBusName,
            filterPattern: this.filterPattern,
            ruleName: this.ruleName,
            targets: this.targets,
            description: this.description,
            status: this.status,
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
    export interface ConcurrentConfigProperty {
        /**
         * @Property concurrency: Number of concurrent connections.
         */
        readonly concurrency: number | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `ConcurrentConfigProperty`
 *
 * @param properties - the TypeScript properties of a `ConcurrentConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosRule_ConcurrentConfigPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('concurrency', ros.requiredValidator)(properties.concurrency));
    errors.collect(ros.propertyValidator('concurrency', ros.validateNumber)(properties.concurrency));
    return errors.wrap('supplied properties not correct for "ConcurrentConfigProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EventBridge::Rule.ConcurrentConfig` resource
 *
 * @param properties - the TypeScript properties of a `ConcurrentConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EventBridge::Rule.ConcurrentConfig` resource.
 */
// @ts-ignore TS6133
function rosRuleConcurrentConfigPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosRule_ConcurrentConfigPropertyValidator(properties).assertSuccess();
    return {
      'Concurrency': ros.numberToRosTemplate(properties.concurrency),
    };
}

export namespace RosRule {
    /**
     * @stability external
     */
    export interface DeadLetterQueueProperty {
        /**
         * @Property arn: The Alibaba Cloud Resource Name (ARN) of the dead-letter queue. Events that are not processed or whose maximum retries are exceeded are written to the dead-letter queue. The ARN feature is supported by the following queue types: MNS and Message Queue for Apache RocketMQ.
         */
        readonly arn: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `DeadLetterQueueProperty`
 *
 * @param properties - the TypeScript properties of a `DeadLetterQueueProperty`
 *
 * @returns the result of the validation.
 */
function RosRule_DeadLetterQueuePropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('arn', ros.requiredValidator)(properties.arn));
    errors.collect(ros.propertyValidator('arn', ros.validateString)(properties.arn));
    return errors.wrap('supplied properties not correct for "DeadLetterQueueProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EventBridge::Rule.DeadLetterQueue` resource
 *
 * @param properties - the TypeScript properties of a `DeadLetterQueueProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EventBridge::Rule.DeadLetterQueue` resource.
 */
// @ts-ignore TS6133
function rosRuleDeadLetterQueuePropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosRule_DeadLetterQueuePropertyValidator(properties).assertSuccess();
    return {
      'Arn': ros.stringToRosTemplate(properties.arn),
    };
}

export namespace RosRule {
    /**
     * @stability external
     */
    export interface ParamListProperty {
        /**
         * @Property form: The transformation method.For more information, see Event target parameters.
         */
        readonly form: string | ros.IResolvable;
        /**
         * @Property value: The event value to be transformed.
         */
        readonly value: string | ros.IResolvable;
        /**
         * @Property resourceKey: The resource key of the transformed event.For more information, see Event target parameters.
         */
        readonly resourceKey: string | ros.IResolvable;
        /**
         * @Property template: The format of the template.
         */
        readonly template?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `ParamListProperty`
 *
 * @param properties - the TypeScript properties of a `ParamListProperty`
 *
 * @returns the result of the validation.
 */
function RosRule_ParamListPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('form', ros.requiredValidator)(properties.form));
    errors.collect(ros.propertyValidator('form', ros.validateString)(properties.form));
    errors.collect(ros.propertyValidator('value', ros.requiredValidator)(properties.value));
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('resourceKey', ros.requiredValidator)(properties.resourceKey));
    errors.collect(ros.propertyValidator('resourceKey', ros.validateString)(properties.resourceKey));
    errors.collect(ros.propertyValidator('template', ros.validateString)(properties.template));
    return errors.wrap('supplied properties not correct for "ParamListProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EventBridge::Rule.ParamList` resource
 *
 * @param properties - the TypeScript properties of a `ParamListProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EventBridge::Rule.ParamList` resource.
 */
// @ts-ignore TS6133
function rosRuleParamListPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosRule_ParamListPropertyValidator(properties).assertSuccess();
    return {
      'Form': ros.stringToRosTemplate(properties.form),
      'Value': ros.stringToRosTemplate(properties.value),
      'ResourceKey': ros.stringToRosTemplate(properties.resourceKey),
      'Template': ros.stringToRosTemplate(properties.template),
    };
}

export namespace RosRule {
    /**
     * @stability external
     */
    export interface TargetsProperty {
        /**
         * @Property errorsTolerance: The fault tolerance policy. Valid values:
     * - ALL: allows fault tolerance. If an error occurs, the event processing is not blocked. If the message fails to be sent after the maximum number of retries specified by the retry policy is reached, the message is delivered to the dead-letter queue or discarded based on your configurations.
     * - NONE: does not allow fault tolerance. If an error occurs and the message fails to be sent after the maximum number of retries specified by the retry policy is reached, the event processing is blocked.
         */
        readonly errorsTolerance?: string | ros.IResolvable;
        /**
         * @Property pushRetryStrategy: The retry policy that is used to push the event. Valid values: BACKOFF_RETRY: backoff retry. The request can be retried up to three times. The interval between two consecutive retries is a random value between 10 and 20 seconds. EXPONENTIAL_DECAY_RETRY: exponential decay retry. The request can be retried up to 176 times. The interval between two consecutive retries exponentially increases to 512 seconds, and the total retry time is one day. The specific retry intervals are 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 512, ..., and 512 seconds, including a maximum of one hundred and sixty-seven 512 seconds in total.
         */
        readonly pushRetryStrategy?: string | ros.IResolvable;
        /**
         * @Property deadLetterQueue: The dead-letter queue. Events that are not processed or whose maximum retries are exceeded are written to the dead-letter queue. The dead-letter queue feature is supported by the following queue types: Message Queue for Apache RocketMQ, Message Service (MNS), Message Queue for Apache Kafka, and EventBridge.
         */
        readonly deadLetterQueue?: RosRule.DeadLetterQueueProperty | ros.IResolvable;
        /**
         * @Property type: The type of the event target.
         */
        readonly type: string | ros.IResolvable;
        /**
         * @Property endpoint: The endpoint of the event target.
         */
        readonly endpoint: string | ros.IResolvable;
        /**
         * @Property concurrentConfig: Concurrency control configuration.
         */
        readonly concurrentConfig?: RosRule.ConcurrentConfigProperty | ros.IResolvable;
        /**
         * @Property paramList: The parameters that the event passes.
         */
        readonly paramList: Array<RosRule.ParamListProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property identity: The custom ID of the event target.
         */
        readonly identity: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `TargetsProperty`
 *
 * @param properties - the TypeScript properties of a `TargetsProperty`
 *
 * @returns the result of the validation.
 */
function RosRule_TargetsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.errorsTolerance && (typeof properties.errorsTolerance) !== 'object') {
        errors.collect(ros.propertyValidator('errorsTolerance', ros.validateAllowedValues)({
          data: properties.errorsTolerance,
          allowedValues: ["ALL","NONE"],
        }));
    }
    errors.collect(ros.propertyValidator('errorsTolerance', ros.validateString)(properties.errorsTolerance));
    errors.collect(ros.propertyValidator('pushRetryStrategy', ros.validateString)(properties.pushRetryStrategy));
    errors.collect(ros.propertyValidator('deadLetterQueue', RosRule_DeadLetterQueuePropertyValidator)(properties.deadLetterQueue));
    errors.collect(ros.propertyValidator('type', ros.requiredValidator)(properties.type));
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('endpoint', ros.requiredValidator)(properties.endpoint));
    errors.collect(ros.propertyValidator('endpoint', ros.validateString)(properties.endpoint));
    errors.collect(ros.propertyValidator('concurrentConfig', RosRule_ConcurrentConfigPropertyValidator)(properties.concurrentConfig));
    errors.collect(ros.propertyValidator('paramList', ros.requiredValidator)(properties.paramList));
    if(properties.paramList && (Array.isArray(properties.paramList) || (typeof properties.paramList) === 'string')) {
        errors.collect(ros.propertyValidator('paramList', ros.validateLength)({
            data: properties.paramList.length,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('paramList', ros.listValidator(RosRule_ParamListPropertyValidator))(properties.paramList));
    errors.collect(ros.propertyValidator('identity', ros.requiredValidator)(properties.identity));
    errors.collect(ros.propertyValidator('identity', ros.validateString)(properties.identity));
    return errors.wrap('supplied properties not correct for "TargetsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EventBridge::Rule.Targets` resource
 *
 * @param properties - the TypeScript properties of a `TargetsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EventBridge::Rule.Targets` resource.
 */
// @ts-ignore TS6133
function rosRuleTargetsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosRule_TargetsPropertyValidator(properties).assertSuccess();
    return {
      'ErrorsTolerance': ros.stringToRosTemplate(properties.errorsTolerance),
      'PushRetryStrategy': ros.stringToRosTemplate(properties.pushRetryStrategy),
      'DeadLetterQueue': rosRuleDeadLetterQueuePropertyToRosTemplate(properties.deadLetterQueue),
      'Type': ros.stringToRosTemplate(properties.type),
      'Endpoint': ros.stringToRosTemplate(properties.endpoint),
      'ConcurrentConfig': rosRuleConcurrentConfigPropertyToRosTemplate(properties.concurrentConfig),
      'ParamList': ros.listMapper(rosRuleParamListPropertyToRosTemplate)(properties.paramList),
      'Id': ros.stringToRosTemplate(properties.identity),
    };
}
