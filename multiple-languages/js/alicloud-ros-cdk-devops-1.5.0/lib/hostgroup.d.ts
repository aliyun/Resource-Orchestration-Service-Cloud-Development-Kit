import * as ros from '@alicloud/ros-cdk-core';
import { RosHostGroup } from './devops.generated';
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
 * This class encapsulates and extends the ROS resource type `ALIYUN::DEVOPS::HostGroup`, which is used to create a host group.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosHostGroup`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-devops-hostgroup
 */
export declare class HostGroup extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: HostGroupProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute HostGroupId: The id of the host group.
     */
    readonly attrHostGroupId: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: HostGroupProps, enableResourcePropertyConstraint?: boolean);
}
