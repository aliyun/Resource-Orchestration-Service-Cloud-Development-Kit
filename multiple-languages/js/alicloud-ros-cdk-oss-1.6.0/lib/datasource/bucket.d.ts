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
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * Represents a `Bucket`.
 */
export interface IBucket extends ros.IResource {
    readonly props: BucketProps;
    /**
     * Attribute CreateTime: The creation time of the Bucket.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute ExtranetEndpoint: The domain name of the Bucket.
     */
    readonly attrExtranetEndpoint: ros.IResolvable | string;
    /**
     * Attribute IntranetEndpoint: The intranet domain name of the ECS instance that accesses the Bucket in the same region.
     */
    readonly attrIntranetEndpoint: ros.IResolvable | string;
    /**
     * Attribute Location: The region where the Bucket is located.
     */
    readonly attrLocation: ros.IResolvable | string;
    /**
     * Attribute Name: Bucket name.
     */
    readonly attrName: ros.IResolvable | string;
    /**
     * Attribute Owner: Container for storing Bucket owner information.
     */
    readonly attrOwner: ros.IResolvable | string;
    /**
     * Attribute StorageClass: The storage type of the Bucket.
     */
    readonly attrStorageClass: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::OSS::Bucket`, which is used to query the information about an Object Storage Service (OSS) bucket.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosBucket`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oss-bucket
 */
export declare class Bucket extends ros.Resource implements IBucket {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: BucketProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute CreateTime: The creation time of the Bucket.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute ExtranetEndpoint: The domain name of the Bucket.
     */
    readonly attrExtranetEndpoint: ros.IResolvable | string;
    /**
     * Attribute IntranetEndpoint: The intranet domain name of the ECS instance that accesses the Bucket in the same region.
     */
    readonly attrIntranetEndpoint: ros.IResolvable | string;
    /**
     * Attribute Location: The region where the Bucket is located.
     */
    readonly attrLocation: ros.IResolvable | string;
    /**
     * Attribute Name: Bucket name.
     */
    readonly attrName: ros.IResolvable | string;
    /**
     * Attribute Owner: Container for storing Bucket owner information.
     */
    readonly attrOwner: ros.IResolvable | string;
    /**
     * Attribute StorageClass: The storage type of the Bucket.
     */
    readonly attrStorageClass: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: BucketProps, enableResourcePropertyConstraint?: boolean);
}
