using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Edas
{
    /// <summary>Properties for defining a `ALIYUN::EDAS::ClusterMember`.</summary>
    [JsiiInterface(nativeType: typeof(IRosClusterMemberProps), fullyQualifiedName: "@alicloud/ros-cdk-edas.RosClusterMemberProps")]
    public interface IRosClusterMemberProps
    {
        /// <remarks>
        /// <strong>Property</strong>: clusterId: Cluster ID to import ECS instance
        /// </remarks>
        [JsiiProperty(name: "clusterId", typeJson: "{\"primitive\":\"string\"}")]
        string ClusterId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceIds: ECS instance ID list to import.
        /// </remarks>
        [JsiiProperty(name: "instanceIds", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}")]
        string[] InstanceIds
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: password: Password ECS hosts need to import (ECS settings can continue to use purchased)
        /// </remarks>
        [JsiiProperty(name: "password", typeJson: "{\"primitive\":\"string\"}")]
        string Password
        {
            get;
        }

        /// <summary>Properties for defining a `ALIYUN::EDAS::ClusterMember`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosClusterMemberProps), fullyQualifiedName: "@alicloud/ros-cdk-edas.RosClusterMemberProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Edas.IRosClusterMemberProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: clusterId: Cluster ID to import ECS instance
            /// </remarks>
            [JsiiProperty(name: "clusterId", typeJson: "{\"primitive\":\"string\"}")]
            public string ClusterId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceIds: ECS instance ID list to import.
            /// </remarks>
            [JsiiProperty(name: "instanceIds", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}")]
            public string[] InstanceIds
            {
                get => GetInstanceProperty<string[]>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: password: Password ECS hosts need to import (ECS settings can continue to use purchased)
            /// </remarks>
            [JsiiProperty(name: "password", typeJson: "{\"primitive\":\"string\"}")]
            public string Password
            {
                get => GetInstanceProperty<string>()!;
            }
        }
    }
}
