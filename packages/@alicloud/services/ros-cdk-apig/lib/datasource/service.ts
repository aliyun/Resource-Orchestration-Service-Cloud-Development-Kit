import * as ros from '@alicloud/ros-cdk-core';
import { RosService } from './apig.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosService as ServiceProperty };

/**
 * Properties for defining a `Service`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apig-service
 */
export interface ServiceProps {

    /**
     * Property serviceId: The ID of the service.
     */
    readonly serviceId: string | ros.IResolvable;

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Represents a `Service`.
 */
export interface IService extends ros.IResource {
    readonly props: ServiceProps;

    /**
     * Attribute Addresses: A list of domain names or fixed addresses.
     */
    readonly attrAddresses: ros.IResolvable | string;

    /**
     * Attribute AiServiceConfig: AI service configuration when sourceType equals AI.
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
     * Attribute ServiceName: The name of the Service, need to fill in manually when sourceType is VIP/DNS/AI.
     */
    readonly attrServiceName: ros.IResolvable | string;

    /**
     * Attribute SourceType: The type of the service source, optional value is K8S/MSE_NACOS/FC3/SAE_K8S_SERVICE/VIP/DNS/AI.
     */
    readonly attrSourceType: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::APIG::Service`, which is used to query the information about a service.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosService`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apig-service
 */
export class Service extends ros.Resource implements IService {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: ServiceProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute Addresses: A list of domain names or fixed addresses.
     */
    public readonly attrAddresses: ros.IResolvable | string;

    /**
     * Attribute AiServiceConfig: AI service configuration when sourceType equals AI.
     */
    public readonly attrAiServiceConfig: ros.IResolvable | string;

    /**
     * Attribute GatewayId: The ID of the Cloud Native API Gateway.
     */
    public readonly attrGatewayId: ros.IResolvable | string;

    /**
     * Attribute GroupName: The service group name.
     */
    public readonly attrGroupName: ros.IResolvable | string;

    /**
     * Attribute Namespace: The namespace of the service:.
     */
    public readonly attrNamespace: ros.IResolvable | string;

    /**
     * Attribute Qualifier: The function version or alias.
     */
    public readonly attrQualifier: ros.IResolvable | string;

    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    public readonly attrResourceGroupId: ros.IResolvable | string;

    /**
     * Attribute ServiceId: The ID of the service.
     */
    public readonly attrServiceId: ros.IResolvable | string;

    /**
     * Attribute ServiceName: The name of the Service, need to fill in manually when sourceType is VIP/DNS/AI.
     */
    public readonly attrServiceName: ros.IResolvable | string;

    /**
     * Attribute SourceType: The type of the service source, optional value is K8S/MSE_NACOS/FC3/SAE_K8S_SERVICE/VIP/DNS/AI.
     */
    public readonly attrSourceType: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ServiceProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosService = new RosService(this, id,  {
            serviceId: props.serviceId,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosService;
        this.attrAddresses = rosService.attrAddresses;
        this.attrAiServiceConfig = rosService.attrAiServiceConfig;
        this.attrGatewayId = rosService.attrGatewayId;
        this.attrGroupName = rosService.attrGroupName;
        this.attrNamespace = rosService.attrNamespace;
        this.attrQualifier = rosService.attrQualifier;
        this.attrResourceGroupId = rosService.attrResourceGroupId;
        this.attrServiceId = rosService.attrServiceId;
        this.attrServiceName = rosService.attrServiceName;
        this.attrSourceType = rosService.attrSourceType;
    }
}
