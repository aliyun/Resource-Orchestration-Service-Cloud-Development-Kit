import * as ros from '@alicloud/ros-cdk-core';
import { RosDBInstanceParameterGroup } from './rds.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosDBInstanceParameterGroup as DBInstanceParameterGroupProperty };

/**
 * Properties for defining a `ALIYUN::RDS::DBInstanceParameterGroup`
 */
export interface DBInstanceParameterGroupProps {

    /**
     * @Property dbInstanceId: Database InstanceId to update properties.
     */
    readonly dbInstanceId: string;

    /**
     * @Property parameters: Parameters to update for selected database instance.
     */
    readonly parameters: Array<RosDBInstanceParameterGroup.ParametersProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property forcerestart: whether restart database instance.
     */
    readonly forcerestart?: string;
}

/**
 * A ROS resource type:  `ALIYUN::RDS::DBInstanceParameterGroup`
 */
export class DBInstanceParameterGroup extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Create a new `ALIYUN::RDS::DBInstanceParameterGroup`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DBInstanceParameterGroupProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosDBInstanceParameterGroup = new RosDBInstanceParameterGroup(this, id,  {
            parameters: props.parameters,
            dbInstanceId: props.dbInstanceId,
            forcerestart: props.forcerestart ? props.forcerestart : 'false',
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDBInstanceParameterGroup;
    }
}
