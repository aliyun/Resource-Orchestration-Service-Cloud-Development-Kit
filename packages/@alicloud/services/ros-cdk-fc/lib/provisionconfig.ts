import * as ros from '@alicloud/ros-cdk-core';
import { RosProvisionConfig } from './fc.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosProvisionConfig as ProvisionConfigProperty };

/**
 * Properties for defining a `ALIYUN::FC::ProvisionConfig`
 */
export interface ProvisionConfigProps {

    /**
     * Property functionName: Function name
     */
    readonly functionName: string;

    /**
     * Property qualifier: Service's alias.
     * Example : "LATEST"
     */
    readonly qualifier: string;

    /**
     * Property serviceName: Service name
     */
    readonly serviceName: string;

    /**
     * Property target: Number of provision
     */
    readonly target: number;
}

/**
 * A ROS resource type:  `ALIYUN::FC::ProvisionConfig`
 */
export class ProvisionConfig extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute FunctionName: The function name
     */
    public readonly attrFunctionName: any;

    /**
     * Attribute Qualifier: The service alias
     */
    public readonly attrQualifier: any;

    /**
     * Attribute Resource: The resource
     */
    public readonly attrResource: any;

    /**
     * Attribute ServiceName: The service name
     */
    public readonly attrServiceName: any;

    /**
     * Attribute Target: Number of provision
     */
    public readonly attrTarget: any;

    /**
     * Create a new `ALIYUN::FC::ProvisionConfig`.
     *
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
