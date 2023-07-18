import * as ros from '@alicloud/ros-cdk-core';
import { RosUserDefineRegions } from './edas.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosUserDefineRegions as UserDefineRegionsProperty };

/**
 * Properties for defining a `DATASOURCE::EDAS::UserDefineRegions`
 */
export interface UserDefineRegionsProps {
}

/**
 * A ROS resource type:  `DATASOURCE::EDAS::UserDefineRegions`
 */
export class UserDefineRegions extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute Ids: The list of user define region IDs.
     */
    public readonly attrIds: ros.IResolvable;

    /**
     * Attribute UserDefineRegions: The list of user define regions.
     */
    public readonly attrUserDefineRegions: ros.IResolvable;

    /**
     * Create a new `DATASOURCE::EDAS::UserDefineRegions`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: UserDefineRegionsProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosUserDefineRegions = new RosUserDefineRegions(this, id,  {
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        props;
        this.resource = rosUserDefineRegions;
        this.attrIds = rosUserDefineRegions.attrIds;
        this.attrUserDefineRegions = rosUserDefineRegions.attrUserDefineRegions;
    }
}
