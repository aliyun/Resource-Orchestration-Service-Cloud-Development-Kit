import * as ros from '@alicloud/ros-cdk-core';
import { RosLogstores } from './sls.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosLogstores as LogstoresProperty };

/**
 * Properties for defining a `Logstores`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-sls-logstores
 */
export interface LogstoresProps {

    /**
     * Property project: Project name.
     */
    readonly project: string | ros.IResolvable;

    /**
     * Property logstoreName: Logstore name.
     */
    readonly logstoreName?: string | ros.IResolvable;

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Represents a `Logstores`.
 */
export interface ILogstores extends ros.IResource {
    readonly props: LogstoresProps;

    /**
     * Attribute Logstores: The list of logstores.
     */
    readonly attrLogstores: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::SLS::Logstores`, which is used to query Logstores.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosLogstores`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-sls-logstores
 */
export class Logstores extends ros.Resource implements ILogstores {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: LogstoresProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute Logstores: The list of logstores.
     */
    public readonly attrLogstores: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: LogstoresProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosLogstores = new RosLogstores(this, id,  {
            project: props.project,
            logstoreName: props.logstoreName,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosLogstores;
        this.attrLogstores = rosLogstores.attrLogstores;
    }
}
