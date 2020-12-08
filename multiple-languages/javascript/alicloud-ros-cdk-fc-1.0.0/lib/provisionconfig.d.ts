import * as ros from '@alicloud/ros-cdk-core';
import { RosProvisionConfig } from './fc.generated';
export { RosProvisionConfig as ProvisionConfigProperty };
/**
 * Properties for defining a `ALIYUN::FC::ProvisionConfig`
 */
export interface ProvisionConfigProps {
    /**
     * @Property functionName: Function name
     */
    readonly functionName: string;
    /**
     * @Property qualifier: Service's alias.
     * Example : "LATEST"
     */
    readonly qualifier: string;
    /**
     * @Property serviceName: Service name
     */
    readonly serviceName: string;
    /**
     * @Property target: Number of provision
     */
    readonly target: number;
}
/**
 * A ROS resource type:  `ALIYUN::FC::ProvisionConfig`
 */
export declare class ProvisionConfig extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * @Attribute FunctionName: The function name
     */
    readonly attrFunctionName: any;
    /**
     * @Attribute Qualifier: The service alias
     */
    readonly attrQualifier: any;
    /**
     * @Attribute Resource: The resource
     */
    readonly attrResource: any;
    /**
     * @Attribute ServiceName: The service name
     */
    readonly attrServiceName: any;
    /**
     * @Attribute Target: Number of provision
     */
    readonly attrTarget: any;
    /**
     * Create a new `ALIYUN::FC::ProvisionConfig`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ProvisionConfigProps, enableResourcePropertyConstraint?: boolean);
}
