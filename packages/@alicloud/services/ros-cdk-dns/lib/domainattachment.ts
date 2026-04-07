import * as ros from '@alicloud/ros-cdk-core';
import { RosDomainAttachment } from './dns.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosDomainAttachment as DomainAttachmentProperty };

/**
 * Properties for defining a `DomainAttachment`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-domainattachment
 */
export interface DomainAttachmentProps {

    /**
     * Property domainNames: The list of domain names to attach.
     */
    readonly domainNames: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property instanceId: The ID of the instance.
     */
    readonly instanceId: string | ros.IResolvable;
}

/**
 * Represents a `DomainAttachment`.
 */
export interface IDomainAttachment extends ros.IResource {
    readonly props: DomainAttachmentProps;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::DNS::DomainAttachment`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDomainAttachment`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-domainattachment
 */
export class DomainAttachment extends ros.Resource implements IDomainAttachment {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: DomainAttachmentProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DomainAttachmentProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosDomainAttachment = new RosDomainAttachment(this, id,  {
            instanceId: props.instanceId,
            domainNames: props.domainNames,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDomainAttachment;
    }
}
