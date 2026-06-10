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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::Bailian::ApiKey`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ApiKey` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bailian-apikey
 */
export declare class RosApiKey extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::Bailian::ApiKey";
    /**
     * @Attribute ApiKeyId: The id of the API key.
     */
    readonly attrApiKeyId: ros.IResolvable;
    /**
     * @Attribute Key: The value of the API key.
     */
    readonly attrKey: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property authSetModel: The model of the authentication.
     */
    authSetModel: RosApiKey.AuthSetModelProperty | ros.IResolvable | undefined;
    /**
     * @Property description: The description of the API key.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosApiKeyProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosApiKey {
    /**
     * @stability external
     */
    interface AuthSetModelProperty {
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
