using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    /// <summary>Properties for defining a `ALIYUN::ECS::DeploymentSet`.</summary>
    [JsiiInterface(nativeType: typeof(IDeploymentSetProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.DeploymentSetProps")]
    public interface IDeploymentSetProps
    {
        /// <summary>Property deploymentSetName: The name of the deployment set.</summary>
        /// <remarks>
        /// It must be 2 to 128 characters in length. It must
        /// start with a letter and cannot start with http:// or https://. It can contain letters,
        /// digits, colons (:), underscores (_), and hyphens (-).
        /// </remarks>
        [JsiiProperty(name: "deploymentSetName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? DeploymentSetName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property description: The description of the deployment set.</summary>
        /// <remarks>
        /// It must be 2 to 256 characters in length. It
        /// cannot start with http:// or https://.
        /// </remarks>
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property onUnableToRedeployFailedInstance: The emergency solution to redeploy failed instances in the deployment set.</summary>
        /// <remarks>
        /// Valid values:
        /// CancelMembershipAndStart: restarts the instances immediately after they are shut down
        /// and migrated to other deployment sets. This is the default value.
        /// KeepStopped: keeps the instances shut down and restarts them after the deployment
        /// set is replenished.
        /// </remarks>
        [JsiiProperty(name: "onUnableToRedeployFailedInstance", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? OnUnableToRedeployFailedInstance
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::ECS::DeploymentSet`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IDeploymentSetProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.DeploymentSetProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.IDeploymentSetProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property deploymentSetName: The name of the deployment set.</summary>
            /// <remarks>
            /// It must be 2 to 128 characters in length. It must
            /// start with a letter and cannot start with http:// or https://. It can contain letters,
            /// digits, colons (:), underscores (_), and hyphens (-).
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "deploymentSetName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? DeploymentSetName
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property description: The description of the deployment set.</summary>
            /// <remarks>
            /// It must be 2 to 256 characters in length. It
            /// cannot start with http:// or https://.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Description
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property onUnableToRedeployFailedInstance: The emergency solution to redeploy failed instances in the deployment set.</summary>
            /// <remarks>
            /// Valid values:
            /// CancelMembershipAndStart: restarts the instances immediately after they are shut down
            /// and migrated to other deployment sets. This is the default value.
            /// KeepStopped: keeps the instances shut down and restarts them after the deployment
            /// set is replenished.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "onUnableToRedeployFailedInstance", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? OnUnableToRedeployFailedInstance
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
