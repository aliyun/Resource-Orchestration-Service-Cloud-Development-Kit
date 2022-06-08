import * as ros from '@alicloud/ros-cdk-core';
import { RosGateway } from './mse.generated';
export { RosGateway as GatewayProperty };
/**
 * Properties for defining a `ALIYUN::MSE::Gateway`
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
 * A ROS resource type:  `ALIYUN::MSE::Gateway`
 */
export declare class Gateway extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute BackupVSwitchId: VSwitchId For Backup
     */
    readonly attrBackupVSwitchId: ros.IResolvable;
    /**
     * Attribute GatewayUniqueId: Gateway unique identification
     */
    readonly attrGatewayUniqueId: ros.IResolvable;
    /**
     * Attribute PaymentType: The payment type of the resource
     */
    readonly attrPaymentType: ros.IResolvable;
    /**
     * Attribute Replica: Gateway Node Number
     */
    readonly attrReplica: ros.IResolvable;
    /**
     * Attribute Spec: Gateway Node Specifications
     */
    readonly attrSpec: ros.IResolvable;
    /**
     * Attribute VSwitchId: VSwitchId
     */
    readonly attrVSwitchId: ros.IResolvable;
    /**
     * Attribute VpcId: VpcId
     */
    readonly attrVpcId: ros.IResolvable;
    /**
     * Create a new `ALIYUN::MSE::Gateway`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: GatewayProps, enableResourcePropertyConstraint?: boolean);
}
//# sourceMappingURL=gateway.d.ts.map