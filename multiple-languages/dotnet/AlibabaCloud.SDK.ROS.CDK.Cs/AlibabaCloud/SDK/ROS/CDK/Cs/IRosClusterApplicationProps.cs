using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cs
{
    /// <summary>Properties for defining a `RosClusterApplication`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cs-clusterapplication
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosClusterApplicationProps), fullyQualifiedName: "@alicloud/ros-cdk-cs.RosClusterApplicationProps")]
    public interface IRosClusterApplicationProps
    {
        /// <remarks>
        /// <strong>Property</strong>: clusterId: The ID of the kubernetes cluster.
        /// </remarks>
        [JsiiProperty(name: "clusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ClusterId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: yamlContent: The yaml content of application.
        /// </remarks>
        [JsiiProperty(name: "yamlContent", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object YamlContent
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: defaultNamespace: The default namespace for the application, default value is default.
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

        /// <remarks>
        /// <strong>Property</strong>: stage: At what stage to run. Valid values:
        /// - All: all stages, including create, update, and delete.
        /// - Delete: the delete stage. This means that only in the deletion stage of this resource will apply yaml to the cluster.
        /// The default is All.
        /// </remarks>
        [JsiiProperty(name: "stage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Stage
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosClusterApplication`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cs-clusterapplication
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosClusterApplicationProps), fullyQualifiedName: "@alicloud/ros-cdk-cs.RosClusterApplicationProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cs.IRosClusterApplicationProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
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
            /// <strong>Property</strong>: yamlContent: The yaml content of application.
            /// </remarks>
            [JsiiProperty(name: "yamlContent", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object YamlContent
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: defaultNamespace: The default namespace for the application, default value is default.
            /// If a namespace is defined in yaml metadata, its priority is higher than DefaultNamespace.
            /// If the DefaultNamespace does not exist, ROS will automatically create it and delete it during the deletion phase.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "defaultNamespace", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DefaultNamespace
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

            /// <remarks>
            /// <strong>Property</strong>: stage: At what stage to run. Valid values:
            /// - All: all stages, including create, update, and delete.
            /// - Delete: the delete stage. This means that only in the deletion stage of this resource will apply yaml to the cluster.
            /// The default is All.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "stage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Stage
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
