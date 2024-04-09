import * as ros from '@alicloud/ros-cdk-core';
import { RosDomain } from './oss.generated';
// Generated from the AliCloud ROS Resource Specification
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
 * This class encapsulates and extends the ROS resource type `ALIYUN::OSS::Domain`, which is used to bind a custom domain name.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDomain`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-domain
 */
export class Domain extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: DomainProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute BucketName: The name of Bucket
     */
    public readonly attrBucketName: ros.IResolvable;

    /**
     * Attribute DomainName: The custom domain name.
     */
    public readonly attrDomainName: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DomainProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosDomain = new RosDomain(this, id,  {
            bucketName: props.bucketName,
            domainName: props.domainName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDomain;
        this.attrBucketName = rosDomain.attrBucketName;
        this.attrDomainName = rosDomain.attrDomainName;
    }
}
