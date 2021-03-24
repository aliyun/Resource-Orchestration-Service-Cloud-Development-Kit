using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Edas
{
    /// <summary>Properties for defining a `ALIYUN::EDAS::ClusterMember`.</summary>
    [JsiiInterface(nativeType: typeof(IClusterMemberProps), fullyQualifiedName: "@alicloud/ros-cdk-edas.ClusterMemberProps")]
    public interface IClusterMemberProps
    {
        /// <summary>Property clusterId: Cluster ID to import ECS instance.</summary>
        [JsiiProperty(name: "clusterId", typeJson: "{\"primitive\":\"string\"}")]
        string ClusterId
        {
            get;
        }

        /// <summary>Property instanceIds: ECS instance ID list to import.</summary>
        [JsiiProperty(name: "instanceIds", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}")]
        string[] InstanceIds
        {
            get;
        }

        /// <summary>Property password: Password ECS hosts need to import (ECS settings can continue to use purchased).</summary>
        [JsiiProperty(name: "password", typeJson: "{\"primitive\":\"string\"}")]
        string Password
        {
            get;
        }

        /// <summary>Properties for defining a `ALIYUN::EDAS::ClusterMember`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IClusterMemberProps), fullyQualifiedName: "@alicloud/ros-cdk-edas.ClusterMemberProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Edas.IClusterMemberProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property clusterId: Cluster ID to import ECS instance.</summary>
            [JsiiProperty(name: "clusterId", typeJson: "{\"primitive\":\"string\"}")]
            public string ClusterId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property instanceIds: ECS instance ID list to import.</summary>
            [JsiiProperty(name: "instanceIds", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}")]
            public string[] InstanceIds
            {
                get => GetInstanceProperty<string[]>()!;
            }

            /// <summary>Property password: Password ECS hosts need to import (ECS settings can continue to use purchased).</summary>
            [JsiiProperty(name: "password", typeJson: "{\"primitive\":\"string\"}")]
            public string Password
            {
                get => GetInstanceProperty<string>()!;
            }
        }
    }
}
