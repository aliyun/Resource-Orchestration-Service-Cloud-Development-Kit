using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cs
{
    /// <summary>Properties for defining a `ClusterHelmApplication`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cs-clusterhelmapplication
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IClusterHelmApplicationProps), fullyQualifiedName: "@alicloud/ros-cdk-cs.ClusterHelmApplicationProps")]
    public interface IClusterHelmApplicationProps
    {
        /// <summary>Property chartUrl: The URL of chart.</summary>
        /// <remarks>
        /// Supports HTTP or HTTPS.
        /// </remarks>
        [JsiiProperty(name: "chartUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ChartUrl
        {
            get;
        }

        /// <summary>Property clusterId: The ID of the kubernetes cluster.</summary>
        [JsiiProperty(name: "clusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ClusterId
        {
            get;
        }

        /// <summary>Property name: The name for helm release.</summary>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Name
        {
            get;
        }

        /// <summary>Property chartValues: Chart custom values.</summary>
        [JsiiProperty(name: "chartValues", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ChartValues
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property credential: The credential of ACR repo.</summary>
        /// <remarks>
        /// Only take effects when ChartUrl is the address of ACR repo.
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

        /// <summary>Property namespace: Namespace to use with helm.</summary>
        /// <remarks>
        /// Default is default.
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

        /// <summary>Property rolePolicy: Before deploying the application, check the policies associated with the roles of the current user.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>EnsureAdminRoleAndBinding: Automatically create a role named "ros:application-admin:${user-id}" with administrator permissions and bind it to the current user.</description>
        /// <description>None: Do nothing.
        /// The default value is EnsureAdminRoleAndBinding.</description>
        /// </list>
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

        /// <summary>Property validationMode: Validation modes include: - Basic: basic validation, such as verifying the existence of a cluster.</summary>
        /// <remarks>
        /// <list type="bullet">
        /// <description>Strict: in addition to basic validation, also validate the legality of WaitUntil.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "validationMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ValidationMode
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property waitUntil: After starting a creation or update, wait until all conditions are met.</summary>
        [JsiiProperty(name: "waitUntil", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cs.RosClusterHelmApplication.WaitUntilProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? WaitUntil
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ClusterHelmApplication`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cs-clusterhelmapplication
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IClusterHelmApplicationProps), fullyQualifiedName: "@alicloud/ros-cdk-cs.ClusterHelmApplicationProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cs.IClusterHelmApplicationProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property chartUrl: The URL of chart.</summary>
            /// <remarks>
            /// Supports HTTP or HTTPS.
            /// </remarks>
            [JsiiProperty(name: "chartUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ChartUrl
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property clusterId: The ID of the kubernetes cluster.</summary>
            [JsiiProperty(name: "clusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ClusterId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property name: The name for helm release.</summary>
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Name
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property chartValues: Chart custom values.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "chartValues", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? ChartValues
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property credential: The credential of ACR repo.</summary>
            /// <remarks>
            /// Only take effects when ChartUrl is the address of ACR repo.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "credential", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cs.RosClusterHelmApplication.CredentialProperty\"}]}}", isOptional: true)]
            public object? Credential
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property namespace: Namespace to use with helm.</summary>
            /// <remarks>
            /// Default is default.
            /// If the Namespace does not exist, ROS will automatically create it and delete it during the deletion phase.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "namespace", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Namespace
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property rolePolicy: Before deploying the application, check the policies associated with the roles of the current user.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>EnsureAdminRoleAndBinding: Automatically create a role named "ros:application-admin:${user-id}" with administrator permissions and bind it to the current user.</description>
            /// <description>None: Do nothing.
            /// The default value is EnsureAdminRoleAndBinding.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "rolePolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RolePolicy
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property validationMode: Validation modes include: - Basic: basic validation, such as verifying the existence of a cluster.</summary>
            /// <remarks>
            /// <list type="bullet">
            /// <description>Strict: in addition to basic validation, also validate the legality of WaitUntil.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "validationMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ValidationMode
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property waitUntil: After starting a creation or update, wait until all conditions are met.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "waitUntil", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cs.RosClusterHelmApplication.WaitUntilProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? WaitUntil
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
