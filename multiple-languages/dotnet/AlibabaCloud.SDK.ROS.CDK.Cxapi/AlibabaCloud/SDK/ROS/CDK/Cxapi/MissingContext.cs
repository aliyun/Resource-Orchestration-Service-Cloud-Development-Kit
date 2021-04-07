using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cxapi
{
    #pragma warning disable CS8618

    /// <summary>(deprecated) Backwards compatibility for when 'MissingContext' was defined here.</summary>
    /// <remarks>
    /// This is necessary because its used as an input in the stable
    ///
    /// <strong>Stability</strong>: Deprecated
    ///
    /// <strong>See</strong>: core.Stack.reportMissingContext
    ///
    /// <strong>Alicloud</strong>: /ros-cdk-core library.
    /// </remarks>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-cxapi.MissingContext")]
    public class MissingContext : AlibabaCloud.SDK.ROS.CDK.Cxapi.IMissingContext
    {
        /// <summary>(deprecated) The missing context key.</summary>
        /// <remarks>
        /// <strong>Stability</strong>: Deprecated
        /// </remarks>
        [JsiiProperty(name: "key", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        [System.Obsolete()]
        public string Key
        {
            get;
            set;
        }

        /// <summary>(deprecated) A set of provider-specific options.</summary>
        /// <remarks>
        /// (This is the old untyped definition, which is necessary for backwards compatibility.
        /// See cxschema for a type definition.)
        ///
        /// <strong>Stability</strong>: Deprecated
        /// </remarks>
        [JsiiProperty(name: "props", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}", isOverride: true)]
        [System.Obsolete()]
        public System.Collections.Generic.IDictionary<string, object> Props
        {
            get;
            set;
        }

        /// <summary>(deprecated) The provider from which we expect this context key to be obtained.</summary>
        /// <remarks>
        /// (This is the old untyped definition, which is necessary for backwards compatibility.
        /// See cxschema for a type definition.)
        ///
        /// <strong>Stability</strong>: Deprecated
        /// </remarks>
        [JsiiProperty(name: "provider", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        [System.Obsolete()]
        public string Provider
        {
            get;
            set;
        }
    }
}
