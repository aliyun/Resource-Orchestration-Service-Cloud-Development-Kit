import * as ros from '@alicloud/ros-cdk-core';
import { RosBucket } from './oss.generated';
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
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::OSS::Bucket`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosBucket`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oss-bucket
 */
export declare class Bucket extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: BucketProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute CreateTime: The creation time of the Bucket.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * Attribute ExtranetEndpoint: The domain name of the Bucket.
     */
    readonly attrExtranetEndpoint: ros.IResolvable;
    /**
     * Attribute IntranetEndpoint: The intranet domain name of the ECS instance that accesses the Bucket in the same region.
     */
    readonly attrIntranetEndpoint: ros.IResolvable;
    /**
     * Attribute Location: The region where the Bucket is located.
     */
    readonly attrLocation: ros.IResolvable;
    /**
     * Attribute Name: Bucket name.
     */
    readonly attrName: ros.IResolvable;
    /**
     * Attribute Owner: Container for storing Bucket owner information.
     */
    readonly attrOwner: ros.IResolvable;
    /**
     * Attribute StorageClass: The storage type of the Bucket.
     */
    readonly attrStorageClass: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: BucketProps, enableResourcePropertyConstraint?: boolean);
}
