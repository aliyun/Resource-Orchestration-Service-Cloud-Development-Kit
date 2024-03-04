import * as ros from '@alicloud/ros-cdk-core';
import { RosDBInstanceParameterGroup } from './rds.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosDBInstanceParameterGroup as DBInstanceParameterGroupProperty };

/**
 * Properties for defining a `DBInstanceParameterGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rds-dbinstanceparametergroup
 */
export interface DBInstanceParameterGroupProps {

    /**
     * Property dbInstanceId: Database InstanceId to update properties.
     */
    readonly dbInstanceId: string | ros.IResolvable;

    /**
     * Property parameters: Parameters to update for selected database instance.
     */
    readonly parameters: Array<RosDBInstanceParameterGroup.ParametersProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property forcerestart: whether restart database instance.
     */
    readonly forcerestart?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::RDS::DBInstanceParameterGroup`, which is used to modify the parameters of an ApsaraDB RDS instance.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDBInstanceParameterGroup`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rds-dbinstanceparametergroup
 */
export class DBInstanceParameterGroup extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: DBInstanceParameterGroupProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DBInstanceParameterGroupProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosDBInstanceParameterGroup = new RosDBInstanceParameterGroup(this, id,  {
            parameters: props.parameters,
            dbInstanceId: props.dbInstanceId,
            forcerestart: props.forcerestart === undefined || props.forcerestart === null ? 'false' : props.forcerestart,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDBInstanceParameterGroup;
    }
}
