import * as ros from '@alicloud/ros-cdk-core';
import { RosAggregator } from './config.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosAggregator as AggregatorProperty };

/**
 * Properties for defining a `Aggregator`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-config-aggregator
 */
export interface AggregatorProps {

    /**
     * Property aggregatorName: The name of aggregator.
     */
    readonly aggregatorName: string | ros.IResolvable;

    /**
     * Property description: The description of aggregator.
     */
    readonly description: string | ros.IResolvable;

    /**
     * Property aggregatorAccounts: The member account in aggregator.When the AggregatorType is RD, this parameter can be empty, which means that all accounts in the resource directory will be added to the global account group.When the AggregatorType is FOLDER, this parameter can be empty,which means that all accounts in the resource folder will be added to the global account group.
     */
    readonly aggregatorAccounts?: Array<RosAggregator.AggregatorAccountsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property aggregatorType: Account group type. Value:
     * RD: Global account group.
     * CUSTOM: Custom account group (default value).
     * FOLDER: Folder account group. Must set FolderId if the AggregatorType is FOLDER. Please refer to ListAccounts for accessing FolderId.
     */
    readonly aggregatorType?: string | ros.IResolvable;

    /**
     * Property folderId: The folder ID.
     */
    readonly folderId?: string | ros.IResolvable;
}

/**
 * Represents a `Aggregator`.
 */
export interface IAggregator extends ros.IResource {
    readonly props: AggregatorProps;

    /**
     * Attribute AggregatorId: The ID of the aggregator.
     */
    readonly attrAggregatorId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::Config::Aggregator`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAggregator`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-config-aggregator
 */
export class Aggregator extends ros.Resource implements IAggregator {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: AggregatorProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute AggregatorId: The ID of the aggregator.
     */
    public readonly attrAggregatorId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AggregatorProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosAggregator = new RosAggregator(this, id,  {
            aggregatorName: props.aggregatorName,
            description: props.description,
            aggregatorAccounts: props.aggregatorAccounts,
            folderId: props.folderId,
            aggregatorType: props.aggregatorType,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosAggregator;
        this.attrAggregatorId = rosAggregator.attrAggregatorId;
    }
}
