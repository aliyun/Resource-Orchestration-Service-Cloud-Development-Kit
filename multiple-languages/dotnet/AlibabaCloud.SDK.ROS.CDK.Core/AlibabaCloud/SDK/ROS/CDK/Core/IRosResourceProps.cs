using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    [JsiiInterface(nativeType: typeof(IRosResourceProps), fullyQualifiedName: "@alicloud/ros-cdk-core.RosResourceProps")]
    public interface IRosResourceProps
    {
        /// <summary>ROS template resource type (e.g. `ALIYUN::ECS::Instance`).</summary>
        [JsiiProperty(name: "type", typeJson: "{\"primitive\":\"string\"}")]
        string Type
        {
            get;
        }

        /// <summary>Resource properties.</summary>
        /// <remarks>
        /// <strong>Default</strong>: - No resource properties.
        /// </remarks>
        [JsiiProperty(name: "properties", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        System.Collections.Generic.IDictionary<string, object>? Properties
        {
            get
            {
                return null;
            }
        }

        [JsiiTypeProxy(nativeType: typeof(IRosResourceProps), fullyQualifiedName: "@alicloud/ros-cdk-core.RosResourceProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Core.IRosResourceProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>ROS template resource type (e.g. `ALIYUN::ECS::Instance`).</summary>
            [JsiiProperty(name: "type", typeJson: "{\"primitive\":\"string\"}")]
            public string Type
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Resource properties.</summary>
            /// <remarks>
            /// <strong>Default</strong>: - No resource properties.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "properties", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}", isOptional: true)]
            public System.Collections.Generic.IDictionary<string, object>? Properties
            {
                get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>?>();
            }
        }
    }
}
