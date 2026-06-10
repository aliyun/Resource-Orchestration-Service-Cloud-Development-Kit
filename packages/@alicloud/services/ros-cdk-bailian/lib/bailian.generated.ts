// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosApiKey`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bailian-apikey
 */
export interface RosApiKeyProps {

    /**
     * @Property authSetModel: The model of the authentication.
     */
    readonly authSetModel?: RosApiKey.AuthSetModelProperty | ros.IResolvable;

    /**
     * @Property description: The description of the API key.
     */
    readonly description?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosApiKeyProps`
 *
 * @param properties - the TypeScript properties of a `RosApiKeyProps`
 *
 * @returns the result of the validation.
 */
function RosApiKeyPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('authSetModel', RosApiKey_AuthSetModelPropertyValidator)(properties.authSetModel));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    return errors.wrap('supplied properties not correct for "RosApiKeyProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::Bailian::ApiKey` resource
 *
 * @param properties - the TypeScript properties of a `RosApiKeyProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::Bailian::ApiKey` resource.
 */
// @ts-ignore TS6133
function rosApiKeyPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosApiKeyPropsValidator(properties).assertSuccess();
    }
    return {
      'AuthSetModel': rosApiKeyAuthSetModelPropertyToRosTemplate(properties.authSetModel),
      'Description': ros.stringToRosTemplate(properties.description),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::Bailian::ApiKey`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ApiKey` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bailian-apikey
 */
export class RosApiKey extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::Bailian::ApiKey";

    /**
     * @Attribute ApiKeyId: The id of the API key.
     */
    public readonly attrApiKeyId: ros.IResolvable;

    /**
     * @Attribute Key: The value of the API key.
     */
    public readonly attrKey: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property authSetModel: The model of the authentication.
     */
    public authSetModel: RosApiKey.AuthSetModelProperty | ros.IResolvable | undefined;

    /**
     * @Property description: The description of the API key.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosApiKeyProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosApiKey.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrApiKeyId = this.getAtt('ApiKeyId');
        this.attrKey = this.getAtt('Key');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.authSetModel = props.authSetModel;
        this.description = props.description;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            authSetModel: this.authSetModel,
            description: this.description,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosApiKeyPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosApiKey {
    /**
     * @stability external
     */
    export interface AuthSetModelProperty {
        /**
         * @Property accessIps: The IP addresses of the access.
         */
        readonly accessIps?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property authSetMode: The mode of the authentication.
         */
        readonly authSetMode?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `AuthSetModelProperty`
 *
 * @param properties - the TypeScript properties of a `AuthSetModelProperty`
 *
 * @returns the result of the validation.
 */
function RosApiKey_AuthSetModelPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('accessIps', ros.listValidator(ros.validateString))(properties.accessIps));
    if(properties.authSetMode && (typeof properties.authSetMode) !== 'object') {
        errors.collect(ros.propertyValidator('authSetMode', ros.validateAllowedValues)({
          data: properties.authSetMode,
          allowedValues: ["Custom","All"],
        }));
    }
    errors.collect(ros.propertyValidator('authSetMode', ros.validateString)(properties.authSetMode));
    return errors.wrap('supplied properties not correct for "AuthSetModelProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::Bailian::ApiKey.AuthSetModel` resource
 *
 * @param properties - the TypeScript properties of a `AuthSetModelProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::Bailian::ApiKey.AuthSetModel` resource.
 */
// @ts-ignore TS6133
function rosApiKeyAuthSetModelPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosApiKey_AuthSetModelPropertyValidator(properties).assertSuccess();
    return {
      'AccessIps': ros.listMapper(ros.stringToRosTemplate)(properties.accessIps),
      'AuthSetMode': ros.stringToRosTemplate(properties.authSetMode),
    };
}
