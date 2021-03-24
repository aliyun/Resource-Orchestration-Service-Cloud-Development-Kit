using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Foas
{
    /// <summary>Properties for defining a `ALIYUN::FOAS::Project`.</summary>
    [JsiiInterface(nativeType: typeof(IProjectProps), fullyQualifiedName: "@alicloud/ros-cdk-foas.ProjectProps")]
    public interface IProjectProps
    {
        /// <summary>Property deployType: Cluster type: Exclusive cluster: cell Shared cluster: public.</summary>
        [JsiiProperty(name: "deployType", typeJson: "{\"primitive\":\"string\"}")]
        string DeployType
        {
            get;
        }

        /// <summary>Property managerIds: Comma delimited account Id list of managers.</summary>
        [JsiiProperty(name: "managerIds", typeJson: "{\"primitive\":\"string\"}")]
        string ManagerIds
        {
            get;
        }

        /// <summary>Property name: Project name.</summary>
        /// <remarks>
        /// It begins with a letter, and contains only lowercase English letters, numbers, underscores (_), and is limited to 3-64 characters.
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}")]
        string Name
        {
            get;
        }

        /// <summary>Property clusterId: Cluster ID.</summary>
        [JsiiProperty(name: "clusterId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? ClusterId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property description: Project description.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property orderId: Order Id of Shared cluster.</summary>
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
        [JsiiTypeProxy(nativeType: typeof(IProjectProps), fullyQualifiedName: "@alicloud/ros-cdk-foas.ProjectProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Foas.IProjectProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property deployType: Cluster type: Exclusive cluster: cell Shared cluster: public.</summary>
            [JsiiProperty(name: "deployType", typeJson: "{\"primitive\":\"string\"}")]
            public string DeployType
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property managerIds: Comma delimited account Id list of managers.</summary>
            [JsiiProperty(name: "managerIds", typeJson: "{\"primitive\":\"string\"}")]
            public string ManagerIds
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property name: Project name.</summary>
            /// <remarks>
            /// It begins with a letter, and contains only lowercase English letters, numbers, underscores (_), and is limited to 3-64 characters.
            /// </remarks>
            [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}")]
            public string Name
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property clusterId: Cluster ID.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "clusterId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? ClusterId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property description: Project description.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Description
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property orderId: Order Id of Shared cluster.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "orderId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? OrderId
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
