import * as ros from '@alicloud/ros-cdk-core';
import { RosHostGroup } from './devops.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosHostGroup as HostGroupProperty };

/**
 * Properties for defining a `HostGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-devops-hostgroup
 */
export interface HostGroupProps {

    /**
     * Property name: Host group name.
     */
    readonly name: string | ros.IResolvable;

    /**
     * Property organizationId: Corporate identity, also known as enterprise id, can obtain in cloud effect access links.
     */
    readonly organizationId: string | ros.IResolvable;

    /**
     * Property serviceConnectionId: Service connection.
     */
    readonly serviceConnectionId: number | ros.IResolvable;

    /**
     * Property aliyunRegion: The aliyun region.
     */
    readonly aliyunRegion?: string | ros.IResolvable;

    /**
     * Property ecsLabelKey: The tag key of the ECS.
     */
    readonly ecsLabelKey?: string | ros.IResolvable;

    /**
     * Property ecsLabelValue: The tag value of the ECS.
     */
    readonly ecsLabelValue?: string | ros.IResolvable;

    /**
     * Property ecsType: The type of ECS, currently only supports ECS_ALIYUN.
     */
    readonly ecsType?: string | ros.IResolvable;

    /**
     * Property envId: Environment id.
     */
    readonly envId?: string | ros.IResolvable;

    /**
     * Property machineInfos: The machine infos
     */
    readonly machineInfos?: Array<RosHostGroup.MachineInfosProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property tagIds: The ids of tag.
     */
    readonly tagIds?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property type: Host group type, currently only supports ECS.
     */
    readonly type?: string | ros.IResolvable;
}

/**
 * Represents a `HostGroup`.
 */
export interface IHostGroup extends ros.IResource {
    readonly props: HostGroupProps;

    /**
     * Attribute HostGroupId: The id of the host group.
     */
    readonly attrHostGroupId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::DEVOPS::HostGroup`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosHostGroup`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-devops-hostgroup
 */
export class HostGroup extends ros.Resource implements IHostGroup {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: HostGroupProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute HostGroupId: The id of the host group.
     */
    public readonly attrHostGroupId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: HostGroupProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosHostGroup = new RosHostGroup(this, id,  {
            type: props.type === undefined || props.type === null ? 'ECS' : props.type,
            serviceConnectionId: props.serviceConnectionId,
            tagIds: props.tagIds,
            ecsType: props.ecsType === undefined || props.ecsType === null ? 'ECS_ALIYUN' : props.ecsType,
            envId: props.envId,
            machineInfos: props.machineInfos,
            aliyunRegion: props.aliyunRegion,
            ecsLabelValue: props.ecsLabelValue,
            organizationId: props.organizationId,
            ecsLabelKey: props.ecsLabelKey,
            name: props.name,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosHostGroup;
        this.attrHostGroupId = rosHostGroup.attrHostGroupId;
    }
}
