import * as ros from '@alicloud/ros-cdk-core';
import { RosDrdsDBs } from './drds.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosDrdsDBs as DrdsDBsProperty };

/**
 * Properties for defining a `DrdsDBs`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-drds-drdsdbs
 */
export interface DrdsDBsProps {

    /**
     * Property instanceId: Drds Instance ID.
     */
    readonly instanceId: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::DRDS::DrdsDBs`, which is used to query the details of databases on an instance.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDrdsDBs`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-drds-drdsdbs
 */
export class DrdsDBs extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: DrdsDBsProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute Databases: The list of drds databases.
     */
    public readonly attrDatabases: ros.IResolvable;

    /**
     * Attribute DrdsDatabaseNames: The list of drds database names.
     */
    public readonly attrDrdsDatabaseNames: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DrdsDBsProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosDrdsDBs = new RosDrdsDBs(this, id,  {
            instanceId: props.instanceId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDrdsDBs;
        this.attrDatabases = rosDrdsDBs.attrDatabases;
        this.attrDrdsDatabaseNames = rosDrdsDBs.attrDrdsDatabaseNames;
    }
}
