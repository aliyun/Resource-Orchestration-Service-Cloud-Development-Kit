import * as ros from '@alicloud/ros-cdk-core';
import { RosCrossAccount } from './hbr.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosCrossAccount as CrossAccountProperty };

/**
 * Properties for defining a `CrossAccount`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-crossaccount
 */
export interface CrossAccountProps {

    /**
     * Property alias: The alias of the cross-account authorization.
     */
    readonly alias?: string | ros.IResolvable;

    /**
     * Property crossAccountRoleName: The name of the RAM role that is used to grant permissions to the authorized account.
     */
    readonly crossAccountRoleName?: string | ros.IResolvable;

    /**
     * Property crossAccountType: The type of the cross-account authorization. Valid values: CROSS_ACCOUNT, CROSS_ACCOUNT_BY_RD.
     */
    readonly crossAccountType?: string | ros.IResolvable;

    /**
     * Property crossAccountUserId: The user ID of the account that you want to authorize to back up data in your account.
     */
    readonly crossAccountUserId?: number | ros.IResolvable;
}

/**
 * Represents a `CrossAccount`.
 */
export interface ICrossAccount extends ros.IResource {
    readonly props: CrossAccountProps;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::HBR::CrossAccount`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosCrossAccount`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-crossaccount
 */
export class CrossAccount extends ros.Resource implements ICrossAccount {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: CrossAccountProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: CrossAccountProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosCrossAccount = new RosCrossAccount(this, id,  {
            crossAccountUserId: props.crossAccountUserId,
            crossAccountRoleName: props.crossAccountRoleName,
            alias: props.alias,
            crossAccountType: props.crossAccountType,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosCrossAccount;
    }
}
