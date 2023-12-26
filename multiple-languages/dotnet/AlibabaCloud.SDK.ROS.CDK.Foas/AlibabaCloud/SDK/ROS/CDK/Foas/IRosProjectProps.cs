using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Foas
{
    /// <summary>Properties for defining a `RosProject`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-foas-project
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosProjectProps), fullyQualifiedName: "@alicloud/ros-cdk-foas.RosProjectProps")]
    public interface IRosProjectProps
    {
        /// <remarks>
        /// <strong>Property</strong>: deployType: Cluster type:
        /// Exclusive cluster: cell
        /// Shared cluster: public
        /// </remarks>
        [JsiiProperty(name: "deployType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DeployType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: managerIds: Comma delimited account Id list of managers.
        /// </remarks>
        [JsiiProperty(name: "managerIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ManagerIds
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: name: Project name. It begins with a letter, and contains only lowercase English letters, numbers, underscores (_), and is limited to 3-64 characters.
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Name
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: clusterId: Cluster ID.
        /// </remarks>
        [JsiiProperty(name: "clusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ClusterId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: description: Project description.
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
        /// <strong>Property</strong>: orderId: Order Id of Shared cluster.
        /// </remarks>
        [JsiiProperty(name: "orderId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? OrderId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosProject`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-foas-project
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosProjectProps), fullyQualifiedName: "@alicloud/ros-cdk-foas.RosProjectProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Foas.IRosProjectProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: deployType: Cluster type:
            /// Exclusive cluster: cell
            /// Shared cluster: public
            /// </remarks>
            [JsiiProperty(name: "deployType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DeployType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: managerIds: Comma delimited account Id list of managers.
            /// </remarks>
            [JsiiProperty(name: "managerIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ManagerIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: name: Project name. It begins with a letter, and contains only lowercase English letters, numbers, underscores (_), and is limited to 3-64 characters.
            /// </remarks>
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Name
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: clusterId: Cluster ID.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "clusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ClusterId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: description: Project description.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: orderId: Order Id of Shared cluster.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "orderId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? OrderId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
