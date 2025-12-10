import * as ros from '@alicloud/ros-cdk-core';
import { RosKv } from './esa.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosKv as KvProperty };

/**
 * Properties for defining a `Kv`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-kv
 */
export interface KvProps {

    /**
     * Property key: The key name. The name can be up to 512 characters in length and cannot contain spaces or backslashes (\).
     */
    readonly key: string | ros.IResolvable;

    /**
     * Property namespace: The name specified when calling [CreatevNamespace] https:\/\/help.aliyun.com\/document_detail\/2850317.html.
     */
    readonly namespace: string | ros.IResolvable;

    /**
     * Property value: The content of the key. If the content has more than 256 characters in length, the system displays the first 100 and the last 100 characters, and omits the middle part.
     */
    readonly value: string | ros.IResolvable;

    /**
     * Property expiration: The content of the key, which can be up to 2 MB (2 × 1000 × 1000). If the content is larger than 2 MB, call [PutKvWithHighCapacity] https:\/\/www.alibabacloud.com\/help\/en\/doc-detail\/2850486.html.
     */
    readonly expiration?: number | ros.IResolvable;

    /**
     * Property expirationTtl: The time when the key-value pair expires, which cannot be earlier than the current time. The value is a timestamp in seconds. If you specify both Expiration and ExpirationTtl, only ExpirationTtl takes effect.
     */
    readonly expirationTtl?: number | ros.IResolvable;
}

/**
 * Represents a `Kv`.
 */
export interface IKv extends ros.IResource {
    readonly props: KvProps;

    /**
     * Attribute Value: The content of the key. If the content has more than 256 characters in length, the system displays the first 100 and the last 100 characters, and omits the middle part.
     */
    readonly attrValue: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ESA::Kv`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosKv`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-kv
 */
export class Kv extends ros.Resource implements IKv {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: KvProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute Value: The content of the key. If the content has more than 256 characters in length, the system displays the first 100 and the last 100 characters, and omits the middle part.
     */
    public readonly attrValue: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: KvProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosKv = new RosKv(this, id,  {
            expirationTtl: props.expirationTtl,
            expiration: props.expiration,
            value: props.value,
            namespace: props.namespace,
            key: props.key,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosKv;
        this.attrValue = rosKv.attrValue;
    }
}
