import * as ros from '@alicloud/ros-cdk-core';
import { RosIngress } from './sae.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosIngress as IngressProperty };

/**
 * Properties for defining a `Ingress`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sae-ingress
 */
export interface IngressProps {

    /**
     * Property defaultRule: The default forwarding rule. You can specify a port and an application in the default forwarding rule to forward traffic based on the IP address of the application.
     */
    readonly defaultRule: RosIngress.DefaultRuleProperty | ros.IResolvable;

    /**
     * Property description: The name of the routing rule.
     */
    readonly description: string | ros.IResolvable;

    /**
     * Property listenerPort: The listener port of the SLB instance. You must specify a vacant port.
     */
    readonly listenerPort: number | ros.IResolvable;

    /**
     * Property namespaceId: The ID of the namespace to which the application belongs. You can specify only one namespace ID each time you call this operation.
     */
    readonly namespaceId: string | ros.IResolvable;

    /**
     * Property rules: The forwarding rules. You can specify a port and an application in a forwarding rule to forward traffic based on the specified domain name and request path.
     */
    readonly rules: Array<RosIngress.RulesProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property slbId: The Server Load Balancer (SLB) instance that is used by the routing rule.
     */
    readonly slbId: string | ros.IResolvable;

    /**
     * Property certId: The ID of the certificate that is associated with the Classic Load Balancer (CLB) instance.
     * If LoadBalanceType is set to clb, specify this parameter to configure a certificate for the HTTP listener.
     */
    readonly certId?: string | ros.IResolvable;

    /**
     * Property certIds: The IDs of the certificates that are associated with the Application Load Balancer (ALB) instance.
     */
    readonly certIds?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property listenerProtocol: The protocol that is used to forward requests.
     */
    readonly listenerProtocol?: string | ros.IResolvable;

    /**
     * Property loadBalanceType: The type of the SLB instance based on the processing capabilities. The instance type can be specified only when you create a routing rule. You cannot change the instance type when you update the routing rule.
     */
    readonly loadBalanceType?: string | ros.IResolvable;
}

/**
 * Represents a `Ingress`.
 */
export interface IIngress extends ros.IResource {
    readonly props: IngressProps;

    /**
     * Attribute IngressId: The ID of the routing rule.
     */
    readonly attrIngressId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::SAE::Ingress`, which is used to create a routing rule.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosIngress`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sae-ingress
 */
export class Ingress extends ros.Resource implements IIngress {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: IngressProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute IngressId: The ID of the routing rule.
     */
    public readonly attrIngressId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: IngressProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosIngress = new RosIngress(this, id,  {
            defaultRule: props.defaultRule,
            slbId: props.slbId,
            listenerPort: props.listenerPort,
            description: props.description,
            certIds: props.certIds,
            certId: props.certId,
            loadBalanceType: props.loadBalanceType,
            namespaceId: props.namespaceId,
            listenerProtocol: props.listenerProtocol,
            rules: props.rules,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosIngress;
        this.attrIngressId = rosIngress.attrIngressId;
    }
}
