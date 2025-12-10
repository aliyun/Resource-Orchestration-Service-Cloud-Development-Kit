using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cs
{
    /// <summary>Properties for defining a `ClusterApplication`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cs-clusterapplication
    /// </remarks>
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

        /// <summary>Property creationMode: Creation modes include: - Normal: create new resources, will report error if already exists.</summary>
        /// <remarks>
        /// <list type="bullet">
        /// <description>Apply: similar to kubectl apply, create if not exists, update if exists. During the deletion phase, ROS will delete newly created application, but updated existing application will not be deleted.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "creationMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CreationMode
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property defaultNamespace: The default namespace for the application, default value is default.</summary>
        /// <remarks>
        /// If a namespace is defined in yaml metadata, its priority is higher than DefaultNamespace.
        /// If the DefaultNamespace does not exist, ROS will create it automatically and keep it by default during the delete phase.
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

        /// <summary>Property defaultNamespaceDeletion: Whether to delete the namespace specified by DefaultNamespace.</summary>
        /// <remarks>
        /// If DefaultNamespace is in ('default', 'kube-node-lease', 'kube-public', 'kube-system', 'arms-prom'), no matter whether DefaultNamespaceDeletion is true or not, it will not be deleted.
        /// </remarks>
        [JsiiProperty(name: "defaultNamespaceDeletion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DefaultNamespaceDeletion
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

        /// <summary>Property stage: At what stage to run.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>All: all stages, including create, update, and delete.</description>
        /// <description>Delete: the delete stage. This means that only in the deletion stage of this resource will apply yaml to the cluster.
        /// The default is All.</description>
        /// </list>
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

        /// <summary>Property validationMode: Validation modes include: - Basic: basic validation, such as verifying the existence of a cluster.</summary>
        /// <remarks>
        /// <list type="bullet">
        /// <description>Strict: in addition to basic validation, also validate the legality of YamlContent and WaitUntil.</description>
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
        [JsiiProperty(name: "waitUntil", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cs.RosClusterApplication.WaitUntilProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? WaitUntil
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ClusterApplication`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cs-clusterapplication
        /// </remarks>
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

            /// <summary>Property creationMode: Creation modes include: - Normal: create new resources, will report error if already exists.</summary>
            /// <remarks>
            /// <list type="bullet">
            /// <description>Apply: similar to kubectl apply, create if not exists, update if exists. During the deletion phase, ROS will delete newly created application, but updated existing application will not be deleted.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "creationMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CreationMode
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property defaultNamespace: The default namespace for the application, default value is default.</summary>
            /// <remarks>
            /// If a namespace is defined in yaml metadata, its priority is higher than DefaultNamespace.
            /// If the DefaultNamespace does not exist, ROS will create it automatically and keep it by default during the delete phase.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "defaultNamespace", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DefaultNamespace
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property defaultNamespaceDeletion: Whether to delete the namespace specified by DefaultNamespace.</summary>
            /// <remarks>
            /// If DefaultNamespace is in ('default', 'kube-node-lease', 'kube-public', 'kube-system', 'arms-prom'), no matter whether DefaultNamespaceDeletion is true or not, it will not be deleted.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "defaultNamespaceDeletion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DefaultNamespaceDeletion
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

            /// <summary>Property stage: At what stage to run.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>All: all stages, including create, update, and delete.</description>
            /// <description>Delete: the delete stage. This means that only in the deletion stage of this resource will apply yaml to the cluster.
            /// The default is All.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "stage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Stage
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property validationMode: Validation modes include: - Basic: basic validation, such as verifying the existence of a cluster.</summary>
            /// <remarks>
            /// <list type="bullet">
            /// <description>Strict: in addition to basic validation, also validate the legality of YamlContent and WaitUntil.</description>
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
            [JsiiProperty(name: "waitUntil", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cs.RosClusterApplication.WaitUntilProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? WaitUntil
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
