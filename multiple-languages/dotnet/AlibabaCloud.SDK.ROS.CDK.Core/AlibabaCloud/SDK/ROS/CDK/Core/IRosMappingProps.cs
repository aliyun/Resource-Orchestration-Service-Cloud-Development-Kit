using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    [JsiiInterface(nativeType: typeof(IRosMappingProps), fullyQualifiedName: "@alicloud/ros-cdk-core.RosMappingProps")]
    public interface IRosMappingProps
    {
        /// <summary>Mapping of key to a set of corresponding set of named values.</summary>
        /// <remarks>
        /// The key identifies a map of name-value pairs and must be unique within the mapping.
        /// 
        /// For example, if you want to set values based on a region, you can create a mapping
        /// that uses the region name as a key and contains the values you want to specify for
        /// each specific region.
        /// 
        /// <strong>Default</strong>: - No mapping.
        /// </remarks>
        [JsiiProperty(name: "mapping", typeJson: "{\"collection\":{\"elementtype\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}},\"kind\":\"map\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        System.Collections.Generic.IDictionary<string, System.Collections.Generic.IDictionary<string, object>>? Mapping
        {
            get
            {
                return null;
            }
        }

        [JsiiTypeProxy(nativeType: typeof(IRosMappingProps), fullyQualifiedName: "@alicloud/ros-cdk-core.RosMappingProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Core.IRosMappingProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Mapping of key to a set of corresponding set of named values.</summary>
            /// <remarks>
            /// The key identifies a map of name-value pairs and must be unique within the mapping.
            /// 
            /// For example, if you want to set values based on a region, you can create a mapping
            /// that uses the region name as a key and contains the values you want to specify for
            /// each specific region.
            /// 
            /// <strong>Default</strong>: - No mapping.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "mapping", typeJson: "{\"collection\":{\"elementtype\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}},\"kind\":\"map\"}}", isOptional: true)]
            public System.Collections.Generic.IDictionary<string, System.Collections.Generic.IDictionary<string, object>>? Mapping
            {
                get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, System.Collections.Generic.IDictionary<string, object>>?>();
            }
        }
    }
}
