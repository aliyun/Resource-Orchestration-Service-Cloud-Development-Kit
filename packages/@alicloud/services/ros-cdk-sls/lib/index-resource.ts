import * as ros from '@alicloud/ros-cdk-core';
import { RosIndex } from './sls.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosIndex as IndexProperty };

/**
 * Properties for defining a `Index`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-index
 */
export interface IndexProps {

    /**
     * Property fullTextIndex: Full-text indexing configuration.
     * Full-text indexing and key indexing must have at least one enabled.
     */
    readonly fullTextIndex: RosIndex.FullTextIndexProperty | ros.IResolvable;

    /**
     * Property logstoreName: Logstore name:
     * 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
     * 2. Must start and end with lowercase letters and numbers.
     * 3. The name length is 3-63 characters.
     */
    readonly logstoreName: string | ros.IResolvable;

    /**
     * Property projectName: Project name:
     * 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
     * 2. Must start and end with lowercase letters and numbers.
     * 3. The name length is 3-63 characters.
     */
    readonly projectName: string | ros.IResolvable;

    /**
     * Property keyIndices: Key index configurations.
     * Full-text indexing and key indexing must have at least one enabled.
     */
    readonly keyIndices?: Array<RosIndex.KeyIndicesProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property logReduce: Whether to enable log reduce. Default to false.
     */
    readonly logReduce?: boolean | ros.IResolvable;
}

/**
 * Represents a `Index`.
 */
export interface IIndex extends ros.IResource {
    readonly props: IndexProps;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::SLS::Index`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosIndex`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-index
 */
export class Index extends ros.Resource implements IIndex {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: IndexProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: IndexProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosIndex = new RosIndex(this, id,  {
            logstoreName: props.logstoreName,
            projectName: props.projectName,
            keyIndices: props.keyIndices,
            fullTextIndex: props.fullTextIndex,
            logReduce: props.logReduce === undefined || props.logReduce === null ? false : props.logReduce,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosIndex;
    }
}
