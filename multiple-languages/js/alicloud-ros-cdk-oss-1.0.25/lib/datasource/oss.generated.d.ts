import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosBucket`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oss-bucket
 */
export interface RosBucketProps {
    /**
     * @Property bucketName: Bucket name. The naming conventions for buckets are as follows:
     * Only lowercase letters, numbers, and dashes (-) can be included.
     * Must start and end with lowercase letters or numbers.
     * The length must be between 3 and 63 characters.
     */
    readonly bucketName: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::OSS::Bucket`, which is used to query the information about an Object Storage Service (OSS) bucket.
 * @Note This class does not contain additional functions, so it is recommended to use the `Bucket` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oss-bucket
 */
export declare class RosBucket extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::OSS::Bucket";
    /**
     * @Attribute CreateTime: The creation time of the Bucket.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute ExtranetEndpoint: The domain name of the Bucket.
     */
    readonly attrExtranetEndpoint: ros.IResolvable;
    /**
     * @Attribute IntranetEndpoint: The intranet domain name of the ECS instance that accesses the Bucket in the same region.
     */
    readonly attrIntranetEndpoint: ros.IResolvable;
    /**
     * @Attribute Location: The region where the Bucket is located.
     */
    readonly attrLocation: ros.IResolvable;
    /**
     * @Attribute Name: Bucket name.
     */
    readonly attrName: ros.IResolvable;
    /**
     * @Attribute Owner: Container for storing Bucket owner information.
     */
    readonly attrOwner: ros.IResolvable;
    /**
     * @Attribute StorageClass: The storage type of the Bucket.
     */
    readonly attrStorageClass: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property bucketName: Bucket name. The naming conventions for buckets are as follows:
     * Only lowercase letters, numbers, and dashes (-) can be included.
     * Must start and end with lowercase letters or numbers.
     * The length must be between 3 and 63 characters.
     */
    bucketName: string | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosBucketProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `RosBuckets`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oss-buckets
 */
export interface RosBucketsProps {
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::OSS::Buckets`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Buckets` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oss-buckets
 */
export declare class RosBuckets extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::OSS::Buckets";
    /**
     * @Attribute BucketNames: The list of bucket names.
     */
    readonly attrBucketNames: ros.IResolvable;
    /**
     * @Attribute Buckets: The list of buckets.
     */
    readonly attrBuckets: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosBucketsProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
