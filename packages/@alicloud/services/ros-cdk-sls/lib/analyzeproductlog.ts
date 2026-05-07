import * as ros from '@alicloud/ros-cdk-core';
import { RosAnalyzeProductLog } from './sls.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosAnalyzeProductLog as AnalyzeProductLogProperty };

/**
 * Properties for defining a `AnalyzeProductLog`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-analyzeproductlog
 */
export interface AnalyzeProductLogProps {

    /**
     * Property cloudProduct: The cloud product name.
     */
    readonly cloudProduct: string | ros.IResolvable;

    /**
     * Property logstore: The logstore name.
     */
    readonly logstore: string | ros.IResolvable;

    /**
     * Property project: The project name.
     */
    readonly project: string | ros.IResolvable;

    /**
     * Property overwrite: Whether to overwrite the existing analysis rule.
     */
    readonly overwrite?: boolean | ros.IResolvable;
}

/**
 * Represents a `AnalyzeProductLog`.
 */
export interface IAnalyzeProductLog extends ros.IResource {
    readonly props: AnalyzeProductLogProps;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::SLS::AnalyzeProductLog`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAnalyzeProductLog`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-analyzeproductlog
 */
export class AnalyzeProductLog extends ros.Resource implements IAnalyzeProductLog {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: AnalyzeProductLogProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AnalyzeProductLogProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosAnalyzeProductLog = new RosAnalyzeProductLog(this, id,  {
            project: props.project,
            overwrite: props.overwrite,
            logstore: props.logstore,
            cloudProduct: props.cloudProduct,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosAnalyzeProductLog;
    }
}
