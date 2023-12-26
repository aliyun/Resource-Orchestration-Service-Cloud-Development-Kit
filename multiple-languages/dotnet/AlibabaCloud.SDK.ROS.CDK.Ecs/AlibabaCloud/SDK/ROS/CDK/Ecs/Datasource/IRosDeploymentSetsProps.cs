using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource
{
    /// <summary>Properties for defining a `RosDeploymentSets`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-deploymentsets
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosDeploymentSetsProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.RosDeploymentSetsProps")]
    public interface IRosDeploymentSetsProps
    {
        /// <remarks>
        /// <strong>Property</strong>: deploymentSetIds: he IDs of deployment sets. The value can be a JSON array that consists of up to 100 deployment set IDs in the format of ["ds-xxxxxxxxx", "ds-yyyyyyyyy", … "ds-zzzzzzzzz"]. Separate multiple deployment set IDs with commas (,).
        /// </remarks>
        [JsiiProperty(name: "deploymentSetIds", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DeploymentSetIds
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: deploymentSetName: The name of the deployment set.
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
        /// <strong>Property</strong>: domain: The deployment domain.
        /// </remarks>
        [JsiiProperty(name: "domain", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Domain
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: strategy: The deployment strategy. Valid values:
        /// Availability: high availability strategy.
        /// AvailabilityGroup: high availability group strategy.
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

        /// <summary>Properties for defining a `RosDeploymentSets`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-deploymentsets
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosDeploymentSetsProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.RosDeploymentSetsProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.IRosDeploymentSetsProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: deploymentSetIds: he IDs of deployment sets. The value can be a JSON array that consists of up to 100 deployment set IDs in the format of ["ds-xxxxxxxxx", "ds-yyyyyyyyy", … "ds-zzzzzzzzz"]. Separate multiple deployment set IDs with commas (,).
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "deploymentSetIds", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DeploymentSetIds
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: deploymentSetName: The name of the deployment set.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "deploymentSetName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DeploymentSetName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: domain: The deployment domain.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "domain", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Domain
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: strategy: The deployment strategy. Valid values:
            /// Availability: high availability strategy.
            /// AvailabilityGroup: high availability group strategy.
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
