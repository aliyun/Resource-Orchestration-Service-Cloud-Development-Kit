// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

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
