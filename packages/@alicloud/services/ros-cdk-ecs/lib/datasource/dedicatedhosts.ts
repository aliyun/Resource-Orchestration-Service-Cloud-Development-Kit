import * as ros from '@alicloud/ros-cdk-core';
import { RosDedicatedHosts } from './ecs.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosDedicatedHosts as DedicatedHostsProperty };

/**
 * Properties for defining a `DedicatedHosts`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-dedicatedhosts
 */
export interface DedicatedHostsProps {

    /**
     * Property dedicatedHostClusterId: The ID of the dedicated host cluster.
     */
    readonly dedicatedHostClusterId?: string | ros.IResolvable;

    /**
     * Property dedicatedHostIds: The IDs of the dedicated hosts. You can specify up to 100 dedicated host IDs.
     */
    readonly dedicatedHostIds?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property dedicatedHostName: The name of the dedicated host.
     */
    readonly dedicatedHostName?: string | ros.IResolvable;

    /**
     * Property dedicatedHostType: The type of the dedicated host.
     */
    readonly dedicatedHostType?: string | ros.IResolvable;

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

    /**
     * Property resourceGroupId: The ID of the resource group to which the dedicated host belongs.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * Property status: The service status of the dedicated host. Valid values:
     * Available: The dedicated host is running normally.
     * UnderAssessment: The dedicated host is at risk, which may cause issues to ECS instances on the dedicated host.
     *  PermanentFailure: A permanent failure exists and the dedicated host is unavailable.
     * Default value: Available.
     */
    readonly status?: string | ros.IResolvable;

    /**
     * Property tags: Tags of ddh.
     */
    readonly tags?: RosDedicatedHosts.TagsProperty[];

    /**
     * Property zoneId: The zone ID of the dedicated host.
     */
    readonly zoneId?: string | ros.IResolvable;
}

/**
 * Represents a `DedicatedHosts`.
 */
export interface IDedicatedHosts extends ros.IResource {
    readonly props: DedicatedHostsProps;

    /**
     * Attribute DedicatedHostIds: The list of dedicated host ids.
     */
    readonly attrDedicatedHostIds: ros.IResolvable | string;

    /**
     * Attribute DedicatedHosts: The list of dedicated hosts.
     */
    readonly attrDedicatedHosts: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ECS::DedicatedHosts`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDedicatedHosts`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-dedicatedhosts
 */
export class DedicatedHosts extends ros.Resource implements IDedicatedHosts {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: DedicatedHostsProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute DedicatedHostIds: The list of dedicated host ids.
     */
    public readonly attrDedicatedHostIds: ros.IResolvable | string;

    /**
     * Attribute DedicatedHosts: The list of dedicated hosts.
     */
    public readonly attrDedicatedHosts: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DedicatedHostsProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosDedicatedHosts = new RosDedicatedHosts(this, id,  {
            status: props.status,
            zoneId: props.zoneId,
            resourceGroupId: props.resourceGroupId,
            dedicatedHostName: props.dedicatedHostName,
            dedicatedHostType: props.dedicatedHostType,
            dedicatedHostIds: props.dedicatedHostIds,
            tags: props.tags,
            dedicatedHostClusterId: props.dedicatedHostClusterId,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDedicatedHosts;
        this.attrDedicatedHostIds = rosDedicatedHosts.attrDedicatedHostIds;
        this.attrDedicatedHosts = rosDedicatedHosts.attrDedicatedHosts;
    }
}
