import * as ros from '@alicloud/ros-cdk-core';
import { RosConcurrencyConfig } from './fc3.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosConcurrencyConfig as ConcurrencyConfigProperty };

/**
 * Properties for defining a `ConcurrencyConfig`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc3-concurrencyconfig
 */
export interface ConcurrencyConfigProps {

    /**
     * Property functionName: Function name.
     */
    readonly functionName: string | ros.IResolvable;

    /**
     * Property reservedConcurrency: To RESERVE concurrency, FUNCTIONS RESERVE a portion OF ACCOUNT concurrency that cannot be used by other functions. Reserved concurrency includes the total concurrency of reserved instances and instances by volume.
     */
    readonly reservedConcurrency: number | ros.IResolvable;
}

/**
 * Represents a `ConcurrencyConfig`.
 */
export interface IConcurrencyConfig extends ros.IResource {
    readonly props: ConcurrencyConfigProps;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::FC3::ConcurrencyConfig`, which is used to configure reserved concurrency for a function in Function Compute 3.0.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosConcurrencyConfig`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc3-concurrencyconfig
 */
export class ConcurrencyConfig extends ros.Resource implements IConcurrencyConfig {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: ConcurrencyConfigProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ConcurrencyConfigProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosConcurrencyConfig = new RosConcurrencyConfig(this, id,  {
            functionName: props.functionName,
            reservedConcurrency: props.reservedConcurrency,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosConcurrencyConfig;
    }
}
