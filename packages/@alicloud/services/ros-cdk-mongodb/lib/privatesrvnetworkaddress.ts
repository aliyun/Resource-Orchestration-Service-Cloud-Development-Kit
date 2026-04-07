import * as ros from '@alicloud/ros-cdk-core';
import { RosPrivateSrvNetworkAddress } from './mongodb.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosPrivateSrvNetworkAddress as PrivateSrvNetworkAddressProperty };

/**
 * Properties for defining a `PrivateSrvNetworkAddress`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mongodb-privatesrvnetworkaddress
 */
export interface PrivateSrvNetworkAddressProps {

    /**
     * Property dbInstanceId: The instance ID.
     */
    readonly dbInstanceId: string | ros.IResolvable;
}

/**
 * Represents a `PrivateSrvNetworkAddress`.
 */
export interface IPrivateSrvNetworkAddress extends ros.IResource {
    readonly props: PrivateSrvNetworkAddressProps;

    /**
     * Attribute PrivateSrvConnectionStringUri: Private network SRV highly available connection address.
     */
    readonly attrPrivateSrvConnectionStringUri: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::MONGODB::PrivateSrvNetworkAddress`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosPrivateSrvNetworkAddress`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mongodb-privatesrvnetworkaddress
 */
export class PrivateSrvNetworkAddress extends ros.Resource implements IPrivateSrvNetworkAddress {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: PrivateSrvNetworkAddressProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute PrivateSrvConnectionStringUri: Private network SRV highly available connection address.
     */
    public readonly attrPrivateSrvConnectionStringUri: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: PrivateSrvNetworkAddressProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosPrivateSrvNetworkAddress = new RosPrivateSrvNetworkAddress(this, id,  {
            dbInstanceId: props.dbInstanceId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosPrivateSrvNetworkAddress;
        this.attrPrivateSrvConnectionStringUri = rosPrivateSrvNetworkAddress.attrPrivateSrvConnectionStringUri;
    }
}
