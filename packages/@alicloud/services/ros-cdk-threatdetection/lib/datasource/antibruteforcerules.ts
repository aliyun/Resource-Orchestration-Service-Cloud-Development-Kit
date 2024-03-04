import * as ros from '@alicloud/ros-cdk-core';
import { RosAntiBruteForceRules } from './threatdetection.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosAntiBruteForceRules as AntiBruteForceRulesProperty };

/**
 * Properties for defining a `AntiBruteForceRules`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-threatdetection-antibruteforcerules
 */
export interface AntiBruteForceRulesProps {
}

/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ThreatDetection::AntiBruteForceRules`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAntiBruteForceRules`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-threatdetection-antibruteforcerules
 */
export class AntiBruteForceRules extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: AntiBruteForceRulesProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute AntiBruteForceRuleIds: The list of anti brute force rule IDs.
     */
    public readonly attrAntiBruteForceRuleIds: ros.IResolvable;

    /**
     * Attribute AntiBruteForceRules: The list of anti brute force rules.
     */
    public readonly attrAntiBruteForceRules: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AntiBruteForceRulesProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosAntiBruteForceRules = new RosAntiBruteForceRules(this, id,  {
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        props;
        this.resource = rosAntiBruteForceRules;
        this.attrAntiBruteForceRuleIds = rosAntiBruteForceRules.attrAntiBruteForceRuleIds;
        this.attrAntiBruteForceRules = rosAntiBruteForceRules.attrAntiBruteForceRules;
    }
}
