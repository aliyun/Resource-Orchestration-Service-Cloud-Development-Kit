import * as ros from '@alicloud/ros-cdk-core';
import { RosGateway } from './mse.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosGateway as GatewayProperty };

/**
 * Properties for defining a `Gateway`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-gateway
 */
export interface GatewayProps {

    /**
     * Property replica: Gateway Node Number
     */
    readonly replica: number | ros.IResolvable;

    /**
     * Property spec: Gateway Node Specifications
     */
    readonly spec: string | ros.IResolvable;

    /**
     * Property vpcId: VpcId
     */
    readonly vpcId: string | ros.IResolvable;

    /**
     * Property vSwitchId: VSwitchId
     */
    readonly vSwitchId: string | ros.IResolvable;

    /**
     * Property backupVSwitchId: VSwitchId For Backup
     */
    readonly backupVSwitchId?: string | ros.IResolvable;

    /**
     * Property enterpriseSecurityGroup:
     */
    readonly enterpriseSecurityGroup?: string | ros.IResolvable;

    /**
     * Property internetSlbSpec:
     */
    readonly internetSlbSpec?: string | ros.IResolvable;

    /**
     * Property name:
     */
    readonly name?: string | ros.IResolvable;

    /**
     * Property slbSpec:
     */
    readonly slbSpec?: string | ros.IResolvable;
}

/**
 * Represents a `Gateway`.
 */
export interface IGateway extends ros.IResource {
    readonly props: GatewayProps;

    /**
     * Attribute BackupVSwitchId: VSwitchId For Backup
     */
    readonly attrBackupVSwitchId: ros.IResolvable | string;

    /**
     * Attribute GatewayUniqueId: Gateway unique identification
     */
    readonly attrGatewayUniqueId: ros.IResolvable | string;

    /**
     * Attribute PaymentType: The payment type of the resource
     */
    readonly attrPaymentType: ros.IResolvable | string;

    /**
     * Attribute Replica: Gateway Node Number
     */
    readonly attrReplica: ros.IResolvable | string;

    /**
     * Attribute Spec: Gateway Node Specifications
     */
    readonly attrSpec: ros.IResolvable | string;

    /**
     * Attribute VSwitchId: VSwitchId
     */
    readonly attrVSwitchId: ros.IResolvable | string;

    /**
     * Attribute VpcId: VpcId
     */
    readonly attrVpcId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::MSE::Gateway`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosGateway`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-gateway
 */
export class Gateway extends ros.Resource implements IGateway {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: GatewayProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute BackupVSwitchId: VSwitchId For Backup
     */
    public readonly attrBackupVSwitchId: ros.IResolvable | string;

    /**
     * Attribute GatewayUniqueId: Gateway unique identification
     */
    public readonly attrGatewayUniqueId: ros.IResolvable | string;

    /**
     * Attribute PaymentType: The payment type of the resource
     */
    public readonly attrPaymentType: ros.IResolvable | string;

    /**
     * Attribute Replica: Gateway Node Number
     */
    public readonly attrReplica: ros.IResolvable | string;

    /**
     * Attribute Spec: Gateway Node Specifications
     */
    public readonly attrSpec: ros.IResolvable | string;

    /**
     * Attribute VSwitchId: VSwitchId
     */
    public readonly attrVSwitchId: ros.IResolvable | string;

    /**
     * Attribute VpcId: VpcId
     */
    public readonly attrVpcId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: GatewayProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosGateway = new RosGateway(this, id,  {
            backupVSwitchId: props.backupVSwitchId,
            enterpriseSecurityGroup: props.enterpriseSecurityGroup,
            vpcId: props.vpcId,
            vSwitchId: props.vSwitchId,
            slbSpec: props.slbSpec,
            spec: props.spec,
            internetSlbSpec: props.internetSlbSpec,
            replica: props.replica,
            name: props.name,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosGateway;
        this.attrBackupVSwitchId = rosGateway.attrBackupVSwitchId;
        this.attrGatewayUniqueId = rosGateway.attrGatewayUniqueId;
        this.attrPaymentType = rosGateway.attrPaymentType;
        this.attrReplica = rosGateway.attrReplica;
        this.attrSpec = rosGateway.attrSpec;
        this.attrVSwitchId = rosGateway.attrVSwitchId;
        this.attrVpcId = rosGateway.attrVpcId;
    }
}
