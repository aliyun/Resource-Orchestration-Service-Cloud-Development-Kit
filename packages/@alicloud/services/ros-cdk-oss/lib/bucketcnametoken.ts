import * as ros from '@alicloud/ros-cdk-core';
import { RosBucketCnameToken } from './oss.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosBucketCnameToken as BucketCnameTokenProperty };

/**
 * Properties for defining a `BucketCnameToken`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-bucketcnametoken
 */
export interface BucketCnameTokenProps {

    /**
     * Property bucket: The name of the bucket.
     */
    readonly bucket: string | ros.IResolvable;

    /**
     * Property domain: The custom domain.
     */
    readonly domain: string | ros.IResolvable;
}

/**
 * Represents a `BucketCnameToken`.
 */
export interface IBucketCnameToken extends ros.IResource {
    readonly props: BucketCnameTokenProps;

    /**
     * Attribute Bucket: The name of the bucket.
     */
    readonly attrBucket: ros.IResolvable | string;

    /**
     * Attribute Domain: The custom domain.
     */
    readonly attrDomain: ros.IResolvable | string;

    /**
     * Attribute ExpireTime: Token Expiration Time.
     */
    readonly attrExpireTime: ros.IResolvable | string;

    /**
     * Attribute Token: Token used to verify domain ownership.
     */
    readonly attrToken: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::OSS::BucketCnameToken`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosBucketCnameToken`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-bucketcnametoken
 */
export class BucketCnameToken extends ros.Resource implements IBucketCnameToken {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: BucketCnameTokenProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute Bucket: The name of the bucket.
     */
    public readonly attrBucket: ros.IResolvable | string;

    /**
     * Attribute Domain: The custom domain.
     */
    public readonly attrDomain: ros.IResolvable | string;

    /**
     * Attribute ExpireTime: Token Expiration Time.
     */
    public readonly attrExpireTime: ros.IResolvable | string;

    /**
     * Attribute Token: Token used to verify domain ownership.
     */
    public readonly attrToken: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: BucketCnameTokenProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosBucketCnameToken = new RosBucketCnameToken(this, id,  {
            bucket: props.bucket,
            domain: props.domain,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosBucketCnameToken;
        this.attrBucket = rosBucketCnameToken.attrBucket;
        this.attrDomain = rosBucketCnameToken.attrDomain;
        this.attrExpireTime = rosBucketCnameToken.attrExpireTime;
        this.attrToken = rosBucketCnameToken.attrToken;
    }
}
