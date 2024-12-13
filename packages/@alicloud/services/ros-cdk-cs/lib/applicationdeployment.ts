import * as ros from '@alicloud/ros-cdk-core';
import { RosApplicationDeployment } from './cs.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosApplicationDeployment as ApplicationDeploymentProperty };

/**
 * Properties for defining a `ApplicationDeployment`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cs-applicationdeployment
 */
export interface ApplicationDeploymentProps {

    /**
     * Property chartUrl: Helm chart package URL, must be a valid URL.
     */
    readonly chartUrl: string | ros.IResolvable;

    /**
     * Property clusterId: The cluster id of the deployed application.
     */
    readonly clusterId: string | ros.IResolvable;

    /**
     * Property name: Name of the deployed application.
     */
    readonly name: string | ros.IResolvable;

    /**
     * Property namespace: Deployment namespace.
     */
    readonly namespace: string | ros.IResolvable;

    /**
     * Property type: Type of the deployed application, currently can only be helm.
     */
    readonly type: string | ros.IResolvable;

    /**
     * Property values: Helm deployment parameters, a map that will be converted to YAML text.
     */
    readonly values?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CS::ApplicationDeployment`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosApplicationDeployment`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cs-applicationdeployment
 */
export class ApplicationDeployment extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: ApplicationDeploymentProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute TaskId: The task ID of the application deployment.
     */
    public readonly attrTaskId: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ApplicationDeploymentProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosApplicationDeployment = new RosApplicationDeployment(this, id,  {
            type: props.type,
            clusterId: props.clusterId,
            values: props.values,
            chartUrl: props.chartUrl,
            namespace: props.namespace,
            name: props.name,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosApplicationDeployment;
        this.attrTaskId = rosApplicationDeployment.attrTaskId;
    }
}
