import * as ros from '@alicloud/ros-cdk-core';
import { RosDrdsDBs } from './drds.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosDrdsDBs as DrdsDBsProperty };

/**
 * Properties for defining a `DATASOURCE::DRDS::DrdsDBs`
 */
export interface DrdsDBsProps {

    /**
     * Property instanceId: Drds Instance ID.
     */
    readonly instanceId: string | ros.IResolvable;
}

/**
 * A ROS resource type:  `DATASOURCE::DRDS::DrdsDBs`
 */
export class DrdsDBs extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute Databases: The list of drds databases.
     */
    public readonly attrDatabases: ros.IResolvable;

    /**
     * Attribute DrdsDatabaseNames: The list of drds database names.
     */
    public readonly attrDrdsDatabaseNames: ros.IResolvable;

    /**
     * Create a new `DATASOURCE::DRDS::DrdsDBs`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DrdsDBsProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosDrdsDBs = new RosDrdsDBs(this, id,  {
            instanceId: props.instanceId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDrdsDBs;
        this.attrDatabases = rosDrdsDBs.attrDatabases;
        this.attrDrdsDatabaseNames = rosDrdsDBs.attrDrdsDatabaseNames;
    }
}
