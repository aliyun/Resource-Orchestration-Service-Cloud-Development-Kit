using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    /// <summary>Properties for defining a `RosDeploymentSet`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-deploymentset
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosDeploymentSetProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.RosDeploymentSetProps")]
    public interface IRosDeploymentSetProps
    {
        /// <remarks>
        /// <strong>Property</strong>: deploymentSetName: The name of the deployment set. It must be 2 to 128 characters in length. It must
        /// start with a letter and cannot start with http:\/\/ or https:\/\/. It can contain letters,
        /// digits, colons (:), underscores (_), and hyphens (-).
        /// </remarks>
        [JsiiProperty(name: "deploymentSetName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DeploymentSetName
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: description: The description of the deployment set. It must be 2 to 256 characters in length. It
        /// cannot start with http:\/\/ or https:\/\/.
        /// </remarks>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: groupCount: Set the number of groups for the deployment set group high availability policy. Value range: 1~7.
        /// Default value: 3.
        /// This parameter only takes effect when Strategy=AvailabilityGroup.
        /// </remarks>
        [JsiiProperty(name: "groupCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? GroupCount
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: onUnableToRedeployFailedInstance: The emergency solution to redeploy failed instances in the deployment set. Valid values:
        /// CancelMembershipAndStart: restarts the instances immediately after they are shut down
        /// and migrated to other deployment sets. This is the default value.
        /// KeepStopped: keeps the instances shut down and restarts them after the deployment
        /// set is replenished.
        /// </remarks>
        [JsiiProperty(name: "onUnableToRedeployFailedInstance", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? OnUnableToRedeployFailedInstance
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: strategy: Deployment strategy. Ranges:
        /// Availability: High availability strategy.
        /// AvailabilityGroup: Deployment group high availability strategy.
        /// LowLatency: Network low latency strategy.
        /// </remarks>
        [JsiiProperty(name: "strategy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Strategy
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosDeploymentSet`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-deploymentset
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosDeploymentSetProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.RosDeploymentSetProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.IRosDeploymentSetProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: deploymentSetName: The name of the deployment set. It must be 2 to 128 characters in length. It must
            /// start with a letter and cannot start with http:\/\/ or https:\/\/. It can contain letters,
            /// digits, colons (:), underscores (_), and hyphens (-).
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "deploymentSetName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DeploymentSetName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: description: The description of the deployment set. It must be 2 to 256 characters in length. It
            /// cannot start with http:\/\/ or https:\/\/.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: groupCount: Set the number of groups for the deployment set group high availability policy. Value range: 1~7.
            /// Default value: 3.
            /// This parameter only takes effect when Strategy=AvailabilityGroup.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "groupCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? GroupCount
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: onUnableToRedeployFailedInstance: The emergency solution to redeploy failed instances in the deployment set. Valid values:
            /// CancelMembershipAndStart: restarts the instances immediately after they are shut down
            /// and migrated to other deployment sets. This is the default value.
            /// KeepStopped: keeps the instances shut down and restarts them after the deployment
            /// set is replenished.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "onUnableToRedeployFailedInstance", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? OnUnableToRedeployFailedInstance
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: strategy: Deployment strategy. Ranges:
            /// Availability: High availability strategy.
            /// AvailabilityGroup: Deployment group high availability strategy.
            /// LowLatency: Network low latency strategy.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "strategy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Strategy
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
