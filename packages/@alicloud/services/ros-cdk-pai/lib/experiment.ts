import * as ros from '@alicloud/ros-cdk-core';
import { RosExperiment } from './pai.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosExperiment as ExperimentProperty };

/**
 * Properties for defining a `Experiment`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-experiment
 */
export interface ExperimentProps {

    /**
     * Property artifactUri: ArtifactUri is default OSS storage path of the output of trials in the experiment.
     */
    readonly artifactUri: string | ros.IResolvable;

    /**
     * Property experimentName: Name is the name of the experiment, unique in a namespace.
     */
    readonly experimentName: string | ros.IResolvable;

    /**
     * Property workspaceId: WorkspaceId is the workspace id which contains the experiment.
     */
    readonly workspaceId: string | ros.IResolvable;

    /**
     * Property accessibility: Experimental Visibility.
     */
    readonly accessibility?: string | ros.IResolvable;
}

/**
 * Represents a `Experiment`.
 */
export interface IExperiment extends ros.IResource {
    readonly props: ExperimentProps;

    /**
     * Attribute Accessibility: Experimental Visibility.
     */
    readonly attrAccessibility: ros.IResolvable | string;

    /**
     * Attribute ArtifactUri: ArtifactUri is default OSS storage path of the output of trials in the experiment.
     */
    readonly attrArtifactUri: ros.IResolvable | string;

    /**
     * Attribute CreateTime: GmtCreateTime is time when this entity is created.
     */
    readonly attrCreateTime: ros.IResolvable | string;

    /**
     * Attribute ExperimentId: ExperimentId is globally unique identifier of the experiment.
     */
    readonly attrExperimentId: ros.IResolvable | string;

    /**
     * Attribute ExperimentName: Name is the name of the experiment, unique in a namespace.
     */
    readonly attrExperimentName: ros.IResolvable | string;

    /**
     * Attribute GmtModifiedTime: GmtModifiedTime is time when this entity is modified.
     */
    readonly attrGmtModifiedTime: ros.IResolvable | string;

    /**
     * Attribute Labels: Labels are tags of the experiment.
     */
    readonly attrLabels: ros.IResolvable | string;

    /**
     * Attribute OwnerId: OwnerId is the user account id which this entity belongs to.
     */
    readonly attrOwnerId: ros.IResolvable | string;

    /**
     * Attribute TensorboardLogUri: TensorboardLogUri is the default OSS storage path of tensorboard log of trials in the experiment.
     */
    readonly attrTensorboardLogUri: ros.IResolvable | string;

    /**
     * Attribute UserId: UserId is the user account id which created this entity.
     */
    readonly attrUserId: ros.IResolvable | string;

    /**
     * Attribute WorkspaceId: WorkspaceId is the workspace id which contains the experiment.
     */
    readonly attrWorkspaceId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::PAI::Experiment`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosExperiment`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-experiment
 */
export class Experiment extends ros.Resource implements IExperiment {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: ExperimentProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute Accessibility: Experimental Visibility.
     */
    public readonly attrAccessibility: ros.IResolvable | string;

    /**
     * Attribute ArtifactUri: ArtifactUri is default OSS storage path of the output of trials in the experiment.
     */
    public readonly attrArtifactUri: ros.IResolvable | string;

    /**
     * Attribute CreateTime: GmtCreateTime is time when this entity is created.
     */
    public readonly attrCreateTime: ros.IResolvable | string;

    /**
     * Attribute ExperimentId: ExperimentId is globally unique identifier of the experiment.
     */
    public readonly attrExperimentId: ros.IResolvable | string;

    /**
     * Attribute ExperimentName: Name is the name of the experiment, unique in a namespace.
     */
    public readonly attrExperimentName: ros.IResolvable | string;

    /**
     * Attribute GmtModifiedTime: GmtModifiedTime is time when this entity is modified.
     */
    public readonly attrGmtModifiedTime: ros.IResolvable | string;

    /**
     * Attribute Labels: Labels are tags of the experiment.
     */
    public readonly attrLabels: ros.IResolvable | string;

    /**
     * Attribute OwnerId: OwnerId is the user account id which this entity belongs to.
     */
    public readonly attrOwnerId: ros.IResolvable | string;

    /**
     * Attribute TensorboardLogUri: TensorboardLogUri is the default OSS storage path of tensorboard log of trials in the experiment.
     */
    public readonly attrTensorboardLogUri: ros.IResolvable | string;

    /**
     * Attribute UserId: UserId is the user account id which created this entity.
     */
    public readonly attrUserId: ros.IResolvable | string;

    /**
     * Attribute WorkspaceId: WorkspaceId is the workspace id which contains the experiment.
     */
    public readonly attrWorkspaceId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ExperimentProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosExperiment = new RosExperiment(this, id,  {
            accessibility: props.accessibility,
            artifactUri: props.artifactUri,
            experimentName: props.experimentName,
            workspaceId: props.workspaceId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosExperiment;
        this.attrAccessibility = rosExperiment.attrAccessibility;
        this.attrArtifactUri = rosExperiment.attrArtifactUri;
        this.attrCreateTime = rosExperiment.attrCreateTime;
        this.attrExperimentId = rosExperiment.attrExperimentId;
        this.attrExperimentName = rosExperiment.attrExperimentName;
        this.attrGmtModifiedTime = rosExperiment.attrGmtModifiedTime;
        this.attrLabels = rosExperiment.attrLabels;
        this.attrOwnerId = rosExperiment.attrOwnerId;
        this.attrTensorboardLogUri = rosExperiment.attrTensorboardLogUri;
        this.attrUserId = rosExperiment.attrUserId;
        this.attrWorkspaceId = rosExperiment.attrWorkspaceId;
    }
}
