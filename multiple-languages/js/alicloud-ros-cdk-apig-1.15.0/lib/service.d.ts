import * as ros from '@alicloud/ros-cdk-core';
import { RosService } from './apig.generated';
export { RosService as ServiceProperty };
/**
 * Properties for defining a `Service`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-service
 */
export interface ServiceProps {
    /**
     * Property gatewayId: The ID of the Cloud Native API Gateway.
     */
    readonly gatewayId: string | ros.IResolvable;
    /**
     * Property addresses: Service Address List.
     */
    readonly addresses?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property aiServiceConfig: AI service configuration when SourceType equals AI.
     */
    readonly aiServiceConfig?: RosService.AiServiceConfigProperty | ros.IResolvable;
    /**
     * Property groupName: The service group name.
     * Required when SourceType is MSE_NACOS.
     */
    readonly groupName?: string | ros.IResolvable;
    /**
     * Property namespace: The namespace of the service:
     * - SourceType is K8S, indicating the namespace of the K8S service.
     * When-SourceType is set to MSE_NACOS, it indicates the namespace in Nacos.
     * When the SourceType is K8S and MSE_NACOS, it needs to be specified.
     */
    readonly namespace?: string | ros.IResolvable;
    /**
     * Property qualifier: The function version or alias.
     */
    readonly qualifier?: string | ros.IResolvable;
    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * Property serviceName: The name of the service, need to fill in manually when SourceType is VIP\/DNS\/AI.
     */
    readonly serviceName?: string | ros.IResolvable;
    /**
     * Property sourceType: The type of the service source, optional value is K8S\/MSE_NACOS\/FC3\/SAE_K8S_SERVICE\/VIP\/DNS\/AI.
     */
    readonly sourceType?: string | ros.IResolvable;
}
/**
 * Represents a `Service`.
 */
export interface IService extends ros.IResource {
    readonly props: ServiceProps;
    /**
     * Attribute Addresses: Service Address List.
     */
    readonly attrAddresses: ros.IResolvable | string;
    /**
     * Attribute AiServiceConfig: AI service configuration when SourceType equals AI.
     */
    readonly attrAiServiceConfig: ros.IResolvable | string;
    /**
     * Attribute GatewayId: The ID of the Cloud Native API Gateway.
     */
    readonly attrGatewayId: ros.IResolvable | string;
    /**
     * Attribute GroupName: The service group name.
     */
    readonly attrGroupName: ros.IResolvable | string;
    /**
     * Attribute Namespace: The namespace of the service:.
     */
    readonly attrNamespace: ros.IResolvable | string;
    /**
     * Attribute Qualifier: The function version or alias.
     */
    readonly attrQualifier: ros.IResolvable | string;
    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable | string;
    /**
     * Attribute ServiceId: The ID of the service.
     */
    readonly attrServiceId: ros.IResolvable | string;
    /**
     * Attribute ServiceName: Service Name, need to fill in manually when SourceType is VIP/DNS/AI.
     */
    readonly attrServiceName: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::APIG::Service`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosService`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-service
 */
export declare class Service extends ros.Resource implements IService {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: ServiceProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute Addresses: Service Address List.
     */
    readonly attrAddresses: ros.IResolvable | string;
    /**
     * Attribute AiServiceConfig: AI service configuration when SourceType equals AI.
     */
    readonly attrAiServiceConfig: ros.IResolvable | string;
    /**
     * Attribute GatewayId: The ID of the Cloud Native API Gateway.
     */
    readonly attrGatewayId: ros.IResolvable | string;
    /**
     * Attribute GroupName: The service group name.
     */
    readonly attrGroupName: ros.IResolvable | string;
    /**
     * Attribute Namespace: The namespace of the service:.
     */
    readonly attrNamespace: ros.IResolvable | string;
    /**
     * Attribute Qualifier: The function version or alias.
     */
    readonly attrQualifier: ros.IResolvable | string;
    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable | string;
    /**
     * Attribute ServiceId: The ID of the service.
     */
    readonly attrServiceId: ros.IResolvable | string;
    /**
     * Attribute ServiceName: Service Name, need to fill in manually when SourceType is VIP/DNS/AI.
     */
    readonly attrServiceName: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ServiceProps, enableResourcePropertyConstraint?: boolean);
}
