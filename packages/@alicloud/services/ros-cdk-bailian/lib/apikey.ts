import * as ros from '@alicloud/ros-cdk-core';
import { RosApiKey } from './bailian.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosApiKey as ApiKeyProperty };

/**
 * Properties for defining a `ApiKey`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bailian-apikey
 */
export interface ApiKeyProps {

    /**
     * Property authSetModel: The model of the authentication.
     */
    readonly authSetModel?: RosApiKey.AuthSetModelProperty | ros.IResolvable;

    /**
     * Property description: The description of the API key.
     */
    readonly description?: string | ros.IResolvable;
}

/**
 * Represents a `ApiKey`.
 */
export interface IApiKey extends ros.IResource {
    readonly props: ApiKeyProps;

    /**
     * Attribute ApiKeyId: The id of the API key.
     */
    readonly attrApiKeyId: ros.IResolvable | string;

    /**
     * Attribute Key: The value of the API key.
     */
    readonly attrKey: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::Bailian::ApiKey`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosApiKey`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bailian-apikey
 */
export class ApiKey extends ros.Resource implements IApiKey {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: ApiKeyProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute ApiKeyId: The id of the API key.
     */
    public readonly attrApiKeyId: ros.IResolvable | string;

    /**
     * Attribute Key: The value of the API key.
     */
    public readonly attrKey: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ApiKeyProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosApiKey = new RosApiKey(this, id,  {
            authSetModel: props.authSetModel,
            description: props.description,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosApiKey;
        this.attrApiKeyId = rosApiKey.attrApiKeyId;
        this.attrKey = rosApiKey.attrKey;
    }
}
