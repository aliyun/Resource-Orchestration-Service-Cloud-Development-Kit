import * as ros from '@alicloud/ros-cdk-core';
import { RosSlsGroups } from './cms.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosSlsGroups as SlsGroupsProperty };

/**
 * Properties for defining a `DATASOURCE::CMS::SlsGroups`
 */
export interface SlsGroupsProps {

    /**
     * Property slsGroupName: The name of the Logstore group.
     */
    readonly slsGroupName?: string | ros.IResolvable;
}

/**
 * A ROS resource type:  `DATASOURCE::CMS::SlsGroups`
 */
export class SlsGroups extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute SlsGroupNames: The list of sls group names.
     */
    public readonly attrSlsGroupNames: ros.IResolvable;

    /**
     * Attribute SlsGroups: The list of sls groups.
     */
    public readonly attrSlsGroups: ros.IResolvable;

    /**
     * Create a new `DATASOURCE::CMS::SlsGroups`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SlsGroupsProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosSlsGroups = new RosSlsGroups(this, id,  {
            slsGroupName: props.slsGroupName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosSlsGroups;
        this.attrSlsGroupNames = rosSlsGroups.attrSlsGroupNames;
        this.attrSlsGroups = rosSlsGroups.attrSlsGroups;
    }
}
