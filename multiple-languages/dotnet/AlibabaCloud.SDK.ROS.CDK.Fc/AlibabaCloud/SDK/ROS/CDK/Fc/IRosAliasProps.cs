using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Fc
{
    /// <summary>Properties for defining a `ALIYUN::FC::Alias`.</summary>
    [JsiiInterface(nativeType: typeof(IRosAliasProps), fullyQualifiedName: "@alicloud/ros-cdk-fc.RosAliasProps")]
    public interface IRosAliasProps
    {
        /// <remarks>
        /// <strong>Property</strong>: aliasName: Alias name
        /// </remarks>
        [JsiiProperty(name: "aliasName", typeJson: "{\"primitive\":\"string\"}")]
        string AliasName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: serviceName: Service name
        /// </remarks>
        [JsiiProperty(name: "serviceName", typeJson: "{\"primitive\":\"string\"}")]
        string ServiceName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: additionalVersion: Additional version
        /// </remarks>
        [JsiiProperty(name: "additionalVersion", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? AdditionalVersion
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: additionalWeight: Traffic weight of additional version. From 0 to 100.
        /// </remarks>
        [JsiiProperty(name: "additionalWeight", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? AdditionalWeight
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: description: Version description
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
        /// <strong>Property</strong>: versionId: Version ID
        /// </remarks>
        [JsiiProperty(name: "versionId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? VersionId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::FC::Alias`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosAliasProps), fullyQualifiedName: "@alicloud/ros-cdk-fc.RosAliasProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Fc.IRosAliasProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: aliasName: Alias name
            /// </remarks>
            [JsiiProperty(name: "aliasName", typeJson: "{\"primitive\":\"string\"}")]
            public string AliasName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: serviceName: Service name
            /// </remarks>
            [JsiiProperty(name: "serviceName", typeJson: "{\"primitive\":\"string\"}")]
            public string ServiceName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: additionalVersion: Additional version
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "additionalVersion", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? AdditionalVersion
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: additionalWeight: Traffic weight of additional version. From 0 to 100.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "additionalWeight", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? AdditionalWeight
            {
                get => GetInstanceProperty<double?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: description: Version description
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Description
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: versionId: Version ID
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "versionId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? VersionId
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
