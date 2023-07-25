using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource
{
    /// <summary>Properties for defining a `DATASOURCE::ECS::DeploymentSets`.</summary>
    [JsiiInterface(nativeType: typeof(IDeploymentSetsProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.DeploymentSetsProps")]
    public interface IDeploymentSetsProps
    {
        /// <summary>Property deploymentSetIds: he IDs of deployment sets.</summary>
        /// <remarks>
        /// The value can be a JSON array that consists of up to 100 deployment set IDs in the format of ["ds-xxxxxxxxx", "ds-yyyyyyyyy", … "ds-zzzzzzzzz"]. Separate multiple deployment set IDs with commas (,).
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

        /// <summary>Property deploymentSetName: The name of the deployment set.</summary>
        [JsiiProperty(name: "deploymentSetName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DeploymentSetName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property domain: The deployment domain.</summary>
        [JsiiProperty(name: "domain", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Domain
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property strategy: The deployment strategy.</summary>
        /// <remarks>
        /// Valid values:
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

        /// <summary>Properties for defining a `DATASOURCE::ECS::DeploymentSets`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IDeploymentSetsProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.DeploymentSetsProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.IDeploymentSetsProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property deploymentSetIds: he IDs of deployment sets.</summary>
            /// <remarks>
            /// The value can be a JSON array that consists of up to 100 deployment set IDs in the format of ["ds-xxxxxxxxx", "ds-yyyyyyyyy", … "ds-zzzzzzzzz"]. Separate multiple deployment set IDs with commas (,).
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "deploymentSetIds", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DeploymentSetIds
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property deploymentSetName: The name of the deployment set.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "deploymentSetName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DeploymentSetName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property domain: The deployment domain.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "domain", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Domain
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property strategy: The deployment strategy.</summary>
            /// <remarks>
            /// Valid values:
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
