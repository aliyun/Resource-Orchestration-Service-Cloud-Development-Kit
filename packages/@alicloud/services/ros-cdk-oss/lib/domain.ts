import * as ros from '@alicloud/ros-cdk-core';
import { RosDomain } from './oss.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosDomain as DomainProperty };

/**
 * Properties for defining a `ALIYUN::OSS::Domain`
 */
export interface DomainProps {

    /**
     * Property bucketName: bucket name.
     */
    readonly bucketName: string | ros.IResolvable;

    /**
     * Property domainName: Domain name
     */
    readonly domainName: string | ros.IResolvable;
}

/**
 * A ROS resource type:  `ALIYUN::OSS::Domain`
 */
export class Domain extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute BucketName: The name of Bucket
     */
    public readonly attrBucketName: ros.IResolvable;

    /**
     * Attribute DomainName: The custom domain name.
     */
    public readonly attrDomainName: ros.IResolvable;

    /**
     * Create a new `ALIYUN::OSS::Domain`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DomainProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosDomain = new RosDomain(this, id,  {
            bucketName: props.bucketName,
            domainName: props.domainName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDomain;
        this.attrBucketName = rosDomain.attrBucketName;
        this.attrDomainName = rosDomain.attrDomainName;
    }
}
