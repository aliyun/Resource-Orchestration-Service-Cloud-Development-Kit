import * as ros from '@alicloud/ros-cdk-core';
import { RosDomainGroups } from './dns.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosDomainGroups as DomainGroupsProperty };

/**
 * Properties for defining a `DomainGroups`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dns-domaingroups
 */
export interface DomainGroupsProps {

    /**
     * Property keyWord: The keyword for searches in "%KeyWord%" mode. The value is not case-sensitive.
     */
    readonly keyWord?: string | ros.IResolvable;

    /**
     * Property lang: The language type.
     */
    readonly lang?: string | ros.IResolvable;

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::DNS::DomainGroups`, which is used to query domain name groups.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDomainGroups`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dns-domaingroups
 */
export class DomainGroups extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: DomainGroupsProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute DomainGroupIds: The list of The DNS domain group ids.
     */
    public readonly attrDomainGroupIds: ros.IResolvable;

    /**
     * Attribute DomainGroups: The information about DNS domain groups.
     */
    public readonly attrDomainGroups: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DomainGroupsProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosDomainGroups = new RosDomainGroups(this, id,  {
            keyWord: props.keyWord,
            lang: props.lang,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDomainGroups;
        this.attrDomainGroupIds = rosDomainGroups.attrDomainGroupIds;
        this.attrDomainGroups = rosDomainGroups.attrDomainGroups;
    }
}
