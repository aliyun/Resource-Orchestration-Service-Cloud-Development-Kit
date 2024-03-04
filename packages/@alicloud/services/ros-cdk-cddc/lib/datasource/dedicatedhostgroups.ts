import * as ros from '@alicloud/ros-cdk-core';
import { RosDedicatedHostGroups } from './cddc.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosDedicatedHostGroups as DedicatedHostGroupsProperty };

/**
 * Properties for defining a `DedicatedHostGroups`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cddc-dedicatedhostgroups
 */
export interface DedicatedHostGroupsProps {

    /**
     * Property dedicatedHostGroupId: Dedicated Host Group ID.
     */
    readonly dedicatedHostGroupId?: string | ros.IResolvable;

    /**
     * Property engine: Database Engine Type.
     */
    readonly engine?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::CDDC::DedicatedHostGroups`, which is used to query the resources in a dedicated cluster.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDedicatedHostGroups`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cddc-dedicatedhostgroups
 */
export class DedicatedHostGroups extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: DedicatedHostGroupsProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute DedicatedHostGroupIds: The list of dedicated host group IDs.
     */
    public readonly attrDedicatedHostGroupIds: ros.IResolvable;

    /**
     * Attribute DedicatedHostGroups: The list of dedicated host groups.
     */
    public readonly attrDedicatedHostGroups: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DedicatedHostGroupsProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosDedicatedHostGroups = new RosDedicatedHostGroups(this, id,  {
            dedicatedHostGroupId: props.dedicatedHostGroupId,
            engine: props.engine,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDedicatedHostGroups;
        this.attrDedicatedHostGroupIds = rosDedicatedHostGroups.attrDedicatedHostGroupIds;
        this.attrDedicatedHostGroups = rosDedicatedHostGroups.attrDedicatedHostGroups;
    }
}
