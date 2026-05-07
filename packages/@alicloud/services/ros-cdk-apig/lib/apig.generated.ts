// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosApiAttachment`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-apiattachment
 */
export interface RosApiAttachmentProps {

    /**
     * @Property httpApiId: The ID of the HTTP API.
     */
    readonly httpApiId: string | ros.IResolvable;

    /**
     * @Property description: The description of publication.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property domainIds: The list of user domain names associated with API publishing.
     */
    readonly domainIds?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property routeId: The route ID. When publishing an HTTP API route, it must be passed in.
     */
    readonly routeId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosApiAttachmentProps`
 *
 * @param properties - the TypeScript properties of a `RosApiAttachmentProps`
 *
 * @returns the result of the validation.
 */
function RosApiAttachmentPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('routeId', ros.validateString)(properties.routeId));
    errors.collect(ros.propertyValidator('httpApiId', ros.requiredValidator)(properties.httpApiId));
    errors.collect(ros.propertyValidator('httpApiId', ros.validateString)(properties.httpApiId));
    if(properties.domainIds && (Array.isArray(properties.domainIds) || (typeof properties.domainIds) === 'string')) {
        errors.collect(ros.propertyValidator('domainIds', ros.validateLength)({
            data: properties.domainIds.length,
            min: 1,
            max: 10,
          }));
    }
    errors.collect(ros.propertyValidator('domainIds', ros.listValidator(ros.validateString))(properties.domainIds));
    return errors.wrap('supplied properties not correct for "RosApiAttachmentProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::APIG::ApiAttachment` resource
 *
 * @param properties - the TypeScript properties of a `RosApiAttachmentProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::APIG::ApiAttachment` resource.
 */
// @ts-ignore TS6133
function rosApiAttachmentPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosApiAttachmentPropsValidator(properties).assertSuccess();
    }
    return {
      'HttpApiId': ros.stringToRosTemplate(properties.httpApiId),
      'Description': ros.stringToRosTemplate(properties.description),
      'DomainIds': ros.listMapper(ros.stringToRosTemplate)(properties.domainIds),
      'RouteId': ros.stringToRosTemplate(properties.routeId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::APIG::ApiAttachment`, which is used to attach an API.
 * @Note This class does not contain additional functions, so it is recommended to use the `ApiAttachment` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-apiattachment
 */
export class RosApiAttachment extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::APIG::ApiAttachment";

    /**
     * @Attribute HttpApiId: The ID of the HTTP API.
     */
    public readonly attrHttpApiId: ros.IResolvable;

    /**
     * @Attribute RouteId: The route ID. When publishing an HTTP API route, it must be passed in.
     */
    public readonly attrRouteId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property httpApiId: The ID of the HTTP API.
     */
    public httpApiId: string | ros.IResolvable;

    /**
     * @Property description: The description of publication.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property domainIds: The list of user domain names associated with API publishing.
     */
    public domainIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property routeId: The route ID. When publishing an HTTP API route, it must be passed in.
     */
    public routeId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosApiAttachmentProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosApiAttachment.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrHttpApiId = this.getAtt('HttpApiId');
        this.attrRouteId = this.getAtt('RouteId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.httpApiId = props.httpApiId;
        this.description = props.description;
        this.domainIds = props.domainIds;
        this.routeId = props.routeId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            httpApiId: this.httpApiId,
            description: this.description,
            domainIds: this.domainIds,
            routeId: this.routeId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosApiAttachmentPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosConsumer`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-consumer
 */
export interface RosConsumerProps {

    /**
     * @Property akSkIdentityConfigs: List of AK\/SK identity configurations.
     */
    readonly akSkIdentityConfigs?: Array<RosConsumer.AkSkIdentityConfigsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property apikeyIdentityConfig: API key identity configuration.
     */
    readonly apikeyIdentityConfig?: RosConsumer.ApikeyIdentityConfigProperty | ros.IResolvable;

    /**
     * @Property description: The description of the consumer.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property enable: Whether to enable the consumer.
     */
    readonly enable?: boolean | ros.IResolvable;

    /**
     * @Property gatewayType: The type of the gateway.
     */
    readonly gatewayType?: string | ros.IResolvable;

    /**
     * @Property jwtIdentityConfig: JWT identity configuration.
     */
    readonly jwtIdentityConfig?: RosConsumer.JwtIdentityConfigProperty | ros.IResolvable;

    /**
     * @Property name: The name of the consumer.
     */
    readonly name?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosConsumerProps`
 *
 * @param properties - the TypeScript properties of a `RosConsumerProps`
 *
 * @returns the result of the validation.
 */
function RosConsumerPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('jwtIdentityConfig', RosConsumer_JwtIdentityConfigPropertyValidator)(properties.jwtIdentityConfig));
    errors.collect(ros.propertyValidator('enable', ros.validateBoolean)(properties.enable));
    errors.collect(ros.propertyValidator('gatewayType', ros.validateString)(properties.gatewayType));
    errors.collect(ros.propertyValidator('apikeyIdentityConfig', RosConsumer_ApikeyIdentityConfigPropertyValidator)(properties.apikeyIdentityConfig));
    errors.collect(ros.propertyValidator('akSkIdentityConfigs', ros.listValidator(RosConsumer_AkSkIdentityConfigsPropertyValidator))(properties.akSkIdentityConfigs));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "RosConsumerProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::APIG::Consumer` resource
 *
 * @param properties - the TypeScript properties of a `RosConsumerProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::APIG::Consumer` resource.
 */
// @ts-ignore TS6133
function rosConsumerPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosConsumerPropsValidator(properties).assertSuccess();
    }
    return {
      'AkSkIdentityConfigs': ros.listMapper(rosConsumerAkSkIdentityConfigsPropertyToRosTemplate)(properties.akSkIdentityConfigs),
      'ApikeyIdentityConfig': rosConsumerApikeyIdentityConfigPropertyToRosTemplate(properties.apikeyIdentityConfig),
      'Description': ros.stringToRosTemplate(properties.description),
      'Enable': ros.booleanToRosTemplate(properties.enable),
      'GatewayType': ros.stringToRosTemplate(properties.gatewayType),
      'JwtIdentityConfig': rosConsumerJwtIdentityConfigPropertyToRosTemplate(properties.jwtIdentityConfig),
      'Name': ros.stringToRosTemplate(properties.name),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::APIG::Consumer`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Consumer` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-consumer
 */
export class RosConsumer extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::APIG::Consumer";

    /**
     * @Attribute ConsumerId: The ID of the consumer.
     */
    public readonly attrConsumerId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property akSkIdentityConfigs: List of AK\/SK identity configurations.
     */
    public akSkIdentityConfigs: Array<RosConsumer.AkSkIdentityConfigsProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property apikeyIdentityConfig: API key identity configuration.
     */
    public apikeyIdentityConfig: RosConsumer.ApikeyIdentityConfigProperty | ros.IResolvable | undefined;

    /**
     * @Property description: The description of the consumer.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property enable: Whether to enable the consumer.
     */
    public enable: boolean | ros.IResolvable | undefined;

    /**
     * @Property gatewayType: The type of the gateway.
     */
    public gatewayType: string | ros.IResolvable | undefined;

    /**
     * @Property jwtIdentityConfig: JWT identity configuration.
     */
    public jwtIdentityConfig: RosConsumer.JwtIdentityConfigProperty | ros.IResolvable | undefined;

    /**
     * @Property name: The name of the consumer.
     */
    public name: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosConsumerProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosConsumer.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrConsumerId = this.getAtt('ConsumerId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.akSkIdentityConfigs = props.akSkIdentityConfigs;
        this.apikeyIdentityConfig = props.apikeyIdentityConfig;
        this.description = props.description;
        this.enable = props.enable;
        this.gatewayType = props.gatewayType;
        this.jwtIdentityConfig = props.jwtIdentityConfig;
        this.name = props.name;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            akSkIdentityConfigs: this.akSkIdentityConfigs,
            apikeyIdentityConfig: this.apikeyIdentityConfig,
            description: this.description,
            enable: this.enable,
            gatewayType: this.gatewayType,
            jwtIdentityConfig: this.jwtIdentityConfig,
            name: this.name,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosConsumerPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosConsumer {
    /**
     * @stability external
     */
    export interface AkSkIdentityConfigsProperty {
        /**
         * @Property type: The type of the identity configuration. Valid values: AkSk.
         */
        readonly type?: string | ros.IResolvable;
        /**
         * @Property sk: The Secret Key.
         */
        readonly sk?: string | ros.IResolvable;
        /**
         * @Property ak: The Access Key.
         */
        readonly ak?: string | ros.IResolvable;
        /**
         * @Property generateMode: The generation mode. Valid values: Custom, System.
         */
        readonly generateMode?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `AkSkIdentityConfigsProperty`
 *
 * @param properties - the TypeScript properties of a `AkSkIdentityConfigsProperty`
 *
 * @returns the result of the validation.
 */
function RosConsumer_AkSkIdentityConfigsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.type && (typeof properties.type) !== 'object') {
        errors.collect(ros.propertyValidator('type', ros.validateAllowedValues)({
          data: properties.type,
          allowedValues: ["AkSk"],
        }));
    }
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('sk', ros.validateString)(properties.sk));
    errors.collect(ros.propertyValidator('ak', ros.validateString)(properties.ak));
    if(properties.generateMode && (typeof properties.generateMode) !== 'object') {
        errors.collect(ros.propertyValidator('generateMode', ros.validateAllowedValues)({
          data: properties.generateMode,
          allowedValues: ["Custom","System"],
        }));
    }
    errors.collect(ros.propertyValidator('generateMode', ros.validateString)(properties.generateMode));
    return errors.wrap('supplied properties not correct for "AkSkIdentityConfigsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::APIG::Consumer.AkSkIdentityConfigs` resource
 *
 * @param properties - the TypeScript properties of a `AkSkIdentityConfigsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::APIG::Consumer.AkSkIdentityConfigs` resource.
 */
// @ts-ignore TS6133
function rosConsumerAkSkIdentityConfigsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosConsumer_AkSkIdentityConfigsPropertyValidator(properties).assertSuccess();
    return {
      'Type': ros.stringToRosTemplate(properties.type),
      'Sk': ros.stringToRosTemplate(properties.sk),
      'Ak': ros.stringToRosTemplate(properties.ak),
      'GenerateMode': ros.stringToRosTemplate(properties.generateMode),
    };
}

export namespace RosConsumer {
    /**
     * @stability external
     */
    export interface ApikeyIdentityConfigProperty {
        /**
         * @Property apikeySource: The API key source configuration.
         */
        readonly apikeySource?: RosConsumer.ApikeySourceProperty | ros.IResolvable;
        /**
         * @Property type: The type of the identity configuration. Valid values: Apikey.
         */
        readonly type?: string | ros.IResolvable;
        /**
         * @Property credentials: The list of credentials.
         */
        readonly credentials?: Array<RosConsumer.CredentialsProperty | ros.IResolvable> | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `ApikeyIdentityConfigProperty`
 *
 * @param properties - the TypeScript properties of a `ApikeyIdentityConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosConsumer_ApikeyIdentityConfigPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('apikeySource', RosConsumer_ApikeySourcePropertyValidator)(properties.apikeySource));
    if(properties.type && (typeof properties.type) !== 'object') {
        errors.collect(ros.propertyValidator('type', ros.validateAllowedValues)({
          data: properties.type,
          allowedValues: ["Apikey"],
        }));
    }
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('credentials', ros.listValidator(RosConsumer_CredentialsPropertyValidator))(properties.credentials));
    return errors.wrap('supplied properties not correct for "ApikeyIdentityConfigProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::APIG::Consumer.ApikeyIdentityConfig` resource
 *
 * @param properties - the TypeScript properties of a `ApikeyIdentityConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::APIG::Consumer.ApikeyIdentityConfig` resource.
 */
// @ts-ignore TS6133
function rosConsumerApikeyIdentityConfigPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosConsumer_ApikeyIdentityConfigPropertyValidator(properties).assertSuccess();
    return {
      'ApikeySource': rosConsumerApikeySourcePropertyToRosTemplate(properties.apikeySource),
      'Type': ros.stringToRosTemplate(properties.type),
      'Credentials': ros.listMapper(rosConsumerCredentialsPropertyToRosTemplate)(properties.credentials),
    };
}

export namespace RosConsumer {
    /**
     * @stability external
     */
    export interface ApikeySourceProperty {
        /**
         * @Property value: The value for the API key source.
         */
        readonly value: string | ros.IResolvable;
        /**
         * @Property source: The source of the API key. Valid values: Header, QueryString, Default.
         */
        readonly source: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `ApikeySourceProperty`
 *
 * @param properties - the TypeScript properties of a `ApikeySourceProperty`
 *
 * @returns the result of the validation.
 */
function RosConsumer_ApikeySourcePropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.requiredValidator)(properties.value));
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('source', ros.requiredValidator)(properties.source));
    if(properties.source && (typeof properties.source) !== 'object') {
        errors.collect(ros.propertyValidator('source', ros.validateAllowedValues)({
          data: properties.source,
          allowedValues: ["Header","QueryString","Default"],
        }));
    }
    errors.collect(ros.propertyValidator('source', ros.validateString)(properties.source));
    return errors.wrap('supplied properties not correct for "ApikeySourceProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::APIG::Consumer.ApikeySource` resource
 *
 * @param properties - the TypeScript properties of a `ApikeySourceProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::APIG::Consumer.ApikeySource` resource.
 */
// @ts-ignore TS6133
function rosConsumerApikeySourcePropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosConsumer_ApikeySourcePropertyValidator(properties).assertSuccess();
    return {
      'Value': ros.stringToRosTemplate(properties.value),
      'Source': ros.stringToRosTemplate(properties.source),
    };
}

export namespace RosConsumer {
    /**
     * @stability external
     */
    export interface CredentialsProperty {
        /**
         * @Property apikey: The API key value.
         */
        readonly apikey?: string | ros.IResolvable;
        /**
         * @Property generateMode: The generation mode. Valid values: Custom, System.
         */
        readonly generateMode: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `CredentialsProperty`
 *
 * @param properties - the TypeScript properties of a `CredentialsProperty`
 *
 * @returns the result of the validation.
 */
function RosConsumer_CredentialsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('apikey', ros.validateString)(properties.apikey));
    errors.collect(ros.propertyValidator('generateMode', ros.requiredValidator)(properties.generateMode));
    if(properties.generateMode && (typeof properties.generateMode) !== 'object') {
        errors.collect(ros.propertyValidator('generateMode', ros.validateAllowedValues)({
          data: properties.generateMode,
          allowedValues: ["Custom","System"],
        }));
    }
    errors.collect(ros.propertyValidator('generateMode', ros.validateString)(properties.generateMode));
    return errors.wrap('supplied properties not correct for "CredentialsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::APIG::Consumer.Credentials` resource
 *
 * @param properties - the TypeScript properties of a `CredentialsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::APIG::Consumer.Credentials` resource.
 */
// @ts-ignore TS6133
function rosConsumerCredentialsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosConsumer_CredentialsPropertyValidator(properties).assertSuccess();
    return {
      'Apikey': ros.stringToRosTemplate(properties.apikey),
      'GenerateMode': ros.stringToRosTemplate(properties.generateMode),
    };
}

export namespace RosConsumer {
    /**
     * @stability external
     */
    export interface JwtIdentityConfigProperty {
        /**
         * @Property type: The type of the identity configuration. Valid values: Jwt.
         */
        readonly type?: string | ros.IResolvable;
        /**
         * @Property secretType: The secret type. Valid values: Asymmetry (asymmetric encryption), Symmetry (symmetric encryption).
         */
        readonly secretType?: string | ros.IResolvable;
        /**
         * @Property jwks: The JWKS configuration.
         */
        readonly jwks?: string | ros.IResolvable;
        /**
         * @Property jwtPayloadConfig: The JWT payload configuration.
         */
        readonly jwtPayloadConfig?: RosConsumer.JwtPayloadConfigProperty | ros.IResolvable;
        /**
         * @Property jwtTokenConfig: The JWT token configuration.
         */
        readonly jwtTokenConfig?: RosConsumer.JwtTokenConfigProperty | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `JwtIdentityConfigProperty`
 *
 * @param properties - the TypeScript properties of a `JwtIdentityConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosConsumer_JwtIdentityConfigPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.type && (typeof properties.type) !== 'object') {
        errors.collect(ros.propertyValidator('type', ros.validateAllowedValues)({
          data: properties.type,
          allowedValues: ["Jwt"],
        }));
    }
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('secretType', ros.validateString)(properties.secretType));
    errors.collect(ros.propertyValidator('jwks', ros.validateString)(properties.jwks));
    errors.collect(ros.propertyValidator('jwtPayloadConfig', RosConsumer_JwtPayloadConfigPropertyValidator)(properties.jwtPayloadConfig));
    errors.collect(ros.propertyValidator('jwtTokenConfig', RosConsumer_JwtTokenConfigPropertyValidator)(properties.jwtTokenConfig));
    return errors.wrap('supplied properties not correct for "JwtIdentityConfigProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::APIG::Consumer.JwtIdentityConfig` resource
 *
 * @param properties - the TypeScript properties of a `JwtIdentityConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::APIG::Consumer.JwtIdentityConfig` resource.
 */
// @ts-ignore TS6133
function rosConsumerJwtIdentityConfigPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosConsumer_JwtIdentityConfigPropertyValidator(properties).assertSuccess();
    return {
      'Type': ros.stringToRosTemplate(properties.type),
      'SecretType': ros.stringToRosTemplate(properties.secretType),
      'Jwks': ros.stringToRosTemplate(properties.jwks),
      'JwtPayloadConfig': rosConsumerJwtPayloadConfigPropertyToRosTemplate(properties.jwtPayloadConfig),
      'JwtTokenConfig': rosConsumerJwtTokenConfigPropertyToRosTemplate(properties.jwtTokenConfig),
    };
}

export namespace RosConsumer {
    /**
     * @stability external
     */
    export interface JwtPayloadConfigProperty {
        /**
         * @Property payloadKeyName: The key name of the JWT payload.
         */
        readonly payloadKeyName?: string | ros.IResolvable;
        /**
         * @Property payloadKeyValue: The value of the JWT payload.
         */
        readonly payloadKeyValue?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `JwtPayloadConfigProperty`
 *
 * @param properties - the TypeScript properties of a `JwtPayloadConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosConsumer_JwtPayloadConfigPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('payloadKeyName', ros.validateString)(properties.payloadKeyName));
    errors.collect(ros.propertyValidator('payloadKeyValue', ros.validateString)(properties.payloadKeyValue));
    return errors.wrap('supplied properties not correct for "JwtPayloadConfigProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::APIG::Consumer.JwtPayloadConfig` resource
 *
 * @param properties - the TypeScript properties of a `JwtPayloadConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::APIG::Consumer.JwtPayloadConfig` resource.
 */
// @ts-ignore TS6133
function rosConsumerJwtPayloadConfigPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosConsumer_JwtPayloadConfigPropertyValidator(properties).assertSuccess();
    return {
      'PayloadKeyName': ros.stringToRosTemplate(properties.payloadKeyName),
      'PayloadKeyValue': ros.stringToRosTemplate(properties.payloadKeyValue),
    };
}

export namespace RosConsumer {
    /**
     * @stability external
     */
    export interface JwtTokenConfigProperty {
        /**
         * @Property pass: Whether to pass through the JWT.
         */
        readonly pass?: boolean | ros.IResolvable;
        /**
         * @Property position: The position where JWT is stored. Valid values: HEADER, QUERY.
         */
        readonly position?: string | ros.IResolvable;
        /**
         * @Property prefix: The prefix for JWT token.
         */
        readonly prefix?: string | ros.IResolvable;
        /**
         * @Property key: The key name for JWT.
         */
        readonly key?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `JwtTokenConfigProperty`
 *
 * @param properties - the TypeScript properties of a `JwtTokenConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosConsumer_JwtTokenConfigPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('pass', ros.validateBoolean)(properties.pass));
    errors.collect(ros.propertyValidator('position', ros.validateString)(properties.position));
    errors.collect(ros.propertyValidator('prefix', ros.validateString)(properties.prefix));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "JwtTokenConfigProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::APIG::Consumer.JwtTokenConfig` resource
 *
 * @param properties - the TypeScript properties of a `JwtTokenConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::APIG::Consumer.JwtTokenConfig` resource.
 */
// @ts-ignore TS6133
function rosConsumerJwtTokenConfigPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosConsumer_JwtTokenConfigPropertyValidator(properties).assertSuccess();
    return {
      'Pass': ros.booleanToRosTemplate(properties.pass),
      'Position': ros.stringToRosTemplate(properties.position),
      'Prefix': ros.stringToRosTemplate(properties.prefix),
      'Key': ros.stringToRosTemplate(properties.key),
    };
}

/**
 * Properties for defining a `RosConsumerAuthorizationRule`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-consumerauthorizationrule
 */
export interface RosConsumerAuthorizationRuleProps {

    /**
     * @Property consumerId: The consumer ID.
     */
    readonly consumerId: string | ros.IResolvable;

    /**
     * @Property resourceIdentifier: Resource identifier for non-standard code sources.
     */
    readonly resourceIdentifier: RosConsumerAuthorizationRule.ResourceIdentifierProperty | ros.IResolvable;

    /**
     * @Property resourceType: The resource type.
     */
    readonly resourceType: string | ros.IResolvable;

    /**
     * @Property expireMode: The expire mode. Valid values: LongTerm, ShortTerm.
     */
    readonly expireMode?: string | ros.IResolvable;

    /**
     * @Property expireTimestamp: The expire timestamp in milliseconds.
     */
    readonly expireTimestamp?: number | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosConsumerAuthorizationRuleProps`
 *
 * @param properties - the TypeScript properties of a `RosConsumerAuthorizationRuleProps`
 *
 * @returns the result of the validation.
 */
function RosConsumerAuthorizationRulePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('resourceIdentifier', ros.requiredValidator)(properties.resourceIdentifier));
    errors.collect(ros.propertyValidator('resourceIdentifier', RosConsumerAuthorizationRule_ResourceIdentifierPropertyValidator)(properties.resourceIdentifier));
    errors.collect(ros.propertyValidator('expireTimestamp', ros.validateNumber)(properties.expireTimestamp));
    errors.collect(ros.propertyValidator('consumerId', ros.requiredValidator)(properties.consumerId));
    errors.collect(ros.propertyValidator('consumerId', ros.validateString)(properties.consumerId));
    errors.collect(ros.propertyValidator('resourceType', ros.requiredValidator)(properties.resourceType));
    errors.collect(ros.propertyValidator('resourceType', ros.validateString)(properties.resourceType));
    if(properties.expireMode && (typeof properties.expireMode) !== 'object') {
        errors.collect(ros.propertyValidator('expireMode', ros.validateAllowedValues)({
          data: properties.expireMode,
          allowedValues: ["LongTerm","ShortTerm"],
        }));
    }
    errors.collect(ros.propertyValidator('expireMode', ros.validateString)(properties.expireMode));
    return errors.wrap('supplied properties not correct for "RosConsumerAuthorizationRuleProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::APIG::ConsumerAuthorizationRule` resource
 *
 * @param properties - the TypeScript properties of a `RosConsumerAuthorizationRuleProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::APIG::ConsumerAuthorizationRule` resource.
 */
// @ts-ignore TS6133
function rosConsumerAuthorizationRulePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosConsumerAuthorizationRulePropsValidator(properties).assertSuccess();
    }
    return {
      'ConsumerId': ros.stringToRosTemplate(properties.consumerId),
      'ResourceIdentifier': rosConsumerAuthorizationRuleResourceIdentifierPropertyToRosTemplate(properties.resourceIdentifier),
      'ResourceType': ros.stringToRosTemplate(properties.resourceType),
      'ExpireMode': ros.stringToRosTemplate(properties.expireMode),
      'ExpireTimestamp': ros.numberToRosTemplate(properties.expireTimestamp),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::APIG::ConsumerAuthorizationRule`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ConsumerAuthorizationRule` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-consumerauthorizationrule
 */
export class RosConsumerAuthorizationRule extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::APIG::ConsumerAuthorizationRule";

    /**
     * @Attribute ConsumerAuthorizationRuleId: The ID of the consumer authorization rule.
     */
    public readonly attrConsumerAuthorizationRuleId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property consumerId: The consumer ID.
     */
    public consumerId: string | ros.IResolvable;

    /**
     * @Property resourceIdentifier: Resource identifier for non-standard code sources.
     */
    public resourceIdentifier: RosConsumerAuthorizationRule.ResourceIdentifierProperty | ros.IResolvable;

    /**
     * @Property resourceType: The resource type.
     */
    public resourceType: string | ros.IResolvable;

    /**
     * @Property expireMode: The expire mode. Valid values: LongTerm, ShortTerm.
     */
    public expireMode: string | ros.IResolvable | undefined;

    /**
     * @Property expireTimestamp: The expire timestamp in milliseconds.
     */
    public expireTimestamp: number | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosConsumerAuthorizationRuleProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosConsumerAuthorizationRule.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrConsumerAuthorizationRuleId = this.getAtt('ConsumerAuthorizationRuleId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.consumerId = props.consumerId;
        this.resourceIdentifier = props.resourceIdentifier;
        this.resourceType = props.resourceType;
        this.expireMode = props.expireMode;
        this.expireTimestamp = props.expireTimestamp;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            consumerId: this.consumerId,
            resourceIdentifier: this.resourceIdentifier,
            resourceType: this.resourceType,
            expireMode: this.expireMode,
            expireTimestamp: this.expireTimestamp,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosConsumerAuthorizationRulePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosConsumerAuthorizationRule {
    /**
     * @stability external
     */
    export interface ResourceIdentifierProperty {
        /**
         * @Property environmentId: The environment ID.
         */
        readonly environmentId: string | ros.IResolvable;
        /**
         * @Property parentResourceId: The parent resource ID.
         */
        readonly parentResourceId?: string | ros.IResolvable;
        /**
         * @Property resourceId: The resource ID.
         */
        readonly resourceId: string | ros.IResolvable;
        /**
         * @Property resources: The resource infos.
         */
        readonly resources?: Array<string | ros.IResolvable> | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `ResourceIdentifierProperty`
 *
 * @param properties - the TypeScript properties of a `ResourceIdentifierProperty`
 *
 * @returns the result of the validation.
 */
function RosConsumerAuthorizationRule_ResourceIdentifierPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('environmentId', ros.requiredValidator)(properties.environmentId));
    errors.collect(ros.propertyValidator('environmentId', ros.validateString)(properties.environmentId));
    errors.collect(ros.propertyValidator('parentResourceId', ros.validateString)(properties.parentResourceId));
    errors.collect(ros.propertyValidator('resourceId', ros.requiredValidator)(properties.resourceId));
    errors.collect(ros.propertyValidator('resourceId', ros.validateString)(properties.resourceId));
    errors.collect(ros.propertyValidator('resources', ros.listValidator(ros.validateString))(properties.resources));
    return errors.wrap('supplied properties not correct for "ResourceIdentifierProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::APIG::ConsumerAuthorizationRule.ResourceIdentifier` resource
 *
 * @param properties - the TypeScript properties of a `ResourceIdentifierProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::APIG::ConsumerAuthorizationRule.ResourceIdentifier` resource.
 */
// @ts-ignore TS6133
function rosConsumerAuthorizationRuleResourceIdentifierPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosConsumerAuthorizationRule_ResourceIdentifierPropertyValidator(properties).assertSuccess();
    return {
      'EnvironmentId': ros.stringToRosTemplate(properties.environmentId),
      'ParentResourceId': ros.stringToRosTemplate(properties.parentResourceId),
      'ResourceId': ros.stringToRosTemplate(properties.resourceId),
      'Resources': ros.listMapper(ros.stringToRosTemplate)(properties.resources),
    };
}

/**
 * Properties for defining a `RosDomain`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-domain
 */
export interface RosDomainProps {

    /**
     * @Property domainName: The name of the Domain.
     */
    readonly domainName: string | ros.IResolvable;

    /**
     * @Property protocol: The types of protocols supported by the domain are as follows:
     * * HTTP: Supports only the HTTP protocol.
     * * HTTPS: Supports only the HTTPS protocol.
     */
    readonly protocol: string | ros.IResolvable;

    /**
     * @Property certIdentifier: The tls Certificate identification.
     */
    readonly certIdentifier?: string | ros.IResolvable;

    /**
     * @Property forceHttps: Set the HTTPS protocol type and whether to enable forced HTTPS redirection.
     */
    readonly forceHttps?: boolean | ros.IResolvable;

    /**
     * @Property http2Option: Whether to enable http2 settings.
     */
    readonly http2Option?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property tlsCipherSuitesConfig: The configuration of the TLS encryption suite
     */
    readonly tlsCipherSuitesConfig?: RosDomain.TlsCipherSuitesConfigProperty | ros.IResolvable;

    /**
     * @Property tlsMax: The maximum version of the TLS protocol. The maximum version of the TLS protocol is 1.3.
     */
    readonly tlsMax?: string | ros.IResolvable;

    /**
     * @Property tlsMin: The minimum version of the TLS protocol. The minimum version of the TLS protocol is 1.0.
     */
    readonly tlsMin?: string | ros.IResolvable;
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
    errors.collect(ros.propertyValidator('tlsCipherSuitesConfig', RosDomain_TlsCipherSuitesConfigPropertyValidator)(properties.tlsCipherSuitesConfig));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('domainName', ros.requiredValidator)(properties.domainName));
    if(properties.domainName && (Array.isArray(properties.domainName) || (typeof properties.domainName) === 'string')) {
        errors.collect(ros.propertyValidator('domainName', ros.validateLength)({
            data: properties.domainName.length,
            min: 1,
            max: 128,
          }));
    }
    errors.collect(ros.propertyValidator('domainName', ros.validateString)(properties.domainName));
    errors.collect(ros.propertyValidator('forceHttps', ros.validateBoolean)(properties.forceHttps));
    if(properties.tlsMax && (typeof properties.tlsMax) !== 'object') {
        errors.collect(ros.propertyValidator('tlsMax', ros.validateAllowedValues)({
          data: properties.tlsMax,
          allowedValues: ["TLS 1.0","TLS 1.1","TLS 1.2","TLS 1.3"],
        }));
    }
    errors.collect(ros.propertyValidator('tlsMax', ros.validateString)(properties.tlsMax));
    errors.collect(ros.propertyValidator('certIdentifier', ros.validateString)(properties.certIdentifier));
    if(properties.tlsMin && (typeof properties.tlsMin) !== 'object') {
        errors.collect(ros.propertyValidator('tlsMin', ros.validateAllowedValues)({
          data: properties.tlsMin,
          allowedValues: ["TLS 1.0","TLS 1.1","TLS 1.2","TLS 1.3"],
        }));
    }
    errors.collect(ros.propertyValidator('tlsMin', ros.validateString)(properties.tlsMin));
    if(properties.http2Option && (typeof properties.http2Option) !== 'object') {
        errors.collect(ros.propertyValidator('http2Option', ros.validateAllowedValues)({
          data: properties.http2Option,
          allowedValues: ["Open","Close"],
        }));
    }
    errors.collect(ros.propertyValidator('http2Option', ros.validateString)(properties.http2Option));
    errors.collect(ros.propertyValidator('protocol', ros.requiredValidator)(properties.protocol));
    if(properties.protocol && (typeof properties.protocol) !== 'object') {
        errors.collect(ros.propertyValidator('protocol', ros.validateAllowedValues)({
          data: properties.protocol,
          allowedValues: ["HTTP","HTTPS"],
        }));
    }
    errors.collect(ros.propertyValidator('protocol', ros.validateString)(properties.protocol));
    return errors.wrap('supplied properties not correct for "RosDomainProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::APIG::Domain` resource
 *
 * @param properties - the TypeScript properties of a `RosDomainProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::APIG::Domain` resource.
 */
// @ts-ignore TS6133
function rosDomainPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDomainPropsValidator(properties).assertSuccess();
    }
    return {
      'DomainName': ros.stringToRosTemplate(properties.domainName),
      'Protocol': ros.stringToRosTemplate(properties.protocol),
      'CertIdentifier': ros.stringToRosTemplate(properties.certIdentifier),
      'ForceHttps': ros.booleanToRosTemplate(properties.forceHttps),
      'Http2Option': ros.stringToRosTemplate(properties.http2Option),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
      'TlsCipherSuitesConfig': rosDomainTlsCipherSuitesConfigPropertyToRosTemplate(properties.tlsCipherSuitesConfig),
      'TlsMax': ros.stringToRosTemplate(properties.tlsMax),
      'TlsMin': ros.stringToRosTemplate(properties.tlsMin),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::APIG::Domain`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Domain` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-domain
 */
export class RosDomain extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::APIG::Domain";

    /**
     * @Attribute CertIdentifier: The tls Certificate identification.
     */
    public readonly attrCertIdentifier: ros.IResolvable;

    /**
     * @Attribute DomainId: The ID of the Domain.
     */
    public readonly attrDomainId: ros.IResolvable;

    /**
     * @Attribute DomainName: The name of the Domain.
     */
    public readonly attrDomainName: ros.IResolvable;

    /**
     * @Attribute ForceHttps: Set the HTTPS protocol type and whether to enable forced HTTPS redirection.
     */
    public readonly attrForceHttps: ros.IResolvable;

    /**
     * @Attribute Http2Option: Whether to enable http2 settings.
     */
    public readonly attrHttp2Option: ros.IResolvable;

    /**
     * @Attribute Protocol: The types of protocols.
     */
    public readonly attrProtocol: ros.IResolvable;

    /**
     * @Attribute ResourceGroupId: The ID of the resource group.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * @Attribute TlsCipherSuitesConfig: The configuration of the TLS encryption suite.
     */
    public readonly attrTlsCipherSuitesConfig: ros.IResolvable;

    /**
     * @Attribute TlsMax: The maximum version of the TLS protocol. The maximum version of the TLS protocol is 1.3.
     */
    public readonly attrTlsMax: ros.IResolvable;

    /**
     * @Attribute TlsMin: The minimum version of the TLS protocol. The minimum version of the TLS protocol is 1.0.
     */
    public readonly attrTlsMin: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property domainName: The name of the Domain.
     */
    public domainName: string | ros.IResolvable;

    /**
     * @Property protocol: The types of protocols supported by the domain are as follows:
     * * HTTP: Supports only the HTTP protocol.
     * * HTTPS: Supports only the HTTPS protocol.
     */
    public protocol: string | ros.IResolvable;

    /**
     * @Property certIdentifier: The tls Certificate identification.
     */
    public certIdentifier: string | ros.IResolvable | undefined;

    /**
     * @Property forceHttps: Set the HTTPS protocol type and whether to enable forced HTTPS redirection.
     */
    public forceHttps: boolean | ros.IResolvable | undefined;

    /**
     * @Property http2Option: Whether to enable http2 settings.
     */
    public http2Option: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property tlsCipherSuitesConfig: The configuration of the TLS encryption suite
     */
    public tlsCipherSuitesConfig: RosDomain.TlsCipherSuitesConfigProperty | ros.IResolvable | undefined;

    /**
     * @Property tlsMax: The maximum version of the TLS protocol. The maximum version of the TLS protocol is 1.3.
     */
    public tlsMax: string | ros.IResolvable | undefined;

    /**
     * @Property tlsMin: The minimum version of the TLS protocol. The minimum version of the TLS protocol is 1.0.
     */
    public tlsMin: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDomainProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDomain.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCertIdentifier = this.getAtt('CertIdentifier');
        this.attrDomainId = this.getAtt('DomainId');
        this.attrDomainName = this.getAtt('DomainName');
        this.attrForceHttps = this.getAtt('ForceHttps');
        this.attrHttp2Option = this.getAtt('Http2Option');
        this.attrProtocol = this.getAtt('Protocol');
        this.attrResourceGroupId = this.getAtt('ResourceGroupId');
        this.attrTlsCipherSuitesConfig = this.getAtt('TlsCipherSuitesConfig');
        this.attrTlsMax = this.getAtt('TlsMax');
        this.attrTlsMin = this.getAtt('TlsMin');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.domainName = props.domainName;
        this.protocol = props.protocol;
        this.certIdentifier = props.certIdentifier;
        this.forceHttps = props.forceHttps;
        this.http2Option = props.http2Option;
        this.resourceGroupId = props.resourceGroupId;
        this.tlsCipherSuitesConfig = props.tlsCipherSuitesConfig;
        this.tlsMax = props.tlsMax;
        this.tlsMin = props.tlsMin;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            domainName: this.domainName,
            protocol: this.protocol,
            certIdentifier: this.certIdentifier,
            forceHttps: this.forceHttps,
            http2Option: this.http2Option,
            resourceGroupId: this.resourceGroupId,
            tlsCipherSuitesConfig: this.tlsCipherSuitesConfig,
            tlsMax: this.tlsMax,
            tlsMin: this.tlsMin,
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
    export interface TlsCipherSuiteProperty {
        /**
         * @Property name: The name of the cipher suite.
         */
        readonly name?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `TlsCipherSuiteProperty`
 *
 * @param properties - the TypeScript properties of a `TlsCipherSuiteProperty`
 *
 * @returns the result of the validation.
 */
function RosDomain_TlsCipherSuitePropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "TlsCipherSuiteProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::APIG::Domain.TlsCipherSuite` resource
 *
 * @param properties - the TypeScript properties of a `TlsCipherSuiteProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::APIG::Domain.TlsCipherSuite` resource.
 */
// @ts-ignore TS6133
function rosDomainTlsCipherSuitePropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosDomain_TlsCipherSuitePropertyValidator(properties).assertSuccess();
    return {
      'Name': ros.stringToRosTemplate(properties.name),
    };
}

export namespace RosDomain {
    /**
     * @stability external
     */
    export interface TlsCipherSuitesConfigProperty {
        /**
         * @Property tlsCipherSuite: Tls Cipher Suite.
         */
        readonly tlsCipherSuite?: Array<RosDomain.TlsCipherSuiteProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property configType: Config type, Default or Custom.
         */
        readonly configType?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `TlsCipherSuitesConfigProperty`
 *
 * @param properties - the TypeScript properties of a `TlsCipherSuitesConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosDomain_TlsCipherSuitesConfigPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.tlsCipherSuite && (Array.isArray(properties.tlsCipherSuite) || (typeof properties.tlsCipherSuite) === 'string')) {
        errors.collect(ros.propertyValidator('tlsCipherSuite', ros.validateLength)({
            data: properties.tlsCipherSuite.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tlsCipherSuite', ros.listValidator(RosDomain_TlsCipherSuitePropertyValidator))(properties.tlsCipherSuite));
    if(properties.configType && (typeof properties.configType) !== 'object') {
        errors.collect(ros.propertyValidator('configType', ros.validateAllowedValues)({
          data: properties.configType,
          allowedValues: ["Default","Custom"],
        }));
    }
    errors.collect(ros.propertyValidator('configType', ros.validateString)(properties.configType));
    return errors.wrap('supplied properties not correct for "TlsCipherSuitesConfigProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::APIG::Domain.TlsCipherSuitesConfig` resource
 *
 * @param properties - the TypeScript properties of a `TlsCipherSuitesConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::APIG::Domain.TlsCipherSuitesConfig` resource.
 */
// @ts-ignore TS6133
function rosDomainTlsCipherSuitesConfigPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosDomain_TlsCipherSuitesConfigPropertyValidator(properties).assertSuccess();
    return {
      'TlsCipherSuite': ros.listMapper(rosDomainTlsCipherSuitePropertyToRosTemplate)(properties.tlsCipherSuite),
      'ConfigType': ros.stringToRosTemplate(properties.configType),
    };
}

/**
 * Properties for defining a `RosGateway`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-gateway
 */
export interface RosGatewayProps {

    /**
     * @Property gatewayName: The name of the Gateway.
     */
    readonly gatewayName: string | ros.IResolvable;

    /**
     * @Property networkAccessConfig: Network Access Configuration.
     */
    readonly networkAccessConfig: RosGateway.NetworkAccessConfigProperty | ros.IResolvable;

    /**
     * @Property paymentType: The payment type of the gateway. Valid values:
     * * PayAsYouGo
     * * Subscription
     */
    readonly paymentType: string | ros.IResolvable;

    /**
     * @Property spec: Gateway instance specifications.
     */
    readonly spec: string | ros.IResolvable;

    /**
     * @Property zoneConfig: Availability Zone Configuration.
     */
    readonly zoneConfig: RosGateway.ZoneConfigProperty | ros.IResolvable;

    /**
     * @Property gatewayType: Describes the gateway type, which is categorized into the following two types:
     * * API: indicates an API gateway
     * * AI: Indicates an AI gateway.
     * Default value: API.
     */
    readonly gatewayType?: string | ros.IResolvable;

    /**
     * @Property logConfig: Log Configuration.
     */
    readonly logConfig?: RosGateway.LogConfigProperty | ros.IResolvable;

    /**
     * @Property period: The purchase time of the gateway. This parameter is only valid when updating PaymentType from PayAsYouGo to Subscription.
     */
    readonly period?: number | ros.IResolvable;

    /**
     * @Property periodUnit: The unit of the purchase time of the gateway. This parameter is only valid when updating PaymentType from PayAsYouGo to Subscription.
     */
    readonly periodUnit?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property tags: Tags of The tags of the Gateway..
     */
    readonly tags?: RosGateway.TagsProperty[];

    /**
     * @Property vpc: The VPC associated with the Gateway.
     */
    readonly vpc?: RosGateway.VpcProperty | ros.IResolvable;

    /**
     * @Property vSwitch: The virtual switch associated with the Gateway.
     */
    readonly vSwitch?: RosGateway.VSwitchProperty | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosGatewayProps`
 *
 * @param properties - the TypeScript properties of a `RosGatewayProps`
 *
 * @returns the result of the validation.
 */
function RosGatewayPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('networkAccessConfig', ros.requiredValidator)(properties.networkAccessConfig));
    errors.collect(ros.propertyValidator('networkAccessConfig', RosGateway_NetworkAccessConfigPropertyValidator)(properties.networkAccessConfig));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('vpc', RosGateway_VpcPropertyValidator)(properties.vpc));
    if(properties.gatewayType && (typeof properties.gatewayType) !== 'object') {
        errors.collect(ros.propertyValidator('gatewayType', ros.validateAllowedValues)({
          data: properties.gatewayType,
          allowedValues: ["API","AI"],
        }));
    }
    errors.collect(ros.propertyValidator('gatewayType', ros.validateString)(properties.gatewayType));
    if(properties.period && (typeof properties.period) !== 'object') {
        errors.collect(ros.propertyValidator('period', ros.validateAllowedValues)({
          data: properties.period,
          allowedValues: [1,2,3,4,5,6,7,8,9],
        }));
    }
    errors.collect(ros.propertyValidator('period', ros.validateNumber)(properties.period));
    errors.collect(ros.propertyValidator('vSwitch', RosGateway_VSwitchPropertyValidator)(properties.vSwitch));
    errors.collect(ros.propertyValidator('zoneConfig', ros.requiredValidator)(properties.zoneConfig));
    errors.collect(ros.propertyValidator('zoneConfig', RosGateway_ZoneConfigPropertyValidator)(properties.zoneConfig));
    errors.collect(ros.propertyValidator('paymentType', ros.requiredValidator)(properties.paymentType));
    if(properties.paymentType && (typeof properties.paymentType) !== 'object') {
        errors.collect(ros.propertyValidator('paymentType', ros.validateAllowedValues)({
          data: properties.paymentType,
          allowedValues: ["PayAsYouGo","PostPaid","PayOnDemand","Postpaid","PostPay","POSTPAY","postPaid","Subscription","PrePaid","PrePay","Prepaid","PREPAY","prePaid"],
        }));
    }
    errors.collect(ros.propertyValidator('paymentType', ros.validateString)(properties.paymentType));
    errors.collect(ros.propertyValidator('gatewayName', ros.requiredValidator)(properties.gatewayName));
    errors.collect(ros.propertyValidator('gatewayName', ros.validateString)(properties.gatewayName));
    errors.collect(ros.propertyValidator('spec', ros.requiredValidator)(properties.spec));
    errors.collect(ros.propertyValidator('spec', ros.validateString)(properties.spec));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosGateway_TagsPropertyValidator))(properties.tags));
    errors.collect(ros.propertyValidator('logConfig', RosGateway_LogConfigPropertyValidator)(properties.logConfig));
    if(properties.periodUnit && (typeof properties.periodUnit) !== 'object') {
        errors.collect(ros.propertyValidator('periodUnit', ros.validateAllowedValues)({
          data: properties.periodUnit,
          allowedValues: ["Month","Year"],
        }));
    }
    errors.collect(ros.propertyValidator('periodUnit', ros.validateString)(properties.periodUnit));
    return errors.wrap('supplied properties not correct for "RosGatewayProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::APIG::Gateway` resource
 *
 * @param properties - the TypeScript properties of a `RosGatewayProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::APIG::Gateway` resource.
 */
// @ts-ignore TS6133
function rosGatewayPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosGatewayPropsValidator(properties).assertSuccess();
    }
    return {
      'GatewayName': ros.stringToRosTemplate(properties.gatewayName),
      'NetworkAccessConfig': rosGatewayNetworkAccessConfigPropertyToRosTemplate(properties.networkAccessConfig),
      'PaymentType': ros.stringToRosTemplate(properties.paymentType),
      'Spec': ros.stringToRosTemplate(properties.spec),
      'ZoneConfig': rosGatewayZoneConfigPropertyToRosTemplate(properties.zoneConfig),
      'GatewayType': ros.stringToRosTemplate(properties.gatewayType),
      'LogConfig': rosGatewayLogConfigPropertyToRosTemplate(properties.logConfig),
      'Period': ros.numberToRosTemplate(properties.period),
      'PeriodUnit': ros.stringToRosTemplate(properties.periodUnit),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
      'Tags': ros.listMapper(rosGatewayTagsPropertyToRosTemplate)(properties.tags),
      'Vpc': rosGatewayVpcPropertyToRosTemplate(properties.vpc),
      'VSwitch': rosGatewayVSwitchPropertyToRosTemplate(properties.vSwitch),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::APIG::Gateway`, which is used to create a Cloud-native API Gateway.
 * @Note This class does not contain additional functions, so it is recommended to use the `Gateway` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-gateway
 */
export class RosGateway extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::APIG::Gateway";

    /**
     * @Attribute CreateTime: The creation timestamp. Unit: milliseconds.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute Environments: The list of environments associated with the Gateway.
     */
    public readonly attrEnvironments: ros.IResolvable;

    /**
     * @Attribute ExpireTime: Package year and package month expiration timestamp. Unit: milliseconds.
     */
    public readonly attrExpireTime: ros.IResolvable;

    /**
     * @Attribute GatewayId: The ID of the Gateway.
     */
    public readonly attrGatewayId: ros.IResolvable;

    /**
     * @Attribute GatewayName: The name of the resource.
     */
    public readonly attrGatewayName: ros.IResolvable;

    /**
     * @Attribute GatewayType: The type of the gateway.
     */
    public readonly attrGatewayType: ros.IResolvable;

    /**
     * @Attribute LoadBalancers: The list of Gateway ingress addresses.
     */
    public readonly attrLoadBalancers: ros.IResolvable;

    /**
     * @Attribute PaymentType: The payment type of the gateway.
     */
    public readonly attrPaymentType: ros.IResolvable;

    /**
     * @Attribute ResourceGroupId: The ID of the resource group.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * @Attribute SecurityGroup: The Security Group of the Gateway.
     */
    public readonly attrSecurityGroup: ros.IResolvable;

    /**
     * @Attribute Spec: Gateway instance specifications.
     */
    public readonly attrSpec: ros.IResolvable;

    /**
     * @Attribute Tags: The tags of the Gateway.
     */
    public readonly attrTags: ros.IResolvable;

    /**
     * @Attribute UpdateTime: Update the timestamp. Unit: milliseconds.
     */
    public readonly attrUpdateTime: ros.IResolvable;

    /**
     * @Attribute VSwitch: The virtual switch associated with the Gateway.
     */
    public readonly attrVSwitch: ros.IResolvable;

    /**
     * @Attribute Version: The gateway version.
     */
    public readonly attrVersion: ros.IResolvable;

    /**
     * @Attribute Vpc: The VPC associated with the Gateway.
     */
    public readonly attrVpc: ros.IResolvable;

    /**
     * @Attribute Zones: The List of zones associated with the Gateway.
     */
    public readonly attrZones: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property gatewayName: The name of the Gateway.
     */
    public gatewayName: string | ros.IResolvable;

    /**
     * @Property networkAccessConfig: Network Access Configuration.
     */
    public networkAccessConfig: RosGateway.NetworkAccessConfigProperty | ros.IResolvable;

    /**
     * @Property paymentType: The payment type of the gateway. Valid values:
     * * PayAsYouGo
     * * Subscription
     */
    public paymentType: string | ros.IResolvable;

    /**
     * @Property spec: Gateway instance specifications.
     */
    public spec: string | ros.IResolvable;

    /**
     * @Property zoneConfig: Availability Zone Configuration.
     */
    public zoneConfig: RosGateway.ZoneConfigProperty | ros.IResolvable;

    /**
     * @Property gatewayType: Describes the gateway type, which is categorized into the following two types:
     * * API: indicates an API gateway
     * * AI: Indicates an AI gateway.
     * Default value: API.
     */
    public gatewayType: string | ros.IResolvable | undefined;

    /**
     * @Property logConfig: Log Configuration.
     */
    public logConfig: RosGateway.LogConfigProperty | ros.IResolvable | undefined;

    /**
     * @Property period: The purchase time of the gateway. This parameter is only valid when updating PaymentType from PayAsYouGo to Subscription.
     */
    public period: number | ros.IResolvable | undefined;

    /**
     * @Property periodUnit: The unit of the purchase time of the gateway. This parameter is only valid when updating PaymentType from PayAsYouGo to Subscription.
     */
    public periodUnit: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property tags: Tags of The tags of the Gateway..
     */
    public tags: RosGateway.TagsProperty[] | undefined;

    /**
     * @Property vpc: The VPC associated with the Gateway.
     */
    public vpc: RosGateway.VpcProperty | ros.IResolvable | undefined;

    /**
     * @Property vSwitch: The virtual switch associated with the Gateway.
     */
    public vSwitch: RosGateway.VSwitchProperty | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosGatewayProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosGateway.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrEnvironments = this.getAtt('Environments');
        this.attrExpireTime = this.getAtt('ExpireTime');
        this.attrGatewayId = this.getAtt('GatewayId');
        this.attrGatewayName = this.getAtt('GatewayName');
        this.attrGatewayType = this.getAtt('GatewayType');
        this.attrLoadBalancers = this.getAtt('LoadBalancers');
        this.attrPaymentType = this.getAtt('PaymentType');
        this.attrResourceGroupId = this.getAtt('ResourceGroupId');
        this.attrSecurityGroup = this.getAtt('SecurityGroup');
        this.attrSpec = this.getAtt('Spec');
        this.attrTags = this.getAtt('Tags');
        this.attrUpdateTime = this.getAtt('UpdateTime');
        this.attrVSwitch = this.getAtt('VSwitch');
        this.attrVersion = this.getAtt('Version');
        this.attrVpc = this.getAtt('Vpc');
        this.attrZones = this.getAtt('Zones');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.gatewayName = props.gatewayName;
        this.networkAccessConfig = props.networkAccessConfig;
        this.paymentType = props.paymentType;
        this.spec = props.spec;
        this.zoneConfig = props.zoneConfig;
        this.gatewayType = props.gatewayType;
        this.logConfig = props.logConfig;
        this.period = props.period;
        this.periodUnit = props.periodUnit;
        this.resourceGroupId = props.resourceGroupId;
        this.tags = props.tags;
        this.vpc = props.vpc;
        this.vSwitch = props.vSwitch;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            gatewayName: this.gatewayName,
            networkAccessConfig: this.networkAccessConfig,
            paymentType: this.paymentType,
            spec: this.spec,
            zoneConfig: this.zoneConfig,
            gatewayType: this.gatewayType,
            logConfig: this.logConfig,
            period: this.period,
            periodUnit: this.periodUnit,
            resourceGroupId: this.resourceGroupId,
            tags: this.tags,
            vpc: this.vpc,
            vSwitch: this.vSwitch,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosGatewayPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosGateway {
    /**
     * @stability external
     */
    export interface LogConfigProperty {
        /**
         * @Property sls: Log Service Configuration.
         */
        readonly sls?: RosGateway.SlsProperty | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `LogConfigProperty`
 *
 * @param properties - the TypeScript properties of a `LogConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosGateway_LogConfigPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('sls', RosGateway_SlsPropertyValidator)(properties.sls));
    return errors.wrap('supplied properties not correct for "LogConfigProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::APIG::Gateway.LogConfig` resource
 *
 * @param properties - the TypeScript properties of a `LogConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::APIG::Gateway.LogConfig` resource.
 */
// @ts-ignore TS6133
function rosGatewayLogConfigPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosGateway_LogConfigPropertyValidator(properties).assertSuccess();
    return {
      'Sls': rosGatewaySlsPropertyToRosTemplate(properties.sls),
    };
}

export namespace RosGateway {
    /**
     * @stability external
     */
    export interface NetworkAccessConfigProperty {
        /**
         * @Property type: Network Access Type. Valid values:
     * * Internet
     * * Intranet
     * * InternetAndIntranet
         */
        readonly type: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `NetworkAccessConfigProperty`
 *
 * @param properties - the TypeScript properties of a `NetworkAccessConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosGateway_NetworkAccessConfigPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('type', ros.requiredValidator)(properties.type));
    if(properties.type && (typeof properties.type) !== 'object') {
        errors.collect(ros.propertyValidator('type', ros.validateAllowedValues)({
          data: properties.type,
          allowedValues: ["Internet","Intranet","InternetAndIntranet"],
        }));
    }
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    return errors.wrap('supplied properties not correct for "NetworkAccessConfigProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::APIG::Gateway.NetworkAccessConfig` resource
 *
 * @param properties - the TypeScript properties of a `NetworkAccessConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::APIG::Gateway.NetworkAccessConfig` resource.
 */
// @ts-ignore TS6133
function rosGatewayNetworkAccessConfigPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosGateway_NetworkAccessConfigPropertyValidator(properties).assertSuccess();
    return {
      'Type': ros.stringToRosTemplate(properties.type),
    };
}

export namespace RosGateway {
    /**
     * @stability external
     */
    export interface SlsProperty {
        /**
         * @Property enable: Enable Log Service.
         */
        readonly enable?: boolean | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `SlsProperty`
 *
 * @param properties - the TypeScript properties of a `SlsProperty`
 *
 * @returns the result of the validation.
 */
function RosGateway_SlsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('enable', ros.validateBoolean)(properties.enable));
    return errors.wrap('supplied properties not correct for "SlsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::APIG::Gateway.Sls` resource
 *
 * @param properties - the TypeScript properties of a `SlsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::APIG::Gateway.Sls` resource.
 */
// @ts-ignore TS6133
function rosGatewaySlsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosGateway_SlsPropertyValidator(properties).assertSuccess();
    return {
      'Enable': ros.booleanToRosTemplate(properties.enable),
    };
}

export namespace RosGateway {
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
function RosGateway_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::APIG::Gateway.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::APIG::Gateway.Tags` resource.
 */
// @ts-ignore TS6133
function rosGatewayTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosGateway_TagsPropertyValidator(properties).assertSuccess();
    return {
      'Value': ros.stringToRosTemplate(properties.value),
      'Key': ros.stringToRosTemplate(properties.key),
    };
}

export namespace RosGateway {
    /**
     * @stability external
     */
    export interface VSwitchProperty {
        /**
         * @Property vSwitchId: The ID of the VSwitch.
         */
        readonly vSwitchId: string | ros.IResolvable;
        /**
         * @Property name: The name of the VSwitch.
         */
        readonly name?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `VSwitchProperty`
 *
 * @param properties - the TypeScript properties of a `VSwitchProperty`
 *
 * @returns the result of the validation.
 */
function RosGateway_VSwitchPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('vSwitchId', ros.requiredValidator)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "VSwitchProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::APIG::Gateway.VSwitch` resource
 *
 * @param properties - the TypeScript properties of a `VSwitchProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::APIG::Gateway.VSwitch` resource.
 */
// @ts-ignore TS6133
function rosGatewayVSwitchPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosGateway_VSwitchPropertyValidator(properties).assertSuccess();
    return {
      'VSwitchId': ros.stringToRosTemplate(properties.vSwitchId),
      'Name': ros.stringToRosTemplate(properties.name),
    };
}

export namespace RosGateway {
    /**
     * @stability external
     */
    export interface VpcProperty {
        /**
         * @Property vpcId: The VPC network ID.
         */
        readonly vpcId: string | ros.IResolvable;
        /**
         * @Property name: The name of the VPC gateway.
         */
        readonly name?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `VpcProperty`
 *
 * @param properties - the TypeScript properties of a `VpcProperty`
 *
 * @returns the result of the validation.
 */
function RosGateway_VpcPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('vpcId', ros.requiredValidator)(properties.vpcId));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "VpcProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::APIG::Gateway.Vpc` resource
 *
 * @param properties - the TypeScript properties of a `VpcProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::APIG::Gateway.Vpc` resource.
 */
// @ts-ignore TS6133
function rosGatewayVpcPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosGateway_VpcPropertyValidator(properties).assertSuccess();
    return {
      'VpcId': ros.stringToRosTemplate(properties.vpcId),
      'Name': ros.stringToRosTemplate(properties.name),
    };
}

export namespace RosGateway {
    /**
     * @stability external
     */
    export interface ZoneConfigProperty {
        /**
         * @Property selectOption: Availability Zone Options. Valid values:
     * * Auto
     * * Manual
         */
        readonly selectOption: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `ZoneConfigProperty`
 *
 * @param properties - the TypeScript properties of a `ZoneConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosGateway_ZoneConfigPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('selectOption', ros.requiredValidator)(properties.selectOption));
    if(properties.selectOption && (typeof properties.selectOption) !== 'object') {
        errors.collect(ros.propertyValidator('selectOption', ros.validateAllowedValues)({
          data: properties.selectOption,
          allowedValues: ["Auto","Manual"],
        }));
    }
    errors.collect(ros.propertyValidator('selectOption', ros.validateString)(properties.selectOption));
    return errors.wrap('supplied properties not correct for "ZoneConfigProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::APIG::Gateway.ZoneConfig` resource
 *
 * @param properties - the TypeScript properties of a `ZoneConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::APIG::Gateway.ZoneConfig` resource.
 */
// @ts-ignore TS6133
function rosGatewayZoneConfigPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosGateway_ZoneConfigPropertyValidator(properties).assertSuccess();
    return {
      'SelectOption': ros.stringToRosTemplate(properties.selectOption),
    };
}

/**
 * Properties for defining a `RosHttpApi`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-httpapi
 */
export interface RosHttpApiProps {

    /**
     * @Property httpApiName: The name of the API.
     */
    readonly httpApiName: string | ros.IResolvable;

    /**
     * @Property protocols: List of API Access Protocols.
     */
    readonly protocols: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property basePath: The base path of the API should start with a \/.
     */
    readonly basePath?: string | ros.IResolvable;

    /**
     * @Property description: Description of API.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property type: The type of HTTP API, Valid values:
     * * Http
     * * Rest
     * * WebSocket
     * * HttpIngress
     */
    readonly type?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosHttpApiProps`
 *
 * @param properties - the TypeScript properties of a `RosHttpApiProps`
 *
 * @returns the result of the validation.
 */
function RosHttpApiPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('httpApiName', ros.requiredValidator)(properties.httpApiName));
    if(properties.httpApiName && (Array.isArray(properties.httpApiName) || (typeof properties.httpApiName) === 'string')) {
        errors.collect(ros.propertyValidator('httpApiName', ros.validateLength)({
            data: properties.httpApiName.length,
            min: 1,
            max: 64,
          }));
    }
    errors.collect(ros.propertyValidator('httpApiName', ros.validateString)(properties.httpApiName));
    if(properties.type && (typeof properties.type) !== 'object') {
        errors.collect(ros.propertyValidator('type', ros.validateAllowedValues)({
          data: properties.type,
          allowedValues: ["Http","Rest","WebSocket","HttpIngress"],
        }));
    }
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('protocols', ros.requiredValidator)(properties.protocols));
    if(properties.protocols && (Array.isArray(properties.protocols) || (typeof properties.protocols) === 'string')) {
        errors.collect(ros.propertyValidator('protocols', ros.validateLength)({
            data: properties.protocols.length,
            min: undefined,
            max: 2,
          }));
    }
    errors.collect(ros.propertyValidator('protocols', ros.listValidator(ros.validateString))(properties.protocols));
    if(properties.description && (Array.isArray(properties.description) || (typeof properties.description) === 'string')) {
        errors.collect(ros.propertyValidator('description', ros.validateLength)({
            data: properties.description.length,
            min: 0,
            max: 225,
          }));
    }
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('basePath', ros.validateString)(properties.basePath));
    return errors.wrap('supplied properties not correct for "RosHttpApiProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::APIG::HttpApi` resource
 *
 * @param properties - the TypeScript properties of a `RosHttpApiProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::APIG::HttpApi` resource.
 */
// @ts-ignore TS6133
function rosHttpApiPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosHttpApiPropsValidator(properties).assertSuccess();
    }
    return {
      'HttpApiName': ros.stringToRosTemplate(properties.httpApiName),
      'Protocols': ros.listMapper(ros.stringToRosTemplate)(properties.protocols),
      'BasePath': ros.stringToRosTemplate(properties.basePath),
      'Description': ros.stringToRosTemplate(properties.description),
      'Type': ros.stringToRosTemplate(properties.type),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::APIG::HttpApi`, which is used to create an HTTP API.
 * @Note This class does not contain additional functions, so it is recommended to use the `HttpApi` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-httpapi
 */
export class RosHttpApi extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::APIG::HttpApi";

    /**
     * @Attribute BasePath: The base path of the API.
     */
    public readonly attrBasePath: ros.IResolvable;

    /**
     * @Attribute Description: Description of API.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * @Attribute Environments: Published Environmental Information of the API.
     */
    public readonly attrEnvironments: ros.IResolvable;

    /**
     * @Attribute HttpApiId: The ID of the API.
     */
    public readonly attrHttpApiId: ros.IResolvable;

    /**
     * @Attribute HttpApiName: The name of the API.
     */
    public readonly attrHttpApiName: ros.IResolvable;

    /**
     * @Attribute Protocols: List of API Access Protocols.
     */
    public readonly attrProtocols: ros.IResolvable;

    /**
     * @Attribute Type: The type of HTTP API
     */
    public readonly attrType: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property httpApiName: The name of the API.
     */
    public httpApiName: string | ros.IResolvable;

    /**
     * @Property protocols: List of API Access Protocols.
     */
    public protocols: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property basePath: The base path of the API should start with a \/.
     */
    public basePath: string | ros.IResolvable | undefined;

    /**
     * @Property description: Description of API.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property type: The type of HTTP API, Valid values:
     * * Http
     * * Rest
     * * WebSocket
     * * HttpIngress
     */
    public type: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosHttpApiProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosHttpApi.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrBasePath = this.getAtt('BasePath');
        this.attrDescription = this.getAtt('Description');
        this.attrEnvironments = this.getAtt('Environments');
        this.attrHttpApiId = this.getAtt('HttpApiId');
        this.attrHttpApiName = this.getAtt('HttpApiName');
        this.attrProtocols = this.getAtt('Protocols');
        this.attrType = this.getAtt('Type');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.httpApiName = props.httpApiName;
        this.protocols = props.protocols;
        this.basePath = props.basePath;
        this.description = props.description;
        this.type = props.type;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            httpApiName: this.httpApiName,
            protocols: this.protocols,
            basePath: this.basePath,
            description: this.description,
            type: this.type,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosHttpApiPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosOperation`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-operation
 */
export interface RosOperationProps {

    /**
     * @Property httpApiId: The HTTP API ID to which the interface belongs
     */
    readonly httpApiId: string | ros.IResolvable;

    /**
     * @Property method: The method of http protocol.
     */
    readonly method: string | ros.IResolvable;

    /**
     * @Property operationName: The name of the operation.
     */
    readonly operationName: string | ros.IResolvable;

    /**
     * @Property path: The interface path of the operation.
     */
    readonly path: string | ros.IResolvable;

    /**
     * @Property description: The description of the operation.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property mock: Mock configuration.
     */
    readonly mock?: RosOperation.MockProperty | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosOperationProps`
 *
 * @param properties - the TypeScript properties of a `RosOperationProps`
 *
 * @returns the result of the validation.
 */
function RosOperationPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('path', ros.requiredValidator)(properties.path));
    errors.collect(ros.propertyValidator('path', ros.validateString)(properties.path));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('operationName', ros.requiredValidator)(properties.operationName));
    errors.collect(ros.propertyValidator('operationName', ros.validateString)(properties.operationName));
    errors.collect(ros.propertyValidator('method', ros.requiredValidator)(properties.method));
    if(properties.method && (typeof properties.method) !== 'object') {
        errors.collect(ros.propertyValidator('method', ros.validateAllowedValues)({
          data: properties.method,
          allowedValues: ["GET","POST","PUT","DELETE","HEAD","OPTIONS","CONNECT","PATCH","TRACE"],
        }));
    }
    errors.collect(ros.propertyValidator('method', ros.validateString)(properties.method));
    errors.collect(ros.propertyValidator('httpApiId', ros.requiredValidator)(properties.httpApiId));
    errors.collect(ros.propertyValidator('httpApiId', ros.validateString)(properties.httpApiId));
    errors.collect(ros.propertyValidator('mock', RosOperation_MockPropertyValidator)(properties.mock));
    return errors.wrap('supplied properties not correct for "RosOperationProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::APIG::Operation` resource
 *
 * @param properties - the TypeScript properties of a `RosOperationProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::APIG::Operation` resource.
 */
// @ts-ignore TS6133
function rosOperationPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosOperationPropsValidator(properties).assertSuccess();
    }
    return {
      'HttpApiId': ros.stringToRosTemplate(properties.httpApiId),
      'Method': ros.stringToRosTemplate(properties.method),
      'OperationName': ros.stringToRosTemplate(properties.operationName),
      'Path': ros.stringToRosTemplate(properties.path),
      'Description': ros.stringToRosTemplate(properties.description),
      'Mock': rosOperationMockPropertyToRosTemplate(properties.mock),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::APIG::Operation`, which is used to create an operation for an HTTP API.
 * @Note This class does not contain additional functions, so it is recommended to use the `Operation` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-operation
 */
export class RosOperation extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::APIG::Operation";

    /**
     * @Attribute CreateTime: The creation timestamp of the operation.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute Description: The description of the operation.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * @Attribute Method: The method of http protocol.
     */
    public readonly attrMethod: ros.IResolvable;

    /**
     * @Attribute Mock: Mock configuration.
     */
    public readonly attrMock: ros.IResolvable;

    /**
     * @Attribute OperationId: The ID of the operation.
     */
    public readonly attrOperationId: ros.IResolvable;

    /**
     * @Attribute OperationName: The name of the resource.
     */
    public readonly attrOperationName: ros.IResolvable;

    /**
     * @Attribute Path: The interface path of the operation.
     */
    public readonly attrPath: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property httpApiId: The HTTP API ID to which the interface belongs
     */
    public httpApiId: string | ros.IResolvable;

    /**
     * @Property method: The method of http protocol.
     */
    public method: string | ros.IResolvable;

    /**
     * @Property operationName: The name of the operation.
     */
    public operationName: string | ros.IResolvable;

    /**
     * @Property path: The interface path of the operation.
     */
    public path: string | ros.IResolvable;

    /**
     * @Property description: The description of the operation.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property mock: Mock configuration.
     */
    public mock: RosOperation.MockProperty | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosOperationProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosOperation.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrDescription = this.getAtt('Description');
        this.attrMethod = this.getAtt('Method');
        this.attrMock = this.getAtt('Mock');
        this.attrOperationId = this.getAtt('OperationId');
        this.attrOperationName = this.getAtt('OperationName');
        this.attrPath = this.getAtt('Path');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.httpApiId = props.httpApiId;
        this.method = props.method;
        this.operationName = props.operationName;
        this.path = props.path;
        this.description = props.description;
        this.mock = props.mock;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            httpApiId: this.httpApiId,
            method: this.method,
            operationName: this.operationName,
            path: this.path,
            description: this.description,
            mock: this.mock,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosOperationPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosOperation {
    /**
     * @stability external
     */
    export interface MockProperty {
        /**
         * @Property responseContent: Response content.
         */
        readonly responseContent?: string | ros.IResolvable;
        /**
         * @Property responseCode: Response Status Code.
         */
        readonly responseCode: number | ros.IResolvable;
        /**
         * @Property enable: Whether to enable Mock in the interface path.
         */
        readonly enable?: boolean | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `MockProperty`
 *
 * @param properties - the TypeScript properties of a `MockProperty`
 *
 * @returns the result of the validation.
 */
function RosOperation_MockPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('responseContent', ros.validateString)(properties.responseContent));
    errors.collect(ros.propertyValidator('responseCode', ros.requiredValidator)(properties.responseCode));
    errors.collect(ros.propertyValidator('responseCode', ros.validateNumber)(properties.responseCode));
    errors.collect(ros.propertyValidator('enable', ros.validateBoolean)(properties.enable));
    return errors.wrap('supplied properties not correct for "MockProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::APIG::Operation.Mock` resource
 *
 * @param properties - the TypeScript properties of a `MockProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::APIG::Operation.Mock` resource.
 */
// @ts-ignore TS6133
function rosOperationMockPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosOperation_MockPropertyValidator(properties).assertSuccess();
    return {
      'ResponseContent': ros.stringToRosTemplate(properties.responseContent),
      'ResponseCode': ros.numberToRosTemplate(properties.responseCode),
      'Enable': ros.booleanToRosTemplate(properties.enable),
    };
}

/**
 * Properties for defining a `RosPlugin`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-plugin
 */
export interface RosPluginProps {

    /**
     * @Property gatewayId: The ID of the Gateway.
     */
    readonly gatewayId: string | ros.IResolvable;

    /**
     * @Property pluginClassId: The ID of the plugin class.
     */
    readonly pluginClassId: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosPluginProps`
 *
 * @param properties - the TypeScript properties of a `RosPluginProps`
 *
 * @returns the result of the validation.
 */
function RosPluginPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('pluginClassId', ros.requiredValidator)(properties.pluginClassId));
    errors.collect(ros.propertyValidator('pluginClassId', ros.validateString)(properties.pluginClassId));
    errors.collect(ros.propertyValidator('gatewayId', ros.requiredValidator)(properties.gatewayId));
    errors.collect(ros.propertyValidator('gatewayId', ros.validateString)(properties.gatewayId));
    return errors.wrap('supplied properties not correct for "RosPluginProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::APIG::Plugin` resource
 *
 * @param properties - the TypeScript properties of a `RosPluginProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::APIG::Plugin` resource.
 */
// @ts-ignore TS6133
function rosPluginPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosPluginPropsValidator(properties).assertSuccess();
    }
    return {
      'GatewayId': ros.stringToRosTemplate(properties.gatewayId),
      'PluginClassId': ros.stringToRosTemplate(properties.pluginClassId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::APIG::Plugin`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Plugin` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-plugin
 */
export class RosPlugin extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::APIG::Plugin";

    /**
     * @Attribute GatewayId: The ID of the Gateway.
     */
    public readonly attrGatewayId: ros.IResolvable;

    /**
     * @Attribute GatewayName: The name of the gateway.
     */
    public readonly attrGatewayName: ros.IResolvable;

    /**
     * @Attribute PluginClassId: The ID of the plugin class.
     */
    public readonly attrPluginClassId: ros.IResolvable;

    /**
     * @Attribute PluginId: The ID of the plugin.
     */
    public readonly attrPluginId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property gatewayId: The ID of the Gateway.
     */
    public gatewayId: string | ros.IResolvable;

    /**
     * @Property pluginClassId: The ID of the plugin class.
     */
    public pluginClassId: string | ros.IResolvable;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosPluginProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosPlugin.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrGatewayId = this.getAtt('GatewayId');
        this.attrGatewayName = this.getAtt('GatewayName');
        this.attrPluginClassId = this.getAtt('PluginClassId');
        this.attrPluginId = this.getAtt('PluginId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.gatewayId = props.gatewayId;
        this.pluginClassId = props.pluginClassId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            gatewayId: this.gatewayId,
            pluginClassId: this.pluginClassId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosPluginPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosPluginAttachment`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-pluginattachment
 */
export interface RosPluginAttachmentProps {

    /**
     * @Property pluginInfo: The information about the association of plugin with gateway instance.
     */
    readonly pluginInfo: RosPluginAttachment.PluginInfoProperty | ros.IResolvable;

    /**
     * @Property attachResourceId: The resource ID to be attached by the plugin.
     */
    readonly attachResourceId?: string | ros.IResolvable;

    /**
     * @Property attachResourceIds: The list of resource IDs to be attached by the plugin.
     */
    readonly attachResourceIds?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property attachResourceType: The type of the resource to be attached by the plugin.
     */
    readonly attachResourceType?: string | ros.IResolvable;

    /**
     * @Property enable: Whether to enable this plugin, default value is false.
     */
    readonly enable?: boolean | ros.IResolvable;

    /**
     * @Property environmentId: The ID of the environment.
     */
    readonly environmentId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosPluginAttachmentProps`
 *
 * @param properties - the TypeScript properties of a `RosPluginAttachmentProps`
 *
 * @returns the result of the validation.
 */
function RosPluginAttachmentPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.attachResourceIds && (Array.isArray(properties.attachResourceIds) || (typeof properties.attachResourceIds) === 'string')) {
        errors.collect(ros.propertyValidator('attachResourceIds', ros.validateLength)({
            data: properties.attachResourceIds.length,
            min: 1,
            max: 10,
          }));
    }
    errors.collect(ros.propertyValidator('attachResourceIds', ros.listValidator(ros.validateString))(properties.attachResourceIds));
    errors.collect(ros.propertyValidator('environmentId', ros.validateString)(properties.environmentId));
    errors.collect(ros.propertyValidator('enable', ros.validateBoolean)(properties.enable));
    errors.collect(ros.propertyValidator('pluginInfo', ros.requiredValidator)(properties.pluginInfo));
    errors.collect(ros.propertyValidator('pluginInfo', RosPluginAttachment_PluginInfoPropertyValidator)(properties.pluginInfo));
    errors.collect(ros.propertyValidator('attachResourceId', ros.validateString)(properties.attachResourceId));
    errors.collect(ros.propertyValidator('attachResourceType', ros.validateString)(properties.attachResourceType));
    return errors.wrap('supplied properties not correct for "RosPluginAttachmentProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::APIG::PluginAttachment` resource
 *
 * @param properties - the TypeScript properties of a `RosPluginAttachmentProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::APIG::PluginAttachment` resource.
 */
// @ts-ignore TS6133
function rosPluginAttachmentPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosPluginAttachmentPropsValidator(properties).assertSuccess();
    }
    return {
      'PluginInfo': rosPluginAttachmentPluginInfoPropertyToRosTemplate(properties.pluginInfo),
      'AttachResourceId': ros.stringToRosTemplate(properties.attachResourceId),
      'AttachResourceIds': ros.listMapper(ros.stringToRosTemplate)(properties.attachResourceIds),
      'AttachResourceType': ros.stringToRosTemplate(properties.attachResourceType),
      'Enable': ros.booleanToRosTemplate(properties.enable),
      'EnvironmentId': ros.stringToRosTemplate(properties.environmentId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::APIG::PluginAttachment`.
 * @Note This class does not contain additional functions, so it is recommended to use the `PluginAttachment` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-pluginattachment
 */
export class RosPluginAttachment extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::APIG::PluginAttachment";

    /**
     * @Attribute AttachResourceId: The resource ID to be attached by the plugin.
     */
    public readonly attrAttachResourceId: ros.IResolvable;

    /**
     * @Attribute AttachResourceIds: The list of resource IDs to be attached by the plugin.
     */
    public readonly attrAttachResourceIds: ros.IResolvable;

    /**
     * @Attribute AttachResourceNames: The list of resource names to be attached by the plugin.
     */
    public readonly attrAttachResourceNames: ros.IResolvable;

    /**
     * @Attribute AttachResourceParentIds: The list of parent IDs for resources to be attached by the plugin.
     */
    public readonly attrAttachResourceParentIds: ros.IResolvable;

    /**
     * @Attribute AttachResourceType: The type of the resource to be attached by the plugin.
     */
    public readonly attrAttachResourceType: ros.IResolvable;

    /**
     * @Attribute Enable: Whether to enable this plugin.
     */
    public readonly attrEnable: ros.IResolvable;

    /**
     * @Attribute EnvironmentId: The ID of the environment.
     */
    public readonly attrEnvironmentId: ros.IResolvable;

    /**
     * @Attribute PluginAttachmentId: The ID of plugin attachment.
     */
    public readonly attrPluginAttachmentId: ros.IResolvable;

    /**
     * @Attribute PluginClassInfo: The type of the plugin.
     */
    public readonly attrPluginClassInfo: ros.IResolvable;

    /**
     * @Attribute PluginInfo: The information about the association of plugin with gateway instance.
     */
    public readonly attrPluginInfo: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property pluginInfo: The information about the association of plugin with gateway instance.
     */
    public pluginInfo: RosPluginAttachment.PluginInfoProperty | ros.IResolvable;

    /**
     * @Property attachResourceId: The resource ID to be attached by the plugin.
     */
    public attachResourceId: string | ros.IResolvable | undefined;

    /**
     * @Property attachResourceIds: The list of resource IDs to be attached by the plugin.
     */
    public attachResourceIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property attachResourceType: The type of the resource to be attached by the plugin.
     */
    public attachResourceType: string | ros.IResolvable | undefined;

    /**
     * @Property enable: Whether to enable this plugin, default value is false.
     */
    public enable: boolean | ros.IResolvable | undefined;

    /**
     * @Property environmentId: The ID of the environment.
     */
    public environmentId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosPluginAttachmentProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosPluginAttachment.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAttachResourceId = this.getAtt('AttachResourceId');
        this.attrAttachResourceIds = this.getAtt('AttachResourceIds');
        this.attrAttachResourceNames = this.getAtt('AttachResourceNames');
        this.attrAttachResourceParentIds = this.getAtt('AttachResourceParentIds');
        this.attrAttachResourceType = this.getAtt('AttachResourceType');
        this.attrEnable = this.getAtt('Enable');
        this.attrEnvironmentId = this.getAtt('EnvironmentId');
        this.attrPluginAttachmentId = this.getAtt('PluginAttachmentId');
        this.attrPluginClassInfo = this.getAtt('PluginClassInfo');
        this.attrPluginInfo = this.getAtt('PluginInfo');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.pluginInfo = props.pluginInfo;
        this.attachResourceId = props.attachResourceId;
        this.attachResourceIds = props.attachResourceIds;
        this.attachResourceType = props.attachResourceType;
        this.enable = props.enable;
        this.environmentId = props.environmentId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            pluginInfo: this.pluginInfo,
            attachResourceId: this.attachResourceId,
            attachResourceIds: this.attachResourceIds,
            attachResourceType: this.attachResourceType,
            enable: this.enable,
            environmentId: this.environmentId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosPluginAttachmentPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosPluginAttachment {
    /**
     * @stability external
     */
    export interface PluginInfoProperty {
        /**
         * @Property pluginConfig: The information about the association of plugin with gateway instance. The value of this parameter must be transmitted using Base64 encoding.
         */
        readonly pluginConfig?: string | ros.IResolvable;
        /**
         * @Property gatewayId: The ID of the Gateway.
         */
        readonly gatewayId: string | ros.IResolvable;
        /**
         * @Property pluginId: The ID of plugin and gateway association.
         */
        readonly pluginId: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `PluginInfoProperty`
 *
 * @param properties - the TypeScript properties of a `PluginInfoProperty`
 *
 * @returns the result of the validation.
 */
function RosPluginAttachment_PluginInfoPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('pluginConfig', ros.validateString)(properties.pluginConfig));
    errors.collect(ros.propertyValidator('gatewayId', ros.requiredValidator)(properties.gatewayId));
    errors.collect(ros.propertyValidator('gatewayId', ros.validateString)(properties.gatewayId));
    errors.collect(ros.propertyValidator('pluginId', ros.requiredValidator)(properties.pluginId));
    errors.collect(ros.propertyValidator('pluginId', ros.validateString)(properties.pluginId));
    return errors.wrap('supplied properties not correct for "PluginInfoProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::APIG::PluginAttachment.PluginInfo` resource
 *
 * @param properties - the TypeScript properties of a `PluginInfoProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::APIG::PluginAttachment.PluginInfo` resource.
 */
// @ts-ignore TS6133
function rosPluginAttachmentPluginInfoPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosPluginAttachment_PluginInfoPropertyValidator(properties).assertSuccess();
    return {
      'PluginConfig': ros.stringToRosTemplate(properties.pluginConfig),
      'GatewayId': ros.stringToRosTemplate(properties.gatewayId),
      'PluginId': ros.stringToRosTemplate(properties.pluginId),
    };
}

/**
 * Properties for defining a `RosPluginClass`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-pluginclass
 */
export interface RosPluginClassProps {

    /**
     * @Property description: The description of the plugin class.
     */
    readonly description: string | ros.IResolvable;

    /**
     * @Property executePriority: The execute priority of the Plugin.
     */
    readonly executePriority: number | ros.IResolvable;

    /**
     * @Property executeStage: The Execution stage.
     */
    readonly executeStage: string | ros.IResolvable;

    /**
     * @Property pluginClassName: The name of the plugin class.
     */
    readonly pluginClassName: string | ros.IResolvable;

    /**
     * @Property version: The version of plugin class.
     */
    readonly version: string | ros.IResolvable;

    /**
     * @Property versionDescription: The description of the version .
     */
    readonly versionDescription: string | ros.IResolvable;

    /**
     * @Property wasmLanguage: the language of the wasm.
     */
    readonly wasmLanguage: string | ros.IResolvable;

    /**
     * @Property wasmUrl: The url of the wasm.
     */
    readonly wasmUrl: string | ros.IResolvable;

    /**
     * @Property alias: The alias of the plugin class.
     */
    readonly alias?: string | ros.IResolvable;

    /**
     * @Property supportedMinGatewayVersion: The supported minimum gateway version.
     */
    readonly supportedMinGatewayVersion?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosPluginClassProps`
 *
 * @param properties - the TypeScript properties of a `RosPluginClassProps`
 *
 * @returns the result of the validation.
 */
function RosPluginClassPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('wasmUrl', ros.requiredValidator)(properties.wasmUrl));
    errors.collect(ros.propertyValidator('wasmUrl', ros.validateString)(properties.wasmUrl));
    errors.collect(ros.propertyValidator('versionDescription', ros.requiredValidator)(properties.versionDescription));
    errors.collect(ros.propertyValidator('versionDescription', ros.validateString)(properties.versionDescription));
    errors.collect(ros.propertyValidator('description', ros.requiredValidator)(properties.description));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('pluginClassName', ros.requiredValidator)(properties.pluginClassName));
    errors.collect(ros.propertyValidator('pluginClassName', ros.validateString)(properties.pluginClassName));
    errors.collect(ros.propertyValidator('version', ros.requiredValidator)(properties.version));
    errors.collect(ros.propertyValidator('version', ros.validateString)(properties.version));
    errors.collect(ros.propertyValidator('alias', ros.validateString)(properties.alias));
    errors.collect(ros.propertyValidator('executePriority', ros.requiredValidator)(properties.executePriority));
    if(properties.executePriority && (typeof properties.executePriority) !== 'object') {
        errors.collect(ros.propertyValidator('executePriority', ros.validateRange)({
            data: properties.executePriority,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('executePriority', ros.validateNumber)(properties.executePriority));
    errors.collect(ros.propertyValidator('supportedMinGatewayVersion', ros.validateString)(properties.supportedMinGatewayVersion));
    errors.collect(ros.propertyValidator('wasmLanguage', ros.requiredValidator)(properties.wasmLanguage));
    if(properties.wasmLanguage && (typeof properties.wasmLanguage) !== 'object') {
        errors.collect(ros.propertyValidator('wasmLanguage', ros.validateAllowedValues)({
          data: properties.wasmLanguage,
          allowedValues: ["Cpp","TinyGo","Rust","AssemblyScript","Zig"],
        }));
    }
    errors.collect(ros.propertyValidator('wasmLanguage', ros.validateString)(properties.wasmLanguage));
    errors.collect(ros.propertyValidator('executeStage', ros.requiredValidator)(properties.executeStage));
    if(properties.executeStage && (typeof properties.executeStage) !== 'object') {
        errors.collect(ros.propertyValidator('executeStage', ros.validateAllowedValues)({
          data: properties.executeStage,
          allowedValues: ["UNSPECIFIED_PHASE","AUTHN","AUTHZ","STATS"],
        }));
    }
    errors.collect(ros.propertyValidator('executeStage', ros.validateString)(properties.executeStage));
    return errors.wrap('supplied properties not correct for "RosPluginClassProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::APIG::PluginClass` resource
 *
 * @param properties - the TypeScript properties of a `RosPluginClassProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::APIG::PluginClass` resource.
 */
// @ts-ignore TS6133
function rosPluginClassPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosPluginClassPropsValidator(properties).assertSuccess();
    }
    return {
      'Description': ros.stringToRosTemplate(properties.description),
      'ExecutePriority': ros.numberToRosTemplate(properties.executePriority),
      'ExecuteStage': ros.stringToRosTemplate(properties.executeStage),
      'PluginClassName': ros.stringToRosTemplate(properties.pluginClassName),
      'Version': ros.stringToRosTemplate(properties.version),
      'VersionDescription': ros.stringToRosTemplate(properties.versionDescription),
      'WasmLanguage': ros.stringToRosTemplate(properties.wasmLanguage),
      'WasmUrl': ros.stringToRosTemplate(properties.wasmUrl),
      'Alias': ros.stringToRosTemplate(properties.alias),
      'SupportedMinGatewayVersion': ros.stringToRosTemplate(properties.supportedMinGatewayVersion),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::APIG::PluginClass`, which is used to create a plug-in class.
 * @Note This class does not contain additional functions, so it is recommended to use the `PluginClass` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-pluginclass
 */
export class RosPluginClass extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::APIG::PluginClass";

    /**
     * @Attribute Alias: The alias of the plugin class.
     */
    public readonly attrAlias: ros.IResolvable;

    /**
     * @Attribute Description: The description of the plugin class.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * @Attribute Document: The document of plugin.
     */
    public readonly attrDocument: ros.IResolvable;

    /**
     * @Attribute PluginClassName: The name of the plugin class.
     */
    public readonly attrPluginClassName: ros.IResolvable;

    /**
     * @Attribute Type: The type of the plugin class.
     */
    public readonly attrType: ros.IResolvable;

    /**
     * @Attribute WasmLanguage: Wasm language.
     */
    public readonly attrWasmLanguage: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property description: The description of the plugin class.
     */
    public description: string | ros.IResolvable;

    /**
     * @Property executePriority: The execute priority of the Plugin.
     */
    public executePriority: number | ros.IResolvable;

    /**
     * @Property executeStage: The Execution stage.
     */
    public executeStage: string | ros.IResolvable;

    /**
     * @Property pluginClassName: The name of the plugin class.
     */
    public pluginClassName: string | ros.IResolvable;

    /**
     * @Property version: The version of plugin class.
     */
    public version: string | ros.IResolvable;

    /**
     * @Property versionDescription: The description of the version .
     */
    public versionDescription: string | ros.IResolvable;

    /**
     * @Property wasmLanguage: the language of the wasm.
     */
    public wasmLanguage: string | ros.IResolvable;

    /**
     * @Property wasmUrl: The url of the wasm.
     */
    public wasmUrl: string | ros.IResolvable;

    /**
     * @Property alias: The alias of the plugin class.
     */
    public alias: string | ros.IResolvable | undefined;

    /**
     * @Property supportedMinGatewayVersion: The supported minimum gateway version.
     */
    public supportedMinGatewayVersion: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosPluginClassProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosPluginClass.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAlias = this.getAtt('Alias');
        this.attrDescription = this.getAtt('Description');
        this.attrDocument = this.getAtt('Document');
        this.attrPluginClassName = this.getAtt('PluginClassName');
        this.attrType = this.getAtt('Type');
        this.attrWasmLanguage = this.getAtt('WasmLanguage');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.description = props.description;
        this.executePriority = props.executePriority;
        this.executeStage = props.executeStage;
        this.pluginClassName = props.pluginClassName;
        this.version = props.version;
        this.versionDescription = props.versionDescription;
        this.wasmLanguage = props.wasmLanguage;
        this.wasmUrl = props.wasmUrl;
        this.alias = props.alias;
        this.supportedMinGatewayVersion = props.supportedMinGatewayVersion;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            description: this.description,
            executePriority: this.executePriority,
            executeStage: this.executeStage,
            pluginClassName: this.pluginClassName,
            version: this.version,
            versionDescription: this.versionDescription,
            wasmLanguage: this.wasmLanguage,
            wasmUrl: this.wasmUrl,
            alias: this.alias,
            supportedMinGatewayVersion: this.supportedMinGatewayVersion,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosPluginClassPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosPolicy`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-policy
 */
export interface RosPolicyProps {

    /**
     * @Property attachResourceIds: The Mount point id list.
     */
    readonly attachResourceIds: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property attachResourceType: Policies support mount point types.
     * HttpApi:HttpApi.
     * Operation: the Operation of the HttpApi.
     * GatewayRoute: Gateway route.
     * GatewayService: Gateway service.
     * GatewayServicePort: The Gateway service port.
     * Domain: The Gateway Domain name.
     * Gateway: Gateway.
     */
    readonly attachResourceType: string | ros.IResolvable;

    /**
     * @Property environmentId: The id of the environment.
     */
    readonly environmentId: string | ros.IResolvable;

    /**
     * @Property gatewayId: The ID of the Gateway.
     */
    readonly gatewayId: string | ros.IResolvable;

    /**
     * @Property policyClassName: The name of the policy class.
     */
    readonly policyClassName: string | ros.IResolvable;

    /**
     * @Property policyConfig: Policy Configuration.
     */
    readonly policyConfig: string | ros.IResolvable;

    /**
     * @Property policyName: The name of the policy.
     */
    readonly policyName?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosPolicyProps`
 *
 * @param properties - the TypeScript properties of a `RosPolicyProps`
 *
 * @returns the result of the validation.
 */
function RosPolicyPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('attachResourceIds', ros.requiredValidator)(properties.attachResourceIds));
    if(properties.attachResourceIds && (Array.isArray(properties.attachResourceIds) || (typeof properties.attachResourceIds) === 'string')) {
        errors.collect(ros.propertyValidator('attachResourceIds', ros.validateLength)({
            data: properties.attachResourceIds.length,
            min: 1,
            max: 10,
          }));
    }
    errors.collect(ros.propertyValidator('attachResourceIds', ros.listValidator(ros.validateString))(properties.attachResourceIds));
    errors.collect(ros.propertyValidator('policyConfig', ros.requiredValidator)(properties.policyConfig));
    errors.collect(ros.propertyValidator('policyConfig', ros.validateString)(properties.policyConfig));
    errors.collect(ros.propertyValidator('environmentId', ros.requiredValidator)(properties.environmentId));
    errors.collect(ros.propertyValidator('environmentId', ros.validateString)(properties.environmentId));
    errors.collect(ros.propertyValidator('policyClassName', ros.requiredValidator)(properties.policyClassName));
    if(properties.policyClassName && (typeof properties.policyClassName) !== 'object') {
        errors.collect(ros.propertyValidator('policyClassName', ros.validateAllowedValues)({
          data: properties.policyClassName,
          allowedValues: ["RateLimit","ConcurrencyLimit","CircuitBreaker","HttpRewrite","HeaderModify","Cors","FlowCopy","Timeout","Retry","IpAccessControl","DirectResponse","Redirect","Fallback","ServiceTls","ServiceLb","ServicePortTls","Waf","JWTAuth","OIDCAuth","ExternalZAuth"],
        }));
    }
    errors.collect(ros.propertyValidator('policyClassName', ros.validateString)(properties.policyClassName));
    errors.collect(ros.propertyValidator('policyName', ros.validateString)(properties.policyName));
    errors.collect(ros.propertyValidator('gatewayId', ros.requiredValidator)(properties.gatewayId));
    errors.collect(ros.propertyValidator('gatewayId', ros.validateString)(properties.gatewayId));
    errors.collect(ros.propertyValidator('attachResourceType', ros.requiredValidator)(properties.attachResourceType));
    if(properties.attachResourceType && (typeof properties.attachResourceType) !== 'object') {
        errors.collect(ros.propertyValidator('attachResourceType', ros.validateAllowedValues)({
          data: properties.attachResourceType,
          allowedValues: ["HttpApi","Operation","GatewayRoute","GatewayService","GatewayServicePort","Domain","Gateway"],
        }));
    }
    errors.collect(ros.propertyValidator('attachResourceType', ros.validateString)(properties.attachResourceType));
    return errors.wrap('supplied properties not correct for "RosPolicyProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::APIG::Policy` resource
 *
 * @param properties - the TypeScript properties of a `RosPolicyProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::APIG::Policy` resource.
 */
// @ts-ignore TS6133
function rosPolicyPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosPolicyPropsValidator(properties).assertSuccess();
    }
    return {
      'AttachResourceIds': ros.listMapper(ros.stringToRosTemplate)(properties.attachResourceIds),
      'AttachResourceType': ros.stringToRosTemplate(properties.attachResourceType),
      'EnvironmentId': ros.stringToRosTemplate(properties.environmentId),
      'GatewayId': ros.stringToRosTemplate(properties.gatewayId),
      'PolicyClassName': ros.stringToRosTemplate(properties.policyClassName),
      'PolicyConfig': ros.stringToRosTemplate(properties.policyConfig),
      'PolicyName': ros.stringToRosTemplate(properties.policyName),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::APIG::Policy`, which is used to create a policy.
 * @Note This class does not contain additional functions, so it is recommended to use the `Policy` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-policy
 */
export class RosPolicy extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::APIG::Policy";

    /**
     * @Attribute PolicyClassId: The ID of policy class.
     */
    public readonly attrPolicyClassId: ros.IResolvable;

    /**
     * @Attribute PolicyClassName: The name of policy class.
     */
    public readonly attrPolicyClassName: ros.IResolvable;

    /**
     * @Attribute PolicyConfig: Policy Configuration.
     */
    public readonly attrPolicyConfig: ros.IResolvable;

    /**
     * @Attribute PolicyId: The ID of the policy.
     */
    public readonly attrPolicyId: ros.IResolvable;

    /**
     * @Attribute PolicyName: The name of the policy.
     */
    public readonly attrPolicyName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property attachResourceIds: The Mount point id list.
     */
    public attachResourceIds: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property attachResourceType: Policies support mount point types.
     * HttpApi:HttpApi.
     * Operation: the Operation of the HttpApi.
     * GatewayRoute: Gateway route.
     * GatewayService: Gateway service.
     * GatewayServicePort: The Gateway service port.
     * Domain: The Gateway Domain name.
     * Gateway: Gateway.
     */
    public attachResourceType: string | ros.IResolvable;

    /**
     * @Property environmentId: The id of the environment.
     */
    public environmentId: string | ros.IResolvable;

    /**
     * @Property gatewayId: The ID of the Gateway.
     */
    public gatewayId: string | ros.IResolvable;

    /**
     * @Property policyClassName: The name of the policy class.
     */
    public policyClassName: string | ros.IResolvable;

    /**
     * @Property policyConfig: Policy Configuration.
     */
    public policyConfig: string | ros.IResolvable;

    /**
     * @Property policyName: The name of the policy.
     */
    public policyName: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosPolicyProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosPolicy.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrPolicyClassId = this.getAtt('PolicyClassId');
        this.attrPolicyClassName = this.getAtt('PolicyClassName');
        this.attrPolicyConfig = this.getAtt('PolicyConfig');
        this.attrPolicyId = this.getAtt('PolicyId');
        this.attrPolicyName = this.getAtt('PolicyName');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.attachResourceIds = props.attachResourceIds;
        this.attachResourceType = props.attachResourceType;
        this.environmentId = props.environmentId;
        this.gatewayId = props.gatewayId;
        this.policyClassName = props.policyClassName;
        this.policyConfig = props.policyConfig;
        this.policyName = props.policyName;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            attachResourceIds: this.attachResourceIds,
            attachResourceType: this.attachResourceType,
            environmentId: this.environmentId,
            gatewayId: this.gatewayId,
            policyClassName: this.policyClassName,
            policyConfig: this.policyConfig,
            policyName: this.policyName,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosPolicyPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosRoute`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-route
 */
export interface RosRouteProps {

    /**
     * @Property backend: Backend service configuration for routing.
     */
    readonly backend: RosRoute.BackendProperty | ros.IResolvable;

    /**
     * @Property environmentInfo: The information if the environment.
     */
    readonly environmentInfo: RosRoute.EnvironmentInfoProperty | ros.IResolvable;

    /**
     * @Property httpApiId: The ID of the API.
     */
    readonly httpApiId: string | ros.IResolvable;

    /**
     * @Property match: The match rule of route resource.
     */
    readonly match: RosRoute.MatchProperty | ros.IResolvable;

    /**
     * @Property routeName: The name of the route.
     */
    readonly routeName: string | ros.IResolvable;

    /**
     * @Property description: The description of route.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property domainIds: The list of domain name IDs.
     */
    readonly domainIds?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property domainInfos: Domain items.
     */
    readonly domainInfos?: Array<RosRoute.DomainInfosProperty | ros.IResolvable> | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosRouteProps`
 *
 * @param properties - the TypeScript properties of a `RosRouteProps`
 *
 * @returns the result of the validation.
 */
function RosRoutePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('backend', ros.requiredValidator)(properties.backend));
    errors.collect(ros.propertyValidator('backend', RosRoute_BackendPropertyValidator)(properties.backend));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('environmentInfo', ros.requiredValidator)(properties.environmentInfo));
    errors.collect(ros.propertyValidator('environmentInfo', RosRoute_EnvironmentInfoPropertyValidator)(properties.environmentInfo));
    errors.collect(ros.propertyValidator('routeName', ros.requiredValidator)(properties.routeName));
    errors.collect(ros.propertyValidator('routeName', ros.validateString)(properties.routeName));
    errors.collect(ros.propertyValidator('domainInfos', ros.listValidator(RosRoute_DomainInfosPropertyValidator))(properties.domainInfos));
    errors.collect(ros.propertyValidator('httpApiId', ros.requiredValidator)(properties.httpApiId));
    errors.collect(ros.propertyValidator('httpApiId', ros.validateString)(properties.httpApiId));
    errors.collect(ros.propertyValidator('domainIds', ros.listValidator(ros.validateString))(properties.domainIds));
    errors.collect(ros.propertyValidator('match', ros.requiredValidator)(properties.match));
    errors.collect(ros.propertyValidator('match', RosRoute_MatchPropertyValidator)(properties.match));
    return errors.wrap('supplied properties not correct for "RosRouteProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::APIG::Route` resource
 *
 * @param properties - the TypeScript properties of a `RosRouteProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::APIG::Route` resource.
 */
// @ts-ignore TS6133
function rosRoutePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosRoutePropsValidator(properties).assertSuccess();
    }
    return {
      'Backend': rosRouteBackendPropertyToRosTemplate(properties.backend),
      'EnvironmentInfo': rosRouteEnvironmentInfoPropertyToRosTemplate(properties.environmentInfo),
      'HttpApiId': ros.stringToRosTemplate(properties.httpApiId),
      'Match': rosRouteMatchPropertyToRosTemplate(properties.match),
      'RouteName': ros.stringToRosTemplate(properties.routeName),
      'Description': ros.stringToRosTemplate(properties.description),
      'DomainIds': ros.listMapper(ros.stringToRosTemplate)(properties.domainIds),
      'DomainInfos': ros.listMapper(rosRouteDomainInfosPropertyToRosTemplate)(properties.domainInfos),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::APIG::Route`, which is used to create a route for an HTTP API.
 * @Note This class does not contain additional functions, so it is recommended to use the `Route` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-route
 */
export class RosRoute extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::APIG::Route";

    /**
     * @Attribute Backend: Backend services.
     */
    public readonly attrBackend: ros.IResolvable;

    /**
     * @Attribute Description: The description of route resource.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * @Attribute DomainInfos: Domain items.
     */
    public readonly attrDomainInfos: ros.IResolvable;

    /**
     * @Attribute EnvironmentInfo: Environment information.
     */
    public readonly attrEnvironmentInfo: ros.IResolvable;

    /**
     * @Attribute Match: The match rule of route resource.
     */
    public readonly attrMatch: ros.IResolvable;

    /**
     * @Attribute RouteId: The ID of route resource.
     */
    public readonly attrRouteId: ros.IResolvable;

    /**
     * @Attribute RouteName: The name of the route.
     */
    public readonly attrRouteName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property backend: Backend service configuration for routing.
     */
    public backend: RosRoute.BackendProperty | ros.IResolvable;

    /**
     * @Property environmentInfo: The information if the environment.
     */
    public environmentInfo: RosRoute.EnvironmentInfoProperty | ros.IResolvable;

    /**
     * @Property httpApiId: The ID of the API.
     */
    public httpApiId: string | ros.IResolvable;

    /**
     * @Property match: The match rule of route resource.
     */
    public match: RosRoute.MatchProperty | ros.IResolvable;

    /**
     * @Property routeName: The name of the route.
     */
    public routeName: string | ros.IResolvable;

    /**
     * @Property description: The description of route.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property domainIds: The list of domain name IDs.
     */
    public domainIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property domainInfos: Domain items.
     */
    public domainInfos: Array<RosRoute.DomainInfosProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosRouteProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosRoute.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrBackend = this.getAtt('Backend');
        this.attrDescription = this.getAtt('Description');
        this.attrDomainInfos = this.getAtt('DomainInfos');
        this.attrEnvironmentInfo = this.getAtt('EnvironmentInfo');
        this.attrMatch = this.getAtt('Match');
        this.attrRouteId = this.getAtt('RouteId');
        this.attrRouteName = this.getAtt('RouteName');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.backend = props.backend;
        this.environmentInfo = props.environmentInfo;
        this.httpApiId = props.httpApiId;
        this.match = props.match;
        this.routeName = props.routeName;
        this.description = props.description;
        this.domainIds = props.domainIds;
        this.domainInfos = props.domainInfos;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            backend: this.backend,
            environmentInfo: this.environmentInfo,
            httpApiId: this.httpApiId,
            match: this.match,
            routeName: this.routeName,
            description: this.description,
            domainIds: this.domainIds,
            domainInfos: this.domainInfos,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosRoutePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosRoute {
    /**
     * @stability external
     */
    export interface BackendProperty {
        /**
         * @Property services: Backend service scenario.
         */
        readonly services: Array<RosRoute.ServicesProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property scene: Backend service scene.
         */
        readonly scene: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `BackendProperty`
 *
 * @param properties - the TypeScript properties of a `BackendProperty`
 *
 * @returns the result of the validation.
 */
function RosRoute_BackendPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('services', ros.requiredValidator)(properties.services));
    if(properties.services && (Array.isArray(properties.services) || (typeof properties.services) === 'string')) {
        errors.collect(ros.propertyValidator('services', ros.validateLength)({
            data: properties.services.length,
            min: 1,
            max: 10,
          }));
    }
    errors.collect(ros.propertyValidator('services', ros.listValidator(RosRoute_ServicesPropertyValidator))(properties.services));
    errors.collect(ros.propertyValidator('scene', ros.requiredValidator)(properties.scene));
    if(properties.scene && (typeof properties.scene) !== 'object') {
        errors.collect(ros.propertyValidator('scene', ros.validateAllowedValues)({
          data: properties.scene,
          allowedValues: ["Mock","MultiServiceByRatio","Redirect","SingleService"],
        }));
    }
    errors.collect(ros.propertyValidator('scene', ros.validateString)(properties.scene));
    return errors.wrap('supplied properties not correct for "BackendProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::APIG::Route.Backend` resource
 *
 * @param properties - the TypeScript properties of a `BackendProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::APIG::Route.Backend` resource.
 */
// @ts-ignore TS6133
function rosRouteBackendPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosRoute_BackendPropertyValidator(properties).assertSuccess();
    return {
      'Services': ros.listMapper(rosRouteServicesPropertyToRosTemplate)(properties.services),
      'Scene': ros.stringToRosTemplate(properties.scene),
    };
}

export namespace RosRoute {
    /**
     * @stability external
     */
    export interface DomainInfosProperty {
        /**
         * @Property domainId: The ID of the Domain.
         */
        readonly domainId?: string | ros.IResolvable;
        /**
         * @Property protocol: The protocol of the Domain.
         */
        readonly protocol?: string | ros.IResolvable;
        /**
         * @Property name: The name of the Domain.
         */
        readonly name?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `DomainInfosProperty`
 *
 * @param properties - the TypeScript properties of a `DomainInfosProperty`
 *
 * @returns the result of the validation.
 */
function RosRoute_DomainInfosPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('domainId', ros.validateString)(properties.domainId));
    if(properties.protocol && (typeof properties.protocol) !== 'object') {
        errors.collect(ros.propertyValidator('protocol', ros.validateAllowedValues)({
          data: properties.protocol,
          allowedValues: ["HTTP","HTTPS"],
        }));
    }
    errors.collect(ros.propertyValidator('protocol', ros.validateString)(properties.protocol));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "DomainInfosProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::APIG::Route.DomainInfos` resource
 *
 * @param properties - the TypeScript properties of a `DomainInfosProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::APIG::Route.DomainInfos` resource.
 */
// @ts-ignore TS6133
function rosRouteDomainInfosPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosRoute_DomainInfosPropertyValidator(properties).assertSuccess();
    return {
      'DomainId': ros.stringToRosTemplate(properties.domainId),
      'Protocol': ros.stringToRosTemplate(properties.protocol),
      'Name': ros.stringToRosTemplate(properties.name),
    };
}

export namespace RosRoute {
    /**
     * @stability external
     */
    export interface EnvironmentInfoProperty {
        /**
         * @Property gatewayInfo: The information of the gateway.
         */
        readonly gatewayInfo?: RosRoute.GatewayInfoProperty | ros.IResolvable;
        /**
         * @Property environmentId: The ID if the environment.
         */
        readonly environmentId: string | ros.IResolvable;
        /**
         * @Property alias: The alias of the environment.
         */
        readonly alias?: string | ros.IResolvable;
        /**
         * @Property subDomains: Sub domains.
         */
        readonly subDomains?: Array<RosRoute.SubDomainsProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property name: The name of the environment.
         */
        readonly name?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `EnvironmentInfoProperty`
 *
 * @param properties - the TypeScript properties of a `EnvironmentInfoProperty`
 *
 * @returns the result of the validation.
 */
function RosRoute_EnvironmentInfoPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('gatewayInfo', RosRoute_GatewayInfoPropertyValidator)(properties.gatewayInfo));
    errors.collect(ros.propertyValidator('environmentId', ros.requiredValidator)(properties.environmentId));
    errors.collect(ros.propertyValidator('environmentId', ros.validateString)(properties.environmentId));
    errors.collect(ros.propertyValidator('alias', ros.validateString)(properties.alias));
    if(properties.subDomains && (Array.isArray(properties.subDomains) || (typeof properties.subDomains) === 'string')) {
        errors.collect(ros.propertyValidator('subDomains', ros.validateLength)({
            data: properties.subDomains.length,
            min: 1,
            max: 10,
          }));
    }
    errors.collect(ros.propertyValidator('subDomains', ros.listValidator(RosRoute_SubDomainsPropertyValidator))(properties.subDomains));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "EnvironmentInfoProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::APIG::Route.EnvironmentInfo` resource
 *
 * @param properties - the TypeScript properties of a `EnvironmentInfoProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::APIG::Route.EnvironmentInfo` resource.
 */
// @ts-ignore TS6133
function rosRouteEnvironmentInfoPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosRoute_EnvironmentInfoPropertyValidator(properties).assertSuccess();
    return {
      'GatewayInfo': rosRouteGatewayInfoPropertyToRosTemplate(properties.gatewayInfo),
      'EnvironmentId': ros.stringToRosTemplate(properties.environmentId),
      'Alias': ros.stringToRosTemplate(properties.alias),
      'SubDomains': ros.listMapper(rosRouteSubDomainsPropertyToRosTemplate)(properties.subDomains),
      'Name': ros.stringToRosTemplate(properties.name),
    };
}

export namespace RosRoute {
    /**
     * @stability external
     */
    export interface GatewayInfoProperty {
        /**
         * @Property gatewayId: The ID of the Gateway.
         */
        readonly gatewayId?: string | ros.IResolvable;
        /**
         * @Property name: The name of the Gateway.
         */
        readonly name?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `GatewayInfoProperty`
 *
 * @param properties - the TypeScript properties of a `GatewayInfoProperty`
 *
 * @returns the result of the validation.
 */
function RosRoute_GatewayInfoPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('gatewayId', ros.validateString)(properties.gatewayId));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "GatewayInfoProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::APIG::Route.GatewayInfo` resource
 *
 * @param properties - the TypeScript properties of a `GatewayInfoProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::APIG::Route.GatewayInfo` resource.
 */
// @ts-ignore TS6133
function rosRouteGatewayInfoPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosRoute_GatewayInfoPropertyValidator(properties).assertSuccess();
    return {
      'GatewayId': ros.stringToRosTemplate(properties.gatewayId),
      'Name': ros.stringToRosTemplate(properties.name),
    };
}

export namespace RosRoute {
    /**
     * @stability external
     */
    export interface HeadersProperty {
        /**
         * @Property type: The type of the header match rule.
         */
        readonly type?: string | ros.IResolvable;
        /**
         * @Property value: The value of the value.
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property name: The name of the header.
         */
        readonly name?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `HeadersProperty`
 *
 * @param properties - the TypeScript properties of a `HeadersProperty`
 *
 * @returns the result of the validation.
 */
function RosRoute_HeadersPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.type && (typeof properties.type) !== 'object') {
        errors.collect(ros.propertyValidator('type', ros.validateAllowedValues)({
          data: properties.type,
          allowedValues: ["Exact","Prefix","Regex"],
        }));
    }
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "HeadersProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::APIG::Route.Headers` resource
 *
 * @param properties - the TypeScript properties of a `HeadersProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::APIG::Route.Headers` resource.
 */
// @ts-ignore TS6133
function rosRouteHeadersPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosRoute_HeadersPropertyValidator(properties).assertSuccess();
    return {
      'Type': ros.stringToRosTemplate(properties.type),
      'Value': ros.stringToRosTemplate(properties.value),
      'Name': ros.stringToRosTemplate(properties.name),
    };
}

export namespace RosRoute {
    /**
     * @stability external
     */
    export interface MatchProperty {
        /**
         * @Property path: path rule.
         */
        readonly path: RosRoute.PathProperty | ros.IResolvable;
        /**
         * @Property headers: Http request header matching rule list
         */
        readonly headers?: Array<RosRoute.HeadersProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property queryParams: List of query request parameter matching rules
         */
        readonly queryParams?: Array<RosRoute.QueryParamsProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property methods: Request method list.
         */
        readonly methods?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property ignoreUriCase: Is the path case-insensitive.
         */
        readonly ignoreUriCase?: boolean | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `MatchProperty`
 *
 * @param properties - the TypeScript properties of a `MatchProperty`
 *
 * @returns the result of the validation.
 */
function RosRoute_MatchPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('path', ros.requiredValidator)(properties.path));
    errors.collect(ros.propertyValidator('path', RosRoute_PathPropertyValidator)(properties.path));
    if(properties.headers && (Array.isArray(properties.headers) || (typeof properties.headers) === 'string')) {
        errors.collect(ros.propertyValidator('headers', ros.validateLength)({
            data: properties.headers.length,
            min: 1,
            max: 10,
          }));
    }
    errors.collect(ros.propertyValidator('headers', ros.listValidator(RosRoute_HeadersPropertyValidator))(properties.headers));
    if(properties.queryParams && (Array.isArray(properties.queryParams) || (typeof properties.queryParams) === 'string')) {
        errors.collect(ros.propertyValidator('queryParams', ros.validateLength)({
            data: properties.queryParams.length,
            min: 1,
            max: 10,
          }));
    }
    errors.collect(ros.propertyValidator('queryParams', ros.listValidator(RosRoute_QueryParamsPropertyValidator))(properties.queryParams));
    errors.collect(ros.propertyValidator('methods', ros.listValidator(ros.validateString))(properties.methods));
    errors.collect(ros.propertyValidator('ignoreUriCase', ros.validateBoolean)(properties.ignoreUriCase));
    return errors.wrap('supplied properties not correct for "MatchProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::APIG::Route.Match` resource
 *
 * @param properties - the TypeScript properties of a `MatchProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::APIG::Route.Match` resource.
 */
// @ts-ignore TS6133
function rosRouteMatchPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosRoute_MatchPropertyValidator(properties).assertSuccess();
    return {
      'Path': rosRoutePathPropertyToRosTemplate(properties.path),
      'Headers': ros.listMapper(rosRouteHeadersPropertyToRosTemplate)(properties.headers),
      'QueryParams': ros.listMapper(rosRouteQueryParamsPropertyToRosTemplate)(properties.queryParams),
      'Methods': ros.listMapper(ros.stringToRosTemplate)(properties.methods),
      'IgnoreUriCase': ros.booleanToRosTemplate(properties.ignoreUriCase),
    };
}

export namespace RosRoute {
    /**
     * @stability external
     */
    export interface PathProperty {
        /**
         * @Property type: route match rule.
         */
        readonly type: string | ros.IResolvable;
        /**
         * @Property value: path value.
         */
        readonly value: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `PathProperty`
 *
 * @param properties - the TypeScript properties of a `PathProperty`
 *
 * @returns the result of the validation.
 */
function RosRoute_PathPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('type', ros.requiredValidator)(properties.type));
    if(properties.type && (typeof properties.type) !== 'object') {
        errors.collect(ros.propertyValidator('type', ros.validateAllowedValues)({
          data: properties.type,
          allowedValues: ["Exact","Prefix","Regex"],
        }));
    }
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('value', ros.requiredValidator)(properties.value));
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    return errors.wrap('supplied properties not correct for "PathProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::APIG::Route.Path` resource
 *
 * @param properties - the TypeScript properties of a `PathProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::APIG::Route.Path` resource.
 */
// @ts-ignore TS6133
function rosRoutePathPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosRoute_PathPropertyValidator(properties).assertSuccess();
    return {
      'Type': ros.stringToRosTemplate(properties.type),
      'Value': ros.stringToRosTemplate(properties.value),
    };
}

export namespace RosRoute {
    /**
     * @stability external
     */
    export interface QueryParamsProperty {
        /**
         * @Property type: query param match rule.
         */
        readonly type?: string | ros.IResolvable;
        /**
         * @Property value: The value of query param.
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property name: The name of query param.
         */
        readonly name?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `QueryParamsProperty`
 *
 * @param properties - the TypeScript properties of a `QueryParamsProperty`
 *
 * @returns the result of the validation.
 */
function RosRoute_QueryParamsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.type && (typeof properties.type) !== 'object') {
        errors.collect(ros.propertyValidator('type', ros.validateAllowedValues)({
          data: properties.type,
          allowedValues: ["Exact","Prefix","Regex"],
        }));
    }
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "QueryParamsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::APIG::Route.QueryParams` resource
 *
 * @param properties - the TypeScript properties of a `QueryParamsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::APIG::Route.QueryParams` resource.
 */
// @ts-ignore TS6133
function rosRouteQueryParamsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosRoute_QueryParamsPropertyValidator(properties).assertSuccess();
    return {
      'Type': ros.stringToRosTemplate(properties.type),
      'Value': ros.stringToRosTemplate(properties.value),
      'Name': ros.stringToRosTemplate(properties.name),
    };
}

export namespace RosRoute {
    /**
     * @stability external
     */
    export interface ServicesProperty {
        /**
         * @Property version: The version of the service.
         */
        readonly version?: string | ros.IResolvable;
        /**
         * @Property port: The port of the service.
         */
        readonly port?: number | ros.IResolvable;
        /**
         * @Property protocol: service protocol.
         */
        readonly protocol?: string | ros.IResolvable;
        /**
         * @Property weight: The weight of the traffic.
         */
        readonly weight?: number | ros.IResolvable;
        /**
         * @Property name: The name of the service.
         */
        readonly name?: string | ros.IResolvable;
        /**
         * @Property serviceId: The ID of the service.
         */
        readonly serviceId?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `ServicesProperty`
 *
 * @param properties - the TypeScript properties of a `ServicesProperty`
 *
 * @returns the result of the validation.
 */
function RosRoute_ServicesPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('version', ros.validateString)(properties.version));
    errors.collect(ros.propertyValidator('port', ros.validateNumber)(properties.port));
    if(properties.protocol && (typeof properties.protocol) !== 'object') {
        errors.collect(ros.propertyValidator('protocol', ros.validateAllowedValues)({
          data: properties.protocol,
          allowedValues: ["HTTP","HTTPS"],
        }));
    }
    errors.collect(ros.propertyValidator('protocol', ros.validateString)(properties.protocol));
    if(properties.weight && (typeof properties.weight) !== 'object') {
        errors.collect(ros.propertyValidator('weight', ros.validateRange)({
            data: properties.weight,
            min: 0,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('weight', ros.validateNumber)(properties.weight));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    errors.collect(ros.propertyValidator('serviceId', ros.validateString)(properties.serviceId));
    return errors.wrap('supplied properties not correct for "ServicesProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::APIG::Route.Services` resource
 *
 * @param properties - the TypeScript properties of a `ServicesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::APIG::Route.Services` resource.
 */
// @ts-ignore TS6133
function rosRouteServicesPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosRoute_ServicesPropertyValidator(properties).assertSuccess();
    return {
      'Version': ros.stringToRosTemplate(properties.version),
      'Port': ros.numberToRosTemplate(properties.port),
      'Protocol': ros.stringToRosTemplate(properties.protocol),
      'Weight': ros.numberToRosTemplate(properties.weight),
      'Name': ros.stringToRosTemplate(properties.name),
      'ServiceId': ros.stringToRosTemplate(properties.serviceId),
    };
}

export namespace RosRoute {
    /**
     * @stability external
     */
    export interface SubDomainsProperty {
        /**
         * @Property domainId: The ID of the sub domain.
         */
        readonly domainId?: string | ros.IResolvable;
        /**
         * @Property networkType: The access type of the domain network.
         */
        readonly networkType?: string | ros.IResolvable;
        /**
         * @Property protocol: The protocol of the sub domain.
         */
        readonly protocol?: string | ros.IResolvable;
        /**
         * @Property name: The name of the sub domain.
         */
        readonly name?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `SubDomainsProperty`
 *
 * @param properties - the TypeScript properties of a `SubDomainsProperty`
 *
 * @returns the result of the validation.
 */
function RosRoute_SubDomainsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('domainId', ros.validateString)(properties.domainId));
    errors.collect(ros.propertyValidator('networkType', ros.validateString)(properties.networkType));
    if(properties.protocol && (typeof properties.protocol) !== 'object') {
        errors.collect(ros.propertyValidator('protocol', ros.validateAllowedValues)({
          data: properties.protocol,
          allowedValues: ["HTTP","HTTPS"],
        }));
    }
    errors.collect(ros.propertyValidator('protocol', ros.validateString)(properties.protocol));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "SubDomainsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::APIG::Route.SubDomains` resource
 *
 * @param properties - the TypeScript properties of a `SubDomainsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::APIG::Route.SubDomains` resource.
 */
// @ts-ignore TS6133
function rosRouteSubDomainsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosRoute_SubDomainsPropertyValidator(properties).assertSuccess();
    return {
      'DomainId': ros.stringToRosTemplate(properties.domainId),
      'NetworkType': ros.stringToRosTemplate(properties.networkType),
      'Protocol': ros.stringToRosTemplate(properties.protocol),
      'Name': ros.stringToRosTemplate(properties.name),
    };
}

/**
 * Properties for defining a `RosService`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-service
 */
export interface RosServiceProps {

    /**
     * @Property gatewayId: The ID of the Cloud Native API Gateway.
     */
    readonly gatewayId: string | ros.IResolvable;

    /**
     * @Property addresses: Service Address List.
     */
    readonly addresses?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property aiServiceConfig: AI service configuration when SourceType equals AI.
     */
    readonly aiServiceConfig?: RosService.AiServiceConfigProperty | ros.IResolvable;

    /**
     * @Property groupName: The service group name.
     * Required when SourceType is MSE_NACOS.
     */
    readonly groupName?: string | ros.IResolvable;

    /**
     * @Property namespace: The namespace of the service:
     * - SourceType is K8S, indicating the namespace of the K8S service.
     * When-SourceType is set to MSE_NACOS, it indicates the namespace in Nacos.
     * When the SourceType is K8S and MSE_NACOS, it needs to be specified.
     */
    readonly namespace?: string | ros.IResolvable;

    /**
     * @Property qualifier: The function version or alias.
     */
    readonly qualifier?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property serviceName: The name of the service, need to fill in manually when SourceType is VIP\/DNS\/AI.
     */
    readonly serviceName?: string | ros.IResolvable;

    /**
     * @Property sourceType: The type of the service source, optional value is K8S\/MSE_NACOS\/FC3\/SAE_K8S_SERVICE\/VIP\/DNS\/AI.
     */
    readonly sourceType?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosServiceProps`
 *
 * @param properties - the TypeScript properties of a `RosServiceProps`
 *
 * @returns the result of the validation.
 */
function RosServicePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.addresses && (Array.isArray(properties.addresses) || (typeof properties.addresses) === 'string')) {
        errors.collect(ros.propertyValidator('addresses', ros.validateLength)({
            data: properties.addresses.length,
            min: 0,
            max: 10,
          }));
    }
    errors.collect(ros.propertyValidator('addresses', ros.listValidator(ros.validateString))(properties.addresses));
    errors.collect(ros.propertyValidator('groupName', ros.validateString)(properties.groupName));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('serviceName', ros.validateString)(properties.serviceName));
    if(properties.sourceType && (typeof properties.sourceType) !== 'object') {
        errors.collect(ros.propertyValidator('sourceType', ros.validateAllowedValues)({
          data: properties.sourceType,
          allowedValues: ["DNS","K8S","MSE_NACOS","FC3","SAE_K8S_SERVICE","VIP","AI"],
        }));
    }
    errors.collect(ros.propertyValidator('sourceType', ros.validateString)(properties.sourceType));
    errors.collect(ros.propertyValidator('qualifier', ros.validateString)(properties.qualifier));
    errors.collect(ros.propertyValidator('gatewayId', ros.requiredValidator)(properties.gatewayId));
    errors.collect(ros.propertyValidator('gatewayId', ros.validateString)(properties.gatewayId));
    errors.collect(ros.propertyValidator('namespace', ros.validateString)(properties.namespace));
    errors.collect(ros.propertyValidator('aiServiceConfig', RosService_AiServiceConfigPropertyValidator)(properties.aiServiceConfig));
    return errors.wrap('supplied properties not correct for "RosServiceProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::APIG::Service` resource
 *
 * @param properties - the TypeScript properties of a `RosServiceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::APIG::Service` resource.
 */
// @ts-ignore TS6133
function rosServicePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosServicePropsValidator(properties).assertSuccess();
    }
    return {
      'GatewayId': ros.stringToRosTemplate(properties.gatewayId),
      'Addresses': ros.listMapper(ros.stringToRosTemplate)(properties.addresses),
      'AiServiceConfig': rosServiceAiServiceConfigPropertyToRosTemplate(properties.aiServiceConfig),
      'GroupName': ros.stringToRosTemplate(properties.groupName),
      'Namespace': ros.stringToRosTemplate(properties.namespace),
      'Qualifier': ros.stringToRosTemplate(properties.qualifier),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
      'ServiceName': ros.stringToRosTemplate(properties.serviceName),
      'SourceType': ros.stringToRosTemplate(properties.sourceType),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::APIG::Service`, which is used to create a service.
 * @Note This class does not contain additional functions, so it is recommended to use the `Service` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-service
 */
export class RosService extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::APIG::Service";

    /**
     * @Attribute Addresses: Service Address List.
     */
    public readonly attrAddresses: ros.IResolvable;

    /**
     * @Attribute AiServiceConfig: AI service configuration when SourceType equals AI.
     */
    public readonly attrAiServiceConfig: ros.IResolvable;

    /**
     * @Attribute GatewayId: The ID of the Cloud Native API Gateway.
     */
    public readonly attrGatewayId: ros.IResolvable;

    /**
     * @Attribute GroupName: The service group name.
     */
    public readonly attrGroupName: ros.IResolvable;

    /**
     * @Attribute Namespace: The namespace of the service:.
     */
    public readonly attrNamespace: ros.IResolvable;

    /**
     * @Attribute Qualifier: The function version or alias.
     */
    public readonly attrQualifier: ros.IResolvable;

    /**
     * @Attribute ResourceGroupId: The ID of the resource group.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * @Attribute ServiceId: The ID of the service.
     */
    public readonly attrServiceId: ros.IResolvable;

    /**
     * @Attribute ServiceName: Service Name, need to fill in manually when SourceType is VIP/DNS/AI.
     */
    public readonly attrServiceName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property gatewayId: The ID of the Cloud Native API Gateway.
     */
    public gatewayId: string | ros.IResolvable;

    /**
     * @Property addresses: Service Address List.
     */
    public addresses: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property aiServiceConfig: AI service configuration when SourceType equals AI.
     */
    public aiServiceConfig: RosService.AiServiceConfigProperty | ros.IResolvable | undefined;

    /**
     * @Property groupName: The service group name.
     * Required when SourceType is MSE_NACOS.
     */
    public groupName: string | ros.IResolvable | undefined;

    /**
     * @Property namespace: The namespace of the service:
     * - SourceType is K8S, indicating the namespace of the K8S service.
     * When-SourceType is set to MSE_NACOS, it indicates the namespace in Nacos.
     * When the SourceType is K8S and MSE_NACOS, it needs to be specified.
     */
    public namespace: string | ros.IResolvable | undefined;

    /**
     * @Property qualifier: The function version or alias.
     */
    public qualifier: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property serviceName: The name of the service, need to fill in manually when SourceType is VIP\/DNS\/AI.
     */
    public serviceName: string | ros.IResolvable | undefined;

    /**
     * @Property sourceType: The type of the service source, optional value is K8S\/MSE_NACOS\/FC3\/SAE_K8S_SERVICE\/VIP\/DNS\/AI.
     */
    public sourceType: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosServiceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosService.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAddresses = this.getAtt('Addresses');
        this.attrAiServiceConfig = this.getAtt('AiServiceConfig');
        this.attrGatewayId = this.getAtt('GatewayId');
        this.attrGroupName = this.getAtt('GroupName');
        this.attrNamespace = this.getAtt('Namespace');
        this.attrQualifier = this.getAtt('Qualifier');
        this.attrResourceGroupId = this.getAtt('ResourceGroupId');
        this.attrServiceId = this.getAtt('ServiceId');
        this.attrServiceName = this.getAtt('ServiceName');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.gatewayId = props.gatewayId;
        this.addresses = props.addresses;
        this.aiServiceConfig = props.aiServiceConfig;
        this.groupName = props.groupName;
        this.namespace = props.namespace;
        this.qualifier = props.qualifier;
        this.resourceGroupId = props.resourceGroupId;
        this.serviceName = props.serviceName;
        this.sourceType = props.sourceType;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            gatewayId: this.gatewayId,
            addresses: this.addresses,
            aiServiceConfig: this.aiServiceConfig,
            groupName: this.groupName,
            namespace: this.namespace,
            qualifier: this.qualifier,
            resourceGroupId: this.resourceGroupId,
            serviceName: this.serviceName,
            sourceType: this.sourceType,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosServicePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosService {
    /**
     * @stability external
     */
    export interface AiServiceConfigProperty {
        /**
         * @Property apiKeys: Api key list.
         */
        readonly apiKeys?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property protocols: Model protocol list.
         */
        readonly protocols?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property address: AI provider address.
         */
        readonly address?: string | ros.IResolvable;
        /**
         * @Property enableHealthCheck: whether enable health check.
         */
        readonly enableHealthCheck?: boolean | ros.IResolvable;
        /**
         * @Property provider: AI model provider.
         */
        readonly provider?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `AiServiceConfigProperty`
 *
 * @param properties - the TypeScript properties of a `AiServiceConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosService_AiServiceConfigPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.apiKeys && (Array.isArray(properties.apiKeys) || (typeof properties.apiKeys) === 'string')) {
        errors.collect(ros.propertyValidator('apiKeys', ros.validateLength)({
            data: properties.apiKeys.length,
            min: 0,
            max: 10,
          }));
    }
    errors.collect(ros.propertyValidator('apiKeys', ros.listValidator(ros.validateString))(properties.apiKeys));
    if(properties.protocols && (Array.isArray(properties.protocols) || (typeof properties.protocols) === 'string')) {
        errors.collect(ros.propertyValidator('protocols', ros.validateLength)({
            data: properties.protocols.length,
            min: 0,
            max: 10,
          }));
    }
    errors.collect(ros.propertyValidator('protocols', ros.listValidator(ros.validateString))(properties.protocols));
    errors.collect(ros.propertyValidator('address', ros.validateString)(properties.address));
    errors.collect(ros.propertyValidator('enableHealthCheck', ros.validateBoolean)(properties.enableHealthCheck));
    if(properties.provider && (typeof properties.provider) !== 'object') {
        errors.collect(ros.propertyValidator('provider', ros.validateAllowedValues)({
          data: properties.provider,
          allowedValues: ["openai","qwen","azure","claude","moonshot","baichuan","yi","zhipuai","hunyuan","stepfun","spark","doubao","minimax","gemini","deepseek","custom"],
        }));
    }
    errors.collect(ros.propertyValidator('provider', ros.validateString)(properties.provider));
    return errors.wrap('supplied properties not correct for "AiServiceConfigProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::APIG::Service.AiServiceConfig` resource
 *
 * @param properties - the TypeScript properties of a `AiServiceConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::APIG::Service.AiServiceConfig` resource.
 */
// @ts-ignore TS6133
function rosServiceAiServiceConfigPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosService_AiServiceConfigPropertyValidator(properties).assertSuccess();
    return {
      'ApiKeys': ros.listMapper(ros.stringToRosTemplate)(properties.apiKeys),
      'Protocols': ros.listMapper(ros.stringToRosTemplate)(properties.protocols),
      'Address': ros.stringToRosTemplate(properties.address),
      'EnableHealthCheck': ros.booleanToRosTemplate(properties.enableHealthCheck),
      'Provider': ros.stringToRosTemplate(properties.provider),
    };
}

/**
 * Properties for defining a `RosSource`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-source
 */
export interface RosSourceProps {

    /**
     * @Property gatewayId: The gateway ID.
     */
    readonly gatewayId?: string | ros.IResolvable;

    /**
     * @Property k8SSourceConfig: The K8s source configuration.
     */
    readonly k8SSourceConfig?: RosSource.K8sSourceConfigProperty | ros.IResolvable;

    /**
     * @Property nacosSourceConfig: The Nacos source configuration.
     */
    readonly nacosSourceConfig?: RosSource.NacosSourceConfigProperty | ros.IResolvable;

    /**
     * @Property resourceGroupId: The resource group ID.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property type: The source type:
     * - MSE_NACOS: MSE Nacos.
     * - K8S: Container service.
     */
    readonly type?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosSourceProps`
 *
 * @param properties - the TypeScript properties of a `RosSourceProps`
 *
 * @returns the result of the validation.
 */
function RosSourcePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('nacosSourceConfig', RosSource_NacosSourceConfigPropertyValidator)(properties.nacosSourceConfig));
    errors.collect(ros.propertyValidator('k8SSourceConfig', RosSource_K8sSourceConfigPropertyValidator)(properties.k8SSourceConfig));
    if(properties.type && (typeof properties.type) !== 'object') {
        errors.collect(ros.propertyValidator('type', ros.validateAllowedValues)({
          data: properties.type,
          allowedValues: ["MSE_NACOS","K8S"],
        }));
    }
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('gatewayId', ros.validateString)(properties.gatewayId));
    return errors.wrap('supplied properties not correct for "RosSourceProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::APIG::Source` resource
 *
 * @param properties - the TypeScript properties of a `RosSourceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::APIG::Source` resource.
 */
// @ts-ignore TS6133
function rosSourcePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosSourcePropsValidator(properties).assertSuccess();
    }
    return {
      'GatewayId': ros.stringToRosTemplate(properties.gatewayId),
      'K8sSourceConfig': rosSourceK8sSourceConfigPropertyToRosTemplate(properties.k8SSourceConfig),
      'NacosSourceConfig': rosSourceNacosSourceConfigPropertyToRosTemplate(properties.nacosSourceConfig),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
      'Type': ros.stringToRosTemplate(properties.type),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::APIG::Source`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Source` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-source
 */
export class RosSource extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::APIG::Source";

    /**
     * @Attribute SourceId: The ID of the source.
     */
    public readonly attrSourceId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property gatewayId: The gateway ID.
     */
    public gatewayId: string | ros.IResolvable | undefined;

    /**
     * @Property k8SSourceConfig: The K8s source configuration.
     */
    public k8SSourceConfig: RosSource.K8sSourceConfigProperty | ros.IResolvable | undefined;

    /**
     * @Property nacosSourceConfig: The Nacos source configuration.
     */
    public nacosSourceConfig: RosSource.NacosSourceConfigProperty | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The resource group ID.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property type: The source type:
     * - MSE_NACOS: MSE Nacos.
     * - K8S: Container service.
     */
    public type: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSourceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosSource.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrSourceId = this.getAtt('SourceId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.gatewayId = props.gatewayId;
        this.k8SSourceConfig = props.k8SSourceConfig;
        this.nacosSourceConfig = props.nacosSourceConfig;
        this.resourceGroupId = props.resourceGroupId;
        this.type = props.type;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            gatewayId: this.gatewayId,
            k8SSourceConfig: this.k8SSourceConfig,
            nacosSourceConfig: this.nacosSourceConfig,
            resourceGroupId: this.resourceGroupId,
            type: this.type,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosSourcePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosSource {
    /**
     * @stability external
     */
    export interface AuthorizeSecurityGroupRulesProperty {
        /**
         * @Property description: The description of the security group rule.
         */
        readonly description?: string | ros.IResolvable;
        /**
         * @Property securityGroupId: The ID of the security group.
         */
        readonly securityGroupId?: string | ros.IResolvable;
        /**
         * @Property portRanges: The port ranges for the security group rule.
         */
        readonly portRanges?: Array<string | ros.IResolvable> | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `AuthorizeSecurityGroupRulesProperty`
 *
 * @param properties - the TypeScript properties of a `AuthorizeSecurityGroupRulesProperty`
 *
 * @returns the result of the validation.
 */
function RosSource_AuthorizeSecurityGroupRulesPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('securityGroupId', ros.validateString)(properties.securityGroupId));
    if(properties.portRanges && (Array.isArray(properties.portRanges) || (typeof properties.portRanges) === 'string')) {
        errors.collect(ros.propertyValidator('portRanges', ros.validateLength)({
            data: properties.portRanges.length,
            min: undefined,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('portRanges', ros.listValidator(ros.validateString))(properties.portRanges));
    return errors.wrap('supplied properties not correct for "AuthorizeSecurityGroupRulesProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::APIG::Source.AuthorizeSecurityGroupRules` resource
 *
 * @param properties - the TypeScript properties of a `AuthorizeSecurityGroupRulesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::APIG::Source.AuthorizeSecurityGroupRules` resource.
 */
// @ts-ignore TS6133
function rosSourceAuthorizeSecurityGroupRulesPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosSource_AuthorizeSecurityGroupRulesPropertyValidator(properties).assertSuccess();
    return {
      'Description': ros.stringToRosTemplate(properties.description),
      'SecurityGroupId': ros.stringToRosTemplate(properties.securityGroupId),
      'PortRanges': ros.listMapper(ros.stringToRosTemplate)(properties.portRanges),
    };
}

export namespace RosSource {
    /**
     * @stability external
     */
    export interface K8sSourceConfigProperty {
        /**
         * @Property clusterId: The cluster ID of the container service source.
         */
        readonly clusterId: string | ros.IResolvable;
        /**
         * @Property authorizeSecurityGroupRules: The security group rules for authorization.
         */
        readonly authorizeSecurityGroupRules?: Array<RosSource.AuthorizeSecurityGroupRulesProperty | ros.IResolvable> | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `K8sSourceConfigProperty`
 *
 * @param properties - the TypeScript properties of a `K8sSourceConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosSource_K8sSourceConfigPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('clusterId', ros.requiredValidator)(properties.clusterId));
    errors.collect(ros.propertyValidator('clusterId', ros.validateString)(properties.clusterId));
    if(properties.authorizeSecurityGroupRules && (Array.isArray(properties.authorizeSecurityGroupRules) || (typeof properties.authorizeSecurityGroupRules) === 'string')) {
        errors.collect(ros.propertyValidator('authorizeSecurityGroupRules', ros.validateLength)({
            data: properties.authorizeSecurityGroupRules.length,
            min: undefined,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('authorizeSecurityGroupRules', ros.listValidator(RosSource_AuthorizeSecurityGroupRulesPropertyValidator))(properties.authorizeSecurityGroupRules));
    return errors.wrap('supplied properties not correct for "K8sSourceConfigProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::APIG::Source.K8sSourceConfig` resource
 *
 * @param properties - the TypeScript properties of a `K8sSourceConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::APIG::Source.K8sSourceConfig` resource.
 */
// @ts-ignore TS6133
function rosSourceK8sSourceConfigPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosSource_K8sSourceConfigPropertyValidator(properties).assertSuccess();
    return {
      'ClusterId': ros.stringToRosTemplate(properties.clusterId),
      'AuthorizeSecurityGroupRules': ros.listMapper(rosSourceAuthorizeSecurityGroupRulesPropertyToRosTemplate)(properties.authorizeSecurityGroupRules),
    };
}

export namespace RosSource {
    /**
     * @stability external
     */
    export interface NacosSourceConfigProperty {
        /**
         * @Property instanceId: The instance ID of the Nacos source.
         */
        readonly instanceId: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `NacosSourceConfigProperty`
 *
 * @param properties - the TypeScript properties of a `NacosSourceConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosSource_NacosSourceConfigPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('instanceId', ros.requiredValidator)(properties.instanceId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    return errors.wrap('supplied properties not correct for "NacosSourceConfigProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::APIG::Source.NacosSourceConfig` resource
 *
 * @param properties - the TypeScript properties of a `NacosSourceConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::APIG::Source.NacosSourceConfig` resource.
 */
// @ts-ignore TS6133
function rosSourceNacosSourceConfigPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosSource_NacosSourceConfigPropertyValidator(properties).assertSuccess();
    return {
      'InstanceId': ros.stringToRosTemplate(properties.instanceId),
    };
}
