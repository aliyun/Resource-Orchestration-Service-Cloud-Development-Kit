using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ehpc.Datasource
{
    /// <summary>Properties for defining a `DATASOURCE::EHPC::Nodes`.</summary>
    [JsiiInterface(nativeType: typeof(INodesProps), fullyQualifiedName: "@alicloud/ros-cdk-ehpc.datasource.NodesProps")]
    public interface INodesProps
    {
        /// <summary>Property clusterId: The ID of the cluster.</summary>
        [JsiiProperty(name: "clusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ClusterId
        {
            get;
        }

        /// <summary>Property hostName: The name of the node.</summary>
        /// <remarks>
        /// You can perform a fuzzy search. MySQL regular expressions are supported.
        /// </remarks>
        [JsiiProperty(name: "hostName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? HostName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property hostNamePrefix: The prefix of the hostname.</summary>
        /// <remarks>
        /// You can query nodes that have a specified prefix.
        /// </remarks>
        [JsiiProperty(name: "hostNamePrefix", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? HostNamePrefix
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property hostNameSuffix: The suffix of the hostname.</summary>
        /// <remarks>
        /// You can query nodes that have a specified suffix.
        /// </remarks>
        [JsiiProperty(name: "hostNameSuffix", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? HostNameSuffix
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property privateIpAddress: The private IP address of the node.</summary>
        [JsiiProperty(name: "privateIpAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PrivateIpAddress
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property role: The type of the node.</summary>
        /// <remarks>
        /// Valid values:
        /// Manager: management node
        /// Login: logon node
        /// Compute: compute node
        /// </remarks>
        [JsiiProperty(name: "role", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Role
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `DATASOURCE::EHPC::Nodes`.</summary>
        [JsiiTypeProxy(nativeType: typeof(INodesProps), fullyQualifiedName: "@alicloud/ros-cdk-ehpc.datasource.NodesProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ehpc.Datasource.INodesProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property clusterId: The ID of the cluster.</summary>
            [JsiiProperty(name: "clusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ClusterId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property hostName: The name of the node.</summary>
            /// <remarks>
            /// You can perform a fuzzy search. MySQL regular expressions are supported.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "hostName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? HostName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property hostNamePrefix: The prefix of the hostname.</summary>
            /// <remarks>
            /// You can query nodes that have a specified prefix.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "hostNamePrefix", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? HostNamePrefix
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property hostNameSuffix: The suffix of the hostname.</summary>
            /// <remarks>
            /// You can query nodes that have a specified suffix.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "hostNameSuffix", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? HostNameSuffix
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property privateIpAddress: The private IP address of the node.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "privateIpAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PrivateIpAddress
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property role: The type of the node.</summary>
            /// <remarks>
            /// Valid values:
            /// Manager: management node
            /// Login: logon node
            /// Compute: compute node
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "role", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Role
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
