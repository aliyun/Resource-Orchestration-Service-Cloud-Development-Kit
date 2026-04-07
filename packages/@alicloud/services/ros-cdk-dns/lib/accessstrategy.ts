import * as ros from '@alicloud/ros-cdk-core';
import { RosAccessStrategy } from './dns.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosAccessStrategy as AccessStrategyProperty };

/**
 * Properties for defining a `AccessStrategy`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-accessstrategy
 */
export interface AccessStrategyProps {

    /**
     * Property defaultAddrPool: The default address pool of the access strategy.
     */
    readonly defaultAddrPool: Array<RosAccessStrategy.DefaultAddrPoolProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property defaultAddrPoolType: The type of the default address pool.
     */
    readonly defaultAddrPoolType: string | ros.IResolvable;

    /**
     * Property defaultMinAvailableAddrNum: The minimum available address number of the default address pool.
     */
    readonly defaultMinAvailableAddrNum: number | ros.IResolvable;

    /**
     * Property instanceId: The ID of the Dns instance.
     */
    readonly instanceId: string | ros.IResolvable;

    /**
     * Property strategyMode: The mode of the access strategy.
     */
    readonly strategyMode: string | ros.IResolvable;

    /**
     * Property strategyName: The name of the access strategy.
     */
    readonly strategyName: string | ros.IResolvable;

    /**
     * Property accessMode: The access mode of the access strategy.
     */
    readonly accessMode?: string | ros.IResolvable;

    /**
     * Property defaultLatencyOptimization: Whether to enable latency optimization for the default address pool.
     */
    readonly defaultLatencyOptimization?: string | ros.IResolvable;

    /**
     * Property defaultLbaStrategy: The load balancing strategy of the default address pool.
     */
    readonly defaultLbaStrategy?: string | ros.IResolvable;

    /**
     * Property defaultMaxReturnAddrNum: The maximum return address number of the default address pool.
     */
    readonly defaultMaxReturnAddrNum?: number | ros.IResolvable;

    /**
     * Property failoverAddrPool: The failover address pool of the access strategy.
     */
    readonly failoverAddrPool?: Array<RosAccessStrategy.FailoverAddrPoolProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property failoverAddrPoolType: The type of the failover address pool.
     */
    readonly failoverAddrPoolType?: string | ros.IResolvable;

    /**
     * Property failoverLatencyOptimization: Whether to enable latency optimization for the failover address pool.
     */
    readonly failoverLatencyOptimization?: string | ros.IResolvable;

    /**
     * Property failoverLbaStrategy: The load balancing strategy of the failover address pool.
     */
    readonly failoverLbaStrategy?: string | ros.IResolvable;

    /**
     * Property failoverMaxReturnAddrNum: The maximum return address number of the failover address pool.
     */
    readonly failoverMaxReturnAddrNum?: number | ros.IResolvable;

    /**
     * Property failoverMinAvailableAddrNum: The minimum available address number of the failover address pool.
     */
    readonly failoverMinAvailableAddrNum?: number | ros.IResolvable;

    /**
     * Property lines: The lines of the access strategy.
     */
    readonly lines?: Array<string | ros.IResolvable> | ros.IResolvable;
}

/**
 * Represents a `AccessStrategy`.
 */
export interface IAccessStrategy extends ros.IResource {
    readonly props: AccessStrategyProps;

    /**
     * Attribute StrategyId: The ID of the access strategy.
     */
    readonly attrStrategyId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::DNS::AccessStrategy`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAccessStrategy`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-accessstrategy
 */
export class AccessStrategy extends ros.Resource implements IAccessStrategy {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: AccessStrategyProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute StrategyId: The ID of the access strategy.
     */
    public readonly attrStrategyId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AccessStrategyProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosAccessStrategy = new RosAccessStrategy(this, id,  {
            failoverMinAvailableAddrNum: props.failoverMinAvailableAddrNum,
            defaultAddrPoolType: props.defaultAddrPoolType,
            failoverAddrPoolType: props.failoverAddrPoolType,
            instanceId: props.instanceId,
            defaultLatencyOptimization: props.defaultLatencyOptimization,
            failoverAddrPool: props.failoverAddrPool,
            defaultMinAvailableAddrNum: props.defaultMinAvailableAddrNum,
            failoverLatencyOptimization: props.failoverLatencyOptimization,
            defaultAddrPool: props.defaultAddrPool,
            strategyName: props.strategyName,
            failoverLbaStrategy: props.failoverLbaStrategy,
            failoverMaxReturnAddrNum: props.failoverMaxReturnAddrNum,
            defaultMaxReturnAddrNum: props.defaultMaxReturnAddrNum,
            accessMode: props.accessMode,
            strategyMode: props.strategyMode,
            defaultLbaStrategy: props.defaultLbaStrategy,
            lines: props.lines,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosAccessStrategy;
        this.attrStrategyId = rosAccessStrategy.attrStrategyId;
    }
}
