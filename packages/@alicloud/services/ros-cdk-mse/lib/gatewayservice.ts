import * as ros from '@alicloud/ros-cdk-core';
import { RosGatewayService } from './mse.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosGatewayService as GatewayServiceProperty };

/**
 * Properties for defining a `GatewayService`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-gatewayservice
 */
export interface GatewayServiceProps {

    /**
     * Property gatewayUniqueId: Unique identifier of the gateway.
     */
    readonly gatewayUniqueId: string | ros.IResolvable;

    /**
     * Property name: Name of the service.
     */
    readonly name: string | ros.IResolvable;

    /**
     * Property sourceType: Type of service source. Valid values:
     * - MSE: MSE-NACOS
     * - K8s: ACK container service
     * - VIP: Fixed address
     * - DNS: DNS domain name
     * - FC: Function Compute
     * - EDAS: EDAS
     * - MSE_ZK: MSE-Zookeeper
     * - SAE: SAE
     *
     */
    readonly sourceType: string | ros.IResolvable;

    /**
     * Property dnsServerList: List of DNS servers.
     */
    readonly dnsServerList?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property fcAlias: Function Compute service alias. Used when SourceType is FC.
     */
    readonly fcAlias?: string | ros.IResolvable;

    /**
     * Property fcServiceName: Function Compute service name. Required when SourceType is FC.
     */
    readonly fcServiceName?: string | ros.IResolvable;

    /**
     * Property fcVersion: Function Compute service version. Used when SourceType is FC.
     */
    readonly fcVersion?: string | ros.IResolvable;

    /**
     * Property groupName: Group name of the service.
     */
    readonly groupName?: string | ros.IResolvable;

    /**
     * Property ips: List of IPs.
     */
    readonly ips?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property namespace: Namespace of the service.
     */
    readonly namespace?: string | ros.IResolvable;

    /**
     * Property saeAppId: SAE application ID.
     */
    readonly saeAppId?: string | ros.IResolvable;

    /**
     * Property servicePort: Port of the service.
     */
    readonly servicePort?: number | ros.IResolvable;

    /**
     * Property serviceProtocol: Protocol of the service.
     */
    readonly serviceProtocol?: string | ros.IResolvable;

    /**
     * Property sourceId: Source ID of the service. Used when specifying a source to add services.
     */
    readonly sourceId?: number | ros.IResolvable;

    /**
     * Property tlsSetting: TLS settings for the service.
     */
    readonly tlsSetting?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;
}

/**
 * Represents a `GatewayService`.
 */
export interface IGatewayService extends ros.IResource {
    readonly props: GatewayServiceProps;

    /**
     * Attribute Name: The name of the service.
     */
    readonly attrName: ros.IResolvable | string;

    /**
     * Attribute ServiceId: The ID of the gateway service.
     */
    readonly attrServiceId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::MSE::GatewayService`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosGatewayService`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-gatewayservice
 */
export class GatewayService extends ros.Resource implements IGatewayService {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: GatewayServiceProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute Name: The name of the service.
     */
    public readonly attrName: ros.IResolvable | string;

    /**
     * Attribute ServiceId: The ID of the gateway service.
     */
    public readonly attrServiceId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: GatewayServiceProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosGatewayService = new RosGatewayService(this, id,  {
            groupName: props.groupName,
            servicePort: props.servicePort,
            fcVersion: props.fcVersion,
            tlsSetting: props.tlsSetting,
            saeAppId: props.saeAppId,
            sourceId: props.sourceId,
            sourceType: props.sourceType,
            ips: props.ips,
            namespace: props.namespace,
            name: props.name,
            gatewayUniqueId: props.gatewayUniqueId,
            fcAlias: props.fcAlias,
            serviceProtocol: props.serviceProtocol,
            dnsServerList: props.dnsServerList,
            fcServiceName: props.fcServiceName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosGatewayService;
        this.attrName = rosGatewayService.attrName;
        this.attrServiceId = rosGatewayService.attrServiceId;
    }
}
