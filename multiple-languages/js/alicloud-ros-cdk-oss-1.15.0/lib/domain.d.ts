import * as ros from '@alicloud/ros-cdk-core';
import { RosDomain } from './oss.generated';
export { RosDomain as DomainProperty };
/**
 * Properties for defining a `Domain`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-domain
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
 * Represents a `Domain`.
 */
export interface IDomain extends ros.IResource {
    readonly props: DomainProps;
    /**
     * Attribute BucketName: The name of Bucket
     */
    readonly attrBucketName: ros.IResolvable | string;
    /**
     * Attribute DomainName: The custom domain name.
     */
    readonly attrDomainName: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::OSS::Domain`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDomain`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-domain
 */
export declare class Domain extends ros.Resource implements IDomain {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: DomainProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute BucketName: The name of Bucket
     */
    readonly attrBucketName: ros.IResolvable | string;
    /**
     * Attribute DomainName: The custom domain name.
     */
    readonly attrDomainName: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DomainProps, enableResourcePropertyConstraint?: boolean);
}
