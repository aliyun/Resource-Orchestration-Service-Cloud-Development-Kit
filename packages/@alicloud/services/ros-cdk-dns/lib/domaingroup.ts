import * as ros from '@alicloud/ros-cdk-core';
import { RosDomainGroup } from './dns.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosDomainGroup as DomainGroupProperty };

/**
 * Properties for defining a `DomainGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-domaingroup
 */
export interface DomainGroupProps {

    /**
     * Property groupName: Domain name group name
     */
    readonly groupName: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::DNS::DomainGroup`, which is used to add a domain name group.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDomainGroup`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-domaingroup
 */
export class DomainGroup extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: DomainGroupProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute GroupId: Domain name group ID
     */
    public readonly attrGroupId: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DomainGroupProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosDomainGroup = new RosDomainGroup(this, id,  {
            groupName: props.groupName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDomainGroup;
        this.attrGroupId = rosDomainGroup.attrGroupId;
    }
}
