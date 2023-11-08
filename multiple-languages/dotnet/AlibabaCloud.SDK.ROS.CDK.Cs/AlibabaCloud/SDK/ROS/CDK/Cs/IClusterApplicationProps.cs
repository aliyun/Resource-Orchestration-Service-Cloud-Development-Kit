using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cs
{
    /// <summary>Properties for defining a `ALIYUN::CS::ClusterApplication`.</summary>
    [JsiiInterface(nativeType: typeof(IClusterApplicationProps), fullyQualifiedName: "@alicloud/ros-cdk-cs.ClusterApplicationProps")]
    public interface IClusterApplicationProps
    {
        /// <summary>Property clusterId: The ID of the kubernetes cluster.</summary>
        [JsiiProperty(name: "clusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ClusterId
        {
            get;
        }

        /// <summary>Property yamlContent: The yaml content of application.</summary>
        [JsiiProperty(name: "yamlContent", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object YamlContent
        {
            get;
        }

        /// <summary>Property defaultNamespace: The default namespace for the application, default value is default.</summary>
        /// <remarks>
        /// If a namespace is defined in yaml metadata, its priority is higher than DefaultNamespace.
        /// If the DefaultNamespace does not exist, ROS will automatically create it and delete it during the deletion phase.
        /// </remarks>
        [JsiiProperty(name: "defaultNamespace", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DefaultNamespace
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

        /// <summary>Properties for defining a `ALIYUN::CS::ClusterApplication`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IClusterApplicationProps), fullyQualifiedName: "@alicloud/ros-cdk-cs.ClusterApplicationProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cs.IClusterApplicationProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property clusterId: The ID of the kubernetes cluster.</summary>
            [JsiiProperty(name: "clusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ClusterId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property yamlContent: The yaml content of application.</summary>
            [JsiiProperty(name: "yamlContent", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object YamlContent
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property defaultNamespace: The default namespace for the application, default value is default.</summary>
            /// <remarks>
            /// If a namespace is defined in yaml metadata, its priority is higher than DefaultNamespace.
            /// If the DefaultNamespace does not exist, ROS will automatically create it and delete it during the deletion phase.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "defaultNamespace", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DefaultNamespace
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
        }
    }
}
