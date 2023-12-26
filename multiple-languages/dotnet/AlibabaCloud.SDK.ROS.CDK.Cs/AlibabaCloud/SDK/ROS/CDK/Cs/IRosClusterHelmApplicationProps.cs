using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cs
{
    /// <summary>Properties for defining a `RosClusterHelmApplication`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cs-clusterhelmapplication
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosClusterHelmApplicationProps), fullyQualifiedName: "@alicloud/ros-cdk-cs.RosClusterHelmApplicationProps")]
    public interface IRosClusterHelmApplicationProps
    {
        /// <remarks>
        /// <strong>Property</strong>: chartUrl: The URL of chart. Supports HTTP or HTTPS.
        /// </remarks>
        [JsiiProperty(name: "chartUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ChartUrl
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: clusterId: The ID of the kubernetes cluster.
        /// </remarks>
        [JsiiProperty(name: "clusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ClusterId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: name: The name for helm release.
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Name
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: chartValues: Chart custom values.
        /// </remarks>
        [JsiiProperty(name: "chartValues", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ChartValues
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: credential: The credential of ACR repo. Only take effects when ChartUrl is the address of ACR repo.
        /// </remarks>
        [JsiiProperty(name: "credential", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cs.RosClusterHelmApplication.CredentialProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Credential
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: namespace: Namespace to use with helm. Default is default.
        /// If the Namespace does not exist, ROS will automatically create it and delete it during the deletion phase.
        /// </remarks>
        [JsiiProperty(name: "namespace", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Namespace
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: rolePolicy: Before deploying the application, check the policies associated with the roles of the current user. Valid values:
        /// - EnsureAdminRoleAndBinding: Automatically create a role named "ros:application-admin:${user-id}" with administrator permissions and bind it to the current user.
        /// - None: Do nothing.
        /// The default value is EnsureAdminRoleAndBinding.
        /// </remarks>
        [JsiiProperty(name: "rolePolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RolePolicy
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosClusterHelmApplication`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cs-clusterhelmapplication
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosClusterHelmApplicationProps), fullyQualifiedName: "@alicloud/ros-cdk-cs.RosClusterHelmApplicationProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cs.IRosClusterHelmApplicationProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: chartUrl: The URL of chart. Supports HTTP or HTTPS.
            /// </remarks>
            [JsiiProperty(name: "chartUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ChartUrl
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: clusterId: The ID of the kubernetes cluster.
            /// </remarks>
            [JsiiProperty(name: "clusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ClusterId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: name: The name for helm release.
            /// </remarks>
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Name
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: chartValues: Chart custom values.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "chartValues", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? ChartValues
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: credential: The credential of ACR repo. Only take effects when ChartUrl is the address of ACR repo.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "credential", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cs.RosClusterHelmApplication.CredentialProperty\"}]}}", isOptional: true)]
            public object? Credential
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: namespace: Namespace to use with helm. Default is default.
            /// If the Namespace does not exist, ROS will automatically create it and delete it during the deletion phase.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "namespace", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Namespace
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: rolePolicy: Before deploying the application, check the policies associated with the roles of the current user. Valid values:
            /// - EnsureAdminRoleAndBinding: Automatically create a role named "ros:application-admin:${user-id}" with administrator permissions and bind it to the current user.
            /// - None: Do nothing.
            /// The default value is EnsureAdminRoleAndBinding.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "rolePolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RolePolicy
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
