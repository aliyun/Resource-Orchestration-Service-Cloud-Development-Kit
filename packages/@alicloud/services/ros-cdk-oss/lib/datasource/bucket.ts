import * as ros from '@alicloud/ros-cdk-core';
import { RosBucket } from './oss.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosBucket as BucketProperty };

/**
 * Properties for defining a `Bucket`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oss-bucket
 */
export interface BucketProps {

    /**
     * Property bucketName: Bucket name. The naming conventions for buckets are as follows:
     * Only lowercase letters, numbers, and dashes (-) can be included.
     * Must start and end with lowercase letters or numbers.
     * The length must be between 3 and 63 characters.
     */
    readonly bucketName: string | ros.IResolvable;

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::OSS::Bucket`, which is used to query the information about an Object Storage Service (OSS) bucket.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosBucket`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oss-bucket
 */
export class Bucket extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: BucketProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute CreateTime: The creation time of the Bucket.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * Attribute ExtranetEndpoint: The domain name of the Bucket.
     */
    public readonly attrExtranetEndpoint: ros.IResolvable;

    /**
     * Attribute IntranetEndpoint: The intranet domain name of the ECS instance that accesses the Bucket in the same region.
     */
    public readonly attrIntranetEndpoint: ros.IResolvable;

    /**
     * Attribute Location: The region where the Bucket is located.
     */
    public readonly attrLocation: ros.IResolvable;

    /**
     * Attribute Name: Bucket name.
     */
    public readonly attrName: ros.IResolvable;

    /**
     * Attribute Owner: Container for storing Bucket owner information.
     */
    public readonly attrOwner: ros.IResolvable;

    /**
     * Attribute StorageClass: The storage type of the Bucket.
     */
    public readonly attrStorageClass: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: BucketProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosBucket = new RosBucket(this, id,  {
            bucketName: props.bucketName,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosBucket;
        this.attrCreateTime = rosBucket.attrCreateTime;
        this.attrExtranetEndpoint = rosBucket.attrExtranetEndpoint;
        this.attrIntranetEndpoint = rosBucket.attrIntranetEndpoint;
        this.attrLocation = rosBucket.attrLocation;
        this.attrName = rosBucket.attrName;
        this.attrOwner = rosBucket.attrOwner;
        this.attrStorageClass = rosBucket.attrStorageClass;
    }
}
