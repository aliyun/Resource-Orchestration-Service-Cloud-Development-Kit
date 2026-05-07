import * as ros from '@alicloud/ros-cdk-core';
import { RosDataSourceSharedRule } from './dataworks.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosDataSourceSharedRule as DataSourceSharedRuleProperty };

/**
 * Properties for defining a `DataSourceSharedRule`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dataworks-datasourcesharedrule
 */
export interface DataSourceSharedRuleProps {

    /**
     * Property dataSourceId: The ID of the data source, that is, the unique identifier of the data source.
     */
    readonly dataSourceId: number | ros.IResolvable;

    /**
     * Property envType: The environment type of the data source shared to the target project, such as Dev (Development Environment) and Prod (production environment).
     */
    readonly envType: string | ros.IResolvable;

    /**
     * Property targetProjectId: The ID of the project to which the data source is shared.
     */
    readonly targetProjectId: number | ros.IResolvable;

    /**
     * Property sharedUser: The target user of the data source permission policy, which is null to share to the project.
     */
    readonly sharedUser?: string | ros.IResolvable;
}

/**
 * Represents a `DataSourceSharedRule`.
 */
export interface IDataSourceSharedRule extends ros.IResource {
    readonly props: DataSourceSharedRuleProps;

    /**
     * Attribute CreateTime: The creation time of the data source sharing rule.
     */
    readonly attrCreateTime: ros.IResolvable | string;

    /**
     * Attribute CreateUser: Creator of the data source permission policy.
     */
    readonly attrCreateUser: ros.IResolvable | string;

    /**
     * Attribute DataSourceId: The ID of the data source, that is, the unique identifier of the data source.
     */
    readonly attrDataSourceId: ros.IResolvable | string;

    /**
     * Attribute DataSourceSharedRuleId: The data source sharing rule ID, that is, the unique identifier of the data source sharing rule.
     */
    readonly attrDataSourceSharedRuleId: ros.IResolvable | string;

    /**
     * Attribute EnvType: The environment type of the data source shared to the target project, such as Dev (Development Environment) and Prod (production environment).
     */
    readonly attrEnvType: ros.IResolvable | string;

    /**
     * Attribute SharedDataSourceName: The name of the data source shared to the target space. Consists of the name of the source space and the name of the data source, separated by dots.
     */
    readonly attrSharedDataSourceName: ros.IResolvable | string;

    /**
     * Attribute SharedUser: The target user of the data source permission policy, which is null to share to the project.
     */
    readonly attrSharedUser: ros.IResolvable | string;

    /**
     * Attribute SourceProjectId: The ID of the project to which the data source is originally created.
     */
    readonly attrSourceProjectId: ros.IResolvable | string;

    /**
     * Attribute TargetProjectId: The ID of the project to which the data source is shared.
     */
    readonly attrTargetProjectId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::DataWorks::DataSourceSharedRule`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDataSourceSharedRule`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dataworks-datasourcesharedrule
 */
export class DataSourceSharedRule extends ros.Resource implements IDataSourceSharedRule {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: DataSourceSharedRuleProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute CreateTime: The creation time of the data source sharing rule.
     */
    public readonly attrCreateTime: ros.IResolvable | string;

    /**
     * Attribute CreateUser: Creator of the data source permission policy.
     */
    public readonly attrCreateUser: ros.IResolvable | string;

    /**
     * Attribute DataSourceId: The ID of the data source, that is, the unique identifier of the data source.
     */
    public readonly attrDataSourceId: ros.IResolvable | string;

    /**
     * Attribute DataSourceSharedRuleId: The data source sharing rule ID, that is, the unique identifier of the data source sharing rule.
     */
    public readonly attrDataSourceSharedRuleId: ros.IResolvable | string;

    /**
     * Attribute EnvType: The environment type of the data source shared to the target project, such as Dev (Development Environment) and Prod (production environment).
     */
    public readonly attrEnvType: ros.IResolvable | string;

    /**
     * Attribute SharedDataSourceName: The name of the data source shared to the target space. Consists of the name of the source space and the name of the data source, separated by dots.
     */
    public readonly attrSharedDataSourceName: ros.IResolvable | string;

    /**
     * Attribute SharedUser: The target user of the data source permission policy, which is null to share to the project.
     */
    public readonly attrSharedUser: ros.IResolvable | string;

    /**
     * Attribute SourceProjectId: The ID of the project to which the data source is originally created.
     */
    public readonly attrSourceProjectId: ros.IResolvable | string;

    /**
     * Attribute TargetProjectId: The ID of the project to which the data source is shared.
     */
    public readonly attrTargetProjectId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DataSourceSharedRuleProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosDataSourceSharedRule = new RosDataSourceSharedRule(this, id,  {
            sharedUser: props.sharedUser,
            targetProjectId: props.targetProjectId,
            envType: props.envType,
            dataSourceId: props.dataSourceId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDataSourceSharedRule;
        this.attrCreateTime = rosDataSourceSharedRule.attrCreateTime;
        this.attrCreateUser = rosDataSourceSharedRule.attrCreateUser;
        this.attrDataSourceId = rosDataSourceSharedRule.attrDataSourceId;
        this.attrDataSourceSharedRuleId = rosDataSourceSharedRule.attrDataSourceSharedRuleId;
        this.attrEnvType = rosDataSourceSharedRule.attrEnvType;
        this.attrSharedDataSourceName = rosDataSourceSharedRule.attrSharedDataSourceName;
        this.attrSharedUser = rosDataSourceSharedRule.attrSharedUser;
        this.attrSourceProjectId = rosDataSourceSharedRule.attrSourceProjectId;
        this.attrTargetProjectId = rosDataSourceSharedRule.attrTargetProjectId;
    }
}
