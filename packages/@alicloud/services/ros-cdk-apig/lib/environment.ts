import * as ros from '@alicloud/ros-cdk-core';
import { RosEnvironment } from './apig.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosEnvironment as EnvironmentProperty };

/**
 * Properties for defining a `Environment`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-environment
 */
export interface EnvironmentProps {

    /**
     * Property environmentName: The name of the environment.
     */
    readonly environmentName: string | ros.IResolvable;

    /**
     * Property gatewayId: Gateway id.
     */
    readonly gatewayId: string | ros.IResolvable;

    /**
     * Property description: Description of the environment, which can include information such as the purpose of the environment and its owner.
     */
    readonly description?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::APIG::Environment`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosEnvironment`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-environment
 */
export class Environment extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: EnvironmentProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute Description: Description of the environment.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * Attribute EnvironmentId: The ID of the environment.
     */
    public readonly attrEnvironmentId: ros.IResolvable;

    /**
     * Attribute EnvironmentName: The name of the resource.
     */
    public readonly attrEnvironmentName: ros.IResolvable;

    /**
     * Attribute GatewayId: The ID of the Gateway.
     */
    public readonly attrGatewayId: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: EnvironmentProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosEnvironment = new RosEnvironment(this, id,  {
            description: props.description,
            environmentName: props.environmentName,
            gatewayId: props.gatewayId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosEnvironment;
        this.attrDescription = rosEnvironment.attrDescription;
        this.attrEnvironmentId = rosEnvironment.attrEnvironmentId;
        this.attrEnvironmentName = rosEnvironment.attrEnvironmentName;
        this.attrGatewayId = rosEnvironment.attrGatewayId;
    }
}
