// Generated from the AliCloud ROS Resource Specification

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
 * Determine whether the given properties match those of a `RosBucketProps`
 *
 * @param properties - the TypeScript properties of a `RosBucketProps`
 *
 * @returns the result of the validation.
 */
function RosBucketPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('bucketName', ros.requiredValidator)(properties.bucketName));
    errors.collect(ros.propertyValidator('bucketName', ros.validateString)(properties.bucketName));
    return errors.wrap('supplied properties not correct for "RosBucketProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::OSS::Bucket` resource
 *
 * @param properties - the TypeScript properties of a `RosBucketProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::OSS::Bucket` resource.
 */
// @ts-ignore TS6133
function rosBucketPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosBucketPropsValidator(properties).assertSuccess();
    }
    return {
      BucketName: ros.stringToRosTemplate(properties.bucketName),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::OSS::Bucket`, which is used to query the information about an Object Storage Service (OSS) bucket.
 * @Note This class does not contain additional functions, so it is recommended to use the `Bucket` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oss-bucket
 */
export class RosBucket extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::OSS::Bucket";

    /**
     * @Attribute CreateTime: The creation time of the Bucket.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute ExtranetEndpoint: The domain name of the Bucket.
     */
    public readonly attrExtranetEndpoint: ros.IResolvable;

    /**
     * @Attribute IntranetEndpoint: The intranet domain name of the ECS instance that accesses the Bucket in the same region.
     */
    public readonly attrIntranetEndpoint: ros.IResolvable;

    /**
     * @Attribute Location: The region where the Bucket is located.
     */
    public readonly attrLocation: ros.IResolvable;

    /**
     * @Attribute Name: Bucket name.
     */
    public readonly attrName: ros.IResolvable;

    /**
     * @Attribute Owner: Container for storing Bucket owner information.
     */
    public readonly attrOwner: ros.IResolvable;

    /**
     * @Attribute StorageClass: The storage type of the Bucket.
     */
    public readonly attrStorageClass: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property bucketName: Bucket name. The naming conventions for buckets are as follows:
     * Only lowercase letters, numbers, and dashes (-) can be included.
     * Must start and end with lowercase letters or numbers.
     * The length must be between 3 and 63 characters.
     */
    public bucketName: string | ros.IResolvable;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosBucketProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosBucket.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrExtranetEndpoint = this.getAtt('ExtranetEndpoint');
        this.attrIntranetEndpoint = this.getAtt('IntranetEndpoint');
        this.attrLocation = this.getAtt('Location');
        this.attrName = this.getAtt('Name');
        this.attrOwner = this.getAtt('Owner');
        this.attrStorageClass = this.getAtt('StorageClass');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.bucketName = props.bucketName;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            bucketName: this.bucketName,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosBucketPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosBuckets`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oss-buckets
 */
export interface RosBucketsProps {
}

/**
 * Determine whether the given properties match those of a `RosBucketsProps`
 *
 * @param properties - the TypeScript properties of a `RosBucketsProps`
 *
 * @returns the result of the validation.
 */
function RosBucketsPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    return errors.wrap('supplied properties not correct for "RosBucketsProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::OSS::Buckets` resource
 *
 * @param properties - the TypeScript properties of a `RosBucketsProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::OSS::Buckets` resource.
 */
// @ts-ignore TS6133
function rosBucketsPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosBucketsPropsValidator(properties).assertSuccess();
    }
    return {
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::OSS::Buckets`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Buckets` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oss-buckets
 */
export class RosBuckets extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::OSS::Buckets";

    /**
     * @Attribute BucketNames: The list of bucket names.
     */
    public readonly attrBucketNames: ros.IResolvable;

    /**
     * @Attribute Buckets: The list of buckets.
     */
    public readonly attrBuckets: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosBucketsProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosBuckets.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrBucketNames = this.getAtt('BucketNames');
        this.attrBuckets = this.getAtt('Buckets');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosBucketsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
