using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Fc
{
    /// <summary>Properties for defining a `ALIYUN::FC::Alias`.</summary>
    [JsiiInterface(nativeType: typeof(IAliasProps), fullyQualifiedName: "@alicloud/ros-cdk-fc.AliasProps")]
    public interface IAliasProps
    {
        /// <summary>Property aliasName: Alias name.</summary>
        [JsiiProperty(name: "aliasName", typeJson: "{\"primitive\":\"string\"}")]
        string AliasName
        {
            get;
        }

        /// <summary>Property serviceName: Service name.</summary>
        [JsiiProperty(name: "serviceName", typeJson: "{\"primitive\":\"string\"}")]
        string ServiceName
        {
            get;
        }

        /// <summary>Property additionalVersion: Additional version.</summary>
        [JsiiProperty(name: "additionalVersion", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? AdditionalVersion
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property additionalWeight: Traffic weight of additional version.</summary>
        /// <remarks>
        /// From 0 to 100.
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

        /// <summary>Property description: Version description.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property versionId: Version ID.</summary>
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
        [JsiiTypeProxy(nativeType: typeof(IAliasProps), fullyQualifiedName: "@alicloud/ros-cdk-fc.AliasProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Fc.IAliasProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property aliasName: Alias name.</summary>
            [JsiiProperty(name: "aliasName", typeJson: "{\"primitive\":\"string\"}")]
            public string AliasName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property serviceName: Service name.</summary>
            [JsiiProperty(name: "serviceName", typeJson: "{\"primitive\":\"string\"}")]
            public string ServiceName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property additionalVersion: Additional version.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "additionalVersion", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? AdditionalVersion
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property additionalWeight: Traffic weight of additional version.</summary>
            /// <remarks>
            /// From 0 to 100.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "additionalWeight", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? AdditionalWeight
            {
                get => GetInstanceProperty<double?>();
            }

            /// <summary>Property description: Version description.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Description
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property versionId: Version ID.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "versionId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? VersionId
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
