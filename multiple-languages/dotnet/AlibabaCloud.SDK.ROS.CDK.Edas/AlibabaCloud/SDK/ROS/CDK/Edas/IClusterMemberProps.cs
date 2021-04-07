using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Edas
{
    /// <summary>Properties for defining a `ALIYUN::EDAS::ClusterMember`.</summary>
    [JsiiInterface(nativeType: typeof(IClusterMemberProps), fullyQualifiedName: "@alicloud/ros-cdk-edas.ClusterMemberProps")]
    public interface IClusterMemberProps
    {
        /// <summary>Property clusterId: Cluster ID to import ECS instance.</summary>
        [JsiiProperty(name: "clusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ClusterId
        {
            get;
        }

        /// <summary>Property instanceIds: ECS instance ID list to import.</summary>
        [JsiiProperty(name: "instanceIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        object InstanceIds
        {
            get;
        }

        /// <summary>Property password: Password ECS hosts need to import (ECS settings can continue to use purchased).</summary>
        [JsiiProperty(name: "password", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Password
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
            [JsiiProperty(name: "clusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ClusterId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property instanceIds: ECS instance ID list to import.</summary>
            [JsiiProperty(name: "instanceIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            public object InstanceIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property password: Password ECS hosts need to import (ECS settings can continue to use purchased).</summary>
            [JsiiProperty(name: "password", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Password
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
