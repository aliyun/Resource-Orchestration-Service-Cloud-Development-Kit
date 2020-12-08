import * as ros from '@alicloud/ros-cdk-core';
import { RosIndex } from './sls.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosIndex as IndexProperty };

/**
 * Properties for defining a `ALIYUN::SLS::Index`
 */
export interface IndexProps {

    /**
     * @Property fullTextIndex: Full-text indexing configuration.
     * Full-text indexing and key indexing must have at least one enabled.
     */
    readonly fullTextIndex: RosIndex.FullTextIndexProperty | ros.IResolvable;

    /**
     * @Property logstoreName: Logstore name:
     * 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
     * 2. Must start and end with lowercase letters and numbers.
     * 3. The name length is 3-63 characters.
     */
    readonly logstoreName: string;

    /**
     * @Property projectName: Project name:
     * 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
     * 2. Must start and end with lowercase letters and numbers.
     * 3. The name length is 3-63 characters.
     */
    readonly projectName: string;

    /**
     * @Property keyIndices: Key index configurations.
     * Full-text indexing and key indexing must have at least one enabled.
     */
    readonly keyIndices?: Array<RosIndex.KeyIndicesProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property logReduce: Whether to enable log reduce. Default to false.
     */
    readonly logReduce?: boolean | ros.IResolvable;
}

/**
 * A ROS resource type:  `ALIYUN::SLS::Index`
 */
export class Index extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Create a new `ALIYUN::SLS::Index`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: IndexProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosIndex = new RosIndex(this, id,  {
            logstoreName: props.logstoreName,
            projectName: props.projectName,
            keyIndices: props.keyIndices,
            fullTextIndex: props.fullTextIndex,
            logReduce: props.logReduce ? props.logReduce : false,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosIndex;
    }
}
