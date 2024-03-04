import * as ros from '@alicloud/ros-cdk-core';
import { RosParameterGroups } from './polardb.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosParameterGroups as ParameterGroupsProperty };

/**
 * Properties for defining a `ParameterGroups`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-polardb-parametergroups
 */
export interface ParameterGroupsProps {

    /**
     * Property dbType: The type of the database engine.
     */
    readonly dbType?: string | ros.IResolvable;

    /**
     * Property dbVersion: The version of the database engine.
     */
    readonly dbVersion?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::POLARDB::ParameterGroups`, which is used to query parameter templates in a specific region.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosParameterGroups`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-polardb-parametergroups
 */
export class ParameterGroups extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: ParameterGroupsProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute ParameterGroupIds: The list of parameter group IDs.
     */
    public readonly attrParameterGroupIds: ros.IResolvable;

    /**
     * Attribute ParameterGroups: The list of parameter groups.
     */
    public readonly attrParameterGroups: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ParameterGroupsProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosParameterGroups = new RosParameterGroups(this, id,  {
            dbVersion: props.dbVersion,
            dbType: props.dbType,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosParameterGroups;
        this.attrParameterGroupIds = rosParameterGroups.attrParameterGroupIds;
        this.attrParameterGroups = rosParameterGroups.attrParameterGroups;
    }
}
