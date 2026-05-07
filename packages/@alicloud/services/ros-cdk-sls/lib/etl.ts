import * as ros from '@alicloud/ros-cdk-core';
import { RosEtl } from './sls.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosEtl as EtlProperty };

/**
 * Properties for defining a `Etl`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-etl
 */
export interface EtlProps {

    /**
     * Property configuration: The configuration of ETL task
     */
    readonly configuration: RosEtl.ConfigurationProperty | ros.IResolvable;

    /**
     * Property displayName: ETL display name
     */
    readonly displayName: string | ros.IResolvable;

    /**
     * Property name: ETL name
     */
    readonly name: string | ros.IResolvable;

    /**
     * Property projectName: Project name
     */
    readonly projectName: string | ros.IResolvable;

    /**
     * Property schedule: Task scheduling strategy
     */
    readonly schedule: RosEtl.ScheduleProperty | ros.IResolvable;

    /**
     * Property description: ETL description message.
     */
    readonly description?: string | ros.IResolvable;
}

/**
 * Represents a `Etl`.
 */
export interface IEtl extends ros.IResource {
    readonly props: EtlProps;

    /**
     * Attribute Name: ETL name.
     */
    readonly attrName: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::SLS::Etl`, which is used to create a data transformation task.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosEtl`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-etl
 */
export class Etl extends ros.Resource implements IEtl {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: EtlProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute Name: ETL name.
     */
    public readonly attrName: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: EtlProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosEtl = new RosEtl(this, id,  {
            description: props.description,
            configuration: props.configuration,
            projectName: props.projectName,
            schedule: props.schedule,
            displayName: props.displayName,
            name: props.name,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosEtl;
        this.attrName = rosEtl.attrName;
    }
}
