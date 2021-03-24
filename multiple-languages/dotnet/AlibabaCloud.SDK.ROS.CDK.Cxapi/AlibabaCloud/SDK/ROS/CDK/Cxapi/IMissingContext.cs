using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cxapi
{
    /// <summary>(deprecated) Backwards compatibility for when 'MissingContext'&#xD; was defined here.</summary>
    /// <remarks>
    /// This is necessary because its used as an input in the stable
    /// 
    /// <strong>Stability</strong>: Deprecated
    /// 
    /// <strong>See</strong>: core.Stack.reportMissingContext
    /// 
    /// <strong>Alicloud</strong>: /ros-cdk-core library.
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IMissingContext), fullyQualifiedName: "@alicloud/ros-cdk-cxapi.MissingContext")]
    [System.Obsolete("moved to package 'ros-assembly-schema'")]
    public interface IMissingContext
    {
        /// <summary>(deprecated) The missing context key.</summary>
        /// <remarks>
        /// <strong>Stability</strong>: Deprecated
        /// </remarks>
        [JsiiProperty(name: "key", typeJson: "{\"primitive\":\"string\"}")]
        [System.Obsolete()]
        string Key
        {
            get;
        }

        /// <summary>(deprecated) A set of provider-specific options.</summary>
        /// <remarks>
        /// (This is the old untyped definition, which is necessary for backwards compatibility.
        /// See cxschema for a type definition.)
        /// 
        /// <strong>Stability</strong>: Deprecated
        /// </remarks>
        [JsiiProperty(name: "props", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}")]
        [System.Obsolete()]
        System.Collections.Generic.IDictionary<string, object> Props
        {
            get;
        }

        /// <summary>(deprecated) The provider from which we expect this context key to be obtained.</summary>
        /// <remarks>
        /// (This is the old untyped definition, which is necessary for backwards compatibility.
        /// See cxschema for a type definition.)
        /// 
        /// <strong>Stability</strong>: Deprecated
        /// </remarks>
        [JsiiProperty(name: "provider", typeJson: "{\"primitive\":\"string\"}")]
        [System.Obsolete()]
        string Provider
        {
            get;
        }

        /// <summary>(deprecated) Backwards compatibility for when 'MissingContext'&#xD; was defined here.</summary>
        /// <remarks>
        /// This is necessary because its used as an input in the stable
        /// 
        /// <strong>Stability</strong>: Deprecated
        /// 
        /// <strong>See</strong>: core.Stack.reportMissingContext
        /// 
        /// <strong>Alicloud</strong>: /ros-cdk-core library.
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IMissingContext), fullyQualifiedName: "@alicloud/ros-cdk-cxapi.MissingContext")]
        [System.Obsolete("moved to package 'ros-assembly-schema'")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cxapi.IMissingContext
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>(deprecated) The missing context key.</summary>
            /// <remarks>
            /// <strong>Stability</strong>: Deprecated
            /// </remarks>
            [JsiiProperty(name: "key", typeJson: "{\"primitive\":\"string\"}")]
            [System.Obsolete()]
            public string Key
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>(deprecated) A set of provider-specific options.</summary>
            /// <remarks>
            /// (This is the old untyped definition, which is necessary for backwards compatibility.
            /// See cxschema for a type definition.)
            /// 
            /// <strong>Stability</strong>: Deprecated
            /// </remarks>
            [JsiiProperty(name: "props", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}")]
            [System.Obsolete()]
            public System.Collections.Generic.IDictionary<string, object> Props
            {
                get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>>()!;
            }

            /// <summary>(deprecated) The provider from which we expect this context key to be obtained.</summary>
            /// <remarks>
            /// (This is the old untyped definition, which is necessary for backwards compatibility.
            /// See cxschema for a type definition.)
            /// 
            /// <strong>Stability</strong>: Deprecated
            /// </remarks>
            [JsiiProperty(name: "provider", typeJson: "{\"primitive\":\"string\"}")]
            [System.Obsolete()]
            public string Provider
            {
                get => GetInstanceProperty<string>()!;
            }
        }
    }
}
