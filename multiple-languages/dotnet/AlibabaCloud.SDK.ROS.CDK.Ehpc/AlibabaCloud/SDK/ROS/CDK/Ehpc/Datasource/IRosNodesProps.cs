using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ehpc.Datasource
{
    /// <summary>Properties for defining a `RosNodes`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ehpc-nodes
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosNodesProps), fullyQualifiedName: "@alicloud/ros-cdk-ehpc.datasource.RosNodesProps")]
    public interface IRosNodesProps
    {
        /// <remarks>
        /// <strong>Property</strong>: clusterId: The ID of the cluster.
        /// </remarks>
        [JsiiProperty(name: "clusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ClusterId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: hostName: The name of the node. You can perform a fuzzy search. MySQL regular expressions are supported.
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

        /// <remarks>
        /// <strong>Property</strong>: hostNamePrefix: The prefix of the hostname. You can query nodes that have a specified prefix.
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

        /// <remarks>
        /// <strong>Property</strong>: hostNameSuffix: The suffix of the hostname. You can query nodes that have a specified suffix.
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

        /// <remarks>
        /// <strong>Property</strong>: privateIpAddress: The private IP address of the node.
        /// </remarks>
        [JsiiProperty(name: "privateIpAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PrivateIpAddress
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: role: The type of the node. Valid values:
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

        /// <summary>Properties for defining a `RosNodes`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ehpc-nodes
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosNodesProps), fullyQualifiedName: "@alicloud/ros-cdk-ehpc.datasource.RosNodesProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ehpc.Datasource.IRosNodesProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: clusterId: The ID of the cluster.
            /// </remarks>
            [JsiiProperty(name: "clusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ClusterId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: hostName: The name of the node. You can perform a fuzzy search. MySQL regular expressions are supported.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "hostName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? HostName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: hostNamePrefix: The prefix of the hostname. You can query nodes that have a specified prefix.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "hostNamePrefix", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? HostNamePrefix
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: hostNameSuffix: The suffix of the hostname. You can query nodes that have a specified suffix.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "hostNameSuffix", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? HostNameSuffix
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: privateIpAddress: The private IP address of the node.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "privateIpAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PrivateIpAddress
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: role: The type of the node. Valid values:
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
