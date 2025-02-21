import * as ros from '@alicloud/ros-cdk-core';
import { RosService } from './apig.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosService as ServiceProperty };

/**
 * Properties for defining a `Service`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-service
 */
export interface ServiceProps {

    /**
     * Property addresses: Service Address List.
     */
    readonly addresses: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property gatewayId: The ID of the Cloud Native API Gateway.
     */
    readonly gatewayId: string | ros.IResolvable;

    /**
     * Property serviceName: The name of the service.
     */
    readonly serviceName: string | ros.IResolvable;

    /**
     * Property sourceType: The type of the service source.
     */
    readonly sourceType: string | ros.IResolvable;
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
     * Attribute GatewayId: The ID of the Cloud Native API Gateway.
     */
    readonly attrGatewayId: ros.IResolvable | string;

    /**
     * Attribute ServiceId: The ID of the service.
     */
    readonly attrServiceId: ros.IResolvable | string;

    /**
     * Attribute ServiceName: The Name of the service .
     */
    readonly attrServiceName: ros.IResolvable | string;

    /**
     * Attribute SourceType: Service source type.
     */
    readonly attrSourceType: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::APIG::Service`, which is used to create a service.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosService`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-service
 */
export class Service extends ros.Resource implements IService {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: ServiceProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute Addresses: Service Address List.
     */
    public readonly attrAddresses: ros.IResolvable | string;

    /**
     * Attribute GatewayId: The ID of the Cloud Native API Gateway.
     */
    public readonly attrGatewayId: ros.IResolvable | string;

    /**
     * Attribute ServiceId: The ID of the service.
     */
    public readonly attrServiceId: ros.IResolvable | string;

    /**
     * Attribute ServiceName: The Name of the service .
     */
    public readonly attrServiceName: ros.IResolvable | string;

    /**
     * Attribute SourceType: Service source type.
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
            addresses: props.addresses,
            serviceName: props.serviceName,
            sourceType: props.sourceType,
            gatewayId: props.gatewayId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosService;
        this.attrAddresses = rosService.attrAddresses;
        this.attrGatewayId = rosService.attrGatewayId;
        this.attrServiceId = rosService.attrServiceId;
        this.attrServiceName = rosService.attrServiceName;
        this.attrSourceType = rosService.attrSourceType;
    }
}
