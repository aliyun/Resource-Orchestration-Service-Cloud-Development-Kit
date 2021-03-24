using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Foas
{
    /// <summary>Properties for defining a `ALIYUN::FOAS::Project`.</summary>
    [JsiiInterface(nativeType: typeof(IRosProjectProps), fullyQualifiedName: "@alicloud/ros-cdk-foas.RosProjectProps")]
    public interface IRosProjectProps
    {
        /// <remarks>
        /// <strong>Property</strong>: deployType: Cluster type:
        /// Exclusive cluster: cell
        /// Shared cluster: public
        /// </remarks>
        [JsiiProperty(name: "deployType", typeJson: "{\"primitive\":\"string\"}")]
        string DeployType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: managerIds: Comma delimited account Id list of managers.
        /// </remarks>
        [JsiiProperty(name: "managerIds", typeJson: "{\"primitive\":\"string\"}")]
        string ManagerIds
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: name: Project name. It begins with a letter, and contains only lowercase English letters, numbers, underscores (_), and is limited to 3-64 characters.
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}")]
        string Name
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: clusterId: Cluster ID.
        /// </remarks>
        [JsiiProperty(name: "clusterId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? ClusterId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: description: Project description.
        /// </remarks>
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Description
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: orderId: Order Id of Shared cluster.
        /// </remarks>
        [JsiiProperty(name: "orderId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? OrderId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::FOAS::Project`.</summary>
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
            [JsiiProperty(name: "deployType", typeJson: "{\"primitive\":\"string\"}")]
            public string DeployType
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: managerIds: Comma delimited account Id list of managers.
            /// </remarks>
            [JsiiProperty(name: "managerIds", typeJson: "{\"primitive\":\"string\"}")]
            public string ManagerIds
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: name: Project name. It begins with a letter, and contains only lowercase English letters, numbers, underscores (_), and is limited to 3-64 characters.
            /// </remarks>
            [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}")]
            public string Name
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: clusterId: Cluster ID.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "clusterId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? ClusterId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: description: Project description.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Description
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: orderId: Order Id of Shared cluster.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "orderId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? OrderId
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
