import * as ros from '@alicloud/ros-cdk-core';
import { RosProvisionConfig } from './fc.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosProvisionConfig as ProvisionConfigProperty };

/**
 * Properties for defining a `ProvisionConfig`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc-provisionconfig
 */
export interface ProvisionConfigProps {

    /**
     * Property functionName: Function name
     */
    readonly functionName: string | ros.IResolvable;

    /**
     * Property qualifier: Service's alias.
     * Example : "LATEST"
     */
    readonly qualifier: string | ros.IResolvable;

    /**
     * Property serviceName: Service name
     */
    readonly serviceName: string | ros.IResolvable;

    /**
     * Property target: Number of provision
     */
    readonly target: number | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::FC::ProvisionConfig`, which is used to create provisioned instances in Function Compute.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosProvisionConfig`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc-provisionconfig
 */
export class ProvisionConfig extends ros.Resource {

    /**
     * Attribute FunctionName: The function name
     */
    public readonly attrFunctionName: ros.IResolvable;

    /**
     * Attribute Qualifier: The service alias
     */
    public readonly attrQualifier: ros.IResolvable;

    /**
     * Attribute Resource: The resource
     */
    public readonly attrResource: ros.IResolvable;

    /**
     * Attribute ServiceName: The service name
     */
    public readonly attrServiceName: ros.IResolvable;

    /**
     * Attribute Target: Number of provision
     */
    public readonly attrTarget: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ProvisionConfigProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosProvisionConfig = new RosProvisionConfig(this, id,  {
            functionName: props.functionName,
            target: props.target,
            serviceName: props.serviceName,
            qualifier: props.qualifier,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosProvisionConfig;
        this.attrFunctionName = rosProvisionConfig.attrFunctionName;
        this.attrQualifier = rosProvisionConfig.attrQualifier;
        this.attrResource = rosProvisionConfig.attrResource;
        this.attrServiceName = rosProvisionConfig.attrServiceName;
        this.attrTarget = rosProvisionConfig.attrTarget;
    }
}
