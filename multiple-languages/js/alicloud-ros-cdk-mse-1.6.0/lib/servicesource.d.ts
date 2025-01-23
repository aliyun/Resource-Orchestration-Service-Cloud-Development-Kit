import * as ros from '@alicloud/ros-cdk-core';
import { RosServiceSource } from './mse.generated';
export { RosServiceSource as ServiceSourceProperty };
/**
 * Properties for defining a `ServiceSource`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-servicesource
 */
export interface ServiceSourceProps {
    /**
     * Property gatewayUniqueId: The unique ID of the gateway.
     */
    readonly gatewayUniqueId: string | ros.IResolvable;
    /**
     * Property name: The name.
     * If Source=K8S, this parameter specifies the name of the ACK cluster.
     * If Source=MSE, this parameter specifies the ID of the Nacos instance.
     * If Source=MSE_ZK, this parameter specifies the ID of the ZooKeeper instance.
     * If Source=EDAS, this parameter specifies the ID of the EDAS namespace.
     * If Source=SAE, this parameter specifies the ID of the SAE namespace.
     */
    readonly name: string | ros.IResolvable;
    /**
     * Property source: The service source. Valid values:
     * K8S: ACK cluster
     * MSE: MSE Nacos instance
     */
    readonly source: string | ros.IResolvable;
    /**
     * Property address: Registration Address. If not specified, it will be automatically generated based on the selected instance.
     */
    readonly address?: string | ros.IResolvable;
    /**
     * Property groupList: The list of service groups. This is required when Source=EDAS.
     */
    readonly groupList?: Array<any | ros.IResolvable> | ros.IResolvable;
    /**
     * Property ingressOptions: The Ingress configuration.
     */
    readonly ingressOptions?: RosServiceSource.IngressOptionsProperty | ros.IResolvable;
    /**
     * Property pathList: An array of service root paths.
     */
    readonly pathList?: Array<any | ros.IResolvable> | ros.IResolvable;
}
/**
 * Represents a `ServiceSource`.
 */
export interface IServiceSource extends ros.IResource {
    readonly props: ServiceSourceProps;
    /**
     * Attribute Address: Registration Address. If not specified, it will be automatically generated based on the selected instance.
     */
    readonly attrAddress: ros.IResolvable | string;
    /**
     * Attribute GatewayUniqueId: The unique ID of the gateway.
     */
    readonly attrGatewayUniqueId: ros.IResolvable | string;
    /**
     * Attribute Id: The ID of service source.
     */
    readonly attrId: ros.IResolvable | string;
    /**
     * Attribute Name: The name.
If Type is set to K8S, this parameter specifies the name of the ACK cluster.
If Type is set to NACOS, this parameter specifies the ID of the Nacos instance.
     */
    readonly attrName: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::MSE::ServiceSource`, which is used to create a Nacos service source.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosServiceSource`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-servicesource
 */
export declare class ServiceSource extends ros.Resource implements IServiceSource {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: ServiceSourceProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute Address: Registration Address. If not specified, it will be automatically generated based on the selected instance.
     */
    readonly attrAddress: ros.IResolvable | string;
    /**
     * Attribute GatewayUniqueId: The unique ID of the gateway.
     */
    readonly attrGatewayUniqueId: ros.IResolvable | string;
    /**
     * Attribute Id: The ID of service source.
     */
    readonly attrId: ros.IResolvable | string;
    /**
     * Attribute Name: The name.
If Type is set to K8S, this parameter specifies the name of the ACK cluster.
If Type is set to NACOS, this parameter specifies the ID of the Nacos instance.
     */
    readonly attrName: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ServiceSourceProps, enableResourcePropertyConstraint?: boolean);
}
