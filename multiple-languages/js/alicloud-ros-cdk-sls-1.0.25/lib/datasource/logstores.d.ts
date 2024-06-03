import * as ros from '@alicloud/ros-cdk-core';
import { RosLogstores } from './sls.generated';
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
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::SLS::Logstores`, which is used to query Logstores.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosLogstores`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-sls-logstores
 */
export declare class Logstores extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: LogstoresProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute Logstores: The list of logstores.
     */
    readonly attrLogstores: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: LogstoresProps, enableResourcePropertyConstraint?: boolean);
}
