import * as ros from '@alicloud/ros-cdk-core';
import { RosBucketPublicAccessBlock } from './oss.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosBucketPublicAccessBlock as BucketPublicAccessBlockProperty };

/**
 * Properties for defining a `BucketPublicAccessBlock`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-bucketpublicaccessblock
 */
export interface BucketPublicAccessBlockProps {

    /**
     * Property blockPublicAccess: Whether AlibabaCloud OSS should block public bucket policies and ACL for this bucket.
     */
    readonly blockPublicAccess: boolean | ros.IResolvable;

    /**
     * Property bucket: The name of the bucket.
     */
    readonly bucket: string | ros.IResolvable;
}

/**
 * Represents a `BucketPublicAccessBlock`.
 */
export interface IBucketPublicAccessBlock extends ros.IResource {
    readonly props: BucketPublicAccessBlockProps;

    /**
     * Attribute BlockPublicAccess: Whether AlibabaCloud OSS should block public bucket policies and ACL for this bucket.
     */
    readonly attrBlockPublicAccess: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::OSS::BucketPublicAccessBlock`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosBucketPublicAccessBlock`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-bucketpublicaccessblock
 */
export class BucketPublicAccessBlock extends ros.Resource implements IBucketPublicAccessBlock {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: BucketPublicAccessBlockProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute BlockPublicAccess: Whether AlibabaCloud OSS should block public bucket policies and ACL for this bucket.
     */
    public readonly attrBlockPublicAccess: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: BucketPublicAccessBlockProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosBucketPublicAccessBlock = new RosBucketPublicAccessBlock(this, id,  {
            bucket: props.bucket,
            blockPublicAccess: props.blockPublicAccess,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosBucketPublicAccessBlock;
        this.attrBlockPublicAccess = rosBucketPublicAccessBlock.attrBlockPublicAccess;
    }
}
